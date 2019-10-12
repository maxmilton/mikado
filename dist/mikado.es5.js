/**!
 * Mikado.js v0.6.31 (ES5)
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/mikado
 */
(function(){'use strict';var l;Object.assign||(Object.assign=function(){var a=arguments,b=a.length,c=a[0];if(1<b)for(var d=1,e,f,g;d<b;d++){e=a[d];f=Object.keys(e);g=f.length;for(var h=0,k;h<g;h++)k=f[h],c[k]=e[k]}return c});Object.values||(Object.values=function(a){for(var b=Object.keys(a),c=b.length,d=Array(c),e=0;e<c;e++)d[e]=a[b[e]];return d});window.requestAnimationFrame||(window.requestAnimationFrame=window.setTimeout);window.cancelAnimationFrame||(window.cancelAnimationFrame=window.clearTimeout);
window.Promise||(window.Promise=function(){function a(b){this.g=null;var c=this;b(function(d){c.g&&(c.g(d),c.g=null)})}a.prototype.then=function(b){this.g=b};return a}());function n(a,b,c,d){window[(a?"add":"remove")+"EventListener"](b,c,d||{passive:!0,capture:!0})}
function x(a,b){b||(b=a.type);var c=a.target,d=c,e=c["_e_"+b];if(e)d=c["_r_"+b];else{for(;d;){if(d===A)return;if(e=d.getAttribute(b)){var f=e.indexOf(":");if(-1!==f){var g=e.substring(0,f);f=e.substring(f+1);e=0;for(d=d.parentElement;d!==A;){if(d.hasAttribute(f)){e=g;break}d=d.parentElement}}break}d=d.parentElement}if(!e)return;c["_e_"+b]=e;c["_r_"+b]=d}if(b=B[e])a.preventDefault(),b(d,a,c);a.stopPropagation()}var D={},B={},A=document.body;E.route=E.prototype.route=function(a,b){B[a]=b;return this};
var F="ontouchstart"in window||navigator.msMaxTouchPoints,G,H,I;if(F){var J=function(a,b){b&&(b=b[0]);G=b?b.clientX:a.pageX;H=b?b.clientY:a.pageY},aa=function(a){var b=G,c=H;J(a,a.changedTouches);50>Math.abs(G-b)&&50>Math.abs(H-c)&&x.call(this,a,"click")},ba=function(a){J(a,a.touches)};I=function(a){n(a,"touchstart",ba,!1);n(a,"touchend",aa,!1)}}E.listen=E.prototype.listen=function(a,b){D[a]||(F&&"click"===a?I(1):n(1,a,x,b||!0),D[a]=1);return this};
E.unlisten=E.prototype.unlisten=function(a,b){D[a]&&(F&&"click"===a?I(0):n(0,a,x,b||!0),D[a]=0);return this};l=E.prototype;l.move=function(a,b){if("number"===typeof a){var c=a;a=this.b[a]}else c=a._i;0>b&&(b=this.length+b-1);c!==b&&this.shift(a,b-c);return this};
l.shift=function(a,b,c){if(!b)return this;if("number"===typeof a){var d=a;a=this.b[a]}else d=a._i;var e=0>b;if(e&&d||!e&&d<this.length-1){b=e?Math.max(d+b,0):Math.min(d+b,this.length-1);var f=this.b[b],g=e&&1<d-b||!e&&1<b-d;if(!g&&this.F&&(this.store||this.w)){var h=this.store?this.store[d]:a._m;this.update(a,this.store?this.store[b]:f._m,c,b);this.update(f,h,c,d)}else this.root.insertBefore(a,e?f:this.b[b+1]||null);if(g){f=this.b[d];a=this.store&&this.store[d];if(e)for(e=d;e>b;e--)d=this.b[e]=this.b[e-
1],d._i=e,this.store&&(this.store[e]=this.store[e-1]);else for(e=d;e<b;e++)d=this.b[e]=this.b[e+1],d._i=e,this.store&&(this.store[e]=this.store[e+1]);d=this.b[b]=f;d._i=b;this.store&&(this.store[b]=a)}else c=this.b,e=this.store,a._i=b,f._i=d,c[d]=f,c[b]=a,e&&(f=e[b],e[b]=e[d],e[d]=f)}return this};l.up=function(a,b){(!b||0<b)&&this.shift(a,-(b||1));return this};l.down=function(a,b){(!b||0<b)&&this.shift(a,b||1);return this};l.first=function(a){return this.shift(a,-this.length)};
l.last=function(a){return this.shift(a,this.length)};l.before=function(a,b){"number"!==typeof a&&(a=a._i);"number"!==typeof b&&(b=b._i);b!==a+1&&(0>b&&(b=this.length+b,0>a&&b--),0>a&&(a=this.length+a-1),this.shift(a,b-a-1));return this};l.after=function(a,b){"number"!==typeof a&&(a=a._i);"number"!==typeof b&&(b=b._i);b!==a-1&&(0>b&&(b=this.length+b-2,0>a&&b++),0>a&&(a=this.length+a-1),this.shift(a,b-a+1));return this};
l.swap=function(a,b,c){if(a!==b){if("number"===typeof a){var d=a;a=this.b[a]}else d=a._i;if("number"===typeof b){var e=b;b=this.b[b]}else e=b._i;if(d!==e)if(this.F&&(this.store||this.w)){var f=this.store?this.store[d]:a._m;this.update(a,this.store?this.store[e]:b._m,c,e);this.update(b,f,c,d)}else this.root.insertBefore(a,b),this.root.insertBefore(b,d+1===e?a:this.b[d+1]),a._i=e,b._i=d,this.b[d]=b,this.b[e]=a,this.store&&(a=this.store[e],this.store[e]=this.store[d],this.store[d]=a)}return this};var K={};function L(a){return K[a]=new RegExp("(?:^|\\s)"+a+"(?!\\S)","g")}function M(a,b){N(a,b)||(a.className+=" "+b,a._c+=" "+b);return this}function O(a,b){b=(a._c||(a._c=a.className)).replace(K[b]||L(b),"");a._c!==b&&(a.className=b,a._c=b);return this}function N(a,b){return!!(a._c||(a._c=a.className)).match(K[b]||L(b))}function ca(a,b){var c="_a_"+b,d=a[c];return d||""===d?d:a[c]=a.getAttribute(b)};var da=window.localStorage;E.prototype.export=function(){if(this.store)var a=this.store;else if(this.w){a=Array(this.length);for(var b=0;b<this.length;b++)a[b]=this.b[b]._m}a&&da.setItem(this.o,JSON.stringify(a));return this};E.prototype.import=function(){var a=da.getItem(this.o);a&&(this.store=a=JSON.parse(a));return this};var ea={_x:function(a,b){a.nodeValue=b},_h:function(a,b){a.innerHTML=b},_c:function(a,b){a.className=b},_cs:function(a,b){(a._s||(a._s=a.style)).cssText=b},_a:function(a,b,c){a.setAttribute(c,b)}};function fa(a,b,c){if(a[b]!==c){var d=this.C["data."+b];if(d)for(var e=0,f=d.length,g;e<f;e++)g=d[e],ea[g[0]](this.path[g[1]],c,g[2]||b);a[b]=c}return!0}
if(!window.Proxy){var ha=function(a,b){this.path=b.path;this.C=b.C;b=Object.keys(a);for(var c=0,d=b.length;c<d;c++){var e=b[c];this.g(a,e,a[e])}return a};ha.prototype.g=function(a,b,c){var d=this,e=c;Object.defineProperty(a,b,{get:function(){return e},set:function(f){if(e!==f){var g=d.C["data."+b];if(g)for(var h=0,k=g.length,m;h<k;h++)m=g[h],ea[m[0]](d.path[m[1]],f,m[2]||b);e=f}}})};window.Proxy=ha};var ia=window,ja=ia.requestAnimationFrame,ka=ia.cancelAnimationFrame,la={reuse:!0,prefetch:!0,store:!0,loose:!0,pool:!0,cache:!0},ma={},P={},R={},S={},T={};function E(a,b,c){a.nodeType||(c=b,b=a,a=null);b||(c=a);a?this.mount(a):(this.root=this.b=null,this.length=0);this.init(b,c)}var na=E.register=function(a,b){b||(b=a,a=b.n);P[a]=b;return E},oa=E.new=function(a,b,c){return new E(a,b,c)};l=E.prototype;
l.mount=function(a){this.root!==a&&(this.key&&this.root&&(this.root._o=this.g,this.g=a._o||{}),this.root=a,pa(this),this.b=a._d||(a._d=qa(a.children)),this.length=this.b.length);return this};l.sync=function(a){this.root._d=this.b=qa(this.root.children);this.length=this.b.length;if(a&&this.cache)for(a=0;a<this.length;a++)for(var b=this.b[a]._p,c=0,d;c<b.length;c++)d=b[c],d._c=d._h=d._x=d._cs=null;return this};l.index=function(a){return a._i};l.node=function(a){return this.b[a]};
l.data=function(a){var b="object"===typeof a;return this.w?(b?a:this.b[a])._m:this.store[b?a._i:a]};l.find=function(a){if(this.key)return this.g["object"!==typeof a?a:a[this.key]];for(var b=0;b<this.length;b++)if(this.data(b)===a)return this.b[b]};l.search=function(a){a=Object.values(a).join("^");for(var b=0;b<this.length;b++)if(Object.values(this.data(b)).join("^")===a)return this.b[b]};
l.where=function(a){for(var b=Object.keys(a),c=b.length,d=[],e=0,f,g;e<this.length;e++){f=this.data(e);g=!0;for(var h=0,k;h<c;h++)if(k=b[h],f[k]!==a[k]){g=!1;break}g&&(d[d.length]=this.b[e])}return d};
l.init=function(a,b){"string"===typeof a?a=P[a]:(b||!a||a.n||(b=a,a=null),a?a.n&&na(a):a=P[this.o]);this.I=b=b?Object.assign({},this.I||la,b):la;this.F=b.reuse;this.state=b.state||ma;this.cache=b.cache;this.async=b.async;this.A=0;var c=b.store;this.w="object"!==typeof c&&b.loose;!c||this.w?this.store=this.D=!1:this.store=(this.D="object"===typeof c)?c:[];this.proxy=!1;c=a.n;this.o!==c&&(this.o=c,this.v=a.d,this.include=this.B=this.l=null,this.H=b.prefetch&&U(this,a),pa(this),this.g=(this.key=a.k)&&
{},this.u=this.F&&b.pool&&(S[c]||(S[c]=[])),this.G=this.key&&(b.keep||this.u)&&(T[c]||(T[c]={})),this.size=this.u&&b.size);return this};E.once=function(a,b,c,d,e){var f=oa(a,b);if(e){var g=e;e=function(){f.destroy(!0);g()}}f.render(c,d,e);e||f.destroy(!0);return E};function pa(a){if(a.root){var b=a.root._t;b!==a.o&&(a.root._t=a.o,b&&(a.key&&(a.g={}),a.length=0,a.remove(0,a.length)))}}function qa(a){for(var b=a.length,c=Array(b),d=0,e;d<b;d++)e=a[d],e._i=d,c[d]=e;return c}l=E.prototype;
l.create=function(a,b,c){var d=this.key,e=d&&a[d],f,g;if(d&&((g=this.G)&&(f=g[e])||(f=this.g[e])))if(g){if(g[e]=null,g=this.u){var h=f._n;f._n=null;var k=g.pop();k!==f&&(k._n=h,g[h]=k)}}else d=!1;else if((f=this.u)&&f.length)f=f.pop(),g&&(f._n=null,g[f._k]=null);else var m=f=this.H||(this.H=U(this,P[this.o]));this.apply(f,a,b,c);m&&(f=m.cloneNode(!0));d&&(f._k=e,this.g[e]=f);return f};
l.apply=function(a,b,c,d){if(!this.v)return d||0===d||(d=a._i),b||(b=this.store?this.store[d]:a._m),this.B(a._p||ra(this,a),!1,b,d,c)};l.refresh=function(a,b){var c;if("number"===typeof a)var d=this.b[a];else a&&"number"===typeof(c=a._i)&&(d=a,a=c);if(d)return this.apply(d,null,b,a);a=this.length;d=(c=this.store)?c.length:a;var e=a<d?a:d,f=0;if(f<e)for(;f<e;f++)this.apply(this.b[f],null,b,f);if(f<d)for(;f<d;f++)this.add(c[f],b);else f<a&&this.remove(d,a-d);c&&this.w&&(this.store=null);return this};
l.render=function(a,b,c,d){if(!d){!b||"function"!==typeof b&&"boolean"!==typeof b||(c=b,b=null);this.A&&this.cancel();if(c){var e=this;this.A=ja(function(){e.A=0;e.render(a,b,null,!0);"function"===typeof c&&c()});return this}if(this.async){var f=this;return new Promise(function(p){f.A=ja(function(){f.A=0;f.render(a,b,null,!0);p()})})}}if(this.v)this.b[0]||this.add();else{if(!a)return this.refresh();d=this.length;var g=a.length;"undefined"===typeof g&&(a=[a],g=1);if(!g)return this.remove(0,d);var h=
this.key;h||this.F||(this.remove(0,d,g),d=0);var k=d<g?d:g,m=0;if(m<k)for(;m<k;m++){var v=this.b[m],u=a[m],q=void 0,r=void 0;h&&v._k!==(q=u[h])?(r=this.g[q])?sa(this,v,r,u,b,m):this.replace(v,u,b,m):(h&&(v._i=m),this.update(v,u,b,m))}if(m<g)for(;m<g;m++)this.add(a[m],b);else g<d&&this.remove(g,d-g)}return this};function sa(a,b,c,d,e,f){var g=c._i;c._i=f;b._i=g;a.b[f]=c;a.b[g]=b;a.store?(a.store[g]=a.store[f],a.store[f]=d):a.w&&(c._m=b._m,b._m=d);a.root.insertBefore(c,b);a.apply(c,d,e,f)}
l.add=function(a,b,c,d){if(!d)if("number"===typeof b){c=b;b=null;var e=!0}else if(c||0===c)e=!0;c=d||e?c:this.length;b=this.create(a,b,c);if(this.proxy){var f=b._p||ra(this,b);a=new Proxy(a,{path:f,C:this.proxy,set:fa})}this.store?e?this.store.splice(c,0,a):this.store[c]=a:this.w&&(b._m=a);b._i=c;if(e)for(this.root.insertBefore(b,this.b[c]||null),this.b.splice(c,0,b),this.length++;++c<this.length;)this.b[c]._i=c;else d?this.root.replaceChild(b,d):(this.root.appendChild(b),this.length++),this.b[c]=
b;return this};l.clear=function(){return this.remove(0,this.length)};l.destroy=function(a){a&&this.unload();this.H=this.B=this.l=this.o=this.root=this.b=null;this.length=0;this.g={};this.store=this.include=null};l.cancel=function(){this.A&&(ka(this.A),this.A=null)};l.append=function(a,b,c){if("number"===typeof b){c=b;b=null;var d=!0}else d=c||0===c;for(var e=a.length,f=0;f<e;f++)this.add(a[f],b,d?c++:null);return this};
l.remove=function(a,b,c){var d=this.length;"object"===typeof a?a=a._i:0>a&&(a=d+a-1);if(!d||a>=d)return this;0>b?(1>b&&(a-=b+1,0>a&&(a=0)),b*=-1):b||(b=1);if(b>=d){this.store&&!this.D&&(this.store=c?Array(c):[]);var e=this.b;b=e.length;this.root.textContent="";this.root._d=this.b=c?Array(c):[];d=0}else this.store&&!this.D&&this.store.splice(a,b),e=this.b.splice(a,b),d-=b;this.length=d;if(a<d)for(;a<d;a++)this.b[a]._i=a;var f;if(this.u){a=this.u.length;if(f=this.size){if(a>=f)return this;a+b>f&&(e.splice(f-
a),b=e.length)}if(this.cache&&1<b&&!this.key){f=e;c=f.length;for(var g=c/2|0,h=0,k;h<g;h++)k=f[h],f[h]=f[c-h-1],f[c-h-1]=k}f=a+1;S[this.o]=this.u=a?this.u.concat(e):e}a=this.key;c=this.G;for(g=0;g<b;g++){h=e[g];if(d){if(this.include)for(k=0;k<this.include.length;k++)this.include[k].clear();this.root.removeChild(h)}a&&(k=h._k,this.g[k]=null,c&&(c[k]=h,f&&(h._n=f+g-1)))}return this};
l.replace=function(a,b,c,d){"undefined"===typeof d&&(d=a._i);this.add(b,c,d,a);this.key&&(b=a._k,this.g[b]=null,this.G&&(this.G[b]=a));this.u&&(b=this.u,this.key&&(a._n=b.length),b[b.length]=a);return this};l.update=function(a,b,c,d){"undefined"===typeof d&&("number"===typeof a?(d=a,a=this.b[a]):d=a._i);if(this.key){var e=a._k,f=b[this.key];e!==f&&(this.g[e]=null,this.g[f]=a,a._k=f)}this.store?this.store[d]=b:this.w&&(a._m=b);return this.apply(a,b,c,d)};
function ra(a,b){for(var c=a.l.length,d={},e=Array(c),f=0;f<c;f++){var g=a.l[f],h=f,k;if(!(k=d[g])){k=b;for(var m=0,v=g.length,u="";m<v;m++){var q=g[m];u+=q;d[u]?k=d[u]:(">"===q?k=k.firstElementChild:"+"===q?k=k.nextElementSibling:"|"===q&&(k=k.firstChild),d[u]=k)}}e[h]=k}b._p=e;b.$={};return e}var V;
function U(a,b,c,d,e){if(!c){var f=R[b.n+(a.cache?"$":"")];if(f)return a.B=f.B,a.v=f.v,a.include=f.J,a.proxy=f.proxy,a.l=f.l,f.node}f=document.createElement(b.t||"div");c||(c=0,d="&",V="",a.l=[],f._p=e=[],f.$={});var g=b.s,h=b.i,k=b.x,m=b.h,v=b.a,u=b.e,q=b.c,r=b.j,p=a.l.length,w=0,t="";r&&(t+=";"+r,-1<t.indexOf("self")&&(a.l[p]=d,e[p]=f,w=2));q&&("object"===typeof q?(r=q[1],q=q[0],t+=a.cache?";v="+q+";if(self._c!==v){self._c=v;self.className=v}":";self.className="+q,r&&(a.proxy||(a.proxy={}),a.proxy[q]||
(a.proxy[q]=[]),a.proxy[q].push(["_c",p])),a.l[p]=d,e[p]=f,w++):f.className=q);if(v||u){var C;v&&(C=Object.keys(v));u&&(q=Object.keys(u),C=C?C.concat(q):q);for(q=0;q<C.length;q++){r=C[q];var y=void 0;v&&"undefined"!==typeof(y=v[r])||(y=u[r],a.listen(r));if("object"===typeof y){var Q=y[1];y=y[0];t+=a.cache?";v="+y+";if(self['_a_"+r+"']!==v){self['_a_"+r+"']=v;self.setAttribute('"+r+"',v)}":";self.setAttribute('"+r+"',"+y+")";Q&&(a.proxy||(a.proxy={}),a.proxy[y]||(a.proxy[y]=[]),a.proxy[y].push(["_a",
p,r]));Q=!0;w++}else f.setAttribute(r,y)}Q&&(a.l[p]=d,e[p]=f)}g&&("string"===typeof g?f.style.cssText=g:g.length&&(C=g[1],g=g[0],t+=a.cache?";v="+g+";if(self._cs!==v){self._cs=v;(self._s||(self._s=self.style)).cssText=v}":";self.style.cssText="+g,C&&(a.proxy||(a.proxy={}),a.proxy[g]||(a.proxy[g]=[]),a.proxy[g].push(["_cs",p])),a.l[p]=d,e[p]=f,w++));if(b["@"]||b.r){a.include||(a.include=[]);var z=b["@"]||b.i;b["@"]?"string"===typeof z&&(z=P[z]):(z.n=b["@"]=a.o+"@"+a.include.length,delete b.i);h=null;
k=V+=";this.include["+a.include.length+"].mount(p["+p+"]).render("+b.r+(b.m?".slice("+(0<=b.m?"0,"+b.m:b.m)+")":"")+",view)";V="";a.include.push(new E(f,z,Object.assign(a.I,{store:!1,async:!1})));V=k;a.l[p]=d;e[p]=f;a.v=!1}else if(!h)if(b["+"])h=P[b["+"]];else if(k){d+="|";if(m="object"===typeof k)z=k[1],k=k[0];g=document.createTextNode(k);m&&(w&&(ta(w,t,p,a.cache),t="",p++),t+=a.cache?";v="+k+";if(self._x!==v){self._x=v;self.nodeValue=v}":";self.nodeValue="+k,z&&(a.proxy||(a.proxy={}),a.proxy[k]||
(a.proxy[k]=[]),a.proxy[k].push(["_x",p])),a.l[p]=d,e[p]=g,w++);f.appendChild(g)}else m&&("object"===typeof m?(z=m[1],m=m[0],t+=a.cache?";v="+m+";if(self._h!==v){self._h=v;self.innerHTML=v}":";self.innerHTML="+m,z&&(a.proxy||(a.proxy={}),a.proxy[m]||(a.proxy[m]=[]),a.proxy[m].push(["_h",p])),a.l[p]=d,e[p]=f,w++):f.innerHTML=m);b.f&&(V+=";if("+b.f+"){"+(1<w?"self":"p["+p+"]")+".hidden=false",w||(a.l[p]=d,e[p]=f,a.v=!1));w?(a.v=!1,ta(w,t,p,a.cache)):t&&(V+=t);if(h)if(h.length)for(z=">",k=0;k<h.length;k++){k&&
(z+="+");m=h[k];if(t=m["+"])m=P[t];f.appendChild(U(a,m,c+k+1,d+z,e))}else{if(t=h["+"])h=P[t];f.appendChild(U(a,h,c+1,d+">",e))}b.f&&(V+="}else "+(1<w?"self":"p["+p+"]")+".hidden=true");c||(!a.v&&V&&(a.B=Function("p","s","data","index","view",'"use strict";var self,v'+V)),c={B:a.B,v:a.v,l:a.l,node:f},c.J=a.include,c.proxy=a.proxy,R[b.n+(a.cache?"$":"")]=c);return f}function ta(a,b,c,d){V=d||1<a?V+(";self=p["+c+"]"+b):V+b.replace(/self/g,"p["+c+"]")}
E.prototype.load=function(a,b){if(P[a])this instanceof E&&this.init(P[a]),b&&b();else{var c=this,d=new XMLHttpRequest;d.overrideMimeType("application/json");d.open("GET",a,!1!==b);d.onload=function(){var e=this.responseText;if(e){try{var f=JSON.parse(e);na(f);c instanceof E&&c.init(f)}catch(h){var g=h}"function"===typeof b&&b(g)}};d.send()}};E.load=E.prototype.load;E.prototype.unload=function(a){a?"object"===typeof a&&(a=a.n):a=this.o;a&&(P[a]=R[a]=null,S[a]=[],T[a]={},R[a+"$"]=null)};
E.unregister=E.unload=E.prototype.unload;var ua={tap:1,change:1,click:1,dblclick:1,input:1,keydown:1,keypress:1,keyup:1,mousedown:1,mouseenter:1,mouseleave:1,mousemove:1,mouseout:1,mouseover:1,mouseup:1,mousewheel:1,touchstart:1,touchmove:1,touchend:1,reset:1,select:1,submit:1,toggle:1,blur:1,error:1,focus:1,load:1,resize:1,scroll:1},W,va=0;
function X(a,b){var c={};if(!b){W=!0;if("string"===typeof a)if(-1!==a.indexOf("<")){var d=document.createElement("div");d.innerHTML=a;a=d.firstElementChild;c.n=a.id||"tpl_"+va++}else c.n=a,a=document.getElementById(a);else c.n=a.id||"tpl_"+va++;a.content?a=a.content.firstElementChild:"TEMPLATE"===a.tagName&&(a=a.firstElementChild)}if(d=a.tagName){if("INCLUDE"===d)return b=a.getAttribute("from"),c["+"]=b?b:Y(a.firstChild.nodeValue),c;"DIV"!==d&&(c.t=d.toLowerCase())}else return(b=a)&&(b=b.nodeValue)&&
(b=b.replace(/\s+/g," "))&&b.trim()&&(a=b.indexOf("{{@"),-1!==a&&(d=b.indexOf("}}",a),c.j=b.substring(a+3,d),b=b.substring(0,a)+b.substring(d+2)),b&&b.trim()&&(-1!==b.indexOf("{{#")?Z(c,"h",b.replace(/{{#/g,"{{")):Z(c,"x",b))),c.j||b&&b.trim()?c:null;var e=a.attributes;if(e.length)for(var f=0;f<e.length;f++){var g=e[f].nodeName;if("class"===g)Z(c,"c",a.className);else{var h=a.getAttribute(g);"style"===g?Z(c,"s",h):"if"===g?Z(c,"f",h):"include"===g?a.hasAttribute("for")||(g={},(c.i||(c.i=[])).push(g),
Z(g,"+",h)):"for"===g&&"LABEL"!==d?((g=a.getAttribute("include"))&&(c["@"]=Y(g)),Z(c,"r",h)):"max"===g?Z(c,"m",h):"js"===g?c.j=Y(h):"key"===g?Z(c,"k",h.replace("data.","")):("bind"===g&&(h=h.split(":"),2>h.length&&h.unshift("value"),g=h[0],h="{{=="+h[1]+"}}"),ua[g.substring(2)]&&-1!==h.indexOf("{{")&&(g=g.substring(2)),ua[g]?Z(c.e||(c.e={}),g,h):Z(c.a||(c.a={}),g,h))}}a=a.childNodes;if(a.length)if(1<a.length)for(e=d=0;e<a.length;e++)(f=X(a[e],1))&&((c.i||(c.i=[]))[d++]=f);else if(a=X(a[0],1))a.j&&
(c.j=a.j),a.h&&(c.h=a.h),a.x&&(c.x=a.x);b||(c.d=W);return c}function Z(a,b,c){var d=-1!==c.indexOf("{{=="),e=d||-1!==c.indexOf("{{=");-1!==c.indexOf("{{")&&-1!==c.indexOf("}}")?(W=!1,c=c.replace(/{{==/g,"{{").replace(/{{=/g,"{{").replace(/"{{/g,"").replace(/}}"/g,"").replace(/{{/g,"' + ").replace(/}}/g," + '"),a[b]=[("'"+c+"'").replace(/'' \+ /g,"").replace(/ \+ ''/g,"")],d?a[b].push(2):e&&a[b].push(1)):a[b]=c}function Y(a){return a.replace(/{{/g,"").replace(/}}/g,"").trim()};E.compile=X;E.setText=function(a,b){3!==a.nodeType&&(a._h=null,a=a.firstChild||a.appendChild(document.createTextNode(a._x=b)));a._x!==b&&(a.nodeValue=b,a._x=b);return this};E.getText=function(a){if(3!==a.nodeType&&!(a=a.firstChild))return"";var b=a._x;return b||""===b?b:a._x=a.nodeValue};E.setHTML=function(a,b){a._h!==b&&(a.innerHTML=b,a._h=b);return this};E.getHTML=function(a){var b=a._h;return b||""===b?b:a._h=a.innerHTML};E.setClass=function(a,b){a._c!==b&&(a.className=b,a._c=b);return this};
E.getClass=function(a){var b=a._c;return b||""===b?b:a._c=a.className};E.hasClass=N;E.toggleClass=function(a,b){N(a,b)?O(a,b):M(a,b);return this};E.removeClass=O;E.addClass=M;E.setCSS=function(a,b){a._cs!==b&&((a._s||(a._s=a.style)).cssText=b,a._cs=b);return this};E.getCSS=function(a){var b=a._cs;return b||""===b?b:a._cs=(a._s||(a._s=a.style)).getAttribute("style")};E.setAttribute=function(a,b,c){var d="_a_"+b;a[d]!==c&&(a.setAttribute(b,c),a[d]=c);return this};E.getAttribute=ca;
E.hasAttribute=function(a,b){return(a=ca(a,b))||""===a};E.removeAttribute=function(a,b){var c="_a_"+b;null!==a[c]&&(a[c]=null,a.removeAttribute(b));return this};(function(){var a=this||window,b;(b=a.define)&&b.amd?b([],function(){return E}):(b=a.modules)?b.mikado=E:"object"===typeof a.exports?a.module.exports=E:a.Mikado=E})();}).call(this);
