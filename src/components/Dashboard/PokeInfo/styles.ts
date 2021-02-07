import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  color: ${(props) => props.theme.colors.text};
  transition: 2s ease-out;
`

export const leftContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
export const ImageBox = styled.div`
  width: 70%;
  height: 250px;
  background: ${(props) => props.theme.colors.infoBox};
  border-radius: 10px;
  display: flex;
  justify-content: center;
`
export const PokeImage = styled.img`
  width: 300px;
`

export const TypeBox = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 25px 0;
  padding: 5px 10px;
  width: 70%;
  background: ${(props) => props.theme.colors.infoBox};
  border-radius: 10px;
  align-items: center;
  h3 {
  }
`

export const LargeAltBox = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-between;
  padding: 5px 10px;
`

export const LargeBox = styled.div`
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 40px;
  background: ${(props) => props.theme.colors.infoBox};
  border-radius: 10px;
  margin: 0 5px;
  b {
    margin-right: 5px;
  }
`
export const Attributes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
  padding: 15px;
  background: ${(props) => props.theme.colors.infoBox};
  border-radius: 10px;
  width: 70%;
  height: 150px;
  h3 {
    width: 100%;
    font-size: 14px;
  }
`

export const RIghtContent = styled.div`
  width: 50%;
`

export const Evolution = styled.div`
  width: 80%;
  height: 120px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.infoBox};
`

export const Content = styled.div`
  width: 80%;
  margin: 30px 0;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.infoBox};
  height: 410px;
  display: flex;
  justify-content: center;
  align-items: center;
`
