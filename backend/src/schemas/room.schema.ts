import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type RoomDocument = Room & Document;

@Schema()
export class Room {
    @Prop()
    room_id: mongoose.Schema.Types.ObjectId;

    @Prop({ required: true, enum: [50, 75, 100] })
    seats: number;

    @Prop()
    room_name?: string;
}

export const RoomSchema = SchemaFactory.createForClass(Room);