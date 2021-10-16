import { lStorage } from '@/utils/storage.js'

/**
 * 参数合并
 * 使用：merge({title: '标题'}, options)
 * @param {*} target
 */
export const merge = (target) => {
  for (var i = 1, j = arguments.length; i < j; i++) {
    var source = arguments[i]
    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        var value = source[prop]
        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }
}

/**
 * 根据字段获取url参数
 * @method getQueryString
 * @param name {String}
 */
export const getQueryString = function (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
    ? window.location.search.substr(1).match(reg)
    : window.location.hash.substr(window.location.hash.indexOf('?') + 1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}

/**
 * 判断对象是否相同
 * @method diff
 * @param obj {Object}
 */
export const diff = function (obj1, obj2) {
  var o1 = obj1 instanceof Object
  var o2 = obj2 instanceof Object
  if (!o1 || !o2) { // 判断不是对象
    return obj1 === obj2
  }

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false
  }

  for (var attr in obj1) {
    var t1 = obj1[attr] instanceof Object
    var t2 = obj2[attr] instanceof Object
    if (t1 && t2) {
      return diff(obj1[attr], obj2[attr])
    } else if (obj1[attr] !== obj2[attr]) {
      return false
    }
  }
  return true
}

/**
 * 判断环节状态
 * @method stateHandle
 * @param res {Object}
 */
export const stateHandle = function (res) {
  // 查看车辆证照
  let link = 1
  let finished = res.data.permit
  let anomaly = []

  // 年检是否过期
  if (res.data.inspection) {
    anomaly.push(1)
  }

  // 保险是否过期
  if (res.data.insurance) {
    anomaly.push(2)
  }

  // 查看车辆信息
  let info = JSON.parse(lStorage.getItem(lStorage.VEHICLE_INFO)) || false
  if (res.data.permit) {
    link = 2
    finished = info && info.operate
  }

  // 查看租约
  if (info && info.operate && res.data.permit) {
    link = 3
    finished = res.data.lease
  }

  // 平台审核
  if (res.data.lease) {
    link = 4
    finished = res.data.audit
  }

  // 等待租用
  if (res.data.audit) {
    link = 5
    finished = res.data.rent
  }

  // 查看租金
  let bill = 0
  if (res.data.rent && !res.data.bill) bill = 1
  if (res.data.bill) bill = 2

  return {
    link: link,
    finished: finished,
    anomaly: anomaly,
    bill: bill
  }
}

/**
 * 时间格式化
 * @method FormatTime
 * @param str {String} 2019-08-01
 */
export const FormatTime = function (str, type) {
  if (typeof str !== 'string' || str === '') return
  let array = str.split(' ')
  let date = (array[0] || '').split('-')
  let time = (array[1] || '').split(':')
  let y = parseInt(date[0] || 0)
  let M = parseInt(date[1] || 0)
  let d = parseInt(date[2] || 0)
  let h = parseInt(time[0] || 0)
  let m = parseInt(time[1] || 0)
  let s = parseInt(time[2] || 0)
  switch (type) {
    case 'YMD':
      let ymdString = `${y}年${M}月${d}日`
      return ymdString
    case 'YMDHMS':
      let ymdhmsString = `${y}年${M}月${d}日 ${h}时${m}分${s}秒`
      return ymdhmsString
    case 'Date':
      return {
        y: y,
        M: M,
        d: d,
        h: h,
        m: m,
        s: s
      }
  }
}
