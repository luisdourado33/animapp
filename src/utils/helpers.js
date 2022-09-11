function getTopRatedAnime(animeList) {
  if (animeList.length > 0)
    return animeList.reduce((a, b) =>
      a.attributes.averageRating > b.attributes.averageRating ? a : b,
    )
}

export { getTopRatedAnime }
