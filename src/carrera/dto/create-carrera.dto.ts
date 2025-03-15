import { Plan } from "src/plan/entities/plan.entity";

export class CreateCarreraDto {
    id: string;

    nombre: string;

    plan: Plan;
}
