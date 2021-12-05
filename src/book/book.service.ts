/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ProposeBookDto } from "./dto/propose-book.dto";

//import MortsurleNil from "../pictures/Mort-sur-le-Nil.jpg";
//import JurassicPark from "../pictures/jurassic-park.jpg"
//import SeigneurdesAnneauxT1 from "../pictures/Le-seigneur-des-anneaux-t1.jpg"

@Injectable()
export class BookService {
   books = [
    {
      id: 1,
      title: "Mort sur le Nil",
      author: "Agatha Christie",
      genre: "Policier",
      year: 1937,
      //image: MortsurleNil
    },
    {
      id: 2,
      title: "Jurassic Park",
      author: "Michael Crichton",
      genre: "Science-Fiction",
      year: 1990,
      //image: JurassicPark
    },
    {
      id: 3,
      title: "Le Seigneur des anneaux (Tome 1) - La fraternité de l'anneau",
      author: "J. R. R. Tolkien",
      genre: "Fantastique",
      year: 1954,
      //image: SeigneurdesAnneauxT1
    }
  ];
  private nextId=4;

  ListBook() {
    return this.books;
  }

  DetailBook(id: number) {
    return this.books.filter((books) => {
      return Number(books.id) === id;
    });
  }

  ProposeBook(bookData: ProposeBookDto) {
    const newBook = {
      id: this.nextId,
      ...bookData,
    };
    this.books.push(newBook);
    this.nextId++
    return "Création du livre réussie";
  }
}
