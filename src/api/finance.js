import request from '@/utils/request'

export default {
  // 提现总金额
  getTotalWithDraw: params => request('/api/v1/db/withdrawalApplicationRecord/getTotal', {
    method: 'GET',
    params: params
  }),
  // 提现记录列表
  getWithDrawLogs: params => request('/api/v1/db/withdrawalApplicationRecord/page', {
    method: 'GET',
    params: params
  }),
  // 发起提现申请
  applyWithDraw: params => request('/api/v1/db/withdrawalApplicationRecord/add', {
    method: 'POST',
    params: params,
  }, false),
  // 提现返现记录
  getReturnLogs: params => request('/api/v1/db/royaltyDetails/page', {
    method: 'GET',
    params: params
  }),
  // 获取返现规则
  getReturnRules: params => request('/api/v1/nt/royaltyRules/page', {
    method: 'GET',
    params: params
  }),

  // 获取收款方式
  getGatheringType: params => request('/api/v1/db/distributorWithdrawal/page', {
    method: 'GET',
    params: params
  }),
  // 修改默认收款方式
  editDefaultGatheringType: params => request('/api/v1/db/distributorWithdrawal/updateDefault', {
    method: 'POST',
    params: params
  }),
  // 删除收款方式
  delGatheringType: params => request('/api/v1/db/distributorWithdrawal/delete', {
    method: 'POST',
    params: params
  }),
  // 收款方式详情
  gatheringTypeDetail: params => request('/api/v1/db/distributorWithdrawal/detail', {
    method: 'GET',
    params: params
  }),
  // 修改收款方式
  editGatheringType: params => request('/api/v1/db/distributorWithdrawal/update', {
    method: 'POST',
    params: params
  }),
  // 新增收款方式
  addGatheringType: params => request('/api/v1/db/distributorWithdrawal/add', {
    method: 'POST',
    params: params
  }),


}