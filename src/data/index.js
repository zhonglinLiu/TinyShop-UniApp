

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
	{'id':1,'cover':'http://demo.rageframe.com/attachment/images/2020/10/22/image_1603328454_E2eurY68.jpg',
	'jump_type':'', 'jump_link':'', 'title':'新鲜蔬菜'}
]

var search = {
	'hot_search_default':'蔬菜',
	'hot_search_list': ["iphone", "小米", "华为", "面包机", "娃哈哈"],
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
