import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type MapDocument = Map & Document;

@Schema()
export class Map {
    @Prop()
    notify_id: mongoose.Schema.Types.ObjectId;

    @Prop({ enum: ["coupon", "film"], required: true })
    type: string;

    @Prop({ required: true })
    content?: string;

}

export const MapSchema = SchemaFactory.createForClass(Map);