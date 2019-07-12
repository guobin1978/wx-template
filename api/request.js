const baseURL = 'https://txjishufan.itit.io/api'

const request = (options, resolve, reject) => {
  wx.showLoading({
    mask: true
  });
    
  wx.request({
    url: baseURL + options.url,
    method: options.method,
    data: options.params || '',
    success: res => {
      wx.hideLoading()
      if (res.statusCode == 404 || res.statusCode == 400) {
        reject(res)
      }else {
        resolve(res.data)
      }
    },
    fail: err => {
      wx.hideLoading();
      reject(err)
    }
  })
}

const upLoad = (options, resolve, reject) => {
  wx.showLoading({
    mask: true
  });
  wx.uploadFile({
    url: baseURL + options.url, 
    filePath: options.filePath,
    formData: options.formData,
    name: 'file',
    header: {
      'content-type': 'multipart/form-data'
    },
    success: res => {
      wx.hideLoading()
      if (res.statusCode == 404 || res.statusCode == 400) {
        reject(res)
      }else {
        resolve(res.data)
      }
    },
    fail: err => {
      wx.hideLoading();
      reject(err)
    }
  })
}
export default {
  get(url, params) {
    return new Promise((resolve, reject) => {
      request({
        url,
        params,
        method: 'GET'
      },resolve, reject)
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      request({
        url,
        params,
        method: 'POST'
      },resolve, reject)
    })
  },
  upLoad(url, params) {
    const filePath = params.filePath
    delete params.filePath
    new Promise((resolve, reject) => {
      request({
        url,
        filePath,
        formData: params,
        method: 'POST'
      },resolve, reject)
    })
  }
}