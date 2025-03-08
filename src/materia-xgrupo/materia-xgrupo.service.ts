import { Injectable } from '@nestjs/common';
import { CreateMateriaXgrupoDto } from './dto/create-materia-xgrupo.dto';
import { UpdateMateriaXgrupoDto } from './dto/update-materia-xgrupo.dto';

@Injectable()
export class MateriaXgrupoService {
  create(createMateriaXgrupoDto: CreateMateriaXgrupoDto) {
    return 'This action adds a new materiaXgrupo';
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
}
