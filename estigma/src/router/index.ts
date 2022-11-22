import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import LoginPage from '../views/public/LoginPage.vue'
import MessagesPage from '../views/private/MessagesPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Inbox'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/private/FolderPage.vue')
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path:'/Messages',
    name:'Menssagens',
    component: MessagesPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
