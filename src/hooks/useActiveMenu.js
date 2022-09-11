import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

function useActiveMenu() {
  const [active, setActive] = useState('/')
  const { asPath } = useRouter()

  useEffect(() => {
    setActive(asPath)
  })

  return active
}

export default useActiveMenu
