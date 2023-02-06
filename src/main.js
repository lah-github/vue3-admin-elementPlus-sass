import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from './App.vue'
import router from './router/index.js'



//全局引入样式
// import './assets/main.css'

const app=createApp(App)

//注入路由
app.use(ElementPlus, {
    locale: zhCn,
  })
app.use(router)

//挂载到全局属性中(这样就不需要引入多个文件)
app.config.globalProperties={
    // $urls:urls,	//挂载请求地址的构造函数
	// $request: request,	//挂载请求方法的构造函数
	// $feedback: feedback,	// //反馈组件
	// $verifyHelper:verifyHelper
}

//挂载
app.mount('#app')
