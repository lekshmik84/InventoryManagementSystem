import Vue from 'vue'
import App from './App.vue'
import ArgonDashboard from './plugins/argon-dashboard';
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// import Argon from '@/plugins/argon-kit'
// import router from "./starterRouter";


// Vue.use(Argon);
// import Argon from './components/AdminTemplate';
// import './components/argon-design-system/assets/vendor/nucleo/css/nucleo.css';
// import './components/argon-design-system/assets/vendor/font-awesome/css/font-awesome.css';
// import './components/argon-design-system/assets/scss/argon.scss';

Vue.config.productionTip = false
// Vue.use(Argon);
Vue.use(BootstrapVue);

Vue.use(ArgonDashboard);

new Vue({
  render: h => h(App),
}).$mount('#app')
