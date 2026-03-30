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
      font-size: 10px;
      padding-bottom: 40px;
      text-align: center;
      font-weight: regular;
    }
  }
`
export const LOGO = styled.img`
  margin-top: 40px;
`

export const R_SOCIAIS = styled.img`
  margin-top: 32px;
  margin-bottom: 80px;
`
