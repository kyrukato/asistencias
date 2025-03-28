import { Plan } from "src/plan/entities/plan.entity";
import { IsNotEmpty, IsString } from 'class-validator';


export class CreateCarreraDto {
    @IsString()
    clave: string;

    @IsNotEmpty({ message: 'El nombre de la carrera es obligatorio.' })
    @IsString({ message: 'El nombre de la carrera debe ser una cadena de texto.' })
    nombre: string;

    @IsNotEmpty({ message: 'El plan es obligatorio.' })
    plan: Plan; 
}