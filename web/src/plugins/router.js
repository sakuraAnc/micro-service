// src/plugins/router.js
import { createRouter, createWebHistory } from 'vue-router'

// ルート定義
const routes = [
	{
			path: '/',
			name: 'login',
			component: () => import('../page/LoginPage.vue')
	},
	{
    path: '/home',
    name: 'home',
    component: () => import('../page/HomePage.vue')
  },
	{
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../page/LoginPage.vue')
  }
]

// ルーターインスタンスを作成
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// ナビゲーションガード
router.beforeEach((to, from, next) => {
	// console.log('Navigation to:', to.path, to.name)
  // console.log('Current route matched:', to.matched)
	next()
})

export default router