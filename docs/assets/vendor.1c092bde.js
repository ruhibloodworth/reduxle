var pp = Object.defineProperty,
  mp = Object.defineProperties;
var vp = Object.getOwnPropertyDescriptors;
var io = Object.getOwnPropertySymbols;
var Ls = Object.prototype.hasOwnProperty,
  Ms = Object.prototype.propertyIsEnumerable;
var Ds = (e, t, n) =>
    t in e
      ? pp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ee = (e, t) => {
    for (var n in t || (t = {})) Ls.call(t, n) && Ds(e, n, t[n]);
    if (io) for (var n of io(t)) Ms.call(t, n) && Ds(e, n, t[n]);
    return e;
  },
  Hn = (e, t) => mp(e, vp(t));
var A = (e, t) => {
  var n = {};
  for (var r in e) Ls.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && io)
    for (var r of io(e)) t.indexOf(r) < 0 && Ms.call(e, r) && (n[r] = e[r]);
  return n;
};
function hp(e, t) {
  return (
    t.forEach(function (n) {
      n &&
        typeof n != "string" &&
        !Array.isArray(n) &&
        Object.keys(n).forEach(function (r) {
          if (r !== "default" && !(r in e)) {
            var o = Object.getOwnPropertyDescriptor(n, r);
            Object.defineProperty(
              e,
              r,
              o.get
                ? o
                : {
                    enumerable: !0,
                    get: function () {
                      return n[r];
                    },
                  }
            );
          }
        });
    }),
    Object.freeze(
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
    )
  );
}
var v = { exports: {} },
  z = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var Is = Object.getOwnPropertySymbols,
  gp = Object.prototype.hasOwnProperty,
  yp = Object.prototype.propertyIsEnumerable;
function wp(e) {
  if (e == null)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  return Object(e);
}
function Sp() {
  try {
    if (!Object.assign) return !1;
    var e = new String("abc");
    if (((e[5] = "de"), Object.getOwnPropertyNames(e)[0] === "5")) return !1;
    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function (l) {
      return t[l];
    });
    if (r.join("") !== "0123456789") return !1;
    var o = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (l) {
        o[l] = l;
      }),
      Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst"
    );
  } catch {
    return !1;
  }
}
var Mc = Sp()
  ? Object.assign
  : function (e, t) {
      for (var n, r = wp(e), o, l = 1; l < arguments.length; l++) {
        n = Object(arguments[l]);
        for (var i in n) gp.call(n, i) && (r[i] = n[i]);
        if (Is) {
          o = Is(n);
          for (var u = 0; u < o.length; u++)
            yp.call(n, o[u]) && (r[o[u]] = n[o[u]]);
        }
      }
      return r;
    };
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Eu = Mc,
  In = 60103,
  Ic = 60106;
z.Fragment = 60107;
z.StrictMode = 60108;
z.Profiler = 60114;
var jc = 60109,
  Ac = 60110,
  zc = 60112;
z.Suspense = 60113;
var Fc = 60115,
  bc = 60116;
if (typeof Symbol == "function" && Symbol.for) {
  var Ie = Symbol.for;
  (In = Ie("react.element")),
    (Ic = Ie("react.portal")),
    (z.Fragment = Ie("react.fragment")),
    (z.StrictMode = Ie("react.strict_mode")),
    (z.Profiler = Ie("react.profiler")),
    (jc = Ie("react.provider")),
    (Ac = Ie("react.context")),
    (zc = Ie("react.forward_ref")),
    (z.Suspense = Ie("react.suspense")),
    (Fc = Ie("react.memo")),
    (bc = Ie("react.lazy"));
}
var js = typeof Symbol == "function" && Symbol.iterator;
function Ep(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (js && e[js]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
function Wr(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Bc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Uc = {};
function jn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Uc),
    (this.updater = n || Bc);
}
jn.prototype.isReactComponent = {};
jn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(Wr(85));
  this.updater.enqueueSetState(this, e, t, "setState");
};
jn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Wc() {}
Wc.prototype = jn.prototype;
function xu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Uc),
    (this.updater = n || Bc);
}
var ku = (xu.prototype = new Wc());
ku.constructor = xu;
Eu(ku, jn.prototype);
ku.isPureReactComponent = !0;
var Cu = { current: null },
  Vc = Object.prototype.hasOwnProperty,
  Hc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kc(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Vc.call(t, r) && !Hc.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) o[r] === void 0 && (o[r] = u[r]);
  return {
    $$typeof: In,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Cu.current,
  };
}
function xp(e, t) {
  return {
    $$typeof: In,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Pu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === In;
}
function kp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var As = /\/+/g;
function Kl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? kp("" + e.key)
    : t.toString(36);
}
function Oo(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case In:
          case Ic:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + Kl(i, 0) : r),
      Array.isArray(o)
        ? ((n = ""),
          e != null && (n = e.replace(As, "$&/") + "/"),
          Oo(o, t, n, "", function (a) {
            return a;
          }))
        : o != null &&
          (Pu(o) &&
            (o = xp(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(As, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Array.isArray(e)))
    for (var u = 0; u < e.length; u++) {
      l = e[u];
      var s = r + Kl(l, u);
      i += Oo(l, t, n, s, o);
    }
  else if (((s = Ep(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(l = e.next()).done; )
      (l = l.value), (s = r + Kl(l, u++)), (i += Oo(l, t, n, s, o));
  else if (l === "object")
    throw (
      ((t = "" + e),
      Error(
        Wr(
          31,
          t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t
        )
      ))
    );
  return i;
}
function uo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Oo(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function Cp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      (e._status = 0),
      (e._result = t),
      t.then(
        function (n) {
          e._status === 0 &&
            ((n = n.default), (e._status = 1), (e._result = n));
        },
        function (n) {
          e._status === 0 && ((e._status = 2), (e._result = n));
        }
      );
  }
  if (e._status === 1) return e._result;
  throw e._result;
}
var Qc = { current: null };
function lt() {
  var e = Qc.current;
  if (e === null) throw Error(Wr(321));
  return e;
}
var Pp = {
  ReactCurrentDispatcher: Qc,
  ReactCurrentBatchConfig: { transition: 0 },
  ReactCurrentOwner: Cu,
  IsSomeRendererActing: { current: !1 },
  assign: Eu,
};
z.Children = {
  map: uo,
  forEach: function (e, t, n) {
    uo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      uo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      uo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Pu(e)) throw Error(Wr(143));
    return e;
  },
};
z.Component = jn;
z.PureComponent = xu;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pp;
z.cloneElement = function (e, t, n) {
  if (e == null) throw Error(Wr(267, e));
  var r = Eu({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = Cu.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Vc.call(t, s) &&
        !Hc.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: In, type: e.type, key: o, ref: l, props: r, _owner: i };
};
z.createContext = function (e, t) {
  return (
    t === void 0 && (t = null),
    (e = {
      $$typeof: Ac,
      _calculateChangedBits: t,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
    }),
    (e.Provider = { $$typeof: jc, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = Kc;
z.createFactory = function (e) {
  var t = Kc.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: zc, render: e };
};
z.isValidElement = Pu;
z.lazy = function (e) {
  return { $$typeof: bc, _payload: { _status: -1, _result: e }, _init: Cp };
};
z.memo = function (e, t) {
  return { $$typeof: Fc, type: e, compare: t === void 0 ? null : t };
};
z.useCallback = function (e, t) {
  return lt().useCallback(e, t);
};
z.useContext = function (e, t) {
  return lt().useContext(e, t);
};
z.useDebugValue = function () {};
z.useEffect = function (e, t) {
  return lt().useEffect(e, t);
};
z.useImperativeHandle = function (e, t, n) {
  return lt().useImperativeHandle(e, t, n);
};
z.useLayoutEffect = function (e, t) {
  return lt().useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return lt().useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return lt().useReducer(e, t, n);
};
z.useRef = function (e) {
  return lt().useRef(e);
};
z.useState = function (e) {
  return lt().useState(e);
};
z.version = "17.0.2";
v.exports = z;
var ut = v.exports,
  _p = hp({ __proto__: null, default: ut }, [v.exports]),
  gl = { exports: {} },
  Me = {},
  Yc = { exports: {} },
  Xc = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  var t, n, r, o;
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  if (typeof window == "undefined" || typeof MessageChannel != "function") {
    var s = null,
      a = null,
      f = function () {
        if (s !== null)
          try {
            var R = e.unstable_now();
            s(!0, R), (s = null);
          } catch (L) {
            throw (setTimeout(f, 0), L);
          }
      };
    (t = function (R) {
      s !== null ? setTimeout(t, 0, R) : ((s = R), setTimeout(f, 0));
    }),
      (n = function (R, L) {
        a = setTimeout(R, L);
      }),
      (r = function () {
        clearTimeout(a);
      }),
      (e.unstable_shouldYield = function () {
        return !1;
      }),
      (o = e.unstable_forceFrameRate = function () {});
  } else {
    var y = window.setTimeout,
      p = window.clearTimeout;
    if (typeof console != "undefined") {
      var h = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame != "function" &&
        console.error(
          "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
        ),
        typeof h != "function" &&
          console.error(
            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
          );
    }
    var S = !1,
      g = null,
      d = -1,
      c = 5,
      m = 0;
    (e.unstable_shouldYield = function () {
      return e.unstable_now() >= m;
    }),
      (o = function () {}),
      (e.unstable_forceFrameRate = function (R) {
        0 > R || 125 < R
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (c = 0 < R ? Math.floor(1e3 / R) : 5);
      });
    var w = new MessageChannel(),
      E = w.port2;
    (w.port1.onmessage = function () {
      if (g !== null) {
        var R = e.unstable_now();
        m = R + c;
        try {
          g(!0, R) ? E.postMessage(null) : ((S = !1), (g = null));
        } catch (L) {
          throw (E.postMessage(null), L);
        }
      } else S = !1;
    }),
      (t = function (R) {
        (g = R), S || ((S = !0), E.postMessage(null));
      }),
      (n = function (R, L) {
        d = y(function () {
          R(e.unstable_now());
        }, L);
      }),
      (r = function () {
        p(d), (d = -1);
      });
  }
  function P(R, L) {
    var j = R.length;
    R.push(L);
    e: for (;;) {
      var Z = (j - 1) >>> 1,
        ie = R[Z];
      if (ie !== void 0 && 0 < O(ie, L)) (R[Z] = L), (R[j] = ie), (j = Z);
      else break e;
    }
  }
  function x(R) {
    return (R = R[0]), R === void 0 ? null : R;
  }
  function k(R) {
    var L = R[0];
    if (L !== void 0) {
      var j = R.pop();
      if (j !== L) {
        R[0] = j;
        e: for (var Z = 0, ie = R.length; Z < ie; ) {
          var Lt = 2 * (Z + 1) - 1,
            Mt = R[Lt],
            Vn = Lt + 1,
            nn = R[Vn];
          if (Mt !== void 0 && 0 > O(Mt, j))
            nn !== void 0 && 0 > O(nn, Mt)
              ? ((R[Z] = nn), (R[Vn] = j), (Z = Vn))
              : ((R[Z] = Mt), (R[Lt] = j), (Z = Lt));
          else if (nn !== void 0 && 0 > O(nn, j))
            (R[Z] = nn), (R[Vn] = j), (Z = Vn);
          else break e;
        }
      }
      return L;
    }
    return null;
  }
  function O(R, L) {
    var j = R.sortIndex - L.sortIndex;
    return j !== 0 ? j : R.id - L.id;
  }
  var _ = [],
    I = [],
    N = 1,
    M = null,
    b = 3,
    fe = !1,
    le = !1,
    be = !1;
  function Xe(R) {
    for (var L = x(I); L !== null; ) {
      if (L.callback === null) k(I);
      else if (L.startTime <= R)
        k(I), (L.sortIndex = L.expirationTime), P(_, L);
      else break;
      L = x(I);
    }
  }
  function Ge(R) {
    if (((be = !1), Xe(R), !le))
      if (x(_) !== null) (le = !0), t(Dt);
      else {
        var L = x(I);
        L !== null && n(Ge, L.startTime - R);
      }
  }
  function Dt(R, L) {
    (le = !1), be && ((be = !1), r()), (fe = !0);
    var j = b;
    try {
      for (
        Xe(L), M = x(_);
        M !== null &&
        (!(M.expirationTime > L) || (R && !e.unstable_shouldYield()));

      ) {
        var Z = M.callback;
        if (typeof Z == "function") {
          (M.callback = null), (b = M.priorityLevel);
          var ie = Z(M.expirationTime <= L);
          (L = e.unstable_now()),
            typeof ie == "function" ? (M.callback = ie) : M === x(_) && k(_),
            Xe(L);
        } else k(_);
        M = x(_);
      }
      if (M !== null) var Lt = !0;
      else {
        var Mt = x(I);
        Mt !== null && n(Ge, Mt.startTime - L), (Lt = !1);
      }
      return Lt;
    } finally {
      (M = null), (b = j), (fe = !1);
    }
  }
  var tn = o;
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      le || fe || ((le = !0), t(Dt));
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return b;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return x(_);
    }),
    (e.unstable_next = function (R) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = b;
      }
      var j = b;
      b = L;
      try {
        return R();
      } finally {
        b = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = tn),
    (e.unstable_runWithPriority = function (R, L) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var j = b;
      b = R;
      try {
        return L();
      } finally {
        b = j;
      }
    }),
    (e.unstable_scheduleCallback = function (R, L, j) {
      var Z = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? Z + j : Z))
          : (j = Z),
        R)
      ) {
        case 1:
          var ie = -1;
          break;
        case 2:
          ie = 250;
          break;
        case 5:
          ie = 1073741823;
          break;
        case 4:
          ie = 1e4;
          break;
        default:
          ie = 5e3;
      }
      return (
        (ie = j + ie),
        (R = {
          id: N++,
          callback: L,
          priorityLevel: R,
          startTime: j,
          expirationTime: ie,
          sortIndex: -1,
        }),
        j > Z
          ? ((R.sortIndex = j),
            P(I, R),
            x(_) === null && R === x(I) && (be ? r() : (be = !0), n(Ge, j - Z)))
          : ((R.sortIndex = ie), P(_, R), le || fe || ((le = !0), t(Dt))),
        R
      );
    }),
    (e.unstable_wrapCallback = function (R) {
      var L = b;
      return function () {
        var j = b;
        b = L;
        try {
          return R.apply(this, arguments);
        } finally {
          b = j;
        }
      };
    });
})(Xc);
Yc.exports = Xc;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yl = v.exports,
  Y = Mc,
  re = Yc.exports;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
if (!yl) throw Error(C(227));
var Gc = new Set(),
  Cr = {};
function Gt(e, t) {
  Nn(e, t), Nn(e + "Capture", t);
}
function Nn(e, t) {
  for (Cr[e] = t, e = 0; e < t.length; e++) Gc.add(t[e]);
}
var nt = !(
    typeof window == "undefined" ||
    typeof window.document == "undefined" ||
    typeof window.document.createElement == "undefined"
  ),
  Op =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  zs = Object.prototype.hasOwnProperty,
  Fs = {},
  bs = {};
