import { Carrera } from "src/carrera/entities/carrera.entity";
import { Materia } from "src/materia/entities/materia.entity";

interface seedUsuario{
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

interface seedDataUsuerio{
    usuario:seedUsuario[];
}

/*
rol.alumno
rol.checador,
rol.profesor,
rol.admin*/
export const initialDataUsuario:seedDataUsuerio = {
    usuario:[
        {
            user:'Admin',
            password:'abc123',
            rol:'admin',
            nombre:'Rody',
            apellidoPaterno:'Soto',
            apellidoMaterno:'Rojo',
        },
        {
            user:'Alumno1',
            password:'abc123',
            rol:'alumno',
            nombre:'Nestor',
            apellidoPaterno:'Padilla',
            apellidoMaterno:'Ochoa',
            NoControl: 1111,
            carrera:{id:1} as Carrera,
        },
        {
            user:'Alumno2',
            password:'abc123',
            rol:'alumno',
            nombre:'Elisa',
            apellidoPaterno:'Arce',
            apellidoMaterno:'Acosta',
            NoControl: 2222,
            carrera:{id:4} as Carrera,
        },
        {
            user:'Alumno3',
            password:'abc123',
            rol:'alumno',
            nombre:'Kevin',
            apellidoPaterno:'Montalvo',
            apellidoMaterno:'Navarro',
            NoControl: 3333,
            carrera:{id:5} as Carrera,
        },
        {
            user:'Alumno4',
            password:'abc123',
            rol:'alumno',
            nombre:'Adriel',
            apellidoPaterno:'Alvarez',
            apellidoMaterno:'Rodriguez',
            NoControl: 4444,
            carrera:{id:6} as Carrera,
        },
        {
            user:'Mike',
            password:'abc123',
            rol:'profesor',
            nombre:'Jose Miguel',
            apellidoPaterno:'Mendivil',
            apellidoMaterno:'Torres',
            noEmpleado:5555,
            materias:[{id:1} as Materia, {id:3} as Materia]
        },
        {
            user:'Herman',
            password:'abc123',
            rol:'profesor',
            nombre:'Herman',
            apellidoPaterno:'Ayala',
            apellidoMaterno:'Zuñiga',
            noEmpleado:6666,
            materias:[{id:2} as Materia, {id:3} as Materia]
        },
        {
            user:'Rocio',
            password:'abc123',
            rol:'profesor',
            nombre:'Rocio',
            apellidoPaterno:'Becerra',
            apellidoMaterno:'Urquidez',
            noEmpleado:7777,
            materias:[{id:3} as Materia, {id:1} as Materia]
        },
        {
            user:'Mirsa',
            password:'abc123',
            rol:'profesor',
            nombre:'Mirsa',
            apellidoPaterno:'Inzunza',
            apellidoMaterno:'Martinez',
            noEmpleado:8888,
            materias:[{id:4} as Materia, {id:1} as Materia]
        },
        {
            user:'Edgar',
            password:'abc123',
            rol:'profesor',
            nombre:'Edgar',
            apellidoPaterno:'Perez',
            apellidoMaterno:'Contreras',
            materias:[{id:5} as Materia, {id:3} as Materia],
            noEmpleado:9999,
        },
    ]
}