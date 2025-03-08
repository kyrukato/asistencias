import { Injectable } from '@nestjs/common';
import { CreateAlumnosXgrupoDto } from './dto/create-alumnos-xgrupo.dto';
import { UpdateAlumnosXgrupoDto } from './dto/update-alumnos-xgrupo.dto';

@Injectable()
export class AlumnosXgrupoService {
  create(createAlumnosXgrupoDto: CreateAlumnosXgrupoDto) {
    return 'This action adds a new alumnosXgrupo';
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
}
