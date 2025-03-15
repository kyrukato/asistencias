import { Module } from '@nestjs/common';
import { PlanService } from './plan.service';
import { PlanController } from './plan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plan } from './entities/plan.entity';

@Module({
  controllers: [PlanController],
  providers: [PlanService],
  imports: [
    TypeOrmModule.forFeature([Plan])
  ],
  exports: [PlanService]
})
export class PlanModule {}
