export interface Sprites {
  front_default: string;
}

export interface MappedPokemonResponse {
  name: string;
  id: number;
  weight: number;
  sprites: Sprites
}
