import { Controller } from '@nestjs/common';
import { UserLoginDTO } from 'src/dtos/user.dto';
import { User } from 'src/schemas/user.schema';
import { UserService } from './user.service';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) { }

    userLogin(userLoginDTO: UserLoginDTO): Promise<User> {

        return;
    }

    async findUserByUsername(username: string): Promise<User> {
        return await this.userService.findUserByUsername(username);
    }
}
