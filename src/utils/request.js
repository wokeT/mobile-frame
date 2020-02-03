import axios from "axios"
import { Toast } from "vant"
import { stringify } from "qs"

const checkCode = res => {
  /**
   * 特殊结果处理
   */
  if (res.code && res.code === 401) {
    localStorage.clear()
    setTimeout(() => {
      window.location.href = '/login'
    }, 1000)
    throw new Error('授权失败，请重新登陆')
  }
  if (res.code && res.code === 200) {
    return res.data
  }
  throw new Error(res.msg)

}

const request = (url, { method, params, headers }, notice = true) => {
  const Authorization = localStorage.getItem("token") || ""
  headers = {
    Authorization,
    timeout: 15000,
    responseType: "json",
    contentType: "application/json",
    ...headers
  }
  return new Promise((resolve, reject) => {
    if (method === "get" || method === "GET") {
      url = `${url}?${stringify(params)}`
    }
    axios({
      method,
      url,
      headers,
      data: params
    })
      .then(res => {
        resolve(checkCode(res.data))
      })
      .catch(e => {
        if (notice) {
          Toast(e.message)
        }
        reject(e)
      })
  })
}

export default request
