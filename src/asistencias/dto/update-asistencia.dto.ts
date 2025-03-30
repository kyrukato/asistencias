import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class UpdateAsistenciaDto{
    @IsNotEmpty()
    @IsNumber()
    id:number

    @IsOptional()
    @IsBoolean()
    asistencia_Profesor?:boolean;

    @IsOptional()
    @IsBoolean()
    asistencia_Alumno?:boolean;

    @IsOptional()
    @IsBoolean()
    asistencia_Checador?:boolean;
}
