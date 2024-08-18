import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../services/pokemon/pokemon.service";
import {ActivatedRoute} from "@angular/router";

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
  ) { }

  ngOnInit() {
    this.setUp();
    console.log(this.pokemonService.mesg);
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
