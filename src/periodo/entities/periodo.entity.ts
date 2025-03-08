import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('periodo')
export class Periodo {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('date')
    fecha_Inicio:Date;

    @Column('date')
    fecha_Fin:Date;

    @Column('integer')
    periodo:number;
}
