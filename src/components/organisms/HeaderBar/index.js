import React from 'react'
import { useRouter } from 'next/router'

import { ArrowLeftOutlined } from '@ant-design/icons'

import SearchBar from '../../molecules/SearchBar'

import { Container } from './styles'
import { Button } from 'antd'

export default function HeaderBar() {
  const router = useRouter()

  const handleGoBack = () => router.back()

  return (
    <Container>
      {router.asPath !== '/' && (
        <Button
          type="primary"
          shape="circle"
          icon={<ArrowLeftOutlined />}
          onClick={handleGoBack}
          style={{ marginRight: 10 }}
        />
      )}
      <SearchBar placeholder="Buscar anime por nome ou categoria" />
    </Container>
  )
}
