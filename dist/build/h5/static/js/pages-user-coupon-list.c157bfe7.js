(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-coupon-list"],{"1af6":function(e,t,i){var n=i("63b6");n(n.S,"Array",{isArray:i("9003")})},"20fd":function(e,t,i){"use strict";var n=i("d9f6"),a=i("aebd");e.exports=function(e,t,i){t in e?n.f(e,t,a(0,i)):e[t]=i}},"251a":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"rf-load-more"},["loading"===e.status&&e.showIcon?i("v-uni-view",{staticClass:"rf-load-more__img"},[i("v-uni-view",{staticClass:"load1"},[i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}})],1),i("v-uni-view",{staticClass:"load2"},[i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}})],1),i("v-uni-view",{staticClass:"load3"},[i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}})],1)],1):e._e(),i("v-uni-view",{staticClass:"cu-load",class:"more"===e.status?"loading":"over"})],1)},r=[]},2954:function(e,t,i){"use strict";var n=i("7a61"),a=i.n(n);a.a},"353f":function(e,t,i){"use strict";i.r(t);var n=i("a59c"),a=i("f48e");for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"5a75a958",null,!1,n["a"],o);t["default"]=c.exports},"549b":function(e,t,i){"use strict";var n=i("d864"),a=i("63b6"),r=i("241e"),o=i("b0dc"),s=i("3702"),c=i("b447"),d=i("20fd"),u=i("7cd6");a(a.S+a.F*!i("4ee1")((function(e){Array.from(e)})),"Array",{from:function(e){var t,i,a,l,v=r(e),p="function"==typeof this?this:Array,f=arguments.length,m=f>1?arguments[1]:void 0,b=void 0!==m,h=0,y=u(v);if(b&&(m=n(m,f>2?arguments[2]:void 0,2)),void 0==y||p==Array&&s(y))for(t=c(v.length),i=new p(t);t>h;h++)d(i,h,b?m(v[h],h):v[h]);else for(l=y.call(v),i=new p;!(a=l.next()).done;h++)d(i,h,b?o(l,m,[a.value,h],!0):a.value);return i.length=h,i}})},"54a1":function(e,t,i){i("6c1c"),i("1654"),e.exports=i("95d5")},6872:function(e,t,i){"use strict";i.r(t);var n=i("9088"),a=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a},"75fc":function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return b}));var n=i("a745"),a=i.n(n);function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function o(e){if(a()(e))return r(e)}var s=i("774e"),c=i.n(s),d=i("c8bb"),u=i.n(d),l=i("67bb"),v=i.n(l);function p(e){if("undefined"!==typeof v.a&&u()(Object(e)))return c()(e)}function f(e,t){if(e){if("string"===typeof e)return r(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?c()(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?r(e,t):void 0}}function m(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function b(e){return o(e)||p(e)||f(e)||m()}},"774e":function(e,t,i){e.exports=i("d2d5")},"7a61":function(e,t,i){var n=i("b243");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("905bc9b0",n,!0,{sourceMap:!1,shadowMode:!1})},"7b50":function(e,t,i){"use strict";var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("75fc"));i("96cf");var r=n(i("3b8d")),o=i("802d"),s=n(i("f97d")),c=n(i("5028")),d={components:{rfLoadMore:s.default},data:function(){return{couponList:[],type:null,loadingType:"more",page:1,loading:!0,errorInfo:""}},filters:{time:function(e){return(0,c.default)(1e3*e).format("YYYY-MM-DD HH:mm")}},onLoad:function(e){this.type=e.type,this.initData()},onPullDownRefresh:function(){this.page=1,this.couponList.length=0,this.getCouponList("refresh")},onReachBottom:function(){this.page++,this.getCouponList()},methods:{initData:function(){this.getCouponList()},getCouponList:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(t){var i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("".concat(o.couponList),{page:this.page}).then((function(e){i.loading=!1,"refresh"===t&&uni.stopPullDownRefresh(),i.loadingType=10===e.data.length?"more":"nomore",i.couponList=[].concat((0,a.default)(i.couponList),(0,a.default)(e.data))})).catch((function(e){i.couponList.length=0,i.errorInfo=e,i.loading=!1,"refresh"===t&&uni.stopPullDownRefresh()}));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getCoupon:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(t){var i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.type){e.next=2;break}return e.abrupt("return");case 2:if(0!==parseInt(t.is_get,10)){e.next=5;break}return this.$mHelper.toast("该优惠券不可领取"),e.abrupt("return");case 5:return e.next=7,this.$http.post("".concat(o.couponReceive),{id:t.id}).then((function(){i.$mHelper.toast("领取成功"),i.loading=!0,i.page=1,i.couponList.length=0,i.getCouponList()}));case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}};t.default=d},"802d":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.orderProductIndex=t.orderCustomerRefundClose=t.orderCustomerRefundApply=t.orderCustomerSalesReturn=t.rechargeConfigIndex=t.thirdPartyAuthDelete=t.thirdPartyAuthList=t.opinionDetail=t.opinionCreate=t.opinionList=t.uploadImage=t.orderInvoiceList=t.invoiceDel=t.invoiceDefault=t.invoiceDetail=t.invoiceUpdate=t.invoiceCreate=t.invoiceList=t.evaluateAgain=t.evaluateCreate=t.creditsLogList=t.collectList=t.footPrintDel=t.footPrintList=t.couponReceive=t.orderTakeDelivery=t.orderDelete=t.orderDetail=t.orderProductSalesReturn=t.closeOrderRefundApply=t.orderRefundApply=t.orderList=t.couponDetail=t.couponClear=t.myCouponList=t.couponList=t.addressDelete=t.addressUpdate=t.addressDetail=t.addressDefault=t.addressCreate=t.addressList=t.memberUpdate=t.memberInfo=void 0;var n="/tiny-shop/v1/member/member/index";t.memberInfo=n;var a="/tiny-shop/v1/member/member/update";t.memberUpdate=a;var r="/tiny-shop/v1/member/address/index";t.addressList=r;var o="/tiny-shop/v1/member/address/default";t.addressDefault=o;var s="/tiny-shop/v1/member/address/view";t.addressDetail=s;var c="/tiny-shop/v1/member/address/create";t.addressCreate=c;var d="/tiny-shop/v1/member/address/update";t.addressUpdate=d;var u="/tiny-shop/v1/member/address/delete";t.addressDelete=u;var l="/tiny-shop/v1/marketing/coupon-type/index";t.couponList=l;var v="/tiny-shop/v1/member/coupon/index";t.myCouponList=v;var p="/tiny-shop/v1/marketing/coupon-type/view";t.couponDetail=p;var f="/tiny-shop/v1/marketing/coupon-type/create";t.couponReceive=f;var m="/tiny-shop/v1/member/coupon/clear";t.couponClear=m;var b="/tiny-shop/v1/member/order/index";t.orderList=b;var h="/tiny-shop/v1/member/order/take-delivery";t.orderTakeDelivery=h;var y="/tiny-shop/v1/member/order-product/refund-apply";t.orderRefundApply=y;var g="/tiny-shop/v1/member/order-product/refund-sales-return";t.orderProductSalesReturn=g;var w="/tiny-shop/v1/member/order-product/refund-close";t.closeOrderRefundApply=w;var x="/tiny-shop/v1/member/order/view";t.orderDetail=x;var _="/tiny-shop/v1/member/order/delete";t.orderDelete=_;var k="/tiny-shop/v1/member/footprint/index";t.footPrintList=k;var C="/tiny-shop/v1/member/footprint/delete";t.footPrintDel=C;var L="/tiny-shop/v1/member/collect/index";t.collectList=L;var D="/tiny-shop/v1/member/credits-log/index";t.creditsLogList=D;var A="/tiny-shop/v1/member/evaluate/create";t.evaluateCreate=A;var I="/tiny-shop/v1/member/evaluate/again";t.evaluateAgain=I;var R="/tiny-shop/v1/member/order-product/index";t.orderProductIndex=R;var P="/tiny-shop/v1/member/invoice/index";t.invoiceList=P;var j="/tiny-shop/v1/member/invoice/create";t.invoiceCreate=j;var O="/tiny-shop/v1/member/invoice/update";t.invoiceUpdate=O;var S="/tiny-shop/v1/member/invoice/view";t.invoiceDetail=S;var M="/tiny-shop/v1/member/invoice/default";t.invoiceDefault=M;var $="/tiny-shop/v1/member/invoice/delete";t.invoiceDel=$;var T="/tiny-shop/v1/member/order-invoice/index";t.orderInvoiceList=T;var U="/tiny-shop/v1/member/opinion/index";t.opinionList=U;var E="/tiny-shop/v1/member/opinion/create";t.opinionCreate=E;var H="/tiny-shop/v1/member/opinion/view";t.opinionDetail=H;var Y="/tiny-shop/v1/member/auth/index";t.thirdPartyAuthList=Y;var z="/tiny-shop/v1/member/auth/delete";t.thirdPartyAuthDelete=z;var B="/tiny-shop/v1/member/recharge-config/index";t.rechargeConfigIndex=B;var J="/tiny-shop/v1/member/order-customer/apply";t.orderCustomerRefundApply=J;var F="/tiny-shop/v1/member/order-customer/sales-return";t.orderCustomerSalesReturn=F;var q="/tiny-shop/v1/member/order-customer/close";t.orderCustomerRefundClose=q;var G="/tiny-shop/v1/common/file/images";t.uploadImage=G},9088:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"rf-load-more",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{}}}},data:function(){return{}}};t.default=n},"95d5":function(e,t,i){var n=i("40c3"),a=i("5168")("iterator"),r=i("481b");e.exports=i("584a").isIterable=function(e){var t=Object(e);return void 0!==t[a]||"@@iterator"in t||r.hasOwnProperty(n(t))}},a59c:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}));var n={"rf-load-more":i("f97d").default,"rf-loading":i("a7c6").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"coupon-center"},[i("v-uni-view",{staticClass:"coupon-list"},[i("v-uni-view",{staticClass:"sub-list valid"},e._l(e.couponList,(function(t,n){return i("v-uni-view",{key:n,staticClass:"row",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.getCoupon(t)}}},[i("v-uni-view",{staticClass:"carrier"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-view",[i("v-uni-text",{staticClass:"cell-icon"},[e._v(e._s(2===parseInt(t.range_type,10)?"限":"全"))]),i("v-uni-text",{staticClass:"cell-title"},[e._v(e._s(t.title))])],1),i("v-uni-view",[t.money?i("v-uni-text",{staticClass:"price"},[e._v(e._s(t.money))]):i("v-uni-text",{staticClass:"price-discount"},[e._v(e._s(t.discount+"折"))])],1)],1),i("v-uni-view",{staticClass:"term"},[i("v-uni-text",[e._v(e._s(e._f("time")(t.start_time))+" ~ "+e._s(e._f("time")(t.end_time)))]),i("v-uni-text",{staticClass:"at_least"},[e._v("满"+e._s(t.at_least)+"可用")])],1),i("v-uni-view",{staticClass:"usage"},[i("v-uni-text",[e._v(e._s(2===parseInt(t.range_type,10)?"部分产品使用":"全场产品使用"))]),i("v-uni-view",[e._v(e._s(0===parseInt(t.max_fetch,10)?"不限":"每人限领"+t.max_fetch)+"\n                已领"+e._s(t.get_count)),t.percentage?i("v-uni-text",{staticClass:"last"},[e._v("剩余"+e._s(t.percentage)+"%")]):e._e()],1)],1)],1)],1)})),1),e.couponList.length>0?i("rf-load-more",{attrs:{status:e.loadingType}}):e._e()],1),0!==e.couponList.length||e.loading?e._e():i("rf-empty",{attrs:{info:e.errorInfo||"暂无优惠券"}}),e.loading?i("rf-loading"):e._e()],1)},r=[]},a745:function(e,t,i){e.exports=i("f410")},b243:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".rf-load-more[data-v-43c5bcea]{width:100vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center\n\t/*position: fixed;*/\n\t/*bottom: 5upx;*/\n\t/*text-align: center;*/}.rf-load-more__text[data-v-43c5bcea]{font-size:%?28?%;color:#999}.rf-load-more__img[data-v-43c5bcea]{height:24px;width:24px;margin-right:10px}.rf-load-more__img>uni-view[data-v-43c5bcea]{position:absolute}.rf-load-more__img>uni-view uni-view[data-v-43c5bcea]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-43c5bcea 1.56s ease infinite;animation:load-data-v-43c5bcea 1.56s ease infinite}.rf-load-more__img>uni-view uni-view[data-v-43c5bcea]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.rf-load-more__img>uni-view uni-view[data-v-43c5bcea]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.rf-load-more__img>uni-view uni-view[data-v-43c5bcea]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.rf-load-more__img>uni-view uni-view[data-v-43c5bcea]:nth-child(4){top:11px;left:0}.load1[data-v-43c5bcea],\n.load2[data-v-43c5bcea],\n.load3[data-v-43c5bcea]{height:24px;width:24px}.load2[data-v-43c5bcea]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-43c5bcea]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-43c5bcea]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-43c5bcea]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-43c5bcea]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-43c5bcea]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-43c5bcea]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-43c5bcea]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-43c5bcea]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-43c5bcea]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-43c5bcea]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-43c5bcea]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-43c5bcea]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-43c5bcea]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-43c5bcea{0%{opacity:1}100%{opacity:.2}}",""]),e.exports=t},c8bb:function(e,t,i){e.exports=i("54a1")},d2d5:function(e,t,i){i("1654"),i("549b"),e.exports=i("584a").Array.from},f410:function(e,t,i){i("1af6"),e.exports=i("584a").Array.isArray},f48e:function(e,t,i){"use strict";i.r(t);var n=i("7b50"),a=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a},f97d:function(e,t,i){"use strict";i.r(t);var n=i("251a"),a=i("6872");for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("2954");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"43c5bcea",null,!1,n["a"],o);t["default"]=c.exports}}]);