import request from '@/utils/request'

export default {
  // 登陆
  login: params => request('/api/v1/db/distributor/login', {
    method: 'POST',
    params: params
  }),
  // 获取用户详情
  getUserInfo: () => request('/api/v1/db/distributor/detail', {
    method: 'GET'
  }),
  // 验证支付密码
  checkPayPassword: params => request('/api/v1/db/distributor/verification', {
    method: 'POST',
    params: params
  },false),
  // 修改支付密码
  editPayPassword: params => request('/api/v1/db/distributor/update', {
    method: 'POST',
    params: params
  }),


}