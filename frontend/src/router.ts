import { createRouter, createWebHistory } from 'vue-router'
import { useTitle } from '@vueuse/core'

type Title = string
export enum Routes {
	HomePage = '/',
	LogPage = '/login',
	RegPage = '/registration'
}

const title = useTitle()
const useLoginPage = () => import('./pages/LoginPage.vue')

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: Routes.HomePage,
			redirect: Routes.LogPage,
			meta: {
				title: 'Главная страница'
			}
		},
		{
			name: 'log',
			path: Routes.LogPage,
			component: useLoginPage,
			meta: {
				title: 'Вход'
			}
		},
		{
			name: 'reg',
			path: Routes.RegPage,
			component: useLoginPage,
			meta: {
				title: 'Регистрация'
			}
		},
	],
})

router.beforeEach((to, from, next) => {
	title.value = to.meta.title as Title
	next()
})

export default router