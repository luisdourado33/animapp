import React from 'react'

import { Container } from './styles'
import { HomeOutlined, QuestionCircleOutlined } from '@ant-design/icons'

const optionsMenu = [
  { label: 'Início', icon: <HomeOutlined /> },
  { label: 'Sobre', icon: <QuestionCircleOutlined /> },
]

export default function Navbar() {
  return <Container items={optionsMenu} theme="dark" />
}
