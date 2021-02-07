import styled, { keyframes } from 'styled-components'

export const Box = styled.div`
  position: relative;
`

const Animate = keyframes`
 0%, 100%{
    transform: translateY(-40px);
  }

  50% {
    transform: translateY(40px)
  }
`

export const Cubo = styled.div`
  position: absolute;
  backdrop-filter: blur(10px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(36, 1, 19, 0.1);
  animation: ${Animate} 10s linear infinite;
  animation-delay: calc(-1s * var(--i));
  :nth-child(1) {
    --i: 0;
    top: -50px;
    right: -60px;
    width: 100px;
    height: 100px;
  }
  :nth-child(2) {
    --i: 1;
    top: 150px;
    left: -100px;
    width: 120px;
    height: 120px;
    z-index: 2;
  }
  :nth-child(3) {
    --i: 2;
    bottom: 50px;
    right: -60px;
    width: 80px;
    height: 80px;
    z-index: 2;
  }
  :nth-child(4) {
    --i: 3;
    bottom: -80px;
    left: 100px;
    width: 50px;
    height: 50px;
  }
  :nth-child(5) {
    --i: 4;
    top: -80px;
    left: 140px;
    width: 60px;
    height: 60px;
  }
`

export const Container = styled.div`
  position: relative;
  width: 400px;
  min-height: 400px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`

export const DivForm = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 40px;
`

export const ContentImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.img`
  position: relative;
  color: rgba(36, 1, 19, 0.5);
  width: 150px;
  margin-bottom: 20px;
`

export const InputBox = styled.div`
  width: 100%;
  margin-top: 20px;
`

export const Input = styled.input`
  width: 100%;
  background: rgba(36, 1, 19, 0.1);
  border: none;
  outline: none;
  padding: 10px 20px;
  border-radius: 35px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #ffffff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  ::placeholder {
    color: rgba(0, 0, 0, 0.15);
  }
`

export const Form = styled.form``

export const InputSubmit = styled.input`
  width: 100%;
  max-width: 100px;
  cursor: pointer;
  background: rgba(36, 1, 19, 0.5);
  border: none;
  outline: none;
  padding: 10px 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 35px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`
