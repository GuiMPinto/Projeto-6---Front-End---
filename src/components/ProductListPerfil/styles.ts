import styled from 'styled-components'
import { breakpoints } from '../../styles'

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

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    row-gap: 16px;
  }
`

export const Title = styled.h2`
  font-weight: bold;
`
