import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, find, forkJoin, map, Observable, tap, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {MappedPokemonResponse} from "../../shared/models/MappedPokemonResponse";
// import {NUMBER_OF_POKEMONS} from "../../shared/Constants";
import {environment} from "../../../environments/environment";
import {PokemonEvolutionInfo} from "../../shared/models/PokemonEvolutionInfo";
import {PokemonEvolutionChain} from "../../shared/models/PokemonEvolutionChain";


@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  /**Getting API Urls from environment file
   **/
  private url = environment.pokemonAPI;
  private speciesAPI=environment.speciesAPI;
  private pokemonDataById: any;

  constructor(private http: HttpClient) {}
  private errorHandler(errorType: HttpErrorResponse) {
    let errorMesg="";

    if (errorType.error instanceof ErrorEvent){
      errorMesg=errorType.error.message;
    }
    else{
      errorMesg=`Error Code : ${errorType.status} \n Message: ${errorType.message}`;
    }

    return throwError(()=>{
      console.log(errorMesg);
      // return errorMesg;
    });
  }

  getPokemonsData(): Observable<MappedPokemonResponse[]> {
    const requests = [];
    for (let i = 1; i <= environment.numPokemon; i++) {
      let request = this.getPokemonDetailsbyId(i);
     //adding results to array requests
      requests.push(request);
    }
    //using forkjoin to combine all api get requests
    return forkJoin(requests);
  }

  /**
  Getting Pokemon details by Id
   */
  getPokemonDetailsbyId(pokemonId: number):Observable<MappedPokemonResponse>{
    return this.http.get<any>(`${this.url}/${pokemonId}`);
  }

  /**Retrieving evolution url
   **/
  getEvolutionInfoById(pokemonId: number):Observable<PokemonEvolutionInfo>{
   return this.http.get<any>(`${this.speciesAPI}/${pokemonId}`);
  }

  /**
   * Retrieving evolution chain for pokemon
   */
  getEvolutionChainById(evolutionAPI: string):Observable<PokemonEvolutionChain>{
    return this.http.get<any>(`${evolutionAPI}`);
  }
}
