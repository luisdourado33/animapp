import React from 'react'
import { Container, Content } from './styles'

import HighlightCarousel from '../HighlightCarousel'

export default function HighlightHero({ data }) {
  return (
    <Container>
      <Content>
        <HighlightCarousel data={data} />
      </Content>
    </Container>
  )
}
