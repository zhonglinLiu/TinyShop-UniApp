import lmd5 from './md5';
import conf from './conf'


function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
}

function BaseGetRequest(method, params, callback) {
  var stamp = new Date().format("yyyy-MM-dd hh:mm:ss");
  params['method'] = method;
  console.log(params);
  uni.request({
    url: conf.taobao_api,
    header: {
      'content-type': 'application/x-www-form-urlencoded; charset=utf-8',
	  'Access-Control-Allow-Methods':'GET,POST,PUT,POST',
    },
    method: 'GET',
    data: params,
    success: function (result) {
      callback(result);
    }
  });
}

function BaseRequest(method, params, callback) {
  var stamp = new Date().format("yyyy-MM-dd hh:mm:ss");
  params['method'] = method;
  console.log(params);
  uni.request({
    url: conf.taobao_api,
    header: {
      'content-type': 'application/x-www-form-urlencoded; charset=utf-8',
    },
    method: 'GET',
    data: params,
    success: function (result) {
      callback(result);
    }
  });
}

function BaseDodoRequest(method, params, callback) {
  params['type'] = method;
  params['p_id'] = '15049004_204443814'
  params['pid'] = '15049004_204443814'
  console.log(params);
  uni.request({
    url: conf.duo_api,
    header: {
      'content-type': 'application/x-www-form-urlencoded; charset=utf-8',
    },
    method: 'GET',
    data: params,
    success: function (result) {
      callback(result);
    }
  });
}

function GetPlatName(plat) {
	if(plat == 'pdd') {
		return '拼多多'
	} else if (plat == 'taobao') {
		return '淘宝'
	} else if (plat == 'jd') {
		return '京东'
	} else if (plat == 'wph') {
		return '唯品会'
	}
	return ''
}

export default {
  BaseRequest: BaseRequest,
  BaseGetRequest: BaseGetRequest,
  BaseDodoRequest: BaseDodoRequest,
	GetPlatName: GetPlatName,
};
