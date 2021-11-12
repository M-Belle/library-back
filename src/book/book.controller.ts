/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from './book.service';
import { Book } from './interfaces/book.interface';

@Controller()
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('/books')
  ListBook() {
    return this.bookService.ListBook();
  }

  @Get('/books/:id')
  DetailBook (@Param('id') idBook: string): Book[] {
    return this.bookService.DetailBook(Number(idBook));
  }

  @Post('/books/add')
  AddBook() {
    return this.bookService.AddBook();
  }

  @Post('/books/:id/reservations')
  TakeBook() {
    return this.bookService.TakeBook();
  }

  @Post('/books/:id/opinions')
  CreateOpinion() {
    return this.bookService.CreateOpinion();
  }
}
