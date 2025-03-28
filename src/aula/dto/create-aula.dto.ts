import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAulaDto {
    @IsNotEmpty({ message: 'El nombre del aula es obligatorio.' })
    @IsString({ message: 'El nombre del aula debe ser una cadena de texto.' })
    nombre: string;

    @IsNotEmpty({ message: 'El edificio es obligatorio.' })
    @IsString({ message: 'El edificio debe ser una cadena de texto.' })
    edificio: string;
}
