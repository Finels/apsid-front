/**
 * 后端请求api集合
 */
/**
 * 项目基础路径
 * @type {string}
 */
const baseUrl = '/'
export const loginQuery = baseUrl + 'login'
// 当期用户
export const currentUser = baseUrl + 'currentUser'

// 当期用户
export const queryHomeContent = baseUrl + 'queryContent'

// 保存注册信息
export const registerSave = baseUrl + 'home/user.action'

// 验证码
export const veryCode = baseUrl + 'home/very.action'

// 上传论文
export const upDataUrl = baseUrl + 'home/upload.action'

