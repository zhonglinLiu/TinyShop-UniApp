<template>
	<view class="rf-product-list">
		<view class="rf-product-list-container">
			<block v-for="(item, index) in list" :key="index">
				<!--商品列表-->
				<view
					v-if="(index + 1) % 2 !== 0 || isList"
					class="rf-product-item"
					@tap.stop="navTo(`${item.id}`)"
					:class="[isList ? 'rf-product-flex-list' : '']"
					hover-class="hover"
					:hover-start-time="150"
				>
					<view class="rf-product-image-wrapper">
						<image :src="item.picture" mode="widthFix" :preview="false" :class="[isList?'rf-product-list-img':'rf-product-img']" ></image>
						<text class="sketch in1line">{{ item.sketch }}</text>
						<view class="triangle-wrapper">
							<image class="triangle-tag" :src="item | filterTagName"></image>
						</view>
					</view>
					<view class="rf-pro-content">
						<view class="rf-pro-tit">{{ item.name }}</view>
						<view v-if="item">
							<view class="rf-pro-price">
								<text class="rf-sale-price" :class="'text-'+themeColor.name">{{ moneySymbol }}{{ item.price }}</text>
								<text class="rf-factory-price" v-if="item.market_price > item.price">{{ moneySymbol }}{{ item.market_price }}</text>
								<text class="saled">已售:<text :class="'text-'+themeColor.name">{{
										item.total_sales | filterTotalSales
									}}</text>
									</text
								>
							</view>
							<view class="coupon_price_txt">
								券￥ {{item.coupon_price}}
								<view class="coupon_price_txt_r1"></view>
								<view class="coupon_price_txt_r2"></view>
							</view>
						</view>
					</view>
				</view>
				<!--商品列表-->
			</block>
		</view>
		<view class="rf-product-list-container" v-if="!isList">
			<block v-for="(item, index) in list" :key="index">
				<!--商品列表-->
				<view
					v-if="(index + 1) % 2 === 0"
					class="rf-product-item"
					@tap.stop="navTo(`${item.id}`)"
					:product="item"
					:class="[isList ? 'rf-product-flex-list' : '']"
					hover-class="hover"
					:hover-start-time="150"
				>
					<view class="rf-product-image-wrapper">
						<image :src="item.picture" mode="widthFix" :preview="false" :class="[isList?'rf-product-list-img':'rf-product-img']" ></image>
						<text class="sketch in1line">{{ item.sketch }}</text>
						<view class="triangle-wrapper" v-if="item.shipping_type === '1' || item.is_virtual === '1' || item.commissionRate || item.is_open_presell === '1'">
							<image class="triangle-tag" :src="item | filterTagName"></image>
						</view>
					</view>
					<view class="rf-pro-content">
						<view class="rf-pro-tit">{{ item.name }}</view>
						<view v-if="item">
							<view class="rf-pro-price">
								<text class="rf-sale-price" :class="'text-'+themeColor.name">{{ moneySymbol }}{{ item.price }}</text>
								<text class="rf-factory-price" v-if="item.market_price > item.price">{{ moneySymbol }}{{ item.market_price }}</text>
								<text class="saled">已售:<text :class="'text-'+themeColor.name">{{
										item.total_sales | filterTotalSales
									}}</text>
									</text
								>
							</view>
							<view class="coupon_price_txt">
								券￥ {{item.coupon_price}}
								<view class="coupon_price_txt_r1"></view>
								<view class="coupon_price_txt_r2"></view>
							</view>
						</view>
					</view>
				</view>
				<!--商品列表-->
			</block>
		</view>

	</view>
</template>
<script>
/**
 * @des 商品列表
 *
 * @author stav stavyan@qq.com
 * @date 2020-05-15 10:49
 */
import { productDetail, cartItemCount, cartItemCreate } from '@/api/product';
import rfAttrContent from '@/components/rf-attr-content';
import $mAssetsPath from '@/config/assets.config';
import { mapMutations } from 'vuex';
export default {
	name: 'rfProductListCoup',
	props: {
		list: {
			type: Array,
			default() {
				return [];
			}
		},
		// 是否以列表展示 | 列表或大图
		isList: {
			type: Boolean,
			default: false
		},
		// 是否以列表展示 | 列表或大图
		bottom: {
			type: Number,
			default: 0
		}
	},
	components: {
		rfAttrContent
	},
	data() {
		return {
			specClass: 'none',
      moneySymbol: this.moneySymbol,
			productDetail: {}
		};
	},
	filters: {
		filterTotalSales(val) {
			if (val > 10000) {
				val = `${(val / 10000).toFixed(2)}w`;
			}
			return val;
		},
		filterTagName(val) {
			if (val.commissionRate) {
				// 分销商品
				return $mAssetsPath.distribution;
			} else if (val.is_virtual === '1') {
				// 虚拟产品
				return $mAssetsPath.virtual;
			} else if (val.shipping_type === '1') {
				// 包邮产品
				return $mAssetsPath.pinkage;
			}
		}
	},
	methods: {
    ...mapMutations(['setCartNum']),
		// 跳转详情
		navTo(id) {
			for(var k in this.list) {
				if(this.list[k].id == id) {
					uni.setStorageSync('product_id:' + id, this.list[k]);
				}
			}
			var route = '/pages/product/product?id='+id
			this.$mRouter.push({ route });
		},
		// 获取产品详情
		async getProductDetail(row) {
			await this.$http
				.get(`${productDetail}`, {
					id: row.id
				})
				.then(async r => {
					this.productDetail = await r.data;
					this.productDetail.sku_name = row.sku_name;
					this.specClass = 'show';
				});
		},
		stopPrevent() {},
		hideSpec() {
			this.specClass = 'hide';
			setTimeout(() => {
				this.specClass = 'none';
			}, 250);
		},
	}
};
</script>

<style>
.coupon_price_txt {
	width: 60px; height: 20px; color:#fff; font-size: 12px;
	background-color: red; text-align: center; border-radius: 4px;
	line-height: 20px; top:3px; position: relative;
}
.coupon_price_txt_r1 {
	position: absolute; width: 10px; height: 10px; top:5px; left:-5px;
	border-radius: 50%; background-color: #fff;
}
.coupon_price_txt_r2 {
	position: absolute; width: 10px; height: 10px; top:5px; right:-5px;
	border-radius: 50%; background-color: #fff;
}
.saled{
	font-size:10px;  text-align: center; margin-left:5px; color:#333
}
</style>
