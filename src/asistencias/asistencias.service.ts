import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Asistencia } from './entities/asistencia.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AsistenciasService {
  constructor(
    @InjectRepository(Asistencia)
    private readonly asistenciaRepository:Repository<Asistencia>,
  ){}
  async create(createAsistenciaDto: CreateAsistenciaDto) {
    try {
      const asistencia = this.asistenciaRepository.create(createAsistenciaDto);
      await this.asistenciaRepository.save(asistencia);
      return asistencia;
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
      relations: ['materia', 'aula']
    });
    
    if (!asistencia)
      throw new NotFoundException(`Asistencia con ID ${id} no encontrada`);
      
    return asistencia;
  }

  async update(id: number, updateAsistenciaDto: UpdateAsistenciaDto) {
    try {
      const asistencia = await this.findOne(id);
      
      const updatedAsistencia = this.asistenciaRepository.merge(
        asistencia,
        updateAsistenciaDto
      );
      
      return await this.asistenciaRepository.save(updatedAsistencia);
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async remove(id: number) {
    const asistencia = await this.findOne(id);
    await this.asistenciaRepository.remove(asistencia);
    return {
      message: `Asistencia con ID ${id} eliminada correctamente`
    };
  }

  async registrarAsistenciaProfesor(id: number, asistio: boolean) {
    const asistencia = await this.findOne(id);
    asistencia.asistencia_Profesor = asistio;
    return await this.asistenciaRepository.save(asistencia);
  }

  async registrarAsistenciaAlumno(id: number, asistio: boolean) {
    const asistencia = await this.findOne(id);
    asistencia.asistencia_Alumno = asistio;
    return await this.asistenciaRepository.save(asistencia);
  }
  
  async registrarAsistenciaChecador(id: number, asistio: boolean) {
    const asistencia = await this.findOne(id);
    asistencia.asistencia_Checador = asistio;
    return await this.asistenciaRepository.save(asistencia);
  }

  async buscarPorFecha(fecha: string) {
    return await this.asistenciaRepository.find({
      where: { fecha },
      relations: ['materia', 'aula']
    });
  }

  
  
  async buscarPorAula(aulaId: number) {
    return await this.asistenciaRepository.find({
      where: { aula: { id: aulaId } },
      relations: ['materia', 'aula']
    });
  }

  async obtenerAsistenciasConDiscrepancias() {
    const asistencias = await this.asistenciaRepository.find({
      relations: ['materia', 'aula']
    });
    
    return asistencias.filter(asistencia => {
      // Verificar si hay al menos dos registros diferentes y no nulos
      const registros = [
        asistencia.asistencia_Profesor,
        asistencia.asistencia_Alumno,
        asistencia.asistencia_Checador
      ].filter(reg => reg !== null);
      
      // Si hay al menos 2 registros y no son todos iguales
      if (registros.length >= 2) {
        return !registros.every(reg => reg === registros[0]);
      }
      return false;
    });
  }

  private handleDBErrors(error:any){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Please check serverlogs');
  }
}
