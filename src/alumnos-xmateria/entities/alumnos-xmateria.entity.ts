import { Alumno } from "src/alumno/entities/alumno.entity";
import { MateriaXgrupo } from "src/materia-xgrupo/entities/materia-xgrupo.entity";
import { Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('alumnosXmateria')
export class AlumnosXmateria {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @ManyToOne(
        () => MateriaXgrupo,
        (materiaGrupo) => materiaGrupo.id,
        {onUpdate:'CASCADE',onDelete:'CASCADE'}
    )
    materiaXGrupo:MateriaXgrupo;

    @ManyToOne(
        () => Alumno,
        (alumno) => alumno.NoControl,
        {onDelete:'CASCADE',onUpdate:'CASCADE'}
    )
    alumno:Alumno;
}
