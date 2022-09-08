import React, { useState, useEffect } from 'react'

import { Container, Menu, ItemMenu } from './styles'

import Brand from '../../atoms/Brand'
import SearchButton from '../../atoms/SearchButton'
import Link from 'next/link'

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
    <Link href={link} key={index}>
      <ItemMenu isOnTop={isOnTop}>{label}</ItemMenu>
    </Link>
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
