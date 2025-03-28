import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GrupoService } from './grupo.service';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { Grupo } from './entities/grupo.entity';

@Controller('grupo')
export class GrupoController {
  constructor(private readonly grupoService: GrupoService) {}

  @Post('create')
  create(@Body() createGrupoDto: CreateGrupoDto) {
    return this.grupoService.create(createGrupoDto);
  }

  @Get()
  findAll(): Promise<Grupo[]> {
      return this.grupoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Grupo> {
      return this.grupoService.findOne(id);
  }

  @Get('nombre/:nombre')
  findOneByNombre(@Param('nombre') nombre: string): Promise<Grupo> {
      return this.grupoService.findOneByNombre(nombre);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateGrupoDto: UpdateGrupoDto): Promise<Grupo> {
      return this.grupoService.update(id, updateGrupoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
      return this.grupoService.remove(id);
  }
}


