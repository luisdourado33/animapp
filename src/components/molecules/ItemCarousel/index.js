import React from 'react'
import { CalendarOutlined } from '@ant-design/icons'
import {
  Container,
  ImageHighlight,
  Details,
  TitleDetails,
  StartDate,
  BadgesRow,
} from './styles'

import CarouselBadge from '../../atoms/CarouselBadge'

export default function ItemCarousel({ attributes }) {
  return (
    <Container>
      <ImageHighlight bgImage={attributes.posterImage.original} />
      <Details>
        <BadgesRow>
          <CarouselBadge>Badge</CarouselBadge>
          <CarouselBadge>Badge</CarouselBadge>
        </BadgesRow>
        <TitleDetails>{attributes.canonicalTitle}</TitleDetails>
        <StartDate>
          <CalendarOutlined className="date-icon" />
          <span className="date">{attributes.startDate}</span>
        </StartDate>
      </Details>
    </Container>
  )
}
