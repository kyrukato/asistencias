import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateMateriaXgrupoDto } from './dto/create-materia-xgrupo.dto';
import { UpdateMateriaXgrupoDto } from './dto/update-materia-xgrupo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MateriaXgrupo } from './entities/materia-xgrupo.entity';
import { DataSource, LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';
import { MateriaXgrupoModule } from './materia-xgrupo.module';
import { AsistenciasService } from 'src/asistencias/asistencias.service';
import { promises } from 'dns';
import { Profesor } from 'src/profesor/entities/profesor.entity';
import { Grupo } from 'src/grupo/entities/grupo.entity';
import { Alumno } from 'src/alumno/entities/alumno.entity';
import { Materia } from 'src/materia/entities/materia.entity';
import { updateAlumnoMXGDto } from './dto/updateAlumnoMXG.dto';
import { updateHorarioDto } from './dto/updateHorario.dto';
import { Aula } from 'src/aula/entities/aula.entity';
import { buscarHoraDto } from './dto/buscarHora.dto';

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
    try {
      const profe = await this.materiaxgrupoRepository.find({
        where:{
          profesor//:{noEmpleado:Number(profesor)}
        },
        relations:['aula', 'profesor', 'alumno', 'materia','grupo']
      })
      if(profe){
        return profe;
      }else{
        return `El profesor con No de empleado #${profesor} no fue encontrado`;
      }
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async findByGrupo(grupo:Grupo){
    try {
      const gpo = await this.materiaxgrupoRepository.find({
        where:{
          grupo
        },
        relations:['aula', 'profesor', 'alumno', 'materia','grupo']
      })
      if(gpo){
        return gpo;
      }
      else{
        return `El grupo #${grupo} no fue encontrado en la Base de datos`;
      }
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async findByAlumno(alumno:Alumno){
    const estudiante = await this.materiaxgrupoRepository.find({
      where:{
        alumno
      },
      relations:['aula', 'profesor', 'alumno', 'materia','grupo']
    })
    if(estudiante){
      return estudiante;
    } else{
      return `El estudiante con el No de control #${alumno} no fue encontrado en la Base de Datos`;
    }
  }

  async findByAula(aula:Aula){
    const estudiante = await this.materiaxgrupoRepository.find({
      where:{
        aula
      },
      relations:['aula', 'profesor', 'alumno', 'materia','grupo']
    })
    if(estudiante){
      return estudiante;
    } else{
      return `El estudiante con el No de control #${aula} no fue encontrado en la Base de Datos`;
    }
  }

  async findByHora(data:buscarHoraDto){
    const estudiante = await this.materiaxgrupoRepository.find({
      where:{
        /*horaInicio: LessThanOrEqual(data.hora),
        horaFin: MoreThanOrEqual(data.hora),*/
        dia:data.dia
      },
      relations:['aula', 'profesor', 'alumno', 'materia','grupo']
    })
    if(estudiante){
      return estudiante;
    } else{
      return `No se encuentran materias en la hora seleccionada`;
    }
  }

  update(id: number, updateMateriaXgrupoDto: UpdateMateriaXgrupoDto) {
    return `This action updates a #${id} materiaXgrupo`;
  }

  async updateProfesor(updateMXG:UpdateMateriaXgrupoDto){
    try {
      const {grupo,materia,profesor} = updateMXG;
      
      const materias = this.materiaxgrupoRepository.find({
        where:{
          materia:{id:Number(materia)},
          grupo:{id:Number(grupo)}
        },
        relations:['aula', 'profesor', 'alumno', 'materia','grupo']
      })
      const nvoprofesor = (await materias).map(m => {
        return this.materiaxgrupoRepository.preload({
          id:m.id,
          profesor
        })
      })
      return this.materiaxgrupoRepository.save(await Promise.all(nvoprofesor));
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async updateHorario(updateHorario:updateHorarioDto){
    try {
      const {grupo,materia,...toUpdate} = updateHorario;
      
      const materias = this.materiaxgrupoRepository.find({
        where:{
          materia:{id:Number(materia)},
          grupo:{id:Number(grupo)}
        },
        relations:['aula', 'profesor', 'alumno', 'materia','grupo']
      })
      const nvohorario = (await materias).map(m => {
        return this.materiaxgrupoRepository.preload({
          id:m.id,
          ...toUpdate
        })
      })
      return this.materiaxgrupoRepository.save(await Promise.all(nvohorario));
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async updateAlumno(updateAlumno:updateAlumnoMXGDto){
    try {
      const materias = this.materiaxgrupoRepository.find({
        where:{
          grupo:updateAlumno.grupo,
        },
        relations:['aula', 'profesor', 'alumno', 'materia','grupo']
      })
      const nvoprofesor = (await materias).map(m => {
        return this.materiaxgrupoRepository.preload({
          id:m.id,
          alumno:updateAlumno.alumno
        })
      })
      return this.materiaxgrupoRepository.save(await Promise.all(nvoprofesor));
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async remove(grupo:Grupo) {
    try {
      const update = {profesor:null,alumno:null,horaInicio:null,horaFin:null,aula:null}
      const gpoVacio = await this.materiaxgrupoRepository.update(
        {grupo},
        update
      );
      return gpoVacio;
    } catch (error) {
      this.handleDBErrors(error)
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