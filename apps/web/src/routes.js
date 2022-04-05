import HomePage from '@/pages/HomePage.vue'
import ComponentPage from '@/pages/ComponentPage.vue'
import UtilPage from '@/pages/UtilPage.vue'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: HomePage },
  { path: '/components', component: ComponentPage },
  { path: '/utils', component: UtilPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
