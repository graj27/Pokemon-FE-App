import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../services/pokemon/pokemon.service";
import {Router, ActivatedRoute} from "@angular/router";
import {MappedPokemonResponse} from "../shared/models/MappedPokemonResponse";

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.scss'
})
export class PokemonPageComponent implements OnInit{
  pokemon_item:any;

  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.setUp();
  }


  private setUp() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.pokemonService.getPokemonDetailsbyId(params['id']).subscribe(
          pokemon => {
            this.pokemon_item = pokemon;
          },
          error => {
            console.error('Error fetching Pokemon details:', error);
          }
        );
      }
    })
  }
}
