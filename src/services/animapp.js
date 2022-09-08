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
}
