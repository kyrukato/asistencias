import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from 'src/alumno/entities/alumno.entity';
import { AlumnoModule } from 'src/alumno/alumno.module';
import { AuthModule } from 'src/auth/auth.module';
import { ProfesorModule } from 'src/profesor/profesor.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    AuthModule,
    AlumnoModule,
    ProfesorModule,
    TypeOrmModule.forFeature([User])
  ],
  exports: [TypeOrmModule,UsersService]
})
export class UsersModule {}
