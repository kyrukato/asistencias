import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MateriaXgrupoService } from './materia-xgrupo.service';
import { CreateMateriaXgrupoDto } from './dto/create-materia-xgrupo.dto';
import { UpdateMateriaXgrupoDto } from './dto/update-materia-xgrupo.dto';
import { Profesor } from 'src/profesor/entities/profesor.entity';
import { Alumno } from 'src/alumno/entities/alumno.entity';
import { Grupo } from 'src/grupo/entities/grupo.entity';
import { Materia } from 'src/materia/entities/materia.entity';
import { updateAlumnoMXGDto } from './dto/updateAlumnoMXG.dto';
import { updateHorarioDto } from './dto/updateHorario.dto';
import { Aula } from 'src/aula/entities/aula.entity';
import { buscarHoraDto } from './dto/buscarHora.dto';

@Controller('materiaxgrupo')
export class MateriaXgrupoController {
  constructor(private readonly materiaXgrupoService: MateriaXgrupoService) {}

  @Post('create')
  create(@Body() createMateriaXgrupoDto: CreateMateriaXgrupoDto) {
    return this.materiaXgrupoService.create(createMateriaXgrupoDto);
  }

  @Get()
  findAll() {
    return this.materiaXgrupoService.findAll();
  }

  @Get('grupo')
  ByGrupo(@Body('grupo') grupo:Grupo){
    return this.materiaXgrupoService.findByGrupo(grupo);
  }

  @Get('profesor')
  ByProfesor(@Body('profesor') profesor:Profesor){
    return this.materiaXgrupoService.findByProfesor(profesor);
  }

  @Get('alumno')
  ByAlumno(@Body('alumno') alumno:Alumno){
    return this.materiaXgrupoService.findByAlumno(alumno)
  }

  @Get('hora')
  ByHora(@Body('hora') data:buscarHoraDto){
    return this.materiaXgrupoService.findByHora(data);
  }

  @Get('aula')
  ByAula(@Body('aula') aula:Aula){
    return this.materiaXgrupoService.findByAula(aula)
  }

  @Patch('nvoprofesor')
  update(@Body() updateMXG:UpdateMateriaXgrupoDto) {
    return this.materiaXgrupoService.updateProfesor(updateMXG);
  }

  @Patch('nvoAlumno')
  updateAlumno(@Body() updateAlumno:updateAlumnoMXGDto) {
    return this.materiaXgrupoService.updateAlumno(updateAlumno);
  }

  @Patch('horario')
  updateHorario(@Body() updateHorario:updateHorarioDto){
    return this.materiaXgrupoService.updateHorario(updateHorario);
  }

  @Delete('grupo')
  remove(@Body('grupo') grupo: Grupo) {
    return this.materiaXgrupoService.remove(grupo);
  }
}
