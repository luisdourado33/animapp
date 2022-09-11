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
      onClick: () => router.push('/'),
    },
    {
      label: 'Sobre',
      icon: <QuestionCircleOutlined />,
      onClick: () => router.push('/about'),
    },
  ]
  return <Container items={optionsMenu} theme="dark" />
}
