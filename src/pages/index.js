import React, { useEffect } from 'react'

import { useGlobal } from '../context/Global'
import { Content } from 'antd/lib/layout/layout'

import HighlightAnimes from '../components/templates/HighlightAnimes'
import CategoryGrid from '../components/templates/CategoryGrid'

export default function Home() {
  const { featuredAnimes } = useGlobal()

  useEffect(() => {
    window.document.title = 'AnimApp - Find good animes easily'
  }, [])

  return (
    <Content>
      <HighlightAnimes data={featuredAnimes} />
      <CategoryGrid />
    </Content>
  )
}
