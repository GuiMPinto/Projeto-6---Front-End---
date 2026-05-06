import styled from 'styled-components'

import { cores } from '../../styles'

export const Container = styled.section`
  padding: 32px 0;
  background-color: ${cores.branca};
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 40px;
  margin-bottom: 120px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: none;

  &.visivel {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div``

export const ButtonModal = styled.div``
