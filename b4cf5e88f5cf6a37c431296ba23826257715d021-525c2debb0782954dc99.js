(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"I+Px":function(t,e,r){"use strict";r("hBi6"),Object.defineProperty(e,"__esModule",{value:!0});var n=r("mXGw"),o=r("wq9Z");e.default=function(t,e,r){if(!o.isClient)return[e,function(){}];var i=r?r.raw?String:r.serializer:JSON.stringify,a=r?r.raw?String:r.deserializer:JSON.parse,c=n.useState((function(){try{var r=localStorage.getItem(t);return null!==r?a(r):(e&&localStorage.setItem(t,i(e)),e)}catch(c){return e}})),u=c[0],s=c[1];return n.useEffect((function(){try{localStorage.setItem(t,i(u))}catch(c){}}),[u]),[u,s]}},NthX:function(t,e,r){t.exports=r("wcNg")},Q6xh:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"gatsbyStorefrontConfig":{"locales":"en-UK","currency":"GBP"}}}}}')},XQVo:function(t,e,r){var n=r("koL8"),o=r("rj77").onFreeze;r("qtmR")("freeze",(function(t){return function(e){return t&&n(e)?t(o(e)):e}}))},hSTY:function(t,e,r){"use strict";function n(t,e,r){return new Intl.NumberFormat(e,{style:"currency",currency:r}).format(t)}r.d(e,"a",(function(){return n}))},"oQQ/":function(t,e,r){"use strict";r("1c7q");var n=r("mXGw"),o=r.n(n),i=r("St9t");e.a=function(t){return o.a.createElement(i.d,Object.assign({},t,{justifyContent:"center"}),o.a.createElement("svg",{width:t.width?t.width:"100%",height:t.height?t.height:"100%","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"image",className:"svg-inline--fa fa-image fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o.a.createElement("path",{fill:"currentColor",d:"M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"})))}},pnIP:function(t,e,r){"use strict";r("dtV+"),r("Fdmb");var n=r("NthX"),o=r.n(n),i=(r("wcNg"),r("mXGw")),a=r("T82d"),c=r.n(a),u=r("I+Px"),s=r.n(u);function f(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){f(i,n,o,a,c,"next",t)}function c(t){f(i,n,o,a,c,"throw",t)}a(void 0)}))}}function h(){return c.a.buildClient({domain:"archilton-testing.myshopify.com",storefrontAccessToken:"c937a9d7fe74ab3da92cddd60cd47a11"})}var p="set_loading",d="set_checkout";function y(t,e){switch(e.type){case p:return{loaded:!1};case d:var r=e.payload,n=r.lineItems,o=void 0===n?[]:n,i=r.subtotalPrice,a=void 0===i?0:i,c=r.webUrl;return{lineItems:o,subtotalPrice:a,webUrl:void 0===c?"":c,loaded:!0};default:throw new Error("Action of type "+e.type+" does not exist.")}}e.a=function(){var t=Object(i.useMemo)((function(){return h()}),[h]),e=s()("shopifyCheckout",""),r=e[0],n=e[1],a=Object(i.useReducer)(y,{loaded:!1,subtotalPrice:0,lineItems:[],webUrl:""}),c=a[0],u=a[1];function f(){return(f=l(o.a.mark((function e(n){var i,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.variantId,a=n.quantity,e.next=3,t.checkout.addLineItems(r,[{variantId:i,quantity:a}]);case 3:c=e.sent,u({type:d,payload:c});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=l(o.a.mark((function e(n){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.checkout.removeLineItems(r,[n]);case 2:i=e.sent,u({type:d,payload:i});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=l(o.a.mark((function e(n){var i,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.id,a=n.quantity,e.next=3,t.checkout.updateLineItems(r,[{id:i,quantity:a}]);case 3:c=e.sent,u({type:d,payload:c});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.useEffect)((function(){function e(){return i.apply(this,arguments)}function i(){return(i=l(o.a.mark((function e(){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.checkout.create();case 2:return r=e.sent,n(r.id),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return(a=l(o.a.mark((function n(){var i;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=null,""!==r){n.next=5;break}i=e(),n.next=9;break;case 5:return n.next=7,t.checkout.fetch(r);case 7:null===(i=n.sent)&&(i=e());case 9:u({type:d,payload:i});case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}t&&t.checkout&&function(){a.apply(this,arguments)}()}),[r,n,t]),{addItem:function(t){return f.apply(this,arguments)},removeItem:function(t){return v.apply(this,arguments)},resetCart:function(){n(""),u({type:p})},updateItem:function(t){return g.apply(this,arguments)},checkout:c}}},uLh5:function(t,e,r){"use strict";r("abGl"),r("gZHo"),r("Ir+3"),r("Eb4t"),r("Yp4Z"),r("Fdmb"),r("BPsD"),r("8sWk"),r("apM1"),t.exports=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;var n,o,i;if(Array.isArray(e)){if((n=e.length)!=r.length)return!1;for(o=n;0!=o--;)if(!t(e[o],r[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((n=(i=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,i[o]))return!1;for(o=n;0!=o--;){var a=i[o];if(("_owner"!==a||!e.$$typeof)&&!t(e[a],r[a]))return!1}return!0}return e!=e&&r!=r}},wcNg:function(t,e,r){r("abGl"),r("gZHo"),r("Eb4t"),r("Yp4Z"),r("dtV+"),r("Fdmb"),r("iTLF"),r("jr56"),r("Tw+y"),r("EH6R"),r("IYjZ"),r("yvkl");var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=w(a,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var f=u(t,e,r);if("normal"===f.type){if(n=r.done?"completed":"suspendedYield",f.arg===s)continue;return{value:f.arg,done:r.done}}"throw"===f.type&&(n="completed",r.method="throw",r.arg=f.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var s={};function f(){}function l(){}function h(){}var p={};p[o]=function(){return this};var d=Object.getPrototypeOf,y=d&&d(d(E([])));y&&y!==e&&r.call(y,o)&&(p=y);var v=h.prototype=f.prototype=Object.create(p);function g(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function m(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return l.prototype=v.constructor=h,h.constructor=l,h[a]=l.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===l||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},g(m.prototype),m.prototype[i]=function(){return this},t.AsyncIterator=m,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new m(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(v),v[a]="Generator",v[o]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},wq9Z:function(t,e,r){"use strict";r("hBi6"),Object.defineProperty(e,"__esModule",{value:!0}),e.isClient="object"==typeof window,e.on=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return t.addEventListener.apply(t,e)},e.off=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return t.removeEventListener.apply(t,e)},e.isDeepEqual=r("uLh5")}}]);
//# sourceMappingURL=b4cf5e88f5cf6a37c431296ba23826257715d021-525c2debb0782954dc99.js.map