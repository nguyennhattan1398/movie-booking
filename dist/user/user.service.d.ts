import { Model } from 'mongoose';
import { CreateUserDTO } from 'src/dtos/user.dto';
import { User, UserDocument } from 'src/schemas/user.schema';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    findUserByUsername(username: string): Promise<User>;
    addUser(data: CreateUserDTO): Promise<UserDocument>;
    deleteUser(userId: string): Promise<boolean>;
}
