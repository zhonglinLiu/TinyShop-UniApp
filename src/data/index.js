

var cate = [
	{'cover':'https://liu-web-static.oss-cn-shanghai.aliyuncs.com/image/img/taobao.png','id':'taobao','title':'淘宝榜单'},
	{'cover':'https://liu-web-static.oss-cn-shanghai.aliyuncs.com/image/img/duoduo.png','id':'pdd','title':'拼多多榜单'},
	{'cover':'https://liu-web-static.oss-cn-shanghai.aliyuncs.com/image/img/jd.png','id':'jd','title':'京东榜单'},
	{'cover':'https://liu-web-static.oss-cn-shanghai.aliyuncs.com/image/img/wph.png','id':'wph','title':'唯品会'},
	{'cover':'https://liu-web-static.oss-cn-shanghai.aliyuncs.com/image/img/ele.png','id':'ele','title':'饿了么外卖'}
]
var announce = [
	{'cover':'url','id':1, 'title':'联系客服'},
	{'cover':'url','id':2, 'title':'关于网站'}
]

var banner_url = 'https://liu-web-static.oss-cn-shanghai.aliyuncs.com/image/banners/'
var top = [
	{'id':1,'cover':banner_url + 'tiaomao618-banner.jpg',
	'jump_type':'', 'jump_link':'https://s.click.taobao.com/VRMn3nu', 'title':'天猫618'},
	{'id':2,'cover':banner_url + 'yiyuangou.jpg',
	'jump_type':'','jump_link':'https://s.click.taobao.com/2uIk3nu', 'title':'限量一元购'},
	{'id':3,'cover':banner_url + 'duoduo-qianwanbutie.jpg',
	'jump_type':'','jump_link':'https://p.pinduoduo.com/WjAFubZf', 'title':'千万补贴 百万爆款'},
	{'id':4,'cover':banner_url + 'duoduo-huili.jpg',
	'jump_type':'','jump_link':'https://p.pinduoduo.com/AgmFuWWC', 'title':'回力多多品牌日'}
]

var search = {
	'hot_search_default':'故宫联名手链',
	'hot_search_list': ["外套", "T恤", "手链", "阿迪达斯", "耳机"],
}
var home = {
	'cate': cate,
	'announce': announce,
	'top': top,
	'search': search,
}

var notice_list = [
	{
			"id": 1,
			"title": "关于作者",
			"cover": "",
			"synopsis": "",
			"view": "0",
			"created_at": "1622387714"
	},
	{
			"id": 2,
			"title": "关于本站",
			"cover": "",
			"synopsis": "",
			"view": "0",
			"created_at": "1622387714"
	},
]

var notice_map = {
	1: {
        "id": 1,
        "title": "关于作者",
        "merchant_id": 0,
        "content": "<p>本站作者是一个热爱生活，热爱购物的90后软件攻城狮。对本站有任何建议都可以发到作者邮箱<a href=mailto:hi.life@qq.com>hi.life@qq.com</a>，您的反馈和建议是作者开发维护本站的动力。</p>",
        "cover": "",
        "synopsis": "今天消息是这样",
        "type": 1,
        "target_id": 0,
        "target_type": "",
        "target_display": 1,
        "action": "",
        "view": 0,
        "sender_id": 2,
        "sender_display": 1,
        "sender_withdraw": 1,
        "params": null,
        "status": 1,
        "created_at": 1622387714,
        "updated_at": 1622387714
    },
	2: {
        "id": 2,
        "title": "关于本站",
        "merchant_id": 0,
        "content": "<p>本站是一个聚合了淘宝、拼多多、唯品会、京东等购物平台优惠信息的网站。开发此站的目的是希望大家都能更省钱的买到更好的东西。</p></br>" +
					"<p>2021年5月30日： 本站1.0版本正式上线，支持查询淘宝、拼多多优惠信息 。</p>",
        "cover": "",
        "synopsis": "今天消息是这样",
        "type": 1,
        "target_id": 0,
        "target_type": "",
        "target_display": 1,
        "action": "",
        "view": 0,
        "sender_id": 2,
        "sender_display": 1,
        "sender_withdraw": 1,
        "params": null,
        "status": 1,
        "created_at": 1622387714,
        "updated_at": 1622387714
    }
}

export default {
	home:home,
	notice_list:notice_list,
	notice_map: notice_map
}
