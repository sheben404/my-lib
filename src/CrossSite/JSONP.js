function jsonp (setting) {
  setting.data = setting.data || {}
  setting.key = setting.key || 'callback' //指 callback 的代称
  setting.callback = setting.callback || function () {}
  setting.data[setting.key] = '__onGetData__' //指调用 callback 函数的全局函数

  window.__onGetData = function (data) {
    setting.callback(data)
  }

  const script = document.createElement('script')
  const query = []
  for (const key in setting.data) {
    query.push(key + '=' + encodeURIComponent(setting.data[key]))
  }
  script.src = setting.url + '?' + query.join('&')
  document.head.appendChild(script)
  document.head.removeChild(script)
}

// 函数调用
jsonp({
  url: 'http://photo.sina.cn/aj/index',
  key: 'jsoncallback',
  data: {
    page: 1,
    cate: 'recommend'
  },
  callback: function (ret) {console.log(ret)}
})
