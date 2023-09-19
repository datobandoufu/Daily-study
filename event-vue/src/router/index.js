import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		redirect: "/login"
	},
	{
		path: "/login",
		component: () => import("../components/loginView.vue")
	},
	{
		path: "/reg",
		component: () => import("../components/registerView.vue")
	}
];

const router = new VueRouter({
	routes
});

export default router;
