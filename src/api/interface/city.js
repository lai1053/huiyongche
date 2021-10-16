import axios from '../api'
const appId = '10002033'
// 根据经纬度获取城市信息以及天气预报
const getCityInfo = data => {
  return axios({
    url: `/tpapi/front/weather/query?appId=${appId}`,
    data,
    isNeedRequestId: true
  })
}
// 根据经纬度获取周边油站信息
const getOilStation = data => {
  return axios({
    url: `/tpapi/front/oilStation/query?appId=${appId}`,
    data,
    isNeedRequestId: true
  })
}

// 获取尾号限行的城市
const getLimitRowCity = data => {
  return axios({
    url: `/tpapi/front/vehicle/limitRowCity?appId=${appId}`,
    data,
    isNeedRequestId: true
  })
}

// 根据城市Id获取尾号限行信息
const getLimitRow = data => {
  return axios({
    url: `/tpapi/front/vehicle/limitRow?appId=${appId}`,
    data,
    isNeedRequestId: true,
    noShowLoading: true
  })
}

export default {
  getCityInfo,
  getOilStation,
  getLimitRowCity,
  getLimitRow
}
