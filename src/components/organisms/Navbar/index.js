import React from 'react'

import { useRouter } from 'next/router'

import { Container } from './styles'
import { HomeOutlined, QuestionCircleOutlined } from '@ant-design/icons'

export default function Navbar() {
  const router = useRouter()

  const optionsMenu = [
    {
      label: 'Início',
      icon: <HomeOutlined />,
      key: '/',
      onClick: () => router.push('/'),
    },
    {
      label: 'Sobre',
      icon: <QuestionCircleOutlined />,
      key: '/about',
      onClick: () => router.push('https://github.com/luisdourado33/animapp'),
    },
  ]
  return (
    <Container
      items={optionsMenu}
      theme="dark"
      selectedKeys={[router.asPath]}
    />
  )
}
