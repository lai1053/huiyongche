const certificate = {
  state: {
    fileData: [] // 上传图片信息
  },
  mutations: {
    SET_FILE_DATA: (state, data) => {
      if (state.fileData.length === 0) {
        for (let i = 0; i < 6; i++) {
          state.fileData[i] = {}
        }
      }
      if (!data) {
        state.fileData.map((item, i) => {
          state.fileData.splice(i, 1, {})
        })
        return false
      }
      state.fileData.splice(data.picType - 1, 1, data)
    }
  },
  actions: {
    setFileData ({ commit }, data) {
      commit('SET_FILE_DATA', data)
    }
  }
}

export default certificate
