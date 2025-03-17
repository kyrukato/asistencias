import { Alumno } from "src/alumno/entities/alumno.entity";
import { Carrera } from "src/carrera/entities/carrera.entity";
import { Profesor } from "src/profesor/entities/profesor.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('text',{
        unique:true},
    )
    user:string;

    @Column('text')
    password:string;

    @Column('bool',
        {default: true}
    )
    status:boolean;

    @Column('text')
    rol: string;

    @OneToMany(
        () => Alumno,
        (alumno) => alumno.user,
        {onDelete:'CASCADE', onUpdate:'CASCADE'}
    )
    alumno:Alumno[];

    @OneToMany(
        () => Profesor,
        (profesor) => profesor.user,

    )
    profesor:Profesor[];
}
