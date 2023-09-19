<template>
	<div class="log_container">
		<div class="box">
			<div class="title_box"></div>
			<el-form>
				<el-form-item>
					<el-input placeholder="请输入用户名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input placeholder="请输入密码"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" class="btn_box">登录</el-button>
					<el-link type="info" @click="toRegFn">去注册</el-link>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
export default {
	name: "loginView",
	data() {
		return {};
	},
	methods: {
		toRegFn() {
			this.$router.push("/reg");
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
