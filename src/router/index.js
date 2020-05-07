import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('views/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('views/About.vue')
    }
  ]
});

export default router
