/**!
 * Mikado.js v0.8.140 (Bundle/Module/Debug)
 * Copyright 2019-2024 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/mikado
 */
var l;
const m = {}, u = Object.create(null), y = Object.create(null), aa = document.documentElement || document.body.parentNode, z = "ontouchstart" in window, B = !z && window.PointerEvent && navigator.maxTouchPoints;
let ba;
function C(a, b) {
  b || (b = a.type);
  const c = a.target, d = E.eventCache;
  var e = E.eventBubble;
  let k;
  d && (k = c["_mke" + b]);
  if ("undefined" === typeof k) {
    for (var f = c; f && f !== aa;) {
      var h = void 0;
      "click" === b && ba && (h = f.getAttribute("tap"));
      h || (h = f.getAttribute(b));
      if (h) {
        var g = h.indexOf(":");
        if (-1 < g) {
          var n = h.substring(0, g);
          g = h.substring(g + 1);
          for (h = ""; (f = f.parentElement) !== aa;) {
            if (f.hasAttribute(g)) {
              h = n;
              break;
            }
          }
          h || console.warn("Event root '" + g + "' was not found for the event: '" + n + "'.");
        }
        if (h && (k || (k = [], d && (c["_mke" + b] = k)), k.push([h, f]), n = y[h], !e || n && (n.stop || n.cancel))) {
          break;
        }
      }
      f = f.parentElement;
    }
    d && (k || (c["_mke" + b] = null));
  }
  if (k) {
    for (let p = 0, r; p < k.length; p++) {
      if (r = k[p], e = r[0], f = u[e]) {
        h = r[1];
        if (n = y[e]) {
          n.prevent && a.preventDefault(), n.stop && a.stopImmediatePropagation(), n.once && (u[e] = null, d && (c["_mke" + b] = null));
        }
        f(h, a);
      } else {
        console.warn("The route '" + e + "' is not defined for the event '" + b + "'.");
      }
    }
  }
}
function ca(a, b) {
  m[a] || (F(1, a, C, b), m[a] = 1);
  return this;
}
let G, H, da;
if (z || B) {
  function a(d) {
    var e = d;
    (d = d.touches) && (e = d[0]);
    G = e.clientX;
    H = e.clientY;
  }
  function b(d) {
    const e = G, k = H;
    var f = d, h = d.changedTouches;
    h && (f = h[0]);
    G = f.clientX;
    H = f.clientY;
    15 > Math.abs(G - e) && 15 > Math.abs(H - k) && C(d, "tap");
  }
  const c = {passive:!1, capture:!0};
  da = function(d) {
    F(d, B ? "pointerdown" : "touchstart", a, c);
    F(d, B ? "pointerup" : "touchend", b, c);
  };
}
function F(a, b, c, d) {
  if ("tap" === b) {
    if (z || B) {
      da(a);
      return;
    }
    ba = !0;
    b = "click";
  }
  window[(a ? "add" : "remove") + "EventListener"](b, c, d || !1 === d ? d : !0);
}
;function I(a, b, c) {
  const d = b.length, e = [], k = {};
  for (let g = 0, n, p, r, q, t, v = null; g < d; g++) {
    n = b[g];
    if (p = n.v) {
      if (q = r = k[p], !q) {
        let A = void 0;
        var f = a, h = p;
        for (let D = 0, x = h.length, w = ""; D < x; D++) {
          const R = h[D];
          w += R;
          k[w] ? f = k[w] : (">" === R ? f = f.firstChild : "|" === R ? (A = f, f = f.firstChild) : "@" === R ? (A = f, f = f.style) : f = f.nextSibling, k[w] = f);
        }
        r = [f, A];
        q = r[0];
        r = r[1] || q;
      }
    } else {
      q = r = a;
    }
    c && t !== r && (t = r, r._mkc = v = {});
    e[g] = new J(v, q, "");
  }
  return a._mkp = e;
}
function K(a, b, c, d, e, k) {
  const f = e || (b.tag ? b.B ? document.createElementNS("http://www.w3.org/2000/svg", b.tag) : document.createElement(b.tag) : document.createTextNode(b.text));
  let h, g;
  if (g = b.class) {
    "object" === typeof g ? (c.push(new J(h = {_c:""}, f, d)), (g = g[0]) && L(a, g, ["_c", c.length - 1])) : e || (f.className = g);
  }
  if (g = b.attr) {
    for (var n in g) {
      let p = g[n];
      "object" === typeof p ? (h || c.push(new J(h = {}, f, d)), h["_a" + n] = !1, (p = p[0]) && L(a, p, ["_a", c.length - 1, n])) : e || f.setAttribute(n, p);
    }
  }
  if (g = b.event) {
    for (const p in g) {
      e || (f.setAttribute(p, g[p]), ca(p));
    }
  }
  if (g = b.style) {
    "object" === typeof g ? (c.push(new J(h || (h = {}), f.style, d + "@")), h._s = "", (g = g[0]) && L(a, g, ["_s", c.length - 1])) : e || (f.style.cssText = g);
  }
  if (g = b.text) {
    "object" === typeof g ? (n = f, g = g[0], b.tag ? (d += "|", n = !e && f.firstChild, n || (n = document.createTextNode(g), f.appendChild(n))) : h = {}, (h || (h = {}))._t = g, c.push(new J(h, n, d)), g && L(a, g, ["_t", c.length - 1])) : e || (b.tag ? f.textContent = g : f.nodeValue = g);
  } else if (g = b.child) {
    if (e && (e = e.firstChild, !e)) {
      return console.warn("Hydration failed of template '" + a.name + "' because the existing DOM structure was incompatible. Falls back to factory construction instead."), null;
    }
    g.constructor !== Array && (g = [g]);
    for (let p = 0, r, q = g.length; p < q; p++) {
      if (r = g[p], d = p ? d + "+" : d + ">", b = K(a, r, c, d, e, 1), e) {
        if (p < q - 1 && (e = e.nextSibling, !e)) {
          return console.warn("Hydration failed of template '" + a.name + "' because the existing DOM structure was incompatible. Falls back to factory construction instead."), null;
        }
      } else {
        f.appendChild(b);
      }
    }
  } else if (g = b.html) {
    "object" === typeof g ? (h || c.push(new J(h = {}, f, d)), h._h = "", (g = g[0]) && L(a, g, ["_h", c.length - 1])) : e || (f.innerHTML = g);
  } else if (g = b.inc) {
    h || c.push(new J(null, f, d));
    if ("string" === typeof g) {
      b = M[g];
      if (!b) {
        throw Error("The partial template '" + g + "' which is included by the root template '" + a.name + "' was not registered. When using named includes make sure you register all your includes by Mikado.register(tpl) before instantiating the Mikado view instance.");
      }
      if (!(b instanceof E)) {
        d = b[0];
        if (b = b[1]) {
          b.async = !1, e && (b.root = e, b.hydrate = !0);
        }
        M[g] = b = new E(d, b);
      }
    } else {
      d = a.inc.length;
      if (!a.tpl.fn.length) {
        throw Error("The template '" + a.name + "|" + d + "' has conflicts. It should provide a handler entry, but wasn't found.");
      }
      b = new E({name:a.name + "|" + d, tpl:g, key:g.key, cache:g.cache, fn:a.tpl.fn}, {recycle:a.recycle, cache:a.cache, pool:a.pool, state:a.state, mount:f, hydrate:!!e});
    }
    a.inc.push(b);
  }
  h && (f._mkc = h);
  k || (f._mkp = c, a.s = a.s === c.length ? 1 : 0);
  return f;
}
function L(a, b, c) {
  a.s++;
  a.proxy || (a.proxy = {});
  (a.proxy[b] || (a.proxy[b] = [])).push(c);
}
function J(a, b, c) {
  this.c = a;
  this.n = b;
  this.v = c;
}
l = J.prototype;
l._a = function(a, b) {
  if (this.c) {
    if (this.c["_a" + a] === b) {
      return;
    }
    this.c["_a" + a] = b;
  }
  !1 !== b ? this.n.setAttribute(a, b) : this.n.removeAttribute(a);
};
l._t = function(a) {
  if (this.c) {
    if (this.c._t === a) {
      return;
    }
    this.c._t = a;
  }
  this.n.nodeValue = a;
};
l._c = function(a) {
  if (this.c) {
    if (this.c._c === a) {
      return;
    }
    this.c._c = a;
  }
  this.n.className = a;
};
l._s = function(a) {
  if (this.c) {
    if (this.c._s === a) {
      return;
    }
    this.c._s = a;
  }
  this.n.cssText = a;
};
l._h = function(a) {
  if (this.c) {
    if (this.c._h === a) {
      return;
    }
    this.c._h = a;
  }
  this.n.innerHTML = a;
};
const fa = window.Proxy || function() {
  function a(b, c) {
    this.path = c.path;
    this.fn = c.fn;
    for (const d in b) {
      this.define(b, d, b[d]);
    }
    b._mkx = !0;
    return b;
  }
  a.prototype.define = function(b, c, d) {
    const e = this;
    Object.defineProperty(b, c, {get:function() {
      return d;
    }, set:function(k) {
      ea(e, d = k, c);
    }});
  };
  return a;
}();
function ha(a, b) {
  return "_mkx" === b || a[b];
}
function ia(a, b, c) {
  ea(this, c, b);
  a[b] = c;
  return !0;
}
function ea(a, b, c) {
  if (c = a.fn[c]) {
    for (let d = 0; d < c.length; d++) {
      const e = c[d], k = e[0], f = a.path[e[1]];
      if (!f.c || f.c[k + (e[2] || "")] !== b) {
        f[k](e[2] || b, b);
      }
    }
  }
}
;const M = Object.create(null);
function E(a, b = {}) {
  if (!(this instanceof E)) {
    return new E(a, b);
  }
  if ("string" === typeof a) {
    var c = M[a];
    if (!c) {
      throw Error("The template '" + a + "' is not registered.");
    }
    if (c instanceof E) {
      return c;
    }
    a = c[0];
    b || (b = c[1]);
  }
  if (!a) {
    throw Error("Initialization Error: Template is not defined.");
  }
  if (!a.tpl || !a.name) {
    throw Error("Initialization Error: Template isn't supported.");
  }
  this.g = [];
  this.length = 0;
  this.root = b.root || b.mount || null;
  this.recycle = !!b.recycle;
  this.state = b.state || {};
  this.key = a.key || "";
  this.m = {};
  c = a.fn;
  a.A || c && (a.A = c.slice());
  this.apply = c && c.pop();
  this.tpl = a;
  this.name = a.name;
  this.inc = [];
  this.pool = (this.key || this.recycle) && b.pool || 0;
  this.u = [];
  this.l = new Map();
  this.cache = a.cache || !!b.cache;
  this.async = !!b.async;
  this.o = 0;
  this.on = b.on || {};
  this.proxy = null;
  this.s = 0;
  (a = b.observe) && (new N(a)).mount(this);
  this.root ? this.mount(this.root, b.hydrate) : this.j = null;
}
l = E.prototype;
l.mount = function(a, b) {
  this.o && this.cancel();
  const c = a._mki;
  var d = this.root !== a;
  if (c === this) {
    if (!d) {
      return this;
    }
    this.g = a._mkd;
    this.length = this.g.length;
  } else if (c) {
    c.clear(), a._mkd = this.g = [], this.length = 0;
  } else {
    if (b) {
      var e = a.children;
      const k = e.length, f = Array(k);
      for (let h = 0; h < k; h++) {
        f[h] = e[h];
      }
      this.g = f;
      this.length = this.g.length;
    } else {
      this.g = [], this.length = 0, a.firstChild && (a.textContent = "");
    }
    a._mkd = this.g;
  }
  if (this.key) {
    if (d && this.root && (this.root._mkl = this.m), c === this) {
      this.m = a._mkl;
    } else {
      d = {};
      if (!c && b && this.length) {
        for (let k = 0, f, h; k < this.length; k++) {
          f = this.g[k], h = f.getAttribute("key"), f._mkk = h, d[h] = f;
        }
      }
      a._mkl = this.m = d;
    }
  }
  a._mki = this;
  this.root = a;
  this.j || (b && this.length && (this.j = this.g[0].cloneNode(), K(this, this.tpl.tpl, [], "", this.j) && O(this)), this.tpl && (this.j = K(this, this.tpl.tpl, [], ""), O(this)));
  return this;
};
function O(a) {
  a.tpl.A && (a.tpl.fn.length && console.error("The template '" + a.name + "' might not have been initialized properly. There are " + a.tpl.fn.length + " template functions left which wasn't assigned. Please post an example to Mikado Github issues."), a.tpl.fn = a.tpl.A, a.tpl.A = null);
  a.tpl = null;
}
l.render = function(a, b, c, d) {
  if (!this.root) {
    throw Error("Template was not mounted or root was not found.");
  }
  if (this.root._mki !== this) {
    throw Error("Another template is already assigned to this root. Please use '.mount(root_element)' before calling '.render()' to switch the context of a template.");
  }
  if (!d) {
    let g;
    if (b && (g = "function" === typeof b) || !0 === b) {
      c = b, b = null;
    }
    this.o && this.cancel();
    if (this.async || c) {
      const n = this;
      g || (g = "function" === typeof c);
      n.o = requestAnimationFrame(function() {
        n.o = 0;
        n.render(a, b, null, 1);
        g && c();
      });
      return g ? this : new Promise(function(p) {
        c = p;
      });
    }
  }
  var e = this.length;
  if (!a) {
    return this.apply || this.g[0] || this.add(), console.warn("When calling .render() by passing no data nothing will happen!"), this;
  }
  if (Array.isArray(a) || a instanceof N) {
    if (d = a.length, !d) {
      return this.remove(0, e);
    }
  } else {
    if (this.proxy) {
      throw Error("When a template is using data bindings by an expression like {{= ... }} you will need to pass an array to the render() function, also when just one single item should be rendered. Because the array you will pass in is getting proxified after calling .render(arr), after then you can trigger bindings via arr[0].prop = 'value'.");
    }
    a = [a];
    d = 1;
  }
  const k = this.key;
  !e || k || this.recycle || (this.remove(0, e), e = 0);
  let f = e < d ? e : d, h = 0;
  if (h < f) {
    for (let g, n; h < f; h++) {
      g = this.g[h];
      n = a[h];
      if (k && g._mkk !== n[k]) {
        return ja(this, a, b, h);
      }
      this.update(g, n, b, h, 1);
      this.proxy && !n._mkx && (a[h] = P(this, g, n));
    }
  }
  if (h < d) {
    for (; h < d; h++) {
      e = a[h], this.add(e, b, h), this.proxy && !e._mkx && (a[h] = P(this, this.g[h], e));
    }
  } else {
    d < e && this.remove(d, e - d);
  }
  return this;
};
l.replace = function(a, b, c, d) {
  "undefined" === typeof d && ("number" === typeof a ? (d = a, a = this.g[d]) : d = this.index(a));
  var e;
  if (this.key) {
    var k = b[this.key];
    if (e = this.m[k]) {
      if (e !== a) {
        var f = this.index(e);
        this.g[d] = e;
        this.g[f] = a;
        k = f < d ? e : a;
        f = f < d ? a : e;
        const h = k.nextElementSibling;
        this.root.insertBefore(k, f);
        h !== f && this.root.insertBefore(f, h);
      }
    } else {
      this.pool && (e = this.l.get(k)) && (this.l.delete(k), Q(this, a), this.g[d] = e, a.replaceWith(e));
    }
  } else {
    this.recycle && (e = a);
  }
  e ? this.s && b._mkx || !this.apply || this.apply(b, c || this.state, d, e._mkp || I(e, this.j._mkp, this.cache)) : (b = this.create(b, c, d, 1), (this.key || this.pool) && Q(this, a), this.g[d] = b, a.replaceWith(b));
  (d = this.on.replace) && d(a);
  return this;
};
l.update = function(a, b, c, d) {
  if (!this.apply) {
    return console.warn("The template '" + this.name + "' is a static template and should not be updated. Alternatively you can use .replace() to switch contents."), this;
  }
  if (this.s && b._mkx) {
    return this;
  }
  "undefined" === typeof d && ("number" === typeof a ? (d = a, a = this.g[a]) : d = this.index(a));
  this.apply(b, c || this.state, d, a._mkp || I(a, this.j._mkp, this.cache));
  (b = this.on.update) && b(a);
  return this;
};
l.cancel = function() {
  cancelAnimationFrame(this.o);
  this.o = 0;
  return this;
};
l.create = function(a, b, c, d) {
  let e = this.key;
  const k = e && a[e];
  let f, h, g, n;
  e && this.pool && (h = this.l) && (f = h.get(k)) ? (n = 1, h.delete(k)) : (!e || this.recycle) && this.pool && (h = this.u) && h.length ? f = h.pop() : (f = g = this.j, g || (this.j = f = g = K(this, this.tpl.tpl, [], ""), O(this)));
  this.apply && this.apply(a, b || this.state, c, f._mkp || I(f, this.j._mkp, !!g || this.cache));
  g && (f = f.cloneNode(!0));
  e && (n || (f._mkk = k), d && (this.m[k] = f));
  (a = this.on[g ? "create" : "recycle"]) && a(f);
  return f;
};
l.add = function(a, b, c) {
  let d;
  "number" === typeof b ? (c = b, b = null, d = c < this.length) : c || 0 === c ? d = c < this.length : c = this.length;
  a = this.create(a, b, c, 1);
  d ? (this.root.insertBefore(a, this.g[c]), S(this.g, this.length - 1, c, a), this.length++) : (this.root.appendChild(a), this.g[this.length++] = a);
  (c = this.on.insert) && c(a);
  return this;
};
function P(a, b, c) {
  b = b._mkp || I(b, a.j._mkp, a.cache);
  return new fa(c, {path:b, fn:a.proxy, get:ha, set:ia});
}
function ja(a, b, c, d) {
  const e = a.g, k = a.m, f = a.key;
  let h = b.length, g = e.length, n = g > h ? g : h, p = 0;
  for (d || (d = 0); d < n; d++) {
    var r = void 0;
    if (d < h) {
      var q = b[d], t = d >= g;
      let v, A, D;
      if (!t && (v = e[d], A = q[f], D = v._mkk, a.proxy && !q._mkx && (b[d] = P(a, v, q)), D === A)) {
        a.update(v, q, c, d, 1);
        continue;
      }
      if (t || !k[A]) {
        t || !a.pool ? (g++, n = g > h ? g : h, a.add(q, c, d)) : a.replace(v, q, c, d);
        a.proxy && !q._mkx && (b[d] = P(a, e[d], q));
        continue;
      }
      let x, w;
      for (t = d + 1; t < n; t++) {
        if (!x && t < g && e[t]._mkk === A && (x = t + 1), !w && t < h && b[t][f] === D && (w = t + 1), x && w) {
          x >= w ? (r = e[x - 1], a.root.insertBefore(r, v), a.update(r, q, c, d, 1), x === w ? (1 < t - d && a.root.insertBefore(v, e[x]), e[d] = e[t], (e[t] = v) || console.error("Error")) : (S(e, x - 1, d), p++)) : (q = w - 1 + p, a.root.insertBefore(v, e[q] || null), S(e, d, (q > g ? g : q) - 1), p--, d--);
          r = 1;
          break;
        }
      }
    }
    r || (a.remove(d), g--, n = g > h ? g : h, d--);
  }
  return a;
}
function S(a, b, c, d) {
  const e = d || a[b];
  d && b++;
  if (b < c) {
    for (; b < c; b++) {
      a[b] = a[b + 1];
    }
  } else {
    for (; b > c; b--) {
      a[b] = a[b - 1];
    }
  }
  a[c] = e;
}
l.append = function(a, b, c) {
  let d;
  if ("number" === typeof b) {
    c = b, b = null, d = 1;
  } else if (c || 0 === c) {
    d = 1;
  }
  const e = a.length;
  for (let k = 0; k < e; k++) {
    this.add(a[k], b, d ? c++ : null);
  }
  return this;
};
l.clear = function() {
  this.length && this.remove(0, this.length);
  return this;
};
l.remove = function(a, b) {
  let c = this.length;
  c && a && ("number" !== typeof a ? a = this.index(a) : 0 > a && (a = c + a - 1));
  if (!c || a >= c) {
    return this;
  }
  b ? 0 > b && (a -= b + 1, 0 > a && (a = 0), b *= -1) : b = 1;
  !a && b >= c ? (a = this.g, b = a.length, this.root.textContent = "", this.root._mkd = this.g = [], c = 0) : (a = this.g.splice(a, b), c -= b);
  const d = this.pool && !this.key, e = this.key || this.pool, k = this.on.remove;
  for (let f = 0, h; f < b; f++) {
    h = a[d ? b - f - 1 : f], c && h.remove(), e && Q(this, h), k && k(h);
  }
  this.length = c;
  return this;
};
l.index = function(a) {
  return this.g.indexOf(a);
};
l.node = function(a) {
  return this.g[a];
};
function Q(a, b) {
  if (a.key) {
    var c = b._mkk;
    a.m[c] = null;
  }
  if (a.pool) {
    if (c) {
      a.l.set(c, b), !0 !== a.pool && a.l.size > a.pool && a.l.delete(a.l.keys().next().value);
    } else {
      if (c = a.u.length, !0 === a.pool || c < a.pool) {
        a.u[c] = b;
      }
    }
  }
}
l.flush = function() {
  this.u = [];
  this.l = new Map();
  return this;
};
l.destroy = function() {
  for (let a = 0, b; a < this.inc.length; a++) {
    b = this.inc[a], M[b.name] || b.destroy();
  }
  this.key && (this.root && (this.root._mkl = null), this.m = null);
  this.root && (this.root._mkd = this.root._mki = null);
  this.proxy = this.on = this.l = this.u = this.g = this.root = this.tpl = this.apply = this.inc = this.state = this.j = null;
};
const T = Array.prototype, U = window.Proxy;
let V = !1;
function W(a) {
  if (!a) {
    throw Error("The observable array was not assigned to a Mikado instance. You need to pass in the observable array when initiating a Mikado instance.");
  }
}
function N(a) {
  if (a instanceof N) {
    return a;
  }
  if (!(this instanceof N)) {
    return new N(a);
  }
  this.h = null;
  const b = a ? a.length : 0;
  if (U) {
    if (b) {
      for (let c = 0; c < b; c++) {
        this[c] = a[c];
      }
    }
    this.length = b;
    this.i = {splice:T.splice.bind(this), pop:T.pop.bind(this), shift:T.shift.bind(this), unshift:T.unshift.bind(this), push:T.push.bind(this)};
    return new Proxy(this, ka);
  }
  this.i = a || [];
  for (a = 0; a <= b; a++) {
    this.define(a);
  }
  this.define("length");
}
N.prototype.mount = function(a) {
  this.h = a;
  return this;
};
N.prototype.define = function(a) {
  Object.defineProperty(this, a, {get:function() {
    return this.i[a];
  }, set:function(b) {
    "number" === typeof a && (a === this.length && this.define(a + 1), ka.set(this, a, b));
  }});
  return this;
};
const ka = {set:function(a, b, c) {
  let d;
  if ("number" === typeof b) {
    d = !0;
  } else {
    var e = parseInt(b, 10);
    b === "" + e && (b = e, d = !0);
  }
  e = a.h;
  if (!V) {
    V = !0;
    if (e) {
      var k = a.length;
      if (d) {
        W(e);
        const f = e.length;
        k !== f && (a.length = f);
        b >= f ? (e.add(c), a.length++) : b < f && (k = e.g[b], e.recycle || e.key && k._mkk === c[e.key] ? e.update(k, c, null, b) : e.replace(k, c, null, b));
      } else {
        "length" === b && c < k && e.remove(c, k - c);
      }
    }
    V = !1;
  }
  d && e.proxy && !c._mkx && (c = P(e, e.g[b], c));
  (U ? a : a.i)[b] = c;
  return !0;
}};
l = N.prototype;
l.swap = function(a, b) {
  V = !0;
  const c = this[b];
  this[b] = this[a];
  this[a] = c;
  V = !1;
  return this;
};
l.set = function(a) {
  this.splice();
  return this.concat(a);
};
l.splice = function(a, b, c) {
  W(this.h);
  V = !0;
  a || (a = 0);
  "undefined" === typeof b && (b = this.length - a, 0 > b && (b = 0));
  b && this.h.remove(a, b);
  b = c ? this.i.splice(a, b, c) : this.i.splice(a, b);
  c && this.h.add(c, a);
  V = !1;
  return b;
};
l.push = function(a) {
  W(this.h);
  V = !0;
  this.h.add(a);
  this[this.length] = a;
  U && this.length++;
  V = !1;
};
l.unshift = function(a) {
  W(this.h);
  V = !0;
  this.h.add(a, 0);
  this.i.unshift(a);
  V = !1;
};
l.pop = function() {
  W(this.h);
  V = !0;
  this.h.remove(this.length - 1);
  const a = this.i.pop();
  V = !1;
  return a;
};
l.shift = function() {
  W(this.h);
  V = !0;
  this.h.remove(0);
  const a = this.i.shift();
  V = !1;
  return a;
};
l.concat = function(a) {
  const b = a.length;
  for (let c = 0; c < b; c++) {
    this.push(a[c]);
  }
  return this;
};
l.sort = T.sort;
l.reverse = T.reverse;
l.slice = T.slice;
l.map = function(a, b) {
  b && (a = a.bind(this));
  for (let c = 0, d = this.length; c < d; c++) {
    this[c] = a(this[c]);
  }
  return this;
};
l.filter = function(a, b) {
  b && (a = a.bind(this));
  let c, d;
  for (let e = 0, k = this.length; e < k; e++) {
    a(this[e]) ? d && (this.splice(c, d), k -= d, e -= d, d = 0) : d ? d++ : (c = e, d = 1);
  }
  d && this.splice(c, d);
  return this;
};
l.indexOf = function(a) {
  for (let b = 0, c = this.length; b < c; b++) {
    if (this[b] === a) {
      return b;
    }
  }
  return -1;
};
l.lastIndexOf = function(a) {
  for (let b = this.length - 1; 0 <= b; b--) {
    if (this[b] === a) {
      return b;
    }
  }
  return -1;
};
l.forEach = function(a) {
  for (let b = 0, c = this.length; b < c; b++) {
    a(this[b]);
  }
};
const X = document.createElement("div"), la = document.createTextNode(""), Y = document.createElement("div");
X.appendChild(la);
l = E.prototype;
l.move = function(a, b) {
  let c;
  "number" === typeof a ? (c = a, a = this.g[c]) : c = this.index(a);
  0 > b && (b = this.length + b - 1);
  c !== b && this.shift(a, b - c);
  return this;
};
l.shift = function(a, b) {
  if (!b) {
    return this;
  }
  if ("number" === typeof a) {
    var c = a;
    a = this.g[a];
  } else {
    c = this.index(a);
  }
  const d = 0 > b;
  if (d && c || !d && c < this.length - 1) {
    b = d ? Math.max(c + b, 0) : Math.min(c + b, this.length - 1);
    const e = this.g[b], k = d && 1 < c - b || !d && 1 < b - c;
    this.root.insertBefore(a, d ? e : this.g[b + 1] || null);
    if (k) {
      a = this.g[c];
      if (d) {
        for (; c > b; c--) {
          this.g[c] = this.g[c - 1];
        }
      } else {
        for (; c < b; c++) {
          this.g[c] = this.g[c + 1];
        }
      }
      this.g[b] = a;
    } else {
      this.g[c] = e, this.g[b] = a;
    }
  }
  return this;
};
l.up = function(a, b) {
  (!b || 0 < b) && this.shift(a, -(b || 1));
  return this;
};
l.down = function(a, b) {
  (!b || 0 < b) && this.shift(a, b || 1);
  return this;
};
l.first = function(a) {
  return this.shift(a, -this.length);
};
l.last = function(a) {
  return this.shift(a, this.length);
};
l.before = function(a, b) {
  "number" !== typeof a && (a = this.index(a));
  "number" !== typeof b && (b = this.index(b));
  b !== a + 1 && (0 > b && (b = this.length + b, 0 > a && b--), 0 > a && (a = this.length + a - 1), this.shift(a, b - a - 1));
  return this;
};
l.after = function(a, b) {
  "number" !== typeof a && (a = this.index(a));
  "number" !== typeof b && (b = this.index(b));
  b !== a - 1 && (0 > b && (b = this.length + b - 2, 0 > a && b++), 0 > a && (a = this.length + a - 1), this.shift(a, b - a + 1));
  return this;
};
l.swap = function(a, b) {
  if (a !== b) {
    let c, d;
    "number" === typeof a ? (c = a, a = this.g[a]) : c = this.index(a);
    "number" === typeof b ? (d = b, b = this.g[b]) : d = this.index(b);
    const e = c + 1 !== d;
    this.root.insertBefore(e ? a : b, e ? b : a);
    e && d + 1 !== c && this.root.insertBefore(b, this.g[c + 1] || null);
    this.g[c] = b;
    this.g[d] = a;
  }
  return this;
};
const ma = /[^;:]+/g, na = /[^ ]+/g;
function oa(a, b, c, d) {
  let e;
  d || (d = a._mkc) ? e = d["_a" + b] : a._mkc = d = {};
  e !== c && (d["_a" + b] = c, !1 !== c ? a.setAttribute(b, c) : a.removeAttribute(b));
}
function pa(a, b, c) {
  let d;
  c || (c = a._mkc) ? d = c["_a" + b] : a._mkc = c = {};
  !1 !== d && (c["_a" + b] = !1, a.removeAttribute(b));
}
function qa(a, b) {
  let c, d;
  (c = a._mkc) ? d = c["_a" + b] : a._mkc = c = {};
  "string" !== typeof d && (c["_a" + b] = d = a.getAttribute(b));
  return d;
}
function Z(a) {
  var b = a._mkc;
  let c;
  b ? c = b._c : a._mkc = b = {};
  if (!c) {
    return b._c = {};
  }
  if ("string" === typeof c) {
    for (a = c.match(na), b._c = c = {}, b = 0; b < a.length; b++) {
      c[a[b]] = 1;
    }
  }
  return c;
}
function ra(a, b, c) {
  c = c || Z(a);
  c[b] || (c[b] = 1, a.classList.add(b));
}
function sa(a, b, c) {
  c = c || Z(a);
  0 !== c[b] && (c[b] = 0, a.classList.remove(b));
}
function ta(a, b, c, d) {
  d = d || Z(a);
  let e = !!d[b];
  c = "undefined" === typeof c ? !e : !!c;
  e !== c && (d[b] = c ? 1 : 0, c ? a.classList.add(b) : a.classList.remove(b));
}
function ua(a) {
  var b = a._mkc;
  let c;
  b ? c = b._s : a._mkc = b = {};
  if (!c) {
    return b._s = {};
  }
  if ("string" === typeof c) {
    for (a = c.match(ma), b._s = c = {}, b = 0; b < a.length; b += 2) {
      c[a[b]] = a[b + 1];
    }
  }
  return c;
}
function va(a, b, c, d, e) {
  e = e || ua(a);
  e[b] !== c && (e[b] = c, (d || a.style).setProperty(b, c));
}
;E.once = function(a, b, c, d, e) {
  const k = new E(b);
  "function" === typeof d && (e = d, d = null);
  if (e) {
    const f = e;
    e = function() {
      k.destroy();
      f();
    };
  }
  if (!a) {
    throw Error("Root element is not defined.");
  }
  a.append(k.create(c, d));
  e || k.destroy();
  return E;
};
E.register = function(a, b) {
  let c, d;
  if ("string" === typeof a) {
    if (c = d = a, a = M[c], a instanceof E || (a = a[0]), !a) {
      throw Error("The template '" + c + "' was not found.");
    }
  } else {
    c = a.name;
  }
  M[c] && (d ? console.info("The template '" + c + "' was replaced by a new definition.") : console.warn("The template '" + c + "' was already registered and is getting overwritten. When this isn't your intention, then please check your template names about uniqueness and collision!"));
  M[c] = [a, b];
  return E;
};
E.unregister = function(a) {
  "object" === typeof a && (a = a.name);
  const b = M[a];
  b && (b instanceof E && b.destroy(), M[a] = null);
  return E;
};
E.setText = function(a, b) {
  let c = a._mkc, d, e;
  c ? e = c._t : a._mkc = c = {};
  e !== b && (c._t = b, 3 === a.nodeType && (d = a) || (d = a.firstChild) ? d.nodeValue = b : a.textContent = b);
};
E.getText = function(a) {
  let b = a._mkc, c, d;
  b ? d = b._t : a._mkc = b = {};
  "string" !== typeof d && (3 === a.nodeType && (c = a) || (c = a.firstChild) ? b._t = d = c.nodeValue : b._t = d = a.textContent);
  return d;
};
E.setHtml = function(a, b) {
  let c = a._mkc, d;
  c ? d = c._h : a._mkc = c = {};
  d !== b && (a.innerHTML = b, c._h = b, c._t = null);
};
E.getHtml = function(a) {
  let b = a._mkc, c;
  b ? c = b._h : a._mkc = b = {};
  "string" !== typeof c && (b._h = c = a.innerHTML);
  return c;
};
E.setClasses = function(a, b) {
  let c = a._mkc, d;
  c ? d = c._c : a._mkc = c = {};
  d !== b && (c._c = b, a.className = b);
};
E.getClasses = function(a) {
  let b = a._mkc, c;
  b ? c = b._c : a._mkc = b = {};
  "string" !== typeof c && (b._c = c = a.className);
  return c.split(na);
};
E.hasClass = function(a, b) {
  const c = Z(a);
  let d = c[b];
  "number" !== typeof d && (c[b] = d = a.classList.contains(b) ? 1 : 0);
  return !!d;
};
E.toggleClass = ta;
E.toggleClasses = function(a, b) {
  const c = Z(a);
  if (b.constructor === Array) {
    for (var d = 0; d < b.length; d++) {
      ta(a, b[d], void 0, c);
    }
  } else {
    for (d in b) {
      ta(a, d, b[d], c);
    }
  }
};
E.removeClass = sa;
E.removeClasses = function(a, b) {
  const c = Z(a);
  for (let d = 0; d < b.length; d++) {
    sa(a, b[d], c);
  }
};
E.addClass = ra;
E.addClasses = function(a, b) {
  const c = Z(a);
  for (let d = 0; d < b.length; d++) {
    ra(a, b[d], c);
  }
};
E.setAttribute = oa;
E.setAttributes = function(a, b) {
  let c = a._mkc;
  c || (a._mkc = c = {});
  for (let d in b) {
    oa(a, d, b[d], c);
  }
};
E.getAttribute = qa;
E.hasAttribute = function(a, b) {
  a = qa(a, b);
  return !(!a && "" !== a);
};
E.removeAttribute = pa;
E.removeAttributes = function(a, b) {
  let c = a._mkc;
  c || (a._mkc = c = {});
  for (let d = 0; d < b.length; d++) {
    pa(a, b[d], c);
  }
};
E.setCss = function(a, b) {
  let c = a._mkc, d;
  c ? d = c._s : a._mkc = c = {};
  d !== b && (c._s = b, a.style.cssText = b);
};
E.getCss = function(a) {
  let b = a._mkc, c;
  b ? c = b._s : a._mkc = b = {};
  "string" !== typeof c && (b._s = c = a.style.cssText);
  return c;
};
E.getStyle = function(a, b) {
  const c = ua(a);
  let d = c[b];
  "string" !== typeof d && (c[b] = d = a.style.getPropertyValue(b));
  return d;
};
E.setStyle = va;
E.setStyles = function(a, b) {
  const c = ua(a), d = a.style;
  for (const e in b) {
    va(a, e, b[e], d, c);
  }
};
E.escape = function(a) {
  X.i !== a && (la.nodeValue = a, X.h = X.innerHTML, X.i = a);
  return X.h;
};
E.sanitize = function(a) {
  Y.h !== a && (Y.innerHTML = a, Y.h = a, Y.i = Y.textContent);
  return Y.i;
};
E.prototype.route = E.route = function(a, b, c) {
  if (!a) {
    throw Error("Missing route name.");
  }
  if (!b) {
    throw Error("The route '" + a + "' has no function assigned to it.");
  }
  u[a] && console.info("A new handler was re-assigned to the route '" + a + "'.");
  u[a] = b;
  c && (y[a] = c);
  return this;
};
E.prototype.dispatch = E.dispatch = function(a, b, c) {
  if (!a) {
    throw Error("Missing route name.");
  }
  if (!u[a]) {
    throw Error("Undefined route '" + a + "'.");
  }
  u[a](b || this, c || window.event);
  return this;
};
E.prototype.listen = E.listen = ca;
E.prototype.unlisten = E.unlisten = function(a, b) {
  m[a] && (F(0, a, C, b), m[a] = 0);
  return this;
};
E.Array = N;
export default E;

