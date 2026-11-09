import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Chanson } from '../model/chanson.model';
import { Genre } from '../model/genre.model';
import { ChansonService } from '../services/chanson.service';

@Component({
  selector: 'app-add-chanson',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-chanson.component.html',
  styleUrl: './add-chanson.component.css'
})
export class AddChansonComponent implements OnInit {

  newChanson = new Chanson();
  genres! : Genre[];
  newIdGenre : number = 1;
  newGenre! : Genre;

  constructor(private chansonService: ChansonService,
              private router: Router) { }

  ngOnInit(): void {
    this.genres = this.chansonService.listeGenres();
  }

  addChanson() {
    if (this.newChanson.dateCreation) {
      this.newChanson.dateCreation = new Date(this.newChanson.dateCreation);
    }
    this.newGenre = this.chansonService.consulterGenre(this.newIdGenre);
    this.newChanson.genre = this.newGenre;
    this.chansonService.ajouterChanson(this.newChanson);
    this.router.navigate(['chansons']);
  }
}