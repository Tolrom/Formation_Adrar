import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormdexComponent } from './formdex/formdex.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Pokedex',
    },
    {
        path: 'formes/:pokemon/:region',
        component: FormdexComponent,
        title: `Formes régionales`,
    }
];
