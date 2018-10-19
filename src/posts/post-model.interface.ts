import { Document } from 'mongoose';
import { IPost } from './post.interface';

export interface IPostModel extends IPost, Document {

}