import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('aulas')
export class Aula {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column('text')
    nombre:string;

    @Column('text')
    edificio:string;
}

