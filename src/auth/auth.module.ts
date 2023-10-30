import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './google.strategy';
import { JwtService } from '@nestjs/jwt';
import { AuthController } from './auth.controller';

@Module({
    imports: [PassportModule],
    controllers: [AuthController],
    providers: [AuthService, GoogleStrategy, JwtService],
})
export class AuthModule { }