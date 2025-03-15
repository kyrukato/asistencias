import { Carrera } from "src/carrera/entities/carrera.entity";

export class CreateMateriaDto {
    id: string;

    nombre: string;

    creditos: number;

    temario: string[];

    carrera:Carrera;
}
