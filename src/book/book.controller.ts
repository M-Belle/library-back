/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { BookService } from './book.service';
import { Book } from './interfaces/book.interface';
import { ProposeBookDto } from "./dto/propose-book.dto";

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

  @Post('/books/propose')
  ProposeBook(@Body() bookData: ProposeBookDto) {
    return this.bookService.ProposeBook(bookData);
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
