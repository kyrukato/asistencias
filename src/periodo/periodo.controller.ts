import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeriodoService } from './periodo.service';
import { CreatePeriodoDto } from './dto/create-periodo.dto';
import { UpdatePeriodoDto } from './dto/update-periodo.dto';
import { Periodo } from './entities/periodo.entity';

@Controller('periodo')
export class PeriodoController {
  constructor(private readonly periodoService: PeriodoService) {}

    @Post('create')
    create(@Body() createPeriodoDto: CreatePeriodoDto): Promise<Periodo> {
        return this.periodoService.create(createPeriodoDto);
    }

    @Get()
    findAll(): Promise<Periodo[]> {
        return this.periodoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Periodo> {
        return this.periodoService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updatePeriodoDto: UpdatePeriodoDto): Promise<Periodo> {
        return this.periodoService.update(+id, updatePeriodoDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.periodoService.remove(+id);
    }
}
