import { Module } from '@nestjs/common';
import { AlumnosXgrupoService } from './alumnos-xgrupo.service';
import { AlumnosXgrupoController } from './alumnos-xgrupo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnosXgrupo } from './entities/alumnos-xgrupo.entity';

@Module({
  controllers: [AlumnosXgrupoController],
  providers: [AlumnosXgrupoService],
  imports: [
    TypeOrmModule.forFeature([AlumnosXgrupo])
  ],
  exports: [AlumnosXgrupoService],
})
export class AlumnosXgrupoModule {}
