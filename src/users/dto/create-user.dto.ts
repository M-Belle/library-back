/* eslint-disable prettier/prettier */
import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  name: string;
  @IsEmail()
  mail: string;
  @IsString()
  @MinLength(8)
  password: string;
}
