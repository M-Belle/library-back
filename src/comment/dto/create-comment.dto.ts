/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from "class-validator";

export class CreateCommentDto {

  @IsNumber()
  bookId: number;

  @IsNumber()
  rating: number;

  @IsString()
  description: string;
}
