import { Injectable } from '@nestjs/common';
import { PlanService } from 'src/plan/plan.service';
import { initialDataPlan } from './data/Plan.seed';
import { CarreraService } from 'src/carrera/carrera.service';
import { MateriaService } from 'src/materia/materia.service';
import { GrupoService } from 'src/grupo/grupo.service';
import { PeriodoService } from 'src/periodo/periodo.service';
import { MateriaXgrupoService } from 'src/materia-xgrupo/materia-xgrupo.service';
import { AulaService } from 'src/aula/aula.service';
import { UsersService } from 'src/users/users.service';
import { initialDataUsuario } from './data/Usuarios.seed';
import { initialDataCarrera } from './data/Carreras.seed';
import { initialDataMateria } from './data/Materias.seed';
import { initialDataPeriodo } from './data/Periodo.seed';
import { initialDataAula } from './data/Aulas.Seed';
import { initialDataGrupo } from './data/Grupos.Seed';
import { initialDataMXG } from './data/MateriaXGrupo.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly planService:PlanService,
    private readonly carreraService:CarreraService,
    private readonly materiaService:MateriaService,
    private readonly grupoService:GrupoService,
    private readonly periodoService:PeriodoService,
    private readonly materiaxGrupoService:MateriaXgrupoService,
    private readonly aulaservice:AulaService,
    private readonly usuarioService:UsersService,
  ){}
  async runSeed(){
    await this.insertarPlan();
    await this.insertarCarrera();
    await this.insertarMaterias();
    await this.insertarUsuarios();
    await this.insertarPeriodos();
    await this.insertarAulas();
    await this.insertarGrupos();
    await this.insertarMateriaXGrupo();
    return 'SEED EXECUTED';
  }

  private async insertarPlan(){
    //await this.planService.deleteAll();
    const planes = initialDataPlan.plan;
    const insertPromises = []
    planes.forEach(plan => {
      insertPromises.push(this.planService.create(plan));
    })

    await Promise.all(insertPromises);
  }

  private async insertarUsuarios() {
    //await this.usuarioService.deleteAll();
    const usuarios = initialDataUsuario.usuario;
    const insertPromises = [];
    usuarios.forEach(user => {
      insertPromises.push(this.usuarioService.create(user))
    })
    await Promise.all(insertPromises);
  }

  private async insertarCarrera(){
    const carreras = initialDataCarrera.carrera;
    const insertPromises = [];
    carreras.forEach(carrera => {
      insertPromises.push(this.carreraService.create(carrera))
    })
    await Promise.all(insertPromises);
  }

  private async insertarMaterias(){
    const materias = initialDataMateria.materia;
    const insertPromises = [];
    materias.forEach(materia => {
      insertPromises.push(this.materiaService.create(materia))
    })
    await Promise.all(insertPromises);
  }

  private async insertarPeriodos(){
    const periodos = initialDataPeriodo.periodo;
    const insertPromises = [];
    periodos.forEach(periodo => {
      insertPromises.push(this.periodoService.create(periodo))
    });
    await Promise.all(insertPromises);
  }

  private async insertarAulas(){
    const aulas = initialDataAula.aula;
    const insertPromises = [];
    aulas.forEach(aula =>{
      insertPromises.push(this.aulaservice.create(aula))
    });
    await Promise.all(insertPromises);
  }

  private async insertarGrupos(){
    const grupos = initialDataGrupo.grupo;
    const insertPromises = [];
    grupos.forEach(grupo =>{
      insertPromises.push(this.grupoService.create(grupo))
    })
    await Promise.all(insertPromises);
  }

  private async insertarMateriaXGrupo(){
    const materiaXGrupo = initialDataMXG.mxg;
    const insertPromises = []
    materiaXGrupo.forEach(mxg => {
      insertPromises.push(this.materiaxGrupoService.create(mxg))
    })
    await Promise.all(insertPromises);
  }

}
