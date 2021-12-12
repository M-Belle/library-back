/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString, IsUrl } from "class-validator";

export class ProposeBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author:string;

  @IsString()
  @IsNotEmpty()
  genre: string;

  @IsNumber()
  @IsNotEmpty()
  year:number;

  @IsNotEmpty()
  resume:string

  @IsNotEmpty()
  @IsUrl()
  image:string
}
