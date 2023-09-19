import request from "@/request";

export const getLogInfoApi = () => {
	return request({
		method: "POST",
		url: "/api/login"
	});
};
