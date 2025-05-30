import { Grupo } from "src/grupo/entities/grupo.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('periodo')
export class Periodo {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column('text')
    nombre:string;

    @Column({type: 'date'})
    fecha_Inicio:string;

    @Column({type:'date'})
    fecha_Fin:string;

    @Column('integer')
    periodo:number;

    @OneToMany(
        () => Grupo,
        (grupo) => grupo.periodo,
        {onDelete:'CASCADE',onUpdate:'CASCADE'}
    )
    grupo:Grupo;
}
