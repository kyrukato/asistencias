import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Materia } from './entities/materia.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MateriaService {
  constructor(
    @InjectRepository(Materia)
    private readonly materiaRepository:Repository<Materia>,
  ){}

  async create(createMateriaDto: CreateMateriaDto) {
    try {
      const materia = this.materiaRepository.create(createMateriaDto);
      await this.materiaRepository.save(materia);
      return materia;
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  findAll() {
    return `This action returns all materia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} materia`;
  }

  update(id: number, updateMateriaDto: UpdateMateriaDto) {
    return `This action updates a #${id} materia`;
  }

  remove(id: number) {
    return `This action removes a #${id} materia`;
  }

  private handleDBErrors(error:any){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Please check serverlogs');
  }
}
