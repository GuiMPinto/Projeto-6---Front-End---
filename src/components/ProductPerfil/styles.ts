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
  position: relative;

  img {
    width: 100%;
    display: block;
    height: 217px;
    object-fit: cover;
  }
`
export const CardContainer = styled.div`
  padding: 8px;
  border-top: none;
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

export const BotaoAdicionar = styled.button`
  background-color: ${cores.branca};
  color: ${cores.rosa};
  padding: 4px 0;
  border: none;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
`
