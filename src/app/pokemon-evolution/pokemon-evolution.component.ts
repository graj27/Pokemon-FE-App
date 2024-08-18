import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../services/pokemon/pokemon.service";
import {ActivatedRoute} from "@angular/router";
import {PokemonEvolutionInfo} from "../shared/models/PokemonEvolutionInfo";
import {PokemonEvolutionChain} from "../shared/models/PokemonEvolutionChain";

@Component({
  selector: 'app-pokemon-evolution',
  templateUrl: './pokemon-evolution.component.html',
  styleUrl: './pokemon-evolution.component.scss'
})
export class PokemonEvolutionComponent implements OnInit {

  speciesInfo?: PokemonEvolutionInfo;
  evoid:any
  pokemonEvolution!: any;


  constructor(private pokemonService: PokemonService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.setUpEvolution().then(value => {});
  }

  private async setUpEvolution(){
    this.activatedRoute.params.subscribe(async params => {
      // let pokemonId = params['pokId'];
      // let pokemonDetailsbyId = this.pokemonService.getPokemonDetailsbyId(pokemonId).toPromise();

      if (params['evoid']) {
        this.evoid = params['evoid'];
        this.speciesInfo = await this.pokemonService.getEvolutionInfoById(params['evoid']).toPromise();
        this.pokemonEvolution= await this.pokemonService.getEvolutionChainById(this.speciesInfo!.evolution_chain!.url).toPromise() as PokemonEvolutionChain;
        // this.getPokemonSpecies();
      }
    })
  }

  // private getPokemonSpecies() {
  //   let speciesArray = [];
  //   speciesArray.push(this.pokemonEvolution.chain.species.name);
  //
  //   this.pokemonEvolution.chain.evolves_to.forEach(value => {
  //     speciesArray(value.species.name
  //   })
  // }
}
