/**
 * Created by xzc on 2017/12/30.
 */
import Axios from 'axios'
import { Loading, Message } from 'element-ui'

function plugin (Vue) {
  if (plugin.installed) {
    return
  }
  let loadingLock

  Axios.defaults.headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Accept': 'application/json, text/javascript, */*; q=0.01'
  }
  Axios.defaults.timeout = 180000
  /**
   * 添加一个请求拦截器
   */
  Axios.interceptors.request.use(function (config) {
    loadingLock = Loading.service({fullscreen: true})
    return config
  }, function (error) {
    Message({showClose: true, message: 'request failure', type: 'error'})
    return Promise.reject(error)
  })

  /**
   * 添加一个响应拦截器
   */
  Axios.interceptors.response.use(function (response) {
    loadingLock.close()
    return response
  }, function (error) {
    loadingLock.close()
    Message({showClose: true, message: error.response.data.errorDescription, type: 'error'})
    return Promise.reject(error)
  })
  Vue.http = Axios
  Vue.prototype.$http = Axios
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
export default plugin
