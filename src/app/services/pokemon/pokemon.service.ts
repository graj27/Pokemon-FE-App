import { Injectable } from '@angular/core';
import {find, forkJoin, map, Observable} from "rxjs";
import { HttpClient } from "@angular/common/http";
import {MappedPokemonResponse} from "../../shared/models/MappedPokemonResponse";

interface PokemonApiResponse {
  name: string;
  id: number;
  weight: number;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemonsData(): Observable<MappedPokemonResponse[]> {
    const requests = [];
    for (let i = 1; i <= 7; i++) {
      const request = this.http.get<PokemonApiResponse>(this.url + i).pipe(
        map(response => ({
          name: response.name,
          id: response.id,
          weight: response.weight,
          image: response.sprites.other.dream_world.front_default
        }))
      );
      requests.push(request);
    }
    return forkJoin(requests);
  }


  // getPokemonData(pokemonId:string ): Observable<MappedPokemonResponse> {
  //   const request=this.http.get<MappedPokemonResponse>(this.url + pokemonId).pipe(
  //     find(pokemon=>pokemon.id == parseInt(pokemonId))
  //   )
  //   return request;
  // }


}
