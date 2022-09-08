import React from 'react'
import SimplifiedListItem from '../../molecules/SimplifiedListItem'
import { Container } from './styles'

const ITEMS = [1, 2, 3, 4, 5]

export default function SimplifiedList() {
  const renderItems = ITEMS?.map((item, index) => (
    <SimplifiedListItem key={index} {...item} />
  ))
  return <Container>{renderItems}</Container>
}
