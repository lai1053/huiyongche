import axios from '../api'

// http://wx.jchl.com/gateway/wechat/thirdparty/ocsp/getWechatWebJs?
// requestId=6409c01b0bcc2f400e8146e8071c99ec&token=235996b41edf417aae23677adc5d037810001201c78c023473c8dc65
// &appId=000101

// 获取wx配置信息
const getJsConfigInfo = data => {
  return axios({
    url: `/gateway/wechat/thirdparty/ocsp/getWechatWebJs?appId=000101`,
    data,
    isNeedRequestId: true
  })
}

// 获取微信openId
const getOpenId = data => {
  return axios({
    url: `/auth/wechatCommonService/getOpenId?appId=000101`,
    data,
    isNeedRequestId: true
  })
}

export default {
  getJsConfigInfo,
  getOpenId
}
