import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chanson } from '../model/chanson.model';
import { ChansonService } from '../services/chanson.service';
import { SearchFilterPipe } from '../search-filter.pipe';

@Component({
  selector: 'app-recherche-par-pipe',
  standalone: true,
  imports: [FormsModule, CommonModule, SearchFilterPipe],
  templateUrl: './recherche-par-pipe.component.html',
  styles: ``
})
export class RechercheParPipeComponent implements OnInit {

  chansons! : Chanson[];
  searchTerm : string = '';

  constructor(private chansonService: ChansonService) { }

  ngOnInit(): void {
    this.chansons = this.chansonService.listeChansons();
  }
}