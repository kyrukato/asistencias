import { Grupo } from "src/grupo/entities/grupo.entity";
import { Materia } from "src/materia/entities/materia.entity";
import { Profesor } from "src/profesor/entities/profesor.entity";

export class CreateMateriaXgrupoDto {
    materia:Materia;

    grupo: Grupo;

    semestre: number;

    profesor: Profesor;
}
