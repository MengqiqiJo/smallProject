import Vue from 'vue'
import App from './App.vue'

// import './assets/styles/primevue.css';

import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/nova-light/theme.css';
import 'primeicons/primeicons.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

