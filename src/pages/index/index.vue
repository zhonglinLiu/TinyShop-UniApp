<template>
	<view class="rf-index">
		<!--搜索导航栏-->
		<rf-search-bar
			@search="navToSearch"
			title="扫一扫"
			icon="iconsaomiao"
			@tab="tabClick"
			:categoryList="categoryList"
			:merchantData="merchantData"
			:placeholder="hotSearchDefault"
		/>
		<view :style="{
			paddingTop: merchantShow ? (isOpenIndexCate ? 134 + statusBar + 'px' : 85 + statusBar + 'px' )  : (isOpenIndexCate ? 98 + statusBar + 'px' : 55 + statusBar + 'px' )
		}">
			<block v-if="currentCate === 0">
				<!-- 轮播图1 -->
				<view class="swiper">
					<view class="swiper-box">
						<rf-swipe-dot
							:info="carouselList.index_top"
							mode="nav"
							:current="current"
							field="title"
						>
							<swiper @change="handleDotChange" autoplay="true">
								<swiper-item
									v-for="(item, index) in carouselList.index_top"
									@tap="indexTopToDetailPage(item)"
									:key="index"
								>
									<view class="swiper-item">
										<image :src="item.cover" mode="aspectFill" />
									</view>
								</swiper-item>
							</swiper>
						</rf-swipe-dot>
					</view>
				</view>
				<!-- 分类列表 -->
				<swiper
					:indicator-active-color="themeColor.color"
					indicator-color="#666"
					:indicator-dots="productCateList.length > 10"
					:style="{height: productCateList.length <= 5 ? '200rpx' : '400rpx'}"
					class="category-list-wrapper"
					v-if="productCateList.length > 0">
					<swiper-item
						class="category-list"
						v-for="(fItem, fIndex) in swipeCateList"
						:key="fIndex"
					>
						<view
							class="category"
							v-for="(sItem, sIndex) in fItem" :key="sIndex" @tap.stop="navToCategory(sItem.id)">
							<view class="img">
								<image :src="sItem.cover || errorImage" mode="aspectFill"></image>
							</view>
							<view class="text in1line">{{ sItem.title}}</view>
						</view>
					</swiper-item>
				</swiper>
				<!--新闻通知-->
				<rf-swiper-slide v-if="announceList.length > 0" :list="announceList" class="rf-skeleton" @navTo="navTo('/pages/index/notice/notice')">
					<view slot="header" class="swiper-slide-header">
						<text class="iconfont icongonggao" :class="'text-'+themeColor.name"></text>
					</view>
				</rf-swiper-slide>
				<!-- 爆款推荐 -->
				<!-- <view class="hot-recommend">
					<view class="left">
						<image class="hot-recommend-image" @tap="navTo(hotRecommendList[0].url)" :src="hotRecommendList[0].icon"></image>
					</view>
					<view class="right">
						<image class="hot-recommend-image" @tap.stop="navTo(hotRecommendList[1].url)" :src="hotRecommendList[1].icon"></image>
						<image class="hot-recommend-image" @tap.stop="navTo(hotRecommendList[2].url)" :src="hotRecommendList[2].icon"></image>
					</view>
				</view> -->
				<!--新品上市-->
				<rf-floor-index
					icon="iconxinpin2"
					:bannerShow="false"
					:list="TaoProductList"
					@toBanner="indexTopToDetailPage"
					@toList="
					navTo(`/pages/product/list-simple?plat=taobao`)"
					:header="{ title: '淘宝', desc: '为你推荐' }"
					@detail="navToDetailPage"
					:banner="carouselList.index_new && carouselList.index_new[0]"
				/>

				<rf-floor-index
					icon="iconxinpin2"
					:bannerShow="false"
					:list="PddProductList"
					@toBanner="indexTopToDetailPage"
					@toList="
					navTo(`/pages/product/list-duduo?plat=pdd`)
				"
					:header="{ title: '拼多多', desc: '领券值降' }"
					@detail="navToDetailPage"
					:banner="carouselList.index_new && carouselList.index_new[0]"
				/>

				<!--网站备案号-->
				<!--#ifdef H5-->
				<view class="copyright" v-if="config.web_site_icp">
					{{ config.copyright_desc }}
					<a href="https://beian.miit.gov.cn/">{{ config.web_site_icp }}</a>
				</view>
				<!-- #endif -->
			</block>
			<view v-else class="index-cate-product-list">
				<rf-product-list-coup :bottom="bottom" :list="categoryProductList"></rf-product-list-coup>
				<rf-load-more
					:status="loadingType"
					v-if="categoryProductList.length > 0"
				></rf-load-more>
				<rf-empty
					:bottom="bottom"
					:info="'暂无该分类产品~'"
					v-if="categoryProductList.length === 0 && !productLoading"
				></rf-empty>
			</view>
		</view>
		<!--页面加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
		<rf-back-top :scrollTop="scrollTop"></rf-back-top>
		<rf-back-home></rf-back-home>
	</view>
