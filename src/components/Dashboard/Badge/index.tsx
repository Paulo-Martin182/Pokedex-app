import * as S from './styles'

const Badge = ({ attribute, stat, type, types }: any) => {
  const colors = [
    '#d1c300',
    '#9e425f',
    '#e65e03',
    '#d3ab0c',
    '#ca028e',
    '#4BC853',
    '#fc466b',
    '#1c2e88',
    '#187c0c'
  ]

  const bg = colors[Math.floor(Math.random() * colors.length)]

  return (
    <S.Wrapper color={bg}>
      {type ? `${attribute} ${stat}` : `${types}`}
    </S.Wrapper>
  )
}

export default Badge
