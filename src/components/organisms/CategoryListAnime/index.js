import React from 'react'

import AnimeCard from '../../molecules/AnimeCard'
import { List } from './styles'

export default function CategoryListAnime({ data }) {
  const renderCards = data?.map((item, index) => (
    <AnimeCard key={index} {...item} />
  ))

  return <List>{renderCards}</List>
}
