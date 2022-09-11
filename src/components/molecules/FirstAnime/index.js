import React from 'react'

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
  return (
    <Container coverImage={data?.attributes?.coverImage?.original}>
      <CoverImageOverlay>
        <AnimeImage
          src={data?.attributes?.posterImage?.original}
          alt="Anime em destaque"
        />

        <AnimeDetails>
          <BestAnimeBadge />
          <InfoContainer>
            <AnimeTitle>{data?.attributes?.canonicalTitle}</AnimeTitle>
            <MetricsContainer>
              <AgeRatingGuide>
                {data?.attributes?.ageRatingGuide}
              </AgeRatingGuide>
              <AverageRatingBadge value={data?.attributes?.averageRating} />
            </MetricsContainer>
          </InfoContainer>
          <SeeDetailsButton label="Ver detalhes" />
        </AnimeDetails>
      </CoverImageOverlay>
    </Container>
  )
}
