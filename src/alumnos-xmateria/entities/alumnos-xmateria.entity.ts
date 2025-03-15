import { Alumno } from "src/alumno/entities/alumno.entity";
import { MateriaXgrupo } from "src/materia-xgrupo/entities/materia-xgrupo.entity";
import { Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('alumnosXmateria')
export class AlumnosXmateria {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @OneToOne(
        () => MateriaXgrupo,
        (materiaGrupo) => materiaGrupo.id,
        {onUpdate:'CASCADE',onDelete:'CASCADE'}
    )
    id_MateriaXGrupo:MateriaXgrupo;

}
