import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import { useGlobal } from '../../../context/Global'
import { ApiService } from '../../../services/animapp'

import {
  AgeRatingGuide,
  AnimeSpec,
  AnimeTitle,
  Container,
  Content,
  CoverImage,
  PosterImage,
} from './styles'

export default function AnimeDetails() {
  const router = useRouter()
  const { id } = router.query

  const [anime, setAnime] = useState({})
  const { setIsLoading } = useGlobal()

  async function getAnimeById() {
    setIsLoading(true)

    if (id) {
      await ApiService.findAnimeById(id)
        .then((res) => {
          const { data } = res.data
          if (Object.keys(data).length > 0) {
            window.document.title = `${data.attributes.canonicalTitle} - AnimApp`
            setAnime(data)
            setIsLoading(false)
          }
        })
        .catch((err) => {
          console.error('Houve um erro ao requisitar o anime.')
          console.log(err)
        })
        .finally((res) => {
          setIsLoading(false)
        })
    }
  }

  useEffect(() => {
    getAnimeById()
  }, [id])

  return (
    <Container>
      <CoverImage posterImage={anime.attributes?.coverImage?.original}>
        <PosterImage src={anime.attributes?.posterImage.original} />
        <Content>
          <AnimeTitle>{anime.attributes?.canonicalTitle}</AnimeTitle>
          <AgeRatingGuide>{anime.attributes?.ageRatingGuide}</AgeRatingGuide>
        </Content>
      </CoverImage>
      <AnimeSpec>test</AnimeSpec>
    </Container>
  )
}
