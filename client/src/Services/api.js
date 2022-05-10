import axios from 'axios'

const api = axios.create({
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
  baseURL: 'http://localhost:8080/',
})

export default api
