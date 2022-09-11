import React from 'react'

import { useGlobal } from '../context/Global'
import { Content } from 'antd/lib/layout/layout'

import HighlightAnimes from '../components/templates/HighlightAnimes'

export default function Home() {
  const { featuredAnimes } = useGlobal()

  return (
    <Content>
      <HighlightAnimes data={featuredAnimes} />
    </Content>
  )
}
