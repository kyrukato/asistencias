import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PlanModule } from 'src/plan/plan.module';
import { CarreraModule } from 'src/carrera/carrera.module';
import { GrupoModule } from 'src/grupo/grupo.module';
import { MateriaModule } from 'src/materia/materia.module';
import { PeriodoModule } from 'src/periodo/periodo.module';
import { AulaModule } from 'src/aula/aula.module';
import { MateriaXgrupoModule } from 'src/materia-xgrupo/materia-xgrupo.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports:[
    PlanModule,
    CarreraModule,
    GrupoModule,
    MateriaModule,
    PeriodoModule,
    AulaModule,
    MateriaXgrupoModule,
    UsersModule,
  ]
})
export class SeedModule {}
