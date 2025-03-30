import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarreraService } from './carrera.service';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';
import { Carrera } from './entities/carrera.entity';

@Controller('carrera')
export class CarreraController {
  constructor(private readonly carreraService: CarreraService) {}

  @Post('create')
  create(@Body() createCarreraDto: CreateCarreraDto) {
    return this.carreraService.create(createCarreraDto);
  }

  @Get('getAll')
  findAll(): Promise<Carrera[]> {
      return this.carreraService.findAll();
  }

  @Get('getOne/:id')
  findOne(@Param('id') id: number): Promise<Carrera> {
      return this.carreraService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: number, @Body() updateCarreraDto: UpdateCarreraDto): Promise<Carrera> {
      return this.carreraService.update(+id, updateCarreraDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: number): Promise<void> {
      return this.carreraService.remove(+id);
  }
}
