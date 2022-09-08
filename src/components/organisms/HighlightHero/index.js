import React from 'react'
import { Container, Content } from './styles'

import HighlightCarousel from '../HighlightCarousel'

const carouselItems = [
  { title: 'First Item', description: 'Just a description' },
  // { title: 'Second Item', description: 'Just another description' },
]

export default function HighlightHero() {
  return (
    <Container>
      <Content>
        <HighlightCarousel data={carouselItems} />
      </Content>
    </Container>
  )
}
