import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';

describe('Users Controller', () => {
    let module: TestingModule;
    let usersController: UsersController;

    beforeAll(async () => {
        module = await Test.createTestingModule({
            controllers: [UsersController],
        }).compile();

        usersController = module.get<UsersController>(UsersController);
    });

    it('should be defined', () => {
        expect(usersController).toBeDefined();
    });
});
