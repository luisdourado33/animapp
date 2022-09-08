import React from 'react'
import { Container } from './styles'

export default function CarouselBadge({ children }) {
  return (
    <Container>
      <span className="label">{children}</span>
    </Container>
  )
}
