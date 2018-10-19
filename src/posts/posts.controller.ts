import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService){

    }

    @Post()
    public create(@Body() dto: CreatePostDto){
        return this.postsService.create(dto);
    }

    @Get('/:postId')
    public findOne(@Param('postId') postId){
        return this.postsService.findOne(postId);
    }
}
