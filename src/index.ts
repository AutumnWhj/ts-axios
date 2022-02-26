import xhr from './xhr'
import { buildURL } from './helpers/url'
import { AxiosRequestConfig } from './types'
function axios(config: AxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig) {
  config.url = transformUrl(config)
}

function transformUrl(config: AxiosRequestConfig) {
  const { url, params } = config || {}
  return buildURL(url, params)
}
export default axios
