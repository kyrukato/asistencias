import { Carrera } from "src/carrera/entities/carrera.entity";
import { MateriaXgrupo } from "src/materia-xgrupo/entities/materia-xgrupo.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";

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

    @OneToMany(
        () => MateriaXgrupo,
        (materiaXgrupo) => materiaXgrupo.alumno,
        {onDelete:'CASCADE',onUpdate:'CASCADE'}
    )
    materiaxGrupo:MateriaXgrupo[];
}
