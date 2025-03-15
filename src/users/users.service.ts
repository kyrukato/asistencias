import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
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

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
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
