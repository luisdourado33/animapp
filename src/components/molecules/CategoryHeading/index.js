import React from 'react'
import { CategoryOption, CategorySelect, Container, Title } from './styles'

const categories = [
  { label: 'Ação', value: 'action', disabled: false },
  { label: 'Comédia', value: 'comedy', disabled: false },
  { label: 'Terror', value: 'terror', disabled: false },
]

export default function CategoryHeading({ title, currentCategory }) {
  const renderOptions = categories.map((option, index) => (
    <CategoryOption value={option.value} disabled={option.disabled} key={index}>
      {option.label}
    </CategoryOption>
  ))

  function handleChangeOption(value) {
    currentCategory(value)
  }

  return (
    <Container>
      <Title>{title}</Title>
      <CategorySelect defaultValue="Ação" onChange={handleChangeOption}>
        {renderOptions}
      </CategorySelect>
    </Container>
  )
}
