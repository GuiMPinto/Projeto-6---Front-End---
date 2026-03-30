import styled from 'styled-components'
import { cores } from '../../styles'

import { ButtonLink } from '../Button/styles'
/*
  align-items: center;  // Alinha elementos na vertical
  justify-content: center; // Alinha elementos na horizontal
*/

export const Card = styled.div`
  background-color: ${cores.rosa};
  color: ${cores.branca};
  width: 320px;
  padding: 8px;

  ${ButtonLink} = {
    width: 100%;
    color: ${cores.rosa};
    background-color: ${cores.branca};
    align-items: center;
    justify-content: center;
    width: 100%;
    width: 320px;
    margin: 0 auto;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-left: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-left: 8px;
`
