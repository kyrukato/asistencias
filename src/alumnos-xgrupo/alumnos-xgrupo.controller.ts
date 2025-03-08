import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlumnosXgrupoService } from './alumnos-xgrupo.service';
import { CreateAlumnosXgrupoDto } from './dto/create-alumnos-xgrupo.dto';
import { UpdateAlumnosXgrupoDto } from './dto/update-alumnos-xgrupo.dto';

@Controller('alumnos-xgrupo')
export class AlumnosXgrupoController {
  constructor(private readonly alumnosXgrupoService: AlumnosXgrupoService) {}

  @Post()
  create(@Body() createAlumnosXgrupoDto: CreateAlumnosXgrupoDto) {
    return this.alumnosXgrupoService.create(createAlumnosXgrupoDto);
  }

  @Get()
  findAll() {
    return this.alumnosXgrupoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alumnosXgrupoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlumnosXgrupoDto: UpdateAlumnosXgrupoDto) {
    return this.alumnosXgrupoService.update(+id, updateAlumnosXgrupoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alumnosXgrupoService.remove(+id);
  }
}
