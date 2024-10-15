import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PokedexComponent } from '../pokedex/pokedex.component';
import { Pokemon } from '../pokemon';
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    PokedexComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pokedex: Pokemon[] = [];
  pokedexService: PokedexService = inject(PokedexService);

  constructor() {
    this.pokedexService.getAllPokemon().then((pokedex: Pokemon[]) => {
      this.pokedex = pokedex
    });
  }
}
