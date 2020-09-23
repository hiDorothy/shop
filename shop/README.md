# shop

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


##制作首页app组件
1.完成header区域 使用mint-ui中的header组件
2.制作底部的Tabbar区域，使用的是mui的tabbar.html
 +在制作购物车小图标的时候，操作会相对多一些
 +先把扩展图标css样式拷贝到项目中
 +拷贝扩展字体库ttf文件到项目中
 +为购物车小图标添加如下样式：‘mui-icon mui-icon-extra mui-icon-extra-cart’
3.要在中间区域放置一个router-view展示路由匹配到的组件

##改造tabber为router-link

##设置路由高亮

##点击tabbar中的路由链接 展示对应的路由组件

##制作首页轮播图布局

##加载首页轮播图数据
1.获取数据，如何获取 使vue-resource
2.使用vue-resource的this.$http.get获取数据
3.获取到的数据要保存到data身上
4.使用v-for循环渲染每个item项目

##改造九宫格区域的样式