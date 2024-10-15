import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Pokemon } from '../pokemon';
import { FormdexComponent } from '../formdex/formdex.component';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {
  @Input() pokemon!: Pokemon;
  @Input() form!: Pokemon;
}
