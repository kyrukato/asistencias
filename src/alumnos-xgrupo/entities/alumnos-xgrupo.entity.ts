import { Aula } from "src/aula/entities/aula.entity";
import { MateriaXgrupo } from "src/materia-xgrupo/entities/materia-xgrupo.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity('alumnosXgrupo')
export class AlumnosXgrupo {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @OneToOne(
        () => MateriaXgrupo,
        (materiaGrupo) => materiaGrupo.id,
        {onUpdate:'CASCADE',onDelete:'CASCADE'}
    )
    id_MateriaXGrupo:MateriaXgrupo;

    @OneToOne(
        () => Aula,
        (aula) => aula.id,
        {onUpdate:'CASCADE',onDelete:'CASCADE'}
    )
    id_Aula:Aula;

    @Column('text')
    dia:string;

    @Column('timestamp')
    horaInicio:Timestamp;

    @Column('timestamp')
    horaFin:Timestamp;
}
