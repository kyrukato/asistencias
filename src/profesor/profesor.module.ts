import { Module } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { ProfesorController } from './profesor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profesor } from './entities/profesor.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [ProfesorController],
  providers: [ProfesorService],
  imports: [
    TypeOrmModule.forFeature([Profesor])
  ],
  exports: [ProfesorService]
})
export class ProfesorModule {}
