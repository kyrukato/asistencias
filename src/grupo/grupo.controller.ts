import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GrupoService } from './grupo.service';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';

@Controller('grupo')
export class GrupoController {
  constructor(private readonly grupoService: GrupoService) {}

  @Post('create')
  create(@Body() createGrupoDto: CreateGrupoDto) {
    return this.grupoService.create(createGrupoDto);
  }

  @Get()
  findAll() {
    return this.grupoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.grupoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGrupoDto: UpdateGrupoDto) {
    return this.grupoService.update(id, updateGrupoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.grupoService.remove(id);
  }

  @Get('/carrera/:carreraId')
  findByCarrera(@Param('carreraId') carreraId: string) {
    return this.grupoService.findByCarrera(carreraId);
  } 

  @Get('/periodo/:periodoId')
  findByPeriodo(@Param('periodoId') periodoId: string) {
    return this.grupoService.findByPeriodo(periodoId);
  }

  @Get('/profesor/:profesorId')
  findByProfesor(@Param('profesorId') profesorId: string) {
    return this.grupoService.findByProfesor(profesorId);
  }

  @Get('/with-materia-count')
  findAllWithMateriaCount() {
    return this.grupoService.findAllWithMateriaCount();
}

}
