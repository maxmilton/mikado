/**!
 * Mikado.js v0.8.140 (ES5/Debug)
 * Copyright 2019-2024 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/mikado
 */
(function(){'use strict';
var n;
function aa(a) {
  a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
  for (var b = 0; b < a.length; ++b) {
    var c = a[b];
    if (c && c.Math == Math) {
      return c;
    }
  }
  throw Error("Cannot find global object");
}
var p = aa(this);
function ba(a) {
  var b = 0;
  return function() {
    return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
  };
}
var v = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
  if (a == Array.prototype || a == Object.prototype) {
    return a;
  }
  a[b] = c.value;
  return a;
};
function y(a, b) {
  if (b) {
    a: {
      var c = p;
      a = a.split(".");
      for (var d = 0; d < a.length - 1; d++) {
        var h = a[d];
        if (!(h in c)) {
          break a;
        }
        c = c[h];
      }
      a = a[a.length - 1];
      d = c[a];
      b = b(d);
      b != d && null != b && v(c, a, {configurable:!0, writable:!0, value:b});
    }
  }
}
y("Symbol", function(a) {
  function b(l) {
    if (this instanceof b) {
      throw new TypeError("Symbol is not a constructor");
    }
    return new c(d + (l || "") + "_" + h++, l);
  }
  function c(l, g) {
    this.h = l;
    v(this, "description", {configurable:!0, writable:!0, value:g});
  }
  if (a) {
    return a;
  }
  c.prototype.toString = function() {
    return this.h;
  };
  var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_", h = 0;
  return b;
});
y("Symbol.iterator", function(a) {
  if (a) {
    return a;
  }
  a = Symbol("Symbol.iterator");
  for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
    var d = p[b[c]];
    "function" === typeof d && "function" != typeof d.prototype[a] && v(d.prototype, a, {configurable:!0, writable:!0, value:function() {
      return ca(ba(this));
    }});
  }
  return a;
});
function ca(a) {
  a = {next:a};
  a[Symbol.iterator] = function() {
    return this;
  };
  return a;
}
function z(a) {
  var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
  if (b) {
    return b.call(a);
  }
  if ("number" == typeof a.length) {
    return {next:ba(a)};
  }
  throw Error(String(a) + " is not an iterable or ArrayLike");
}
function A(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
y("WeakMap", function(a) {
  function b(f) {
    this.h = (e += Math.random() + 1).toString();
    if (f) {
      f = z(f);
      for (var k; !(k = f.next()).done;) {
        k = k.value, this.set(k[0], k[1]);
      }
    }
  }
  function c() {
  }
  function d(f) {
    var k = typeof f;
    return "object" === k && null !== f || "function" === k;
  }
  function h(f) {
    if (!A(f, g)) {
      var k = new c();
      v(f, g, {value:k});
    }
  }
  function l(f) {
    var k = Object[f];
    k && (Object[f] = function(m) {
      if (m instanceof c) {
        return m;
      }
      Object.isExtensible(m) && h(m);
      return k(m);
    });
  }
  if (function() {
    if (!a || !Object.seal) {
      return !1;
    }
    try {
      var f = Object.seal({}), k = Object.seal({}), m = new a([[f, 2], [k, 3]]);
      if (2 != m.get(f) || 3 != m.get(k)) {
        return !1;
      }
      m.delete(f);
      m.set(k, 4);
      return !m.has(f) && 4 == m.get(k);
    } catch (q) {
      return !1;
    }
  }()) {
    return a;
  }
  var g = "$jscomp_hidden_" + Math.random();
  l("freeze");
  l("preventExtensions");
  l("seal");
  var e = 0;
  b.prototype.set = function(f, k) {
    if (!d(f)) {
      throw Error("Invalid WeakMap key");
    }
    h(f);
    if (!A(f, g)) {
      throw Error("WeakMap key fail: " + f);
    }
    f[g][this.h] = k;
    return this;
  };
  b.prototype.get = function(f) {
    return d(f) && A(f, g) ? f[g][this.h] : void 0;
  };
  b.prototype.has = function(f) {
    return d(f) && A(f, g) && A(f[g], this.h);
  };
  b.prototype.delete = function(f) {
    return d(f) && A(f, g) && A(f[g], this.h) ? delete f[g][this.h] : !1;
  };
  return b;
});
y("Map", function(a) {
  function b() {
    var e = {};
    return e.o = e.next = e.head = e;
  }
  function c(e, f) {
    var k = e[1];
    return ca(function() {
      if (k) {
        for (; k.head != e[1];) {
          k = k.o;
        }
        for (; k.next != k.head;) {
          return k = k.next, {done:!1, value:f(k)};
        }
        k = null;
      }
      return {done:!0, value:void 0};
    });
  }
  function d(e, f) {
    var k = f && typeof f;
    "object" == k || "function" == k ? l.has(f) ? k = l.get(f) : (k = "" + ++g, l.set(f, k)) : k = "p_" + f;
    var m = e[0][k];
    if (m && A(e[0], k)) {
      for (e = 0; e < m.length; e++) {
        var q = m[e];
        if (f !== f && q.key !== q.key || f === q.key) {
          return {id:k, list:m, index:e, j:q};
        }
      }
    }
    return {id:k, list:m, index:-1, j:void 0};
  }
  function h(e) {
    this[0] = {};
    this[1] = b();
    this.size = 0;
    if (e) {
      e = z(e);
      for (var f; !(f = e.next()).done;) {
        f = f.value, this.set(f[0], f[1]);
      }
    }
  }
  if (function() {
    if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) {
      return !1;
    }
    try {
      var e = Object.seal({x:4}), f = new a(z([[e, "s"]]));
      if ("s" != f.get(e) || 1 != f.size || f.get({x:4}) || f.set({x:4}, "t") != f || 2 != f.size) {
        return !1;
      }
      var k = f.entries(), m = k.next();
      if (m.done || m.value[0] != e || "s" != m.value[1]) {
        return !1;
      }
      m = k.next();
      return m.done || 4 != m.value[0].x || "t" != m.value[1] || !k.next().done ? !1 : !0;
    } catch (q) {
      return !1;
    }
  }()) {
    return a;
  }
  var l = new WeakMap();
  h.prototype.set = function(e, f) {
    e = 0 === e ? 0 : e;
    var k = d(this, e);
    k.list || (k.list = this[0][k.id] = []);
    k.j ? k.j.value = f : (k.j = {next:this[1], o:this[1].o, head:this[1], key:e, value:f}, k.list.push(k.j), this[1].o.next = k.j, this[1].o = k.j, this.size++);
    return this;
  };
  h.prototype.delete = function(e) {
    e = d(this, e);
    return e.j && e.list ? (e.list.splice(e.index, 1), e.list.length || delete this[0][e.id], e.j.o.next = e.j.next, e.j.next.o = e.j.o, e.j.head = null, this.size--, !0) : !1;
  };
  h.prototype.clear = function() {
    this[0] = {};
    this[1] = this[1].o = b();
    this.size = 0;
  };
  h.prototype.has = function(e) {
    return !!d(this, e).j;
  };
  h.prototype.get = function(e) {
    return (e = d(this, e).j) && e.value;
  };
  h.prototype.entries = function() {
    return c(this, function(e) {
      return [e.key, e.value];
    });
  };
  h.prototype.keys = function() {
    return c(this, function(e) {
      return e.key;
    });
  };
  h.prototype.values = function() {
    return c(this, function(e) {
      return e.value;
    });
  };
  h.prototype.forEach = function(e, f) {
    for (var k = this.entries(), m; !(m = k.next()).done;) {
      m = m.value, e.call(f, m[1], m[0], this);
    }
  };
  h.prototype[Symbol.iterator] = h.prototype.entries;
  var g = 0;
  return h;
});
y("Promise", function(a) {
  function b(g) {
    this.i = 0;
    this.s = void 0;
    this.h = [];
    this.J = !1;
    var e = this.C();
    try {
      g(e.resolve, e.reject);
    } catch (f) {
      e.reject(f);
    }
  }
  function c() {
    this.h = null;
  }
  function d(g) {
    return g instanceof b ? g : new b(function(e) {
      e(g);
    });
  }
  if (a) {
    return a;
  }
  c.prototype.i = function(g) {
    if (null == this.h) {
      this.h = [];
      var e = this;
      this.s(function() {
        e.D();
      });
    }
    this.h.push(g);
  };
  var h = p.setTimeout;
  c.prototype.s = function(g) {
    h(g, 0);
  };
  c.prototype.D = function() {
    for (; this.h && this.h.length;) {
      var g = this.h;
      this.h = [];
      for (var e = 0; e < g.length; ++e) {
        var f = g[e];
        g[e] = null;
        try {
          f();
        } catch (k) {
          this.C(k);
        }
      }
    }
    this.h = null;
  };
  c.prototype.C = function(g) {
    this.s(function() {
      throw g;
    });
  };
  b.prototype.C = function() {
    function g(k) {
      return function(m) {
        f || (f = !0, k.call(e, m));
      };
    }
    var e = this, f = !1;
    return {resolve:g(this.N), reject:g(this.D)};
  };
  b.prototype.N = function(g) {
    if (g === this) {
      this.D(new TypeError("A Promise cannot resolve to itself"));
    } else {
      if (g instanceof b) {
        this.P(g);
      } else {
        a: {
          switch(typeof g) {
            case "object":
              var e = null != g;
              break a;
            case "function":
              e = !0;
              break a;
            default:
              e = !1;
          }
        }
        e ? this.M(g) : this.I(g);
      }
    }
  };
  b.prototype.M = function(g) {
    var e = void 0;
    try {
      e = g.then;
    } catch (f) {
      this.D(f);
      return;
    }
    "function" == typeof e ? this.R(e, g) : this.I(g);
  };
  b.prototype.D = function(g) {
    this.K(2, g);
  };
  b.prototype.I = function(g) {
    this.K(1, g);
  };
  b.prototype.K = function(g, e) {
    if (0 != this.i) {
      throw Error("Cannot settle(" + g + ", " + e + "): Promise already settled in state" + this.i);
    }
    this.i = g;
    this.s = e;
    2 === this.i && this.O();
    this.S();
  };
  b.prototype.O = function() {
    var g = this;
    h(function() {
      if (g.L()) {
        var e = p.console;
        "undefined" !== typeof e && e.error(g.s);
      }
    }, 1);
  };
  b.prototype.L = function() {
    if (this.J) {
      return !1;
    }
    var g = p.CustomEvent, e = p.Event, f = p.dispatchEvent;
    if ("undefined" === typeof f) {
      return !0;
    }
    "function" === typeof g ? g = new g("unhandledrejection", {cancelable:!0}) : "function" === typeof e ? g = new e("unhandledrejection", {cancelable:!0}) : (g = p.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
    g.promise = this;
    g.reason = this.s;
    return f(g);
  };
  b.prototype.S = function() {
    if (null != this.h) {
      for (var g = 0; g < this.h.length; ++g) {
        l.i(this.h[g]);
      }
      this.h = null;
    }
  };
  var l = new c();
  b.prototype.P = function(g) {
    var e = this.C();
    g.G(e.resolve, e.reject);
  };
  b.prototype.R = function(g, e) {
    var f = this.C();
    try {
      g.call(e, f.resolve, f.reject);
    } catch (k) {
      f.reject(k);
    }
  };
  b.prototype.then = function(g, e) {
    function f(r, t) {
      return "function" == typeof r ? function(u) {
        try {
          k(r(u));
        } catch (w) {
          m(w);
        }
      } : t;
    }
    var k, m, q = new b(function(r, t) {
      k = r;
      m = t;
    });
    this.G(f(g, k), f(e, m));
    return q;
  };
  b.prototype.catch = function(g) {
    return this.then(void 0, g);
  };
  b.prototype.G = function(g, e) {
    function f() {
      switch(k.i) {
        case 1:
          g(k.s);
          break;
        case 2:
          e(k.s);
          break;
        default:
          throw Error("Unexpected state: " + k.i);
      }
    }
    var k = this;
    null == this.h ? l.i(f) : this.h.push(f);
    this.J = !0;
  };
  b.resolve = d;
  b.reject = function(g) {
    return new b(function(e, f) {
      f(g);
    });
  };
  b.race = function(g) {
    return new b(function(e, f) {
      for (var k = z(g), m = k.next(); !m.done; m = k.next()) {
        d(m.value).G(e, f);
      }
    });
  };
  b.all = function(g) {
    var e = z(g), f = e.next();
    return f.done ? d([]) : new b(function(k, m) {
      function q(u) {
        return function(w) {
          r[u] = w;
          t--;
          0 == t && k(r);
        };
      }
      var r = [], t = 0;
      do {
        r.push(void 0), t++, d(f.value).G(q(r.length - 1), m), f = e.next();
      } while (!f.done);
    });
  };
  return b;
});
function ea(a, b) {
  a instanceof String && (a += "");
  var c = 0, d = !1, h = {next:function() {
    if (!d && c < a.length) {
      var l = c++;
      return {value:b(l, a[l]), done:!1};
    }
    d = !0;
    return {done:!0, value:void 0};
  }};
  h[Symbol.iterator] = function() {
    return h;
  };
  return h;
}
y("Array.prototype.keys", function(a) {
  return a ? a : function() {
    return ea(this, function(b) {
      return b;
    });
  };
});
var B = {}, C = Object.create(null), D = Object.create(null), fa = document.documentElement || document.body.parentNode, E = "ontouchstart" in window, F = !E && window.PointerEvent && navigator.maxTouchPoints, ha;
function G(a, b) {
  b || (b = a.type);
  var c = a.target, d = I.eventCache, h = I.eventBubble, l;
  d && (l = c["_mke" + b]);
  if ("undefined" === typeof l) {
    for (var g = c; g && g !== fa;) {
      var e = void 0;
      "click" === b && ha && (e = g.getAttribute("tap"));
      e || (e = g.getAttribute(b));
      if (e) {
        var f = e.indexOf(":");
        if (-1 < f) {
          var k = e.substring(0, f);
          f = e.substring(f + 1);
          for (e = ""; (g = g.parentElement) !== fa;) {
            if (g.hasAttribute(f)) {
              e = k;
              break;
            }
          }
          e || console.warn("Event root '" + f + "' was not found for the event: '" + k + "'.");
        }
        if (e && (l || (l = [], d && (c["_mke" + b] = l)), l.push([e, g]), e = D[e], !h || e && (e.stop || e.cancel))) {
          break;
        }
      }
      g = g.parentElement;
    }
    d && (l || (c["_mke" + b] = null));
  }
  if (l) {
    for (h = 0; h < l.length; h++) {
      if (k = l[h], g = k[0], e = C[g]) {
        k = k[1];
        if (f = D[g]) {
          f.prevent && a.preventDefault(), f.stop && a.stopImmediatePropagation(), f.once && (C[g] = null, d && (c["_mke" + b] = null));
        }
        e(k, a);
      } else {
        console.warn("The route '" + g + "' is not defined for the event '" + b + "'.");
      }
    }
  }
}
function ia(a, b) {
  B[a] || (J(1, a, G, b), B[a] = 1);
  return this;
}
var K, L, ja;
if (E || F) {
  var ka = function(a) {
    var b = K, c = L, d = a, h = a.changedTouches;
    h && (d = h[0]);
    K = d.clientX;
    L = d.clientY;
    15 > Math.abs(K - b) && 15 > Math.abs(L - c) && G(a, "tap");
  }, la = function(a) {
    var b = a;
    (a = a.touches) && (b = a[0]);
    K = b.clientX;
    L = b.clientY;
  }, ma = {passive:!1, capture:!0};
  ja = function(a) {
    J(a, F ? "pointerdown" : "touchstart", la, ma);
    J(a, F ? "pointerup" : "touchend", ka, ma);
  };
}
function J(a, b, c, d) {
  if ("tap" === b) {
    if (E || F) {
      ja(a);
      return;
    }
    ha = !0;
    b = "click";
  }
  window[(a ? "add" : "remove") + "EventListener"](b, c, d || !1 === d ? d : !0);
}
;function M(a, b, c) {
  for (var d = b.length, h = [], l = {}, g = 0, e, f, k, m = void 0, q = null; g < d; g++) {
    e = b[g];
    if (f = e.v) {
      if (k = e = l[f], !k) {
        e = void 0;
        k = a;
        for (var r = 0, t = f.length, u = ""; r < t; r++) {
          var w = f[r];
          u += w;
          l[u] ? k = l[u] : (">" === w ? k = k.firstChild : "|" === w ? (e = k, k = k.firstChild) : "@" === w ? (e = k, k = k.style) : k = k.nextSibling, l[u] = k);
        }
        e = [k, e];
        k = e[0];
        e = e[1] || k;
      }
    } else {
      k = e = a;
    }
    c && m !== e && (m = e, e._mkc = q = {});
    h[g] = new N(q, k, "");
  }
  return a._mkp = h;
}
function O(a, b, c, d, h, l) {
  var g = h || (b.tag ? b.T ? document.createElementNS("http://www.w3.org/2000/svg", b.tag) : document.createElement(b.tag) : document.createTextNode(b.text)), e, f;
  if (f = b.class) {
    "object" === typeof f ? (c.push(new N(e = {_c:""}, g, d)), (f = f[0]) && P(a, f, ["_c", c.length - 1])) : h || (g.className = f);
  }
  if (f = b.attr) {
    for (var k in f) {
      var m = f[k];
      "object" === typeof m ? (e || c.push(new N(e = {}, g, d)), e["_a" + k] = !1, (m = m[0]) && P(a, m, ["_a", c.length - 1, k])) : h || g.setAttribute(k, m);
    }
  }
  if (f = b.event) {
    for (var q in f) {
      h || (g.setAttribute(q, f[q]), ia(q));
    }
  }
  if (f = b.style) {
    "object" === typeof f ? (c.push(new N(e || (e = {}), g.style, d + "@")), e._s = "", (f = f[0]) && P(a, f, ["_s", c.length - 1])) : h || (g.style.cssText = f);
  }
  if (f = b.text) {
    "object" === typeof f ? (k = g, f = f[0], b.tag ? (d += "|", k = !h && g.firstChild, k || (k = document.createTextNode(f), g.appendChild(k))) : e = {}, (e || (e = {}))._t = f, c.push(new N(e, k, d)), f && P(a, f, ["_t", c.length - 1])) : h || (b.tag ? g.textContent = f : g.nodeValue = f);
  } else if (f = b.child) {
    if (h && (h = h.firstChild, !h)) {
      return console.warn("Hydration failed of template '" + a.name + "' because the existing DOM structure was incompatible. Falls back to factory construction instead."), null;
    }
    f.constructor !== Array && (f = [f]);
    b = 0;
    for (k = f.length; b < k; b++) {
      if (m = f[b], d = b ? d + "+" : d + ">", m = O(a, m, c, d, h, 1), h) {
        if (b < k - 1 && (h = h.nextSibling, !h)) {
          return console.warn("Hydration failed of template '" + a.name + "' because the existing DOM structure was incompatible. Falls back to factory construction instead."), null;
        }
      } else {
        g.appendChild(m);
      }
    }
  } else if (f = b.html) {
    "object" === typeof f ? (e || c.push(new N(e = {}, g, d)), e._h = "", (f = f[0]) && P(a, f, ["_h", c.length - 1])) : h || (g.innerHTML = f);
  } else if (f = b.inc) {
    e || c.push(new N(null, g, d));
    if ("string" === typeof f) {
      b = Q[f];
      if (!b) {
        throw Error("The partial template '" + f + "' which is included by the root template '" + a.name + "' was not registered. When using named includes make sure you register all your includes by Mikado.register(tpl) before instantiating the Mikado view instance.");
      }
      if (!(b instanceof I)) {
        d = b[0];
        if (b = b[1]) {
          b.async = !1, h && (b.root = h, b.hydrate = !0);
        }
        Q[f] = b = new I(d, b);
      }
    } else {
      d = a.inc.length;
      if (!a.tpl.fn.length) {
        throw Error("The template '" + a.name + "|" + d + "' has conflicts. It should provide a handler entry, but wasn't found.");
      }
      b = new I({name:a.name + "|" + d, tpl:f, key:f.key, cache:f.cache, fn:a.tpl.fn}, {recycle:a.recycle, cache:a.cache, pool:a.pool, state:a.state, mount:g, hydrate:!!h});
    }
    a.inc.push(b);
  }
  e && (g._mkc = e);
  l || (g._mkp = c, a.B = a.B === c.length ? 1 : 0);
  return g;
}
function P(a, b, c) {
  a.B++;
  a.proxy || (a.proxy = {});
  (a.proxy[b] || (a.proxy[b] = [])).push(c);
}
function N(a, b, c) {
  this.c = a;
  this.n = b;
  this.v = c;
}
n = N.prototype;
n._a = function(a, b) {
  if (this.c) {
    if (this.c["_a" + a] === b) {
      return;
    }
    this.c["_a" + a] = b;
  }
  !1 !== b ? this.n.setAttribute(a, b) : this.n.removeAttribute(a);
};
n._t = function(a) {
  if (this.c) {
    if (this.c._t === a) {
      return;
    }
    this.c._t = a;
  }
  this.n.nodeValue = a;
};
n._c = function(a) {
  if (this.c) {
    if (this.c._c === a) {
      return;
    }
    this.c._c = a;
  }
  this.n.className = a;
};
n._s = function(a) {
  if (this.c) {
    if (this.c._s === a) {
      return;
    }
    this.c._s = a;
  }
  this.n.cssText = a;
};
n._h = function(a) {
  if (this.c) {
    if (this.c._h === a) {
      return;
    }
    this.c._h = a;
  }
  this.n.innerHTML = a;
};
var oa = window.Proxy || function() {
  function a(b, c) {
    this.path = c.path;
    this.fn = c.fn;
    for (var d in b) {
      this.define(b, d, b[d]);
    }
    b._mkx = !0;
    return b;
  }
  a.prototype.define = function(b, c, d) {
    var h = this;
    Object.defineProperty(b, c, {get:function() {
      return d;
    }, set:function(l) {
      na(h, d = l, c);
    }});
  };
  return a;
}();
function pa(a, b) {
  return "_mkx" === b || a[b];
}
function qa(a, b, c) {
  na(this, c, b);
  a[b] = c;
  return !0;
}
function na(a, b, c) {
  if (c = a.fn[c]) {
    for (var d = 0; d < c.length; d++) {
      var h = c[d], l = h[0], g = a.path[h[1]];
      if (!g.c || g.c[l + (h[2] || "")] !== b) {
        g[l](h[2] || b, b);
      }
    }
  }
}
;var Q = Object.create(null);
function I(a, b) {
  b = void 0 === b ? {} : b;
  if (!(this instanceof I)) {
    return new I(a, b);
  }
  if ("string" === typeof a) {
    var c = Q[a];
    if (!c) {
      throw Error("The template '" + a + "' is not registered.");
    }
    if (c instanceof I) {
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
  this.u = {};
  c = a.fn;
  a.H || c && (a.H = c.slice());
  this.apply = c && c.pop();
  this.tpl = a;
  this.name = a.name;
  this.inc = [];
  this.pool = (this.key || this.recycle) && b.pool || 0;
  this.F = [];
  this.m = new Map();
  this.cache = a.cache || !!b.cache;
  this.async = !!b.async;
  this.A = 0;
  this.on = b.on || {};
  this.proxy = null;
  this.B = 0;
  (a = b.observe) && (new R(a)).mount(this);
  this.root ? this.mount(this.root, b.hydrate) : this.l = null;
}
n = I.prototype;
n.mount = function(a, b) {
  this.A && this.cancel();
  var c = a._mki, d = this.root !== a;
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
      for (var h = a.children, l = h.length, g = Array(l), e = 0; e < l; e++) {
        g[e] = h[e];
      }
      this.g = g;
      this.length = this.g.length;
    } else {
      this.g = [], this.length = 0, a.firstChild && (a.textContent = "");
    }
    a._mkd = this.g;
  }
  if (this.key) {
    if (d && this.root && (this.root._mkl = this.u), c === this) {
      this.u = a._mkl;
    } else {
      d = {};
      if (!c && b && this.length) {
        for (c = 0; c < this.length; c++) {
          h = this.g[c], l = h.getAttribute("key"), h._mkk = l, d[l] = h;
        }
      }
      a._mkl = this.u = d;
    }
  }
  a._mki = this;
  this.root = a;
  this.l || (b && this.length && (this.l = this.g[0].cloneNode(), O(this, this.tpl.tpl, [], "", this.l) && ra(this)), this.tpl && (this.l = O(this, this.tpl.tpl, [], ""), ra(this)));
  return this;
};
function ra(a) {
  a.tpl.H && (a.tpl.fn.length && console.error("The template '" + a.name + "' might not have been initialized properly. There are " + a.tpl.fn.length + " template functions left which wasn't assigned. Please post an example to Mikado Github issues."), a.tpl.fn = a.tpl.H, a.tpl.H = null);
  a.tpl = null;
}
n.render = function(a, b, c, d) {
  if (!this.root) {
    throw Error("Template was not mounted or root was not found.");
  }
  if (this.root._mki !== this) {
    throw Error("Another template is already assigned to this root. Please use '.mount(root_element)' before calling '.render()' to switch the context of a template.");
  }
  if (!d) {
    var h;
    if (b && (h = "function" === typeof b) || !0 === b) {
      c = b, b = null;
    }
    this.A && this.cancel();
    if (this.async || c) {
      var l = this;
      h || (h = "function" === typeof c);
      l.A = requestAnimationFrame(function() {
        l.A = 0;
        l.render(a, b, null, 1);
        h && c();
      });
      return h ? this : new Promise(function(r) {
        c = r;
      });
    }
  }
  var g = this.length;
  if (!a) {
    return this.apply || this.g[0] || this.add(), console.warn("When calling .render() by passing no data nothing will happen!"), this;
  }
  if (Array.isArray(a) || a instanceof R) {
    if (d = a.length, !d) {
      return this.remove(0, g);
    }
  } else {
    if (this.proxy) {
      throw Error("When a template is using data bindings by an expression like {{= ... }} you will need to pass an array to the render() function, also when just one single item should be rendered. Because the array you will pass in is getting proxified after calling .render(arr), after then you can trigger bindings via arr[0].prop = 'value'.");
    }
    a = [a];
    d = 1;
  }
  var e = this.key;
  !g || e || this.recycle || (this.remove(0, g), g = 0);
  var f = g < d ? g : d, k = 0;
  if (k < f) {
    for (var m = void 0, q = void 0; k < f; k++) {
      m = this.g[k];
      q = a[k];
      if (e && m._mkk !== q[e]) {
        return sa(this, a, b, k);
      }
      this.update(m, q, b, k, 1);
      this.proxy && !q._mkx && (a[k] = S(this, m, q));
    }
  }
  if (k < d) {
    for (; k < d; k++) {
      g = a[k], this.add(g, b, k), this.proxy && !g._mkx && (a[k] = S(this, this.g[k], g));
    }
  } else {
    d < g && this.remove(d, g - d);
  }
  return this;
};
n.replace = function(a, b, c, d) {
  "undefined" === typeof d && ("number" === typeof a ? (d = a, a = this.g[d]) : d = this.index(a));
  var h;
  if (this.key) {
    var l = b[this.key];
    if (h = this.u[l]) {
      if (h !== a) {
        var g = this.index(h);
        this.g[d] = h;
        this.g[g] = a;
        l = g < d ? h : a;
        g = g < d ? a : h;
        var e = l.nextElementSibling;
        this.root.insertBefore(l, g);
        e !== g && this.root.insertBefore(g, e);
      }
    } else {
      this.pool && (h = this.m.get(l)) && (this.m.delete(l), ta(this, a), this.g[d] = h, a.replaceWith(h));
    }
  } else {
    this.recycle && (h = a);
  }
  h ? this.B && b._mkx || !this.apply || this.apply(b, c || this.state, d, h._mkp || M(h, this.l._mkp, this.cache)) : (b = this.create(b, c, d, 1), (this.key || this.pool) && ta(this, a), this.g[d] = b, a.replaceWith(b));
  (d = this.on.replace) && d(a);
  return this;
};
n.update = function(a, b, c, d) {
  if (!this.apply) {
    return console.warn("The template '" + this.name + "' is a static template and should not be updated. Alternatively you can use .replace() to switch contents."), this;
  }
  if (this.B && b._mkx) {
    return this;
  }
  "undefined" === typeof d && ("number" === typeof a ? (d = a, a = this.g[a]) : d = this.index(a));
  this.apply(b, c || this.state, d, a._mkp || M(a, this.l._mkp, this.cache));
  (b = this.on.update) && b(a);
  return this;
};
n.cancel = function() {
  cancelAnimationFrame(this.A);
  this.A = 0;
  return this;
};
n.create = function(a, b, c, d) {
  var h = this.key, l = h && a[h], g, e, f;
  if (h && this.pool && (e = this.m) && (g = e.get(l))) {
    var k = 1;
    e.delete(l);
  } else {
    (!h || this.recycle) && this.pool && (e = this.F) && e.length ? g = e.pop() : (g = f = this.l, f || (this.l = g = f = O(this, this.tpl.tpl, [], ""), ra(this)));
  }
  this.apply && this.apply(a, b || this.state, c, g._mkp || M(g, this.l._mkp, !!f || this.cache));
  f && (g = g.cloneNode(!0));
  h && (k || (g._mkk = l), d && (this.u[l] = g));
  (a = this.on[f ? "create" : "recycle"]) && a(g);
  return g;
};
n.add = function(a, b, c) {
  if ("number" === typeof b) {
    c = b;
    b = null;
    var d = c < this.length;
  } else {
    c || 0 === c ? d = c < this.length : c = this.length;
  }
  a = this.create(a, b, c, 1);
  d ? (this.root.insertBefore(a, this.g[c]), ua(this.g, this.length - 1, c, a), this.length++) : (this.root.appendChild(a), this.g[this.length++] = a);
  (c = this.on.insert) && c(a);
  return this;
};
function S(a, b, c) {
  b = b._mkp || M(b, a.l._mkp, a.cache);
  return new oa(c, {path:b, fn:a.proxy, get:pa, set:qa});
}
function sa(a, b, c, d) {
  var h = a.g, l = a.u, g = a.key, e = b.length, f = h.length, k = f > e ? f : e, m = 0;
  for (d || (d = 0); d < k; d++) {
    var q = void 0;
    if (d < e) {
      var r = b[d], t = d >= f, u = void 0, w = void 0, da = void 0;
      if (!t && (u = h[d], w = r[g], da = u._mkk, a.proxy && !r._mkx && (b[d] = S(a, u, r)), da === w)) {
        a.update(u, r, c, d, 1);
        continue;
      }
      if (t || !l[w]) {
        t || !a.pool ? (f++, k = f > e ? f : e, a.add(r, c, d)) : a.replace(u, r, c, d);
        a.proxy && !r._mkx && (b[d] = S(a, h[d], r));
        continue;
      }
      for (var H = t = void 0, x = d + 1; x < k; x++) {
        if (!t && x < f && h[x]._mkk === w && (t = x + 1), !H && x < e && b[x][g] === da && (H = x + 1), t && H) {
          t >= H ? (q = h[t - 1], a.root.insertBefore(q, u), a.update(q, r, c, d, 1), t === H ? (1 < x - d && a.root.insertBefore(u, h[t]), h[d] = h[x], (h[x] = u) || console.error("Error")) : (ua(h, t - 1, d), m++)) : (r = H - 1 + m, a.root.insertBefore(u, h[r] || null), ua(h, d, (r > f ? f : r) - 1), m--, d--);
          q = 1;
          break;
        }
      }
    }
    q || (a.remove(d), f--, k = f > e ? f : e, d--);
  }
  return a;
}
function ua(a, b, c, d) {
  var h = d || a[b];
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
  a[c] = h;
}
n.append = function(a, b, c) {
  if ("number" === typeof b) {
    c = b;
    b = null;
    var d = 1;
  } else if (c || 0 === c) {
    d = 1;
  }
  for (var h = a.length, l = 0; l < h; l++) {
    this.add(a[l], b, d ? c++ : null);
  }
  return this;
};
n.clear = function() {
  this.length && this.remove(0, this.length);
  return this;
};
n.remove = function(a, b) {
  var c = this.length;
  c && a && ("number" !== typeof a ? a = this.index(a) : 0 > a && (a = c + a - 1));
  if (!c || a >= c) {
    return this;
  }
  b ? 0 > b && (a -= b + 1, 0 > a && (a = 0), b *= -1) : b = 1;
  !a && b >= c ? (a = this.g, b = a.length, this.root.textContent = "", this.root._mkd = this.g = [], c = 0) : (a = this.g.splice(a, b), c -= b);
  for (var d = this.pool && !this.key, h = this.key || this.pool, l = this.on.remove, g = 0, e; g < b; g++) {
    e = a[d ? b - g - 1 : g], c && e.remove(), h && ta(this, e), l && l(e);
  }
  this.length = c;
  return this;
};
n.index = function(a) {
  return this.g.indexOf(a);
};
n.node = function(a) {
  return this.g[a];
};
function ta(a, b) {
  if (a.key) {
    var c = b._mkk;
    a.u[c] = null;
  }
  if (a.pool) {
    if (c) {
      a.m.set(c, b), !0 !== a.pool && a.m.size > a.pool && a.m.delete(a.m.keys().next().value);
    } else {
      if (c = a.F.length, !0 === a.pool || c < a.pool) {
        a.F[c] = b;
      }
    }
  }
}
n.flush = function() {
  this.F = [];
  this.m = new Map();
  return this;
};
n.destroy = function() {
  for (var a = 0, b; a < this.inc.length; a++) {
    b = this.inc[a], Q[b.name] || b.destroy();
  }
  this.key && (this.root && (this.root._mkl = null), this.u = null);
  this.root && (this.root._mkd = this.root._mki = null);
  this.proxy = this.on = this.m = this.F = this.g = this.root = this.tpl = this.apply = this.inc = this.state = this.l = null;
};
var T = Array.prototype, va = window.Proxy, U = !1;
function V(a) {
  if (!a) {
    throw Error("The observable array was not assigned to a Mikado instance. You need to pass in the observable array when initiating a Mikado instance.");
  }
}
function R(a) {
  if (a instanceof R) {
    return a;
  }
  if (!(this instanceof R)) {
    return new R(a);
  }
  this.h = null;
  var b = a ? a.length : 0;
  if (va) {
    if (b) {
      for (var c = 0; c < b; c++) {
        this[c] = a[c];
      }
    }
    this.length = b;
    this.i = {splice:T.splice.bind(this), pop:T.pop.bind(this), shift:T.shift.bind(this), unshift:T.unshift.bind(this), push:T.push.bind(this)};
    return new Proxy(this, wa);
  }
  this.i = a || [];
  for (a = 0; a <= b; a++) {
    this.define(a);
  }
  this.define("length");
}
R.prototype.mount = function(a) {
  this.h = a;
  return this;
};
R.prototype.define = function(a) {
  Object.defineProperty(this, a, {get:function() {
    return this.i[a];
  }, set:function(b) {
    "number" === typeof a && (a === this.length && this.define(a + 1), wa.set(this, a, b));
  }});
  return this;
};
var wa = {set:function(a, b, c) {
  if ("number" === typeof b) {
    var d = !0;
  } else {
    var h = parseInt(b, 10);
    b === "" + h && (b = h, d = !0);
  }
  h = a.h;
  if (!U) {
    U = !0;
    if (h) {
      var l = a.length;
      if (d) {
        V(h);
        var g = h.length;
        l !== g && (a.length = g);
        b >= g ? (h.add(c), a.length++) : b < g && (l = h.g[b], h.recycle || h.key && l._mkk === c[h.key] ? h.update(l, c, null, b) : h.replace(l, c, null, b));
      } else {
        "length" === b && c < l && h.remove(c, l - c);
      }
    }
    U = !1;
  }
  d && h.proxy && !c._mkx && (c = S(h, h.g[b], c));
  (va ? a : a.i)[b] = c;
  return !0;
}};
n = R.prototype;
n.swap = function(a, b) {
  U = !0;
  var c = this[b];
  this[b] = this[a];
  this[a] = c;
  U = !1;
  return this;
};
n.set = function(a) {
  this.splice();
  return this.concat(a);
};
n.splice = function(a, b, c) {
  V(this.h);
  U = !0;
  a || (a = 0);
  "undefined" === typeof b && (b = this.length - a, 0 > b && (b = 0));
  b && this.h.remove(a, b);
  b = c ? this.i.splice(a, b, c) : this.i.splice(a, b);
  c && this.h.add(c, a);
  U = !1;
  return b;
};
n.push = function(a) {
  V(this.h);
  U = !0;
  this.h.add(a);
  this[this.length] = a;
  va && this.length++;
  U = !1;
};
n.unshift = function(a) {
  V(this.h);
  U = !0;
  this.h.add(a, 0);
  this.i.unshift(a);
  U = !1;
};
n.pop = function() {
  V(this.h);
  U = !0;
  this.h.remove(this.length - 1);
  var a = this.i.pop();
  U = !1;
  return a;
};
n.shift = function() {
  V(this.h);
  U = !0;
  this.h.remove(0);
  var a = this.i.shift();
  U = !1;
  return a;
};
n.concat = function(a) {
  for (var b = a.length, c = 0; c < b; c++) {
    this.push(a[c]);
  }
  return this;
};
n.sort = T.sort;
n.reverse = T.reverse;
n.slice = T.slice;
n.map = function(a, b) {
  b && (a = a.bind(this));
  b = 0;
  for (var c = this.length; b < c; b++) {
    this[b] = a(this[b]);
  }
  return this;
};
n.filter = function(a, b) {
  b && (a = a.bind(this));
  b = 0;
  for (var c = this.length; b < c; b++) {
    if (a(this[b])) {
      h && (this.splice(d, h), c -= h, b -= h, h = 0);
    } else {
      if (h) {
        h++;
      } else {
        var d = b;
        var h = 1;
      }
    }
  }
  h && this.splice(d, h);
  return this;
};
n.indexOf = function(a) {
  for (var b = 0, c = this.length; b < c; b++) {
    if (this[b] === a) {
      return b;
    }
  }
  return -1;
};
n.lastIndexOf = function(a) {
  for (var b = this.length - 1; 0 <= b; b--) {
    if (this[b] === a) {
      return b;
    }
  }
  return -1;
};
n.forEach = function(a) {
  for (var b = 0, c = this.length; b < c; b++) {
    a(this[b]);
  }
};
var W = document.createElement("div"), xa = document.createTextNode(""), X = document.createElement("div");
W.appendChild(xa);
n = I.prototype;
n.move = function(a, b) {
  if ("number" === typeof a) {
    var c = a;
    a = this.g[c];
  } else {
    c = this.index(a);
  }
  0 > b && (b = this.length + b - 1);
  c !== b && this.shift(a, b - c);
  return this;
};
n.shift = function(a, b) {
  if (!b) {
    return this;
  }
  if ("number" === typeof a) {
    var c = a;
    a = this.g[a];
  } else {
    c = this.index(a);
  }
  var d = 0 > b;
  if (d && c || !d && c < this.length - 1) {
    b = d ? Math.max(c + b, 0) : Math.min(c + b, this.length - 1);
    var h = this.g[b], l = d && 1 < c - b || !d && 1 < b - c;
    this.root.insertBefore(a, d ? h : this.g[b + 1] || null);
    if (l) {
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
      this.g[c] = h, this.g[b] = a;
    }
  }
  return this;
};
n.up = function(a, b) {
  (!b || 0 < b) && this.shift(a, -(b || 1));
  return this;
};
n.down = function(a, b) {
  (!b || 0 < b) && this.shift(a, b || 1);
  return this;
};
n.first = function(a) {
  return this.shift(a, -this.length);
};
n.last = function(a) {
  return this.shift(a, this.length);
};
n.before = function(a, b) {
  "number" !== typeof a && (a = this.index(a));
  "number" !== typeof b && (b = this.index(b));
  b !== a + 1 && (0 > b && (b = this.length + b, 0 > a && b--), 0 > a && (a = this.length + a - 1), this.shift(a, b - a - 1));
  return this;
};
n.after = function(a, b) {
  "number" !== typeof a && (a = this.index(a));
  "number" !== typeof b && (b = this.index(b));
  b !== a - 1 && (0 > b && (b = this.length + b - 2, 0 > a && b++), 0 > a && (a = this.length + a - 1), this.shift(a, b - a + 1));
  return this;
};
n.swap = function(a, b) {
  if (a !== b) {
    if ("number" === typeof a) {
      var c = a;
      a = this.g[a];
    } else {
      c = this.index(a);
    }
    if ("number" === typeof b) {
      var d = b;
      b = this.g[b];
    } else {
      d = this.index(b);
    }
    var h = c + 1 !== d;
    this.root.insertBefore(h ? a : b, h ? b : a);
    h && d + 1 !== c && this.root.insertBefore(b, this.g[c + 1] || null);
    this.g[c] = b;
    this.g[d] = a;
  }
  return this;
};
var ya = /[^;:]+/g, za = /[^ ]+/g;
function Aa(a, b, c, d) {
  var h;
  d || (d = a._mkc) ? h = d["_a" + b] : a._mkc = d = {};
  h !== c && (d["_a" + b] = c, !1 !== c ? a.setAttribute(b, c) : a.removeAttribute(b));
}
function Ba(a, b, c) {
  var d;
  c || (c = a._mkc) ? d = c["_a" + b] : a._mkc = c = {};
  !1 !== d && (c["_a" + b] = !1, a.removeAttribute(b));
}
function Ca(a, b) {
  var c, d;
  (c = a._mkc) ? d = c["_a" + b] : a._mkc = c = {};
  "string" !== typeof d && (c["_a" + b] = d = a.getAttribute(b));
  return d;
}
function Y(a) {
  var b = a._mkc, c;
  b ? c = b._c : a._mkc = b = {};
  if (!c) {
    return b._c = {};
  }
  if ("string" === typeof c) {
    for (a = c.match(za), b._c = c = {}, b = 0; b < a.length; b++) {
      c[a[b]] = 1;
    }
  }
  return c;
}
function Da(a, b, c) {
  c = c || Y(a);
  c[b] || (c[b] = 1, a.classList.add(b));
}
function Ea(a, b, c) {
  c = c || Y(a);
  0 !== c[b] && (c[b] = 0, a.classList.remove(b));
}
function Fa(a, b, c, d) {
  d = d || Y(a);
  var h = !!d[b];
  c = "undefined" === typeof c ? !h : !!c;
  h !== c && (d[b] = c ? 1 : 0, c ? a.classList.add(b) : a.classList.remove(b));
}
function Ga(a) {
  var b = a._mkc, c;
  b ? c = b._s : a._mkc = b = {};
  if (!c) {
    return b._s = {};
  }
  if ("string" === typeof c) {
    for (a = c.match(ya), b._s = c = {}, b = 0; b < a.length; b += 2) {
      c[a[b]] = a[b + 1];
    }
  }
  return c;
}
function Ha(a, b, c, d, h) {
  h = h || Ga(a);
  h[b] !== c && (h[b] = c, (d || a.style).setProperty(b, c));
}
;I.once = function(a, b, c, d, h) {
  var l = new I(b);
  "function" === typeof d && (h = d, d = null);
  if (h) {
    var g = h;
    h = function() {
      l.destroy();
      g();
    };
  }
  if (!a) {
    throw Error("Root element is not defined.");
  }
  a.append(l.create(c, d));
  h || l.destroy();
  return I;
};
I.register = function(a, b) {
  var c;
  if ("string" === typeof a) {
    var d = c = a;
    a = Q[d];
    a instanceof I || (a = a[0]);
    if (!a) {
      throw Error("The template '" + d + "' was not found.");
    }
  } else {
    d = a.name;
  }
  Q[d] && (c ? console.info("The template '" + d + "' was replaced by a new definition.") : console.warn("The template '" + d + "' was already registered and is getting overwritten. When this isn't your intention, then please check your template names about uniqueness and collision!"));
  Q[d] = [a, b];
  return I;
};
I.unregister = function(a) {
  "object" === typeof a && (a = a.name);
  var b = Q[a];
  b && (b instanceof I && b.destroy(), Q[a] = null);
  return I;
};
I.setText = function(a, b) {
  var c = a._mkc, d, h;
  c ? h = c._t : a._mkc = c = {};
  h !== b && (c._t = b, 3 === a.nodeType && (d = a) || (d = a.firstChild) ? d.nodeValue = b : a.textContent = b);
};
I.getText = function(a) {
  var b = a._mkc, c, d;
  b ? d = b._t : a._mkc = b = {};
  "string" !== typeof d && (3 === a.nodeType && (c = a) || (c = a.firstChild) ? b._t = d = c.nodeValue : b._t = d = a.textContent);
  return d;
};
I.setHtml = function(a, b) {
  var c = a._mkc, d;
  c ? d = c._h : a._mkc = c = {};
  d !== b && (a.innerHTML = b, c._h = b, c._t = null);
};
I.getHtml = function(a) {
  var b = a._mkc, c;
  b ? c = b._h : a._mkc = b = {};
  "string" !== typeof c && (b._h = c = a.innerHTML);
  return c;
};
I.setClasses = function(a, b) {
  var c = a._mkc, d;
  c ? d = c._c : a._mkc = c = {};
  d !== b && (c._c = b, a.className = b);
};
I.getClasses = function(a) {
  var b = a._mkc, c;
  b ? c = b._c : a._mkc = b = {};
  "string" !== typeof c && (b._c = c = a.className);
  return c.split(za);
};
I.hasClass = function(a, b) {
  var c = Y(a), d = c[b];
  "number" !== typeof d && (c[b] = d = a.classList.contains(b) ? 1 : 0);
  return !!d;
};
I.toggleClass = Fa;
I.toggleClasses = function(a, b) {
  var c = Y(a);
  if (b.constructor === Array) {
    for (var d = 0; d < b.length; d++) {
      Fa(a, b[d], void 0, c);
    }
  } else {
    for (d in b) {
      Fa(a, d, b[d], c);
    }
  }
};
I.removeClass = Ea;
I.removeClasses = function(a, b) {
  for (var c = Y(a), d = 0; d < b.length; d++) {
    Ea(a, b[d], c);
  }
};
I.addClass = Da;
I.addClasses = function(a, b) {
  for (var c = Y(a), d = 0; d < b.length; d++) {
    Da(a, b[d], c);
  }
};
I.setAttribute = Aa;
I.setAttributes = function(a, b) {
  var c = a._mkc;
  c || (a._mkc = c = {});
  for (var d in b) {
    Aa(a, d, b[d], c);
  }
};
I.getAttribute = Ca;
I.hasAttribute = function(a, b) {
  a = Ca(a, b);
  return !(!a && "" !== a);
};
I.removeAttribute = Ba;
I.removeAttributes = function(a, b) {
  var c = a._mkc;
  c || (a._mkc = c = {});
  for (var d = 0; d < b.length; d++) {
    Ba(a, b[d], c);
  }
};
I.setCss = function(a, b) {
  var c = a._mkc, d;
  c ? d = c._s : a._mkc = c = {};
  d !== b && (c._s = b, a.style.cssText = b);
};
I.getCss = function(a) {
  var b = a._mkc, c;
  b ? c = b._s : a._mkc = b = {};
  "string" !== typeof c && (b._s = c = a.style.cssText);
  return c;
};
I.getStyle = function(a, b) {
  var c = Ga(a), d = c[b];
  "string" !== typeof d && (c[b] = d = a.style.getPropertyValue(b));
  return d;
};
I.setStyle = Ha;
I.setStyles = function(a, b) {
  var c = Ga(a), d = a.style, h;
  for (h in b) {
    Ha(a, h, b[h], d, c);
  }
};
I.escape = function(a) {
  W.i !== a && (xa.nodeValue = a, W.h = W.innerHTML, W.i = a);
  return W.h;
};
I.sanitize = function(a) {
  X.h !== a && (X.innerHTML = a, X.h = a, X.i = X.textContent);
  return X.i;
};
I.prototype.route = I.route = function(a, b, c) {
  if (!a) {
    throw Error("Missing route name.");
  }
  if (!b) {
    throw Error("The route '" + a + "' has no function assigned to it.");
  }
  C[a] && console.info("A new handler was re-assigned to the route '" + a + "'.");
  C[a] = b;
  c && (D[a] = c);
  return this;
};
I.prototype.dispatch = I.dispatch = function(a, b, c) {
  if (!a) {
    throw Error("Missing route name.");
  }
  if (!C[a]) {
    throw Error("Undefined route '" + a + "'.");
  }
  C[a](b || this, c || window.event);
  return this;
};
I.prototype.listen = I.listen = ia;
I.prototype.unlisten = I.unlisten = function(a, b) {
  B[a] && (J(0, a, G, b), B[a] = 0);
  return this;
};
I.Array = R;
var Z = window, Ia;
(Ia = Z.define) && Ia.amd ? Ia([], function() {
  return I;
}) : "object" === typeof Z.exports ? Z.module.exports = I : Z.Mikado = I;
}).call(this);
