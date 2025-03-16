import { AlumnosXgrupo } from "src/alumnos-xgrupo/entities/alumnos-xgrupo.entity";
import { Asistencia } from "src/asistencias/entities/asistencia.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('aulas')
export class Aula {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column('text')
    nombre:string;

    @Column('text')
    edificio:string;

    @OneToMany(
        () => AlumnosXgrupo,
        (alumnosxgrupo) => alumnosxgrupo.aula,
        {onDelete:'CASCADE',onUpdate:'CASCADE'}
    )
    alumnosxgrupo:AlumnosXgrupo[];

    @OneToMany(
        () => Asistencia,
        (asistencia) => asistencia.aula,
        {onDelete:'CASCADE',onUpdate:'CASCADE'}
    )
    asistencia:Asistencia[];
}

