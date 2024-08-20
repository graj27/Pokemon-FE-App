import { Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-pokemon-navbar',
  templateUrl: './pokemon-navbar.component.html',
  styleUrl: './pokemon-navbar.component.scss'
})
export class PokemonNavbarComponent {
  constructor(private router: Router ) {
  }

  private NavigateToPokemon(){
    this.router.navigateByUrl('/pokemon/');
  }

  private navigateToEvolution(){

  }

}
