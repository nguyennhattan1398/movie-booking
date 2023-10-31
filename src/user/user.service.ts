import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from 'src/dtos/user.dto';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel("User")
        private readonly userModel: Model<UserDocument>
    ) { }

    async findUserByUsername(username: string): Promise<User> {
        const user = await this.userModel.findOne({
            $or: [
                { username: username },
                { email: username }
            ]
        })

        if (user) return user;
        return null;
    }

    async addUser(data: CreateUserDTO): Promise<UserDocument> {
        const user = await this.userModel.create(data)
        return user;
    }

    async deleteUser(userId: string): Promise<boolean> {
        return await this.userModel.deleteOne({ id: userId }) ? true : false
    }
}
