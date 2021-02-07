import * as S from './styles'

export default function Loader() {
  const colors = [
    '#d1c300',
    '#00ff40',
    '#1100fd',
    '#ff00dd',
    '#ca028e',
    '#4BC853',
    '#e5ff00',
    '#00eeff',
    '#1aff00'
  ]

  const bg = colors[Math.floor(Math.random() * colors.length)]
  return (
    <S.Wrapper>
      <S.SpanL color={bg} />
      <S.SpanL />
      <S.SpanL />
      <S.SpanL />
      <S.SpanL />
    </S.Wrapper>
  )
}
