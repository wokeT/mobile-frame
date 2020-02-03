import api from '@/api/user'

export default {
  namespaced: true,
  state: {
    userInfo: {
      amount: 0
    }
  },
  mutations: {
    save (state, payload) {
      Object.assign(state, payload)
    }
  },
  actions: {
    // 登陆
    async login (ctx, payload) {
      let res = await api.login(payload)
      localStorage.setItem('token', res.token)
    },
    // 获取用户详情
    async getUserInfo (ctx, payload) {
      let res = await api.getUserInfo()
      ctx.commit('save', {
        userInfo: res
      })
    },
    // 验证支付密码
    async checkPayPassword (ctx, payload) {
      await api.checkPayPassword(payload)
    },
    // 修改支付密码
    async editPayPassword (ctx, payload) {
      await api.editPayPassword(payload)
    },


  },
  getters: {
    userInfo: state => state.userInfo
  }
}
