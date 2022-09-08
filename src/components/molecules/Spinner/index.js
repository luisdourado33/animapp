import React from 'react'

import { LoadingOutlined } from '@ant-design/icons'
import { Container } from './styles'
import { Spin } from 'antd'

const antIcon = (
  <LoadingOutlined style={{ fontSize: 50, color: '#ffff' }} spin />
)

export default function Spinner({ isActive }) {
  if (isActive)
    return (
      <Container>
        <Spin indicator={antIcon} />
      </Container>
    )

  return <></>
}
