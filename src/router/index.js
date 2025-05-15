// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage                   from '../pages/HomePage.vue'
import ConversationsIndexPage     from '../pages/ConversationsIndexPage.vue'
import ConversationShowPage       from '../pages/ConversationShowPage.vue'
import store                      from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/conversations',
    name: 'ConversationsIndex',
    component: ConversationsIndexPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/conversations/:id',
    name: 'ConversationShow',
    component: ConversationShowPage,
    props: true,              
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(r => r.meta.requiresAuth)
  const isLoggedIn   = store.getters.isLoggedIn
  if (requiresAuth && !isLoggedIn) {
    return next({ name: 'Home' })
  }
  next()
})

export default router
