/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ProposeBookDto } from "./dto/propose-book.dto";

@Injectable()
export class BookService {
   books = [
    {
      id: 1,
      title: "Mort sur le Nil",
      author: "Agatha Christie",
      genre: "Policier",
      year: 1937,
      image: 'https://c8.alamy.com/compfr/extdnm/1930-uk-mort-sur-le-nil-couverture-de-livre-extdnm.jpg',
      resume: "La riche et séduisante Linnet Ridgeway part en Égypte en voyage de noces avec son mari, Mr Doyle. " +
              "Rejoints par des amis et Hercule Poirot, le séjour semble s'annoncer sous les meilleurs auspices. " +
              "Jusqu'au moment où Linnet est retrouvée assassinée. " +
              "Les crimes mystérieux se succèdent et il faudra toute la perspicacité du célèbre détective pour confondre le coupable."
    },
    {
      id: 2,
      title: "Jurassic Park",
      author: "Michael Crichton",
      genre: "Science-Fiction",
      year: 1990,
      image: 'https://www.babelio.com/couv/CVT_Jurassic-Park_5882.jpeg',
      resume: "Isla Nublar. L'armée doit venir \" faire le ménage \". " +
              "Le programme dont cette île est le théâtre avait pourtant tout du paradis scientifique : un immense complexe naturel où s'ébattent, aux yeux de tous, les plus féroces sauriens du Jurassique, génétiquement ramenés à la vie...\n" +
              "Quelques jours avant le chaos, le paléontologue Alan Grant et Ian Malcolm, mathématicien de renom, embarquent pour ce bout de terre perdu au large du Pacifique. " +
              "Bientôt, le petit groupe invité par le créateur du parc doit se rendre à l'évidence : au cœur d'une jungle primitive et hostile, l'être humain n'est plus l'espèce dominante, mais la proie..."
    },
    {
      id: 3,
      title: "Le Seigneur des anneaux (Tome 1) - La fraternité de l'anneau",
      author: "J. R. R. Tolkien",
      genre: "Fantastique",
      year: 1954,
      image: 'https://bazardelalitterature.com/wp-content/uploads/2015/03/le-seigneur-des-anneaux-tome-1-la-communautc3a9-de-lanneau-j-r-r-tolkien-pocket.jpg',
      resume: "Dans les vertes prairies du Comté, les Hobbits, ou Demi-hommes, vivaient en paix... " +
              "Jusqu'au jour fatal où l'un d'entre eux, au cours de ses voyages, entra en possession de l'Anneau Unique aux immenses pouvoirs. " +
              "Pour le reconquérir, Sauron, le seigneur Sombre, va déchaîner toutes les forces du Mal. " +
              "Frodo, le Porteur de l'Anneau, Gandalf, le magicien, et leurs intrépides compagnons réussiront-ils à écarter la menace qui pèse sur la Terre du Milieu ?"
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

  SortBook(genreBook: string) {
    return this.books.filter((books) => {
      return books.genre === genreBook;
    })
  }

  ProposeBook(bookData: ProposeBookDto) {
    const newBook = {
      id: this.nextId,
      ...bookData,
    };

    if(this.books.find((books) => { return books.title === bookData.title })) {
      throw new HttpException('Le livre existe déjà', HttpStatus.FORBIDDEN);
    }

    this.books.push(newBook);
    this.nextId++
    return "Création du livre réussie";
  }
}
