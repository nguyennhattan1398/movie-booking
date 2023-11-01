// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDTO } from 'src/dtos/user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private userService: UserService
    ) { }

    async googleLogin(user: any) {
        const payload = { username: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async googleLoginCallback(req) {
        const findUser = await this.userService.findUserByUsername(req.user.email);
        console.log("🚀 ~ file: auth.service.ts:23 ~ AuthService ~ googleLoginCallback ~ findUser:", findUser)
        if (!findUser && req.user) {
            const newUser: CreateUserDTO = {
                name: req.user.displayName,
                email: req.user.email,
                avt: req.user.photos
            };
            await this.userService.createUser(newUser)
            const jwt = this.jwtService.sign({ id: "1" })
            return jwt;
        }
        const jwt = this.jwtService.sign({ id: "2" })
        return jwt;
    }
}