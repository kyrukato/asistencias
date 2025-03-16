import { Grupo } from "src/grupo/entities/grupo.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('periodo')
export class Periodo {
    @PrimaryGeneratedColumn('uuid')
    id:string;

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
