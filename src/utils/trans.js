
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
		for(var k in items[i]) {
			res[k] = items[i][k]
		}
		ress.push(res)
	}
	return ress
}

function taobaoDetail(item) {
	item.zk_final_price = parseFloat(item.zk_final_price)
	if(item.coupon) {
		item.category_name = item.coupon.cat_leaf_name
	}
	var res = {
		'price': item.zk_final_price,
		'pict_url': item.pict_url,
		'name': item.title,
		'sketch': '',
		'shipping_type': item.free_shipment ? 1: 2,
		'point_exchange_type':'1',
		'total_sales': item.volume,
		'address_name': item.provcity,
		'covers': item.small_images.string,
		'nick': item.nick,
		'provcity': item.provcity,
		'item_url': item.item_url,
		'picture':item.pict_url,
		'tags':["正品保障"],
		'attributeValue':[
			{'title':'平台', 'value':'淘宝'},
			{'title':'店铺名称', 'value':item.nick},
			{'title':'商品类别', 'value':item.category_name},
			{'title':'20天销量', 'value':item.volume},
			{'title':'是否加入消费者保障', 'value':item.is_prepay ? '是' : '否' },
			],
		'base_attribute_format':[{'title':'颜色？','show_type':2}],
		'minSkuPrice':item.zk_final_price,
		'maxSkuPrice': item.zk_final_price,
		'market_price': item.zk_final_price,
	}
	for(var k in item) {
		res[k] = item[k]
	}
	if (item.coupon) {
		for(var k in item.coupon) {
			res[k] = item.coupon[k]
		}
		res['coupon_share_url'] = item.coupon.coupon_click_url
	}

	if(item.coupon_amount) {
		res['price'] = (item.zk_final_price - item.coupon_amount).toFixed(2)
	} else {
		var match = item.coupon.coupon_info.match(/.*?减(\w+)元/);
		res['price'] = (item.zk_final_price - match[1]).toFixed(2)
	}

	res['minSkuPrice'] = res['price']
	res['maxSkuPrice'] = res['price']

	if (item.presale_discount_fee_text) {
		res['play_info'] = item.presale_discount_fee_text
	}
	if (item.coupon) {
		res['play_info'] = item.coupon.coupon_info
	}
	if(item.play_info) {
		res['play_info'] = item.play_info
	}
	if(item.kuadian_promotion_info) {
		res['kuadian_promotion_info'] = item.kuadian_promotion_info
	}
	console.log(res)
	return res
}

export default {
	duoduoList: duoduoList,
	taobaoList: taobaoList,
	taobaoDetail: taobaoDetail,
}
