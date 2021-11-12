/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from "./interfaces/user.interface";

@Injectable()
export class UsersService {
  private users: User[] = [];
  private nextId=1;

  CreateUser(userdata: User) {
    const newUser = {
      id: this.nextId,
      ...userdata,
    };
    this.nextId++

    this.users.push(newUser);
    return newUser;
  }

  Connection(): any {
  }

  UpdateUser(): any {
  }
}