function Rp(e) {
  return zs.call(bs, e)
    ? !0
    : zs.call(Fs, e)
    ? !1
    : Op.test(e)
    ? (bs[e] = !0)
    : ((Fs[e] = !0), !1);
}
function Tp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function $p(e, t, n, r) {
  if (t === null || typeof t == "undefined" || Tp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function we(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new we(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ce[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ce[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ce[e] = new we(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ce[e] = new we(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ce[e] = new we(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ce[e] = new we(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ce[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var _u = /[\-:]([a-z])/g;
function Ou(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(_u, Ou);
    ce[t] = new we(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(_u, Ou);
    ce[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(_u, Ou);
  ce[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ce[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new we(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ce[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ru(e, t, n, r) {
  var o = ce.hasOwnProperty(t) ? ce[t] : null,
    l =
      o !== null
        ? o.type === 0
        : r
        ? !1
        : !(
            !(2 < t.length) ||
            (t[0] !== "o" && t[0] !== "O") ||
            (t[1] !== "n" && t[1] !== "N")
          );
  l ||
    ($p(t, n, o, r) && (n = null),
    r || o === null
      ? Rp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Zt = yl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  lr = 60103,
  zt = 60106,
  at = 60107,
  Tu = 60108,
  dr = 60114,
  $u = 60109,
  Nu = 60110,
  wl = 60112,
  pr = 60113,
  Bo = 60120,
  Sl = 60115,
  Du = 60116,
  Lu = 60121,
  Mu = 60128,
  Zc = 60129,
  Iu = 60130,
  Oi = 60131;
if (typeof Symbol == "function" && Symbol.for) {
  var te = Symbol.for;
  (lr = te("react.element")),
    (zt = te("react.portal")),
    (at = te("react.fragment")),
    (Tu = te("react.strict_mode")),
    (dr = te("react.profiler")),
    ($u = te("react.provider")),
    (Nu = te("react.context")),
    (wl = te("react.forward_ref")),
    (pr = te("react.suspense")),
    (Bo = te("react.suspense_list")),
    (Sl = te("react.memo")),
    (Du = te("react.lazy")),
    (Lu = te("react.block")),
    te("react.scope"),
    (Mu = te("react.opaque.id")),
    (Zc = te("react.debug_trace_mode")),
    (Iu = te("react.offscreen")),
    (Oi = te("react.legacy_hidden"));
}
var Bs = typeof Symbol == "function" && Symbol.iterator;
function Kn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bs && e[Bs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ql;
function ir(e) {
  if (Ql === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ql = (t && t[1]) || "";
    }
  return (
    `
` +
    Ql +
    e
  );
}
var Yl = !1;
function so(e, t) {
  if (!e || Yl) return "";
  Yl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var o = s.stack.split(`
`),
          l = r.stack.split(`
`),
          i = o.length - 1,
          u = l.length - 1;
        1 <= i && 0 <= u && o[i] !== l[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (o[i] !== l[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || o[i] !== l[u]))
                return (
                  `
` + o[i].replace(" at new ", " at ")
                );
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Yl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ir(e) : "";
}
function Np(e) {
  switch (e.tag) {
    case 5:
      return ir(e.type);
    case 16:
      return ir("Lazy");
    case 13:
      return ir("Suspense");
    case 19:
      return ir("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = so(e.type, !1)), e;
    case 11:
      return (e = so(e.type.render, !1)), e;
    case 22:
      return (e = so(e.type._render, !1)), e;
    case 1:
      return (e = so(e.type, !0)), e;
    default:
      return "";
  }
}
function yn(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case at:
      return "Fragment";
    case zt:
      return "Portal";
    case dr:
      return "Profiler";
    case Tu:
      return "StrictMode";
    case pr:
      return "Suspense";
    case Bo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Nu:
        return (e.displayName || "Context") + ".Consumer";
      case $u:
        return (e._context.displayName || "Context") + ".Provider";
      case wl:
        var t = e.render;
        return (
          (t = t.displayName || t.name || ""),
          e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
        );
      case Sl:
        return yn(e.type);
      case Lu:
        return yn(e._render);
      case Du:
        (t = e._payload), (e = e._init);
        try {
          return yn(e(t));
        } catch {}
    }
  return null;
}
function xt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return e;
    default:
      return "";
  }
}
function Jc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Dp(e) {
  var t = Jc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n != "undefined" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), l.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ao(e) {
  e._valueTracker || (e._valueTracker = Dp(e));
}
function qc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Jc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Uo(e) {
  if (
    ((e = e || (typeof document != "undefined" ? document : void 0)),
    typeof e == "undefined")
  )
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ri(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function Us(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = xt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ef(e, t) {
  (t = t.checked), t != null && Ru(e, "checked", t, !1);
}
function Ti(e, t) {
  ef(e, t);
  var n = xt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? $i(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && $i(e, t.type, xt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ws(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function $i(e, t, n) {
  (t !== "number" || Uo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
function Lp(e) {
  var t = "";
  return (
    yl.Children.forEach(e, function (n) {
      n != null && (t += n);
    }),
    t
  );
}
function Ni(e, t) {
  return (
    (e = Y({ children: void 0 }, t)),
    (t = Lp(t.children)) && (e.children = t),
    e
  );
}
function wn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + xt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Di(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return Y({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Vs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (Array.isArray(n)) {
        if (!(1 >= n.length)) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: xt(n) };
}
function tf(e, t) {
  var n = xt(t.value),
    r = xt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Hs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
var Li = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg",
};
function nf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Mi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? nf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var co,
  rf = (function (e) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== Li.svg || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        co = co || document.createElement("div"),
          co.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = co.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Pr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var mr = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Mp = ["Webkit", "ms", "Moz", "O"];
Object.keys(mr).forEach(function (e) {
  Mp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (mr[t] = mr[e]);
  });
});
function of(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (mr.hasOwnProperty(e) && mr[e])
    ? ("" + t).trim()
    : t + "px";
}
function lf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = of(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Ip = Y(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ii(e, t) {
  if (t) {
    if (Ip[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        !(
          typeof t.dangerouslySetInnerHTML == "object" &&
          "__html" in t.dangerouslySetInnerHTML
        )
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function ji(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
function ju(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ai = null,
  Sn = null,
  En = null;
function Ks(e) {
  if ((e = Hr(e))) {
    if (typeof Ai != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = _l(t)), Ai(e.stateNode, e.type, t));
  }
}
function uf(e) {
  Sn ? (En ? En.push(e) : (En = [e])) : (Sn = e);
}
function sf() {
  if (Sn) {
    var e = Sn,
      t = En;
    if (((En = Sn = null), Ks(e), t)) for (e = 0; e < t.length; e++) Ks(t[e]);
  }
}
function Au(e, t) {
  return e(t);
}
function af(e, t, n, r, o) {
  return e(t, n, r, o);
}
function zu() {}
var cf = Au,
  Ft = !1,
  Xl = !1;
function Fu() {
  (Sn !== null || En !== null) && (zu(), sf());
}
function jp(e, t, n) {
  if (Xl) return e(t, n);
  Xl = !0;
  try {
    return cf(e, t, n);
  } finally {
    (Xl = !1), Fu();
  }
}
function _r(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = _l(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var zi = !1;
if (nt)
  try {
    var Qn = {};
    Object.defineProperty(Qn, "passive", {
      get: function () {
        zi = !0;
      },
    }),
      window.addEventListener("test", Qn, Qn),
      window.removeEventListener("test", Qn, Qn);
  } catch {
    zi = !1;
  }
function Ap(e, t, n, r, o, l, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (f) {
    this.onError(f);
  }
}
var vr = !1,
  Wo = null,
  Vo = !1,
  Fi = null,
  zp = {
    onError: function (e) {
      (vr = !0), (Wo = e);
    },
  };
function Fp(e, t, n, r, o, l, i, u, s) {
  (vr = !1), (Wo = null), Ap.apply(zp, arguments);
}
function bp(e, t, n, r, o, l, i, u, s) {
  if ((Fp.apply(this, arguments), vr)) {
    if (vr) {
      var a = Wo;
      (vr = !1), (Wo = null);
    } else throw Error(C(198));
    Vo || ((Vo = !0), (Fi = a));
  }
}
function Jt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 1026) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ff(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Qs(e) {
  if (Jt(e) !== e) throw Error(C(188));
}
function Bp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Jt(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return Qs(o), e;
        if (l === r) return Qs(o), t;
        l = l.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var i = !1, u = o.child; u; ) {
        if (u === n) {
          (i = !0), (n = o), (r = l);
          break;
        }
        if (u === r) {
          (i = !0), (r = o), (n = l);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = l.child; u; ) {
          if (u === n) {
            (i = !0), (n = l), (r = o);
            break;
          }
          if (u === r) {
            (i = !0), (r = l), (n = o);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function df(e) {
  if (((e = Bp(e)), !e)) return null;
  for (var t = e; ; ) {
    if (t.tag === 5 || t.tag === 6) return t;
    if (t.child) (t.child.return = t), (t = t.child);
    else {
      if (t === e) break;
      for (; !t.sibling; ) {
        if (!t.return || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return null;
}
function Ys(e, t) {
  for (var n = e.alternate; t !== null; ) {
    if (t === e || t === n) return !0;
    t = t.return;
  }
  return !1;
}
var pf,
  bu,
  mf,
  vf,
  bi = !1,
  Be = [],
  mt = null,
  vt = null,
  ht = null,
  Or = new Map(),
  Rr = new Map(),
  Yn = [],
  Xs =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Bi(e, t, n, r, o) {
  return {
    blockedOn: e,
    domEventName: t,
    eventSystemFlags: n | 16,
    nativeEvent: o,
    targetContainers: [r],
  };
}
function Gs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      mt = null;
      break;
    case "dragenter":
    case "dragleave":
      vt = null;
      break;
    case "mouseover":
    case "mouseout":
      ht = null;
      break;
    case "pointerover":
    case "pointerout":
      Or.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Rr.delete(t.pointerId);
  }
}
function Xn(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = Bi(t, n, r, o, l)),
      t !== null && ((t = Hr(t)), t !== null && bu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Up(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (mt = Xn(mt, e, t, n, r, o)), !0;
    case "dragenter":
      return (vt = Xn(vt, e, t, n, r, o)), !0;
    case "mouseover":
      return (ht = Xn(ht, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return Or.set(l, Xn(Or.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), Rr.set(l, Xn(Rr.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Wp(e) {
  var t = bt(e.target);
  if (t !== null) {
    var n = Jt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ff(n)), t !== null)) {
          (e.blockedOn = t),
            vf(e.lanePriority, function () {
              re.unstable_runWithPriority(e.priority, function () {
                mf(n);
              });
            });
          return;
        }
      } else if (t === 3 && n.stateNode.hydrate) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ro(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Vu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null)
      return (t = Hr(n)), t !== null && bu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Zs(e, t, n) {
  Ro(e) && n.delete(t);
}
function Vp() {
  for (bi = !1; 0 < Be.length; ) {
    var e = Be[0];
    if (e.blockedOn !== null) {
      (e = Hr(e.blockedOn)), e !== null && pf(e);
      break;
    }
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Vu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n !== null) {
        e.blockedOn = n;
        break;
      }
      t.shift();
    }
    e.blockedOn === null && Be.shift();
  }
  mt !== null && Ro(mt) && (mt = null),
    vt !== null && Ro(vt) && (vt = null),
    ht !== null && Ro(ht) && (ht = null),
    Or.forEach(Zs),
    Rr.forEach(Zs);
}
function Gn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    bi ||
      ((bi = !0),
      re.unstable_scheduleCallback(re.unstable_NormalPriority, Vp)));
}
function hf(e) {
  function t(o) {
    return Gn(o, e);
  }
  if (0 < Be.length) {
    Gn(Be[0], e);
    for (var n = 1; n < Be.length; n++) {
      var r = Be[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    mt !== null && Gn(mt, e),
      vt !== null && Gn(vt, e),
      ht !== null && Gn(ht, e),
      Or.forEach(t),
      Rr.forEach(t),
      n = 0;
    n < Yn.length;
    n++
  )
    (r = Yn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Yn.length && ((n = Yn[0]), n.blockedOn === null); )
    Wp(n), n.blockedOn === null && Yn.shift();
}
function fo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var fn = {
    animationend: fo("Animation", "AnimationEnd"),
    animationiteration: fo("Animation", "AnimationIteration"),
    animationstart: fo("Animation", "AnimationStart"),
    transitionend: fo("Transition", "TransitionEnd"),
  },
  Gl = {},
  gf = {};
nt &&
  ((gf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete fn.animationend.animation,
    delete fn.animationiteration.animation,
    delete fn.animationstart.animation),
  "TransitionEvent" in window || delete fn.transitionend.transition);
function El(e) {
  if (Gl[e]) return Gl[e];
  if (!fn[e]) return e;
  var t = fn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in gf) return (Gl[e] = t[n]);
  return e;
}
var yf = El("animationend"),
  wf = El("animationiteration"),
  Sf = El("animationstart"),
  Ef = El("transitionend"),
  xf = new Map(),
  Bu = new Map(),
  Hp = [
    "abort",
    "abort",
    yf,
    "animationEnd",
    wf,
    "animationIteration",
    Sf,
    "animationStart",
    "canplay",
    "canPlay",
    "canplaythrough",
    "canPlayThrough",
    "durationchange",
    "durationChange",
    "emptied",
    "emptied",
    "encrypted",
    "encrypted",
    "ended",
    "ended",
    "error",
    "error",
    "gotpointercapture",
    "gotPointerCapture",
    "load",
    "load",
    "loadeddata",
    "loadedData",
    "loadedmetadata",
    "loadedMetadata",
    "loadstart",
    "loadStart",
    "lostpointercapture",
    "lostPointerCapture",
    "playing",
    "playing",
    "progress",
    "progress",
    "seeking",
    "seeking",
    "stalled",
    "stalled",
    "suspend",
    "suspend",
    "timeupdate",
    "timeUpdate",
    Ef,
    "transitionEnd",
    "waiting",
    "waiting",
  ];
function Uu(e, t) {
  for (var n = 0; n < e.length; n += 2) {
    var r = e[n],
      o = e[n + 1];
    (o = "on" + (o[0].toUpperCase() + o.slice(1))),
      Bu.set(r, t),
      xf.set(r, o),
      Gt(o, [r]);
  }
}
var Kp = re.unstable_now;
Kp();
var W = 8;
function an(e) {
  if ((1 & e) !== 0) return (W = 15), 1;
  if ((2 & e) !== 0) return (W = 14), 2;
  if ((4 & e) !== 0) return (W = 13), 4;
  var t = 24 & e;
  return t !== 0
    ? ((W = 12), t)
    : (e & 32) !== 0
    ? ((W = 11), 32)
    : ((t = 192 & e),
      t !== 0
        ? ((W = 10), t)
        : (e & 256) !== 0
        ? ((W = 9), 256)
        : ((t = 3584 & e),
          t !== 0
            ? ((W = 8), t)
            : (e & 4096) !== 0
            ? ((W = 7), 4096)
            : ((t = 4186112 & e),
              t !== 0
                ? ((W = 6), t)
                : ((t = 62914560 & e),
                  t !== 0
                    ? ((W = 5), t)
                    : e & 67108864
                    ? ((W = 4), 67108864)
                    : (e & 134217728) !== 0
                    ? ((W = 3), 134217728)
                    : ((t = 805306368 & e),
                      t !== 0
                        ? ((W = 2), t)
                        : (1073741824 & e) !== 0
                        ? ((W = 1), 1073741824)
                        : ((W = 8), e))))));
}
function Qp(e) {
  switch (e) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Yp(e) {
  switch (e) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(C(358, e));
  }
}
function Tr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return (W = 0);
  var r = 0,
    o = 0,
    l = e.expiredLanes,
    i = e.suspendedLanes,
    u = e.pingedLanes;
  if (l !== 0) (r = l), (o = W = 15);
  else if (((l = n & 134217727), l !== 0)) {
    var s = l & ~i;
    s !== 0
      ? ((r = an(s)), (o = W))
      : ((u &= l), u !== 0 && ((r = an(u)), (o = W)));
  } else
    (l = n & ~i),
      l !== 0 ? ((r = an(l)), (o = W)) : u !== 0 && ((r = an(u)), (o = W));
  if (r === 0) return 0;
  if (
    ((r = 31 - kt(r)),
    (r = n & (((0 > r ? 0 : 1 << r) << 1) - 1)),
    t !== 0 && t !== r && (t & i) === 0)
  ) {
    if ((an(t), o <= W)) return t;
    W = o;
  }
  if (((t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - kt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function kf(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ho(e, t) {
  switch (e) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return (e = cn(24 & ~t)), e === 0 ? Ho(10, t) : e;
    case 10:
      return (e = cn(192 & ~t)), e === 0 ? Ho(8, t) : e;
    case 8:
      return (
        (e = cn(3584 & ~t)),
        e === 0 && ((e = cn(4186112 & ~t)), e === 0 && (e = 512)),
        e
      );
    case 2:
      return (t = cn(805306368 & ~t)), t === 0 && (t = 268435456), t;
  }
  throw Error(C(358, e));
}
function cn(e) {
  return e & -e;
}
function Zl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function xl(e, t, n) {
  e.pendingLanes |= t;
  var r = t - 1;
  (e.suspendedLanes &= r),
    (e.pingedLanes &= r),
    (e = e.eventTimes),
    (t = 31 - kt(t)),
    (e[t] = n);
}
var kt = Math.clz32 ? Math.clz32 : Zp,
  Xp = Math.log,
  Gp = Math.LN2;
function Zp(e) {
  return e === 0 ? 32 : (31 - ((Xp(e) / Gp) | 0)) | 0;
}
var Jp = re.unstable_UserBlockingPriority,
  qp = re.unstable_runWithPriority,
  To = !0;
function em(e, t, n, r) {
  Ft || zu();
  var o = Wu,
    l = Ft;
  Ft = !0;
  try {
    af(o, e, t, n, r);
  } finally {
    (Ft = l) || Fu();
  }
}
function tm(e, t, n, r) {
  qp(Jp, Wu.bind(null, e, t, n, r));
}
function Wu(e, t, n, r) {
  if (To) {
    var o;
    if ((o = (t & 4) === 0) && 0 < Be.length && -1 < Xs.indexOf(e))
      (e = Bi(null, e, t, n, r)), Be.push(e);
    else {
      var l = Vu(e, t, n, r);
      if (l === null) o && Gs(e, r);
      else {
        if (o) {
          if (-1 < Xs.indexOf(e)) {
            (e = Bi(l, e, t, n, r)), Be.push(e);
            return;
          }
          if (Up(l, e, t, n, r)) return;
          Gs(e, r);
        }
        jf(e, t, r, null, n);
      }
    }
  }
}
function Vu(e, t, n, r) {
  var o = ju(r);
  if (((o = bt(o)), o !== null)) {
    var l = Jt(o);
    if (l === null) o = null;
    else {
      var i = l.tag;
      if (i === 13) {
        if (((o = ff(l)), o !== null)) return o;
        o = null;
      } else if (i === 3) {
        if (l.stateNode.hydrate)
          return l.tag === 3 ? l.stateNode.containerInfo : null;
        o = null;
      } else l !== o && (o = null);
    }
  }
  return jf(e, t, r, o, n), null;
}
var ft = null,
  Hu = null,
  $o = null;
function Cf() {
  if ($o) return $o;
  var e,
    t = Hu,
    n = t.length,
    r,
    o = "value" in ft ? ft.value : ft.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return ($o = o.slice(e, 1 < r ? 1 - r : void 0));
}
function No(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function po() {
  return !0;
}
function Js() {
  return !1;
}
function _e(e) {
  function t(n, r, o, l, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(l) : l[u]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? po
        : Js),
      (this.isPropagationStopped = Js),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = po));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = po));
      },
      persist: function () {},
      isPersistent: po,
    }),
    t
  );
}
var An = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ku = _e(An),
  Vr = Y({}, An, { view: 0, detail: 0 }),
  nm = _e(Vr),
  Jl,
  ql,
  Zn,
  kl = Y({}, Vr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Qu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Zn &&
            (Zn && e.type === "mousemove"
              ? ((Jl = e.screenX - Zn.screenX), (ql = e.screenY - Zn.screenY))
              : (ql = Jl = 0),
            (Zn = e)),
          Jl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ql;
    },
  }),
  qs = _e(kl),
  rm = Y({}, kl, { dataTransfer: 0 }),
  om = _e(rm),
  lm = Y({}, Vr, { relatedTarget: 0 }),
  ei = _e(lm),
  im = Y({}, An, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  um = _e(im),
  sm = Y({}, An, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  am = _e(sm),
  cm = Y({}, An, { data: 0 }),
  ea = _e(cm),
  fm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  dm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  pm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function mm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = pm[e]) ? !!t[e] : !1;
}
function Qu() {
  return mm;
}
var vm = Y({}, Vr, {
    key: function (e) {
      if (e.key) {
        var t = fm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = No(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? dm[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Qu,
    charCode: function (e) {
      return e.type === "keypress" ? No(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? No(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  hm = _e(vm),
  gm = Y({}, kl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ta = _e(gm),
  ym = Y({}, Vr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Qu,
  }),
  wm = _e(ym),
  Sm = Y({}, An, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Em = _e(Sm),
  xm = Y({}, kl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  km = _e(xm),
  Cm = [9, 13, 27, 32],
  Yu = nt && "CompositionEvent" in window,
  hr = null;
nt && "documentMode" in document && (hr = document.documentMode);
var Pm = nt && "TextEvent" in window && !hr,
  Pf = nt && (!Yu || (hr && 8 < hr && 11 >= hr)),
  na = String.fromCharCode(32),
  ra = !1;
function _f(e, t) {
  switch (e) {
    case "keyup":
      return Cm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Of(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var dn = !1;
function _m(e, t) {
  switch (e) {
    case "compositionend":
      return Of(t);
    case "keypress":
      return t.which !== 32 ? null : ((ra = !0), na);
    case "textInput":
      return (e = t.data), e === na && ra ? null : e;
    default:
      return null;
  }
}
function Om(e, t) {
  if (dn)
    return e === "compositionend" || (!Yu && _f(e, t))
      ? ((e = Cf()), ($o = Hu = ft = null), (dn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Pf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Rm = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function oa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Rm[e.type] : t === "textarea";
}
function Rf(e, t, n, r) {
  uf(r),
    (t = Ko(t, "onChange")),
    0 < t.length &&
      ((n = new Ku("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var gr = null,
  $r = null;
function Tm(e) {
  Lf(e, 0);
}
function Cl(e) {
  var t = mn(e);
  if (qc(t)) return e;
}
function $m(e, t) {
  if (e === "change") return t;
}
var Tf = !1;
if (nt) {
  var ti;
  if (nt) {
    var ni = "oninput" in document;
    if (!ni) {
      var la = document.createElement("div");
      la.setAttribute("oninput", "return;"),
        (ni = typeof la.oninput == "function");
    }
    ti = ni;
  } else ti = !1;
  Tf = ti && (!document.documentMode || 9 < document.documentMode);
}
function ia() {
  gr && (gr.detachEvent("onpropertychange", $f), ($r = gr = null));
}
function $f(e) {
  if (e.propertyName === "value" && Cl($r)) {
    var t = [];
    if ((Rf(t, $r, e, ju(e)), (e = Tm), Ft)) e(t);
    else {
      Ft = !0;
      try {
        Au(e, t);
      } finally {
        (Ft = !1), Fu();
      }
    }
  }
}
function Nm(e, t, n) {
  e === "focusin"
    ? (ia(), (gr = t), ($r = n), gr.attachEvent("onpropertychange", $f))
    : e === "focusout" && ia();
}
function Dm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Cl($r);
}
function Lm(e, t) {
  if (e === "click") return Cl(t);
}
function Mm(e, t) {
  if (e === "input" || e === "change") return Cl(t);
}
function Im(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Te = typeof Object.is == "function" ? Object.is : Im,
  jm = Object.prototype.hasOwnProperty;
function Nr(e, t) {
  if (Te(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++)
    if (!jm.call(t, n[r]) || !Te(e[n[r]], t[n[r]])) return !1;
  return !0;
}
function ua(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function sa(e, t) {
  var n = ua(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ua(n);
  }
}
function Nf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Nf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function aa() {
  for (var e = window, t = Uo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Uo(e.document);
  }
  return t;
}
function Ui(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
var Am = nt && "documentMode" in document && 11 >= document.documentMode,
  pn = null,
  Wi = null,
  yr = null,
  Vi = !1;
function ca(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Vi ||
    pn == null ||
    pn !== Uo(r) ||
    ((r = pn),
    "selectionStart" in r && Ui(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (yr && Nr(yr, r)) ||
      ((yr = r),
      (r = Ko(Wi, "onSelect")),
      0 < r.length &&
        ((t = new Ku("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = pn))));
}
Uu(
  "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
    " "
  ),
  0
);
Uu(
  "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
    " "
  ),
  1
);
Uu(Hp, 2);
for (
  var fa =
      "change selectionchange textInput compositionstart compositionend compositionupdate".split(
        " "
      ),
    ri = 0;
  ri < fa.length;
  ri++
)
  Bu.set(fa[ri], 0);
Nn("onMouseEnter", ["mouseout", "mouseover"]);
Nn("onMouseLeave", ["mouseout", "mouseover"]);
Nn("onPointerEnter", ["pointerout", "pointerover"]);
Nn("onPointerLeave", ["pointerout", "pointerover"]);
Gt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Gt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Gt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Gt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Gt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Gt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ur =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Df = new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));
function da(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), bp(r, t, void 0, e), (e.currentTarget = null);
}
function Lf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== l && o.isPropagationStopped())) break e;
          da(o, u, a), (l = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== l && o.isPropagationStopped())
          )
            break e;
          da(o, u, a), (l = s);
        }
    }
  }
  if (Vo) throw ((e = Fi), (Vo = !1), (Fi = null), e);
}
function H(e, t) {
  var n = zf(t),
    r = e + "__bubble";
  n.has(r) || (If(t, e, 2, !1), n.add(r));
}
var pa = "_reactListening" + Math.random().toString(36).slice(2);
function Mf(e) {
  e[pa] ||
    ((e[pa] = !0),
    Gc.forEach(function (t) {
      Df.has(t) || ma(t, !1, e, null), ma(t, !0, e, null);
    }));
}
function ma(e, t, n, r) {
  var o = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0,
    l = n;
  if (
    (e === "selectionchange" && n.nodeType !== 9 && (l = n.ownerDocument),
    r !== null && !t && Df.has(e))
  ) {
    if (e !== "scroll") return;
    (o |= 2), (l = r);
  }
  var i = zf(l),
    u = e + "__" + (t ? "capture" : "bubble");
  i.has(u) || (t && (o |= 4), If(l, e, o, t), i.add(u));
}
function If(e, t, n, r) {
  var o = Bu.get(t);
  switch (o === void 0 ? 2 : o) {
    case 0:
      o = em;
      break;
    case 1:
      o = tm;
      break;
    default:
      o = Wu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !zi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function jf(e, t, n, r, o) {
  var l = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === o || (u.nodeType === 8 && u.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = bt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = l = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  jp(function () {
    var a = l,
      f = ju(n),
      y = [];
    e: {
      var p = xf.get(e);
      if (p !== void 0) {
        var h = Ku,
          S = e;
        switch (e) {
          case "keypress":
            if (No(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = hm;
            break;
          case "focusin":
            (S = "focus"), (h = ei);
            break;
          case "focusout":
            (S = "blur"), (h = ei);
            break;
          case "beforeblur":
          case "afterblur":
            h = ei;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = qs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = om;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = wm;
            break;
          case yf:
          case wf:
          case Sf:
            h = um;
            break;
          case Ef:
            h = Em;
            break;
          case "scroll":
            h = nm;
            break;
          case "wheel":
            h = km;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = am;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = ta;
        }
        var g = (t & 4) !== 0,
          d = !g && e === "scroll",
          c = g ? (p !== null ? p + "Capture" : null) : p;
        g = [];
        for (var m = a, w; m !== null; ) {
          w = m;
          var E = w.stateNode;
          if (
            (w.tag === 5 &&
              E !== null &&
              ((w = E),
              c !== null && ((E = _r(m, c)), E != null && g.push(Dr(m, E, w)))),
            d)
          )
            break;
          m = m.return;
        }
        0 < g.length &&
          ((p = new h(p, S, null, n, f)), y.push({ event: p, listeners: g }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          p &&
            (t & 16) === 0 &&
            (S = n.relatedTarget || n.fromElement) &&
            (bt(S) || S[zn]))
        )
          break e;
        if (
          (h || p) &&
          ((p =
            f.window === f
              ? f
              : (p = f.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          h
            ? ((S = n.relatedTarget || n.toElement),
              (h = a),
              (S = S ? bt(S) : null),
              S !== null &&
                ((d = Jt(S)), S !== d || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((h = null), (S = a)),
          h !== S)
        ) {
          if (
            ((g = qs),
            (E = "onMouseLeave"),
            (c = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = ta),
              (E = "onPointerLeave"),
              (c = "onPointerEnter"),
              (m = "pointer")),
            (d = h == null ? p : mn(h)),
            (w = S == null ? p : mn(S)),
            (p = new g(E, m + "leave", h, n, f)),
            (p.target = d),
            (p.relatedTarget = w),
            (E = null),
            bt(f) === a &&
              ((g = new g(c, m + "enter", S, n, f)),
              (g.target = w),
              (g.relatedTarget = d),
              (E = g)),
            (d = E),
            h && S)
          )
            t: {
              for (g = h, c = S, m = 0, w = g; w; w = rn(w)) m++;
              for (w = 0, E = c; E; E = rn(E)) w++;
              for (; 0 < m - w; ) (g = rn(g)), m--;
              for (; 0 < w - m; ) (c = rn(c)), w--;
              for (; m--; ) {
                if (g === c || (c !== null && g === c.alternate)) break t;
                (g = rn(g)), (c = rn(c));
              }
              g = null;
            }
          else g = null;
          h !== null && va(y, p, h, g, !1),
            S !== null && d !== null && va(y, d, S, g, !0);
        }
      }
      e: {
        if (
          ((p = a ? mn(a) : window),
          (h = p.nodeName && p.nodeName.toLowerCase()),
          h === "select" || (h === "input" && p.type === "file"))
        )
          var P = $m;
        else if (oa(p))
          if (Tf) P = Mm;
          else {
            P = Dm;
            var x = Nm;
          }
        else
          (h = p.nodeName) &&
            h.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (P = Lm);
        if (P && (P = P(e, a))) {
          Rf(y, P, n, f);
          break e;
        }
        x && x(e, p, a),
          e === "focusout" &&
            (x = p._wrapperState) &&
            x.controlled &&
            p.type === "number" &&
            $i(p, "number", p.value);
      }
      switch (((x = a ? mn(a) : window), e)) {
        case "focusin":
          (oa(x) || x.contentEditable === "true") &&
            ((pn = x), (Wi = a), (yr = null));
          break;
        case "focusout":
          yr = Wi = pn = null;
          break;
        case "mousedown":
          Vi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Vi = !1), ca(y, n, f);
          break;
        case "selectionchange":
          if (Am) break;
        case "keydown":
        case "keyup":
          ca(y, n, f);
      }
      var k;
      if (Yu)
        e: {
          switch (e) {
            case "compositionstart":
              var O = "onCompositionStart";
              break e;
            case "compositionend":
              O = "onCompositionEnd";
              break e;
            case "compositionupdate":
              O = "onCompositionUpdate";
              break e;
          }
          O = void 0;
        }
      else
        dn
          ? _f(e, n) && (O = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
      O &&
        (Pf &&
          n.locale !== "ko" &&
          (dn || O !== "onCompositionStart"
            ? O === "onCompositionEnd" && dn && (k = Cf())
            : ((ft = f),
              (Hu = "value" in ft ? ft.value : ft.textContent),
              (dn = !0))),
        (x = Ko(a, O)),
        0 < x.length &&
          ((O = new ea(O, e, null, n, f)),
          y.push({ event: O, listeners: x }),
          k ? (O.data = k) : ((k = Of(n)), k !== null && (O.data = k)))),
        (k = Pm ? _m(e, n) : Om(e, n)) &&
          ((a = Ko(a, "onBeforeInput")),
          0 < a.length &&
            ((f = new ea("onBeforeInput", "beforeinput", null, n, f)),
            y.push({ event: f, listeners: a }),
            (f.data = k)));
    }
    Lf(y, t);
  });
}
function Dr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ko(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = _r(e, n)),
      l != null && r.unshift(Dr(e, l, o)),
      (l = _r(e, t)),
      l != null && r.push(Dr(e, l, o))),
      (e = e.return);
  }
  return r;
}
function rn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function va(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      o
        ? ((s = _r(n, l)), s != null && i.unshift(Dr(n, s, u)))
        : o || ((s = _r(n, l)), s != null && i.push(Dr(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
function Qo() {}
var oi = null,
  li = null;
function Af(e, t) {
  switch (e) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!t.autoFocus;
  }
  return !1;
}
function Hi(e, t) {
  return (
    e === "textarea" ||
    e === "option" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ha = typeof setTimeout == "function" ? setTimeout : void 0,
  zm = typeof clearTimeout == "function" ? clearTimeout : void 0;
function Xu(e) {
  e.nodeType === 1
    ? (e.textContent = "")
    : e.nodeType === 9 && ((e = e.body), e != null && (e.textContent = ""));
}
function xn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
  }
  return e;
}
function ga(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ii = 0;
function Fm(e) {
  return { $$typeof: Mu, toString: e, valueOf: e };
}
var Pl = Math.random().toString(36).slice(2),
  dt = "__reactFiber$" + Pl,
  Yo = "__reactProps$" + Pl,
  zn = "__reactContainer$" + Pl,
  ya = "__reactEvents$" + Pl;
function bt(e) {
  var t = e[dt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[zn] || n[dt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ga(e); e !== null; ) {
          if ((n = e[dt])) return n;
          e = ga(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Hr(e) {
  return (
    (e = e[dt] || e[zn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function mn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function _l(e) {
  return e[Yo] || null;
}
function zf(e) {
  var t = e[ya];
  return t === void 0 && (t = e[ya] = new Set()), t;
}
var Ki = [],
  vn = -1;
function $t(e) {
  return { current: e };
}
function K(e) {
  0 > vn || ((e.current = Ki[vn]), (Ki[vn] = null), vn--);
}
function G(e, t) {
  vn++, (Ki[vn] = e.current), (e.current = t);
}
var Ct = {},
  he = $t(Ct),
  xe = $t(!1),
  Kt = Ct;
function Dn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ct;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function ke(e) {
  return (e = e.childContextTypes), e != null;
}
function Xo() {
  K(xe), K(he);
}
function wa(e, t, n) {
  if (he.current !== Ct) throw Error(C(168));
  G(he, t), G(xe, n);
}
function Ff(e, t, n) {
  var r = e.stateNode;
  if (((e = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in e)) throw Error(C(108, yn(t) || "Unknown", o));
  return Y({}, n, r);
}
function Do(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ct),
    (Kt = he.current),
    G(he, e),
    G(xe, xe.current),
    !0
  );
}
function Sa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = Ff(e, t, Kt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      K(xe),
      K(he),
      G(he, e))
    : K(xe),
    G(xe, n);
}
var Gu = null,
  Wt = null,
  bm = re.unstable_runWithPriority,
  Zu = re.unstable_scheduleCallback,
  Qi = re.unstable_cancelCallback,
  Bm = re.unstable_shouldYield,
  Ea = re.unstable_requestPaint,
  Yi = re.unstable_now,
  Um = re.unstable_getCurrentPriorityLevel,
  Ol = re.unstable_ImmediatePriority,
  bf = re.unstable_UserBlockingPriority,
  Bf = re.unstable_NormalPriority,
  Uf = re.unstable_LowPriority,
  Wf = re.unstable_IdlePriority,
  ui = {},
  Wm = Ea !== void 0 ? Ea : function () {},
  Ze = null,
  Lo = null,
  si = !1,
  xa = Yi(),
  me =
    1e4 > xa
      ? Yi
      : function () {
          return Yi() - xa;
        };
function Ln() {
  switch (Um()) {
    case Ol:
      return 99;
    case bf:
      return 98;
    case Bf:
      return 97;
    case Uf:
      return 96;
    case Wf:
      return 95;
    default:
      throw Error(C(332));
  }
}
function Vf(e) {
  switch (e) {
    case 99:
      return Ol;
    case 98:
      return bf;
    case 97:
      return Bf;
    case 96:
      return Uf;
    case 95:
      return Wf;
    default:
      throw Error(C(332));
  }
}
function Qt(e, t) {
  return (e = Vf(e)), bm(e, t);
}
function Lr(e, t, n) {
  return (e = Vf(e)), Zu(e, t, n);
}
function Qe() {
  if (Lo !== null) {
    var e = Lo;
    (Lo = null), Qi(e);
  }
  Hf();
}
function Hf() {
  if (!si && Ze !== null) {
    si = !0;
    var e = 0;
    try {
      var t = Ze;
      Qt(99, function () {
        for (; e < t.length; e++) {
          var n = t[e];
          do n = n(!0);
          while (n !== null);
        }
      }),
        (Ze = null);
    } catch (n) {
      throw (Ze !== null && (Ze = Ze.slice(e + 1)), Zu(Ol, Qe), n);
    } finally {
      si = !1;
    }
  }
}
var Vm = Zt.ReactCurrentBatchConfig;
function je(e, t) {
  if (e && e.defaultProps) {
    (t = Y({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Go = $t(null),
  Zo = null,
  hn = null,
  Jo = null;
function Ju() {
  Jo = hn = Zo = null;
}
function qu(e) {
  var t = Go.current;
  K(Go), (e.type._context._currentValue = t);
}
function Kf(e, t) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) === t) {
      if (n === null || (n.childLanes & t) === t) break;
      n.childLanes |= t;
    } else (e.childLanes |= t), n !== null && (n.childLanes |= t);
    e = e.return;
  }
}
function kn(e, t) {
  (Zo = e),
    (Jo = hn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (ze = !0), (e.firstContext = null));
}
function De(e, t) {
  if (Jo !== e && t !== !1 && t !== 0)
    if (
      ((typeof t != "number" || t === 1073741823) &&
        ((Jo = e), (t = 1073741823)),
      (t = { context: e, observedBits: t, next: null }),
      hn === null)
    ) {
      if (Zo === null) throw Error(C(308));
      (hn = t),
        (Zo.dependencies = { lanes: 0, firstContext: t, responders: null });
    } else hn = hn.next = t;
  return e._currentValue;
}
var st = !1;
function es(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null },
    effects: null,
  };
}
function Qf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function gt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function yt(e, t) {
  if (((e = e.updateQueue), e !== null)) {
    e = e.shared;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
}
function ka(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Mr(e, t, n, r) {
  var o = e.updateQueue;
  st = !1;
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), i === null ? (l = a) : (i.next = a), (i = s);
    var f = e.alternate;
    if (f !== null) {
      f = f.updateQueue;
      var y = f.lastBaseUpdate;
      y !== i &&
        (y === null ? (f.firstBaseUpdate = a) : (y.next = a),
        (f.lastBaseUpdate = s));
    }
  }
  if (l !== null) {
    (y = o.baseState), (i = 0), (f = a = s = null);
    do {
      u = l.lane;
      var p = l.eventTime;
      if ((r & u) === u) {
        f !== null &&
          (f = f.next =
            {
              eventTime: p,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var h = e,
            S = l;
          switch (((u = t), (p = n), S.tag)) {
            case 1:
              if (((h = S.payload), typeof h == "function")) {
                y = h.call(p, y, u);
                break e;
              }
              y = h;
              break e;
            case 3:
              h.flags = (h.flags & -4097) | 64;
            case 0:
              if (
                ((h = S.payload),
                (u = typeof h == "function" ? h.call(p, y, u) : h),
                u == null)
              )
                break e;
              y = Y({}, y, u);
              break e;
            case 2:
              st = !0;
          }
        }
        l.callback !== null &&
          ((e.flags |= 32),
          (u = o.effects),
          u === null ? (o.effects = [l]) : u.push(l));
      } else
        (p = {
          eventTime: p,
          lane: u,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          f === null ? ((a = f = p), (s = y)) : (f = f.next = p),
          (i |= u);
      if (((l = l.next), l === null)) {
        if (((u = o.shared.pending), u === null)) break;
        (l = u.next),
          (u.next = null),
          (o.lastBaseUpdate = u),
          (o.shared.pending = null);
      }
    } while (1);
    f === null && (s = y),
      (o.baseState = s),
      (o.firstBaseUpdate = a),
      (o.lastBaseUpdate = f),
      (Qr |= i),
      (e.lanes = i),
      (e.memoizedState = y);
  }
}
function Ca(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(C(191, o));
        o.call(r);
      }
    }
}
var Yf = new yl.Component().refs;
function qo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Rl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Jt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ce(),
      o = wt(e),
      l = gt(r, o);
    (l.payload = t), n != null && (l.callback = n), yt(e, l), St(e, o, r);
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ce(),
      o = wt(e),
      l = gt(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      yt(e, l),
      St(e, o, r);
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ce(),
      r = wt(e),
      o = gt(n, r);
    (o.tag = 2), t != null && (o.callback = t), yt(e, o), St(e, r, n);
  },
};
function Pa(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Nr(n, r) || !Nr(o, l)
      : !0
  );
}
function Xf(e, t, n) {
  var r = !1,
    o = Ct,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = De(l))
      : ((o = ke(t) ? Kt : he.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? Dn(e, o) : Ct)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Rl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function _a(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Rl.enqueueReplaceState(t, t.state, null);
}
function Xi(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Yf), es(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = De(l))
    : ((l = ke(t) ? Kt : he.current), (o.context = Dn(e, l))),
    Mr(e, n, o, r),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (qo(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Rl.enqueueReplaceState(o, o.state, null),
      Mr(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4);
}
var mo = Array.isArray;
function Jn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var i = r.refs;
            i === Yf && (i = r.refs = {}),
              l === null ? delete i[o] : (i[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function vo(e, t) {
  if (e.type !== "textarea")
    throw Error(
      C(
        31,
        Object.prototype.toString.call(t) === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : t
      )
    );
}
function Gf(e) {
  function t(d, c) {
    if (e) {
      var m = d.lastEffect;
      m !== null
        ? ((m.nextEffect = c), (d.lastEffect = c))
        : (d.firstEffect = d.lastEffect = c),
        (c.nextEffect = null),
        (c.flags = 8);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function o(d, c) {
    return (d = _t(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function l(d, c, m) {
    return (
      (d.index = m),
      e
        ? ((m = d.alternate),
          m !== null
            ? ((m = m.index), m < c ? ((d.flags = 2), c) : m)
            : ((d.flags = 2), c))
        : c
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags = 2), d;
  }
  function u(d, c, m, w) {
    return c === null || c.tag !== 6
      ? ((c = pi(m, d.mode, w)), (c.return = d), c)
      : ((c = o(c, m)), (c.return = d), c);
  }
  function s(d, c, m, w) {
    return c !== null && c.elementType === m.type
      ? ((w = o(c, m.props)), (w.ref = Jn(d, c, m)), (w.return = d), w)
      : ((w = Ao(m.type, m.key, m.props, null, d.mode, w)),
        (w.ref = Jn(d, c, m)),
        (w.return = d),
        w);
  }
  function a(d, c, m, w) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== m.containerInfo ||
      c.stateNode.implementation !== m.implementation
      ? ((c = mi(m, d.mode, w)), (c.return = d), c)
      : ((c = o(c, m.children || [])), (c.return = d), c);
  }
  function f(d, c, m, w, E) {
    return c === null || c.tag !== 7
      ? ((c = On(m, d.mode, w, E)), (c.return = d), c)
      : ((c = o(c, m)), (c.return = d), c);
  }
  function y(d, c, m) {
    if (typeof c == "string" || typeof c == "number")
      return (c = pi("" + c, d.mode, m)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case lr:
          return (
            (m = Ao(c.type, c.key, c.props, null, d.mode, m)),
            (m.ref = Jn(d, null, c)),
            (m.return = d),
            m
          );
        case zt:
          return (c = mi(c, d.mode, m)), (c.return = d), c;
      }
      if (mo(c) || Kn(c))
        return (c = On(c, d.mode, m, null)), (c.return = d), c;
      vo(d, c);
    }
    return null;
  }
  function p(d, c, m, w) {
    var E = c !== null ? c.key : null;
    if (typeof m == "string" || typeof m == "number")
      return E !== null ? null : u(d, c, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case lr:
          return m.key === E
            ? m.type === at
              ? f(d, c, m.props.children, w, E)
              : s(d, c, m, w)
            : null;
        case zt:
          return m.key === E ? a(d, c, m, w) : null;
      }
      if (mo(m) || Kn(m)) return E !== null ? null : f(d, c, m, w, null);
      vo(d, m);
    }
    return null;
  }
  function h(d, c, m, w, E) {
    if (typeof w == "string" || typeof w == "number")
      return (d = d.get(m) || null), u(c, d, "" + w, E);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case lr:
          return (
            (d = d.get(w.key === null ? m : w.key) || null),
            w.type === at ? f(c, d, w.props.children, E, w.key) : s(c, d, w, E)
          );
        case zt:
          return (d = d.get(w.key === null ? m : w.key) || null), a(c, d, w, E);
      }
      if (mo(w) || Kn(w)) return (d = d.get(m) || null), f(c, d, w, E, null);
      vo(c, w);
    }
    return null;
  }
  function S(d, c, m, w) {
    for (
      var E = null, P = null, x = c, k = (c = 0), O = null;
      x !== null && k < m.length;
      k++
    ) {
      x.index > k ? ((O = x), (x = null)) : (O = x.sibling);
      var _ = p(d, x, m[k], w);
      if (_ === null) {
        x === null && (x = O);
        break;
      }
      e && x && _.alternate === null && t(d, x),
        (c = l(_, c, k)),
        P === null ? (E = _) : (P.sibling = _),
        (P = _),
        (x = O);
    }
    if (k === m.length) return n(d, x), E;
    if (x === null) {
      for (; k < m.length; k++)
        (x = y(d, m[k], w)),
          x !== null &&
            ((c = l(x, c, k)), P === null ? (E = x) : (P.sibling = x), (P = x));
      return E;
    }
    for (x = r(d, x); k < m.length; k++)
      (O = h(x, d, k, m[k], w)),
        O !== null &&
          (e && O.alternate !== null && x.delete(O.key === null ? k : O.key),
          (c = l(O, c, k)),
          P === null ? (E = O) : (P.sibling = O),
          (P = O));
    return (
      e &&
        x.forEach(function (I) {
          return t(d, I);
        }),
      E
    );
  }
  function g(d, c, m, w) {
    var E = Kn(m);
    if (typeof E != "function") throw Error(C(150));
    if (((m = E.call(m)), m == null)) throw Error(C(151));
    for (
      var P = (E = null), x = c, k = (c = 0), O = null, _ = m.next();
      x !== null && !_.done;
      k++, _ = m.next()
    ) {
      x.index > k ? ((O = x), (x = null)) : (O = x.sibling);
      var I = p(d, x, _.value, w);
      if (I === null) {
        x === null && (x = O);
        break;
      }
      e && x && I.alternate === null && t(d, x),
        (c = l(I, c, k)),
        P === null ? (E = I) : (P.sibling = I),
        (P = I),
        (x = O);
    }
    if (_.done) return n(d, x), E;
    if (x === null) {
      for (; !_.done; k++, _ = m.next())
        (_ = y(d, _.value, w)),
          _ !== null &&
            ((c = l(_, c, k)), P === null ? (E = _) : (P.sibling = _), (P = _));
      return E;
    }
    for (x = r(d, x); !_.done; k++, _ = m.next())
      (_ = h(x, d, k, _.value, w)),
        _ !== null &&
          (e && _.alternate !== null && x.delete(_.key === null ? k : _.key),
          (c = l(_, c, k)),
          P === null ? (E = _) : (P.sibling = _),
          (P = _));
    return (
      e &&
        x.forEach(function (N) {
          return t(d, N);
        }),
      E
    );
  }
  return function (d, c, m, w) {
    var E =
      typeof m == "object" && m !== null && m.type === at && m.key === null;
    E && (m = m.props.children);
    var P = typeof m == "object" && m !== null;
    if (P)
      switch (m.$$typeof) {
        case lr:
          e: {
            for (P = m.key, E = c; E !== null; ) {
              if (E.key === P) {
                switch (E.tag) {
                  case 7:
                    if (m.type === at) {
                      n(d, E.sibling),
                        (c = o(E, m.props.children)),
                        (c.return = d),
                        (d = c);
                      break e;
                    }
                    break;
                  default:
                    if (E.elementType === m.type) {
                      n(d, E.sibling),
                        (c = o(E, m.props)),
                        (c.ref = Jn(d, E, m)),
                        (c.return = d),
                        (d = c);
                      break e;
                    }
                }
                n(d, E);
                break;
              } else t(d, E);
              E = E.sibling;
            }
            m.type === at
              ? ((c = On(m.props.children, d.mode, w, m.key)),
                (c.return = d),
                (d = c))
              : ((w = Ao(m.type, m.key, m.props, null, d.mode, w)),
                (w.ref = Jn(d, c, m)),
                (w.return = d),
                (d = w));
          }
          return i(d);
        case zt:
          e: {
            for (E = m.key; c !== null; ) {
              if (c.key === E)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === m.containerInfo &&
                  c.stateNode.implementation === m.implementation
                ) {
                  n(d, c.sibling),
                    (c = o(c, m.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = mi(m, d.mode, w)), (c.return = d), (d = c);
          }
          return i(d);
      }
    if (typeof m == "string" || typeof m == "number")
      return (
        (m = "" + m),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = o(c, m)), (c.return = d), (d = c))
          : (n(d, c), (c = pi(m, d.mode, w)), (c.return = d), (d = c)),
        i(d)
      );
    if (mo(m)) return S(d, c, m, w);
    if (Kn(m)) return g(d, c, m, w);
    if ((P && vo(d, m), typeof m == "undefined" && !E))
      switch (d.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(C(152, yn(d.type) || "Component"));
      }
    return n(d, c);
  };
}
var el = Gf(!0),
  Zf = Gf(!1),
  Kr = {},
  Ve = $t(Kr),
  Ir = $t(Kr),
  jr = $t(Kr);
function Bt(e) {
  if (e === Kr) throw Error(C(174));
  return e;
}
function Gi(e, t) {
  switch ((G(jr, t), G(Ir, e), G(Ve, Kr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Mi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Mi(t, e));
  }
  K(Ve), G(Ve, t);
}
function Mn() {
  K(Ve), K(Ir), K(jr);
}
function Oa(e) {
  Bt(jr.current);
  var t = Bt(Ve.current),
    n = Mi(t, e.type);
  t !== n && (G(Ir, e), G(Ve, n));
}
function ts(e) {
  Ir.current === e && (K(Ve), K(Ir));
}
var X = $t(0);
function tl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 64) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var qe = null,
  pt = null,
  He = !1;
function Jf(e, t) {
  var n = $e(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.type = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (n.flags = 8),
    e.lastEffect !== null
      ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
      : (e.firstEffect = e.lastEffect = n);
}
function Ra(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      );
    case 13:
      return !1;
    default:
      return !1;
  }
}
function Zi(e) {
  if (He) {
    var t = pt;
    if (t) {
      var n = t;
      if (!Ra(e, t)) {
        if (((t = xn(n.nextSibling)), !t || !Ra(e, t))) {
          (e.flags = (e.flags & -1025) | 2), (He = !1), (qe = e);
          return;
        }
        Jf(qe, n);
      }
      (qe = e), (pt = xn(t.firstChild));
    } else (e.flags = (e.flags & -1025) | 2), (He = !1), (qe = e);
  }
}
function Ta(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  qe = e;
}
function ho(e) {
  if (e !== qe) return !1;
  if (!He) return Ta(e), (He = !0), !1;
  var t = e.type;
  if (e.tag !== 5 || (t !== "head" && t !== "body" && !Hi(t, e.memoizedProps)))
    for (t = pt; t; ) Jf(e, t), (t = xn(t.nextSibling));
  if ((Ta(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              pt = xn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      pt = null;
    }
  } else pt = qe ? xn(e.stateNode.nextSibling) : null;
  return !0;
}
function ai() {
  (pt = qe = null), (He = !1);
}
var Cn = [];
function ns() {
  for (var e = 0; e < Cn.length; e++)
    Cn[e]._workInProgressVersionPrimary = null;
  Cn.length = 0;
}
var wr = Zt.ReactCurrentDispatcher,
  Ne = Zt.ReactCurrentBatchConfig,
  Ar = 0,
  J = null,
  pe = null,
  se = null,
  nl = !1,
  Sr = !1;
function Se() {
  throw Error(C(321));
}
function rs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Te(e[n], t[n])) return !1;
  return !0;
}
function os(e, t, n, r, o, l) {
  if (
    ((Ar = l),
    (J = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (wr.current = e === null || e.memoizedState === null ? Km : Qm),
    (e = n(r, o)),
    Sr)
  ) {
    l = 0;
    do {
      if (((Sr = !1), !(25 > l))) throw Error(C(301));
      (l += 1),
        (se = pe = null),
        (t.updateQueue = null),
        (wr.current = Ym),
        (e = n(r, o));
    } while (Sr);
  }
  if (
    ((wr.current = il),
    (t = pe !== null && pe.next !== null),
    (Ar = 0),
    (se = pe = J = null),
    (nl = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Ut() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return se === null ? (J.memoizedState = se = e) : (se = se.next = e), se;
}
function qt() {
  if (pe === null) {
    var e = J.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = pe.next;
  var t = se === null ? J.memoizedState : se.next;
  if (t !== null) (se = t), (pe = e);
  else {
    if (e === null) throw Error(C(310));
    (pe = e),
      (e = {
        memoizedState: pe.memoizedState,
        baseState: pe.baseState,
        baseQueue: pe.baseQueue,
        queue: pe.queue,
        next: null,
      }),
      se === null ? (J.memoizedState = se = e) : (se = se.next = e);
  }
  return se;
}
function Ue(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function qn(e) {
  var t = qt(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = pe,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = l.next), (l.next = i);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (o = o.next), (r = r.baseState);
    var u = (i = l = null),
      s = o;
    do {
      var a = s.lane;
      if ((Ar & a) === a)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              eagerReducer: s.eagerReducer,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
      else {
        var f = {
          lane: a,
          action: s.action,
          eagerReducer: s.eagerReducer,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((i = u = f), (l = r)) : (u = u.next = f),
          (J.lanes |= a),
          (Qr |= a);
      }
      s = s.next;
    } while (s !== null && s !== o);
    u === null ? (l = r) : (u.next = i),
      Te(r, t.memoizedState) || (ze = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  return [t.memoizedState, n.dispatch];
}
function er(e) {
  var t = qt(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    Te(l, t.memoizedState) || (ze = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function $a(e, t, n) {
  var r = t._getVersion;
  r = r(t._source);
  var o = t._workInProgressVersionPrimary;
  if (
    (o !== null
      ? (e = o === r)
      : ((e = e.mutableReadLanes),
        (e = (Ar & e) === e) &&
          ((t._workInProgressVersionPrimary = r), Cn.push(t))),
    e)
  )
    return n(t._source);
  throw (Cn.push(t), Error(C(350)));
}
function qf(e, t, n, r) {
  var o = ye;
  if (o === null) throw Error(C(349));
  var l = t._getVersion,
    i = l(t._source),
    u = wr.current,
    s = u.useState(function () {
      return $a(o, t, n);
    }),
    a = s[1],
    f = s[0];
  s = se;
  var y = e.memoizedState,
    p = y.refs,
    h = p.getSnapshot,
    S = y.source;
  y = y.subscribe;
  var g = J;
  return (
    (e.memoizedState = { refs: p, source: t, subscribe: r }),
    u.useEffect(
      function () {
        (p.getSnapshot = n), (p.setSnapshot = a);
        var d = l(t._source);
        if (!Te(i, d)) {
          (d = n(t._source)),
            Te(f, d) ||
              (a(d), (d = wt(g)), (o.mutableReadLanes |= d & o.pendingLanes)),
            (d = o.mutableReadLanes),
            (o.entangledLanes |= d);
          for (var c = o.entanglements, m = d; 0 < m; ) {
            var w = 31 - kt(m),
              E = 1 << w;
            (c[w] |= d), (m &= ~E);
          }
        }
      },
      [n, t, r]
    ),
    u.useEffect(
      function () {
        return r(t._source, function () {
          var d = p.getSnapshot,
            c = p.setSnapshot;
          try {
            c(d(t._source));
            var m = wt(g);
            o.mutableReadLanes |= m & o.pendingLanes;
          } catch (w) {
            c(function () {
              throw w;
            });
          }
        });
      },
      [t, r]
    ),
    (Te(h, n) && Te(S, t) && Te(y, r)) ||
      ((e = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: Ue,
        lastRenderedState: f,
      }),
      (e.dispatch = a = us.bind(null, J, e)),
      (s.queue = e),
      (s.baseQueue = null),
      (f = $a(o, t, n)),
      (s.memoizedState = s.baseState = f)),
    f
  );
}
function ed(e, t, n) {
  var r = qt();
  return qf(r, e, t, n);
}
function tr(e) {
  var t = Ut();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = t.queue =
      {
        pending: null,
        dispatch: null,
        lastRenderedReducer: Ue,
        lastRenderedState: e,
      }),
    (e = e.dispatch = us.bind(null, J, e)),
    [t.memoizedState, e]
  );
}
function rl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null }),
        (J.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Na(e) {
  var t = Ut();
  return (e = { current: e }), (t.memoizedState = e);
}
function ol() {
  return qt().memoizedState;
}
function Ji(e, t, n, r) {
  var o = Ut();
  (J.flags |= e),
    (o.memoizedState = rl(1 | t, n, void 0, r === void 0 ? null : r));
}
function ls(e, t, n, r) {
  var o = qt();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (pe !== null) {
    var i = pe.memoizedState;
    if (((l = i.destroy), r !== null && rs(r, i.deps))) {
      rl(t, n, l, r);
      return;
    }
  }
  (J.flags |= e), (o.memoizedState = rl(1 | t, n, l, r));
}
function Da(e, t) {
  return Ji(516, 4, e, t);
}
function ll(e, t) {
  return ls(516, 4, e, t);
}
function td(e, t) {
  return ls(4, 2, e, t);
}
function nd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function rd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ls(4, 2, nd.bind(null, t, e), n)
  );
}
function is() {}
function od(e, t) {
  var n = qt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && rs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ld(e, t) {
  var n = qt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && rs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Hm(e, t) {
  var n = Ln();
  Qt(98 > n ? 98 : n, function () {
    e(!0);
  }),
    Qt(97 < n ? 97 : n, function () {
      var r = Ne.transition;
      Ne.transition = 1;
      try {
        e(!1), t();
      } finally {
        Ne.transition = r;
      }
    });
}
function us(e, t, n) {
  var r = Ce(),
    o = wt(e),
    l = {
      lane: o,
      action: n,
      eagerReducer: null,
      eagerState: null,
      next: null,
    },
    i = t.pending;
  if (
    (i === null ? (l.next = l) : ((l.next = i.next), (i.next = l)),
    (t.pending = l),
    (i = e.alternate),
    e === J || (i !== null && i === J))
  )
    Sr = nl = !0;
  else {
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var u = t.lastRenderedState,
          s = i(u, n);
        if (((l.eagerReducer = i), (l.eagerState = s), Te(s, u))) return;
      } catch {
      } finally {
      }
    St(e, o, r);
  }
}
var il = {
    readContext: De,
    useCallback: Se,
    useContext: Se,
    useEffect: Se,
    useImperativeHandle: Se,
    useLayoutEffect: Se,
    useMemo: Se,
    useReducer: Se,
    useRef: Se,
    useState: Se,
    useDebugValue: Se,
    useDeferredValue: Se,
    useTransition: Se,
    useMutableSource: Se,
    useOpaqueIdentifier: Se,
    unstable_isNewReconciler: !1,
  },
  Km = {
    readContext: De,
    useCallback: function (e, t) {
      return (Ut().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: De,
    useEffect: Da,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null), Ji(4, 2, nd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ji(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ut();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ut();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = r.queue =
          {
            pending: null,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
        (e = e.dispatch = us.bind(null, J, e)),
        [r.memoizedState, e]
      );
    },
    useRef: Na,
    useState: tr,
    useDebugValue: is,
    useDeferredValue: function (e) {
      var t = tr(e),
        n = t[0],
        r = t[1];
      return (
        Da(
          function () {
            var o = Ne.transition;
            Ne.transition = 1;
            try {
              r(e);
            } finally {
              Ne.transition = o;
            }
          },
          [e]
        ),
        n
      );
    },
    useTransition: function () {
      var e = tr(!1),
        t = e[0];
      return (e = Hm.bind(null, e[1])), Na(e), [e, t];
    },
    useMutableSource: function (e, t, n) {
      var r = Ut();
      return (
        (r.memoizedState = {
          refs: { getSnapshot: t, setSnapshot: null },
          source: e,
          subscribe: n,
        }),
        qf(r, e, t, n)
      );
    },
    useOpaqueIdentifier: function () {
      if (He) {
        var e = !1,
          t = Fm(function () {
            throw (
              (e || ((e = !0), n("r:" + (ii++).toString(36))), Error(C(355)))
            );
          }),
          n = tr(t)[1];
        return (
          (J.mode & 2) === 0 &&
            ((J.flags |= 516),
            rl(
              5,
              function () {
                n("r:" + (ii++).toString(36));
              },
              void 0,
              null
            )),
          t
        );
      }
      return (t = "r:" + (ii++).toString(36)), tr(t), t;
    },
    unstable_isNewReconciler: !1,
  },
  Qm = {
    readContext: De,
    useCallback: od,
    useContext: De,
    useEffect: ll,
    useImperativeHandle: rd,
    useLayoutEffect: td,
    useMemo: ld,
    useReducer: qn,
    useRef: ol,
    useState: function () {
      return qn(Ue);
    },
    useDebugValue: is,
    useDeferredValue: function (e) {
      var t = qn(Ue),
        n = t[0],
        r = t[1];
      return (
        ll(
          function () {
            var o = Ne.transition;
            Ne.transition = 1;
            try {
              r(e);
            } finally {
              Ne.transition = o;
            }
          },
          [e]
        ),
        n
      );
    },
    useTransition: function () {
      var e = qn(Ue)[0];
      return [ol().current, e];
    },
    useMutableSource: ed,
    useOpaqueIdentifier: function () {
      return qn(Ue)[0];
    },
    unstable_isNewReconciler: !1,
  },
  Ym = {
    readContext: De,
    useCallback: od,
    useContext: De,
    useEffect: ll,
    useImperativeHandle: rd,
    useLayoutEffect: td,
    useMemo: ld,
    useReducer: er,
    useRef: ol,
    useState: function () {
      return er(Ue);
    },
    useDebugValue: is,
    useDeferredValue: function (e) {
      var t = er(Ue),
        n = t[0],
        r = t[1];
      return (
        ll(
          function () {
            var o = Ne.transition;
            Ne.transition = 1;
            try {
              r(e);
            } finally {
              Ne.transition = o;
            }
          },
          [e]
        ),
        n
      );
    },
    useTransition: function () {
      var e = er(Ue)[0];
      return [ol().current, e];
    },
    useMutableSource: ed,
    useOpaqueIdentifier: function () {
      return er(Ue)[0];
    },
    unstable_isNewReconciler: !1,
  },
  Xm = Zt.ReactCurrentOwner,
  ze = !1;
function Ee(e, t, n, r) {
  t.child = e === null ? Zf(t, null, n, r) : el(t, e.child, n, r);
}
function La(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    kn(t, o),
    (r = os(e, t, n, r, l, o)),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -517),
        (e.lanes &= ~o),
        et(e, t, o))
      : ((t.flags |= 1), Ee(e, t, r, o), t.child)
  );
}
function Ma(e, t, n, r, o, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !ps(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), id(e, t, i, r, o, l))
      : ((e = Ao(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  return (
    (i = e.child),
    (o & l) === 0 &&
    ((o = i.memoizedProps),
    (n = n.compare),
    (n = n !== null ? n : Nr),
    n(o, r) && e.ref === t.ref)
      ? et(e, t, l)
      : ((t.flags |= 1),
        (e = _t(i, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  );
}
function id(e, t, n, r, o, l) {
  if (e !== null && Nr(e.memoizedProps, r) && e.ref === t.ref)
    if (((ze = !1), (l & o) !== 0)) (e.flags & 16384) !== 0 && (ze = !0);
    else return (t.lanes = e.lanes), et(e, t, l);
  return qi(e, t, n, r, l);
}
function ci(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding")
    if ((t.mode & 4) === 0) (t.memoizedState = { baseLanes: 0 }), yo(t, n);
    else if ((n & 1073741824) !== 0)
      (t.memoizedState = { baseLanes: 0 }), yo(t, l !== null ? l.baseLanes : n);
    else
      return (
        (e = l !== null ? l.baseLanes | n : n),
        (t.lanes = t.childLanes = 1073741824),
        (t.memoizedState = { baseLanes: e }),
        yo(t, e),
        null
      );
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      yo(t, r);
  return Ee(e, t, o, n), t.child;
}
function ud(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    (t.flags |= 128);
}
function qi(e, t, n, r, o) {
  var l = ke(n) ? Kt : he.current;
  return (
    (l = Dn(t, l)),
    kn(t, o),
    (n = os(e, t, n, r, l, o)),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -517),
        (e.lanes &= ~o),
        et(e, t, o))
      : ((t.flags |= 1), Ee(e, t, n, o), t.child)
  );
}
function Ia(e, t, n, r, o) {
  if (ke(n)) {
    var l = !0;
    Do(t);
  } else l = !1;
  if ((kn(t, o), t.stateNode === null))
    e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
      Xf(t, n, r),
      Xi(t, n, r, o),
      (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = De(a))
      : ((a = ke(n) ? Kt : he.current), (a = Dn(t, a)));
    var f = n.getDerivedStateFromProps,
      y =
        typeof f == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    y ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && _a(t, i, r, a)),
      (st = !1);
    var p = t.memoizedState;
    (i.state = p),
      Mr(t, r, i, o),
      (s = t.memoizedState),
      u !== r || p !== s || xe.current || st
        ? (typeof f == "function" && (qo(t, n, f, r), (s = t.memoizedState)),
          (u = st || Pa(t, n, u, r, p, s, a))
            ? (y ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4),
          (r = !1));
  } else {
    (i = t.stateNode),
      Qf(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : je(t.type, u)),
      (i.props = a),
      (y = t.pendingProps),
      (p = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = De(s))
        : ((s = ke(n) ? Kt : he.current), (s = Dn(t, s)));
    var h = n.getDerivedStateFromProps;
    (f =
      typeof h == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== y || p !== s) && _a(t, i, r, s)),
      (st = !1),
      (p = t.memoizedState),
      (i.state = p),
      Mr(t, r, i, o);
    var S = t.memoizedState;
    u !== y || p !== S || xe.current || st
      ? (typeof h == "function" && (qo(t, n, h, r), (S = t.memoizedState)),
        (a = st || Pa(t, n, a, r, p, S, s))
          ? (f ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, S, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, S, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 256))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 256),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (i.props = r),
        (i.state = S),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 256),
        (r = !1));
  }
  return eu(e, t, n, r, l, o);
}
function eu(e, t, n, r, o, l) {
  ud(e, t);
  var i = (t.flags & 64) !== 0;
  if (!r && !i) return o && Sa(t, n, !1), et(e, t, l);
  (r = t.stateNode), (Xm.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = el(t, e.child, null, l)), (t.child = el(t, null, u, l)))
      : Ee(e, t, u, l),
    (t.memoizedState = r.state),
    o && Sa(t, n, !0),
    t.child
  );
}
function ja(e) {
  var t = e.stateNode;
  t.pendingContext
    ? wa(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && wa(e, t.context, !1),
    Gi(e, t.containerInfo);
}
var go = { dehydrated: null, retryLane: 0 };
function Aa(e, t, n) {
  var r = t.pendingProps,
    o = X.current,
    l = !1,
    i;
  return (
    (i = (t.flags & 64) !== 0) ||
      (i = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    i
      ? ((l = !0), (t.flags &= -65))
      : (e !== null && e.memoizedState === null) ||
        r.fallback === void 0 ||
        r.unstable_avoidThisFallback === !0 ||
        (o |= 1),
    G(X, o & 1),
    e === null
      ? (r.fallback !== void 0 && Zi(t),
        (e = r.children),
        (o = r.fallback),
        l
          ? ((e = za(t, e, o, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = go),
            e)
          : typeof r.unstable_expectedLoadTime == "number"
          ? ((e = za(t, e, o, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = go),
            (t.lanes = 33554432),
            e)
          : ((n = ms({ mode: "visible", children: e }, t.mode, n, null)),
            (n.return = t),
            (t.child = n)))
      : e.memoizedState !== null
      ? l
        ? ((r = ba(e, t, r.children, r.fallback, n)),
          (l = t.child),
          (o = e.child.memoizedState),
          (l.memoizedState =
            o === null ? { baseLanes: n } : { baseLanes: o.baseLanes | n }),
          (l.childLanes = e.childLanes & ~n),
          (t.memoizedState = go),
          r)
        : ((n = Fa(e, t, r.children, n)), (t.memoizedState = null), n)
      : l
      ? ((r = ba(e, t, r.children, r.fallback, n)),
        (l = t.child),
        (o = e.child.memoizedState),
        (l.memoizedState =
          o === null ? { baseLanes: n } : { baseLanes: o.baseLanes | n }),
        (l.childLanes = e.childLanes & ~n),
        (t.memoizedState = go),
        r)
      : ((n = Fa(e, t, r.children, n)), (t.memoizedState = null), n)
  );
}
function za(e, t, n, r) {
  var o = e.mode,
    l = e.child;
  return (
    (t = { mode: "hidden", children: t }),
    (o & 2) === 0 && l !== null
      ? ((l.childLanes = 0), (l.pendingProps = t))
      : (l = ms(t, o, 0, null)),
    (n = On(n, o, r, null)),
    (l.return = e),
    (n.return = e),
    (l.sibling = n),
    (e.child = l),
    n
  );
}
function Fa(e, t, n, r) {
  var o = e.child;
  return (
    (e = o.sibling),
    (n = _t(o, { mode: "visible", children: n })),
    (t.mode & 2) === 0 && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((e.nextEffect = null),
      (e.flags = 8),
      (t.firstEffect = t.lastEffect = e)),
    (t.child = n)
  );
}
function ba(e, t, n, r, o) {
  var l = t.mode,
    i = e.child;
  e = i.sibling;
  var u = { mode: "hidden", children: n };
  return (
    (l & 2) === 0 && t.child !== i
      ? ((n = t.child),
        (n.childLanes = 0),
        (n.pendingProps = u),
        (i = n.lastEffect),
        i !== null
          ? ((t.firstEffect = n.firstEffect),
            (t.lastEffect = i),
            (i.nextEffect = null))
          : (t.firstEffect = t.lastEffect = null))
      : (n = _t(i, u)),
    e !== null ? (r = _t(e, r)) : ((r = On(r, l, o, null)), (r.flags |= 2)),
    (r.return = t),
    (n.return = t),
    (n.sibling = r),
    (t.child = n),
    r
  );
}
function Ba(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Kf(e.return, t);
}
function fi(e, t, n, r, o, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
        lastEffect: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o),
      (i.lastEffect = l));
}
function Ua(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((Ee(e, t, r.children, n), (r = X.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 64);
  else {
    if (e !== null && (e.flags & 64) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ba(e, n);
        else if (e.tag === 19) Ba(e, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((G(X, r), (t.mode & 2) === 0)) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && tl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          fi(t, !1, o, n, l, t.lastEffect);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && tl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        fi(t, !0, n, null, l, t.lastEffect);
        break;
      case "together":
        fi(t, !1, null, null, void 0, t.lastEffect);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function et(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Qr |= t.lanes),
    (n & t.childLanes) !== 0)
  ) {
    if (e !== null && t.child !== e.child) throw Error(C(153));
    if (t.child !== null) {
      for (
        e = t.child, n = _t(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = _t(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  return null;
}
var sd, tu, ad, cd;
sd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
tu = function () {};
ad = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Bt(Ve.current);
    var l = null;
    switch (n) {
      case "input":
        (o = Ri(e, o)), (r = Ri(e, r)), (l = []);
        break;
      case "option":
        (o = Ni(e, o)), (r = Ni(e, r)), (l = []);
        break;
      case "select":
        (o = Y({}, o, { value: void 0 })),
          (r = Y({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = Di(e, o)), (r = Di(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Qo);
    }
    Ii(n, r);
    var i;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === "style") {
          var u = o[a];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Cr.hasOwnProperty(a)
              ? l || (l = [])
              : (l = l || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = o != null ? o[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (l || (l = []), l.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (l = l || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (l = l || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Cr.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && H("scroll", e),
                  l || u === s || (l = []))
                : typeof s == "object" && s !== null && s.$$typeof === Mu
                ? s.toString()
                : (l = l || []).push(a, s));
    }
    n && (l = l || []).push("style", n);
    var a = l;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
cd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function nr(e, t) {
  if (!He)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Gm(e, t, n) {
  var r = t.pendingProps;
  switch (t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return ke(t.type) && Xo(), null;
    case 3:
      return (
        Mn(),
        K(xe),
        K(he),
        ns(),
        (r = t.stateNode),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ho(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
        tu(t),
        null
      );
    case 5:
      ts(t);
      var o = Bt(jr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ad(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 128);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return null;
        }
        if (((e = Bt(Ve.current)), ho(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[dt] = t), (r[Yo] = l), n)) {
            case "dialog":
              H("cancel", r), H("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              H("load", r);
              break;
            case "video":
            case "audio":
              for (e = 0; e < ur.length; e++) H(ur[e], r);
              break;
            case "source":
              H("error", r);
              break;
            case "img":
            case "image":
            case "link":
              H("error", r), H("load", r);
              break;
            case "details":
              H("toggle", r);
              break;
            case "input":
              Us(r, l), H("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                H("invalid", r);
              break;
            case "textarea":
              Vs(r, l), H("invalid", r);
          }
          Ii(n, l), (e = null);
          for (var i in l)
            l.hasOwnProperty(i) &&
              ((o = l[i]),
              i === "children"
                ? typeof o == "string"
                  ? r.textContent !== o && (e = ["children", o])
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (e = ["children", "" + o])
                : Cr.hasOwnProperty(i) &&
                  o != null &&
                  i === "onScroll" &&
                  H("scroll", r));
          switch (n) {
            case "input":
              ao(r), Ws(r, l, !0);
              break;
            case "textarea":
              ao(r), Hs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Qo);
          }
          (r = e), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          switch (
            ((i = o.nodeType === 9 ? o : o.ownerDocument),
            e === Li.html && (e = nf(n)),
            e === Li.html
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[dt] = t),
            (e[Yo] = r),
            sd(e, t, !1, !1),
            (t.stateNode = e),
            (i = ji(n, r)),
            n)
          ) {
            case "dialog":
              H("cancel", e), H("close", e), (o = r);
              break;
            case "iframe":
            case "object":
            case "embed":
              H("load", e), (o = r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ur.length; o++) H(ur[o], e);
              o = r;
              break;
            case "source":
              H("error", e), (o = r);
              break;
            case "img":
            case "image":
            case "link":
              H("error", e), H("load", e), (o = r);
              break;
            case "details":
              H("toggle", e), (o = r);
              break;
            case "input":
              Us(e, r), (o = Ri(e, r)), H("invalid", e);
              break;
            case "option":
              o = Ni(e, r);
              break;
            case "select":
              (e._wrapperState = { wasMultiple: !!r.multiple }),
                (o = Y({}, r, { value: void 0 })),
                H("invalid", e);
              break;
            case "textarea":
              Vs(e, r), (o = Di(e, r)), H("invalid", e);
              break;
            default:
              o = r;
          }
          Ii(n, o);
          var u = o;
          for (l in u)
            if (u.hasOwnProperty(l)) {
              var s = u[l];
              l === "style"
                ? lf(e, s)
                : l === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0), s != null && rf(e, s))
                : l === "children"
                ? typeof s == "string"
                  ? (n !== "textarea" || s !== "") && Pr(e, s)
                  : typeof s == "number" && Pr(e, "" + s)
                : l !== "suppressContentEditableWarning" &&
                  l !== "suppressHydrationWarning" &&
                  l !== "autoFocus" &&
                  (Cr.hasOwnProperty(l)
                    ? s != null && l === "onScroll" && H("scroll", e)
                    : s != null && Ru(e, l, s, i));
            }
          switch (n) {
            case "input":
              ao(e), Ws(e, r, !1);
              break;
            case "textarea":
              ao(e), Hs(e);
              break;
            case "option":
              r.value != null && e.setAttribute("value", "" + xt(r.value));
              break;
            case "select":
              (e.multiple = !!r.multiple),
                (l = r.value),
                l != null
                  ? wn(e, !!r.multiple, l, !1)
                  : r.defaultValue != null &&
                    wn(e, !!r.multiple, r.defaultValue, !0);
              break;
            default:
              typeof o.onClick == "function" && (e.onclick = Qo);
          }
          Af(n, r) && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 128);
      }
      return null;
    case 6:
      if (e && t.stateNode != null) cd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        (n = Bt(jr.current)),
          Bt(Ve.current),
          ho(t)
            ? ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[dt] = t),
              r.nodeValue !== n && (t.flags |= 4))
            : ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[dt] = t),
              (t.stateNode = r));
      }
      return null;
    case 13:
      return (
        K(X),
        (r = t.memoizedState),
        (t.flags & 64) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            (n = !1),
            e === null
              ? t.memoizedProps.fallback !== void 0 && ho(t)
              : (n = e.memoizedState !== null),
            r &&
              !n &&
              (t.mode & 2) !== 0 &&
              ((e === null &&
                t.memoizedProps.unstable_avoidThisFallback !== !0) ||
              (X.current & 1) !== 0
                ? ae === 0 && (ae = 3)
                : ((ae === 0 || ae === 3) && (ae = 4),
                  ye === null ||
                    ((Qr & 134217727) === 0 && (bn & 134217727) === 0) ||
                    Pn(ye, ve))),
            (r || n) && (t.flags |= 4),
            null)
      );
    case 4:
      return Mn(), tu(t), e === null && Mf(t.stateNode.containerInfo), null;
    case 10:
      return qu(t), null;
    case 17:
      return ke(t.type) && Xo(), null;
    case 19:
      if ((K(X), (r = t.memoizedState), r === null)) return null;
      if (((l = (t.flags & 64) !== 0), (i = r.rendering), i === null))
        if (l) nr(r, !1);
        else {
          if (ae !== 0 || (e !== null && (e.flags & 64) !== 0))
            for (e = t.child; e !== null; ) {
              if (((i = tl(e)), i !== null)) {
                for (
                  t.flags |= 64,
                    nr(r, !1),
                    l = i.updateQueue,
                    l !== null && ((t.updateQueue = l), (t.flags |= 4)),
                    r.lastEffect === null && (t.firstEffect = null),
                    t.lastEffect = r.lastEffect,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 2),
                    (l.nextEffect = null),
                    (l.firstEffect = null),
                    (l.lastEffect = null),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return G(X, (X.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          r.tail !== null &&
            me() > uu &&
            ((t.flags |= 64), (l = !0), nr(r, !1), (t.lanes = 33554432));
        }
      else {
        if (!l)
          if (((e = tl(i)), e !== null)) {
            if (
              ((t.flags |= 64),
              (l = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              nr(r, !0),
              r.tail === null && r.tailMode === "hidden" && !i.alternate && !He)
            )
              return (
                (t = t.lastEffect = r.lastEffect),
                t !== null && (t.nextEffect = null),
                null
              );
          } else
            2 * me() - r.renderingStartTime > uu &&
              n !== 1073741824 &&
              ((t.flags |= 64), (l = !0), nr(r, !1), (t.lanes = 33554432));
        r.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = r.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (r.last = i));
      }
      return r.tail !== null
        ? ((n = r.tail),
          (r.rendering = n),
          (r.tail = n.sibling),
          (r.lastEffect = t.lastEffect),
          (r.renderingStartTime = me()),
          (n.sibling = null),
          (t = X.current),
          G(X, l ? (t & 1) | 2 : t & 1),
          n)
        : null;
    case 23:
    case 24:
      return (
        ds(),
        e !== null &&
          (e.memoizedState !== null) != (t.memoizedState !== null) &&
          r.mode !== "unstable-defer-without-hiding" &&
          (t.flags |= 4),
        null
      );
  }
  throw Error(C(156, t.tag));
}
function Zm(e) {
  switch (e.tag) {
    case 1:
      ke(e.type) && Xo();
      var t = e.flags;
      return t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null;
    case 3:
      if ((Mn(), K(xe), K(he), ns(), (t = e.flags), (t & 64) !== 0))
        throw Error(C(285));
      return (e.flags = (t & -4097) | 64), e;
    case 5:
      return ts(e), null;
    case 13:
      return (
        K(X), (t = e.flags), t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null
      );
    case 19:
      return K(X), null;
    case 4:
      return Mn(), null;
    case 10:
      return qu(e), null;
    case 23:
    case 24:
      return ds(), null;
    default:
      return null;
  }
}
function ss(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Np(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o };
}
function nu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Jm = typeof WeakMap == "function" ? WeakMap : Map;
function fd(e, t, n) {
  (n = gt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      sl || ((sl = !0), (su = r)), nu(e, t);
    }),
    n
  );
}
function dd(e, t, n) {
  (n = gt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function () {
      return nu(e, t), r(o);
    };
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        typeof r != "function" &&
          (We === null ? (We = new Set([this])) : We.add(this), nu(e, t));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
var qm = typeof WeakSet == "function" ? WeakSet : Set;
function Wa(e) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (n) {
        Et(e, n);
      }
    else t.current = null;
}
function ev(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (t.flags & 256 && e !== null) {
        var n = e.memoizedProps,
          r = e.memoizedState;
        (e = t.stateNode),
          (t = e.getSnapshotBeforeUpdate(
            t.elementType === t.type ? n : je(t.type, n),
            r
          )),
          (e.__reactInternalSnapshotBeforeUpdate = t);
      }
      return;
    case 3:
      t.flags & 256 && Xu(t.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(C(163));
}
function tv(e, t, n) {
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      if (
        ((t = n.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
      ) {
        e = t = t.next;
        do {
          if ((e.tag & 3) === 3) {
            var r = e.create;
            e.destroy = r();
          }
          e = e.next;
        } while (e !== t);
      }
      if (
        ((t = n.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
      ) {
        e = t = t.next;
        do {
          var o = e;
          (r = o.next),
            (o = o.tag),
            (o & 4) !== 0 && (o & 1) !== 0 && (Ed(n, e), av(n, e)),
            (e = r);
        } while (e !== t);
      }
      return;
    case 1:
      (e = n.stateNode),
        n.flags & 4 &&
          (t === null
            ? e.componentDidMount()
            : ((r =
                n.elementType === n.type
                  ? t.memoizedProps
                  : je(n.type, t.memoizedProps)),
              e.componentDidUpdate(
                r,
                t.memoizedState,
                e.__reactInternalSnapshotBeforeUpdate
              ))),
        (t = n.updateQueue),
        t !== null && Ca(n, t, e);
      return;
    case 3:
      if (((t = n.updateQueue), t !== null)) {
        if (((e = null), n.child !== null))
          switch (n.child.tag) {
            case 5:
              e = n.child.stateNode;
              break;
            case 1:
              e = n.child.stateNode;
          }
        Ca(n, t, e);
      }
      return;
    case 5:
      (e = n.stateNode),
        t === null && n.flags & 4 && Af(n.type, n.memoizedProps) && e.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      n.memoizedState === null &&
        ((n = n.alternate),
        n !== null &&
          ((n = n.memoizedState),
          n !== null && ((n = n.dehydrated), n !== null && hf(n))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(C(163));
}
function Va(e, t) {
  for (var n = e; ; ) {
    if (n.tag === 5) {
      var r = n.stateNode;
      if (t)
        (r = r.style),
          typeof r.setProperty == "function"
            ? r.setProperty("display", "none", "important")
            : (r.display = "none");
      else {
        r = n.stateNode;
        var o = n.memoizedProps.style;
        (o = o != null && o.hasOwnProperty("display") ? o.display : null),
          (r.style.display = of("display", o));
      }
    } else if (n.tag === 6) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
    else if (
      ((n.tag !== 23 && n.tag !== 24) || n.memoizedState === null || n === e) &&
      n.child !== null
    ) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}
function Ha(e, t) {
  if (Wt && typeof Wt.onCommitFiberUnmount == "function")
    try {
      Wt.onCommitFiberUnmount(Gu, t);
    } catch {}
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      if (
        ((e = t.updateQueue), e !== null && ((e = e.lastEffect), e !== null))
      ) {
        var n = (e = e.next);
        do {
          var r = n,
            o = r.destroy;
          if (((r = r.tag), o !== void 0))
            if ((r & 4) !== 0) Ed(t, n);
            else {
              r = t;
              try {
                o();
              } catch (l) {
                Et(r, l);
              }
            }
          n = n.next;
        } while (n !== e);
      }
      break;
    case 1:
      if (
        (Wa(t), (e = t.stateNode), typeof e.componentWillUnmount == "function")
      )
        try {
          (e.props = t.memoizedProps),
            (e.state = t.memoizedState),
            e.componentWillUnmount();
        } catch (l) {
          Et(t, l);
        }
      break;
    case 5:
      Wa(t);
      break;
    case 4:
      pd(e, t);
  }
}
function Ka(e) {
  (e.alternate = null),
    (e.child = null),
    (e.dependencies = null),
    (e.firstEffect = null),
    (e.lastEffect = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.return = null),
    (e.updateQueue = null);
}
function Qa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ya(e) {
  e: {
    for (var t = e.return; t !== null; ) {
      if (Qa(t)) break e;
      t = t.return;
    }
    throw Error(C(160));
  }
  var n = t;
  switch (((t = n.stateNode), n.tag)) {
    case 5:
      var r = !1;
      break;
    case 3:
      (t = t.containerInfo), (r = !0);
      break;
    case 4:
      (t = t.containerInfo), (r = !0);
      break;
    default:
      throw Error(C(161));
  }
  n.flags & 16 && (Pr(t, ""), (n.flags &= -17));
  e: t: for (n = e; ; ) {
    for (; n.sibling === null; ) {
      if (n.return === null || Qa(n.return)) {
        n = null;
        break e;
      }
      n = n.return;
    }
    for (
      n.sibling.return = n.return, n = n.sibling;
      n.tag !== 5 && n.tag !== 6 && n.tag !== 18;

    ) {
      if (n.flags & 2 || n.child === null || n.tag === 4) continue t;
      (n.child.return = n), (n = n.child);
    }
    if (!(n.flags & 2)) {
      n = n.stateNode;
      break e;
    }
  }
  r ? ru(e, n, t) : ou(e, n, t);
}
function ru(e, t, n) {
  var r = e.tag,
    o = r === 5 || r === 6;
  if (o)
    (e = o ? e.stateNode : e.stateNode.instance),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Qo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ru(e, t, n), e = e.sibling; e !== null; ) ru(e, t, n), (e = e.sibling);
}
function ou(e, t, n) {
  var r = e.tag,
    o = r === 5 || r === 6;
  if (o)
    (e = o ? e.stateNode : e.stateNode.instance),
      t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ou(e, t, n), e = e.sibling; e !== null; ) ou(e, t, n), (e = e.sibling);
}
function pd(e, t) {
  for (var n = t, r = !1, o, l; ; ) {
    if (!r) {
      r = n.return;
      e: for (;;) {
        if (r === null) throw Error(C(160));
        switch (((o = r.stateNode), r.tag)) {
          case 5:
            l = !1;
            break e;
          case 3:
            (o = o.containerInfo), (l = !0);
            break e;
          case 4:
            (o = o.containerInfo), (l = !0);
            break e;
        }
        r = r.return;
      }
      r = !0;
    }
    if (n.tag === 5 || n.tag === 6) {
      e: for (var i = e, u = n, s = u; ; )
        if ((Ha(i, s), s.child !== null && s.tag !== 4))
          (s.child.return = s), (s = s.child);
        else {
          if (s === u) break e;
          for (; s.sibling === null; ) {
            if (s.return === null || s.return === u) break e;
            s = s.return;
          }
          (s.sibling.return = s.return), (s = s.sibling);
        }
      l
        ? ((i = o),
          (u = n.stateNode),
          i.nodeType === 8 ? i.parentNode.removeChild(u) : i.removeChild(u))
        : o.removeChild(n.stateNode);
    } else if (n.tag === 4) {
      if (n.child !== null) {
        (o = n.stateNode.containerInfo),
          (l = !0),
          (n.child.return = n),
          (n = n.child);
        continue;
      }
    } else if ((Ha(e, n), n.child !== null)) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      (n = n.return), n.tag === 4 && (r = !1);
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}
function di(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var n = t.updateQueue;
      if (((n = n !== null ? n.lastEffect : null), n !== null)) {
        var r = (n = n.next);
        do
          (r.tag & 3) === 3 &&
            ((e = r.destroy), (r.destroy = void 0), e !== void 0 && e()),
            (r = r.next);
        while (r !== n);
      }
      return;
    case 1:
      return;
    case 5:
      if (((n = t.stateNode), n != null)) {
        r = t.memoizedProps;
        var o = e !== null ? e.memoizedProps : r;
        e = t.type;
        var l = t.updateQueue;
        if (((t.updateQueue = null), l !== null)) {
          for (
            n[Yo] = r,
              e === "input" && r.type === "radio" && r.name != null && ef(n, r),
              ji(e, o),
              t = ji(e, r),
              o = 0;
            o < l.length;
            o += 2
          ) {
            var i = l[o],
              u = l[o + 1];
            i === "style"
              ? lf(n, u)
              : i === "dangerouslySetInnerHTML"
              ? rf(n, u)
              : i === "children"
              ? Pr(n, u)
              : Ru(n, i, u, t);
          }
          switch (e) {
            case "input":
              Ti(n, r);
              break;
            case "textarea":
              tf(n, r);
              break;
            case "select":
              (e = n._wrapperState.wasMultiple),
                (n._wrapperState.wasMultiple = !!r.multiple),
                (l = r.value),
                l != null
                  ? wn(n, !!r.multiple, l, !1)
                  : e !== !!r.multiple &&
                    (r.defaultValue != null
                      ? wn(n, !!r.multiple, r.defaultValue, !0)
                      : wn(n, !!r.multiple, r.multiple ? [] : "", !1));
          }
        }
      }
      return;
    case 6:
      if (t.stateNode === null) throw Error(C(162));
      t.stateNode.nodeValue = t.memoizedProps;
      return;
    case 3:
      (n = t.stateNode), n.hydrate && ((n.hydrate = !1), hf(n.containerInfo));
      return;
    case 12:
      return;
    case 13:
      t.memoizedState !== null && ((fs = me()), Va(t.child, !0)), Xa(t);
      return;
    case 19:
      Xa(t);
      return;
    case 17:
      return;
    case 23:
    case 24:
      Va(t, t.memoizedState !== null);
      return;
  }
  throw Error(C(163));
}
function Xa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new qm()),
      t.forEach(function (r) {
        var o = dv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function nv(e, t) {
  return e !== null &&
    ((e = e.memoizedState), e === null || e.dehydrated !== null)
    ? ((t = t.memoizedState), t !== null && t.dehydrated === null)
    : !1;
}
var rv = Math.ceil,
  ul = Zt.ReactCurrentDispatcher,
  as = Zt.ReactCurrentOwner,
  D = 0,
  ye = null,
  q = null,
  ve = 0,
  Yt = 0,
  lu = $t(0),
  ae = 0,
  Tl = null,
  Fn = 0,
  Qr = 0,
  bn = 0,
  cs = 0,
  iu = null,
  fs = 0,
  uu = 1 / 0;
function Bn() {
  uu = me() + 500;
}
var $ = null,
  sl = !1,
  su = null,
  We = null,
  Pt = !1,
  Er = null,
  sr = 90,
  au = [],
  cu = [],
  tt = null,
  xr = 0,
  fu = null,
  Mo = -1,
  Je = 0,
  Io = 0,
  kr = null,
  jo = !1;
function Ce() {
  return (D & 48) !== 0 ? me() : Mo !== -1 ? Mo : (Mo = me());
}
function wt(e) {
  if (((e = e.mode), (e & 2) === 0)) return 1;
  if ((e & 4) === 0) return Ln() === 99 ? 1 : 2;
  if ((Je === 0 && (Je = Fn), Vm.transition !== 0)) {
    Io !== 0 && (Io = iu !== null ? iu.pendingLanes : 0), (e = Je);
    var t = 4186112 & ~Io;
    return (
      (t &= -t),
      t === 0 && ((e = 4186112 & ~e), (t = e & -e), t === 0 && (t = 8192)),
      t
    );
  }
  return (
    (e = Ln()),
    (D & 4) !== 0 && e === 98
      ? (e = Ho(12, Je))
      : ((e = Qp(e)), (e = Ho(e, Je))),
    e
  );
}
function St(e, t, n) {
  if (50 < xr) throw ((xr = 0), (fu = null), Error(C(185)));
  if (((e = $l(e, t)), e === null)) return null;
  xl(e, t, n), e === ye && ((bn |= t), ae === 4 && Pn(e, ve));
  var r = Ln();
  t === 1
    ? (D & 8) !== 0 && (D & 48) === 0
      ? du(e)
      : (Le(e, n), D === 0 && (Bn(), Qe()))
    : ((D & 4) === 0 ||
        (r !== 98 && r !== 99) ||
        (tt === null ? (tt = new Set([e])) : tt.add(e)),
      Le(e, n)),
    (iu = e);
}
function $l(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
function Le(e, t) {
  for (
    var n = e.callbackNode,
      r = e.suspendedLanes,
      o = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var u = 31 - kt(i),
      s = 1 << u,
      a = l[u];
    if (a === -1) {
      if ((s & r) === 0 || (s & o) !== 0) {
        (a = t), an(s);
        var f = W;
        l[u] = 10 <= f ? a + 250 : 6 <= f ? a + 5e3 : -1;
      }
    } else a <= t && (e.expiredLanes |= s);
    i &= ~s;
  }
  if (((r = Tr(e, e === ye ? ve : 0)), (t = W), r === 0))
    n !== null &&
      (n !== ui && Qi(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else {
    if (n !== null) {
      if (e.callbackPriority === t) return;
      n !== ui && Qi(n);
    }
    t === 15
      ? ((n = du.bind(null, e)),
        Ze === null ? ((Ze = [n]), (Lo = Zu(Ol, Hf))) : Ze.push(n),
        (n = ui))
      : t === 14
      ? (n = Lr(99, du.bind(null, e)))
      : ((n = Yp(t)), (n = Lr(n, md.bind(null, e)))),
      (e.callbackPriority = t),
      (e.callbackNode = n);
  }
}
function md(e) {
  if (((Mo = -1), (Io = Je = 0), (D & 48) !== 0)) throw Error(C(327));
  var t = e.callbackNode;
  if (Nt() && e.callbackNode !== t) return null;
  var n = Tr(e, e === ye ? ve : 0);
  if (n === 0) return null;
  var r = n,
    o = D;
  D |= 16;
  var l = yd();
  (ye !== e || ve !== r) && (Bn(), _n(e, r));
  do
    try {
      iv();
      break;
    } catch (u) {
      gd(e, u);
    }
  while (1);
  if (
    (Ju(),
    (ul.current = l),
    (D = o),
    q !== null ? (r = 0) : ((ye = null), (ve = 0), (r = ae)),
    (Fn & bn) !== 0)
  )
    _n(e, 0);
  else if (r !== 0) {
    if (
      (r === 2 &&
        ((D |= 64),
        e.hydrate && ((e.hydrate = !1), Xu(e.containerInfo)),
        (n = kf(e)),
        n !== 0 && (r = ar(e, n))),
      r === 1)
    )
      throw ((t = Tl), _n(e, 0), Pn(e, n), Le(e, me()), t);
    switch (
      ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
    ) {
      case 0:
      case 1:
        throw Error(C(345));
      case 2:
        jt(e);
        break;
      case 3:
        if (
          (Pn(e, n), (n & 62914560) === n && ((r = fs + 500 - me()), 10 < r))
        ) {
          if (Tr(e, 0) !== 0) break;
          if (((o = e.suspendedLanes), (o & n) !== n)) {
            Ce(), (e.pingedLanes |= e.suspendedLanes & o);
            break;
          }
          e.timeoutHandle = ha(jt.bind(null, e), r);
          break;
        }
        jt(e);
        break;
      case 4:
        if ((Pn(e, n), (n & 4186112) === n)) break;
        for (r = e.eventTimes, o = -1; 0 < n; ) {
          var i = 31 - kt(n);
          (l = 1 << i), (i = r[i]), i > o && (o = i), (n &= ~l);
        }
        if (
          ((n = o),
          (n = me() - n),
          (n =
            (120 > n
              ? 120
              : 480 > n
              ? 480
              : 1080 > n
              ? 1080
              : 1920 > n
              ? 1920
              : 3e3 > n
              ? 3e3
              : 4320 > n
              ? 4320
              : 1960 * rv(n / 1960)) - n),
          10 < n)
        ) {
          e.timeoutHandle = ha(jt.bind(null, e), n);
          break;
        }
        jt(e);
        break;
      case 5:
        jt(e);
        break;
      default:
        throw Error(C(329));
    }
  }
  return Le(e, me()), e.callbackNode === t ? md.bind(null, e) : null;
}
function Pn(e, t) {
  for (
    t &= ~cs,
      t &= ~bn,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - kt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function du(e) {
  if ((D & 48) !== 0) throw Error(C(327));
  if ((Nt(), e === ye && (e.expiredLanes & ve) !== 0)) {
    var t = ve,
      n = ar(e, t);
    (Fn & bn) !== 0 && ((t = Tr(e, t)), (n = ar(e, t)));
  } else (t = Tr(e, 0)), (n = ar(e, t));
  if (
    (e.tag !== 0 &&
      n === 2 &&
      ((D |= 64),
      e.hydrate && ((e.hydrate = !1), Xu(e.containerInfo)),
      (t = kf(e)),
      t !== 0 && (n = ar(e, t))),
    n === 1)
  )
    throw ((n = Tl), _n(e, 0), Pn(e, t), Le(e, me()), n);
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    jt(e),
    Le(e, me()),
    null
  );
}
function ov() {
  if (tt !== null) {
    var e = tt;
    (tt = null),
      e.forEach(function (t) {
        (t.expiredLanes |= 24 & t.pendingLanes), Le(t, me());
      });
  }
  Qe();
}
function vd(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && (Bn(), Qe());
  }
}
function hd(e, t) {
  var n = D;
  (D &= -2), (D |= 8);
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && (Bn(), Qe());
  }
}
function yo(e, t) {
  G(lu, Yt), (Yt |= t), (Fn |= t);
}
function ds() {
  (Yt = lu.current), K(lu);
}
function _n(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), zm(n)), q !== null))
    for (n = q.return; n !== null; ) {
      var r = n;
      switch (r.tag) {
        case 1:
          (r = r.type.childContextTypes), r != null && Xo();
          break;
        case 3:
          Mn(), K(xe), K(he), ns();
          break;
        case 5:
          ts(r);
          break;
        case 4:
          Mn();
          break;
        case 13:
          K(X);
          break;
        case 19:
          K(X);
          break;
        case 10:
          qu(r);
          break;
        case 23:
        case 24:
          ds();
      }
      n = n.return;
    }
  (ye = e),
    (q = _t(e.current, null)),
    (ve = Yt = Fn = t),
    (ae = 0),
    (Tl = null),
    (cs = bn = Qr = 0);
}
function gd(e, t) {
  do {
    var n = q;
    try {
      if ((Ju(), (wr.current = il), nl)) {
        for (var r = J.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        nl = !1;
      }
      if (
        ((Ar = 0),
        (se = pe = J = null),
        (Sr = !1),
        (as.current = null),
        n === null || n.return === null)
      ) {
        (ae = 1), (Tl = t), (q = null);
        break;
      }
      e: {
        var l = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = ve),
          (u.flags |= 2048),
          (u.firstEffect = u.lastEffect = null),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s;
          if ((u.mode & 2) === 0) {
            var f = u.alternate;
            f
              ? ((u.updateQueue = f.updateQueue),
                (u.memoizedState = f.memoizedState),
                (u.lanes = f.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var y = (X.current & 1) !== 0,
            p = i;
          do {
            var h;
            if ((h = p.tag === 13)) {
              var S = p.memoizedState;
              if (S !== null) h = S.dehydrated !== null;
              else {
                var g = p.memoizedProps;
                h =
                  g.fallback === void 0
                    ? !1
                    : g.unstable_avoidThisFallback !== !0
                    ? !0
                    : !y;
              }
            }
            if (h) {
              var d = p.updateQueue;
              if (d === null) {
                var c = new Set();
                c.add(a), (p.updateQueue = c);
              } else d.add(a);
              if ((p.mode & 2) === 0) {
                if (
                  ((p.flags |= 64),
                  (u.flags |= 16384),
                  (u.flags &= -2981),
                  u.tag === 1)
                )
                  if (u.alternate === null) u.tag = 17;
                  else {
                    var m = gt(-1, 1);
                    (m.tag = 2), yt(u, m);
                  }
                u.lanes |= 1;
                break e;
              }
              (s = void 0), (u = t);
              var w = l.pingCache;
              if (
                (w === null
                  ? ((w = l.pingCache = new Jm()), (s = new Set()), w.set(a, s))
                  : ((s = w.get(a)),
                    s === void 0 && ((s = new Set()), w.set(a, s))),
                !s.has(u))
              ) {
                s.add(u);
                var E = fv.bind(null, l, a, u);
                a.then(E, E);
              }
              (p.flags |= 4096), (p.lanes = t);
              break e;
            }
            p = p.return;
          } while (p !== null);
          s = Error(
            (yn(u.type) || "A React component") +
              ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`
          );
        }
        ae !== 5 && (ae = 2), (s = ss(s, u)), (p = i);
        do {
          switch (p.tag) {
            case 3:
              (l = s), (p.flags |= 4096), (t &= -t), (p.lanes |= t);
              var P = fd(p, l, t);
              ka(p, P);
              break e;
            case 1:
              l = s;
              var x = p.type,
                k = p.stateNode;
              if (
                (p.flags & 64) === 0 &&
                (typeof x.getDerivedStateFromError == "function" ||
                  (k !== null &&
                    typeof k.componentDidCatch == "function" &&
                    (We === null || !We.has(k))))
              ) {
                (p.flags |= 4096), (t &= -t), (p.lanes |= t);
                var O = dd(p, l, t);
                ka(p, O);
                break e;
              }
          }
          p = p.return;
        } while (p !== null);
      }
      Sd(n);
    } catch (_) {
      (t = _), q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function yd() {
  var e = ul.current;
  return (ul.current = il), e === null ? il : e;
}
function ar(e, t) {
  var n = D;
  D |= 16;
  var r = yd();
  (ye === e && ve === t) || _n(e, t);
  do
    try {
      lv();
      break;
    } catch (o) {
      gd(e, o);
    }
  while (1);
  if ((Ju(), (D = n), (ul.current = r), q !== null)) throw Error(C(261));
  return (ye = null), (ve = 0), ae;
}
function lv() {
  for (; q !== null; ) wd(q);
}
function iv() {
  for (; q !== null && !Bm(); ) wd(q);
}
function wd(e) {
  var t = xd(e.alternate, e, Yt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Sd(e) : (q = t),
    (as.current = null);
}
function Sd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 2048) === 0)) {
      if (((n = Gm(n, t, Yt)), n !== null)) {
        q = n;
        return;
      }
      if (
        ((n = t),
        (n.tag !== 24 && n.tag !== 23) ||
          n.memoizedState === null ||
          (Yt & 1073741824) !== 0 ||
          (n.mode & 4) === 0)
      ) {
        for (var r = 0, o = n.child; o !== null; )
          (r |= o.lanes | o.childLanes), (o = o.sibling);
        n.childLanes = r;
      }
      e !== null &&
        (e.flags & 2048) === 0 &&
        (e.firstEffect === null && (e.firstEffect = t.firstEffect),
        t.lastEffect !== null &&
          (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect),
          (e.lastEffect = t.lastEffect)),
        1 < t.flags &&
          (e.lastEffect !== null
            ? (e.lastEffect.nextEffect = t)
            : (e.firstEffect = t),
          (e.lastEffect = t)));
    } else {
      if (((n = Zm(t)), n !== null)) {
        (n.flags &= 2047), (q = n);
        return;
      }
      e !== null && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
    }
    if (((t = t.sibling), t !== null)) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  ae === 0 && (ae = 5);
}
function jt(e) {
  var t = Ln();
  return Qt(99, uv.bind(null, e, t)), null;
}
function uv(e, t) {
  do Nt();
  while (Er !== null);
  if ((D & 48) !== 0) throw Error(C(327));
  var n = e.finishedWork;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  e.callbackNode = null;
  var r = n.lanes | n.childLanes,
    o = r,
    l = e.pendingLanes & ~o;
  (e.pendingLanes = o),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= o),
    (e.mutableReadLanes &= o),
    (e.entangledLanes &= o),
    (o = e.entanglements);
  for (var i = e.eventTimes, u = e.expirationTimes; 0 < l; ) {
    var s = 31 - kt(l),
      a = 1 << s;
    (o[s] = 0), (i[s] = -1), (u[s] = -1), (l &= ~a);
  }
  if (
    (tt !== null && (r & 24) === 0 && tt.has(e) && tt.delete(e),
    e === ye && ((q = ye = null), (ve = 0)),
    1 < n.flags
      ? n.lastEffect !== null
        ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
        : (r = n)
      : (r = n.firstEffect),
    r !== null)
  ) {
    if (
      ((o = D), (D |= 32), (as.current = null), (oi = To), (i = aa()), Ui(i))
    ) {
      if ("selectionStart" in i)
        u = { start: i.selectionStart, end: i.selectionEnd };
      else
        e: if (
          ((u = ((u = i.ownerDocument) && u.defaultView) || window),
          (a = u.getSelection && u.getSelection()) && a.rangeCount !== 0)
        ) {
          (u = a.anchorNode),
            (l = a.anchorOffset),
            (s = a.focusNode),
            (a = a.focusOffset);
          try {
            u.nodeType, s.nodeType;
          } catch {
            u = null;
            break e;
          }
          var f = 0,
            y = -1,
            p = -1,
            h = 0,
            S = 0,
            g = i,
            d = null;
          t: for (;;) {
            for (
              var c;
              g !== u || (l !== 0 && g.nodeType !== 3) || (y = f + l),
                g !== s || (a !== 0 && g.nodeType !== 3) || (p = f + a),
                g.nodeType === 3 && (f += g.nodeValue.length),
                (c = g.firstChild) !== null;

            )
              (d = g), (g = c);
            for (;;) {
              if (g === i) break t;
              if (
                (d === u && ++h === l && (y = f),
                d === s && ++S === a && (p = f),
                (c = g.nextSibling) !== null)
              )
                break;
              (g = d), (d = g.parentNode);
            }
            g = c;
          }
          u = y === -1 || p === -1 ? null : { start: y, end: p };
        } else u = null;
      u = u || { start: 0, end: 0 };
    } else u = null;
    (li = { focusedElem: i, selectionRange: u }),
      (To = !1),
      (kr = null),
      (jo = !1),
      ($ = r);
    do
      try {
        sv();
      } catch (_) {
        if ($ === null) throw Error(C(330));
        Et($, _), ($ = $.nextEffect);
      }
    while ($ !== null);
    (kr = null), ($ = r);
    do
      try {
        for (i = e; $ !== null; ) {
          var m = $.flags;
          if ((m & 16 && Pr($.stateNode, ""), m & 128)) {
            var w = $.alternate;
            if (w !== null) {
              var E = w.ref;
              E !== null &&
                (typeof E == "function" ? E(null) : (E.current = null));
            }
          }
          switch (m & 1038) {
            case 2:
              Ya($), ($.flags &= -3);
              break;
            case 6:
              Ya($), ($.flags &= -3), di($.alternate, $);
              break;
            case 1024:
              $.flags &= -1025;
              break;
            case 1028:
              ($.flags &= -1025), di($.alternate, $);
              break;
            case 4:
              di($.alternate, $);
              break;
            case 8:
              (u = $), pd(i, u);
              var P = u.alternate;
              Ka(u), P !== null && Ka(P);
          }
          $ = $.nextEffect;
        }
      } catch (_) {
        if ($ === null) throw Error(C(330));
        Et($, _), ($ = $.nextEffect);
      }
    while ($ !== null);
    if (
      ((E = li),
      (w = aa()),
      (m = E.focusedElem),
      (i = E.selectionRange),
      w !== m && m && m.ownerDocument && Nf(m.ownerDocument.documentElement, m))
    ) {
      for (
        i !== null &&
          Ui(m) &&
          ((w = i.start),
          (E = i.end),
          E === void 0 && (E = w),
          ("selectionStart" in m)
            ? ((m.selectionStart = w),
              (m.selectionEnd = Math.min(E, m.value.length)))
            : ((E =
                ((w = m.ownerDocument || document) && w.defaultView) || window),
              E.getSelection &&
                ((E = E.getSelection()),
                (u = m.textContent.length),
                (P = Math.min(i.start, u)),
                (i = i.end === void 0 ? P : Math.min(i.end, u)),
                !E.extend && P > i && ((u = i), (i = P), (P = u)),
                (u = sa(m, P)),
                (l = sa(m, i)),
                u &&
                  l &&
                  (E.rangeCount !== 1 ||
                    E.anchorNode !== u.node ||
                    E.anchorOffset !== u.offset ||
                    E.focusNode !== l.node ||
                    E.focusOffset !== l.offset) &&
                  ((w = w.createRange()),
                  w.setStart(u.node, u.offset),
                  E.removeAllRanges(),
                  P > i
                    ? (E.addRange(w), E.extend(l.node, l.offset))
                    : (w.setEnd(l.node, l.offset), E.addRange(w)))))),
          w = [],
          E = m;
        (E = E.parentNode);

      )
        E.nodeType === 1 &&
          w.push({ element: E, left: E.scrollLeft, top: E.scrollTop });
      for (typeof m.focus == "function" && m.focus(), m = 0; m < w.length; m++)
        (E = w[m]),
          (E.element.scrollLeft = E.left),
          (E.element.scrollTop = E.top);
    }
    (To = !!oi), (li = oi = null), (e.current = n), ($ = r);
    do
      try {
        for (m = e; $ !== null; ) {
          var x = $.flags;
          if ((x & 36 && tv(m, $.alternate, $), x & 128)) {
            w = void 0;
            var k = $.ref;
            if (k !== null) {
              var O = $.stateNode;
              switch ($.tag) {
                case 5:
                  w = O;
                  break;
                default:
                  w = O;
              }
              typeof k == "function" ? k(w) : (k.current = w);
            }
          }
          $ = $.nextEffect;
        }
      } catch (_) {
        if ($ === null) throw Error(C(330));
        Et($, _), ($ = $.nextEffect);
      }
    while ($ !== null);
    ($ = null), Wm(), (D = o);
  } else e.current = n;
  if (Pt) (Pt = !1), (Er = e), (sr = t);
  else
    for ($ = r; $ !== null; )
      (t = $.nextEffect),
        ($.nextEffect = null),
        $.flags & 8 && ((x = $), (x.sibling = null), (x.stateNode = null)),
        ($ = t);
  if (
    ((r = e.pendingLanes),
    r === 0 && (We = null),
    r === 1 ? (e === fu ? xr++ : ((xr = 0), (fu = e))) : (xr = 0),
    (n = n.stateNode),
    Wt && typeof Wt.onCommitFiberRoot == "function")
  )
    try {
      Wt.onCommitFiberRoot(Gu, n, void 0, (n.current.flags & 64) === 64);
    } catch {}
  if ((Le(e, me()), sl)) throw ((sl = !1), (e = su), (su = null), e);
  return (D & 8) !== 0 || Qe(), null;
}
function sv() {
  for (; $ !== null; ) {
    var e = $.alternate;
    jo ||
      kr === null ||
      (($.flags & 8) !== 0
        ? Ys($, kr) && (jo = !0)
        : $.tag === 13 && nv(e, $) && Ys($, kr) && (jo = !0));
    var t = $.flags;
    (t & 256) !== 0 && ev(e, $),
      (t & 512) === 0 ||
        Pt ||
        ((Pt = !0),
        Lr(97, function () {
          return Nt(), null;
        })),
      ($ = $.nextEffect);
  }
}
function Nt() {
  if (sr !== 90) {
    var e = 97 < sr ? 97 : sr;
    return (sr = 90), Qt(e, cv);
  }
  return !1;
}
function av(e, t) {
  au.push(t, e),
    Pt ||
      ((Pt = !0),
      Lr(97, function () {
        return Nt(), null;
      }));
}
function Ed(e, t) {
  cu.push(t, e),
    Pt ||
      ((Pt = !0),
      Lr(97, function () {
        return Nt(), null;
      }));
}
function cv() {
  if (Er === null) return !1;
  var e = Er;
  if (((Er = null), (D & 48) !== 0)) throw Error(C(331));
  var t = D;
  D |= 32;
  var n = cu;
  cu = [];
  for (var r = 0; r < n.length; r += 2) {
    var o = n[r],
      l = n[r + 1],
      i = o.destroy;
    if (((o.destroy = void 0), typeof i == "function"))
      try {
        i();
      } catch (s) {
        if (l === null) throw Error(C(330));
        Et(l, s);
      }
  }
  for (n = au, au = [], r = 0; r < n.length; r += 2) {
    (o = n[r]), (l = n[r + 1]);
    try {
      var u = o.create;
      o.destroy = u();
    } catch (s) {
      if (l === null) throw Error(C(330));
      Et(l, s);
    }
  }
  for (u = e.current.firstEffect; u !== null; )
    (e = u.nextEffect),
      (u.nextEffect = null),
      u.flags & 8 && ((u.sibling = null), (u.stateNode = null)),
      (u = e);
  return (D = t), Qe(), !0;
}
function Ga(e, t, n) {
  (t = ss(n, t)),
    (t = fd(e, t, 1)),
    yt(e, t),
    (t = Ce()),
    (e = $l(e, 1)),
    e !== null && (xl(e, 1, t), Le(e, t));
}
function Et(e, t) {
  if (e.tag === 3) Ga(e, e, t);
  else
    for (var n = e.return; n !== null; ) {
      if (n.tag === 3) {
        Ga(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (We === null || !We.has(r)))
        ) {
          e = ss(t, e);
          var o = dd(n, e, 1);
          if ((yt(n, o), (o = Ce()), (n = $l(n, 1)), n !== null))
            xl(n, 1, o), Le(n, o);
          else if (
            typeof r.componentDidCatch == "function" &&
            (We === null || !We.has(r))
          )
            try {
              r.componentDidCatch(t, e);
            } catch {}
          break;
        }
      }
      n = n.return;
    }
}
function fv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ce()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ye === e &&
      (ve & n) === n &&
      (ae === 4 || (ae === 3 && (ve & 62914560) === ve && 500 > me() - fs)
        ? _n(e, 0)
        : (cs |= n)),
    Le(e, t);
}
function dv(e, t) {
  var n = e.stateNode;
  n !== null && n.delete(t),
    (t = 0),
    t === 0 &&
      ((t = e.mode),
      (t & 2) === 0
        ? (t = 1)
        : (t & 4) === 0
        ? (t = Ln() === 99 ? 1 : 2)
        : (Je === 0 && (Je = Fn),
          (t = cn(62914560 & ~Je)),
          t === 0 && (t = 4194304))),
    (n = Ce()),
    (e = $l(e, t)),
    e !== null && (xl(e, t, n), Le(e, n));
}
var xd;
xd = function (e, t, n) {
  var r = t.lanes;
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || xe.current) ze = !0;
    else if ((n & r) !== 0) ze = (e.flags & 16384) !== 0;
    else {
      switch (((ze = !1), t.tag)) {
        case 3:
          ja(t), ai();
          break;
        case 5:
          Oa(t);
          break;
        case 1:
          ke(t.type) && Do(t);
          break;
        case 4:
          Gi(t, t.stateNode.containerInfo);
          break;
        case 10:
          r = t.memoizedProps.value;
          var o = t.type._context;
          G(Go, o._currentValue), (o._currentValue = r);
          break;
        case 13:
          if (t.memoizedState !== null)
            return (n & t.child.childLanes) !== 0
              ? Aa(e, t, n)
              : (G(X, X.current & 1),
                (t = et(e, t, n)),
                t !== null ? t.sibling : null);
          G(X, X.current & 1);
          break;
        case 19:
          if (((r = (n & t.childLanes) !== 0), (e.flags & 64) !== 0)) {
            if (r) return Ua(e, t, n);
            t.flags |= 64;
          }
          if (
            ((o = t.memoizedState),
            o !== null &&
              ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
            G(X, X.current),
            r)
          )
            break;
          return null;
        case 23:
        case 24:
          return (t.lanes = 0), ci(e, t, n);
      }
      return et(e, t, n);
    }
  else ze = !1;
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      if (
        ((r = t.type),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (e = t.pendingProps),
        (o = Dn(t, he.current)),
        kn(t, n),
        (o = os(null, t, r, e, o, n)),
        (t.flags |= 1),
        typeof o == "object" &&
          o !== null &&
          typeof o.render == "function" &&
          o.$$typeof === void 0)
      ) {
        if (
          ((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), ke(r))
        ) {
          var l = !0;
          Do(t);
        } else l = !1;
        (t.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
          es(t);
        var i = r.getDerivedStateFromProps;
        typeof i == "function" && qo(t, r, i, e),
          (o.updater = Rl),
          (t.stateNode = o),
          (o._reactInternals = t),
          Xi(t, r, e, n),
          (t = eu(null, t, r, !0, l, n));
      } else (t.tag = 0), Ee(null, t, o, n), (t = t.child);
      return t;
    case 16:
      o = t.elementType;
      e: {
        switch (
          (e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (l = o._init),
          (o = l(o._payload)),
          (t.type = o),
          (l = t.tag = mv(o)),
          (e = je(o, e)),
          l)
        ) {
          case 0:
            t = qi(null, t, o, e, n);
            break e;
          case 1:
            t = Ia(null, t, o, e, n);
            break e;
          case 11:
            t = La(null, t, o, e, n);
            break e;
          case 14:
            t = Ma(null, t, o, je(o.type, e), r, n);
            break e;
        }
        throw Error(C(306, o, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : je(r, o)),
        qi(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : je(r, o)),
        Ia(e, t, r, o, n)
      );
    case 3:
      if ((ja(t), (r = t.updateQueue), e === null || r === null))
        throw Error(C(282));
      if (
        ((r = t.pendingProps),
        (o = t.memoizedState),
        (o = o !== null ? o.element : null),
        Qf(e, t),
        Mr(t, r, null, n),
        (r = t.memoizedState.element),
        r === o)
      )
        ai(), (t = et(e, t, n));
      else {
        if (
          ((o = t.stateNode),
          (l = o.hydrate) &&
            ((pt = xn(t.stateNode.containerInfo.firstChild)),
            (qe = t),
            (l = He = !0)),
          l)
        ) {
          if (((e = o.mutableSourceEagerHydrationData), e != null))
            for (o = 0; o < e.length; o += 2)
              (l = e[o]),
                (l._workInProgressVersionPrimary = e[o + 1]),
                Cn.push(l);
          for (n = Zf(t, null, r, n), t.child = n; n; )
            (n.flags = (n.flags & -3) | 1024), (n = n.sibling);
        } else Ee(e, t, r, n), ai();
        t = t.child;
      }
      return t;
    case 5:
      return (
        Oa(t),
        e === null && Zi(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        Hi(r, o) ? (i = null) : l !== null && Hi(r, l) && (t.flags |= 16),
        ud(e, t),
        Ee(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Zi(t), null;
    case 13:
      return Aa(e, t, n);
    case 4:
      return (
        Gi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = el(t, null, r, n)) : Ee(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : je(r, o)),
        La(e, t, r, o, n)
      );
    case 7:
      return Ee(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ee(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ee(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        (r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value);
        var u = t.type._context;
        if ((G(Go, u._currentValue), (u._currentValue = l), i !== null))
          if (
            ((u = i.value),
            (l = Te(u, l)
              ? 0
              : (typeof r._calculateChangedBits == "function"
                  ? r._calculateChangedBits(u, l)
                  : 1073741823) | 0),
            l === 0)
          ) {
            if (i.children === o.children && !xe.current) {
              t = et(e, t, n);
              break e;
            }
          } else
            for (u = t.child, u !== null && (u.return = t); u !== null; ) {
              var s = u.dependencies;
              if (s !== null) {
                i = u.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r && (a.observedBits & l) !== 0) {
                    u.tag === 1 &&
                      ((a = gt(-1, n & -n)), (a.tag = 2), yt(u, a)),
                      (u.lanes |= n),
                      (a = u.alternate),
                      a !== null && (a.lanes |= n),
                      Kf(u.return, n),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else i = u.tag === 10 && u.type === t.type ? null : u.child;
              if (i !== null) i.return = u;
              else
                for (i = u; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((u = i.sibling), u !== null)) {
                    (u.return = i.return), (i = u);
                    break;
                  }
                  i = i.return;
                }
              u = i;
            }
        Ee(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (l = t.pendingProps),
        (r = l.children),
        kn(t, n),
        (o = De(o, l.unstable_observedBits)),
        (r = r(o)),
        (t.flags |= 1),
        Ee(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (o = t.type),
        (l = je(o, t.pendingProps)),
        (l = je(o.type, l)),
        Ma(e, t, o, l, r, n)
      );
    case 15:
      return id(e, t, t.type, t.pendingProps, r, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : je(r, o)),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (t.tag = 1),
        ke(r) ? ((e = !0), Do(t)) : (e = !1),
        kn(t, n),
        Xf(t, r, o),
        Xi(t, r, o, n),
        eu(null, t, r, !0, e, n)
      );
    case 19:
      return Ua(e, t, n);
    case 23:
      return ci(e, t, n);
    case 24:
      return ci(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function pv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.flags = 0),
    (this.lastEffect = this.firstEffect = this.nextEffect = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function $e(e, t, n, r) {
  return new pv(e, t, n, r);
}
function ps(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function mv(e) {
  if (typeof e == "function") return ps(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === wl)) return 11;
    if (e === Sl) return 14;
  }
  return 2;
}
function _t(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = $e(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.nextEffect = null),
        (n.firstEffect = null),
        (n.lastEffect = null)),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ao(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) ps(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case at:
        return On(n.children, o, l, t);
      case Zc:
        (i = 8), (o |= 16);
        break;
      case Tu:
        (i = 8), (o |= 1);
        break;
      case dr:
        return (
          (e = $e(12, n, t, o | 8)),
          (e.elementType = dr),
          (e.type = dr),
          (e.lanes = l),
          e
        );
      case pr:
        return (
          (e = $e(13, n, t, o)),
          (e.type = pr),
          (e.elementType = pr),
          (e.lanes = l),
          e
        );
      case Bo:
        return (e = $e(19, n, t, o)), (e.elementType = Bo), (e.lanes = l), e;
      case Iu:
        return ms(n, o, l, t);
      case Oi:
        return (e = $e(24, n, t, o)), (e.elementType = Oi), (e.lanes = l), e;
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case $u:
              i = 10;
              break e;
            case Nu:
              i = 9;
              break e;
            case wl:
              i = 11;
              break e;
            case Sl:
              i = 14;
              break e;
            case Du:
              (i = 16), (r = null);
              break e;
            case Lu:
              i = 22;
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = $e(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function On(e, t, n, r) {
  return (e = $e(7, e, r, t)), (e.lanes = n), e;
}
function ms(e, t, n, r) {
  return (e = $e(23, e, r, t)), (e.elementType = Iu), (e.lanes = n), e;
}
function pi(e, t, n) {
  return (e = $e(6, e, null, t)), (e.lanes = n), e;
}
function mi(e, t, n) {
  return (
    (t = $e(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function vv(e, t, n) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.pendingContext = this.context = null),
    (this.hydrate = n),
    (this.callbackNode = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Zl(0)),
    (this.expirationTimes = Zl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Zl(0)),
    (this.mutableSourceEagerHydrationData = null);
}
function hv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: zt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function al(e, t, n, r) {
  var o = t.current,
    l = Ce(),
    i = wt(o);
  e: if (n) {
    n = n._reactInternals;
    t: {
      if (Jt(n) !== n || n.tag !== 1) throw Error(C(170));
      var u = n;
      do {
        switch (u.tag) {
          case 3:
            u = u.stateNode.context;
            break t;
          case 1:
            if (ke(u.type)) {
              u = u.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        u = u.return;
      } while (u !== null);
      throw Error(C(171));
    }
    if (n.tag === 1) {
      var s = n.type;
      if (ke(s)) {
        n = Ff(n, s, u);
        break e;
      }
    }
    n = u;
  } else n = Ct;
  return (
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = gt(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    yt(o, t),
    St(o, i, l),
    i
  );
}
function vi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Za(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function vs(e, t) {
  Za(e, t), (e = e.alternate) && Za(e, t);
}
function gv() {
  return null;
}
function hs(e, t, n) {
  var r =
    (n != null &&
      n.hydrationOptions != null &&
      n.hydrationOptions.mutableSources) ||
    null;
  if (
    ((n = new vv(e, t, n != null && n.hydrate === !0)),
    (t = $e(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0)),
    (n.current = t),
    (t.stateNode = n),
    es(t),
    (e[zn] = n.current),
    Mf(e.nodeType === 8 ? e.parentNode : e),
    r)
  )
    for (e = 0; e < r.length; e++) {
      t = r[e];
      var o = t._getVersion;
      (o = o(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, o])
          : n.mutableSourceEagerHydrationData.push(t, o);
    }
  this._internalRoot = n;
}
hs.prototype.render = function (e) {
  al(e, this._internalRoot, null, null);
};
hs.prototype.unmount = function () {
  var e = this._internalRoot,
    t = e.containerInfo;
  al(null, e, null, function () {
    t[zn] = null;
  });
};
function Yr(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function yv(e, t) {
  if (
    (t ||
      ((t = e ? (e.nodeType === 9 ? e.documentElement : e.firstChild) : null),
      (t = !(!t || t.nodeType !== 1 || !t.hasAttribute("data-reactroot")))),
    !t)
  )
    for (var n; (n = e.lastChild); ) e.removeChild(n);
  return new hs(e, 0, t ? { hydrate: !0 } : void 0);
}
function Nl(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l._internalRoot;
    if (typeof o == "function") {
      var u = o;
      o = function () {
        var a = vi(i);
        u.call(a);
      };
    }
    al(t, i, e, o);
  } else {
    if (
      ((l = n._reactRootContainer = yv(n, r)),
      (i = l._internalRoot),
      typeof o == "function")
    ) {
      var s = o;
      o = function () {
        var a = vi(i);
        s.call(a);
      };
    }
    hd(function () {
      al(t, i, e, o);
    });
  }
  return vi(i);
}
pf = function (e) {
  if (e.tag === 13) {
    var t = Ce();
    St(e, 4, t), vs(e, 4);
  }
};
bu = function (e) {
  if (e.tag === 13) {
    var t = Ce();
    St(e, 67108864, t), vs(e, 67108864);
  }
};
mf = function (e) {
  if (e.tag === 13) {
    var t = Ce(),
      n = wt(e);
    St(e, n, t), vs(e, n);
  }
};
vf = function (e, t) {
  return t();
};
Ai = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ti(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = _l(r);
            if (!o) throw Error(C(90));
            qc(r), Ti(r, o);
          }
        }
      }
      break;
    case "textarea":
      tf(e, n);
      break;
    case "select":
      (t = n.value), t != null && wn(e, !!n.multiple, t, !1);
  }
};
Au = vd;
af = function (e, t, n, r, o) {
  var l = D;
  D |= 4;
  try {
    return Qt(98, e.bind(null, t, n, r, o));
  } finally {
    (D = l), D === 0 && (Bn(), Qe());
  }
};
zu = function () {
  (D & 49) === 0 && (ov(), Nt());
};
cf = function (e, t) {
  var n = D;
  D |= 2;
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && (Bn(), Qe());
  }
};
function kd(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Yr(t)) throw Error(C(200));
  return hv(e, t, null, n);
}
var wv = { Events: [Hr, mn, _l, uf, sf, Nt, { current: !1 }] },
  rr = {
    findFiberByHostInstance: bt,
    bundleType: 0,
    version: "17.0.2",
    rendererPackageName: "react-dom",
  },
  Sv = {
    bundleType: rr.bundleType,
    version: rr.version,
    rendererPackageName: rr.rendererPackageName,
    rendererConfig: rr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Zt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = df(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: rr.findFiberByHostInstance || gv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
  var wo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wo.isDisabled && wo.supportsFiber)
    try {
      (Gu = wo.inject(Sv)), (Wt = wo);
    } catch {}
}
Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wv;
Me.createPortal = kd;
Me.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : Error(C(268, Object.keys(e)));
  return (e = df(t)), (e = e === null ? null : e.stateNode), e;
};
Me.flushSync = function (e, t) {
  var n = D;
  if ((n & 48) !== 0) return e(t);
  D |= 1;
  try {
    if (e) return Qt(99, e.bind(null, t));
  } finally {
    (D = n), Qe();
  }
};
Me.hydrate = function (e, t, n) {
  if (!Yr(t)) throw Error(C(200));
  return Nl(null, e, t, !0, n);
};
Me.render = function (e, t, n) {
  if (!Yr(t)) throw Error(C(200));
  return Nl(null, e, t, !1, n);
};
Me.unmountComponentAtNode = function (e) {
  if (!Yr(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (hd(function () {
        Nl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[zn] = null);
        });
      }),
      !0)
    : !1;
};
Me.unstable_batchedUpdates = vd;
Me.unstable_createPortal = function (e, t) {
  return kd(
    e,
    t,
    2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  );
};
Me.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Yr(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Nl(e, t, n, !1, r);
};
Me.version = "17.0.2";
function Cd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cd);
    } catch (e) {
      console.error(e);
    }
}
Cd(), (gl.exports = Me);
var Ev = gl.exports,
  Ot = ut.createContext(null);
function xv(e) {
  e();
}
var Pd = xv,
  kv = function (t) {
    return (Pd = t);
  },
  Cv = function () {
    return Pd;
  };
function Pv() {
  var e = Cv(),
    t = null,
    n = null;
  return {
    clear: function () {
      (t = null), (n = null);
    },
    notify: function () {
      e(function () {
        for (var o = t; o; ) o.callback(), (o = o.next);
      });
    },
    get: function () {
      for (var o = [], l = t; l; ) o.push(l), (l = l.next);
      return o;
    },
    subscribe: function (o) {
      var l = !0,
        i = (n = { callback: o, next: null, prev: n });
      return (
        i.prev ? (i.prev.next = i) : (t = i),
        function () {
          !l ||
            t === null ||
            ((l = !1),
            i.next ? (i.next.prev = i.prev) : (n = i.prev),
            i.prev ? (i.prev.next = i.next) : (t = i.next));
        }
      );
    },
  };
}
var Ja = {
  notify: function () {},
  get: function () {
    return [];
  },
};
function _d(e, t) {
  var n,
    r = Ja;
  function o(y) {
    return s(), r.subscribe(y);
  }
  function l() {
    r.notify();
  }
  function i() {
    f.onStateChange && f.onStateChange();
  }
  function u() {
    return Boolean(n);
  }
  function s() {
    n || ((n = t ? t.addNestedSub(i) : e.subscribe(i)), (r = Pv()));
  }
  function a() {
    n && (n(), (n = void 0), r.clear(), (r = Ja));
  }
  var f = {
    addNestedSub: o,
    notifyNestedSubs: l,
    handleChangeWrapper: i,
    isSubscribed: u,
    trySubscribe: s,
    tryUnsubscribe: a,
    getListeners: function () {
      return r;
    },
  };
  return f;
}
var pu =
    typeof window != "undefined" &&
    typeof window.document != "undefined" &&
    typeof window.document.createElement != "undefined"
      ? v.exports.useLayoutEffect
      : v.exports.useEffect,
  Dl = { exports: {} },
  Xr = {};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _v = v.exports,
  Od = 60103;
Xr.Fragment = 60107;
if (typeof Symbol == "function" && Symbol.for) {
  var qa = Symbol.for;
  (Od = qa("react.element")), (Xr.Fragment = qa("react.fragment"));
}
var Ov =
    _v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Rv = Object.prototype.hasOwnProperty,
  Tv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rd(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Rv.call(t, r) && !Tv.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Od,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Ov.current,
  };
}
Xr.jsx = Rd;
Xr.jsxs = Rd;
Dl.exports = Xr;
const $v = Dl.exports.jsx,
  Fy = Dl.exports.jsxs,
  by = Dl.exports.Fragment;
function By(e) {
  var t = e.store,
    n = e.context,
    r = e.children,
    o = v.exports.useMemo(
      function () {
        var u = _d(t);
        return (
          (u.onStateChange = u.notifyNestedSubs), { store: t, subscription: u }
        );
      },
      [t]
    ),
    l = v.exports.useMemo(
      function () {
        return t.getState();
      },
      [t]
    );
  pu(
    function () {
      var u = o.subscription;
      return (
        u.trySubscribe(),
        l !== t.getState() && u.notifyNestedSubs(),
        function () {
          u.tryUnsubscribe(), (u.onStateChange = null);
        }
      );
    },
    [o, l]
  );
  var i = n || Ot;
  return $v(i.Provider, { value: o, children: r });
}
function F() {
  return (
    (F =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    F.apply(this, arguments)
  );
}
var Td = { exports: {} },
  B = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oe = typeof Symbol == "function" && Symbol.for,
  gs = oe ? Symbol.for("react.element") : 60103,
  ys = oe ? Symbol.for("react.portal") : 60106,
  Ll = oe ? Symbol.for("react.fragment") : 60107,
  Ml = oe ? Symbol.for("react.strict_mode") : 60108,
  Il = oe ? Symbol.for("react.profiler") : 60114,
  jl = oe ? Symbol.for("react.provider") : 60109,
  Al = oe ? Symbol.for("react.context") : 60110,
  ws = oe ? Symbol.for("react.async_mode") : 60111,
  zl = oe ? Symbol.for("react.concurrent_mode") : 60111,
  Fl = oe ? Symbol.for("react.forward_ref") : 60112,
  bl = oe ? Symbol.for("react.suspense") : 60113,
  Nv = oe ? Symbol.for("react.suspense_list") : 60120,
  Bl = oe ? Symbol.for("react.memo") : 60115,
  Ul = oe ? Symbol.for("react.lazy") : 60116,
  Dv = oe ? Symbol.for("react.block") : 60121,
  Lv = oe ? Symbol.for("react.fundamental") : 60117,
  Mv = oe ? Symbol.for("react.responder") : 60118,
  Iv = oe ? Symbol.for("react.scope") : 60119;
function Oe(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case gs:
        switch (((e = e.type), e)) {
          case ws:
          case zl:
          case Ll:
          case Il:
          case Ml:
          case bl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Al:
              case Fl:
              case Ul:
              case Bl:
              case jl:
                return e;
              default:
                return t;
            }
        }
      case ys:
        return t;
    }
  }
}
function $d(e) {
  return Oe(e) === zl;
}
B.AsyncMode = ws;
B.ConcurrentMode = zl;
B.ContextConsumer = Al;
B.ContextProvider = jl;
B.Element = gs;
B.ForwardRef = Fl;
B.Fragment = Ll;
B.Lazy = Ul;
B.Memo = Bl;
B.Portal = ys;
B.Profiler = Il;
B.StrictMode = Ml;
B.Suspense = bl;
B.isAsyncMode = function (e) {
  return $d(e) || Oe(e) === ws;
};
B.isConcurrentMode = $d;
B.isContextConsumer = function (e) {
  return Oe(e) === Al;
};
B.isContextProvider = function (e) {
  return Oe(e) === jl;
};
B.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === gs;
};
B.isForwardRef = function (e) {
  return Oe(e) === Fl;
};
B.isFragment = function (e) {
  return Oe(e) === Ll;
};
B.isLazy = function (e) {
  return Oe(e) === Ul;
};
B.isMemo = function (e) {
  return Oe(e) === Bl;
};
B.isPortal = function (e) {
  return Oe(e) === ys;
};
B.isProfiler = function (e) {
  return Oe(e) === Il;
};
B.isStrictMode = function (e) {
  return Oe(e) === Ml;
};
B.isSuspense = function (e) {
  return Oe(e) === bl;
};
B.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Ll ||
    e === zl ||
    e === Il ||
    e === Ml ||
    e === bl ||
    e === Nv ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Ul ||
        e.$$typeof === Bl ||
        e.$$typeof === jl ||
        e.$$typeof === Al ||
        e.$$typeof === Fl ||
        e.$$typeof === Lv ||
        e.$$typeof === Mv ||
        e.$$typeof === Iv ||
        e.$$typeof === Dv))
  );
};
B.typeOf = Oe;
Td.exports = B;
var Nd = Td.exports,
  jv = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Av = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Dd = {};
Dd[Nd.ForwardRef] = jv;
Dd[Nd.Memo] = Av;
var V = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wl = 60103,
  Vl = 60106,
  Gr = 60107,
  Zr = 60108,
  Jr = 60114,
  qr = 60109,
  eo = 60110,
  to = 60112,
  no = 60113,
  Ss = 60120,
  ro = 60115,
  oo = 60116,
  Ld = 60121,
  Md = 60122,
  Id = 60117,
  jd = 60129,
  Ad = 60131;
if (typeof Symbol == "function" && Symbol.for) {
  var ue = Symbol.for;
  (Wl = ue("react.element")),
    (Vl = ue("react.portal")),
    (Gr = ue("react.fragment")),
    (Zr = ue("react.strict_mode")),
    (Jr = ue("react.profiler")),
    (qr = ue("react.provider")),
    (eo = ue("react.context")),
    (to = ue("react.forward_ref")),
    (no = ue("react.suspense")),
    (Ss = ue("react.suspense_list")),
    (ro = ue("react.memo")),
    (oo = ue("react.lazy")),
    (Ld = ue("react.block")),
    (Md = ue("react.server.block")),
    (Id = ue("react.fundamental")),
    (jd = ue("react.debug_trace_mode")),
    (Ad = ue("react.legacy_hidden"));
}
function Fe(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Wl:
        switch (((e = e.type), e)) {
          case Gr:
          case Jr:
          case Zr:
          case no:
          case Ss:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case eo:
              case to:
              case oo:
              case ro:
              case qr:
                return e;
              default:
                return t;
            }
        }
      case Vl:
        return t;
    }
  }
}
var zv = qr,
  Fv = Wl,
  bv = to,
  Bv = Gr,
  Uv = oo,
  Wv = ro,
  Vv = Vl,
  Hv = Jr,
  Kv = Zr,
  Qv = no;
V.ContextConsumer = eo;
V.ContextProvider = zv;
V.Element = Fv;
V.ForwardRef = bv;
V.Fragment = Bv;
V.Lazy = Uv;
V.Memo = Wv;
V.Portal = Vv;
V.Profiler = Hv;
V.StrictMode = Kv;
V.Suspense = Qv;
V.isAsyncMode = function () {
  return !1;
};
V.isConcurrentMode = function () {
  return !1;
};
V.isContextConsumer = function (e) {
  return Fe(e) === eo;
};
V.isContextProvider = function (e) {
  return Fe(e) === qr;
};
V.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Wl;
};
V.isForwardRef = function (e) {
  return Fe(e) === to;
};
V.isFragment = function (e) {
  return Fe(e) === Gr;
};
V.isLazy = function (e) {
  return Fe(e) === oo;
};
V.isMemo = function (e) {
  return Fe(e) === ro;
};
V.isPortal = function (e) {
  return Fe(e) === Vl;
};
V.isProfiler = function (e) {
  return Fe(e) === Jr;
};
V.isStrictMode = function (e) {
  return Fe(e) === Zr;
};
V.isSuspense = function (e) {
  return Fe(e) === no;
};
V.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Gr ||
    e === Jr ||
    e === jd ||
    e === Zr ||
    e === no ||
    e === Ss ||
    e === Ad ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === oo ||
        e.$$typeof === ro ||
        e.$$typeof === qr ||
        e.$$typeof === eo ||
        e.$$typeof === to ||
        e.$$typeof === Id ||
        e.$$typeof === Ld ||
        e[0] === Md))
  );
};
V.typeOf = Fe;
function zd() {
  var e = v.exports.useContext(Ot);
  return e;
}
function Fd(e) {
  e === void 0 && (e = Ot);
  var t =
    e === Ot
      ? zd
      : function () {
          return v.exports.useContext(e);
        };
  return function () {
    var r = t(),
      o = r.store;
    return o;
  };
}
var Yv = Fd();
function Xv(e) {
  e === void 0 && (e = Ot);
  var t = e === Ot ? Yv : Fd(e);
  return function () {
    var r = t();
    return r.dispatch;
  };
}
var Uy = Xv(),
  Gv = function (t, n) {
    return t === n;
  };
function Zv(e, t, n, r) {
  var o = v.exports.useReducer(function (S) {
      return S + 1;
    }, 0),
    l = o[1],
    i = v.exports.useMemo(
      function () {
        return _d(n, r);
      },
      [n, r]
    ),
    u = v.exports.useRef(),
    s = v.exports.useRef(),
    a = v.exports.useRef(),
    f = v.exports.useRef(),
    y = n.getState(),
    p;
  try {
    if (e !== s.current || y !== a.current || u.current) {
      var h = e(y);
      f.current === void 0 || !t(h, f.current) ? (p = h) : (p = f.current);
    } else p = f.current;
  } catch (S) {
    throw (
      (u.current &&
        (S.message +=
          `
The error may be correlated with this previous error:
` +
          u.current.stack +
          `

`),
      S)
    );
  }
  return (
    pu(function () {
      (s.current = e), (a.current = y), (f.current = p), (u.current = void 0);
    }),
    pu(
      function () {
        function S() {
          try {
            var g = n.getState();
            if (g === a.current) return;
            var d = s.current(g);
            if (t(d, f.current)) return;
            (f.current = d), (a.current = g);
          } catch (c) {
            u.current = c;
          }
          l();
        }
        return (
          (i.onStateChange = S),
          i.trySubscribe(),
          S(),
          function () {
            return i.tryUnsubscribe();
          }
        );
      },
      [n, i]
    ),
    p
  );
}
function Jv(e) {
  e === void 0 && (e = Ot);
  var t =
    e === Ot
      ? zd
      : function () {
          return v.exports.useContext(e);
        };
  return function (r, o) {
    o === void 0 && (o = Gv);
    var l = t(),
      i = l.store,
      u = l.subscription,
      s = Zv(r, o, i, u);
    return v.exports.useDebugValue(s), s;
  };
}
var Wy = Jv();
kv(gl.exports.unstable_batchedUpdates);
function Ae(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw Error(
    "[Immer] minified error nr: " +
      e +
      (n.length
        ? " " +
          n
            .map(function (o) {
              return "'" + o + "'";
            })
            .join(",")
        : "") +
      ". Find the full error at: https://bit.ly/3cXEKWf"
  );
}
function Rt(e) {
  return !!e && !!e[Q];
}
function Tt(e) {
  return (
    !!e &&
    ((function (t) {
      if (!t || typeof t != "object") return !1;
      var n = Object.getPrototypeOf(t);
      if (n === null) return !0;
      var r = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
      return (
        r === Object ||
        (typeof r == "function" && Function.toString.call(r) === uh)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[ic] ||
      !!e.constructor[ic] ||
      Es(e) ||
      xs(e))
  );
}
function Xt(e, t, n) {
  n === void 0 && (n = !1),
    Un(e) === 0
      ? (n ? Object.keys : Tn)(e).forEach(function (r) {
          (n && typeof r == "symbol") || t(r, e[r], e);
        })
      : e.forEach(function (r, o) {
          return t(o, r, e);
        });
}
function Un(e) {
  var t = e[Q];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : Es(e)
    ? 2
    : xs(e)
    ? 3
    : 0;
}
function Rn(e, t) {
  return Un(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function qv(e, t) {
  return Un(e) === 2 ? e.get(t) : e[t];
}
function bd(e, t, n) {
  var r = Un(e);
  r === 2 ? e.set(t, n) : r === 3 ? (e.delete(t), e.add(n)) : (e[t] = n);
}
function Bd(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Es(e) {
  return lh && e instanceof Map;
}
function xs(e) {
  return ih && e instanceof Set;
}
function At(e) {
  return e.o || e.t;
}
function ks(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = Wd(e);
  delete t[Q];
  for (var n = Tn(t), r = 0; r < n.length; r++) {
    var o = n[r],
      l = t[o];
    l.writable === !1 && ((l.writable = !0), (l.configurable = !0)),
      (l.get || l.set) &&
        (t[o] = {
          configurable: !0,
          writable: !0,
          enumerable: l.enumerable,
          value: e[o],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function Cs(e, t) {
  return (
    t === void 0 && (t = !1),
    Ps(e) ||
      Rt(e) ||
      !Tt(e) ||
      (Un(e) > 1 && (e.set = e.add = e.clear = e.delete = eh),
      Object.freeze(e),
      t &&
        Xt(
          e,
          function (n, r) {
            return Cs(r, !0);
          },
          !0
        )),
    e
  );
}
function eh() {
  Ae(2);
}
function Ps(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function Ke(e) {
  var t = gu[e];
  return t || Ae(18, e), t;
}
function th(e, t) {
  gu[e] || (gu[e] = t);
}
function mu() {
  return zr;
}
function hi(e, t) {
  t && (Ke("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function cl(e) {
  vu(e), e.p.forEach(nh), (e.p = null);
}
function vu(e) {
  e === zr && (zr = e.l);
}
function ec(e) {
  return (zr = { p: [], l: zr, h: e, m: !0, _: 0 });
}
function nh(e) {
  var t = e[Q];
  t.i === 0 || t.i === 1 ? t.j() : (t.O = !0);
}
function gi(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    r = e !== void 0 && e !== n;
  return (
    t.h.g || Ke("ES5").S(t, e, r),
    r
      ? (n[Q].P && (cl(t), Ae(4)),
        Tt(e) && ((e = fl(t, e)), t.l || dl(t, e)),
        t.u && Ke("Patches").M(n[Q].t, e, t.u, t.s))
      : (e = fl(t, n, [])),
    cl(t),
    t.u && t.v(t.u, t.s),
    e !== Ud ? e : void 0
  );
}
function fl(e, t, n) {
  if (Ps(t)) return t;
  var r = t[Q];
  if (!r)
    return (
      Xt(
        t,
        function (l, i) {
          return tc(e, r, t, l, i, n);
        },
        !0
      ),
      t
    );
  if (r.A !== e) return t;
  if (!r.P) return dl(e, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var o = r.i === 4 || r.i === 5 ? (r.o = ks(r.k)) : r.o;
    Xt(r.i === 3 ? new Set(o) : o, function (l, i) {
      return tc(e, r, o, l, i, n);
    }),
      dl(e, o, !1),
      n && e.u && Ke("Patches").R(r, n, e.u, e.s);
  }
  return r.o;
}
function tc(e, t, n, r, o, l) {
  if (Rt(o)) {
    var i = fl(e, o, l && t && t.i !== 3 && !Rn(t.D, r) ? l.concat(r) : void 0);
    if ((bd(n, r, i), !Rt(i))) return;
    e.m = !1;
  }
  if (Tt(o) && !Ps(o)) {
    if (!e.h.F && e._ < 1) return;
    fl(e, o), (t && t.A.l) || dl(e, o);
  }
}
function dl(e, t, n) {
  n === void 0 && (n = !1), e.h.F && e.m && Cs(t, n);
}
function yi(e, t) {
  var n = e[Q];
  return (n ? At(n) : e)[t];
}
function nc(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function ct(e) {
  e.P || ((e.P = !0), e.l && ct(e.l));
}
function wi(e) {
  e.o || (e.o = ks(e.t));
}
function hu(e, t, n) {
  var r = Es(t)
    ? Ke("MapSet").N(t, n)
    : xs(t)
    ? Ke("MapSet").T(t, n)
    : e.g
    ? (function (o, l) {
        var i = Array.isArray(o),
          u = {
            i: i ? 1 : 0,
            A: l ? l.A : mu(),
            P: !1,
            I: !1,
            D: {},
            l,
            t: o,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          s = u,
          a = Fr;
        i && ((s = [u]), (a = cr));
        var f = Proxy.revocable(s, a),
          y = f.revoke,
          p = f.proxy;
        return (u.k = p), (u.j = y), p;
      })(t, n)
    : Ke("ES5").J(t, n);
  return (n ? n.A : mu()).p.push(r), r;
}
function rh(e) {
  return (
    Rt(e) || Ae(22, e),
    (function t(n) {
      if (!Tt(n)) return n;
      var r,
        o = n[Q],
        l = Un(n);
      if (o) {
        if (!o.P && (o.i < 4 || !Ke("ES5").K(o))) return o.t;
        (o.I = !0), (r = rc(n, l)), (o.I = !1);
      } else r = rc(n, l);
      return (
        Xt(r, function (i, u) {
          (o && qv(o.t, i) === u) || bd(r, i, t(u));
        }),
        l === 3 ? new Set(r) : r
      );
    })(e)
  );
}
function rc(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return ks(e);
}
function oh() {
  function e(l, i) {
    var u = o[l];
    return (
      u
        ? (u.enumerable = i)
        : (o[l] = u =
            {
              configurable: !0,
              enumerable: i,
              get: function () {
                var s = this[Q];
                return Fr.get(s, l);
              },
              set: function (s) {
                var a = this[Q];
                Fr.set(a, l, s);
              },
            }),
      u
    );
  }
  function t(l) {
    for (var i = l.length - 1; i >= 0; i--) {
      var u = l[i][Q];
      if (!u.P)
        switch (u.i) {
          case 5:
            r(u) && ct(u);
            break;
          case 4:
            n(u) && ct(u);
        }
    }
  }
  function n(l) {
    for (var i = l.t, u = l.k, s = Tn(u), a = s.length - 1; a >= 0; a--) {
      var f = s[a];
      if (f !== Q) {
        var y = i[f];
        if (y === void 0 && !Rn(i, f)) return !0;
        var p = u[f],
          h = p && p[Q];
        if (h ? h.t !== y : !Bd(p, y)) return !0;
      }
    }
    var S = !!i[Q];
    return s.length !== Tn(i).length + (S ? 0 : 1);
  }
  function r(l) {
    var i = l.k;
    if (i.length !== l.t.length) return !0;
    var u = Object.getOwnPropertyDescriptor(i, i.length - 1);
    if (u && !u.get) return !0;
    for (var s = 0; s < i.length; s++) if (!i.hasOwnProperty(s)) return !0;
    return !1;
  }
  var o = {};
  th("ES5", {
    J: function (l, i) {
      var u = Array.isArray(l),
        s = (function (f, y) {
          if (f) {
            for (var p = Array(y.length), h = 0; h < y.length; h++)
              Object.defineProperty(p, "" + h, e(h, !0));
            return p;
          }
          var S = Wd(y);
          delete S[Q];
          for (var g = Tn(S), d = 0; d < g.length; d++) {
            var c = g[d];
            S[c] = e(c, f || !!S[c].enumerable);
          }
          return Object.create(Object.getPrototypeOf(y), S);
        })(u, l),
        a = {
          i: u ? 5 : 4,
          A: i ? i.A : mu(),
          P: !1,
          I: !1,
          D: {},
          l: i,
          t: l,
          k: s,
          o: null,
          O: !1,
          C: !1,
        };
      return Object.defineProperty(s, Q, { value: a, writable: !0 }), s;
    },
    S: function (l, i, u) {
      u
        ? Rt(i) && i[Q].A === l && t(l.p)
        : (l.u &&
            (function s(a) {
              if (a && typeof a == "object") {
                var f = a[Q];
                if (f) {
                  var y = f.t,
                    p = f.k,
                    h = f.D,
                    S = f.i;
                  if (S === 4)
                    Xt(p, function (w) {
                      w !== Q &&
                        (y[w] !== void 0 || Rn(y, w)
                          ? h[w] || s(p[w])
                          : ((h[w] = !0), ct(f)));
                    }),
                      Xt(y, function (w) {
                        p[w] !== void 0 || Rn(p, w) || ((h[w] = !1), ct(f));
                      });
                  else if (S === 5) {
                    if ((r(f) && (ct(f), (h.length = !0)), p.length < y.length))
                      for (var g = p.length; g < y.length; g++) h[g] = !1;
                    else for (var d = y.length; d < p.length; d++) h[d] = !0;
                    for (
                      var c = Math.min(p.length, y.length), m = 0;
                      m < c;
                      m++
                    )
                      p.hasOwnProperty(m) || (h[m] = !0),
                        h[m] === void 0 && s(p[m]);
                  }
                }
              }
            })(l.p[0]),
          t(l.p));
    },
    K: function (l) {
      return l.i === 4 ? n(l) : r(l);
    },
  });
}
var oc,
  zr,
  _s = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol",
  lh = typeof Map != "undefined",
  ih = typeof Set != "undefined",
  lc =
    typeof Proxy != "undefined" &&
    Proxy.revocable !== void 0 &&
    typeof Reflect != "undefined",
  Ud = _s
    ? Symbol.for("immer-nothing")
    : (((oc = {})["immer-nothing"] = !0), oc),
  ic = _s ? Symbol.for("immer-draftable") : "__$immer_draftable",
  Q = _s ? Symbol.for("immer-state") : "__$immer_state",
  uh = "" + Object.prototype.constructor,
  Tn =
    typeof Reflect != "undefined" && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  Wd =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        Tn(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  gu = {},
  Fr = {
    get: function (e, t) {
      if (t === Q) return e;
      var n = At(e);
      if (!Rn(n, t))
        return (function (o, l, i) {
          var u,
            s = nc(l, i);
          return s
            ? "value" in s
              ? s.value
              : (u = s.get) === null || u === void 0
              ? void 0
              : u.call(o.k)
            : void 0;
        })(e, n, t);
      var r = n[t];
      return e.I || !Tt(r)
        ? r
        : r === yi(e.t, t)
        ? (wi(e), (e.o[t] = hu(e.A.h, r, e)))
        : r;
    },
    has: function (e, t) {
      return t in At(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(At(e));
    },
    set: function (e, t, n) {
      var r = nc(At(e), t);
      if (r != null && r.set) return r.set.call(e.k, n), !0;
      if (!e.P) {
        var o = yi(At(e), t),
          l = o == null ? void 0 : o[Q];
        if (l && l.t === n) return (e.o[t] = n), (e.D[t] = !1), !0;
        if (Bd(n, o) && (n !== void 0 || Rn(e.t, t))) return !0;
        wi(e), ct(e);
      }
      return (
        (e.o[t] === n && typeof n != "number" && (n !== void 0 || t in e.o)) ||
        ((e.o[t] = n), (e.D[t] = !0), !0)
      );
    },
    deleteProperty: function (e, t) {
      return (
        yi(e.t, t) !== void 0 || t in e.t
          ? ((e.D[t] = !1), wi(e), ct(e))
          : delete e.D[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = At(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty: function () {
      Ae(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      Ae(12);
    },
  },
  cr = {};
Xt(Fr, function (e, t) {
  cr[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (cr.deleteProperty = function (e, t) {
    return cr.set.call(this, e, t, void 0);
  }),
  (cr.set = function (e, t, n) {
    return Fr.set.call(this, e[0], t, n, e[0]);
  });
var sh = (function () {
    function e(n) {
      var r = this;
      (this.g = lc),
        (this.F = !0),
        (this.produce = function (o, l, i) {
          if (typeof o == "function" && typeof l != "function") {
            var u = l;
            l = o;
            var s = r;
            return function (g) {
              var d = this;
              g === void 0 && (g = u);
              for (
                var c = arguments.length, m = Array(c > 1 ? c - 1 : 0), w = 1;
                w < c;
                w++
              )
                m[w - 1] = arguments[w];
              return s.produce(g, function (E) {
                var P;
                return (P = l).call.apply(P, [d, E].concat(m));
              });
            };
          }
          var a;
          if (
            (typeof l != "function" && Ae(6),
            i !== void 0 && typeof i != "function" && Ae(7),
            Tt(o))
          ) {
            var f = ec(r),
              y = hu(r, o, void 0),
              p = !0;
            try {
              (a = l(y)), (p = !1);
            } finally {
              p ? cl(f) : vu(f);
            }
            return typeof Promise != "undefined" && a instanceof Promise
              ? a.then(
                  function (g) {
                    return hi(f, i), gi(g, f);
                  },
                  function (g) {
                    throw (cl(f), g);
                  }
                )
              : (hi(f, i), gi(a, f));
          }
          if (!o || typeof o != "object") {
            if (
              ((a = l(o)) === void 0 && (a = o),
              a === Ud && (a = void 0),
              r.F && Cs(a, !0),
              i)
            ) {
              var h = [],
                S = [];
              Ke("Patches").M(o, a, h, S), i(h, S);
            }
            return a;
          }
          Ae(21, o);
        }),
        (this.produceWithPatches = function (o, l) {
          if (typeof o == "function")
            return function (a) {
              for (
                var f = arguments.length, y = Array(f > 1 ? f - 1 : 0), p = 1;
                p < f;
                p++
              )
                y[p - 1] = arguments[p];
              return r.produceWithPatches(a, function (h) {
                return o.apply(void 0, [h].concat(y));
              });
            };
          var i,
            u,
            s = r.produce(o, l, function (a, f) {
              (i = a), (u = f);
            });
          return typeof Promise != "undefined" && s instanceof Promise
            ? s.then(function (a) {
                return [a, i, u];
              })
            : [s, i, u];
        }),
        typeof (n == null ? void 0 : n.useProxies) == "boolean" &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == "boolean" &&
          this.setAutoFreeze(n.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (n) {
        Tt(n) || Ae(8), Rt(n) && (n = rh(n));
        var r = ec(this),
          o = hu(this, n, void 0);
        return (o[Q].C = !0), vu(r), o;
      }),
      (t.finishDraft = function (n, r) {
        var o = n && n[Q],
          l = o.A;
        return hi(l, r), gi(void 0, l);
      }),
      (t.setAutoFreeze = function (n) {
        this.F = n;
      }),
      (t.setUseProxies = function (n) {
        n && !lc && Ae(20), (this.g = n);
      }),
      (t.applyPatches = function (n, r) {
        var o;
        for (o = r.length - 1; o >= 0; o--) {
          var l = r[o];
          if (l.path.length === 0 && l.op === "replace") {
            n = l.value;
            break;
          }
        }
        o > -1 && (r = r.slice(o + 1));
        var i = Ke("Patches").$;
        return Rt(n)
          ? i(n, r)
          : this.produce(n, function (u) {
              return i(u, r);
            });
      }),
      e
    );
  })(),
  Pe = new sh(),
  ah = Pe.produce;
Pe.produceWithPatches.bind(Pe);
Pe.setAutoFreeze.bind(Pe);
Pe.setUseProxies.bind(Pe);
Pe.applyPatches.bind(Pe);
Pe.createDraft.bind(Pe);
Pe.finishDraft.bind(Pe);
var zo = ah;
function ch(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function uc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function sc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? uc(Object(n), !0).forEach(function (r) {
          ch(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : uc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function de(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var ac = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  Si = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  pl = {
    INIT: "@@redux/INIT" + Si(),
    REPLACE: "@@redux/REPLACE" + Si(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + Si();
    },
  };
function fh(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Vd(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(de(0));
  if (
    (typeof t == "function" &&
      typeof n == "undefined" &&
      ((n = t), (t = void 0)),
    typeof n != "undefined")
  ) {
    if (typeof n != "function") throw new Error(de(1));
    return n(Vd)(e, t);
  }
  if (typeof e != "function") throw new Error(de(2));
  var o = e,
    l = t,
    i = [],
    u = i,
    s = !1;
  function a() {
    u === i && (u = i.slice());
  }
  function f() {
    if (s) throw new Error(de(3));
    return l;
  }
  function y(g) {
    if (typeof g != "function") throw new Error(de(4));
    if (s) throw new Error(de(5));
    var d = !0;
    return (
      a(),
      u.push(g),
      function () {
        if (!!d) {
          if (s) throw new Error(de(6));
          (d = !1), a();
          var m = u.indexOf(g);
          u.splice(m, 1), (i = null);
        }
      }
    );
  }
  function p(g) {
    if (!fh(g)) throw new Error(de(7));
    if (typeof g.type == "undefined") throw new Error(de(8));
    if (s) throw new Error(de(9));
    try {
      (s = !0), (l = o(l, g));
    } finally {
      s = !1;
    }
    for (var d = (i = u), c = 0; c < d.length; c++) {
      var m = d[c];
      m();
    }
    return g;
  }
  function h(g) {
    if (typeof g != "function") throw new Error(de(10));
    (o = g), p({ type: pl.REPLACE });
  }
  function S() {
    var g,
      d = y;
    return (
      (g = {
        subscribe: function (m) {
          if (typeof m != "object" || m === null) throw new Error(de(11));
          function w() {
            m.next && m.next(f());
          }
          w();
          var E = d(w);
          return { unsubscribe: E };
        },
      }),
      (g[ac] = function () {
        return this;
      }),
      g
    );
  }
  return (
    p({ type: pl.INIT }),
    (r = { dispatch: p, subscribe: y, getState: f, replaceReducer: h }),
    (r[ac] = S),
    r
  );
}
function dh(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: pl.INIT });
    if (typeof r == "undefined") throw new Error(de(12));
    if (typeof n(void 0, { type: pl.PROBE_UNKNOWN_ACTION() }) == "undefined")
      throw new Error(de(13));
  });
}
function ph(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var o = t[r];
    typeof e[o] == "function" && (n[o] = e[o]);
  }
  var l = Object.keys(n),
    i;
  try {
    dh(n);
  } catch (u) {
    i = u;
  }
  return function (s, a) {
    if ((s === void 0 && (s = {}), i)) throw i;
    for (var f = !1, y = {}, p = 0; p < l.length; p++) {
      var h = l[p],
        S = n[h],
        g = s[h],
        d = S(g, a);
      if (typeof d == "undefined") throw (a && a.type, new Error(de(14)));
      (y[h] = d), (f = f || d !== g);
    }
    return (f = f || l.length !== Object.keys(s).length), f ? y : s;
  };
}
function ml() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, o) {
        return function () {
          return r(o.apply(void 0, arguments));
        };
      });
}
function mh() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var o = r.apply(void 0, arguments),
        l = function () {
          throw new Error(de(15));
        },
        i = {
          getState: o.getState,
          dispatch: function () {
            return l.apply(void 0, arguments);
          },
        },
        u = t.map(function (s) {
          return s(i);
        });
      return (
        (l = ml.apply(void 0, u)(o.dispatch)),
        sc(sc({}, o), {}, { dispatch: l })
      );
    };
  };
}
function Hd(e) {
  var t = function (r) {
    var o = r.dispatch,
      l = r.getState;
    return function (i) {
      return function (u) {
        return typeof u == "function" ? u(o, l, e) : i(u);
      };
    };
  };
  return t;
}
var Kd = Hd();
Kd.withExtraArgument = Hd;
var cc = Kd,
  vh =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, o) {
                r.__proto__ = o;
              }) ||
            function (r, o) {
              for (var l in o)
                Object.prototype.hasOwnProperty.call(o, l) && (r[l] = o[l]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != "function" && n !== null)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })();
globalThis && globalThis.__generator;
var vl =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
      return e;
    },
  hh = Object.defineProperty,
  fc = Object.getOwnPropertySymbols,
  gh = Object.prototype.hasOwnProperty,
  yh = Object.prototype.propertyIsEnumerable,
  dc = function (e, t, n) {
    return t in e
      ? hh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  br = function (e, t) {
    for (var n in t || (t = {})) gh.call(t, n) && dc(e, n, t[n]);
    if (fc)
      for (var r = 0, o = fc(t); r < o.length; r++) {
        var n = o[r];
        yh.call(t, n) && dc(e, n, t[n]);
      }
    return e;
  },
  wh =
    typeof window != "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? ml
              : ml.apply(null, arguments);
        };
function Sh(e) {
  if (typeof e != "object" || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
var Eh = (function (e) {
  vh(t, e);
  function t() {
    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
    var o = e.apply(this, n) || this;
    return Object.setPrototypeOf(o, t.prototype), o;
  }
  return (
    Object.defineProperty(t, Symbol.species, {
      get: function () {
        return t;
      },
      enumerable: !1,
      configurable: !0,
    }),
    (t.prototype.concat = function () {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      return e.prototype.concat.apply(this, n);
    }),
    (t.prototype.prepend = function () {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      return n.length === 1 && Array.isArray(n[0])
        ? new (t.bind.apply(t, vl([void 0], n[0].concat(this))))()
        : new (t.bind.apply(t, vl([void 0], n.concat(this))))();
    }),
    t
  );
})(Array);
function xh(e) {
  return typeof e == "boolean";
}
function kh() {
  return function (t) {
    return Ch(t);
  };
}
function Ch(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck;
  var r = new Eh();
  return (
    n && (xh(n) ? r.push(cc) : r.push(cc.withExtraArgument(n.extraArgument))), r
  );
}
var Ph = !0;
function Vy(e) {
  var t = kh(),
    n = e || {},
    r = n.reducer,
    o = r === void 0 ? void 0 : r,
    l = n.middleware,
    i = l === void 0 ? t() : l,
    u = n.devTools,
    s = u === void 0 ? !0 : u,
    a = n.preloadedState,
    f = a === void 0 ? void 0 : a,
    y = n.enhancers,
    p = y === void 0 ? void 0 : y,
    h;
  if (typeof o == "function") h = o;
  else if (Sh(o)) h = ph(o);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var S = i;
  typeof S == "function" && (S = S(t));
  var g = mh.apply(void 0, S),
    d = ml;
  s && (d = wh(br({ trace: !Ph }, typeof s == "object" && s)));
  var c = [g];
  Array.isArray(p) ? (c = vl([g], p)) : typeof p == "function" && (c = p(c));
  var m = d.apply(void 0, c);
  return Vd(h, f, m);
}
function Br(e, t) {
  function n() {
    for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
    if (t) {
      var l = t.apply(void 0, r);
      if (!l) throw new Error("prepareAction did not return an object");
      return br(
        br({ type: e, payload: l.payload }, "meta" in l && { meta: l.meta }),
        "error" in l && { error: l.error }
      );
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = function () {
      return "" + e;
    }),
    (n.type = e),
    (n.match = function (r) {
      return r.type === e;
    }),
    n
  );
}
function Qd(e) {
  var t = {},
    n = [],
    r,
    o = {
      addCase: function (l, i) {
        var u = typeof l == "string" ? l : l.type;
        if (u in t)
          throw new Error(
            "addCase cannot be called with two reducers for the same action type"
          );
        return (t[u] = i), o;
      },
      addMatcher: function (l, i) {
        return n.push({ matcher: l, reducer: i }), o;
      },
      addDefaultCase: function (l) {
        return (r = l), o;
      },
    };
  return e(o), [t, n, r];
}
function _h(e) {
  return typeof e == "function";
}
function Oh(e, t, n, r) {
  n === void 0 && (n = []);
  var o = typeof t == "function" ? Qd(t) : [t, n, r],
    l = o[0],
    i = o[1],
    u = o[2],
    s;
  if (_h(e))
    s = function () {
      return zo(e(), function () {});
    };
  else {
    var a = zo(e, function () {});
    s = function () {
      return a;
    };
  }
  function f(y, p) {
    y === void 0 && (y = s());
    var h = vl(
      [l[p.type]],
      i
        .filter(function (S) {
          var g = S.matcher;
          return g(p);
        })
        .map(function (S) {
          var g = S.reducer;
          return g;
        })
    );
    return (
      h.filter(function (S) {
        return !!S;
      }).length === 0 && (h = [u]),
      h.reduce(function (S, g) {
        if (g)
          if (Rt(S)) {
            var d = S,
              c = g(d, p);
            return typeof c == "undefined" ? S : c;
          } else {
            if (Tt(S))
              return zo(S, function (m) {
                return g(m, p);
              });
            var c = g(S, p);
            if (typeof c == "undefined") {
              if (S === null) return S;
              throw Error(
                "A case reducer on a non-draftable value must not return undefined"
              );
            }
            return c;
          }
        return S;
      }, y)
    );
  }
  return (f.getInitialState = s), f;
}
function Rh(e, t) {
  return e + "/" + t;
}
function Hy(e) {
  var t = e.name;
  if (!t) throw new Error("`name` is a required option for createSlice");
  var n =
      typeof e.initialState == "function"
        ? e.initialState
        : zo(e.initialState, function () {}),
    r = e.reducers || {},
    o = Object.keys(r),
    l = {},
    i = {},
    u = {};
  o.forEach(function (f) {
    var y = r[f],
      p = Rh(t, f),
      h,
      S;
    "reducer" in y ? ((h = y.reducer), (S = y.prepare)) : (h = y),
      (l[f] = h),
      (i[p] = h),
      (u[f] = S ? Br(p, S) : Br(p));
  });
  function s() {
    var f =
        typeof e.extraReducers == "function"
          ? Qd(e.extraReducers)
          : [e.extraReducers],
      y = f[0],
      p = y === void 0 ? {} : y,
      h = f[1],
      S = h === void 0 ? [] : h,
      g = f[2],
      d = g === void 0 ? void 0 : g,
      c = br(br({}, p), i);
    return Oh(n, c, S, d);
  }
  var a;
  return {
    name: t,
    reducer: function (f, y) {
      return a || (a = s()), a(f, y);
    },
    actions: u,
    caseReducers: l,
    getInitialState: function () {
      return a || (a = s()), a.getInitialState();
    },
  };
}
var Os = "listenerMiddleware";
Br(Os + "/add");
Br(Os + "/removeAll");
Br(Os + "/remove");
oh();
function Yd(...e) {
  return (t) =>
    e.forEach((n) =>
      (function (r, o) {
        typeof r == "function" ? r(o) : r != null && (r.current = o);
      })(n, t)
    );
}
function it(...e) {
  return v.exports.useCallback(Yd(...e), e);
}
const Rs = v.exports.forwardRef((e, t) => {
  const o = e,
    { children: n } = o,
    r = A(o, ["children"]);
  return v.exports.Children.toArray(n).some(pc)
    ? v.exports.createElement(
        v.exports.Fragment,
        null,
        v.exports.Children.map(n, (l) =>
          pc(l)
            ? v.exports.createElement(
                yu,
                F({}, r, { ref: t }),
                l.props.children
              )
            : l
        )
      )
    : v.exports.createElement(yu, F({}, r, { ref: t }), n);
});
Rs.displayName = "Slot";
const yu = v.exports.forwardRef((e, t) => {
  const o = e,
    { children: n } = o,
    r = A(o, ["children"]);
  return v.exports.isValidElement(n)
    ? v.exports.cloneElement(
        n,
        Hn(ee({}, Th(r, n.props)), { ref: Yd(t, n.ref) })
      )
    : v.exports.Children.count(n) > 1
    ? v.exports.Children.only(null)
    : null;
});
yu.displayName = "SlotClone";
const Xd = ({ children: e }) =>
  v.exports.createElement(v.exports.Fragment, null, e);
function pc(e) {
  return v.exports.isValidElement(e) && e.type === Xd;
}
function Th(e, t) {
  const n = ee({}, t);
  for (const r in t) {
    const o = e[r],
      l = t[r];
    /^on[A-Z]/.test(r)
      ? (n[r] = (...i) => {
          l == null || l(...i), o == null || o(...i);
        })
      : r === "style"
      ? (n[r] = ee(ee({}, o), l))
      : r === "className" && (n[r] = [o, l].filter(Boolean).join(" "));
  }
  return ee(ee({}, e), n);
}
const Re = [
    "a",
    "button",
    "div",
    "h2",
    "h3",
    "img",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ].reduce(
    (e, t) =>
      Hn(ee({}, e), {
        [t]: v.exports.forwardRef((n, r) => {
          const u = n,
            { asChild: o } = u,
            l = A(u, ["asChild"]),
            i = o ? Rs : t;
          return (
            v.exports.useEffect(() => {
              window[Symbol.for("radix-ui")] = !0;
            }, []),
            v.exports.createElement(i, F({}, l, { ref: r }))
          );
        }),
      }),
    {}
  ),
  $h = v.exports.forwardRef((e, t) =>
    v.exports.createElement(
      Re.span,
      F({}, e, {
        ref: t,
        style: ee(
          {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
          },
          e.style
        ),
      })
    )
  ),
  Ur = Boolean(globalThis == null ? void 0 : globalThis.document)
    ? v.exports.useLayoutEffect
    : () => {};
function rt(e) {
  const t = v.exports.useRef(e);
  return (
    v.exports.useEffect(() => {
      t.current = e;
    }),
    v.exports.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) === null || r === void 0
            ? void 0
            : r.call(t, ...n);
        },
      []
    )
  );
}
function Gd({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = (function ({ defaultProp: s, onChange: a }) {
      const f = v.exports.useState(s),
        [y] = f,
        p = v.exports.useRef(y),
        h = rt(a);
      return (
        v.exports.useEffect(() => {
          p.current !== y && (h(y), (p.current = y));
        }, [y, p, h]),
        f
      );
    })({ defaultProp: t, onChange: n }),
    l = e !== void 0,
    i = l ? e : r,
    u = rt(n);
  return [
    i,
    v.exports.useCallback(
      (s) => {
        if (l) {
          const a = s,
            f = typeof s == "function" ? a(e) : s;
          f !== e && u(f);
        } else o(s);
      },
      [l, e, o, u]
    ),
  ];
}
const lo = (e) => {
  const { present: t, children: n } = e,
    r = (function (i) {
      const [u, s] = v.exports.useState(),
        a = v.exports.useRef({}),
        f = v.exports.useRef(i),
        y = v.exports.useRef("none"),
        p = i ? "mounted" : "unmounted",
        [h, S] = (function (g, d) {
          return v.exports.useReducer((c, m) => {
            const w = d[c][m];
            return w != null ? w : c;
          }, g);
        })(p, {
          mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
          unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
          unmounted: { MOUNT: "mounted" },
        });
      return (
        v.exports.useEffect(() => {
          const g = So(a.current);
          y.current = h === "mounted" ? g : "none";
        }, [h]),
        Ur(() => {
          const g = a.current,
            d = f.current;
          if (d !== i) {
            const c = y.current,
              m = So(g);
            i
              ? S("MOUNT")
              : m === "none" || (g == null ? void 0 : g.display) === "none"
              ? S("UNMOUNT")
              : S(d && c !== m ? "ANIMATION_OUT" : "UNMOUNT"),
              (f.current = i);
          }
        }, [i, S]),
        Ur(() => {
          if (u) {
            const g = (c) => {
                const m = So(a.current).includes(c.animationName);
                c.target === u && m && S("ANIMATION_END");
              },
              d = (c) => {
                c.target === u && (y.current = So(a.current));
              };
            return (
              u.addEventListener("animationstart", d),
              u.addEventListener("animationcancel", g),
              u.addEventListener("animationend", g),
              () => {
                u.removeEventListener("animationstart", d),
                  u.removeEventListener("animationcancel", g),
                  u.removeEventListener("animationend", g);
              }
            );
          }
          S("ANIMATION_END");
        }, [u, S]),
        {
          isPresent: ["mounted", "unmountSuspended"].includes(h),
          ref: v.exports.useCallback((g) => {
            g && (a.current = getComputedStyle(g)), s(g);
          }, []),
        }
      );
    })(t),
    o =
      typeof n == "function"
        ? n({ present: r.isPresent })
        : v.exports.Children.only(n),
    l = it(r.ref, o.ref);
  return typeof n == "function" || r.isPresent
    ? v.exports.cloneElement(o, { ref: l })
    : null;
};
function So(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
lo.displayName = "Presence";
const Zd = v.exports.forwardRef((e, t) => {
  var n;
  const l = e,
    {
      container: r = globalThis == null ||
      (n = globalThis.document) === null ||
      n === void 0
        ? void 0
        : n.body,
    } = l,
    o = A(l, ["container"]);
  return r
    ? Ev.createPortal(v.exports.createElement(Re.div, F({}, o, { ref: t })), r)
    : null;
});
function Nh(e) {
  const t = rt(e);
  v.exports.useEffect(() => {
    const n = (r) => {
      r.key === "Escape" && t(r);
    };
    return (
      document.addEventListener("keydown", n),
      () => document.removeEventListener("keydown", n)
    );
  }, [t]);
}
let mc,
  Eo = 0;
function Dh({ disabled: e }) {
  const t = v.exports.useRef(!1);
  Ur(() => {
    if (e) {
      let n = function () {
          Eo--, Eo === 0 && (document.body.style.pointerEvents = mc);
        },
        r = function (o) {
          t.current = o.pointerType !== "mouse";
        };
      return (
        Eo === 0 && (mc = document.body.style.pointerEvents),
        (document.body.style.pointerEvents = "none"),
        Eo++,
        document.addEventListener("pointerup", r),
        () => {
          t.current ? document.addEventListener("click", n, { once: !0 }) : n(),
            document.removeEventListener("pointerup", r);
        }
      );
    }
  }, [e]);
}
function ne(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (r) {
    if ((e == null || e(r), n === !1 || !r.defaultPrevented))
      return t == null ? void 0 : t(r);
  };
}
const Jd = v.exports.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  qd = v.exports.forwardRef((e, t) => {
    const x = e,
      {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: l,
        onInteractOutside: i,
        onDismiss: u,
      } = x,
      s = A(x, [
        "disableOutsidePointerEvents",
        "onEscapeKeyDown",
        "onPointerDownOutside",
        "onFocusOutside",
        "onInteractOutside",
        "onDismiss",
      ]),
      a = v.exports.useContext(Jd),
      [f, y] = v.exports.useState(null),
      [, p] = v.exports.useState({}),
      h = it(t, (k) => y(k)),
      S = Array.from(a.layers),
      [g] = [...a.layersWithOutsidePointerEventsDisabled].slice(-1),
      d = S.indexOf(g),
      c = f ? S.indexOf(f) : -1,
      m = a.layersWithOutsidePointerEventsDisabled.size > 0,
      w = c >= d,
      E = (function (k) {
        const O = rt(k),
          _ = v.exports.useRef(!1);
        return (
          v.exports.useEffect(() => {
            const I = (M) => {
                M.target &&
                  !_.current &&
                  hc("dismissableLayer.pointerDownOutside", O, {
                    originalEvent: M,
                  }),
                  (_.current = !1);
              },
              N = window.setTimeout(() => {
                document.addEventListener("pointerdown", I);
              }, 0);
            return () => {
              window.clearTimeout(N),
                document.removeEventListener("pointerdown", I);
            };
          }, [O]),
          { onPointerDownCapture: () => (_.current = !0) }
        );
      })((k) => {
        const O = k.target,
          _ = [...a.branches].some((I) => I.contains(O));
        w &&
          !_ &&
          (o == null || o(k),
          i == null || i(k),
          k.defaultPrevented || u == null || u());
      }),
      P = (function (k) {
        const O = rt(k),
          _ = v.exports.useRef(!1);
        return (
          v.exports.useEffect(() => {
            const I = (N) => {
              N.target &&
                !_.current &&
                hc("dismissableLayer.focusOutside", O, { originalEvent: N });
            };
            return (
              document.addEventListener("focusin", I),
              () => document.removeEventListener("focusin", I)
            );
          }, [O]),
          {
            onFocusCapture: () => (_.current = !0),
            onBlurCapture: () => (_.current = !1),
          }
        );
      })((k) => {
        const O = k.target;
        [...a.branches].some((_) => _.contains(O)) ||
          (l == null || l(k),
          i == null || i(k),
          k.defaultPrevented || u == null || u());
      });
    return (
      Nh((k) => {
        c === a.layers.size - 1 &&
          (r == null || r(k), k.defaultPrevented || u == null || u());
      }),
      Dh({ disabled: n }),
      v.exports.useEffect(() => {
        f &&
          (n && a.layersWithOutsidePointerEventsDisabled.add(f),
          a.layers.add(f),
          vc());
      }, [f, n, a]),
      v.exports.useEffect(
        () => () => {
          f &&
            (a.layers.delete(f),
            a.layersWithOutsidePointerEventsDisabled.delete(f),
            vc());
        },
        [f, a]
      ),
      v.exports.useEffect(() => {
        const k = () => p({});
        return (
          document.addEventListener("dismissableLayer.update", k),
          () => document.removeEventListener("dismissableLayer.update", k)
        );
      }, []),
      v.exports.createElement(
        Re.div,
        F({}, s, {
          ref: h,
          style: ee(
            { pointerEvents: m ? (w ? "auto" : "none") : void 0 },
            e.style
          ),
          onFocusCapture: ne(e.onFocusCapture, P.onFocusCapture),
          onBlurCapture: ne(e.onBlurCapture, P.onBlurCapture),
          onPointerDownCapture: ne(
            e.onPointerDownCapture,
            E.onPointerDownCapture
          ),
        })
      )
    );
  }),
  Lh = v.exports.forwardRef((e, t) => {
    const n = v.exports.useContext(Jd),
      r = v.exports.useRef(null),
      o = it(t, r);
    return (
      v.exports.useEffect(() => {
        const l = r.current;
        if (l)
          return (
            n.branches.add(l),
            () => {
              n.branches.delete(l);
            }
          );
      }, [n.branches]),
      v.exports.createElement(Re.div, F({}, e, { ref: o }))
    );
  });
function vc() {
  const e = new Event("dismissableLayer.update");
  document.dispatchEvent(e);
}
function hc(e, t, n) {
  const r = n.originalEvent.target,
    o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  return t && r.addEventListener(e, t, { once: !0 }), !r.dispatchEvent(o);
}
const Mh = qd,
  Ih = Lh;
function jh(e, t) {
  const n = v.exports.createContext(t);
  function r(o) {
    const s = o,
      { children: l } = s,
      i = A(s, ["children"]),
      u = v.exports.useMemo(() => i, Object.values(i));
    return v.exports.createElement(n.Provider, { value: u }, l);
  }
  return (
    (r.displayName = e + "Provider"),
    [
      r,
      function (o) {
        const l = v.exports.useContext(n);
        if (l) return l;
        if (t !== void 0) return t;
        throw new Error(`\`${o}\` must be used within \`${e}\``);
      },
    ]
  );
}
function Ts(e, t = []) {
  let n = [];
  const r = () => {
    const o = n.map((l) => v.exports.createContext(l));
    return function (l) {
      const i = (l == null ? void 0 : l[e]) || o;
      return v.exports.useMemo(
        () => ({ [`__scope${e}`]: Hn(ee({}, l), { [e]: i }) }),
        [l, i]
      );
    };
  };
  return (
    (r.scopeName = e),
    [
      function (o, l) {
        const i = v.exports.createContext(l),
          u = n.length;
        function s(a) {
          const g = a,
            { scope: f, children: y } = g,
            p = A(g, ["scope", "children"]),
            h = (f == null ? void 0 : f[e][u]) || i,
            S = v.exports.useMemo(() => p, Object.values(p));
          return v.exports.createElement(h.Provider, { value: S }, y);
        }
        return (
          (n = [...n, l]),
          (s.displayName = o + "Provider"),
          [
            s,
            function (a, f) {
              const y = (f == null ? void 0 : f[e][u]) || i,
                p = v.exports.useContext(y);
              if (p) return p;
              if (l !== void 0) return l;
              throw new Error(`\`${a}\` must be used within \`${o}\``);
            },
          ]
        );
      },
      Ah(r, ...t),
    ]
  );
}
function Ah(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (o) {
      const l = r.reduce(
        (i, { useScope: u, scopeName: s }) =>
          ee(ee({}, i), u(o)[`__scope${s}`]),
        {}
      );
      return v.exports.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
const [ep, Ky] = Ts("Toast"),
  [zh, $s] = ep("ToastProvider"),
  Fh = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: l = 50,
        children: i,
      } = e,
      [u, s] = v.exports.useState(null),
      [a, f] = v.exports.useState(0),
      y = v.exports.useRef(!1),
      p = v.exports.useRef(!1);
    return v.exports.createElement(
      zh,
      {
        scope: t,
        label: n,
        duration: r,
        swipeDirection: o,
        swipeThreshold: l,
        toastCount: a,
        viewport: u,
        onViewportChange: s,
        onToastAdd: v.exports.useCallback(() => f((h) => h + 1), []),
        onToastRemove: v.exports.useCallback(() => f((h) => h - 1), []),
        isFocusedToastEscapeKeyDownRef: y,
        isClosePausedRef: p,
      },
      i
    );
  },
  bh = ["F8"],
  Bh = v.exports.forwardRef((e, t) => {
    const y = e,
      {
        __scopeToast: n,
        hotkey: r = bh,
        label: o = "Notifications ({hotkey})",
      } = y,
      l = A(y, ["__scopeToast", "hotkey", "label"]),
      i = $s("ToastViewport", n),
      u = v.exports.useRef(null),
      s = v.exports.useRef(null),
      a = it(t, s, i.onViewportChange),
      f = r.join("+").replace(/Key/g, "").replace(/Digit/g, "");
    return (
      v.exports.useEffect(() => {
        const p = (h) => {
          var S;
          r.every((g) => h[g] || h.code === g) &&
            ((S = s.current) === null || S === void 0 || S.focus());
        };
        return (
          document.addEventListener("keydown", p),
          () => document.removeEventListener("keydown", p)
        );
      }, [r]),
      v.exports.useEffect(() => {
        const p = u.current,
          h = s.current;
        if (p && h) {
          const S = () => {
              const d = new Event("toast.viewportPause");
              h.dispatchEvent(d), (i.isClosePausedRef.current = !0);
            },
            g = () => {
              const d = new Event("toast.viewportResume");
              h.dispatchEvent(d), (i.isClosePausedRef.current = !1);
            };
          return (
            p.addEventListener("focusin", S),
            p.addEventListener("focusout", g),
            p.addEventListener("pointerenter", S),
            p.addEventListener("pointerleave", g),
            window.addEventListener("blur", S),
            window.addEventListener("focus", g),
            () => {
              p.removeEventListener("focusin", S),
                p.removeEventListener("focusout", g),
                p.removeEventListener("pointerenter", S),
                p.removeEventListener("pointerleave", g),
                window.removeEventListener("blur", S),
                window.removeEventListener("focus", g);
            }
          );
        }
      }, [i.isClosePausedRef]),
      v.exports.useEffect(() => {
        const p = s.current;
        if (p) {
          let h = [];
          const S = new MutationObserver((g) => {
            const [d] = g;
            d.addedNodes.forEach((c) => {
              h.includes(c) || (p.prepend(c), (h = [...h, c]));
            });
          });
          return S.observe(p, { childList: !0 }), () => S.disconnect();
        }
      }, []),
      v.exports.createElement(
        Ih,
        {
          ref: u,
          role: "region",
          "aria-label": o.replace("{hotkey}", f),
          tabIndex: -1,
          style: { pointerEvents: i.toastCount > 0 ? void 0 : "none" },
        },
        v.exports.createElement(Re.ol, F({ tabIndex: -1 }, l, { ref: a }))
      )
    );
  }),
  Uh = v.exports.forwardRef((e, t) => {
    const a = e,
      { forceMount: n, open: r, defaultOpen: o, onOpenChange: l } = a,
      i = A(a, ["forceMount", "open", "defaultOpen", "onOpenChange"]),
      [u = !0, s] = Gd({ prop: r, defaultProp: o, onChange: l });
    return v.exports.createElement(
      lo,
      { present: n || u },
      v.exports.createElement(
        np,
        F({ open: u }, i, {
          ref: t,
          onClose: () => s(!1),
          onSwipeStart: ne(e.onSwipeStart, (f) => {
            f.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: ne(e.onSwipeMove, (f) => {
            const { x: y, y: p } = f.detail.delta;
            f.currentTarget.setAttribute("data-swipe", "move"),
              f.currentTarget.style.setProperty(
                "--radix-toast-swipe-move-x",
                `${y}px`
              ),
              f.currentTarget.style.setProperty(
                "--radix-toast-swipe-move-y",
                `${p}px`
              );
          }),
          onSwipeCancel: ne(e.onSwipeCancel, (f) => {
            f.currentTarget.setAttribute("data-swipe", "cancel"),
              f.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-x"
              ),
              f.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-y"
              ),
              f.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
              f.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: ne(e.onSwipeEnd, (f) => {
            const { x: y, y: p } = f.detail.delta;
            f.currentTarget.setAttribute("data-swipe", "end"),
              f.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-x"
              ),
              f.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-y"
              ),
              f.currentTarget.style.setProperty(
                "--radix-toast-swipe-end-x",
                `${y}px`
              ),
              f.currentTarget.style.setProperty(
                "--radix-toast-swipe-end-y",
                `${p}px`
              ),
              s(!1);
          }),
        })
      )
    );
  }),
  [Wh, tp] = ep("Toast", { isInteractive: !1, onClose() {} }),
  np = v.exports.forwardRef((e, t) => {
    const I = e,
      {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: l,
        onClose: i,
        onEscapeKeyDown: u,
        onSwipeStart: s,
        onSwipeMove: a,
        onSwipeCancel: f,
        onSwipeEnd: y,
      } = I,
      p = A(I, [
        "__scopeToast",
        "type",
        "duration",
        "open",
        "onClose",
        "onEscapeKeyDown",
        "onSwipeStart",
        "onSwipeMove",
        "onSwipeCancel",
        "onSwipeEnd",
      ]),
      h = $s("Toast", n),
      S = v.exports.useRef(null),
      g = it(t, S),
      d = v.exports.useRef(null),
      c = v.exports.useRef(null),
      m = o || h.duration,
      w = v.exports.useRef(0),
      E = v.exports.useRef(m),
      P = v.exports.useRef(0),
      { onToastAdd: x, onToastRemove: k } = h,
      O = rt(() => {
        var N, M;
        !((N = S.current) === null || N === void 0) &&
          N.contains(document.activeElement) &&
          ((M = h.viewport) === null || M === void 0 || M.focus()),
          i();
      }),
      _ = v.exports.useCallback(
        (N) => {
          N &&
            N !== 1 / 0 &&
            (window.clearTimeout(P.current),
            (w.current = new Date().getTime()),
            (P.current = window.setTimeout(O, N)));
        },
        [O]
      );
    return (
      v.exports.useEffect(() => {
        const N = h.viewport;
        if (N) {
          const M = () => {
              _(E.current);
            },
            b = () => {
              const fe = new Date().getTime() - w.current;
              (E.current = E.current - fe), window.clearTimeout(P.current);
            };
          return (
            N.addEventListener("toast.viewportPause", b),
            N.addEventListener("toast.viewportResume", M),
            () => {
              N.removeEventListener("toast.viewportPause", b),
                N.removeEventListener("toast.viewportResume", M);
            }
          );
        }
      }, [h.viewport, m, _]),
      v.exports.useEffect(() => {
        l && !h.isClosePausedRef.current && _(m);
      }, [l, m, h.isClosePausedRef, _]),
      v.exports.useEffect(() => (x(), () => k()), [x, k]),
      h.viewport
        ? v.exports.createElement(
            v.exports.Fragment,
            null,
            v.exports.createElement(
              Vh,
              {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
              },
              e.children
            ),
            v.exports.createElement(
              Wh,
              { scope: n, isInteractive: !0, onClose: O },
              gl.exports.createPortal(
                v.exports.createElement(
                  Mh,
                  {
                    asChild: !0,
                    onEscapeKeyDown: ne(u, () => {
                      h.isFocusedToastEscapeKeyDownRef.current || O(),
                        (h.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                  },
                  v.exports.createElement(
                    Re.li,
                    F(
                      {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": l ? "open" : "closed",
                        "data-swipe-direction": h.swipeDirection,
                      },
                      p,
                      {
                        ref: g,
                        style: ee(
                          { userSelect: "none", touchAction: "none" },
                          e.style
                        ),
                        onKeyDown: ne(e.onKeyDown, (N) => {
                          N.key === "Escape" &&
                            (u == null || u(N.nativeEvent),
                            N.nativeEvent.defaultPrevented ||
                              ((h.isFocusedToastEscapeKeyDownRef.current = !0),
                              O()));
                        }),
                        onPointerDown: ne(e.onPointerDown, (N) => {
                          N.button === 0 &&
                            (d.current = { x: N.clientX, y: N.clientY });
                        }),
                        onPointerMove: ne(e.onPointerMove, (N) => {
                          if (!d.current) return;
                          const M = N.clientX - d.current.x,
                            b = N.clientY - d.current.y,
                            fe = Boolean(c.current),
                            le = ["left", "right"].includes(h.swipeDirection),
                            be = ["left", "up"].includes(h.swipeDirection)
                              ? Math.min
                              : Math.max,
                            Xe = le ? be(0, M) : 0,
                            Ge = le ? 0 : be(0, b),
                            Dt = N.pointerType === "touch" ? 10 : 2,
                            tn = { x: Xe, y: Ge },
                            R = { originalEvent: N, delta: tn };
                          fe
                            ? ((c.current = tn), xo("toast.swipeMove", a, R))
                            : gc(tn, h.swipeDirection, Dt)
                            ? ((c.current = tn),
                              xo("toast.swipeStart", s, R),
                              N.target.setPointerCapture(N.pointerId))
                            : (Math.abs(M) > Dt || Math.abs(b) > Dt) &&
                              (d.current = null);
                        }),
                        onPointerUp: ne(e.onPointerUp, (N) => {
                          const M = c.current;
                          if (
                            (N.target.releasePointerCapture(N.pointerId),
                            (c.current = null),
                            (d.current = null),
                            M)
                          ) {
                            const b = N.currentTarget,
                              fe = { originalEvent: N, delta: M };
                            gc(M, h.swipeDirection, h.swipeThreshold)
                              ? xo("toast.swipeEnd", y, fe)
                              : xo("toast.swipeCancel", f, fe),
                              b.addEventListener(
                                "click",
                                (le) => le.preventDefault(),
                                { once: !0 }
                              );
                          }
                        }),
                      }
                    )
                  )
                ),
                h.viewport
              )
            )
          )
        : null
    );
  });
np.propTypes = {
  type(e) {
    if (e.type && !["foreground", "background"].includes(e.type))
      throw new Error(
        "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`."
      );
    return null;
  },
};
const Vh = (e) => {
    const s = e,
      { __scopeToast: t } = s,
      n = A(s, ["__scopeToast"]),
      r = $s("Toast", t),
      [o, l] = v.exports.useState(!1),
      [i, u] = v.exports.useState(!1);
    return (
      (function (a = () => {}) {
        const f = rt(a);
        Ur(() => {
          let y = 0,
            p = 0;
          return (
            (y = window.requestAnimationFrame(
              () => (p = window.requestAnimationFrame(f))
            )),
            () => {
              window.cancelAnimationFrame(y), window.cancelAnimationFrame(p);
            }
          );
        }, [f]);
      })(() => l(!0)),
      v.exports.useEffect(() => {
        const a = window.setTimeout(() => u(!0), 1e3);
        return () => window.clearTimeout(a);
      }, []),
      i
        ? null
        : v.exports.createElement(
            Zd,
            { asChild: !0 },
            v.exports.createElement(
              $h,
              { asChild: !0 },
              v.exports.createElement(
                "div",
                n,
                o &&
                  v.exports.createElement(
                    v.exports.Fragment,
                    null,
                    r.label,
                    " ",
                    e.children
                  )
              )
            )
          )
    );
  },
  Hh = v.exports.forwardRef((e, t) => {
    const o = e,
      { __scopeToast: n } = o,
      r = A(o, ["__scopeToast"]);
    return v.exports.createElement(Re.div, F({}, r, { ref: t }));
  }),
  Kh = v.exports.forwardRef((e, t) => {
    const l = e,
      { altText: n } = l,
      r = A(l, ["altText"]),
      o = tp("ToastAction", e.__scopeToast);
    return n
      ? o.isInteractive
        ? v.exports.createElement(Qh, F({}, r, { ref: t }))
        : v.exports.createElement("span", null, n)
      : null;
  });
Kh.propTypes = {
  altText(e) {
    if (!e.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    return null;
  },
};
const Qh = v.exports.forwardRef((e, t) => {
  const l = e,
    { __scopeToast: n } = l,
    r = A(l, ["__scopeToast"]),
    o = tp("ToastClose", n);
  return o.isInteractive
    ? v.exports.createElement(
        Re.button,
        F({ type: "button" }, r, { ref: t, onClick: ne(e.onClick, o.onClose) })
      )
    : null;
});
function xo(e, t, n) {
  const r = n.originalEvent.currentTarget,
    o = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(o);
}
const gc = (e, t, n = 0) => {
    const r = Math.abs(e.x),
      o = Math.abs(e.y),
      l = r > o;
    return t === "left" || t === "right" ? l && r > n : !l && o > n;
  },
  Qy = Fh,
  Yy = Bh,
  Xy = Uh,
  Gy = Hh,
  Zy = {
    grass1: "hsl(116, 50.0%, 98.9%)",
    grass2: "hsl(120, 60.0%, 97.1%)",
    grass3: "hsl(120, 53.6%, 94.8%)",
    grass4: "hsl(121, 47.5%, 91.4%)",
    grass5: "hsl(122, 42.6%, 86.5%)",
    grass6: "hsl(124, 39.0%, 79.7%)",
    grass7: "hsl(126, 37.1%, 70.2%)",
    grass8: "hsl(131, 38.1%, 56.3%)",
    grass9: "hsl(131, 41.0%, 46.5%)",
    grass10: "hsl(132, 43.1%, 42.2%)",
    grass11: "hsl(133, 50.0%, 32.5%)",
    grass12: "hsl(130, 30.0%, 14.9%)",
  },
  Jy = {
    gray1: "hsl(0, 0%, 99.0%)",
    gray2: "hsl(0, 0%, 97.3%)",
    gray3: "hsl(0, 0%, 95.1%)",
    gray4: "hsl(0, 0%, 93.0%)",
    gray5: "hsl(0, 0%, 90.9%)",
    gray6: "hsl(0, 0%, 88.7%)",
    gray7: "hsl(0, 0%, 85.8%)",
    gray8: "hsl(0, 0%, 78.0%)",
    gray9: "hsl(0, 0%, 56.1%)",
    gray10: "hsl(0, 0%, 52.3%)",
    gray11: "hsl(0, 0%, 43.5%)",
    gray12: "hsl(0, 0%, 9.0%)",
  },
  qy = {
    orange1: "hsl(24, 70.0%, 99.0%)",
    orange2: "hsl(24, 83.3%, 97.6%)",
    orange3: "hsl(24, 100%, 95.3%)",
    orange4: "hsl(25, 100%, 92.2%)",
    orange5: "hsl(25, 100%, 88.2%)",
    orange6: "hsl(25, 100%, 82.8%)",
    orange7: "hsl(24, 100%, 75.3%)",
    orange8: "hsl(24, 94.5%, 64.3%)",
    orange9: "hsl(24, 94.0%, 50.0%)",
    orange10: "hsl(24, 100%, 46.5%)",
    orange11: "hsl(24, 100%, 37.0%)",
    orange12: "hsl(15, 60.0%, 17.0%)",
  },
  e0 = {
    tomato1: "hsl(10, 100%, 99.4%)",
    tomato2: "hsl(8, 100%, 98.4%)",
    tomato3: "hsl(8, 100%, 96.6%)",
    tomato4: "hsl(8, 100%, 94.3%)",
    tomato5: "hsl(8, 92.8%, 91.0%)",
    tomato6: "hsl(9, 84.7%, 86.3%)",
    tomato7: "hsl(10, 77.3%, 79.5%)",
    tomato8: "hsl(10, 71.6%, 71.0%)",
    tomato9: "hsl(10, 78.0%, 54.0%)",
    tomato10: "hsl(10, 71.5%, 50.0%)",
    tomato11: "hsl(10, 82.0%, 43.5%)",
    tomato12: "hsl(10, 50.0%, 13.5%)",
  },
  t0 = {
    whiteA1: "hsla(0, 0%, 100%, 0)",
    whiteA2: "hsla(0, 0%, 100%, 0.013)",
    whiteA3: "hsla(0, 0%, 100%, 0.034)",
    whiteA4: "hsla(0, 0%, 100%, 0.056)",
    whiteA5: "hsla(0, 0%, 100%, 0.086)",
    whiteA6: "hsla(0, 0%, 100%, 0.124)",
    whiteA7: "hsla(0, 0%, 100%, 0.176)",
    whiteA8: "hsla(0, 0%, 100%, 0.249)",
    whiteA9: "hsla(0, 0%, 100%, 0.386)",
    whiteA10: "hsla(0, 0%, 100%, 0.446)",
    whiteA11: "hsla(0, 0%, 100%, 0.592)",
    whiteA12: "hsla(0, 0%, 100%, 0.923)",
  };
var U = "colors",
  ge = "sizes",
  T = "space",
  Yh = {
    gap: T,
    gridGap: T,
    columnGap: T,
    gridColumnGap: T,
    rowGap: T,
    gridRowGap: T,
    inset: T,
    insetBlock: T,
    insetBlockEnd: T,
    insetBlockStart: T,
    insetInline: T,
    insetInlineEnd: T,
    insetInlineStart: T,
    margin: T,
    marginTop: T,
    marginRight: T,
    marginBottom: T,
    marginLeft: T,
    marginBlock: T,
    marginBlockEnd: T,
    marginBlockStart: T,
    marginInline: T,
    marginInlineEnd: T,
    marginInlineStart: T,
    padding: T,
    paddingTop: T,
    paddingRight: T,
    paddingBottom: T,
    paddingLeft: T,
    paddingBlock: T,
    paddingBlockEnd: T,
    paddingBlockStart: T,
    paddingInline: T,
    paddingInlineEnd: T,
    paddingInlineStart: T,
    top: T,
    right: T,
    bottom: T,
    left: T,
    scrollMargin: T,
    scrollMarginTop: T,
    scrollMarginRight: T,
    scrollMarginBottom: T,
    scrollMarginLeft: T,
    scrollMarginX: T,
    scrollMarginY: T,
    scrollMarginBlock: T,
    scrollMarginBlockEnd: T,
    scrollMarginBlockStart: T,
    scrollMarginInline: T,
    scrollMarginInlineEnd: T,
    scrollMarginInlineStart: T,
    scrollPadding: T,
    scrollPaddingTop: T,
    scrollPaddingRight: T,
    scrollPaddingBottom: T,
    scrollPaddingLeft: T,
    scrollPaddingX: T,
    scrollPaddingY: T,
    scrollPaddingBlock: T,
    scrollPaddingBlockEnd: T,
    scrollPaddingBlockStart: T,
    scrollPaddingInline: T,
    scrollPaddingInlineEnd: T,
    scrollPaddingInlineStart: T,
    fontSize: "fontSizes",
    background: U,
    backgroundColor: U,
    backgroundImage: U,
    borderImage: U,
    border: U,
    borderBlock: U,
    borderBlockEnd: U,
    borderBlockStart: U,
    borderBottom: U,
    borderBottomColor: U,
    borderColor: U,
    borderInline: U,
    borderInlineEnd: U,
    borderInlineStart: U,
    borderLeft: U,
    borderLeftColor: U,
    borderRight: U,
    borderRightColor: U,
    borderTop: U,
    borderTopColor: U,
    caretColor: U,
    color: U,
    columnRuleColor: U,
    fill: U,
    outline: U,
    outlineColor: U,
    stroke: U,
    textDecorationColor: U,
    fontFamily: "fonts",
    fontWeight: "fontWeights",
    lineHeight: "lineHeights",
    letterSpacing: "letterSpacings",
    blockSize: ge,
    minBlockSize: ge,
    maxBlockSize: ge,
    inlineSize: ge,
    minInlineSize: ge,
    maxInlineSize: ge,
    width: ge,
    minWidth: ge,
    maxWidth: ge,
    height: ge,
    minHeight: ge,
    maxHeight: ge,
    flexBasis: ge,
    gridTemplateColumns: ge,
    gridTemplateRows: ge,
    borderWidth: "borderWidths",
    borderTopWidth: "borderWidths",
    borderRightWidth: "borderWidths",
    borderBottomWidth: "borderWidths",
    borderLeftWidth: "borderWidths",
    borderStyle: "borderStyles",
    borderTopStyle: "borderStyles",
    borderRightStyle: "borderStyles",
    borderBottomStyle: "borderStyles",
    borderLeftStyle: "borderStyles",
    borderRadius: "radii",
    borderTopLeftRadius: "radii",
    borderTopRightRadius: "radii",
    borderBottomRightRadius: "radii",
    borderBottomLeftRadius: "radii",
    boxShadow: "shadows",
    textShadow: "shadows",
    transition: "transitions",
    zIndex: "zIndices",
  },
  Xh = (e, t) =>
    typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t,
  Wn = () => {
    const e = Object.create(null);
    return (t, n, ...r) => {
      const o = ((l) => JSON.stringify(l, Xh))(t);
      return o in e ? e[o] : (e[o] = n(t, ...r));
    };
  },
  Vt = Symbol.for("sxs.internal"),
  Ns = (e, t) =>
    Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)),
  yc = (e) => {
    for (const t in e) return !0;
    return !1;
  },
  { hasOwnProperty: Gh } = Object.prototype,
  wu = (e) =>
    e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()),
  Zh = /\s+(?![^()]*\))/,
  on = (e) => (t) => e(...(typeof t == "string" ? String(t).split(Zh) : [t])),
  wc = {
    appearance: (e) => ({ WebkitAppearance: e, appearance: e }),
    backfaceVisibility: (e) => ({
      WebkitBackfaceVisibility: e,
      backfaceVisibility: e,
    }),
    backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }),
    backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }),
    boxDecorationBreak: (e) => ({
      WebkitBoxDecorationBreak: e,
      boxDecorationBreak: e,
    }),
    clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }),
    content: (e) => ({
      content:
        e.includes('"') ||
        e.includes("'") ||
        /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(
          e
        )
          ? e
          : `"${e}"`,
    }),
    hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }),
    maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }),
    maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }),
    tabSize: (e) => ({ MozTabSize: e, tabSize: e }),
    textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }),
    userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }),
    marginBlock: on((e, t) => ({
      marginBlockStart: e,
      marginBlockEnd: t || e,
    })),
    marginInline: on((e, t) => ({
      marginInlineStart: e,
      marginInlineEnd: t || e,
    })),
    maxSize: on((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })),
    minSize: on((e, t) => ({ minBlockSize: e, minInlineSize: t || e })),
    paddingBlock: on((e, t) => ({
      paddingBlockStart: e,
      paddingBlockEnd: t || e,
    })),
    paddingInline: on((e, t) => ({
      paddingInlineStart: e,
      paddingInlineEnd: t || e,
    })),
  },
  Ei = /([\d.]+)([^]*)/,
  Jh = (e, t) =>
    e.length
      ? e.reduce(
          (n, r) => (
            n.push(
              ...t.map((o) =>
                o.includes("&")
                  ? o.replace(
                      /&/g,
                      /[ +>|~]/.test(r) && /&.*&/.test(o) ? `:is(${r})` : r
                    )
                  : r + " " + o
              )
            ),
            n
          ),
          []
        )
      : t,
  qh = (e, t) =>
    e in eg && typeof t == "string"
      ? t.replace(
          /^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,
          (n, r, o, l) =>
            r +
            (o === "stretch"
              ? `-moz-available${l};${wu(e)}:${r}-webkit-fill-available`
              : `-moz-fit-content${l};${wu(e)}:${r}fit-content`) +
            l
        )
      : String(t),
  eg = {
    blockSize: 1,
    height: 1,
    inlineSize: 1,
    maxBlockSize: 1,
    maxHeight: 1,
    maxInlineSize: 1,
    maxWidth: 1,
    minBlockSize: 1,
    minHeight: 1,
    minInlineSize: 1,
    minWidth: 1,
    width: 1,
  },
  ot = (e) => (e ? e + "-" : ""),
  rp = (e, t, n) =>
    e.replace(
      /([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,
      (r, o, l, i, u) =>
        (i == "$") == !!l
          ? r
          : (o || i == "--" ? "calc(" : "") +
            "var(--" +
            (i === "$"
              ? ot(t) + (u.includes("$") ? "" : ot(n)) + u.replace(/\$/g, "-")
              : u) +
            ")" +
            (o || i == "--" ? "*" + (o || "") + (l || "1") + ")" : "")
    ),
  tg = /\s*,\s*(?![^()]*\))/,
  ng = Object.prototype.toString,
  gn = (e, t, n, r, o) => {
    let l, i, u;
    const s = (a, f, y) => {
      let p, h;
      const S = (g) => {
        for (p in g) {
          const m = p.charCodeAt(0) === 64,
            w = m && Array.isArray(g[p]) ? g[p] : [g[p]];
          for (h of w) {
            const E = /[A-Z]/.test((c = p))
                ? c
                : c.replace(/-[^]/g, (x) => x[1].toUpperCase()),
              P =
                typeof h == "object" &&
                h &&
                h.toString === ng &&
                (!r.utils[E] || !f.length);
            if (E in r.utils && !P) {
              const x = r.utils[E];
              if (x !== i) {
                (i = x), S(x(h)), (i = null);
                continue;
              }
            } else if (E in wc) {
              const x = wc[E];
              if (x !== u) {
                (u = x), S(x(h)), (u = null);
                continue;
              }
            }
            if (
              (m &&
                ((d =
                  p.slice(1) in r.media ? "@media " + r.media[p.slice(1)] : p),
                (p = d.replace(
                  /\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,
                  (x, k, O, _, I, N) => {
                    const M = Ei.test(k),
                      b = 0.0625 * (M ? -1 : 1),
                      [fe, le] = M ? [_, k] : [k, _];
                    return (
                      "(" +
                      (O[0] === "="
                        ? ""
                        : (O[0] === ">") === M
                        ? "max-"
                        : "min-") +
                      fe +
                      ":" +
                      (O[0] !== "=" && O.length === 1
                        ? le.replace(
                            Ei,
                            (be, Xe, Ge) =>
                              Number(Xe) + b * (O === ">" ? 1 : -1) + Ge
                          )
                        : le) +
                      (I
                        ? ") and (" +
                          (I[0] === ">" ? "min-" : "max-") +
                          fe +
                          ":" +
                          (I.length === 1
                            ? N.replace(
                                Ei,
                                (be, Xe, Ge) =>
                                  Number(Xe) + b * (I === ">" ? -1 : 1) + Ge
                              )
                            : N)
                        : "") +
                      ")"
                    );
                  }
                ))),
              P)
            ) {
              const x = m ? y.concat(p) : [...y],
                k = m ? [...f] : Jh(f, p.split(tg));
              l !== void 0 && o(Sc(...l)), (l = void 0), s(h, k, x);
            } else
              l === void 0 && (l = [[], f, y]),
                (p =
                  m || p.charCodeAt(0) !== 36
                    ? p
                    : `--${ot(r.prefix)}${p.slice(1).replace(/\$/g, "-")}`),
                (h = P
                  ? h
                  : typeof h == "number"
                  ? h && E in rg
                    ? String(h) + "px"
                    : String(h)
                  : rp(qh(E, h == null ? "" : h), r.prefix, r.themeMap[E])),
                l[0].push(`${m ? `${p} ` : `${wu(p)}:`}${h}`);
          }
        }
        var d, c;
      };
      S(a), l !== void 0 && o(Sc(...l)), (l = void 0);
    };
    s(e, t, n);
  },
  Sc = (e, t, n) =>
    `${n.map((r) => `${r}{`).join("")}${
      t.length ? `${t.join(",")}{` : ""
    }${e.join(";")}${t.length ? "}" : ""}${Array(
      n.length ? n.length + 1 : 0
    ).join("}")}`,
  rg = {
    animationDelay: 1,
    animationDuration: 1,
    backgroundSize: 1,
    blockSize: 1,
    border: 1,
    borderBlock: 1,
    borderBlockEnd: 1,
    borderBlockEndWidth: 1,
    borderBlockStart: 1,
    borderBlockStartWidth: 1,
    borderBlockWidth: 1,
    borderBottom: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    borderBottomWidth: 1,
    borderEndEndRadius: 1,
    borderEndStartRadius: 1,
    borderInlineEnd: 1,
    borderInlineEndWidth: 1,
    borderInlineStart: 1,
    borderInlineStartWidth: 1,
    borderInlineWidth: 1,
    borderLeft: 1,
    borderLeftWidth: 1,
    borderRadius: 1,
    borderRight: 1,
    borderRightWidth: 1,
    borderSpacing: 1,
    borderStartEndRadius: 1,
    borderStartStartRadius: 1,
    borderTop: 1,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderTopWidth: 1,
    borderWidth: 1,
    bottom: 1,
    columnGap: 1,
    columnRule: 1,
    columnRuleWidth: 1,
    columnWidth: 1,
    containIntrinsicSize: 1,
    flexBasis: 1,
    fontSize: 1,
    gap: 1,
    gridAutoColumns: 1,
    gridAutoRows: 1,
    gridTemplateColumns: 1,
    gridTemplateRows: 1,
    height: 1,
    inlineSize: 1,
    inset: 1,
    insetBlock: 1,
    insetBlockEnd: 1,
    insetBlockStart: 1,
    insetInline: 1,
    insetInlineEnd: 1,
    insetInlineStart: 1,
    left: 1,
    letterSpacing: 1,
    margin: 1,
    marginBlock: 1,
    marginBlockEnd: 1,
    marginBlockStart: 1,
    marginBottom: 1,
    marginInline: 1,
    marginInlineEnd: 1,
    marginInlineStart: 1,
    marginLeft: 1,
    marginRight: 1,
    marginTop: 1,
    maxBlockSize: 1,
    maxHeight: 1,
    maxInlineSize: 1,
    maxWidth: 1,
    minBlockSize: 1,
    minHeight: 1,
    minInlineSize: 1,
    minWidth: 1,
    offsetDistance: 1,
    offsetRotate: 1,
    outline: 1,
    outlineOffset: 1,
    outlineWidth: 1,
    overflowClipMargin: 1,
    padding: 1,
    paddingBlock: 1,
    paddingBlockEnd: 1,
    paddingBlockStart: 1,
    paddingBottom: 1,
    paddingInline: 1,
    paddingInlineEnd: 1,
    paddingInlineStart: 1,
    paddingLeft: 1,
    paddingRight: 1,
    paddingTop: 1,
    perspective: 1,
    right: 1,
    rowGap: 1,
    scrollMargin: 1,
    scrollMarginBlock: 1,
    scrollMarginBlockEnd: 1,
    scrollMarginBlockStart: 1,
    scrollMarginBottom: 1,
    scrollMarginInline: 1,
    scrollMarginInlineEnd: 1,
    scrollMarginInlineStart: 1,
    scrollMarginLeft: 1,
    scrollMarginRight: 1,
    scrollMarginTop: 1,
    scrollPadding: 1,
    scrollPaddingBlock: 1,
    scrollPaddingBlockEnd: 1,
    scrollPaddingBlockStart: 1,
    scrollPaddingBottom: 1,
    scrollPaddingInline: 1,
    scrollPaddingInlineEnd: 1,
    scrollPaddingInlineStart: 1,
    scrollPaddingLeft: 1,
    scrollPaddingRight: 1,
    scrollPaddingTop: 1,
    shapeMargin: 1,
    textDecoration: 1,
    textDecorationThickness: 1,
    textIndent: 1,
    textUnderlineOffset: 1,
    top: 1,
    transitionDelay: 1,
    transitionDuration: 1,
    verticalAlign: 1,
    width: 1,
    wordSpacing: 1,
  },
  Ec = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)),
  Ht = (e) =>
    ((t) => {
      let n,
        r = "";
      for (n = Math.abs(t); n > 52; n = (n / 52) | 0) r = Ec(n % 52) + r;
      return Ec(n % 52) + r;
    })(
      ((t, n) => {
        let r = n.length;
        for (; r; ) t = (33 * t) ^ n.charCodeAt(--r);
        return t;
      })(5381, JSON.stringify(e)) >>> 0
    ),
  fr = [
    "themed",
    "global",
    "styled",
    "onevar",
    "resonevar",
    "allvar",
    "inline",
  ],
  og = (e) => {
    if (e.href && !e.href.startsWith(location.origin)) return !1;
    try {
      return !!e.cssRules;
    } catch {
      return !1;
    }
  },
  lg = (e) => {
    let t;
    const n = () => {
        const { cssRules: o } = t.sheet;
        return [].map
          .call(o, (l, i) => {
            const { cssText: u } = l;
            let s = "";
            if (u.startsWith("--sxs")) return "";
            if (o[i - 1] && (s = o[i - 1].cssText).startsWith("--sxs")) {
              if (!l.cssRules.length) return "";
              for (const a in t.rules)
                if (t.rules[a].group === l)
                  return `--sxs{--sxs:${[...t.rules[a].cache].join(" ")}}${u}`;
              return l.cssRules.length ? `${s}${u}` : "";
            }
            return u;
          })
          .join("");
      },
      r = () => {
        if (t) {
          const { rules: u, sheet: s } = t;
          if (!s.deleteRule) {
            for (; Object(Object(s.cssRules)[0]).type === 3; )
              s.cssRules.splice(0, 1);
            s.cssRules = [];
          }
          for (const a in u) delete u[a];
        }
        const o = Object(e).styleSheets || [];
        for (const u of o)
          if (og(u)) {
            for (let s = 0, a = u.cssRules; a[s]; ++s) {
              const f = Object(a[s]);
              if (f.type !== 1) continue;
              const y = Object(a[s + 1]);
              if (y.type !== 4) continue;
              ++s;
              const { cssText: p } = f;
              if (!p.startsWith("--sxs")) continue;
              const h = p.slice(14, -3).trim().split(/\s+/),
                S = fr[h[0]];
              S &&
                (t || (t = { sheet: u, reset: r, rules: {}, toString: n }),
                (t.rules[S] = { group: y, index: s, cache: new Set(h) }));
            }
            if (t) break;
          }
        if (!t) {
          const u = (s, a) => ({
            type: a,
            cssRules: [],
            insertRule(f, y) {
              this.cssRules.splice(
                y,
                0,
                u(
                  f,
                  { import: 3, undefined: 1 }[
                    (f.toLowerCase().match(/^@([a-z]+)/) || [])[1]
                  ] || 4
                )
              );
            },
            get cssText() {
              return s === "@media{}"
                ? `@media{${[].map
                    .call(this.cssRules, (f) => f.cssText)
                    .join("")}}`
                : s;
            },
          });
          t = {
            sheet: e
              ? (e.head || e).appendChild(document.createElement("style")).sheet
              : u("", "text/css"),
            rules: {},
            reset: r,
            toString: n,
          };
        }
        const { sheet: l, rules: i } = t;
        for (let u = fr.length - 1; u >= 0; --u) {
          const s = fr[u];
          if (!i[s]) {
            const a = fr[u + 1],
              f = i[a] ? i[a].index : l.cssRules.length;
            l.insertRule("@media{}", f),
              l.insertRule(`--sxs{--sxs:${u}}`, f),
              (i[s] = {
                group: l.cssRules[f + 1],
                index: f,
                cache: new Set([u]),
              });
          }
          ig(i[s]);
        }
      };
    return r(), t;
  },
  ig = (e) => {
    const t = e.group;
    let n = t.cssRules.length;
    e.apply = (r) => {
      try {
        t.insertRule(r, n), ++n;
      } catch {}
    };
  },
  or = Symbol(),
  ug = Wn(),
  xc = (e, t) =>
    ug(e, () => (...n) => {
      let r = { type: null, composers: new Set() };
      for (const o of n)
        if (o != null)
          if (o[Vt]) {
            r.type == null && (r.type = o[Vt].type);
            for (const l of o[Vt].composers) r.composers.add(l);
          } else
            o.constructor !== Object || o.$$typeof
              ? r.type == null && (r.type = o)
              : r.composers.add(sg(o, e));
      return (
        r.type == null && (r.type = "span"),
        r.composers.size || r.composers.add(["PJLV", {}, [], [], {}, []]),
        ag(e, r, t)
      );
    }),
  sg = (l, o) => {
    var i = l,
      { variants: e, compoundVariants: t, defaultVariants: n } = i,
      r = A(i, ["variants", "compoundVariants", "defaultVariants"]);
    const u = `${ot(o.prefix)}c-${Ht(r)}`,
      s = [],
      a = [],
      f = Object.create(null),
      y = [];
    for (const g in n) f[g] = String(n[g]);
    if (typeof e == "object" && e)
      for (const g in e) {
        (p = f), (h = g), Gh.call(p, h) || (f[g] = "undefined");
        const d = e[g];
        for (const c in d) {
          const m = { [g]: String(c) };
          String(c) === "undefined" && y.push(g);
          const w = d[c],
            E = [m, w, !yc(w)];
          s.push(E);
        }
      }
    var p, h;
    if (typeof t == "object" && t)
      for (const g of t) {
        let S = g,
          { css: d } = S,
          c = A(S, ["css"]);
        d = (typeof d == "object" && d) || {};
        for (const w in c) c[w] = String(c[w]);
        const m = [c, d, !yc(d)];
        a.push(m);
      }
    return [u, r, s, a, f, y];
  },
  ag = (e, t, n) => {
    const [r, o, l, i] = cg(t.composers),
      u =
        typeof t.type == "function" || t.type.$$typeof
          ? ((y) => {
              function p() {
                for (let h = 0; h < p[or].length; h++) {
                  const [S, g] = p[or][h];
                  y.rules[S].apply(g);
                }
                return (p[or] = []), null;
              }
              return (
                (p[or] = []),
                (p.rules = {}),
                fr.forEach(
                  (h) => (p.rules[h] = { apply: (S) => p[or].push([h, S]) })
                ),
                p
              );
            })(n)
          : null,
      s = (u || n).rules,
      a = `.${r}${o.length > 1 ? `:where(.${o.slice(1).join(".")})` : ""}`,
      f = (y) => {
        y = (typeof y == "object" && y) || fg;
        const c = y,
          { css: p } = c,
          h = A(c, ["css"]),
          S = {};
        for (const m in l)
          if ((delete h[m], m in y)) {
            let w = y[m];
            typeof w == "object" && w
              ? (S[m] = ee({ "@initial": l[m] }, w))
              : ((w = String(w)),
                (S[m] = w !== "undefined" || i.has(m) ? w : l[m]));
          } else S[m] = l[m];
        const g = new Set([...o]);
        for (const [m, w, E, P] of t.composers) {
          n.rules.styled.cache.has(m) ||
            (n.rules.styled.cache.add(m),
            gn(w, [`.${m}`], [], e, (O) => {
              s.styled.apply(O);
            }));
          const x = kc(E, S, e.media),
            k = kc(P, S, e.media, !0);
          for (const O of x)
            if (O !== void 0)
              for (const [_, I, N] of O) {
                const M = `${m}-${Ht(I)}-${_}`;
                g.add(M);
                const b = (N ? n.rules.resonevar : n.rules.onevar).cache,
                  fe = N ? s.resonevar : s.onevar;
                b.has(M) ||
                  (b.add(M),
                  gn(I, [`.${M}`], [], e, (le) => {
                    fe.apply(le);
                  }));
              }
          for (const O of k)
            if (O !== void 0)
              for (const [_, I] of O) {
                const N = `${m}-${Ht(I)}-${_}`;
                g.add(N),
                  n.rules.allvar.cache.has(N) ||
                    (n.rules.allvar.cache.add(N),
                    gn(I, [`.${N}`], [], e, (M) => {
                      s.allvar.apply(M);
                    }));
              }
        }
        if (typeof p == "object" && p) {
          const m = `${r}-i${Ht(p)}-css`;
          g.add(m),
            n.rules.inline.cache.has(m) ||
              (n.rules.inline.cache.add(m),
              gn(p, [`.${m}`], [], e, (w) => {
                s.inline.apply(w);
              }));
        }
        for (const m of String(y.className || "")
          .trim()
          .split(/\s+/))
          m && g.add(m);
        const d = (h.className = [...g].join(" "));
        return {
          type: t.type,
          className: d,
          selector: a,
          props: h,
          toString: () => d,
          deferredInjector: u,
        };
      };
    return Ns(f, {
      className: r,
      selector: a,
      [Vt]: t,
      toString: () => (n.rules.styled.cache.has(r) || f(), r),
    });
  },
  cg = (e) => {
    let t = "";
    const n = [],
      r = {},
      o = [];
    for (const [l, , , , i, u] of e) {
      t === "" && (t = l), n.push(l), o.push(...u);
      for (const s in i) {
        const a = i[s];
        (r[s] === void 0 || a !== "undefined" || u.includes(a)) && (r[s] = a);
      }
    }
    return [t, n, r, new Set(o)];
  },
  kc = (e, t, n, r) => {
    const o = [];
    e: for (let [l, i, u] of e) {
      if (u) continue;
      let s,
        a = 0,
        f = !1;
      for (s in l) {
        const y = l[s];
        let p = t[s];
        if (p !== y) {
          if (typeof p != "object" || !p) continue e;
          {
            let h,
              S,
              g = 0;
            for (const d in p) {
              if (y === String(p[d])) {
                if (d !== "@initial") {
                  const c = d.slice(1);
                  (S = S || []).push(
                    c in n ? n[c] : d.replace(/^@media ?/, "")
                  ),
                    (f = !0);
                }
                (a += g), (h = !0);
              }
              ++g;
            }
            if ((S && S.length && (i = { ["@media " + S.join(", ")]: i }), !h))
              continue e;
          }
        }
      }
      (o[a] = o[a] || []).push([r ? "cv" : `${s}-${l[s]}`, i, f]);
    }
    return o;
  },
  fg = {},
  dg = Wn(),
  pg = (e, t) =>
    dg(e, () => (...n) => {
      const r = () => {
        for (let o of n) {
          o = (typeof o == "object" && o) || {};
          let l = Ht(o);
          if (!t.rules.global.cache.has(l)) {
            if ((t.rules.global.cache.add(l), "@import" in o)) {
              let i =
                [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
              for (let u of [].concat(o["@import"]))
                (u = u.includes('"') || u.includes("'") ? u : `"${u}"`),
                  t.sheet.insertRule(`@import ${u};`, i++);
              delete o["@import"];
            }
            gn(o, [], [], e, (i) => {
              t.rules.global.apply(i);
            });
          }
        }
        return "";
      };
      return Ns(r, { toString: r });
    }),
  mg = Wn(),
  vg = (e, t) =>
    mg(e, () => (n) => {
      const r = `${ot(e.prefix)}k-${Ht(n)}`,
        o = () => {
          if (!t.rules.global.cache.has(r)) {
            t.rules.global.cache.add(r);
            const l = [];
            gn(n, [], [], e, (u) => l.push(u));
            const i = `@keyframes ${r}{${l.join("")}}`;
            t.rules.global.apply(i);
          }
          return r;
        };
      return Ns(o, {
        get name() {
          return o();
        },
        toString: o,
      });
    }),
  hg = class {
    constructor(e, t, n, r) {
      (this.token = e == null ? "" : String(e)),
        (this.value = t == null ? "" : String(t)),
        (this.scale = n == null ? "" : String(n)),
        (this.prefix = r == null ? "" : String(r));
    }
    get computedValue() {
      return "var(" + this.variable + ")";
    }
    get variable() {
      return "--" + ot(this.prefix) + ot(this.scale) + this.token;
    }
    toString() {
      return this.computedValue;
    }
  },
  gg = Wn(),
  yg = (e, t) =>
    gg(e, () => (n, r) => {
      r = (typeof n == "object" && n) || Object(r);
      const o = `.${(n =
          (n = typeof n == "string" ? n : "") || `${ot(e.prefix)}t-${Ht(r)}`)}`,
        l = {},
        i = [];
      for (const s in r) {
        l[s] = {};
        for (const a in r[s]) {
          const f = `--${ot(e.prefix)}${s}-${a}`,
            y = rp(String(r[s][a]), e.prefix, s);
          (l[s][a] = new hg(a, y, s, e.prefix)), i.push(`${f}:${y}`);
        }
      }
      const u = () => {
        if (i.length && !t.rules.themed.cache.has(n)) {
          t.rules.themed.cache.add(n);
          const s = `${r === e.theme ? ":root," : ""}.${n}{${i.join(";")}}`;
          t.rules.themed.apply(s);
        }
        return n;
      };
      return Hn(ee({}, l), {
        get className() {
          return u();
        },
        selector: o,
        toString: u,
      });
    }),
  wg = Wn(),
  Sg = Wn(),
  n0 = (e) => {
    const t = ((n) => {
      let r = !1;
      const o = wg(n, (l) => {
        r = !0;
        const i =
            "prefix" in (l = (typeof l == "object" && l) || {})
              ? String(l.prefix)
              : "",
          u = (typeof l.media == "object" && l.media) || {},
          s =
            typeof l.root == "object"
              ? l.root || null
              : globalThis.document || null,
          a = (typeof l.theme == "object" && l.theme) || {},
          f = {
            prefix: i,
            media: u,
            theme: a,
            themeMap:
              (typeof l.themeMap == "object" && l.themeMap) || ee({}, Yh),
            utils: (typeof l.utils == "object" && l.utils) || {},
          },
          y = lg(s),
          p = {
            css: xc(f, y),
            globalCss: pg(f, y),
            keyframes: vg(f, y),
            createTheme: yg(f, y),
            reset() {
              y.reset(), p.theme.toString();
            },
            theme: {},
            sheet: y,
            config: f,
            prefix: i,
            getCssText: y.toString,
            toString: y.toString,
          };
        return String((p.theme = p.createTheme(a))), p;
      });
      return r || o.reset(), o;
    })(e);
    return (
      (t.styled = (({ config: n, sheet: r }) =>
        Sg(n, () => {
          const o = xc(n, r);
          return (...l) => {
            const i = o(...l),
              u = i[Vt].type,
              s = ut.forwardRef((a, f) => {
                const y = (a && a.as) || u,
                  { props: p, deferredInjector: h } = i(a);
                return (
                  delete p.as,
                  (p.ref = f),
                  h
                    ? ut.createElement(
                        ut.Fragment,
                        null,
                        ut.createElement(y, p),
                        ut.createElement(h, null)
                      )
                    : ut.createElement(y, p)
                );
              });
            return (
              (s.className = i.className),
              (s.displayName = `Styled.${u.displayName || u.name || u}`),
              (s.selector = i.selector),
              (s.toString = () => i.selector),
              (s[Vt] = i[Vt]),
              s
            );
          };
        }))(t)),
      t
    );
  },
  Eg = function (e) {
    if (typeof document == "undefined") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  ln = new WeakMap(),
  ko = new WeakMap(),
  Co = {},
  xi = 0,
  xg = function (e, t, n) {
    t === void 0 && (t = Eg(e)), n === void 0 && (n = "data-aria-hidden");
    var r = Array.isArray(e) ? e : [e];
    Co[n] || (Co[n] = new WeakMap());
    var o = Co[n],
      l = [],
      i = new Set(),
      u = function (a) {
        !a || i.has(a) || (i.add(a), u(a.parentNode));
      };
    r.forEach(u);
    var s = function (a) {
      !a ||
        r.indexOf(a) >= 0 ||
        Array.prototype.forEach.call(a.children, function (f) {
          if (i.has(f)) s(f);
          else {
            var y = f.getAttribute("aria-hidden"),
              p = y !== null && y !== "false",
              h = (ln.get(f) || 0) + 1,
              S = (o.get(f) || 0) + 1;
            ln.set(f, h),
              o.set(f, S),
              l.push(f),
              h === 1 && p && ko.set(f, !0),
              S === 1 && f.setAttribute(n, "true"),
              p || f.setAttribute("aria-hidden", "true");
          }
        });
    };
    return (
      s(t),
      i.clear(),
      xi++,
      function () {
        l.forEach(function (a) {
          var f = ln.get(a) - 1,
            y = o.get(a) - 1;
          ln.set(a, f),
            o.set(a, y),
            f || (ko.has(a) || a.removeAttribute("aria-hidden"), ko.delete(a)),
            y || a.removeAttribute(n);
        }),
          xi--,
          xi ||
            ((ln = new WeakMap()),
            (ln = new WeakMap()),
            (ko = new WeakMap()),
            (Co = {}));
      }
    );
  };
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var $n =
  function () {
    return (
      ($n =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var l in n)
              Object.prototype.hasOwnProperty.call(n, l) && (t[l] = n[l]);
          }
          return t;
        }),
      $n.apply(this, arguments)
    );
  };
function kg(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
var Fo = "right-scroll-bar-position",
  bo = "width-before-scroll-bar",
  Cg = "with-scroll-bars-hidden",
  Pg = "--removed-body-scroll-bar-size";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var hl =
  function () {
    return (
      (hl =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var l in n)
              Object.prototype.hasOwnProperty.call(n, l) && (t[l] = n[l]);
          }
          return t;
        }),
      hl.apply(this, arguments)
    );
  };
function _g(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function Og(e) {
  return e;
}
function Rg(e, t) {
  t === void 0 && (t = Og);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (l) {
        var i = t(l, r);
        return (
          n.push(i),
          function () {
            n = n.filter(function (u) {
              return u !== i;
            });
          }
        );
      },
      assignSyncMedium: function (l) {
        for (r = !0; n.length; ) {
          var i = n;
          (n = []), i.forEach(l);
        }
        n = {
          push: function (u) {
            return l(u);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (l) {
        r = !0;
        var i = [];
        if (n.length) {
          var u = n;
          (n = []), u.forEach(l), (i = n);
        }
        var s = function () {
            var f = i;
            (i = []), f.forEach(l);
          },
          a = function () {
            return Promise.resolve().then(s);
          };
        a(),
          (n = {
            push: function (f) {
              i.push(f), a();
            },
            filter: function (f) {
              return (i = i.filter(f)), n;
            },
          });
      },
    };
  return o;
}
function Tg(e) {
  e === void 0 && (e = {});
  var t = Rg(null);
  return (t.options = hl({ async: !0, ssr: !1 }, e)), t;
}
var op = function (e) {
  var t = e.sideCar,
    n = _g(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return v.exports.createElement(r, hl({}, n));
};
op.isSideCarExport = !0;
function $g(e, t) {
  return e.useMedium(t), op;
}
var lp = Tg();
function Ng(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Dg(e, t) {
  var n = v.exports.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
function Lg(e, t) {
  return Dg(t, function (n) {
    return e.forEach(function (r) {
      return Ng(r, n);
    });
  });
}
var ki = function () {},
  Hl = v.exports.forwardRef(function (e, t) {
    var n = v.exports.useRef(null),
      r = v.exports.useState({
        onScrollCapture: ki,
        onWheelCapture: ki,
        onTouchMoveCapture: ki,
      }),
      o = r[0],
      l = r[1],
      i = e.forwardProps,
      u = e.children,
      s = e.className,
      a = e.removeScrollBar,
      f = e.enabled,
      y = e.shards,
      p = e.sideCar,
      h = e.noIsolation,
      S = e.inert,
      g = e.allowPinchZoom,
      d = e.as,
      c = d === void 0 ? "div" : d,
      m = kg(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
      ]),
      w = p,
      E = Lg([n, t]),
      P = $n({}, m, o);
    return v.exports.createElement(
      v.exports.Fragment,
      null,
      f &&
        v.exports.createElement(w, {
          sideCar: lp,
          removeScrollBar: a,
          shards: y,
          noIsolation: h,
          inert: S,
          setCallbacks: l,
          allowPinchZoom: !!g,
          lockRef: n,
        }),
      i
        ? v.exports.cloneElement(
            v.exports.Children.only(u),
            $n({}, P, { ref: E })
          )
        : v.exports.createElement(c, $n({}, P, { className: s, ref: E }), u)
    );
  });
Hl.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Hl.classNames = { fullWidth: bo, zeroRight: Fo };
var Mg = function () {
  if (typeof __webpack_nonce__ != "undefined") return __webpack_nonce__;
};
function Ig() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Mg();
  return t && e.setAttribute("nonce", t), e;
}
function jg(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function Ag(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var zg = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = Ig()) && (jg(t, n), Ag(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  Fg = function () {
    var e = zg();
    return function (t) {
      v.exports.useEffect(function () {
        return (
          e.add(t),
          function () {
            e.remove();
          }
        );
      }, []);
    };
  },
  ip = function () {
    var e = Fg(),
      t = function (n) {
        var r = n.styles;
        return e(r), null;
      };
    return t;
  },
  bg = { left: 0, top: 0, right: 0, gap: 0 },
  Ci = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  Bg = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Ci(n), Ci(r), Ci(o)];
  },
  Cc = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window == "undefined"))
      return bg;
    var t = Bg(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  Ug = ip(),
  Wg = function (e, t, n, r) {
    var o = e.left,
      l = e.top,
      i = e.right,
      u = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .` +
        Cg +
        ` {
   overflow: hidden ` +
        r +
        `;
   padding-right: ` +
        u +
        "px " +
        r +
        `;
  }
  body {
    overflow: hidden ` +
        r +
        `;
    ` +
        [
          t && "position: relative " + r + ";",
          n === "margin" &&
            `
    padding-left: ` +
              o +
              `px;
    padding-top: ` +
              l +
              `px;
    padding-right: ` +
              i +
              `px;
    margin-left:0;
    margin-top:0;
    margin-right: ` +
              u +
              "px " +
              r +
              `;
    `,
          n === "padding" && "padding-right: " + u + "px " + r + ";",
        ]
          .filter(Boolean)
          .join("") +
        `
  }
  
  .` +
        Fo +
        ` {
    right: ` +
        u +
        "px " +
        r +
        `;
  }
  
  .` +
        bo +
        ` {
    margin-right: ` +
        u +
        "px " +
        r +
        `;
  }
  
  .` +
        Fo +
        " ." +
        Fo +
        ` {
    right: 0 ` +
        r +
        `;
  }
  
  .` +
        bo +
        " ." +
        bo +
        ` {
    margin-right: 0 ` +
        r +
        `;
  }
  
  body {
    ` +
        Pg +
        ": " +
        u +
        `px;
  }
`
    );
  },
  Vg = function (e) {
    var t = v.exports.useState(Cc(e.gapMode)),
      n = t[0],
      r = t[1];
    v.exports.useEffect(
      function () {
        r(Cc(e.gapMode));
      },
      [e.gapMode]
    );
    var o = e.noRelative,
      l = e.noImportant,
      i = e.gapMode,
      u = i === void 0 ? "margin" : i;
    return v.exports.createElement(Ug, {
      styles: Wg(n, !o, u, l ? "" : "!important"),
    });
  },
  Hg = function (e) {
    var t = window.getComputedStyle(e);
    return (
      t.overflowY !== "hidden" &&
      !(t.overflowY === t.overflowX && t.overflowY === "visible")
    );
  },
  Kg = function (e) {
    var t = window.getComputedStyle(e);
    return e.type === "range"
      ? !0
      : t.overflowX !== "hidden" &&
          !(t.overflowY === t.overflowX && t.overflowX === "visible");
  },
  Pc = function (e, t) {
    var n = t;
    do {
      typeof ShadowRoot != "undefined" &&
        n instanceof ShadowRoot &&
        (n = n.host);
      var r = up(e, n);
      if (r) {
        var o = sp(e, n),
          l = o[1],
          i = o[2];
        if (l > i) return !0;
      }
      n = n.parentNode;
    } while (n && n !== document.body);
    return !1;
  },
  Qg = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  Yg = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  up = function (e, t) {
    return e === "v" ? Hg(t) : Kg(t);
  },
  sp = function (e, t) {
    return e === "v" ? Qg(t) : Yg(t);
  },
  Xg = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  Gg = function (e, t, n, r, o) {
    var l = Xg(e, window.getComputedStyle(t).direction),
      i = l * r,
      u = n.target,
      s = t.contains(u),
      a = !1,
      f = i > 0,
      y = 0,
      p = 0;
    do {
      var h = sp(e, u),
        S = h[0],
        g = h[1],
        d = h[2],
        c = g - d - l * S;
      (S || c) && up(e, u) && ((y += c), (p += S)), (u = u.parentNode);
    } while ((!s && u !== document.body) || (s && (t.contains(u) || t === u)));
    return (
      ((f && ((o && y === 0) || (!o && i > y))) ||
        (!f && ((o && p === 0) || (!o && -i > p)))) &&
        (a = !0),
      a
    );
  },
  Su = !1;
if (typeof window != "undefined")
  try {
    var Po = Object.defineProperty({}, "passive", {
      get: function () {
        return (Su = !0), !0;
      },
    });
    window.addEventListener("test", Po, Po),
      window.removeEventListener("test", Po, Po);
  } catch {
    Su = !1;
  }
var un = Su ? { passive: !1 } : !1,
  _o = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  _c = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Oc = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Zg = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Jg = function (e) {
    return (
      `
  .block-interactivity-` +
      e +
      ` {pointer-events: none;}
  .allow-interactivity-` +
      e +
      ` {pointer-events: all;}
`
    );
  },
  qg = 0,
  sn = [];
function ey(e) {
  var t = v.exports.useRef([]),
    n = v.exports.useRef([0, 0]),
    r = v.exports.useRef(),
    o = v.exports.useState(qg++)[0],
    l = v.exports.useState(function () {
      return ip();
    })[0],
    i = v.exports.useRef(e);
  v.exports.useEffect(
    function () {
      i.current = e;
    },
    [e]
  ),
    v.exports.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-" + o);
          var g = [e.lockRef.current]
            .concat((e.shards || []).map(Oc))
            .filter(Boolean);
          return (
            g.forEach(function (d) {
              return d.classList.add("allow-interactivity-" + o);
            }),
            function () {
              document.body.classList.remove("block-interactivity-" + o),
                g.forEach(function (d) {
                  return d.classList.remove("allow-interactivity-" + o);
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var u = v.exports.useCallback(function (g, d) {
      if ("touches" in g && g.touches.length === 2)
        return !i.current.allowPinchZoom;
      var c = _o(g),
        m = n.current,
        w = "deltaX" in g ? g.deltaX : m[0] - c[0],
        E = "deltaY" in g ? g.deltaY : m[1] - c[1],
        P,
        x = g.target,
        k = Math.abs(w) > Math.abs(E) ? "h" : "v",
        O = Pc(k, x);
      if (!O) return !0;
      if ((O ? (P = k) : ((P = k === "v" ? "h" : "v"), (O = Pc(k, x))), !O))
        return !1;
      if (
        (!r.current && "changedTouches" in g && (w || E) && (r.current = P), !P)
      )
        return !0;
      var _ = r.current || P;
      return Gg(_, d, g, _ === "h" ? w : E, !0);
    }, []),
    s = v.exports.useCallback(function (g) {
      var d = g;
      if (!(!sn.length || sn[sn.length - 1] !== l)) {
        var c = "deltaY" in d ? _c(d) : _o(d),
          m = t.current.filter(function (P) {
            return P.name === d.type && P.target === d.target && Zg(P.delta, c);
          })[0];
        if (m && m.should) {
          d.preventDefault();
          return;
        }
        if (!m) {
          var w = (i.current.shards || [])
              .map(Oc)
              .filter(Boolean)
              .filter(function (P) {
                return P.contains(d.target);
              }),
            E = w.length > 0 ? u(d, w[0]) : !i.current.noIsolation;
          E && d.preventDefault();
        }
      }
    }, []),
    a = v.exports.useCallback(function (g, d, c, m) {
      var w = { name: g, delta: d, target: c, should: m };
      t.current.push(w),
        setTimeout(function () {
          t.current = t.current.filter(function (E) {
            return E !== w;
          });
        }, 1);
    }, []),
    f = v.exports.useCallback(function (g) {
      (n.current = _o(g)), (r.current = void 0);
    }, []),
    y = v.exports.useCallback(function (g) {
      a(g.type, _c(g), g.target, u(g, e.lockRef.current));
    }, []),
    p = v.exports.useCallback(function (g) {
      a(g.type, _o(g), g.target, u(g, e.lockRef.current));
    }, []);
  v.exports.useEffect(function () {
    return (
      sn.push(l),
      e.setCallbacks({
        onScrollCapture: y,
        onWheelCapture: y,
        onTouchMoveCapture: p,
      }),
      document.addEventListener("wheel", s, un),
      document.addEventListener("touchmove", s, un),
      document.addEventListener("touchstart", f, un),
      function () {
        (sn = sn.filter(function (g) {
          return g !== l;
        })),
          document.removeEventListener("wheel", s, un),
          document.removeEventListener("touchmove", s, un),
          document.removeEventListener("touchstart", f, un);
      }
    );
  }, []);
  var h = e.removeScrollBar,
    S = e.inert;
  return v.exports.createElement(
    v.exports.Fragment,
    null,
    S ? v.exports.createElement(l, { styles: Jg(o) }) : null,
    h ? v.exports.createElement(Vg, { gapMode: "margin" }) : null
  );
}
var ty = $g(lp, ey),
  ap = v.exports.forwardRef(function (e, t) {
    return v.exports.createElement(Hl, $n({}, e, { ref: t, sideCar: ty }));
  });
ap.classNames = Hl.classNames;
var ny = ap;
let Pi = 0;
function ry() {
  v.exports.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement(
        "afterbegin",
        (e = n[0]) !== null && e !== void 0 ? e : Rc()
      ),
      document.body.insertAdjacentElement(
        "beforeend",
        (t = n[1]) !== null && t !== void 0 ? t : Rc()
      ),
      Pi++,
      () => {
        Pi === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((r) => r.remove()),
          Pi--;
      }
    );
  }, []);
}
function Rc() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText =
      "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
const Tc = { bubbles: !1, cancelable: !0 },
  oy = v.exports.forwardRef((e, t) => {
    const g = e,
      {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: l,
      } = g,
      i = A(g, ["loop", "trapped", "onMountAutoFocus", "onUnmountAutoFocus"]),
      [u, s] = v.exports.useState(null),
      a = rt(o),
      f = rt(l),
      y = v.exports.useRef(null),
      p = it(t, (d) => s(d)),
      h = v.exports.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    v.exports.useEffect(() => {
      if (r) {
        let d = function (m) {
            if (h.paused || !u) return;
            const w = m.target;
            u.contains(w) ? (y.current = w) : It(y.current, { select: !0 });
          },
          c = function (m) {
            !h.paused &&
              u &&
              (u.contains(m.relatedTarget) || It(y.current, { select: !0 }));
          };
        return (
          document.addEventListener("focusin", d),
          document.addEventListener("focusout", c),
          () => {
            document.removeEventListener("focusin", d),
              document.removeEventListener("focusout", c);
          }
        );
      }
    }, [r, u, h.paused]),
      v.exports.useEffect(() => {
        if (u) {
          Dc.add(h);
          const c = document.activeElement;
          if (!u.contains(c)) {
            const m = new Event("focusScope.autoFocusOnMount", Tc);
            u.addEventListener("focusScope.autoFocusOnMount", a),
              u.dispatchEvent(m),
              m.defaultPrevented ||
                ((function (w, { select: E = !1 } = {}) {
                  const P = document.activeElement;
                  for (const x of w)
                    if ((It(x, { select: E }), document.activeElement !== P))
                      return;
                })(((d = $c(u)), d.filter((w) => w.tagName !== "A")), {
                  select: !0,
                }),
                document.activeElement === c && It(u));
          }
          return () => {
            u.removeEventListener("focusScope.autoFocusOnMount", a),
              setTimeout(() => {
                const m = new Event("focusScope.autoFocusOnUnmount", Tc);
                u.addEventListener("focusScope.autoFocusOnUnmount", f),
                  u.dispatchEvent(m),
                  m.defaultPrevented ||
                    It(c != null ? c : document.body, { select: !0 }),
                  u.removeEventListener("focusScope.autoFocusOnUnmount", f),
                  Dc.remove(h);
              }, 0);
          };
        }
        var d;
      }, [u, a, f, h]);
    const S = v.exports.useCallback(
      (d) => {
        if ((!n && !r) || h.paused) return;
        const c = d.key === "Tab" && !d.altKey && !d.ctrlKey && !d.metaKey,
          m = document.activeElement;
        if (c && m) {
          const w = d.currentTarget,
            [E, P] = (function (x) {
              const k = $c(x),
                O = Nc(k, x),
                _ = Nc(k.reverse(), x);
              return [O, _];
            })(w);
          E && P
            ? d.shiftKey || m !== P
              ? d.shiftKey &&
                m === E &&
                (d.preventDefault(), n && It(P, { select: !0 }))
              : (d.preventDefault(), n && It(E, { select: !0 }))
            : m === w && d.preventDefault();
        }
      },
      [n, r, h.paused]
    );
    return v.exports.createElement(
      Re.div,
      F({ tabIndex: -1 }, i, { ref: p, onKeyDown: S })
    );
  });
function $c(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Nc(e, t) {
  for (const n of e) if (!ly(n, { upTo: t })) return n;
}
function ly(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function It(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }),
      e !== n &&
        (function (r) {
          return r instanceof HTMLInputElement && "select" in r;
        })(e) &&
        t &&
        e.select();
  }
}
const Dc = (function () {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = Lc(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = Lc(e, t)), (n = e[0]) === null || n === void 0 || n.resume();
    },
  };
})();
function Lc(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const iy = _p["useId".toString()] || (() => {});
let uy = 0;
function _i(e) {
  const [t, n] = v.exports.useState(iy());
  return (
    Ur(() => {
      e || n((r) => (r != null ? r : String(uy++)));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
const [sy, cp] = Ts("Dialog"),
  [ay, Ye] = sy("Dialog"),
  cy = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: l,
        modal: i = !0,
        allowPinchZoom: u,
      } = e,
      s = v.exports.useRef(null),
      a = v.exports.useRef(null),
      [f = !1, y] = Gd({ prop: r, defaultProp: o, onChange: l });
    return v.exports.createElement(
      ay,
      {
        scope: t,
        triggerRef: s,
        contentRef: a,
        contentId: _i(),
        titleId: _i(),
        descriptionId: _i(),
        open: f,
        onOpenChange: y,
        onOpenToggle: v.exports.useCallback(() => y((p) => !p), [y]),
        modal: i,
        allowPinchZoom: u,
      },
      n
    );
  },
  fy = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      l = Ye("DialogPortal", t);
    return v.exports.createElement(
      v.exports.Fragment,
      null,
      v.exports.Children.map(r, (i) =>
        v.exports.createElement(
          lo,
          { present: n || l.open },
          v.exports.createElement(Zd, { asChild: !0, container: o }, i)
        )
      )
    );
  },
  dy = v.exports.forwardRef((e, t) => {
    const l = e,
      { forceMount: n } = l,
      r = A(l, ["forceMount"]),
      o = Ye("DialogOverlay", e.__scopeDialog);
    return o.modal
      ? v.exports.createElement(
          lo,
          { present: n || o.open },
          v.exports.createElement(py, F({}, r, { ref: t }))
        )
      : null;
  }),
  py = v.exports.forwardRef((e, t) => {
    const l = e,
      { __scopeDialog: n } = l,
      r = A(l, ["__scopeDialog"]),
      o = Ye("DialogOverlay", n);
    return v.exports.createElement(
      ny,
      { as: Rs, allowPinchZoom: o.allowPinchZoom, shards: [o.contentRef] },
      v.exports.createElement(
        Re.div,
        F({ "data-state": dp(o.open) }, r, {
          ref: t,
          style: ee({ pointerEvents: "auto" }, r.style),
        })
      )
    );
  }),
  my = v.exports.forwardRef((e, t) => {
    const l = e,
      { forceMount: n } = l,
      r = A(l, ["forceMount"]),
      o = Ye("DialogContent", e.__scopeDialog);
    return v.exports.createElement(
      lo,
      { present: n || o.open },
      o.modal
        ? v.exports.createElement(vy, F({}, r, { ref: t }))
        : v.exports.createElement(hy, F({}, r, { ref: t }))
    );
  }),
  vy = v.exports.forwardRef((e, t) => {
    const n = Ye("DialogContent", e.__scopeDialog),
      r = v.exports.useRef(null),
      o = it(t, n.contentRef, r);
    return (
      v.exports.useEffect(() => {
        const l = r.current;
        if (l) return xg(l);
      }, []),
      v.exports.createElement(
        fp,
        F({}, e, {
          ref: o,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: ne(e.onCloseAutoFocus, (l) => {
            var i;
            l.preventDefault(),
              (i = n.triggerRef.current) === null || i === void 0 || i.focus();
          }),
          onPointerDownOutside: ne(e.onPointerDownOutside, (l) => {
            const i = l.detail.originalEvent,
              u = i.button === 0 && i.ctrlKey === !0;
            (i.button === 2 || u) && l.preventDefault();
          }),
          onFocusOutside: ne(e.onFocusOutside, (l) => l.preventDefault()),
        })
      )
    );
  }),
  hy = v.exports.forwardRef((e, t) => {
    const n = Ye("DialogContent", e.__scopeDialog),
      r = v.exports.useRef(!1);
    return v.exports.createElement(
      fp,
      F({}, e, {
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (o) => {
          var l, i;
          (l = e.onCloseAutoFocus) === null || l === void 0 || l.call(e, o),
            o.defaultPrevented ||
              (r.current ||
                (i = n.triggerRef.current) === null ||
                i === void 0 ||
                i.focus(),
              o.preventDefault()),
            (r.current = !1);
        },
        onInteractOutside: (o) => {
          var l, i;
          (l = e.onInteractOutside) === null || l === void 0 || l.call(e, o),
            o.defaultPrevented || (r.current = !0);
          const u = o.target;
          !((i = n.triggerRef.current) === null || i === void 0) &&
            i.contains(u) &&
            o.preventDefault();
        },
      })
    );
  }),
  fp = v.exports.forwardRef((e, t) => {
    const f = e,
      {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: l,
      } = f,
      i = A(f, [
        "__scopeDialog",
        "trapFocus",
        "onOpenAutoFocus",
        "onCloseAutoFocus",
      ]),
      u = Ye("DialogContent", n),
      s = v.exports.useRef(null),
      a = it(t, s);
    return (
      ry(),
      v.exports.createElement(
        v.exports.Fragment,
        null,
        v.exports.createElement(
          oy,
          {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: l,
          },
          v.exports.createElement(
            qd,
            F(
              {
                role: "dialog",
                id: u.contentId,
                "aria-describedby": u.descriptionId,
                "aria-labelledby": u.titleId,
                "data-state": dp(u.open),
              },
              i,
              { ref: a, onDismiss: () => u.onOpenChange(!1) }
            )
          )
        ),
        !1
      )
    );
  }),
  gy = v.exports.forwardRef((e, t) => {
    const l = e,
      { __scopeDialog: n } = l,
      r = A(l, ["__scopeDialog"]),
      o = Ye("DialogTitle", n);
    return v.exports.createElement(Re.h2, F({ id: o.titleId }, r, { ref: t }));
  }),
  yy = v.exports.forwardRef((e, t) => {
    const l = e,
      { __scopeDialog: n } = l,
      r = A(l, ["__scopeDialog"]),
      o = Ye("DialogDescription", n);
    return v.exports.createElement(
      Re.p,
      F({ id: o.descriptionId }, r, { ref: t })
    );
  }),
  wy = v.exports.forwardRef((e, t) => {
    const l = e,
      { __scopeDialog: n } = l,
      r = A(l, ["__scopeDialog"]),
      o = Ye("DialogClose", n);
    return v.exports.createElement(
      Re.button,
      F({ type: "button" }, r, {
        ref: t,
        onClick: ne(e.onClick, () => o.onOpenChange(!1)),
      })
    );
  });
function dp(e) {
  return e ? "open" : "closed";
}
const [Sy, r0] = jh("DialogTitleWarning", {
    contentName: "DialogContent",
    titleName: "DialogTitle",
    docsSlug: "dialog",
  }),
  Ey = cy,
  xy = fy,
  ky = dy,
  Cy = my,
  Py = gy,
  _y = yy,
  Oy = wy,
  [Ry, o0] = Ts("AlertDialog", [cp]),
  en = cp(),
  Ty = (e) => {
    const o = e,
      { __scopeAlertDialog: t } = o,
      n = A(o, ["__scopeAlertDialog"]),
      r = en(t);
    return v.exports.createElement(Ey, F({}, r, n, { modal: !0 }));
  },
  $y = (e) => {
    const o = e,
      { __scopeAlertDialog: t } = o,
      n = A(o, ["__scopeAlertDialog"]),
      r = en(t);
    return v.exports.createElement(xy, F({}, r, n));
  },
  Ny = v.exports.forwardRef((e, t) => {
    const l = e,
      { __scopeAlertDialog: n } = l,
      r = A(l, ["__scopeAlertDialog"]),
      o = en(n);
    return v.exports.createElement(ky, F({}, o, r, { ref: t }));
  }),
  [Dy, l0] = Ry("AlertDialogContent"),
  Ly = v.exports.forwardRef((e, t) => {
    const a = e,
      { __scopeAlertDialog: n, children: r } = a,
      o = A(a, ["__scopeAlertDialog", "children"]),
      l = en(n),
      i = v.exports.useRef(null),
      u = it(t, i),
      s = v.exports.useRef(null);
    return v.exports.createElement(
      Sy,
      {
        contentName: "AlertDialogContent",
        titleName: My,
        docsSlug: "alert-dialog",
      },
      v.exports.createElement(
        Dy,
        { scope: n, cancelRef: s },
        v.exports.createElement(
          Cy,
          F({ role: "alertdialog" }, l, o, {
            ref: u,
            onOpenAutoFocus: ne(o.onOpenAutoFocus, (f) => {
              var y;
              f.preventDefault(),
                (y = s.current) === null ||
                  y === void 0 ||
                  y.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (f) => f.preventDefault(),
            onInteractOutside: (f) => f.preventDefault(),
          }),
          v.exports.createElement(Xd, null, r),
          !1
        )
      )
    );
  }),
  My = "AlertDialogTitle",
  Iy = v.exports.forwardRef((e, t) => {
    const l = e,
      { __scopeAlertDialog: n } = l,
      r = A(l, ["__scopeAlertDialog"]),
      o = en(n);
    return v.exports.createElement(Py, F({}, o, r, { ref: t }));
  }),
  jy = v.exports.forwardRef((e, t) => {
    const l = e,
      { __scopeAlertDialog: n } = l,
      r = A(l, ["__scopeAlertDialog"]),
      o = en(n);
    return v.exports.createElement(_y, F({}, o, r, { ref: t }));
  }),
  Ay = v.exports.forwardRef((e, t) => {
    const l = e,
      { __scopeAlertDialog: n } = l,
      r = A(l, ["__scopeAlertDialog"]),
      o = en(n);
    return v.exports.createElement(Oy, F({}, o, r, { ref: t }));
  }),
  i0 = Ty,
  u0 = $y,
  s0 = Ny,
  a0 = Ly,
  c0 = Ay,
  f0 = Iy,
  d0 = jy;
export {
  c0 as A,
  a0 as C,
  d0 as D,
  by as F,
  s0 as O,
  Qy as P,
  Xy as R,
  Gy as T,
  Yy as V,
  Hy as a,
  Wy as b,
  Br as c,
  Jy as d,
  f0 as e,
  i0 as f,
  Zy as g,
  Fy as h,
  u0 as i,
  $v as j,
  Vy as k,
  Ev as l,
  ut as m,
  By as n,
  qy as o,
  n0 as q,
  v as r,
  e0 as t,
  Uy as u,
  t0 as w,
};
