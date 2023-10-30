import mongoose, { Document } from 'mongoose';
export type BookingDocument = Booking & Document;
export declare class Booking {
    booking_id: mongoose.Schema.Types.ObjectId;
    user_id: mongoose.Schema.Types.ObjectId;
    status: string;
    seat: string[];
    payment_amount: number;
    total_discount: number;
}
export declare const BookingSchema: mongoose.Schema<Booking, mongoose.Model<Booking, any, any, any, mongoose.Document<unknown, any, Booking> & Booking & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Booking, mongoose.Document<unknown, {}, mongoose.FlatRecord<Booking>> & mongoose.FlatRecord<Booking> & {
    _id: mongoose.Types.ObjectId;
}>;
