require('./check-versions')()

var config = require('../config')
const fs = require('fs')
// 获取解析后的参数并转换格式
const argv = require('optimist').argv
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
//作为中间件用来解析http请求体（参数），是express默认使用的中间件之一
var bodyParser = require('body-parser')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// mock/proxy api requests
// if use proxy, set ./dev-server.js -proxy www.alm.com(proxy url)
if (argv.t !== 'sysDebug') {
  app.use(bodyParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json({
    type: 'application/*+json'
  }));
}
const mockDir = path.resolve(__dirname, '../mock');
//遍历mock文件夹下所以js文件，并使用proxy转发请求
function mockProxy(file) {
  if (file.indexOf('.json') > 0) {
    return;
  }
  let tmpPath = path.resolve(mockDir, file);
  if (fs.statSync(tmpPath).isDirectory()) {
    fs.readdirSync(tmpPath).forEach(function (tmp) {
      mockProxy(path.resolve(tmpPath, tmp));
    })
  } else {
    const mock = require(path.resolve(mockDir, file));
    if (argv.t !== 'sysDebug') {
      app.use(mock.api, function (req, res, next) {
          mock.response(req, res, fs);
        });
    } else {
      //请求转发，可跨域
      app.use(mock.api, proxyMiddleware({target: argv.p}));
    }
  }
}
fs.readdirSync(mockDir).forEach(function (file) {
  if (file !== 'utils.js' && file.indexOf('.json') < 1) {
    mockProxy(file);
  }
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function () {
  console.log('> Listening at ' + uri + '\n')
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }

  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
