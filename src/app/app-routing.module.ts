import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonPageComponent} from "./components/pokemon-page/pokemon-page.component";
import {PokemonComponent} from "./components/pokemon/pokemon.component";
import {PokemonEvolutionComponent} from "./components/pokemon-evolution/pokemon-evolution.component";

const routes: Routes = [
  { path: '', component: PokemonComponent },
  {path: 'pokemon/:id', component:PokemonPageComponent},
  {path: 'pokemonEvolution/:pokId/:evoid', component: PokemonEvolutionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
