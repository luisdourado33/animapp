import React from 'react'
import { CategoryOption, CategorySelect, Container, Title } from './styles'

const categories = [
  { label: 'Ação', value: 'action', disabled: false },
  { label: 'Comédia', value: 'comedy', disabled: false },
  { label: 'Terror', value: 'terror', disabled: false },
  { label: 'Aventura', value: 'adventure', disabled: false },
  { label: 'Fantasia', value: 'fantasy', disabled: false },
  { label: 'Drama', value: 'drama', disabled: false },
  { label: 'Esporte', value: 'sports', disabled: false },
  { label: 'Suspense', value: 'suspense', disabled: false },
  { label: 'Ficção científica', value: 'sci-fi', disabled: false },
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
