import React from 'react'

import { StarFilled } from '@ant-design/icons'
import { Container } from './styles'

export default function BestAnimeBadge(props) {
  return (
    <Container>
      <StarFilled />
      <span className="text">Nota mais alta</span>
    </Container>
  )
}
