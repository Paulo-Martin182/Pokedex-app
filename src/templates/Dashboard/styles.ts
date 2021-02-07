import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  background: #555;
  flex-wrap: nowrap;
  overflow: hidden;
`

export const Div1 = styled.main`
  width: 18%;
  background-color: ${(props) => props.theme.colors.secundary};
  transition: background-color 2s inherit;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;
  padding: 20px 0;
`

export const Div2 = styled.main`
  width: 82%;
  background: ${(props) => props.theme.colors.background};
  transition-delay: 1s;
  transition: background 2s ease-out;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
export const Content = styled.div`
  display: flex;
  justify-content: center;
  height: 95%;
  width: 100%;
`
