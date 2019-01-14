import Vue from 'vue'
import axios from 'axios'
import router from '../router'

Vue.prototype.axios = axios

let baseURL
// 错误状态码 有返回错误直接进行操作
const errorStatus = [401, 500, 502, 504]


if (window.location.hostname.indexOf('localhost') > -1) {
  // 本地调试用url
  baseURL = 'http://localhost:3000/api'
} else {
  // 线上url
  baseURL = 'http://' + window.location.hostname + '/api'
}

axios.defaults.withCredentials = true
axios.defaults.baseURL = baseURL
// 中间件 拦截请求
axios.interceptors.response.use((response) => {
  if (errorStatus.includes(response.status)) {
    router.push({
      path: '/'
    })
  }
  return response;
}, (error) => {
  if (error) {
    router.push({
      path: '/'
    })
    return ''
  }
  return ''
})

// 导出axios配置组件
export default {
  get (url) {
    return axios({
      method: 'GET',
      url
    })
  },
  post (url, data) {
    return axios({
      method: 'POST',
      url,
      data
    })
  },
  all (arr) {
    return Promise.all(arr)
  }
}
