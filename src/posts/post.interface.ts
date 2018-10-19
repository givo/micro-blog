import { Document } from 'mongoose';
import { IUser } from "users/user.interface";

export interface IPost{
    content: string,
    createdBy: IUser
    createdOn: Date,
    upVotesCount: number,
    upVotes: IUser[],
    downVotesCounter: number
    downVotes: IUser[],
}