
function duoduoList(coupon) {
	coupon.zk_final_price = coupon.min_normal_price
	coupon.coupon_amount = coupon.coupon_discount
	coupon.title = coupon.goods_name
	coupon.item_id = coupon.mall_id
	coupon.pict_url = coupon.goods_image_url
	coupon.item_description = coupon.goods_desc
	coupon.volume = coupon.sales_tip
	coupon.nick = coupon.mall_name
	coupon.small_images = coupon.goods_gallery_urls
	coupon.coupon_remain_count = coupon.coupon_remain_quantity
	return coupon
}

function taobaoList(items) {
	var ress = []
	for (var i in items) {
		var res = {
			'shipping_type':items[i].maochao_play_free_post_fee,
			'cost_price':items[i].coupon_amount,
			'id':items[i].item_id,
			'name':items[i].title,
			'price':items[i].zk_final_price,
			'sketch':items[i].item_description,
			'total_sales':items[i].volume,
			'picture': items[i].pict_url,
			'coupon_price': items[i].coupon_amount,
		}
		if (items[i].small_images && items[i].small_images.string) {
			res.images = items[i].small_images.string
		}
		ress.push(res)
	}
	return ress
}


export default {
	duoduoList: duoduoList,
	taobaoList: taobaoList,
}
