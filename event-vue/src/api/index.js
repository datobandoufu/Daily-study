import request from "@/request/index.js";

export const loginApi = ({ username, password }) => {
	return request({
		method: "POST",
		url: "/api/login",
		data: {
			username,
			password
		}
	});
};

export const registerApi = ({ username, password, repassword }) => {
	return request({
		method: "POST",
		url: "/api/reg",
		data: {
			username,
			password,
			repassword
		}
	});
};

export const getUserInfoApi = () => {
	return request({
		method: "GET",
		url: "/my/userinfo"
	});
};

export const getMeusApi = () => {
	return request({
		method: "GET",
		url: "/my/menus"
	});
};
