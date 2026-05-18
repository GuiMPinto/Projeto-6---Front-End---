import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'
/*
  align-items: center;  // Alinha elementos na vertical
  justify-content: center; // Alinha elementos na horizontal
*/

export const HeaderBar = styled.header`
  height: 184px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${breakpoints.mobile}) {
      flex-direction: column;
      justify-content: space-evenly;
    }
    img {
      display: inline;
      @media (max-width: ${breakpoints.mobile}) {
        display: block;
      }
    }
    h1 {
      font-size: 18px;
      color: ${cores.rosa};
      display: inline;
      @media (max-width: ${breakpoints.mobile}) {
        display: block;
      }
    }
  }
`

export const CartButton = styled.a`
  display: flex;
  font-weight: 900;
  font-size: 18px;
`
