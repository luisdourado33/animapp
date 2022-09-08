import React, { useState, useEffect } from 'react'

import { Container, Menu, ItemMenu } from './styles'

import Brand from '../../atoms/Brand'
import SearchButton from '../../atoms/SearchButton'

const MENU_OPTIONS = [
  {
    label: 'Início',
    link: '/',
  },
  {
    label: 'Melhores animes',
    link: '/best-animes',
  },
  {
    label: 'Categorias',
    link: '/categories',
  },
  {
    label: 'Ajuda',
    link: '/help',
  },
]

export default function Navbar() {
  const [isOnTop, setIsOnTop] = useState(true)

  const onScrollChangeBackground = () => {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      setIsOnTop(false)
    } else {
      setIsOnTop(true)
    }
  }

  useEffect(() => {
    onScrollChangeBackground()
    window.addEventListener('scroll', onScrollChangeBackground)
  })

  const renderOptions = MENU_OPTIONS.map(({ label, link }, index) => (
    <ItemMenu href={link} key={index} isOnTop={isOnTop}>
      {label}
    </ItemMenu>
  ))

  return (
    <Container isOnTop={isOnTop}>
      <Brand>
        Anim<span>App</span>
      </Brand>
      <Menu>
        {renderOptions}
        <SearchButton />
      </Menu>
    </Container>
  )
}
