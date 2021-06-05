const CONFIG = {
    // 开发环境配置
    development: {
        assetsPath: '/static', // 静态资源路径
				baseUrl: 'https://mango.wehere.top', // 后台接口请求地址
				hostUrl: 'https://liu-web-static.oss-cn-shanghai.aliyuncs.com', // H5地址(前端运行地址)
        websocketUrl: '', // websocket服务端地址
        weixinAppId: 'wxf6f94242e1692fe4' // 微信公众号appid
    },
    // 生产环境配置
    production: {
        assetsPath: '/static', // 静态资源路径
        baseUrl: 'https://mango.wehere.top', // 后台接口请求地址
        hostUrl: 'https://liu-web-static.oss-cn-shanghai.aliyuncs.com', // H5地址(前端运行地址)
        websocketUrl: '', // websocket服务端地址
        weixinAppId: '' // 微信公众号appid
    }

};
export default CONFIG[process.env.NODE_ENV];
