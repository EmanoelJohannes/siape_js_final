import axios from 'axios'
import { parseCookies, destroyCookie } from 'nookies'

export function getAPIClient(ctx) {
  const { '@siape:token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'http://localhost:3333/'
  })

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
  }

  api.interceptors.response.use(
    async response => {
      return response
    },
    async error => {
      if (error.response.status === 401) {
        destroyCookie(undefined, '@siape:token')

        api.defaults.headers['Authorization'] = null
      }

      return Promise.reject(error)
    }
  )

  return api
}
