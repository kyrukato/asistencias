import { Carrera } from "src/carrera/entities/carrera.entity";

interface seedMateria{
    clave:string;
    nombre:string;
    creditos:number,
    temario:string[],
    carrera:Carrera
}

interface seedDataMateria{
    materia:seedMateria[];
}

export const initialDataMateria:seedDataMateria = {
    materia:[
        {
            clave:"Materia1",
            nombre:"Innovación con NTIC",
            creditos:5,
            temario:['Unidad 1','Tema 1.1','Subtema 1.1.1','Subtema 1.1.2','Tema 1.2','Unidad 2','Tema 2.1',],
            carrera:{id:1} as Carrera,
        },
        {
            clave:"Materia2",
            nombre:"Graficación",
            creditos:5,
            temario:['Unidad 1','Tema 1.1','Subtema 1.1.1','Subtema 1.1.2','Tema 1.2','Unidad 2','Tema 2.1',],
            carrera:{id:1} as Carrera,
        },
        {
            clave:"Materia3",
            nombre:"Sistemas Distribuidos",
            creditos:5,
            temario:['Unidad 1','Tema 1.1','Subtema 1.1.1','Subtema 1.1.2','Tema 1.2','Unidad 2','Tema 2.1',],
            carrera:{id:1} as Carrera,
        },
        {
            clave:"Materia4",
            nombre:"Computación Ubicua",
            creditos:5,
            temario:['Unidad 1','Tema 1.1','Subtema 1.1.1','Subtema 1.1.2','Tema 1.2','Unidad 2','Tema 2.1',],
            carrera:{id:1} as Carrera,
        },
        {
            clave:"Materia5",
            nombre:"Redes Neuronales",
            creditos:5,
            temario:['Unidad 1','Tema 1.1','Subtema 1.1.1','Subtema 1.1.2','Tema 1.2','Unidad 2','Tema 2.1',],
            carrera:{id:1} as Carrera,
        },
    ]
}