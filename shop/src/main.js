//入口文件
import Vue from 'vue'
//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由模块
Vue.use(VueRouter)

//2.1导入vue-resource
import VueResource from 'vue-resource'
//2.2安装vue-resource
Vue.use(VueResource)

//导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//按需导入Mint-UI中的组件
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import 'mint-ui/lib/style.css'
// 引入全部组件
// import Mint from 'mint-ui';
// Vue.use(Mint);

//1.3导入自己的router.js路由模块
import router from './router/index.js'

//导入 App根组件
import app from './App.vue'
var vm = new Vue({
	el:'#app',
	render:c => c(app),
	router//1.4挂载路由对象到VM实例上
})


// import router from './router'
// import store from './store'


// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')


