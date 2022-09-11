import React from 'react'
import { AnimeSpec, Container, PosterImage } from './styles'

export default function AnimeCard({ attributes }) {
  return (
    <Container>
      <PosterImage posterImage={attributes?.posterImage.original}>
        <AnimeSpec className="spec">
          <span className="title">{attributes?.canonicalTitle}</span>
          <span className="averageRating">{attributes?.ratingRank}</span>
        </AnimeSpec>
      </PosterImage>
    </Container>
  )
}
