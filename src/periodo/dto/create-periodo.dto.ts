import { IsNotEmpty, IsString, IsDateString, IsNumber } from 'class-validator';

export class CreatePeriodoDto {
    @IsNotEmpty({ message: 'El nombre es obligatorio.' })
    @IsString({ message: 'El nombre debe ser una cadena de texto.' })
    nombre: string;

    @IsNotEmpty({ message: 'La fecha de inicio es obligatoria.' })
    @IsDateString()
    fecha_Inicio: string;

    @IsNotEmpty({ message: 'La fecha de fin es obligatoria.' })
    @IsDateString()
    fecha_Fin: string;

    @IsNotEmpty({ message: 'El periodo es obligatorio.' })
    @IsNumber({}, { message: 'El periodo debe ser un número.' })
    periodo: number;
}
