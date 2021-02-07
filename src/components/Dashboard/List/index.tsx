import { DashboardProps } from 'types/Dashboard'
import * as S from './styles'

export type ListProps = {
  name?: string
  id?: string | any
  listItem: boolean
  addHeader?: () => void
}

const List = ({ name, id, listItem, addHeader }: ListProps) => (
  <S.Wrapper>
    <S.Title listItem={listItem} onClick={addHeader}>
      {`#${'000'.substr(id.toString().length)}${id} - ${name}`}
    </S.Title>
  </S.Wrapper>
)

export default List
