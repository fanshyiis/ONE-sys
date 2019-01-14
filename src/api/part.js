import api from './config.js'

// part模块相关接口
export default {
  current: () => api.get(`/me`),
  addPart: (data) => api.post('/addPart', data),
  partList: () => api.get('/findAllPart'),
  delPart: (id) => api.post('/deletePart', { id: id })
}
