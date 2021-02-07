import { useEffect, useState } from 'react'
import axios from 'axios'
import * as S from './styles'
import { EvolutionTypes } from 'types/Dashboard'

const API_IMAGE =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork'

const Evolution = ({ urlChain }: EvolutionTypes) => {
  const [data, setData] = useState<any>()
  useEffect(() => {
    axios.get(`${urlChain}`).then((res) => {
      const persons = res.data
      const url = persons.evolution_chain.url
      axios.get(`${url}`).then((res) => {
        const dataChain = res.data
        setData(dataChain)
      })
    })
  }, [urlChain])

  if (data) {
    var evoChain = []
    let evoData = data.chain

    do {
      const numberOfEvolutions = evoData['evolves_to'].length
      const url = evoData.species.url
      const part = url.split('/')

      evoChain.push({
        name: evoData.species.name,
        urlImage: part[6]
      })

      if (numberOfEvolutions > 1) {
        for (let i = 1; i < numberOfEvolutions; i++) {
          evoChain.push({
            name: evoData.evolves_to[i].species.name,
            urlImage: part[6]
          })
        }
      }
      evoData = evoData['evolves_to'][0]
    } while (!!evoData && evoData.hasOwnProperty('evolves_to'))
  }

  return (
    <S.Wrapper>
      <h1>Evolution</h1>
      <S.ImageBox>
        {evoChain?.map((item) => {
          return (
            <S.Content key={item.name}>
              <S.ImageEvo src={`${API_IMAGE}/${item.urlImage}.png`} />
              <h2> {item.name}</h2>
            </S.Content>
          )
        })}
      </S.ImageBox>
    </S.Wrapper>
  )
}

export default Evolution
