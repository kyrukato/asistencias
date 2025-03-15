import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
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

  findAll() {
    return `This action returns all carrera`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carrera`;
  }

  update(id: number, updateCarreraDto: UpdateCarreraDto) {
    return `This action updates a #${id} carrera`;
  }

  remove(id: number) {
    return `This action removes a #${id} carrera`;
  }
  
  private handleDBErrors(error:any){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Please check serverlogs');
  }
}
