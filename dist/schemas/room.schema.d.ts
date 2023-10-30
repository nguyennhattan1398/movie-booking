import mongoose, { Document } from 'mongoose';
export type RoomDocument = Room & Document;
export declare class Room {
    room_id: mongoose.Schema.Types.ObjectId;
    seats: number;
    room_name?: string;
}
export declare const RoomSchema: mongoose.Schema<Room, mongoose.Model<Room, any, any, any, mongoose.Document<unknown, any, Room> & Room & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Room, mongoose.Document<unknown, {}, mongoose.FlatRecord<Room>> & mongoose.FlatRecord<Room> & {
    _id: mongoose.Types.ObjectId;
}>;
