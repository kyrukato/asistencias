import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MateriaXgrupoService } from './materia-xgrupo.service';
import { CreateMateriaXgrupoDto } from './dto/create-materia-xgrupo.dto';
import { UpdateMateriaXgrupoDto } from './dto/update-materia-xgrupo.dto';

@Controller('materia-xgrupo')
export class MateriaXgrupoController {
  constructor(private readonly materiaXgrupoService: MateriaXgrupoService) {}

  @Post()
  create(@Body() createMateriaXgrupoDto: CreateMateriaXgrupoDto) {
    return this.materiaXgrupoService.create(createMateriaXgrupoDto);
  }

  @Get()
  findAll() {
    return this.materiaXgrupoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.materiaXgrupoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMateriaXgrupoDto: UpdateMateriaXgrupoDto) {
    return this.materiaXgrupoService.update(+id, updateMateriaXgrupoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materiaXgrupoService.remove(+id);
  }
}
