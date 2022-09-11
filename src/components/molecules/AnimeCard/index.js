import React from 'react'
import { Container, PosterImage } from './styles'

export default function AnimeCard({ attributes }) {
  return (
    <Container>
      <PosterImage src={attributes?.posterImage.original} />
    </Container>
  )
}
