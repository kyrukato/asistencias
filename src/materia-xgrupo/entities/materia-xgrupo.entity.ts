import { Grupo } from "src/grupo/entities/grupo.entity";
import { Materia } from "src/materia/entities/materia.entity";
import { Profesor } from "src/profesor/entities/profesor.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('materiaXgrupo')
export class MateriaXgrupo {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @OneToOne(
        () => Materia,
        (materia) => materia.id,
        {onDelete:'CASCADE',onUpdate:'CASCADE'}
    )
    id_Materia:Materia;

    @OneToOne(
        () => Grupo,
        (grupo) => grupo.id,
        {onUpdate:'CASCADE',onDelete:'CASCADE'}
    )
    id_Grupo:Grupo;

    @Column('integer')
    semestre:number;

    @OneToOne(
        () => Profesor,
        (profesor) => profesor.noEmpleado,
        {onDelete:'CASCADE',onUpdate:'CASCADE'}
    )
    id_Profesor:Profesor;
}
