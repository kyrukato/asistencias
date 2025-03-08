import { Carrera } from "src/carrera/entities/carrera.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";

@Entity('Alumnos')
export class Alumno {
    @PrimaryColumn('integer')
    id:number;

    @Column('text')
    nombre:string;

    @Column('text')
    apellidoPaterno:string;

    @Column('text')
    apellidoMaterno:string;

    @OneToOne(
        () => Carrera,
        (id_carrera) => id_carrera.id,
        {onDelete: 'CASCADE'}
    )
    id_carrera:Carrera;

    @OneToOne(
        () => User,
        (id_user) => id_user.id,
        {onDelete: 'CASCADE'}
    )
    id_user:User;
}
