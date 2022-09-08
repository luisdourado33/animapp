import React, { useState, useEffect } from 'react'

import { Container, Brand, Menu, ItemMenu } from './styles'

import SearchButton from '../../atoms/SearchButton'
import { useRouter } from 'next/router'

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
  const router = useRouter()
  const [isOnTop, setIsOnTop] = useState(true)

  useEffect(() => {
    console.log(router)
  }, [])

  const onScrollChangeBackground = () => {
    setIsOnTop(() => (window.screenY >= 66 ? false : true))
  }

  useEffect(() => {
    onScrollChangeBackground()
    window.addEventListener('scroll', onScrollChangeBackground)
  })

  const renderOptions = MENU_OPTIONS.map(({ label, link }, index) => (
    <ItemMenu href={link} key={index}>
      {label}
    </ItemMenu>
  ))

  return (
    <Container className={isOnTop ? 'onTop' : 'scrolled'}>
      <Brand>AnimApp</Brand>
      <Menu>
        {renderOptions}
        <SearchButton />
      </Menu>
    </Container>
  )
}
