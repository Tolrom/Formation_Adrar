import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterOutlet,
    RouterModule,
  ],
  template: `
    <main>
      <header>
      <h1><a [routerLink]="['/']" routerLinkActive="router-link-active" >Pokédex</a></h1>
      </header>
      <section>
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokedex';
}
