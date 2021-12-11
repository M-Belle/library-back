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
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UsePipes(new ValidationPipe())
  @Post('/users')
  CreateUser(@Body() userData: CreateUserDto) {
    return this.usersService.CreateUser(userData);
  }

  @UsePipes(new ValidationPipe())
  @Post('/user/auth')
  Connection(@Body() userInfo: ConnectUserDto) {
    return this.usersService.Connection(userInfo);
  }

  @Get('/user/:id')
  GetUser(@Param('id') idUser:string) {
    return this.usersService.GetUser(Number(idUser));
  }

  @UsePipes(new ValidationPipe())
  //@UseGuards(AuthGuard())
  @Put('/user/:id')
  UpdateInfo(@Param('id') id:string, @Body() updateInfo: UpdateUserDto) {
    return this.usersService.UpdateInfo(Number(id), updateInfo);
  }

  @Delete('/user/:id')
  DeleteUser(@Param() userId: string) {
    return this.usersService.DeleteUser(Number(userId));
  }

}
