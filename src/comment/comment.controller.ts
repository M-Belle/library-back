/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentService } from "./comment.service";
//import { AuthGuard } from "@nestjs/passport";

@Controller()
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  //@UseGuards(AuthGuard())
  @UsePipes(new ValidationPipe())
  @Post('/book/:id/comment')
  CreateComment(@Body() commentData: CreateCommentDto, @Param('id') idBook: string) {
    return this.commentService.CreateComment(commentData, Number(idBook));
  }

  @Get('/book/:id/comment')
  ReadComment(@Param('id') idBook: string) {
    return this.commentService.ReadComment(Number(idBook));
  }

}
