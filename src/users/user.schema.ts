import * as mongoose from "mongoose";

export const UserScheme = new mongoose.Schema({
    username: { type: String, required: true }
});