import Header from 'components/Dashboard/Header'
import List from 'components/Dashboard/List'
import PokeInfo from 'components/Dashboard/PokeInfo'
import Sidebar from 'components/Dashboard/Sidebar'
import { useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { combineTheme, dark, light } from 'styles/themes'
import GlobalStyles from 'styles/global'
import { DashboardProps } from 'types/Dashboard'
import * as S from './styles'

const Dashboard = ({ pokemons = [] }: DashboardProps) => {
  const initialValues = {
    name: 'ivysaur',
    id: '2',
    img:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png'
  }
  const [currentId, setCurrentId] = useState(initialValues)
  const [imgLT, setImgLT] = useState<boolean>(false)
  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(light))

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? combineTheme(dark) : combineTheme(light))
    setImgLT(imgLT ? false : true)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <S.Wrapper>
        <S.Div1>
          <Sidebar>
            {pokemons.map((item) => (
              <List
                listItem={true}
                key={item.name}
                {...item}
                addHeader={() => {
                  setCurrentId({ ...item })
                }}
              />
            ))}
          </Sidebar>
        </S.Div1>
        <S.Div2>
          <Header
            name={currentId.name}
            id={currentId.id}
            onClose={toggleTheme}
            ImgLight={imgLT}
          />
          <S.Content>
            <PokeInfo pokeName={currentId.name} pokeId={currentId.id} />
          </S.Content>
        </S.Div2>
      </S.Wrapper>
    </ThemeProvider>
  )
}

export default Dashboard
