import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AsistenciasService } from './asistencias.service';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';
import { buscarAsistenciasAlumnoDto } from './dto/buscarAsistenciasAlumno.dto';
import { bucarAsistenciasProfesorDto } from './dto/buscarAsistenciasProfesor.dto';
import { Aula } from 'src/aula/entities/aula.entity';
import { Profesor } from 'src/profesor/entities/profesor.entity';
import { reporteAsistenciasDto } from './dto/reporteAsistencias.dto';

@Controller('asistencias')
export class AsistenciasController {
  constructor(private readonly asistenciasService: AsistenciasService) {}

  @Post('create')
  create(@Body() createAsistenciaDto: CreateAsistenciaDto) {
    return this.asistenciasService.create(createAsistenciaDto);
  }

  @Get()
  findAll() {
    return this.asistenciasService.findAll();
  }

  @Get('alumno')
  findAlumno(@Body() asistenciaAlumnoDto:buscarAsistenciasAlumnoDto) {
    return this.asistenciasService.findAsistenciasAlumno(asistenciaAlumnoDto);
  }

  @Get('profesor')
  findProfesor(@Body() asistenciaProferorDto:bucarAsistenciasProfesorDto) {
    return this.asistenciasService.findAsistenciasProfesor(asistenciaProferorDto);
  }

  @Get('byaula')
  findbyAula(@Body() fecha:string, aula:Aula) {
    return this.asistenciasService.findByAula(fecha,aula);
  }

  /*@Get('byprofesor')
  findbyProfesor(@Body() fecha:string, profesor:Profesor) {
    return this.asistenciasService.findByProfesor(fecha,profesor);
  }*/

  /*@Get('byhora')
  findbyHora(@Body() fecha:string, hora:string) {
    return this.asistenciasService.findByHora(fecha,hora);
  }*/

  /*@Get('bydia')
  findbyDia(@Body() fecha:string) {
    return this.asistenciasService.findByDia(fecha);
  }*/

  @Get('reporte')
  reporteAsistencia(@Body() reporteAsistencias:reporteAsistenciasDto){
    return this.asistenciasService.obtenerTodasAsistencias(reporteAsistencias)
  }

  @Patch('alumno')
  updateAlumno(@Body() updateAsistenciaDto: UpdateAsistenciaDto) {
    return this.asistenciasService.updateAsistenciaAlumno(updateAsistenciaDto);
  }

  @Patch('profesor')
  updateProfesor(@Body() updateAsistenciaDto: UpdateAsistenciaDto) {
    return this.asistenciasService.updateAsistenciaProfesor(updateAsistenciaDto);
  }

  @Patch('checador')
  updateChecador(@Body() updateAsistenciaDto: UpdateAsistenciaDto) {
    return this.asistenciasService.updateAsistenciaChecador(updateAsistenciaDto);
  }
}
