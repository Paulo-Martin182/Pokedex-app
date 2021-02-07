import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  margin: 10px;
`
export const ContentMenu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Switch = styled.input``

const animationLogo = keyframes`
0%{
    transform: rotate(0deg)
}

100%{
    transform: rotate(360deg)
}
`

export const ConfigIcon = styled.img`
  width: 50px;
  animation: ${animationLogo} 5s linear infinite;
`
