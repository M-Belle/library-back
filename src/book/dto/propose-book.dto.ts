/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from "class-validator";

export class ProposeBookDto {
  id: number;
  @IsString()
  genre: string;
  @IsString()
  title: string;
  @IsString()
  author:string;
  @IsNumber()
  year:number;
}
