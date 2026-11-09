import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chanson } from '../model/chanson.model';
import { ChansonService } from '../services/chanson.service';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recherche-par-nom.component.html',
  styles: ``
})
export class RechercheParNomComponent implements OnInit {

  allChansons! : Chanson[];   // toutes les chansons (liste complète)
  chansons! : Chanson[];      // chansons affichées (liste filtrée)

  constructor(private chansonService: ChansonService) { }

  ngOnInit(): void {
    this.allChansons = this.chansonService.listeChansons();
    this.chansons = this.allChansons;
  }

  onKeyUp(filterText: string) {
    this.chansons = this.allChansons.filter(item =>
      item.titre?.toLowerCase().includes(filterText.toLowerCase()));
  }
}