import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserService } from './user/user.service';
import { PostService } from './post/post.service';
import { UserController } from './user/user.controller';
import { PostController } from './post/post.controller';

@Module({
  imports: [],
  controllers: [UserController, PostController],
  providers: [PrismaService, UserService, PostService],
})
export class AppModule {}
