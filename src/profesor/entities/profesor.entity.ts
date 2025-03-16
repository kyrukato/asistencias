import { MateriaXgrupo } from "src/materia-xgrupo/entities/materia-xgrupo.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";

@Entity('profesores')
export class Profesor {
    @PrimaryColumn('integer')
    noEmpleado:number

    @Column('text')
    nombre:string;

    @Column('text')
    apellidoPaterno:string;

    @Column('text')
    apellidoMaterno:string;

    @Column('text',{array:true})
    materias:string[];

    @ManyToOne(
        ()=> User,
        (user) => user.id,
        {onDelete:'CASCADE',onUpdate:'CASCADE'}
    )
    user:User;

    @OneToMany(
        () => MateriaXgrupo,
        (materiaxgrupo) => materiaxgrupo.profesor,
        {onDelete:'CASCADE',onUpdate:'CASCADE'}
    )
    materiaxgrupo:MateriaXgrupo[];
}
