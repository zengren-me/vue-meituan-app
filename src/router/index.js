import Vue from 'vue';
import VueRouter from 'vue-router';
import Default from '@/views/layout/Default.vue';
import Index from '@/views/page/Index.vue';
import ChangeCity from '@/views/page/ChangeCity.vue';
import GoodsList from '@/views/page/GoodsList.vue';
import Login from '@/views/page/Login.vue';
import Register from '@/views/page/Register.vue';
import Detail from '@/views/page/Detail.vue';
import store from '@/store';

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);

  return originalPush.call(this, location).catch((err) => err);
};
const routes = [
  {
    path: '/',
    name: 'Default',
    component: Default,
    redirect: '/index',
    children: [{
      path: '/index',
      name: 'Index',
      component: Index,
    }, {
      path: '/changeCity',
      name: 'ChangeCity',
      component: ChangeCity,
    }, {
      path: '/s/:name',
      name: 'GoodsList',
      component: GoodsList,
      meta: {
        login: true,
      },
    }, {
      path: '/detail/:name',
      name: 'Detail',
      component: Detail,
      meta: {
        login: true,
      },
    }],
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
  }, {
    path: '/register',
    name: 'Register',
    component: Register,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const userInfo = await store.dispatch('getLocalUser');
  if (to.meta.login) {
    if (userInfo) {
      next();
    } else {
      next({
        name: 'Login',
        params: {
          origin: to.name,
          name: to.params.name,
        },
      });
    }
  } else if (userInfo) {
    if (to.name !== 'Login' && to.name !== 'Register') {
      next();
    } else {
      next('/');
    }
  } else {
    next();
  }
});

export default router;
