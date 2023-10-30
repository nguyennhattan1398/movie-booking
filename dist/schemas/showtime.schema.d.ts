import mongoose, { Document } from 'mongoose';
export type ShowtimeDocument = Showtime & Document;
export declare class Showtime {
    showtime_id: mongoose.Schema.Types.ObjectId;
    room_id: mongoose.Schema.Types.ObjectId;
    film_id?: mongoose.Schema.Types.ObjectId;
    times: Date;
}
export declare const ShowtimeSchema: mongoose.Schema<Showtime, mongoose.Model<Showtime, any, any, any, mongoose.Document<unknown, any, Showtime> & Showtime & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Showtime, mongoose.Document<unknown, {}, mongoose.FlatRecord<Showtime>> & mongoose.FlatRecord<Showtime> & {
    _id: mongoose.Types.ObjectId;
}>;
