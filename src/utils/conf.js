var taobaoCate = [
	{child:[], 'id':3756, 'title':'综合'},
	{child:[], 'id':3767, 'title':'女装'},
	{child:[], 'id':3758, 'title':'家居家装'},
	{child:[], 'id':3759, 'title':'数码家电'},
	{child:[], 'id':3762, 'title':'鞋包配饰'},
	{child:[], 'id':3763, 'title':'美妆个护'},
	{child:[], 'id':3764, 'title':'男装'},
	{child:[], 'id':3765, 'title':'内衣'},
	{child:[], 'id':3760, 'title':'母婴'},
	{child:[], 'id':3761, 'title':'食品'},
	{child:[], 'id':3766, 'title':'运动户外'},
]
var taobaoBrandCate = [
	{child:[], 'id':3786, 'title':'综合'},
	{child:[], 'id':3788, 'title':'女装'},
	{child:[], 'id':3792, 'title':'家居家装'},
	{child:[], 'id':3793, 'title':'数码家电'},
	{child:[], 'id':3796, 'title':'鞋包配饰'},
	{child:[], 'id':3794, 'title':'美妆个护'},
	{child:[], 'id':3790, 'title':'男装'},
	{child:[], 'id':3787, 'title':'内衣'},
	{child:[], 'id':3789, 'title':'母婴'},
	{child:[], 'id':3791, 'title':'食品'},
	{child:[], 'id':3795, 'title':'运动户外'},
]
var taobaoRealCate = [
	{child:[], 'id':'16', 'title':'女装'},
	{child:[], 'id':'1625', 'title':'内衣'},
	{child:[], 'id':'50020808', 'title':'家居'},
	{child:[], 'id':'50006843,50012029', 'title':'女鞋'},
	{child:[], 'id':'50011740,50012029', 'title':'男鞋'},
	{child:[], 'id':'50006842', 'title':'箱包'},
	{child:[], 'id':'50014812,50025705,50008165,25', 'title':'母婴/童装/玩具'},
	{child:[], 'id':'30,50011699,50013886,50510002', 'title':'男装/户外运动'},
	{child:[], 'id':'50010788,50010728,122928002', 'title':'美妆/个护'},
	{child:[], 'id':'1512,14,50011972', 'title':'手机/数码'},
	{child:[], 'id':'50012082,50011972,50012082,50022703', 'title':'家电'},
	{child:[], 'id':'50002766', 'title':'零食'},
	{child:[], 'id':'50050359', 'title':'生鲜'},
	{child:[], 'id':'50007216', 'title':'鲜花'},
	{child:[], 'id':'33', 'title':'图书'},
]

var pddCate = [
	{child:[], 'id':'4', 'title':'秒杀'},
	{child:[], 'id':'7', 'title':'百亿补贴'},
	{child:[], 'id':'10851', 'title':'千万补贴'},
	{child:[], 'id':'10911', 'title':'一元购商品'},
	{child:[], 'id':'31', 'title':'品牌黑标'},
	{child:[], 'id':'10564', 'title':'精选爆品'},
]

var cate_base_url = "https://liu-web-static.oss-cn-shanghai.aliyuncs.com/image/cate/";

