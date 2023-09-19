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
