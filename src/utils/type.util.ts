import mongoose from "mongoose";

export function ObjectIdType(id: string): mongoose.Types.ObjectId {
    return new mongoose.Types.ObjectId(id)
}