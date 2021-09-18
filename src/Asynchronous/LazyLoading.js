//原本写法：
import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home'
//...

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    }
    //...
  ]
})

//路由懒加载：
import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('./home')// 只有这一行不同
//...

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    }
    //...
  ]
})