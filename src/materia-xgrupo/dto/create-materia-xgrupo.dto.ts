import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Alumno } from "src/alumno/entities/alumno.entity";
import { Aula } from "src/aula/entities/aula.entity";
import { Grupo } from "src/grupo/entities/grupo.entity";
import { Materia } from "src/materia/entities/materia.entity";
import { Profesor } from "src/profesor/entities/profesor.entity";

export class CreateMateriaXgrupoDto {
    @IsNotEmpty()
    materia:Materia;

    @IsNotEmpty()
    grupo: Grupo;

    @IsNotEmpty()
    @IsNumber()
    semestre: number;

    @IsNotEmpty()
    profesor: Profesor;

    @IsNotEmpty()
    alumno:Alumno;

    @IsNotEmpty()
    aula:Aula;

    @IsNotEmpty()
    @IsString()
    dia:string;

    @IsNotEmpty()
    @IsString()
    horaInicio:string;

    @IsNotEmpty()
    @IsString()
    horaFin:string;

    @IsNotEmpty()
    @IsString()
    fecha_Inicio:string;

    @IsNotEmpty()
    @IsString()
    fecha_Fin:string;
}