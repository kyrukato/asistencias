import { Grupo } from "src/grupo/entities/grupo.entity";
import { Materia } from "src/materia/entities/materia.entity";

export class updateHorarioDto{
    grupo:Grupo;
    materia:Materia;
    horaInicio:string;
    horaFin:string;
}