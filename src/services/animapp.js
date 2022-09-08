import axios from 'axios'
import api from './animeApi'

export class ApiService {
  static getAllAnimes() {
    return axios({
      method: 'GET',
      url: `${api.baseURL}/anime`,
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

  static findAnimeByName(name) {
    return axios({
      method: 'GET',
      url: `${api.baseURL}/anime?filter[text]=${name}`,
      headers: api.headers,
    })
  }
}