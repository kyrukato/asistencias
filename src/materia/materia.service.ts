import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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


  async findAll(): Promise<Materia[]> {
    return await this.materiaRepository.find();
}

async findOne(id: number): Promise<Materia> {
    const materia = await this.materiaRepository.findOne({ where: { id } });
    if (!materia) {
        throw new NotFoundException(`Materia con ID ${id} no encontrada`);
    }
    return materia;
}

async update(id: number, updateMateriaDto: UpdateMateriaDto): Promise<Materia> {
    const materia = await this.findOne(id);
    Object.assign(materia, updateMateriaDto);
    try {
        return await this.materiaRepository.save(materia);
    } catch (error) {
        this.handleDBErrors(error);
    }
}

async remove(id: number): Promise<void> {
    const materia = await this.findOne(id);
    await this.materiaRepository.remove(materia);
}
  private handleDBErrors(error:any){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Please check serverlogs');
  }
}
