import { Module } from '@nestjs/common';
import { AsistenciasService } from './asistencias.service';
import { AsistenciasController } from './asistencias.controller';
import { Asistencia } from './entities/asistencia.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AsistenciasController],
  providers: [AsistenciasService],
  imports: [
    TypeOrmModule.forFeature([Asistencia])
  ],
  exports:[AsistenciasService]
})
export class AsistenciasModule {}
