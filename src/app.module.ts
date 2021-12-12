import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BookModule } from './book/book.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [UsersModule, BookModule, CommentModule],
})
export class AppModule {}
