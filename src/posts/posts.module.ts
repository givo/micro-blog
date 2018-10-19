import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostScheme } from './post.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Post', schema: PostScheme }])],
    controllers: [PostsController],
    providers: [PostsService]
})
export class PostsModule {}
