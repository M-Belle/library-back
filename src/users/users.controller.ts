/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put, UsePipes } from "@nestjs/common";
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/users')
  //@UsePipes(new ValidationPipe());
  CreateUser(@Body() userData: CreateUserDto ) {
    return this.usersService.CreateUser(userData);
  }

  @Post('/users/auth')
  Connection() {
    return this.usersService.Connection();
  }

  @Put('/users/mail')
  UpdateUser(@Param('mail') mail: string): any {
    return this.usersService.UpdateUser();
  }
}
