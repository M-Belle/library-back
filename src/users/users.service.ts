/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      name: "maxence",
      email: "maxence.belle@estiam.com",
      password: "max71996",
      token: ""
    },
  ];
  private nextId=2;

  CreateUser(userdata: CreateUserDto) {
    const newUser = {
      id: this.nextId,
      ...userdata,
      token: "",
    };

    if(this.users.find((users) => { return users.email === userdata.email })) {
      throw new HttpException('L\'utilisateur existe déjà', HttpStatus.FORBIDDEN);
    }

    this.users.push(newUser);
    this.nextId++
    return "Création de l'utilisateur réussie";
  }

  Connection(userInfo: any) {
    const { email, password } = userInfo;
    const userFound = this.users.find((user) => {
      return user.email === email && user.password === password;
    });

    if (!userFound) {
      throw new HttpException('Email ou Mot de passe incorrect', HttpStatus.NOT_FOUND);
    }

    userFound.token = Buffer.from(`${email}/${password}`).toString('base64');
    return userFound;
  }

  GetUser(id: number) {
    return this.users.filter((users) => {
      return Number(users.id) === id;
    });
  }

  UpdateInfo(id: number, updateInfo) {
    const userInfo = this.users.find((user) => {
      return Number(user.id) === id;
    });

    if(userInfo.name != updateInfo.name) {
      userInfo.name = updateInfo.name
    }

    if(userInfo.email != updateInfo.email) {
      userInfo.email = updateInfo.email
    }

    return "Changement effectué";
  }

  DeleteUser(userId: number) {
    const index = this.users.map(user => user.id).indexOf(userId);
    this.users.splice(index,1);

    if(!index) {
      throw new HttpException('L\'utilisateur est déjà supprimé', HttpStatus.NOT_FOUND);
    }

    return "Utilisateur supprimé avec succès";
  }
}
