/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ConnectUserDto } from "./dto/connect-user.dto";
//import { AuthGuard } from "@nestjs/passport";

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

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

  @Get('/users/:id')
  GetUser(@Param() userId: string) {
    return this.usersService.GetUser(Number(userId));
  }

  @UsePipes(new ValidationPipe())
  //@UseGuards(AuthGuard())
  @Put('/users')
  ChangePassword(@Body('mail') mail: string, @Body('password') password: string) {
    return this.usersService.ChangePassword(mail, password);
  }

  @Delete('/users/:id')
  DeleteUser(@Param() userId: string) {
    return this.usersService.DeleteUser(Number(userId));
  }

}
