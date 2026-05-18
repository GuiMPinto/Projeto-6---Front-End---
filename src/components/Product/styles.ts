import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonLink, ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  border: 2px solid ${cores.rosa};
  border-radius: 8px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;

  span {
    height: 24px;
    img {
      height: 24px;
    }
  }

  ${ButtonLink} {
    position: absolute;
    left: 8px;
    bottom: 8px;
  }

  ${ButtonContainer} {
    position: absolute;
    left: 8px;
    bottom: 8px;
  }
`
export const CardImagem = styled.img`
  width: 100%;
  display: block;
  height: 212px;
  object-fit: cover;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: inline;
  margin-left: 8px;
  margin-top: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-left: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 8px;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Etiqueta = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  img {
    height: 24px;
    margin-left: 8px;
    margin-right: 8px;
  }
`
