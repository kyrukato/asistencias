import { Carrera } from "src/carrera/entities/carrera.entity";
import { Materia } from "src/materia/entities/materia.entity";

export class CreateUserDto {
    user:string;

    password:string;

    rol:string;

    nombre:string;

    apellidoPaterno:string;

    apellidoMaterno:string;

    materias?:Materia[];

    NoControl?:number;

    noEmpleado?:number;

    carrera?:Carrera;
}
