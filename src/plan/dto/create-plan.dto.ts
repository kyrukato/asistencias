import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreatePlanDto {
    @IsUUID('all', { message: 'El ID debe ser un UUID válido.' })
    id: string;

    @IsNotEmpty({ message: 'La descripción es obligatoria.' })
    @IsString({ message: 'La descripción debe ser una cadena de texto.' })
    descripcion: string;
}