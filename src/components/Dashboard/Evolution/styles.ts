import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 15px;
  h1 {
    font-size: 14px;
    width: 20%;
  }
`
export const ImageBox = styled.main`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 95%;
`
export const ImageEvo = styled.img`
  width: 70px;
  margin: 2px 10px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  h2 {
    font-size: 12px;
  }
`
