(this["webpackJsonpgiphy-markdown"]=this["webpackJsonpgiphy-markdown"]||[]).push([[0],{171:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),i=n.n(c),o=n(89),l=n(14),u=(n(98),n(27)),s=n.n(u),m=n(37),h=n(172),p=n(79),g=n.n(p),f=n(57),d=n.n(f),b=n(38),v=n(80),E=n.n(v),w=n(173),S=function(e){var t=e.images.map((function(t){var n=t.images.fixed_width.url;return r.a.createElement("img",{key:t.id,src:n,title:t.title,alt:t.title,onClick:function(){var a="![".concat(t.title,"](").concat(n,")");E()(a),w.a.success(a),e.prependRecentImage&&(null===e||void 0===e||e.prependRecentImage(t))},style:{cursor:"pointer"}})}));return r.a.createElement(r.a.Fragment,null,t)},j=h.a.Search,y=new b.GiphyFetch(null!=="6S2k8D4jSBQhZbT2YZq05MtArii3ThSu"?"6S2k8D4jSBQhZbT2YZq05MtArii3ThSu":""),O=g()((function(e){e()}),500),k=function(){var e=Object(m.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.length){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,y.search(t);case 4:a=e.sent,n(a.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var I=function(e){var t=Object(a.useState)((function(){return d.a.parse(window.location.search.substr(1))})),n=function(e,t){var n=e[t],r=Array.isArray(n)?n.join(" "):n,c=null!==r&&void 0!==r?r:localStorage.getItem(t),i=Object(a.useState)(c),o=Object(l.a)(i,2),u=o[0],s=o[1];return[u,function(n){s(n),localStorage.setItem(t,n),e[t]=n,window.history.pushState({content:n},"","?"+d.a.stringify(e))}]}(Object(l.a)(t,1)[0],"query"),c=Object(l.a)(n,2),i=c[0],o=c[1],u=Object(a.useState)([]),s=Object(l.a)(u,2),m=s[0],h=s[1];return Object(a.useEffect)((function(){k(i,h)}),[i]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Search"),r.a.createElement(j,{placeholder:"Search",enterButton:"Search",size:"large",defaultValue:i,onChange:function(e){var t=e.target.value;O((function(){return o(t)}))},onSearch:function(e){return O((function(){return o(e)}))}}),r.a.createElement(S,Object.assign({images:m},e)))},T=new b.GiphyFetch(null!=="6S2k8D4jSBQhZbT2YZq05MtArii3ThSu"?"6S2k8D4jSBQhZbT2YZq05MtArii3ThSu":""),Z=function(){var e=Object(m.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.trending();case 2:n=e.sent,t(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){Z(i)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Trending"),r.a.createElement(S,Object.assign({images:c},e)))},A=function(e){var t=e.images;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Recent Images"),r.a.createElement(S,{images:t}))};var B=function(){var e=function(e){var t=localStorage.getItem(e),n=t?JSON.parse(t):[],r=Object(a.useState)(n),c=Object(l.a)(r,2),i=c[0],o=c[1];return[i,function(t){o(t),localStorage.setItem(e,JSON.stringify(t))}]}("recentImages"),t=Object(l.a)(e,2),n=t[0],c=t[1],i=function(e){c([e].concat(Object(o.a)(n)))};return r.a.createElement("div",{className:"App"},r.a.createElement(A,{images:n,prependRecentImage:i}),r.a.createElement(x,{prependRecentImage:i}),r.a.createElement(I,{prependRecentImage:i}),r.a.createElement("div",null,"Powered by Giphy"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.npmjs.com/package/@giphy/js-fetch-api"},"@giphy/js-fetch-api")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://giphy.com/"},"https://giphy.com/")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://developers.giphy.com/"},"https://developers.giphy.com/")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.github.com/aizatto/giphy-markdown/"},"GitHub"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,t,n){e.exports=n(171)},98:function(e,t,n){}},[[93,1,2]]]);
//# sourceMappingURL=main.b754255e.chunk.js.map