import { DashboardProps } from 'types/Dashboard'
import Heading from '../Heading'
import List from '../List'
import * as S from './styles'

const Header = ({ name, id, onClose, ImgLight }: DashboardProps) => {
  return (
    <S.Wrapper>
      <Heading>
        <List listItem={false} name={name} id={id} />
      </Heading>
      <S.ContentMenu onClick={onClose}>
        {ImgLight ? (
          <S.ConfigIcon src="ConfigPokedex.png" />
        ) : (
          <S.ConfigIcon src="dark.png" />
        )}
      </S.ContentMenu>
    </S.Wrapper>
  )
}

export default Header
