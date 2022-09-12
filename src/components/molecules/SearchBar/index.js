import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { SearchOutlined } from '@ant-design/icons'
import { Container, SearchInput } from './styles'

export default function SearchBar({ placeholder }) {
  const router = useRouter()
  const [search, setSearch] = useState('')

  function handleSearch(event) {
    if (event.key === 'Enter' && search !== '') {
      router.push(`/anime/search/${search}`)
    }
  }

  function handleChange(event) {
    setSearch(event.target.value)
  }

  return (
    <Container>
      <SearchOutlined style={{ color: '#eee' }} />
      <SearchInput
        placeholder={placeholder}
        onKeyDown={handleSearch}
        value={search}
        onChange={handleChange}
      />
    </Container>
  )
}
