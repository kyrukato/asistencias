import { Module } from '@nestjs/common';
import { MateriaXgrupoService } from './materia-xgrupo.service';
import { MateriaXgrupoController } from './materia-xgrupo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MateriaXgrupo } from './entities/materia-xgrupo.entity';

@Module({
  controllers: [MateriaXgrupoController],
  providers: [MateriaXgrupoService],
  imports: [
    TypeOrmModule.forFeature([MateriaXgrupo])
  ],
  exports:[MateriaXgrupoService],
})
export class MateriaXgrupoModule {}
