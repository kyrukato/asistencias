import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Carrera } from './entities/carrera.entity';
import { Repository } from 'typeorm';
import { create } from 'node:domain';

@Injectable()
export class CarreraService {
  constructor(
    @InjectRepository(Carrera)
    private readonly carreraRepository:Repository<Carrera>,
  ){}

  async create(createCarreraDto: CreateCarreraDto) {
    try{
      const carrera = this.carreraRepository.create(createCarreraDto);
      await this.carreraRepository.save(carrera);
      return carrera;
    } catch(error){
      this.handleDBErrors(error);
    }
  }

  async findAll(): Promise<Carrera[]> {
    return await this.carreraRepository.find();
}

async findOne(id: number): Promise<Carrera> {
    const carrera = await this.carreraRepository.findOne({ where: { id } });
    if (!carrera) {
        throw new NotFoundException(`Carrera con ID ${id} no encontrada`);
    }
    return carrera;
}

async update(id: number, updateCarreraDto: UpdateCarreraDto): Promise<Carrera> {
    const carrera = await this.findOne(id);
    Object.assign(carrera, updateCarreraDto);
    try {
        return await this.carreraRepository.save(carrera);
    } catch (error) {
        this.handleDBErrors(error);
    }
}

async remove(id: number): Promise<void> {
    const carrera = await this.findOne(id);
    await this.carreraRepository.remove(carrera);
}
  
  private handleDBErrors(error:any){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Please check serverlogs');
  }
}
