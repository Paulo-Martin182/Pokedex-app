import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border: 4px solid #f1f1f1;
  border-radius: 50%;
  z-index: 2;
  overflow: hidden;
  box-shadow: -10px -10px 15px ${(props) => props.theme.colors.infoBox},
    10px 10px 10px rgba(0, 0, 0, 0.1),
    inset -10px -10px 15px rgba(255, 255, 255, 0.5),
    inset 10px 10px 10px rgba(0, 0, 0, 0.1);

  ::before {
    z-index: 2;
    content: ' ';
    position: absolute;
    top: 25px;
    left: 25px;
    right: 25px;
    bottom: 25px;
    background: ${(props) => props.theme.colors.infoBox};
    border-radius: 50%;
    border: 4px solid #f1f1f1;
    box-shadow: inset -10px -10px 15px rgba(255, 255, 255, 0.5),
      inset 10px 10px 10px rgba(0, 0, 0, 0.1);
  }
`

const animate = keyframes`
{
    0%{
    transform: rotate(0deg);
    }
    100%{
    transform: rotate(360deg)
    }
}
`

export const SpanL = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(192, 76, 72, 1) 10%,
    rgba(230, 255, 75, 1) 49%,
    rgba(223, 247, 83, 1) 53%,
    rgba(70, 58, 250, 1) 100%
  );
  z-index: 1;
  filter: blur(20px);
  animation: ${animate} 1s linear infinite;
`
