import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  providers: [JwtStrategy],
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([User]),
    PassportModule.register({defaultStrategy: 'jwt'}), //Definición de la estrategia como un JWT
    JwtModule.registerAsync({
      imports: [ ConfigModule ],
      inject: [ ConfigService ],
      //Función que se manda llamar cuando se intente registrar de manera asíncrona el módulo
      useFactory: ( configService:ConfigService ) => {
        return {
          secret: configService.get('JWT_SECRET'), //Llave para firmar los tokens utilizando una variable de entorno
          signOptions:{
            expiresIn: '24h', //Definición de la expiración del token
          }
        }
      }
    })
  ],
  exports: [JwtStrategy, PassportModule, JwtModule, TypeOrmModule],
})
export class AuthModule {}
