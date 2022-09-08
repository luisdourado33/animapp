import HighlightHero from '../components/organisms/HighlightHero'
import AnimeListSection from '../components/organisms/AnimeListSection'

export default function Home() {
  return (
    <>
      <HighlightHero />
      <AnimeListSection title="Mais indicados" buttonLabel="Ver todos" />
    </>
  )
}
