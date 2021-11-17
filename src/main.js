// 导入vue
// Import vue
import Vue from 'vue'

// 导入主组件
// Import the main component
import App from './App.vue'

// 导入路由插件
// Import routing plugin
import router from './router'

// 导入全局状态管理插件
// Import the global state management plugin
import store from './store'

// 导入iViewUI组件库
// Import iViewUI component library
import iViewUI from 'view-design';

// iViewUI 样式导入
// iViewUI style import
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false
// vue注册iViewUI组件
// vue registers iViewUI components
Vue.use(iViewUI);

// 导入的组件或插件传递给vue中
// The imported components or plugins are passed to vue
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
