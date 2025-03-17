import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from 'src/auth/interface/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { ValidRoles } from 'src/auth/interface/valid-roles';
import { AlumnoService } from 'src/alumno/alumno.service';
import { Alumno } from 'src/alumno/entities/alumno.entity';
import { ProfesorService } from 'src/profesor/profesor.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class UsersService {

  constructor(
    private readonly dataSource:DataSource,
    @InjectRepository(User)
    private readonly userRepository:Repository<User>,
    private readonly alumnoService:AlumnoService,
    private readonly profesoresService:ProfesorService,
    private readonly jwtService:JwtService,
  ){}

  async create(createUserDto: CreateUserDto) {
    try{
      const {password, carrera ,NoControl, NoEmpleado, materias, nombre, apellidoMaterno, apellidoPaterno, ...userData} = createUserDto;
      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync(password,10)
      });
      await this.userRepository.save(user);
      if(createUserDto.rol === ValidRoles.alumno){
        this.alumnoService.create({user, nombre, apellidoMaterno, apellidoPaterno, NoControl,carrera})
      }
      else if(createUserDto.rol === ValidRoles.profesor){
        this.profesoresService.create({user,nombre,apellidoMaterno,apellidoPaterno,NoEmpleado,materias});
      }
      const token = this.getJWToken({id:user.id});
      return{
        id: user.id,
        nombre: nombre,
        apellidoMaterno: apellidoMaterno,
        apellidoPaterno: apellidoPaterno,
        token: token,
      }
    }
    catch (error){
      this.handleDBErrors(error);
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: string) {
    const user = await this.userRepository.find({
      where:{
        id:id
      },
      relations: ['alumno','profesor',]
    })
    if(user){
      if(user[0].rol === ValidRoles.alumno){
        const alumno = this.alumnoService.findOne(id);
        return {
          id:id,
          user:user[0].user,
          rol:user[0].rol,
          nombre:user[0].alumno[0].nombre,
          apellidoPaterno:user[0].alumno[0].apellidoPaterno,
          apellidoMaterno:user[0].alumno[0].apellidoMaterno,
          noControl:user[0].alumno[0].NoControl,
          carrera:(await alumno).carrera.nombre
        };
      }
      else if(user[0].rol === ValidRoles.profesor){
        
      }
    } else {
      return 'Usuario no encontrado';
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const usuario = this.findOne(id);
    if(!usuario){
      throw new NotFoundException('El usuario no existe');
    }
    const userUpdate = await this.userRepository.preload({
      id: id,
      password: updateUserDto.password
    })
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(userUpdate);
      await queryRunner.commitTransaction();
      await queryRunner.release();
      return 'Contraseña actualizada exitosamente';
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      this.handleDBErrors(error);
    }
  }

  async remove(id: string) {
    const usuario = this.findOne(id);
    if(!usuario){
      throw new NotFoundException('El usuario no existe');
    }
    const userUpdate = await this.userRepository.preload({
      id: id,
      status: false
    })
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(userUpdate);
      await queryRunner.commitTransaction();
      await queryRunner.release();
      return 'Usuario eliminado correctamente';
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      this.handleDBErrors(error);
    }
  }

  async login(loginUserDto:LoginDto){
    try {
      const {password, user} = loginUserDto;
      const usr = await this.userRepository.findOne({
        where: { user },
        select: { user: true, password: true, id:true},
      });
      if(!usr){
        throw new UnauthorizedException('Credentials are not valid (email)');
      }
      if(!bcrypt.compareSync(password, usr.password)){
        throw new UnauthorizedException('Credentials are not valid (password)');
      }
      delete usr.password;
      return {
        ...usr,
        token: this.getJWToken({id: usr.id}), //Crear el JWT
      };
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  //Crear el JWT
  private getJWToken(payload:JwtPayload){
    const token = this.jwtService.sign(payload);
    return token;
  }

  private handleDBErrors(error:any){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Please check serverlogs');
  }
}
