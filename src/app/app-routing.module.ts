import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonPageComponent} from "./pokemon-page/pokemon-page.component";
import {PokemonComponent} from "./pokemon/pokemon.component";

const routes: Routes = [
  { path: '', component: PokemonComponent },
  {path: 'pokemon/:id', component:PokemonPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
