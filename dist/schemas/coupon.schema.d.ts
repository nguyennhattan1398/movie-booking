import mongoose, { Document } from 'mongoose';
export type CouponDocument = Coupon & Document;
export declare class Coupon {
    coupon_id: mongoose.Schema.Types.ObjectId;
    type: string;
    value?: Date;
    begin: string;
    end?: Date;
}
export declare const CouponSchema: mongoose.Schema<Coupon, mongoose.Model<Coupon, any, any, any, mongoose.Document<unknown, any, Coupon> & Coupon & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Coupon, mongoose.Document<unknown, {}, mongoose.FlatRecord<Coupon>> & mongoose.FlatRecord<Coupon> & {
    _id: mongoose.Types.ObjectId;
}>;
