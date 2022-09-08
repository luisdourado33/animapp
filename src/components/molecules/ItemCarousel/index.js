import React from 'react'

import {
  Container,
  ImageHighlight,
  Details,
  TitleDetails,
  BadgesRow,
} from './styles'

import CarouselBadge from '../../atoms/CarouselBadge'

export default function ItemCarousel({ children }) {
  return (
    <Container>
      <ImageHighlight />
      <Details>
        <BadgesRow>
          <CarouselBadge>Badge</CarouselBadge>
          <CarouselBadge>Badge</CarouselBadge>
        </BadgesRow>
        <TitleDetails>Lorem Ipsum</TitleDetails>
      </Details>
    </Container>
  )
}
