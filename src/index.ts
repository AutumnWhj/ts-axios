import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest } from './helpers/data'
import { AxiosRequestConfig } from './types'
function axios(config: AxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig) {
  config.url = transformUrl(config)
  config.data = transformRequestData(config)
}

function transformUrl(config: AxiosRequestConfig) {
  const { url, params } = config || {}
  return buildURL(url, params)
}
function transformRequestData(config: AxiosRequestConfig) {
  const { data } = config || {}
  return transformRequest(data)
}
export default axios
