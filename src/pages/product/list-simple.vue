<template>
</template>

<script>
</script>

<style>
</style>
<template>
	<view class="container product-list">
		<view class="rf-header-box">
			<view class="rf-header" :style="{width:width+'px',height:height+'px'}">
				<view class="rf-back" :style="{marginTop:arrowTop+'px'}" @tap="back">
					<text class="iconfont iconzuo"></text>
				</view>
			</view>
		</view>
		<view class="rf-header-screen" :style="{top:height+'px'}">
			<view class="rf-screen-top">
				<view class="rf-top-item" @tap="screen" data-index="2">
					<text class="iconfont" :class="isList>0? 'iconliebiaoqiehuan':'iconfenlei'"></text>
				</view>
				<view class="rf-top-item rf-icon-ml" @tap="screen" data-index="3">
					<text>筛选</text>
					<!--<rf-icon name="screen" :size="12" color="#333" rf-icon-class="rf-ml" :bold="true"></rf-icon>-->
				</view>
			</view>
			<view class="rf-screen-bottom">
				<block v-for="(item,index) in attrArr" :key="index">
					<view class="rf-bottom-item rf-icon-ml" :class="[item.isActive ? `bg-${themeColor.name} rf-btmItem-active` : 'rf-btmItem-normal',attrIndex==index?'rf-btmItem-tap':'']" :data-index="index" @tap="btnDropChange">
						<view class="rf-bottom-text" :class="[attrIndex==index?'rf-active':'']">{{item.isActive?item.selectedName:item.name}}</view>
						<text class="iconfont" :class="attrIndex==index?'iconshang':'iconxia'" :size="14" :color="attrIndex==index || item.isActive?'$base-color':'#444'" rf-icon-class="rf-ml" v-if="item.list.length>0"></text>
					</view>
				</block>
			</view>
		</view>
		<view class="product-list-wrapper">
				<rf-product-list-coup :bottom="0" :list="productList" :isList="isList" :style="{paddingTop: dropScreenH+10 + 'upx' }"></rf-product-list-coup>
		</view>
		<rf-load-more
			:status="loadingType"
			v-if="productList.length > 0"
		></rf-load-more>
		<rf-empty
			:info="errorInfo || '该分类暂无商品'"
			v-if="productList.length === 0 && !loading"
		></rf-empty>
		<!--顶部下拉筛选弹层 属性-->
		<rf-top-drawer bgcolor="#f7f7f7" :show="dropScreenShow" :paddingbtm="110" :translatey="dropScreenH" @close="btnCloseDrop">
			<scroll-view class="rf-scroll-box" scroll-y :scroll-top="scrollTop">
				<view class="rf-seizeaseat-20"></view>
				<view class="rf-drop-item rf-icon-middle" :class="[item.selected?'rf-bold':'']" v-for="(item,index) in attrData" :key="index" @tap.stop="btnSelected" :data-index="index">
					<text class="iconfont icongouxuan" :class="'text-' + themeColor.name" :size="16" :bold="true" v-if="item.selected" rf-icon-class="rf-middle"></text>
					<text class="rf-ml rf-middle">{{item.name}}</text>
				</view>
				<view class="rf-seizeaseat-30"></view>
			</scroll-view>
			<view class="rf-drop-btnbox">
				<view class="rf-drop-btn" :class="'text-' + themeColor.name" :hover-stay-time="150" @tap="reset">重置</view>
				<view class="rf-drop-btn" :class="'bg-' + themeColor.name" :hover-stay-time="150" @tap="btnSure">确定</view>
			</view>
		</rf-top-drawer>
		<!---顶部下拉筛选弹层 属性-->
		<!--左抽屉弹层 筛选 -->
		<uni-drawer
			class="rf-drawer"
			:visible="drawer"
			mode="right"
			@close="closeDrawer()"
		>
			<view class="rf-drawer-box" :style="{paddingTop:height+'px'}">
				<scroll-view class="rf-drawer-scroll" scroll-y :style="{height:drawerH+'px'}">
					<view class="rf-drawer-title">
						<text class="rf-title-bold">全部分类</text>
						<view class="rf-all-box rf-icon-ml">
							<view class="rf-attr-right" :class="'text-' + themeColor.name">{{ currentCateStr }}</view>
						</view>
					</view>
					<view class="rf-drawer-content rf-flex-attr">
						<view class="rf-attr-item" :class="[item.isActive ? `bg-${themeColor.name} rf-btmItem-active` : 'rf-btmItem-normal']" v-for="(item, index) in productCateList" :key="item.id" @tap.stop="cateBtnSelected(index)">
							<view class="rf-attr-ellipsis">{{ item.title }}</view>
						</view>
					</view>
					<view class="rf-safearea-bottom"></view>
				</scroll-view>
				<view class="rf-attr-btnbox">
					<view class="rf-attr-safearea">
						<view class="rf-drawer-btn rf-drawerbtn-black" :class="'text-' + themeColor.name" hover-class="rf-white-hover" :hover-stay-time="150" @tap="reset">重置</view>
						<view class="rf-drawer-btn rf-drawerbtn-primary" :class="'bg-' + themeColor.name" hover-class="rf-red-hover" :hover-stay-time="150" @tap="closeDrawer">确定</view>
					</view>
				</view>
			</view>
		</uni-drawer>
		<!--左抽屉弹层 筛选-->
		<!--页面加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>
