import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import SequentialEntrance from 'vue-sequential-entrance';
import 'vue-sequential-entrance/vue-sequential-entrance.css';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue)
Vue.use(SequentialEntrance);
Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
