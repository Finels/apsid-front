/**
 * Created by xzc on 2018/1/1.
 */
module.exports = {
  api: '/aspid/currentUser',
  response: function (req, res, fs) {
    res.json({
      'userName': '赵晓东',
      'picUrl': '../../../static/img/userImg.jpg'
    })
  }
}
