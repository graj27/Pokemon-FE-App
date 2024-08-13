import { Component, OnInit } from '@angular/core';
import { Pokemon } from "../shared/models/pokemon"; // Ensure this path is correct
import { PokemonService } from "../services/pokemon/pokemon.service";

@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon-component.component.html', // Correct path
  styleUrls: ['./pokemon-component.component.scss'] // Correct path
})
export class PokemonComponentComponent implements OnInit {
  pokemon: Pokemon = new Pokemon(); // Ensure this is defined correctly in your model

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getPokemonsData().subscribe(pokemonData => {
      // Set the properties of the Pokemon object directly
      this.pokemon.id = pokemonData.id;
      this.pokemon.name = pokemonData.name;
      this.pokemon.imageUrl = pokemonData.image; // Ensure 'imageUrl' is the correct property name
    });
  }
}
