import { Component, OnInit } from '@angular/core';
import { PokemonService } from "../services/pokemon/pokemon.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemons: any[] = [];
  pokemon: any;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.setUp();
  }

  private setUp() {
    this.pokemonService.getPokemonsData()
      .subscribe(pokemonData => {
        this.pokemons = pokemonData;
      },
      error => {
        console.error('Error fetching Pokemon data:', error);
      },
    );
  }
}
