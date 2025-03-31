import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProfesorModule } from './profesor/profesor.module';
import { AlumnoModule } from './alumno/alumno.module';
import { MateriaModule } from './materia/materia.module';
import { CarreraModule } from './carrera/carrera.module';
import { GrupoModule } from './grupo/grupo.module';
import { PlanModule } from './plan/plan.module';
import { AulaModule } from './aula/aula.module';
import { PeriodoModule } from './periodo/periodo.module';
import { MateriaXgrupoModule } from './materia-xgrupo/materia-xgrupo.module';
import { AsistenciasModule } from './asistencias/asistencias.module';
import { AuthModule } from './auth/auth.module';
import { AppService } from './app.service';
import { SeedModule } from './seed/seed.module';




@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    ProfesorModule,
    AlumnoModule,
    MateriaModule,
    CarreraModule,
    GrupoModule,
    PlanModule,
    AulaModule,
    PeriodoModule,
    MateriaXgrupoModule,
    AsistenciasModule,
    AuthModule,
    SeedModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
