

function paddList(items, search_id) {
	var ress = []
	for (var i in items) {
		var res = {
			'plat': 'pdd',
			'cost_price':items[i].coupon_discount / 100,
			'id':items[i].goods_sign,
			'name':items[i].goods_name,
			'price':items[i].min_group_price / 100,
			'sketch':items[i].goods_desc,
			'total_sales':items[i].sales_tip,
			'picture': items[i].goods_image_url,
			'coupon_price': items[i].coupon_discount/100,
			'search_id': search_id,
		}
		for(var k in items[i]) {
			res[k] = items[i][k]
		}
		ress.push(res)
	}
	return ress
}

function pdd_mall_type(type) {
	if(type==1) {
		return '个人'
	} else if(type == 2) {
		return '企业'
	} else if(type == 3) {
		return '旗舰店'
	} else if(type == 4) {
		return '专卖店'
	} else if(type == 5) {
		return '专营店'
	} else if(type == 6)  {
		return '普通店'
	} else {
		return '未知'
	}
}
var pddServiceMap = {
	4:'送货入户并安装', 5:'送货入户', 6:'电子发票', 9:'坏果包赔', 11:'闪电退款', 12:'24小时发货',
	13:'48小时发货', 17:'顺丰包邮', 18:'只换不修', 19:'预约配送', 1000001:'正品发票', 1000002:'送货入户并安装'
}
function pddService(tags) {
	var res = []
	for(var k in tags) {
		if(pddServiceMap[tags[k]]) {
			res.push(pddServiceMap[tags[k]])
		}
	}
	return res
}
function pddDetail(item) {
	var price = (item.min_group_price - item.coupon_discount)/100
	var res = {
		'price': price,
		'palt': 'pdd',
		'pict_url': item.goods_image_url,
		'productId': item.good_id,
		'name': item.goods_name,
		'sketch': '',
		'shipping_type': 1,
		'point_exchange_type':'1',
		'total_sales': item.sales_tip,
		// 'address_name': item.provcity,
		'covers': item.goods_gallery_urls,
		'nick': item.mall_name,
		// 'provcity': item.provcity,
		// 'item_url': item.item_url,
		'picture':item.goods_image_url,
		'tags':pddService(item.service_tags),
		'attributeValue':[
			{'title':'平台', 'value':'拼多多'},
			{'title':'店铺名称', 'value':item.mall_name},
			{'title':'品牌', 'value':item.brand_name},
			{'title':'销量', 'value':item.sales_tip},
			{'title':'店铺类型', 'value':pdd_mall_type(item.merchant_type) },
			{'title':'服务分', 'value':item.serv_txt},
			],
		'base_attribute_format':[],
		'minSkuPrice':price,
		'maxSkuPrice': price,
		'market_price': item.min_group_price/100,
	}
	for(var k in item) {
		res[k] = item[k]
	}
	return res
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
	var attrs = [
		{'title':'平台', 'value':'淘宝'},
		{'title':'店铺名称', 'value':item.nick},
		{'title':'20天销量', 'value':item.volume},
		{'title':'是否加入消费者保障', 'value':item.is_prepay ? '是' : '否' },
	]
	if(item.level_one_category_name){
		attrs.push({'title':'商品类别', 'value':item.level_one_category_name})
	}
	var tags = []
	if(item.kuadian_promotion_info) {
		tags = [...tags, ...item.kuadian_promotion_info]
	}
	var res = {
		'price': item.zk_final_price,
		'name': item.title,
		'productId': item.item_id,
		'sketch': '',
		'shipping_type': item.free_shipment ? 1: 2,
		'point_exchange_type':'1',
		'total_sales': item.volume,
		'address_name': item.provcity,
		'covers': item.small_images.string,
		'nick': item.nick,
		'provcity': item.provcity,
		'tags':tags,
		'attributeValue':attrs,
		'base_attribute_format':[{'title':'颜色？','show_type':2}],
		'minSkuPrice':item.zk_final_price,
		'maxSkuPrice': item.zk_final_price,
		'market_price': item.zk_final_price,
		'picture': item.pict_url,
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
	} else if(item.coupon) {
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
	var url = res.coupon_share_url
	if(url.indexOf("https") == -1) {
		if(url.indexOf("http") != -1) {
			url = url.replace('http', 'https');
		} else {
			url = url.replace('//uland.', 'https://uland.'),
			url = url.replace('//s.click', 'https://s.click');
		}
	}
	res.coupon_share_url = url

	var url = res.picture
	if(url.indexOf("https") == -1) {
		if(url.indexOf("http") != -1) {
			url = url.replace('http', 'https');
		} else {
			url = url.replace('//img.', 'https://img.');
		}
	}
	res.picture = url
	console.log(res)
	return res
}

export default {
	taobaoList: taobaoList,
	taobaoDetail: taobaoDetail,
	paddList: paddList,
	pddDetail: pddDetail,
}
