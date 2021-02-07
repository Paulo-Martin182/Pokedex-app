export type DashboardProps = {
  name?: string
  id?: string | any
  listItem?: boolean
  children?: React.ReactNode
  pokemons?: PokemonProps[]
  onClose?: () => void
  ImgLight?: boolean
}

export type PokemonProps = {
  name: string
  id: string
  img: string
}

export type PokemonsGet = {
  pokemons: PokemonProps[]
}

export type BadgeTypes = {
  attribute: string
  stat: string
  type: string
  types: string
}

export type EvolutionTypes = {
  urlChain?: string
}

export type PokeInfoTypes = {
  pokeName: string
  pokeId: string
}
