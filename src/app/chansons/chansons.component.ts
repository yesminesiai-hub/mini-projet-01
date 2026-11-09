import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Chanson } from '../model/chanson.model';
import { ChansonService } from '../services/chanson.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-chansons',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './chansons.component.html',
  styleUrls: ['./chansons.component.css']
})
export class ChansonsComponent implements OnInit {
  chansons!: Chanson[];

  constructor(
    private chansonService: ChansonService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.chargerChansons();
  }

  chargerChansons() {
    this.chansons = this.chansonService.listeChansons();
  }

  supprimerChanson(ch: Chanson) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.chansonService.supprimerChanson(ch);
    }
  }
}