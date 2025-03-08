import { Injectable } from '@nestjs/common';
import { CreateAlumnosXmateriaDto } from './dto/create-alumnos-xmateria.dto';
import { UpdateAlumnosXmateriaDto } from './dto/update-alumnos-xmateria.dto';

@Injectable()
export class AlumnosXmateriaService {
  create(createAlumnosXmateriaDto: CreateAlumnosXmateriaDto) {
    return 'This action adds a new alumnosXmateria';
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
}
