import React from 'react'
import { Container, PosterImage } from './styles'

export default function ShortAnimeCard({ attributes }) {
  return (
    <Container>
      <PosterImage src={attributes?.posterImage.original} />
    </Container>
  )
}
