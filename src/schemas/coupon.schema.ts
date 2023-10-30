import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type CouponDocument = Coupon & Document;

@Schema()
export class Coupon {
    @Prop()
    coupon_id: mongoose.Schema.Types.ObjectId;

    @Prop({ enum: ["fixed", "floating"], required: true })
    type: string;

    @Prop({ required: true })
    value?: Date;

    @Prop({ required: true })
    begin: string;

    @Prop({ required: true })
    end?: Date;
}

export const CouponSchema = SchemaFactory.createForClass(Coupon);