import { Alumno } from "src/alumno/entities/alumno.entity";
import { Aula } from "src/aula/entities/aula.entity";
import { Materia } from "src/materia/entities/materia.entity";
import { Profesor } from "src/profesor/entities/profesor.entity";
import { Timestamp } from "typeorm";

export class CreateAsistenciaDto {
    fecha: Date;

    alumno:Alumno;

    profesor:Profesor;

    materia:Materia;

    dia: string;

    hora_Inicio:Timestamp;

    hora_Fin:Timestamp;

    aula:Aula;
}
