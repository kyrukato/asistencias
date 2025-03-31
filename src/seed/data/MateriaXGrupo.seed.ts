import { Alumno } from "src/alumno/entities/alumno.entity";
import { Aula } from "src/aula/entities/aula.entity";
import { Grupo } from "src/grupo/entities/grupo.entity";
import { Materia } from "src/materia/entities/materia.entity";
import { Profesor } from "src/profesor/entities/profesor.entity";

interface seedMateriaXGrupo{
    materia:Materia;

    grupo: Grupo;

    semestre: number;

    profesor: Profesor;

    alumno:Alumno;

    aula:Aula;

    dia:string;

    horaInicio:string;

    horaFin:string;

    fecha_Inicio:string;

    fecha_Fin:string;
}

interface seedDataMateriaXGrupo{
    mxg:seedMateriaXGrupo[];
}

export const initialDataMXG:seedDataMateriaXGrupo ={
    mxg:[
        {
            materia:{id:1} as Materia,
            grupo:{id:25} as Grupo,
            semestre:8,
            profesor:{noEmpleado:5555} as Profesor,
            alumno:{NoControl:1111} as Alumno,
            aula:{id:16} as Aula,
            dia:'Lunes',
            horaInicio:'14:00',
            horaFin:'15:00',
            fecha_Inicio:'2025-02-03',
            fecha_Fin:'2025-06-20',
        },
        {
            materia:{id:1} as Materia,
            grupo:{id:25} as Grupo,
            semestre:8,
            profesor:{noEmpleado:5555} as Profesor,
            alumno:{NoControl:1111} as Alumno,
            aula:{id:16} as Aula,
            dia:'Martes',
            horaInicio:'14:00',
            horaFin:'15:00',
            fecha_Inicio:'2025-02-03',
            fecha_Fin:'2025-06-20',
        },
        {
            materia:{id:1} as Materia,
            grupo:{id:25} as Grupo,
            semestre:8,
            profesor:{noEmpleado:5555} as Profesor,
            alumno:{NoControl:1111} as Alumno,
            aula:{id:16} as Aula,
            dia:'Miércoles',
            horaInicio:'14:00',
            horaFin:'15:00',
            fecha_Inicio:'2025-02-03',
            fecha_Fin:'2025-06-20',
        },
        {
            materia:{id:1} as Materia,
            grupo:{id:25} as Grupo,
            semestre:8,
            profesor:{noEmpleado:5555} as Profesor,
            alumno:{NoControl:1111} as Alumno,
            aula:{id:16} as Aula,
            dia:'Jueves',
            horaInicio:'14:00',
            horaFin:'15:00',
            fecha_Inicio:'2025-02-03',
            fecha_Fin:'2025-06-20',
        },
        {
            materia:{id:1} as Materia,
            grupo:{id:25} as Grupo,
            semestre:8,
            profesor:{noEmpleado:5555} as Profesor,
            alumno:{NoControl:1111} as Alumno,
            aula:{id:16} as Aula,
            dia:'Viernes',
            horaInicio:'14:00',
            horaFin:'15:00',
            fecha_Inicio:'2025-02-03',
            fecha_Fin:'2025-06-20',
        },
        {
            materia:{id:2} as Materia,
            grupo:{id:25} as Grupo,
            semestre:8,
            profesor:{noEmpleado:6666} as Profesor,
            alumno:{NoControl:1111} as Alumno,
            aula:{id:16} as Aula,
            dia:'Lunes',
            horaInicio:'15:00',
            horaFin:'16:00',
            fecha_Inicio:'2025-02-03',
            fecha_Fin:'2025-06-20',
        },
        {
            materia:{id:2} as Materia,
            grupo:{id:25} as Grupo,
            semestre:8,
            profesor:{noEmpleado:6666} as Profesor,
            alumno:{NoControl:1111} as Alumno,
            aula:{id:16} as Aula,
            dia:'Martes',
            horaInicio:'15:00',
            horaFin:'16:00',
            fecha_Inicio:'2025-02-03',
            fecha_Fin:'2025-06-20',
        },
        {
            materia:{id:2} as Materia,
            grupo:{id:25} as Grupo,
            semestre:8,
            profesor:{noEmpleado:6666} as Profesor,
            alumno:{NoControl:1111} as Alumno,
            aula:{id:16} as Aula,
            dia:'Miércoles',
            horaInicio:'15:00',
            horaFin:'16:00',
            fecha_Inicio:'2025-02-03',
            fecha_Fin:'2025-06-20',
        },
        {
            materia:{id:2} as Materia,
            grupo:{id:25} as Grupo,
            semestre:8,
            profesor:{noEmpleado:6666} as Profesor,
            alumno:{NoControl:1111} as Alumno,
            aula:{id:16} as Aula,
            dia:'Jueves',
            horaInicio:'15:00',
            horaFin:'16:00',
            fecha_Inicio:'2025-02-03',
            fecha_Fin:'2025-06-20',
        },
        {
            materia:{id:2} as Materia,
            grupo:{id:25} as Grupo,
            semestre:8,
            profesor:{noEmpleado:6666} as Profesor,
            alumno:{NoControl:1111} as Alumno,
            aula:{id:16} as Aula,
            dia:'Viernes',
            horaInicio:'15:00',
            horaFin:'16:00',
            fecha_Inicio:'2025-02-03',
            fecha_Fin:'2025-06-20',
        },
        {
            materia:{id:3} as Materia,
            grupo:{id:25} as Grupo,
            semestre:8,
            profesor:{noEmpleado:7777} as Profesor,
            alumno:{NoControl:1111} as Alumno,
            aula:{id:16} as Aula,
            dia:'Lunes',
            horaInicio:'16:00',
            horaFin:'17:00',
            fecha_Inicio:'2025-02-03',
            fecha_Fin:'2025-06-20',
        },
        {
            materia:{id:3} as Materia,
            grupo:{id:25} as Grupo,
            semestre:8,
            profesor:{noEmpleado:7777} as Profesor,
            alumno:{NoControl:1111} as Alumno,
            aula:{id:16} as Aula,
            dia:'Martes',
            horaInicio:'16:00',
            horaFin:'17:00',
            fecha_Inicio:'2025-02-03',
            fecha_Fin:'2025-06-20',
        },
        {
            materia:{id:3} as Materia,
            grupo:{id:25} as Grupo,
            semestre:8,
            profesor:{noEmpleado:7777} as Profesor,
            alumno:{NoControl:1111} as Alumno,
            aula:{id:16} as Aula,
            dia:'Miércoles',
            horaInicio:'16:00',
            horaFin:'17:00',
            fecha_Inicio:'2025-02-03',
            fecha_Fin:'2025-06-20',
        },
        {
            materia:{id:3} as Materia,
            grupo:{id:25} as Grupo,
            semestre:8,
            profesor:{noEmpleado:7777} as Profesor,
            alumno:{NoControl:1111} as Alumno,
            aula:{id:16} as Aula,
            dia:'Jueves',
            horaInicio:'16:00',
            horaFin:'17:00',
            fecha_Inicio:'2025-02-03',
            fecha_Fin:'2025-06-20',
        },
        {
            materia:{id:3} as Materia,
            grupo:{id:25} as Grupo,
            semestre:8,
            profesor:{noEmpleado:7777} as Profesor,
            alumno:{NoControl:1111} as Alumno,
            aula:{id:16} as Aula,
            dia:'Viernes',
            horaInicio:'16:00',
            horaFin:'17:00',
            fecha_Inicio:'2025-02-03',
            fecha_Fin:'2025-06-20',
        },
        {
            materia:{id:4} as Materia,
            grupo:{id:25} as Grupo,
            semestre:8,
            profesor:{noEmpleado:8888} as Profesor,
            alumno:{NoControl:1111} as Alumno,
            aula:{id:16} as Aula,
            dia:'Lunes',
            horaInicio:'17:00',
            horaFin:'18:00',
            fecha_Inicio:'2025-02-03',
            fecha_Fin:'2025-06-20',
        },
        {
            materia:{id:4} as Materia,
            grupo:{id:25} as Grupo,
            semestre:8,
            profesor:{noEmpleado:8888} as Profesor,
            alumno:{NoControl:1111} as Alumno,
            aula:{id:16} as Aula,
            dia:'Martes',
            horaInicio:'17:00',
            horaFin:'18:00',
            fecha_Inicio:'2025-02-03',
            fecha_Fin:'2025-06-20',
        },
        {
            materia:{id:4} as Materia,
            grupo:{id:25} as Grupo,
            semestre:8,
            profesor:{noEmpleado:8888} as Profesor,
            alumno:{NoControl:1111} as Alumno,
            aula:{id:16} as Aula,
            dia:'Miércoles',
            horaInicio:'17:00',
            horaFin:'18:00',
            fecha_Inicio:'2025-02-03',
            fecha_Fin:'2025-06-20',
        },
        {
            materia:{id:4} as Materia,
            grupo:{id:25} as Grupo,
            semestre:8,
            profesor:{noEmpleado:8888} as Profesor,
            alumno:{NoControl:1111} as Alumno,
            aula:{id:16} as Aula,
            dia:'Jueves',
            horaInicio:'17:00',
            horaFin:'18:00',
            fecha_Inicio:'2025-02-03',
            fecha_Fin:'2025-06-20',
        },
        {
            materia:{id:4} as Materia,
            grupo:{id:25} as Grupo,
            semestre:8,
            profesor:{noEmpleado:8888} as Profesor,
            alumno:{NoControl:1111} as Alumno,
            aula:{id:16} as Aula,
            dia:'Viernes',
            horaInicio:'17:00',
            horaFin:'18:00',
            fecha_Inicio:'2025-02-03',
            fecha_Fin:'2025-06-20',
        },
        {
            materia:{id:5} as Materia,
            grupo:{id:25} as Grupo,
            semestre:8,
            profesor:{noEmpleado:9999} as Profesor,
            alumno:{NoControl:1111} as Alumno,
            aula:{id:16} as Aula,
            dia:'Lunes',
            horaInicio:'18:00',
            horaFin:'19:00',
            fecha_Inicio:'2025-02-03',
            fecha_Fin:'2025-06-20',
        },
        {
            materia:{id:4} as Materia,
            grupo:{id:25} as Grupo,
            semestre:8,
            profesor:{noEmpleado:9999} as Profesor,
            alumno:{NoControl:1111} as Alumno,
            aula:{id:16} as Aula,
            dia:'Martes',
            horaInicio:'18:00',
            horaFin:'19:00',
            fecha_Inicio:'2025-02-03',
            fecha_Fin:'2025-06-20',
        },
        {
            materia:{id:4} as Materia,
            grupo:{id:25} as Grupo,
            semestre:8,
            profesor:{noEmpleado:9999} as Profesor,
            alumno:{NoControl:1111} as Alumno,
            aula:{id:16} as Aula,
            dia:'Miércoles',
            horaInicio:'18:00',
            horaFin:'19:00',
            fecha_Inicio:'2025-02-03',
            fecha_Fin:'2025-06-20',
        },
        {
            materia:{id:4} as Materia,
            grupo:{id:25} as Grupo,
            semestre:8,
            profesor:{noEmpleado:9999} as Profesor,
            alumno:{NoControl:1111} as Alumno,
            aula:{id:16} as Aula,
            dia:'Jueves',
            horaInicio:'18:00',
            horaFin:'19:00',
            fecha_Inicio:'2025-02-03',
            fecha_Fin:'2025-06-20',
        },
        {
            materia:{id:4} as Materia,
            grupo:{id:25} as Grupo,
            semestre:8,
            profesor:{noEmpleado:9999} as Profesor,
            alumno:{NoControl:1111} as Alumno,
            aula:{id:16} as Aula,
            dia:'Viernes',
            horaInicio:'18:00',
            horaFin:'19:00',
            fecha_Inicio:'2025-02-03',
            fecha_Fin:'2025-06-20',
        },
    ]
}