import { PartialType } from '@nestjs/mapped-types';
import { CreateMateriaXgrupoDto } from './create-materia-xgrupo.dto';

export class UpdateMateriaXgrupoDto extends PartialType(CreateMateriaXgrupoDto) {}
