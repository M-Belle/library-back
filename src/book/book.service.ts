/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Book } from './interfaces/book.interface'

@Injectable()
export class BookService {
  private books: Book[] = [];
  private nextId=1;

  ListBook(): Book[] {
    return this.books;
  }

  DetailBook(id: number): Book[] {
    return this.books.filter((book: Book) => {
      return Number(book.id) === id;
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ProposeBook(bookData: Book) {
    const newBook = {
      id: this.nextId,
      ...bookData,
    };
    this.nextId++

    this.books.push(newBook);
    return newBook;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  TakeBook() {

  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  CreateOpinion() {

  }
}
