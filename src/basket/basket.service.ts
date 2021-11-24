/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Basket } from './interfaces/basket.interface';
import { BookService } from "../book/book.service";

@Injectable()
export class BasketService {
  constructor(private readonly bookService: BookService) {}
  private basket = [];

  TakeBook(id: number): any {
    const extractBook = this.bookService.DetailBook(id);
    const newBasket = {
      ...extractBook
    }
    this.basket.push(newBasket);
    return 'Livre ajouté a votre panier';
  }

  ListBasket(): Basket[] {
    return this.basket;
  }

  // @ts-ignore
  DeleteBasket(): Basket[] {

  }
}
