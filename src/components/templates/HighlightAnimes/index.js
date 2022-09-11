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
        Destaques
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: '300px',
          }}
        >
          <FirstAnime data={firstAnime} />
          <FeaturedAnimes />
        </div>
      </Content>
    </Section>
  )
}
