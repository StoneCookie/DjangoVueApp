(function(t){function e(e){for(var a,o,s=e[0],l=e[1],c=e[2],u=0,h=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);C&&C(e);while(h.length)h.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(a=!1)}a&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},o={app:0},i={app:0},r=[];function s(t){return l.p+"static/js/"+({}[t]||t)+"."+{"chunk-06d30b54":"d3a6ba70","chunk-2d0b1618":"e758488e","chunk-2d0b3d8d":"f80d6d03","chunk-2d0c45ea":"57f73444","chunk-2d0e1841":"c7e3de7f","chunk-2d21f24b":"82c3c038","chunk-2d226c7e":"2592bd12","chunk-2d2389e5":"3af61f13"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"chunk-06d30b54":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="static/css/"+({}[t]||t)+"."+{"chunk-06d30b54":"e3f84abf","chunk-2d0b1618":"31d6cfe0","chunk-2d0b3d8d":"31d6cfe0","chunk-2d0c45ea":"31d6cfe0","chunk-2d0e1841":"31d6cfe0","chunk-2d21f24b":"31d6cfe0","chunk-2d226c7e":"31d6cfe0","chunk-2d2389e5":"31d6cfe0"}[t]+".css",i=l.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var c=r[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===i))return e()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){c=h[s],u=c.getAttribute("data-href");if(u===a||u===i)return e()}var C=document.createElement("link");C.rel="stylesheet",C.type="text/css",C.onload=e,C.onerror=function(e){var a=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[t],C.parentNode.removeChild(C),n(r)},C.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(C)})).then((function(){o[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var h=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(C);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",h.name="ChunkLoadError",h.type=a,h.request=o,n[1](h)}i[t]=void 0}};var C=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var h=0;h<c.length;h++)e(c[h]);var C=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"06b6":function(t,e,n){"use strict";var a=n("d370"),o=n.n(a);o.a},"0972":function(t,e,n){},"3eec":function(t,e,n){},"430e":function(t,e,n){"use strict";var a=n("95cb"),o=n.n(a);o.a},"4b8d":function(t,e,n){"use strict";var a=n("4eea"),o=n.n(a);o.a},"4ed0":function(t,e,n){n("99af");var a=n("ded3"),o=n("4082");t.exports={functional:!0,render:function(t,e){var n=e._c,i=(e._v,e.data),r=e.children,s=void 0===r?[]:r,l=i.class,c=i.staticClass,u=i.style,h=i.staticStyle,C=i.attrs,d=void 0===C?{}:C,p=o(i,["class","staticClass","style","staticStyle","attrs"]);return n("svg",a({class:[l,c],style:[u,h],attrs:Object.assign({width:"13",height:"20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d)},p),s.concat([n("path",{attrs:{d:"M3.99.604L.529 10.919c-.256.763.282 1.564 1.05 1.564H5.64l-1.31 6.57c-.162.816.838 1.298 1.319.636l6.212-8.55c.56-.772.037-1.886-.885-1.886H7.72l4.683-7.866C12.764.784 12.351 0 11.675 0H4.802a.864.864 0 00-.811.604z",fill:"#56F3BB"}}),n("path",{attrs:{d:"M5.582 19.77c-.5.539-1.407.063-1.252-.717l1.31-6.57h.386c.343 0 .599.332.528.685l-1.173 5.885a.78.78 0 00.201.716zM7.181.001a.865.865 0 00-.811.604L2.907 10.92c-.256.763.282 1.563 1.05 1.563H1.578c-.768 0-1.306-.8-1.05-1.563L3.99.605A.864.864 0 014.8.001h2.38z",fill:"#54B894"}})]))}}},"4eea":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],r=(n("5c0b"),n("2877")),s={},l=Object(r["a"])(s,o,i,!1,null,null,null),c=l.exports,u=(n("d3b7"),n("8c4f")),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-container"},[n("Header",{attrs:{statistics:t.stats}}),n("Navbar"),n("div",{staticClass:"main-container__content"},[n("router-view",{attrs:{name:"main-router"}})],1)],1)},C=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-container"},[n("h1",{staticClass:"header-container__page-name"},[t._v(" "+t._s(t.pageName)+" ")]),n("div",{staticClass:"user-statistics"},[n("div",{staticClass:"user-statistics__stat-block"},[n("CoinSvg",{staticClass:"user-statistics__icon"}),n("span",{staticClass:"user-statistics__text user-statistics__text_color_yellow"},[t._v(t._s(t.statistics.coins))])],1),n("div",{staticClass:"user-statistics__stat-block"},[n("LightningSvg",{staticClass:"user-statistics__icon"}),n("span",{staticClass:"user-statistics__text user-statistics__text_color_green"},[t._v(t._s(t.statistics.lightnings))])],1),n("div",{staticClass:"user-statistics__stat-block"},[n("HeartSvg",{staticClass:"user-statistics__icon"}),n("span",{staticClass:"user-statistics__text user-statistics__text_color_red"},[t._v(t._s(t.statistics.hearts))])],1)])])},p=[],f=(n("ac1f"),n("1276"),n("b0cb")),g=n.n(f),v=n("7d16"),m=n.n(v),_=n("4ed0"),w=n.n(_),b={mainPage:{path:"/",header:"Профиль"},mainQuestPage:{path:"/main-quest",header:"Основной квест"},competitionsPage:{path:"/competitions",header:"Соревнования"},statisticsPage:{path:"/statistics",header:"Статистика"},shopPage:{path:"/shop",header:"Магазин"},raitingPage:{path:"/raiting",header:"Рейтинг"},testsPage:{path:"/tests",header:"Тесты"},authPage:{path:"/auth",header:"Авторизация",children:{loginPage:{path:"/auth/login"},forgotpasswordPage:{path:"/auth/forgot-password"}}}},x=b,k={name:"Header",components:{CoinSvg:g.a,HeartSvg:m.a,LightningSvg:w.a},props:{statistics:{type:Object,required:!0}},data:function(){return{routesList:x,pageName:""}},watch:{$route:function(t){this.getPageName(t.fullPath)}},mounted:function(){this.getPageName(this.$router.currentRoute.fullPath)},methods:{getPageName:function(t){for(var e in this.routesList){var n="/".concat(t.split("/")[1]);this.routesList[e].path===n&&(this.pageName=this.routesList[e].header)}}}},V=k,H=(n("06b6"),Object(r["a"])(V,d,p,!1,null,"3fbfac6d",null)),L=H.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation",class:{navigation_opened:t.opened}},[n("div",{staticClass:"navigation__logo-back"}),n("LogoSvg",{staticClass:"navigation__logo",class:{navigation__logo_show:t.opened},attrs:{"regular-color":"#d8dcea"}}),n("nav",{staticClass:"navigation__links-list"},t._l(t.links,(function(e){return n("div",{key:e.name,staticClass:"navigation__links-item"},[n("router-link",{staticClass:"link",attrs:{to:e.path,"active-class":"link_active",exact:""}},[n("icon-base",{staticClass:"link__icon",attrs:{width:t.iconWidth,height:t.iconHeight,"view-box-width":e.viewBoxWidth,"view-box-height":e.viewBoxHeight,"stroke-color":null===e.strokeColor?"currentColor":e.strokeColor,"fill-color":null===e.fillColor?"currentColor":e.fillColor}},[n(e.icon,{tag:"component"})],1),n("span",{staticClass:"link__text",class:{"show-text":t.showText}},[t._v(t._s(e.name))])],1)],1)})),0),n("nav",{staticClass:"navigation__links-list-mobile"},t._l(t.linksMobile,(function(e){return n("div",{key:e.name,staticClass:"navigation__links-item"},[n("router-link",{staticClass:"link",attrs:{to:e.path,"active-class":"link_active",exact:""}},[n("icon-base",{staticClass:"link__icon",attrs:{width:t.iconWidthMobile,height:t.iconHeightMobile,"view-box-width":e.viewBoxWidth,"view-box-height":e.viewBoxHeight,"stroke-color":null===e.strokeColor?"currentColor":e.strokeColor,"fill-color":null===e.fillColor?"currentColor":e.fillColor}},[n(e.icon,{tag:"component"})],1)],1)],1)})),0),n("div",{staticClass:"exit-btn"},[n("icon-base",{staticClass:"exit-btn__icon",attrs:{width:25,height:25,"view-box-width":26,"view-box-height":24,"stroke-color":"none"}},[n("ExitSvg")],1),n("span",{staticClass:"exit-btn__text",class:{"show-text":t.showText}},[t._v("Выход")])],1),n("icon-base",{staticClass:"open-btn",class:{"open-btn_opened":t.opened},attrs:{width:25,height:25,"view-box-width":23,"view-box-height":21,"stroke-color":"none","on-click":t.openMenu}},[n("OpenSvg")],1)],1)},M=[],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:"width:"+t.width+"px; height:"+t.height+"px",on:{click:t.onClick}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+t.viewBoxWidth+" "+t.viewBoxHeight}},[n("g",{attrs:{fill:t.fillColor,stroke:t.strokeColor}},[t._t("default")],2)])])},B=[],S=(n("a9e3"),{props:{width:{type:Number,default:30},height:{type:Number,default:30},viewBoxWidth:{type:Number,default:30},viewBoxHeight:{type:Number,default:30},fillColor:{type:String,default:"currentColor"},strokeColor:{type:String,default:"currentColor"},onClick:{type:Function,default:function(){}}}}),Z=S,O=(n("430e"),Object(r["a"])(Z,P,B,!1,null,null,null)),j=O.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18 11.5444C18 17.1798 14.3639 22.1715 9 23.8998C3.6361 22.1715 0 17.1798 0 11.5444V10.5V4L9 0L18 4V10.5V11.5444ZM2 10.5V5.29975L9 2.18864L16 5.29975V10.5V11.5444C16 16.0935 13.1991 20.1467 9 21.7784C4.80091 20.1467 2 16.0935 2 11.5444V10.5ZM14.3572 12.0237C14.3572 15.6319 12.0593 18.8394 8.64288 20V4L14.3572 6.28571V11.0294V12.0237Z"}})},$=[],W={},T=Object(r["a"])(W,E,$,!1,null,null,null),A=T.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.3439 6.14737C13.3439 8.4379 11.4871 10.2947 9.19655 10.2947C6.90603 10.2947 5.04919 8.4379 5.04919 6.14737C5.04919 3.85684 6.90603 2 9.19655 2C11.4871 2 13.3439 3.85684 13.3439 6.14737ZM15.3439 6.14737C15.3439 9.54247 12.5917 12.2947 9.19655 12.2947C5.80146 12.2947 3.04919 9.54247 3.04919 6.14737C3.04919 2.75227 5.80146 0 9.19655 0C12.5917 0 15.3439 2.75227 15.3439 6.14737ZM2 23.5649C2 18.9106 5.32945 15.3439 9.19649 15.3439C13.0635 15.3439 16.393 18.9106 16.393 23.5649C16.393 24.1172 16.8407 24.5649 17.393 24.5649C17.9453 24.5649 18.393 24.1172 18.393 23.5649C18.393 18.034 14.383 13.3439 9.19649 13.3439C4.00994 13.3439 0 18.034 0 23.5649C0 24.1172 0.447715 24.5649 1 24.5649C1.55228 24.5649 2 24.1172 2 23.5649Z"}})},F=[],z={},q=Object(r["a"])(z,N,F,!1,null,null,null),D=q.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.5137 0.383237C10.1877 0.829061 10.2603 1.48535 10.6759 1.84911L12.4875 3.43483L10.7525 4.95355C10.3369 5.31731 10.2643 5.9736 10.5902 6.41943C10.9162 6.86525 11.5174 6.93178 11.9329 6.56803L14 4.7587L16.0671 6.56803C16.4826 6.93178 17.0838 6.86525 17.4098 6.41943C17.7357 5.9736 17.6631 5.31731 17.2475 4.95355L15.5125 3.43483L17.3241 1.84911C17.7397 1.48535 17.8123 0.829061 17.4863 0.383237C17.1603 -0.0625874 16.5592 -0.129118 16.1436 0.234636L14 2.11097L11.8564 0.234636C11.4408 -0.129118 10.8397 -0.0625874 10.5137 0.383237ZM15 7.576C15 7.02372 14.5523 6.576 14 6.576C13.4477 6.576 13 7.02372 13 7.576V9.451C13 10.0033 13.4477 10.451 14 10.451C14.5523 10.451 15 10.0033 15 9.451V7.576ZM3 9.576C1.34315 9.576 0 10.9191 0 12.576V13.576C0 14.1283 0.447715 14.576 1 14.576C1.55228 14.576 2 14.1283 2 13.576V12.576C2 12.0237 2.44772 11.576 3 11.576H4.57143C5.12371 11.576 5.57143 12.0237 5.57143 12.576V13.576C5.57143 14.1283 6.01914 14.576 6.57143 14.576C7.12371 14.576 7.57143 14.1283 7.57143 13.576V12.576C7.57143 10.9191 6.22828 9.576 4.57143 9.576H3ZM15 12.076C15 11.5237 14.5523 11.076 14 11.076C13.4477 11.076 13 11.5237 13 12.076V15.076C13 15.6283 13.4477 16.076 14 16.076C14.5523 16.076 15 15.6283 15 15.076V12.076ZM7.5 16.076C7.5 15.5237 7.05228 15.076 6.5 15.076C5.94772 15.076 5.5 15.5237 5.5 16.076V17.576C5.5 18.1283 5.94772 18.576 6.5 18.576C7.05228 18.576 7.5 18.1283 7.5 17.576V16.076ZM2 16.576C2 16.0237 1.55228 15.576 1 15.576C0.447715 15.576 0 16.0237 0 16.576V18.076C0 18.6283 0.447715 19.076 1 19.076C1.55228 19.076 2 18.6283 2 18.076V16.576ZM15 17.576C15 17.0237 14.5523 16.576 14 16.576C13.4477 16.576 13 17.0237 13 17.576V20.576C13 21.1283 12.5523 21.576 12 21.576H10.5H8.5151C7.97394 21.576 7.53097 21.1455 7.51551 20.6046L7.49959 20.0474C7.48382 19.4954 7.0235 19.0606 6.47144 19.0764C5.91938 19.0922 5.48463 19.5525 5.50041 20.1046L5.51633 20.6617C5.56269 22.2845 6.89161 23.576 8.5151 23.576H10.5H12C13.6569 23.576 15 22.2329 15 20.576V17.576ZM2 21.076C2 20.5237 1.55228 20.076 1 20.076C0.447715 20.076 0 20.5237 0 21.076V22.576C0 23.1283 0.447715 23.576 1 23.576C1.55228 23.576 2 23.1283 2 22.576V21.076Z"}})},I=[],J={},R=Object(r["a"])(J,Q,I,!1,null,null,null),K=R.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("path",{attrs:{d:"M22.5 4.163e-06C21.1221 -0.00248607 20.003 1.11255 20.0005 2.49053C19.9993 3.13999 20.2515 3.76436 20.7033 4.23086L16.1358 13.3642C16.0357 13.3476 15.9347 13.3373 15.8333 13.3334C15.5106 13.334 15.1911 13.3975 14.8925 13.5201L11.3467 9.53257C11.5537 9.1666 11.6638 8.75386 11.6667 8.3334C11.6667 6.95269 10.5474 5.8334 9.1667 5.8334C7.78599 5.8334 6.6667 6.95269 6.6667 8.3334C6.66914 8.93018 6.88696 9.50601 7.28003 9.95508L2.94668 17.545C2.79941 17.5167 2.64995 17.5016 2.5 17.5C1.11929 17.5 0 18.6193 0 20C0 21.3807 1.11929 22.5 2.5 22.5C3.88071 22.5 5 21.3807 5 20C4.99756 19.4032 4.77974 18.8274 4.38667 18.3783L8.72002 10.7883C9.18521 10.8802 9.66724 10.8309 10.1042 10.6467L13.65 14.6342C13.4442 15.0004 13.3352 15.4132 13.3334 15.8334C13.3292 17.2141 14.4451 18.3367 15.8258 18.3409C17.2065 18.345 18.3292 17.2292 18.3333 15.8484C18.3353 15.1971 18.083 14.5707 17.63 14.1025L22.1975 4.96919C22.2976 4.9858 22.3986 4.9961 22.5 5C23.8807 5 25 3.88072 25 2.5C25 1.11929 23.8807 4.163e-06 22.5 4.163e-06ZM2.5 20.8334C2.03975 20.8334 1.66665 20.4603 1.66665 20C1.66665 19.5397 2.03975 19.1667 2.5 19.1667C2.96025 19.1667 3.33335 19.5397 3.33335 20C3.33335 20.4603 2.96025 20.8334 2.5 20.8334ZM9.16665 9.16665C8.7064 9.16665 8.3333 8.79356 8.3333 8.3333C8.3333 7.87305 8.7064 7.49996 9.16665 7.49996C9.6269 7.49996 10 7.87305 10 8.3333C10 8.79356 9.6269 9.16665 9.16665 9.16665ZM15.8333 16.6667C15.3731 16.6667 15 16.2936 15 15.8333C15 15.373 15.3731 15 15.8333 15C16.2936 15 16.6667 15.373 16.6667 15.8333C16.6667 16.2936 16.2936 16.6667 15.8333 16.6667ZM22.5 3.33335C22.0397 3.33335 21.6667 2.96026 21.6667 2.5C21.6667 2.03975 22.0397 1.66665 22.5 1.66665C22.9603 1.66665 23.3333 2.03975 23.3333 2.5C23.3333 2.96026 22.9603 3.33335 22.5 3.33335Z"}})},G=[],X={},Y=Object(r["a"])(X,U,G,!1,null,null,null),tt=Y.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 7V2H10V10V12V22H8V9V7ZM6 7V1C6 0.447716 6.44772 0 7 0H11C11.5523 0 12 0.447715 12 1V10H15C15.5523 10 16 10.4477 16 11V22H17C17.5523 22 18 22.4477 18 23C18 23.5523 17.5523 24 17 24H16H14H12H10H8H6H4H2H1C0.447715 24 0 23.5523 0 23C0 22.4477 0.447715 22 1 22H2V8C2 7.44772 2.44772 7 3 7H6ZM4 22H6V9H4V22ZM12 22V12H14V22H12Z"}})},nt=[],at={},ot=Object(r["a"])(at,et,nt,!1,null,null,null),it=ot.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g",[n("path",{attrs:{d:"M4 9V21C4 22.1046 4.89543 23 6 23H18C19.1046 23 20 22.1046 20 21V9","stroke-width":"2"}}),n("path",{attrs:{d:"M16.0093 22.3967L15.9956 15.8149C15.9945 15.2626 15.5459 14.8158 14.9936 14.817L8.99768 14.8294C8.4454 14.8305 7.99861 15.2792 7.99976 15.8315L8.01338 22.4133","stroke-width":"2"}}),n("line",{attrs:{x1:"2",y1:"1",x2:"22",y2:"1","stroke-width":"2","stroke-linecap":"round"}}),n("path",{attrs:{d:"M1 2C1 1.44772 1.44772 1 2 1H8V6.5C8 8.433 6.433 10 4.5 10C2.567 10 1 8.433 1 6.5V2Z","stroke-width":"2"}}),n("path",{attrs:{d:"M8 2C8 1.44772 8.44772 1 9 1H16V6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6V2Z","stroke-width":"2"}}),n("path",{attrs:{d:"M16 1H22C22.5523 1 23 1.44772 23 2V6.5C23 8.433 21.433 10 19.5 10C17.567 10 16 8.433 16 6.5V1Z","stroke-width":"2"}})])},st=[],lt={},ct=Object(r["a"])(lt,rt,st,!1,null,null,null),ut=ct.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9 0C6.23858 0 4 2.23858 4 5V5.5C4 6.05228 4.44772 6.5 5 6.5C5.55228 6.5 6 6.05228 6 5.5V5C6 3.34315 7.34315 2 9 2C10.6569 2 12 3.34315 12 5C12 6.65685 10.6569 8 9 8C8.44771 8 8 8.44771 8 9V14C8 14.5523 8.44771 15 9 15C9.55229 15 10 14.5523 10 14V9.89998C12.2822 9.43671 14 7.41896 14 5C14 2.23858 11.7614 0 9 0ZM2 9C2 8.44772 2.44772 8 3 8V6C1.34315 6 0 7.34315 0 9V21C0 22.6569 1.34315 24 3 24H15C16.6569 24 18 22.6569 18 21V9C18 7.34315 16.6569 6 15 6V8C15.5523 8 16 8.44772 16 9V21C16 21.5523 15.5523 22 15 22H3C2.44772 22 2 21.5523 2 21V9ZM9 16C8.44771 16 8 16.4477 8 17C8 17.5523 8.44771 18 9 18C9.55229 18 10 17.5523 10 17C10 16.4477 9.55229 16 9 16Z"}})},Ct=[],dt={},pt=Object(r["a"])(dt,ht,Ct,!1,null,null,null),ft=pt.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15 0C13.3431 0 12 1.34315 12 3V6.5C12 7.05228 12.4477 7.5 13 7.5C13.5523 7.5 14 7.05228 14 6.5V3C14 2.44772 14.4477 2 15 2H23C23.5523 2 24 2.44772 24 3V21C24 21.5523 23.5523 22 23 22H15C14.4477 22 14 21.5523 14 21V17.5C14 16.9477 13.5523 16.5 13 16.5C12.4477 16.5 12 16.9477 12 17.5V21C12 22.6569 13.3431 24 15 24H23C24.6569 24 26 22.6569 26 21V3C26 1.34315 24.6569 0 23 0H15ZM0.292893 12.7071L6.65686 19.0711C7.04738 19.4616 7.68054 19.4616 8.07107 19.0711C8.46159 18.6805 8.46159 18.0474 8.07107 17.6569L3.41421 13H18C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11H3.41421L8.07107 6.34315C8.46159 5.95262 8.46159 5.31946 8.07107 4.92893C7.68054 4.53841 7.04738 4.53841 6.65686 4.92893L0.292893 11.2929C-0.097631 11.6834 -0.097631 12.3166 0.292893 12.7071Z"}})},vt=[],mt={},_t=Object(r["a"])(mt,gt,vt,!1,null,null,null),wt=_t.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("path",{attrs:{d:"M0.143057 2.92764L2.555 0.676365L12.7364 10.3436L2.47281 19.9235L0.0801797 17.6517L7.91479 10.323L0.143057 2.92764ZM10.3656 2.9713L12.7775 0.720018L22.9589 10.3872L12.6953 19.9672L10.3027 17.6954L18.1373 10.3667L10.3656 2.9713Z"}})},xt=[],kt={},Vt=Object(r["a"])(kt,bt,xt,!1,null,null,null),Ht=Vt.exports,Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo-container",class:{canBeActive:t.canBeActive},on:{mouseover:t.mouseOver,mouseleave:t.mouseLeave}},[n("svg",{attrs:{width:"100%",height:"100%",viewBox:"0 0 58 82",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M42 35H51C53.7614 35 56 37.2386 56 40V75C56 77.7614 53.7614 80 51 80H7C4.23858 80 2 77.7614 2 75V40C2 37.2386 4.23858 35 7 35H15","stroke-width":"3",stroke:t.color}}),n("circle",{attrs:{cx:"28.5",cy:"20.5",r:"13","stroke-width":"3",stroke:t.color}}),n("path",{attrs:{d:"M22 32V39C22 40.6569 23.3431 42 25 42H32C33.6569 42 35 40.6569 35 39V32",stroke:t.color,"stroke-width":"3"}}),n("path",{attrs:{d:"M24 41V44C24 45.6569 25.3431 47 27 47H30C31.6569 47 33 45.6569 33 44V41",stroke:t.color,"stroke-width":"3"}}),n("rect",{attrs:{x:"27",width:"3",height:"3",fill:t.color}}),n("rect",{attrs:{x:"44.4376",y:"5",width:"3",height:"3",transform:"rotate(54.3455 44.4376 5)",fill:t.color}}),n("rect",{attrs:{width:"3",height:"3",transform:"matrix(-0.582896 0.812547 0.812547 0.582896 11.7487 5)",fill:t.color}}),n("rect",{attrs:{x:"8",y:"20",width:"3",height:"3",fill:t.color}}),n("rect",{attrs:{x:"46",y:"20",width:"3",height:"3",fill:t.color}}),n("path",{attrs:{d:"M15.728 57.2V62H17.824V57.2L21.44 50.512H19.072L16.736 54.768L14.4 50.512H12.08L15.728 57.2ZM27.5425 50.288C24.3425 50.288 21.6225 52.848 21.6225 56.256C21.6225 59.664 24.3425 62.224 27.5425 62.224C30.7425 62.224 33.4625 59.664 33.4625 56.256C33.4625 52.784 30.7425 50.288 27.5425 50.288ZM27.5425 52.56C29.6705 52.56 31.3025 54.048 31.3025 56.256C31.3025 58.464 29.6705 59.952 27.5425 59.952C25.4145 59.952 23.7665 58.464 23.7665 56.256C23.7665 54.048 25.4145 52.56 27.5425 52.56ZM40.4956 50.288C37.2956 50.288 34.5756 52.848 34.5756 56.256C34.5756 59.664 37.2956 62.224 40.4956 62.224C43.6956 62.224 46.4156 59.664 46.4156 56.256C46.4156 52.784 43.6956 50.288 40.4956 50.288ZM40.4956 52.56C42.6236 52.56 44.2556 54.048 44.2556 56.256C44.2556 58.464 42.6236 59.952 40.4956 59.952C38.3676 59.952 36.7196 58.464 36.7196 56.256C36.7196 54.048 38.3676 52.56 40.4956 52.56Z",fill:t.color}}),n("path",{attrs:{d:"M9.56 68.262C9.56 70.432 11.254 71.958 13.172 71.958C14.25 71.958 15.076 71.552 15.314 71.02V71.594C15.314 73.008 14.264 73.316 13.368 73.316C12.276 73.316 11.38 72.77 10.904 72.182L10.372 73.778C10.792 74.492 12.024 75.178 13.508 75.178C15.692 75.178 17.092 73.848 17.092 71.902V64.79H15.37V65.532C15.132 65.014 14.278 64.594 13.2 64.594C11.268 64.594 9.56 66.078 9.56 68.262ZM11.352 68.304C11.352 67.24 12.178 66.484 13.438 66.484C14.32 66.484 15.09 66.932 15.314 67.422V69.2C15.09 69.704 14.32 70.124 13.438 70.124C12.178 70.124 11.352 69.382 11.352 68.304ZM18.7482 68.402C18.7482 70.656 20.4842 72.196 22.4162 72.196C23.4802 72.196 24.3202 71.776 24.5582 71.244V72H26.2802V64.79H24.5582V65.546C24.3202 65 23.4802 64.594 22.4162 64.594C20.4842 64.594 18.7482 66.148 18.7482 68.402ZM20.5402 68.402C20.5402 67.268 21.3942 66.484 22.6262 66.484C23.5082 66.484 24.2782 66.89 24.5022 67.436V69.354C24.2782 69.886 23.5082 70.306 22.6262 70.306C21.3942 70.306 20.5402 69.536 20.5402 68.402ZM36.6437 64.594C35.6497 64.594 34.8097 64.86 34.2357 65.644C33.6617 64.944 32.8077 64.594 31.9817 64.594C31.0017 64.594 30.3157 65 30.1337 65.518V64.79H28.4117V72H30.1897V67.534C30.3157 66.932 30.9737 66.484 31.6737 66.484C32.4717 66.484 33.0737 67.016 33.0737 67.954V72H34.8517V67.534C34.9777 66.932 35.6497 66.484 36.3497 66.484C37.1337 66.484 37.7357 67.03 37.7357 67.968V72H39.5137V67.576C39.5137 65.546 38.0157 64.594 36.6437 64.594ZM44.9533 70.404C43.8613 70.404 43.0213 69.97 42.8533 69.032H48.2013C48.2293 68.864 48.2433 68.612 48.2433 68.402C48.2433 66.386 46.8573 64.594 44.7293 64.594C42.4613 64.594 41.0333 66.358 41.0333 68.402C41.0333 70.74 42.6993 72.196 44.8973 72.196C46.2273 72.196 47.2633 71.622 47.7113 70.88L47.1653 69.508C46.7593 70.054 45.8493 70.404 44.9533 70.404ZM42.9233 67.576C43.0773 66.806 43.8473 66.4 44.7293 66.4C45.5973 66.4 46.3113 66.82 46.4233 67.576H42.9233Z",fill:t.color}})])])},yt=[],Mt={name:"LogoSvg",props:{regularColor:{type:String,default:"#3281a0"},activeColor:{type:String,default:"#26bcc2"},canBeActive:{type:Boolean,default:!1}},data:function(){return{color:this.regularColor}},methods:{mouseOver:function(){this.canBeActive&&(this.color=this.activeColor)},mouseLeave:function(){this.canBeActive&&(this.color=this.regularColor)}}},Pt=Mt,Bt=(n("4b8d"),Object(r["a"])(Pt,Lt,yt,!1,null,"28809eb8",null)),St=Bt.exports,Zt={components:{IconBase:j,CompetitionsSvg:A,ProfileSvg:D,MainQuestSvg:K,StatisticsSvg:tt,RaitingSvg:it,ShopSvg:ut,TestsSvg:ft,ExitSvg:wt,OpenSvg:Ht,LogoSvg:St},data:function(){return{iconWidth:25,iconHeight:25,iconWidthMobile:22,iconHeightMobile:22,opened:!1,showText:!1,links:[{path:x.mainPage.path,icon:D,name:"Профиль",viewBoxWidth:19,viewBoxHeight:25,strokeColor:"none",fillColor:null},{path:x.mainQuestPage.path,icon:K,name:"Основной квест",viewBoxWidth:18,viewBoxHeight:24,strokeColor:"none",fillColor:null},{path:x.competitionsPage.path,icon:A,name:"Соревнования",viewBoxWidth:18,viewBoxHeight:24,strokeColor:"none",fillColor:null},{path:x.statisticsPage.path,icon:tt,name:"Статистика",viewBoxWidth:25,viewBoxHeight:23,strokeColor:"none",fillColor:null},{path:x.raitingPage.path,icon:it,name:"Рейтинг",viewBoxWidth:18,viewBoxHeight:24,strokeColor:"none",fillColor:null},{path:x.shopPage.path,icon:ut,name:"Магазин",viewBoxWidth:24,viewBoxHeight:24,strokeColor:null,fillColor:"none"},{path:x.testsPage.path,icon:ft,name:"Тесты",viewBoxWidth:18,viewBoxHeight:24,strokeColor:"none",fillColor:null}],linksMobile:[{path:x.raitingPage.path,icon:it,name:"Рейтинг",viewBoxWidth:18,viewBoxHeight:24,strokeColor:"none",fillColor:null},{path:x.testsPage.path,icon:ft,name:"Тесты",viewBoxWidth:18,viewBoxHeight:24,strokeColor:"none",fillColor:null},{path:x.mainPage.path,icon:D,name:"Профиль",viewBoxWidth:19,viewBoxHeight:25,strokeColor:"none",fillColor:null},{path:x.mainQuestPage.path,icon:K,name:"Основной квест",viewBoxWidth:18,viewBoxHeight:24,strokeColor:"none",fillColor:null},{path:x.competitionsPage.path,icon:A,name:"Соревнования",viewBoxWidth:18,viewBoxHeight:24,strokeColor:"none",fillColor:null}]}},watch:{$route:function(){this.opened=!1,this.showText=!1}},methods:{showTextFunc:function(){this.showText=!0},openMenu:function(){this.opened=!this.opened,this.showText?this.showText=!1:setTimeout(this.showTextFunc,300)}}},Ot=Zt,jt=(n("91a2"),Object(r["a"])(Ot,y,M,!1,null,"619808ac",null)),Et=jt.exports,$t={coins:5e4,lightnings:1e4,hearts:1e5},Wt={name:"Main",components:{Header:L,Navbar:Et},data:function(){return{stats:$t}}},Tt=Wt,At=(n("a006"),Object(r["a"])(Tt,h,C,!1,null,null,null)),Nt=At.exports,Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[n("LogoSvg",{staticClass:"login-container__logo",attrs:{"regular-color":"#3281a0"}}),n("form",{staticClass:"login-form",attrs:{action:""}},[t._m(0),n("input",{staticClass:"login-form__input",attrs:{type:"text",required:"",placeholder:"Логин"}}),n("input",{staticClass:"login-form__input",attrs:{type:"password",required:"",placeholder:"Пароль"}}),n("div",{staticClass:"login-form__link-container"},[n("router-link",{staticClass:"login-form__link-text",attrs:{to:t.routesList.authPage.children.forgotpasswordPage.path}},[t._v(" Напомнить пароль ")])],1),n("button",{staticClass:"login-form__button",attrs:{type:"submit"}},[t._v("Войти")])])],1)},zt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-form__alert-container"},[n("p",{staticClass:"login-form__alert-text"},[t._v("Войдите, чтобы продолжить")])])}],qt={name:"LoginForm",components:{LogoSvg:St},data:function(){return{routesList:x}}},Dt=qt,Qt=(n("96db"),Object(r["a"])(Dt,Ft,zt,!1,null,"0ec8a913",null)),It=Qt.exports,Jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"forgot-password-container"},[n("LogoSvg",{staticClass:"forgot-password-container__logo",attrs:{"regular-color":"#3281a0"}}),n("form",{staticClass:"forgot-password-form",attrs:{action:""}},[t._m(0),n("input",{staticClass:"forgot-password-form__input",attrs:{type:"email",required:"",placeholder:"Почта"}}),n("div",{staticClass:"forgot-password-form__link-container"},[n("router-link",{staticClass:"forgot-password-form__link-text",attrs:{to:t.routesList.authPage.children.loginPage.path}},[t._v(" Вспомнил пароль ")])],1),n("button",{staticClass:"forgot-password-form__button",attrs:{type:"submit"}},[t._v(" Напомнить пароль ")])])],1)},Rt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"forgot-password-form__alert-container"},[n("p",{staticClass:"forgot-password-form__alert-text"},[t._v(" Введите почту для восстановления пароля ")])])}],Kt={name:"ForgotPasswordForm",components:{LogoSvg:St},data:function(){return{routesList:x}}},Ut=Kt,Gt=(n("9601"),Object(r["a"])(Ut,Jt,Rt,!1,null,"71032ac0",null)),Xt=Gt.exports;a["a"].use(u["a"]);var Yt=[{path:x.mainPage.path,component:Nt,children:[{path:x.mainPage.path,components:{"main-router":function(){return n.e("chunk-2d21f24b").then(n.bind(null,"d922"))}}},{path:x.competitionsPage.path,components:{"main-router":function(){return n.e("chunk-2d226c7e").then(n.bind(null,"e9b6"))}}},{path:x.mainQuestPage.path,components:{"main-router":function(){return n.e("chunk-2d2389e5").then(n.bind(null,"ffc2"))}}},{path:x.raitingPage.path,components:{"main-router":function(){return n.e("chunk-2d0b1618").then(n.bind(null,"2037"))}}},{path:x.shopPage.path,components:{"main-router":function(){return n.e("chunk-2d0e1841").then(n.bind(null,"7b88"))}}},{path:x.statisticsPage.path,components:{"main-router":function(){return n.e("chunk-2d0b3d8d").then(n.bind(null,"29b2"))}}},{path:x.testsPage.path,components:{"main-router":function(){return n.e("chunk-2d0c45ea").then(n.bind(null,"3b16"))}}}]},{path:x.authPage.path,component:function(){return n.e("chunk-06d30b54").then(n.bind(null,"2fef"))},children:[{path:x.authPage.children.loginPage.path,components:{"auth-router":It}},{path:x.authPage.children.forgotpasswordPage.path,components:{"auth-router":Xt}}]}],te=new u["a"]({mode:"history",base:"/",routes:Yt}),ee=te,ne=n("2f62");a["a"].use(ne["a"]);var ae=new ne["a"].Store({state:{},mutations:{},actions:{},modules:{}}),oe=n("b047"),ie=n.n(oe);a["a"].config.productionTip=!1,a["a"].use(ie.a),new a["a"]({router:ee,store:ae,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),o=n.n(a);o.a},"7d16":function(t,e,n){n("99af");var a=n("ded3"),o=n("4082");t.exports={functional:!0,render:function(t,e){var n=e._c,i=(e._v,e.data),r=e.children,s=void 0===r?[]:r,l=i.class,c=i.staticClass,u=i.style,h=i.staticStyle,C=i.attrs,d=void 0===C?{}:C,p=o(i,["class","staticClass","style","staticStyle","attrs"]);return n("svg",a({class:[l,c],style:[u,h],attrs:Object.assign({width:"20",height:"22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d)},p),s.concat([n("path",{attrs:{d:"M10 20.668a.553.553 0 01-.386-.16c-.852-.82-1.663-1.58-2.426-2.295C2.883 14.178 0 11.512 0 7.628c0-3.59 2.306-6.296 5.313-6.296 2.369 0 3.89 1.821 4.687 3.46.797-1.639 2.318-3.46 4.688-3.46C17.694 1.332 20 4.039 20 7.628c0 3.884-2.884 6.55-7.188 10.585a254.01 254.01 0 00-2.426 2.296.554.554 0 01-.386.159z",fill:"#F23F2A"}}),n("path",{attrs:{d:"M10.386 20.509c.852-.82 1.663-1.58 2.426-2.296C17.116 14.178 20 11.512 20 7.628c0-3.59-2.306-6.296-5.313-6.296-2.369 0-3.89 1.821-4.687 3.46v15.876a.554.554 0 00.386-.16z",fill:"#DD271D"}})]))}}},"8bf9":function(t,e,n){},"91a2":function(t,e,n){"use strict";var a=n("dac0"),o=n.n(a);o.a},"95cb":function(t,e,n){},9601:function(t,e,n){"use strict";var a=n("8bf9"),o=n.n(a);o.a},"96db":function(t,e,n){"use strict";var a=n("3eec"),o=n.n(a);o.a},"9c0c":function(t,e,n){},a006:function(t,e,n){"use strict";var a=n("0972"),o=n.n(a);o.a},b0cb:function(t,e,n){n("99af");var a=n("ded3"),o=n("4082");t.exports={functional:!0,render:function(t,e){var n=e._c,i=(e._v,e.data),r=e.children,s=void 0===r?[]:r,l=i.class,c=i.staticClass,u=i.style,h=i.staticStyle,C=i.attrs,d=void 0===C?{}:C,p=o(i,["class","staticClass","style","staticStyle","attrs"]);return n("svg",a({class:[l,c],style:[u,h],attrs:Object.assign({width:"20",height:"20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d)},p),s.concat([n("circle",{attrs:{cx:"10",cy:"10",r:"10",fill:"#FFCF5B"}}),n("circle",{attrs:{cx:"10",cy:"10",r:"7.5",stroke:"#FAB44A"}}),n("g",{attrs:{"clip-path":"url(#clip0)"}},[n("path",{attrs:{d:"M10.442 9.375V7.153c.475.08.923.275 1.306.568.077.053.167.081.26.082.297 0 .539-.239.542-.536 0-.128-.049-.25-.139-.341a3.33 3.33 0 00-1.976-.795v-.745A.385.385 0 0010.05 5L10.037 5a.391.391 0 00-.397.386v.72c-1.42.1-2.386.978-2.386 2.146 0 1.432 1.218 1.83 2.386 2.146v2.525a3.277 3.277 0 01-1.673-.739.526.526 0 00-.315-.113.55.55 0 00-.512.555c0 .128.05.25.14.34.651.588 1.49.926 2.366.954v.694l.001.014a.39.39 0 00.41.371.385.385 0 00.385-.385v-.707c1.723-.113 2.418-1.161 2.418-2.272 0-1.49-1.25-1.944-2.418-2.26zm-.796-.202c-.688-.202-1.224-.41-1.224-.997s.486-1.01 1.224-1.067v2.064zm.796 3.762v-2.297c.713.202 1.269.473 1.262 1.136 0 .48-.328 1.048-1.262 1.161z",fill:"#FAB44A"}})]),n("defs",[n("clipPath",{attrs:{id:"clip0"}},[n("path",{attrs:{fill:"#fff",transform:"translate(5 5)",d:"M0 0h10v10H0z"}})])])]))}}},d370:function(t,e,n){},dac0:function(t,e,n){}});
//# sourceMappingURL=app.50b0bbc6.js.map