<script>
	import uniDrawer from '@/components/uni-drawer/drawer';
	import rfTopDrawer from '@/components/rf-top-drawer';
	import rfAttrContent from '@/components/rf-attr-content';
	import rfProductListCoup from '@/components/rf-product-list-coup';
	import rfLoadMore from '@/components/rf-load-more/rf-load-more';
	import { cartItemCount, cartItemCreate, productDetail, productList, productCate, brandIndex } from '@/api/product';
	import { mapMutations } from 'vuex';
  import trans from '@/utils/trans';
	import conf from '@/utils/conf';
	/* eslint-disable */
	export default {
		components: {
			uniDrawer,
			rfProductListCoup,
			rfAttrContent,
			rfLoadMore,
			rfTopDrawer
		},
		filters: {
			filterTotalSales (val) {
				if (val > 10000) {
					val = `${(val / 10000).toFixed(2)}w`;
				}
				return val;
			}
		},
		data() {
			return {
			  keyword: '',
			  errorInfo: '',
				loadingType: 'more',
				page: 1,
				loading: true,
				specClass: 'none',
				productDetail: {},
				searchKey: "", //搜索关键词
				width: 200, //header宽度
				height: 0, //header高度
				inputTop: 0, //搜索框距离顶部距离
				arrowTop: 0, //箭头距离顶部距离
				dropScreenH: 0, //下拉筛选框距顶部距离
				attrData: [],
				attrIndex: -1,
				dropScreenShow: false,
				scrollTop: 0,
				tabIndex: 0, //顶部筛选索引
				isList: false, //是否以列表展示  | 列表或大图
				drawer: false,
				drawerH: 0, //抽屉内部scrollview高度
				selectedName: "综合",
				selectH: 0,
				plat: 'taobao',
				dropdownList: [{
					name: "综合",
					selected: true,
					param: {}
				}, {
					name: "价格升序",
					selected: false,
					param: { price: 'asc' }
				}, {
					name: "价格降序",
					selected: false,
					param: { price: 'desc' }
				}],
				attrArr: [{
					name: "热门",
					selectedName: "热门",
					isActive: true,
					params: { is_hot: 1 },
					list: []
				},{
					name: "品牌",
					selectedName: "品牌",
					isActive: false,
					params: { is_brand: 1 },
					list: []
				}
				],
				productList: [
				],
				pageIndex: 1,
				pullUpOn: true,
				productCateList: [],
				brandList: [],
				currentCateStr: '',
				currentBrandStr: '',
				minPrice: '',
				maxPrice: '',
				productParams: {}
			}
		},
		onLoad(options) {
			console.log(options)
			let obj = {};
			// #ifdef MP-WEIXIN
			obj = wx.getMenuButtonBoundingClientRect();
			// #endif
			// #ifdef MP-BAIDU
			obj = swan.getMenuButtonBoundingClientRect();
			// #endif
			// #ifdef MP-ALIPAY
			my.hideAddToDesktopMenu();
			// #endif
			uni.getSystemInfo({
				success: (res) => {
					this.width = obj.left || res.windowWidth;
					this.height = obj.top ? (obj.top + obj.height + 8) : (res.statusBarHeight + 44);
					this.inputTop = obj.top ? (obj.top + (obj.height - 30) / 2) : (res.statusBarHeight + 7);
					this.arrowTop = obj.top ? (obj.top + (obj.height - 32) / 2) : (res.statusBarHeight + 6);
					this.searchKey = options.searchKey || "";
					//略小，避免误差带来的影响
					this.dropScreenH = this.height * 750 / res.windowWidth + 186;
					this.drawerH = res.windowHeight - uni.upx2px(100) - this.height
					this.plat = options.plat
				}
			});
			this.initData(options);
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.page = 1;
			this.productList.length = 0;
			this.getProductList('refresh', {});
		},
		// 加载更多
		onReachBottom() {
		  if (this.loadingType === 'nomore') return;
			this.page++;
			this.getProductList();
		},
		methods: {
      ...mapMutations(['setCartNum']),
			// 初始化数据
			initData(options) {
				this.$mHelper.setMeta('title', '淘宝')
			  let params = {};
			  if (options.cate_id) {
					params.cate_id = options.cate_id;
			  }
				if (options.param) {
				  params = { ...params, ...JSON.parse(options.param) }
				}
				if (options.keyword) {
					this.keyword = options.keyword;
				}
				this.productParams = params;
				this.getProductList();
			},
			stopPrevent() {},

			// 获取产品详情
			async getProductDetail(row) {
				await this.$http
					.get(`${productDetail}`, {
						id: row.id
					})
					.then(async r => {
						this.productDetail = r.data;
						this.productDetail.sku_name = row.sku_name;
						this.specClass = 'show';
					});
			},
			px(num) {
				return uni.upx2px(num) + "px"
			},
			btnDropChange(e) {
				let index = parseInt(e.currentTarget.dataset.index, 10);
				let arr = JSON.parse(JSON.stringify(this.attrArr[index].list));
				if (arr.length === 0) {
					this.$set(this.attrArr[index], "isActive", !this.attrArr[index].isActive)
				  if (this.attrArr[index].isActive && index === 0) {
				    this.attrArr[1].isActive = false;
				  }
					if (this.attrArr[1].isActive) {
				    this.attrArr[0].isActive = false;
				  }
					this.getProductCate()
				} else {
					this.attrData = arr;
					this.attrIndex = index;
					this.dropScreenShow = true;
					this.$set(this.attrArr[index], "isActive", false);
					this.scrollTop = 1;
					this.$nextTick(() => {
						this.scrollTop = 0
					});
				}
				let params = {};
				params.keyword = this.keyword;
				this.attrArr.forEach(item => {
					if (item.isActive) {
						params = {...params, ...item.params }
					}
				});
				this.page = 1;
				this.productList = [];
				this.loading = true;
				this.productParams = params;
				this.getProductList();
			},
			btnSelected(e) {
				let index = e.currentTarget.dataset.index;
				this.$set(this.attrData[index], "selected", !this.attrData[index].selected)
			},
			async reset() {
      	this.currentBrandStr = '';
      	this.currentCateStr = '';
				this.minPrice = '';
				this.maxPrice = '';
				this.getProductCate();
			},
			btnCloseDrop() {
				this.scrollTop = 1;
				this.$nextTick(() => {
					this.scrollTop = 0
				});
				this.dropScreenShow = false;
				this.attrIndex = -1
			},
			btnSure() {
				let index = this.attrIndex;
				let arr = this.attrData;
				let active = false;
				let attrName = "";
				//这里只是为了展示选中效果,并非实际场景
				for (let item of arr) {
					if (item.selected) {
						active = true;
						attrName += attrName ? ";" + item.name : item.name
					}
				}
				let obj = this.attrArr[index];
				this.btnCloseDrop();
				this.$set(obj, "isActive", active);
				this.$set(obj, "selectedName", attrName);
			},
			showDropdownList() {
				this.selectH = 246;
				this.tabIndex = 0;
			},
			hideDropdownList() {
				this.selectH = 0
			},
			dropdownItem(e) {
				let index = parseInt(e.currentTarget.dataset.index, 10);
				let arr = this.dropdownList;
				for (let i = 0; i < arr.length; i++) {
					if (i === index) {
						arr[i].selected = true;
					} else {
						arr[i].selected = false;
					}
				}
				this.dropdownList = arr;
				this.selectedName = index === 0 ? '综合' : index === 1 ? '价格升序' : '价格降序';
				this.selectH = 0;
				this.page = 1;
				this.productList = [];
				this.loading = true;
				this.productParams = this.dropdownList[index].param;
				this.getProductList();
			},
			screen(e) {
				let index = parseInt(e.currentTarget.dataset.index, 10);
				if (index === 0) {
					this.showDropdownList();
				} else if (index === 1) {
					let params = {}
					if (this.tabIndex === 1) {
						this.tabIndex = null;
						params.total_sales = 'asc';
					} else {
						this.tabIndex = 1;
						params.total_sales = 'desc';
					}
					this.page = 1;
					this.productList = [];
					this.loading = true;
				  this.productParams = params;
					this.getProductList();
				} else if (index === 2) {
					this.isList = !this.isList
				} else if (index === 3) {
				  if (this.productCateList.length === 0) {
						this.getProductCate();
				  }
				  if (this.brandList.length === 0) {
						this.getBrandList();
				  }
					this.drawer = true;
				}
			},
			closeDrawer() {
				this.drawer = false;
			  const params = {};
			  if (this.maxPrice) {
			    params.max_price = this.maxPrice;
			  }
			  if (this.minPrice) {
			    params.min_price = this.minPrice;
			  }
			  const brandArr = [];
			  this.brandList.forEach(item => {
				  if (item.isActive) {
					    brandArr.push(item.id);
					  }
			  });
			  if (brandArr.join(',')) {
			    params.brand_id = brandArr.join(',');
			  }
			  const cateArr = [];
			  this.productCateList.forEach(item => {
				  if (item.isActive) {
					    cateArr.push(item.id);
					  }
			  });
			  if (cateArr.join(',')) {
			    params.cate_id = cateArr.join(',');
			  }
				this.page = 1;
				this.productList = [];
				this.loading = true;
				this.productParams = params;
				this.getProductList();
			},
			cateBtnSelected(index) {
			  this.currentCateStr = '';
				this.productCateList.forEach(item => {
				  item.isActive = false
				});
				this.$set(this.productCateList[index], "isActive", !this.productCateList[index].isActive);
				const productCateArr = [];
				this.productCateList.forEach(item => {
				  if (item.isActive) {
				    productCateArr.push(item.title);
				  }
				});
				this.currentCateStr = productCateArr.join(',');
			},
			brandBtnSelected(index) {
			  this.currentBrandStr = '';
				this.$set(this.brandList[index], "isActive", !this.brandList[index].isActive);
				const brandArr = [];
				this.brandList.forEach(item => {
				  if (item.isActive) {
				    brandArr.push(item.title);
				  }
				});
				this.currentBrandStr = brandArr.join(',');
			},
			// 获取商品分类列表
			getProductCate() {
				this.productCateList = conf.taobaoCate
				if(this.productParams.is_brand == 1) {
					this.productCateList = conf.taobaoBrandCate
				}
			},
			// 获取商品品牌列表
			async getBrandList() {
				// await this.$http
				// 	.get(`${brandIndex}`)
				// 	.then(r => {
				// 	  this.brandList = r.data;
				// 	});
			},
			back() {
				if (this.drawer) {
					this.closeDrawer()
				} else {
					this.$mRouter.back();
				}
			},
			search() {
			  this.page = 1;
			  this.productList = [];
			  this.loading = true;
				this.getProductList();
			},
			getProductList(type) {
				if(this.keyword){
					this.productParams.keyword = this.keyword
				}
				if(this.plat == 'taobao')  {
					this.getTaoBaoProductList()
				} else {
					this.loading = false;
				}
			},
			// 获取商品列表
			async getTaoBaoProductList(type) {
				this.getProductCate()
				console.log(this.productParams)
				var param = {
					material_id: this.productCateList[0].id,
					page_size:20,
					page_no: this.page,
				}
				if(this.productParams.cate_id) {
					param.material_id = this.productParams.cate_id
				}

				await this.$http
					.taoGet(`taobao.tbk.dg.optimus.material`, param)
					.then(async r => {
						this.loading = false;
						if (type === 'refresh') {
							uni.stopPullDownRefresh();
						}
						var d = trans.taobaoList(r.data.tbk_dg_optimus_material_response.result_list.map_data)
						this.loadingType = d.length >= 10 ? 'more' : 'nomore';
						this.productList = [...this.productList, ...d];

					})
					.catch(err => {
						this.errorInfo = JSON.stringify(err);
						this.loading = false;
						if (type === 'refresh') {
							uni.stopPullDownRefresh();
						}
					});
			},
			// 跳转详情
			navTo(route) {
				this.$mRouter.push({ route });
			}
		},
	}
