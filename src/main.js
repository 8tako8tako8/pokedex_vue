import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import InfiniteLoading from 'vue-infinite-loading'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(InfiniteLoading)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
