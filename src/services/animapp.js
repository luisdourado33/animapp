import axios from 'axios'
import api from './animeApi'

export class ApiService {
  static getAllAnimes() {
    return axios({
      method: 'GET',
      url: `${api.baseURL}/trending/anime`,
      headers: api.headers,
    })
  }

  static findAnimesByCategory(category) {
    return axios({
      method: 'GET',
      url: `${api.baseURL}/anime?filter[categories]=${category}`,
      headers: api.headers,
    })
  }

  static findAnimeById(id) {
    return axios({
      method: 'GET',
      url: `${api.baseURL}/anime/${id}`,
      headers: api.headers,
    })
  }
}
