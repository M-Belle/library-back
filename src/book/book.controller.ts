/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { BookService } from './book.service';
import { ProposeBookDto } from "./dto/propose-book.dto";
//import { AuthGuard } from "@nestjs/passport";

@Controller()
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('/books')
  ListBook() {
    return this.bookService.ListBook();
  }

  @Get('/books/:id')
  DetailBook (@Param('id') idBook: string) {
    return this.bookService.DetailBook(Number(idBook));
  }

  @Get('/books/:genre')
  SortBook(@Param('genre') genreBook: string) {
    return this.bookService.SortBook(genreBook);
  }

  @UsePipes(new ValidationPipe())
  @Post('/books/propose')
  ProposeBook(@Body() bookData: ProposeBookDto) {
    return this.bookService.ProposeBook(bookData);
  }
}
