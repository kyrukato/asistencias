import { Carrera } from "src/carrera/entities/carrera.entity";
import { Periodo } from "src/periodo/entities/periodo.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('grupo')
export class Grupo {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('integer')
    semestre:number;

    @OneToOne(
        () => Carrera,
        (carrera) => carrera.id,
        {onUpdate: 'CASCADE'}
    )
    id_carrera:Carrera;

    @OneToOne(
        () => Periodo,
        (periodo) => periodo.id,
        {onUpdate:'CASCADE', onDelete:'CASCADE'}
    )
    id_Periodo:Periodo;
}
