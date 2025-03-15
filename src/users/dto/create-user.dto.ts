export class CreateUserDto {
    user:string;

    password:string;

    rol:string;

    nombre:string;

    apellidoPaterno:string;

    apellidoMaterno:string;

    materias?:string[];

    NoControl?:number;

    NoEmpleado?:number;

    carrera?:string;
}
