import axios from 'axios'

const http = axios.create({
  baseURL: '', // 接口的服务器地址
  timeout: 30000, // 请求超时时间
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})

export default http
