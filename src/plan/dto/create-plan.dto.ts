import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreatePlanDto {
    @IsString()
    @IsNotEmpty({ message: 'La clave es obligatoria.' })
    clave: string;

    @IsNotEmpty({ message: 'La descripción es obligatoria.' })
    @IsString()
    descripcion: string;
}