import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInterface } from 'src/interfaces/user.interface';

@Injectable()
export class UserService {
    constructor(
        @InjectModel("User")
        private readonly userModel: Model<UserInterface>
    ) { }
    async findUserByUsername(username: string): Promise<any> {
        const user = await this.userModel.findOne({
            $or: [
                { username: username },
                { email: username }
            ]
        })

        if (user) return user;
        return null;
    }
}
