import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//导入对应的路由组件
import HomeContainer from '../components/tabber/HomeContainer.vue'
import MemberContainer from '../components/tabber/MemberContainer.vue'
import ShorcarContainer from '../components/tabber/ShopcarContainer.vue'
import SearchContainer from '../components/tabber/SearchContainer.vue'
import NewsList from '../components/news/NewsList.vue'
import NewsInfo from '../components/news/NewsInfo.vue'

//3.创建路由对象
const router = new VueRouter({
  routes:[//配置路由规则
  {path:'/',redirect:'/home'},
  {path:'/home',component:HomeContainer},
  {path:'/member',component:MemberContainer},
  {path:'/shopcar',component:ShorcarContainer},
  {path:'/search',component:SearchContainer},
  {path:'/home/newslist',component:NewsList},
  {path:'/home/newsinfo/:id',component:NewsInfo}
  
  ],
  linkActiveClass:'mui-active'//覆盖默认的路由高亮类，默认的类叫做router-link-active
})

export default router
