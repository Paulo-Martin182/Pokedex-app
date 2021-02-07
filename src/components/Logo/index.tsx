import * as S from './styles'
import Link from 'next/link'

const Logo = () => (
  <S.Wrapper>
    <Link href="/">
      <S.LogoImage src="logo.png" />
    </Link>
  </S.Wrapper>
)

export default Logo
