import { Module } from '@nestjs/common';
import { GrupoService } from './grupo.service';
import { GrupoController } from './grupo.controller';
import { Grupo } from './entities/grupo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrera } from 'src/carrera/entities/carrera.entity';
import { Periodo } from 'src/periodo/entities/periodo.entity';

@Module({
  controllers: [GrupoController],
  providers: [GrupoService],
  imports: [
    TypeOrmModule.forFeature([Grupo, Carrera, Periodo])
  ],
  exports:[GrupoService]
})
export class GrupoModule {}
