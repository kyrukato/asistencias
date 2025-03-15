import { Injectable } from '@nestjs/common';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profesor } from './entities/profesor.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ProfesorService {
  constructor(
    private readonly dataSource:DataSource,
    @InjectRepository(Profesor)
    private readonly profesorReposiroty:Repository<Profesor>,
  ){}
  create(createProfesorDto: CreateProfesorDto) {
    this.profesorReposiroty.create(createProfesorDto);
  }

  findAll() {
    return `This action returns all profesor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profesor`;
  }

  update(id: number, updateProfesorDto: UpdateProfesorDto) {
    return `This action updates a #${id} profesor`;
  }

  remove(id: number) {
    return `This action removes a #${id} profesor`;
  }
}
