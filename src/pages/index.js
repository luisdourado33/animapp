import React from 'react'
import { useGlobal } from '../context/Global'

import HighlightHero from '../components/organisms/HighlightHero'
import AnimeListSection from '../components/organisms/AnimeListSection'

export default function Home() {
  const { featuredAnimes } = useGlobal()

  return (
    <>
      <HighlightHero data={featuredAnimes} />
      <AnimeListSection title="Mais indicados" buttonLabel="Ver todos" />
    </>
  )
}
