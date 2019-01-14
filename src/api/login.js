import api from './config.js'

// login模块相关接口
export default {
  login: (name, password) => api.post(`/signin`, { name, password}),
  signUp: (name, password) => api.post(`/signup`, { name, password})
}
