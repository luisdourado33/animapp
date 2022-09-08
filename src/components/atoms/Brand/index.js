import React from 'react'
import { Container, Typography } from './styles'

export default function Brand({ children }) {
  return (
    <Container>
      <Typography type="primary">{children}</Typography>
    </Container>
  )
}
