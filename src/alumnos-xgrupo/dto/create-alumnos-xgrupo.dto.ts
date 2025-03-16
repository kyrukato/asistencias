import { Aula } from "src/aula/entities/aula.entity";
import { MateriaXgrupo } from "src/materia-xgrupo/entities/materia-xgrupo.entity";
import { Timestamp } from "typeorm";

export class CreateAlumnosXgrupoDto {
    materiaXGrupo:MateriaXgrupo;

    aula:Aula;

    dia:string;

    horaInicio:string;

    horaFin:string;
}
