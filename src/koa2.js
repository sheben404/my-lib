const http = require("http");

// 组合中间件
function componse(middlewareList) {
  return function (ctx) {
    function dispatch(i) {
      const fn = middlewareList[i];
      try {
        return Promise.resolve(fn(ctx, dispatch.bind(null, i + 1)));
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return dispatch(0);
  };
}

class myKoa2 {
  constructor() {
    this.middlewareList = [];
  }

  use(fn) {
    this.middlewareList.push(fn);
    return this;
  }

  createContext(req, res) {
    const ctx = {
      req,
      res,
    };
    ctx.query = req.query;
    return ctx;
  }

  handleRequest(ctx,fn){
    return fn(ctx)
  }

  callback() {
    const fn = componse(this.middlewareList)
    return (req, res) => {
      const ctx = this.createContext(req, res);
      return this.handleRequest(ctx,fn)
    };
  }

  listen(...args) {
    const server = http.createServer(this.callback());
    server.listen(...args);
  }
}

// module.exports = myKoa2;


// 测试代码
const app = new myKoa2();

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx['X-Response-Time'];
  console.log(`${ctx.req.method} ${ctx.req.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx['X-Response-Time'] = `${ms}ms`;
});

// response
app.use(async ctx => {
  ctx.res.end('hello world')
});

app.listen(8000);
