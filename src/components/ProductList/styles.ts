import styled from 'styled-components'

import { cores } from '../../styles'

/*
  align-items: center;  // Alinha elementos na vertical
  justify-content: center; // Alinha elementos na horizontal
*/

export const Container = styled.section`
  padding: 32px 0;
  background-color: ${cores.branca};
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 40px;
  margin-top: 40px;
  margin-bottom: 120px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
