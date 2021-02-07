import styled from 'styled-components'

export const Wrapper = styled.h2`
  margin-left: 15px;
  background: ${(props) => (props.color ? props.color : 'red')};
  border-radius: 6px;
  font-size: 13px;
  text-transform: uppercase;
  padding: 2px 20px;
  letter-spacing: 1px;
  font-weight: 500;
  height: 25px;
  color: white;
`
