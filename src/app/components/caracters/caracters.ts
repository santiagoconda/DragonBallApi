import { Component, OnInit } from '@angular/core';
import { Api } from '../../service/api';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Character, CharactersResponse } from './Character.models';
import { Console } from 'node:console';


@Component({
  selector: 'app-caracters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './caracters.html',
  styleUrl: './caracters.css'
})
export class Caracters implements OnInit {
  personajes: Character[] = [];
  saludo = "holaa";
  constructor(private ApiService: Api) { }
  ngOnInit(): void {
    this.Caracters();

  }

  Caracters() {
    this.ApiService.getCaracters().subscribe({
      next: (response) => {
        this.personajes = response.items;
        console.log(this.personajes);
      },
    });
  };

}
