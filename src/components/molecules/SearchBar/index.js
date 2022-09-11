import React from 'react'

import { SearchOutlined } from '@ant-design/icons'
import { Container, SearchInput } from './styles'

export default function SearchBar({ placeholder }) {
  return (
    <Container>
      <SearchOutlined style={{ color: '#eee' }} />
      <SearchInput placeholder={placeholder} />
    </Container>
  )
}
