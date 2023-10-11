<template>
	<el-container class="main_container">
		<el-header>
			<img src="../assets/images/logo.png" alt="" />
			<el-menu
				mode="horizontal"
				backgroundColor="#23262e"
				text-color="#fff"
				active-text-color="#409EFF"
			>
				<el-submenu index="1">
					<template slot="title">
						<img :src="userpic" alt="" class="avatar" v-if="userpic" />
						<img src="../assets/images/logo.png" alt="" v-else />个人中心
					</template>
					<el-menu-item index="1-1"
						><i class="el-icon-s-operation"></i>基本资料</el-menu-item
					>
					<el-menu-item index="1-2"
						><i class="el-icon-camera"></i>更换头像</el-menu-item
					>
					<el-menu-item index="1-3"
						><i class="el-icon-key"></i>重置密码</el-menu-item
					>
				</el-submenu>
				<el-menu-item index="2" @click="turnOut">
					<i class="el-icon-switch-button"></i>
					退出
				</el-menu-item>
			</el-menu>
		</el-header>

		<el-container>
			<el-aside width="201px">
				<div class="aside-box">
					<img :src="userpic" alt="" class="avatar" v-if="userpic" />
					<img src="../assets/images/logo.png" alt="" v-else />
					<span>欢迎 {{ nickname || username }}</span>
				</div>
				<el-col>
					<el-menu
						:default-active="$route.path"
						backgroundColor="#23262e"
						text-color="#fff"
						active-text-color="#409EFF"
						unique-opened
						router
					>
						<template v-for="item in meus">
							<el-menu-item
								:index="item.indexPath"
								v-if="!item.children"
								:key="item.indexPath"
							>
								<i :class="item.icon"></i>
								<span slot="title">{{ item.title }}</span>
							</el-menu-item>
							<el-submenu
								:index="item.indexPath"
								:key="item.indexPath"
								v-else
							>
								<template slot="title">
									<i :class="item.icon"></i>
									<span>{{ item.title }}</span>
								</template>
								<el-menu-item
									:index="subitem.indexPath"
									:key="subitem.indexPath"
									v-for="subitem in item.children"
								>
									<i :class="subitem.icon"></i>{{ subitem.title }}
								</el-menu-item>
							</el-submenu>
						</template>
					</el-menu>
				</el-col>
			</el-aside>
			<el-container>
				<el-main>
					<router-view></router-view>
				</el-main>
				<el-footer>© www.itheima.com - 黑马程序员</el-footer>
			</el-container>
		</el-container>
	</el-container>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import { getMeusApi } from "@/api";

export default {
	name: "mainView",
	data() {
		return {
			userInfo: {},
			meus: {}
		};
	},
	mounted() {
		this.getMeusFn();
	},
	computed: {
		...mapGetters(["username", "nickname", "userpic"])
	},
	methods: {
		...mapMutations(["updateToken"]),
		turnOut() {
			this.$confirm("确认退出？", "提示", {
				confirmButtonText: "确认",
				cancelButtonText: "取消"
			})
				.then(() => {
					this.$router.push("/login");
					this.updateToken("");
				})
				.catch(err => err);
		},
		async getMeusFn() {
			const { data: res } = await getMeusApi();
			this.meus = res.data;
		}
	}
};
</script>

<style lang="less" scoped>
.main_container {
	height: 100%;
}
.el-header,
.el-aside {
	background-color: #23262e;
}
.el-header {
	height: 60px;
	display: flex;
	justify-content: space-between;
	padding: 0;
}
.aside-box {
	height: 70px;
	border-top: 1px solid;
	border-bottom: 1px solid;
	display: flex;
	justify-content: center;
	align-items: center;

	span {
		color: #fff;
		font-size: 12px;
	}
}

.el-footer {
	background-color: #eee;
	font-size: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.avatar {
	width: 35px;
	height: 35px;
	border-radius: 35px;
	margin: 0 10px 0 0;
}

.el-main {
	overflow-y: scroll;
	height: 0;
	background-color: #f2f2f2;
}
</style>
