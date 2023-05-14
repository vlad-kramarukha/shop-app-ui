import { createRouter, createWebHistory } from 'vue-router'

export enum Routes {
	LogPage = '/login',
	RegPage = '/registration'
}

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
			path: Routes.LogPage,
			component: useLoginPage
		},
		{
			name: 'reg',
			path: Routes.RegPage,
			component: useLoginPage
		},
	],
})

export default router