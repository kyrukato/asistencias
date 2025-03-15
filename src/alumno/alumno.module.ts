import { Module } from '@nestjs/common';
import { AlumnoService } from './alumno.service';
import { AlumnoController } from './alumno.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from './entities/alumno.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [AlumnoController],
  providers: [AlumnoService],
  imports: [
    TypeOrmModule.forFeature([Alumno])
  ],
  exports:[AlumnoService]
})
export class AlumnoModule {}
