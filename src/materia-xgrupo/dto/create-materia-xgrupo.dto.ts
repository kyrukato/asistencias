import { Alumno } from "src/alumno/entities/alumno.entity";
import { Aula } from "src/aula/entities/aula.entity";
import { Grupo } from "src/grupo/entities/grupo.entity";
import { Materia } from "src/materia/entities/materia.entity";
import { Profesor } from "src/profesor/entities/profesor.entity";

export class CreateMateriaXgrupoDto {
    materia:Materia;

    grupo: Grupo;

    semestre: number;

    profesor: Profesor;

    alumno:Alumno;

    aula:Aula;

    dia:string;

    horaInicio:string;

    horaFin:string;
}
