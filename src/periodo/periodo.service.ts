import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePeriodoDto } from './dto/create-periodo.dto';
import { UpdatePeriodoDto } from './dto/update-periodo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Periodo } from './entities/periodo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PeriodoService {
  
  constructor(
    @InjectRepository(Periodo)
    private readonly periodoRepository: Repository<Periodo>,
) {}

async create(createPeriodoDto: CreatePeriodoDto): Promise<Periodo> {
    const periodo = this.periodoRepository.create(createPeriodoDto);
    try {
        return await this.periodoRepository.save(periodo);
    } catch (error) {
        this.handleDBErrors(error);
    }
}

async findAll(): Promise<Periodo[]> {
    return await this.periodoRepository.find();
}

async findOne(id: number): Promise<Periodo> {
    const periodo = await this.periodoRepository.findOne({ where: { id } });
    if (!periodo) {
        throw new NotFoundException(`Periodo con ID ${id} no encontrado`);
    }
    return periodo;
}

async update(id: number, updatePeriodoDto: UpdatePeriodoDto): Promise<Periodo> {
    const periodo = await this.findOne(id);
    Object.assign(periodo, updatePeriodoDto);
    try {
        return await this.periodoRepository.save(periodo);
    } catch (error) {
        this.handleDBErrors(error);
    }
}

async remove(id: number): Promise<void> {
    const periodo = await this.findOne(id);
    await this.periodoRepository.remove(periodo);
}

private handleDBErrors(error: any) {
    if (error.code === '23505') {
        throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Por favor, revisa los logs del servidor');
}

}
