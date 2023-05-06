import { createRouter, createWebHistory } from 'vue-router'

const useLoginPage = () => import('./pages/LoginPage.vue')

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			name: 'log',
			path: '/login',
			component: useLoginPage
		},
		{
			name: 'reg',
			path: '/registration',
			component: useLoginPage
		},
	],
})

export default router