/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Book } from './interfaces/book.interface'

@Injectable()
export class BookService {
  private books = [];
  private nextId=1;

  ListBook(): Book[] {
    return this.books;
  }

  DetailBook(id: number) {
    return this.books.filter((books) => {
      return Number(books.id) === id;
    });
  }

  ProposeBook(bookData: Book) {
    const newBook = {
      id: this.nextId,
      ...bookData,
    };
    this.nextId++

    this.books.push(newBook);
    return newBook;
  }
}
