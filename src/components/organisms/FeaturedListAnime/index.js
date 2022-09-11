import React from 'react'

import { useGlobal } from '../../../context/Global'
import { List } from './styles'

import ShortAnimeCard from '../../molecules/ShortAnimeCard'

export default function FeaturedListAnime() {
  const { featuredAnimes } = useGlobal()

  const renderItems = featuredAnimes.map((item, index) => (
    <ShortAnimeCard {...item} key={index} />
  ))

  return <List>{renderItems}</List>
}
