import React, { createContext, useContext, useEffect, useState } from 'react'
const GlobalContext = createContext({})

import { ApiService } from '../../services/animapp'

export function useGlobal() {
  const context = useContext(GlobalContext)
  return context
}

export function GlobalProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const [featuredAnimes, setFeaturedAnimes] = useState([])

  async function getAllAnimes() {
    setIsLoading(true)

    await ApiService.getAllAnimes()
      .then((res) => {
        const { data } = res.data
        setFeaturedAnimes(data)
      })
      .catch((err) => {
        setIsLoading(false)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getAllAnimes()
  }, [])

  const gettersAndSetters = {
    isLoading,
    setIsLoading,
    featuredAnimes,
    setFeaturedAnimes,
  }

  return (
    <GlobalContext.Provider value={gettersAndSetters}>
      {children}
    </GlobalContext.Provider>
  )
}
