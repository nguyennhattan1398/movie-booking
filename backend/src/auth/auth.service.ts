import { Injectable, Req } from '@nestjs/common';
import { CreateUserDTO } from 'src/dtos/user.dto';
import { PayloadJWT } from 'src/interfaces/user.interface';
import { UserService } from 'src/user/user.service';
import { sign, verify } from 'jsonwebtoken';
import { JWT_Info, JWT_Payload } from 'src/dtos/jwt.dto';
import { JwtService } from '@nestjs/jwt';
import { config } from 'dotenv';

config();

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private userService: UserService
    ) { }

    async googleLogin(user: any) {
        const payload = { username: user.email, sub: user.id };

        return {
            access_token: sign(payload, process.env.JWT_KEY, { algorithm: 'RS256' }),
        };
    }

    async googleLoginCallback(@Req() req): Promise<PayloadJWT> {
        const findUser = await this.userService.findUserByUsername(req.user.email);
        if (!findUser && req.user) {
            const user: CreateUserDTO = {
                name: req.user.displayName,
                email: req.user.email,
                avt: req.user.picture
            };
            const newUser = await this.userService.createUser(user)
            const jwt = this.createJwt({ email: req.user.email })
            const refreshToken = this.createJwt({ email: req.user.email })
            return {
                token: jwt,
                refreshToken,
                user_info: newUser
            };
        }
        const jwt = this.createJwt({ email: findUser.email })
        const refreshToken = this.createJwt({ email: req.user.email })
        return {
            token: jwt,
            refreshToken,
            user_info: findUser
        };
    }

    createJwt(info: JWT_Payload): string {
        return sign(info, process.env.JWT_KEY, { algorithm: "HS256" })
    }

    async verifyToken(token: string) {
        verify(token, process.env.JWT_KEY);
    }
}