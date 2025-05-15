// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage                   from '../pages/HomePage.vue'
import ConversationsIndexPage     from '../pages/ConversationsIndexPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/conversations',
    name: 'ConversationsIndex',
    component: ConversationsIndexPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
