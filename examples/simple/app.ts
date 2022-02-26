import axios, { AxiosError } from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get',
  timeout: 2000
})
  .then((res) => {
    console.log(res)
  })
  .catch((e: AxiosError) => {
    console.log(e.message)
    console.log(e.code)
  })

axios({
  url: '/simple/post',
  method: 'post',
  data: {
    msg: 'hi'
  }
})

axios.request({
  url: '/simple/post',
  method: 'post',
  data: {
    msg: 'hello'
  }
})

axios.get('/simple/get')

axios.options('/simple/options')

axios.delete('/simple/delete')

axios.head('/simple/head')

axios.post('/simple/post', { msg: 'post' })

axios.put('/simple/put', { msg: 'put' })

axios.patch('/simple/patch', { msg: 'patch' })
