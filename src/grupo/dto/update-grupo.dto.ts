import { PartialType } from '@nestjs/mapped-types';
import { CreateGrupoDto } from './create-grupo.dto';
import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class UpdateGrupoDto extends PartialType(CreateGrupoDto) {
    @IsString()
    nombre?: string;
  
    @IsNumber()
    semestre?: number;
  
    @IsUUID()
    carreraId?: string;
  
    @IsUUID()
    periodoId?: string;
}
