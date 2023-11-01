import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlockUserDTO, CreateUserDTO, DeleteUserDTO, UpdateUserDTO } from 'src/dtos/user.dto';
import { User, UserDocument } from 'src/schemas/user.schema';
import { ObjectIdType } from 'src/utils/type.util';

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

    async updateUser(data: UpdateUserDTO): Promise<User> {
        await this.userModel.updateOne({ _id: ObjectIdType(data._id) }, data)
        const user = await this.userModel.findOne({ _id: ObjectIdType(data._id) });
        return user;
    }

    async deleteUser(data: DeleteUserDTO): Promise<boolean> {
        return await this.userModel.deleteOne({ _id: ObjectIdType(data._id) }) ? true : false
    }

    async blockUser(data: BlockUserDTO): Promise<boolean> {
        return await this.userModel.updateOne({ _id: ObjectIdType(data._id) }, { enabled: false }) ? true : false
    }
}
