import React from 'react'

import { useRouter } from 'next/router'

import {
  AgeRatingGuide,
  AnimeDetails,
  AnimeImage,
  AnimeTitle,
  Container,
  CoverImageOverlay,
  InfoContainer,
  MetricsContainer,
} from './style'

import BestAnimeBadge from '../../atoms/BestAnimeBadge'
import SeeDetailsButton from '../../atoms/SeeDetailsButton'
import AverageRatingBadge from '../AverageRatingBadge'

export default function FirstAnime({ data }) {
  const router = useRouter()

  const handleNavigate = () => {
    const { id } = data

    if (id) {
      router.push(`/anime/details/${id}`)
    }
  }

  return (
    <Container coverImage={data?.attributes?.coverImage?.original}>
      <AnimeImage
        src={data?.attributes?.posterImage?.original}
        alt="Anime em destaque"
      />
      <AnimeDetails>
        <BestAnimeBadge />
        <InfoContainer>
          <AnimeTitle>{data?.attributes?.canonicalTitle}</AnimeTitle>
          <MetricsContainer>
            <AgeRatingGuide>{data?.attributes?.ageRatingGuide}</AgeRatingGuide>
            <AverageRatingBadge value={data?.attributes?.averageRating} />
          </MetricsContainer>
        </InfoContainer>
        <SeeDetailsButton label="Ver detalhes" onClick={handleNavigate} />
      </AnimeDetails>
    </Container>
  )
}
