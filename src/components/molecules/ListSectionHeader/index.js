import React from 'react'

import { Container, Title, Button } from './styles'

export default function ListSectionHeader({ title, buttonLabel }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Button type="primary">{buttonLabel}</Button>
    </Container>
  )
}
