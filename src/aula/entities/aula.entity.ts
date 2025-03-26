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
        () => Asistencia,
        (asistencia) => asistencia.aula,
        {onDelete:'CASCADE',onUpdate:'CASCADE'}
    )
    asistencia:Asistencia[];
}

