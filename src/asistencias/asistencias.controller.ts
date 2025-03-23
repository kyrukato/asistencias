import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AsistenciasService } from './asistencias.service';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';

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

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.asistenciasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAsistenciaDto: UpdateAsistenciaDto) {
    return this.asistenciasService.update(id, updateAsistenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.asistenciasService.remove(id);
  }

  @Patch(':id/profesor')
  registrarAsistenciaProfesor(@Param('id') id: number, @Body('asistio') asistio: boolean) {
    return this.asistenciasService.registrarAsistenciaProfesor(id, asistio);
  }

  @Patch(':id/alumno')
  registrarAsistenciaAlumno(@Param('id') id: number, @Body('asistio') asistio: boolean) {
    return this.asistenciasService.registrarAsistenciaAlumno(id, asistio);
  }

  @Patch(':id/checador')
  registrarAsistenciaChecador(@Param('id') id: number, @Body('asistio') asistio: boolean) {
    return this.asistenciasService.registrarAsistenciaChecador(id, asistio);
  }

  @Get('/fecha')
  buscarPorFecha(@Query('fecha') fecha: string) {
    return this.asistenciasService.buscarPorFecha(fecha);
  }

  @Get('/aula/:aulaId')
  buscarPorAula(@Param('aulaId') aulaId: number) {
    return this.asistenciasService.buscarPorAula(aulaId);
  }

  @Get('/discrepancias')
  obtenerAsistenciasConDiscrepancias() {
    return this.asistenciasService.obtenerAsistenciasConDiscrepancias();
  }
}
