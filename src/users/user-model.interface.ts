import { IUser } from "./user.interface";
import { Document } from 'mongoose';

export interface IUserModel extends IUser, Document {

}