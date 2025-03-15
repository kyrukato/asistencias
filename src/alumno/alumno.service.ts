import { Injectable } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Alumno } from './entities/alumno.entity';
import { privateDecrypt } from 'crypto';

@Injectable()
export class AlumnoService {
  constructor(
    private readonly dataSourse:DataSource,
    @InjectRepository(Alumno)
    private readonly alumnoRepository:Repository<Alumno>,
  ){}
  
  create(createAlumnoDto: CreateAlumnoDto) {
    this.alumnoRepository.save(createAlumnoDto);
  }

  findAll() {
    return `This action returns all alumno`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alumno`;
  }

  update(id: number, updateAlumnoDto: UpdateAlumnoDto) {
    return `This action updates a #${id} alumno`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumno`;
  }
}
