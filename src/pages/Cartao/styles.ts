import styled from 'styled-components'
import { cores } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

export const CardContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 0;
  display: flex;
`

export const CardPreenchimento = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${cores.rosa};
  color: ${cores.branca};
  width: 360px;
  height: 100%;
  z-index: 2;
  font-weight: bold;

  input {
    width: 100%;
    margin-top: 8px;
    border: 1px solid ${cores.branca};
    background-color: ${cores.branca};
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`

export const Titulo = styled.h4`
  font-size: 16px;
  color: ${cores.branca};
  margin-top: 32px;
  margin-left: 8px;
  margin-bottom: 8px;
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};
  font-size: 14px;

  color: ${cores.branca};
  margin: 8px 8px 0px 8px;

  label {
    display: block;
    margin-top: 8px;
  }
`
export const Row = styled.div`
  display: flex;
`
export const Botoes = styled.div`
  margin-top: 16px;
  button {
    background-color: ${cores.branca};
    color: ${cores.rosa};
    height: 24px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    margin: 8px;
    display: block;
    width: 344px;
  }

  button:hover {
    cursor: pointer;
  }
`
