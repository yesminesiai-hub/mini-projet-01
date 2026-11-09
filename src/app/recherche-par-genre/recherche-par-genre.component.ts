import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chanson } from '../model/chanson.model';
import { Genre } from '../model/genre.model';
import { ChansonService } from '../services/chanson.service';

@Component({
  selector: 'app-recherche-par-genre',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recherche-par-genre.component.html',
  styles: ``
})
export class RechercheParGenreComponent implements OnInit {

  chansons! : Chanson[];
  IdGenre : number = 0;       // 0 = tous les genres
  genres! : Genre[];

  constructor(private chansonService: ChansonService) { }

  ngOnInit(): void {
    this.genres = this.chansonService.listeGenres();
    this.chansons = this.chansonService.listeChansons();
  }

  onChange() {
    if (this.IdGenre == 0)
      this.chansons = this.chansonService.listeChansons();
    else
      this.chansons = this.chansonService.rechercherParGenre(this.IdGenre);
  }
}