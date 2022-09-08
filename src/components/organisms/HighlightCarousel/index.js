import React from 'react'

import { Carousel, Container } from './styles'

import ItemCarousel from '../../molecules/ItemCarousel'

export default function HighlightCarousel({ data }) {
  const renderItems = data?.map((item, index) => <ItemCarousel key={index} />)

  return (
    <Container>
      <Carousel>{renderItems}</Carousel>
    </Container>
  )
}
