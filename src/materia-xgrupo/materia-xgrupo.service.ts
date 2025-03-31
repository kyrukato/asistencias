import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateMateriaXgrupoDto } from './dto/create-materia-xgrupo.dto';
import { UpdateMateriaXgrupoDto } from './dto/update-materia-xgrupo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MateriaXgrupo } from './entities/materia-xgrupo.entity';
import { DataSource, Repository } from 'typeorm';
import { MateriaXgrupoModule } from './materia-xgrupo.module';
import { AsistenciasService } from 'src/asistencias/asistencias.service';
import { promises } from 'dns';
import { Profesor } from 'src/profesor/entities/profesor.entity';
import { Grupo } from 'src/grupo/entities/grupo.entity';
import { Alumno } from 'src/alumno/entities/alumno.entity';

@Injectable()
export class MateriaXgrupoService {
  constructor(
    private readonly dataSource:DataSource,
    @InjectRepository(MateriaXgrupo)
    private readonly materiaxgrupoRepository:Repository<MateriaXgrupo>,
    private readonly asistenciaService:AsistenciasService,
  ){}
  async create(createMateriaXgrupoDto: CreateMateriaXgrupoDto) {
    try {
      const {fecha_Fin,fecha_Inicio, materia,grupo,semestre,profesor,alumno,aula,dia,horaFin,horaInicio } = createMateriaXgrupoDto;
      const materiaxgrupo = this.materiaxgrupoRepository.create({
        materia,
        grupo,
        semestre,
        profesor,
        alumno,
        aula,
        dia,
        horaFin,
        horaInicio,
      });
      await this.materiaxgrupoRepository.save(materiaxgrupo);
      const hora_Inicio = horaInicio;
      const hora_Fin = horaFin
      this.asistenciaService.create({alumno,profesor,hora_Fin,hora_Inicio,fecha_Fin,fecha_Inicio,materia,aula,dia,materiaxgrupo})
      return materiaxgrupo;
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  findAll() {
    return `This action returns all materiaXgrupo`;
  }

  async findOne(id: number) {
    return await this.materiaxgrupoRepository.find({
      where: {id},
      relations:['aula', 'profesor', 'alumno', 'materia','grupo']
    })
  }

  async findByProfesor(profesor:Profesor){
    const profe = await this.materiaxgrupoRepository.find({
      where:{
        profesor
      },
      relations:['aula', 'profesor', 'alumno', 'materia','grupo','asistencias']
    })
    if(profe){
      return profe;
    }else{
      return `El profesor con No de empleado #${profesor} no fue encontrado`;
    }
  }

  async findByGrupo(grupo:Grupo){
    const gpo = await this.materiaxgrupoRepository.find({
      where:{grupo},
      relations:['aula', 'profesor', 'alumno', 'materia','grupo','asistencias']
    })
    if(grupo){
      return grupo;
    }
    else{
      return `El grupo #${grupo} no fue encontrado en la Base de datos`;
    }
  }

  async findByAlumno(alumno:Alumno){
    const estudiante = await this.materiaxgrupoRepository.find({
      where:{alumno},
      relations:['aula', 'profesor', 'alumno', 'materia','grupo','asistencias']
    })
    if(estudiante){
      return estudiante;
    } else{
      return `El estudiante con el No de control #${alumno} no fue encontrado en la Base de Datos`;
    }
  }

  update(id: number, updateMateriaXgrupoDto: UpdateMateriaXgrupoDto) {
    return `This action updates a #${id} materiaXgrupo`;
  }

  async updateProfesor(id:number,nuevoProfesor:Profesor){
    const profe = await this.findOne(id);
    if(!profe){
      throw new NotFoundException('Profesor no encontrado');
    }
    const profeUpdate = await this.materiaxgrupoRepository.preload({
      id,
      profesor:nuevoProfesor,
    })
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(profeUpdate);
      await queryRunner.commitTransaction();
      await queryRunner.release();
      return 'Base de Datos actualizada con éxito';
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      this.handleDBErrors(error);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} materiaXgrupo`;
  }

  private handleDBErrors(error:any){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Please check serverlogs');
  }
}