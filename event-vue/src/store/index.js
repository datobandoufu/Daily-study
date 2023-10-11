import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { getUserInfoApi } from "../api/index";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		token: "",
		userInfo: {}
	},
	getters: {
		nickname: state => state.userInfo.nickname,
		uaername: state => state.userInfo.uaername,
		userpic: state => state.userInfo.user_pic
	},
	mutations: {
		updateToken(state, newValue) {
			state.token = newValue;
		},
		updateUserInfo(state, newValue) {
			state.userInfo = newValue;
		}
	},
	actions: {
		async initUserInfo(store) {
			const { data: res } = await getUserInfoApi();
			store.commit("updataUserInfo", res.data);
		}
	},
	modules: {},
	plugins: [createPersistedState()]
});
