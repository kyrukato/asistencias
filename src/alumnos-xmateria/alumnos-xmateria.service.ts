import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateAlumnosXmateriaDto } from './dto/create-alumnos-xmateria.dto';
import { UpdateAlumnosXmateriaDto } from './dto/update-alumnos-xmateria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AlumnosXmateria } from './entities/alumnos-xmateria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlumnosXmateriaService {
  constructor(
    @InjectRepository(AlumnosXmateria)
    private readonly alumnosXmateriaRepository:Repository<AlumnosXmateria>,
  ) {}
  async create(createAlumnosXmateriaDto: CreateAlumnosXmateriaDto) {
    try {
      const alumnoxmateria = this.alumnosXmateriaRepository.create(createAlumnosXmateriaDto);
      await this.alumnosXmateriaRepository.save(alumnoxmateria);
      return alumnoxmateria;
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  findAll() {
    return `This action returns all alumnosXmateria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alumnosXmateria`;
  }

  update(id: number, updateAlumnosXmateriaDto: UpdateAlumnosXmateriaDto) {
    return `This action updates a #${id} alumnosXmateria`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumnosXmateria`;
  }

  private handleDBErrors(error:any){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Please check serverlogs');
  }
}
