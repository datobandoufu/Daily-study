import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
	{
		path: "/login",
		component: () => import("../components/loginView.vue")
	},
	{
		path: "/reg",
		component: () => import("../components/registerView.vue")
	},
	{
		path: "/",
		component: () => import("../components/mainView.vue"),
		redirect: "/home", // 默认显示首页的二级路由
		children: [
			{
				path: "home",
				component: () => import("../views/homeView.vue")
			}
			// {
			// 	path: "user-info", // 这里必须叫user-info, 因为侧边栏导航切换的是它
			// 	component: () => import("@/views/user/userInfo")
			// },
			// {
			// 	path: "user-avatar", // 必须用这个值
			// 	component: () => import("@/views/user/userAvatar")
			// },
			// {
			// 	path: "user-pwd", // 必须用这个值
			// 	component: () => import("@/views/user/userPwd")
			// },
			// {
			// 	path: "art-cate", // 文章分类
			// 	component: () => import("@/views/article/artCate")
			// },
			// {
			// 	path: "art-list", // 文章列表
			// 	component: () => import("@/views/article/artList")
			// }
		]
	}
];

const router = new VueRouter({
	routes
});

const writeList = ["/login", "/reg"];

router.beforeEach((to, from, next) => {
	const token = store.state.token;
	if (token) {
		if (!store.state.userInfo.username) {
			store.dispatch("initUserInfo");
		}
		next();
	} else {
		if (writeList.includes(to.path)) {
			next();
		} else {
			next("/login");
		}
	}
});

export default router;
