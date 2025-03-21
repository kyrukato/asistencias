import { Module } from '@nestjs/common';
import { GrupoService } from './grupo.service';
import { GrupoController } from './grupo.controller';
import { Grupo } from './entities/grupo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [GrupoController],
  providers: [GrupoService],
  imports: [
    TypeOrmModule.forFeature([Grupo])
  ],
  exports:[GrupoService]
})
export class GrupoModule {}
