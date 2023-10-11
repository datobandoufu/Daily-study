import store from "@/store";
import axios from "axios";

const request = axios.create({
	baseURL: "http://big-event-vue-api-t.itheima.net"
});

const whiteList = ["/login", "/reg"];

request.interceptors.request.use(
	function (config) {
		if (!whiteList.includes(config.url)) {
			config.headers.Authorization = store.state.token;
		}
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export default request;
