import { Injectable } from '@angular/core';
import {catchError, find, forkJoin, map, Observable, tap, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {MappedPokemonResponse} from "../../shared/models/MappedPokemonResponse";
import {NUMBER_OF_POKEMONS} from "../../shared/Constants";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url = environment.pokemonAPI;

  constructor(private http: HttpClient) {}

  private errorHandler(errorType: HttpErrorResponse) {
    let errorMesg="";

    if (errorType.error instanceof ErrorEvent){
      errorMesg=errorType.error.message + "ytrewqfdsa";
    }
    else{
      errorMesg=`cccccccccccccError Code : ${errorType.status} \n Message: ${errorType.message}`;
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

  getPokemonDetailsbyId(pokemonId: number):Observable<MappedPokemonResponse>{
    return this.http.get<any>(`${this.url}/${pokemonId}`).pipe(
      tap(),
    );

  }
}
