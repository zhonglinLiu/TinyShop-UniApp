import lmd5 from './md5';
import conf from './conf'

function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}

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

function sign(params) {
  var s = sort_ascii(params);
  console.log(s);
  var secret = '6c95a00786a7c6a622ba06c4124cd373';
  var md5Str = lmd5.md5(secret + s + secret);
  return md5Str.toUpperCase();
}
/**按ascii码从小到大排序
 *
 * @param obj
 * @returns {string}
 */


function sort_ascii(obj) {
  let arr = new Array();
  let num = 0;

  for (let i in obj) {
    arr[num] = i;
    num++;
  }

  let sortArr = arr.sort(); //let sortObj = {};    //完成排序值

  let str = ''; //自定义排序字符串

  for (let i in sortArr) {
    str += sortArr[i] + obj[sortArr[i]];
  } //去除两侧字符串
  // let char = '&'
  // str = str.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');


  return str; //return sortObj;
}

Date.prototype.format = function (format) {
  /*
   * eg:format="YYYY-MM-dd hh:mm:ss";
     */
  var o = {
    "M+": this.getMonth() + 1,
    // month
    "d+": this.getDate(),
    // day
    "h+": this.getHours(),
    // hour
    "m+": this.getMinutes(),
    // minute
    "s+": this.getSeconds(),
    // second
    "q+": Math.floor((this.getMonth() + 3) / 3),
    // quarter
    "S": this.getMilliseconds() // millisecond

  };

  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }

  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }

  return format;
};

export default {
  formatTime: formatTime,
  BaseRequest: BaseRequest,
  BaseGetRequest: BaseGetRequest,
  BaseDodoRequest: BaseDodoRequest,
};