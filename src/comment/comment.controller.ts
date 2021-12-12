/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentService } from "./comment.service";

@Controller()
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @UsePipes(new ValidationPipe())
  @Post('/book/comment')
  CreateComment(@Body() commentData: CreateCommentDto) {
    return this.commentService.CreateComment(commentData);
  }

  @Get('/book/:id/comment')
  ReadComment(@Param('id') BookId: string) {
    return this.commentService.ReadComment(Number(BookId));
  }

}
