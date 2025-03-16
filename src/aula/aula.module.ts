import { Module } from '@nestjs/common';
import { AulaService } from './aula.service';
import { AulaController } from './aula.controller';
import { Aula } from './entities/aula.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AulaController],
  providers: [AulaService],
  imports: [
    TypeOrmModule.forFeature([Aula])
  ],
  exports: [AulaService],
})
export class AulaModule {}
