import { gql, useQuery } from '@apollo/client'
import { PokeInfoTypes } from 'types/Dashboard'
import Badge from '../Badge'
import Evolution from '../Evolution'
import Loader from '../Loader'
import * as S from './styles'

const get_pokeinfo = gql`
  query($name: String!) {
    pokemon(name: $name) {
      height
      weight
      species {
        url
      }
      stats {
        stat {
          name
        }
        base_stat
      }
      types {
        type {
          name
        }
      }
    }
  }
`

const PokeInfo = ({ pokeName, pokeId }: PokeInfoTypes) => {
  const { data, loading, error } = useQuery(get_pokeinfo, {
    variables: { name: pokeName }
  })

  if (loading) {
    return <p>loading...</p>
  }

  if (error) {
    window.location.href = '/'
  }

  const bgo = {
    hp: data.pokemon.stats[0].base_stat,
    atak: data.pokemon.stats[1].base_stat,
    def: data.pokemon.stats[2].base_stat,
    spatk: data.pokemon.stats[3].base_stat,
    spdef: data.pokemon.stats[4].base_stat,
    speed: data.pokemon.stats[5].base_stat
  }
  return (
    <S.Wrapper>
      <S.leftContent>
        <S.ImageBox>
          <S.PokeImage
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`}
          />
        </S.ImageBox>
        <S.TypeBox>
          <h3> Type </h3>
          {data.pokemon.types.map((types: any) => {
            return <Badge key={types.type.name} types={types.type.name} />
          })}
        </S.TypeBox>
        <S.LargeAltBox>
          <S.LargeBox>
            <b>Height: </b> {data.pokemon.height}
          </S.LargeBox>
          <S.LargeBox>
            <b>Weight: </b> {data.pokemon.weight}
          </S.LargeBox>
        </S.LargeAltBox>
        <S.Attributes>
          <h3> Attributes </h3>
          <Badge type attribute={bgo.hp} stat="hp" />
          <Badge type attribute={bgo.speed} stat="speed" />
          <Badge type attribute={bgo.atak} stat="atak" />
          <Badge type attribute={bgo.def} stat="def" />
          <Badge type attribute={bgo.spatk} stat="sp.atk." />
          <Badge type attribute={bgo.spdef} stat="sp.def." />
        </S.Attributes>
      </S.leftContent>
      <S.RIghtContent>
        <S.Evolution>
          <Evolution urlChain={data.pokemon.species.url} />
        </S.Evolution>
        <S.Content>
          <Loader />
        </S.Content>
      </S.RIghtContent>
    </S.Wrapper>
  )
}

export default PokeInfo
