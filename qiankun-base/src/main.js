import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI)

import {
	registerMicroApps,
	start
} from 'qiankun'

const apps = [
	{
		name: 'vueApp',
		entry: '//localhost:10000',	// 默认会加载这个地址的html，解析并且动态执行js（但是子应用必须处理好跨域）
		container: '#vue',
		activeRule: '/vue',
		props: {
			a: 1
		}
	},
	{
		name: 'reactApp',
		entry: '//localhost:20000',
		container: '#react',
		activeRule: '/react'
	}
]

registerMicroApps(apps, {
	beforeLoad: app => console.log('before load', app.name),
	beforeMount: [
		app => console.log('before mount', app.name),
	],
});	// 注册应用
// start();	// 启动应用
start({
	prefetch: false	// 取消预加载，比如点击某个应用才开始加载
})

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')