var pddRealCate = [
	{id: "1", title: "服装", pid: "0", cover: null, level: "1", child: [
		{id: "239", title: "男装", pid: "1", cover: null, level: "2", child: [
			{id: "245", title: "衬衫", pid: "239", cover: cate_base_url + '%E8%A1%AC%E8%A1%AB.png', level: "3", child: []},
			{id: "246", title: "T恤", pid: "239", cover: cate_base_url + 'T%E6%81%A4.png', level: "3", child: []},
			{id: "248", title: "针织衫/毛衣", pid: "239", cover: cate_base_url + '%E6%AF%9B%E8%A1%A3.png', level: "3", child: []},
			{id: "7282", title: "风衣", pid: "239", cover: null, level: "3", child: []},
			{id: "7283", title: "夹克", pid: "239", cover: null, level: "3", child: []},
			{id: "7284", title: "棉裤", pid: "239", cover: null, level: "3", child: []},
			{id: "7289", title: "牛仔裤", pid: "239", cover: null, level: "3", child: []},
			{id: "7294", title: "卫衣", pid: "239", cover: null, level: "3", child: []},
			{id: "7295", title: "休闲裤", pid: "239", cover: null, level: "3", child: []},
			{id: "7296", title: "西服/西裤", pid: "239", cover: null, level: "3", child: []},
		]},
		{id: "8439", title: "女装", pid: "1", cover: null, level: "2", child: [
			{id: "8440", title: "T恤", pid: "8439", cover: cate_base_url + 'T%E6%81%A4.png', level: "3", child: []},
			{id: "8441", title: "半身裙", pid: "8439", cover: cate_base_url + '%E5%8D%8A%E8%BA%AB%E8%A3%99.png', level: "3", child: []},
			{id: "8443", title: "衬衫", pid: "8439", cover: cate_base_url + '%E8%A1%AC%E8%A1%AB.png', level: "3", child: []},
			{id: "8442", title: "背心吊带", pid: "8439", cover: cate_base_url + '%E5%90%8A%E5%B8%A6.png', level: "3", child: []},
			{id: "8447", title: "裤子", pid: "8439", cover: null, level: "3", child: []},
			{id: "8449", title: "连衣裙", pid: "8439", cover: cate_base_url + '%E8%BF%9E%E8%A1%A3%E8%A3%99.png', level: "3", child: []},
			{id: "8452", title: "针织衫/毛衣", pid: "8439", cover: cate_base_url + '%E6%AF%9B%E8%A1%A3.png', level: "3", child: []},
			{id: "8453", title: "棉衣/棉服", pid: "8439", cover: null, level: "3", child: []},
			{id: "8455", title: "牛仔裤", pid: "8439", cover: null, level: "3", child: []},
			{id: "8460", title: "卫衣/绒衫", pid: "8439", cover: null, level: "3", child: []},
			{id: "8461", title: "西装", pid: "8439", cover: null, level: "3", child: []},
		]},
		{id: "8538", title: "鞋包", pid: "1", cover: null, level: "2", child: [
			{id: "11787", title: "鞋/休闲鞋", pid: "11688", cover: null, level: "2", child: []},
			{id: "11788", title: "帆布鞋", pid: "11688", cover: null, level: "3", child: []},
			{id: "11789", title: "篮球鞋", pid: "11688", cover: null, level: "3", child: []},
			{id: "11790", title: "跑步鞋", pid: "11688", cover: null, level: "3", child: []},
			{id: "11793", title: "凉鞋", pid: "11688", cover: null, level: "3", child: []},
			{id: "11795", title: "综合训练鞋", pid: "11688", cover: null, level: "3", child: []},
		]},

		{id: "8583", title: "内衣裤袜", pid: "1", cover: null, level: "2", child: [
			{id: "8599", title: "睡衣", pid: "8583", cover: null, level: "2", child: []},
			{id: "8598", title: "睡裙", pid: "8583", cover: null, level: "2", child: []},
			{id: "8584", title: "保暖裤", pid: "8583", cover: null, level: "2", child: []},
			{id: "8585", title: "保暖上装", pid: "8583", cover: null, level: "2", child: []},
			{id: "8606", title: "丝袜/打底裤袜", pid: "8583", cover: null, level: "2", child: []},
			{id: "8589", title: "吊带/T恤", pid: "8583", cover: null, level: "2", child: []},
			{id: "8594", title: "内裤", pid: "8583", cover: null, level: "2", child: []},
		]},
	]},
	{id: "2", title: "家居", pid: "0", cover: null, level: "1", child: [
		{id: "9316", title: "家居饰品", pid: "2", cover: null, level: "1", child: [

		]},
		{id: "16989", title: "居家日用", pid: "2", cover: null, level: "1", child: [

		]},
		{id: "16794", title: "收纳整理", pid: "2", cover: null, level: "1", child: [

		]},
		{id: "17285", title: "纸品", pid: "2", cover: null, level: "1", child: [

		]},
		{id: "17412", title: "饰品", pid: "2", cover: null, level: "1", child: [

		]},
	]},
	{id: "3", title: "数码/电器", pid: "0", cover: null, level: "1", child: [
		{id: "2933", title: "数码配件", pid: "3", cover: null, level: "1", child: [

		]},
		{id: "6128", title: "生活电器", pid: "3", cover: null, level: "1", child: [

		]},
		{id: "5834", title: "手机", pid: "3", cover: null, level: "1", child: [

		]},
	]},
	{id: "4", title: "食品", pid: "0", cover: null, level: "1", child: [
		{id: "6398", title: "零食/坚果/特产", pid: "4", cover: null, level: "1", child: [

		]},
		{id: "8172", title: "水产肉类/新鲜蔬果", pid: "4", cover: null, level: "1", child: [

		]},
	]},
	{id: "5", title: "美装", pid: "0", cover: null, level: "1", child: [
		{id: "18482", title: "香水/美妆", pid: "5", cover: null, level: "1", child: [

		]},
		{id: "18574", title: "美容美体仪器", pid: "5", cover: null, level: "1", child: [

		]},
		{id: "18601", title: "美发护发/假发", pid: "5", cover: null, level: "1", child: [

		]},
		{id: "18637", title: "美容护肤/精油", pid: "5", cover: null, level: "1", child: [

		]},
	]},
	{id: "6", title: "母婴", pid: "0", cover: null, level: "1", child: [
		{id: "15356", title: "孕产妇用品", pid: "6", cover: null, level: "1", child: [

		]},
		{id: "14740", title: "婴童用品", pid: "6", cover: null, level: "1", child: [

		]},
		{id: "14933", title: "童鞋/亲子鞋", pid: "6", cover: null, level: "1", child: [

		]},
		{id: "15083", title: "玩具", pid: "6", cover: null, level: "1", child: [

		]},
	]},
	{id: "7", title: "运动", pid: "0", cover: null, level: "1", child: [
		{id: "11685", title: "运动/健身/球类", pid: "7", cover: null, level: "1", child: [

		]},
		{id: "11686", title: "运动包/配件", pid: "7", cover: null, level: "1", child: [

		]},
		{id: "11687", title: "运动服/休闲服", pid: "7", cover: null, level: "1", child: [

		]},
		{id: "11688", title: "运动鞋", pid: "7", cover: null, level: "1", child: [

		]},
	]},
]
var searchDropdownList = [{
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
}]

