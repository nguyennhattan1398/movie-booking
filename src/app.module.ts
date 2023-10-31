import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { GoogleStrategy } from './auth/google.strategy';
import { AuthModule } from './auth/auth.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017', { dbName: 'movie-booking' }),
    AuthModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy, JwtService],
})
export class AppModule { }
