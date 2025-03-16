import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateAlumnosXgrupoDto } from './dto/create-alumnos-xgrupo.dto';
import { UpdateAlumnosXgrupoDto } from './dto/update-alumnos-xgrupo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AlumnosXgrupo } from './entities/alumnos-xgrupo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlumnosXgrupoService {
  constructor(
    @InjectRepository(AlumnosXgrupo)
    private readonly alumnosXgrupoRepository:Repository<AlumnosXgrupo>,
  ){}
  async create(createAlumnosXgrupoDto: CreateAlumnosXgrupoDto) {
    try {
      const alumnosXgrupo = this.alumnosXgrupoRepository.create(createAlumnosXgrupoDto)
      await this.alumnosXgrupoRepository.save(alumnosXgrupo);
      return alumnosXgrupo;
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  findAll() {
    return `This action returns all alumnosXgrupo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alumnosXgrupo`;
  }

  update(id: number, updateAlumnosXgrupoDto: UpdateAlumnosXgrupoDto) {
    return `This action updates a #${id} alumnosXgrupo`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumnosXgrupo`;
  }

  private handleDBErrors(error:any){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Please check serverlogs');
  }
}
