const getters = {
  barActive: state => state.carRental.barActive,
  linkActive: state => state.carRental.linkActive,
  finished: state => state.carRental.finished,
  anomaly: state => state.carRental.anomaly,
  bill: state => state.carRental.bill,
  showAgreement: state => state.carRental.showAgreement,
  leaseInfo: state => state.carRental.leaseInfo,
  fileData: state => state.certificate.fileData,
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  tabbarActive: state => state.tabbar.tabbarActive,
  tabbarShow: state => state.tabbar.tabbarShow
}

export default getters
