export interface Species{
  name: string,
  url:string,
}

export interface Chain{
  species: Species,
  evolves_to:Chain[]
}

export interface PokemonEvolutionChain {
  chain: Chain
}
