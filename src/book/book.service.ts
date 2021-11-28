/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ProposeBookDto } from "./dto/propose-book.dto";

@Injectable()
export class BookService {
  private books = [
    {
      id: 1,
      genre: "Policier",
      title: "Mort sur le Nil",
      author: "Agatha Christie",
      year: 1937
    },
    {
      id: 2,
      genre: "Science-Fiction",
      title: "Jurassic Park",
      author: "Michael Crichton",
      year: 1990
    },
    {
      id: 3,
      genre: "Fantastique",
      title: "Le Seigneur des anneaux (Tome 1) - La fraternité de l'anneau",
      author: "J. R. R. Tolkien",
      year: 1954
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

  ProposeBook(bookData: Omit<ProposeBookDto, "id">) {
    const newBook = {
      id: this.nextId,
      ...bookData,
    };
    this.books.push(newBook);
    this.nextId++
    return "Création du livre réussie";
  }
}
