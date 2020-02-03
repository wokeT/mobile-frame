import request from '@/utils/request'

export default {
  // 公告列表
  getNoticeList: params => request('/api/v1/nt/notice/page', {
    method: 'GET',
    params: params
  }),
  // 提现通知列表
  getWithdrawList: params => request('/api/v1/nt/withdrawalMessage/page', {
    method: 'GET',
    params: params
  }),
  // 获取未读消息状态
  getMsgStatus: () => request('/api/v1/nt/withdrawalMessage/messageReminder',{
    method: "GET"
  }),
  // 消息已读
  handleMsg: params =>request('/api/v1/nt/withdrawalMessage/read', {
    method: 'POST',
    params: params
  })



}