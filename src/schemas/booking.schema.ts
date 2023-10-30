import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type BookingDocument = Booking & Document;

@Schema()
export class Booking {
    @Prop()
    booking_id: mongoose.Schema.Types.ObjectId;

    @Prop()
    user_id: mongoose.Schema.Types.ObjectId;

    @Prop({ enum: ["Ordering", "Waiting", "Error", "Success"], default: "Ordering" })
    status: string;

    @Prop()
    seat: string[];

    @Prop()
    payment_amount: number;

    @Prop()
    total_discount: number;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);