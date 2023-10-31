import { Model } from 'mongoose';
import { UserInterface } from 'src/interfaces/user.interface';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<UserInterface>);
    findUserByUsername(username: string): Promise<any>;
}
