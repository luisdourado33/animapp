import React from 'react'

import { Carousel, Container } from './styles'

import ItemCarousel from '../../molecules/ItemCarousel'

export default function HighlightCarousel({ data }) {
  const renderItems = data?.map((item, index) => (
    <ItemCarousel key={index} {...item} />
  ))

  return (
    <Container>
      <Carousel autoplay>{renderItems}</Carousel>
    </Container>
  )
}
