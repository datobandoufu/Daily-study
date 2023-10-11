import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		redirect: "/main"
	},
	{
		path: "/login",
		component: () => import("../components/loginView.vue")
	},
	{
		path: "/reg",
		component: () => import("../components/registerView.vue")
	},
	{
		path: "/main",
		component: () => import("../components/mainView.vue")
		// children: [
		// 	{
		// 		path: "/main/article"
		// 	}
		// ]
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
