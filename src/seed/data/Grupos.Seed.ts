import { Carrera } from "src/carrera/entities/carrera.entity";
import { Periodo } from "src/periodo/entities/periodo.entity";

interface seedGrupo {
    nombre:string;
    carrera:Carrera;
    semestre:number;
    periodo:Periodo;
}

interface seedDataGrupo {
    grupo:seedGrupo[];
}

export const initialDataGrupo:seedDataGrupo = {
    grupo:[
        {
            nombre:'1-01',
            carrera:{id:1} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-01',
            carrera:{id:1} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'1-02',
            carrera:{id:1} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-02',
            carrera:{id:1} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'1-03',
            carrera:{id:1} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-03',
            carrera:{id:1} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'1-04',
            carrera:{id:1} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-04',
            carrera:{id:1} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-01',
            carrera:{id:1} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-01',
            carrera:{id:1} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-02',
            carrera:{id:1} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-02',
            carrera:{id:1} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-03',
            carrera:{id:1} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-03',
            carrera:{id:1} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-04',
            carrera:{id:1} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-04',
            carrera:{id:1} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'3-01',
            carrera:{id:1} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-01',
            carrera:{id:1} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        
        {
            nombre:'3-02',
            carrera:{id:1} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-02',
            carrera:{id:1} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        
        {
            nombre:'3-03',
            carrera:{id:1} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-03',
            carrera:{id:1} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        
        {
            nombre:'3-04',
            carrera:{id:1} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-04',
            carrera:{id:1} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-01',
            carrera:{id:1} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-01',
            carrera:{id:1} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-02',
            carrera:{id:1} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-02',
            carrera:{id:1} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-03',
            carrera:{id:1} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-03',
            carrera:{id:1} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-04',
            carrera:{id:1} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-04',
            carrera:{id:1} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },{
            nombre:'5-01',
            carrera:{id:1} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'5-02',
            carrera:{id:1} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'5-03',
            carrera:{id:1} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'5-04',
            carrera:{id:1} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },{
            nombre:'1-01',
            carrera:{id:2} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-01',
            carrera:{id:2} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'1-02',
            carrera:{id:2} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-02',
            carrera:{id:2} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'1-03',
            carrera:{id:2} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-03',
            carrera:{id:2} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'1-04',
            carrera:{id:2} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-04',
            carrera:{id:2} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-01',
            carrera:{id:2} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-01',
            carrera:{id:2} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-02',
            carrera:{id:2} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-02',
            carrera:{id:2} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-03',
            carrera:{id:2} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-03',
            carrera:{id:2} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-04',
            carrera:{id:2} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-04',
            carrera:{id:2} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'3-01',
            carrera:{id:2} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-01',
            carrera:{id:2} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        
        {
            nombre:'3-02',
            carrera:{id:2} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-02',
            carrera:{id:2} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        
        {
            nombre:'3-03',
            carrera:{id:2} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-03',
            carrera:{id:2} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        
        {
            nombre:'3-04',
            carrera:{id:2} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-04',
            carrera:{id:2} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-01',
            carrera:{id:2} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-01',
            carrera:{id:2} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-02',
            carrera:{id:2} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-02',
            carrera:{id:2} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-03',
            carrera:{id:2} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-03',
            carrera:{id:2} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-04',
            carrera:{id:2} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-04',
            carrera:{id:2} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },{
            nombre:'5-01',
            carrera:{id:2} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'5-02',
            carrera:{id:2} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'5-03',
            carrera:{id:2} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'5-04',
            carrera:{id:2} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-01',
            carrera:{id:3} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-01',
            carrera:{id:3} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'1-02',
            carrera:{id:3} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-02',
            carrera:{id:3} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'1-03',
            carrera:{id:3} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-03',
            carrera:{id:3} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'1-04',
            carrera:{id:3} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-04',
            carrera:{id:3} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-01',
            carrera:{id:3} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-01',
            carrera:{id:3} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-02',
            carrera:{id:3} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-02',
            carrera:{id:3} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-03',
            carrera:{id:3} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-03',
            carrera:{id:3} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-04',
            carrera:{id:3} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-04',
            carrera:{id:3} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'3-01',
            carrera:{id:3} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-01',
            carrera:{id:3} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        
        {
            nombre:'3-02',
            carrera:{id:3} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-02',
            carrera:{id:3} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        
        {
            nombre:'3-03',
            carrera:{id:3} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-03',
            carrera:{id:3} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        
        {
            nombre:'3-04',
            carrera:{id:3} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-04',
            carrera:{id:3} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-01',
            carrera:{id:3} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-01',
            carrera:{id:3} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-02',
            carrera:{id:3} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-02',
            carrera:{id:3} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-03',
            carrera:{id:3} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-03',
            carrera:{id:3} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-04',
            carrera:{id:3} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-04',
            carrera:{id:3} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },{
            nombre:'5-01',
            carrera:{id:3} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'5-02',
            carrera:{id:3} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'5-03',
            carrera:{id:3} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'5-04',
            carrera:{id:3} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-01',
            carrera:{id:4} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-01',
            carrera:{id:4} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'1-02',
            carrera:{id:4} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-02',
            carrera:{id:4} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'1-03',
            carrera:{id:4} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-03',
            carrera:{id:4} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'1-04',
            carrera:{id:4} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-04',
            carrera:{id:4} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-01',
            carrera:{id:4} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-01',
            carrera:{id:4} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-02',
            carrera:{id:4} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-02',
            carrera:{id:4} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-03',
            carrera:{id:4} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-03',
            carrera:{id:4} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-04',
            carrera:{id:4} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-04',
            carrera:{id:4} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'3-01',
            carrera:{id:4} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-01',
            carrera:{id:4} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        
        {
            nombre:'3-02',
            carrera:{id:4} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-02',
            carrera:{id:4} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        
        {
            nombre:'3-03',
            carrera:{id:4} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-03',
            carrera:{id:4} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        
        {
            nombre:'3-04',
            carrera:{id:4} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-04',
            carrera:{id:4} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-01',
            carrera:{id:4} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-01',
            carrera:{id:4} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-02',
            carrera:{id:4} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-02',
            carrera:{id:4} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-03',
            carrera:{id:4} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-03',
            carrera:{id:4} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-04',
            carrera:{id:4} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-04',
            carrera:{id:4} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },{
            nombre:'5-01',
            carrera:{id:4} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'5-02',
            carrera:{id:4} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'5-03',
            carrera:{id:4} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'5-04',
            carrera:{id:4} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-01',
            carrera:{id:5} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-01',
            carrera:{id:5} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'1-02',
            carrera:{id:5} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-02',
            carrera:{id:5} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'1-03',
            carrera:{id:5} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-03',
            carrera:{id:5} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'1-04',
            carrera:{id:5} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-04',
            carrera:{id:5} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-01',
            carrera:{id:5} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-01',
            carrera:{id:5} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-02',
            carrera:{id:5} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-02',
            carrera:{id:5} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-03',
            carrera:{id:5} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-03',
            carrera:{id:5} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-04',
            carrera:{id:5} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-04',
            carrera:{id:5} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'3-01',
            carrera:{id:5} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-01',
            carrera:{id:5} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        
        {
            nombre:'3-02',
            carrera:{id:5} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-02',
            carrera:{id:5} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        
        {
            nombre:'3-03',
            carrera:{id:5} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-03',
            carrera:{id:5} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        
        {
            nombre:'3-04',
            carrera:{id:5} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-04',
            carrera:{id:5} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-01',
            carrera:{id:5} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-01',
            carrera:{id:5} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-02',
            carrera:{id:5} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-02',
            carrera:{id:5} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-03',
            carrera:{id:5} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-03',
            carrera:{id:5} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-04',
            carrera:{id:5} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-04',
            carrera:{id:5} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },{
            nombre:'5-01',
            carrera:{id:5} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'5-02',
            carrera:{id:5} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'5-03',
            carrera:{id:5} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'5-04',
            carrera:{id:5} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-01',
            carrera:{id:6} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-01',
            carrera:{id:6} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'1-02',
            carrera:{id:6} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-02',
            carrera:{id:6} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'1-03',
            carrera:{id:6} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-03',
            carrera:{id:6} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'1-04',
            carrera:{id:6} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-04',
            carrera:{id:6} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-01',
            carrera:{id:6} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-01',
            carrera:{id:6} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-02',
            carrera:{id:6} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-02',
            carrera:{id:6} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-03',
            carrera:{id:6} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-03',
            carrera:{id:6} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-04',
            carrera:{id:6} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-04',
            carrera:{id:6} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'3-01',
            carrera:{id:6} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-01',
            carrera:{id:6} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        
        {
            nombre:'3-02',
            carrera:{id:6} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-02',
            carrera:{id:6} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        
        {
            nombre:'3-03',
            carrera:{id:6} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-03',
            carrera:{id:6} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        
        {
            nombre:'3-04',
            carrera:{id:6} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-04',
            carrera:{id:6} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-01',
            carrera:{id:6} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-01',
            carrera:{id:6} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-02',
            carrera:{id:6} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-02',
            carrera:{id:6} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-03',
            carrera:{id:6} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-03',
            carrera:{id:6} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-04',
            carrera:{id:6} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-04',
            carrera:{id:6} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },{
            nombre:'5-01',
            carrera:{id:6} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'5-02',
            carrera:{id:6} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'5-03',
            carrera:{id:6} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'5-04',
            carrera:{id:6} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-01',
            carrera:{id:7} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-01',
            carrera:{id:7} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'1-02',
            carrera:{id:7} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-02',
            carrera:{id:7} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'1-03',
            carrera:{id:7} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-03',
            carrera:{id:7} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'1-04',
            carrera:{id:7} as Carrera,
            semestre: 1,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'1-04',
            carrera:{id:7} as Carrera,
            semestre: 2,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-01',
            carrera:{id:7} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-01',
            carrera:{id:7} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-02',
            carrera:{id:7} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-02',
            carrera:{id:7} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-03',
            carrera:{id:7} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-03',
            carrera:{id:7} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'2-04',
            carrera:{id:7} as Carrera,
            semestre: 3,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'2-04',
            carrera:{id:7} as Carrera,
            semestre: 4,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'3-01',
            carrera:{id:7} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-01',
            carrera:{id:7} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        
        {
            nombre:'3-02',
            carrera:{id:7} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-02',
            carrera:{id:7} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        
        {
            nombre:'3-03',
            carrera:{id:7} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-03',
            carrera:{id:7} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        
        {
            nombre:'3-04',
            carrera:{id:7} as Carrera,
            semestre: 5,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'3-04',
            carrera:{id:7} as Carrera,
            semestre: 6,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-01',
            carrera:{id:7} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-01',
            carrera:{id:7} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-02',
            carrera:{id:7} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-02',
            carrera:{id:7} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-03',
            carrera:{id:7} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-03',
            carrera:{id:7} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },
        {
            nombre:'4-04',
            carrera:{id:7} as Carrera,
            semestre: 7,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'4-04',
            carrera:{id:7} as Carrera,
            semestre: 8,
            periodo:{id:2} as Periodo
        },{
            nombre:'5-01',
            carrera:{id:7} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'5-02',
            carrera:{id:7} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'5-03',
            carrera:{id:7} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
        {
            nombre:'5-04',
            carrera:{id:7} as Carrera,
            semestre: 9,
            periodo:{id:1} as Periodo
        },
    ]
}