/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from "class-validator";
//import { Exclude } from "class-transformer";

export class ProposeBookDto {
  @IsString()
  genre: string;
  @IsString()
  title: string;
  @IsString()
  author:string;
  @IsNumber()
  year:number;
}