</template>

<script>
	/**
	 * @des 微商城首页
	 *
	 * @author stav stavyan@qq.com
	 * @date 2020-01-08 14:14
	 * @copyright 2019
	 */
	import {
		indexList,
		productList
	} from '@/api/product';
	import rfSwipeDot from '@/components/rf-swipe-dot';
	import rfFloorIndex from '@/components/rf-floor-index';
	import rfSearchBar from '@/components/rf-search-bar';
	import rfSwiperSlide from '@/components/rf-swiper-slide';
	import listCell from '@/components/rf-list-cell';
	import { mapMutations } from 'vuex';
	import homeData from '@/data/index.js'
	import rfProductListCoup from '@/components/rf-product-list-coup';
	import trans from '@/utils/trans';
	import conf from '@/utils/conf'
	export default {
		components: {
			rfFloorIndex,
			rfSwipeDot,
			rfProductListCoup,
			rfSearchBar,
			listCell,
			rfSwiperSlide
		},
		data() {
			return {
				current: 0, // 轮播图index
				carouselList: {}, // 广告图
				// hotProductList: [], // 热门商品列表
				// recommendProductList: [], // 推荐商品列表
				// guessYouLikeProductList: [], // 猜您喜欢商品列表
				PddProductList: [],
				TaoProductList: [],
				productCateList: [], // 商品栏目
				config: {
					'web_site_icp':'豫ICP备17025106号-2',
					'copyright_desc':'Copyright 2021 hi.life@qq.com All rights reserved.'
				}, // 商户配置
				announceList: homeData.notice_list, // 公告列表
				share: {},
				loading: true,
				scrollTop: 0,
				kefuShow: true,
				loadingType: 'more',
				hotSearchDefault: '请输入关键字',
				newsBg: this.$mAssetsPath.newsBg,
				errorImage: this.$mAssetsPath.errorImage,
				appName: this.$mSettingConfig.appName,
				categoryList: [], // 分类列表
				categoryProductList: [], // 分类列表
				page: 1,
				currentCate: 0,
				// hotRecommendList: this.$mConstDataConfig.hotRecommendList,
				productLoading: true,
				isOpenIndexCate: this.$mSettingConfig.isOpenIndexCate,
				moneySymbol: this.moneySymbol,
				merchantShow: false,
				merchantData: {},
				material_id: 3756,
				list_id:"",
			};
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		onLoad() {
			this.$mHelper.baiduSeo()
			this.$mHelper.setMeta('description', '淘宝优惠券，拼多多优惠券，京东优惠券，唯品会优惠券，优惠券，淘宝，拼多多，京东，唯品会，淘购')
			this.$mHelper.setMeta('keywords', '汇集淘宝、拼多多、京东、唯品会等电商平台优惠券信息')
			this.$mHelper.setMeta('author', 'Free，hi.life@qq.com')
			this.$mHelper.setMeta('revisit-after', '2 days')
			this.$mHelper.setMeta('copyright', 'hi.life@qq.com')
			this.$mHelper.setMeta('applicable-device', 'mobile')
		},
		onShow() {
			// 初始化购物车数量
			this.$mHelper.setMeta('theme-color', this.themeColor.color)
			this.setCartNum(uni.getStorageSync('cartNum'));
			this.initData();
		},
		computed: {
			statusBar () {
				const e = uni.getSystemInfoSync();
				return e.statusBarHeight;
			},
			// 计算倒计时时间
			second() {
				return function(val) {
					return Math.floor(15 * 60 - (new Date() / 1000 - val));
				};
			},
			bottom () {
				let bottom = 0;
				/*  #ifdef H5  */
				bottom = 90;
				/*  #endif */
				return bottom;
			},
			swipeCateList() {
				const list = this.productCateList;
				let result = [];
				for (let i = 0, len = list.length; i < len; i += 10) {
					result.push(list.slice(i, i + 10));
				}
				return result;
			}
		},
		onShareAppMessage() {
			let shareParams = { title: this.share.share_title || `欢迎来到${this.appName}`, path: '/pages/index/index' };
			return shareParams;
		},
		filters: {
			filterDiscountPrice(val) {
				const price = val.product && (val.product.price * val.discount) / 100;
				switch (val.decimal_reservation_number) {
					case 0:
						return (Math.floor(price * 100) / 100).toFixed(2);
					case 1:
						return (Math.floor(price * 100) / 100).toFixed(0);
					case 2:
						return (Math.floor(price * 100) / 100).toFixed(1);
					default:
						return (Math.floor(price * 100) / 100).toFixed(2);
				}
			},
			filterTotalSales(val) {
				if (val > 10000) {
					val = `${(val / 10000).toFixed(2)}w`;
				}
				return val;
			}
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.getIndexList('refresh');
		},
		// 加载更多
		onReachBottom() {
			if (this.currentCate === 0) return;
			if (this.loadingType === 'nomore') return;
			this.page++;
			this.getProductList(this.currentCate);
		},
		methods: {
			// 顶部tab点击
			tabClick({ id }) {
				this.currentCate = id;
				if (id === 0) return;
				this.loading = true;
				this.page = 1;
				this.productLoading = true;
				this.categoryProductList = [];
				this.getProductList(id);
			},

			async getProductList(id) {
				var param = {
					material_id: id,
					page_size:10,
					page_no: this.page,
				}

				await this.$http
					.taoGet(`taobao.tbk.dg.optimus.material`, param)
					.then(async r => {
						this.loading = false;
						var d = trans.taobaoList(r.data.tbk_dg_optimus_material_response.result_list.map_data)
						this.loadingType = d.length >= 8 ? 'more' : 'nomore';
						this.categoryProductList = [...this.categoryProductList, ...d];
					})
					.catch(err => {
						this.errorInfo = JSON.stringify(err);
						this.loading = false;
						this.productLoading = false;
					});
			},
			// 获取产品列表
			// async getProductList(id) {
			// 	await this.$http
			// 		.get(`${productList}`, {
			// 			cate_id: id,
			// 			page: this.page
			// 		})
			// 		.then(async r => {
			// 			this.loading = false;
			// 			this.productLoading = false;
			// 			this.loadingType = r.data.length < 10 ? 'nomore' : 'more';
			// 			this.categoryProductList = [...this.categoryProductList, ...r.data];
			// 		}).catch(() => {
			// 			this.loading = false;
			// 			this.productLoading = false;
			// 		});
			// },
			...mapMutations(['setCartNum']),
			// 监听轮播图切换
			handleDotChange(e) {
				this.current = e.detail.current;
			},
			// 数据初始化
			initData() {
				// 设置购物车数量角标
				this.initIndexData();
				this.getIndexList();
				this.getPddList();
				this.initCartItemCount();
			},
			// 设置购物车数量角标
			async initCartItemCount() {
				if (
					this.$mStore.getters.hasLogin &&
					parseInt(uni.getStorageSync('cartNum'), 10) > 0
				) {
					uni.setTabBarBadge({
						index: this.$mConstDataConfig.cartIndex,
						text: uni.getStorageSync('cartNum').toString()
					});
				} else {
					uni.removeStorageSync('cartNum');
					uni.removeTabBarBadge({ index: this.$mConstDataConfig.cartIndex });
				}
			},
			// 通用跳转
			navTo(route) {
				this.$mRouter.push({ route });
			},
			// 跳转至分类模块
			navToCategory(plat) {
				if(plat != 'taobao' && plat != 'pdd') {
					uni.showToast({
						icon: 'none', // success / none / loading 3个有效参数
						title: '功能开发中，敬请期待...',
						duration: 2000
					});
					return
				}
				if (this.$mSettingConfig.appCateType === '2') {
					uni.setStorageSync('indexToCateId', id);
					this.$mRouter.reLaunch({ route: '/pages/category/category' });
				} else {
					if(plat == 'taobao'){
						this.navTo(`/pages/product/list-simple?plat=`+plat)
					} else if(plat == 'pdd'){
						this.navTo(`/pages/product/list-duduo?plat=`+plat)
					}

				}
			},
			// 通用跳转
			navToSearch() {
				this.$mRouter.push({
					route: `/pages/index/search/search?data=${JSON.stringify(this.search)}`
				});
			},
			// 跳至广告图指定页面
			indexTopToDetailPage(item) {
				this.$mHelper.handleBannerNavTo(item.jump_type, item.jump_link, item.id);
			},
			async getPddList(type) {
				var that = this
				await this.$http
					.pddGet('pdd.ddk.goods.recommend.get', {
						'limit':10,
						'list_id':that.list_id,
						'offset': (that.page-1) * 10
					})
					.then(async r => {
						uni.setNavigationBarTitle({ title: this.appName });
						if (type === 'refresh') {
							uni.stopPullDownRefresh();
						}
						// // 首页参数赋值
						this.list_id = r.data.goods_basic_detail_response.search_id
						var d = trans.paddList(r.data.goods_basic_detail_response.list, this.list_id)
						this.PddProductList = d;
						this.loading = false;
					})
					.catch((e) => {
						this.loading = false;
						if (type === 'refresh') {
							uni.stopPullDownRefresh();
						}
					});
			},
			// 获取主页数据
			async getIndexList(type) {
				var that = this
				await this.$http
					.taoGet('taobao.tbk.dg.optimus.material', {
						'page_no':that.page,
						'page_size':10,
						'material_id': that.material_id,
					})
					.then(async r => {
						uni.setNavigationBarTitle({ title: this.appName });
						if (type === 'refresh') {
							uni.stopPullDownRefresh();
						}
						// // 首页参数赋值
						var d = trans.taobaoList(r.data.tbk_dg_optimus_material_response.result_list.map_data)
						this.TaoProductList = d;
						this.loading = false;
					})
					.catch((e) => {
						this.loading = false;
						if (type === 'refresh') {
							uni.stopPullDownRefresh();
						}
					});
			},
			// 首页参数赋值
			initIndexData(data) {
				this.productCateList = homeData.home.cate;
				this.categoryList = [{ id: 0, title: '首页' }, ...conf.taobaoCate];
				this.carouselList = {'index_top': homeData.home.top};
				this.search = homeData.home.search;
				// this.share = data.share;
				uni.setStorageSync('search', this.search);
				this.hotSearchDefault = this.search.hot_search_default || '请输入关键字';
				uni.setStorage({
					key: 'hotSearchDefault',
					data: this.search.hot_search_default
				});
				// this.config = data.config;
				this.$mHelper.handleWxH5Share(this.share.share_title || this.appName, this.share.share_desc || `欢迎来到${this.appName}商城`, this.share.share_link || this.$mConfig.hostUrl, this.share.share_cover || this.$mSettingConfig.appLogo);
			},
			// 跳转至商品详情页
			navToDetailPage(data) {
				const { id } = data;
				if (!id) return;
				this.$mRouter.push({ route: `/pages/product/product?id=${id}` });
			},
			// 跳转至分类页
			toCategory() {
				this.$mRouter.switchTab({ route: '/pages/category/category' });
			}
		}
	};
</script>
<style lang="scss">
	page {
		background-color: $page-color-base;
	}
	.rf-index {
		background-color: $color-white;
		/*爆款拼团*/
		.wrapper {
			border-radius: 10upx;
			.h-list {
				background-color: $page-color-base;
				white-space: nowrap;
				padding: 0 $spacing-sm;
				.h-item {
					margin: $spacing-sm $spacing-sm $spacing-sm 0;
					display: inline-block;
					background-color: $color-white;
					font-size: $font-sm;
					width: 280upx;
					border-radius: 6upx;
					.h-item-img {
						display: inline-block;
						width: 280upx;
						height: 300upx;
						border-top-left-radius: 12upx;
						border-top-right-radius: 12upx;
						border-bottom: 1upx solid rgba(0, 0, 0, 0.01);
					}
					.title {
						width: 280upx;
						white-space : normal;
						height: 60upx;
						line-height: 30upx;
						font-size: $font-sm;
						padding: 0 $spacing-sm;
						margin: $spacing-sm 0;
					}
					.last-line {
						padding: 0 $spacing-sm $spacing-base;
						margin-bottom: 5upx;
						display: flex;
						justify-content: space-between;
						align-items: center; /* 垂直居中 */
						.red {
							font-size: $font-sm;
							margin-right: 4upx;
						}
					}
					.price {
						font-size: $font-base - 2upx;
						line-height: 1;
						.m-price {
							margin-left: 8upx;
							color: $font-color-light;
							font-size: $font-sm;
							text-decoration: line-through;
						}
					}
				}
			}
		}
		/*轮播图*/
		.swiper {
			width: 100%;
			margin-bottom: 20upx;
			display: flex;
			justify-content: center;
			.swiper-box {
				width: 92%;
				height: 40vw;
				overflow: hidden;
				border-radius: 15upx;
				box-shadow: 0upx 8upx 25upx rgba(0, 0, 0, 0.2);
				//兼容ios，微信小程序
				position: relative;
				z-index: 1;
				swiper {
					width: 100%;
					height: 40vw;
					swiper-item {
						image {
							width: 100%;
							height: 40vw;
						}
					}
				}
			}
		}
		/* 爆款推荐 */
		.hot-recommend {
			background-color: $color-white;
			display: flex;
			padding: $spacing-base $spacing-lg 0;
			.hot-recommend-image {
				width: 100%;
				height: 100%;
			}
			.left {
				flex: 3;
				height: 350upx;
				margin-right: 15upx;
			}
			.right {
				flex: 4;
				.hot-recommend-image {
					height: 170upx;
				}
			}
		}
		/*轮播图2*/
		.swiper-item-text {
			position: absolute;
			bottom: 16upx;
			left: 30upx;
			height: 48upx;
			line-height: 48upx;
			background: rgba(0, 0, 0, 0.2);
			width: 90%;
			color: $color-white;
			border-bottom-left-radius: 12upx;
			padding-left: 20upx;
		}
		/*新闻通知*/
		.swiper-slide-header {
			.iconfont {
				font-size: $font-lg + 8upx;
				font-weight: 600;
			}
		}
		/*分类列表*/
		.category-list-wrapper {
			.category-list {
				width: 100%;
				padding: $spacing-base;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				.category {
					margin-top: 10upx;
					width: calc(20% - 20upx);
					height: 132upx;
					display: flex;
					text-align: center;
					flex-wrap: wrap;
					.img {
						width: 100%;
						display: flex;
						justify-content: center;
						image {
							width: 12vw;
							height: 12vw;
							border-radius: 50%;
						}
					}
					.text {
						margin-top: 16upx;
						width: 100%;
						display: flex;
						justify-content: center;
						font-size: 24upx;
						color: #3c3c3c;
					}
				}
			}
		}
		/*版权显示*/
		.copyright {
			margin: 10upx 0;
			width: 100%;
			text-align: center;
			color: #666;

			a {
				display: block;
				color: #666;
				text-decoration: none;
			}
		}
		/*限时抢购*/
		.order-item {
			display: flex;
			flex-direction: column;
			background: #fff;
			padding: 0 30upx;
			margin-bottom: 20upx;

			.goods-box-single {
				display: flex;
				padding: 40upx 10upx 10upx;
				height: 330upx;
				border-radius: 12upx;
				margin-top: 20upx;
				box-shadow: 2px 2px 10px rgba(66, 135, 193, 0.2); // 阴影
				border-bottom: 1px solid rgba(0, 0, 0, 0.05); // 边框
				position: relative;

				.goods-img {
					display: block;
					border-radius: 12upx;
					width: 190upx;
					height: 200upx;
				}

				.right {
					flex: 1;
					display: flex;
					flex-direction: column;
					padding: 0 30upx 0 24upx;
					overflow: hidden;

					.title {
						font-weight: bold;
						line-height: 1.2;
						margin: 10upx 0;
					}

					.attr-box {
						line-height: 1.2;
						margin-bottom: 8upx;
						margin-left: 10upx;
					}

					.last-line {
						margin-top: 3upx;
						display: flex;
						justify-content: space-between;
						align-items: center; /* 垂直居中 */
						.red {
							margin-right: 4upx;
						}
					}

					.price {
						font-size: $font-lg;
						line-height: 1;
						.m-price {
							margin-left: 8upx;
							color: $font-color-light;
							font-size: $font-sm;
							text-decoration: line-through;
						}
					}

					.triangle-wrapper {
						position: absolute;
						overflow: hidden;
						top: 0;
						right: 0;
						border-radius: 12upx;

						.triangle {
							color: #5eba8f;
							width: 0;
							height: 0;
							border-top: 120upx solid;
							opacity: 0.8;
							border-left: 120upx solid transparent;
						}

						.triangle-content {
							position: absolute;
							top: 28upx;
							right: 0;
							transform: rotate(45deg);
							font-size: $font-sm - 2upx;
							color: #fff;
						}
					}
				}
			}

			.action-box {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				height: 90upx;
				position: relative;

				.discount-time {
					font-size: $font-sm;
					color: $uni-color-success;
					margin-right: 20upx;
				}
			}
		}
		.index-cate-product-list {
			padding-top: $spacing-sm;
			background-color: $page-color-base;
			.no-data {
				margin: 48upx 0;
				color: $font-color-light;
				display: flex;
				justify-content: center;
				align-items: center;
				.iconfont {
					margin-right: 20upx;
					font-size: $font-lg + 16upx;
				}
			}
		}
	}
</style>
