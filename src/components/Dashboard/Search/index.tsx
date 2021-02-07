import * as S from './styles'

const Search = () => {
  return (
    <S.Wrapper>
      <S.InputLabel>
        <S.InputSearch type="text" placeholder="Pesquise aqui seu pokemon" />
        <S.ImageIcon src="as.png" />
      </S.InputLabel>
      <S.Separator />
    </S.Wrapper>
  )
}

export default Search
