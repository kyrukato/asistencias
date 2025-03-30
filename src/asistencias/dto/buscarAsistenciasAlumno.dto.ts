import { IsNotEmpty, IsOptional } from "class-validator";
import { Alumno } from "src/alumno/entities/alumno.entity";

export class buscarAsistenciasAlumnoDto{
    @IsNotEmpty()
    alumno:Alumno;

    @IsNotEmpty()
    fecha_Inicio:string;

    @IsOptional()
    fecha_Fin?:string;
}