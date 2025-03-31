import { Plan } from "src/plan/entities/plan.entity";

interface seedCarrera{
    clave:string;
    nombre:string;
    plan:Plan;
}

interface seedDataCarrera{
    carrera:seedCarrera[];
}

export const initialDataCarrera:seedDataCarrera = {
    carrera:[
        {
            clave:"IS",
            nombre:'Ingeniería de Software',
            plan:{id:1} as Plan,
        },
        {
            clave:"ISV",
            nombre:'Ingeniería de Software Virtual',
            plan:{id:2} as Plan,
        },
        {
            clave:"ISP",
            nombre:'Ingeniería de Software',
            plan:{id:3} as Plan,
        },
        {
            clave:"IC",
            nombre:'Ingeniería Civil',
            plan:{id:4} as Plan,
        },
        {
            clave:"IG",
            nombre:'Ingeniería Geodesia',
            plan:{id:5} as Plan,
        },
        {
            clave:"IPI",
            nombre:'Ingeniería en Procesos Industriales',
            plan:{id:6} as Plan,
        },
        {
            clave:"IN",
            nombre:'Ingeniería en Nanotecnología',
            plan:{id:7} as Plan,
        },
    ]
}