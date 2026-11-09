import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Chanson } from '../model/chanson.model';
import { Genre } from '../model/genre.model';
import { ChansonService } from '../services/chanson.service';

@Component({
  selector: 'app-update-chanson',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-chanson.component.html',
  styleUrl: './update-chanson.component.css'
})
export class UpdateChansonComponent implements OnInit {

  currentChanson = new Chanson();
  genres! : Genre[];
  updatedGenreId! : number;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private chansonService: ChansonService) { }

  ngOnInit(): void {
    this.genres = this.chansonService.listeGenres();
    this.currentChanson =
      this.chansonService.consulterChanson(this.activatedRoute.snapshot.params['id']);
    this.updatedGenreId = this.currentChanson.genre?.idGenre!;
  }

  updateChanson() {
    this.currentChanson.genre =
      this.chansonService.consulterGenre(this.updatedGenreId);
    this.chansonService.updateChanson(this.currentChanson);
    this.router.navigate(['chansons']);
  }
}