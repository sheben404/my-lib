const http = require("http");
const slice = Array.prototype.slice;

class myExpress {
  constructor() {
    // 存放中间件的列表
    this.routes = {
      all: [],
      get: [],
      post: [],
    };
  }

  register(path) {
    const info = {};
    if (typeof path === "string") {
      info.path = path;
      // 从第 2 个参数开始转换为数组，存入 stack
      info.stack = slice.call(arguments, 1);
    } else {
      info.path = "/";
      // 从第 1 个参数开始转换为数组，存入 stack
      info.stack = slice.call(arguments, 0);
    }
    return info;
  }
  use() {
    const info = this.register.apply(this, arguments);
    this.routes.all.push(info);
  }
  get() {
    const info = this.register.apply(this, arguments);
    this.routes.get.push(info);
  }
  post() {
    const info = this.register.apply(this, arguments);
    this.routes.post.push(info);
  }

  match(method, url) {
    let stack = [];
    if (url === "/favicon.ico") {
      return stack;
    }

    // 获取 routes
    let curRoutes = [];
    curRoutes = curRoutes.concat(this.routes.all);
    curRoutes = curRoutes.concat(this.routes[method]);

    curRoutes.forEach((routeInfo) => {
      if(url.indexOf(routeInfo.path) === 0){
        stack = stack.concat(routeInfo.stack)
      }
    });
    return stack
  }

  // 核心的 next 机制
  handle(req,res,stack){
    const next = () =>{
      // 拿到第一个匹配的中间件
      const middleware = stack.shift()
      if(middleware){
        middleware(req,res,next)
      }
    }
    next()
  }

  callback() {
    return (req, res) => {
      res.json = (data) => {
        res.setHeader("Content-type", "application/json");
        res.end(JSON.stringify(data));
      };
      const url = req.url;
      const method = req.method.toLowerCase();

      const resultList = this.match(method, url);
      this.handle(req,res,resultList)
    };
  }

  listen(...args) {
    const server = http.createServer(this.callback());
    server.listen(...args);
  }
}

// module.exports = () => {
//   return new myExpress();
// };

// 测试代码
const app = new myExpress()

app.use((req,res,next)=>{
  console.log('请求开始',req.method,req.url)
  next()
})

app.use((req,res,next)=>{
  console.log('处理 cookie')
  req.cookie = {
    userId: 'abc123'
  }
  next()
})

app.use('/api',(req,res,next)=>{
  console.log('处理 /api 路由')
  next()
})

app.get('/api',(req,res,next)=>{
  console.log('处理 /api 路由')
  next()
})

// 模拟登录验证
function loginCheck(req,res,next){
  setTimeout(()=>{
    console.log('模拟登录成功')
    next()
  })
}

app.get('/api/get-cookie',loginCheck,(req,res,next)=>{
  console.log('get /api/get-cookie')
  res.json({
    errno:0,
    data:req.cookie
  })
  next()
})

app.listen(8000,()=>{
  console.log('server is running on port 8000')
})