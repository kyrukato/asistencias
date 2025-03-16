import { Alumno } from "src/alumno/entities/alumno.entity";
import { MateriaXgrupo } from "src/materia-xgrupo/entities/materia-xgrupo.entity";

export class CreateAlumnosXmateriaDto {
    materiaXgrupo:MateriaXgrupo;

    alumno:Alumno;
}
