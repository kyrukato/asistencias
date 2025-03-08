import { PartialType } from '@nestjs/mapped-types';
import { CreateAlumnosXmateriaDto } from './create-alumnos-xmateria.dto';

export class UpdateAlumnosXmateriaDto extends PartialType(CreateAlumnosXmateriaDto) {}
