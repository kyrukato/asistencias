import { Alumno } from "src/alumno/entities/alumno.entity";
import { Aula } from "src/aula/entities/aula.entity";
import { Materia } from "src/materia/entities/materia.entity";
import { Profesor } from "src/profesor/entities/profesor.entity";
import { Timestamp } from "typeorm";
import { IsBoolean, IsDateString, IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class CreateAsistenciaDto {
    @IsDateString()
    @IsNotEmpty()
    fecha: string;
  
    @IsNotEmpty()
    @IsString()
    materiaId: string;
  
    @IsNotEmpty()
    @IsString()
    dia: string;
  
    
    @IsNotEmpty()
    hora_Inicio: string;
  
    
    @IsNotEmpty()
    hora_Fin: string;
  
    @IsNotEmpty()
    @IsString()
    aulaId: string;
  
    @IsOptional()
    @IsBoolean()
    asistencia_Profesor?: boolean;
  
    @IsOptional()
    @IsBoolean()
    asistencia_Alumno?: boolean;
  
    @IsOptional()
    @IsBoolean()
    asistencia_Checador?: boolean;
  }
