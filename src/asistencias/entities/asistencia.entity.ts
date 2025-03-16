import { Alumno } from "src/alumno/entities/alumno.entity";
import { Aula } from "src/aula/entities/aula.entity";
import { Materia } from "src/materia/entities/materia.entity";
import { Profesor } from "src/profesor/entities/profesor.entity";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity('asistencia')
export class Asistencia {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column('date')
    fecha:Date;

    @ManyToOne(
        () => Materia,
        (materia) => materia.id,
        {onDelete:'CASCADE',onUpdate:'CASCADE'}
    )
    materia:Materia;

    @Column('text')
    dia:string;

    @Column('timestamp')
    hora_Inicio:Timestamp;

    @Column('timestamp')
    hora_Fin:Timestamp;

    @ManyToOne(
        () => Aula,
        (aula) => aula.id,
        {onDelete:'CASCADE',onUpdate:'CASCADE'}
    )
    aula:Aula;

    @Column('bool', {default:null})
    asistencia_Profesor:boolean;

    @Column('bool', {default:null})
    asistencia_Alumno:boolean;

    @Column('bool', {default:null})
    asistencia_Checador:boolean;
}
