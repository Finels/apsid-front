/**
 * 适用于mock的工具方法
 * Created by xzc on 2017/12/30.
 */

/**
 * 延时方法
 * @param milliSeconds 时长，毫秒为单位
 */
module.exports.sleep = function (milliSeconds) {
  var startTime = new Date().getTime()
  while (new Date().getTime() < startTime + milliSeconds) {}
}

/**
 * 同步读取文件，返回json对象
 * @param fs
 * @param path 路径
 */
module.exports.readFile = function (fs, path) {
  try {
    var data = fs.readFileSync(path)
    return JSON.parse(data.toString())
  } catch (err) {
    console.error('读取文件失败：', err)
    return '读取失败'
  }
}

/**
 * 同步写文件
 * @param fs
 * @param path 文件路径
 * @param data 待写入的数据对象
 */
module.exports.writeFile = function (fs, path, data) {
  try {
    data = JSON.stringify(data)
    fs.writeFileSync(path, data)
    return true
  } catch (err) {
    console.error('写入失败：', err)
    return false
  }
}
/**
 * is empty
 * @param obj
 * @returns {boolean}
 */
module.exports.isEmpty = function (obj) {
  if (!obj || (obj + '') === 'NaN') {
    return true
  } else {
    if ((obj + '').replace(/(^\s*)|(\s*$)/g, '') === '') {
      return true
    }
  }
  return false
}
