import React from 'react'

import { Container } from './styles'

import ItemCarousel from '../../molecules/ItemCarousel'

export default function HighlightCarousel({ data }) {
  const renderItems = data?.map((item, index) => (
    <div key={index}>
      <ItemCarousel>ok</ItemCarousel>
    </div>
  ))

  return <Container>{renderItems}</Container>
}
