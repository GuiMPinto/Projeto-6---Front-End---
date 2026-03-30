import styled from 'styled-components'
import { cores } from '../../styles'
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
    img {
      display: inline;
    }
    h1 {
      font-size: 18px;
      color: ${cores.rosa};
      display: inline;
    }
  }
`
