import { createRouter, createWebHistory } from 'vue-router'

import WelcomeScreen from '../pages/WelcomeScreen'
import UserList from '../pages/UserList'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: WelcomeScreen
    },
    {
      path: '/users',
      component: UserList
    }
  ]
})