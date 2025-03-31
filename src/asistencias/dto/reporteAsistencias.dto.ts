import { Profesor } from "src/profesor/entities/profesor.entity";

export class reporteAsistenciasDto{
    profesor:Profesor;
    fecha_Inicio:string;
    fecha_Fin:string;
}