import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import { useGlobal } from '../../../context/Global'
import { ApiService } from '../../../services/animapp'

export default function AnimeDetails() {
  const router = useRouter()
  const [anime, setAnime] = useState({})
  const { setIsLoading } = useGlobal()
  const { id } = router.query

  async function getAnimeById() {
    setIsLoading(true)

    if (id) {
      await ApiService.findAnimeById(id)
        .then((res) => {
          const { data } = res.data
          if (data.length > 0) {
            console.log('Anime encontrado.')
            setAnime(data[0])
            setIsLoading(false)
          }
        })
        .catch((err) => {
          console.log('ID: ' + id)
          console.log('Houve um erro ao requisitar o anime.')
        })
        .finally((res) => {
          console.log('res', res)
          setIsLoading(false)
        })
    }
  }

  useEffect(() => {
    getAnimeById()
  }, [id])

  return <div>{JSON.stringify(anime)}</div>
}
