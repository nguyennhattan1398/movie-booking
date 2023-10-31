import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';
import { User, UserSchema } from 'src/schemas/user.schema';
import { MongooseModule, Schema } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: "User", schema: UserSchema }])
    ],
    controllers: [
        UserController,
    ],
    providers: [
        UserService,
    ],
})
export class UserModule { }
