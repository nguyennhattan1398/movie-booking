import mongoose, { Document } from 'mongoose';
export type FilmDocument = Film & Document;
export declare class Film {
    film_id: mongoose.Schema.Types.ObjectId;
    name: string;
    summary?: string;
    start: number;
}
export declare const FilmSchema: mongoose.Schema<Film, mongoose.Model<Film, any, any, any, mongoose.Document<unknown, any, Film> & Film & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Film, mongoose.Document<unknown, {}, mongoose.FlatRecord<Film>> & mongoose.FlatRecord<Film> & {
    _id: mongoose.Types.ObjectId;
}>;
