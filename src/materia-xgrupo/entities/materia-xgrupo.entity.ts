import { Alumno } from "src/alumno/entities/alumno.entity";
import { Aula } from "src/aula/entities/aula.entity";
import { Grupo } from "src/grupo/entities/grupo.entity";
import { Materia } from "src/materia/entities/materia.entity";
import { Profesor } from "src/profesor/entities/profesor.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('materiaXgrupo')
export class MateriaXgrupo {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @ManyToOne(
        () => Materia,
        (materia) => materia.id,
        {onDelete:'CASCADE',onUpdate:'CASCADE'}
    )
    materia:Materia;

    @ManyToOne(
        () => Grupo,
        (grupo) => grupo.id,
        {onUpdate:'CASCADE',onDelete:'CASCADE'}
    )
    grupo:Grupo;

    @Column('integer')
    semestre:number;

    @ManyToOne(
        () => Profesor,
        (profesor) => profesor.noEmpleado,
        {onDelete:'CASCADE',onUpdate:'CASCADE'}
    )
    profesor:Profesor;

    @ManyToOne(
        () => Alumno,
        (alumno) => alumno.NoControl,
        {onDelete:'CASCADE',onUpdate:'CASCADE'}
    )
    alumno:Alumno;

    @ManyToOne(
        () => Aula,
        (aula) => aula.id,
        {onUpdate:'CASCADE',onDelete:'CASCADE'}
    )
    aula:Aula;

    @Column('text')
    dia:string;

    @Column('time')
    horaInicio:string;

    @Column('time')
    horaFin:string;
}
