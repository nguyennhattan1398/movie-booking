import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO, UpdateUserDTO, UserLoginDTO } from 'src/dtos/user.dto';
import { User } from 'src/schemas/user.schema';
import { UserService } from './user.service';

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post("/login")
    userLogin(userLoginDTO: UserLoginDTO): Promise<User> {
        const user = this.userService.findUserByUsername(userLoginDTO.username);
        return user;
    }

    @Post("/create")
    async createUser(@Body() user: CreateUserDTO): Promise<User> {
        return await this.userService.createUser(user)
    }

    @Post("/update")
    async updateUser(@Body() user: UpdateUserDTO): Promise<User> {
        return await this.userService.updateUser(user)
    }

    @Post("/delete")
    async deleteUser(@Body() userId: string): Promise<boolean> {
        return await this.userService.deleteUser(userId)
    }

    @Post("/block")
    async blockUser(@Body() userId: string): Promise<boolean> {
        return await this.userService.blockUser(userId)
    }
}

