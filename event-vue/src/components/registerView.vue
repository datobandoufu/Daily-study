<template>
	<div class="reg_container">
		<div class="box">
			<div class="title_box"></div>
			<el-form :model="regForm" :rules="rules" ref="regForm" status-icon>
				<el-form-item prop="username">
					<el-input
						placeholder="请输入用户名"
						v-model="regForm.username"
					></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input
						type="password"
						placeholder="请输入密码"
						v-model="regForm.password"
					></el-input>
				</el-form-item>
				<el-form-item prop="repassword">
					<el-input
						type="password"
						placeholder="请再次输入密码"
						v-model="regForm.repassword"
					></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" class="btn_box">立即注册</el-button>
					<el-link type="info" @click="toLogFn">去登录</el-link>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
export default {
	name: "registerView",
	data() {
		const checkPass = (rule, value, callback) => {
			if (value === "") {
				callback(new Error("请再次输入密码"));
			} else if (value !== this.regForm.password) {
				callback(new Error("两次输入密码不一致!"));
			} else {
				callback();
			}
		};

		return {
			regForm: {
				username: "",
				password: "",
				repassword: ""
			},
			rules: {
				username: [
					{ required: true, message: "请输入用户名", trigger: "blur" },
					{
						pattern: /^[a-zA-Z0-9]{1,10}$/,
						message: "请输入1-10位的大小写字符串",
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
				],
				repassword: [
					{ required: true, message: "请再次输入密码", trigger: "blur" },
					{
						pattern: /^\S{6,15}$/,
						message: "请输入6-15位的非空字符串",
						trigger: "blur"
					},
					{
						validator: checkPass,
						trigger: "blur"
					}
				]
			}
		};
	},
	methods: {
		toLogFn() {
			this.$router.push("/login");
		}
	}
};
</script>

<style lang="less" scoped>
.reg_container {
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
	height: 335px;
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
