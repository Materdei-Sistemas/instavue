import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue';
import Login from '../views/Login.vue';
import Curtidas from '../views/Curtidas.vue';
import Explore from'../views/Explore.vue';
import Profile from '../views/Profile.vue';
import Feed from '../views/Feed.vue';
import EditarUsuario from '../views/EditarUsuario.vue';
import Notifications from '../views/Notifications.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Feed',
    component: Feed
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/editarusuario',
    name: 'EditarUsuario',
    component: EditarUsuario
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/Curtidas',
    name: 'Curtidas',
    component: Curtidas
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  },{
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/feed',
    name: 'Feed',
    component: Feed
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
