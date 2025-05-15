import { createRouter, createWebHistory } from 'vue-router'
import HomePage               from '../pages/HomePage.vue'
import ConversationsIndexPage from '../pages/ConversationsIndexPage.vue'
import store                  from '../store'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 2) Guard global
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isLoggedIn   = store.getters.isLoggedIn

  if (requiresAuth && !isLoggedIn) {
    return next({ name: 'Home' })
  } 
  next()
})

export default router
