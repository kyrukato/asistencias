import { Asistencia } from "src/asistencias/entities/asistencia.entity";
import { Carrera } from "src/carrera/entities/carrera.entity";
import { MateriaXgrupo } from "src/materia-xgrupo/entities/materia-xgrupo.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('materia')
export class Materia {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column('text')
    clave:string;

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

    @OneToMany(
        () => MateriaXgrupo,
        (materiaxgrupo) => materiaxgrupo.materia,
        {onDelete:'CASCADE',onUpdate:'CASCADE'}
    )
    materiaxgrupo:MateriaXgrupo[];

    @OneToMany(
        () => Asistencia,
        (asistencia) => asistencia.materia,
        {onDelete:'CASCADE',onUpdate:'CASCADE'}
    )
    asistencia:Asistencia;

}
