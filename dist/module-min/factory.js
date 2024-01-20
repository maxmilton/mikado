import{TemplateDOM,Template,MikadoOptions,NodeCache,ProxyCache}from"./type.js";import Mikado,{includes}from"./mikado.js";import{listen}from"./event.js";export function create_path(a,b,c){let d;c&&(d=a._mkc)&&(a._mkc=null);const e=b.length,f=[],g={};for(let h,i,j,k,l=0,m=null;l<e;l++)h=b[l],i=h.v,i?(k=j=g[i],!k&&(j=resolve(a,i,g),k=j[0],j=j[1]||k)):k=j=a,c&&(!1,m=d?d[l]:{},j._mkc=m),!1,f[l]=new Cache(m,k,"");return a._mkp=f,f}function resolve(a,b,c){for(let d=0,e=b.length,f="";d<e;d++){const e=b[d];if(f+=e,c[f])a=c[f];else{if(">"===e)a=a.firstChild;else{if("|"===e)return[a.firstChild,a];if("@"===e)return[a.style,a];a=a.nextSibling}c[f]=a}}return[a]}export function construct(a,b,c,d,e,f){!1,f||(a.fullproxy=1);const g=e||(b.tag?b.svg?document.createElementNS("http://www.w3.org/2000/svg",b.tag):document.createElement(b.tag):document.createTextNode(b.text));let h,j;if(j=b.class)if("object"!=typeof j)e||(g.className=j);else if(!1,c.push(new Cache(h={_c:""},g,d)),j=j[0]){const b={fn:"_c",index:c.length-1};init_proxy(a,j,b)}else a.fullproxy=0;if(j=b.attr)for(const b in j){let f=j[b];if("object"!=typeof f)e||g.setAttribute(b,f);else if(!1,h||c.push(new Cache(h={},g,d)),h["_a"+b]=!1,f=f[0]){const d={fn:"_a",index:c.length-1,key:b};init_proxy(a,f,d)}else a.fullproxy=0}if(j=b.event)for(const a in j)e||g.setAttribute(a,j[a]),listen(a);if(j=b.style)if("object"!=typeof j)e||(g.style.cssText=j);else if(!1,c.push(new Cache(h||(h={}),g.style,d+"@")),h._s="",j=j[0]){const b={fn:"_s",index:c.length-1};init_proxy(a,j,b)}else a.fullproxy=0;if(j=b.text){if("object"==typeof j){let f=g;if(j=j[0],b.tag?(d+="|",f=!e&&g.firstChild,!f&&(f=document.createTextNode(j),g.appendChild(f))):h={},(h||(h={}))._t=j,!1,c.push(new Cache(h,f,d)),j){const b={fn:"_t",index:c.length-1};init_proxy(a,j,b)}else a.fullproxy=0}else e||(b.tag?g.textContent=j:g.nodeValue=j);}else if(j=b.child){if(e&&(e=e.firstChild,!e))return!1,null;j.constructor!==Array&&(j=[j]);for(let b,f=0,h=j.length;f<h;f++){b=j[f],d+=f?"+":">";const i=construct(a,b,c,d,e,1);if(!e)g.appendChild(i);else if(f<h-1&&(e=e.nextSibling,!e))return!1,null}}else if(j=b.html){if("object"!=typeof j)e||(g.innerHTML=j);else if(!1,h||c.push(new Cache(h={},g,d)),h._h="",j=j[0]){const b={fn:"_h",index:c.length-1};init_proxy(a,j,b)}else a.fullproxy=0;}else if(j=b.inc){!1,!1,h||c.push(new Cache(null,g,d));let b;if("string"==typeof j){if(b=includes[j],!(b instanceof Mikado)){const a=b[0],c=b[1];c&&(c.async=!1,e&&(c.root=e,c.hydrate=!0)),includes[j]=b=new Mikado(a,c)}}else if(1!==j){const c=a.inc.length;j=j;const d={name:a.name+"|"+c,tpl:j,key:j.key,cache:j.cache,fn:a.tpl.fn},f={recycle:a.recycle,cache:a.cache,pool:a.pool,state:a.state,mount:g,hydrate:!!e};b=new Mikado(d,f)}1!==j&&a.inc.push(b)}return h&&(g._mkc=h),f||(g._mkp=c),g}function init_proxy(a,b,c){!1,a.proxy||(a.proxy={}),(a.proxy[b]||(a.proxy[b]=[])).push(c)}export function Cache(a,b,c){this.c=a,this.n=b,this.v=c}Cache.prototype._a=function(a,b,c,d){if(this.c){if(c&&((d||0===d)&&(c=c[d]||(c[d]={})),c["_a"+a]=b),this.c["_a"+a]===b)return void 0;!1,!1,this.c["_a"+a]=b}!1===b?this.n.removeAttribute(a):this.n.setAttribute(a,b)},Cache.prototype._t=function(a,b,c){if(this.c){if(b&&((c||0===c)&&(b=b[c]||(b[c]={})),b._t=a),this.c._t===a)return void 0;!1,!1,this.c._t=a}this.n.nodeValue=a},Cache.prototype._c=function(a,b,c){if(this.c){if(b&&((c||0===c)&&(b=b[c]||(b[c]={})),b._c=a),this.c._c===a)return void 0;!1,!1,this.c._c=a}this.n.className=a},Cache.prototype._s=function(a,b,c){if(this.c){if(b&&((c||0===c)&&(b=b[c]||(b[c]={})),b._s=a),this.c._s===a)return void 0;!1,!1,this.c._s=a}this.n.cssText=a},Cache.prototype._h=function(a,b,c){if(this.c){if(b&&((c||0===c)&&(b=b[c]||(b[c]={})),b._h=a),this.c._h===a)return void 0;!1,!1,this.c._h=a}this.n.innerHTML=a},Cache.prototype._a,Cache.prototype._t,Cache.prototype._s,Cache.prototype._c,Cache.prototype._h;