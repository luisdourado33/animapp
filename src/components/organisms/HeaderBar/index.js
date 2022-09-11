import React from 'react'
import SearchBar from '../../molecules/SearchBar'

import { Container } from './styles'

export default function HeaderBar() {
  return (
    <Container>
      <SearchBar placeholder="Buscar anime por nome ou categoria" />
    </Container>
  )
}
