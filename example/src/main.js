import Vue from 'vue';
import App from './App.vue';
import VModelDebounce from 'v-model-debounce';

Vue.config.productionTip = false

Vue.use(VModelDebounce);

new Vue({
  render: h => h(App),
}).$mount('#app')
