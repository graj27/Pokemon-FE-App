import { Component, OnInit } from '@angular/core';
// import { Pokemon } from "../shared/models/pokemon"; // Ensure this path is correct
import { PokemonService } from "../services/pokemon/pokemon.service";
import {MappedPokemonResponse} from "../shared/models/MappedPokemonResponse";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon-component.component.html', // Correct path
  styleUrls: ['./pokemon-component.component.scss'] // Correct path
})
export class PokemonComponentComponent implements OnInit {
  pokemons: MappedPokemonResponse[] = [];

  constructor(private pokemonService: PokemonService,
              private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.pokemonService.getPokemonsData().subscribe(
      pokemonData => {
        this.pokemons = pokemonData;
      },
      error => {
        console.error('Error fetching Pokemon data:', error);
      },

    );

    this.activatedRoute.params.subscribe(params=>{
      console.log(params);
      if(params['id']){

      }
    })
  }
}
