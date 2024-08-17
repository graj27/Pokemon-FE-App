import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { PokemonComponent } from './pokemon/pokemon.component';
import {NavComponent} from './nav/nav.component';
import {FormsModule} from "@angular/forms";
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { PokemonEvolutionComponent } from './pokemon-evolution/pokemon-evolution.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    NavComponent,
    PokemonPageComponent,
    PokemonEvolutionComponent
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
