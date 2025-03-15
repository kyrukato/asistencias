import { Carrera } from "src/carrera/entities/carrera.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";

@Entity('Alumnos')
export class Alumno {
    @PrimaryColumn('integer')
    NoControl:number;

    @Column('text')
    nombre:string;

    @Column('text')
    apellidoPaterno:string;

    @Column('text')
    apellidoMaterno:string;

    @ManyToOne(
        () => Carrera,
        (carrera) => carrera.id,
        {onDelete: 'CASCADE'}
    )
    carrera:Carrera;

    @ManyToOne(
        () => User,
        (user) => user.id,
        {onDelete: 'CASCADE'}
    )
    user:User;
}
