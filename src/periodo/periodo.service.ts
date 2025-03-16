import { Injectable } from '@nestjs/common';
import { CreatePeriodoDto } from './dto/create-periodo.dto';
import { UpdatePeriodoDto } from './dto/update-periodo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Periodo } from './entities/periodo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PeriodoService {
  constructor(
    @InjectRepository(Periodo)
    private readonly preriodoService:Repository<Periodo>,
  ) {}
  async create(createPeriodoDto: CreatePeriodoDto) {
    try {
      const periodo = this.preriodoService.create(createPeriodoDto);
      await this.preriodoService.save(periodo);
      return periodo;
    } catch (error) {
      
    }
  }

  findAll() {
    return `This action returns all periodo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} periodo`;
  }

  update(id: number, updatePeriodoDto: UpdatePeriodoDto) {
    return `This action updates a #${id} periodo`;
  }

  remove(id: number) {
    return `This action removes a #${id} periodo`;
  }
}
