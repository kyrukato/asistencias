import { Carrera } from "src/carrera/entities/carrera.entity";
import { Periodo } from "src/periodo/entities/periodo.entity";

export class CreateGrupoDto {
    id: string;

    carrera: Carrera;

    semestre: number;

    periodo: Periodo;
}
