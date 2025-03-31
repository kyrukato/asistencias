interface seedPlan {
    clave:string;
    descripcion:string;
    active:boolean;
}

interface seedDataPlan{
    plan:seedPlan[];
}

export const initialDataPlan:seedDataPlan = {
    plan:[
        {
            clave:'Plan1',
            descripcion:'Plan para la carrera de Ingeniería de Software modalidad presencial.',
            active:true
        },
        {
            clave:'Plan2',
            descripcion:'Plan para la carrera de Ingeniería de Software modalidad virtual.',
            active:true
        },
        {
            clave:'Plan3',
            descripcion:'Plan para la carrera de Ingeniería de Software nueva generación.',
            active:true
        },
        {
            clave:'Plan4',
            descripcion:'Plan para la carrera de Ingeniería Civil.',
            active:true
        },
        {
            clave:'Plan5',
            descripcion:'Plan para la carrera de Ingeniería Geodesia.',
            active:true
        },
        {
            clave:'Plan6',
            descripcion:'Plan para la carrera de Ingeniería Procesos Industriales.',
            active:true
        },
        {
            clave:'Plan7',
            descripcion:'Plan para la carrera de Ingeniería en Nanotecnología.',
            active:true
        },
    ]
}