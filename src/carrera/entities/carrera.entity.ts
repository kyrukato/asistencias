import { Alumno } from "src/alumno/entities/alumno.entity";
import { Grupo } from "src/grupo/entities/grupo.entity";
import { Materia } from "src/materia/entities/materia.entity";
import { Plan } from "src/plan/entities/plan.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('Carreras')
export class Carrera {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column('text')
    clave:string;

    @Column('text')
    nombre:string;

    @Column("bool",{
        default: true
    })
    activa:boolean

    @ManyToOne(
        () => Plan,
        (plan) => plan.id,
        {onDelete:'CASCADE',onUpdate:'CASCADE'}
    )
    plan:Plan;

    @OneToMany(
        ()=> Alumno,
        (alumnos) => alumnos.carrera,
        {onUpdate: "CASCADE"}
    )
    alumnos:Alumno[];

    @OneToMany(
        () => Materia,
        (materia) => materia.carrera,
        {onUpdate:'CASCADE',onDelete:'CASCADE'}
    )
    materia:Materia[];

    @OneToMany(
        () => Grupo,
        (grupo) => grupo.carrera,
        {onDelete:'CASCADE', onUpdate:'CASCADE'}
    )
    grupo:Grupo[];
}
