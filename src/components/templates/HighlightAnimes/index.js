import React from 'react'

import { Content, Section } from './styles'

import FirstAnime from '../../molecules/FirstAnime'

export default function HighlightAnimes({ data }) {
  const firstAnime = data[5]

  return (
    <Section>
      <Content>
        <FirstAnime data={firstAnime} />
      </Content>
    </Section>
  )
}
