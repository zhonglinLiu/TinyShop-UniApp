<template>
	<view class="home">
		<view class="homeCon" :class="!homeActive ? 'on' : ''">
			<view class="wrapper">
				<text class="iconfont iconsousuo2" @tap="navTo('/pages/index/search/search')"></text>
			</view>
			<view class="wrapper">
				<text class="iconfont iconshouhoukefu" @tap="kefuShow = true"></text>
			</view>
			<!-- <view class="wrapper">
				<text class="iconfont icongouwuche3" @tap="navTo('/pages/cart/cart', 'tab')"></text>
			</view> -->
		</view>
		<view class="menu" :class="'bg-' + themeColor.name" @tap.stop="open">
			<text class="iconfont iconkuaijiecaidan"></text>
		</view>
		<view
			class="popup spec show"
			v-if="kefuShow"
			@touchmove.stop.prevent="stopPrevent"
			@tap="hide"
		>
			<!-- 遮罩层 -->
			<view class="mask" @tap="hide"></view>
			<view class="kefu-bg">
				<image :src="appServiceQr"></image>
			</view>
		</view>
	</view>

</template>
<script>
	export default {
		name: 'Home',
		data() {
			return {
				homeActive: true,
				kefuShow: false,
				appServiceQr:this.$mSettingConfig.appServiceQr,
			};
		},
		methods: {
			stopPrevent() {},
			// 切换语言
			hide() {
				this.kefuShow = false
			},
			switchLanguage() {
				if (this._i18n.locale === 'zh') {
					this._i18n.locale = 'uyghur';
					this.currentLanguage = '切换语言';
				} else if (this._i18n.locale === 'uyghur') {
					this._i18n.locale = 'zh';
					this.currentLanguage = 'تىل ئالماشتۇرۇش';
				}
				this.$mStore.commit('setLocale', this._i18n.locale);
				uni.setNavigationBarTitle({ title: this._i18n.t('menu.my') });
				uni.setTabBarItem({ index: 0, text: this._i18n.t('menu.index') });
				uni.setTabBarItem({ index: 1, text: this._i18n.t('menu.category') });
				uni.setTabBarItem({ index: 2, text: this._i18n.t('menu.notify') });
				uni.setTabBarItem({ index: 3, text: this._i18n.t('menu.cart') });
				uni.setTabBarItem({ index: 4, text: this._i18n.t('menu.my') });
				this.homeActive = true;
			},
			open() {
				this.homeActive = !this.homeActive;
			},
			navTo(route, type) {
				this.homeActive = true;
				if (type === 'tab') {
					this.$mRouter.switchTab({ route });
				} else {
					this.$mRouter.push({ route });
				}
			}
		}
	};
</script>
<style scoped lang="scss">
	.home {
		position: fixed;
		color: white;
		right: 40upx;
		bottom: 240upx;
		/* #ifdef H5 */
		margin-bottom: env(safe-area-inset-bottom);
		/* #endif */
		text-align: center;
		z-index: 33;
		.homeCon {
			overflow: hidden;
			width: 0.86rem;
			border-radius: 0.5rem;
			transition: all 0.3s ease-in-out 0s;
			opacity: 0;
			transform: scale(0);
			height: 0;
			.wrapper {
				width: 72upx;
				height: 72upx;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: rgba(0,0,0,.5);
				margin-bottom: $spacing-base;
				.iconfont {
					font-size: 45upx;
					opacity: 1;
					color: $color-white;
					z-index: 92;
				}
			}
		}

		.on {
			opacity: 1;
			transform: scale(1);
			height: 190upx;
			width: 72upx;
			margin-bottom: 20upx;
		}

		.menu {
			width: 72upx;
			height: 72upx;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			.iconfont {
				font-size: 45upx;
				opacity: 1;
				color: $color-white;
				z-index: 92;
			}
		}
		.kefu-bg {
			height: 100vh;
			display: flex;
			justify-content: center;
			align-items: center;
			z-index: 98;
			image {
				width: 60vw;
				height: 60vw;
				border-radius: 12upx;
				z-index: 98;
			}
		}
	}

</style>
