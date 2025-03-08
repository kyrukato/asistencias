import { Alumno } from "src/alumno/entities/alumno.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryColumn } from "typeorm";

@Entity('Carreras')
export class Carrera {
    @PrimaryColumn('text')
    id:string;

    @Column('text')
    nombre:string;

    @OneToOne(
        ()=> Alumno,
        (alumnos) => alumnos.id_carrera,
        {onUpdate: "CASCADE"}
    )
    alumnos:Alumno;
}
