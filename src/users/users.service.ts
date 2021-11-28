/* eslint-disable prettier/prettier */
import { ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { User } from "./interfaces/user.interface";

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      name: "maxence",
      mail: "maxence.belle@estiam.com",
      password: "max71996"
    },
  ];
  private nextId=2;

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

  GetUser(userId: number): User[] {
    const user = this.users.filter((users) => {
      return Number(users.id) === userId;
    });
    if (!user) {
      throw new NotFoundException('L\'utilisateur n\'existe pas!');
    }
    return user;
  }

  ChangePassword(mail: string, password: string) {
    const userInfo = this.users.find((user) => {
      return user.mail === mail;
    });
    userInfo.password = password;

    if (!userInfo) {
      throw new ForbiddenException();
    }
    return "Changement de mot de passe effectué";
  }

  DeleteUser(userId: number) {
    const index = this.users.map(user => user.id).indexOf(userId);
    this.users.splice(index,1);
    if (!index) {
      throw new NotFoundException('L\'utilisateur n\'existe pas!');
    }
    return "Utilisateur supprimé avec succès";
  }
}
