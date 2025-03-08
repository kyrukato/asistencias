import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('plan')
export class Plan {
    @PrimaryColumn('text')
    id:string;

    @Column('text')
    descripcion:string;
}
