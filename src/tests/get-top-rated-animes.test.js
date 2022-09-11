import { getTopRatedAnime } from '../utils/helpers'

test('Get top rated anime through an array', () => {
  const firstItem = { attributes: { averageRating: 9.8 } }
  const secondItem = { attributes: { averageRating: 8.2 } }
  const thirdItem = { attributes: { averageRating: 5.66 } }

  const items = [firstItem, secondItem, thirdItem]
  const topRatedAnime = getTopRatedAnime(items)

  expect(topRatedAnime).toBe(firstItem)
})
