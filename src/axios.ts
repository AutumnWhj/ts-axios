import { AxiosInstance, AxiosRequestConfig } from './types'
import Axios from './core/Axios'
import defaults from './core/defaults'

import { extend } from './helpers/util'

function createInstance(config: AxiosRequestConfig): AxiosInstance {
  const context = new Axios(config)
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosInstance
}

const axios = createInstance(defaults)
export default axios
