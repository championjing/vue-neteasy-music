import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/main/main.vue'

Vue.use(VueRouter)

const routes = [{
	path: '/home',
	name: '首页',
	component: Home,
	meta: {
		title: '首页-home',
		discription: '测试怎么设置信息'
	}
}, {
	path: '/',
	name: '主页',
	component: Main,
	meta: {
		title: '主页',
		discription: '主页描述信息'
	}
}]

const router = new VueRouter({
	routes
})
router.beforeEach( (to,from,next)=>{
	// 路由发生变化修改页面title
	console.log('路由变化');
	// console.log('from:'+JSON.stringify( from ))
	// console.log('to:'+JSON.stringify(to));
	if(to.meta.title) {
		document.title = to.meta.title;
		// document.querySelector('meta[name="keywords"]').setAttribute('content', 'keywords')
		document.querySelector('meta[name="description"]').setAttribute('content', to.meta.discription)
	}
	next();
} )

export default router
