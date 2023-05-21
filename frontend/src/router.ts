import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router'
import { useTitle } from '@vueuse/core'
import Cookies from 'js-cookie'

enum Titles {
	Home = 'Главная страница',
	Log = 'Вход',
	Reg = 'Регистрация'
}

export enum Routes {
	Home = '/',
	Log = '/login',
	Reg = '/registration'
}

const title = useTitle()
const useLoginPage = () => import('./pages/LoginPage.vue')
const useHomePage = () => import('./pages/HomePage.vue')
const useAdminPage = () => import('./pages/AdminPage.vue')
const useEmployeePage = () => import('./pages/EmployeePage.vue')

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			name: 'home',
			path: Routes.Home,
			component: useHomePage,
			meta: {
				title: Titles.Home,
				requiresAuth: true
			}
		},
		{
			name: 'log',
			path: Routes.Log,
			component: useLoginPage,
			meta: {
				title: Titles.Log,
				requiresAuth: false
			}
		},
		{
			name: 'reg',
			path: Routes.Reg,
			component: useLoginPage,
			meta: {
				title: Titles.Reg,
				requiresAuth: false
			}
		}
	]
})

router.beforeEach((to, from, next) => {
	const { title: pageTitle, requiresAuth } = to.meta

	title.value = pageTitle

	if (requiresAuth && !Cookies.get('user')) {
		return next(Routes.Log)
	}

	return next()
})

export default router