import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type ShowtimeDocument = Showtime & Document;

@Schema()
export class Showtime {
    @Prop()
    showtime_id: mongoose.Schema.Types.ObjectId;

    @Prop({ required: true })
    room_id: mongoose.Schema.Types.ObjectId;

    @Prop({ required: true })
    film_id?: mongoose.Schema.Types.ObjectId;

    @Prop({ required: true })
    times: Date;
}

export const ShowtimeSchema = SchemaFactory.createForClass(Showtime);