import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Asistencia } from './entities/asistencia.entity';
import { Between, DataSource, LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';
import { buscarAsistenciasAlumnoDto } from './dto/buscarAsistenciasAlumno.dto';
import { bucarAsistenciasProfesorDto } from './dto/buscarAsistenciasProfesor.dto';
import { Aula } from 'src/aula/entities/aula.entity';
import { Profesor } from 'src/profesor/entities/profesor.entity';

@Injectable()
export class AsistenciasService {
  constructor(
    private readonly dataSource:DataSource,
    @InjectRepository(Asistencia)
    private readonly asistenciaRepository:Repository<Asistencia>,
  ){}
  async create(createAsistenciaDto: CreateAsistenciaDto) {
    try {
      const {fecha_Fin, fecha_Inicio,dia, ...data } = createAsistenciaDto;
      const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
      const diaRegistrado = diasSemana.indexOf(dia);
      let fecha = new Date(fecha_Inicio);
      const fechaFinal = new Date(fecha_Fin);
      while(fecha <= fechaFinal){
        if(fecha.getDay() === diaRegistrado){
          const asistencia = this.asistenciaRepository.create({
            fecha: fecha.toString().split('T')[0],
            dia,
            ...data
          });
          await this.asistenciaRepository.save(asistencia);
          fecha.setDate(fecha.getDate() +1);
        }
      }
      return "Registro exitoso";
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async findAll() {
    return await this.asistenciaRepository.find({
      relations: ['materia', 'aula']
    });
  }

  async findOne(id: number) {
    const asistencia = await this.asistenciaRepository.findOne({ 
      where: { id },
      relations: ['materia', 'aula', 'alumno', 'profesor']
    });
    
    if (!asistencia)
      throw new NotFoundException(`Asistencia con ID ${id} no encontrada`);
      
    return asistencia;
  }

  async findAsistenciasAlumno(asistenciaAlumno:buscarAsistenciasAlumnoDto){
    const {fecha_Inicio, fecha_Fin, alumno} = asistenciaAlumno;
    if(fecha_Fin){
      return await this.asistenciaRepository.find({
        where: {
          fecha: Between(fecha_Inicio,fecha_Fin),
          alumno: alumno
        },
        relations:['alumno', 'profesor', 'aula', 'materia'],
      })
    }
    else{
      return await this.asistenciaRepository.find({
        where: {
          fecha: fecha_Inicio,
          alumno: alumno
        },
        relations:['alumno', 'profesor', 'aula', 'materia'],
      })
    }
  }

  async findAsistenciasProfesor(asistenciaProfesor:bucarAsistenciasProfesorDto){
    const {fecha_Inicio, fecha_Fin, profesor} = asistenciaProfesor;
    if(fecha_Fin){
      return await this.asistenciaRepository.find({
        where: {
          fecha: Between(fecha_Inicio,fecha_Fin),
          profesor: profesor
        },
        relations:['alumno', 'profesor', 'aula', 'materia'],
      })
    }
    else{
      return await this.asistenciaRepository.find({
        where: {
          fecha: fecha_Inicio,
          profesor: profesor
        },
        relations:['alumno', 'profesor', 'aula', 'materia'],
      })
    }
  }

  async findByAula(fecha:string,aula:Aula){
    try{
      return await this.asistenciaRepository.find({
        where:{
          fecha,
          aula
        },
        relations:['alumno', 'profesor', 'aula', 'materia'],
      })
    }catch(error){
      this.handleDBErrors(error)
    }
  }

  async findByProfesor(fecha:string,profesor:Profesor){
    try{
      return await this.asistenciaRepository.find({
        where:{
          fecha,
          profesor
        },
        relations:['alumno', 'profesor', 'aula', 'materia'],
      })
    }catch(error){
      this.handleDBErrors(error)
    }
  }

  async findByHora(fecha:string,hora:string){
    try{
      return await this.asistenciaRepository.find({
        where:{
          fecha,
          hora_Inicio:LessThanOrEqual(hora),
          hora_Fin: MoreThanOrEqual(hora)
        },
        relations:['alumno', 'profesor', 'aula', 'materia'],
      })
    }catch(error){
      this.handleDBErrors(error)
    }
  }

  async findByDia(fecha:string){
    try{
      return await this.asistenciaRepository.find({
        where:{
          fecha,
        },
        relations:['alumno', 'profesor', 'aula', 'materia'],
      })
    }catch(error){
      this.handleDBErrors(error)
    }
  }

  async updateAsistenciaAlumno(updateAsistenciaDto: UpdateAsistenciaDto) {
    try {
      const {id, asistencia_Alumno, asistencia_Checador, asistencia_Profesor} = updateAsistenciaDto;
      if((asistencia_Alumno && (asistencia_Profesor || asistencia_Checador))){
        throw new NotFoundException('Error al registrar actualización');
      }
      const asistencia = this.findOne(id);
      if(!asistencia){
        throw new NotFoundException('Registro no encontrado');
      }
      const updateAsistencia = await this.asistenciaRepository.preload({
        id: id,
        asistencia_Alumno:asistencia_Alumno
      })
      const queryRunner = this.dataSource.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction();
      try{
        await queryRunner.manager.save(updateAsistencia);
        await queryRunner.commitTransaction();
        await queryRunner.release();
        return 'Asistencia registrada exitosamente'
      } catch (error){
        await queryRunner.rollbackTransaction();
        await queryRunner.release();
      }
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async updateAsistenciaProfesor(updateAsistenciaDto: UpdateAsistenciaDto) {
    try {
      const {id, asistencia_Alumno, asistencia_Checador, asistencia_Profesor} = updateAsistenciaDto;
      if((asistencia_Profesor && (asistencia_Alumno || asistencia_Checador))){
        throw new NotFoundException('Error al registrar actualización');
      }
      const asistencia = this.findOne(id);
      if(!asistencia){
        throw new NotFoundException('Registro no encontrado');
      }
      const updateAsistencia = await this.asistenciaRepository.preload({
        id: id,
        asistencia_Profesor:asistencia_Profesor
      })
      const queryRunner = this.dataSource.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction();
      try{
        await queryRunner.manager.save(updateAsistencia);
        await queryRunner.commitTransaction();
        await queryRunner.release();
        return 'Asistencia registrada exitosamente'
      } catch (error){
        await queryRunner.rollbackTransaction();
        await queryRunner.release();
      }
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async updateAsistenciaChecador(updateAsistenciaDto: UpdateAsistenciaDto) {
    try {
      const {id, asistencia_Alumno, asistencia_Checador, asistencia_Profesor} = updateAsistenciaDto;
      if((asistencia_Checador && (asistencia_Profesor || asistencia_Alumno))){
        throw new NotFoundException('Error al registrar actualización');
      }
      const asistencia = this.findOne(id);
      if(!asistencia){
        throw new NotFoundException('Registro no encontrado');
      }
      const updateAsistencia = await this.asistenciaRepository.preload({
        id: id,
        asistencia_Checador:asistencia_Checador
      })
      const queryRunner = this.dataSource.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction();
      try{
        await queryRunner.manager.save(updateAsistencia);
        await queryRunner.commitTransaction();
        await queryRunner.release();
        return 'Asistencia registrada exitosamente'
      } catch (error){
        await queryRunner.rollbackTransaction();
        await queryRunner.release();
      }
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async obtenerTodasAsistencias(fecha_Inicio:string,fecha_Fin:string,profesor:Profesor){
    try {
      const asistencia = await this.asistenciaRepository.find({
        where: {
          fecha: Between(fecha_Inicio,fecha_Fin),
          profesor
        },
        relations:['alumno', 'profesor', 'aula', 'materia'],
      })
      let asistenciaAlumno = 0;
      let faltaAlumno = 0;
      let AlumnoNull = 0;
      let asistenciaProfesor = 0;
      let faltaProfesor = 0;
      let ProfesorNull = 0;
      let asistenciaChecador = 0;
      let faltaChecador = 0;
      let ChecadorNull = 0;
      asistencia.forEach(element => {
        if(element.asistencia_Alumno === true){
          asistenciaAlumno ++;
        }
        else if(element.asistencia_Alumno === false){
          faltaAlumno ++;
        }
        else if(element.asistencia_Alumno === null){
          AlumnoNull ++;
        }
        if(element.asistencia_Profesor === true){
          asistenciaProfesor ++;
        }
        else if(element.asistencia_Profesor === false){
          faltaProfesor ++;
        }
        else if(element.asistencia_Profesor === null){
          ProfesorNull ++;
        }
        if(element.asistencia_Checador === true){
          asistenciaChecador ++;
        }
        else if(element.asistencia_Checador === false){
          faltaChecador ++;
        }
        else if(element.asistencia_Checador === null){
          ChecadorNull ++;
        }
      });
      return{
        alumno: {registradas:asistenciaAlumno,faltas:faltaAlumno,sinRegistro:AlumnoNull},
        profesor: {registradas:asistenciaProfesor,faltas:faltaProfesor,sinRegistro:ProfesorNull},
        checador: {registradas:asistenciaChecador,faltas:faltaChecador,sinRegistro:ChecadorNull}
      }
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  private handleDBErrors(error:any){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Please check serverlogs');
  }
}
