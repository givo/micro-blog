import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';
import { Post } from './post.entity';
import { PostsController } from './posts.controller';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { PostScheme } from './post.schema';

describe('Posts Controller', () => {
    let postsService: PostsService;
    let postsController: PostsController;
    let module: TestingModule;

    beforeAll(async () => {
        module = await Test.createTestingModule({
            controllers: [PostsController],
            providers: [
                PostsService,
                // mock room model provider
                {
                    provide: getModelToken('Post'),
                    useValue: {},
                  },
            ]
        }).compile();

        postsController = module.get<PostsController>(PostsController);
        postsService = module.get<PostsService>(PostsService);
    });

    it('should be defined', () => {
        expect(postsController).toBeDefined();
        expect(postsService).toBeDefined();
    });

    it('should create a new post', async () => {
        // mock postsService.create()
        const mockedPost = new Post("test");
        jest.spyOn(postsService, 'create').mockImplementation(() => mockedPost);

        const post = await postsController.create({ content: "asdas" });

        expect(post).toBe(mockedPost);
    });
});
