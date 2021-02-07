import { gql } from '@apollo/client'
import Dashboard from 'templates/Dashboard'
import { initializeApollo } from 'utils/apollo'
import { PokemonsGet } from 'types/Dashboard'

type IProps = {
  props: PokemonsGet
}

export default function Home(props: PokemonsGet) {
  return <Dashboard pokemons={props.pokemons} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: gql`
      query {
        pokemons(limit: 50) {
          results {
            id
            name
            image
          }
        }
      }
    `
  })

  return {
    props: {
      pokemons: data.pokemons.results.map((game: any) => ({
        name: game.name,
        id: game.id,
        img: game.image
      }))
    }
  }
}
