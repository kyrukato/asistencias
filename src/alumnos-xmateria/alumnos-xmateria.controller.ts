import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlumnosXmateriaService } from './alumnos-xmateria.service';
import { CreateAlumnosXmateriaDto } from './dto/create-alumnos-xmateria.dto';
import { UpdateAlumnosXmateriaDto } from './dto/update-alumnos-xmateria.dto';

@Controller('alumnos-xmateria')
export class AlumnosXmateriaController {
  constructor(private readonly alumnosXmateriaService: AlumnosXmateriaService) {}

  @Post()
  create(@Body() createAlumnosXmateriaDto: CreateAlumnosXmateriaDto) {
    return this.alumnosXmateriaService.create(createAlumnosXmateriaDto);
  }

  @Get()
  findAll() {
    return this.alumnosXmateriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alumnosXmateriaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlumnosXmateriaDto: UpdateAlumnosXmateriaDto) {
    return this.alumnosXmateriaService.update(+id, updateAlumnosXmateriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alumnosXmateriaService.remove(+id);
  }
}
