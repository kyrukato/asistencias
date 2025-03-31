import { Alumno } from "src/alumno/entities/alumno.entity";
import { Aula } from "src/aula/entities/aula.entity";
import { Materia } from "src/materia/entities/materia.entity";
import { Profesor } from "src/profesor/entities/profesor.entity";
import { IsDateString, IsNotEmpty, IsNumber, IsString} from 'class-validator';
import { MateriaXgrupo } from "src/materia-xgrupo/entities/materia-xgrupo.entity";

export class CreateAsistenciaDto {
    @IsNumber()
    @IsNotEmpty()
    alumno:Alumno;

    @IsNumber()
    @IsNotEmpty()
    profesor:Profesor;

    @IsDateString()
    @IsNotEmpty()
    fecha_Inicio: string;

    @IsNotEmpty()
    @IsDateString()
    fecha_Fin: string;

    @IsNotEmpty()
    @IsString()
    materia: Materia;
  
    @IsNotEmpty()
    hora_Inicio: string;

    @IsNotEmpty()
    hora_Fin: string;
  
    @IsNotEmpty()
    @IsString()
    aula: Aula;

    @IsNotEmpty()
    @IsString()
    dia:string;

    @IsNotEmpty()
    materiaxgrupo:MateriaXgrupo;
  }