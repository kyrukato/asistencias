import { Module } from '@nestjs/common';
import { PeriodoService } from './periodo.service';
import { PeriodoController } from './periodo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Periodo } from './entities/periodo.entity';

@Module({
  controllers: [PeriodoController],
  providers: [PeriodoService],
  imports: [
    TypeOrmModule.forFeature([Periodo])
  ],
  exports:[PeriodoService],
})
export class PeriodoModule {}
