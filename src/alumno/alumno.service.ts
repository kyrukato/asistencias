import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
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

  async findOne(id: string) {
    try {
      const alumno = await this.alumnoRepository.findOne({
        where:{
          user: {id}
        },
        relations:['carrera','user'],
      })
      if(alumno){
        return alumno;
      }
    } catch (error) {
      this.handleDBErrors(error);
    }
    
  }

  update(id: string, updateAlumnoDto: UpdateAlumnoDto) {
    return `This action updates a #${id} alumno`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumno`;
  }

  private handleDBErrors(error:any){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Please check serverlogs');
  }
}
