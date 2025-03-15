import { Carrera } from "src/carrera/entities/carrera.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity('plan')
export class Plan {
    @PrimaryColumn('text')
    id:string;

    @Column('text')
    descripcion:string;

    @Column("bool",{
        default: true,
    })
    active:boolean;

    @OneToMany(
        () => Carrera,
        (carrera) => carrera.plan,
        {onDelete:'CASCADE',onUpdate:'CASCADE'}
    )
    carrera:Carrera[];
}
