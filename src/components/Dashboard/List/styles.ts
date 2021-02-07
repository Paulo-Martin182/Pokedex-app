import styled from 'styled-components'
import { ListProps } from '.'

export const Wrapper = styled.main`
  display: flex;
  width: 100%;
`

export const Title = styled.h2<ListProps>`
  font-size: ${(props) => (props.listItem ? '15px' : '24px')};
  margin: 5px 10px;
  color: white;
  cursor: pointer;
`
