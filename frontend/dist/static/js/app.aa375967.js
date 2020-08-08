(function(t){function e(e){for(var n,c,i=e[0],o=e[1],u=e[2],h=0,f=[];h<i.length;h++)c=i[h],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var o=a[i];0!==r[o]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},s=[];function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"1a12":function(t,e,a){},"5dfc":function(t,e,a){"use strict";var n=a("1a12"),r=a.n(n);r.a},"7d9c":function(t,e,a){},aeff:function(t,e,a){"use strict";var n=a("7d9c"),r=a.n(n);r.a},cd49:function(t,e,a){"use strict";a.r(e);a("e623"),a("e379"),a("5dc8"),a("37e1"),a("5abe");var n=a("289d"),r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("section",{staticClass:"section is-medium"},[a("div",{staticClass:"container"},[a("h2",{staticClass:"subtitle"},[t._v(" Calculate HTML/favicon hashes for searching on BinaryEdge, Shodan and Spyse ")]),a("Calculator"),a("hr"),a("h5",{staticClass:"title is-5"},[t._v("Note")]),t._m(0)],1)])],1)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"content"},[t._v(" It only accepts a "),a("code",[t._v("base URL")]),t._v(" and "),a("code",[t._v("/favicon.ico")]),t._v(" as an input. ")])}],i=a("d4ec"),o=a("262e"),u=a("2caf"),l=a("9ab4"),h=a("60a3"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-field",[a("b-input",{model:{value:t.url,callback:function(e){t.url=e},expression:"url"}})],1),a("div",{staticClass:"has-text-centered"},[a("b-button",{attrs:{type:"is-light"},on:{click:t.calculate}},[t._v("Calculate")])],1),t.hasHashes()?a("div",{staticClass:"links"},[a("LinkList",{attrs:{hashes:t.hashes}})],1):t._e()],1)},p=[],b=(a("96cf"),a("1da1")),v=a("bee2"),d=a("bc3a"),y=a.n(d),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("BinaryEdge",{attrs:{hashes:t.hashes}}),a("hr"),a("Shodan",{attrs:{hashes:t.hashes}}),a("hr"),a("Spyse",{attrs:{hashes:t.hashes}})],1)},O=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("a",{attrs:{href:t.link,target:"_blank"}},[t._v(t._s(t.query))])])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("img",{attrs:{src:"https://www.google.com/s2/favicons?domain=binaryedge.io",alt:"shodan"}})])}],g=(a("caad"),a("2532"),a("4328")),k=function(t){Object(o["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return Object(v["a"])(a,[{key:"queryType",get:function(){return this.hashes.contentType.includes("text/html")?"html":"favicon"}},{key:"query",get:function(){return"html"===this.queryType?"web.body.sha256:".concat(this.hashes.sha256):"web.favicon.md5:".concat(this.hashes.md5)}},{key:"link",get:function(){var t="https://app.binaryedge.io/services/query?",e={query:this.query};return t+g["stringify"](e)}}]),a}(h["c"]);Object(l["a"])([Object(h["b"])()],k.prototype,"hashes",void 0),k=Object(l["a"])([h["a"]],k);var w=k,x=w,q=a("2877"),C=Object(q["a"])(x,j,_,!1,null,null,null),E=C.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("a",{attrs:{href:t.link,target:"_blank"}},[t._v(t._s(t.query))])])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("img",{attrs:{src:"https://www.google.com/s2/favicons?domain=shodan.io",alt:"shodan"}})])}],S=function(t){Object(o["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return Object(v["a"])(a,[{key:"queryType",get:function(){return this.hashes.contentType.includes("text/html")?"html":"favicon"}},{key:"query",get:function(){return"html"===this.queryType?"http.html_hash:".concat(this.hashes.mmh3):"http.favicon.hash:".concat(this.hashes.mmh3)}},{key:"link",get:function(){var t="https://shodan.io/search?",e={query:this.query};return t+g["stringify"](e)}}]),a}(h["c"]);Object(l["a"])([Object(h["b"])()],S.prototype,"hashes",void 0),S=Object(l["a"])([h["a"]],S);var P=S,L=P,N=Object(q["a"])(L,T,$,!1,null,null,null),M=N.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("a",{attrs:{href:t.link,target:"_blank"}},[t._v(t._s(t.query))])])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("img",{attrs:{src:"https://www.google.com/s2/favicons?domain=spyse.com",alt:"spyse"}})])}],B=function(t){Object(o["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return Object(v["a"])(a,[{key:"queryType",get:function(){return this.hashes.contentType.includes("text/html")?"html":"favicon"}},{key:"query",get:function(){if("html"===this.queryType)return"N/A";var t=[{domain_info_favicon_hash:{value:this.hashes.sha256,operator:"eq"}}];return JSON.stringify(t)}},{key:"link",get:function(){if("N/A"===this.query)return"/";var t="https://spyse.com/advanced-search/domain?",e={search_params:this.query};return t+g["stringify"](e)}}]),a}(h["c"]);Object(l["a"])([Object(h["b"])()],B.prototype,"hashes",void 0),B=Object(l["a"])([h["a"]],B);var J=B,R=J,I=Object(q["a"])(R,H,A,!1,null,null,null),U=I.exports,G=function(t){Object(o["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(h["c"]);Object(l["a"])([Object(h["b"])()],G.prototype,"hashes",void 0),G=Object(l["a"])([Object(h["a"])({components:{BinaryEdge:E,Shodan:M,Spyse:U}})],G);var z=G,D=z,F=Object(q["a"])(D,m,O,!1,null,null,null),K=F.exports,Q=function(t){Object(o["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.url="https://www.google.com/favicon.ico",t.hashes=void 0,t}return Object(v["a"])(a,[{key:"calculate",value:function(){var t=Object(b["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.get("/api/hashes/calculate",{params:{url:this.url}});case 3:e=t.sent,this.hashes=e.data,this.$forceUpdate(),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),a=t.t0.response.data,"error"in a?alert(a.error):alert(t.t0);case 12:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"hasHashes",value:function(){return void 0!==this.hashes}}]),a}(h["c"]);Q=Object(l["a"])([Object(h["a"])({components:{LinkList:K}})],Q);var V=Q,W=V,X=(a("aeff"),Object(q["a"])(W,f,p,!1,null,"0b5f7e4a",null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{attrs:{"fixed-top":!0}},[a("template",{slot:"brand"},[a("b-navbar-item",[a("h1",{staticClass:"title"},[t._v("mmhdan")])])],1),a("template",{slot:"end"},[a("b-navbar-item",[a("a",{staticClass:"navbar-item",attrs:{href:"/docs",target:"_blank"}},[t._v("API")])]),a("b-navbar-item",[a("a",{staticClass:"navbar-item",attrs:{href:"https://github.com/ninoseki/mmhdan",target:"_blank"}},[t._v("GitHub")])])],1)],2)},tt=[],et=function(t){Object(o["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(h["c"]);et=Object(l["a"])([h["a"]],et);var at=et,nt=at,rt=(a("5dfc"),Object(q["a"])(nt,Z,tt,!1,null,null,null)),st=rt.exports,ct=function(t){Object(o["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(h["c"]);ct=Object(l["a"])([Object(h["a"])({components:{Calculator:Y,Navbar:st}})],ct);var it=ct,ot=it,ut=Object(q["a"])(ot,s,c,!1,null,"09f26b20",null),lt=ut.exports;r["a"].use(n["a"]),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(lt)}}).$mount("#app")}});
//# sourceMappingURL=app.aa375967.js.map