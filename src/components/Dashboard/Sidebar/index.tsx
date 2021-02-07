import Logo from 'components/Logo'
import Search from 'components/Dashboard/Search'
import * as S from './styles'

export type SidebarProps = {
  children: React.ReactNode
}

const Sidebar = ({ children }: SidebarProps) => (
  <S.Wrapper>
    <S.LogoContent>
      <Logo />
    </S.LogoContent>
    <S.Message>
      everything you wanted to know about your favorite pocket monsters
    </S.Message>

    <S.InputWrapper>
      <Search />
    </S.InputWrapper>

    <S.WrapperList>{children}</S.WrapperList>
  </S.Wrapper>
)

export default Sidebar
