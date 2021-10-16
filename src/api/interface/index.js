import user from './user'
import vehicles from './vehicles'
import certificate from './certificate'
import lease from './lease'
import payment from './payment'
import city from './city'
import wx from './wx'

export default {
  ...user,
  ...vehicles,
  ...certificate,
  ...lease,
  ...payment,
  ...city,
  ...wx
}
