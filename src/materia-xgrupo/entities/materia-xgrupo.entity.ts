import { AlumnosXgrupo } from "src/alumnos-xgrupo/entities/alumnos-xgrupo.entity";
import { AlumnosXmateria } from "src/alumnos-xmateria/entities/alumnos-xmateria.entity";
import { Grupo } from "src/grupo/entities/grupo.entity";
import { Materia } from "src/materia/entities/materia.entity";
import { Profesor } from "src/profesor/entities/profesor.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('materiaXgrupo')
export class MateriaXgrupo {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @ManyToOne(
        () => Materia,
        (materia) => materia.id,
        {onDelete:'CASCADE',onUpdate:'CASCADE'}
    )
    materia:Materia;

    @ManyToOne(
        () => Grupo,
        (grupo) => grupo.id,
        {onUpdate:'CASCADE',onDelete:'CASCADE'}
    )
    grupo:Grupo;

    @Column('integer')
    semestre:number;

    @ManyToOne(
        () => Profesor,
        (profesor) => profesor.noEmpleado,
        {onDelete:'CASCADE',onUpdate:'CASCADE'}
    )
    profesor:Profesor;

    @OneToMany(
        () => AlumnosXmateria,
        (alumnosxmateria) => alumnosxmateria.materiaXGrupo,
        {onUpdate:'CASCADE',onDelete:'CASCADE'}
    )
    alumnosxmateria:AlumnosXmateria[];

    @OneToMany(
        () => AlumnosXgrupo,
        (alumnosxgrupo) => alumnosxgrupo.materiaXGrupo,
        {onUpdate:'CASCADE',onDelete:'CASCADE'}
    )
    alumnosxgrupo:AlumnosXgrupo[];
}
