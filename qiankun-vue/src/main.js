import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Vue.config.productionTip = false

let instance = null;

function render(props={}) {
  console.log('qiankun-vue props ', props)
  instance = new Vue({
    router,
    // store:[...props],
    render: h => h(App)
  }).$mount('#app')
}

// 如果是作为qiankun子应用
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// 如果是独立运行的
if (!window.__POWERED_BY_QIANKUN__) { 
  render()
}

// 子组件暴露的生命周期hook
export async function bootstrap(props) {

}

export async function mount(props) {
  render(props)
}

export async function unmount(props) {
  instance.$destroy()
}