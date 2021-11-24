/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ConnectUserDto } from "./dto/connect-user.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/users')
  GetUser() {
    return this.usersService.GetUser();
  }

  @UsePipes(new ValidationPipe())
  @Post('/users')
  CreateUser(@Body() userData: CreateUserDto) {
    return this.usersService.CreateUser(userData);
  }

  @UsePipes(new ValidationPipe())
  @Post('/users/auth')
  Connection(@Body() userInfo: ConnectUserDto): string {
    return this.usersService.Connection(userInfo);
  }

  @UsePipes(new ValidationPipe())
  //@UseGuards(AuthGuard())
  @Put('/users/:mail')
  ChangePassword(@Param('mail') mail: string, @Body('password') password: string) {
    return this.usersService.ChangePassword(mail, password);
  }
}
