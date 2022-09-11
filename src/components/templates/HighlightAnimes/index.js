import React from 'react'

import { getTopRatedAnime } from '../../../utils/helpers'

import { Content, Section } from './styles'

import FirstAnime from '../../molecules/FirstAnime'
import FeaturedAnimes from '../FeaturedAnimes'

export default function HighlightAnimes({ data }) {
  const firstAnime = getTopRatedAnime(data)

  return (
    <Section>
      <Content>
        <FirstAnime data={firstAnime} />
        <FeaturedAnimes />
      </Content>
    </Section>
  )
}
