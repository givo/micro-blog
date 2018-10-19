import * as mongoose from "mongoose";

export const PostScheme = new mongoose.Schema({
    content: String,
    createdBy: { type: mongoose.Types.ObjectId, ref: 'User', required: false }, // TODO: required = true
    createdOn: { type: Date, default: Date.now },
    upVotesCount: { type: Number, default: 0 },
    upVotes: { type: [mongoose.Schema.Types.ObjectId], ref: 'User' },
    downVotesCounter: { type: Number, default: 0 },
    downVotes: { type: [mongoose.Schema.Types.ObjectId], ref: 'User' }
});