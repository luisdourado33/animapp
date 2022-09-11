import React from 'react'

import { useRouter } from 'next/router'

import { Tooltip } from 'antd'
import { Container, PosterImage } from './styles'

export default function ShortAnimeCard({ id, attributes }) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/anime/details/${id}`)
  }

  return (
    <Container>
      <Tooltip title={attributes?.canonicalTitle}>
        <PosterImage
          src={attributes?.posterImage.original}
          onClick={handleClick}
        />
      </Tooltip>
    </Container>
  )
}
