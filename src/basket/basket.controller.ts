/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, UseGuards } from "@nestjs/common";
import { BasketService } from "./basket.service";
import { AuthGuard } from "@nestjs/passport";

@Controller()
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @UseGuards(AuthGuard())
  @Post('/books/:id/add')
  TakeBook(@Param('id') idBook: string): any {
    return this.basketService.TakeBook(Number(idBook));
  }

  @UseGuards(AuthGuard())
  @Get('/basket')
  ListBasket() {
    return this.basketService.ListBasket();
  }

  @UseGuards(AuthGuard())
  @Delete('/basket')
  DeleteBasket() {
    return this.basketService.DeleteBasket();
  }

}
