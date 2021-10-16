import axios from '../api' // 倒入 api

// 获取租约信息
export const getLeaseInfo = data => {
  return axios({
    url: '/api/app/rent/info',
    method: 'post',
    data
  })
}

// 确认租约信息
export const confirmLeaseInfo = data => {
  return axios({
    url: '/api/app/rent/confirm',
    method: 'post',
    data
  })
}

// 查询用户租车环节
export const carRentalState = data => {
  return axios({
    url: '/api/app/rent/process',
    method: 'post',
    data
  })
}

// 查询用户是否已租车
export const rentalCarState = data => {
  return axios({
    url: '/api/app/rent/state',
    method: 'post',
    data
  })
}

// 查看租金
export const rentDetail = data => {
  return axios({
    url: '/api/app/rent/bill',
    method: 'post',
    data
  })
}

// 获取租车协议信息
export const rentAgreement = data => {
  return axios({
    url: '/api/app/rent/agreement',
    method: 'post',
    data
  })
}
// 获取我的收益
const getMyIncome = data => {
  return axios({
    url: '/api/app/rent/querymyincome',
    data
  })
}

// 获取租约列表
const getRentList = data => {
  return axios({
    url: '/api/app/rent/list',
    data
  })
}

export default {
  getLeaseInfo,
  confirmLeaseInfo,
  carRentalState,
  rentalCarState,
  rentDetail,
  rentAgreement,
  getMyIncome,
  getRentList
}
