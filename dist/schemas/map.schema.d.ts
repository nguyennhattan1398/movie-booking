import mongoose, { Document } from 'mongoose';
export type MapDocument = Map & Document;
export declare class Map {
    map_id: mongoose.Schema.Types.ObjectId;
    name: string;
    type?: string;
}
export declare const MapSchema: mongoose.Schema<Map, mongoose.Model<Map, any, any, any, mongoose.Document<unknown, any, Map> & Map & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Map, mongoose.Document<unknown, {}, mongoose.FlatRecord<Map>> & mongoose.FlatRecord<Map> & {
    _id: mongoose.Types.ObjectId;
}>;
