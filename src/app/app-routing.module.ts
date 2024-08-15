import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PokemonComponentComponent} from "./pokemon-component/pokemon-component.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'pokemon/:id', component:PokemonComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
