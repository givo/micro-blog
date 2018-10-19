import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPostModel } from "./post-model.interface";

@Injectable()
export class PostsService{
    constructor(@InjectModel('Post') private readonly postModel: Model<IPostModel>) {

    }

    public async create(dto: any): Promise<IPostModel> {
        return this.postModel.create(dto);
    }

    public async findOne(postId: string): Promise<IPostModel> {
        return this.postModel.findById(postId).exec();
    }
}