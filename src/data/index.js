

var cate = [
	{'cover':'https://liu-web-static.oss-cn-shanghai.aliyuncs.com/image/img/taobao.png','id':'taobao','title':'淘宝榜单'},
	{'cover':'https://liu-web-static.oss-cn-shanghai.aliyuncs.com/image/img/duoduo.png','id':'duoduo','title':'拼多多榜单'},
	{'cover':'https://liu-web-static.oss-cn-shanghai.aliyuncs.com/image/img/jd.png','id':'jd','title':'京东榜单'},
	{'cover':'https://liu-web-static.oss-cn-shanghai.aliyuncs.com/image/img/wph.png','id':'wph','title':'唯品会'},
	{'cover':'https://liu-web-static.oss-cn-shanghai.aliyuncs.com/image/img/ele.png','id':'ele','title':'饿了么外卖'}
]
var announce = [
	{'cover':'url','id':1, 'title':'联系客服'},
	{'cover':'url','id':2, 'title':'关于网站'}
]


var top = [
	{'id':1,'cover':'https://liu-web-static.oss-cn-shanghai.aliyuncs.com/image/banners/tiaomao618-banner.jpg',
	'jump_type':'', 'jump_link':'https://s.click.taobao.com/VRMn3nu', 'title':'天猫618'},
	{'id':2,'cover':'https://liu-web-static.oss-cn-shanghai.aliyuncs.com/image/banners/yiyuangou.jpg',
	'jump_type':'','jump_link':'https://s.click.taobao.com/2uIk3nu', 'title':'限量一元购'}
]

var search = {
	'hot_search_default':'蔬菜',
	'hot_search_list': ["外套", "T恤", "手链", "阿迪达斯", "耳机"],
}
var home = {
	'cate': cate,
	'announce': announce,
	'top': top,
	'search': search,
}

export default {
	home,
}
