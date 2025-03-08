import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";

@Entity('profesores')
export class Profesor {
    @PrimaryColumn('text')
    id:string

    @OneToOne(
        () => User,
        (user) => user.id,
        {onUpdate:'CASCADE',onDelete:'CASCADE'}
    )
    id_user:User;

    @Column('text')
    nombre:string;

    @Column('text')
    apellidoPaterno:string;

    @Column('text')
    apellidoMaterno:string;

    @Column('text',{array:true})
    materias:string[];
}
