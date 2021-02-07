import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 20px;
`

export const Message = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: white;
  margin-bottom: 10px;
  margin-right: 15px;
`

export const WrapperList = styled.div`
  width: 100%;
  height: 480px;
  overflow-y: scroll;
  margin-bottom: 10px;
  &::-webkit-scrollbar {
    width: 5px;
    border: none;
    background: white;
    border-radius: 10px;
    color: red;
  }
  &::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 10px;
  }
`

export const InputWrapper = styled.div`
  width: 90%;
`

export const LogoContent = styled.div`
  margin: 5px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`
