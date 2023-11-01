import { Injectable, Req } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDTO } from 'src/dtos/user.dto';
import { PayloadJWT, UserInterface } from 'src/interfaces/user.interface';
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

    async googleLoginCallback(@Req() req): Promise<PayloadJWT> {
        const findUser = await this.userService.findUserByUsername(req.user.email);
        if (!findUser && req.user) {
            const user: CreateUserDTO = {
                name: req.user.displayName,
                email: req.user.email,
                avt: req.user.picture
            };
            const newUser = await this.userService.createUser(user)
            const jwt = this.jwtService.sign({ email: req.user.email })
            return {
                token: jwt,
                user_info: newUser
            };
        }
        const jwt = this.jwtService.sign({ email: findUser.email })
        return {
            token: jwt,
            user_info: findUser
        };
    }
}