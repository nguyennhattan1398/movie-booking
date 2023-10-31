import { CreateUserDTO, UserLoginDTO } from 'src/dtos/user.dto';
import { User } from 'src/schemas/user.schema';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    userLogin(userLoginDTO: UserLoginDTO): Promise<User>;
    addUser(user: CreateUserDTO): Promise<User>;
}
