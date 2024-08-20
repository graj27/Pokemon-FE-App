export interface Sprites {
  other:{
    dream_world:{
      front_default:string
    }
}
}

export interface Species{
  url:string
}

export interface MappedPokemonResponse {
  name: string;
  id: number;
  sprites: Sprites;
  species: Species;
}
