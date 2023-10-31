import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO, UserLoginDTO } from 'src/dtos/user.dto';
import { User } from 'src/schemas/user.schema';
import { UserService } from './user.service';

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) { }

    userLogin(userLoginDTO: UserLoginDTO): Promise<User> {
        const user = this.userService.findUserByUsername(userLoginDTO.username);
        return user;
    }

    @Post("/add")
    async addUser(@Body() user: CreateUserDTO): Promise<User> {
        console.log("🚀 ~ file: user.controller.ts:21 ~ UserController ~ addUser ~ user:", user)
        return await this.userService.addUser(user)
    }
}
