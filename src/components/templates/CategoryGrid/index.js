import React, { useEffect, useState } from 'react'

import { ApiService } from '../../../services/animapp'
import { useGlobal } from '../../../context/Global'

import { Section } from './styles'

import CategoryHeading from '../../molecules/CategoryHeading'
import CategoryListAnime from '../../organisms/CategoryListAnime'

export default function CategoryGrid({ data }) {
  const { isLoading, setIsLoading } = useGlobal()
  const [category, setCategory] = useState('action')
  const [animes, setAnimes] = useState([])

  async function fetchByCategory() {
    setIsLoading(true)
    await ApiService.findAnimesByCategory(category)
      .then((res) => {
        const { data } = res.data
        setAnimes(data)
        setIsLoading(false)
        console.log('findAnimes')
      })
      .catch((err) => {
        setIsLoading(false)
      })
      .finally(() => setIsLoading(false))
  }

  const handleChangeCategory = (value) => {
    setCategory(value)
    fetchByCategory()
  }

  useEffect(() => {
    fetchByCategory()
  }, [])

  return (
    <Section>
      <CategoryHeading
        title="Buscar por categoria"
        currentCategory={handleChangeCategory}
      />
      <CategoryListAnime data={animes} />
    </Section>
  )
}
