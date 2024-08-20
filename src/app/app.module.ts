import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { PokemonComponent } from './components/pokemon/pokemon.component';
import {NavComponent} from './components/nav/nav.component';
import {FormsModule} from "@angular/forms";
import { PokemonPageComponent } from './components/pokemon-page/pokemon-page.component';
import { PokemonEvolutionComponent } from './components/pokemon-evolution/pokemon-evolution.component';
import {HomeComponent} from "./components/home/home.component";
import { PokemonNavbarComponent } from './components/pokemon-navbar/pokemon-navbar.component';
@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    PokemonComponent,
    NavComponent,
    PokemonPageComponent,
    PokemonEvolutionComponent,
    PokemonNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
