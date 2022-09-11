import React from 'react'

import { StarFilled, StarOutlined } from '@ant-design/icons'
import { Container } from './styles'

export default function AverageRatingBadge({ value }) {
  return (
    <Container>
      <StarFilled style={{ color: 'orange' }} />
      <span className="value">{value}</span>
    </Container>
  )
}
