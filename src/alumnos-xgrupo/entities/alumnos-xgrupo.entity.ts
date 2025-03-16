import { Aula } from "src/aula/entities/aula.entity";
import { MateriaXgrupo } from "src/materia-xgrupo/entities/materia-xgrupo.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity('alumnosXgrupo')
export class AlumnosXgrupo {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @ManyToOne(
        () => MateriaXgrupo,
        (materiaGrupo) => materiaGrupo.id,
        {onUpdate:'CASCADE',onDelete:'CASCADE'}
    )
    materiaXGrupo:MateriaXgrupo;

    @ManyToOne(
        () => Aula,
        (aula) => aula.id,
        {onUpdate:'CASCADE',onDelete:'CASCADE'}
    )
    aula:Aula;

    @Column('text')
    dia:string;

    @Column('time')
    horaInicio:string;

    @Column('time')
    horaFin:string;
}
