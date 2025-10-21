import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Caracters } from './components/caracters/caracters';

export const routes: Routes = [
    {path: '', component: Inicio},
    {path: 'Caracters', component: Caracters},
];
