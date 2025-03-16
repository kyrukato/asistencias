import { Module } from '@nestjs/common';
import { AlumnosXmateriaService } from './alumnos-xmateria.service';
import { AlumnosXmateriaController } from './alumnos-xmateria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnosXmateria } from './entities/alumnos-xmateria.entity';

@Module({
  controllers: [AlumnosXmateriaController],
  providers: [AlumnosXmateriaService],
  imports: [
    TypeOrmModule.forFeature([AlumnosXmateria])
  ],
  exports:[AlumnosXmateriaService]
})
export class AlumnosXmateriaModule {}
