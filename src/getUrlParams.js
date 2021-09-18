const { URLSearchParams } = require("url");

// 获取某一个 key
// 使用 split
function getUrlParam1(sUrl, sKey) {
  const query = sUrl.split("?")[1];
  if (query) {
    const paramArr = query.split("#")[0].split("&");
    const obj = {};
    paramArr.forEach((element) => {
      const [key, value] = element.split("=");
      if (obj[key] == null) {
        obj[key] = value;
      } else {
        obj[key] = [].concat(obj[key], value);
      }
    });
    return sKey == null ? obj : obj[sKey] || "";
  }
}


// 使用正则
function getUrlParam2(name){
    // 去除 ?
    const search = location.search.substr(1)
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`,'i')
    const res = search.match(reg)
    if(res == null){
        return null
    }
    return res[2]
}

// 使用 nodejs 中的 URLSearchParams 模块
function getUrlParam3(location,name){
// 使用 URLSearchParams 则无须去除 ?
    const search = location.search
    const p = new URLSearchParams(search)
    return p.get(name)

    // URLSearchParams 用法简单示例
    // console.log((new URLSearchParams('?key=1&xixi=2')))
    // 打印结果：URLSearchParams { 'key' => '1', 'xixi' => '2' }
}


// 将 params 转化为对象
// split 方法
function queryToObj(){
  const res = {}
  const search = location.search.substr(1)
  search.split('&').forEach(paramStr =>{
      const arr = paramStr.split('=')
      const key = arr[0]
      const val = arr[1]
      res[key] = val
  })
  return res
}

// 使用 nodejs 中的 URLSearchParams 模块
function queryToObj(){
  const res = {}
  const pList = new URLSearchParams(location.search)
  pList.forEach((val,key)=>{
      res[key] = val
  })
  return res
}