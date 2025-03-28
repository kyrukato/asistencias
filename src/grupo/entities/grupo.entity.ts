import { Carrera } from "src/carrera/entities/carrera.entity";
import { MateriaXgrupo } from "src/materia-xgrupo/entities/materia-xgrupo.entity";
import { Periodo } from "src/periodo/entities/periodo.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('grupo')
export class Grupo {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column('text')
    nombre:string;

    @Column('integer')
    semestre:number;

    @ManyToOne(
        () => Carrera,
        (carrera) => carrera.id,
        {onUpdate: 'CASCADE'}
    )
    carrera:Carrera;

    @ManyToOne(
        () => Periodo,
        (periodo) => periodo.id,
        {onUpdate:'CASCADE', onDelete:'CASCADE'}
    )
    periodo:Periodo;

    @OneToMany(
        () => MateriaXgrupo,
        (materiaxgrupo) => materiaxgrupo.grupo,
        {onUpdate:'CASCADE',onDelete:'CASCADE'},
    )
    materiaxgrupo:MateriaXgrupo[];
}
