import{Template,TemplateDOM}from"./type.js";const event_types={tap:1,change:1,click:1,dblclick:1,input:1,keydown:1,keypress:1,keyup:1,mousedown:1,mouseenter:1,mouseleave:1,mousemove:1,mouseout:1,mouseover:1,mouseup:1,mousewheel:1,touchstart:1,touchmove:1,touchend:1,touchcancel:1,reset:1,select:1,submit:1,toggle:1,blur:1,error:1,focus:1,load:1,resize:1,scroll:1};function replaceComments(a){return a.replace(/<!--(.*?)-->/g,"")}function strip(a){return a.replace(/({{|}})/g,"").trim()}let message=0,counter=0;export default function compile(a,b,c,d,e,f){if(!1,b)return new Promise(function(c){const d=compile(a);"function"==typeof b&&b(d),c(d)});e||(d=[],c=[d],d.index=e={current:-1,count:0,last:-1,inc:0,included:!1});const g=f?{}:{tpl:{}},h=f?g:g.tpl;if(!f){if("string"==typeof a)if(/<.*>/.test(a)){const b=document.createElement("div");b.innerHTML=a,a=b.firstElementChild}else g.name=a,a=document.getElementById(a);a=a,a.content&&(!g.name&&(g.name=a.id||a.getAttribute("name")),a=a.content.firstElementChild)}const i=a.tagName;if(!i||"SCRIPT"===i){let b;if((b=(i?a.firstChild:a).nodeValue)&&b&&b.trim()){if(b.includes("{{@")){let a=b.replace(/{{@([\s\S]+)}}/g,"$1").trim();if(b=/{{[\s\S]+}}/.test(a)?a.replace(/{{([\s\S]+)}}/g,"{{$1}}"):"",a&&(a=a.replace(/{{([\s\S]+)}}/g,"")),a&&d.push(a),"SCRIPT"===i)return b.trim()&&(h.text=b,h.tag=i),h}b&&b.trim()&&(b.includes("{{#")?handle_value(h,"html",b,!1,null,e,c,d):(e.count++,handle_value(h,"text",b,!1,null,e,c,d)))}if(!i)return b&&b.trim()?h:null}i&&(h.tag=i);let j=a.attributes;if(j&&j.length){const b={};for(let c=0;c<j.length;c++){let d=j[c].nodeName,e=a.getAttribute(d);"include"===d&&(d="inc"),b[d]=e}for(let a in j=b,j){let b,i,k=j[a];switch(a){case"class":case"style":b=a;break;case"include":a="inc";case"inc":b=a;break;case"if":b=a;break;case"foreach":a="for",b=a;break;case"js":break;case"key":g.key=strip(k).replace("data.","");break;case"cache":break;default:event_types[a]?i=h.event||(h.event={}):(!f&&("id"==a||"name"==a)&&!g.name&&!/{{[\s\S]+}}/.test(k)&&(g.name=k),i=h.attr||(h.attr={})),b=a;}b&&handle_value(i||h,b,k,!!i,j,e,c,d)}}const k=(a.content||a).childNodes;let l=k.length;if(e.included&&(e.included=!1,e.inc++,d=[],(h.for||h.if)&&c.unshift(d),h.child||(h.child=h.text?{text:h.text}:h.html?{html:h.html}:null),l?(d.root=h,d.inc=h.child||(h.child=[]),d.index=e={current:-1,count:0,last:-1,inc:0,included:!1}):d.inc=h.inc,delete h.for,delete h.if,delete h.text,delete h.html),l){for(let a,b=0;b<l;b++){if(a=k[b],8===a.nodeType)continue;e.count++;const f=compile(a,null,c,d,e,1);f&&(1!==l||3!==a.nodeType&&f.text||h.js&&f.js?(f.text||f.tag)&&(h.child||(h.child=[])).push(f):(f.js&&(h.js=f.js),f.html&&(h.html=f.html),f.text&&(h.text=f.text)))}h.child&&1===h.child.length&&(h.child=h.child[0])}if(!f){if(g.name||(g.name="tpl-"+counter++),"COMPONENT"===h.tag){let a=h.child,b=[];for(let c,d=0;d<a.length;d++)if(c=a[d],"TEMPLATE"===c.tag){const b=c.child.length?c.child[0]:c.child;a=b,c.name&&(b.name=c.name),c.id&&(b.id=c.id),c.key&&(b.key=c.key),c.cache&&(b.cache=c.cache)}else b.push(c);g.tpl=a,g.cmp=b}if(1===c.length&&0===c[0].length)g.fn=null;else{for(let a=0;a<c.length;a++)c[a].root&&(c[a].root.inc=c[a].inc[0],delete c[a].root.child),c[a]=c[a].length?Function("data","state","index","_p","_x","\"use strict\";let _o,_v,_c;"+c[a].join(";")+";return _x"):null;g.fn=c.length?c:null}}return g}function handle_value(a,b,c,d,e,f,g,h){if(/{{[\s\S]+}}/.test(c)){let e=/{{([!?#]+)?=/.test(c),g=/{{!?\?/.test(c),i=/{{\??!/.test(c),j=c;e&&((g||i)&&(j=j.replace(/{{[!?]+/g,"{{")),e=j.replace(/{{#?=+(.*)?}}/ig,"$1").trim().replace(/^data\./,"").replace(/^data\[['"](.*)['"]]/,"$1")),j=j.replace(/{{[!?#=]+/g,"{{").replace(/"(\s+)?{{(\s+)?/g,"(").replace(/(\s+)?}}(\s+)?"/g,")").replace(/{{(\s+)?/g,"'+(").replace(/(\s+)?}}/g,")+'").trim(),j=("'"+j+"'").replace(/^""\+/g,"").replace(/^''\+/g,"").replace(/\+''$/g,"").replace(/\+""$/g,"").replace(/"\)\+''\+\("/g,"").replace(/'\)\+''\+\('/g,"").replace(/\+''\+/g,"+").replace(/'(\s+)?\+(\s+)?'/g,"").replace(/"(\s+)?\+(\s+)?"/g,"").replace(/^\(([^ ]+)\)$/g,"$1").trim(),g&&(j="("+(j+"||"+j+"===0?"+j+":'')")),("text"===b||"style"===b)&&a.tag&&f.count++,f.count!==f.last&&(f.current++,f.last=f.count,h.push("_o=_p["+f.current+"]"),h.push("_x&&(_x["+f.current+"]=_c={})")),h.push("_v="+j),d?h.push("_c&&(_c[\"_a"+b+"\"]=_v);if(!_o.c||_o.c[\"_a"+b+"\"]!==_v){_o.c&&(_o.c[\"_a"+b+"\"]=_v);_o.n[_v===false?\"removeAttribute\":\"setAttribute\"](\""+b+"\",_v)}"):"class"===b?h.push("_c&&(_c._c=_v);if(!_o.c||_o.c._c!==_v){_o.c&&(_o.c._c=_v);_o.n.className=_v}"):"style"===b?h.push("_c&&(_c._s=_v);if(!_o.c||_o.c._s!==_v){_o.c&&(_o.c._s=_v);_o.n.cssText=_v}"):"html"===b?h.push("_c&&(_c._h=_v);if(!_o.c||_o.c._h!==_v){_o.c&&(_o.c._h=_v);_o.n.innerHTML=_v}"):"text"==b&&h.push("_c&&(_c._t=_v);if(!_o.c||_o.c._t!==_v){_o.c&&(_o.c._t=_v);_o.n.nodeValue=_v}"),a[b]=e?[e]:[""]}else a[b]=c;if(("for"===b||"if"===b||"inc"===b)&&!d&&!f.included){f.count!==f.last&&(f.current++,f.last=f.count,h.push("_o=_p["+f.current+"]"));const a=e.foreach?e.foreach.trim():"data";let b=f.inc;e.if?(h.push("this.inc["+b+"].mount(_o.n)["+e.if.trim()+"?\"render\":\"clear\"]("+a+",state)"),f.included=!0):e.foreach?(h.push("this.inc["+b+"].mount(_o.n).render("+a+",state)"),f.included=!0):(h.push("this.inc["+b+"].mount(_o.n).render(data,state)"),f.included=!0)}}