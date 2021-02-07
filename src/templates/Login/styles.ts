import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #f1f4f9, #dff1ff);
`
export const ColorB = styled.div`
  position: absolute;
  filter: blur(150px);
  &:nth-child(1) {
    top: -350px;
    width: 800px;
    height: 600px;
    background: #ed6174;
  }

  &:nth-child(2) {
    bottom: -150px;
    left: 100px;
    width: 500px;
    height: 500px;
    background: #fff566;
  }

  &:nth-child(3) {
    bottom: 50px;
    right: 100px;
    width: 400px;
    height: 400px;
    background: #38b9ff;
  }
`
