import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './eventBus';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/main.css';

Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.directive('document-click', {
  bind(el, binding) {
    document.addEventListener('click', binding.value, false);
  },
});
Vue.directive('document-scroll', {
  bind(el, binding) {
    document.addEventListener('scroll', binding.value, false);
  },
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
