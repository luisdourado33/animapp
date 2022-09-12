import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import { ApiService } from '../../../services/animapp'
import { useGlobal } from '../../../context/Global'
import { Container, SearchTitle } from './styles'

import CategoryListAnime from '../../../components/organisms/CategoryListAnime'

export default function SearchAnimePage() {
  const { setIsLoading } = useGlobal()

  const router = useRouter()
  const { text } = router.query
  const [animes, setAnimes] = useState([])

  async function getAnimeByText() {
    setIsLoading(true)

    if (text) {
      await ApiService.getAnimeByText(text)
        .then((res) => {
          const { data } = res.data
          setAnimes(data)
          setIsLoading(false)
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false)
        })
    }
  }

  useEffect(() => {
    getAnimeByText()
  }, [text])

  return (
    <Container>
      {text !== '' && (
        <SearchTitle>
          {animes.length} resultados encontrados para {text}
        </SearchTitle>
      )}
      <CategoryListAnime data={animes} />
    </Container>
  )
}
