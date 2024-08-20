import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../services/pokemon/pokemon.service";
import {ActivatedRoute} from "@angular/router";
import {PokemonEvolutionInfo} from "../../shared/models/PokemonEvolutionInfo";
import { PokemonEvolutionChain, Species} from "../../shared/models/PokemonEvolutionChain";
import {PokemonNameId} from "../../shared/models/PokemonNameId";
import {MappedPokemonResponse} from "../../shared/models/MappedPokemonResponse";

@Component({
  selector: 'app-pokemon-evolution',
  templateUrl: './pokemon-evolution.component.html',
  styleUrl: './pokemon-evolution.component.scss'
})
export class PokemonEvolutionComponent implements OnInit {

  speciesInfo?: PokemonEvolutionInfo;
  pokemonEvolution!: any;
  pokemonId: any;
  pokemonNameId!:PokemonNameId[];
  currentPokemonName!: string;
  pokemonMappedResponse!: MappedPokemonResponse;

  constructor(private pokemonService: PokemonService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.setUpEvolution().then(value => {});
  }

  private async setUpEvolution(){
    this.activatedRoute.params.subscribe(async params => {
      this.pokemonId=params['pokId'];
      let currentPokemonId = params['pokId'];
      let evolutionId = params['evoid'];

      if (currentPokemonId && evolutionId && evolutionId !== '' && evolutionId !== ''){
        this.speciesInfo = await this.pokemonService.getEvolutionInfoById(evolutionId).toPromise();
        this.pokemonEvolution= await this.pokemonService.getEvolutionChainById(this.speciesInfo!.evolution_chain!.url).toPromise() as PokemonEvolutionChain;
      }

      this.setupNameId();
      console.log(this.pokemonNameId);
      this.highlightCurrentStage(this.pokemonId,this.pokemonNameId);
      this.getPokemonImages();
    })
  }

  private setupNameId() {
    // Extract the evolution chain
    const speciesNameUrl: any[] = [];
    const speciesNameId: PokemonNameId[] = [];

    let currentChain = this.pokemonEvolution?.chain;

    while (currentChain) {
      // console.log(currentChain);
      if (currentChain.species) {
        let data = currentChain.species as Species
        speciesNameUrl.push(data);
      }
      currentChain = currentChain.evolves_to[0] || null;
    }

    let startingIndex = speciesNameUrl[0].url.indexOf("pokemon-species/") + 16;

    speciesNameUrl.forEach((speciesInfo) => {
      let id1 = speciesInfo.url.substring(startingIndex).replace("/", "");
      speciesNameId.push({name: speciesInfo.name, id: id1} as PokemonNameId);
    })
    this.pokemonNameId = speciesNameId;
  }

  private highlightCurrentStage(currentPokemon: string,pokemonArray: PokemonNameId[]){
    pokemonArray.forEach(val=>{
      if(val.id == currentPokemon){
        this.currentPokemonName=val.name;
      }
    })
  }

  private getPokemonImages(){
    this.pokemonNameId.forEach(pokemonDet=>{
      this.pokemonService.getPokemonDetailsbyId(parseInt(pokemonDet.id)).subscribe(
        pokemon => {
          this.pokemonMappedResponse = pokemon;
          pokemonDet.image=this.pokemonMappedResponse.sprites.other.dream_world.front_default;
        },
        error => {
          console.error('Error fetching Pokemon details:', error);
        });
    })
    console.log(this.pokemonNameId);
  }
}
