interface seedPeriodo{
    nombre:string;
    fecha_Inicio:string;
    fecha_Fin:string;
    periodo:number
}

interface seedDataPeriodo{
    periodo:seedPeriodo[];
}

export const initialDataPeriodo:seedDataPeriodo = {
    periodo:[
        {
            nombre:'2024-2025',
            fecha_Inicio:'2024-08-12',
            fecha_Fin:'2025-02-03',
            periodo:1
        },
        {
            nombre:'2024-2025',
            fecha_Inicio:'2025-02-03',
            fecha_Fin:'2025-06-20',
            periodo:2
        }
    ]
}