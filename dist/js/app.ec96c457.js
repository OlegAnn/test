(function(t){function e(e){for(var n,i,a=e[0],c=e[1],l=e[2],u=0,v=[];u<a.length;u++)i=a[u],o[i]&&v.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,i=1;i<r.length;i++){var a=r[i];0!==o[a]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},i={app:0},o={app:0},s=[];function a(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-28241050":"98e90558"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={"chunk-28241050":1};i[t]?e.push(i[t]):0!==i[t]&&r[t]&&e.push(i[t]=new Promise(function(e,r){for(var n="css/"+({}[t]||t)+"."+{"chunk-28241050":"0c9f5e62"}[t]+".css",i=c.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var a=o[s],l=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(l===n||l===i))return e()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){a=u[s],l=a.getAttribute("data-href");if(l===n||l===i)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var n=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.request=n,r(o)},v.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(v)}).then(function(){i[t]=0}));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=s);var l,u=document.getElementsByTagName("head")[0],v=document.createElement("script");v.charset="utf-8",v.timeout=120,c.nc&&v.setAttribute("nonce",c.nc),v.src=a(t),l=function(e){v.onerror=v.onload=null,clearTimeout(d);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+n+": "+i+")");s.type=n,s.request=i,r[1](s)}o[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:v})},12e4);v.onerror=v.onload=l,u.appendChild(v)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var v=0;v<l.length;v++)e(l[v]);var d=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"21bb":function(t,e,r){"use strict";var n=r("bcc9"),i=r.n(n);i.a},5653:function(t,e,r){"use strict";var n=r("5dea"),i=r.n(n);i.a},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},o=[],s=(r("5c0b"),r("2877")),a={},c=Object(s["a"])(a,i,o,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,u=r("8c4f"),v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("div",{staticClass:"container"},[r("div",{staticClass:"option_table"},[r("div",{staticClass:"select"},[r("div",{staticClass:"select_left"},[r("div",{staticClass:"title_select"},[t._v("Country")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.sortCountry,expression:"sortCountry"}],attrs:{name:"countries",id:"countries"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.sortCountry=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"all"},domProps:{selected:t.sortCountry}},[t._v("All countries")]),t._l(t.items,function(e){return r("option",{key:e.index,domProps:{value:e.country}},[t._v(t._s(e.country))])})],2)]),r("div",{staticClass:"select_right"},[r("div",{staticClass:"title_select"},[t._v("RMC")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.sortRmc,expression:"sortRmc"}],attrs:{name:"rmcs",id:"rmcs"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.sortRmc=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"all"},domProps:{selected:t.sortRmc}},[t._v("All RMC's")]),t._l(t.rmcs,function(e){return r("option",{key:e.index,domProps:{value:e.rmc}},[t._v(t._s(e.rmc))])})],2)])])]),r("div",{staticClass:"table"},[t._m(0),r("div",{staticClass:"table_body"},t._l(t.items,function(e){return r("div",{key:e.index,on:{click:function(r){t.show(e)}}},[t.allView||e.view?r("div",{staticClass:"row",class:{active:t.activeId===e.index}},[r("div",{staticClass:"col"},[t._v("\n              "+t._s(e.country)+"\n            ")]),r("div",{staticClass:"col"},[t._v("\n              "+t._s(e.quantity)+"\n            ")]),r("div",{staticClass:"col"},[t._v("\n              "+t._s(e.rmc)+"\n            ")])]):t._e()])}))])]),t.popUpView?r("PopUp",{attrs:{item:t.activeObj},on:{setActiveOrder:t.setActiveOrder,close:function(e){t.popUpView=!t.popUpView,t.clearObject()}}}):t._e()],1)},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"table_header"},[r("div",{staticClass:"col"},[t._v("Country")]),r("div",{staticClass:"col"},[t._v("Quantity")]),r("div",{staticClass:"col"},[t._v("RMC")])])}];r("55dd");const p=[{country:"Denmark",quantity:8,rmc:"M96368543",view:!1,index:4},{country:"Canada",quantity:17,rmc:"M67345582",view:!1,index:3},{country:"Grecce",quantity:22,rmc:"M96368543",view:!1,index:5},{country:"Argentina",quantity:10,rmc:"M12345761",view:!1,index:0},{country:"Belgium",quantity:45,rmc:"M67345582",view:!1,index:2},{country:"Armenia",quantity:5,rmc:"M12345559",view:!1,index:1}],m=[{rmc:"M12345761",priceForOne:500,index:0},{rmc:"M12345559",priceForOne:600,index:1},{rmc:"M67345582",priceForOne:700,index:2},{rmc:"M96368543",priceForOne:800,index:3}];var f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("div",{staticClass:"wrapper_popUp"},[r("div",{staticClass:"pop_up"},[r("div",{staticClass:"first_part"},[r("div",{staticClass:"header"},[t._v("Confirmation")]),r("div",{staticClass:"body"},[r("div",{staticClass:"text"},[r("span",{staticClass:"kruk"},[t._v("Are you sure that your order will include:")]),r("br"),r("br"),t._v("\n            Watches with RMC: \n            "+t._s(t.showRMC(t.item.rmc,t.item.quantity))+"\n          ")])])]),r("div",{staticClass:"last_part",on:{click:function(e){t.$emit("close")}}},[r("div",{staticClass:"cancel",on:{click:function(e){t.$emit("setActiveOrder",null)}}},[t._v("Cancel")]),r("div",{staticClass:"confirm",on:{click:function(e){t.$emit("setActiveOrder",t.item.index)}}},[t._v("Yes")])])])]),r("div",{staticClass:"overlay",on:{click:function(e){t.$emit("close")}}})])},h=[],y={name:"PopUp",props:{item:{type:Object}},data:function(){return{toggle:!0,items:p,rmcs:m}},methods:{showRMC(t,e){let r="";return this.rmcs.map(n=>{n.rmc===t&&(r=`${t} with price $${n.priceForOne*e}?`)}),r}}},_=y,g=(r("5653"),Object(s["a"])(_,f,h,!1,null,null,null));g.options.__file="PopUp.vue";var b=g.exports,C={name:"home",components:{PopUp:b},data:function(){return{sortCountry:localStorage.getItem("activeCountry")||"all",sortRmc:localStorage.getItem("activeRmc")||"all",allView:!1,items:p,rmcs:m,popUpView:!1,activeObj:{},activeId:null}},watch:{sortCountry(t){localStorage.setItem("activeCountry",t),this.filters(t,this.sortRmc)},sortRmc(t){localStorage.setItem("activeRmc",t),this.filters(this.sortCountry,t)}},methods:{setActiveOrder(t){this.activeId=t},sort(){this.items=this.items.sort((t,e)=>{return t.country<e.country?-1:t.country>e.country?1:0})},filters(t,e){console.log(t,e),this.items.map(r=>{this.allView="all"===t&&"all"===e,"all"===t&&e===r.rmc||r.country===t&&r.rmc===e?r.view=!0:r.view=!1,t===r.country&&"all"===e&&(r.view=!0)})},show(t){this.popUpView=!0,this.activeObj=t},clearObject(){this.activeObj={}}},created(){this.sort(),this.filters(this.sortCountry,this.sortRmc)}},w=C,O=(r("21bb"),Object(s["a"])(w,v,d,!1,null,null,null));O.options.__file="Home.vue";var x=O.exports;n["a"].use(u["a"]);var k=new u["a"]({mode:"history",routes:[{path:"/",name:"home",component:x},{path:"/about",name:"about",component:()=>r.e("chunk-28241050").then(r.bind(null,"f820"))}]}),j=r("2f62");n["a"].use(j["a"]);var A=new j["a"].Store({state:{},mutations:{},actions:{}}),M=r("9483");Object(M["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached(){console.log("Content has been cached for offline use.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}}),n["a"].config.productionTip=!1,new n["a"]({router:k,store:A,render:t=>t(l)}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("5e27"),i=r.n(n);i.a},"5dea":function(t,e,r){},"5e27":function(t,e,r){},bcc9:function(t,e,r){}});
//# sourceMappingURL=app.ec96c457.js.map