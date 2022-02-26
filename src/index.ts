// axios({
//   method: 'get',
//   url: '/simple/get',
//   params: {
//     a: 1,
//     b: 2
//   }
// })
import xhr from './xhr'
import { AxiosRequestConfig } from './types'
function axios(config: AxiosRequestConfig) {
  xhr(config)
}
export default axios
