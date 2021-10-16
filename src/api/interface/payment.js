import axios from '../api'

const payTax = data => {
  return axios({
    url: '/api/app/pay/payTax',
    data
  })
}

export default {
  payTax
}
