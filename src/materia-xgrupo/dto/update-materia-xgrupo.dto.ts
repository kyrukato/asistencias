import { Alumno } from "src/alumno/entities/alumno.entity";
import { Grupo } from "src/grupo/entities/grupo.entity";
import { Materia } from "src/materia/entities/materia.entity";
import { Profesor } from "src/profesor/entities/profesor.entity";

export class UpdateMateriaXgrupoDto {
    grupo:Grupo
    profesor:Profesor;
    materia:Materia;
}
