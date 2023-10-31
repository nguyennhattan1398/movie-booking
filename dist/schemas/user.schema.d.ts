import mongoose, { Document } from 'mongoose';
export type UserDocument = User & Document;
export declare class User {
    user_id: mongoose.Schema.Types.ObjectId;
    name: string;
    email?: string;
    phone: string;
    class?: string;
    birth?: Date;
    point: number;
    username: string;
    password: string;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, mongoose.Document<unknown, any, User> & User & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, mongoose.FlatRecord<User>> & mongoose.FlatRecord<User> & {
    _id: mongoose.Types.ObjectId;
}>;
