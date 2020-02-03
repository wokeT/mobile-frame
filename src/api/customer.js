import request from '@/utils/request'

export default {
  // 客户列表
  getPage: params => request('/api/v1/router/user/page', {
    method: 'GET',
    params: params
  }),
  // 客户详情
  getDetail: params => request('/api/v1/router/user/detail', {
    method: 'GET',
    params: params
  }),
  // 已脱离用户详情
  getDetachedDetail: params => request('/api/v1/router/userSnapshot/detail', {
    method: 'GET',
    params
  }),
  // 修改备注
  editRemark: params => request('/api/v1/router/user/updateRemark', {
    method: "POST",
    params
  }),
  // 修改已脱离用户备注
  editDetachedRemark: params => request('/api/v1/router/userSnapshot/updateRemark', {
    method: "POST",
    params
  }),




}