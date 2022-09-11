import React from 'react'

import { Content, Section } from './styles'

import FirstAnime from '../../molecules/FirstAnime'

import { getTopRatedAnime } from '../../../utils/helpers'

export default function HighlightAnimes({ data }) {
  const firstAnime = getTopRatedAnime(data)

  return (
    <Section>
      <Content>
        <FirstAnime data={firstAnime} />
      </Content>
    </Section>
  )
}
