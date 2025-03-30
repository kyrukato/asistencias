import { IsNotEmpty, IsOptional } from "class-validator";
import { Profesor } from "src/profesor/entities/profesor.entity";

export class bucarAsistenciasProfesorDto{
    @IsNotEmpty()
    profesor:Profesor

    @IsNotEmpty()
    fecha_Inicio:string;

    @IsOptional()
    fecha_Fin?:string;
}