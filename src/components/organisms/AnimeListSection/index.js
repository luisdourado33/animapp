import React from 'react'

import { Container } from './styles'

import ListSectionHeader from '../../molecules/ListSectionHeader'
import SimplifiedList from '../SimplifiedList'

export default function AnimeListSection({ title, buttonLabel }) {
  return (
    <Container>
      <ListSectionHeader title={title} buttonLabel={buttonLabel} />
      <SimplifiedList />
    </Container>
  )
}
