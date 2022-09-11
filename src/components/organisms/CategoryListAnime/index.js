import React from 'react'

import AnimeCard from '../../molecules/AnimeCard'
import { List } from './styles'

export default function CategoryListAnime({ data }) {
  const renderCards = data?.map((item, index) => (
    <AnimeCard key={index} {...item} />
  ))

  if (data.length == 0) {
    return <List>Nenhum anime encontrado para esta categoria.</List>
  }

  return <List>{renderCards}</List>
}
