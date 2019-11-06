// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import zypc from 'zypc-components'
// import mockdata from './mock'
import ViewUI from 'view-design';
import 'zypc-components/dist/zypc-components.min.css'
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);
Vue.use(zypc)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
