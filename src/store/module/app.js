import api from '@/api/app'

export default {
  namespaced: true,
  state: {
    noticeList: [], // 公告列表
    msgList: [], // 通知列表
    newMsg: false, // 是否有新消息
  },
  mutations: {
    save (state, payload) {
      Object.assign(state, payload)
    }
  },
  actions: {
    // 获取公告列表
    async getNoticeList (ctx, payload) {
      let res = await api.getNoticeList(payload)
      ctx.commit('save', {
        noticeList: res.records
      })
    },
    // 是否有新消息
    async getMsgStatus (ctx, payload) {
      let res = await api.getMsgStatus()
      ctx.commit('save', {
        newMsg: res
      })
    },
    // 消息已读
    async handleMsg (ctx, payload) {
      await api.handleMsg(payload)
    },
    // 获取通知列表
    async getWithdrawList (ctx, payload) {
      let res = await api.getWithdrawList(payload)
      ctx.commit('save', {
        msgList: res.records
      })
    },



  },
  getters: {
    noticeList: state => state.noticeList,
    newMsg: state => state.newMsg,
    msgList: state => state.msgList
  }
}
