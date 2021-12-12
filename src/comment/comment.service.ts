/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Comment } from './interfaces/comment.interface';

@Injectable()
export class CommentService {
  comments = [
    {
      bookId: 1,
      rating: 4,
      description: "Good book",
    }
  ];

  CreateComment(commentData: Comment) {
    const newComment = {
      ...commentData
    };
    this.comments.push(newComment);

    return 'Commentaire ajouté'
  }

  ReadComment(id: number) {
    return this.comments.filter((comments) => {
      return Number(comments.bookId) === id;
    });
  }
}
