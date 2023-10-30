import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type MapDocument = Map & Document;

@Schema()
export class Map {
    @Prop()
    map_id: mongoose.Schema.Types.ObjectId;

    @Prop()
    name: string;

    @Prop({ enum: ["single", "couple"], default: "single" })
    type?: string;

}

export const MapSchema = SchemaFactory.createForClass(Map);