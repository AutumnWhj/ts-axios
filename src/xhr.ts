import { AxiosRequestConfig } from './types'

function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get' } = config || {}
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.send(data)
}
export default xhr
