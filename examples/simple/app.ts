import axios from '../../src/index'

// axios({
//   method: 'get',
//   url: '/simple/get',
//   timeout: 2000
// })
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((e: AxiosError) => {
//     console.log(e.message)
//     console.log(e.code)
//   })

// axios({
//   url: '/simple/post',
//   method: 'post',
//   data: {
//     msg: 'hi'
//   }
// })

// axios.request({
//   url: '/simple/post',
//   method: 'post',
//   data: {
//     msg: 'hello'
//   }
// })

// axios.get('/simple/get')

// axios.options('/simple/options')

// axios.delete('/simple/delete')

// axios.head('/simple/head')

// axios.post('/simple/post', { msg: 'post' })

// axios.put('/simple/put', { msg: 'put' })

// axios.patch('/simple/patch', { msg: 'patch' })
// interface ResponseData<T = any> {
//   code: number
//   result: T
//   message: string
// }

// interface User {
//   name: string
//   age: number
// }

// function getUser<T>() {
//   return axios<ResponseData<T>>('/simple/get')
//     .then((res) => res.data)
//     .catch((err) => console.error(err))
// }

// async function test() {
//   const user = await getUser<User>()
//   console.log('user: ', user)
//   if (user) {
//     console.log(user.result.name)
//   }
// }

// test()

axios.interceptors.request.use((config) => {
  config.headers.test += '1'
  return config
})
axios.interceptors.request.use((config) => {
  config.headers.test += '2'
  return config
})
axios.interceptors.request.use((config) => {
  config.headers.test += '3'
  return config
})

axios.interceptors.response.use((res) => {
  res.data += '1'
  return res
})
let interceptor = axios.interceptors.response.use((res) => {
  res.data += '2'
  return res
})
axios.interceptors.response.use((res) => {
  res.data += '3'
  return res
})

axios.interceptors.response.eject(interceptor)

axios({
  url: '/simple/get',
  method: 'get',
  headers: {
    test: ''
  }
}).then((res) => {
  console.log(res.data)
})
