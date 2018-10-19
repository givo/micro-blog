import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserScheme } from './user.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserScheme }])],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {}
