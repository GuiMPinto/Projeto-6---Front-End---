import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  color: ${cores.branca};
  background-color: ${cores.rosa};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  display: inline-block;
  padding: 8px 16px;
  margin: 16px 0px 8px 8px;
`

export const ButtonLink = styled(Link)`
  color: ${cores.branca};
  background-color: ${cores.rosa};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  display: inline-block;
  margin: 16px 0px 8px 8px;
`
