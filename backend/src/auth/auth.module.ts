import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './google/google.strategy';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        UserModule,
        PassportModule,
        ConfigModule,
        JwtModule.register({
            global: true,
            secret: "SECRET",
            signOptions: { expiresIn: '1h' },

        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, GoogleStrategy],
})
export class AuthModule { }