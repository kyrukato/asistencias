import { PartialType } from '@nestjs/mapped-types';
import { CreateAlumnosXgrupoDto } from './create-alumnos-xgrupo.dto';

export class UpdateAlumnosXgrupoDto extends PartialType(CreateAlumnosXgrupoDto) {}
