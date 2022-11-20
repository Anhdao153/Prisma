import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostService } from './service/post.service';
import { PrismaService } from './service/prisma.service';
import { UserService } from './service/user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, UserService, PrismaService, PostService],
})
export class AppModule {}
