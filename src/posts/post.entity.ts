import { IPost } from './post.interface';
import { IUser } from 'users/user.interface';

export class Post implements IPost {
    content: string;
    createdBy: IUser;
    createdOn: Date;
    upVotesCount: number;
    upVotes: IUser[];
    downVotesCounter: number;
    downVotes: IUser[];

    constructor(content: string, createdBy?: IUser, createdOn = new Date(Date.now())){  // TODO: createdBy is required
        this.content = content;
        this.createdBy = createdBy;
        this.createdOn = createdOn;
    }
}