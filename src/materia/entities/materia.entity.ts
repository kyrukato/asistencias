import { Carrera } from "src/carrera/entities/carrera.entity";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity('materia')
export class Materia {
    @PrimaryColumn('text')
    id:string;

    @Column('text')
    nombre:string;
    
    @ManyToOne(
        () => Carrera,
        (carrera) => carrera.id,
        {onUpdate:'CASCADE'}
    )
    carrera:Carrera;

    @Column('integer')
    creditos:number;

    @Column('text',{array:true})
    temario:String[];

}
