import request from './request.js'

export default {
  getXXX1(params) { // 获取XXX1
    return request.post('', params)
  },
  getXXX2(params) { // 获取XXX2
    return request.get('', params)
  },
  upLoad(params) { // 上传
    return request.post('', params)
  }
}