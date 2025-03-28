import { Carrera } from "src/carrera/entities/carrera.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('plan')
export class Plan {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column('text')
    clave:string;

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
