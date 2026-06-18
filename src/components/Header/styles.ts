import styled from 'styled-components'

/*
  align-items: center;  // Alinha elementos na vertical
  justify-content: center; // Alinha elementos na horizontal
*/

export const HeaderBar = styled.header`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      background-repeat: no-repeat;
      background-size: cover;
    }

    h1 {
      line-height: 0;
    }

    h2 {
      padding-top: 160px;
      padding-bottom: 40px;
      text-align: center;
    }
  }
`
export const IMAGEM = styled.img`
  margin-top: 40px;
`
