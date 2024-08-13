import { Injectable } from '@angular/core';
import { Pokemon } from "../../shared/models/pokemon"; // Ensure this path is correct
import { map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

// Updated interface to match the API response structure
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

// New interface for the mapped response
interface MappedPokemonResponse {
  name: string;
  id: number;
  weight: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url = 'https://pokeapi.co/api/v2/pokemon/7';

  constructor(private http: HttpClient) { }

  getPokemonsData(): Observable<MappedPokemonResponse> { // Adjusted the return type
    return this.http.get<PokemonApiResponse>(this.url).pipe(
      map(response => ({
        name: response.name,
        id: response.id,
        weight: response.weight,
        image: response.sprites.other.dream_world.front_default
      }))
    );
  }
}
