import mongoose from "mongoose";
export declare class Todo {
    id: mongoose.Schema.Types.ObjectId;
    content: string;
}
export declare const TodoSchema: mongoose.Schema<Todo, mongoose.Model<Todo, any, any, any, mongoose.Document<unknown, any, Todo> & Todo & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Todo, mongoose.Document<unknown, {}, mongoose.FlatRecord<Todo>> & mongoose.FlatRecord<Todo> & {
    _id: mongoose.Types.ObjectId;
}>;
