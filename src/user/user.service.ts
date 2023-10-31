import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO, UpdateUserDTO } from 'src/dtos/user.dto';
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

    async createUser(data: CreateUserDTO): Promise<UserDocument> {
        const user = await this.userModel.create(data)
        return user;
    }

    async updateUser(data: UpdateUserDTO): Promise<UserDocument> {
        await this.userModel.updateOne({ user_id: data.id }, data)
        const user = await this.userModel.findOne({ _id: data.id });
        return user;
    }

    async deleteUser(userId: string): Promise<boolean> {
        return await this.userModel.deleteOne({ id: userId }) ? true : false
    }

    async blockUser(userId: string): Promise<boolean> {
        return await this.userModel.updateOne({ id: userId }, { enabled: false }) ? true : false
    }
}
