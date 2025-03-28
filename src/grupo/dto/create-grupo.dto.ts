import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { Carrera } from 'src/carrera/entities/carrera.entity';
import { Periodo } from 'src/periodo/entities/periodo.entity';

export class CreateGrupoDto {
    @IsNotEmpty({ message: 'El nombre del grupo es obligatorio.' })
    @IsString({ message: 'El nombre del grupo debe ser una cadena de texto.' })
    nombre: string;

    @IsNotEmpty({ message: 'La carrera es obligatoria.' })
    carrera: Carrera; // Aquí puedes agregar más validaciones si es necesario

    @IsNotEmpty({ message: 'El semestre es obligatorio.' })
    @IsNumber({}, { message: 'El semestre debe ser un número.' })
    semestre: number;

    @IsNotEmpty({ message: 'El periodo es obligatorio.' })
    periodo: Periodo; // Aquí puedes agregar más validaciones si es necesario
}
