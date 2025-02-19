

var cate = [
	{'cover':'https://liu-web-static.oss-cn-shanghai.aliyuncs.com/image/img/taobao.png','id':'taobao','title':'淘宝榜单'},
	{'cover':'https://liu-web-static.oss-cn-shanghai.aliyuncs.com/image/img/duoduo.png','id':'pdd','title':'拼多多榜单'},
	{'cover':'https://liu-web-static.oss-cn-shanghai.aliyuncs.com/image/img/jd.png','id':'jd','title':'京东榜单'},
	{'cover':'https://liu-web-static.oss-cn-shanghai.aliyuncs.com/image/img/wph.png','id':'wph','title':'唯品会'}
]
var announce = [
	{'cover':'url','id':1, 'title':'联系客服'},
	{'cover':'url','id':2, 'title':'关于网站'}
]

var banner_url = 'https://liu-web-static.oss-cn-shanghai.aliyuncs.com/image/banners/'
var top = [
	{'id':3,'cover':banner_url + 'TB1iwoaSBr0gK0jSZFnXXbRRXXa-800-450.png',
	'jump_type':'','jump_link':'https://s.click.taobao.com/LuXz4ju', 'title':'百亿补贴'},
	{'id':4,'cover':banner_url + 'O1CN01AoYcNo1sJG5XnNqIO_!!6000000005745-0-xtenhyfx.jpg',
	'jump_type':'','jump_link':'https://s.click.taobao.com/whBLwiu', 'title':'品牌快抢'},
	{'id':1,'cover':banner_url + '1ce9e919fb9c2e12685c08e7848a792d.jpg',
	'jump_type':'', 'jump_link':'https://p.pinduoduo.com/OK6aeTvD', 'title':'良品铺子超级品牌日'},
	{'id':2,'cover':banner_url + '0cf02d3c49ebfafee1582b9150e6c2ff.jpg',
	'jump_type':'','jump_link':'https://p.pinduoduo.com/4SxTYcs5', 'title':'拼多多万人团'}
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
					"<p>2021年05月30日： 本站1.0版本正式上线，支持查询淘宝、拼多多优惠信息 。</p>" +
					"<p>2021年06月03日： 增加14种主题色&修复若干bug。</p>" ,
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

var helpData = [
	{
			"id": "1",
			"title": "如何联系作者?",
			"pid": "0",
			"level": "1",
			"child": [
					{
							"id": "2",
							"title": "联系作者",
							"pid": "1",
							"level": "2",
							"child": []
					}
			]
	},
]

var helpDetal = {
	"2": {
		"id": 48,
		"member_id": 0,
		"merchant_id": 0,
		"title": "联系作者",
		"content": "<p style=\"text-align: left;\">1、邮箱联系：hi.life@qq.com</p><p style=\"text-align: left;\">2、微信联系：FreeNeverFree</p>",
		"sort": 990,
		"level": 2,
		"pid": 47,
		"tree": "tr_0 tr_47 ",
		"view": 0,
		"status": 1,
		"created_at": 1589965990,
		"updated_at": 1604556815
}
}

export default {
	home:home,
	notice_list:notice_list,
	notice_map: notice_map,
	helpData: helpData,
	helpDetal: helpDetal,
}
