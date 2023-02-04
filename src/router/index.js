import {
	createRouter,
	createWebHistory
} from "vue-router"

const routes = [
	{ //首页
		path: '/',
		name: 'index',
		component: () => import( /*webpackChunkName:'Index'*/ '@/pages/index/index.vue')
	},
	{ //登录界面
		path: '/login',
		name: 'login',
		component: () => import( /*webpackChunkName:'Login'*/ '@/pages/login/login.vue')
	},
	{ //管理主界面
		path: '/second',//二级框架
		name: 'second',
		component: () => import( /*webpackChunkName:'Second'*/ '@/pages/layout/second.vue'),
		//二级界面（二级路由）
		redirect:'user',	//侧边栏默认页面
		children:[
			{ //用户列表
				path: '/user',
				name: 'user',
				component: () => import( /*webpackChunkName:'User'*/ '@/pages/user/user.vue')
			},{ //数据分析
				path: '/dataAnalysis',
				name: 'dataAnalysis',
				component: () => import( /*webpackChunkName:'DataAnalysis'*/ '@/pages/dataAnalysis/dataAnalysis.vue')
			},{ //订单管理
				path: '/order',
				name: 'order',
				component: () => import( /*webpackChunkName:'Order'*/ '@/pages/order/order.vue')
			},{ //订单管理
				path: '/food',
				name: 'food',
				component: () => import( /*webpackChunkName:'Food'*/ '@/pages/food/food.vue')
			},{ //订单管理
				path: '/employee',
				name: 'employee',
				component: () => import( /*webpackChunkName:'Employee'*/ '@/pages/employee/employee.vue')
			},{ //订单管理
				path: '/other',
				name: 'other',
				component: () => import( /*webpackChunkName:'Other'*/ '@/pages/other/other.vue')
			},
		]

	},
	{ //注册界面
		path: '/regist',
		name: 'regist',
		component: () => import( /*webpackChunkName:'Regist'*/ '@/pages/regist/regist.vue')
	},
]

const router = createRouter({
	// 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
	history: createWebHistory(),
	routes
})

export default router
