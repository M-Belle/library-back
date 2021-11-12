/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Book } from './interfaces/book.interface'

@Injectable()
export class BookService {
  private book: Book[] = [];

  ListBook(): Book[] {
    return this.book;
  }

  DetailBook(id: number): Book[] {
    return this.book.filter((book: Book) => {
      return Number(book.id) === id;
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  AddBook() {

  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  TakeBook() {

  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  CreateOpinion() {

  }
}
