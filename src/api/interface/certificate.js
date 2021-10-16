import axios from '../api' // 导入 api

// 提交身份证验证
export const checkId = data => {
  return axios({
    url: '/api/app/employee/id/auth',
    method: 'post',
    data,
    headers: {'Content-Type': 'application/json;charset=UTF-8'}
  })
}

// 上传图片到服务器
export const singleUpload = data => {
  return axios({
    url: '/api/file/singleUpload',
    method: 'post',
    data,
    headers: {'Content-Type': 'multipart/form-data'}
  })
}

// 获取图片url
export const getImageUrl = data => {
  return axios({
    url: '/api/file/url',
    method: 'post',
    data
  })
}

// 查询身份证是否验证通过
export const verifyId = data => {
  return axios({
    url: '/api/app/employee/id/state',
    method: 'post',
    data
  })
}

export default {
  checkId,
  singleUpload,
  getImageUrl,
  verifyId
}