var platSelectCondition = [{
	name: '淘宝',
	selectedName: '淘宝',
	isActive: true,
	params: {'plat':'taobao'},
	list: []
},{
	name: '拼多多',
	selectedName: '拼多多',
	isActive: false,
	params: {'plat':'pdd'},
	list: []
},{
	name: '京东',
	selectedName: '京东',
	isActive: false,
	params: {'plat':'jd'},
	list: []
},{
	name: '唯品会',
	selectedName: '唯品会',
	isActive: false,
	params: {'plat':'wph'},
	list: []
}]
var selectCondition = [
	{
		name: "全部",
		selectedName: "全部",
		isActive: true,
		params: {},
		list: []
	}, {
	name: "优惠券",
	selectedName: "优惠券",
	isActive: false,
	params: { has_coupon: 1 },
	list: []
}, {
	name: "包邮",
	selectedName: "包邮",
	isActive: false,
	params: { need_free_shipment: 1 },
	list: []
}
]

var allCate = '16,30,50020808,50012029,50006842,14'
var domain = 'https://mango.wehere.top'
// var domain = 'http://127.0.0.1:9015'
export default {
	http_host : 'http://liu-web-static.oss-cn-shanghai.aliyuncs.com',
	taobao_api:domain + '/api/taobaoke/openapi',
  taobao_transfor: domain + '/api/taobaoke/transfor',
	tkl_api: domain + '/api/taobaoke/tkl',
	duo_api:domain + '/api/duoduo/query',
	duo_cat_api:domain + '/api/duoduo/cate',
  page_size: 20,
	taobaoCate: taobaoCate,
	taobaoBrandCate:taobaoBrandCate,
	taobaoRealCate: taobaoRealCate,
	allCate: allCate,
	selectCondition: selectCondition,
	platSelectCondition: platSelectCondition,
	pddCate:pddCate,
	pddRealCate: pddRealCate,
	searchDropdownList: searchDropdownList,
};
