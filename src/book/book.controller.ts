/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { BookService } from './book.service';
import { Book } from './interfaces/book.interface';
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
  DetailBook (@Param('id') idBook: string): Book[] {
    return this.bookService.DetailBook(Number(idBook));
  }

  //@UseGuards(AuthGuard())
  @UsePipes(new ValidationPipe())
  @Post('/books/propose')
  ProposeBook(@Body() bookData: ProposeBookDto) {
    return this.bookService.ProposeBook(bookData);
  }
}
