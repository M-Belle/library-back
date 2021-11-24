/* eslint-disable prettier/prettier */
import { ForbiddenException, Injectable } from "@nestjs/common";
import { User } from "./interfaces/user.interface";

@Injectable()
export class UsersService {
  private readonly users = [];
  private nextId=1;

  GetUser(): User[] {
    return this.users;
  }

  CreateUser(userdata: User) {
    const newUser = {
      id: this.nextId,
      ...userdata
    };

    this.users.push(newUser);
    this.nextId++

    return "Création de l'utilisateur réussie";
  }

  Connection(userInfo: any): string {
    const { email, password } = userInfo;

    const userFound = this.users.find((user) => {
      return user.mail === email && user.password === password;
    });

    if (!userFound) {
      throw new ForbiddenException();
    }
    return Buffer.from(`${email}/${password}`).toString('base64');
  }

  ChangePassword(mail: string, password: string) {

    const userInfo = this.users.find((user) => {
      return user.mail === mail;
    });

    userInfo.password = password;

    return "Changement de passe effectué"
  }
}
