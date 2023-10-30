import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type FilmDocument = Film & Document;

@Schema()
export class Film {
    @Prop()
    film_id: mongoose.Schema.Types.ObjectId;

    @Prop()
    name: string;

    @Prop()
    summary?: string;

    @Prop({ default: 0 })
    start: number;
}

export const FilmSchema = SchemaFactory.createForClass(Film);