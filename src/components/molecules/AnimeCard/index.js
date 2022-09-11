import React from 'react'

import { useRouter } from 'next/router'
import { AnimeSpec, Container, PosterImage } from './styles'

export default function AnimeCard({ id, attributes }) {
  const router = useRouter()

  function handleClickCard() {
    router.push(`/anime/details/${id}`)
  }

  return (
    <Container onClick={handleClickCard}>
      <PosterImage posterImage={attributes?.posterImage.original}>
        <AnimeSpec className="spec">
          <span className="title">{attributes?.canonicalTitle}</span>
          <span className="averageRating">{attributes?.ratingRank}</span>
        </AnimeSpec>
      </PosterImage>
    </Container>
  )
}
