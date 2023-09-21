import Vue from "vue";
import VueRouter from "vue-router";

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
		component: () => import("../components/mainView.vue"),
		children: [
			{
				path: "/main/article"
			}
		]
	}
];

const router = new VueRouter({
	routes
});

export default router;
