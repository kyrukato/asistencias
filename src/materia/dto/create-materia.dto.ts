import { IsNotEmpty, IsNumber, IsString, IsUUID, IsArray, ArrayNotEmpty } from 'class-validator';
import { Carrera } from 'src/carrera/entities/carrera.entity';

export class CreateMateriaDto {
    @IsString()
    @IsNotEmpty({ message: 'La clave es obligatoria.' })
    clave: string;

    @IsNotEmpty({ message: 'El nombre de la materia es obligatorio.' })
    @IsString({ message: 'El nombre de la materia debe ser una cadena de texto.' })
    nombre: string;

    @IsNotEmpty({ message: 'Los créditos son obligatorios.' })
    @IsNumber({}, { message: 'Los créditos deben ser un número.' })
    creditos: number;

    @IsArray({ message: 'El temario debe ser un arreglo.' })
    @ArrayNotEmpty({ message: 'El temario no puede estar vacío.' })
    temario: string[];

    @IsNotEmpty({ message: 'La carrera es obligatoria.' })
    carrera: Carrera; 
}
