<template>
	<div class="log_container">
		<div class="box">
			<div class="title_box"></div>
			<el-form :model="logForm" status-icon :rules="rules" ref="logRef">
				<el-form-item prop="username">
					<el-input
						placeholder="请输入用户名"
						v-model="logForm.username"
					></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input
						type="password"
						placeholder="请输入密码"
						v-model="logForm.password"
					></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" class="btn_box" @click="logFn"
						>登录</el-button
					>
					<el-link type="info" @click="toRegFn">去注册</el-link>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
import { loginApi } from "../api";
import { mapMutations } from "vuex";

export default {
	name: "loginView",
	data() {
		return {
			logForm: {
				username: "",
				password: ""
			},
			rules: {
				username: [
					{ required: true, message: "请输入用户名", trigger: "blur" },
					{
						pattern: /^[a-zA-Z0-9]{1,10}$/,
						message: "请输入1-10位的大小写字母数字",
						trigger: "blur"
					}
				],
				password: [
					{ required: true, message: "请输入密码", trigger: "blur" },
					{
						pattern: /^\S{6,15}$/,
						message: "请输入6-15位的非空字符串",
						trigger: "blur"
					}
				]
			}
		};
	},
	methods: {
		...mapMutations(["updateToken"]),
		toRegFn() {
			this.$router.push("/reg");
		},
		logFn() {
			this.$refs.logRef.validate(async valid => {
				if (!valid) return false;

				const { data: res } = await loginApi(this.logForm);
				if (res.code !== 0) return this.$message.error(res.message);

				this.$message.success(res.message);
				this.updateToken(res.token);
				this.$router.push("/");
			});
		}
	}
};
</script>

<style lang="less" scoped>
.log_container {
	height: 100%;
	background: url("../assets/images/login_bg.jpg") center;
	background-size: cover;
}

.title_box {
	height: 60px;
	background: url("../assets/images/login_title.png") no-repeat center;
}

.box {
	width: 400px;
	height: 270px;
	background-color: #fff;
	padding: 0 30px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 5px;
	box-sizing: border-box;
}

.btn_box {
	width: 100%;
}
</style>
