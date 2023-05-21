import { createRouter, createWebHistory } from 'vue-router'
import { useTitle } from '@vueuse/core'
import Cookies from 'js-cookie'

enum Titles {
	Home = 'Главная страница',
	Log = 'Вход',
	Reg = 'Регистрация',
	Admin = 'Администрирование',
	Employee = 'Система',
	Catalog = 'Каталог',
	Smartphones = 'Смартфоны',
	Tablets = 'Планшеты',
	Accessories = 'Аксессуары'
}

export enum Routes {
	Home = '/',
	Log = '/login',
	Reg = '/registration',
	Admin = '/admin',
	Employee = '/employee',
	Catalog = '/catalog',
	Smartphones = '/smartphones',
	Tablets = '/tablets',
	Accessories = '/accessories'
}

const pageTitle = useTitle()
const useLoginPage = () => import('./pages/LoginPage.vue')
const useHomePage = () => import('./pages/HomePage.vue')
const useAdminPage = () => import('./pages/AdminPage.vue')
const useEmployeePage = () => import('./pages/EmployeePage.vue')
const useCatalogPage = () => import('./pages/CatalogPage.vue')

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			name: 'home',
			path: Routes.Home,
			component: useHomePage,
			meta: {
				title: Titles.Home,
				requiresAuth: false
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
		},
		{
			name: 'admin',
			path: Routes.Admin,
			component: useAdminPage,
			meta: {
				title: Titles.Admin,
				requiresAuth: true
			}
		},
		{
			name: 'employee',
			path: Routes.Employee,
			component: useEmployeePage,
			meta: {
				title: Titles.Employee,
				requiresAuth: true
			}
		},
		{
			name: 'catalog',
			path: Routes.Catalog,
			redirect: Routes.Catalog + Routes.Smartphones,
			children: [
				{
					name: 'smartphones',
					path: Routes.Smartphones,
					component: useCatalogPage,
					meta: {
						title: Titles.Smartphones,
						requiresAuth: false
					}
				},
				{
					name: 'tablets',
					path: Routes.Tablets,
					component: useCatalogPage,
					meta: {
						title: Titles.Tablets,
						requiresAuth: false
					}
				},
				{
					name: 'accessories',
					path: Routes.Accessories,
					component: useCatalogPage,
					meta: {
						title: Titles.Accessories,
						requiresAuth: false
					}
				}
			]
		}
	]
})

router.beforeEach((to, from, next) => {
	const { title, requiresAuth } = to.meta

	pageTitle.value = title

	if (requiresAuth && !Cookies.get('user')) {
		return next(Routes.Log)
	}

	return next()
})

export default router
