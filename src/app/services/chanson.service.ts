import { Injectable } from '@angular/core';
import { Chanson } from '../model/chanson.model';
import { Genre } from '../model/genre.model';

@Injectable({
  providedIn: 'root'
})
export class ChansonService {

  chansons: Chanson[];
  chanson!: Chanson;
  genres: Genre[];

  constructor() {
    this.genres = [
      { idGenre: 1, nomGenre: "Pop" },
      { idGenre: 2, nomGenre: "Rock" }
    ];

    this.chansons = [
      { idChanson: 1, titre: "Believer", artiste: "Imagine Dragons", duree: 3.24,
        dateCreation: new Date("2017-02-01"), genre: { idGenre: 2, nomGenre: "Rock" } },
      { idChanson: 2, titre: "Shape of You", artiste: "Ed Sheeran", duree: 3.53,
        dateCreation: new Date("2017-01-06"), genre: { idGenre: 1, nomGenre: "Pop" } },
      { idChanson: 3, titre: "Bohemian Rhapsody", artiste: "Queen", duree: 5.55,
        dateCreation: new Date("1975-10-31"), genre: { idGenre: 2, nomGenre: "Rock" } }
    ];
  }

  listeChansons(): Chanson[] {
    return this.chansons;
  }

  ajouterChanson(c: Chanson) {
    this.chansons.push(c);
  }

  supprimerChanson(c: Chanson) {
    const index = this.chansons.indexOf(c, 0);
    if (index > -1) {
      this.chansons.splice(index, 1);
    }
  }

  consulterChanson(id: number): Chanson {
    this.chanson = this.chansons.find(c => c.idChanson == id)!;
    return this.chanson;
  }

  updateChanson(c: Chanson) {
    const index = this.chansons.indexOf(c, 0);
    if (index > -1) {
      this.chansons.splice(index, 1);
      this.chansons.splice(index, 0, c);
    }
  }

  listeGenres(): Genre[] {
    return this.genres;
  }

  consulterGenre(id: number): Genre {
    return this.genres.find(g => g.idGenre == id)!;
  }

  rechercherParGenre(idGenre: number): Chanson[] {
    return this.chansons.filter(c => c.genre?.idGenre == idGenre);
  }
}