</script>
<style lang="scss">
	page {
		background: $page-color-base;
	}
	/*顶部下拉选择 属性*/
	.rf-scroll-box {
		width: 100%;
		height: 480upx;
		box-sizing: border-box;
		position: relative;
		z-index: 99;
		color: $color-white;
		font-size: 30upx;
		word-break: break-all;
	}
	.rf-drop-item {
		color: #333;
		height: 80upx;
		font-size: 28upx;
		padding: 20upx 40upx 20upx 40upx;
		box-sizing: border-box;
		display: inline-block;
		width: 50%;
	}
	.rf-drop-btnbox {
		width: 100%;
		height: 100upx;
		position: absolute;
		left: 0;
		bottom: 0;
		box-sizing: border-box;
		display: flex;
	}
	.rf-drop-btn {
		width: 50%;
		font-size: 32upx;
		text-align: center;
		height: 100upx;
		line-height: 100upx;
		border: 0;
	}
	.rf-dropdownlist {
		width: 100%;
		position: absolute;
		background: $color-white;
		border-bottom-left-radius: 24upx;
		border-bottom-right-radius: 24upx;
		overflow: hidden;
		box-sizing: border-box;
		padding-top: 10upx;
		padding-bottom: 26upx;
		left: 0;
		top: 88upx;
		visibility: hidden;
		transition: all 0.2s ease-in-out;
		z-index: 99;
		.icongouxuan {
			font-size: $font-lg;
			line-height: 88upx;
		}
	}
	.rf-dropdownlist-show {
		visibility: visible;
	}
	.rf-dropdownlist-mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.6);
		z-index: -1;
		transition: all 0.2s ease-in-out;
		opacity: 0;
		visibility: hidden;
	}
	.rf-mask-show {
		opacity: 1;
		visibility: visible;
	}
	.rf-dropdownlist-item {
		color: #333;
		height: 70upx;
		font-size: 28upx;
		padding: 0 40upx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	/*顶部下拉选择 综合*/
	.rf-drawer-box {
		width: 686upx;
		font-size: 24upx;
		overflow: hidden;
		position: relative;
		padding-bottom: 100upx;
	}
	.rf-drawer-title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30upx;
		box-sizing: border-box;
		height: 80upx;
	}
	.rf-title-bold {
		font-size: 26upx;
		font-weight: bold;
		flex-shrink: 0;
	}
	.rf-location {
		margin-right: 6upx;
	}
	.rf-attr-right {
		width: 70%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: right;
	}
	.rf-all-box {
		width: 90%;
		white-space: nowrap;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.rf-drawer-content {
		padding: 16upx 30upx 30upx 30upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
	}
	.rf-input {
		border: 0;
		height: 64upx;
		border-radius: 32upx;
		width: 45%;
		background: #f7f7f7;
		text-align: center;
		font-size: $font-base;
		color: #333;
	}
	.rf-phcolor {
		text-align: center;
		color: #b2b2b2;
		font-size: 24upx;
	}
	.rf-flex-attr {
		flex-wrap: wrap;
		justify-content: flex-start;
	}
	.rf-attr-item {
		width: 30%;
		height: 64upx;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 4upx;
		box-sizing: border-box;
		border-radius: 32upx;
		margin-right: 5%;
		margin-bottom: 5%;
	}
	.rf-attr-ellipsis {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		width: 96%;
		text-align: center;
	}
	.rf-attr-item:nth-of-type(3n) {
		margin-right: 0%;
	}
	.rf-attr-btnbox {
		width: 100%;
		position: absolute;
		left: 0;
		bottom: 0;
		box-sizing: border-box;
		padding: 0 30upx;
		background: $color-white;
	}
	.rf-attr-safearea {
		height: 100upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		/*padding-bottom: env(safe-area-inset-bottom);*/
	}
	.rf-safearea-bottom {
		width: 100%;
		height: env(safe-area-inset-bottom);
	}
	.rf-attr-btnbox::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		border-top: 1upx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
	.rf-drawer-btn {
		width: 47%;
		text-align: center;
		height: 60upx;
		border-radius: 30upx;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
	}
	.rf-drawerbtn-black {
		border: 1upx solid;
	}
	.product-list {
		padding-bottom: env(safe-area-inset-bottom);
		/* 隐藏scroll-view滚动条*/
		::-webkit-scrollbar {
			width: 0;
			height: 0;
			color: transparent;
		}
		.rf-header-box {
			width: 100%;
			background: $color-white;
			position: fixed;
			z-index: 100;
			left: 0;
			top: 0;
			.rf-header {
				display: flex;
				align-items: flex-start;
				.rf-back {
					margin-left: 8upx;
					height: 32px !important;
					width: 32px !important;
					display: flex;
					justify-content: center;
					align-items: center;
					.iconzuo {
						font-size: $font-lg + 4upx;
						font-weight: 500;
						color: $font-color-dark;
					}
				}
			}
			.input-box {
				width: 100%;
				font-size: $font-sm;
				box-sizing: border-box;
				color: #999;
				display: flex;
				align-items: center;
				overflow: hidden;
				height: 60upx;
				background-color: $page-color-base;
				border-radius: 30upx;
				position: relative;
				margin: 0 20upx 0 10upx;
				.iconsousuo2 {
					z-index: 100;
					display: flex;
					align-items: center;
					position: absolute;
					top: 0;
					right: 0;
					width: 60upx;
					height: 60upx;
					font-size: $font-lg + 4upx;
					color: $font-color-dark;
				}
				input {
					width: 100%;
					padding-left: 28upx;
					height: 28upx;
					color: $font-color-base;
					font-size: 28upx;
				}
			}
		}
		/*screen*/
		.rf-header-screen {
			width: 100%;
			background: $color-white;
			position: fixed;
			z-index: 99;
			.rf-screen-top,
			.rf-screen-bottom {
				border: none;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 28upx;
				color: #333;
			}
			.rf-screen-top {
				height: 88upx;
				line-height: 88upx;
				position: relative;
				background: $color-white;
			}
			.rf-top-item {
				height: 28upx;
				line-height: 28upx;
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				.iconfont {
					font-size: $font-lg + 4upx;
					font-weight: 500;
				}
			}
			.rf-screen-bottom {
				height: 100upx;
				padding: 0 30upx;
				box-sizing: border-box;
				font-size: 24upx;
				align-items: center;
				overflow: hidden;
			}
			.rf-bottom-text {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			.rf-bottom-item {
				flex: 1;
				width: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 0 12upx;
				box-sizing: border-box;
				margin-right: 20upx;
				white-space: nowrap;
				height: 60upx;
				border-radius: 40upx;
			}
			.rf-bottom-item:last-child {
				margin-right: 0;
			}
			.rf-bold {
				font-weight: bold;
			}
			.rf-active {
				color: $base-color;
			}
			.rf-icon-ml .rf-icon-class {
				margin-left: 6upx;
			}
			.rf-ml {
				margin-left: 6upx;
			}
			.rf-seizeaseat-20 {
				height: 20upx;
			}
			.rf-seizeaseat-30 {
				height: 30upx;
			}
			.rf-icon-middle .rf-icon-class {
				vertical-align: middle;
			}
			.rf-middle {
				vertical-align: middle;
			}
		}
		/*screen*/
		.rf-btmItem-active {
			border-radius: 32upx;
			font-weight: bold;
			position: relative;
		}
		.rf-btmItem-normal {
			border: 1upx solid rgba(0, 0, 0, 0.12);
			position: relative;
		}
		.rf-btmItem-active::after {
			content: "";
			position: absolute;
			width: 100%;
			height: 100%;
			border-radius: 40upx;
			left: 0;
			top: 0;
		}
		.rf-btmItem-tap {
			position: relative;
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}
		.rf-btmItem-tap::after {
			content: "";
			position: absolute;
			width: 100%;
			height: 22upx;
			background: #f7f7f7;
			left: 0;
			top: 58upx;
		}
		.product-list-wrapper {
			/*#ifdef MP*/
			padding-top: 360rpx;
		  /*#endif*/
		}
	}
</style>
