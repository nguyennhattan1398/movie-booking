import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    user_id: mongoose.Schema.Types.ObjectId;

    @Prop({ required: true })
    name: string;

    @Prop()
    email?: string;

    @Prop({ required: true })
    phone: string;

    @Prop({ enum: ["Bronze", "Silver", "Gold", "Diamond", "Ruby"], default: "Bronze", required: true })
    class?: string;

    @Prop()
    birth?: Date;

    @Prop({ default: 0 })
    point: number;

    @Prop()
    username: string;

    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);