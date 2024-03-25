import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from '../pokedex.service';
import { Pokemon } from '../pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formdex',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './formdex.component.html',
  styleUrl: './formdex.component.css'
})
export class FormdexComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  pokedexService: PokedexService = inject(PokedexService);
  forme!: Pokemon[] ;

  constructor() {
    const pokemon = this.route.snapshot.params['pokemon'];
    const region = this.route.snapshot.params['region'];
    this.pokedexService.getFormsByRegion(pokemon, region).then((forme) => {
      console.log(forme);
      this.forme = forme;
      console.log(this.forme);
    });
  }
}
