import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateMateriaXgrupoDto } from './dto/create-materia-xgrupo.dto';
import { UpdateMateriaXgrupoDto } from './dto/update-materia-xgrupo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MateriaXgrupo } from './entities/materia-xgrupo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MateriaXgrupoService {
  constructor(
    @InjectRepository(MateriaXgrupo)
    private readonly materiaxgrupoRepository:Repository<MateriaXgrupo>
  ){}
  async create(createMateriaXgrupoDto: CreateMateriaXgrupoDto) {
    try {
      const materiaXgrupo = this.materiaxgrupoRepository.create(createMateriaXgrupoDto);
      await this.materiaxgrupoRepository.save(materiaXgrupo);
      return materiaXgrupo;
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  findAll() {
    return `This action returns all materiaXgrupo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} materiaXgrupo`;
  }

  update(id: number, updateMateriaXgrupoDto: UpdateMateriaXgrupoDto) {
    return `This action updates a #${id} materiaXgrupo`;
  }

  remove(id: number) {
    return `This action removes a #${id} materiaXgrupo`;
  }

  private handleDBErrors(error:any){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Please check serverlogs');
  }
}
