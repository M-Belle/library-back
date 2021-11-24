/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Comment } from './interaces/comment.interface';

@Injectable()
export class CommentService {
  private comments = [];

  CreateComment(commentData: Comment, idBook: number) {
    const newComment = {
      bookId: idBook,
      ...commentData
    };
    this.comments.push(newComment);
    return newComment;
  }

  ReadComment(idBook: number) {
    this.comments.filter((comments) => {
      return Number(comments.bookId) === idBook;
    });
  }
}
