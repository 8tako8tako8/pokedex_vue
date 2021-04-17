(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,o=1;o<r.length;o++){var c=r[o];0!==s[c]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},s={app:0},n=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/pokedex-app/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"1efe":function(t,e,r){"use strict";r("c9e5")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},n=[],i={name:"App"},o=i,c=r("2877"),l=Object(c["a"])(o,s,n,!1,null,null,null),u=l.exports,d=r("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"body"},[t._m(0),r("br"),t.loaded?r("div",{staticClass:"itemContainer"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},t._l(t.list,(function(e,a){return r("div",{key:a},[r("div",{staticClass:"col-sm-3 col-xs-6"},[r("div",{staticClass:"rounded-circle"},[r("div",{staticClass:"router-link"},[r("router-link",{attrs:{to:{name:"pokemon",params:{id:e.id,item:e}}}},[r("img",{attrs:{width:"200",src:e.sprites.other["official-artwork"].front_default}}),r("h4",[t._v(t._s(e.id)+". "+t._s(e.name))])])],1)]),r("br")])])})),0)])]):t._e(),r("infinite-loading",{attrs:{spinner:"spiral"},on:{infinite:t.infiniteHandler}},[r("div",{attrs:{slot:"spinner"},slot:"spinner"},[t._v("Loading...")]),r("div",{attrs:{slot:"no-more"},slot:"no-more"},[t._v("Completed")])])],1)},f=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sticky-content"},[r("h1",{staticClass:"p-3 mb-2 bg-secondary text-white"},[t._v("Pokedex")])])}],m=r("bc3a"),b=r.n(m),v={name:"pokedex",data:function(){return{list:[],url:"https://pokeapi.co/api/v2/pokemon/",loaded:!0,page:1,error:!1,errorMessage:""}},methods:{infiniteHandler:function(t){var e=this;b.a.get(this.url+this.page).then((function(r){e.page<898?(e.list.push(r["data"]),e.page+=1,t.loaded()):t.complete()}))}}},h=v,_=(r("f893"),Object(c["a"])(h,p,f,!1,null,"297bbc6f",null)),g=_.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"body"},[r("h1",{staticClass:"p-3 mb-2 bg-secondary text-white"},[t._v("Pokedex")]),r("b-button",{staticClass:"ml-3 mt-2",attrs:{pill:"",variant:"primary"},on:{click:t.goBack}},[t._v("back")]),r("br"),r("br"),r("br"),r("br"),r("br"),r("h2",[t._v(t._s(t.$route.params.item.id)+". "+t._s(t.$route.params.item.name))]),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6 col-xs-6"},[r("b-img",{attrs:{width:"300px",src:t.$route.params.item.sprites.other["official-artwork"].front_default}})],1),r("div",{staticClass:"col-sm-3 col-xs-6"},[r("br"),r("br"),r("div",{staticClass:"container"},[r("div",{staticClass:"rounded",staticStyle:{width:"220px",height:"100px","background-color":"white"}},[r("div",{staticClass:"ml-3"},[r("h4",[t._v("TYPE:")]),t._l(t.$route.params.item.types,(function(e,a){return r("div",{key:a,staticClass:"text-right mr-5"},[r("h4",[t._v(t._s(e.type.name))])])}))],2)])]),r("br"),r("div",{staticClass:"container"},[r("div",{staticClass:"rounded",staticStyle:{width:"220px",height:"250px","background-color":"white"}},[r("div",{staticClass:"ml-3"},[r("h3",[t._v("base stats")]),r("h4",[t._v("HP: "+t._s(t.$route.params.item.stats[0].base_stat))]),r("h4",[t._v("attack: "+t._s(t.$route.params.item.stats[1].base_stat))]),r("h4",[t._v("defense: "+t._s(t.$route.params.item.stats[2].base_stat))]),r("h4",[t._v("special-attack: "+t._s(t.$route.params.item.stats[3].base_stat))]),r("h4",[t._v("speed: "+t._s(t.$route.params.item.stats[4].base_stat))])])])])])])]),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br")],1)},k=[],w={data:function(){return{}},methods:{goBack:function(){this.$router.go(-1)}}},x=w,C=(r("1efe"),Object(c["a"])(x,y,k,!1,null,"61af27b8",null)),$=C.exports;a["default"].use(d["a"]);var O=new d["a"]({routes:[{path:"/",name:"pokedex",component:g},{path:"/pokemon/:id",name:"pokemon",component:$}],mode:"history"}),j=r("e166"),P=r.n(j),S=r("5f5b");r("f9e3"),r("2dd8");a["default"].use(P.a),a["default"].use(S["a"]),a["default"].config.productionTip=!1,new a["default"]({router:O,render:function(t){return t(u)}}).$mount("#app")},b8d4:function(t,e,r){},c9e5:function(t,e,r){},f893:function(t,e,r){"use strict";r("b8d4")}});
//# sourceMappingURL=app.79aea6ac.js.map