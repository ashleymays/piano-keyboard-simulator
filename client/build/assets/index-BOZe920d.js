var ry = Object.defineProperty;
var sy = (t, e, n) =>
  e in t
    ? ry(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (t[e] = n);
var nl = (t, e, n) => (sy(t, typeof e != 'symbol' ? e + '' : e, n), n);
function iy(t, e) {
  for (var n = 0; n < e.length; n++) {
    const r = e[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const s in r)
        if (s !== 'default' && !(s in t)) {
          const i = Object.getOwnPropertyDescriptor(r, s);
          i &&
            Object.defineProperty(
              t,
              s,
              i.get ? i : { enumerable: !0, get: () => r[s] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === 'childList')
        for (const o of i.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : s.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
function oy(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default')
    ? t.default
    : t;
}
var lf = { exports: {} },
  Ca = {},
  uf = { exports: {} },
  Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oi = Symbol.for('react.element'),
  ay = Symbol.for('react.portal'),
  ly = Symbol.for('react.fragment'),
  uy = Symbol.for('react.strict_mode'),
  cy = Symbol.for('react.profiler'),
  hy = Symbol.for('react.provider'),
  dy = Symbol.for('react.context'),
  fy = Symbol.for('react.forward_ref'),
  py = Symbol.for('react.suspense'),
  my = Symbol.for('react.memo'),
  gy = Symbol.for('react.lazy'),
  gh = Symbol.iterator;
function yy(t) {
  return t === null || typeof t != 'object'
    ? null
    : ((t = (gh && t[gh]) || t['@@iterator']),
      typeof t == 'function' ? t : null);
}
var cf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  hf = Object.assign,
  df = {};
function ps(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = df),
    (this.updater = n || cf);
}
ps.prototype.isReactComponent = {};
ps.prototype.setState = function (t, e) {
  if (typeof t != 'object' && typeof t != 'function' && t != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, t, e, 'setState');
};
ps.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, 'forceUpdate');
};
function ff() {}
ff.prototype = ps.prototype;
function qu(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = df),
    (this.updater = n || cf);
}
var $u = (qu.prototype = new ff());
$u.constructor = qu;
hf($u, ps.prototype);
$u.isPureReactComponent = !0;
var yh = Array.isArray,
  pf = Object.prototype.hasOwnProperty,
  Hu = { current: null },
  mf = { key: !0, ref: !0, __self: !0, __source: !0 };
function gf(t, e, n) {
  var r,
    s = {},
    i = null,
    o = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (i = '' + e.key),
    e))
      pf.call(e, r) && !mf.hasOwnProperty(r) && (s[r] = e[r]);
  var a = arguments.length - 2;
  if (a === 1) s.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    s.children = l;
  }
  if (t && t.defaultProps)
    for (r in ((a = t.defaultProps), a)) s[r] === void 0 && (s[r] = a[r]);
  return {
    $$typeof: Oi,
    type: t,
    key: i,
    ref: o,
    props: s,
    _owner: Hu.current
  };
}
function _y(t, e) {
  return {
    $$typeof: Oi,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner
  };
}
function Gu(t) {
  return typeof t == 'object' && t !== null && t.$$typeof === Oi;
}
function vy(t) {
  var e = { '=': '=0', ':': '=2' };
  return (
    '$' +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var _h = /\/+/g;
function rl(t, e) {
  return typeof t == 'object' && t !== null && t.key != null
    ? vy('' + t.key)
    : e.toString(36);
}
function go(t, e, n, r, s) {
  var i = typeof t;
  (i === 'undefined' || i === 'boolean') && (t = null);
  var o = !1;
  if (t === null) o = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        o = !0;
        break;
      case 'object':
        switch (t.$$typeof) {
          case Oi:
          case ay:
            o = !0;
        }
    }
  if (o)
    return (
      (o = t),
      (s = s(o)),
      (t = r === '' ? '.' + rl(o, 0) : r),
      yh(s)
        ? ((n = ''),
          t != null && (n = t.replace(_h, '$&/') + '/'),
          go(s, e, n, '', function (u) {
            return u;
          }))
        : s != null &&
          (Gu(s) &&
            (s = _y(
              s,
              n +
                (!s.key || (o && o.key === s.key)
                  ? ''
                  : ('' + s.key).replace(_h, '$&/') + '/') +
                t
            )),
          e.push(s)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), yh(t)))
    for (var a = 0; a < t.length; a++) {
      i = t[a];
      var l = r + rl(i, a);
      o += go(i, e, n, l, s);
    }
  else if (((l = yy(t)), typeof l == 'function'))
    for (t = l.call(t), a = 0; !(i = t.next()).done; )
      (i = i.value), (l = r + rl(i, a++)), (o += go(i, e, n, l, s));
  else if (i === 'object')
    throw (
      ((e = String(t)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (e === '[object Object]'
            ? 'object with keys {' + Object.keys(t).join(', ') + '}'
            : e) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return o;
}
function Hi(t, e, n) {
  if (t == null) return t;
  var r = [],
    s = 0;
  return (
    go(t, r, '', '', function (i) {
      return e.call(n, i, s++);
    }),
    r
  );
}
function wy(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n));
        }
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var Ze = { current: null },
  yo = { transition: null },
  Sy = {
    ReactCurrentDispatcher: Ze,
    ReactCurrentBatchConfig: yo,
    ReactCurrentOwner: Hu
  };
Q.Children = {
  map: Hi,
  forEach: function (t, e, n) {
    Hi(
      t,
      function () {
        e.apply(this, arguments);
      },
      n
    );
  },
  count: function (t) {
    var e = 0;
    return (
      Hi(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      Hi(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!Gu(t))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return t;
  }
};
Q.Component = ps;
Q.Fragment = ly;
Q.Profiler = cy;
Q.PureComponent = qu;
Q.StrictMode = uy;
Q.Suspense = py;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sy;
Q.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        t +
        '.'
    );
  var r = hf({}, t.props),
    s = t.key,
    i = t.ref,
    o = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((i = e.ref), (o = Hu.current)),
      e.key !== void 0 && (s = '' + e.key),
      t.type && t.type.defaultProps)
    )
      var a = t.type.defaultProps;
    for (l in e)
      pf.call(e, l) &&
        !mf.hasOwnProperty(l) &&
        (r[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Oi, type: t.type, key: s, ref: i, props: r, _owner: o };
};
Q.createContext = function (t) {
  return (
    (t = {
      $$typeof: dy,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    (t.Provider = { $$typeof: hy, _context: t }),
    (t.Consumer = t)
  );
};
Q.createElement = gf;
Q.createFactory = function (t) {
  var e = gf.bind(null, t);
  return (e.type = t), e;
};
Q.createRef = function () {
  return { current: null };
};
Q.forwardRef = function (t) {
  return { $$typeof: fy, render: t };
};
Q.isValidElement = Gu;
Q.lazy = function (t) {
  return { $$typeof: gy, _payload: { _status: -1, _result: t }, _init: wy };
};
Q.memo = function (t, e) {
  return { $$typeof: my, type: t, compare: e === void 0 ? null : e };
};
Q.startTransition = function (t) {
  var e = yo.transition;
  yo.transition = {};
  try {
    t();
  } finally {
    yo.transition = e;
  }
};
Q.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
Q.useCallback = function (t, e) {
  return Ze.current.useCallback(t, e);
};
Q.useContext = function (t) {
  return Ze.current.useContext(t);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (t) {
  return Ze.current.useDeferredValue(t);
};
Q.useEffect = function (t, e) {
  return Ze.current.useEffect(t, e);
};
Q.useId = function () {
  return Ze.current.useId();
};
Q.useImperativeHandle = function (t, e, n) {
  return Ze.current.useImperativeHandle(t, e, n);
};
Q.useInsertionEffect = function (t, e) {
  return Ze.current.useInsertionEffect(t, e);
};
Q.useLayoutEffect = function (t, e) {
  return Ze.current.useLayoutEffect(t, e);
};
Q.useMemo = function (t, e) {
  return Ze.current.useMemo(t, e);
};
Q.useReducer = function (t, e, n) {
  return Ze.current.useReducer(t, e, n);
};
Q.useRef = function (t) {
  return Ze.current.useRef(t);
};
Q.useState = function (t) {
  return Ze.current.useState(t);
};
Q.useSyncExternalStore = function (t, e, n) {
  return Ze.current.useSyncExternalStore(t, e, n);
};
Q.useTransition = function () {
  return Ze.current.useTransition();
};
Q.version = '18.2.0';
uf.exports = Q;
var Wn = uf.exports;
const yf = oy(Wn),
  vh = iy({ __proto__: null, default: yf }, [Wn]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ty = Wn,
  ky = Symbol.for('react.element'),
  Cy = Symbol.for('react.fragment'),
  xy = Object.prototype.hasOwnProperty,
  Ny = Ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ey = { key: !0, ref: !0, __self: !0, __source: !0 };
function _f(t, e, n) {
  var r,
    s = {},
    i = null,
    o = null;
  n !== void 0 && (i = '' + n),
    e.key !== void 0 && (i = '' + e.key),
    e.ref !== void 0 && (o = e.ref);
  for (r in e) xy.call(e, r) && !Ey.hasOwnProperty(r) && (s[r] = e[r]);
  if (t && t.defaultProps)
    for (r in ((e = t.defaultProps), e)) s[r] === void 0 && (s[r] = e[r]);
  return {
    $$typeof: ky,
    type: t,
    key: i,
    ref: o,
    props: s,
    _owner: Ny.current
  };
}
Ca.Fragment = Cy;
Ca.jsx = _f;
Ca.jsxs = _f;
lf.exports = Ca;
var X = lf.exports,
  vf = { exports: {} },
  _t = {},
  wf = { exports: {} },
  Sf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(O, I) {
    var D = O.length;
    O.push(I);
    e: for (; 0 < D; ) {
      var L = (D - 1) >>> 1,
        U = O[L];
      if (0 < s(U, I)) (O[L] = I), (O[D] = U), (D = L);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var I = O[0],
      D = O.pop();
    if (D !== I) {
      O[0] = D;
      e: for (var L = 0, U = O.length, Pe = U >>> 1; L < Pe; ) {
        var we = 2 * (L + 1) - 1,
          $ = O[we],
          Z = we + 1,
          xe = O[Z];
        if (0 > s($, D))
          Z < U && 0 > s(xe, $)
            ? ((O[L] = xe), (O[Z] = D), (L = Z))
            : ((O[L] = $), (O[we] = D), (L = we));
        else if (Z < U && 0 > s(xe, D)) (O[L] = xe), (O[Z] = D), (L = Z);
        else break e;
      }
    }
    return I;
  }
  function s(O, I) {
    var D = O.sortIndex - I.sortIndex;
    return D !== 0 ? D : O.id - I.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    t.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    t.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    h = null,
    d = 3,
    m = !1,
    p = !1,
    _ = !1,
    w = typeof setTimeout == 'function' ? setTimeout : null,
    f = typeof clearTimeout == 'function' ? clearTimeout : null,
    g = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(O) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= O)
        r(u), (I.sortIndex = I.expirationTime), e(l, I);
      else break;
      I = n(u);
    }
  }
  function T(O) {
    if (((_ = !1), y(O), !p))
      if (n(l) !== null) (p = !0), j(v);
      else {
        var I = n(u);
        I !== null && z(T, I.startTime - O);
      }
  }
  function v(O, I) {
    (p = !1), _ && ((_ = !1), f(S), (S = -1)), (m = !0);
    var D = d;
    try {
      for (
        y(I), h = n(l);
        h !== null && (!(h.expirationTime > I) || (O && !E()));

      ) {
        var L = h.callback;
        if (typeof L == 'function') {
          (h.callback = null), (d = h.priorityLevel);
          var U = L(h.expirationTime <= I);
          (I = t.unstable_now()),
            typeof U == 'function' ? (h.callback = U) : h === n(l) && r(l),
            y(I);
        } else r(l);
        h = n(l);
      }
      if (h !== null) var Pe = !0;
      else {
        var we = n(u);
        we !== null && z(T, we.startTime - I), (Pe = !1);
      }
      return Pe;
    } finally {
      (h = null), (d = D), (m = !1);
    }
  }
  var k = !1,
    C = null,
    S = -1,
    N = 5,
    x = -1;
  function E() {
    return !(t.unstable_now() - x < N);
  }
  function A() {
    if (C !== null) {
      var O = t.unstable_now();
      x = O;
      var I = !0;
      try {
        I = C(!0, O);
      } finally {
        I ? R() : ((k = !1), (C = null));
      }
    } else k = !1;
  }
  var R;
  if (typeof g == 'function')
    R = function () {
      g(A);
    };
  else if (typeof MessageChannel < 'u') {
    var F = new MessageChannel(),
      B = F.port2;
    (F.port1.onmessage = A),
      (R = function () {
        B.postMessage(null);
      });
  } else
    R = function () {
      w(A, 0);
    };
  function j(O) {
    (C = O), k || ((k = !0), R());
  }
  function z(O, I) {
    S = w(function () {
      O(t.unstable_now());
    }, I);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      p || m || ((p = !0), j(v));
    }),
    (t.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (N = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (t.unstable_next = function (O) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = d;
      }
      var D = d;
      d = I;
      try {
        return O();
      } finally {
        d = D;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (O, I) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var D = d;
      d = O;
      try {
        return I();
      } finally {
        d = D;
      }
    }),
    (t.unstable_scheduleCallback = function (O, I, D) {
      var L = t.unstable_now();
      switch (
        (typeof D == 'object' && D !== null
          ? ((D = D.delay), (D = typeof D == 'number' && 0 < D ? L + D : L))
          : (D = L),
        O)
      ) {
        case 1:
          var U = -1;
          break;
        case 2:
          U = 250;
          break;
        case 5:
          U = 1073741823;
          break;
        case 4:
          U = 1e4;
          break;
        default:
          U = 5e3;
      }
      return (
        (U = D + U),
        (O = {
          id: c++,
          callback: I,
          priorityLevel: O,
          startTime: D,
          expirationTime: U,
          sortIndex: -1
        }),
        D > L
          ? ((O.sortIndex = D),
            e(u, O),
            n(l) === null &&
              O === n(u) &&
              (_ ? (f(S), (S = -1)) : (_ = !0), z(T, D - L)))
          : ((O.sortIndex = U), e(l, O), p || m || ((p = !0), j(v))),
        O
      );
    }),
    (t.unstable_shouldYield = E),
    (t.unstable_wrapCallback = function (O) {
      var I = d;
      return function () {
        var D = d;
        d = I;
        try {
          return O.apply(this, arguments);
        } finally {
          d = D;
        }
      };
    });
})(Sf);
wf.exports = Sf;
var Ay = wf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tf = Wn,
  pt = Ay;
function M(t) {
  for (
    var e = 'https://reactjs.org/docs/error-decoder.html?invariant=' + t, n = 1;
    n < arguments.length;
    n++
  )
    e += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    t +
    '; visit ' +
    e +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var kf = new Set(),
  Ks = {};
function xr(t, e) {
  ts(t, e), ts(t + 'Capture', e);
}
function ts(t, e) {
  for (Ks[t] = e, t = 0; t < e.length; t++) kf.add(e[t]);
}
var dn = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Rl = Object.prototype.hasOwnProperty,
  Oy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  wh = {},
  Sh = {};
function My(t) {
  return Rl.call(Sh, t)
    ? !0
    : Rl.call(wh, t)
      ? !1
      : Oy.test(t)
        ? (Sh[t] = !0)
        : ((wh[t] = !0), !1);
}
function Iy(t, e, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((t = t.toLowerCase().slice(0, 5)), t !== 'data-' && t !== 'aria-');
    default:
      return !1;
  }
}
function Dy(t, e, n, r) {
  if (e === null || typeof e > 'u' || Iy(t, e, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function Je(t, e, n, r, s, i, o) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ze = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (t) {
    ze[t] = new Je(t, 0, !1, t, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv']
].forEach(function (t) {
  var e = t[0];
  ze[e] = new Je(e, 1, !1, t[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (t) {
  ze[t] = new Je(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha'
].forEach(function (t) {
  ze[t] = new Je(t, 2, !1, t, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (t) {
    ze[t] = new Je(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
  ze[t] = new Je(t, 3, !0, t, null, !1, !1);
});
['capture', 'download'].forEach(function (t) {
  ze[t] = new Je(t, 4, !1, t, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (t) {
  ze[t] = new Je(t, 6, !1, t, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (t) {
  ze[t] = new Je(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var Ku = /[\-:]([a-z])/g;
function Qu(t) {
  return t[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (t) {
    var e = t.replace(Ku, Qu);
    ze[e] = new Je(e, 1, !1, t, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (t) {
    var e = t.replace(Ku, Qu);
    ze[e] = new Je(e, 1, !1, t, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
  var e = t.replace(Ku, Qu);
  ze[e] = new Je(e, 1, !1, t, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (t) {
  ze[t] = new Je(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
ze.xlinkHref = new Je(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (t) {
  ze[t] = new Je(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function Xu(t, e, n, r) {
  var s = ze.hasOwnProperty(e) ? ze[e] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < e.length) ||
      (e[0] !== 'o' && e[0] !== 'O') ||
      (e[1] !== 'n' && e[1] !== 'N')) &&
    (Dy(e, n, s, r) && (n = null),
    r || s === null
      ? My(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, '' + n))
      : s.mustUseProperty
        ? (t[s.propertyName] = n === null ? (s.type === 3 ? !1 : '') : n)
        : ((e = s.attributeName),
          (r = s.attributeNamespace),
          n === null
            ? t.removeAttribute(e)
            : ((s = s.type),
              (n = s === 3 || (s === 4 && n === !0) ? '' : '' + n),
              r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var _n = Tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Gi = Symbol.for('react.element'),
  Rr = Symbol.for('react.portal'),
  Fr = Symbol.for('react.fragment'),
  Yu = Symbol.for('react.strict_mode'),
  Fl = Symbol.for('react.profiler'),
  Cf = Symbol.for('react.provider'),
  xf = Symbol.for('react.context'),
  Zu = Symbol.for('react.forward_ref'),
  bl = Symbol.for('react.suspense'),
  Ll = Symbol.for('react.suspense_list'),
  Ju = Symbol.for('react.memo'),
  xn = Symbol.for('react.lazy'),
  Nf = Symbol.for('react.offscreen'),
  Th = Symbol.iterator;
function Cs(t) {
  return t === null || typeof t != 'object'
    ? null
    : ((t = (Th && t[Th]) || t['@@iterator']),
      typeof t == 'function' ? t : null);
}
var me = Object.assign,
  sl;
function Ds(t) {
  if (sl === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      sl = (e && e[1]) || '';
    }
  return (
    `
` +
    sl +
    t
  );
}
var il = !1;
function ol(t, e) {
  if (!t || il) return '';
  il = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, 'props', {
          set: function () {
            throw Error();
          }
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (u) {
          r = u;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      t();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var s = u.stack.split(`
`),
          i = r.stack.split(`
`),
          o = s.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && s[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (s[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || s[o] !== i[a])) {
                var l =
                  `
` + s[o].replace(' at new ', ' at ');
                return (
                  t.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', t.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (il = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : '') ? Ds(t) : '';
}
function Py(t) {
  switch (t.tag) {
    case 5:
      return Ds(t.type);
    case 16:
      return Ds('Lazy');
    case 13:
      return Ds('Suspense');
    case 19:
      return Ds('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (t = ol(t.type, !1)), t;
    case 11:
      return (t = ol(t.type.render, !1)), t;
    case 1:
      return (t = ol(t.type, !0)), t;
    default:
      return '';
  }
}
function Vl(t) {
  if (t == null) return null;
  if (typeof t == 'function') return t.displayName || t.name || null;
  if (typeof t == 'string') return t;
  switch (t) {
    case Fr:
      return 'Fragment';
    case Rr:
      return 'Portal';
    case Fl:
      return 'Profiler';
    case Yu:
      return 'StrictMode';
    case bl:
      return 'Suspense';
    case Ll:
      return 'SuspenseList';
  }
  if (typeof t == 'object')
    switch (t.$$typeof) {
      case xf:
        return (t.displayName || 'Context') + '.Consumer';
      case Cf:
        return (t._context.displayName || 'Context') + '.Provider';
      case Zu:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ''),
            (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
          t
        );
      case Ju:
        return (
          (e = t.displayName || null), e !== null ? e : Vl(t.type) || 'Memo'
        );
      case xn:
        (e = t._payload), (t = t._init);
        try {
          return Vl(t(e));
        } catch {}
    }
  return null;
}
function Ry(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (e.displayName || 'Context') + '.Consumer';
    case 10:
      return (e._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ''),
        e.displayName || (t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return e;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Vl(e);
    case 8:
      return e === Yu ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == 'function') return e.displayName || e.name || null;
      if (typeof e == 'string') return e;
  }
  return null;
}
function Bn(t) {
  switch (typeof t) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return t;
    case 'object':
      return t;
    default:
      return '';
  }
}
function Ef(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === 'input' &&
    (e === 'checkbox' || e === 'radio')
  );
}
function Fy(t) {
  var e = Ef(t) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    r = '' + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var s = n.get,
      i = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (o) {
          (r = '' + o), i.call(this, o);
        }
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = '' + o;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        }
      }
    );
  }
}
function Ki(t) {
  t._valueTracker || (t._valueTracker = Fy(t));
}
function Af(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    r = '';
  return (
    t && (r = Ef(t) ? (t.checked ? 'true' : 'false') : t.value),
    (t = r),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function Io(t) {
  if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u'))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function jl(t, e) {
  var n = e.checked;
  return me({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked
  });
}
function kh(t, e) {
  var n = e.defaultValue == null ? '' : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  (n = Bn(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        e.type === 'checkbox' || e.type === 'radio'
          ? e.checked != null
          : e.value != null
    });
}
function Of(t, e) {
  (e = e.checked), e != null && Xu(t, 'checked', e, !1);
}
function zl(t, e) {
  Of(t, e);
  var n = Bn(e.value),
    r = e.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && t.value === '') || t.value != n) && (t.value = '' + n)
      : t.value !== '' + n && (t.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    t.removeAttribute('value');
    return;
  }
  e.hasOwnProperty('value')
    ? Wl(t, e.type, n)
    : e.hasOwnProperty('defaultValue') && Wl(t, e.type, Bn(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked);
}
function Ch(t, e, n) {
  if (e.hasOwnProperty('value') || e.hasOwnProperty('defaultValue')) {
    var r = e.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = '' + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  (n = t.name),
    n !== '' && (t.name = ''),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== '' && (t.name = n);
}
function Wl(t, e, n) {
  (e !== 'number' || Io(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = '' + t._wrapperState.initialValue)
      : t.defaultValue !== '' + n && (t.defaultValue = '' + n));
}
var Ps = Array.isArray;
function Gr(t, e, n, r) {
  if (((t = t.options), e)) {
    e = {};
    for (var s = 0; s < n.length; s++) e['$' + n[s]] = !0;
    for (n = 0; n < t.length; n++)
      (s = e.hasOwnProperty('$' + t[n].value)),
        t[n].selected !== s && (t[n].selected = s),
        s && r && (t[n].defaultSelected = !0);
  } else {
    for (n = '' + Bn(n), e = null, s = 0; s < t.length; s++) {
      if (t[s].value === n) {
        (t[s].selected = !0), r && (t[s].defaultSelected = !0);
        return;
      }
      e !== null || t[s].disabled || (e = t[s]);
    }
    e !== null && (e.selected = !0);
  }
}
function Bl(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(M(91));
  return me({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: '' + t._wrapperState.initialValue
  });
}
function xh(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(M(92));
      if (Ps(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ''), (n = e);
  }
  t._wrapperState = { initialValue: Bn(n) };
}
function Mf(t, e) {
  var n = Bn(e.value),
    r = Bn(e.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = '' + r);
}
function Nh(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== '' && e !== null && (t.value = e);
}
function If(t) {
  switch (t) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Ul(t, e) {
  return t == null || t === 'http://www.w3.org/1999/xhtml'
    ? If(e)
    : t === 'http://www.w3.org/2000/svg' && e === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : t;
}
var Qi,
  Df = (function (t) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (e, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, r, s);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in t)
      t.innerHTML = e;
    else {
      for (
        Qi = Qi || document.createElement('div'),
          Qi.innerHTML = '<svg>' + e.valueOf().toString() + '</svg>',
          e = Qi.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function Qs(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Ls = {
    animationIterationCount: !0,
    aspectRatio: !0,
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
    strokeWidth: !0
  },
  by = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Ls).forEach(function (t) {
  by.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Ls[e] = Ls[t]);
  });
});
function Pf(t, e, n) {
  return e == null || typeof e == 'boolean' || e === ''
    ? ''
    : n || typeof e != 'number' || e === 0 || (Ls.hasOwnProperty(t) && Ls[t])
      ? ('' + e).trim()
      : e + 'px';
}
function Rf(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        s = Pf(n, e[n], r);
      n === 'float' && (n = 'cssFloat'), r ? t.setProperty(n, s) : (t[n] = s);
    }
}
var Ly = me(
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
    wbr: !0
  }
);
function ql(t, e) {
  if (e) {
    if (Ly[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(M(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(M(60));
      if (
        typeof e.dangerouslySetInnerHTML != 'object' ||
        !('__html' in e.dangerouslySetInnerHTML)
      )
        throw Error(M(61));
    }
    if (e.style != null && typeof e.style != 'object') throw Error(M(62));
  }
}
function $l(t, e) {
  if (t.indexOf('-') === -1) return typeof e.is == 'string';
  switch (t) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Hl = null;
function ec(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var Gl = null,
  Kr = null,
  Qr = null;
function Eh(t) {
  if ((t = Di(t))) {
    if (typeof Gl != 'function') throw Error(M(280));
    var e = t.stateNode;
    e && ((e = Oa(e)), Gl(t.stateNode, t.type, e));
  }
}
function Ff(t) {
  Kr ? (Qr ? Qr.push(t) : (Qr = [t])) : (Kr = t);
}
function bf() {
  if (Kr) {
    var t = Kr,
      e = Qr;
    if (((Qr = Kr = null), Eh(t), e)) for (t = 0; t < e.length; t++) Eh(e[t]);
  }
}
function Lf(t, e) {
  return t(e);
}
function Vf() {}
var al = !1;
function jf(t, e, n) {
  if (al) return t(e, n);
  al = !0;
  try {
    return Lf(t, e, n);
  } finally {
    (al = !1), (Kr !== null || Qr !== null) && (Vf(), bf());
  }
}
function Xs(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = Oa(n);
  if (r === null) return null;
  n = r[e];
  e: switch (e) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((t = t.type),
        (r = !(
          t === 'button' ||
          t === 'input' ||
          t === 'select' ||
          t === 'textarea'
        ))),
        (t = !r);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != 'function') throw Error(M(231, e, typeof n));
  return n;
}
var Kl = !1;
if (dn)
  try {
    var xs = {};
    Object.defineProperty(xs, 'passive', {
      get: function () {
        Kl = !0;
      }
    }),
      window.addEventListener('test', xs, xs),
      window.removeEventListener('test', xs, xs);
  } catch {
    Kl = !1;
  }
function Vy(t, e, n, r, s, i, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Vs = !1,
  Do = null,
  Po = !1,
  Ql = null,
  jy = {
    onError: function (t) {
      (Vs = !0), (Do = t);
    }
  };
function zy(t, e, n, r, s, i, o, a, l) {
  (Vs = !1), (Do = null), Vy.apply(jy, arguments);
}
function Wy(t, e, n, r, s, i, o, a, l) {
  if ((zy.apply(this, arguments), Vs)) {
    if (Vs) {
      var u = Do;
      (Vs = !1), (Do = null);
    } else throw Error(M(198));
    Po || ((Po = !0), (Ql = u));
  }
}
function Nr(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function zf(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function Ah(t) {
  if (Nr(t) !== t) throw Error(M(188));
}
function By(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = Nr(t)), e === null)) throw Error(M(188));
    return e !== t ? null : t;
  }
  for (var n = t, r = e; ; ) {
    var s = n.return;
    if (s === null) break;
    var i = s.alternate;
    if (i === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === i.child) {
      for (i = s.child; i; ) {
        if (i === n) return Ah(s), t;
        if (i === r) return Ah(s), e;
        i = i.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== r.return) (n = s), (r = i);
    else {
      for (var o = !1, a = s.child; a; ) {
        if (a === n) {
          (o = !0), (n = s), (r = i);
          break;
        }
        if (a === r) {
          (o = !0), (r = s), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            (o = !0), (n = i), (r = s);
            break;
          }
          if (a === r) {
            (o = !0), (r = i), (n = s);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? t : e;
}
function Wf(t) {
  return (t = By(t)), t !== null ? Bf(t) : null;
}
function Bf(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = Bf(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var Uf = pt.unstable_scheduleCallback,
  Oh = pt.unstable_cancelCallback,
  Uy = pt.unstable_shouldYield,
  qy = pt.unstable_requestPaint,
  ke = pt.unstable_now,
  $y = pt.unstable_getCurrentPriorityLevel,
  tc = pt.unstable_ImmediatePriority,
  qf = pt.unstable_UserBlockingPriority,
  Ro = pt.unstable_NormalPriority,
  Hy = pt.unstable_LowPriority,
  $f = pt.unstable_IdlePriority,
  xa = null,
  Kt = null;
function Gy(t) {
  if (Kt && typeof Kt.onCommitFiberRoot == 'function')
    try {
      Kt.onCommitFiberRoot(xa, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var Lt = Math.clz32 ? Math.clz32 : Xy,
  Ky = Math.log,
  Qy = Math.LN2;
function Xy(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((Ky(t) / Qy) | 0)) | 0;
}
var Xi = 64,
  Yi = 4194304;
function Rs(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function Fo(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = t.suspendedLanes,
    i = t.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~s;
    a !== 0 ? (r = Rs(a)) : ((i &= o), i !== 0 && (r = Rs(i)));
  } else (o = n & ~s), o !== 0 ? (r = Rs(o)) : i !== 0 && (r = Rs(i));
  if (r === 0) return 0;
  if (
    e !== 0 &&
    e !== r &&
    !(e & s) &&
    ((s = r & -r), (i = e & -e), s >= i || (s === 16 && (i & 4194240) !== 0))
  )
    return e;
  if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= r; 0 < e; )
      (n = 31 - Lt(e)), (s = 1 << n), (r |= t[n]), (e &= ~s);
  return r;
}
function Yy(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Zy(t, e) {
  for (
    var n = t.suspendedLanes,
      r = t.pingedLanes,
      s = t.expirationTimes,
      i = t.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Lt(i),
      a = 1 << o,
      l = s[o];
    l === -1
      ? (!(a & n) || a & r) && (s[o] = Yy(a, e))
      : l <= e && (t.expiredLanes |= a),
      (i &= ~a);
  }
}
function Xl(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function Hf() {
  var t = Xi;
  return (Xi <<= 1), !(Xi & 4194240) && (Xi = 64), t;
}
function ll(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function Mi(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - Lt(e)),
    (t[e] = n);
}
function Jy(t, e) {
  var n = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var s = 31 - Lt(n),
      i = 1 << s;
    (e[s] = 0), (r[s] = -1), (t[s] = -1), (n &= ~i);
  }
}
function nc(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var r = 31 - Lt(n),
      s = 1 << r;
    (s & e) | (t[r] & e) && (t[r] |= e), (n &= ~s);
  }
}
var ee = 0;
function Gf(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Kf,
  rc,
  Qf,
  Xf,
  Yf,
  Yl = !1,
  Zi = [],
  Dn = null,
  Pn = null,
  Rn = null,
  Ys = new Map(),
  Zs = new Map(),
  An = [],
  e_ =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Mh(t, e) {
  switch (t) {
    case 'focusin':
    case 'focusout':
      Dn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Pn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Rn = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Ys.delete(e.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Zs.delete(e.pointerId);
  }
}
function Ns(t, e, n, r, s, i) {
  return t === null || t.nativeEvent !== i
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s]
      }),
      e !== null && ((e = Di(e)), e !== null && rc(e)),
      t)
    : ((t.eventSystemFlags |= r),
      (e = t.targetContainers),
      s !== null && e.indexOf(s) === -1 && e.push(s),
      t);
}
function t_(t, e, n, r, s) {
  switch (e) {
    case 'focusin':
      return (Dn = Ns(Dn, t, e, n, r, s)), !0;
    case 'dragenter':
      return (Pn = Ns(Pn, t, e, n, r, s)), !0;
    case 'mouseover':
      return (Rn = Ns(Rn, t, e, n, r, s)), !0;
    case 'pointerover':
      var i = s.pointerId;
      return Ys.set(i, Ns(Ys.get(i) || null, t, e, n, r, s)), !0;
    case 'gotpointercapture':
      return (
        (i = s.pointerId), Zs.set(i, Ns(Zs.get(i) || null, t, e, n, r, s)), !0
      );
  }
  return !1;
}
function Zf(t) {
  var e = ir(t.target);
  if (e !== null) {
    var n = Nr(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = zf(n)), e !== null)) {
          (t.blockedOn = e),
            Yf(t.priority, function () {
              Qf(n);
            });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function _o(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = Zl(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Hl = r), n.target.dispatchEvent(r), (Hl = null);
    } else return (e = Di(n)), e !== null && rc(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function Ih(t, e, n) {
  _o(t) && n.delete(e);
}
function n_() {
  (Yl = !1),
    Dn !== null && _o(Dn) && (Dn = null),
    Pn !== null && _o(Pn) && (Pn = null),
    Rn !== null && _o(Rn) && (Rn = null),
    Ys.forEach(Ih),
    Zs.forEach(Ih);
}
function Es(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    Yl ||
      ((Yl = !0),
      pt.unstable_scheduleCallback(pt.unstable_NormalPriority, n_)));
}
function Js(t) {
  function e(s) {
    return Es(s, t);
  }
  if (0 < Zi.length) {
    Es(Zi[0], t);
    for (var n = 1; n < Zi.length; n++) {
      var r = Zi[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (
    Dn !== null && Es(Dn, t),
      Pn !== null && Es(Pn, t),
      Rn !== null && Es(Rn, t),
      Ys.forEach(e),
      Zs.forEach(e),
      n = 0;
    n < An.length;
    n++
  )
    (r = An[n]), r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < An.length && ((n = An[0]), n.blockedOn === null); )
    Zf(n), n.blockedOn === null && An.shift();
}
var Xr = _n.ReactCurrentBatchConfig,
  bo = !0;
function r_(t, e, n, r) {
  var s = ee,
    i = Xr.transition;
  Xr.transition = null;
  try {
    (ee = 1), sc(t, e, n, r);
  } finally {
    (ee = s), (Xr.transition = i);
  }
}
function s_(t, e, n, r) {
  var s = ee,
    i = Xr.transition;
  Xr.transition = null;
  try {
    (ee = 4), sc(t, e, n, r);
  } finally {
    (ee = s), (Xr.transition = i);
  }
}
function sc(t, e, n, r) {
  if (bo) {
    var s = Zl(t, e, n, r);
    if (s === null) _l(t, e, r, Lo, n), Mh(t, r);
    else if (t_(s, t, e, n, r)) r.stopPropagation();
    else if ((Mh(t, r), e & 4 && -1 < e_.indexOf(t))) {
      for (; s !== null; ) {
        var i = Di(s);
        if (
          (i !== null && Kf(i),
          (i = Zl(t, e, n, r)),
          i === null && _l(t, e, r, Lo, n),
          i === s)
        )
          break;
        s = i;
      }
      s !== null && r.stopPropagation();
    } else _l(t, e, r, null, n);
  }
}
var Lo = null;
function Zl(t, e, n, r) {
  if (((Lo = null), (t = ec(r)), (t = ir(t)), t !== null))
    if (((e = Nr(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = zf(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (Lo = t), null;
}
function Jf(t) {
  switch (t) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch ($y()) {
        case tc:
          return 1;
        case qf:
          return 4;
        case Ro:
        case Hy:
          return 16;
        case $f:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mn = null,
  ic = null,
  vo = null;
function ep() {
  if (vo) return vo;
  var t,
    e = ic,
    n = e.length,
    r,
    s = 'value' in Mn ? Mn.value : Mn.textContent,
    i = s.length;
  for (t = 0; t < n && e[t] === s[t]; t++);
  var o = n - t;
  for (r = 1; r <= o && e[n - r] === s[i - r]; r++);
  return (vo = s.slice(t, 1 < r ? 1 - r : void 0));
}
function wo(t) {
  var e = t.keyCode;
  return (
    'charCode' in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function Ji() {
  return !0;
}
function Dh() {
  return !1;
}
function vt(t) {
  function e(n, r, s, i, o) {
    (this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in t)
      t.hasOwnProperty(a) && ((n = t[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ji
        : Dh),
      (this.isPropagationStopped = Dh),
      this
    );
  }
  return (
    me(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Ji));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ji));
      },
      persist: function () {},
      isPersistent: Ji
    }),
    e
  );
}
var ms = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  oc = vt(ms),
  Ii = me({}, ms, { view: 0, detail: 0 }),
  i_ = vt(Ii),
  ul,
  cl,
  As,
  Na = me({}, Ii, {
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
    getModifierState: ac,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return 'movementX' in t
        ? t.movementX
        : (t !== As &&
            (As && t.type === 'mousemove'
              ? ((ul = t.screenX - As.screenX), (cl = t.screenY - As.screenY))
              : (cl = ul = 0),
            (As = t)),
          ul);
    },
    movementY: function (t) {
      return 'movementY' in t ? t.movementY : cl;
    }
  }),
  Ph = vt(Na),
  o_ = me({}, Na, { dataTransfer: 0 }),
  a_ = vt(o_),
  l_ = me({}, Ii, { relatedTarget: 0 }),
  hl = vt(l_),
  u_ = me({}, ms, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  c_ = vt(u_),
  h_ = me({}, ms, {
    clipboardData: function (t) {
      return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
    }
  }),
  d_ = vt(h_),
  f_ = me({}, ms, { data: 0 }),
  Rh = vt(f_),
  p_ = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified'
  },
  m_ = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta'
  },
  g_ = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey'
  };
function y_(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = g_[t]) ? !!e[t] : !1;
}
function ac() {
  return y_;
}
var __ = me({}, Ii, {
    key: function (t) {
      if (t.key) {
        var e = p_[t.key] || t.key;
        if (e !== 'Unidentified') return e;
      }
      return t.type === 'keypress'
        ? ((t = wo(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
        : t.type === 'keydown' || t.type === 'keyup'
          ? m_[t.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ac,
    charCode: function (t) {
      return t.type === 'keypress' ? wo(t) : 0;
    },
    keyCode: function (t) {
      return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === 'keypress'
        ? wo(t)
        : t.type === 'keydown' || t.type === 'keyup'
          ? t.keyCode
          : 0;
    }
  }),
  v_ = vt(__),
  w_ = me({}, Na, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  Fh = vt(w_),
  S_ = me({}, Ii, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ac
  }),
  T_ = vt(S_),
  k_ = me({}, ms, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  C_ = vt(k_),
  x_ = me({}, Na, {
    deltaX: function (t) {
      return 'deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return 'deltaY' in t
        ? t.deltaY
        : 'wheelDeltaY' in t
          ? -t.wheelDeltaY
          : 'wheelDelta' in t
            ? -t.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  N_ = vt(x_),
  E_ = [9, 13, 27, 32],
  lc = dn && 'CompositionEvent' in window,
  js = null;
dn && 'documentMode' in document && (js = document.documentMode);
var A_ = dn && 'TextEvent' in window && !js,
  tp = dn && (!lc || (js && 8 < js && 11 >= js)),
  bh = ' ',
  Lh = !1;
function np(t, e) {
  switch (t) {
    case 'keyup':
      return E_.indexOf(e.keyCode) !== -1;
    case 'keydown':
      return e.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function rp(t) {
  return (t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null;
}
var br = !1;
function O_(t, e) {
  switch (t) {
    case 'compositionend':
      return rp(e);
    case 'keypress':
      return e.which !== 32 ? null : ((Lh = !0), bh);
    case 'textInput':
      return (t = e.data), t === bh && Lh ? null : t;
    default:
      return null;
  }
}
function M_(t, e) {
  if (br)
    return t === 'compositionend' || (!lc && np(t, e))
      ? ((t = ep()), (vo = ic = Mn = null), (br = !1), t)
      : null;
  switch (t) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case 'compositionend':
      return tp && e.locale !== 'ko' ? null : e.data;
    default:
      return null;
  }
}
var I_ = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
  week: !0
};
function Vh(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === 'input' ? !!I_[t.type] : e === 'textarea';
}
function sp(t, e, n, r) {
  Ff(r),
    (e = Vo(e, 'onChange')),
    0 < e.length &&
      ((n = new oc('onChange', 'change', null, n, r)),
      t.push({ event: n, listeners: e }));
}
var zs = null,
  ei = null;
function D_(t) {
  mp(t, 0);
}
function Ea(t) {
  var e = jr(t);
  if (Af(e)) return t;
}
function P_(t, e) {
  if (t === 'change') return e;
}
var ip = !1;
if (dn) {
  var dl;
  if (dn) {
    var fl = 'oninput' in document;
    if (!fl) {
      var jh = document.createElement('div');
      jh.setAttribute('oninput', 'return;'),
        (fl = typeof jh.oninput == 'function');
    }
    dl = fl;
  } else dl = !1;
  ip = dl && (!document.documentMode || 9 < document.documentMode);
}
function zh() {
  zs && (zs.detachEvent('onpropertychange', op), (ei = zs = null));
}
function op(t) {
  if (t.propertyName === 'value' && Ea(ei)) {
    var e = [];
    sp(e, ei, t, ec(t)), jf(D_, e);
  }
}
function R_(t, e, n) {
  t === 'focusin'
    ? (zh(), (zs = e), (ei = n), zs.attachEvent('onpropertychange', op))
    : t === 'focusout' && zh();
}
function F_(t) {
  if (t === 'selectionchange' || t === 'keyup' || t === 'keydown')
    return Ea(ei);
}
function b_(t, e) {
  if (t === 'click') return Ea(e);
}
function L_(t, e) {
  if (t === 'input' || t === 'change') return Ea(e);
}
function V_(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var zt = typeof Object.is == 'function' ? Object.is : V_;
function ti(t, e) {
  if (zt(t, e)) return !0;
  if (typeof t != 'object' || t === null || typeof e != 'object' || e === null)
    return !1;
  var n = Object.keys(t),
    r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!Rl.call(e, s) || !zt(t[s], e[s])) return !1;
  }
  return !0;
}
function Wh(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function Bh(t, e) {
  var n = Wh(t);
  t = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = t + n.textContent.length), t <= e && r >= e))
        return { node: n, offset: e - t };
      t = r;
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
    n = Wh(n);
  }
}
function ap(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
          ? ap(t, e.parentNode)
          : 'contains' in t
            ? t.contains(e)
            : t.compareDocumentPosition
              ? !!(t.compareDocumentPosition(e) & 16)
              : !1
    : !1;
}
function lp() {
  for (var t = window, e = Io(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = Io(t.document);
  }
  return e;
}
function uc(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === 'input' &&
      (t.type === 'text' ||
        t.type === 'search' ||
        t.type === 'tel' ||
        t.type === 'url' ||
        t.type === 'password')) ||
      e === 'textarea' ||
      t.contentEditable === 'true')
  );
}
function j_(t) {
  var e = lp(),
    n = t.focusedElem,
    r = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    ap(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && uc(n)) {
      if (
        ((e = r.start),
        (t = r.end),
        t === void 0 && (t = e),
        'selectionStart' in n)
      )
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var s = n.textContent.length,
          i = Math.min(r.start, s);
        (r = r.end === void 0 ? i : Math.min(r.end, s)),
          !t.extend && i > r && ((s = r), (r = i), (i = s)),
          (s = Bh(n, i));
        var o = Bh(n, r);
        s &&
          o &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== s.node ||
            t.anchorOffset !== s.offset ||
            t.focusNode !== o.node ||
            t.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(s.node, s.offset),
          t.removeAllRanges(),
          i > r
            ? (t.addRange(e), t.extend(o.node, o.offset))
            : (e.setEnd(o.node, o.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < e.length; n++)
      (t = e[n]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top);
  }
}
var z_ = dn && 'documentMode' in document && 11 >= document.documentMode,
  Lr = null,
  Jl = null,
  Ws = null,
  eu = !1;
function Uh(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  eu ||
    Lr == null ||
    Lr !== Io(r) ||
    ((r = Lr),
    'selectionStart' in r && uc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        })),
    (Ws && ti(Ws, r)) ||
      ((Ws = r),
      (r = Vo(Jl, 'onSelect')),
      0 < r.length &&
        ((e = new oc('onSelect', 'select', null, e, n)),
        t.push({ event: e, listeners: r }),
        (e.target = Lr))));
}
function eo(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n['Webkit' + t] = 'webkit' + e),
    (n['Moz' + t] = 'moz' + e),
    n
  );
}
var Vr = {
    animationend: eo('Animation', 'AnimationEnd'),
    animationiteration: eo('Animation', 'AnimationIteration'),
    animationstart: eo('Animation', 'AnimationStart'),
    transitionend: eo('Transition', 'TransitionEnd')
  },
  pl = {},
  up = {};
dn &&
  ((up = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Vr.animationend.animation,
    delete Vr.animationiteration.animation,
    delete Vr.animationstart.animation),
  'TransitionEvent' in window || delete Vr.transitionend.transition);
function Aa(t) {
  if (pl[t]) return pl[t];
  if (!Vr[t]) return t;
  var e = Vr[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in up) return (pl[t] = e[n]);
  return t;
}
var cp = Aa('animationend'),
  hp = Aa('animationiteration'),
  dp = Aa('animationstart'),
  fp = Aa('transitionend'),
  pp = new Map(),
  qh =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Kn(t, e) {
  pp.set(t, e), xr(e, [t]);
}
for (var ml = 0; ml < qh.length; ml++) {
  var gl = qh[ml],
    W_ = gl.toLowerCase(),
    B_ = gl[0].toUpperCase() + gl.slice(1);
  Kn(W_, 'on' + B_);
}
Kn(cp, 'onAnimationEnd');
Kn(hp, 'onAnimationIteration');
Kn(dp, 'onAnimationStart');
Kn('dblclick', 'onDoubleClick');
Kn('focusin', 'onFocus');
Kn('focusout', 'onBlur');
Kn(fp, 'onTransitionEnd');
ts('onMouseEnter', ['mouseout', 'mouseover']);
ts('onMouseLeave', ['mouseout', 'mouseover']);
ts('onPointerEnter', ['pointerout', 'pointerover']);
ts('onPointerLeave', ['pointerout', 'pointerover']);
xr(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
xr(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
xr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
xr(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
xr(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
xr(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Fs =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  U_ = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Fs));
function $h(t, e, n) {
  var r = t.type || 'unknown-event';
  (t.currentTarget = n), Wy(r, e, void 0, t), (t.currentTarget = null);
}
function mp(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n],
      s = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (e)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && s.isPropagationStopped())) break e;
          $h(s, a, u), (i = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && s.isPropagationStopped())
          )
            break e;
          $h(s, a, u), (i = l);
        }
    }
  }
  if (Po) throw ((t = Ql), (Po = !1), (Ql = null), t);
}
function oe(t, e) {
  var n = e[iu];
  n === void 0 && (n = e[iu] = new Set());
  var r = t + '__bubble';
  n.has(r) || (gp(e, t, 2, !1), n.add(r));
}
function yl(t, e, n) {
  var r = 0;
  e && (r |= 4), gp(n, t, r, e);
}
var to = '_reactListening' + Math.random().toString(36).slice(2);
function ni(t) {
  if (!t[to]) {
    (t[to] = !0),
      kf.forEach(function (n) {
        n !== 'selectionchange' && (U_.has(n) || yl(n, !1, t), yl(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[to] || ((e[to] = !0), yl('selectionchange', !1, e));
  }
}
function gp(t, e, n, r) {
  switch (Jf(e)) {
    case 1:
      var s = r_;
      break;
    case 4:
      s = s_;
      break;
    default:
      s = sc;
  }
  (n = s.bind(null, e, n, t)),
    (s = void 0),
    !Kl ||
      (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') ||
      (s = !0),
    r
      ? s !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: s })
        : t.addEventListener(e, n, !0)
      : s !== void 0
        ? t.addEventListener(e, n, { passive: s })
        : t.addEventListener(e, n, !1);
}
function _l(t, e, n, r, s) {
  var i = r;
  if (!(e & 1) && !(e & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === s || (l.nodeType === 8 && l.parentNode === s))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = ir(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  jf(function () {
    var u = i,
      c = ec(n),
      h = [];
    e: {
      var d = pp.get(t);
      if (d !== void 0) {
        var m = oc,
          p = t;
        switch (t) {
          case 'keypress':
            if (wo(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            m = v_;
            break;
          case 'focusin':
            (p = 'focus'), (m = hl);
            break;
          case 'focusout':
            (p = 'blur'), (m = hl);
            break;
          case 'beforeblur':
          case 'afterblur':
            m = hl;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            m = Ph;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            m = a_;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            m = T_;
            break;
          case cp:
          case hp:
          case dp:
            m = c_;
            break;
          case fp:
            m = C_;
            break;
          case 'scroll':
            m = i_;
            break;
          case 'wheel':
            m = N_;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            m = d_;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            m = Fh;
        }
        var _ = (e & 4) !== 0,
          w = !_ && t === 'scroll',
          f = _ ? (d !== null ? d + 'Capture' : null) : d;
        _ = [];
        for (var g = u, y; g !== null; ) {
          y = g;
          var T = y.stateNode;
          if (
            (y.tag === 5 &&
              T !== null &&
              ((y = T),
              f !== null && ((T = Xs(g, f)), T != null && _.push(ri(g, T, y)))),
            w)
          )
            break;
          g = g.return;
        }
        0 < _.length &&
          ((d = new m(d, p, null, n, c)), h.push({ event: d, listeners: _ }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((d = t === 'mouseover' || t === 'pointerover'),
          (m = t === 'mouseout' || t === 'pointerout'),
          d &&
            n !== Hl &&
            (p = n.relatedTarget || n.fromElement) &&
            (ir(p) || p[fn]))
        )
          break e;
        if (
          (m || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          m
            ? ((p = n.relatedTarget || n.toElement),
              (m = u),
              (p = p ? ir(p) : null),
              p !== null &&
                ((w = Nr(p)), p !== w || (p.tag !== 5 && p.tag !== 6)) &&
                (p = null))
            : ((m = null), (p = u)),
          m !== p)
        ) {
          if (
            ((_ = Ph),
            (T = 'onMouseLeave'),
            (f = 'onMouseEnter'),
            (g = 'mouse'),
            (t === 'pointerout' || t === 'pointerover') &&
              ((_ = Fh),
              (T = 'onPointerLeave'),
              (f = 'onPointerEnter'),
              (g = 'pointer')),
            (w = m == null ? d : jr(m)),
            (y = p == null ? d : jr(p)),
            (d = new _(T, g + 'leave', m, n, c)),
            (d.target = w),
            (d.relatedTarget = y),
            (T = null),
            ir(c) === u &&
              ((_ = new _(f, g + 'enter', p, n, c)),
              (_.target = y),
              (_.relatedTarget = w),
              (T = _)),
            (w = T),
            m && p)
          )
            t: {
              for (_ = m, f = p, g = 0, y = _; y; y = Dr(y)) g++;
              for (y = 0, T = f; T; T = Dr(T)) y++;
              for (; 0 < g - y; ) (_ = Dr(_)), g--;
              for (; 0 < y - g; ) (f = Dr(f)), y--;
              for (; g--; ) {
                if (_ === f || (f !== null && _ === f.alternate)) break t;
                (_ = Dr(_)), (f = Dr(f));
              }
              _ = null;
            }
          else _ = null;
          m !== null && Hh(h, d, m, _, !1),
            p !== null && w !== null && Hh(h, w, p, _, !0);
        }
      }
      e: {
        if (
          ((d = u ? jr(u) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === 'select' || (m === 'input' && d.type === 'file'))
        )
          var v = P_;
        else if (Vh(d))
          if (ip) v = L_;
          else {
            v = F_;
            var k = R_;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (v = b_);
        if (v && (v = v(t, u))) {
          sp(h, v, n, c);
          break e;
        }
        k && k(t, d, u),
          t === 'focusout' &&
            (k = d._wrapperState) &&
            k.controlled &&
            d.type === 'number' &&
            Wl(d, 'number', d.value);
      }
      switch (((k = u ? jr(u) : window), t)) {
        case 'focusin':
          (Vh(k) || k.contentEditable === 'true') &&
            ((Lr = k), (Jl = u), (Ws = null));
          break;
        case 'focusout':
          Ws = Jl = Lr = null;
          break;
        case 'mousedown':
          eu = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (eu = !1), Uh(h, n, c);
          break;
        case 'selectionchange':
          if (z_) break;
        case 'keydown':
        case 'keyup':
          Uh(h, n, c);
      }
      var C;
      if (lc)
        e: {
          switch (t) {
            case 'compositionstart':
              var S = 'onCompositionStart';
              break e;
            case 'compositionend':
              S = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              S = 'onCompositionUpdate';
              break e;
          }
          S = void 0;
        }
      else
        br
          ? np(t, n) && (S = 'onCompositionEnd')
          : t === 'keydown' && n.keyCode === 229 && (S = 'onCompositionStart');
      S &&
        (tp &&
          n.locale !== 'ko' &&
          (br || S !== 'onCompositionStart'
            ? S === 'onCompositionEnd' && br && (C = ep())
            : ((Mn = c),
              (ic = 'value' in Mn ? Mn.value : Mn.textContent),
              (br = !0))),
        (k = Vo(u, S)),
        0 < k.length &&
          ((S = new Rh(S, t, null, n, c)),
          h.push({ event: S, listeners: k }),
          C ? (S.data = C) : ((C = rp(n)), C !== null && (S.data = C)))),
        (C = A_ ? O_(t, n) : M_(t, n)) &&
          ((u = Vo(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new Rh('onBeforeInput', 'beforeinput', null, n, c)),
            h.push({ event: c, listeners: u }),
            (c.data = C)));
    }
    mp(h, e);
  });
}
function ri(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function Vo(t, e) {
  for (var n = e + 'Capture', r = []; t !== null; ) {
    var s = t,
      i = s.stateNode;
    s.tag === 5 &&
      i !== null &&
      ((s = i),
      (i = Xs(t, n)),
      i != null && r.unshift(ri(t, i, s)),
      (i = Xs(t, e)),
      i != null && r.push(ri(t, i, s))),
      (t = t.return);
  }
  return r;
}
function Dr(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function Hh(t, e, n, r, s) {
  for (var i = e._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      s
        ? ((l = Xs(n, i)), l != null && o.unshift(ri(n, l, a)))
        : s || ((l = Xs(n, i)), l != null && o.push(ri(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && t.push({ event: e, listeners: o });
}
var q_ = /\r\n?/g,
  $_ = /\u0000|\uFFFD/g;
function Gh(t) {
  return (typeof t == 'string' ? t : '' + t)
    .replace(
      q_,
      `
`
    )
    .replace($_, '');
}
function no(t, e, n) {
  if (((e = Gh(e)), Gh(t) !== e && n)) throw Error(M(425));
}
function jo() {}
var tu = null,
  nu = null;
function ru(t, e) {
  return (
    t === 'textarea' ||
    t === 'noscript' ||
    typeof e.children == 'string' ||
    typeof e.children == 'number' ||
    (typeof e.dangerouslySetInnerHTML == 'object' &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var su = typeof setTimeout == 'function' ? setTimeout : void 0,
  H_ = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Kh = typeof Promise == 'function' ? Promise : void 0,
  G_ =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Kh < 'u'
        ? function (t) {
            return Kh.resolve(null).then(t).catch(K_);
          }
        : su;
function K_(t) {
  setTimeout(function () {
    throw t;
  });
}
function vl(t, e) {
  var n = e,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((t.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === '/$')) {
        if (r === 0) {
          t.removeChild(s), Js(e);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = s;
  } while (n);
  Js(e);
}
function Fn(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === '$' || e === '$!' || e === '$?')) break;
      if (e === '/$') return null;
    }
  }
  return t;
}
function Qh(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (e === 0) return t;
        e--;
      } else n === '/$' && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var gs = Math.random().toString(36).slice(2),
  Gt = '__reactFiber$' + gs,
  si = '__reactProps$' + gs,
  fn = '__reactContainer$' + gs,
  iu = '__reactEvents$' + gs,
  Q_ = '__reactListeners$' + gs,
  X_ = '__reactHandles$' + gs;
function ir(t) {
  var e = t[Gt];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[fn] || n[Gt])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = Qh(t); t !== null; ) {
          if ((n = t[Gt])) return n;
          t = Qh(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function Di(t) {
  return (
    (t = t[Gt] || t[fn]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function jr(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(M(33));
}
function Oa(t) {
  return t[si] || null;
}
var ou = [],
  zr = -1;
function Qn(t) {
  return { current: t };
}
function ae(t) {
  0 > zr || ((t.current = ou[zr]), (ou[zr] = null), zr--);
}
function se(t, e) {
  zr++, (ou[zr] = t.current), (t.current = e);
}
var Un = {},
  $e = Qn(Un),
  st = Qn(!1),
  dr = Un;
function ns(t, e) {
  var n = t.type.contextTypes;
  if (!n) return Un;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    i;
  for (i in n) s[i] = e[i];
  return (
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function it(t) {
  return (t = t.childContextTypes), t != null;
}
function zo() {
  ae(st), ae($e);
}
function Xh(t, e, n) {
  if ($e.current !== Un) throw Error(M(168));
  se($e, e), se(st, n);
}
function yp(t, e, n) {
  var r = t.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in e)) throw Error(M(108, Ry(t) || 'Unknown', s));
  return me({}, n, r);
}
function Wo(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Un),
    (dr = $e.current),
    se($e, t),
    se(st, st.current),
    !0
  );
}
function Yh(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(M(169));
  n
    ? ((t = yp(t, e, dr)),
      (r.__reactInternalMemoizedMergedChildContext = t),
      ae(st),
      ae($e),
      se($e, t))
    : ae(st),
    se(st, n);
}
var sn = null,
  Ma = !1,
  wl = !1;
function _p(t) {
  sn === null ? (sn = [t]) : sn.push(t);
}
function Y_(t) {
  (Ma = !0), _p(t);
}
function Xn() {
  if (!wl && sn !== null) {
    wl = !0;
    var t = 0,
      e = ee;
    try {
      var n = sn;
      for (ee = 1; t < n.length; t++) {
        var r = n[t];
        do r = r(!0);
        while (r !== null);
      }
      (sn = null), (Ma = !1);
    } catch (s) {
      throw (sn !== null && (sn = sn.slice(t + 1)), Uf(tc, Xn), s);
    } finally {
      (ee = e), (wl = !1);
    }
  }
  return null;
}
var Wr = [],
  Br = 0,
  Bo = null,
  Uo = 0,
  St = [],
  Tt = 0,
  fr = null,
  an = 1,
  ln = '';
function tr(t, e) {
  (Wr[Br++] = Uo), (Wr[Br++] = Bo), (Bo = t), (Uo = e);
}
function vp(t, e, n) {
  (St[Tt++] = an), (St[Tt++] = ln), (St[Tt++] = fr), (fr = t);
  var r = an;
  t = ln;
  var s = 32 - Lt(r) - 1;
  (r &= ~(1 << s)), (n += 1);
  var i = 32 - Lt(e) + s;
  if (30 < i) {
    var o = s - (s % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (s -= o),
      (an = (1 << (32 - Lt(e) + s)) | (n << s) | r),
      (ln = i + t);
  } else (an = (1 << i) | (n << s) | r), (ln = t);
}
function cc(t) {
  t.return !== null && (tr(t, 1), vp(t, 1, 0));
}
function hc(t) {
  for (; t === Bo; )
    (Bo = Wr[--Br]), (Wr[Br] = null), (Uo = Wr[--Br]), (Wr[Br] = null);
  for (; t === fr; )
    (fr = St[--Tt]),
      (St[Tt] = null),
      (ln = St[--Tt]),
      (St[Tt] = null),
      (an = St[--Tt]),
      (St[Tt] = null);
}
var ft = null,
  ht = null,
  he = !1,
  Dt = null;
function wp(t, e) {
  var n = kt(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function Zh(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (ft = t), (ht = Fn(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === '' || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (ft = t), (ht = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = fr !== null ? { id: an, overflow: ln } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824
            }),
            (n = kt(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (ft = t),
            (ht = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function au(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function lu(t) {
  if (he) {
    var e = ht;
    if (e) {
      var n = e;
      if (!Zh(t, e)) {
        if (au(t)) throw Error(M(418));
        e = Fn(n.nextSibling);
        var r = ft;
        e && Zh(t, e)
          ? wp(r, n)
          : ((t.flags = (t.flags & -4097) | 2), (he = !1), (ft = t));
      }
    } else {
      if (au(t)) throw Error(M(418));
      (t.flags = (t.flags & -4097) | 2), (he = !1), (ft = t);
    }
  }
}
function Jh(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  ft = t;
}
function ro(t) {
  if (t !== ft) return !1;
  if (!he) return Jh(t), (he = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== 'head' && e !== 'body' && !ru(t.type, t.memoizedProps))),
    e && (e = ht))
  ) {
    if (au(t)) throw (Sp(), Error(M(418)));
    for (; e; ) wp(t, e), (e = Fn(e.nextSibling));
  }
  if ((Jh(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(M(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === '/$') {
            if (e === 0) {
              ht = Fn(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || e++;
        }
        t = t.nextSibling;
      }
      ht = null;
    }
  } else ht = ft ? Fn(t.stateNode.nextSibling) : null;
  return !0;
}
function Sp() {
  for (var t = ht; t; ) t = Fn(t.nextSibling);
}
function rs() {
  (ht = ft = null), (he = !1);
}
function dc(t) {
  Dt === null ? (Dt = [t]) : Dt.push(t);
}
var Z_ = _n.ReactCurrentBatchConfig;
function Mt(t, e) {
  if (t && t.defaultProps) {
    (e = me({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
var qo = Qn(null),
  $o = null,
  Ur = null,
  fc = null;
function pc() {
  fc = Ur = $o = null;
}
function mc(t) {
  var e = qo.current;
  ae(qo), (t._currentValue = e);
}
function uu(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function Yr(t, e) {
  ($o = t),
    (fc = Ur = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (rt = !0), (t.firstContext = null));
}
function Et(t) {
  var e = t._currentValue;
  if (fc !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), Ur === null)) {
      if ($o === null) throw Error(M(308));
      (Ur = t), ($o.dependencies = { lanes: 0, firstContext: t });
    } else Ur = Ur.next = t;
  return e;
}
var or = null;
function gc(t) {
  or === null ? (or = [t]) : or.push(t);
}
function Tp(t, e, n, r) {
  var s = e.interleaved;
  return (
    s === null ? ((n.next = n), gc(e)) : ((n.next = s.next), (s.next = n)),
    (e.interleaved = n),
    pn(t, r)
  );
}
function pn(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Nn = !1;
function yc(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  };
}
function kp(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects
      });
}
function un(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  };
}
function bn(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Y & 2)) {
    var s = r.pending;
    return (
      s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
      (r.pending = e),
      pn(t, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((e.next = e), gc(r)) : ((e.next = s.next), (s.next = e)),
    (r.interleaved = e),
    pn(t, n)
  );
}
function So(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), nc(t, n);
  }
}
function ed(t, e) {
  var n = t.updateQueue,
    r = t.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        };
        i === null ? (s = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (s = i = e) : (i = i.next = e);
    } else s = i = e;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects
    }),
      (t.updateQueue = n);
    return;
  }
  (t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e);
}
function Ho(t, e, n, r) {
  var s = t.updateQueue;
  Nn = !1;
  var i = s.firstBaseUpdate,
    o = s.lastBaseUpdate,
    a = s.shared.pending;
  if (a !== null) {
    s.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (i = u) : (o.next = u), (o = l);
    var c = t.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var h = s.baseState;
    (o = 0), (c = u = l = null), (a = i);
    do {
      var d = a.lane,
        m = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null
            });
        e: {
          var p = t,
            _ = a;
          switch (((d = e), (m = n), _.tag)) {
            case 1:
              if (((p = _.payload), typeof p == 'function')) {
                h = p.call(m, h, d);
                break e;
              }
              h = p;
              break e;
            case 3:
              p.flags = (p.flags & -65537) | 128;
            case 0:
              if (
                ((p = _.payload),
                (d = typeof p == 'function' ? p.call(m, h, d) : p),
                d == null)
              )
                break e;
              h = me({}, h, d);
              break e;
            case 2:
              Nn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((t.flags |= 64),
          (d = s.effects),
          d === null ? (s.effects = [a]) : d.push(a));
      } else
        (m = {
          eventTime: m,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        }),
          c === null ? ((u = c = m), (l = h)) : (c = c.next = m),
          (o |= d);
      if (((a = a.next), a === null)) {
        if (((a = s.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (s.lastBaseUpdate = d),
          (s.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = h),
      (s.baseState = l),
      (s.firstBaseUpdate = u),
      (s.lastBaseUpdate = c),
      (e = s.shared.interleaved),
      e !== null)
    ) {
      s = e;
      do (o |= s.lane), (s = s.next);
      while (s !== e);
    } else i === null && (s.shared.lanes = 0);
    (mr |= o), (t.lanes = o), (t.memoizedState = h);
  }
}
function td(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var r = t[e],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != 'function'))
          throw Error(M(191, s));
        s.call(r);
      }
    }
}
var Cp = new Tf.Component().refs;
function cu(t, e, n, r) {
  (e = t.memoizedState),
    (n = n(r, e)),
    (n = n == null ? e : me({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var Ia = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? Nr(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var r = Xe(),
      s = Vn(t),
      i = un(r, s);
    (i.payload = e),
      n != null && (i.callback = n),
      (e = bn(t, i, s)),
      e !== null && (Vt(e, t, s, r), So(e, t, s));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var r = Xe(),
      s = Vn(t),
      i = un(r, s);
    (i.tag = 1),
      (i.payload = e),
      n != null && (i.callback = n),
      (e = bn(t, i, s)),
      e !== null && (Vt(e, t, s, r), So(e, t, s));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = Xe(),
      r = Vn(t),
      s = un(n, r);
    (s.tag = 2),
      e != null && (s.callback = e),
      (e = bn(t, s, r)),
      e !== null && (Vt(e, t, r, n), So(e, t, r));
  }
};
function nd(t, e, n, r, s, i, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == 'function'
      ? t.shouldComponentUpdate(r, i, o)
      : e.prototype && e.prototype.isPureReactComponent
        ? !ti(n, r) || !ti(s, i)
        : !0
  );
}
function xp(t, e, n) {
  var r = !1,
    s = Un,
    i = e.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = Et(i))
      : ((s = it(e) ? dr : $e.current),
        (r = e.contextTypes),
        (i = (r = r != null) ? ns(t, s) : Un)),
    (e = new e(n, i)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = Ia),
    (t.stateNode = e),
    (e._reactInternals = t),
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = s),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    e
  );
}
function rd(t, e, n, r) {
  (t = e.state),
    typeof e.componentWillReceiveProps == 'function' &&
      e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
      e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && Ia.enqueueReplaceState(e, e.state, null);
}
function hu(t, e, n, r) {
  var s = t.stateNode;
  (s.props = n), (s.state = t.memoizedState), (s.refs = Cp), yc(t);
  var i = e.contextType;
  typeof i == 'object' && i !== null
    ? (s.context = Et(i))
    : ((i = it(e) ? dr : $e.current), (s.context = ns(t, i))),
    (s.state = t.memoizedState),
    (i = e.getDerivedStateFromProps),
    typeof i == 'function' && (cu(t, e, i, n), (s.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == 'function' ||
      typeof s.getSnapshotBeforeUpdate == 'function' ||
      (typeof s.UNSAFE_componentWillMount != 'function' &&
        typeof s.componentWillMount != 'function') ||
      ((e = s.state),
      typeof s.componentWillMount == 'function' && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == 'function' &&
        s.UNSAFE_componentWillMount(),
      e !== s.state && Ia.enqueueReplaceState(s, s.state, null),
      Ho(t, n, s, r),
      (s.state = t.memoizedState)),
    typeof s.componentDidMount == 'function' && (t.flags |= 4194308);
}
function Os(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != 'function' && typeof t != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, t));
      var s = r,
        i = '' + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == 'function' &&
        e.ref._stringRef === i
        ? e.ref
        : ((e = function (o) {
            var a = s.refs;
            a === Cp && (a = s.refs = {}),
              o === null ? delete a[i] : (a[i] = o);
          }),
          (e._stringRef = i),
          e);
    }
    if (typeof t != 'string') throw Error(M(284));
    if (!n._owner) throw Error(M(290, t));
  }
  return t;
}
function so(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      M(
        31,
        t === '[object Object]'
          ? 'object with keys {' + Object.keys(e).join(', ') + '}'
          : t
      )
    ))
  );
}
function sd(t) {
  var e = t._init;
  return e(t._payload);
}
function Np(t) {
  function e(f, g) {
    if (t) {
      var y = f.deletions;
      y === null ? ((f.deletions = [g]), (f.flags |= 16)) : y.push(g);
    }
  }
  function n(f, g) {
    if (!t) return null;
    for (; g !== null; ) e(f, g), (g = g.sibling);
    return null;
  }
  function r(f, g) {
    for (f = new Map(); g !== null; )
      g.key !== null ? f.set(g.key, g) : f.set(g.index, g), (g = g.sibling);
    return f;
  }
  function s(f, g) {
    return (f = jn(f, g)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, g, y) {
    return (
      (f.index = y),
      t
        ? ((y = f.alternate),
          y !== null
            ? ((y = y.index), y < g ? ((f.flags |= 2), g) : y)
            : ((f.flags |= 2), g))
        : ((f.flags |= 1048576), g)
    );
  }
  function o(f) {
    return t && f.alternate === null && (f.flags |= 2), f;
  }
  function a(f, g, y, T) {
    return g === null || g.tag !== 6
      ? ((g = El(y, f.mode, T)), (g.return = f), g)
      : ((g = s(g, y)), (g.return = f), g);
  }
  function l(f, g, y, T) {
    var v = y.type;
    return v === Fr
      ? c(f, g, y.props.children, T, y.key)
      : g !== null &&
          (g.elementType === v ||
            (typeof v == 'object' &&
              v !== null &&
              v.$$typeof === xn &&
              sd(v) === g.type))
        ? ((T = s(g, y.props)), (T.ref = Os(f, g, y)), (T.return = f), T)
        : ((T = Eo(y.type, y.key, y.props, null, f.mode, T)),
          (T.ref = Os(f, g, y)),
          (T.return = f),
          T);
  }
  function u(f, g, y, T) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== y.containerInfo ||
      g.stateNode.implementation !== y.implementation
      ? ((g = Al(y, f.mode, T)), (g.return = f), g)
      : ((g = s(g, y.children || [])), (g.return = f), g);
  }
  function c(f, g, y, T, v) {
    return g === null || g.tag !== 7
      ? ((g = ur(y, f.mode, T, v)), (g.return = f), g)
      : ((g = s(g, y)), (g.return = f), g);
  }
  function h(f, g, y) {
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return (g = El('' + g, f.mode, y)), (g.return = f), g;
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case Gi:
          return (
            (y = Eo(g.type, g.key, g.props, null, f.mode, y)),
            (y.ref = Os(f, null, g)),
            (y.return = f),
            y
          );
        case Rr:
          return (g = Al(g, f.mode, y)), (g.return = f), g;
        case xn:
          var T = g._init;
          return h(f, T(g._payload), y);
      }
      if (Ps(g) || Cs(g))
        return (g = ur(g, f.mode, y, null)), (g.return = f), g;
      so(f, g);
    }
    return null;
  }
  function d(f, g, y, T) {
    var v = g !== null ? g.key : null;
    if ((typeof y == 'string' && y !== '') || typeof y == 'number')
      return v !== null ? null : a(f, g, '' + y, T);
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case Gi:
          return y.key === v ? l(f, g, y, T) : null;
        case Rr:
          return y.key === v ? u(f, g, y, T) : null;
        case xn:
          return (v = y._init), d(f, g, v(y._payload), T);
      }
      if (Ps(y) || Cs(y)) return v !== null ? null : c(f, g, y, T, null);
      so(f, y);
    }
    return null;
  }
  function m(f, g, y, T, v) {
    if ((typeof T == 'string' && T !== '') || typeof T == 'number')
      return (f = f.get(y) || null), a(g, f, '' + T, v);
    if (typeof T == 'object' && T !== null) {
      switch (T.$$typeof) {
        case Gi:
          return (f = f.get(T.key === null ? y : T.key) || null), l(g, f, T, v);
        case Rr:
          return (f = f.get(T.key === null ? y : T.key) || null), u(g, f, T, v);
        case xn:
          var k = T._init;
          return m(f, g, y, k(T._payload), v);
      }
      if (Ps(T) || Cs(T)) return (f = f.get(y) || null), c(g, f, T, v, null);
      so(g, T);
    }
    return null;
  }
  function p(f, g, y, T) {
    for (
      var v = null, k = null, C = g, S = (g = 0), N = null;
      C !== null && S < y.length;
      S++
    ) {
      C.index > S ? ((N = C), (C = null)) : (N = C.sibling);
      var x = d(f, C, y[S], T);
      if (x === null) {
        C === null && (C = N);
        break;
      }
      t && C && x.alternate === null && e(f, C),
        (g = i(x, g, S)),
        k === null ? (v = x) : (k.sibling = x),
        (k = x),
        (C = N);
    }
    if (S === y.length) return n(f, C), he && tr(f, S), v;
    if (C === null) {
      for (; S < y.length; S++)
        (C = h(f, y[S], T)),
          C !== null &&
            ((g = i(C, g, S)), k === null ? (v = C) : (k.sibling = C), (k = C));
      return he && tr(f, S), v;
    }
    for (C = r(f, C); S < y.length; S++)
      (N = m(C, f, S, y[S], T)),
        N !== null &&
          (t && N.alternate !== null && C.delete(N.key === null ? S : N.key),
          (g = i(N, g, S)),
          k === null ? (v = N) : (k.sibling = N),
          (k = N));
    return (
      t &&
        C.forEach(function (E) {
          return e(f, E);
        }),
      he && tr(f, S),
      v
    );
  }
  function _(f, g, y, T) {
    var v = Cs(y);
    if (typeof v != 'function') throw Error(M(150));
    if (((y = v.call(y)), y == null)) throw Error(M(151));
    for (
      var k = (v = null), C = g, S = (g = 0), N = null, x = y.next();
      C !== null && !x.done;
      S++, x = y.next()
    ) {
      C.index > S ? ((N = C), (C = null)) : (N = C.sibling);
      var E = d(f, C, x.value, T);
      if (E === null) {
        C === null && (C = N);
        break;
      }
      t && C && E.alternate === null && e(f, C),
        (g = i(E, g, S)),
        k === null ? (v = E) : (k.sibling = E),
        (k = E),
        (C = N);
    }
    if (x.done) return n(f, C), he && tr(f, S), v;
    if (C === null) {
      for (; !x.done; S++, x = y.next())
        (x = h(f, x.value, T)),
          x !== null &&
            ((g = i(x, g, S)), k === null ? (v = x) : (k.sibling = x), (k = x));
      return he && tr(f, S), v;
    }
    for (C = r(f, C); !x.done; S++, x = y.next())
      (x = m(C, f, S, x.value, T)),
        x !== null &&
          (t && x.alternate !== null && C.delete(x.key === null ? S : x.key),
          (g = i(x, g, S)),
          k === null ? (v = x) : (k.sibling = x),
          (k = x));
    return (
      t &&
        C.forEach(function (A) {
          return e(f, A);
        }),
      he && tr(f, S),
      v
    );
  }
  function w(f, g, y, T) {
    if (
      (typeof y == 'object' &&
        y !== null &&
        y.type === Fr &&
        y.key === null &&
        (y = y.props.children),
      typeof y == 'object' && y !== null)
    ) {
      switch (y.$$typeof) {
        case Gi:
          e: {
            for (var v = y.key, k = g; k !== null; ) {
              if (k.key === v) {
                if (((v = y.type), v === Fr)) {
                  if (k.tag === 7) {
                    n(f, k.sibling),
                      (g = s(k, y.props.children)),
                      (g.return = f),
                      (f = g);
                    break e;
                  }
                } else if (
                  k.elementType === v ||
                  (typeof v == 'object' &&
                    v !== null &&
                    v.$$typeof === xn &&
                    sd(v) === k.type)
                ) {
                  n(f, k.sibling),
                    (g = s(k, y.props)),
                    (g.ref = Os(f, k, y)),
                    (g.return = f),
                    (f = g);
                  break e;
                }
                n(f, k);
                break;
              } else e(f, k);
              k = k.sibling;
            }
            y.type === Fr
              ? ((g = ur(y.props.children, f.mode, T, y.key)),
                (g.return = f),
                (f = g))
              : ((T = Eo(y.type, y.key, y.props, null, f.mode, T)),
                (T.ref = Os(f, g, y)),
                (T.return = f),
                (f = T));
          }
          return o(f);
        case Rr:
          e: {
            for (k = y.key; g !== null; ) {
              if (g.key === k)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === y.containerInfo &&
                  g.stateNode.implementation === y.implementation
                ) {
                  n(f, g.sibling),
                    (g = s(g, y.children || [])),
                    (g.return = f),
                    (f = g);
                  break e;
                } else {
                  n(f, g);
                  break;
                }
              else e(f, g);
              g = g.sibling;
            }
            (g = Al(y, f.mode, T)), (g.return = f), (f = g);
          }
          return o(f);
        case xn:
          return (k = y._init), w(f, g, k(y._payload), T);
      }
      if (Ps(y)) return p(f, g, y, T);
      if (Cs(y)) return _(f, g, y, T);
      so(f, y);
    }
    return (typeof y == 'string' && y !== '') || typeof y == 'number'
      ? ((y = '' + y),
        g !== null && g.tag === 6
          ? (n(f, g.sibling), (g = s(g, y)), (g.return = f), (f = g))
          : (n(f, g), (g = El(y, f.mode, T)), (g.return = f), (f = g)),
        o(f))
      : n(f, g);
  }
  return w;
}
var ss = Np(!0),
  Ep = Np(!1),
  Pi = {},
  Qt = Qn(Pi),
  ii = Qn(Pi),
  oi = Qn(Pi);
function ar(t) {
  if (t === Pi) throw Error(M(174));
  return t;
}
function _c(t, e) {
  switch ((se(oi, e), se(ii, t), se(Qt, Pi), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Ul(null, '');
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = Ul(e, t));
  }
  ae(Qt), se(Qt, e);
}
function is() {
  ae(Qt), ae(ii), ae(oi);
}
function Ap(t) {
  ar(oi.current);
  var e = ar(Qt.current),
    n = Ul(e, t.type);
  e !== n && (se(ii, t), se(Qt, n));
}
function vc(t) {
  ii.current === t && (ae(Qt), ae(ii));
}
var fe = Qn(0);
function Go(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var Sl = [];
function wc() {
  for (var t = 0; t < Sl.length; t++)
    Sl[t]._workInProgressVersionPrimary = null;
  Sl.length = 0;
}
var To = _n.ReactCurrentDispatcher,
  Tl = _n.ReactCurrentBatchConfig,
  pr = 0,
  pe = null,
  Oe = null,
  Re = null,
  Ko = !1,
  Bs = !1,
  ai = 0,
  J_ = 0;
function Be() {
  throw Error(M(321));
}
function Sc(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!zt(t[n], e[n])) return !1;
  return !0;
}
function Tc(t, e, n, r, s, i) {
  if (
    ((pr = i),
    (pe = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (To.current = t === null || t.memoizedState === null ? rv : sv),
    (t = n(r, s)),
    Bs)
  ) {
    i = 0;
    do {
      if (((Bs = !1), (ai = 0), 25 <= i)) throw Error(M(301));
      (i += 1),
        (Re = Oe = null),
        (e.updateQueue = null),
        (To.current = iv),
        (t = n(r, s));
    } while (Bs);
  }
  if (
    ((To.current = Qo),
    (e = Oe !== null && Oe.next !== null),
    (pr = 0),
    (Re = Oe = pe = null),
    (Ko = !1),
    e)
  )
    throw Error(M(300));
  return t;
}
function kc() {
  var t = ai !== 0;
  return (ai = 0), t;
}
function Ht() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  return Re === null ? (pe.memoizedState = Re = t) : (Re = Re.next = t), Re;
}
function At() {
  if (Oe === null) {
    var t = pe.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = Oe.next;
  var e = Re === null ? pe.memoizedState : Re.next;
  if (e !== null) (Re = e), (Oe = t);
  else {
    if (t === null) throw Error(M(310));
    (Oe = t),
      (t = {
        memoizedState: Oe.memoizedState,
        baseState: Oe.baseState,
        baseQueue: Oe.baseQueue,
        queue: Oe.queue,
        next: null
      }),
      Re === null ? (pe.memoizedState = Re = t) : (Re = Re.next = t);
  }
  return Re;
}
function li(t, e) {
  return typeof e == 'function' ? e(t) : e;
}
function kl(t) {
  var e = At(),
    n = e.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = t;
  var r = Oe,
    s = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (s !== null) {
      var o = s.next;
      (s.next = i.next), (i.next = o);
    }
    (r.baseQueue = s = i), (n.pending = null);
  }
  if (s !== null) {
    (i = s.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((pr & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null
            }),
          (r = u.hasEagerState ? u.eagerState : t(r, u.action));
      else {
        var h = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? ((a = l = h), (o = r)) : (l = l.next = h),
          (pe.lanes |= c),
          (mr |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (o = r) : (l.next = a),
      zt(r, e.memoizedState) || (rt = !0),
      (e.memoizedState = r),
      (e.baseState = o),
      (e.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((t = n.interleaved), t !== null)) {
    s = t;
    do (i = s.lane), (pe.lanes |= i), (mr |= i), (s = s.next);
    while (s !== t);
  } else s === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function Cl(t) {
  var e = At(),
    n = e.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch,
    s = n.pending,
    i = e.memoizedState;
  if (s !== null) {
    n.pending = null;
    var o = (s = s.next);
    do (i = t(i, o.action)), (o = o.next);
    while (o !== s);
    zt(i, e.memoizedState) || (rt = !0),
      (e.memoizedState = i),
      e.baseQueue === null && (e.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Op() {}
function Mp(t, e) {
  var n = pe,
    r = At(),
    s = e(),
    i = !zt(r.memoizedState, s);
  if (
    (i && ((r.memoizedState = s), (rt = !0)),
    (r = r.queue),
    Cc(Pp.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || i || (Re !== null && Re.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ui(9, Dp.bind(null, n, r, s, e), void 0, null),
      Fe === null)
    )
      throw Error(M(349));
    pr & 30 || Ip(n, e, s);
  }
  return s;
}
function Ip(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = pe.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (pe.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function Dp(t, e, n, r) {
  (e.value = n), (e.getSnapshot = r), Rp(e) && Fp(t);
}
function Pp(t, e, n) {
  return n(function () {
    Rp(e) && Fp(t);
  });
}
function Rp(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !zt(t, n);
  } catch {
    return !0;
  }
}
function Fp(t) {
  var e = pn(t, 1);
  e !== null && Vt(e, t, 1, -1);
}
function id(t) {
  var e = Ht();
  return (
    typeof t == 'function' && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: li,
      lastRenderedState: t
    }),
    (e.queue = t),
    (t = t.dispatch = nv.bind(null, pe, t)),
    [e.memoizedState, t]
  );
}
function ui(t, e, n, r) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
    (e = pe.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (pe.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
    t
  );
}
function bp() {
  return At().memoizedState;
}
function ko(t, e, n, r) {
  var s = Ht();
  (pe.flags |= t),
    (s.memoizedState = ui(1 | e, n, void 0, r === void 0 ? null : r));
}
function Da(t, e, n, r) {
  var s = At();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Oe !== null) {
    var o = Oe.memoizedState;
    if (((i = o.destroy), r !== null && Sc(r, o.deps))) {
      s.memoizedState = ui(e, n, i, r);
      return;
    }
  }
  (pe.flags |= t), (s.memoizedState = ui(1 | e, n, i, r));
}
function od(t, e) {
  return ko(8390656, 8, t, e);
}
function Cc(t, e) {
  return Da(2048, 8, t, e);
}
function Lp(t, e) {
  return Da(4, 2, t, e);
}
function Vp(t, e) {
  return Da(4, 4, t, e);
}
function jp(t, e) {
  if (typeof e == 'function')
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function zp(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null), Da(4, 4, jp.bind(null, e, t), n)
  );
}
function xc() {}
function Wp(t, e) {
  var n = At();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && Sc(e, r[1])
    ? r[0]
    : ((n.memoizedState = [t, e]), t);
}
function Bp(t, e) {
  var n = At();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && Sc(e, r[1])
    ? r[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function Up(t, e, n) {
  return pr & 21
    ? (zt(n, e) || ((n = Hf()), (pe.lanes |= n), (mr |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (rt = !0)), (t.memoizedState = n));
}
function ev(t, e) {
  var n = ee;
  (ee = n !== 0 && 4 > n ? n : 4), t(!0);
  var r = Tl.transition;
  Tl.transition = {};
  try {
    t(!1), e();
  } finally {
    (ee = n), (Tl.transition = r);
  }
}
function qp() {
  return At().memoizedState;
}
function tv(t, e, n) {
  var r = Vn(t);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }),
    $p(t))
  )
    Hp(e, n);
  else if (((n = Tp(t, e, n, r)), n !== null)) {
    var s = Xe();
    Vt(n, t, r, s), Gp(n, e, r);
  }
}
function nv(t, e, n) {
  var r = Vn(t),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if ($p(t)) Hp(e, s);
  else {
    var i = t.alternate;
    if (
      t.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = e.lastRenderedReducer), i !== null)
    )
      try {
        var o = e.lastRenderedState,
          a = i(o, n);
        if (((s.hasEagerState = !0), (s.eagerState = a), zt(a, o))) {
          var l = e.interleaved;
          l === null
            ? ((s.next = s), gc(e))
            : ((s.next = l.next), (l.next = s)),
            (e.interleaved = s);
          return;
        }
      } catch {
      } finally {
      }
    (n = Tp(t, e, s, r)),
      n !== null && ((s = Xe()), Vt(n, t, r, s), Gp(n, e, r));
  }
}
function $p(t) {
  var e = t.alternate;
  return t === pe || (e !== null && e === pe);
}
function Hp(t, e) {
  Bs = Ko = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e);
}
function Gp(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), nc(t, n);
  }
}
var Qo = {
    readContext: Et,
    useCallback: Be,
    useContext: Be,
    useEffect: Be,
    useImperativeHandle: Be,
    useInsertionEffect: Be,
    useLayoutEffect: Be,
    useMemo: Be,
    useReducer: Be,
    useRef: Be,
    useState: Be,
    useDebugValue: Be,
    useDeferredValue: Be,
    useTransition: Be,
    useMutableSource: Be,
    useSyncExternalStore: Be,
    useId: Be,
    unstable_isNewReconciler: !1
  },
  rv = {
    readContext: Et,
    useCallback: function (t, e) {
      return (Ht().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: Et,
    useEffect: od,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        ko(4194308, 4, jp.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return ko(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return ko(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = Ht();
      return (
        (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
      );
    },
    useReducer: function (t, e, n) {
      var r = Ht();
      return (
        (e = n !== void 0 ? n(e) : e),
        (r.memoizedState = r.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e
        }),
        (r.queue = t),
        (t = t.dispatch = tv.bind(null, pe, t)),
        [r.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = Ht();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: id,
    useDebugValue: xc,
    useDeferredValue: function (t) {
      return (Ht().memoizedState = t);
    },
    useTransition: function () {
      var t = id(!1),
        e = t[0];
      return (t = ev.bind(null, t[1])), (Ht().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var r = pe,
        s = Ht();
      if (he) {
        if (n === void 0) throw Error(M(407));
        n = n();
      } else {
        if (((n = e()), Fe === null)) throw Error(M(349));
        pr & 30 || Ip(r, e, n);
      }
      s.memoizedState = n;
      var i = { value: n, getSnapshot: e };
      return (
        (s.queue = i),
        od(Pp.bind(null, r, i, t), [t]),
        (r.flags |= 2048),
        ui(9, Dp.bind(null, r, i, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = Ht(),
        e = Fe.identifierPrefix;
      if (he) {
        var n = ln,
          r = an;
        (n = (r & ~(1 << (32 - Lt(r) - 1))).toString(32) + n),
          (e = ':' + e + 'R' + n),
          (n = ai++),
          0 < n && (e += 'H' + n.toString(32)),
          (e += ':');
      } else (n = J_++), (e = ':' + e + 'r' + n.toString(32) + ':');
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1
  },
  sv = {
    readContext: Et,
    useCallback: Wp,
    useContext: Et,
    useEffect: Cc,
    useImperativeHandle: zp,
    useInsertionEffect: Lp,
    useLayoutEffect: Vp,
    useMemo: Bp,
    useReducer: kl,
    useRef: bp,
    useState: function () {
      return kl(li);
    },
    useDebugValue: xc,
    useDeferredValue: function (t) {
      var e = At();
      return Up(e, Oe.memoizedState, t);
    },
    useTransition: function () {
      var t = kl(li)[0],
        e = At().memoizedState;
      return [t, e];
    },
    useMutableSource: Op,
    useSyncExternalStore: Mp,
    useId: qp,
    unstable_isNewReconciler: !1
  },
  iv = {
    readContext: Et,
    useCallback: Wp,
    useContext: Et,
    useEffect: Cc,
    useImperativeHandle: zp,
    useInsertionEffect: Lp,
    useLayoutEffect: Vp,
    useMemo: Bp,
    useReducer: Cl,
    useRef: bp,
    useState: function () {
      return Cl(li);
    },
    useDebugValue: xc,
    useDeferredValue: function (t) {
      var e = At();
      return Oe === null ? (e.memoizedState = t) : Up(e, Oe.memoizedState, t);
    },
    useTransition: function () {
      var t = Cl(li)[0],
        e = At().memoizedState;
      return [t, e];
    },
    useMutableSource: Op,
    useSyncExternalStore: Mp,
    useId: qp,
    unstable_isNewReconciler: !1
  };
function os(t, e) {
  try {
    var n = '',
      r = e;
    do (n += Py(r)), (r = r.return);
    while (r);
    var s = n;
  } catch (i) {
    s =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: t, source: e, stack: s, digest: null };
}
function xl(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function du(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ov = typeof WeakMap == 'function' ? WeakMap : Map;
function Kp(t, e, n) {
  (n = un(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = e.value;
  return (
    (n.callback = function () {
      Yo || ((Yo = !0), (Tu = r)), du(t, e);
    }),
    n
  );
}
function Qp(t, e, n) {
  (n = un(-1, n)), (n.tag = 3);
  var r = t.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var s = e.value;
    (n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        du(t, e);
      });
  }
  var i = t.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        du(t, e),
          typeof r != 'function' &&
            (Ln === null ? (Ln = new Set([this])) : Ln.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: o !== null ? o : ''
        });
      }),
    n
  );
}
function ad(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new ov();
    var s = new Set();
    r.set(e, s);
  } else (s = r.get(e)), s === void 0 && ((s = new Set()), r.set(e, s));
  s.has(n) || (s.add(n), (t = wv.bind(null, t, e, n)), e.then(t, t));
}
function ld(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function ud(t, e, n, r, s) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = s), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = un(-1, 1)), (e.tag = 2), bn(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var av = _n.ReactCurrentOwner,
  rt = !1;
function Ge(t, e, n, r) {
  e.child = t === null ? Ep(e, null, n, r) : ss(e, t.child, n, r);
}
function cd(t, e, n, r, s) {
  n = n.render;
  var i = e.ref;
  return (
    Yr(e, s),
    (r = Tc(t, e, n, r, i, s)),
    (n = kc()),
    t !== null && !rt
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~s),
        mn(t, e, s))
      : (he && n && cc(e), (e.flags |= 1), Ge(t, e, r, s), e.child)
  );
}
function hd(t, e, n, r, s) {
  if (t === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Pc(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = i), Xp(t, e, i, r, s))
      : ((t = Eo(n.type, null, r, e, e.mode, s)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((i = t.child), !(t.lanes & s))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ti), n(o, r) && t.ref === e.ref)
    )
      return mn(t, e, s);
  }
  return (
    (e.flags |= 1),
    (t = jn(i, r)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function Xp(t, e, n, r, s) {
  if (t !== null) {
    var i = t.memoizedProps;
    if (ti(i, r) && t.ref === e.ref)
      if (((rt = !1), (e.pendingProps = r = i), (t.lanes & s) !== 0))
        t.flags & 131072 && (rt = !0);
      else return (e.lanes = t.lanes), mn(t, e, s);
  }
  return fu(t, e, n, r, s);
}
function Yp(t, e, n) {
  var r = e.pendingProps,
    s = r.children,
    i = t !== null ? t.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        se($r, ct),
        (ct |= n);
    else {
      if (!(n & 1073741824))
        return (
          (t = i !== null ? i.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null
          }),
          (e.updateQueue = null),
          se($r, ct),
          (ct |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        se($r, ct),
        (ct |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (e.memoizedState = null)) : (r = n),
      se($r, ct),
      (ct |= r);
  return Ge(t, e, s, n), e.child;
}
function Zp(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function fu(t, e, n, r, s) {
  var i = it(n) ? dr : $e.current;
  return (
    (i = ns(e, i)),
    Yr(e, s),
    (n = Tc(t, e, n, r, i, s)),
    (r = kc()),
    t !== null && !rt
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~s),
        mn(t, e, s))
      : (he && r && cc(e), (e.flags |= 1), Ge(t, e, n, s), e.child)
  );
}
function dd(t, e, n, r, s) {
  if (it(n)) {
    var i = !0;
    Wo(e);
  } else i = !1;
  if ((Yr(e, s), e.stateNode === null))
    Co(t, e), xp(e, n, r), hu(e, n, r, s), (r = !0);
  else if (t === null) {
    var o = e.stateNode,
      a = e.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = Et(u))
      : ((u = it(n) ? dr : $e.current), (u = ns(e, u)));
    var c = n.getDerivedStateFromProps,
      h =
        typeof c == 'function' ||
        typeof o.getSnapshotBeforeUpdate == 'function';
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== r || l !== u) && rd(e, o, r, u)),
      (Nn = !1);
    var d = e.memoizedState;
    (o.state = d),
      Ho(e, r, o, s),
      (l = e.memoizedState),
      a !== r || d !== l || st.current || Nn
        ? (typeof c == 'function' && (cu(e, n, c, r), (l = e.memoizedState)),
          (a = Nn || nd(e, n, a, r, d, l, u))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (e.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == 'function' && (e.flags |= 4194308),
          (r = !1));
  } else {
    (o = e.stateNode),
      kp(t, e),
      (a = e.memoizedProps),
      (u = e.type === e.elementType ? a : Mt(e.type, a)),
      (o.props = u),
      (h = e.pendingProps),
      (d = o.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = Et(l))
        : ((l = it(n) ? dr : $e.current), (l = ns(e, l)));
    var m = n.getDerivedStateFromProps;
    (c =
      typeof m == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== h || d !== l) && rd(e, o, r, l)),
      (Nn = !1),
      (d = e.memoizedState),
      (o.state = d),
      Ho(e, r, o, s);
    var p = e.memoizedState;
    a !== h || d !== p || st.current || Nn
      ? (typeof m == 'function' && (cu(e, n, m, r), (p = e.memoizedState)),
        (u = Nn || nd(e, n, u, r, d, p, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, p, l),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, p, l)),
            typeof o.componentDidUpdate == 'function' && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (a === t.memoizedProps && d === t.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (a === t.memoizedProps && d === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = p)),
        (o.props = r),
        (o.state = p),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != 'function' ||
          (a === t.memoizedProps && d === t.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (a === t.memoizedProps && d === t.memoizedState) ||
          (e.flags |= 1024),
        (r = !1));
  }
  return pu(t, e, n, r, i, s);
}
function pu(t, e, n, r, s, i) {
  Zp(t, e);
  var o = (e.flags & 128) !== 0;
  if (!r && !o) return s && Yh(e, n, !1), mn(t, e, i);
  (r = e.stateNode), (av.current = e);
  var a =
    o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (e.flags |= 1),
    t !== null && o
      ? ((e.child = ss(e, t.child, null, i)), (e.child = ss(e, null, a, i)))
      : Ge(t, e, a, i),
    (e.memoizedState = r.state),
    s && Yh(e, n, !0),
    e.child
  );
}
function Jp(t) {
  var e = t.stateNode;
  e.pendingContext
    ? Xh(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && Xh(t, e.context, !1),
    _c(t, e.containerInfo);
}
function fd(t, e, n, r, s) {
  return rs(), dc(s), (e.flags |= 256), Ge(t, e, n, r), e.child;
}
var mu = { dehydrated: null, treeContext: null, retryLane: 0 };
function gu(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function em(t, e, n) {
  var r = e.pendingProps,
    s = fe.current,
    i = !1,
    o = (e.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = t !== null && t.memoizedState === null ? !1 : (s & 2) !== 0),
    a
      ? ((i = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (s |= 1),
    se(fe, s & 1),
    t === null)
  )
    return (
      lu(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === '$!'
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((o = r.children),
          (t = r.fallback),
          i
            ? ((r = e.mode),
              (i = e.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Fa(o, r, 0, null)),
              (t = ur(t, r, n, null)),
              (i.return = e),
              (t.return = e),
              (i.sibling = t),
              (e.child = i),
              (e.child.memoizedState = gu(n)),
              (e.memoizedState = mu),
              t)
            : Nc(e, o))
    );
  if (((s = t.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
    return lv(t, e, o, r, a, s, n);
  if (i) {
    (i = r.fallback), (o = e.mode), (s = t.child), (a = s.sibling);
    var l = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && e.child !== s
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (e.deletions = null))
        : ((r = jn(s, l)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      a !== null ? (i = jn(a, i)) : ((i = ur(i, o, n, null)), (i.flags |= 2)),
      (i.return = e),
      (r.return = e),
      (r.sibling = i),
      (e.child = r),
      (r = i),
      (i = e.child),
      (o = t.child.memoizedState),
      (o =
        o === null
          ? gu(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions
            }),
      (i.memoizedState = o),
      (i.childLanes = t.childLanes & ~n),
      (e.memoizedState = mu),
      r
    );
  }
  return (
    (i = t.child),
    (t = i.sibling),
    (r = jn(i, { mode: 'visible', children: r.children })),
    !(e.mode & 1) && (r.lanes = n),
    (r.return = e),
    (r.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = r),
    (e.memoizedState = null),
    r
  );
}
function Nc(t, e) {
  return (
    (e = Fa({ mode: 'visible', children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function io(t, e, n, r) {
  return (
    r !== null && dc(r),
    ss(e, t.child, null, n),
    (t = Nc(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function lv(t, e, n, r, s, i, o) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (r = xl(Error(M(422)))), io(t, e, o, r))
      : e.memoizedState !== null
        ? ((e.child = t.child), (e.flags |= 128), null)
        : ((i = r.fallback),
          (s = e.mode),
          (r = Fa({ mode: 'visible', children: r.children }, s, 0, null)),
          (i = ur(i, s, o, null)),
          (i.flags |= 2),
          (r.return = e),
          (i.return = e),
          (r.sibling = i),
          (e.child = r),
          e.mode & 1 && ss(e, t.child, null, o),
          (e.child.memoizedState = gu(o)),
          (e.memoizedState = mu),
          i);
  if (!(e.mode & 1)) return io(t, e, o, null);
  if (s.data === '$!') {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(M(419))), (r = xl(i, r, void 0)), io(t, e, o, r);
  }
  if (((a = (o & t.childLanes) !== 0), rt || a)) {
    if (((r = Fe), r !== null)) {
      switch (o & -o) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      (s = s & (r.suspendedLanes | o) ? 0 : s),
        s !== 0 &&
          s !== i.retryLane &&
          ((i.retryLane = s), pn(t, s), Vt(r, t, s, -1));
    }
    return Dc(), (r = xl(Error(M(421)))), io(t, e, o, r);
  }
  return s.data === '$?'
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = Sv.bind(null, t)),
      (s._reactRetry = e),
      null)
    : ((t = i.treeContext),
      (ht = Fn(s.nextSibling)),
      (ft = e),
      (he = !0),
      (Dt = null),
      t !== null &&
        ((St[Tt++] = an),
        (St[Tt++] = ln),
        (St[Tt++] = fr),
        (an = t.id),
        (ln = t.overflow),
        (fr = e)),
      (e = Nc(e, r.children)),
      (e.flags |= 4096),
      e);
}
function pd(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), uu(t.return, e, n);
}
function Nl(t, e, n, r, s) {
  var i = t.memoizedState;
  i === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s
      })
    : ((i.isBackwards = e),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = s));
}
function tm(t, e, n) {
  var r = e.pendingProps,
    s = r.revealOrder,
    i = r.tail;
  if ((Ge(t, e, r.children, n), (r = fe.current), r & 2))
    (r = (r & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && pd(t, n, e);
        else if (t.tag === 19) pd(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    r &= 1;
  }
  if ((se(fe, r), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (s) {
      case 'forwards':
        for (n = e.child, s = null; n !== null; )
          (t = n.alternate),
            t !== null && Go(t) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = e.child), (e.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Nl(e, !1, s, n, i);
        break;
      case 'backwards':
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && Go(t) === null)) {
            e.child = s;
            break;
          }
          (t = s.sibling), (s.sibling = n), (n = s), (s = t);
        }
        Nl(e, !0, n, null, i);
        break;
      case 'together':
        Nl(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function Co(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function mn(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (mr |= e.lanes),
    !(n & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(M(153));
  if (e.child !== null) {
    for (
      t = e.child, n = jn(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (n = n.sibling = jn(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function uv(t, e, n) {
  switch (e.tag) {
    case 3:
      Jp(e), rs();
      break;
    case 5:
      Ap(e);
      break;
    case 1:
      it(e.type) && Wo(e);
      break;
    case 4:
      _c(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        s = e.memoizedProps.value;
      se(qo, r._currentValue), (r._currentValue = s);
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (se(fe, fe.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
            ? em(t, e, n)
            : (se(fe, fe.current & 1),
              (t = mn(t, e, n)),
              t !== null ? t.sibling : null);
      se(fe, fe.current & 1);
      break;
    case 19:
      if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (r) return tm(t, e, n);
        e.flags |= 128;
      }
      if (
        ((s = e.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        se(fe, fe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), Yp(t, e, n);
  }
  return mn(t, e, n);
}
var nm, yu, rm, sm;
nm = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
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
};
yu = function () {};
rm = function (t, e, n, r) {
  var s = t.memoizedProps;
  if (s !== r) {
    (t = e.stateNode), ar(Qt.current);
    var i = null;
    switch (n) {
      case 'input':
        (s = jl(t, s)), (r = jl(t, r)), (i = []);
        break;
      case 'select':
        (s = me({}, s, { value: void 0 })),
          (r = me({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (s = Bl(t, s)), (r = Bl(t, r)), (i = []);
        break;
      default:
        typeof s.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (t.onclick = jo);
    }
    ql(n, r);
    var o;
    n = null;
    for (u in s)
      if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
        if (u === 'style') {
          var a = s[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Ks.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = s != null ? s[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === 'style')
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ''));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === 'children'
              ? (typeof l != 'string' && typeof l != 'number') ||
                (i = i || []).push(u, '' + l)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (Ks.hasOwnProperty(u)
                  ? (l != null && u === 'onScroll' && oe('scroll', t),
                    i || a === l || (i = []))
                  : (i = i || []).push(u, l));
    }
    n && (i = i || []).push('style', n);
    var u = i;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
sm = function (t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function Ms(t, e) {
  if (!he)
    switch (t.tailMode) {
      case 'hidden':
        e = t.tail;
        for (var n = null; e !== null; )
          e.alternate !== null && (n = e), (e = e.sibling);
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = t.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ue(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    r = 0;
  if (e)
    for (var s = t.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = t),
        (s = s.sibling);
  else
    for (s = t.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = t),
        (s = s.sibling);
  return (t.subtreeFlags |= r), (t.childLanes = n), e;
}
function cv(t, e, n) {
  var r = e.pendingProps;
  switch ((hc(e), e.tag)) {
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
      return Ue(e), null;
    case 1:
      return it(e.type) && zo(), Ue(e), null;
    case 3:
      return (
        (r = e.stateNode),
        is(),
        ae(st),
        ae($e),
        wc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (t === null || t.child === null) &&
          (ro(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), Dt !== null && (xu(Dt), (Dt = null)))),
        yu(t, e),
        Ue(e),
        null
      );
    case 5:
      vc(e);
      var s = ar(oi.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        rm(t, e, n, r, s),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(M(166));
          return Ue(e), null;
        }
        if (((t = ar(Qt.current)), ro(e))) {
          (r = e.stateNode), (n = e.type);
          var i = e.memoizedProps;
          switch (((r[Gt] = e), (r[si] = i), (t = (e.mode & 1) !== 0), n)) {
            case 'dialog':
              oe('cancel', r), oe('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              oe('load', r);
              break;
            case 'video':
            case 'audio':
              for (s = 0; s < Fs.length; s++) oe(Fs[s], r);
              break;
            case 'source':
              oe('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              oe('error', r), oe('load', r);
              break;
            case 'details':
              oe('toggle', r);
              break;
            case 'input':
              kh(r, i), oe('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                oe('invalid', r);
              break;
            case 'textarea':
              xh(r, i), oe('invalid', r);
          }
          ql(n, i), (s = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      no(r.textContent, a, t),
                    (s = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      no(r.textContent, a, t),
                    (s = ['children', '' + a]))
                : Ks.hasOwnProperty(o) &&
                  a != null &&
                  o === 'onScroll' &&
                  oe('scroll', r);
            }
          switch (n) {
            case 'input':
              Ki(r), Ch(r, i, !0);
              break;
            case 'textarea':
              Ki(r), Nh(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = jo);
          }
          (r = s), (e.updateQueue = r), r !== null && (e.flags |= 4);
        } else {
          (o = s.nodeType === 9 ? s : s.ownerDocument),
            t === 'http://www.w3.org/1999/xhtml' && (t = If(n)),
            t === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((t = o.createElement('div')),
                  (t.innerHTML = '<script></script>'),
                  (t = t.removeChild(t.firstChild)))
                : typeof r.is == 'string'
                  ? (t = o.createElement(n, { is: r.is }))
                  : ((t = o.createElement(n)),
                    n === 'select' &&
                      ((o = t),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (t = o.createElementNS(t, n)),
            (t[Gt] = e),
            (t[si] = r),
            nm(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((o = $l(n, r)), n)) {
              case 'dialog':
                oe('cancel', t), oe('close', t), (s = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                oe('load', t), (s = r);
                break;
              case 'video':
              case 'audio':
                for (s = 0; s < Fs.length; s++) oe(Fs[s], t);
                s = r;
                break;
              case 'source':
                oe('error', t), (s = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                oe('error', t), oe('load', t), (s = r);
                break;
              case 'details':
                oe('toggle', t), (s = r);
                break;
              case 'input':
                kh(t, r), (s = jl(t, r)), oe('invalid', t);
                break;
              case 'option':
                s = r;
                break;
              case 'select':
                (t._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = me({}, r, { value: void 0 })),
                  oe('invalid', t);
                break;
              case 'textarea':
                xh(t, r), (s = Bl(t, r)), oe('invalid', t);
                break;
              default:
                s = r;
            }
            ql(n, s), (a = s);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === 'style'
                  ? Rf(t, l)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((l = l ? l.__html : void 0), l != null && Df(t, l))
                    : i === 'children'
                      ? typeof l == 'string'
                        ? (n !== 'textarea' || l !== '') && Qs(t, l)
                        : typeof l == 'number' && Qs(t, '' + l)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (Ks.hasOwnProperty(i)
                          ? l != null && i === 'onScroll' && oe('scroll', t)
                          : l != null && Xu(t, i, l, o));
              }
            switch (n) {
              case 'input':
                Ki(t), Ch(t, r, !1);
                break;
              case 'textarea':
                Ki(t), Nh(t);
                break;
              case 'option':
                r.value != null && t.setAttribute('value', '' + Bn(r.value));
                break;
              case 'select':
                (t.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Gr(t, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Gr(t, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof s.onClick == 'function' && (t.onclick = jo);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return Ue(e), null;
    case 6:
      if (t && e.stateNode != null) sm(t, e, t.memoizedProps, r);
      else {
        if (typeof r != 'string' && e.stateNode === null) throw Error(M(166));
        if (((n = ar(oi.current)), ar(Qt.current), ro(e))) {
          if (
            ((r = e.stateNode),
            (n = e.memoizedProps),
            (r[Gt] = e),
            (i = r.nodeValue !== n) && ((t = ft), t !== null))
          )
            switch (t.tag) {
              case 3:
                no(r.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  no(r.nodeValue, n, (t.mode & 1) !== 0);
            }
          i && (e.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Gt] = e),
            (e.stateNode = r);
      }
      return Ue(e), null;
    case 13:
      if (
        (ae(fe),
        (r = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (he && ht !== null && e.mode & 1 && !(e.flags & 128))
          Sp(), rs(), (e.flags |= 98560), (i = !1);
        else if (((i = ro(e)), r !== null && r.dehydrated !== null)) {
          if (t === null) {
            if (!i) throw Error(M(318));
            if (
              ((i = e.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(M(317));
            i[Gt] = e;
          } else
            rs(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          Ue(e), (i = !1);
        } else Dt !== null && (xu(Dt), (Dt = null)), (i = !0);
        if (!i) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((r = r !== null),
          r !== (t !== null && t.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || fe.current & 1 ? Me === 0 && (Me = 3) : Dc())),
          e.updateQueue !== null && (e.flags |= 4),
          Ue(e),
          null);
    case 4:
      return (
        is(), yu(t, e), t === null && ni(e.stateNode.containerInfo), Ue(e), null
      );
    case 10:
      return mc(e.type._context), Ue(e), null;
    case 17:
      return it(e.type) && zo(), Ue(e), null;
    case 19:
      if ((ae(fe), (i = e.memoizedState), i === null)) return Ue(e), null;
      if (((r = (e.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Ms(i, !1);
        else {
          if (Me !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((o = Go(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    Ms(i, !1),
                    r = o.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = n,
                    n = e.child;
                  n !== null;

                )
                  (i = n),
                    (t = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = t),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (t = o.dependencies),
                        (i.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext
                              })),
                    (n = n.sibling);
                return se(fe, (fe.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          i.tail !== null &&
            ke() > as &&
            ((e.flags |= 128), (r = !0), Ms(i, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((t = Go(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              Ms(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !o.alternate && !he)
            )
              return Ue(e), null;
          } else
            2 * ke() - i.renderingStartTime > as &&
              n !== 1073741824 &&
              ((e.flags |= 128), (r = !0), Ms(i, !1), (e.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (e.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((e = i.tail),
          (i.rendering = e),
          (i.tail = e.sibling),
          (i.renderingStartTime = ke()),
          (e.sibling = null),
          (n = fe.current),
          se(fe, r ? (n & 1) | 2 : n & 1),
          e)
        : (Ue(e), null);
    case 22:
    case 23:
      return (
        Ic(),
        (r = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? ct & 1073741824 && (Ue(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : Ue(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, e.tag));
}
function hv(t, e) {
  switch ((hc(e), e.tag)) {
    case 1:
      return (
        it(e.type) && zo(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        is(),
        ae(st),
        ae($e),
        wc(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return vc(e), null;
    case 13:
      if (
        (ae(fe), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(M(340));
        rs();
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return ae(fe), null;
    case 4:
      return is(), null;
    case 10:
      return mc(e.type._context), null;
    case 22:
    case 23:
      return Ic(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var oo = !1,
  qe = !1,
  dv = typeof WeakSet == 'function' ? WeakSet : Set,
  V = null;
function qr(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        ye(t, e, r);
      }
    else n.current = null;
}
function _u(t, e, n) {
  try {
    n();
  } catch (r) {
    ye(t, e, r);
  }
}
var md = !1;
function fv(t, e) {
  if (((tu = bo), (t = lp()), uc(t))) {
    if ('selectionStart' in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            h = t,
            d = null;
          t: for (;;) {
            for (
              var m;
              h !== n || (s !== 0 && h.nodeType !== 3) || (a = o + s),
                h !== i || (r !== 0 && h.nodeType !== 3) || (l = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (m = h.firstChild) !== null;

            )
              (d = h), (h = m);
            for (;;) {
              if (h === t) break t;
              if (
                (d === n && ++u === s && (a = o),
                d === i && ++c === r && (l = o),
                (m = h.nextSibling) !== null)
              )
                break;
              (h = d), (d = h.parentNode);
            }
            h = m;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (nu = { focusedElem: t, selectionRange: n }, bo = !1, V = e; V !== null; )
    if (((e = V), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (V = t);
    else
      for (; V !== null; ) {
        e = V;
        try {
          var p = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (p !== null) {
                  var _ = p.memoizedProps,
                    w = p.memoizedState,
                    f = e.stateNode,
                    g = f.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? _ : Mt(e.type, _),
                      w
                    );
                  f.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var y = e.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = '')
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(M(163));
            }
        } catch (T) {
          ye(e, e.return, T);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (V = t);
          break;
        }
        V = e.return;
      }
  return (p = md), (md = !1), p;
}
function Us(t, e, n) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & t) === t) {
        var i = s.destroy;
        (s.destroy = void 0), i !== void 0 && _u(e, n, i);
      }
      s = s.next;
    } while (s !== r);
  }
}
function Pa(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== e);
  }
}
function vu(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == 'function' ? e(t) : (e.current = t);
  }
}
function im(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), im(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[Gt], delete e[si], delete e[iu], delete e[Q_], delete e[X_])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function om(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function gd(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || om(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function wu(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = jo));
  else if (r !== 4 && ((t = t.child), t !== null))
    for (wu(t, e, n), t = t.sibling; t !== null; ) wu(t, e, n), (t = t.sibling);
}
function Su(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && ((t = t.child), t !== null))
    for (Su(t, e, n), t = t.sibling; t !== null; ) Su(t, e, n), (t = t.sibling);
}
var Ve = null,
  It = !1;
function kn(t, e, n) {
  for (n = n.child; n !== null; ) am(t, e, n), (n = n.sibling);
}
function am(t, e, n) {
  if (Kt && typeof Kt.onCommitFiberUnmount == 'function')
    try {
      Kt.onCommitFiberUnmount(xa, n);
    } catch {}
  switch (n.tag) {
    case 5:
      qe || qr(n, e);
    case 6:
      var r = Ve,
        s = It;
      (Ve = null),
        kn(t, e, n),
        (Ve = r),
        (It = s),
        Ve !== null &&
          (It
            ? ((t = Ve),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : Ve.removeChild(n.stateNode));
      break;
    case 18:
      Ve !== null &&
        (It
          ? ((t = Ve),
            (n = n.stateNode),
            t.nodeType === 8
              ? vl(t.parentNode, n)
              : t.nodeType === 1 && vl(t, n),
            Js(t))
          : vl(Ve, n.stateNode));
      break;
    case 4:
      (r = Ve),
        (s = It),
        (Ve = n.stateNode.containerInfo),
        (It = !0),
        kn(t, e, n),
        (Ve = r),
        (It = s);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !qe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var i = s,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && _u(n, e, o),
            (s = s.next);
        } while (s !== r);
      }
      kn(t, e, n);
      break;
    case 1:
      if (
        !qe &&
        (qr(n, e),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ye(n, e, a);
        }
      kn(t, e, n);
      break;
    case 21:
      kn(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((qe = (r = qe) || n.memoizedState !== null), kn(t, e, n), (qe = r))
        : kn(t, e, n);
      break;
    default:
      kn(t, e, n);
  }
}
function yd(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new dv()),
      e.forEach(function (r) {
        var s = Tv.bind(null, t, r);
        n.has(r) || (n.add(r), r.then(s, s));
      });
  }
}
function Ot(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var i = t,
          o = e,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ve = a.stateNode), (It = !1);
              break e;
            case 3:
              (Ve = a.stateNode.containerInfo), (It = !0);
              break e;
            case 4:
              (Ve = a.stateNode.containerInfo), (It = !0);
              break e;
          }
          a = a.return;
        }
        if (Ve === null) throw Error(M(160));
        am(i, o, s), (Ve = null), (It = !1);
        var l = s.alternate;
        l !== null && (l.return = null), (s.return = null);
      } catch (u) {
        ye(s, e, u);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) lm(e, t), (e = e.sibling);
}
function lm(t, e) {
  var n = t.alternate,
    r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ot(e, t), $t(t), r & 4)) {
        try {
          Us(3, t, t.return), Pa(3, t);
        } catch (_) {
          ye(t, t.return, _);
        }
        try {
          Us(5, t, t.return);
        } catch (_) {
          ye(t, t.return, _);
        }
      }
      break;
    case 1:
      Ot(e, t), $t(t), r & 512 && n !== null && qr(n, n.return);
      break;
    case 5:
      if (
        (Ot(e, t),
        $t(t),
        r & 512 && n !== null && qr(n, n.return),
        t.flags & 32)
      ) {
        var s = t.stateNode;
        try {
          Qs(s, '');
        } catch (_) {
          ye(t, t.return, _);
        }
      }
      if (r & 4 && ((s = t.stateNode), s != null)) {
        var i = t.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = t.type,
          l = t.updateQueue;
        if (((t.updateQueue = null), l !== null))
          try {
            a === 'input' && i.type === 'radio' && i.name != null && Of(s, i),
              $l(a, o);
            var u = $l(a, i);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                h = l[o + 1];
              c === 'style'
                ? Rf(s, h)
                : c === 'dangerouslySetInnerHTML'
                  ? Df(s, h)
                  : c === 'children'
                    ? Qs(s, h)
                    : Xu(s, c, h, u);
            }
            switch (a) {
              case 'input':
                zl(s, i);
                break;
              case 'textarea':
                Mf(s, i);
                break;
              case 'select':
                var d = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var m = i.value;
                m != null
                  ? Gr(s, !!i.multiple, m, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Gr(s, !!i.multiple, i.defaultValue, !0)
                      : Gr(s, !!i.multiple, i.multiple ? [] : '', !1));
            }
            s[si] = i;
          } catch (_) {
            ye(t, t.return, _);
          }
      }
      break;
    case 6:
      if ((Ot(e, t), $t(t), r & 4)) {
        if (t.stateNode === null) throw Error(M(162));
        (s = t.stateNode), (i = t.memoizedProps);
        try {
          s.nodeValue = i;
        } catch (_) {
          ye(t, t.return, _);
        }
      }
      break;
    case 3:
      if (
        (Ot(e, t), $t(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Js(e.containerInfo);
        } catch (_) {
          ye(t, t.return, _);
        }
      break;
    case 4:
      Ot(e, t), $t(t);
      break;
    case 13:
      Ot(e, t),
        $t(t),
        (s = t.child),
        s.flags & 8192 &&
          ((i = s.memoizedState !== null),
          (s.stateNode.isHidden = i),
          !i ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (Oc = ke())),
        r & 4 && yd(t);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((qe = (u = qe) || c), Ot(e, t), (qe = u)) : Ot(e, t),
        $t(t),
        r & 8192)
      ) {
        if (
          ((u = t.memoizedState !== null),
          (t.stateNode.isHidden = u) && !c && t.mode & 1)
        )
          for (V = t, c = t.child; c !== null; ) {
            for (h = V = c; V !== null; ) {
              switch (((d = V), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Us(4, d, d.return);
                  break;
                case 1:
                  qr(d, d.return);
                  var p = d.stateNode;
                  if (typeof p.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (e = r),
                        (p.props = e.memoizedProps),
                        (p.state = e.memoizedState),
                        p.componentWillUnmount();
                    } catch (_) {
                      ye(r, n, _);
                    }
                  }
                  break;
                case 5:
                  qr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    vd(h);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (V = m)) : vd(h);
            }
            c = c.sibling;
          }
        e: for (c = null, h = t; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                (s = h.stateNode),
                  u
                    ? ((i = s.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((a = h.stateNode),
                      (l = h.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty('display')
                          ? l.display
                          : null),
                      (a.style.display = Pf('display', o)));
              } catch (_) {
                ye(t, t.return, _);
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = u ? '' : h.memoizedProps;
              } catch (_) {
                ye(t, t.return, _);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === t) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === t) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === t) break e;
            c === h && (c = null), (h = h.return);
          }
          c === h && (c = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Ot(e, t), $t(t), r & 4 && yd(t);
      break;
    case 21:
      break;
    default:
      Ot(e, t), $t(t);
  }
}
function $t(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (om(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Qs(s, ''), (r.flags &= -33));
          var i = gd(t);
          Su(t, i, s);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = gd(t);
          wu(t, a, o);
          break;
        default:
          throw Error(M(161));
      }
    } catch (l) {
      ye(t, t.return, l);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function pv(t, e, n) {
  (V = t), um(t);
}
function um(t, e, n) {
  for (var r = (t.mode & 1) !== 0; V !== null; ) {
    var s = V,
      i = s.child;
    if (s.tag === 22 && r) {
      var o = s.memoizedState !== null || oo;
      if (!o) {
        var a = s.alternate,
          l = (a !== null && a.memoizedState !== null) || qe;
        a = oo;
        var u = qe;
        if (((oo = o), (qe = l) && !u))
          for (V = s; V !== null; )
            (o = V),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? wd(s)
                : l !== null
                  ? ((l.return = o), (V = l))
                  : wd(s);
        for (; i !== null; ) (V = i), um(i), (i = i.sibling);
        (V = s), (oo = a), (qe = u);
      }
      _d(t);
    } else
      s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (V = i)) : _d(t);
  }
}
function _d(t) {
  for (; V !== null; ) {
    var e = V;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              qe || Pa(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !qe)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : Mt(e.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = e.updateQueue;
              i !== null && td(e, i, r);
              break;
            case 3:
              var o = e.updateQueue;
              if (o !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                td(e, o, n);
              }
              break;
            case 5:
              var a = e.stateNode;
              if (n === null && e.flags & 4) {
                n = a;
                var l = e.memoizedProps;
                switch (e.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus();
                    break;
                  case 'img':
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var u = e.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var h = c.dehydrated;
                    h !== null && Js(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(M(163));
          }
        qe || (e.flags & 512 && vu(e));
      } catch (d) {
        ye(e, e.return, d);
      }
    }
    if (e === t) {
      V = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      (n.return = e.return), (V = n);
      break;
    }
    V = e.return;
  }
}
function vd(t) {
  for (; V !== null; ) {
    var e = V;
    if (e === t) {
      V = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      (n.return = e.return), (V = n);
      break;
    }
    V = e.return;
  }
}
function wd(t) {
  for (; V !== null; ) {
    var e = V;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            Pa(4, e);
          } catch (l) {
            ye(e, n, l);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var s = e.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ye(e, s, l);
            }
          }
          var i = e.return;
          try {
            vu(e);
          } catch (l) {
            ye(e, i, l);
          }
          break;
        case 5:
          var o = e.return;
          try {
            vu(e);
          } catch (l) {
            ye(e, o, l);
          }
      }
    } catch (l) {
      ye(e, e.return, l);
    }
    if (e === t) {
      V = null;
      break;
    }
    var a = e.sibling;
    if (a !== null) {
      (a.return = e.return), (V = a);
      break;
    }
    V = e.return;
  }
}
var mv = Math.ceil,
  Xo = _n.ReactCurrentDispatcher,
  Ec = _n.ReactCurrentOwner,
  xt = _n.ReactCurrentBatchConfig,
  Y = 0,
  Fe = null,
  Ne = null,
  je = 0,
  ct = 0,
  $r = Qn(0),
  Me = 0,
  ci = null,
  mr = 0,
  Ra = 0,
  Ac = 0,
  qs = null,
  tt = null,
  Oc = 0,
  as = 1 / 0,
  nn = null,
  Yo = !1,
  Tu = null,
  Ln = null,
  ao = !1,
  In = null,
  Zo = 0,
  $s = 0,
  ku = null,
  xo = -1,
  No = 0;
function Xe() {
  return Y & 6 ? ke() : xo !== -1 ? xo : (xo = ke());
}
function Vn(t) {
  return t.mode & 1
    ? Y & 2 && je !== 0
      ? je & -je
      : Z_.transition !== null
        ? (No === 0 && (No = Hf()), No)
        : ((t = ee),
          t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : Jf(t.type))),
          t)
    : 1;
}
function Vt(t, e, n, r) {
  if (50 < $s) throw (($s = 0), (ku = null), Error(M(185)));
  Mi(t, n, r),
    (!(Y & 2) || t !== Fe) &&
      (t === Fe && (!(Y & 2) && (Ra |= n), Me === 4 && On(t, je)),
      ot(t, r),
      n === 1 && Y === 0 && !(e.mode & 1) && ((as = ke() + 500), Ma && Xn()));
}
function ot(t, e) {
  var n = t.callbackNode;
  Zy(t, e);
  var r = Fo(t, t === Fe ? je : 0);
  if (r === 0)
    n !== null && Oh(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = r & -r), t.callbackPriority !== e)) {
    if ((n != null && Oh(n), e === 1))
      t.tag === 0 ? Y_(Sd.bind(null, t)) : _p(Sd.bind(null, t)),
        G_(function () {
          !(Y & 6) && Xn();
        }),
        (n = null);
    else {
      switch (Gf(r)) {
        case 1:
          n = tc;
          break;
        case 4:
          n = qf;
          break;
        case 16:
          n = Ro;
          break;
        case 536870912:
          n = $f;
          break;
        default:
          n = Ro;
      }
      n = ym(n, cm.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function cm(t, e) {
  if (((xo = -1), (No = 0), Y & 6)) throw Error(M(327));
  var n = t.callbackNode;
  if (Zr() && t.callbackNode !== n) return null;
  var r = Fo(t, t === Fe ? je : 0);
  if (r === 0) return null;
  if (r & 30 || r & t.expiredLanes || e) e = Jo(t, r);
  else {
    e = r;
    var s = Y;
    Y |= 2;
    var i = dm();
    (Fe !== t || je !== e) && ((nn = null), (as = ke() + 500), lr(t, e));
    do
      try {
        _v();
        break;
      } catch (a) {
        hm(t, a);
      }
    while (!0);
    pc(),
      (Xo.current = i),
      (Y = s),
      Ne !== null ? (e = 0) : ((Fe = null), (je = 0), (e = Me));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((s = Xl(t)), s !== 0 && ((r = s), (e = Cu(t, s)))), e === 1)
    )
      throw ((n = ci), lr(t, 0), On(t, r), ot(t, ke()), n);
    if (e === 6) On(t, r);
    else {
      if (
        ((s = t.current.alternate),
        !(r & 30) &&
          !gv(s) &&
          ((e = Jo(t, r)),
          e === 2 && ((i = Xl(t)), i !== 0 && ((r = i), (e = Cu(t, i)))),
          e === 1))
      )
        throw ((n = ci), lr(t, 0), On(t, r), ot(t, ke()), n);
      switch (((t.finishedWork = s), (t.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          nr(t, tt, nn);
          break;
        case 3:
          if (
            (On(t, r), (r & 130023424) === r && ((e = Oc + 500 - ke()), 10 < e))
          ) {
            if (Fo(t, 0) !== 0) break;
            if (((s = t.suspendedLanes), (s & r) !== r)) {
              Xe(), (t.pingedLanes |= t.suspendedLanes & s);
              break;
            }
            t.timeoutHandle = su(nr.bind(null, t, tt, nn), e);
            break;
          }
          nr(t, tt, nn);
          break;
        case 4:
          if ((On(t, r), (r & 4194240) === r)) break;
          for (e = t.eventTimes, s = -1; 0 < r; ) {
            var o = 31 - Lt(r);
            (i = 1 << o), (o = e[o]), o > s && (s = o), (r &= ~i);
          }
          if (
            ((r = s),
            (r = ke() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * mv(r / 1960)) - r),
            10 < r)
          ) {
            t.timeoutHandle = su(nr.bind(null, t, tt, nn), r);
            break;
          }
          nr(t, tt, nn);
          break;
        case 5:
          nr(t, tt, nn);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return ot(t, ke()), t.callbackNode === n ? cm.bind(null, t) : null;
}
function Cu(t, e) {
  var n = qs;
  return (
    t.current.memoizedState.isDehydrated && (lr(t, e).flags |= 256),
    (t = Jo(t, e)),
    t !== 2 && ((e = tt), (tt = n), e !== null && xu(e)),
    t
  );
}
function xu(t) {
  tt === null ? (tt = t) : tt.push.apply(tt, t);
}
function gv(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!zt(i(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      (n.return = e), (e = n);
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function On(t, e) {
  for (
    e &= ~Ac,
      e &= ~Ra,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - Lt(e),
      r = 1 << n;
    (t[n] = -1), (e &= ~r);
  }
}
function Sd(t) {
  if (Y & 6) throw Error(M(327));
  Zr();
  var e = Fo(t, 0);
  if (!(e & 1)) return ot(t, ke()), null;
  var n = Jo(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = Xl(t);
    r !== 0 && ((e = r), (n = Cu(t, r)));
  }
  if (n === 1) throw ((n = ci), lr(t, 0), On(t, e), ot(t, ke()), n);
  if (n === 6) throw Error(M(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    nr(t, tt, nn),
    ot(t, ke()),
    null
  );
}
function Mc(t, e) {
  var n = Y;
  Y |= 1;
  try {
    return t(e);
  } finally {
    (Y = n), Y === 0 && ((as = ke() + 500), Ma && Xn());
  }
}
function gr(t) {
  In !== null && In.tag === 0 && !(Y & 6) && Zr();
  var e = Y;
  Y |= 1;
  var n = xt.transition,
    r = ee;
  try {
    if (((xt.transition = null), (ee = 1), t)) return t();
  } finally {
    (ee = r), (xt.transition = n), (Y = e), !(Y & 6) && Xn();
  }
}
function Ic() {
  (ct = $r.current), ae($r);
}
function lr(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), H_(n)), Ne !== null))
    for (n = Ne.return; n !== null; ) {
      var r = n;
      switch ((hc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && zo();
          break;
        case 3:
          is(), ae(st), ae($e), wc();
          break;
        case 5:
          vc(r);
          break;
        case 4:
          is();
          break;
        case 13:
          ae(fe);
          break;
        case 19:
          ae(fe);
          break;
        case 10:
          mc(r.type._context);
          break;
        case 22:
        case 23:
          Ic();
      }
      n = n.return;
    }
  if (
    ((Fe = t),
    (Ne = t = jn(t.current, null)),
    (je = ct = e),
    (Me = 0),
    (ci = null),
    (Ac = Ra = mr = 0),
    (tt = qs = null),
    or !== null)
  ) {
    for (e = 0; e < or.length; e++)
      if (((n = or[e]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = s), (r.next = o);
        }
        n.pending = r;
      }
    or = null;
  }
  return t;
}
function hm(t, e) {
  do {
    var n = Ne;
    try {
      if ((pc(), (To.current = Qo), Ko)) {
        for (var r = pe.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), (r = r.next);
        }
        Ko = !1;
      }
      if (
        ((pr = 0),
        (Re = Oe = pe = null),
        (Bs = !1),
        (ai = 0),
        (Ec.current = null),
        n === null || n.return === null)
      ) {
        (Me = 1), (ci = e), (Ne = null);
        break;
      }
      e: {
        var i = t,
          o = n.return,
          a = n,
          l = e;
        if (
          ((e = je),
          (a.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var u = l,
            c = a,
            h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = ld(o);
          if (m !== null) {
            (m.flags &= -257),
              ud(m, o, a, i, e),
              m.mode & 1 && ad(i, u, e),
              (e = m),
              (l = u);
            var p = e.updateQueue;
            if (p === null) {
              var _ = new Set();
              _.add(l), (e.updateQueue = _);
            } else p.add(l);
            break e;
          } else {
            if (!(e & 1)) {
              ad(i, u, e), Dc();
              break e;
            }
            l = Error(M(426));
          }
        } else if (he && a.mode & 1) {
          var w = ld(o);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              ud(w, o, a, i, e),
              dc(os(l, a));
            break e;
          }
        }
        (i = l = os(l, a)),
          Me !== 4 && (Me = 2),
          qs === null ? (qs = [i]) : qs.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (e &= -e), (i.lanes |= e);
              var f = Kp(i, l, e);
              ed(i, f);
              break e;
            case 1:
              a = l;
              var g = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof g.getDerivedStateFromError == 'function' ||
                  (y !== null &&
                    typeof y.componentDidCatch == 'function' &&
                    (Ln === null || !Ln.has(y))))
              ) {
                (i.flags |= 65536), (e &= -e), (i.lanes |= e);
                var T = Qp(i, a, e);
                ed(i, T);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      pm(n);
    } catch (v) {
      (e = v), Ne === n && n !== null && (Ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function dm() {
  var t = Xo.current;
  return (Xo.current = Qo), t === null ? Qo : t;
}
function Dc() {
  (Me === 0 || Me === 3 || Me === 2) && (Me = 4),
    Fe === null || (!(mr & 268435455) && !(Ra & 268435455)) || On(Fe, je);
}
function Jo(t, e) {
  var n = Y;
  Y |= 2;
  var r = dm();
  (Fe !== t || je !== e) && ((nn = null), lr(t, e));
  do
    try {
      yv();
      break;
    } catch (s) {
      hm(t, s);
    }
  while (!0);
  if ((pc(), (Y = n), (Xo.current = r), Ne !== null)) throw Error(M(261));
  return (Fe = null), (je = 0), Me;
}
function yv() {
  for (; Ne !== null; ) fm(Ne);
}
function _v() {
  for (; Ne !== null && !Uy(); ) fm(Ne);
}
function fm(t) {
  var e = gm(t.alternate, t, ct);
  (t.memoizedProps = t.pendingProps),
    e === null ? pm(t) : (Ne = e),
    (Ec.current = null);
}
function pm(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = hv(n, e)), n !== null)) {
        (n.flags &= 32767), (Ne = n);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (Me = 6), (Ne = null);
        return;
      }
    } else if (((n = cv(n, e, ct)), n !== null)) {
      Ne = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      Ne = e;
      return;
    }
    Ne = e = t;
  } while (e !== null);
  Me === 0 && (Me = 5);
}
function nr(t, e, n) {
  var r = ee,
    s = xt.transition;
  try {
    (xt.transition = null), (ee = 1), vv(t, e, n, r);
  } finally {
    (xt.transition = s), (ee = r);
  }
  return null;
}
function vv(t, e, n, r) {
  do Zr();
  while (In !== null);
  if (Y & 6) throw Error(M(327));
  n = t.finishedWork;
  var s = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(M(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Jy(t, i),
    t === Fe && ((Ne = Fe = null), (je = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ao ||
      ((ao = !0),
      ym(Ro, function () {
        return Zr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = xt.transition), (xt.transition = null);
    var o = ee;
    ee = 1;
    var a = Y;
    (Y |= 4),
      (Ec.current = null),
      fv(t, n),
      lm(n, t),
      j_(nu),
      (bo = !!tu),
      (nu = tu = null),
      (t.current = n),
      pv(n),
      qy(),
      (Y = a),
      (ee = o),
      (xt.transition = i);
  } else t.current = n;
  if (
    (ao && ((ao = !1), (In = t), (Zo = s)),
    (i = t.pendingLanes),
    i === 0 && (Ln = null),
    Gy(n.stateNode),
    ot(t, ke()),
    e !== null)
  )
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      (s = e[n]), r(s.value, { componentStack: s.stack, digest: s.digest });
  if (Yo) throw ((Yo = !1), (t = Tu), (Tu = null), t);
  return (
    Zo & 1 && t.tag !== 0 && Zr(),
    (i = t.pendingLanes),
    i & 1 ? (t === ku ? $s++ : (($s = 0), (ku = t))) : ($s = 0),
    Xn(),
    null
  );
}
function Zr() {
  if (In !== null) {
    var t = Gf(Zo),
      e = xt.transition,
      n = ee;
    try {
      if (((xt.transition = null), (ee = 16 > t ? 16 : t), In === null))
        var r = !1;
      else {
        if (((t = In), (In = null), (Zo = 0), Y & 6)) throw Error(M(331));
        var s = Y;
        for (Y |= 4, V = t.current; V !== null; ) {
          var i = V,
            o = i.child;
          if (V.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (V = u; V !== null; ) {
                  var c = V;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Us(8, c, i);
                  }
                  var h = c.child;
                  if (h !== null) (h.return = c), (V = h);
                  else
                    for (; V !== null; ) {
                      c = V;
                      var d = c.sibling,
                        m = c.return;
                      if ((im(c), c === u)) {
                        V = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = m), (V = d);
                        break;
                      }
                      V = m;
                    }
                }
              }
              var p = i.alternate;
              if (p !== null) {
                var _ = p.child;
                if (_ !== null) {
                  p.child = null;
                  do {
                    var w = _.sibling;
                    (_.sibling = null), (_ = w);
                  } while (_ !== null);
                }
              }
              V = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (V = o);
          else
            e: for (; V !== null; ) {
              if (((i = V), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Us(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (V = f);
                break e;
              }
              V = i.return;
            }
        }
        var g = t.current;
        for (V = g; V !== null; ) {
          o = V;
          var y = o.child;
          if (o.subtreeFlags & 2064 && y !== null) (y.return = o), (V = y);
          else
            e: for (o = g; V !== null; ) {
              if (((a = V), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pa(9, a);
                  }
                } catch (v) {
                  ye(a, a.return, v);
                }
              if (a === o) {
                V = null;
                break e;
              }
              var T = a.sibling;
              if (T !== null) {
                (T.return = a.return), (V = T);
                break e;
              }
              V = a.return;
            }
        }
        if (
          ((Y = s), Xn(), Kt && typeof Kt.onPostCommitFiberRoot == 'function')
        )
          try {
            Kt.onPostCommitFiberRoot(xa, t);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ee = n), (xt.transition = e);
    }
  }
  return !1;
}
function Td(t, e, n) {
  (e = os(n, e)),
    (e = Kp(t, e, 1)),
    (t = bn(t, e, 1)),
    (e = Xe()),
    t !== null && (Mi(t, 1, e), ot(t, e));
}
function ye(t, e, n) {
  if (t.tag === 3) Td(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        Td(e, t, n);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Ln === null || !Ln.has(r)))
        ) {
          (t = os(n, t)),
            (t = Qp(e, t, 1)),
            (e = bn(e, t, 1)),
            (t = Xe()),
            e !== null && (Mi(e, 1, t), ot(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function wv(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e),
    (e = Xe()),
    (t.pingedLanes |= t.suspendedLanes & n),
    Fe === t &&
      (je & n) === n &&
      (Me === 4 || (Me === 3 && (je & 130023424) === je && 500 > ke() - Oc)
        ? lr(t, 0)
        : (Ac |= n)),
    ot(t, e);
}
function mm(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = Yi), (Yi <<= 1), !(Yi & 130023424) && (Yi = 4194304))
      : (e = 1));
  var n = Xe();
  (t = pn(t, e)), t !== null && (Mi(t, e, n), ot(t, n));
}
function Sv(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), mm(t, n);
}
function Tv(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var r = t.stateNode,
        s = t.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = t.stateNode;
      break;
    default:
      throw Error(M(314));
  }
  r !== null && r.delete(e), mm(t, n);
}
var gm;
gm = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || st.current) rt = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (rt = !1), uv(t, e, n);
      rt = !!(t.flags & 131072);
    }
  else (rt = !1), he && e.flags & 1048576 && vp(e, Uo, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      Co(t, e), (t = e.pendingProps);
      var s = ns(e, $e.current);
      Yr(e, n), (s = Tc(null, e, r, t, s, n));
      var i = kc();
      return (
        (e.flags |= 1),
        typeof s == 'object' &&
        s !== null &&
        typeof s.render == 'function' &&
        s.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            it(r) ? ((i = !0), Wo(e)) : (i = !1),
            (e.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            yc(e),
            (s.updater = Ia),
            (e.stateNode = s),
            (s._reactInternals = e),
            hu(e, r, t, n),
            (e = pu(null, e, r, !0, i, n)))
          : ((e.tag = 0), he && i && cc(e), Ge(null, e, s, n), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      e: {
        switch (
          (Co(t, e),
          (t = e.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (e.type = r),
          (s = e.tag = Cv(r)),
          (t = Mt(r, t)),
          s)
        ) {
          case 0:
            e = fu(null, e, r, t, n);
            break e;
          case 1:
            e = dd(null, e, r, t, n);
            break e;
          case 11:
            e = cd(null, e, r, t, n);
            break e;
          case 14:
            e = hd(null, e, r, Mt(r.type, t), n);
            break e;
        }
        throw Error(M(306, r, ''));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (s = e.pendingProps),
        (s = e.elementType === r ? s : Mt(r, s)),
        fu(t, e, r, s, n)
      );
    case 1:
      return (
        (r = e.type),
        (s = e.pendingProps),
        (s = e.elementType === r ? s : Mt(r, s)),
        dd(t, e, r, s, n)
      );
    case 3:
      e: {
        if ((Jp(e), t === null)) throw Error(M(387));
        (r = e.pendingProps),
          (i = e.memoizedState),
          (s = i.element),
          kp(t, e),
          Ho(e, r, null, n);
        var o = e.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions
            }),
            (e.updateQueue.baseState = i),
            (e.memoizedState = i),
            e.flags & 256)
          ) {
            (s = os(Error(M(423)), e)), (e = fd(t, e, r, n, s));
            break e;
          } else if (r !== s) {
            (s = os(Error(M(424)), e)), (e = fd(t, e, r, n, s));
            break e;
          } else
            for (
              ht = Fn(e.stateNode.containerInfo.firstChild),
                ft = e,
                he = !0,
                Dt = null,
                n = Ep(e, null, r, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((rs(), r === s)) {
            e = mn(t, e, n);
            break e;
          }
          Ge(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        Ap(e),
        t === null && lu(e),
        (r = e.type),
        (s = e.pendingProps),
        (i = t !== null ? t.memoizedProps : null),
        (o = s.children),
        ru(r, s) ? (o = null) : i !== null && ru(r, i) && (e.flags |= 32),
        Zp(t, e),
        Ge(t, e, o, n),
        e.child
      );
    case 6:
      return t === null && lu(e), null;
    case 13:
      return em(t, e, n);
    case 4:
      return (
        _c(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        t === null ? (e.child = ss(e, null, r, n)) : Ge(t, e, r, n),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (s = e.pendingProps),
        (s = e.elementType === r ? s : Mt(r, s)),
        cd(t, e, r, s, n)
      );
    case 7:
      return Ge(t, e, e.pendingProps, n), e.child;
    case 8:
      return Ge(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return Ge(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((r = e.type._context),
          (s = e.pendingProps),
          (i = e.memoizedProps),
          (o = s.value),
          se(qo, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (zt(i.value, o)) {
            if (i.children === s.children && !st.current) {
              e = mn(t, e, n);
              break e;
            }
          } else
            for (i = e.child, i !== null && (i.return = e); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = un(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      uu(i.return, n, e),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) o = i.type === e.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(M(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  uu(o, n, e),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === e) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        Ge(t, e, s.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (s = e.type),
        (r = e.pendingProps.children),
        Yr(e, n),
        (s = Et(s)),
        (r = r(s)),
        (e.flags |= 1),
        Ge(t, e, r, n),
        e.child
      );
    case 14:
      return (
        (r = e.type),
        (s = Mt(r, e.pendingProps)),
        (s = Mt(r.type, s)),
        hd(t, e, r, s, n)
      );
    case 15:
      return Xp(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (r = e.type),
        (s = e.pendingProps),
        (s = e.elementType === r ? s : Mt(r, s)),
        Co(t, e),
        (e.tag = 1),
        it(r) ? ((t = !0), Wo(e)) : (t = !1),
        Yr(e, n),
        xp(e, r, s),
        hu(e, r, s, n),
        pu(null, e, r, !0, t, n)
      );
    case 19:
      return tm(t, e, n);
    case 22:
      return Yp(t, e, n);
  }
  throw Error(M(156, e.tag));
};
function ym(t, e) {
  return Uf(t, e);
}
function kv(t, e, n, r) {
  (this.tag = t),
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
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function kt(t, e, n, r) {
  return new kv(t, e, n, r);
}
function Pc(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function Cv(t) {
  if (typeof t == 'function') return Pc(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === Zu)) return 11;
    if (t === Ju) return 14;
  }
  return 2;
}
function jn(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = kt(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function Eo(t, e, n, r, s, i) {
  var o = 2;
  if (((r = t), typeof t == 'function')) Pc(t) && (o = 1);
  else if (typeof t == 'string') o = 5;
  else
    e: switch (t) {
      case Fr:
        return ur(n.children, s, i, e);
      case Yu:
        (o = 8), (s |= 8);
        break;
      case Fl:
        return (
          (t = kt(12, n, e, s | 2)), (t.elementType = Fl), (t.lanes = i), t
        );
      case bl:
        return (t = kt(13, n, e, s)), (t.elementType = bl), (t.lanes = i), t;
      case Ll:
        return (t = kt(19, n, e, s)), (t.elementType = Ll), (t.lanes = i), t;
      case Nf:
        return Fa(n, s, i, e);
      default:
        if (typeof t == 'object' && t !== null)
          switch (t.$$typeof) {
            case Cf:
              o = 10;
              break e;
            case xf:
              o = 9;
              break e;
            case Zu:
              o = 11;
              break e;
            case Ju:
              o = 14;
              break e;
            case xn:
              (o = 16), (r = null);
              break e;
          }
        throw Error(M(130, t == null ? t : typeof t, ''));
    }
  return (
    (e = kt(o, n, e, s)), (e.elementType = t), (e.type = r), (e.lanes = i), e
  );
}
function ur(t, e, n, r) {
  return (t = kt(7, t, r, e)), (t.lanes = n), t;
}
function Fa(t, e, n, r) {
  return (
    (t = kt(22, t, r, e)),
    (t.elementType = Nf),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function El(t, e, n) {
  return (t = kt(6, t, null, e)), (t.lanes = n), t;
}
function Al(t, e, n) {
  return (
    (e = kt(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }),
    e
  );
}
function xv(t, e, n, r, s) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ll(0)),
    (this.expirationTimes = ll(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ll(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null);
}
function Rc(t, e, n, r, s, i, o, a, l) {
  return (
    (t = new xv(t, e, n, a, l)),
    e === 1 ? ((e = 1), i === !0 && (e |= 8)) : (e = 0),
    (i = kt(3, null, null, e)),
    (t.current = i),
    (i.stateNode = t),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }),
    yc(i),
    t
  );
}
function Nv(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Rr,
    key: r == null ? null : '' + r,
    children: t,
    containerInfo: e,
    implementation: n
  };
}
function _m(t) {
  if (!t) return Un;
  t = t._reactInternals;
  e: {
    if (Nr(t) !== t || t.tag !== 1) throw Error(M(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (it(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(M(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (it(n)) return yp(t, n, e);
  }
  return e;
}
function vm(t, e, n, r, s, i, o, a, l) {
  return (
    (t = Rc(n, r, !0, t, s, i, o, a, l)),
    (t.context = _m(null)),
    (n = t.current),
    (r = Xe()),
    (s = Vn(n)),
    (i = un(r, s)),
    (i.callback = e ?? null),
    bn(n, i, s),
    (t.current.lanes = s),
    Mi(t, s, r),
    ot(t, r),
    t
  );
}
function ba(t, e, n, r) {
  var s = e.current,
    i = Xe(),
    o = Vn(s);
  return (
    (n = _m(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = un(i, o)),
    (e.payload = { element: t }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (t = bn(s, e, o)),
    t !== null && (Vt(t, s, o, i), So(t, s, o)),
    o
  );
}
function ea(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function kd(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function Fc(t, e) {
  kd(t, e), (t = t.alternate) && kd(t, e);
}
function Ev() {
  return null;
}
var wm =
  typeof reportError == 'function'
    ? reportError
    : function (t) {
        console.error(t);
      };
function bc(t) {
  this._internalRoot = t;
}
La.prototype.render = bc.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(M(409));
  ba(t, e, null, null);
};
La.prototype.unmount = bc.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    gr(function () {
      ba(null, t, null, null);
    }),
      (e[fn] = null);
  }
};
function La(t) {
  this._internalRoot = t;
}
La.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = Xf();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < An.length && e !== 0 && e < An[n].priority; n++);
    An.splice(n, 0, t), n === 0 && Zf(t);
  }
};
function Lc(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function Va(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Cd() {}
function Av(t, e, n, r, s) {
  if (s) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var u = ea(o);
        i.call(u);
      };
    }
    var o = vm(e, r, t, 0, null, !1, !1, '', Cd);
    return (
      (t._reactRootContainer = o),
      (t[fn] = o.current),
      ni(t.nodeType === 8 ? t.parentNode : t),
      gr(),
      o
    );
  }
  for (; (s = t.lastChild); ) t.removeChild(s);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var u = ea(l);
      a.call(u);
    };
  }
  var l = Rc(t, 0, !1, null, null, !1, !1, '', Cd);
  return (
    (t._reactRootContainer = l),
    (t[fn] = l.current),
    ni(t.nodeType === 8 ? t.parentNode : t),
    gr(function () {
      ba(e, l, n, r);
    }),
    l
  );
}
function ja(t, e, n, r, s) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof s == 'function') {
      var a = s;
      s = function () {
        var l = ea(o);
        a.call(l);
      };
    }
    ba(e, o, t, s);
  } else o = Av(n, e, t, s, r);
  return ea(o);
}
Kf = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = Rs(e.pendingLanes);
        n !== 0 &&
          (nc(e, n | 1), ot(e, ke()), !(Y & 6) && ((as = ke() + 500), Xn()));
      }
      break;
    case 13:
      gr(function () {
        var r = pn(t, 1);
        if (r !== null) {
          var s = Xe();
          Vt(r, t, 1, s);
        }
      }),
        Fc(t, 1);
  }
};
rc = function (t) {
  if (t.tag === 13) {
    var e = pn(t, 134217728);
    if (e !== null) {
      var n = Xe();
      Vt(e, t, 134217728, n);
    }
    Fc(t, 134217728);
  }
};
Qf = function (t) {
  if (t.tag === 13) {
    var e = Vn(t),
      n = pn(t, e);
    if (n !== null) {
      var r = Xe();
      Vt(n, t, e, r);
    }
    Fc(t, e);
  }
};
Xf = function () {
  return ee;
};
Yf = function (t, e) {
  var n = ee;
  try {
    return (ee = t), e();
  } finally {
    ee = n;
  }
};
Gl = function (t, e, n) {
  switch (e) {
    case 'input':
      if ((zl(t, n), (e = n.name), n.type === 'radio' && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + e) + '][type="radio"]'
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var s = Oa(r);
            if (!s) throw Error(M(90));
            Af(r), zl(r, s);
          }
        }
      }
      break;
    case 'textarea':
      Mf(t, n);
      break;
    case 'select':
      (e = n.value), e != null && Gr(t, !!n.multiple, e, !1);
  }
};
Lf = Mc;
Vf = gr;
var Ov = { usingClientEntryPoint: !1, Events: [Di, jr, Oa, Ff, bf, Mc] },
  Is = {
    findFiberByHostInstance: ir,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom'
  },
  Mv = {
    bundleType: Is.bundleType,
    version: Is.version,
    rendererPackageName: Is.rendererPackageName,
    rendererConfig: Is.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: _n.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = Wf(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: Is.findFiberByHostInstance || Ev,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608'
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var lo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!lo.isDisabled && lo.supportsFiber)
    try {
      (xa = lo.inject(Mv)), (Kt = lo);
    } catch {}
}
_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ov;
_t.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Lc(e)) throw Error(M(200));
  return Nv(t, e, null, n);
};
_t.createRoot = function (t, e) {
  if (!Lc(t)) throw Error(M(299));
  var n = !1,
    r = '',
    s = wm;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (s = e.onRecoverableError)),
    (e = Rc(t, 1, !1, null, null, n, !1, r, s)),
    (t[fn] = e.current),
    ni(t.nodeType === 8 ? t.parentNode : t),
    new bc(e)
  );
};
_t.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == 'function'
      ? Error(M(188))
      : ((t = Object.keys(t).join(',')), Error(M(268, t)));
  return (t = Wf(e)), (t = t === null ? null : t.stateNode), t;
};
_t.flushSync = function (t) {
  return gr(t);
};
_t.hydrate = function (t, e, n) {
  if (!Va(e)) throw Error(M(200));
  return ja(null, t, e, !0, n);
};
_t.hydrateRoot = function (t, e, n) {
  if (!Lc(t)) throw Error(M(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    i = '',
    o = wm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (e = vm(e, null, t, 1, n ?? null, s, !1, i, o)),
    (t[fn] = e.current),
    ni(t),
    r)
  )
    for (t = 0; t < r.length; t++)
      (n = r[t]),
        (s = n._getVersion),
        (s = s(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, s])
          : e.mutableSourceEagerHydrationData.push(n, s);
  return new La(e);
};
_t.render = function (t, e, n) {
  if (!Va(e)) throw Error(M(200));
  return ja(null, t, e, !1, n);
};
_t.unmountComponentAtNode = function (t) {
  if (!Va(t)) throw Error(M(40));
  return t._reactRootContainer
    ? (gr(function () {
        ja(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[fn] = null);
        });
      }),
      !0)
    : !1;
};
_t.unstable_batchedUpdates = Mc;
_t.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
  if (!Va(n)) throw Error(M(200));
  if (t == null || t._reactInternals === void 0) throw Error(M(38));
  return ja(t, e, n, !1, r);
};
_t.version = '18.2.0-next-9e3b772b8-20220608';
function Sm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sm);
    } catch (t) {
      console.error(t);
    }
}
Sm(), (vf.exports = _t);
var Iv = vf.exports,
  Tm,
  xd = Iv;
(Tm = xd.createRoot), xd.hydrateRoot;
var km = { exports: {} },
  Cm = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ri = Wn;
function Dv(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var Pv = typeof Object.is == 'function' ? Object.is : Dv,
  Rv = Ri.useSyncExternalStore,
  Fv = Ri.useRef,
  bv = Ri.useEffect,
  Lv = Ri.useMemo,
  Vv = Ri.useDebugValue;
Cm.useSyncExternalStoreWithSelector = function (t, e, n, r, s) {
  var i = Fv(null);
  if (i.current === null) {
    var o = { hasValue: !1, value: null };
    i.current = o;
  } else o = i.current;
  i = Lv(
    function () {
      function l(m) {
        if (!u) {
          if (((u = !0), (c = m), (m = r(m)), s !== void 0 && o.hasValue)) {
            var p = o.value;
            if (s(p, m)) return (h = p);
          }
          return (h = m);
        }
        if (((p = h), Pv(c, m))) return p;
        var _ = r(m);
        return s !== void 0 && s(p, _) ? p : ((c = m), (h = _));
      }
      var u = !1,
        c,
        h,
        d = n === void 0 ? null : n;
      return [
        function () {
          return l(e());
        },
        d === null
          ? void 0
          : function () {
              return l(d());
            }
      ];
    },
    [e, n, r, s]
  );
  var a = Rv(t, i[0], i[1]);
  return (
    bv(
      function () {
        (o.hasValue = !0), (o.value = a);
      },
      [a]
    ),
    Vv(a),
    a
  );
};
km.exports = Cm;
var jv = km.exports,
  dt = 'default' in vh ? yf : vh,
  Nd = Symbol.for('react-redux-context'),
  Ed = typeof globalThis < 'u' ? globalThis : {};
function zv() {
  if (!dt.createContext) return {};
  const t = Ed[Nd] ?? (Ed[Nd] = new Map());
  let e = t.get(dt.createContext);
  return e || ((e = dt.createContext(null)), t.set(dt.createContext, e)), e;
}
var qn = zv(),
  Wv = () => {
    throw new Error('uSES not initialized!');
  };
function Vc(t = qn) {
  return function () {
    return dt.useContext(t);
  };
}
var xm = Vc(),
  Nm = Wv,
  Bv = (t) => {
    Nm = t;
  },
  Uv = (t, e) => t === e;
function qv(t = qn) {
  const e = t === qn ? xm : Vc(t),
    n = (r, s = {}) => {
      const { equalityFn: i = Uv, devModeChecks: o = {} } =
          typeof s == 'function' ? { equalityFn: s } : s,
        {
          store: a,
          subscription: l,
          getServerState: u,
          stabilityCheck: c,
          identityFunctionCheck: h
        } = e();
      dt.useRef(!0);
      const d = dt.useCallback(
          {
            [r.name](p) {
              return r(p);
            }
          }[r.name],
          [r, c, o.stabilityCheck]
        ),
        m = Nm(l.addNestedSub, a.getState, u || a.getState, d, i);
      return dt.useDebugValue(m), m;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var Em = qv();
function $v(t) {
  t();
}
function Hv() {
  let t = null,
    e = null;
  return {
    clear() {
      (t = null), (e = null);
    },
    notify() {
      $v(() => {
        let n = t;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = t;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const s = (e = { callback: n, next: null, prev: e });
      return (
        s.prev ? (s.prev.next = s) : (t = s),
        function () {
          !r ||
            t === null ||
            ((r = !1),
            s.next ? (s.next.prev = s.prev) : (e = s.prev),
            s.prev ? (s.prev.next = s.next) : (t = s.next));
        }
      );
    }
  };
}
var Ad = { notify() {}, get: () => [] };
function Gv(t, e) {
  let n,
    r = Ad,
    s = 0,
    i = !1;
  function o(_) {
    c();
    const w = r.subscribe(_);
    let f = !1;
    return () => {
      f || ((f = !0), w(), h());
    };
  }
  function a() {
    r.notify();
  }
  function l() {
    p.onStateChange && p.onStateChange();
  }
  function u() {
    return i;
  }
  function c() {
    s++, n || ((n = e ? e.addNestedSub(l) : t.subscribe(l)), (r = Hv()));
  }
  function h() {
    s--, n && s === 0 && (n(), (n = void 0), r.clear(), (r = Ad));
  }
  function d() {
    i || ((i = !0), c());
  }
  function m() {
    i && ((i = !1), h());
  }
  const p = {
    addNestedSub: o,
    notifyNestedSubs: a,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: m,
    getListeners: () => r
  };
  return p;
}
var Kv =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Qv = Kv ? dt.useLayoutEffect : dt.useEffect;
function Xv({
  store: t,
  context: e,
  children: n,
  serverState: r,
  stabilityCheck: s = 'once',
  identityFunctionCheck: i = 'once'
}) {
  const o = dt.useMemo(() => {
      const u = Gv(t);
      return {
        store: t,
        subscription: u,
        getServerState: r ? () => r : void 0,
        stabilityCheck: s,
        identityFunctionCheck: i
      };
    }, [t, r, s, i]),
    a = dt.useMemo(() => t.getState(), [t]);
  Qv(() => {
    const { subscription: u } = o;
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      a !== t.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0);
      }
    );
  }, [o, a]);
  const l = e || qn;
  return dt.createElement(l.Provider, { value: o }, n);
}
var Yv = Xv;
function Am(t = qn) {
  const e = t === qn ? xm : Vc(t),
    n = () => {
      const { store: r } = e();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var Zv = Am();
function Jv(t = qn) {
  const e = t === qn ? Zv : Am(t),
    n = () => e().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var e0 = Jv();
Bv(jv.useSyncExternalStoreWithSelector);
const t0 = '/assets/arturia-logo-DnWtYTEi.png',
  n0 = '/assets/loading-icon-DU_2B0w1.png';
function r0() {
  return (
    Em((e) => e.audio.isLoading) &&
    X.jsx('div', {
      className: 'overlay',
      children: X.jsx('img', {
        className: 'loading-icon',
        alt: 'loading icon',
        src: n0
      })
    })
  );
}
const Fi = new Map([
    ['q', { computerKey: 'q', noteName: 'C', octave: 3, color: 'white' }],
    ['2', { computerKey: '2', noteName: 'Db', octave: 3, color: 'black' }],
    ['w', { computerKey: 'w', noteName: 'D', octave: 3, color: 'white' }],
    ['3', { computerKey: '3', noteName: 'Eb', octave: 3, color: 'black' }],
    ['e', { computerKey: 'e', noteName: 'E', octave: 3, color: 'white' }],
    ['r', { computerKey: 'r', noteName: 'F', octave: 3, color: 'white' }],
    ['5', { computerKey: '5', noteName: 'Gb', octave: 3, color: 'black' }],
    ['t', { computerKey: 't', noteName: 'G', octave: 3, color: 'white' }],
    ['6', { computerKey: '6', noteName: 'Ab', octave: 3, color: 'black' }],
    ['y', { computerKey: 'y', noteName: 'A', octave: 3, color: 'white' }],
    ['7', { computerKey: '7', noteName: 'Bb', octave: 3, color: 'black' }],
    ['u', { computerKey: 'u', noteName: 'B', octave: 3, color: 'white' }],
    ['i', { computerKey: 'i', noteName: 'C', octave: 4, color: 'white' }],
    ['9', { computerKey: '9', noteName: 'Db', octave: 4, color: 'black' }],
    ['o', { computerKey: 'o', noteName: 'D', octave: 4, color: 'white' }],
    ['0', { computerKey: '0', noteName: 'Eb', octave: 4, color: 'black' }],
    ['p', { computerKey: 'p', noteName: 'E', octave: 4, color: 'white' }],
    ['[', { computerKey: '[', noteName: 'F', octave: 4, color: 'white' }],
    ['=', { computerKey: '=', noteName: 'Gb', octave: 4, color: 'black' }],
    [']', { computerKey: ']', noteName: 'G', octave: 4, color: 'white' }],
    ['a', { computerKey: 'a', noteName: 'Ab', octave: 4, color: 'black' }],
    ['z', { computerKey: 'z', noteName: 'A', octave: 4, color: 'white' }],
    ['s', { computerKey: 's', noteName: 'Bb', octave: 4, color: 'black' }],
    ['x', { computerKey: 'x', noteName: 'B', octave: 4, color: 'white' }],
    ['c', { computerKey: 'c', noteName: 'C', octave: 5, color: 'white' }],
    ['f', { computerKey: 'f', noteName: 'Db', octave: 5, color: 'black' }],
    ['v', { computerKey: 'v', noteName: 'D', octave: 5, color: 'white' }],
    ['g', { computerKey: 'g', noteName: 'Eb', octave: 5, color: 'black' }],
    ['b', { computerKey: 'b', noteName: 'E', octave: 5, color: 'white' }],
    ['n', { computerKey: 'n', noteName: 'F', octave: 5, color: 'white' }],
    ['j', { computerKey: 'j', noteName: 'Gb', octave: 5, color: 'black' }],
    ['m', { computerKey: 'm', noteName: 'G', octave: 5, color: 'white' }],
    ['k', { computerKey: 'k', noteName: 'Ab', octave: 5, color: 'black' }],
    [',', { computerKey: ',', noteName: 'A', octave: 5, color: 'white' }],
    ['l', { computerKey: 'l', noteName: 'Bb', octave: 5, color: 'black' }],
    ['.', { computerKey: '.', noteName: 'B', octave: 5, color: 'white' }]
  ]),
  Om = '14.7.77',
  Od = (t, e, n) => ({
    endTime: e,
    insertTime: n,
    type: 'exponentialRampToValue',
    value: t
  }),
  Md = (t, e, n) => ({
    endTime: e,
    insertTime: n,
    type: 'linearRampToValue',
    value: t
  }),
  Nu = (t, e) => ({ startTime: e, type: 'setValue', value: t }),
  Mm = (t, e, n) => ({
    duration: n,
    startTime: e,
    type: 'setValueCurve',
    values: t
  }),
  Im = (t, e, { startTime: n, target: r, timeConstant: s }) =>
    r + (e - r) * Math.exp((n - t) / s),
  Hr = (t) => t.type === 'exponentialRampToValue',
  ta = (t) => t.type === 'linearRampToValue',
  En = (t) => Hr(t) || ta(t),
  jc = (t) => t.type === 'setValue',
  rn = (t) => t.type === 'setValueCurve',
  na = (t, e, n, r) => {
    const s = t[e];
    return s === void 0
      ? r
      : En(s) || jc(s)
        ? s.value
        : rn(s)
          ? s.values[s.values.length - 1]
          : Im(n, na(t, e - 1, s.startTime, r), s);
  },
  Id = (t, e, n, r, s) =>
    n === void 0
      ? [r.insertTime, s]
      : En(n)
        ? [n.endTime, n.value]
        : jc(n)
          ? [n.startTime, n.value]
          : rn(n)
            ? [n.startTime + n.duration, n.values[n.values.length - 1]]
            : [n.startTime, na(t, e - 1, n.startTime, s)],
  Eu = (t) => t.type === 'cancelAndHold',
  Au = (t) => t.type === 'cancelScheduledValues',
  Cn = (t) =>
    Eu(t) || Au(t) ? t.cancelTime : Hr(t) || ta(t) ? t.endTime : t.startTime,
  Dd = (t, e, n, { endTime: r, value: s }) =>
    n === s
      ? s
      : (0 < n && 0 < s) || (n < 0 && s < 0)
        ? n * (s / n) ** ((t - e) / (r - e))
        : 0,
  Pd = (t, e, n, { endTime: r, value: s }) => n + ((t - e) / (r - e)) * (s - n),
  s0 = (t, e) => {
    const n = Math.floor(e),
      r = Math.ceil(e);
    return n === r ? t[n] : (1 - (e - n)) * t[n] + (1 - (r - e)) * t[r];
  },
  i0 = (t, { duration: e, startTime: n, values: r }) => {
    const s = ((t - n) / e) * (r.length - 1);
    return s0(r, s);
  },
  uo = (t) => t.type === 'setTarget';
class o0 {
  constructor(e) {
    (this._automationEvents = []),
      (this._currenTime = 0),
      (this._defaultValue = e);
  }
  [Symbol.iterator]() {
    return this._automationEvents[Symbol.iterator]();
  }
  add(e) {
    const n = Cn(e);
    if (Eu(e) || Au(e)) {
      const r = this._automationEvents.findIndex((i) =>
          Au(e) && rn(i) ? i.startTime + i.duration >= n : Cn(i) >= n
        ),
        s = this._automationEvents[r];
      if (
        (r !== -1 &&
          (this._automationEvents = this._automationEvents.slice(0, r)),
        Eu(e))
      ) {
        const i = this._automationEvents[this._automationEvents.length - 1];
        if (s !== void 0 && En(s)) {
          if (i !== void 0 && uo(i))
            throw new Error('The internal list is malformed.');
          const o =
              i === void 0
                ? s.insertTime
                : rn(i)
                  ? i.startTime + i.duration
                  : Cn(i),
            a =
              i === void 0
                ? this._defaultValue
                : rn(i)
                  ? i.values[i.values.length - 1]
                  : i.value,
            l = Hr(s) ? Dd(n, o, a, s) : Pd(n, o, a, s),
            u = Hr(s) ? Od(l, n, this._currenTime) : Md(l, n, this._currenTime);
          this._automationEvents.push(u);
        }
        if (
          (i !== void 0 &&
            uo(i) &&
            this._automationEvents.push(Nu(this.getValue(n), n)),
          i !== void 0 && rn(i) && i.startTime + i.duration > n)
        ) {
          const o = n - i.startTime,
            a = (i.values.length - 1) / i.duration,
            l = Math.max(2, 1 + Math.ceil(o * a)),
            u = (o / (l - 1)) * a,
            c = i.values.slice(0, l);
          if (u < 1)
            for (let h = 1; h < l; h += 1) {
              const d = (u * h) % 1;
              c[h] = i.values[h - 1] * (1 - d) + i.values[h] * d;
            }
          this._automationEvents[this._automationEvents.length - 1] = Mm(
            c,
            i.startTime,
            o
          );
        }
      }
    } else {
      const r = this._automationEvents.findIndex((o) => Cn(o) > n),
        s =
          r === -1
            ? this._automationEvents[this._automationEvents.length - 1]
            : this._automationEvents[r - 1];
      if (s !== void 0 && rn(s) && Cn(s) + s.duration > n) return !1;
      const i = Hr(e)
        ? Od(e.value, e.endTime, this._currenTime)
        : ta(e)
          ? Md(e.value, n, this._currenTime)
          : e;
      if (r === -1) this._automationEvents.push(i);
      else {
        if (rn(e) && n + e.duration > Cn(this._automationEvents[r])) return !1;
        this._automationEvents.splice(r, 0, i);
      }
    }
    return !0;
  }
  flush(e) {
    const n = this._automationEvents.findIndex((r) => Cn(r) > e);
    if (n > 1) {
      const r = this._automationEvents.slice(n - 1),
        s = r[0];
      uo(s) &&
        r.unshift(
          Nu(
            na(this._automationEvents, n - 2, s.startTime, this._defaultValue),
            s.startTime
          )
        ),
        (this._automationEvents = r);
    }
  }
  getValue(e) {
    if (this._automationEvents.length === 0) return this._defaultValue;
    const n = this._automationEvents.findIndex((o) => Cn(o) > e),
      r = this._automationEvents[n],
      s = (n === -1 ? this._automationEvents.length : n) - 1,
      i = this._automationEvents[s];
    if (i !== void 0 && uo(i) && (r === void 0 || !En(r) || r.insertTime > e))
      return Im(
        e,
        na(this._automationEvents, s - 1, i.startTime, this._defaultValue),
        i
      );
    if (i !== void 0 && jc(i) && (r === void 0 || !En(r))) return i.value;
    if (
      i !== void 0 &&
      rn(i) &&
      (r === void 0 || !En(r) || i.startTime + i.duration > e)
    )
      return e < i.startTime + i.duration
        ? i0(e, i)
        : i.values[i.values.length - 1];
    if (i !== void 0 && En(i) && (r === void 0 || !En(r))) return i.value;
    if (r !== void 0 && Hr(r)) {
      const [o, a] = Id(this._automationEvents, s, i, r, this._defaultValue);
      return Dd(e, o, a, r);
    }
    if (r !== void 0 && ta(r)) {
      const [o, a] = Id(this._automationEvents, s, i, r, this._defaultValue);
      return Pd(e, o, a, r);
    }
    return this._defaultValue;
  }
}
const a0 = (t) => ({ cancelTime: t, type: 'cancelAndHold' }),
  l0 = (t) => ({ cancelTime: t, type: 'cancelScheduledValues' }),
  u0 = (t, e) => ({ endTime: e, type: 'exponentialRampToValue', value: t }),
  c0 = (t, e) => ({ endTime: e, type: 'linearRampToValue', value: t }),
  h0 = (t, e, n) => ({
    startTime: e,
    target: t,
    timeConstant: n,
    type: 'setTarget'
  }),
  d0 = () => new DOMException('', 'AbortError'),
  f0 =
    (t) =>
    (e, n, [r, s, i], o) => {
      t(e[s], [n, r, i], (a) => a[0] === n && a[1] === r, o);
    },
  p0 = (t) => (e, n, r) => {
    const s = [];
    for (let i = 0; i < r.numberOfInputs; i += 1) s.push(new Set());
    t.set(e, {
      activeInputs: s,
      outputs: new Set(),
      passiveInputs: new WeakMap(),
      renderer: n
    });
  },
  m0 = (t) => (e, n) => {
    t.set(e, {
      activeInputs: new Set(),
      passiveInputs: new WeakMap(),
      renderer: n
    });
  },
  ls = new WeakSet(),
  Dm = new WeakMap(),
  zc = new WeakMap(),
  Pm = new WeakMap(),
  Wc = new WeakMap(),
  za = new WeakMap(),
  Rm = new WeakMap(),
  Ou = new WeakMap(),
  Mu = new WeakMap(),
  Iu = new WeakMap(),
  Fm = {
    construct() {
      return Fm;
    }
  },
  g0 = (t) => {
    try {
      const e = new Proxy(t, Fm);
      new e();
    } catch {
      return !1;
    }
    return !0;
  },
  Rd =
    /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,
  Fd = (t, e) => {
    const n = [];
    let r = t.replace(/^[\s]+/, ''),
      s = r.match(Rd);
    for (; s !== null; ) {
      const i = s[1].slice(1, -1),
        o = s[0]
          .replace(/([\s]+)?;?$/, '')
          .replace(i, new URL(i, e).toString());
      n.push(o),
        (r = r.slice(s[0].length).replace(/^[\s]+/, '')),
        (s = r.match(Rd));
    }
    return [n.join(';'), r];
  },
  bd = (t) => {
    if (t !== void 0 && !Array.isArray(t))
      throw new TypeError(
        'The parameterDescriptors property of given value for processorCtor is not an array.'
      );
  },
  Ld = (t) => {
    if (!g0(t))
      throw new TypeError(
        'The given value for processorCtor should be a constructor.'
      );
    if (t.prototype === null || typeof t.prototype != 'object')
      throw new TypeError(
        'The given value for processorCtor should have a prototype.'
      );
  },
  y0 = (t, e, n, r, s, i, o, a, l, u, c, h, d) => {
    let m = 0;
    return (p, _, w = { credentials: 'omit' }) => {
      const f = c.get(p);
      if (f !== void 0 && f.has(_)) return Promise.resolve();
      const g = u.get(p);
      if (g !== void 0) {
        const v = g.get(_);
        if (v !== void 0) return v;
      }
      const y = i(p),
        T =
          y.audioWorklet === void 0
            ? s(_)
                .then(([v, k]) => {
                  const [C, S] = Fd(v, k),
                    N = `${C};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${S}
})})(window,'_AWGS')`;
                  return n(N);
                })
                .then(() => {
                  const v = d._AWGS.pop();
                  if (v === void 0) throw new SyntaxError();
                  r(y.currentTime, y.sampleRate, () =>
                    v(
                      class {},
                      void 0,
                      (k, C) => {
                        if (k.trim() === '') throw e();
                        const S = Mu.get(y);
                        if (S !== void 0) {
                          if (S.has(k)) throw e();
                          Ld(C), bd(C.parameterDescriptors), S.set(k, C);
                        } else
                          Ld(C),
                            bd(C.parameterDescriptors),
                            Mu.set(y, new Map([[k, C]]));
                      },
                      y.sampleRate,
                      void 0,
                      void 0
                    )
                  );
                })
            : Promise.all([s(_), Promise.resolve(t(h, h))]).then(
                ([[v, k], C]) => {
                  const S = m + 1;
                  m = S;
                  const [N, x] = Fd(v, k),
                    F = `${N};((AudioWorkletProcessor,registerProcessor)=>{${x}
})(${C ? 'AudioWorkletProcessor' : 'class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}'},(n,p)=>registerProcessor(n,class extends p{${C ? '' : '__c = (a) => a.forEach(e=>this.__b.add(e.buffer));'}process(i,o,p){${C ? '' : 'i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));'}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${S}',class extends AudioWorkletProcessor{process(){return !1}})`,
                    B = new Blob([F], {
                      type: 'application/javascript; charset=utf-8'
                    }),
                    j = URL.createObjectURL(B);
                  return y.audioWorklet
                    .addModule(j, w)
                    .then(() => {
                      if (a(y)) return y;
                      const z = o(y);
                      return z.audioWorklet.addModule(j, w).then(() => z);
                    })
                    .then((z) => {
                      if (l === null) throw new SyntaxError();
                      try {
                        new l(z, `__sac${S}`);
                      } catch {
                        throw new SyntaxError();
                      }
                    })
                    .finally(() => URL.revokeObjectURL(j));
                }
              );
      return (
        g === void 0 ? u.set(p, new Map([[_, T]])) : g.set(_, T),
        T.then(() => {
          const v = c.get(p);
          v === void 0 ? c.set(p, new Set([_])) : v.add(_);
        }).finally(() => {
          const v = u.get(p);
          v !== void 0 && v.delete(_);
        }),
        T
      );
    };
  },
  Wt = (t, e) => {
    const n = t.get(e);
    if (n === void 0)
      throw new Error('A value with the given key could not be found.');
    return n;
  },
  Wa = (t, e) => {
    const n = Array.from(t).filter(e);
    if (n.length > 1) throw Error('More than one element was found.');
    if (n.length === 0) throw Error('No element was found.');
    const [r] = n;
    return t.delete(r), r;
  },
  bm = (t, e, n, r) => {
    const s = Wt(t, e),
      i = Wa(s, (o) => o[0] === n && o[1] === r);
    return s.size === 0 && t.delete(e), i;
  },
  bi = (t) => Wt(Rm, t),
  us = (t) => {
    if (ls.has(t)) throw new Error('The AudioNode is already stored.');
    ls.add(t), bi(t).forEach((e) => e(!0));
  },
  Lm = (t) => 'port' in t,
  Li = (t) => {
    if (!ls.has(t)) throw new Error('The AudioNode is not stored.');
    ls.delete(t), bi(t).forEach((e) => e(!1));
  },
  Du = (t, e) => {
    !Lm(t) && e.every((n) => n.size === 0) && Li(t);
  },
  _0 = (t, e, n, r, s, i, o, a, l, u, c, h, d) => {
    const m = new WeakMap();
    return (p, _, w, f, g) => {
      const { activeInputs: y, passiveInputs: T } = i(_),
        { outputs: v } = i(p),
        k = a(p),
        C = (S) => {
          const N = l(_),
            x = l(p);
          if (S) {
            const E = bm(T, p, w, f);
            t(y, p, E, !1), !g && !h(p) && n(x, N, w, f), d(_) && us(_);
          } else {
            const E = r(y, p, w, f);
            e(T, f, E, !1), !g && !h(p) && s(x, N, w, f);
            const A = o(_);
            if (A === 0) c(_) && Du(_, y);
            else {
              const R = m.get(_);
              R !== void 0 && clearTimeout(R),
                m.set(
                  _,
                  setTimeout(() => {
                    c(_) && Du(_, y);
                  }, A * 1e3)
                );
            }
          }
        };
      return u(v, [_, w, f], (S) => S[0] === _ && S[1] === w && S[2] === f, !0)
        ? (k.add(C), c(p) ? t(y, p, [w, f, C], !0) : e(T, f, [p, w, C], !0), !0)
        : !1;
    };
  },
  v0 =
    (t) =>
    (e, n, [r, s, i], o) => {
      const a = e.get(r);
      a === void 0
        ? e.set(r, new Set([[s, n, i]]))
        : t(a, [s, n, i], (l) => l[0] === s && l[1] === n, o);
    },
  w0 = (t) => (e, n) => {
    const r = t(e, {
      channelCount: 1,
      channelCountMode: 'explicit',
      channelInterpretation: 'discrete',
      gain: 0
    });
    n.connect(r).connect(e.destination);
    const s = () => {
      n.removeEventListener('ended', s), n.disconnect(r), r.disconnect();
    };
    n.addEventListener('ended', s);
  },
  S0 = (t) => (e, n) => {
    t(e).add(n);
  },
  T0 = {
    channelCount: 2,
    channelCountMode: 'max',
    channelInterpretation: 'speakers',
    fftSize: 2048,
    maxDecibels: -30,
    minDecibels: -100,
    smoothingTimeConstant: 0.8
  },
  k0 = (t, e, n, r, s, i) =>
    class extends t {
      constructor(a, l) {
        const u = s(a),
          c = { ...T0, ...l },
          h = r(u, c),
          d = i(u) ? e() : null;
        super(a, !1, h, d), (this._nativeAnalyserNode = h);
      }
      get fftSize() {
        return this._nativeAnalyserNode.fftSize;
      }
      set fftSize(a) {
        this._nativeAnalyserNode.fftSize = a;
      }
      get frequencyBinCount() {
        return this._nativeAnalyserNode.frequencyBinCount;
      }
      get maxDecibels() {
        return this._nativeAnalyserNode.maxDecibels;
      }
      set maxDecibels(a) {
        const l = this._nativeAnalyserNode.maxDecibels;
        if (
          ((this._nativeAnalyserNode.maxDecibels = a),
          !(a > this._nativeAnalyserNode.minDecibels))
        )
          throw ((this._nativeAnalyserNode.maxDecibels = l), n());
      }
      get minDecibels() {
        return this._nativeAnalyserNode.minDecibels;
      }
      set minDecibels(a) {
        const l = this._nativeAnalyserNode.minDecibels;
        if (
          ((this._nativeAnalyserNode.minDecibels = a),
          !(this._nativeAnalyserNode.maxDecibels > a))
        )
          throw ((this._nativeAnalyserNode.minDecibels = l), n());
      }
      get smoothingTimeConstant() {
        return this._nativeAnalyserNode.smoothingTimeConstant;
      }
      set smoothingTimeConstant(a) {
        this._nativeAnalyserNode.smoothingTimeConstant = a;
      }
      getByteFrequencyData(a) {
        this._nativeAnalyserNode.getByteFrequencyData(a);
      }
      getByteTimeDomainData(a) {
        this._nativeAnalyserNode.getByteTimeDomainData(a);
      }
      getFloatFrequencyData(a) {
        this._nativeAnalyserNode.getFloatFrequencyData(a);
      }
      getFloatTimeDomainData(a) {
        this._nativeAnalyserNode.getFloatTimeDomainData(a);
      }
    },
  He = (t, e) => t.context === e,
  C0 = (t, e, n) => () => {
    const r = new WeakMap(),
      s = async (i, o) => {
        let a = e(i);
        if (!He(a, o)) {
          const u = {
            channelCount: a.channelCount,
            channelCountMode: a.channelCountMode,
            channelInterpretation: a.channelInterpretation,
            fftSize: a.fftSize,
            maxDecibels: a.maxDecibels,
            minDecibels: a.minDecibels,
            smoothingTimeConstant: a.smoothingTimeConstant
          };
          a = t(o, u);
        }
        return r.set(o, a), await n(i, o, a), a;
      };
    return {
      render(i, o) {
        const a = r.get(o);
        return a !== void 0 ? Promise.resolve(a) : s(i, o);
      }
    };
  },
  ra = (t) => {
    try {
      t.copyToChannel(new Float32Array(1), 0, -1);
    } catch {
      return !1;
    }
    return !0;
  },
  Zt = () => new DOMException('', 'IndexSizeError'),
  Bc = (t) => {
    t.getChannelData = ((e) => (n) => {
      try {
        return e.call(t, n);
      } catch (r) {
        throw r.code === 12 ? Zt() : r;
      }
    })(t.getChannelData);
  },
  x0 = { numberOfChannels: 1 },
  N0 = (t, e, n, r, s, i, o, a) => {
    let l = null;
    return class Vm {
      constructor(c) {
        if (s === null)
          throw new Error(
            'Missing the native OfflineAudioContext constructor.'
          );
        const {
          length: h,
          numberOfChannels: d,
          sampleRate: m
        } = { ...x0, ...c };
        l === null && (l = new s(1, 1, 44100));
        const p =
          r !== null && e(i, i)
            ? new r({ length: h, numberOfChannels: d, sampleRate: m })
            : l.createBuffer(d, h, m);
        if (p.numberOfChannels === 0) throw n();
        return (
          typeof p.copyFromChannel != 'function'
            ? (o(p), Bc(p))
            : e(ra, () => ra(p)) || a(p),
          t.add(p),
          p
        );
      }
      static [Symbol.hasInstance](c) {
        return (
          (c !== null &&
            typeof c == 'object' &&
            Object.getPrototypeOf(c) === Vm.prototype) ||
          t.has(c)
        );
      }
    };
  },
  nt = -34028234663852886e22,
  Ke = -nt,
  cn = (t) => ls.has(t),
  E0 = {
    buffer: null,
    channelCount: 2,
    channelCountMode: 'max',
    channelInterpretation: 'speakers',
    loop: !1,
    loopEnd: 0,
    loopStart: 0,
    playbackRate: 1
  },
  A0 = (t, e, n, r, s, i, o, a) =>
    class extends t {
      constructor(u, c) {
        const h = i(u),
          d = { ...E0, ...c },
          m = s(h, d),
          p = o(h),
          _ = p ? e() : null;
        super(u, !1, m, _),
          (this._audioBufferSourceNodeRenderer = _),
          (this._isBufferNullified = !1),
          (this._isBufferSet = d.buffer !== null),
          (this._nativeAudioBufferSourceNode = m),
          (this._onended = null),
          (this._playbackRate = n(this, p, m.playbackRate, Ke, nt));
      }
      get buffer() {
        return this._isBufferNullified
          ? null
          : this._nativeAudioBufferSourceNode.buffer;
      }
      set buffer(u) {
        if (((this._nativeAudioBufferSourceNode.buffer = u), u !== null)) {
          if (this._isBufferSet) throw r();
          this._isBufferSet = !0;
        }
      }
      get loop() {
        return this._nativeAudioBufferSourceNode.loop;
      }
      set loop(u) {
        this._nativeAudioBufferSourceNode.loop = u;
      }
      get loopEnd() {
        return this._nativeAudioBufferSourceNode.loopEnd;
      }
      set loopEnd(u) {
        this._nativeAudioBufferSourceNode.loopEnd = u;
      }
      get loopStart() {
        return this._nativeAudioBufferSourceNode.loopStart;
      }
      set loopStart(u) {
        this._nativeAudioBufferSourceNode.loopStart = u;
      }
      get onended() {
        return this._onended;
      }
      set onended(u) {
        const c = typeof u == 'function' ? a(this, u) : null;
        this._nativeAudioBufferSourceNode.onended = c;
        const h = this._nativeAudioBufferSourceNode.onended;
        this._onended = h !== null && h === c ? u : h;
      }
      get playbackRate() {
        return this._playbackRate;
      }
      start(u = 0, c = 0, h) {
        if (
          (this._nativeAudioBufferSourceNode.start(u, c, h),
          this._audioBufferSourceNodeRenderer !== null &&
            (this._audioBufferSourceNodeRenderer.start =
              h === void 0 ? [u, c] : [u, c, h]),
          this.context.state !== 'closed')
        ) {
          us(this);
          const d = () => {
            this._nativeAudioBufferSourceNode.removeEventListener('ended', d),
              cn(this) && Li(this);
          };
          this._nativeAudioBufferSourceNode.addEventListener('ended', d);
        }
      }
      stop(u = 0) {
        this._nativeAudioBufferSourceNode.stop(u),
          this._audioBufferSourceNodeRenderer !== null &&
            (this._audioBufferSourceNodeRenderer.stop = u);
      }
    },
  O0 = (t, e, n, r, s) => () => {
    const i = new WeakMap();
    let o = null,
      a = null;
    const l = async (u, c) => {
      let h = n(u);
      const d = He(h, c);
      if (!d) {
        const m = {
          buffer: h.buffer,
          channelCount: h.channelCount,
          channelCountMode: h.channelCountMode,
          channelInterpretation: h.channelInterpretation,
          loop: h.loop,
          loopEnd: h.loopEnd,
          loopStart: h.loopStart,
          playbackRate: h.playbackRate.value
        };
        (h = e(c, m)), o !== null && h.start(...o), a !== null && h.stop(a);
      }
      return (
        i.set(c, h),
        d
          ? await t(c, u.playbackRate, h.playbackRate)
          : await r(c, u.playbackRate, h.playbackRate),
        await s(u, c, h),
        h
      );
    };
    return {
      set start(u) {
        o = u;
      },
      set stop(u) {
        a = u;
      },
      render(u, c) {
        const h = i.get(c);
        return h !== void 0 ? Promise.resolve(h) : l(u, c);
      }
    };
  },
  M0 = (t) => 'playbackRate' in t,
  I0 = (t) => 'frequency' in t && 'gain' in t,
  D0 = (t) => 'offset' in t,
  P0 = (t) => !('frequency' in t) && 'gain' in t,
  R0 = (t) => 'detune' in t && 'frequency' in t,
  F0 = (t) => 'pan' in t,
  Qe = (t) => Wt(Dm, t),
  Vi = (t) => Wt(Pm, t),
  Pu = (t, e) => {
    const { activeInputs: n } = Qe(t);
    n.forEach((s) =>
      s.forEach(([i]) => {
        e.includes(t) || Pu(i, [...e, t]);
      })
    );
    const r = M0(t)
      ? [t.playbackRate]
      : Lm(t)
        ? Array.from(t.parameters.values())
        : I0(t)
          ? [t.Q, t.detune, t.frequency, t.gain]
          : D0(t)
            ? [t.offset]
            : P0(t)
              ? [t.gain]
              : R0(t)
                ? [t.detune, t.frequency]
                : F0(t)
                  ? [t.pan]
                  : [];
    for (const s of r) {
      const i = Vi(s);
      i !== void 0 && i.activeInputs.forEach(([o]) => Pu(o, e));
    }
    cn(t) && Li(t);
  },
  jm = (t) => {
    Pu(t.destination, []);
  },
  b0 = (t) =>
    t === void 0 ||
    typeof t == 'number' ||
    (typeof t == 'string' &&
      (t === 'balanced' || t === 'interactive' || t === 'playback')),
  L0 = (t, e, n, r, s, i, o, a, l) =>
    class extends t {
      constructor(c = {}) {
        if (l === null)
          throw new Error('Missing the native AudioContext constructor.');
        let h;
        try {
          h = new l(c);
        } catch (p) {
          throw p.code === 12 && p.message === 'sampleRate is not in range'
            ? n()
            : p;
        }
        if (h === null) throw r();
        if (!b0(c.latencyHint))
          throw new TypeError(
            `The provided value '${c.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`
          );
        if (c.sampleRate !== void 0 && h.sampleRate !== c.sampleRate) throw n();
        super(h, 2);
        const { latencyHint: d } = c,
          { sampleRate: m } = h;
        if (
          ((this._baseLatency =
            typeof h.baseLatency == 'number'
              ? h.baseLatency
              : d === 'balanced'
                ? 512 / m
                : d === 'interactive' || d === void 0
                  ? 256 / m
                  : d === 'playback'
                    ? 1024 / m
                    : (Math.max(2, Math.min(128, Math.round((d * m) / 128))) *
                        128) /
                      m),
          (this._nativeAudioContext = h),
          l.name === 'webkitAudioContext'
            ? ((this._nativeGainNode = h.createGain()),
              (this._nativeOscillatorNode = h.createOscillator()),
              (this._nativeGainNode.gain.value = 1e-37),
              this._nativeOscillatorNode
                .connect(this._nativeGainNode)
                .connect(h.destination),
              this._nativeOscillatorNode.start())
            : ((this._nativeGainNode = null),
              (this._nativeOscillatorNode = null)),
          (this._state = null),
          h.state === 'running')
        ) {
          this._state = 'suspended';
          const p = () => {
            this._state === 'suspended' && (this._state = null),
              h.removeEventListener('statechange', p);
          };
          h.addEventListener('statechange', p);
        }
      }
      get baseLatency() {
        return this._baseLatency;
      }
      get state() {
        return this._state !== null
          ? this._state
          : this._nativeAudioContext.state;
      }
      close() {
        return this.state === 'closed'
          ? this._nativeAudioContext.close().then(() => {
              throw e();
            })
          : (this._state === 'suspended' && (this._state = null),
            this._nativeAudioContext.close().then(() => {
              this._nativeGainNode !== null &&
                this._nativeOscillatorNode !== null &&
                (this._nativeOscillatorNode.stop(),
                this._nativeGainNode.disconnect(),
                this._nativeOscillatorNode.disconnect()),
                jm(this);
            }));
      }
      createMediaElementSource(c) {
        return new s(this, { mediaElement: c });
      }
      createMediaStreamDestination() {
        return new i(this);
      }
      createMediaStreamSource(c) {
        return new o(this, { mediaStream: c });
      }
      createMediaStreamTrackSource(c) {
        return new a(this, { mediaStreamTrack: c });
      }
      resume() {
        return this._state === 'suspended'
          ? new Promise((c, h) => {
              const d = () => {
                this._nativeAudioContext.removeEventListener('statechange', d),
                  this._nativeAudioContext.state === 'running'
                    ? c()
                    : this.resume().then(c, h);
              };
              this._nativeAudioContext.addEventListener('statechange', d);
            })
          : this._nativeAudioContext.resume().catch((c) => {
              throw c === void 0 || c.code === 15 ? e() : c;
            });
      }
      suspend() {
        return this._nativeAudioContext.suspend().catch((c) => {
          throw c === void 0 ? e() : c;
        });
      }
    },
  V0 = (t, e, n, r, s, i, o, a) =>
    class extends t {
      constructor(u, c) {
        const h = i(u),
          d = o(h),
          m = s(h, c, d),
          p = d ? e(a) : null;
        super(u, !1, m, p),
          (this._isNodeOfNativeOfflineAudioContext = d),
          (this._nativeAudioDestinationNode = m);
      }
      get channelCount() {
        return this._nativeAudioDestinationNode.channelCount;
      }
      set channelCount(u) {
        if (this._isNodeOfNativeOfflineAudioContext) throw r();
        if (u > this._nativeAudioDestinationNode.maxChannelCount) throw n();
        this._nativeAudioDestinationNode.channelCount = u;
      }
      get channelCountMode() {
        return this._nativeAudioDestinationNode.channelCountMode;
      }
      set channelCountMode(u) {
        if (this._isNodeOfNativeOfflineAudioContext) throw r();
        this._nativeAudioDestinationNode.channelCountMode = u;
      }
      get maxChannelCount() {
        return this._nativeAudioDestinationNode.maxChannelCount;
      }
    },
  j0 = (t) => {
    const e = new WeakMap(),
      n = async (r, s) => {
        const i = s.destination;
        return e.set(s, i), await t(r, s, i), i;
      };
    return {
      render(r, s) {
        const i = e.get(s);
        return i !== void 0 ? Promise.resolve(i) : n(r, s);
      }
    };
  },
  z0 = (t, e, n, r, s, i, o, a) => (l, u) => {
    const c = u.listener,
      h = () => {
        const v = new Float32Array(1),
          k = e(u, {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'speakers',
            numberOfInputs: 9
          }),
          C = o(u);
        let S = !1,
          N = [0, 0, -1, 0, 1, 0],
          x = [0, 0, 0];
        const E = () => {
            if (S) return;
            S = !0;
            const B = r(u, 256, 9, 0);
            (B.onaudioprocess = ({ inputBuffer: j }) => {
              const z = [
                i(j, v, 0),
                i(j, v, 1),
                i(j, v, 2),
                i(j, v, 3),
                i(j, v, 4),
                i(j, v, 5)
              ];
              z.some((I, D) => I !== N[D]) && (c.setOrientation(...z), (N = z));
              const O = [i(j, v, 6), i(j, v, 7), i(j, v, 8)];
              O.some((I, D) => I !== x[D]) && (c.setPosition(...O), (x = O));
            }),
              k.connect(B);
          },
          A = (B) => (j) => {
            j !== N[B] && ((N[B] = j), c.setOrientation(...N));
          },
          R = (B) => (j) => {
            j !== x[B] && ((x[B] = j), c.setPosition(...x));
          },
          F = (B, j, z) => {
            const O = n(u, {
              channelCount: 1,
              channelCountMode: 'explicit',
              channelInterpretation: 'discrete',
              offset: j
            });
            O.connect(k, 0, B),
              O.start(),
              Object.defineProperty(O.offset, 'defaultValue', {
                get() {
                  return j;
                }
              });
            const I = t({ context: l }, C, O.offset, Ke, nt);
            return (
              a(
                I,
                'value',
                (D) => () => D.call(I),
                (D) => (L) => {
                  try {
                    D.call(I, L);
                  } catch (U) {
                    if (U.code !== 9) throw U;
                  }
                  E(), C && z(L);
                }
              ),
              (I.cancelAndHoldAtTime = ((D) =>
                C
                  ? () => {
                      throw s();
                    }
                  : (...L) => {
                      const U = D.apply(I, L);
                      return E(), U;
                    })(I.cancelAndHoldAtTime)),
              (I.cancelScheduledValues = ((D) =>
                C
                  ? () => {
                      throw s();
                    }
                  : (...L) => {
                      const U = D.apply(I, L);
                      return E(), U;
                    })(I.cancelScheduledValues)),
              (I.exponentialRampToValueAtTime = ((D) =>
                C
                  ? () => {
                      throw s();
                    }
                  : (...L) => {
                      const U = D.apply(I, L);
                      return E(), U;
                    })(I.exponentialRampToValueAtTime)),
              (I.linearRampToValueAtTime = ((D) =>
                C
                  ? () => {
                      throw s();
                    }
                  : (...L) => {
                      const U = D.apply(I, L);
                      return E(), U;
                    })(I.linearRampToValueAtTime)),
              (I.setTargetAtTime = ((D) =>
                C
                  ? () => {
                      throw s();
                    }
                  : (...L) => {
                      const U = D.apply(I, L);
                      return E(), U;
                    })(I.setTargetAtTime)),
              (I.setValueAtTime = ((D) =>
                C
                  ? () => {
                      throw s();
                    }
                  : (...L) => {
                      const U = D.apply(I, L);
                      return E(), U;
                    })(I.setValueAtTime)),
              (I.setValueCurveAtTime = ((D) =>
                C
                  ? () => {
                      throw s();
                    }
                  : (...L) => {
                      const U = D.apply(I, L);
                      return E(), U;
                    })(I.setValueCurveAtTime)),
              I
            );
          };
        return {
          forwardX: F(0, 0, A(0)),
          forwardY: F(1, 0, A(1)),
          forwardZ: F(2, -1, A(2)),
          positionX: F(6, 0, R(0)),
          positionY: F(7, 0, R(1)),
          positionZ: F(8, 0, R(2)),
          upX: F(3, 0, A(3)),
          upY: F(4, 1, A(4)),
          upZ: F(5, 0, A(5))
        };
      },
      {
        forwardX: d,
        forwardY: m,
        forwardZ: p,
        positionX: _,
        positionY: w,
        positionZ: f,
        upX: g,
        upY: y,
        upZ: T
      } = c.forwardX === void 0 ? h() : c;
    return {
      get forwardX() {
        return d;
      },
      get forwardY() {
        return m;
      },
      get forwardZ() {
        return p;
      },
      get positionX() {
        return _;
      },
      get positionY() {
        return w;
      },
      get positionZ() {
        return f;
      },
      get upX() {
        return g;
      },
      get upY() {
        return y;
      },
      get upZ() {
        return T;
      }
    };
  },
  sa = (t) => 'context' in t,
  ji = (t) => sa(t[0]),
  Er = (t, e, n, r) => {
    for (const s of t)
      if (n(s)) {
        if (r) return !1;
        throw Error('The set contains at least one similar element.');
      }
    return t.add(e), !0;
  },
  Vd = (t, e, [n, r], s) => {
    Er(t, [e, n, r], (i) => i[0] === e && i[1] === n, s);
  },
  jd = (t, [e, n, r], s) => {
    const i = t.get(e);
    i === void 0
      ? t.set(e, new Set([[n, r]]))
      : Er(i, [n, r], (o) => o[0] === n, s);
  },
  ys = (t) => 'inputs' in t,
  ia = (t, e, n, r) => {
    if (ys(e)) {
      const s = e.inputs[r];
      return t.connect(s, n, 0), [s, n, 0];
    }
    return t.connect(e, n, r), [e, n, r];
  },
  zm = (t, e, n) => {
    for (const r of t) if (r[0] === e && r[1] === n) return t.delete(r), r;
    return null;
  },
  W0 = (t, e, n) => Wa(t, (r) => r[0] === e && r[1] === n),
  Wm = (t, e) => {
    if (!bi(t).delete(e))
      throw new Error('Missing the expected event listener.');
  },
  Bm = (t, e, n) => {
    const r = Wt(t, e),
      s = Wa(r, (i) => i[0] === n);
    return r.size === 0 && t.delete(e), s;
  },
  oa = (t, e, n, r) => {
    ys(e) ? t.disconnect(e.inputs[r], n, 0) : t.disconnect(e, n, r);
  },
  le = (t) => Wt(zc, t),
  hi = (t) => Wt(Wc, t),
  yr = (t) => Ou.has(t),
  Ao = (t) => !ls.has(t),
  zd = (t, e) =>
    new Promise((n) => {
      if (e !== null) n(!0);
      else {
        const r = t.createScriptProcessor(256, 1, 1),
          s = t.createGain(),
          i = t.createBuffer(1, 2, 44100),
          o = i.getChannelData(0);
        (o[0] = 1), (o[1] = 1);
        const a = t.createBufferSource();
        (a.buffer = i),
          (a.loop = !0),
          a.connect(r).connect(t.destination),
          a.connect(s),
          a.disconnect(s),
          (r.onaudioprocess = (l) => {
            const u = l.inputBuffer.getChannelData(0);
            Array.prototype.some.call(u, (c) => c === 1) ? n(!0) : n(!1),
              a.stop(),
              (r.onaudioprocess = null),
              a.disconnect(r),
              r.disconnect(t.destination);
          }),
          a.start();
      }
    }),
  Ol = (t, e) => {
    const n = new Map();
    for (const r of t)
      for (const s of r) {
        const i = n.get(s);
        n.set(s, i === void 0 ? 1 : i + 1);
      }
    n.forEach((r, s) => e(s, r));
  },
  aa = (t) => 'context' in t,
  B0 = (t) => {
    const e = new Map();
    (t.connect = (
      (n) =>
      (r, s = 0, i = 0) => {
        const o = aa(r) ? n(r, s, i) : n(r, s),
          a = e.get(r);
        return (
          a === void 0
            ? e.set(r, [{ input: i, output: s }])
            : a.every((l) => l.input !== i || l.output !== s) &&
              a.push({ input: i, output: s }),
          o
        );
      }
    )(t.connect.bind(t))),
      (t.disconnect = ((n) => (r, s, i) => {
        if ((n.apply(t), r === void 0)) e.clear();
        else if (typeof r == 'number')
          for (const [o, a] of e) {
            const l = a.filter((u) => u.output !== r);
            l.length === 0 ? e.delete(o) : e.set(o, l);
          }
        else if (e.has(r))
          if (s === void 0) e.delete(r);
          else {
            const o = e.get(r);
            if (o !== void 0) {
              const a = o.filter(
                (l) => l.output !== s && (l.input !== i || i === void 0)
              );
              a.length === 0 ? e.delete(r) : e.set(r, a);
            }
          }
        for (const [o, a] of e)
          a.forEach((l) => {
            aa(o) ? t.connect(o, l.output, l.input) : t.connect(o, l.output);
          });
      })(t.disconnect));
  },
  U0 = (t, e, n, r) => {
    const { activeInputs: s, passiveInputs: i } = Vi(e),
      { outputs: o } = Qe(t),
      a = bi(t),
      l = (u) => {
        const c = le(t),
          h = hi(e);
        if (u) {
          const d = Bm(i, t, n);
          Vd(s, t, d, !1), !r && !yr(t) && c.connect(h, n);
        } else {
          const d = W0(s, t, n);
          jd(i, d, !1), !r && !yr(t) && c.disconnect(h, n);
        }
      };
    return Er(o, [e, n], (u) => u[0] === e && u[1] === n, !0)
      ? (a.add(l), cn(t) ? Vd(s, t, [n, l], !0) : jd(i, [t, n, l], !0), !0)
      : !1;
  },
  q0 = (t, e, n, r) => {
    const { activeInputs: s, passiveInputs: i } = Qe(e),
      o = zm(s[r], t, n);
    return o === null ? [bm(i, t, n, r)[2], !1] : [o[2], !0];
  },
  $0 = (t, e, n) => {
    const { activeInputs: r, passiveInputs: s } = Vi(e),
      i = zm(r, t, n);
    return i === null ? [Bm(s, t, n)[1], !1] : [i[2], !0];
  },
  Uc = (t, e, n, r, s) => {
    const [i, o] = q0(t, n, r, s);
    if (
      (i !== null && (Wm(t, i), o && !e && !yr(t) && oa(le(t), le(n), r, s)),
      cn(n))
    ) {
      const { activeInputs: a } = Qe(n);
      Du(n, a);
    }
  },
  qc = (t, e, n, r) => {
    const [s, i] = $0(t, n, r);
    s !== null && (Wm(t, s), i && !e && !yr(t) && le(t).disconnect(hi(n), r));
  },
  H0 = (t, e) => {
    const n = Qe(t),
      r = [];
    for (const s of n.outputs)
      ji(s) ? Uc(t, e, ...s) : qc(t, e, ...s), r.push(s[0]);
    return n.outputs.clear(), r;
  },
  G0 = (t, e, n) => {
    const r = Qe(t),
      s = [];
    for (const i of r.outputs)
      i[1] === n &&
        (ji(i) ? Uc(t, e, ...i) : qc(t, e, ...i),
        s.push(i[0]),
        r.outputs.delete(i));
    return s;
  },
  K0 = (t, e, n, r, s) => {
    const i = Qe(t);
    return Array.from(i.outputs)
      .filter(
        (o) =>
          o[0] === n &&
          (r === void 0 || o[1] === r) &&
          (s === void 0 || o[2] === s)
      )
      .map(
        (o) => (
          ji(o) ? Uc(t, e, ...o) : qc(t, e, ...o), i.outputs.delete(o), o[0]
        )
      );
  },
  Q0 = (t, e, n, r, s, i, o, a, l, u, c, h, d, m, p, _) =>
    class extends u {
      constructor(f, g, y, T) {
        super(y), (this._context = f), (this._nativeAudioNode = y);
        const v = c(f);
        h(v) && n(zd, () => zd(v, _)) !== !0 && B0(y),
          zc.set(this, y),
          Rm.set(this, new Set()),
          f.state !== 'closed' && g && us(this),
          t(this, T, y);
      }
      get channelCount() {
        return this._nativeAudioNode.channelCount;
      }
      set channelCount(f) {
        this._nativeAudioNode.channelCount = f;
      }
      get channelCountMode() {
        return this._nativeAudioNode.channelCountMode;
      }
      set channelCountMode(f) {
        this._nativeAudioNode.channelCountMode = f;
      }
      get channelInterpretation() {
        return this._nativeAudioNode.channelInterpretation;
      }
      set channelInterpretation(f) {
        this._nativeAudioNode.channelInterpretation = f;
      }
      get context() {
        return this._context;
      }
      get numberOfInputs() {
        return this._nativeAudioNode.numberOfInputs;
      }
      get numberOfOutputs() {
        return this._nativeAudioNode.numberOfOutputs;
      }
      connect(f, g = 0, y = 0) {
        if (g < 0 || g >= this._nativeAudioNode.numberOfOutputs) throw s();
        const T = c(this._context),
          v = p(T);
        if (d(f) || m(f)) throw i();
        if (sa(f)) {
          const S = le(f);
          try {
            const x = ia(this._nativeAudioNode, S, g, y),
              E = Ao(this);
            (v || E) && this._nativeAudioNode.disconnect(...x),
              this.context.state !== 'closed' && !E && Ao(f) && us(f);
          } catch (x) {
            throw x.code === 12 ? i() : x;
          }
          if (e(this, f, g, y, v)) {
            const x = l([this], f);
            Ol(x, r(v));
          }
          return f;
        }
        const k = hi(f);
        if (k.name === 'playbackRate' && k.maxValue === 1024) throw o();
        try {
          this._nativeAudioNode.connect(k, g),
            (v || Ao(this)) && this._nativeAudioNode.disconnect(k, g);
        } catch (S) {
          throw S.code === 12 ? i() : S;
        }
        if (U0(this, f, g, v)) {
          const S = l([this], f);
          Ol(S, r(v));
        }
      }
      disconnect(f, g, y) {
        let T;
        const v = c(this._context),
          k = p(v);
        if (f === void 0) T = H0(this, k);
        else if (typeof f == 'number') {
          if (f < 0 || f >= this.numberOfOutputs) throw s();
          T = G0(this, k, f);
        } else {
          if (
            (g !== void 0 && (g < 0 || g >= this.numberOfOutputs)) ||
            (sa(f) && y !== void 0 && (y < 0 || y >= f.numberOfInputs))
          )
            throw s();
          if (((T = K0(this, k, f, g, y)), T.length === 0)) throw i();
        }
        for (const C of T) {
          const S = l([this], C);
          Ol(S, a);
        }
      }
    },
  X0 =
    (t, e, n, r, s, i, o, a, l, u, c, h, d) =>
    (m, p, _, w = null, f = null) => {
      const g = _.value,
        y = new o0(g),
        T = p ? r(y) : null,
        v = {
          get defaultValue() {
            return g;
          },
          get maxValue() {
            return w === null ? _.maxValue : w;
          },
          get minValue() {
            return f === null ? _.minValue : f;
          },
          get value() {
            return _.value;
          },
          set value(k) {
            (_.value = k), v.setValueAtTime(k, m.context.currentTime);
          },
          cancelAndHoldAtTime(k) {
            if (typeof _.cancelAndHoldAtTime == 'function')
              T === null && y.flush(m.context.currentTime),
                y.add(s(k)),
                _.cancelAndHoldAtTime(k);
            else {
              const C = Array.from(y).pop();
              T === null && y.flush(m.context.currentTime), y.add(s(k));
              const S = Array.from(y).pop();
              _.cancelScheduledValues(k),
                C !== S &&
                  S !== void 0 &&
                  (S.type === 'exponentialRampToValue'
                    ? _.exponentialRampToValueAtTime(S.value, S.endTime)
                    : S.type === 'linearRampToValue'
                      ? _.linearRampToValueAtTime(S.value, S.endTime)
                      : S.type === 'setValue'
                        ? _.setValueAtTime(S.value, S.startTime)
                        : S.type === 'setValueCurve' &&
                          _.setValueCurveAtTime(
                            S.values,
                            S.startTime,
                            S.duration
                          ));
            }
            return v;
          },
          cancelScheduledValues(k) {
            return (
              T === null && y.flush(m.context.currentTime),
              y.add(i(k)),
              _.cancelScheduledValues(k),
              v
            );
          },
          exponentialRampToValueAtTime(k, C) {
            if (k === 0) throw new RangeError();
            if (!Number.isFinite(C) || C < 0) throw new RangeError();
            const S = m.context.currentTime;
            return (
              T === null && y.flush(S),
              Array.from(y).length === 0 &&
                (y.add(u(g, S)), _.setValueAtTime(g, S)),
              y.add(o(k, C)),
              _.exponentialRampToValueAtTime(k, C),
              v
            );
          },
          linearRampToValueAtTime(k, C) {
            const S = m.context.currentTime;
            return (
              T === null && y.flush(S),
              Array.from(y).length === 0 &&
                (y.add(u(g, S)), _.setValueAtTime(g, S)),
              y.add(a(k, C)),
              _.linearRampToValueAtTime(k, C),
              v
            );
          },
          setTargetAtTime(k, C, S) {
            return (
              T === null && y.flush(m.context.currentTime),
              y.add(l(k, C, S)),
              _.setTargetAtTime(k, C, S),
              v
            );
          },
          setValueAtTime(k, C) {
            return (
              T === null && y.flush(m.context.currentTime),
              y.add(u(k, C)),
              _.setValueAtTime(k, C),
              v
            );
          },
          setValueCurveAtTime(k, C, S) {
            const N = k instanceof Float32Array ? k : new Float32Array(k);
            if (h !== null && h.name === 'webkitAudioContext') {
              const x = C + S,
                E = m.context.sampleRate,
                A = Math.ceil(C * E),
                R = Math.floor(x * E),
                F = R - A,
                B = new Float32Array(F);
              for (let z = 0; z < F; z += 1) {
                const O = ((N.length - 1) / S) * ((A + z) / E - C),
                  I = Math.floor(O),
                  D = Math.ceil(O);
                B[z] =
                  I === D ? N[I] : (1 - (O - I)) * N[I] + (1 - (D - O)) * N[D];
              }
              T === null && y.flush(m.context.currentTime),
                y.add(c(B, C, S)),
                _.setValueCurveAtTime(B, C, S);
              const j = R / E;
              j < x && d(v, B[B.length - 1], j), d(v, N[N.length - 1], x);
            } else
              T === null && y.flush(m.context.currentTime),
                y.add(c(N, C, S)),
                _.setValueCurveAtTime(N, C, S);
            return v;
          }
        };
      return n.set(v, _), e.set(v, m), t(v, T), v;
    },
  Y0 = (t) => ({
    replay(e) {
      for (const n of t)
        if (n.type === 'exponentialRampToValue') {
          const { endTime: r, value: s } = n;
          e.exponentialRampToValueAtTime(s, r);
        } else if (n.type === 'linearRampToValue') {
          const { endTime: r, value: s } = n;
          e.linearRampToValueAtTime(s, r);
        } else if (n.type === 'setTarget') {
          const { startTime: r, target: s, timeConstant: i } = n;
          e.setTargetAtTime(s, r, i);
        } else if (n.type === 'setValue') {
          const { startTime: r, value: s } = n;
          e.setValueAtTime(s, r);
        } else if (n.type === 'setValueCurve') {
          const { duration: r, startTime: s, values: i } = n;
          e.setValueCurveAtTime(i, s, r);
        } else throw new Error("Can't apply an unknown automation.");
    }
  });
class Um {
  constructor(e) {
    this._map = new Map(e);
  }
  get size() {
    return this._map.size;
  }
  entries() {
    return this._map.entries();
  }
  forEach(e, n = null) {
    return this._map.forEach((r, s) => e.call(n, r, s, this));
  }
  get(e) {
    return this._map.get(e);
  }
  has(e) {
    return this._map.has(e);
  }
  keys() {
    return this._map.keys();
  }
  values() {
    return this._map.values();
  }
}
const Z0 = {
    channelCount: 2,
    channelCountMode: 'explicit',
    channelInterpretation: 'speakers',
    numberOfInputs: 1,
    numberOfOutputs: 1,
    parameterData: {},
    processorOptions: {}
  },
  J0 = (t, e, n, r, s, i, o, a, l, u, c, h, d, m) =>
    class extends e {
      constructor(_, w, f) {
        var g;
        const y = a(_),
          T = l(y),
          v = c({ ...Z0, ...f });
        d(v);
        const k = Mu.get(y),
          C = k == null ? void 0 : k.get(w),
          S =
            T || y.state !== 'closed'
              ? y
              : (g = o(y)) !== null && g !== void 0
                ? g
                : y,
          N = s(S, T ? null : _.baseLatency, u, w, C, v),
          x = T ? r(w, v, C) : null;
        super(_, !0, N, x);
        const E = [];
        N.parameters.forEach((R, F) => {
          const B = n(this, T, R);
          E.push([F, B]);
        }),
          (this._nativeAudioWorkletNode = N),
          (this._onprocessorerror = null),
          (this._parameters = new Um(E)),
          T && t(y, this);
        const { activeInputs: A } = i(this);
        h(N, A);
      }
      get onprocessorerror() {
        return this._onprocessorerror;
      }
      set onprocessorerror(_) {
        const w = typeof _ == 'function' ? m(this, _) : null;
        this._nativeAudioWorkletNode.onprocessorerror = w;
        const f = this._nativeAudioWorkletNode.onprocessorerror;
        this._onprocessorerror = f !== null && f === w ? _ : f;
      }
      get parameters() {
        return this._parameters === null
          ? this._nativeAudioWorkletNode.parameters
          : this._parameters;
      }
      get port() {
        return this._nativeAudioWorkletNode.port;
      }
    };
function la(t, e, n, r, s) {
  if (typeof t.copyFromChannel == 'function')
    e[n].byteLength === 0 && (e[n] = new Float32Array(128)),
      t.copyFromChannel(e[n], r, s);
  else {
    const i = t.getChannelData(r);
    if (e[n].byteLength === 0) e[n] = i.slice(s, s + 128);
    else {
      const o = new Float32Array(
        i.buffer,
        s * Float32Array.BYTES_PER_ELEMENT,
        128
      );
      e[n].set(o);
    }
  }
}
const qm = (t, e, n, r, s) => {
    typeof t.copyToChannel == 'function'
      ? e[n].byteLength !== 0 && t.copyToChannel(e[n], r, s)
      : e[n].byteLength !== 0 && t.getChannelData(r).set(e[n], s);
  },
  ua = (t, e) => {
    const n = [];
    for (let r = 0; r < t; r += 1) {
      const s = [],
        i = typeof e == 'number' ? e : e[r];
      for (let o = 0; o < i; o += 1) s.push(new Float32Array(128));
      n.push(s);
    }
    return n;
  },
  e1 = (t, e) => {
    const n = Wt(Iu, t),
      r = le(e);
    return Wt(n, r);
  },
  t1 = async (t, e, n, r, s, i, o) => {
    const a = e === null ? Math.ceil(t.context.length / 128) * 128 : e.length,
      l = r.channelCount * r.numberOfInputs,
      u = s.reduce((w, f) => w + f, 0),
      c = u === 0 ? null : n.createBuffer(u, a, n.sampleRate);
    if (i === void 0) throw new Error('Missing the processor constructor.');
    const h = Qe(t),
      d = await e1(n, t),
      m = ua(r.numberOfInputs, r.channelCount),
      p = ua(r.numberOfOutputs, s),
      _ = Array.from(t.parameters.keys()).reduce(
        (w, f) => ({ ...w, [f]: new Float32Array(128) }),
        {}
      );
    for (let w = 0; w < a; w += 128) {
      if (r.numberOfInputs > 0 && e !== null)
        for (let f = 0; f < r.numberOfInputs; f += 1)
          for (let g = 0; g < r.channelCount; g += 1) la(e, m[f], g, g, w);
      i.parameterDescriptors !== void 0 &&
        e !== null &&
        i.parameterDescriptors.forEach(({ name: f }, g) => {
          la(e, _, f, l + g, w);
        });
      for (let f = 0; f < r.numberOfInputs; f += 1)
        for (let g = 0; g < s[f]; g += 1)
          p[f][g].byteLength === 0 && (p[f][g] = new Float32Array(128));
      try {
        const f = m.map((y, T) => (h.activeInputs[T].size === 0 ? [] : y)),
          g = o(w / n.sampleRate, n.sampleRate, () => d.process(f, p, _));
        if (c !== null)
          for (let y = 0, T = 0; y < r.numberOfOutputs; y += 1) {
            for (let v = 0; v < s[y]; v += 1) qm(c, p[y], v, T + v, w);
            T += s[y];
          }
        if (!g) break;
      } catch (f) {
        t.dispatchEvent(
          new ErrorEvent('processorerror', {
            colno: f.colno,
            filename: f.filename,
            lineno: f.lineno,
            message: f.message
          })
        );
        break;
      }
    }
    return c;
  },
  n1 = (t, e, n, r, s, i, o, a, l, u, c, h, d, m, p, _) => (w, f, g) => {
    const y = new WeakMap();
    let T = null;
    const v = async (k, C) => {
      let S = c(k),
        N = null;
      const x = He(S, C),
        E = Array.isArray(f.outputChannelCount)
          ? f.outputChannelCount
          : Array.from(f.outputChannelCount);
      if (h === null) {
        const A = E.reduce((j, z) => j + z, 0),
          R = s(C, {
            channelCount: Math.max(1, A),
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            numberOfOutputs: Math.max(1, A)
          }),
          F = [];
        for (let j = 0; j < k.numberOfOutputs; j += 1)
          F.push(
            r(C, {
              channelCount: 1,
              channelCountMode: 'explicit',
              channelInterpretation: 'speakers',
              numberOfInputs: E[j]
            })
          );
        const B = o(C, {
          channelCount: f.channelCount,
          channelCountMode: f.channelCountMode,
          channelInterpretation: f.channelInterpretation,
          gain: 1
        });
        (B.connect = e.bind(null, F)),
          (B.disconnect = l.bind(null, F)),
          (N = [R, F, B]);
      } else x || (S = new h(C, w));
      if ((y.set(C, N === null ? S : N[2]), N !== null)) {
        if (T === null) {
          if (g === void 0)
            throw new Error('Missing the processor constructor.');
          if (d === null)
            throw new Error(
              'Missing the native OfflineAudioContext constructor.'
            );
          const z = k.channelCount * k.numberOfInputs,
            O =
              g.parameterDescriptors === void 0
                ? 0
                : g.parameterDescriptors.length,
            I = z + O;
          T = t1(
            k,
            I === 0
              ? null
              : await (async () => {
                  const L = new d(
                      I,
                      Math.ceil(k.context.length / 128) * 128,
                      C.sampleRate
                    ),
                    U = [],
                    Pe = [];
                  for (let Z = 0; Z < f.numberOfInputs; Z += 1)
                    U.push(
                      o(L, {
                        channelCount: f.channelCount,
                        channelCountMode: f.channelCountMode,
                        channelInterpretation: f.channelInterpretation,
                        gain: 1
                      })
                    ),
                      Pe.push(
                        s(L, {
                          channelCount: f.channelCount,
                          channelCountMode: 'explicit',
                          channelInterpretation: 'discrete',
                          numberOfOutputs: f.channelCount
                        })
                      );
                  const we = await Promise.all(
                      Array.from(k.parameters.values()).map(async (Z) => {
                        const xe = i(L, {
                          channelCount: 1,
                          channelCountMode: 'explicit',
                          channelInterpretation: 'discrete',
                          offset: Z.value
                        });
                        return await m(L, Z, xe.offset), xe;
                      })
                    ),
                    $ = r(L, {
                      channelCount: 1,
                      channelCountMode: 'explicit',
                      channelInterpretation: 'speakers',
                      numberOfInputs: Math.max(1, z + O)
                    });
                  for (let Z = 0; Z < f.numberOfInputs; Z += 1) {
                    U[Z].connect(Pe[Z]);
                    for (let xe = 0; xe < f.channelCount; xe += 1)
                      Pe[Z].connect($, xe, Z * f.channelCount + xe);
                  }
                  for (const [Z, xe] of we.entries())
                    xe.connect($, 0, z + Z), xe.start(0);
                  return (
                    $.connect(L.destination),
                    await Promise.all(U.map((Z) => p(k, L, Z))),
                    _(L)
                  );
                })(),
            C,
            f,
            E,
            g,
            u
          );
        }
        const A = await T,
          R = n(C, {
            buffer: null,
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            loop: !1,
            loopEnd: 0,
            loopStart: 0,
            playbackRate: 1
          }),
          [F, B, j] = N;
        A !== null && ((R.buffer = A), R.start(0)), R.connect(F);
        for (let z = 0, O = 0; z < k.numberOfOutputs; z += 1) {
          const I = B[z];
          for (let D = 0; D < E[z]; D += 1) F.connect(I, O + D, D);
          O += E[z];
        }
        return j;
      }
      if (x)
        for (const [A, R] of k.parameters.entries())
          await t(C, R, S.parameters.get(A));
      else
        for (const [A, R] of k.parameters.entries())
          await m(C, R, S.parameters.get(A));
      return await p(k, C, S), S;
    };
    return {
      render(k, C) {
        a(C, k);
        const S = y.get(C);
        return S !== void 0 ? Promise.resolve(S) : v(k, C);
      }
    };
  },
  r1 = (t, e, n, r, s, i, o, a, l, u, c, h, d, m, p, _, w, f, g, y) =>
    class extends p {
      constructor(v, k) {
        super(v, k),
          (this._nativeContext = v),
          (this._audioWorklet =
            t === void 0 ? void 0 : { addModule: (C, S) => t(this, C, S) });
      }
      get audioWorklet() {
        return this._audioWorklet;
      }
      createAnalyser() {
        return new e(this);
      }
      createBiquadFilter() {
        return new s(this);
      }
      createBuffer(v, k, C) {
        return new n({ length: k, numberOfChannels: v, sampleRate: C });
      }
      createBufferSource() {
        return new r(this);
      }
      createChannelMerger(v = 6) {
        return new i(this, { numberOfInputs: v });
      }
      createChannelSplitter(v = 6) {
        return new o(this, { numberOfOutputs: v });
      }
      createConstantSource() {
        return new a(this);
      }
      createConvolver() {
        return new l(this);
      }
      createDelay(v = 1) {
        return new c(this, { maxDelayTime: v });
      }
      createDynamicsCompressor() {
        return new h(this);
      }
      createGain() {
        return new d(this);
      }
      createIIRFilter(v, k) {
        return new m(this, { feedback: k, feedforward: v });
      }
      createOscillator() {
        return new _(this);
      }
      createPanner() {
        return new w(this);
      }
      createPeriodicWave(v, k, C = { disableNormalization: !1 }) {
        return new f(this, { ...C, imag: k, real: v });
      }
      createStereoPanner() {
        return new g(this);
      }
      createWaveShaper() {
        return new y(this);
      }
      decodeAudioData(v, k, C) {
        return u(this._nativeContext, v).then(
          (S) => (typeof k == 'function' && k(S), S),
          (S) => {
            throw (typeof C == 'function' && C(S), S);
          }
        );
      }
    },
  s1 = {
    Q: 1,
    channelCount: 2,
    channelCountMode: 'max',
    channelInterpretation: 'speakers',
    detune: 0,
    frequency: 350,
    gain: 0,
    type: 'lowpass'
  },
  i1 = (t, e, n, r, s, i, o, a) =>
    class extends t {
      constructor(u, c) {
        const h = i(u),
          d = { ...s1, ...c },
          m = s(h, d),
          p = o(h),
          _ = p ? n() : null;
        super(u, !1, m, _),
          (this._Q = e(this, p, m.Q, Ke, nt)),
          (this._detune = e(
            this,
            p,
            m.detune,
            1200 * Math.log2(Ke),
            -1200 * Math.log2(Ke)
          )),
          (this._frequency = e(this, p, m.frequency, u.sampleRate / 2, 0)),
          (this._gain = e(this, p, m.gain, 40 * Math.log10(Ke), nt)),
          (this._nativeBiquadFilterNode = m),
          a(this, 1);
      }
      get detune() {
        return this._detune;
      }
      get frequency() {
        return this._frequency;
      }
      get gain() {
        return this._gain;
      }
      get Q() {
        return this._Q;
      }
      get type() {
        return this._nativeBiquadFilterNode.type;
      }
      set type(u) {
        this._nativeBiquadFilterNode.type = u;
      }
      getFrequencyResponse(u, c, h) {
        try {
          this._nativeBiquadFilterNode.getFrequencyResponse(u, c, h);
        } catch (d) {
          throw d.code === 11 ? r() : d;
        }
        if (u.length !== c.length || c.length !== h.length) throw r();
      }
    },
  o1 = (t, e, n, r, s) => () => {
    const i = new WeakMap(),
      o = async (a, l) => {
        let u = n(a);
        const c = He(u, l);
        if (!c) {
          const h = {
            Q: u.Q.value,
            channelCount: u.channelCount,
            channelCountMode: u.channelCountMode,
            channelInterpretation: u.channelInterpretation,
            detune: u.detune.value,
            frequency: u.frequency.value,
            gain: u.gain.value,
            type: u.type
          };
          u = e(l, h);
        }
        return (
          i.set(l, u),
          c
            ? (await t(l, a.Q, u.Q),
              await t(l, a.detune, u.detune),
              await t(l, a.frequency, u.frequency),
              await t(l, a.gain, u.gain))
            : (await r(l, a.Q, u.Q),
              await r(l, a.detune, u.detune),
              await r(l, a.frequency, u.frequency),
              await r(l, a.gain, u.gain)),
          await s(a, l, u),
          u
        );
      };
    return {
      render(a, l) {
        const u = i.get(l);
        return u !== void 0 ? Promise.resolve(u) : o(a, l);
      }
    };
  },
  a1 = (t, e) => (n, r) => {
    const s = e.get(n);
    if (s !== void 0) return s;
    const i = t.get(n);
    if (i !== void 0) return i;
    try {
      const o = r();
      return o instanceof Promise
        ? (t.set(n, o),
          o.catch(() => !1).then((a) => (t.delete(n), e.set(n, a), a)))
        : (e.set(n, o), o);
    } catch {
      return e.set(n, !1), !1;
    }
  },
  l1 = {
    channelCount: 1,
    channelCountMode: 'explicit',
    channelInterpretation: 'speakers',
    numberOfInputs: 6
  },
  u1 = (t, e, n, r, s) =>
    class extends t {
      constructor(o, a) {
        const l = r(o),
          u = { ...l1, ...a },
          c = n(l, u),
          h = s(l) ? e() : null;
        super(o, !1, c, h);
      }
    },
  c1 = (t, e, n) => () => {
    const r = new WeakMap(),
      s = async (i, o) => {
        let a = e(i);
        if (!He(a, o)) {
          const u = {
            channelCount: a.channelCount,
            channelCountMode: a.channelCountMode,
            channelInterpretation: a.channelInterpretation,
            numberOfInputs: a.numberOfInputs
          };
          a = t(o, u);
        }
        return r.set(o, a), await n(i, o, a), a;
      };
    return {
      render(i, o) {
        const a = r.get(o);
        return a !== void 0 ? Promise.resolve(a) : s(i, o);
      }
    };
  },
  h1 = {
    channelCount: 6,
    channelCountMode: 'explicit',
    channelInterpretation: 'discrete',
    numberOfOutputs: 6
  },
  d1 = (t, e, n, r, s, i) =>
    class extends t {
      constructor(a, l) {
        const u = r(a),
          c = i({ ...h1, ...l }),
          h = n(u, c),
          d = s(u) ? e() : null;
        super(a, !1, h, d);
      }
    },
  f1 = (t, e, n) => () => {
    const r = new WeakMap(),
      s = async (i, o) => {
        let a = e(i);
        if (!He(a, o)) {
          const u = {
            channelCount: a.channelCount,
            channelCountMode: a.channelCountMode,
            channelInterpretation: a.channelInterpretation,
            numberOfOutputs: a.numberOfOutputs
          };
          a = t(o, u);
        }
        return r.set(o, a), await n(i, o, a), a;
      };
    return {
      render(i, o) {
        const a = r.get(o);
        return a !== void 0 ? Promise.resolve(a) : s(i, o);
      }
    };
  },
  p1 = (t) => (e, n, r) => t(n, e, r),
  m1 =
    (t) =>
    (e, n, r = 0, s = 0) => {
      const i = e[r];
      if (i === void 0) throw t();
      return aa(n) ? i.connect(n, 0, s) : i.connect(n, 0);
    },
  g1 = (t) => (e, n) => {
    const r = t(e, {
        buffer: null,
        channelCount: 2,
        channelCountMode: 'max',
        channelInterpretation: 'speakers',
        loop: !1,
        loopEnd: 0,
        loopStart: 0,
        playbackRate: 1
      }),
      s = e.createBuffer(1, 2, 44100);
    return (
      (r.buffer = s),
      (r.loop = !0),
      r.connect(n),
      r.start(),
      () => {
        r.stop(), r.disconnect(n);
      }
    );
  },
  y1 = {
    channelCount: 2,
    channelCountMode: 'max',
    channelInterpretation: 'speakers',
    offset: 1
  },
  _1 = (t, e, n, r, s, i, o) =>
    class extends t {
      constructor(l, u) {
        const c = s(l),
          h = { ...y1, ...u },
          d = r(c, h),
          m = i(c),
          p = m ? n() : null;
        super(l, !1, d, p),
          (this._constantSourceNodeRenderer = p),
          (this._nativeConstantSourceNode = d),
          (this._offset = e(this, m, d.offset, Ke, nt)),
          (this._onended = null);
      }
      get offset() {
        return this._offset;
      }
      get onended() {
        return this._onended;
      }
      set onended(l) {
        const u = typeof l == 'function' ? o(this, l) : null;
        this._nativeConstantSourceNode.onended = u;
        const c = this._nativeConstantSourceNode.onended;
        this._onended = c !== null && c === u ? l : c;
      }
      start(l = 0) {
        if (
          (this._nativeConstantSourceNode.start(l),
          this._constantSourceNodeRenderer !== null &&
            (this._constantSourceNodeRenderer.start = l),
          this.context.state !== 'closed')
        ) {
          us(this);
          const u = () => {
            this._nativeConstantSourceNode.removeEventListener('ended', u),
              cn(this) && Li(this);
          };
          this._nativeConstantSourceNode.addEventListener('ended', u);
        }
      }
      stop(l = 0) {
        this._nativeConstantSourceNode.stop(l),
          this._constantSourceNodeRenderer !== null &&
            (this._constantSourceNodeRenderer.stop = l);
      }
    },
  v1 = (t, e, n, r, s) => () => {
    const i = new WeakMap();
    let o = null,
      a = null;
    const l = async (u, c) => {
      let h = n(u);
      const d = He(h, c);
      if (!d) {
        const m = {
          channelCount: h.channelCount,
          channelCountMode: h.channelCountMode,
          channelInterpretation: h.channelInterpretation,
          offset: h.offset.value
        };
        (h = e(c, m)), o !== null && h.start(o), a !== null && h.stop(a);
      }
      return (
        i.set(c, h),
        d ? await t(c, u.offset, h.offset) : await r(c, u.offset, h.offset),
        await s(u, c, h),
        h
      );
    };
    return {
      set start(u) {
        o = u;
      },
      set stop(u) {
        a = u;
      },
      render(u, c) {
        const h = i.get(c);
        return h !== void 0 ? Promise.resolve(h) : l(u, c);
      }
    };
  },
  w1 = (t) => (e) => ((t[0] = e), t[0]),
  S1 = {
    buffer: null,
    channelCount: 2,
    channelCountMode: 'clamped-max',
    channelInterpretation: 'speakers',
    disableNormalization: !1
  },
  T1 = (t, e, n, r, s, i) =>
    class extends t {
      constructor(a, l) {
        const u = r(a),
          c = { ...S1, ...l },
          h = n(u, c),
          m = s(u) ? e() : null;
        super(a, !1, h, m),
          (this._isBufferNullified = !1),
          (this._nativeConvolverNode = h),
          c.buffer !== null && i(this, c.buffer.duration);
      }
      get buffer() {
        return this._isBufferNullified
          ? null
          : this._nativeConvolverNode.buffer;
      }
      set buffer(a) {
        if (
          ((this._nativeConvolverNode.buffer = a),
          a === null && this._nativeConvolverNode.buffer !== null)
        ) {
          const l = this._nativeConvolverNode.context;
          (this._nativeConvolverNode.buffer = l.createBuffer(
            1,
            1,
            l.sampleRate
          )),
            (this._isBufferNullified = !0),
            i(this, 0);
        } else
          (this._isBufferNullified = !1),
            i(
              this,
              this._nativeConvolverNode.buffer === null
                ? 0
                : this._nativeConvolverNode.buffer.duration
            );
      }
      get normalize() {
        return this._nativeConvolverNode.normalize;
      }
      set normalize(a) {
        this._nativeConvolverNode.normalize = a;
      }
    },
  k1 = (t, e, n) => () => {
    const r = new WeakMap(),
      s = async (i, o) => {
        let a = e(i);
        if (!He(a, o)) {
          const u = {
            buffer: a.buffer,
            channelCount: a.channelCount,
            channelCountMode: a.channelCountMode,
            channelInterpretation: a.channelInterpretation,
            disableNormalization: !a.normalize
          };
          a = t(o, u);
        }
        return (
          r.set(o, a), ys(a) ? await n(i, o, a.inputs[0]) : await n(i, o, a), a
        );
      };
    return {
      render(i, o) {
        const a = r.get(o);
        return a !== void 0 ? Promise.resolve(a) : s(i, o);
      }
    };
  },
  C1 = (t, e) => (n, r, s) => {
    if (e === null)
      throw new Error('Missing the native OfflineAudioContext constructor.');
    try {
      return new e(n, r, s);
    } catch (i) {
      throw i.name === 'SyntaxError' ? t() : i;
    }
  },
  x1 = () => new DOMException('', 'DataCloneError'),
  Wd = (t) => {
    const { port1: e, port2: n } = new MessageChannel();
    return new Promise((r) => {
      const s = () => {
        (n.onmessage = null), e.close(), n.close(), r();
      };
      n.onmessage = () => s();
      try {
        e.postMessage(t, [t]);
      } catch {
      } finally {
        s();
      }
    });
  },
  N1 = (t, e, n, r, s, i, o, a, l, u, c) => (h, d) => {
    const m = o(h) ? h : i(h);
    if (s.has(d)) {
      const p = n();
      return Promise.reject(p);
    }
    try {
      s.add(d);
    } catch {}
    return e(l, () => l(m))
      ? m
          .decodeAudioData(d)
          .then(
            (p) => (
              Wd(d).catch(() => {}), e(a, () => a(p)) || c(p), t.add(p), p
            )
          )
      : new Promise((p, _) => {
          const w = async () => {
              try {
                await Wd(d);
              } catch {}
            },
            f = (g) => {
              _(g), w();
            };
          try {
            m.decodeAudioData(
              d,
              (g) => {
                typeof g.copyFromChannel != 'function' && (u(g), Bc(g)),
                  t.add(g),
                  w().then(() => p(g));
              },
              (g) => {
                f(g === null ? r() : g);
              }
            );
          } catch (g) {
            f(g);
          }
        });
  },
  E1 = (t, e, n, r, s, i, o, a) => (l, u) => {
    const c = e.get(l);
    if (c === void 0) throw new Error('Missing the expected cycle count.');
    const h = i(l.context),
      d = a(h);
    if (c === u) {
      if ((e.delete(l), !d && o(l))) {
        const m = r(l),
          { outputs: p } = n(l);
        for (const _ of p)
          if (ji(_)) {
            const w = r(_[0]);
            t(m, w, _[1], _[2]);
          } else {
            const w = s(_[0]);
            m.connect(w, _[1]);
          }
      }
    } else e.set(l, c - u);
  },
  A1 = {
    channelCount: 2,
    channelCountMode: 'max',
    channelInterpretation: 'speakers',
    delayTime: 0,
    maxDelayTime: 1
  },
  O1 = (t, e, n, r, s, i, o) =>
    class extends t {
      constructor(l, u) {
        const c = s(l),
          h = { ...A1, ...u },
          d = r(c, h),
          m = i(c),
          p = m ? n(h.maxDelayTime) : null;
        super(l, !1, d, p),
          (this._delayTime = e(this, m, d.delayTime)),
          o(this, h.maxDelayTime);
      }
      get delayTime() {
        return this._delayTime;
      }
    },
  M1 = (t, e, n, r, s) => (i) => {
    const o = new WeakMap(),
      a = async (l, u) => {
        let c = n(l);
        const h = He(c, u);
        if (!h) {
          const d = {
            channelCount: c.channelCount,
            channelCountMode: c.channelCountMode,
            channelInterpretation: c.channelInterpretation,
            delayTime: c.delayTime.value,
            maxDelayTime: i
          };
          c = e(u, d);
        }
        return (
          o.set(u, c),
          h
            ? await t(u, l.delayTime, c.delayTime)
            : await r(u, l.delayTime, c.delayTime),
          await s(l, u, c),
          c
        );
      };
    return {
      render(l, u) {
        const c = o.get(u);
        return c !== void 0 ? Promise.resolve(c) : a(l, u);
      }
    };
  },
  I1 = (t) => (e, n, r, s) => t(e[s], (i) => i[0] === n && i[1] === r),
  D1 = (t) => (e, n) => {
    t(e).delete(n);
  },
  P1 = (t) => 'delayTime' in t,
  R1 = (t, e, n) =>
    function r(s, i) {
      const o = sa(i) ? i : n(t, i);
      if (P1(o)) return [];
      if (s[0] === o) return [s];
      if (s.includes(o)) return [];
      const { outputs: a } = e(o);
      return Array.from(a)
        .map((l) => r([...s, o], l[0]))
        .reduce((l, u) => l.concat(u), []);
    },
  co = (t, e, n) => {
    const r = e[n];
    if (r === void 0) throw t();
    return r;
  },
  F1 =
    (t) =>
    (e, n = void 0, r = void 0, s = 0) =>
      n === void 0
        ? e.forEach((i) => i.disconnect())
        : typeof n == 'number'
          ? co(t, e, n).disconnect()
          : aa(n)
            ? r === void 0
              ? e.forEach((i) => i.disconnect(n))
              : s === void 0
                ? co(t, e, r).disconnect(n, 0)
                : co(t, e, r).disconnect(n, 0, s)
            : r === void 0
              ? e.forEach((i) => i.disconnect(n))
              : co(t, e, r).disconnect(n, 0),
  b1 = {
    attack: 0.003,
    channelCount: 2,
    channelCountMode: 'clamped-max',
    channelInterpretation: 'speakers',
    knee: 30,
    ratio: 12,
    release: 0.25,
    threshold: -24
  },
  L1 = (t, e, n, r, s, i, o, a) =>
    class extends t {
      constructor(u, c) {
        const h = i(u),
          d = { ...b1, ...c },
          m = r(h, d),
          p = o(h),
          _ = p ? n() : null;
        super(u, !1, m, _),
          (this._attack = e(this, p, m.attack)),
          (this._knee = e(this, p, m.knee)),
          (this._nativeDynamicsCompressorNode = m),
          (this._ratio = e(this, p, m.ratio)),
          (this._release = e(this, p, m.release)),
          (this._threshold = e(this, p, m.threshold)),
          a(this, 0.006);
      }
      get attack() {
        return this._attack;
      }
      get channelCount() {
        return this._nativeDynamicsCompressorNode.channelCount;
      }
      set channelCount(u) {
        const c = this._nativeDynamicsCompressorNode.channelCount;
        if (((this._nativeDynamicsCompressorNode.channelCount = u), u > 2))
          throw ((this._nativeDynamicsCompressorNode.channelCount = c), s());
      }
      get channelCountMode() {
        return this._nativeDynamicsCompressorNode.channelCountMode;
      }
      set channelCountMode(u) {
        const c = this._nativeDynamicsCompressorNode.channelCountMode;
        if (
          ((this._nativeDynamicsCompressorNode.channelCountMode = u),
          u === 'max')
        )
          throw (
            ((this._nativeDynamicsCompressorNode.channelCountMode = c), s())
          );
      }
      get knee() {
        return this._knee;
      }
      get ratio() {
        return this._ratio;
      }
      get reduction() {
        return typeof this._nativeDynamicsCompressorNode.reduction.value ==
          'number'
          ? this._nativeDynamicsCompressorNode.reduction.value
          : this._nativeDynamicsCompressorNode.reduction;
      }
      get release() {
        return this._release;
      }
      get threshold() {
        return this._threshold;
      }
    },
  V1 = (t, e, n, r, s) => () => {
    const i = new WeakMap(),
      o = async (a, l) => {
        let u = n(a);
        const c = He(u, l);
        if (!c) {
          const h = {
            attack: u.attack.value,
            channelCount: u.channelCount,
            channelCountMode: u.channelCountMode,
            channelInterpretation: u.channelInterpretation,
            knee: u.knee.value,
            ratio: u.ratio.value,
            release: u.release.value,
            threshold: u.threshold.value
          };
          u = e(l, h);
        }
        return (
          i.set(l, u),
          c
            ? (await t(l, a.attack, u.attack),
              await t(l, a.knee, u.knee),
              await t(l, a.ratio, u.ratio),
              await t(l, a.release, u.release),
              await t(l, a.threshold, u.threshold))
            : (await r(l, a.attack, u.attack),
              await r(l, a.knee, u.knee),
              await r(l, a.ratio, u.ratio),
              await r(l, a.release, u.release),
              await r(l, a.threshold, u.threshold)),
          await s(a, l, u),
          u
        );
      };
    return {
      render(a, l) {
        const u = i.get(l);
        return u !== void 0 ? Promise.resolve(u) : o(a, l);
      }
    };
  },
  j1 = () => new DOMException('', 'EncodingError'),
  z1 = (t) => (e) =>
    new Promise((n, r) => {
      if (t === null) {
        r(new SyntaxError());
        return;
      }
      const s = t.document.head;
      if (s === null) r(new SyntaxError());
      else {
        const i = t.document.createElement('script'),
          o = new Blob([e], { type: 'application/javascript' }),
          a = URL.createObjectURL(o),
          l = t.onerror,
          u = () => {
            (t.onerror = l), URL.revokeObjectURL(a);
          };
        (t.onerror = (c, h, d, m, p) => {
          if (h === a || (h === t.location.href && d === 1 && m === 1))
            return u(), r(p), !1;
          if (l !== null) return l(c, h, d, m, p);
        }),
          (i.onerror = () => {
            u(), r(new SyntaxError());
          }),
          (i.onload = () => {
            u(), n();
          }),
          (i.src = a),
          (i.type = 'module'),
          s.appendChild(i);
      }
    }),
  W1 = (t) =>
    class {
      constructor(n) {
        (this._nativeEventTarget = n), (this._listeners = new WeakMap());
      }
      addEventListener(n, r, s) {
        if (r !== null) {
          let i = this._listeners.get(r);
          i === void 0 &&
            ((i = t(this, r)),
            typeof r == 'function' && this._listeners.set(r, i)),
            this._nativeEventTarget.addEventListener(n, i, s);
        }
      }
      dispatchEvent(n) {
        return this._nativeEventTarget.dispatchEvent(n);
      }
      removeEventListener(n, r, s) {
        const i = r === null ? void 0 : this._listeners.get(r);
        this._nativeEventTarget.removeEventListener(
          n,
          i === void 0 ? null : i,
          s
        );
      }
    },
  B1 = (t) => (e, n, r) => {
    Object.defineProperties(t, {
      currentFrame: {
        configurable: !0,
        get() {
          return Math.round(e * n);
        }
      },
      currentTime: {
        configurable: !0,
        get() {
          return e;
        }
      }
    });
    try {
      return r();
    } finally {
      t !== null && (delete t.currentFrame, delete t.currentTime);
    }
  },
  U1 = (t) => async (e) => {
    try {
      const n = await fetch(e);
      if (n.ok) return [await n.text(), n.url];
    } catch {}
    throw t();
  },
  q1 = {
    channelCount: 2,
    channelCountMode: 'max',
    channelInterpretation: 'speakers',
    gain: 1
  },
  $1 = (t, e, n, r, s, i) =>
    class extends t {
      constructor(a, l) {
        const u = s(a),
          c = { ...q1, ...l },
          h = r(u, c),
          d = i(u),
          m = d ? n() : null;
        super(a, !1, h, m), (this._gain = e(this, d, h.gain, Ke, nt));
      }
      get gain() {
        return this._gain;
      }
    },
  H1 = (t, e, n, r, s) => () => {
    const i = new WeakMap(),
      o = async (a, l) => {
        let u = n(a);
        const c = He(u, l);
        if (!c) {
          const h = {
            channelCount: u.channelCount,
            channelCountMode: u.channelCountMode,
            channelInterpretation: u.channelInterpretation,
            gain: u.gain.value
          };
          u = e(l, h);
        }
        return (
          i.set(l, u),
          c ? await t(l, a.gain, u.gain) : await r(l, a.gain, u.gain),
          await s(a, l, u),
          u
        );
      };
    return {
      render(a, l) {
        const u = i.get(l);
        return u !== void 0 ? Promise.resolve(u) : o(a, l);
      }
    };
  },
  G1 = (t, e) => (n) => e(t, n),
  K1 = (t) => (e) => {
    const n = t(e);
    if (n.renderer === null)
      throw new Error(
        'Missing the renderer of the given AudioNode in the audio graph.'
      );
    return n.renderer;
  },
  Q1 = (t) => (e) => {
    var n;
    return (n = t.get(e)) !== null && n !== void 0 ? n : 0;
  },
  X1 = (t) => (e) => {
    const n = t(e);
    if (n.renderer === null)
      throw new Error(
        'Missing the renderer of the given AudioParam in the audio graph.'
      );
    return n.renderer;
  },
  Y1 = (t) => (e) => t.get(e),
  be = () => new DOMException('', 'InvalidStateError'),
  Z1 = (t) => (e) => {
    const n = t.get(e);
    if (n === void 0) throw be();
    return n;
  },
  J1 = (t, e) => (n) => {
    let r = t.get(n);
    if (r !== void 0) return r;
    if (e === null)
      throw new Error('Missing the native OfflineAudioContext constructor.');
    return (r = new e(1, 1, 44100)), t.set(n, r), r;
  },
  ew = (t) => (e) => {
    const n = t.get(e);
    if (n === void 0)
      throw new Error('The context has no set of AudioWorkletNodes.');
    return n;
  },
  Ba = () => new DOMException('', 'InvalidAccessError'),
  tw = (t) => {
    t.getFrequencyResponse = ((e) => (n, r, s) => {
      if (n.length !== r.length || r.length !== s.length) throw Ba();
      return e.call(t, n, r, s);
    })(t.getFrequencyResponse);
  },
  nw = {
    channelCount: 2,
    channelCountMode: 'max',
    channelInterpretation: 'speakers'
  },
  rw = (t, e, n, r, s, i) =>
    class extends t {
      constructor(a, l) {
        const u = r(a),
          c = s(u),
          h = { ...nw, ...l },
          d = e(u, c ? null : a.baseLatency, h),
          m = c ? n(h.feedback, h.feedforward) : null;
        super(a, !1, d, m), tw(d), (this._nativeIIRFilterNode = d), i(this, 1);
      }
      getFrequencyResponse(a, l, u) {
        return this._nativeIIRFilterNode.getFrequencyResponse(a, l, u);
      }
    },
  $m = (t, e, n, r, s, i, o, a, l, u, c) => {
    const h = u.length;
    let d = a;
    for (let m = 0; m < h; m += 1) {
      let p = n[0] * u[m];
      for (let _ = 1; _ < s; _ += 1) {
        const w = (d - _) & (l - 1);
        (p += n[_] * i[w]), (p -= t[_] * o[w]);
      }
      for (let _ = s; _ < r; _ += 1) p += n[_] * i[(d - _) & (l - 1)];
      for (let _ = s; _ < e; _ += 1) p -= t[_] * o[(d - _) & (l - 1)];
      (i[d] = u[m]), (o[d] = p), (d = (d + 1) & (l - 1)), (c[m] = p);
    }
    return d;
  },
  sw = (t, e, n, r) => {
    const s = n instanceof Float64Array ? n : new Float64Array(n),
      i = r instanceof Float64Array ? r : new Float64Array(r),
      o = s.length,
      a = i.length,
      l = Math.min(o, a);
    if (s[0] !== 1) {
      for (let p = 0; p < o; p += 1) i[p] /= s[0];
      for (let p = 1; p < a; p += 1) s[p] /= s[0];
    }
    const u = 32,
      c = new Float32Array(u),
      h = new Float32Array(u),
      d = e.createBuffer(t.numberOfChannels, t.length, t.sampleRate),
      m = t.numberOfChannels;
    for (let p = 0; p < m; p += 1) {
      const _ = t.getChannelData(p),
        w = d.getChannelData(p);
      c.fill(0), h.fill(0), $m(s, o, i, a, l, c, h, 0, u, _, w);
    }
    return d;
  },
  iw = (t, e, n, r, s) => (i, o) => {
    const a = new WeakMap();
    let l = null;
    const u = async (c, h) => {
      let d = null,
        m = e(c);
      const p = He(m, h);
      if (
        (h.createIIRFilter === void 0
          ? (d = t(h, {
              buffer: null,
              channelCount: 2,
              channelCountMode: 'max',
              channelInterpretation: 'speakers',
              loop: !1,
              loopEnd: 0,
              loopStart: 0,
              playbackRate: 1
            }))
          : p || (m = h.createIIRFilter(o, i)),
        a.set(h, d === null ? m : d),
        d !== null)
      ) {
        if (l === null) {
          if (n === null)
            throw new Error(
              'Missing the native OfflineAudioContext constructor.'
            );
          const w = new n(
            c.context.destination.channelCount,
            c.context.length,
            h.sampleRate
          );
          l = (async () => {
            await r(c, w, w.destination);
            const f = await s(w);
            return sw(f, h, i, o);
          })();
        }
        const _ = await l;
        return (d.buffer = _), d.start(0), d;
      }
      return await r(c, h, m), m;
    };
    return {
      render(c, h) {
        const d = a.get(h);
        return d !== void 0 ? Promise.resolve(d) : u(c, h);
      }
    };
  },
  ow = (t, e, n, r, s, i) => (o) => (a, l) => {
    const u = t.get(a);
    if (u === void 0) {
      if (!o && i(a)) {
        const c = r(a),
          { outputs: h } = n(a);
        for (const d of h)
          if (ji(d)) {
            const m = r(d[0]);
            e(c, m, d[1], d[2]);
          } else {
            const m = s(d[0]);
            c.disconnect(m, d[1]);
          }
      }
      t.set(a, l);
    } else t.set(a, u + l);
  },
  aw = (t, e) => (n) => {
    const r = t.get(n);
    return e(r) || e(n);
  },
  lw = (t, e) => (n) => t.has(n) || e(n),
  uw = (t, e) => (n) => t.has(n) || e(n),
  cw = (t, e) => (n) => {
    const r = t.get(n);
    return e(r) || e(n);
  },
  hw = (t) => (e) => t !== null && e instanceof t,
  dw = (t) => (e) =>
    t !== null && typeof t.AudioNode == 'function' && e instanceof t.AudioNode,
  fw = (t) => (e) =>
    t !== null &&
    typeof t.AudioParam == 'function' &&
    e instanceof t.AudioParam,
  pw = (t, e) => (n) => t(n) || e(n),
  mw = (t) => (e) => t !== null && e instanceof t,
  gw = (t) => t !== null && t.isSecureContext,
  yw = (t, e, n, r) =>
    class extends t {
      constructor(i, o) {
        const a = n(i),
          l = e(a, o);
        if (r(a)) throw TypeError();
        super(i, !0, l, null), (this._nativeMediaElementAudioSourceNode = l);
      }
      get mediaElement() {
        return this._nativeMediaElementAudioSourceNode.mediaElement;
      }
    },
  _w = {
    channelCount: 2,
    channelCountMode: 'explicit',
    channelInterpretation: 'speakers'
  },
  vw = (t, e, n, r) =>
    class extends t {
      constructor(i, o) {
        const a = n(i);
        if (r(a)) throw new TypeError();
        const l = { ..._w, ...o },
          u = e(a, l);
        super(i, !1, u, null),
          (this._nativeMediaStreamAudioDestinationNode = u);
      }
      get stream() {
        return this._nativeMediaStreamAudioDestinationNode.stream;
      }
    },
  ww = (t, e, n, r) =>
    class extends t {
      constructor(i, o) {
        const a = n(i),
          l = e(a, o);
        if (r(a)) throw new TypeError();
        super(i, !0, l, null), (this._nativeMediaStreamAudioSourceNode = l);
      }
      get mediaStream() {
        return this._nativeMediaStreamAudioSourceNode.mediaStream;
      }
    },
  Sw = (t, e, n) =>
    class extends t {
      constructor(s, i) {
        const o = n(s),
          a = e(o, i);
        super(s, !0, a, null);
      }
    },
  Tw = (t, e, n, r, s, i) =>
    class extends n {
      constructor(a, l) {
        super(a),
          (this._nativeContext = a),
          za.set(this, a),
          r(a) && s.set(a, new Set()),
          (this._destination = new t(this, l)),
          (this._listener = e(this, a)),
          (this._onstatechange = null);
      }
      get currentTime() {
        return this._nativeContext.currentTime;
      }
      get destination() {
        return this._destination;
      }
      get listener() {
        return this._listener;
      }
      get onstatechange() {
        return this._onstatechange;
      }
      set onstatechange(a) {
        const l = typeof a == 'function' ? i(this, a) : null;
        this._nativeContext.onstatechange = l;
        const u = this._nativeContext.onstatechange;
        this._onstatechange = u !== null && u === l ? a : u;
      }
      get sampleRate() {
        return this._nativeContext.sampleRate;
      }
      get state() {
        return this._nativeContext.state;
      }
    },
  di = (t) => {
    const e = new Uint32Array([
      1179011410, 40, 1163280727, 544501094, 16, 131073, 44100, 176400, 1048580,
      1635017060, 4, 0
    ]);
    try {
      const n = t.decodeAudioData(e.buffer, () => {});
      return n === void 0 ? !1 : (n.catch(() => {}), !0);
    } catch {}
    return !1;
  },
  kw = (t, e) => (n, r, s) => {
    const i = new Set();
    return (
      (n.connect = (
        (o) =>
        (a, l = 0, u = 0) => {
          const c = i.size === 0;
          if (e(a))
            return (
              o.call(n, a, l, u),
              t(
                i,
                [a, l, u],
                (h) => h[0] === a && h[1] === l && h[2] === u,
                !0
              ),
              c && r(),
              a
            );
          o.call(n, a, l),
            t(i, [a, l], (h) => h[0] === a && h[1] === l, !0),
            c && r();
        }
      )(n.connect)),
      (n.disconnect = ((o) => (a, l, u) => {
        const c = i.size > 0;
        if (a === void 0) o.apply(n), i.clear();
        else if (typeof a == 'number') {
          o.call(n, a);
          for (const d of i) d[1] === a && i.delete(d);
        } else {
          e(a) ? o.call(n, a, l, u) : o.call(n, a, l);
          for (const d of i)
            d[0] === a &&
              (l === void 0 || d[1] === l) &&
              (u === void 0 || d[2] === u) &&
              i.delete(d);
        }
        const h = i.size === 0;
        c && h && s();
      })(n.disconnect)),
      n
    );
  },
  ce = (t, e, n) => {
    const r = e[n];
    r !== void 0 && r !== t[n] && (t[n] = r);
  },
  Ie = (t, e) => {
    ce(t, e, 'channelCount'),
      ce(t, e, 'channelCountMode'),
      ce(t, e, 'channelInterpretation');
  },
  Bd = (t) => typeof t.getFloatTimeDomainData == 'function',
  Cw = (t) => {
    t.getFloatTimeDomainData = (e) => {
      const n = new Uint8Array(e.length);
      t.getByteTimeDomainData(n);
      const r = Math.max(n.length, t.fftSize);
      for (let s = 0; s < r; s += 1) e[s] = (n[s] - 128) * 0.0078125;
      return e;
    };
  },
  xw = (t, e) => (n, r) => {
    const s = n.createAnalyser();
    if ((Ie(s, r), !(r.maxDecibels > r.minDecibels))) throw e();
    return (
      ce(s, r, 'fftSize'),
      ce(s, r, 'maxDecibels'),
      ce(s, r, 'minDecibels'),
      ce(s, r, 'smoothingTimeConstant'),
      t(Bd, () => Bd(s)) || Cw(s),
      s
    );
  },
  Nw = (t) =>
    t === null ? null : t.hasOwnProperty('AudioBuffer') ? t.AudioBuffer : null,
  _e = (t, e, n) => {
    const r = e[n];
    r !== void 0 && r !== t[n].value && (t[n].value = r);
  },
  Ew = (t) => {
    t.start = ((e) => {
      let n = !1;
      return (r = 0, s = 0, i) => {
        if (n) throw be();
        e.call(t, r, s, i), (n = !0);
      };
    })(t.start);
  },
  $c = (t) => {
    t.start = (
      (e) =>
      (n = 0, r = 0, s) => {
        if ((typeof s == 'number' && s < 0) || r < 0 || n < 0)
          throw new RangeError("The parameters can't be negative.");
        e.call(t, n, r, s);
      }
    )(t.start);
  },
  Hc = (t) => {
    t.stop = (
      (e) =>
      (n = 0) => {
        if (n < 0) throw new RangeError("The parameter can't be negative.");
        e.call(t, n);
      }
    )(t.stop);
  },
  Aw = (t, e, n, r, s, i, o, a, l, u, c) => (h, d) => {
    const m = h.createBufferSource();
    return (
      Ie(m, d),
      _e(m, d, 'playbackRate'),
      ce(m, d, 'buffer'),
      ce(m, d, 'loop'),
      ce(m, d, 'loopEnd'),
      ce(m, d, 'loopStart'),
      e(n, () => n(h)) || Ew(m),
      e(r, () => r(h)) || l(m),
      e(s, () => s(h)) || u(m, h),
      e(i, () => i(h)) || $c(m),
      e(o, () => o(h)) || c(m, h),
      e(a, () => a(h)) || Hc(m),
      t(h, m),
      m
    );
  },
  Ow = (t) =>
    t === null
      ? null
      : t.hasOwnProperty('AudioContext')
        ? t.AudioContext
        : t.hasOwnProperty('webkitAudioContext')
          ? t.webkitAudioContext
          : null,
  Mw = (t, e) => (n, r, s) => {
    const i = n.destination;
    if (i.channelCount !== r)
      try {
        i.channelCount = r;
      } catch {}
    s && i.channelCountMode !== 'explicit' && (i.channelCountMode = 'explicit'),
      i.maxChannelCount === 0 &&
        Object.defineProperty(i, 'maxChannelCount', { value: r });
    const o = t(n, {
      channelCount: r,
      channelCountMode: i.channelCountMode,
      channelInterpretation: i.channelInterpretation,
      gain: 1
    });
    return (
      e(
        o,
        'channelCount',
        (a) => () => a.call(o),
        (a) => (l) => {
          a.call(o, l);
          try {
            i.channelCount = l;
          } catch (u) {
            if (l > i.maxChannelCount) throw u;
          }
        }
      ),
      e(
        o,
        'channelCountMode',
        (a) => () => a.call(o),
        (a) => (l) => {
          a.call(o, l), (i.channelCountMode = l);
        }
      ),
      e(
        o,
        'channelInterpretation',
        (a) => () => a.call(o),
        (a) => (l) => {
          a.call(o, l), (i.channelInterpretation = l);
        }
      ),
      Object.defineProperty(o, 'maxChannelCount', {
        get: () => i.maxChannelCount
      }),
      o.connect(i),
      o
    );
  },
  Iw = (t) =>
    t === null
      ? null
      : t.hasOwnProperty('AudioWorkletNode')
        ? t.AudioWorkletNode
        : null,
  Dw = (t) => {
    const { port1: e } = new MessageChannel();
    try {
      e.postMessage(t);
    } finally {
      e.close();
    }
  },
  Pw = (t, e, n, r, s) => (i, o, a, l, u, c) => {
    if (a !== null)
      try {
        const h = new a(i, l, c),
          d = new Map();
        let m = null;
        if (
          (Object.defineProperties(h, {
            channelCount: {
              get: () => c.channelCount,
              set: () => {
                throw t();
              }
            },
            channelCountMode: {
              get: () => 'explicit',
              set: () => {
                throw t();
              }
            },
            onprocessorerror: {
              get: () => m,
              set: (p) => {
                typeof m == 'function' &&
                  h.removeEventListener('processorerror', m),
                  (m = typeof p == 'function' ? p : null),
                  typeof m == 'function' &&
                    h.addEventListener('processorerror', m);
              }
            }
          }),
          (h.addEventListener = (
            (p) =>
            (..._) => {
              if (_[0] === 'processorerror') {
                const w =
                  typeof _[1] == 'function'
                    ? _[1]
                    : typeof _[1] == 'object' &&
                        _[1] !== null &&
                        typeof _[1].handleEvent == 'function'
                      ? _[1].handleEvent
                      : null;
                if (w !== null) {
                  const f = d.get(_[1]);
                  f !== void 0
                    ? (_[1] = f)
                    : ((_[1] = (g) => {
                        g.type === 'error'
                          ? (Object.defineProperties(g, {
                              type: { value: 'processorerror' }
                            }),
                            w(g))
                          : w(new ErrorEvent(_[0], { ...g }));
                      }),
                      d.set(w, _[1]));
                }
              }
              return p.call(h, 'error', _[1], _[2]), p.call(h, ..._);
            }
          )(h.addEventListener)),
          (h.removeEventListener = (
            (p) =>
            (..._) => {
              if (_[0] === 'processorerror') {
                const w = d.get(_[1]);
                w !== void 0 && (d.delete(_[1]), (_[1] = w));
              }
              return (
                p.call(h, 'error', _[1], _[2]), p.call(h, _[0], _[1], _[2])
              );
            }
          )(h.removeEventListener)),
          c.numberOfOutputs !== 0)
        ) {
          const p = n(i, {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            gain: 0
          });
          return (
            h.connect(p).connect(i.destination),
            s(
              h,
              () => p.disconnect(),
              () => p.connect(i.destination)
            )
          );
        }
        return h;
      } catch (h) {
        throw h.code === 11 ? r() : h;
      }
    if (u === void 0) throw r();
    return Dw(c), e(i, o, u, c);
  },
  Hm = (t, e) =>
    t === null
      ? 512
      : Math.max(
          512,
          Math.min(16384, Math.pow(2, Math.round(Math.log2(t * e))))
        ),
  Rw = (t) =>
    new Promise((e, n) => {
      const { port1: r, port2: s } = new MessageChannel();
      (r.onmessage = ({ data: i }) => {
        r.close(), s.close(), e(i);
      }),
        (r.onmessageerror = ({ data: i }) => {
          r.close(), s.close(), n(i);
        }),
        s.postMessage(t);
    }),
  Fw = async (t, e) => {
    const n = await Rw(e);
    return new t(n);
  },
  bw = (t, e, n, r) => {
    let s = Iu.get(t);
    s === void 0 && ((s = new WeakMap()), Iu.set(t, s));
    const i = Fw(n, r);
    return s.set(e, i), i;
  },
  Lw = (t, e, n, r, s, i, o, a, l, u, c, h, d) => (m, p, _, w) => {
    if (w.numberOfInputs === 0 && w.numberOfOutputs === 0) throw l();
    const f = Array.isArray(w.outputChannelCount)
      ? w.outputChannelCount
      : Array.from(w.outputChannelCount);
    if (f.some((b) => b < 1)) throw l();
    if (f.length !== w.numberOfOutputs) throw e();
    if (w.channelCountMode !== 'explicit') throw l();
    const g = w.channelCount * w.numberOfInputs,
      y = f.reduce((b, q) => b + q, 0),
      T = _.parameterDescriptors === void 0 ? 0 : _.parameterDescriptors.length;
    if (g + T > 6 || y > 6) throw l();
    const v = new MessageChannel(),
      k = [],
      C = [];
    for (let b = 0; b < w.numberOfInputs; b += 1)
      k.push(
        o(m, {
          channelCount: w.channelCount,
          channelCountMode: w.channelCountMode,
          channelInterpretation: w.channelInterpretation,
          gain: 1
        })
      ),
        C.push(
          s(m, {
            channelCount: w.channelCount,
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            numberOfOutputs: w.channelCount
          })
        );
    const S = [];
    if (_.parameterDescriptors !== void 0)
      for (const {
        defaultValue: b,
        maxValue: q,
        minValue: Ae,
        name: de
      } of _.parameterDescriptors) {
        const J = i(m, {
          channelCount: 1,
          channelCountMode: 'explicit',
          channelInterpretation: 'discrete',
          offset:
            w.parameterData[de] !== void 0
              ? w.parameterData[de]
              : b === void 0
                ? 0
                : b
        });
        Object.defineProperties(J.offset, {
          defaultValue: { get: () => (b === void 0 ? 0 : b) },
          maxValue: { get: () => (q === void 0 ? Ke : q) },
          minValue: { get: () => (Ae === void 0 ? nt : Ae) }
        }),
          S.push(J);
      }
    const N = r(m, {
        channelCount: 1,
        channelCountMode: 'explicit',
        channelInterpretation: 'speakers',
        numberOfInputs: Math.max(1, g + T)
      }),
      x = Hm(p, m.sampleRate),
      E = a(m, x, g + T, Math.max(1, y)),
      A = s(m, {
        channelCount: Math.max(1, y),
        channelCountMode: 'explicit',
        channelInterpretation: 'discrete',
        numberOfOutputs: Math.max(1, y)
      }),
      R = [];
    for (let b = 0; b < w.numberOfOutputs; b += 1)
      R.push(
        r(m, {
          channelCount: 1,
          channelCountMode: 'explicit',
          channelInterpretation: 'speakers',
          numberOfInputs: f[b]
        })
      );
    for (let b = 0; b < w.numberOfInputs; b += 1) {
      k[b].connect(C[b]);
      for (let q = 0; q < w.channelCount; q += 1)
        C[b].connect(N, q, b * w.channelCount + q);
    }
    const F = new Um(
      _.parameterDescriptors === void 0
        ? []
        : _.parameterDescriptors.map(({ name: b }, q) => {
            const Ae = S[q];
            return Ae.connect(N, 0, g + q), Ae.start(0), [b, Ae.offset];
          })
    );
    N.connect(E);
    let B = w.channelInterpretation,
      j = null;
    const z = w.numberOfOutputs === 0 ? [E] : R,
      O = {
        get bufferSize() {
          return x;
        },
        get channelCount() {
          return w.channelCount;
        },
        set channelCount(b) {
          throw n();
        },
        get channelCountMode() {
          return w.channelCountMode;
        },
        set channelCountMode(b) {
          throw n();
        },
        get channelInterpretation() {
          return B;
        },
        set channelInterpretation(b) {
          for (const q of k) q.channelInterpretation = b;
          B = b;
        },
        get context() {
          return E.context;
        },
        get inputs() {
          return k;
        },
        get numberOfInputs() {
          return w.numberOfInputs;
        },
        get numberOfOutputs() {
          return w.numberOfOutputs;
        },
        get onprocessorerror() {
          return j;
        },
        set onprocessorerror(b) {
          typeof j == 'function' && O.removeEventListener('processorerror', j),
            (j = typeof b == 'function' ? b : null),
            typeof j == 'function' && O.addEventListener('processorerror', j);
        },
        get parameters() {
          return F;
        },
        get port() {
          return v.port2;
        },
        addEventListener(...b) {
          return E.addEventListener(b[0], b[1], b[2]);
        },
        connect: t.bind(null, z),
        disconnect: u.bind(null, z),
        dispatchEvent(...b) {
          return E.dispatchEvent(b[0]);
        },
        removeEventListener(...b) {
          return E.removeEventListener(b[0], b[1], b[2]);
        }
      },
      I = new Map();
    (v.port1.addEventListener = (
      (b) =>
      (...q) => {
        if (q[0] === 'message') {
          const Ae =
            typeof q[1] == 'function'
              ? q[1]
              : typeof q[1] == 'object' &&
                  q[1] !== null &&
                  typeof q[1].handleEvent == 'function'
                ? q[1].handleEvent
                : null;
          if (Ae !== null) {
            const de = I.get(q[1]);
            de !== void 0
              ? (q[1] = de)
              : ((q[1] = (J) => {
                  c(m.currentTime, m.sampleRate, () => Ae(J));
                }),
                I.set(Ae, q[1]));
          }
        }
        return b.call(v.port1, q[0], q[1], q[2]);
      }
    )(v.port1.addEventListener)),
      (v.port1.removeEventListener = (
        (b) =>
        (...q) => {
          if (q[0] === 'message') {
            const Ae = I.get(q[1]);
            Ae !== void 0 && (I.delete(q[1]), (q[1] = Ae));
          }
          return b.call(v.port1, q[0], q[1], q[2]);
        }
      )(v.port1.removeEventListener));
    let D = null;
    Object.defineProperty(v.port1, 'onmessage', {
      get: () => D,
      set: (b) => {
        typeof D == 'function' && v.port1.removeEventListener('message', D),
          (D = typeof b == 'function' ? b : null),
          typeof D == 'function' &&
            (v.port1.addEventListener('message', D), v.port1.start());
      }
    }),
      (_.prototype.port = v.port1);
    let L = null;
    bw(m, O, _, w).then((b) => (L = b));
    const Pe = ua(w.numberOfInputs, w.channelCount),
      we = ua(w.numberOfOutputs, f),
      $ =
        _.parameterDescriptors === void 0
          ? []
          : _.parameterDescriptors.reduce(
              (b, { name: q }) => ({ ...b, [q]: new Float32Array(128) }),
              {}
            );
    let Z = !0;
    const xe = () => {
        w.numberOfOutputs > 0 && E.disconnect(A);
        for (let b = 0, q = 0; b < w.numberOfOutputs; b += 1) {
          const Ae = R[b];
          for (let de = 0; de < f[b]; de += 1) A.disconnect(Ae, q + de, de);
          q += f[b];
        }
      },
      W = new Map();
    E.onaudioprocess = ({ inputBuffer: b, outputBuffer: q }) => {
      if (L !== null) {
        const Ae = h(O);
        for (let de = 0; de < x; de += 128) {
          for (let J = 0; J < w.numberOfInputs; J += 1)
            for (let ge = 0; ge < w.channelCount; ge += 1)
              la(b, Pe[J], ge, ge, de);
          _.parameterDescriptors !== void 0 &&
            _.parameterDescriptors.forEach(({ name: J }, ge) => {
              la(b, $, J, g + ge, de);
            });
          for (let J = 0; J < w.numberOfInputs; J += 1)
            for (let ge = 0; ge < f[J]; ge += 1)
              we[J][ge].byteLength === 0 && (we[J][ge] = new Float32Array(128));
          try {
            const J = Pe.map((wt, Tn) => {
              if (Ae[Tn].size > 0) return W.set(Tn, x / 128), wt;
              const tl = W.get(Tn);
              return tl === void 0
                ? []
                : (wt.every((ty) => ty.every((ny) => ny === 0)) &&
                    (tl === 1 ? W.delete(Tn) : W.set(Tn, tl - 1)),
                  wt);
            });
            Z = c(m.currentTime + de / m.sampleRate, m.sampleRate, () =>
              L.process(J, we, $)
            );
            for (let wt = 0, Tn = 0; wt < w.numberOfOutputs; wt += 1) {
              for (let ks = 0; ks < f[wt]; ks += 1)
                qm(q, we[wt], ks, Tn + ks, de);
              Tn += f[wt];
            }
          } catch (J) {
            (Z = !1),
              O.dispatchEvent(
                new ErrorEvent('processorerror', {
                  colno: J.colno,
                  filename: J.filename,
                  lineno: J.lineno,
                  message: J.message
                })
              );
          }
          if (!Z) {
            for (let J = 0; J < w.numberOfInputs; J += 1) {
              k[J].disconnect(C[J]);
              for (let ge = 0; ge < w.channelCount; ge += 1)
                C[de].disconnect(N, ge, J * w.channelCount + ge);
            }
            if (_.parameterDescriptors !== void 0) {
              const J = _.parameterDescriptors.length;
              for (let ge = 0; ge < J; ge += 1) {
                const wt = S[ge];
                wt.disconnect(N, 0, g + ge), wt.stop();
              }
            }
            N.disconnect(E), (E.onaudioprocess = null), Jn ? xe() : Ir();
            break;
          }
        }
      }
    };
    let Jn = !1;
    const er = o(m, {
        channelCount: 1,
        channelCountMode: 'explicit',
        channelInterpretation: 'discrete',
        gain: 0
      }),
      Mr = () => E.connect(er).connect(m.destination),
      Ir = () => {
        E.disconnect(er), er.disconnect();
      },
      Jg = () => {
        if (Z) {
          Ir(), w.numberOfOutputs > 0 && E.connect(A);
          for (let b = 0, q = 0; b < w.numberOfOutputs; b += 1) {
            const Ae = R[b];
            for (let de = 0; de < f[b]; de += 1) A.connect(Ae, q + de, de);
            q += f[b];
          }
        }
        Jn = !0;
      },
      ey = () => {
        Z && (Mr(), xe()), (Jn = !1);
      };
    return Mr(), d(O, Jg, ey);
  },
  Gm = (t, e) => {
    const n = t.createBiquadFilter();
    return (
      Ie(n, e),
      _e(n, e, 'Q'),
      _e(n, e, 'detune'),
      _e(n, e, 'frequency'),
      _e(n, e, 'gain'),
      ce(n, e, 'type'),
      n
    );
  },
  Vw = (t, e) => (n, r) => {
    const s = n.createChannelMerger(r.numberOfInputs);
    return (
      t !== null && t.name === 'webkitAudioContext' && e(n, s), Ie(s, r), s
    );
  },
  jw = (t) => {
    const e = t.numberOfOutputs;
    Object.defineProperty(t, 'channelCount', {
      get: () => e,
      set: (n) => {
        if (n !== e) throw be();
      }
    }),
      Object.defineProperty(t, 'channelCountMode', {
        get: () => 'explicit',
        set: (n) => {
          if (n !== 'explicit') throw be();
        }
      }),
      Object.defineProperty(t, 'channelInterpretation', {
        get: () => 'discrete',
        set: (n) => {
          if (n !== 'discrete') throw be();
        }
      });
  },
  zi = (t, e) => {
    const n = t.createChannelSplitter(e.numberOfOutputs);
    return Ie(n, e), jw(n), n;
  },
  zw = (t, e, n, r, s) => (i, o) => {
    if (i.createConstantSource === void 0) return n(i, o);
    const a = i.createConstantSource();
    return (
      Ie(a, o),
      _e(a, o, 'offset'),
      e(r, () => r(i)) || $c(a),
      e(s, () => s(i)) || Hc(a),
      t(i, a),
      a
    );
  },
  _s = (t, e) => (
    (t.connect = e.connect.bind(e)), (t.disconnect = e.disconnect.bind(e)), t
  ),
  Ww =
    (t, e, n, r) =>
    (s, { offset: i, ...o }) => {
      const a = s.createBuffer(1, 2, 44100),
        l = e(s, {
          buffer: null,
          channelCount: 2,
          channelCountMode: 'max',
          channelInterpretation: 'speakers',
          loop: !1,
          loopEnd: 0,
          loopStart: 0,
          playbackRate: 1
        }),
        u = n(s, { ...o, gain: i }),
        c = a.getChannelData(0);
      (c[0] = 1), (c[1] = 1), (l.buffer = a), (l.loop = !0);
      const h = {
          get bufferSize() {},
          get channelCount() {
            return u.channelCount;
          },
          set channelCount(p) {
            u.channelCount = p;
          },
          get channelCountMode() {
            return u.channelCountMode;
          },
          set channelCountMode(p) {
            u.channelCountMode = p;
          },
          get channelInterpretation() {
            return u.channelInterpretation;
          },
          set channelInterpretation(p) {
            u.channelInterpretation = p;
          },
          get context() {
            return u.context;
          },
          get inputs() {
            return [];
          },
          get numberOfInputs() {
            return l.numberOfInputs;
          },
          get numberOfOutputs() {
            return u.numberOfOutputs;
          },
          get offset() {
            return u.gain;
          },
          get onended() {
            return l.onended;
          },
          set onended(p) {
            l.onended = p;
          },
          addEventListener(...p) {
            return l.addEventListener(p[0], p[1], p[2]);
          },
          dispatchEvent(...p) {
            return l.dispatchEvent(p[0]);
          },
          removeEventListener(...p) {
            return l.removeEventListener(p[0], p[1], p[2]);
          },
          start(p = 0) {
            l.start.call(l, p);
          },
          stop(p = 0) {
            l.stop.call(l, p);
          }
        },
        d = () => l.connect(u),
        m = () => l.disconnect(u);
      return t(s, l), r(_s(h, u), d, m);
    },
  Bw = (t, e) => (n, r) => {
    const s = n.createConvolver();
    if (
      (Ie(s, r),
      r.disableNormalization === s.normalize &&
        (s.normalize = !r.disableNormalization),
      ce(s, r, 'buffer'),
      r.channelCount > 2 ||
        (e(
          s,
          'channelCount',
          (i) => () => i.call(s),
          (i) => (o) => {
            if (o > 2) throw t();
            return i.call(s, o);
          }
        ),
        r.channelCountMode === 'max'))
    )
      throw t();
    return (
      e(
        s,
        'channelCountMode',
        (i) => () => i.call(s),
        (i) => (o) => {
          if (o === 'max') throw t();
          return i.call(s, o);
        }
      ),
      s
    );
  },
  Km = (t, e) => {
    const n = t.createDelay(e.maxDelayTime);
    return Ie(n, e), _e(n, e, 'delayTime'), n;
  },
  Uw = (t) => (e, n) => {
    const r = e.createDynamicsCompressor();
    if ((Ie(r, n), n.channelCount > 2 || n.channelCountMode === 'max'))
      throw t();
    return (
      _e(r, n, 'attack'),
      _e(r, n, 'knee'),
      _e(r, n, 'ratio'),
      _e(r, n, 'release'),
      _e(r, n, 'threshold'),
      r
    );
  },
  ut = (t, e) => {
    const n = t.createGain();
    return Ie(n, e), _e(n, e, 'gain'), n;
  },
  qw = (t) => (e, n, r) => {
    if (e.createIIRFilter === void 0) return t(e, n, r);
    const s = e.createIIRFilter(r.feedforward, r.feedback);
    return Ie(s, r), s;
  };
function $w(t, e) {
  const n = e[0] * e[0] + e[1] * e[1];
  return [(t[0] * e[0] + t[1] * e[1]) / n, (t[1] * e[0] - t[0] * e[1]) / n];
}
function Hw(t, e) {
  return [t[0] * e[0] - t[1] * e[1], t[0] * e[1] + t[1] * e[0]];
}
function Ud(t, e) {
  let n = [0, 0];
  for (let r = t.length - 1; r >= 0; r -= 1) (n = Hw(n, e)), (n[0] += t[r]);
  return n;
}
const Gw =
    (t, e, n, r) =>
    (
      s,
      i,
      {
        channelCount: o,
        channelCountMode: a,
        channelInterpretation: l,
        feedback: u,
        feedforward: c
      }
    ) => {
      const h = Hm(i, s.sampleRate),
        d = u instanceof Float64Array ? u : new Float64Array(u),
        m = c instanceof Float64Array ? c : new Float64Array(c),
        p = d.length,
        _ = m.length,
        w = Math.min(p, _);
      if (p === 0 || p > 20) throw r();
      if (d[0] === 0) throw e();
      if (_ === 0 || _ > 20) throw r();
      if (m[0] === 0) throw e();
      if (d[0] !== 1) {
        for (let S = 0; S < _; S += 1) m[S] /= d[0];
        for (let S = 1; S < p; S += 1) d[S] /= d[0];
      }
      const f = n(s, h, o, o);
      (f.channelCount = o),
        (f.channelCountMode = a),
        (f.channelInterpretation = l);
      const g = 32,
        y = [],
        T = [],
        v = [];
      for (let S = 0; S < o; S += 1) {
        y.push(0);
        const N = new Float32Array(g),
          x = new Float32Array(g);
        N.fill(0), x.fill(0), T.push(N), v.push(x);
      }
      f.onaudioprocess = (S) => {
        const N = S.inputBuffer,
          x = S.outputBuffer,
          E = N.numberOfChannels;
        for (let A = 0; A < E; A += 1) {
          const R = N.getChannelData(A),
            F = x.getChannelData(A);
          y[A] = $m(d, p, m, _, w, T[A], v[A], y[A], g, R, F);
        }
      };
      const k = s.sampleRate / 2;
      return _s(
        {
          get bufferSize() {
            return h;
          },
          get channelCount() {
            return f.channelCount;
          },
          set channelCount(S) {
            f.channelCount = S;
          },
          get channelCountMode() {
            return f.channelCountMode;
          },
          set channelCountMode(S) {
            f.channelCountMode = S;
          },
          get channelInterpretation() {
            return f.channelInterpretation;
          },
          set channelInterpretation(S) {
            f.channelInterpretation = S;
          },
          get context() {
            return f.context;
          },
          get inputs() {
            return [f];
          },
          get numberOfInputs() {
            return f.numberOfInputs;
          },
          get numberOfOutputs() {
            return f.numberOfOutputs;
          },
          addEventListener(...S) {
            return f.addEventListener(S[0], S[1], S[2]);
          },
          dispatchEvent(...S) {
            return f.dispatchEvent(S[0]);
          },
          getFrequencyResponse(S, N, x) {
            if (S.length !== N.length || N.length !== x.length) throw t();
            const E = S.length;
            for (let A = 0; A < E; A += 1) {
              const R = -Math.PI * (S[A] / k),
                F = [Math.cos(R), Math.sin(R)],
                B = Ud(m, F),
                j = Ud(d, F),
                z = $w(B, j);
              (N[A] = Math.sqrt(z[0] * z[0] + z[1] * z[1])),
                (x[A] = Math.atan2(z[1], z[0]));
            }
          },
          removeEventListener(...S) {
            return f.removeEventListener(S[0], S[1], S[2]);
          }
        },
        f
      );
    },
  Kw = (t, e) => t.createMediaElementSource(e.mediaElement),
  Qw = (t, e) => {
    const n = t.createMediaStreamDestination();
    return (
      Ie(n, e),
      n.numberOfOutputs === 1 &&
        Object.defineProperty(n, 'numberOfOutputs', { get: () => 0 }),
      n
    );
  },
  Xw = (t, { mediaStream: e }) => {
    const n = e.getAudioTracks();
    n.sort((i, o) => (i.id < o.id ? -1 : i.id > o.id ? 1 : 0));
    const r = n.slice(0, 1),
      s = t.createMediaStreamSource(new MediaStream(r));
    return Object.defineProperty(s, 'mediaStream', { value: e }), s;
  },
  Yw =
    (t, e) =>
    (n, { mediaStreamTrack: r }) => {
      if (typeof n.createMediaStreamTrackSource == 'function')
        return n.createMediaStreamTrackSource(r);
      const s = new MediaStream([r]),
        i = n.createMediaStreamSource(s);
      if (r.kind !== 'audio') throw t();
      if (e(n)) throw new TypeError();
      return i;
    },
  Zw = (t) =>
    t === null
      ? null
      : t.hasOwnProperty('OfflineAudioContext')
        ? t.OfflineAudioContext
        : t.hasOwnProperty('webkitOfflineAudioContext')
          ? t.webkitOfflineAudioContext
          : null,
  Jw = (t, e, n, r, s, i) => (o, a) => {
    const l = o.createOscillator();
    return (
      Ie(l, a),
      _e(l, a, 'detune'),
      _e(l, a, 'frequency'),
      a.periodicWave !== void 0
        ? l.setPeriodicWave(a.periodicWave)
        : ce(l, a, 'type'),
      e(n, () => n(o)) || $c(l),
      e(r, () => r(o)) || i(l, o),
      e(s, () => s(o)) || Hc(l),
      t(o, l),
      l
    );
  },
  eS = (t) => (e, n) => {
    const r = e.createPanner();
    return r.orientationX === void 0
      ? t(e, n)
      : (Ie(r, n),
        _e(r, n, 'orientationX'),
        _e(r, n, 'orientationY'),
        _e(r, n, 'orientationZ'),
        _e(r, n, 'positionX'),
        _e(r, n, 'positionY'),
        _e(r, n, 'positionZ'),
        ce(r, n, 'coneInnerAngle'),
        ce(r, n, 'coneOuterAngle'),
        ce(r, n, 'coneOuterGain'),
        ce(r, n, 'distanceModel'),
        ce(r, n, 'maxDistance'),
        ce(r, n, 'panningModel'),
        ce(r, n, 'refDistance'),
        ce(r, n, 'rolloffFactor'),
        r);
  },
  tS =
    (t, e, n, r, s, i, o, a, l, u) =>
    (
      c,
      {
        coneInnerAngle: h,
        coneOuterAngle: d,
        coneOuterGain: m,
        distanceModel: p,
        maxDistance: _,
        orientationX: w,
        orientationY: f,
        orientationZ: g,
        panningModel: y,
        positionX: T,
        positionY: v,
        positionZ: k,
        refDistance: C,
        rolloffFactor: S,
        ...N
      }
    ) => {
      const x = c.createPanner();
      if (N.channelCount > 2 || N.channelCountMode === 'max') throw o();
      Ie(x, N);
      const E = {
          channelCount: 1,
          channelCountMode: 'explicit',
          channelInterpretation: 'discrete'
        },
        A = n(c, {
          ...E,
          channelInterpretation: 'speakers',
          numberOfInputs: 6
        }),
        R = r(c, { ...N, gain: 1 }),
        F = r(c, { ...E, gain: 1 }),
        B = r(c, { ...E, gain: 0 }),
        j = r(c, { ...E, gain: 0 }),
        z = r(c, { ...E, gain: 0 }),
        O = r(c, { ...E, gain: 0 }),
        I = r(c, { ...E, gain: 0 }),
        D = s(c, 256, 6, 1),
        L = i(c, { ...E, curve: new Float32Array([1, 1]), oversample: 'none' });
      let U = [w, f, g],
        Pe = [T, v, k];
      const we = new Float32Array(1);
      (D.onaudioprocess = ({ inputBuffer: W }) => {
        const Jn = [l(W, we, 0), l(W, we, 1), l(W, we, 2)];
        Jn.some((Mr, Ir) => Mr !== U[Ir]) &&
          (x.setOrientation(...Jn), (U = Jn));
        const er = [l(W, we, 3), l(W, we, 4), l(W, we, 5)];
        er.some((Mr, Ir) => Mr !== Pe[Ir]) && (x.setPosition(...er), (Pe = er));
      }),
        Object.defineProperty(B.gain, 'defaultValue', { get: () => 0 }),
        Object.defineProperty(j.gain, 'defaultValue', { get: () => 0 }),
        Object.defineProperty(z.gain, 'defaultValue', { get: () => 0 }),
        Object.defineProperty(O.gain, 'defaultValue', { get: () => 0 }),
        Object.defineProperty(I.gain, 'defaultValue', { get: () => 0 });
      const $ = {
        get bufferSize() {},
        get channelCount() {
          return x.channelCount;
        },
        set channelCount(W) {
          if (W > 2) throw o();
          (R.channelCount = W), (x.channelCount = W);
        },
        get channelCountMode() {
          return x.channelCountMode;
        },
        set channelCountMode(W) {
          if (W === 'max') throw o();
          (R.channelCountMode = W), (x.channelCountMode = W);
        },
        get channelInterpretation() {
          return x.channelInterpretation;
        },
        set channelInterpretation(W) {
          (R.channelInterpretation = W), (x.channelInterpretation = W);
        },
        get coneInnerAngle() {
          return x.coneInnerAngle;
        },
        set coneInnerAngle(W) {
          x.coneInnerAngle = W;
        },
        get coneOuterAngle() {
          return x.coneOuterAngle;
        },
        set coneOuterAngle(W) {
          x.coneOuterAngle = W;
        },
        get coneOuterGain() {
          return x.coneOuterGain;
        },
        set coneOuterGain(W) {
          if (W < 0 || W > 1) throw e();
          x.coneOuterGain = W;
        },
        get context() {
          return x.context;
        },
        get distanceModel() {
          return x.distanceModel;
        },
        set distanceModel(W) {
          x.distanceModel = W;
        },
        get inputs() {
          return [R];
        },
        get maxDistance() {
          return x.maxDistance;
        },
        set maxDistance(W) {
          if (W < 0) throw new RangeError();
          x.maxDistance = W;
        },
        get numberOfInputs() {
          return x.numberOfInputs;
        },
        get numberOfOutputs() {
          return x.numberOfOutputs;
        },
        get orientationX() {
          return F.gain;
        },
        get orientationY() {
          return B.gain;
        },
        get orientationZ() {
          return j.gain;
        },
        get panningModel() {
          return x.panningModel;
        },
        set panningModel(W) {
          x.panningModel = W;
        },
        get positionX() {
          return z.gain;
        },
        get positionY() {
          return O.gain;
        },
        get positionZ() {
          return I.gain;
        },
        get refDistance() {
          return x.refDistance;
        },
        set refDistance(W) {
          if (W < 0) throw new RangeError();
          x.refDistance = W;
        },
        get rolloffFactor() {
          return x.rolloffFactor;
        },
        set rolloffFactor(W) {
          if (W < 0) throw new RangeError();
          x.rolloffFactor = W;
        },
        addEventListener(...W) {
          return R.addEventListener(W[0], W[1], W[2]);
        },
        dispatchEvent(...W) {
          return R.dispatchEvent(W[0]);
        },
        removeEventListener(...W) {
          return R.removeEventListener(W[0], W[1], W[2]);
        }
      };
      h !== $.coneInnerAngle && ($.coneInnerAngle = h),
        d !== $.coneOuterAngle && ($.coneOuterAngle = d),
        m !== $.coneOuterGain && ($.coneOuterGain = m),
        p !== $.distanceModel && ($.distanceModel = p),
        _ !== $.maxDistance && ($.maxDistance = _),
        w !== $.orientationX.value && ($.orientationX.value = w),
        f !== $.orientationY.value && ($.orientationY.value = f),
        g !== $.orientationZ.value && ($.orientationZ.value = g),
        y !== $.panningModel && ($.panningModel = y),
        T !== $.positionX.value && ($.positionX.value = T),
        v !== $.positionY.value && ($.positionY.value = v),
        k !== $.positionZ.value && ($.positionZ.value = k),
        C !== $.refDistance && ($.refDistance = C),
        S !== $.rolloffFactor && ($.rolloffFactor = S),
        (U[0] !== 1 || U[1] !== 0 || U[2] !== 0) && x.setOrientation(...U),
        (Pe[0] !== 0 || Pe[1] !== 0 || Pe[2] !== 0) && x.setPosition(...Pe);
      const Z = () => {
          R.connect(x),
            t(R, L, 0, 0),
            L.connect(F).connect(A, 0, 0),
            L.connect(B).connect(A, 0, 1),
            L.connect(j).connect(A, 0, 2),
            L.connect(z).connect(A, 0, 3),
            L.connect(O).connect(A, 0, 4),
            L.connect(I).connect(A, 0, 5),
            A.connect(D).connect(c.destination);
        },
        xe = () => {
          R.disconnect(x),
            a(R, L, 0, 0),
            L.disconnect(F),
            F.disconnect(A),
            L.disconnect(B),
            B.disconnect(A),
            L.disconnect(j),
            j.disconnect(A),
            L.disconnect(z),
            z.disconnect(A),
            L.disconnect(O),
            O.disconnect(A),
            L.disconnect(I),
            I.disconnect(A),
            A.disconnect(D),
            D.disconnect(c.destination);
        };
      return u(_s($, x), Z, xe);
    },
  nS =
    (t) =>
    (e, { disableNormalization: n, imag: r, real: s }) => {
      const i = r instanceof Float32Array ? r : new Float32Array(r),
        o = s instanceof Float32Array ? s : new Float32Array(s),
        a = e.createPeriodicWave(o, i, { disableNormalization: n });
      if (Array.from(r).length < 2) throw t();
      return a;
    },
  Wi = (t, e, n, r) => t.createScriptProcessor(e, n, r),
  rS = (t, e) => (n, r) => {
    const s = r.channelCountMode;
    if (s === 'clamped-max') throw e();
    if (n.createStereoPanner === void 0) return t(n, r);
    const i = n.createStereoPanner();
    return (
      Ie(i, r),
      _e(i, r, 'pan'),
      Object.defineProperty(i, 'channelCountMode', {
        get: () => s,
        set: (o) => {
          if (o !== s) throw e();
        }
      }),
      i
    );
  },
  sS = (t, e, n, r, s, i) => {
    const a = new Float32Array([1, 1]),
      l = Math.PI / 2,
      u = {
        channelCount: 1,
        channelCountMode: 'explicit',
        channelInterpretation: 'discrete'
      },
      c = { ...u, oversample: 'none' },
      h = (p, _, w, f) => {
        const g = new Float32Array(16385),
          y = new Float32Array(16385);
        for (let N = 0; N < 16385; N += 1) {
          const x = (N / 16384) * l;
          (g[N] = Math.cos(x)), (y[N] = Math.sin(x));
        }
        const T = n(p, { ...u, gain: 0 }),
          v = r(p, { ...c, curve: g }),
          k = r(p, { ...c, curve: a }),
          C = n(p, { ...u, gain: 0 }),
          S = r(p, { ...c, curve: y });
        return {
          connectGraph() {
            _.connect(T),
              _.connect(k.inputs === void 0 ? k : k.inputs[0]),
              _.connect(C),
              k.connect(w),
              w.connect(v.inputs === void 0 ? v : v.inputs[0]),
              w.connect(S.inputs === void 0 ? S : S.inputs[0]),
              v.connect(T.gain),
              S.connect(C.gain),
              T.connect(f, 0, 0),
              C.connect(f, 0, 1);
          },
          disconnectGraph() {
            _.disconnect(T),
              _.disconnect(k.inputs === void 0 ? k : k.inputs[0]),
              _.disconnect(C),
              k.disconnect(w),
              w.disconnect(v.inputs === void 0 ? v : v.inputs[0]),
              w.disconnect(S.inputs === void 0 ? S : S.inputs[0]),
              v.disconnect(T.gain),
              S.disconnect(C.gain),
              T.disconnect(f, 0, 0),
              C.disconnect(f, 0, 1);
          }
        };
      },
      d = (p, _, w, f) => {
        const g = new Float32Array(16385),
          y = new Float32Array(16385),
          T = new Float32Array(16385),
          v = new Float32Array(16385),
          k = Math.floor(16385 / 2);
        for (let z = 0; z < 16385; z += 1)
          if (z > k) {
            const O = ((z - k) / (16384 - k)) * l;
            (g[z] = Math.cos(O)), (y[z] = Math.sin(O)), (T[z] = 0), (v[z] = 1);
          } else {
            const O = (z / (16384 - k)) * l;
            (g[z] = 1), (y[z] = 0), (T[z] = Math.cos(O)), (v[z] = Math.sin(O));
          }
        const C = e(p, {
            channelCount: 2,
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            numberOfOutputs: 2
          }),
          S = n(p, { ...u, gain: 0 }),
          N = r(p, { ...c, curve: g }),
          x = n(p, { ...u, gain: 0 }),
          E = r(p, { ...c, curve: y }),
          A = r(p, { ...c, curve: a }),
          R = n(p, { ...u, gain: 0 }),
          F = r(p, { ...c, curve: T }),
          B = n(p, { ...u, gain: 0 }),
          j = r(p, { ...c, curve: v });
        return {
          connectGraph() {
            _.connect(C),
              _.connect(A.inputs === void 0 ? A : A.inputs[0]),
              C.connect(S, 0),
              C.connect(x, 0),
              C.connect(R, 1),
              C.connect(B, 1),
              A.connect(w),
              w.connect(N.inputs === void 0 ? N : N.inputs[0]),
              w.connect(E.inputs === void 0 ? E : E.inputs[0]),
              w.connect(F.inputs === void 0 ? F : F.inputs[0]),
              w.connect(j.inputs === void 0 ? j : j.inputs[0]),
              N.connect(S.gain),
              E.connect(x.gain),
              F.connect(R.gain),
              j.connect(B.gain),
              S.connect(f, 0, 0),
              R.connect(f, 0, 0),
              x.connect(f, 0, 1),
              B.connect(f, 0, 1);
          },
          disconnectGraph() {
            _.disconnect(C),
              _.disconnect(A.inputs === void 0 ? A : A.inputs[0]),
              C.disconnect(S, 0),
              C.disconnect(x, 0),
              C.disconnect(R, 1),
              C.disconnect(B, 1),
              A.disconnect(w),
              w.disconnect(N.inputs === void 0 ? N : N.inputs[0]),
              w.disconnect(E.inputs === void 0 ? E : E.inputs[0]),
              w.disconnect(F.inputs === void 0 ? F : F.inputs[0]),
              w.disconnect(j.inputs === void 0 ? j : j.inputs[0]),
              N.disconnect(S.gain),
              E.disconnect(x.gain),
              F.disconnect(R.gain),
              j.disconnect(B.gain),
              S.disconnect(f, 0, 0),
              R.disconnect(f, 0, 0),
              x.disconnect(f, 0, 1),
              B.disconnect(f, 0, 1);
          }
        };
      },
      m = (p, _, w, f, g) => {
        if (_ === 1) return h(p, w, f, g);
        if (_ === 2) return d(p, w, f, g);
        throw s();
      };
    return (p, { channelCount: _, channelCountMode: w, pan: f, ...g }) => {
      if (w === 'max') throw s();
      const y = t(p, {
          ...g,
          channelCount: 1,
          channelCountMode: w,
          numberOfInputs: 2
        }),
        T = n(p, { ...g, channelCount: _, channelCountMode: w, gain: 1 }),
        v = n(p, {
          channelCount: 1,
          channelCountMode: 'explicit',
          channelInterpretation: 'discrete',
          gain: f
        });
      let { connectGraph: k, disconnectGraph: C } = m(p, _, T, v, y);
      Object.defineProperty(v.gain, 'defaultValue', { get: () => 0 }),
        Object.defineProperty(v.gain, 'maxValue', { get: () => 1 }),
        Object.defineProperty(v.gain, 'minValue', { get: () => -1 });
      const S = {
        get bufferSize() {},
        get channelCount() {
          return T.channelCount;
        },
        set channelCount(A) {
          T.channelCount !== A &&
            (N && C(),
            ({ connectGraph: k, disconnectGraph: C } = m(p, A, T, v, y)),
            N && k()),
            (T.channelCount = A);
        },
        get channelCountMode() {
          return T.channelCountMode;
        },
        set channelCountMode(A) {
          if (A === 'clamped-max' || A === 'max') throw s();
          T.channelCountMode = A;
        },
        get channelInterpretation() {
          return T.channelInterpretation;
        },
        set channelInterpretation(A) {
          T.channelInterpretation = A;
        },
        get context() {
          return T.context;
        },
        get inputs() {
          return [T];
        },
        get numberOfInputs() {
          return T.numberOfInputs;
        },
        get numberOfOutputs() {
          return T.numberOfOutputs;
        },
        get pan() {
          return v.gain;
        },
        addEventListener(...A) {
          return T.addEventListener(A[0], A[1], A[2]);
        },
        dispatchEvent(...A) {
          return T.dispatchEvent(A[0]);
        },
        removeEventListener(...A) {
          return T.removeEventListener(A[0], A[1], A[2]);
        }
      };
      let N = !1;
      const x = () => {
          k(), (N = !0);
        },
        E = () => {
          C(), (N = !1);
        };
      return i(_s(S, y), x, E);
    };
  },
  iS = (t, e, n, r, s, i, o) => (a, l) => {
    const u = a.createWaveShaper();
    if (
      i !== null &&
      i.name === 'webkitAudioContext' &&
      a.createGain().gain.automationRate === void 0
    )
      return n(a, l);
    Ie(u, l);
    const c =
      l.curve === null || l.curve instanceof Float32Array
        ? l.curve
        : new Float32Array(l.curve);
    if (c !== null && c.length < 2) throw e();
    ce(u, { curve: c }, 'curve'), ce(u, l, 'oversample');
    let h = null,
      d = !1;
    return (
      o(
        u,
        'curve',
        (_) => () => _.call(u),
        (_) => (w) => (
          _.call(u, w),
          d &&
            (r(w) && h === null
              ? (h = t(a, u))
              : !r(w) && h !== null && (h(), (h = null))),
          w
        )
      ),
      s(
        u,
        () => {
          (d = !0), r(u.curve) && (h = t(a, u));
        },
        () => {
          (d = !1), h !== null && (h(), (h = null));
        }
      )
    );
  },
  oS =
    (t, e, n, r, s) =>
    (i, { curve: o, oversample: a, ...l }) => {
      const u = i.createWaveShaper(),
        c = i.createWaveShaper();
      Ie(u, l), Ie(c, l);
      const h = n(i, { ...l, gain: 1 }),
        d = n(i, { ...l, gain: -1 }),
        m = n(i, { ...l, gain: 1 }),
        p = n(i, { ...l, gain: -1 });
      let _ = null,
        w = !1,
        f = null;
      const g = {
        get bufferSize() {},
        get channelCount() {
          return u.channelCount;
        },
        set channelCount(v) {
          (h.channelCount = v),
            (d.channelCount = v),
            (u.channelCount = v),
            (m.channelCount = v),
            (c.channelCount = v),
            (p.channelCount = v);
        },
        get channelCountMode() {
          return u.channelCountMode;
        },
        set channelCountMode(v) {
          (h.channelCountMode = v),
            (d.channelCountMode = v),
            (u.channelCountMode = v),
            (m.channelCountMode = v),
            (c.channelCountMode = v),
            (p.channelCountMode = v);
        },
        get channelInterpretation() {
          return u.channelInterpretation;
        },
        set channelInterpretation(v) {
          (h.channelInterpretation = v),
            (d.channelInterpretation = v),
            (u.channelInterpretation = v),
            (m.channelInterpretation = v),
            (c.channelInterpretation = v),
            (p.channelInterpretation = v);
        },
        get context() {
          return u.context;
        },
        get curve() {
          return f;
        },
        set curve(v) {
          if (v !== null && v.length < 2) throw e();
          if (v === null) (u.curve = v), (c.curve = v);
          else {
            const k = v.length,
              C = new Float32Array(k + 2 - (k % 2)),
              S = new Float32Array(k + 2 - (k % 2));
            (C[0] = v[0]), (S[0] = -v[k - 1]);
            const N = Math.ceil((k + 1) / 2),
              x = (k + 1) / 2 - 1;
            for (let E = 1; E < N; E += 1) {
              const A = (E / N) * x,
                R = Math.floor(A),
                F = Math.ceil(A);
              (C[E] =
                R === F ? v[R] : (1 - (A - R)) * v[R] + (1 - (F - A)) * v[F]),
                (S[E] =
                  R === F
                    ? -v[k - 1 - R]
                    : -((1 - (A - R)) * v[k - 1 - R]) -
                      (1 - (F - A)) * v[k - 1 - F]);
            }
            (C[N] = k % 2 === 1 ? v[N - 1] : (v[N - 2] + v[N - 1]) / 2),
              (u.curve = C),
              (c.curve = S);
          }
          (f = v),
            w &&
              (r(f) && _ === null
                ? (_ = t(i, h))
                : _ !== null && (_(), (_ = null)));
        },
        get inputs() {
          return [h];
        },
        get numberOfInputs() {
          return u.numberOfInputs;
        },
        get numberOfOutputs() {
          return u.numberOfOutputs;
        },
        get oversample() {
          return u.oversample;
        },
        set oversample(v) {
          (u.oversample = v), (c.oversample = v);
        },
        addEventListener(...v) {
          return h.addEventListener(v[0], v[1], v[2]);
        },
        dispatchEvent(...v) {
          return h.dispatchEvent(v[0]);
        },
        removeEventListener(...v) {
          return h.removeEventListener(v[0], v[1], v[2]);
        }
      };
      o !== null &&
        (g.curve = o instanceof Float32Array ? o : new Float32Array(o)),
        a !== g.oversample && (g.oversample = a);
      const y = () => {
          h.connect(u).connect(m),
            h.connect(d).connect(c).connect(p).connect(m),
            (w = !0),
            r(f) && (_ = t(i, h));
        },
        T = () => {
          h.disconnect(u),
            u.disconnect(m),
            h.disconnect(d),
            d.disconnect(c),
            c.disconnect(p),
            p.disconnect(m),
            (w = !1),
            _ !== null && (_(), (_ = null));
        };
      return s(_s(g, m), y, T);
    },
  et = () => new DOMException('', 'NotSupportedError'),
  aS = { numberOfChannels: 1 },
  lS = (t, e, n, r, s) =>
    class extends t {
      constructor(o, a, l) {
        let u;
        if (typeof o == 'number' && a !== void 0 && l !== void 0)
          u = { length: a, numberOfChannels: o, sampleRate: l };
        else if (typeof o == 'object') u = o;
        else throw new Error('The given parameters are not valid.');
        const {
            length: c,
            numberOfChannels: h,
            sampleRate: d
          } = { ...aS, ...u },
          m = r(h, c, d);
        e(di, () => di(m)) ||
          m.addEventListener(
            'statechange',
            (() => {
              let p = 0;
              const _ = (w) => {
                this._state === 'running' &&
                  (p > 0
                    ? (m.removeEventListener('statechange', _),
                      w.stopImmediatePropagation(),
                      this._waitForThePromiseToSettle(w))
                    : (p += 1));
              };
              return _;
            })()
          ),
          super(m, h),
          (this._length = c),
          (this._nativeOfflineAudioContext = m),
          (this._state = null);
      }
      get length() {
        return this._nativeOfflineAudioContext.length === void 0
          ? this._length
          : this._nativeOfflineAudioContext.length;
      }
      get state() {
        return this._state === null
          ? this._nativeOfflineAudioContext.state
          : this._state;
      }
      startRendering() {
        return this._state === 'running'
          ? Promise.reject(n())
          : ((this._state = 'running'),
            s(this.destination, this._nativeOfflineAudioContext).finally(() => {
              (this._state = null), jm(this);
            }));
      }
      _waitForThePromiseToSettle(o) {
        this._state === null
          ? this._nativeOfflineAudioContext.dispatchEvent(o)
          : setTimeout(() => this._waitForThePromiseToSettle(o));
      }
    },
  uS = {
    channelCount: 2,
    channelCountMode: 'max',
    channelInterpretation: 'speakers',
    detune: 0,
    frequency: 440,
    periodicWave: void 0,
    type: 'sine'
  },
  cS = (t, e, n, r, s, i, o) =>
    class extends t {
      constructor(l, u) {
        const c = s(l),
          h = { ...uS, ...u },
          d = n(c, h),
          m = i(c),
          p = m ? r() : null,
          _ = l.sampleRate / 2;
        super(l, !1, d, p),
          (this._detune = e(this, m, d.detune, 153600, -153600)),
          (this._frequency = e(this, m, d.frequency, _, -_)),
          (this._nativeOscillatorNode = d),
          (this._onended = null),
          (this._oscillatorNodeRenderer = p),
          this._oscillatorNodeRenderer !== null &&
            h.periodicWave !== void 0 &&
            (this._oscillatorNodeRenderer.periodicWave = h.periodicWave);
      }
      get detune() {
        return this._detune;
      }
      get frequency() {
        return this._frequency;
      }
      get onended() {
        return this._onended;
      }
      set onended(l) {
        const u = typeof l == 'function' ? o(this, l) : null;
        this._nativeOscillatorNode.onended = u;
        const c = this._nativeOscillatorNode.onended;
        this._onended = c !== null && c === u ? l : c;
      }
      get type() {
        return this._nativeOscillatorNode.type;
      }
      set type(l) {
        (this._nativeOscillatorNode.type = l),
          this._oscillatorNodeRenderer !== null &&
            (this._oscillatorNodeRenderer.periodicWave = null);
      }
      setPeriodicWave(l) {
        this._nativeOscillatorNode.setPeriodicWave(l),
          this._oscillatorNodeRenderer !== null &&
            (this._oscillatorNodeRenderer.periodicWave = l);
      }
      start(l = 0) {
        if (
          (this._nativeOscillatorNode.start(l),
          this._oscillatorNodeRenderer !== null &&
            (this._oscillatorNodeRenderer.start = l),
          this.context.state !== 'closed')
        ) {
          us(this);
          const u = () => {
            this._nativeOscillatorNode.removeEventListener('ended', u),
              cn(this) && Li(this);
          };
          this._nativeOscillatorNode.addEventListener('ended', u);
        }
      }
      stop(l = 0) {
        this._nativeOscillatorNode.stop(l),
          this._oscillatorNodeRenderer !== null &&
            (this._oscillatorNodeRenderer.stop = l);
      }
    },
  hS = (t, e, n, r, s) => () => {
    const i = new WeakMap();
    let o = null,
      a = null,
      l = null;
    const u = async (c, h) => {
      let d = n(c);
      const m = He(d, h);
      if (!m) {
        const p = {
          channelCount: d.channelCount,
          channelCountMode: d.channelCountMode,
          channelInterpretation: d.channelInterpretation,
          detune: d.detune.value,
          frequency: d.frequency.value,
          periodicWave: o === null ? void 0 : o,
          type: d.type
        };
        (d = e(h, p)), a !== null && d.start(a), l !== null && d.stop(l);
      }
      return (
        i.set(h, d),
        m
          ? (await t(h, c.detune, d.detune),
            await t(h, c.frequency, d.frequency))
          : (await r(h, c.detune, d.detune),
            await r(h, c.frequency, d.frequency)),
        await s(c, h, d),
        d
      );
    };
    return {
      set periodicWave(c) {
        o = c;
      },
      set start(c) {
        a = c;
      },
      set stop(c) {
        l = c;
      },
      render(c, h) {
        const d = i.get(h);
        return d !== void 0 ? Promise.resolve(d) : u(c, h);
      }
    };
  },
  dS = {
    channelCount: 2,
    channelCountMode: 'clamped-max',
    channelInterpretation: 'speakers',
    coneInnerAngle: 360,
    coneOuterAngle: 360,
    coneOuterGain: 0,
    distanceModel: 'inverse',
    maxDistance: 1e4,
    orientationX: 1,
    orientationY: 0,
    orientationZ: 0,
    panningModel: 'equalpower',
    positionX: 0,
    positionY: 0,
    positionZ: 0,
    refDistance: 1,
    rolloffFactor: 1
  },
  fS = (t, e, n, r, s, i, o) =>
    class extends t {
      constructor(l, u) {
        const c = s(l),
          h = { ...dS, ...u },
          d = n(c, h),
          m = i(c),
          p = m ? r() : null;
        super(l, !1, d, p),
          (this._nativePannerNode = d),
          (this._orientationX = e(this, m, d.orientationX, Ke, nt)),
          (this._orientationY = e(this, m, d.orientationY, Ke, nt)),
          (this._orientationZ = e(this, m, d.orientationZ, Ke, nt)),
          (this._positionX = e(this, m, d.positionX, Ke, nt)),
          (this._positionY = e(this, m, d.positionY, Ke, nt)),
          (this._positionZ = e(this, m, d.positionZ, Ke, nt)),
          o(this, 1);
      }
      get coneInnerAngle() {
        return this._nativePannerNode.coneInnerAngle;
      }
      set coneInnerAngle(l) {
        this._nativePannerNode.coneInnerAngle = l;
      }
      get coneOuterAngle() {
        return this._nativePannerNode.coneOuterAngle;
      }
      set coneOuterAngle(l) {
        this._nativePannerNode.coneOuterAngle = l;
      }
      get coneOuterGain() {
        return this._nativePannerNode.coneOuterGain;
      }
      set coneOuterGain(l) {
        this._nativePannerNode.coneOuterGain = l;
      }
      get distanceModel() {
        return this._nativePannerNode.distanceModel;
      }
      set distanceModel(l) {
        this._nativePannerNode.distanceModel = l;
      }
      get maxDistance() {
        return this._nativePannerNode.maxDistance;
      }
      set maxDistance(l) {
        this._nativePannerNode.maxDistance = l;
      }
      get orientationX() {
        return this._orientationX;
      }
      get orientationY() {
        return this._orientationY;
      }
      get orientationZ() {
        return this._orientationZ;
      }
      get panningModel() {
        return this._nativePannerNode.panningModel;
      }
      set panningModel(l) {
        this._nativePannerNode.panningModel = l;
      }
      get positionX() {
        return this._positionX;
      }
      get positionY() {
        return this._positionY;
      }
      get positionZ() {
        return this._positionZ;
      }
      get refDistance() {
        return this._nativePannerNode.refDistance;
      }
      set refDistance(l) {
        this._nativePannerNode.refDistance = l;
      }
      get rolloffFactor() {
        return this._nativePannerNode.rolloffFactor;
      }
      set rolloffFactor(l) {
        this._nativePannerNode.rolloffFactor = l;
      }
    },
  pS = (t, e, n, r, s, i, o, a, l, u) => () => {
    const c = new WeakMap();
    let h = null;
    const d = async (m, p) => {
      let _ = null,
        w = i(m);
      const f = {
          channelCount: w.channelCount,
          channelCountMode: w.channelCountMode,
          channelInterpretation: w.channelInterpretation
        },
        g = {
          ...f,
          coneInnerAngle: w.coneInnerAngle,
          coneOuterAngle: w.coneOuterAngle,
          coneOuterGain: w.coneOuterGain,
          distanceModel: w.distanceModel,
          maxDistance: w.maxDistance,
          panningModel: w.panningModel,
          refDistance: w.refDistance,
          rolloffFactor: w.rolloffFactor
        },
        y = He(w, p);
      if ('bufferSize' in w) _ = r(p, { ...f, gain: 1 });
      else if (!y) {
        const T = {
          ...g,
          orientationX: w.orientationX.value,
          orientationY: w.orientationY.value,
          orientationZ: w.orientationZ.value,
          positionX: w.positionX.value,
          positionY: w.positionY.value,
          positionZ: w.positionZ.value
        };
        w = s(p, T);
      }
      if ((c.set(p, _ === null ? w : _), _ !== null)) {
        if (h === null) {
          if (o === null)
            throw new Error(
              'Missing the native OfflineAudioContext constructor.'
            );
          const E = new o(6, m.context.length, p.sampleRate),
            A = e(E, {
              channelCount: 1,
              channelCountMode: 'explicit',
              channelInterpretation: 'speakers',
              numberOfInputs: 6
            });
          A.connect(E.destination),
            (h = (async () => {
              const R = await Promise.all(
                [
                  m.orientationX,
                  m.orientationY,
                  m.orientationZ,
                  m.positionX,
                  m.positionY,
                  m.positionZ
                ].map(async (F, B) => {
                  const j = n(E, {
                    channelCount: 1,
                    channelCountMode: 'explicit',
                    channelInterpretation: 'discrete',
                    offset: B === 0 ? 1 : 0
                  });
                  return await a(E, F, j.offset), j;
                })
              );
              for (let F = 0; F < 6; F += 1)
                R[F].connect(A, 0, F), R[F].start(0);
              return u(E);
            })());
        }
        const T = await h,
          v = r(p, { ...f, gain: 1 });
        await l(m, p, v);
        const k = [];
        for (let E = 0; E < T.numberOfChannels; E += 1)
          k.push(T.getChannelData(E));
        let C = [k[0][0], k[1][0], k[2][0]],
          S = [k[3][0], k[4][0], k[5][0]],
          N = r(p, { ...f, gain: 1 }),
          x = s(p, {
            ...g,
            orientationX: C[0],
            orientationY: C[1],
            orientationZ: C[2],
            positionX: S[0],
            positionY: S[1],
            positionZ: S[2]
          });
        v.connect(N).connect(x.inputs[0]), x.connect(_);
        for (let E = 128; E < T.length; E += 128) {
          const A = [k[0][E], k[1][E], k[2][E]],
            R = [k[3][E], k[4][E], k[5][E]];
          if (A.some((F, B) => F !== C[B]) || R.some((F, B) => F !== S[B])) {
            (C = A), (S = R);
            const F = E / p.sampleRate;
            N.gain.setValueAtTime(0, F),
              (N = r(p, { ...f, gain: 0 })),
              (x = s(p, {
                ...g,
                orientationX: C[0],
                orientationY: C[1],
                orientationZ: C[2],
                positionX: S[0],
                positionY: S[1],
                positionZ: S[2]
              })),
              N.gain.setValueAtTime(1, F),
              v.connect(N).connect(x.inputs[0]),
              x.connect(_);
          }
        }
        return _;
      }
      return (
        y
          ? (await t(p, m.orientationX, w.orientationX),
            await t(p, m.orientationY, w.orientationY),
            await t(p, m.orientationZ, w.orientationZ),
            await t(p, m.positionX, w.positionX),
            await t(p, m.positionY, w.positionY),
            await t(p, m.positionZ, w.positionZ))
          : (await a(p, m.orientationX, w.orientationX),
            await a(p, m.orientationY, w.orientationY),
            await a(p, m.orientationZ, w.orientationZ),
            await a(p, m.positionX, w.positionX),
            await a(p, m.positionY, w.positionY),
            await a(p, m.positionZ, w.positionZ)),
        ys(w) ? await l(m, p, w.inputs[0]) : await l(m, p, w),
        w
      );
    };
    return {
      render(m, p) {
        const _ = c.get(p);
        return _ !== void 0 ? Promise.resolve(_) : d(m, p);
      }
    };
  },
  mS = { disableNormalization: !1 },
  gS = (t, e, n, r) =>
    class Qm {
      constructor(i, o) {
        const a = e(i),
          l = r({ ...mS, ...o }),
          u = t(a, l);
        return n.add(u), u;
      }
      static [Symbol.hasInstance](i) {
        return (
          (i !== null &&
            typeof i == 'object' &&
            Object.getPrototypeOf(i) === Qm.prototype) ||
          n.has(i)
        );
      }
    },
  yS = (t, e) => (n, r, s) => (t(r).replay(s), e(r, n, s)),
  _S = (t, e, n) => async (r, s, i) => {
    const o = t(r);
    await Promise.all(
      o.activeInputs
        .map((a, l) =>
          Array.from(a).map(async ([u, c]) => {
            const d = await e(u).render(u, s),
              m = r.context.destination;
            !n(u) && (r !== m || !n(r)) && d.connect(i, c, l);
          })
        )
        .reduce((a, l) => [...a, ...l], [])
    );
  },
  vS = (t, e, n) => async (r, s, i) => {
    const o = e(r);
    await Promise.all(
      Array.from(o.activeInputs).map(async ([a, l]) => {
        const c = await t(a).render(a, s);
        n(a) || c.connect(i, l);
      })
    );
  },
  wS = (t, e, n, r) => (s) =>
    t(di, () => di(s))
      ? Promise.resolve(t(r, r)).then((i) => {
          if (!i) {
            const o = n(s, 512, 0, 1);
            (s.oncomplete = () => {
              (o.onaudioprocess = null), o.disconnect();
            }),
              (o.onaudioprocess = () => s.currentTime),
              o.connect(s.destination);
          }
          return s.startRendering();
        })
      : new Promise((i) => {
          const o = e(s, {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            gain: 0
          });
          (s.oncomplete = (a) => {
            o.disconnect(), i(a.renderedBuffer);
          }),
            o.connect(s.destination),
            s.startRendering();
        }),
  SS = (t) => (e, n) => {
    t.set(e, n);
  },
  TS = (t) => (e, n) => t.set(e, n),
  kS = (t, e, n, r, s, i, o, a) => (l, u) =>
    n(l)
      .render(l, u)
      .then(() => Promise.all(Array.from(r(u)).map((c) => n(c).render(c, u))))
      .then(() => s(u))
      .then(
        (c) => (
          typeof c.copyFromChannel != 'function'
            ? (o(c), Bc(c))
            : e(i, () => i(c)) || a(c),
          t.add(c),
          c
        )
      ),
  CS = {
    channelCount: 2,
    channelCountMode: 'explicit',
    channelInterpretation: 'speakers',
    pan: 0
  },
  xS = (t, e, n, r, s, i) =>
    class extends t {
      constructor(a, l) {
        const u = s(a),
          c = { ...CS, ...l },
          h = n(u, c),
          d = i(u),
          m = d ? r() : null;
        super(a, !1, h, m), (this._pan = e(this, d, h.pan));
      }
      get pan() {
        return this._pan;
      }
    },
  NS = (t, e, n, r, s) => () => {
    const i = new WeakMap(),
      o = async (a, l) => {
        let u = n(a);
        const c = He(u, l);
        if (!c) {
          const h = {
            channelCount: u.channelCount,
            channelCountMode: u.channelCountMode,
            channelInterpretation: u.channelInterpretation,
            pan: u.pan.value
          };
          u = e(l, h);
        }
        return (
          i.set(l, u),
          c ? await t(l, a.pan, u.pan) : await r(l, a.pan, u.pan),
          ys(u) ? await s(a, l, u.inputs[0]) : await s(a, l, u),
          u
        );
      };
    return {
      render(a, l) {
        const u = i.get(l);
        return u !== void 0 ? Promise.resolve(u) : o(a, l);
      }
    };
  },
  ES = (t) => () => {
    if (t === null) return !1;
    try {
      new t({ length: 1, sampleRate: 44100 });
    } catch {
      return !1;
    }
    return !0;
  },
  AS = (t, e) => async () => {
    if (t === null) return !0;
    if (e === null) return !1;
    const n = new Blob(
        [
          'class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'
        ],
        { type: 'application/javascript; charset=utf-8' }
      ),
      r = new e(1, 128, 44100),
      s = URL.createObjectURL(n);
    let i = !1,
      o = !1;
    try {
      await r.audioWorklet.addModule(s);
      const a = new t(r, 'a', { numberOfOutputs: 0 }),
        l = r.createOscillator();
      (a.port.onmessage = () => (i = !0)),
        (a.onprocessorerror = () => (o = !0)),
        l.connect(a),
        l.start(0),
        await r.startRendering(),
        await new Promise((u) => setTimeout(u));
    } catch {
    } finally {
      URL.revokeObjectURL(s);
    }
    return i && !o;
  },
  OS = (t, e) => () => {
    if (e === null) return Promise.resolve(!1);
    const n = new e(1, 1, 44100),
      r = t(n, {
        channelCount: 1,
        channelCountMode: 'explicit',
        channelInterpretation: 'discrete',
        gain: 0
      });
    return new Promise((s) => {
      (n.oncomplete = () => {
        r.disconnect(), s(n.currentTime !== 0);
      }),
        n.startRendering();
    });
  },
  MS = () => new DOMException('', 'UnknownError'),
  IS = {
    channelCount: 2,
    channelCountMode: 'max',
    channelInterpretation: 'speakers',
    curve: null,
    oversample: 'none'
  },
  DS = (t, e, n, r, s, i, o) =>
    class extends t {
      constructor(l, u) {
        const c = s(l),
          h = { ...IS, ...u },
          d = n(c, h),
          p = i(c) ? r() : null;
        super(l, !0, d, p),
          (this._isCurveNullified = !1),
          (this._nativeWaveShaperNode = d),
          o(this, 1);
      }
      get curve() {
        return this._isCurveNullified ? null : this._nativeWaveShaperNode.curve;
      }
      set curve(l) {
        if (l === null)
          (this._isCurveNullified = !0),
            (this._nativeWaveShaperNode.curve = new Float32Array([0, 0]));
        else {
          if (l.length < 2) throw e();
          (this._isCurveNullified = !1), (this._nativeWaveShaperNode.curve = l);
        }
      }
      get oversample() {
        return this._nativeWaveShaperNode.oversample;
      }
      set oversample(l) {
        this._nativeWaveShaperNode.oversample = l;
      }
    },
  PS = (t, e, n) => () => {
    const r = new WeakMap(),
      s = async (i, o) => {
        let a = e(i);
        if (!He(a, o)) {
          const u = {
            channelCount: a.channelCount,
            channelCountMode: a.channelCountMode,
            channelInterpretation: a.channelInterpretation,
            curve: a.curve,
            oversample: a.oversample
          };
          a = t(o, u);
        }
        return (
          r.set(o, a), ys(a) ? await n(i, o, a.inputs[0]) : await n(i, o, a), a
        );
      };
    return {
      render(i, o) {
        const a = r.get(o);
        return a !== void 0 ? Promise.resolve(a) : s(i, o);
      }
    };
  },
  RS = () => (typeof window > 'u' ? null : window),
  FS = (t, e) => (n) => {
    (n.copyFromChannel = (r, s, i = 0) => {
      const o = t(i),
        a = t(s);
      if (a >= n.numberOfChannels) throw e();
      const l = n.length,
        u = n.getChannelData(a),
        c = r.length;
      for (let h = o < 0 ? -o : 0; h + o < l && h < c; h += 1) r[h] = u[h + o];
    }),
      (n.copyToChannel = (r, s, i = 0) => {
        const o = t(i),
          a = t(s);
        if (a >= n.numberOfChannels) throw e();
        const l = n.length,
          u = n.getChannelData(a),
          c = r.length;
        for (let h = o < 0 ? -o : 0; h + o < l && h < c; h += 1)
          u[h + o] = r[h];
      });
  },
  bS = (t) => (e) => {
    (e.copyFromChannel = (
      (n) =>
      (r, s, i = 0) => {
        const o = t(i),
          a = t(s);
        if (o < e.length) return n.call(e, r, a, o);
      }
    )(e.copyFromChannel)),
      (e.copyToChannel = (
        (n) =>
        (r, s, i = 0) => {
          const o = t(i),
            a = t(s);
          if (o < e.length) return n.call(e, r, a, o);
        }
      )(e.copyToChannel));
  },
  LS = (t) => (e, n) => {
    const r = n.createBuffer(1, 1, 44100);
    e.buffer === null && (e.buffer = r),
      t(
        e,
        'buffer',
        (s) => () => {
          const i = s.call(e);
          return i === r ? null : i;
        },
        (s) => (i) => s.call(e, i === null ? r : i)
      );
  },
  VS = (t, e) => (n, r) => {
    (r.channelCount = 1),
      (r.channelCountMode = 'explicit'),
      Object.defineProperty(r, 'channelCount', {
        get: () => 1,
        set: () => {
          throw t();
        }
      }),
      Object.defineProperty(r, 'channelCountMode', {
        get: () => 'explicit',
        set: () => {
          throw t();
        }
      });
    const s = n.createBufferSource();
    e(
      r,
      () => {
        const a = r.numberOfInputs;
        for (let l = 0; l < a; l += 1) s.connect(r, 0, l);
      },
      () => s.disconnect(r)
    );
  },
  Xm = (t, e, n) =>
    t.copyFromChannel === void 0
      ? t.getChannelData(n)[0]
      : (t.copyFromChannel(e, n), e[0]),
  Ym = (t) => {
    if (t === null) return !1;
    const e = t.length;
    return e % 2 !== 0
      ? t[Math.floor(e / 2)] !== 0
      : t[e / 2 - 1] + t[e / 2] !== 0;
  },
  Bi = (t, e, n, r) => {
    let s = t;
    for (; !s.hasOwnProperty(e); ) s = Object.getPrototypeOf(s);
    const { get: i, set: o } = Object.getOwnPropertyDescriptor(s, e);
    Object.defineProperty(t, e, { get: n(i), set: r(o) });
  },
  jS = (t) => ({
    ...t,
    outputChannelCount:
      t.outputChannelCount !== void 0
        ? t.outputChannelCount
        : t.numberOfInputs === 1 && t.numberOfOutputs === 1
          ? [t.channelCount]
          : Array.from({ length: t.numberOfOutputs }, () => 1)
  }),
  zS = (t) => ({ ...t, channelCount: t.numberOfOutputs }),
  WS = (t) => {
    const { imag: e, real: n } = t;
    return e === void 0
      ? n === void 0
        ? { ...t, imag: [0, 0], real: [0, 0] }
        : { ...t, imag: Array.from(n, () => 0), real: n }
      : n === void 0
        ? { ...t, imag: e, real: Array.from(e, () => 0) }
        : { ...t, imag: e, real: n };
  },
  Zm = (t, e, n) => {
    try {
      t.setValueAtTime(e, n);
    } catch (r) {
      if (r.code !== 9) throw r;
      Zm(t, e, n + 1e-7);
    }
  },
  BS = (t) => {
    const e = t.createBufferSource();
    e.start();
    try {
      e.start();
    } catch {
      return !0;
    }
    return !1;
  },
  US = (t) => {
    const e = t.createBufferSource(),
      n = t.createBuffer(1, 1, 44100);
    e.buffer = n;
    try {
      e.start(0, 1);
    } catch {
      return !1;
    }
    return !0;
  },
  qS = (t) => {
    const e = t.createBufferSource();
    e.start();
    try {
      e.stop();
    } catch {
      return !1;
    }
    return !0;
  },
  Gc = (t) => {
    const e = t.createOscillator();
    try {
      e.start(-1);
    } catch (n) {
      return n instanceof RangeError;
    }
    return !1;
  },
  Jm = (t) => {
    const e = t.createBuffer(1, 1, 44100),
      n = t.createBufferSource();
    (n.buffer = e), n.start(), n.stop();
    try {
      return n.stop(), !0;
    } catch {
      return !1;
    }
  },
  Kc = (t) => {
    const e = t.createOscillator();
    try {
      e.stop(-1);
    } catch (n) {
      return n instanceof RangeError;
    }
    return !1;
  },
  $S = (t) => {
    const { port1: e, port2: n } = new MessageChannel();
    try {
      e.postMessage(t);
    } finally {
      e.close(), n.close();
    }
  },
  HS = (t) => {
    t.start = (
      (e) =>
      (n = 0, r = 0, s) => {
        const i = t.buffer,
          o = i === null ? r : Math.min(i.duration, r);
        i !== null && o > i.duration - 0.5 / t.context.sampleRate
          ? e.call(t, n, 0, 0)
          : e.call(t, n, o, s);
      }
    )(t.start);
  },
  eg = (t, e) => {
    const n = e.createGain();
    t.connect(n);
    const r = ((s) => () => {
      s.call(t, n), t.removeEventListener('ended', r);
    })(t.disconnect);
    t.addEventListener('ended', r),
      _s(t, n),
      (t.stop = ((s) => {
        let i = !1;
        return (o = 0) => {
          if (i)
            try {
              s.call(t, o);
            } catch {
              n.gain.setValueAtTime(0, o);
            }
          else s.call(t, o), (i = !0);
        };
      })(t.stop));
  },
  vs = (t, e) => (n) => {
    const r = { value: t };
    return (
      Object.defineProperties(n, { currentTarget: r, target: r }),
      typeof e == 'function' ? e.call(t, n) : e.handleEvent.call(t, n)
    );
  },
  GS = f0(Er),
  KS = v0(Er),
  QS = I1(Wa),
  tg = new WeakMap(),
  XS = Q1(tg),
  Bt = a1(new Map(), new WeakMap()),
  Xt = RS(),
  ng = xw(Bt, Zt),
  Qc = K1(Qe),
  We = _S(Qe, Qc, yr),
  YS = C0(ng, le, We),
  ie = Z1(za),
  vn = Zw(Xt),
  te = mw(vn),
  rg = new WeakMap(),
  sg = W1(vs),
  Ui = Ow(Xt),
  Xc = hw(Ui),
  Yc = dw(Xt),
  ig = fw(Xt),
  fi = Iw(Xt),
  Ce = Q0(
    p0(Dm),
    _0(GS, KS, ia, QS, oa, Qe, XS, bi, le, Er, cn, yr, Ao),
    Bt,
    ow(Ou, oa, Qe, le, hi, cn),
    Zt,
    Ba,
    et,
    E1(ia, Ou, Qe, le, hi, ie, cn, te),
    R1(rg, Qe, Wt),
    sg,
    ie,
    Xc,
    Yc,
    ig,
    te,
    fi
  ),
  ZS = k0(Ce, YS, Zt, ng, ie, te),
  Zc = new WeakSet(),
  qd = Nw(Xt),
  og = w1(new Uint32Array(1)),
  Jc = FS(og, Zt),
  eh = bS(og),
  JS = N0(Zc, Bt, et, qd, vn, ES(qd), Jc, eh),
  Ua = w0(ut),
  ag = vS(Qc, Vi, yr),
  Jt = p1(ag),
  ws = Aw(Ua, Bt, BS, US, qS, Gc, Jm, Kc, HS, LS(Bi), eg),
  en = yS(X1(Vi), ag),
  eT = O0(Jt, ws, le, en, We),
  Ut = X0(m0(Pm), rg, Wc, Y0, a0, l0, u0, c0, h0, Nu, Mm, Ui, Zm),
  tT = A0(Ce, eT, Ut, be, ws, ie, te, vs),
  nT = V0(Ce, j0, Zt, be, Mw(ut, Bi), ie, te, We),
  rT = o1(Jt, Gm, le, en, We),
  Ar = TS(tg),
  sT = i1(Ce, Ut, rT, Ba, Gm, ie, te, Ar),
  Yn = kw(Er, Yc),
  iT = VS(be, Yn),
  Zn = Vw(Ui, iT),
  oT = c1(Zn, le, We),
  aT = u1(Ce, oT, Zn, ie, te),
  lT = f1(zi, le, We),
  uT = d1(Ce, lT, zi, ie, te, zS),
  cT = Ww(Ua, ws, ut, Yn),
  Ss = zw(Ua, Bt, cT, Gc, Kc),
  hT = v1(Jt, Ss, le, en, We),
  dT = _1(Ce, Ut, hT, Ss, ie, te, vs),
  lg = Bw(et, Bi),
  fT = k1(lg, le, We),
  pT = T1(Ce, fT, lg, ie, te, Ar),
  mT = M1(Jt, Km, le, en, We),
  gT = O1(Ce, Ut, mT, Km, ie, te, Ar),
  ug = Uw(et),
  yT = V1(Jt, ug, le, en, We),
  _T = L1(Ce, Ut, yT, ug, et, ie, te, Ar),
  vT = H1(Jt, ut, le, en, We),
  wT = $1(Ce, Ut, vT, ut, ie, te),
  ST = Gw(Ba, be, Wi, et),
  qa = wS(Bt, ut, Wi, OS(ut, vn)),
  TT = iw(ws, le, vn, We, qa),
  kT = qw(ST),
  CT = rw(Ce, kT, TT, ie, te, Ar),
  xT = z0(Ut, Zn, Ss, Wi, et, Xm, te, Bi),
  cg = new WeakMap(),
  NT = Tw(nT, xT, sg, te, cg, vs),
  hg = Jw(Ua, Bt, Gc, Jm, Kc, eg),
  ET = hS(Jt, hg, le, en, We),
  AT = cS(Ce, Ut, hg, ET, ie, te, vs),
  dg = g1(ws),
  OT = oS(dg, be, ut, Ym, Yn),
  $a = iS(dg, be, OT, Ym, Yn, Ui, Bi),
  MT = tS(ia, be, Zn, ut, Wi, $a, et, oa, Xm, Yn),
  fg = eS(MT),
  IT = pS(Jt, Zn, Ss, ut, fg, le, vn, en, We, qa),
  DT = fS(Ce, Ut, fg, IT, ie, te, Ar),
  PT = nS(Zt),
  RT = gS(PT, ie, new WeakSet(), WS),
  FT = sS(Zn, zi, ut, $a, et, Yn),
  pg = rS(FT, et),
  bT = NS(Jt, pg, le, en, We),
  LT = xS(Ce, Ut, pg, bT, ie, te),
  VT = PS($a, le, We),
  jT = DS(Ce, be, $a, VT, ie, te, Ar),
  mg = gw(Xt),
  th = B1(Xt),
  gg = new WeakMap(),
  zT = J1(gg, vn),
  WT = mg
    ? y0(
        Bt,
        et,
        z1(Xt),
        th,
        U1(d0),
        ie,
        zT,
        te,
        fi,
        new WeakMap(),
        new WeakMap(),
        AS(fi, vn),
        Xt
      )
    : void 0,
  BT = pw(Xc, te),
  UT = N1(Zc, Bt, x1, j1, new WeakSet(), ie, BT, ra, di, Jc, eh),
  yg = r1(
    WT,
    ZS,
    JS,
    tT,
    sT,
    aT,
    uT,
    dT,
    pT,
    UT,
    gT,
    _T,
    wT,
    CT,
    NT,
    AT,
    DT,
    RT,
    LT,
    jT
  ),
  qT = yw(Ce, Kw, ie, te),
  $T = vw(Ce, Qw, ie, te),
  HT = ww(Ce, Xw, ie, te),
  GT = Yw(be, te),
  KT = Sw(Ce, GT, ie),
  QT = L0(yg, be, et, MS, qT, $T, HT, KT, Ui),
  nh = ew(cg),
  XT = S0(nh),
  _g = m1(Zt),
  YT = D1(nh),
  vg = F1(Zt),
  wg = new WeakMap(),
  ZT = G1(wg, Wt),
  JT = Lw(_g, Zt, be, Zn, zi, Ss, ut, Wi, et, vg, th, ZT, Yn),
  ek = Pw(be, JT, ut, et, Yn),
  tk = n1(Jt, _g, ws, Zn, zi, Ss, ut, YT, vg, th, le, fi, vn, en, We, qa),
  nk = Y1(gg),
  rk = SS(wg),
  $d = mg ? J0(XT, Ce, Ut, tk, ek, Qe, nk, ie, te, fi, jS, rk, $S, vs) : void 0,
  sk = C1(et, vn),
  ik = kS(Zc, Bt, Qc, nh, qa, ra, Jc, eh),
  ok = lS(yg, Bt, be, sk, ik),
  ak = aw(za, Xc),
  lk = lw(zc, Yc),
  uk = uw(Wc, ig),
  ck = cw(za, te);
function H(t, e) {
  if (!t) throw new Error(e);
}
function $n(t, e, n = 1 / 0) {
  if (!(e <= t && t <= n))
    throw new RangeError(`Value must be within [${e}, ${n}], got: ${t}`);
}
function Sg(t) {
  !t.isOffline &&
    t.state !== 'running' &&
    kg(
      'The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.'
    );
}
let Tg = console;
function hk(...t) {
  Tg.log(...t);
}
function kg(...t) {
  Tg.warn(...t);
}
function Nt(t) {
  return typeof t > 'u';
}
function K(t) {
  return !Nt(t);
}
function dk(t) {
  return typeof t == 'function';
}
function _r(t) {
  return typeof t == 'number';
}
function cr(t) {
  return (
    Object.prototype.toString.call(t) === '[object Object]' &&
    t.constructor === Object
  );
}
function fk(t) {
  return typeof t == 'boolean';
}
function jt(t) {
  return Array.isArray(t);
}
function Yt(t) {
  return typeof t == 'string';
}
function ho(t) {
  return Yt(t) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(t);
}
function pk(t) {
  return new QT(t);
}
function mk(t, e, n) {
  return new ok(t, e, n);
}
const hr = typeof self == 'object' ? self : null,
  gk =
    hr &&
    (hr.hasOwnProperty('AudioContext') ||
      hr.hasOwnProperty('webkitAudioContext'));
function yk(t, e, n) {
  return (
    H(K($d), 'This node only works in a secure context (https or localhost)'),
    new $d(t, e, n)
  );
}
function qt(t, e, n, r) {
  var s = arguments.length,
    i =
      s < 3 ? e : r === null ? (r = Object.getOwnPropertyDescriptor(e, n)) : r,
    o;
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(t, e, n, r);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (o = t[a]) && (i = (s < 3 ? o(i) : s > 3 ? o(e, n, i) : o(e, n)) || i);
  return s > 3 && i && Object.defineProperty(e, n, i), i;
}
function Ee(t, e, n, r) {
  function s(i) {
    return i instanceof n
      ? i
      : new n(function (o) {
          o(i);
        });
  }
  return new (n || (n = Promise))(function (i, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (h) {
        o(h);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (h) {
        o(h);
      }
    }
    function u(c) {
      c.done ? i(c.value) : s(c.value).then(a, l);
    }
    u((r = r.apply(t, e || [])).next());
  });
}
class _k {
  constructor(e, n, r) {
    (this._callback = e),
      (this._type = n),
      (this._updateInterval = r),
      this._createClock();
  }
  _createWorker() {
    const e = new Blob(
        [
          `
			// the initial timeout time
			let timeoutTime =  ${(this._updateInterval * 1e3).toFixed(1)};
			// onmessage callback
			self.onmessage = function(msg){
				timeoutTime = parseInt(msg.data);
			};
			// the tick function which posts a message
			// and schedules a new tick
			function tick(){
				setTimeout(tick, timeoutTime);
				self.postMessage('tick');
			}
			// call tick initially
			tick();
			`
        ],
        { type: 'text/javascript' }
      ),
      n = URL.createObjectURL(e),
      r = new Worker(n);
    (r.onmessage = this._callback.bind(this)), (this._worker = r);
  }
  _createTimeout() {
    this._timeout = setTimeout(() => {
      this._createTimeout(), this._callback();
    }, this._updateInterval * 1e3);
  }
  _createClock() {
    if (this._type === 'worker')
      try {
        this._createWorker();
      } catch {
        (this._type = 'timeout'), this._createClock();
      }
    else this._type === 'timeout' && this._createTimeout();
  }
  _disposeClock() {
    this._timeout && (clearTimeout(this._timeout), (this._timeout = 0)),
      this._worker &&
        (this._worker.terminate(), (this._worker.onmessage = null));
  }
  get updateInterval() {
    return this._updateInterval;
  }
  set updateInterval(e) {
    (this._updateInterval = Math.max(e, 128 / 44100)),
      this._type === 'worker' && this._worker.postMessage(Math.max(e * 1e3, 1));
  }
  get type() {
    return this._type;
  }
  set type(e) {
    this._disposeClock(), (this._type = e), this._createClock();
  }
  dispose() {
    this._disposeClock();
  }
}
function vr(t) {
  return uk(t);
}
function zn(t) {
  return lk(t);
}
function Oo(t) {
  return ck(t);
}
function Pr(t) {
  return ak(t);
}
function Cg(t) {
  return t instanceof AudioBuffer;
}
function vk(t, e) {
  return t === 'value' || vr(e) || zn(e) || Cg(e);
}
function Jr(t, ...e) {
  if (!e.length) return t;
  const n = e.shift();
  if (cr(t) && cr(n))
    for (const r in n)
      vk(r, n[r])
        ? (t[r] = n[r])
        : cr(n[r])
          ? (t[r] || Object.assign(t, { [r]: {} }), Jr(t[r], n[r]))
          : Object.assign(t, { [r]: n[r] });
  return Jr(t, ...e);
}
function wk(t, e) {
  return t.length === e.length && t.every((n, r) => e[r] === n);
}
function P(t, e, n = [], r) {
  const s = {},
    i = Array.from(e);
  if (
    (cr(i[0]) &&
      r &&
      !Reflect.has(i[0], r) &&
      (Object.keys(i[0]).some((a) => Reflect.has(t, a)) ||
        (Jr(s, { [r]: i[0] }), n.splice(n.indexOf(r), 1), i.shift())),
    i.length === 1 && cr(i[0]))
  )
    Jr(s, i[0]);
  else for (let o = 0; o < n.length; o++) K(i[o]) && (s[n[o]] = i[o]);
  return Jr(t, s);
}
function Sk(t) {
  return t.constructor.getDefaults();
}
function es(t, e) {
  return Nt(t) ? e : t;
}
function Hd(t, e) {
  return (
    e.forEach((n) => {
      Reflect.has(t, n) && delete t[n];
    }),
    t
  );
}
/**
 * Tone.js
 * @author Yotam Mann
 * @license http://opensource.org/licenses/MIT MIT License
 * @copyright 2014-2019 Yotam Mann
 */ class wn {
  constructor() {
    (this.debug = !1), (this._wasDisposed = !1);
  }
  static getDefaults() {
    return {};
  }
  log(...e) {
    (this.debug || (hr && this.toString() === hr.TONE_DEBUG_CLASS)) &&
      hk(this, ...e);
  }
  dispose() {
    return (this._wasDisposed = !0), this;
  }
  get disposed() {
    return this._wasDisposed;
  }
  toString() {
    return this.name;
  }
}
wn.version = Om;
const rh = 1e-6;
function ca(t, e) {
  return t > e + rh;
}
function Ru(t, e) {
  return ca(t, e) || Pt(t, e);
}
function xg(t, e) {
  return t + rh < e;
}
function Pt(t, e) {
  return Math.abs(t - e) < rh;
}
function Tk(t, e, n) {
  return Math.max(Math.min(t, n), e);
}
class tn extends wn {
  constructor() {
    super(), (this.name = 'Timeline'), (this._timeline = []);
    const e = P(tn.getDefaults(), arguments, ['memory']);
    (this.memory = e.memory), (this.increasing = e.increasing);
  }
  static getDefaults() {
    return { memory: 1 / 0, increasing: !1 };
  }
  get length() {
    return this._timeline.length;
  }
  add(e) {
    if (
      (H(Reflect.has(e, 'time'), 'Timeline: events must have a time attribute'),
      (e.time = e.time.valueOf()),
      this.increasing && this.length)
    ) {
      const n = this._timeline[this.length - 1];
      H(
        Ru(e.time, n.time),
        'The time must be greater than or equal to the last scheduled time'
      ),
        this._timeline.push(e);
    } else {
      const n = this._search(e.time);
      this._timeline.splice(n + 1, 0, e);
    }
    if (this.length > this.memory) {
      const n = this.length - this.memory;
      this._timeline.splice(0, n);
    }
    return this;
  }
  remove(e) {
    const n = this._timeline.indexOf(e);
    return n !== -1 && this._timeline.splice(n, 1), this;
  }
  get(e, n = 'time') {
    const r = this._search(e, n);
    return r !== -1 ? this._timeline[r] : null;
  }
  peek() {
    return this._timeline[0];
  }
  shift() {
    return this._timeline.shift();
  }
  getAfter(e, n = 'time') {
    const r = this._search(e, n);
    return r + 1 < this._timeline.length ? this._timeline[r + 1] : null;
  }
  getBefore(e) {
    const n = this._timeline.length;
    if (n > 0 && this._timeline[n - 1].time < e) return this._timeline[n - 1];
    const r = this._search(e);
    return r - 1 >= 0 ? this._timeline[r - 1] : null;
  }
  cancel(e) {
    if (this._timeline.length > 1) {
      let n = this._search(e);
      if (n >= 0)
        if (Pt(this._timeline[n].time, e)) {
          for (let r = n; r >= 0 && Pt(this._timeline[r].time, e); r--) n = r;
          this._timeline = this._timeline.slice(0, n);
        } else this._timeline = this._timeline.slice(0, n + 1);
      else this._timeline = [];
    } else
      this._timeline.length === 1 &&
        Ru(this._timeline[0].time, e) &&
        (this._timeline = []);
    return this;
  }
  cancelBefore(e) {
    const n = this._search(e);
    return n >= 0 && (this._timeline = this._timeline.slice(n + 1)), this;
  }
  previousEvent(e) {
    const n = this._timeline.indexOf(e);
    return n > 0 ? this._timeline[n - 1] : null;
  }
  _search(e, n = 'time') {
    if (this._timeline.length === 0) return -1;
    let r = 0;
    const s = this._timeline.length;
    let i = s;
    if (s > 0 && this._timeline[s - 1][n] <= e) return s - 1;
    for (; r < i; ) {
      let o = Math.floor(r + (i - r) / 2);
      const a = this._timeline[o],
        l = this._timeline[o + 1];
      if (Pt(a[n], e)) {
        for (let u = o; u < this._timeline.length; u++) {
          const c = this._timeline[u];
          if (Pt(c[n], e)) o = u;
          else break;
        }
        return o;
      } else {
        if (xg(a[n], e) && ca(l[n], e)) return o;
        ca(a[n], e) ? (i = o) : (r = o + 1);
      }
    }
    return -1;
  }
  _iterate(e, n = 0, r = this._timeline.length - 1) {
    this._timeline.slice(n, r + 1).forEach(e);
  }
  forEach(e) {
    return this._iterate(e), this;
  }
  forEachBefore(e, n) {
    const r = this._search(e);
    return r !== -1 && this._iterate(n, 0, r), this;
  }
  forEachAfter(e, n) {
    const r = this._search(e);
    return this._iterate(n, r + 1), this;
  }
  forEachBetween(e, n, r) {
    let s = this._search(e),
      i = this._search(n);
    return (
      s !== -1 && i !== -1
        ? (this._timeline[s].time !== e && (s += 1),
          this._timeline[i].time === n && (i -= 1),
          this._iterate(r, s, i))
        : s === -1 && this._iterate(r, 0, i),
      this
    );
  }
  forEachFrom(e, n) {
    let r = this._search(e);
    for (; r >= 0 && this._timeline[r].time >= e; ) r--;
    return this._iterate(n, r + 1), this;
  }
  forEachAtTime(e, n) {
    const r = this._search(e);
    if (r !== -1 && Pt(this._timeline[r].time, e)) {
      let s = r;
      for (let i = r; i >= 0 && Pt(this._timeline[i].time, e); i--) s = i;
      this._iterate(
        (i) => {
          n(i);
        },
        s,
        r
      );
    }
    return this;
  }
  dispose() {
    return super.dispose(), (this._timeline = []), this;
  }
}
const Ng = [];
function Ha(t) {
  Ng.push(t);
}
function kk(t) {
  Ng.forEach((e) => e(t));
}
const Eg = [];
function Ga(t) {
  Eg.push(t);
}
function Ck(t) {
  Eg.forEach((e) => e(t));
}
class qi extends wn {
  constructor() {
    super(...arguments), (this.name = 'Emitter');
  }
  on(e, n) {
    return (
      e.split(/\W+/).forEach((s) => {
        Nt(this._events) && (this._events = {}),
          this._events.hasOwnProperty(s) || (this._events[s] = []),
          this._events[s].push(n);
      }),
      this
    );
  }
  once(e, n) {
    const r = (...s) => {
      n(...s), this.off(e, r);
    };
    return this.on(e, r), this;
  }
  off(e, n) {
    return (
      e.split(/\W+/).forEach((s) => {
        if (
          (Nt(this._events) && (this._events = {}),
          this._events.hasOwnProperty(e))
        )
          if (Nt(n)) this._events[e] = [];
          else {
            const i = this._events[e];
            for (let o = i.length - 1; o >= 0; o--)
              i[o] === n && i.splice(o, 1);
          }
      }),
      this
    );
  }
  emit(e, ...n) {
    if (this._events && this._events.hasOwnProperty(e)) {
      const r = this._events[e].slice(0);
      for (let s = 0, i = r.length; s < i; s++) r[s].apply(this, n);
    }
    return this;
  }
  static mixin(e) {
    ['on', 'once', 'off', 'emit'].forEach((n) => {
      const r = Object.getOwnPropertyDescriptor(qi.prototype, n);
      Object.defineProperty(e.prototype, n, r);
    });
  }
  dispose() {
    return super.dispose(), (this._events = void 0), this;
  }
}
class Ag extends qi {
  constructor() {
    super(...arguments), (this.isOffline = !1);
  }
  toJSON() {
    return {};
  }
}
class $i extends Ag {
  constructor() {
    super(),
      (this.name = 'Context'),
      (this._constants = new Map()),
      (this._timeouts = new tn()),
      (this._timeoutIds = 0),
      (this._initialized = !1),
      (this.isOffline = !1),
      (this._workletModules = new Map());
    const e = P($i.getDefaults(), arguments, ['context']);
    e.context
      ? (this._context = e.context)
      : (this._context = pk({ latencyHint: e.latencyHint })),
      (this._ticker = new _k(
        this.emit.bind(this, 'tick'),
        e.clockSource,
        e.updateInterval
      )),
      this.on('tick', this._timeoutLoop.bind(this)),
      (this._context.onstatechange = () => {
        this.emit('statechange', this.state);
      }),
      this._setLatencyHint(e.latencyHint),
      (this.lookAhead = e.lookAhead);
  }
  static getDefaults() {
    return {
      clockSource: 'worker',
      latencyHint: 'interactive',
      lookAhead: 0.1,
      updateInterval: 0.05
    };
  }
  initialize() {
    return this._initialized || (kk(this), (this._initialized = !0)), this;
  }
  createAnalyser() {
    return this._context.createAnalyser();
  }
  createOscillator() {
    return this._context.createOscillator();
  }
  createBufferSource() {
    return this._context.createBufferSource();
  }
  createBiquadFilter() {
    return this._context.createBiquadFilter();
  }
  createBuffer(e, n, r) {
    return this._context.createBuffer(e, n, r);
  }
  createChannelMerger(e) {
    return this._context.createChannelMerger(e);
  }
  createChannelSplitter(e) {
    return this._context.createChannelSplitter(e);
  }
  createConstantSource() {
    return this._context.createConstantSource();
  }
  createConvolver() {
    return this._context.createConvolver();
  }
  createDelay(e) {
    return this._context.createDelay(e);
  }
  createDynamicsCompressor() {
    return this._context.createDynamicsCompressor();
  }
  createGain() {
    return this._context.createGain();
  }
  createIIRFilter(e, n) {
    return this._context.createIIRFilter(e, n);
  }
  createPanner() {
    return this._context.createPanner();
  }
  createPeriodicWave(e, n, r) {
    return this._context.createPeriodicWave(e, n, r);
  }
  createStereoPanner() {
    return this._context.createStereoPanner();
  }
  createWaveShaper() {
    return this._context.createWaveShaper();
  }
  createMediaStreamSource(e) {
    return (
      H(Pr(this._context), 'Not available if OfflineAudioContext'),
      this._context.createMediaStreamSource(e)
    );
  }
  createMediaElementSource(e) {
    return (
      H(Pr(this._context), 'Not available if OfflineAudioContext'),
      this._context.createMediaElementSource(e)
    );
  }
  createMediaStreamDestination() {
    return (
      H(Pr(this._context), 'Not available if OfflineAudioContext'),
      this._context.createMediaStreamDestination()
    );
  }
  decodeAudioData(e) {
    return this._context.decodeAudioData(e);
  }
  get currentTime() {
    return this._context.currentTime;
  }
  get state() {
    return this._context.state;
  }
  get sampleRate() {
    return this._context.sampleRate;
  }
  get listener() {
    return this.initialize(), this._listener;
  }
  set listener(e) {
    H(!this._initialized, 'The listener cannot be set after initialization.'),
      (this._listener = e);
  }
  get transport() {
    return this.initialize(), this._transport;
  }
  set transport(e) {
    H(!this._initialized, 'The transport cannot be set after initialization.'),
      (this._transport = e);
  }
  get draw() {
    return this.initialize(), this._draw;
  }
  set draw(e) {
    H(!this._initialized, 'Draw cannot be set after initialization.'),
      (this._draw = e);
  }
  get destination() {
    return this.initialize(), this._destination;
  }
  set destination(e) {
    H(
      !this._initialized,
      'The destination cannot be set after initialization.'
    ),
      (this._destination = e);
  }
  createAudioWorkletNode(e, n) {
    return yk(this.rawContext, e, n);
  }
  addAudioWorkletModule(e, n) {
    return Ee(this, void 0, void 0, function* () {
      H(
        K(this.rawContext.audioWorklet),
        'AudioWorkletNode is only available in a secure context (https or localhost)'
      ),
        this._workletModules.has(n) ||
          this._workletModules.set(
            n,
            this.rawContext.audioWorklet.addModule(e)
          ),
        yield this._workletModules.get(n);
    });
  }
  workletsAreReady() {
    return Ee(this, void 0, void 0, function* () {
      const e = [];
      this._workletModules.forEach((n) => e.push(n)), yield Promise.all(e);
    });
  }
  get updateInterval() {
    return this._ticker.updateInterval;
  }
  set updateInterval(e) {
    this._ticker.updateInterval = e;
  }
  get clockSource() {
    return this._ticker.type;
  }
  set clockSource(e) {
    this._ticker.type = e;
  }
  get latencyHint() {
    return this._latencyHint;
  }
  _setLatencyHint(e) {
    let n = 0;
    if (((this._latencyHint = e), Yt(e)))
      switch (e) {
        case 'interactive':
          n = 0.1;
          break;
        case 'playback':
          n = 0.5;
          break;
        case 'balanced':
          n = 0.25;
          break;
      }
    (this.lookAhead = n), (this.updateInterval = n / 2);
  }
  get rawContext() {
    return this._context;
  }
  now() {
    return this._context.currentTime + this.lookAhead;
  }
  immediate() {
    return this._context.currentTime;
  }
  resume() {
    return Pr(this._context) ? this._context.resume() : Promise.resolve();
  }
  close() {
    return Ee(this, void 0, void 0, function* () {
      Pr(this._context) && (yield this._context.close()),
        this._initialized && Ck(this);
    });
  }
  getConstant(e) {
    if (this._constants.has(e)) return this._constants.get(e);
    {
      const n = this._context.createBuffer(1, 128, this._context.sampleRate),
        r = n.getChannelData(0);
      for (let i = 0; i < r.length; i++) r[i] = e;
      const s = this._context.createBufferSource();
      return (
        (s.channelCount = 1),
        (s.channelCountMode = 'explicit'),
        (s.buffer = n),
        (s.loop = !0),
        s.start(0),
        this._constants.set(e, s),
        s
      );
    }
  }
  dispose() {
    return (
      super.dispose(),
      this._ticker.dispose(),
      this._timeouts.dispose(),
      Object.keys(this._constants).map((e) => this._constants[e].disconnect()),
      this
    );
  }
  _timeoutLoop() {
    const e = this.now();
    let n = this._timeouts.peek();
    for (; this._timeouts.length && n && n.time <= e; )
      n.callback(), this._timeouts.shift(), (n = this._timeouts.peek());
  }
  setTimeout(e, n) {
    this._timeoutIds++;
    const r = this.now();
    return (
      this._timeouts.add({ callback: e, id: this._timeoutIds, time: r + n }),
      this._timeoutIds
    );
  }
  clearTimeout(e) {
    return (
      this._timeouts.forEach((n) => {
        n.id === e && this._timeouts.remove(n);
      }),
      this
    );
  }
  clearInterval(e) {
    return this.clearTimeout(e);
  }
  setInterval(e, n) {
    const r = ++this._timeoutIds,
      s = () => {
        const i = this.now();
        this._timeouts.add({
          callback: () => {
            e(), s();
          },
          id: r,
          time: i + n
        });
      };
    return s(), r;
  }
}
class xk extends Ag {
  constructor() {
    super(...arguments),
      (this.lookAhead = 0),
      (this.latencyHint = 0),
      (this.isOffline = !1);
  }
  createAnalyser() {
    return {};
  }
  createOscillator() {
    return {};
  }
  createBufferSource() {
    return {};
  }
  createBiquadFilter() {
    return {};
  }
  createBuffer(e, n, r) {
    return {};
  }
  createChannelMerger(e) {
    return {};
  }
  createChannelSplitter(e) {
    return {};
  }
  createConstantSource() {
    return {};
  }
  createConvolver() {
    return {};
  }
  createDelay(e) {
    return {};
  }
  createDynamicsCompressor() {
    return {};
  }
  createGain() {
    return {};
  }
  createIIRFilter(e, n) {
    return {};
  }
  createPanner() {
    return {};
  }
  createPeriodicWave(e, n, r) {
    return {};
  }
  createStereoPanner() {
    return {};
  }
  createWaveShaper() {
    return {};
  }
  createMediaStreamSource(e) {
    return {};
  }
  createMediaElementSource(e) {
    return {};
  }
  createMediaStreamDestination() {
    return {};
  }
  decodeAudioData(e) {
    return Promise.resolve({});
  }
  createAudioWorkletNode(e, n) {
    return {};
  }
  get rawContext() {
    return {};
  }
  addAudioWorkletModule(e, n) {
    return Ee(this, void 0, void 0, function* () {
      return Promise.resolve();
    });
  }
  resume() {
    return Promise.resolve();
  }
  setTimeout(e, n) {
    return 0;
  }
  clearTimeout(e) {
    return this;
  }
  setInterval(e, n) {
    return 0;
  }
  clearInterval(e) {
    return this;
  }
  getConstant(e) {
    return {};
  }
  get currentTime() {
    return 0;
  }
  get state() {
    return {};
  }
  get sampleRate() {
    return 0;
  }
  get listener() {
    return {};
  }
  get transport() {
    return {};
  }
  get draw() {
    return {};
  }
  set draw(e) {}
  get destination() {
    return {};
  }
  set destination(e) {}
  now() {
    return 0;
  }
  immediate() {
    return 0;
  }
}
function ve(t, e) {
  jt(e)
    ? e.forEach((n) => ve(t, n))
    : Object.defineProperty(t, e, { enumerable: !0, writable: !1 });
}
function Og(t, e) {
  jt(e)
    ? e.forEach((n) => Og(t, n))
    : Object.defineProperty(t, e, { writable: !0 });
}
const ne = () => {};
class re extends wn {
  constructor() {
    super(), (this.name = 'ToneAudioBuffer'), (this.onload = ne);
    const e = P(re.getDefaults(), arguments, ['url', 'onload', 'onerror']);
    (this.reverse = e.reverse),
      (this.onload = e.onload),
      (e.url && Cg(e.url)) || e.url instanceof re
        ? this.set(e.url)
        : Yt(e.url) && this.load(e.url).catch(e.onerror);
  }
  static getDefaults() {
    return { onerror: ne, onload: ne, reverse: !1 };
  }
  get sampleRate() {
    return this._buffer ? this._buffer.sampleRate : Ft().sampleRate;
  }
  set(e) {
    return (
      e instanceof re
        ? e.loaded
          ? (this._buffer = e.get())
          : (e.onload = () => {
              this.set(e), this.onload(this);
            })
        : (this._buffer = e),
      this._reversed && this._reverse(),
      this
    );
  }
  get() {
    return this._buffer;
  }
  load(e) {
    return Ee(this, void 0, void 0, function* () {
      const n = re.load(e).then((r) => {
        this.set(r), this.onload(this);
      });
      re.downloads.push(n);
      try {
        yield n;
      } finally {
        const r = re.downloads.indexOf(n);
        re.downloads.splice(r, 1);
      }
      return this;
    });
  }
  dispose() {
    return super.dispose(), (this._buffer = void 0), this;
  }
  fromArray(e) {
    const n = jt(e) && e[0].length > 0,
      r = n ? e.length : 1,
      s = n ? e[0].length : e.length,
      i = Ft(),
      o = i.createBuffer(r, s, i.sampleRate),
      a = !n && r === 1 ? [e] : e;
    for (let l = 0; l < r; l++) o.copyToChannel(a[l], l);
    return (this._buffer = o), this;
  }
  toMono(e) {
    if (_r(e)) this.fromArray(this.toArray(e));
    else {
      let n = new Float32Array(this.length);
      const r = this.numberOfChannels;
      for (let s = 0; s < r; s++) {
        const i = this.toArray(s);
        for (let o = 0; o < i.length; o++) n[o] += i[o];
      }
      (n = n.map((s) => s / r)), this.fromArray(n);
    }
    return this;
  }
  toArray(e) {
    if (_r(e)) return this.getChannelData(e);
    if (this.numberOfChannels === 1) return this.toArray(0);
    {
      const n = [];
      for (let r = 0; r < this.numberOfChannels; r++)
        n[r] = this.getChannelData(r);
      return n;
    }
  }
  getChannelData(e) {
    return this._buffer ? this._buffer.getChannelData(e) : new Float32Array(0);
  }
  slice(e, n = this.duration) {
    const r = Math.floor(e * this.sampleRate),
      s = Math.floor(n * this.sampleRate);
    H(r < s, 'The start time must be less than the end time');
    const i = s - r,
      o = Ft().createBuffer(this.numberOfChannels, i, this.sampleRate);
    for (let a = 0; a < this.numberOfChannels; a++)
      o.copyToChannel(this.getChannelData(a).subarray(r, s), a);
    return new re(o);
  }
  _reverse() {
    if (this.loaded)
      for (let e = 0; e < this.numberOfChannels; e++)
        this.getChannelData(e).reverse();
    return this;
  }
  get loaded() {
    return this.length > 0;
  }
  get duration() {
    return this._buffer ? this._buffer.duration : 0;
  }
  get length() {
    return this._buffer ? this._buffer.length : 0;
  }
  get numberOfChannels() {
    return this._buffer ? this._buffer.numberOfChannels : 0;
  }
  get reverse() {
    return this._reversed;
  }
  set reverse(e) {
    this._reversed !== e && ((this._reversed = e), this._reverse());
  }
  static fromArray(e) {
    return new re().fromArray(e);
  }
  static fromUrl(e) {
    return Ee(this, void 0, void 0, function* () {
      return yield new re().load(e);
    });
  }
  static load(e) {
    return Ee(this, void 0, void 0, function* () {
      const n = e.match(/\[([^\]\[]+\|.+)\]$/);
      if (n) {
        const a = n[1].split('|');
        let l = a[0];
        for (const u of a)
          if (re.supportsType(u)) {
            l = u;
            break;
          }
        e = e.replace(n[0], l);
      }
      const r =
          re.baseUrl === '' || re.baseUrl.endsWith('/')
            ? re.baseUrl
            : re.baseUrl + '/',
        s = yield fetch(r + e);
      if (!s.ok) throw new Error(`could not load url: ${e}`);
      const i = yield s.arrayBuffer();
      return yield Ft().decodeAudioData(i);
    });
  }
  static supportsType(e) {
    const n = e.split('.'),
      r = n[n.length - 1];
    return document.createElement('audio').canPlayType('audio/' + r) !== '';
  }
  static loaded() {
    return Ee(this, void 0, void 0, function* () {
      for (yield Promise.resolve(); re.downloads.length; )
        yield re.downloads[0];
    });
  }
}
re.baseUrl = '';
re.downloads = [];
class sh extends $i {
  constructor() {
    super({
      clockSource: 'offline',
      context: Oo(arguments[0])
        ? arguments[0]
        : mk(arguments[0], arguments[1] * arguments[2], arguments[2]),
      lookAhead: 0,
      updateInterval: Oo(arguments[0])
        ? 128 / arguments[0].sampleRate
        : 128 / arguments[2]
    }),
      (this.name = 'OfflineContext'),
      (this._currentTime = 0),
      (this.isOffline = !0),
      (this._duration = Oo(arguments[0])
        ? arguments[0].length / arguments[0].sampleRate
        : arguments[1]);
  }
  now() {
    return this._currentTime;
  }
  get currentTime() {
    return this._currentTime;
  }
  _renderClock(e) {
    return Ee(this, void 0, void 0, function* () {
      let n = 0;
      for (; this._duration - this._currentTime >= 0; ) {
        this.emit('tick'), (this._currentTime += 128 / this.sampleRate), n++;
        const r = Math.floor(this.sampleRate / 128);
        e && n % r === 0 && (yield new Promise((s) => setTimeout(s, 1)));
      }
    });
  }
  render(e = !0) {
    return Ee(this, void 0, void 0, function* () {
      yield this.workletsAreReady(), yield this._renderClock(e);
      const n = yield this._context.startRendering();
      return new re(n);
    });
  }
  close() {
    return Promise.resolve();
  }
}
const Mg = new xk();
let Hs = Mg;
function Ft() {
  return Hs === Mg && gk && Nk(new $i()), Hs;
}
function Nk(t) {
  Pr(t) ? (Hs = new $i(t)) : Oo(t) ? (Hs = new sh(t)) : (Hs = t);
}
if (hr && !hr.TONE_SILENCE_LOGGING) {
  const e = ` * Tone.js v${Om} * `;
  console.log(`%c${e}`, 'background: #000; color: #fff');
}
function Ek(t) {
  return Math.pow(10, t / 20);
}
function Ak(t) {
  return 20 * (Math.log(t) / Math.LN10);
}
function Ig(t) {
  return Math.pow(2, t / 12);
}
let Ka = 440;
function Ok() {
  return Ka;
}
function Mk(t) {
  Ka = t;
}
function Fu(t) {
  return Math.round(Dg(t));
}
function Dg(t) {
  return 69 + 12 * Math.log2(t / Ka);
}
function Ik(t) {
  return Ka * Math.pow(2, (t - 69) / 12);
}
class ih extends wn {
  constructor(e, n, r) {
    super(),
      (this.defaultUnits = 's'),
      (this._val = n),
      (this._units = r),
      (this.context = e),
      (this._expressions = this._getExpressions());
  }
  _getExpressions() {
    return {
      hz: {
        method: (e) => this._frequencyToUnits(parseFloat(e)),
        regexp: /^(\d+(?:\.\d+)?)hz$/i
      },
      i: {
        method: (e) => this._ticksToUnits(parseInt(e, 10)),
        regexp: /^(\d+)i$/i
      },
      m: {
        method: (e) =>
          this._beatsToUnits(parseInt(e, 10) * this._getTimeSignature()),
        regexp: /^(\d+)m$/i
      },
      n: {
        method: (e, n) => {
          const r = parseInt(e, 10),
            s = n === '.' ? 1.5 : 1;
          return r === 1
            ? this._beatsToUnits(this._getTimeSignature()) * s
            : this._beatsToUnits(4 / r) * s;
        },
        regexp: /^(\d+)n(\.?)$/i
      },
      number: {
        method: (e) =>
          this._expressions[this.defaultUnits].method.call(this, e),
        regexp: /^(\d+(?:\.\d+)?)$/
      },
      s: {
        method: (e) => this._secondsToUnits(parseFloat(e)),
        regexp: /^(\d+(?:\.\d+)?)s$/
      },
      samples: {
        method: (e) => parseInt(e, 10) / this.context.sampleRate,
        regexp: /^(\d+)samples$/
      },
      t: {
        method: (e) => {
          const n = parseInt(e, 10);
          return this._beatsToUnits(8 / (Math.floor(n) * 3));
        },
        regexp: /^(\d+)t$/i
      },
      tr: {
        method: (e, n, r) => {
          let s = 0;
          return (
            e &&
              e !== '0' &&
              (s += this._beatsToUnits(
                this._getTimeSignature() * parseFloat(e)
              )),
            n && n !== '0' && (s += this._beatsToUnits(parseFloat(n))),
            r && r !== '0' && (s += this._beatsToUnits(parseFloat(r) / 4)),
            s
          );
        },
        regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/
      }
    };
  }
  valueOf() {
    if ((this._val instanceof ih && this.fromType(this._val), Nt(this._val)))
      return this._noArg();
    if (Yt(this._val) && Nt(this._units)) {
      for (const e in this._expressions)
        if (this._expressions[e].regexp.test(this._val.trim())) {
          this._units = e;
          break;
        }
    } else if (cr(this._val)) {
      let e = 0;
      for (const n in this._val)
        if (K(this._val[n])) {
          const r = this._val[n],
            s = new this.constructor(this.context, n).valueOf() * r;
          e += s;
        }
      return e;
    }
    if (K(this._units)) {
      const e = this._expressions[this._units],
        n = this._val.toString().trim().match(e.regexp);
      return n
        ? e.method.apply(this, n.slice(1))
        : e.method.call(this, this._val);
    } else return Yt(this._val) ? parseFloat(this._val) : this._val;
  }
  _frequencyToUnits(e) {
    return 1 / e;
  }
  _beatsToUnits(e) {
    return (60 / this._getBpm()) * e;
  }
  _secondsToUnits(e) {
    return e;
  }
  _ticksToUnits(e) {
    return (e * this._beatsToUnits(1)) / this._getPPQ();
  }
  _noArg() {
    return this._now();
  }
  _getBpm() {
    return this.context.transport.bpm.value;
  }
  _getTimeSignature() {
    return this.context.transport.timeSignature;
  }
  _getPPQ() {
    return this.context.transport.PPQ;
  }
  fromType(e) {
    switch (((this._units = void 0), this.defaultUnits)) {
      case 's':
        this._val = e.toSeconds();
        break;
      case 'i':
        this._val = e.toTicks();
        break;
      case 'hz':
        this._val = e.toFrequency();
        break;
      case 'midi':
        this._val = e.toMidi();
        break;
    }
    return this;
  }
  toFrequency() {
    return 1 / this.toSeconds();
  }
  toSamples() {
    return this.toSeconds() * this.context.sampleRate;
  }
  toMilliseconds() {
    return this.toSeconds() * 1e3;
  }
}
class bt extends ih {
  constructor() {
    super(...arguments), (this.name = 'TimeClass');
  }
  _getExpressions() {
    return Object.assign(super._getExpressions(), {
      now: {
        method: (e) =>
          this._now() + new this.constructor(this.context, e).valueOf(),
        regexp: /^\+(.+)/
      },
      quantize: {
        method: (e) => {
          const n = new bt(this.context, e).valueOf();
          return this._secondsToUnits(
            this.context.transport.nextSubdivision(n)
          );
        },
        regexp: /^@(.+)/
      }
    });
  }
  quantize(e, n = 1) {
    const r = new this.constructor(this.context, e).valueOf(),
      s = this.valueOf(),
      a = Math.round(s / r) * r - s;
    return s + a * n;
  }
  toNotation() {
    const e = this.toSeconds(),
      n = ['1m'];
    for (let i = 1; i < 9; i++) {
      const o = Math.pow(2, i);
      n.push(o + 'n.'), n.push(o + 'n'), n.push(o + 't');
    }
    n.push('0');
    let r = n[0],
      s = new bt(this.context, n[0]).toSeconds();
    return (
      n.forEach((i) => {
        const o = new bt(this.context, i).toSeconds();
        Math.abs(o - e) < Math.abs(s - e) && ((r = i), (s = o));
      }),
      r
    );
  }
  toBarsBeatsSixteenths() {
    const e = this._beatsToUnits(1);
    let n = this.valueOf() / e;
    n = parseFloat(n.toFixed(4));
    const r = Math.floor(n / this._getTimeSignature());
    let s = (n % 1) * 4;
    n = Math.floor(n) % this._getTimeSignature();
    const i = s.toString();
    return (
      i.length > 3 && (s = parseFloat(parseFloat(i).toFixed(3))),
      [r, n, s].join(':')
    );
  }
  toTicks() {
    const e = this._beatsToUnits(1),
      n = this.valueOf() / e;
    return Math.round(n * this._getPPQ());
  }
  toSeconds() {
    return this.valueOf();
  }
  toMidi() {
    return Fu(this.toFrequency());
  }
  _now() {
    return this.context.now();
  }
}
class Ct extends bt {
  constructor() {
    super(...arguments), (this.name = 'Frequency'), (this.defaultUnits = 'hz');
  }
  static get A4() {
    return Ok();
  }
  static set A4(e) {
    Mk(e);
  }
  _getExpressions() {
    return Object.assign({}, super._getExpressions(), {
      midi: {
        regexp: /^(\d+(?:\.\d+)?midi)/,
        method(e) {
          return this.defaultUnits === 'midi' ? e : Ct.mtof(e);
        }
      },
      note: {
        regexp: /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,
        method(e, n) {
          const s = Dk[e.toLowerCase()] + (parseInt(n, 10) + 1) * 12;
          return this.defaultUnits === 'midi' ? s : Ct.mtof(s);
        }
      },
      tr: {
        regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
        method(e, n, r) {
          let s = 1;
          return (
            e &&
              e !== '0' &&
              (s *= this._beatsToUnits(
                this._getTimeSignature() * parseFloat(e)
              )),
            n && n !== '0' && (s *= this._beatsToUnits(parseFloat(n))),
            r && r !== '0' && (s *= this._beatsToUnits(parseFloat(r) / 4)),
            s
          );
        }
      }
    });
  }
  transpose(e) {
    return new Ct(this.context, this.valueOf() * Ig(e));
  }
  harmonize(e) {
    return e.map((n) => this.transpose(n));
  }
  toMidi() {
    return Fu(this.valueOf());
  }
  toNote() {
    const e = this.toFrequency(),
      n = Math.log2(e / Ct.A4);
    let r = Math.round(12 * n) + 57;
    const s = Math.floor(r / 12);
    return s < 0 && (r += -12 * s), Pk[r % 12] + s.toString();
  }
  toSeconds() {
    return 1 / super.toSeconds();
  }
  toTicks() {
    const e = this._beatsToUnits(1),
      n = this.valueOf() / e;
    return Math.floor(n * this._getPPQ());
  }
  _noArg() {
    return 0;
  }
  _frequencyToUnits(e) {
    return e;
  }
  _ticksToUnits(e) {
    return 1 / ((e * 60) / (this._getBpm() * this._getPPQ()));
  }
  _beatsToUnits(e) {
    return 1 / super._beatsToUnits(e);
  }
  _secondsToUnits(e) {
    return 1 / e;
  }
  static mtof(e) {
    return Ik(e);
  }
  static ftom(e) {
    return Fu(e);
  }
}
const Dk = {
    cbb: -2,
    cb: -1,
    c: 0,
    'c#': 1,
    cx: 2,
    dbb: 0,
    db: 1,
    d: 2,
    'd#': 3,
    dx: 4,
    ebb: 2,
    eb: 3,
    e: 4,
    'e#': 5,
    ex: 6,
    fbb: 3,
    fb: 4,
    f: 5,
    'f#': 6,
    fx: 7,
    gbb: 5,
    gb: 6,
    g: 7,
    'g#': 8,
    gx: 9,
    abb: 7,
    ab: 8,
    a: 9,
    'a#': 10,
    ax: 11,
    bbb: 9,
    bb: 10,
    b: 11,
    'b#': 12,
    bx: 13
  },
  Pk = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
class Gs extends bt {
  constructor() {
    super(...arguments), (this.name = 'TransportTime');
  }
  _now() {
    return this.context.transport.seconds;
  }
}
class at extends wn {
  constructor() {
    super();
    const e = P(at.getDefaults(), arguments, ['context']);
    this.defaultContext
      ? (this.context = this.defaultContext)
      : (this.context = e.context);
  }
  static getDefaults() {
    return { context: Ft() };
  }
  now() {
    return this.context.currentTime + this.context.lookAhead;
  }
  immediate() {
    return this.context.currentTime;
  }
  get sampleTime() {
    return 1 / this.context.sampleRate;
  }
  get blockTime() {
    return 128 / this.context.sampleRate;
  }
  toSeconds(e) {
    return new bt(this.context, e).toSeconds();
  }
  toFrequency(e) {
    return new Ct(this.context, e).toFrequency();
  }
  toTicks(e) {
    return new Gs(this.context, e).toTicks();
  }
  _getPartialProperties(e) {
    const n = this.get();
    return (
      Object.keys(n).forEach((r) => {
        Nt(e[r]) && delete n[r];
      }),
      n
    );
  }
  get() {
    const e = Sk(this);
    return (
      Object.keys(e).forEach((n) => {
        if (Reflect.has(this, n)) {
          const r = this[n];
          K(r) && K(r.value) && K(r.setValueAtTime)
            ? (e[n] = r.value)
            : r instanceof at
              ? (e[n] = r._getPartialProperties(e[n]))
              : jt(r) || _r(r) || Yt(r) || fk(r)
                ? (e[n] = r)
                : delete e[n];
        }
      }),
      e
    );
  }
  set(e) {
    return (
      Object.keys(e).forEach((n) => {
        Reflect.has(this, n) &&
          K(this[n]) &&
          (this[n] && K(this[n].value) && K(this[n].setValueAtTime)
            ? this[n].value !== e[n] && (this[n].value = e[n])
            : this[n] instanceof at
              ? this[n].set(e[n])
              : (this[n] = e[n]));
      }),
      this
    );
  }
}
class oh extends tn {
  constructor(e = 'stopped') {
    super(),
      (this.name = 'StateTimeline'),
      (this._initial = e),
      this.setStateAtTime(this._initial, 0);
  }
  getValueAtTime(e) {
    const n = this.get(e);
    return n !== null ? n.state : this._initial;
  }
  setStateAtTime(e, n, r) {
    return (
      $n(n, 0), this.add(Object.assign({}, r, { state: e, time: n })), this
    );
  }
  getLastState(e, n) {
    const r = this._search(n);
    for (let s = r; s >= 0; s--) {
      const i = this._timeline[s];
      if (i.state === e) return i;
    }
  }
  getNextState(e, n) {
    const r = this._search(n);
    if (r !== -1)
      for (let s = r; s < this._timeline.length; s++) {
        const i = this._timeline[s];
        if (i.state === e) return i;
      }
  }
}
class ue extends at {
  constructor() {
    super(P(ue.getDefaults(), arguments, ['param', 'units', 'convert'])),
      (this.name = 'Param'),
      (this.overridden = !1),
      (this._minOutput = 1e-7);
    const e = P(ue.getDefaults(), arguments, ['param', 'units', 'convert']);
    for (
      H(
        K(e.param) && (vr(e.param) || e.param instanceof ue),
        'param must be an AudioParam'
      );
      !vr(e.param);

    )
      e.param = e.param._param;
    (this._swappable = K(e.swappable) ? e.swappable : !1),
      this._swappable
        ? ((this.input = this.context.createGain()),
          (this._param = e.param),
          this.input.connect(this._param))
        : (this._param = this.input = e.param),
      (this._events = new tn(1e3)),
      (this._initialValue = this._param.defaultValue),
      (this.units = e.units),
      (this.convert = e.convert),
      (this._minValue = e.minValue),
      (this._maxValue = e.maxValue),
      K(e.value) &&
        e.value !== this._toType(this._initialValue) &&
        this.setValueAtTime(e.value, 0);
  }
  static getDefaults() {
    return Object.assign(at.getDefaults(), { convert: !0, units: 'number' });
  }
  get value() {
    const e = this.now();
    return this.getValueAtTime(e);
  }
  set value(e) {
    this.cancelScheduledValues(this.now()), this.setValueAtTime(e, this.now());
  }
  get minValue() {
    return K(this._minValue)
      ? this._minValue
      : this.units === 'time' ||
          this.units === 'frequency' ||
          this.units === 'normalRange' ||
          this.units === 'positive' ||
          this.units === 'transportTime' ||
          this.units === 'ticks' ||
          this.units === 'bpm' ||
          this.units === 'hertz' ||
          this.units === 'samples'
        ? 0
        : this.units === 'audioRange'
          ? -1
          : this.units === 'decibels'
            ? -1 / 0
            : this._param.minValue;
  }
  get maxValue() {
    return K(this._maxValue)
      ? this._maxValue
      : this.units === 'normalRange' || this.units === 'audioRange'
        ? 1
        : this._param.maxValue;
  }
  _is(e, n) {
    return this.units === n;
  }
  _assertRange(e) {
    return (
      K(this.maxValue) &&
        K(this.minValue) &&
        $n(e, this._fromType(this.minValue), this._fromType(this.maxValue)),
      e
    );
  }
  _fromType(e) {
    return this.convert && !this.overridden
      ? this._is(e, 'time')
        ? this.toSeconds(e)
        : this._is(e, 'decibels')
          ? Ek(e)
          : this._is(e, 'frequency')
            ? this.toFrequency(e)
            : e
      : this.overridden
        ? 0
        : e;
  }
  _toType(e) {
    return this.convert && this.units === 'decibels' ? Ak(e) : e;
  }
  setValueAtTime(e, n) {
    const r = this.toSeconds(n),
      s = this._fromType(e);
    return (
      H(
        isFinite(s) && isFinite(r),
        `Invalid argument(s) to setValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(n)}`
      ),
      this._assertRange(s),
      this.log(this.units, 'setValueAtTime', e, r),
      this._events.add({ time: r, type: 'setValueAtTime', value: s }),
      this._param.setValueAtTime(s, r),
      this
    );
  }
  getValueAtTime(e) {
    const n = Math.max(this.toSeconds(e), 0),
      r = this._events.getAfter(n),
      s = this._events.get(n);
    let i = this._initialValue;
    if (s === null) i = this._initialValue;
    else if (
      s.type === 'setTargetAtTime' &&
      (r === null || r.type === 'setValueAtTime')
    ) {
      const o = this._events.getBefore(s.time);
      let a;
      o === null ? (a = this._initialValue) : (a = o.value),
        s.type === 'setTargetAtTime' &&
          (i = this._exponentialApproach(s.time, a, s.value, s.constant, n));
    } else if (r === null) i = s.value;
    else if (
      r.type === 'linearRampToValueAtTime' ||
      r.type === 'exponentialRampToValueAtTime'
    ) {
      let o = s.value;
      if (s.type === 'setTargetAtTime') {
        const a = this._events.getBefore(s.time);
        a === null ? (o = this._initialValue) : (o = a.value);
      }
      r.type === 'linearRampToValueAtTime'
        ? (i = this._linearInterpolate(s.time, o, r.time, r.value, n))
        : (i = this._exponentialInterpolate(s.time, o, r.time, r.value, n));
    } else i = s.value;
    return this._toType(i);
  }
  setRampPoint(e) {
    e = this.toSeconds(e);
    let n = this.getValueAtTime(e);
    return (
      this.cancelAndHoldAtTime(e),
      this._fromType(n) === 0 && (n = this._toType(this._minOutput)),
      this.setValueAtTime(n, e),
      this
    );
  }
  linearRampToValueAtTime(e, n) {
    const r = this._fromType(e),
      s = this.toSeconds(n);
    return (
      H(
        isFinite(r) && isFinite(s),
        `Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(n)}`
      ),
      this._assertRange(r),
      this._events.add({ time: s, type: 'linearRampToValueAtTime', value: r }),
      this.log(this.units, 'linearRampToValueAtTime', e, s),
      this._param.linearRampToValueAtTime(r, s),
      this
    );
  }
  exponentialRampToValueAtTime(e, n) {
    let r = this._fromType(e);
    (r = Pt(r, 0) ? this._minOutput : r), this._assertRange(r);
    const s = this.toSeconds(n);
    return (
      H(
        isFinite(r) && isFinite(s),
        `Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(n)}`
      ),
      this._events.add({
        time: s,
        type: 'exponentialRampToValueAtTime',
        value: r
      }),
      this.log(this.units, 'exponentialRampToValueAtTime', e, s),
      this._param.exponentialRampToValueAtTime(r, s),
      this
    );
  }
  exponentialRampTo(e, n, r) {
    return (
      (r = this.toSeconds(r)),
      this.setRampPoint(r),
      this.exponentialRampToValueAtTime(e, r + this.toSeconds(n)),
      this
    );
  }
  linearRampTo(e, n, r) {
    return (
      (r = this.toSeconds(r)),
      this.setRampPoint(r),
      this.linearRampToValueAtTime(e, r + this.toSeconds(n)),
      this
    );
  }
  targetRampTo(e, n, r) {
    return (
      (r = this.toSeconds(r)),
      this.setRampPoint(r),
      this.exponentialApproachValueAtTime(e, r, n),
      this
    );
  }
  exponentialApproachValueAtTime(e, n, r) {
    (n = this.toSeconds(n)), (r = this.toSeconds(r));
    const s = Math.log(r + 1) / Math.log(200);
    return (
      this.setTargetAtTime(e, n, s),
      this.cancelAndHoldAtTime(n + r * 0.9),
      this.linearRampToValueAtTime(e, n + r),
      this
    );
  }
  setTargetAtTime(e, n, r) {
    const s = this._fromType(e);
    H(isFinite(r) && r > 0, 'timeConstant must be a number greater than 0');
    const i = this.toSeconds(n);
    return (
      this._assertRange(s),
      H(
        isFinite(s) && isFinite(i),
        `Invalid argument(s) to setTargetAtTime: ${JSON.stringify(e)}, ${JSON.stringify(n)}`
      ),
      this._events.add({
        constant: r,
        time: i,
        type: 'setTargetAtTime',
        value: s
      }),
      this.log(this.units, 'setTargetAtTime', e, i, r),
      this._param.setTargetAtTime(s, i, r),
      this
    );
  }
  setValueCurveAtTime(e, n, r, s = 1) {
    (r = this.toSeconds(r)), (n = this.toSeconds(n));
    const i = this._fromType(e[0]) * s;
    this.setValueAtTime(this._toType(i), n);
    const o = r / (e.length - 1);
    for (let a = 1; a < e.length; a++) {
      const l = this._fromType(e[a]) * s;
      this.linearRampToValueAtTime(this._toType(l), n + a * o);
    }
    return this;
  }
  cancelScheduledValues(e) {
    const n = this.toSeconds(e);
    return (
      H(
        isFinite(n),
        `Invalid argument to cancelScheduledValues: ${JSON.stringify(e)}`
      ),
      this._events.cancel(n),
      this._param.cancelScheduledValues(n),
      this.log(this.units, 'cancelScheduledValues', n),
      this
    );
  }
  cancelAndHoldAtTime(e) {
    const n = this.toSeconds(e),
      r = this._fromType(this.getValueAtTime(n));
    H(
      isFinite(n),
      `Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(e)}`
    ),
      this.log(this.units, 'cancelAndHoldAtTime', n, 'value=' + r);
    const s = this._events.get(n),
      i = this._events.getAfter(n);
    return (
      s && Pt(s.time, n)
        ? i
          ? (this._param.cancelScheduledValues(i.time),
            this._events.cancel(i.time))
          : (this._param.cancelAndHoldAtTime(n),
            this._events.cancel(n + this.sampleTime))
        : i &&
          (this._param.cancelScheduledValues(i.time),
          this._events.cancel(i.time),
          i.type === 'linearRampToValueAtTime'
            ? this.linearRampToValueAtTime(this._toType(r), n)
            : i.type === 'exponentialRampToValueAtTime' &&
              this.exponentialRampToValueAtTime(this._toType(r), n)),
      this._events.add({ time: n, type: 'setValueAtTime', value: r }),
      this._param.setValueAtTime(r, n),
      this
    );
  }
  rampTo(e, n = 0.1, r) {
    return (
      this.units === 'frequency' ||
      this.units === 'bpm' ||
      this.units === 'decibels'
        ? this.exponentialRampTo(e, n, r)
        : this.linearRampTo(e, n, r),
      this
    );
  }
  apply(e) {
    const n = this.context.currentTime;
    e.setValueAtTime(this.getValueAtTime(n), n);
    const r = this._events.get(n);
    if (r && r.type === 'setTargetAtTime') {
      const s = this._events.getAfter(r.time),
        i = s ? s.time : n + 2,
        o = (i - n) / 10;
      for (let a = n; a < i; a += o)
        e.linearRampToValueAtTime(this.getValueAtTime(a), a);
    }
    return (
      this._events.forEachAfter(this.context.currentTime, (s) => {
        s.type === 'cancelScheduledValues'
          ? e.cancelScheduledValues(s.time)
          : s.type === 'setTargetAtTime'
            ? e.setTargetAtTime(s.value, s.time, s.constant)
            : e[s.type](s.value, s.time);
      }),
      this
    );
  }
  setParam(e) {
    H(
      this._swappable,
      "The Param must be assigned as 'swappable' in the constructor"
    );
    const n = this.input;
    return (
      n.disconnect(this._param),
      this.apply(e),
      (this._param = e),
      n.connect(this._param),
      this
    );
  }
  dispose() {
    return super.dispose(), this._events.dispose(), this;
  }
  get defaultValue() {
    return this._toType(this._param.defaultValue);
  }
  _exponentialApproach(e, n, r, s, i) {
    return r + (n - r) * Math.exp(-(i - e) / s);
  }
  _linearInterpolate(e, n, r, s, i) {
    return n + (s - n) * ((i - e) / (r - e));
  }
  _exponentialInterpolate(e, n, r, s, i) {
    return n * Math.pow(s / n, (i - e) / (r - e));
  }
}
class G extends at {
  constructor() {
    super(...arguments),
      (this.name = 'ToneAudioNode'),
      (this._internalChannels = []);
  }
  get numberOfInputs() {
    return K(this.input)
      ? vr(this.input) || this.input instanceof ue
        ? 1
        : this.input.numberOfInputs
      : 0;
  }
  get numberOfOutputs() {
    return K(this.output) ? this.output.numberOfOutputs : 0;
  }
  _isAudioNode(e) {
    return K(e) && (e instanceof G || zn(e));
  }
  _getInternalNodes() {
    const e = this._internalChannels.slice(0);
    return (
      this._isAudioNode(this.input) && e.push(this.input),
      this._isAudioNode(this.output) &&
        this.input !== this.output &&
        e.push(this.output),
      e
    );
  }
  _setChannelProperties(e) {
    this._getInternalNodes().forEach((r) => {
      (r.channelCount = e.channelCount),
        (r.channelCountMode = e.channelCountMode),
        (r.channelInterpretation = e.channelInterpretation);
    });
  }
  _getChannelProperties() {
    const e = this._getInternalNodes();
    H(e.length > 0, 'ToneAudioNode does not have any internal nodes');
    const n = e[0];
    return {
      channelCount: n.channelCount,
      channelCountMode: n.channelCountMode,
      channelInterpretation: n.channelInterpretation
    };
  }
  get channelCount() {
    return this._getChannelProperties().channelCount;
  }
  set channelCount(e) {
    const n = this._getChannelProperties();
    this._setChannelProperties(Object.assign(n, { channelCount: e }));
  }
  get channelCountMode() {
    return this._getChannelProperties().channelCountMode;
  }
  set channelCountMode(e) {
    const n = this._getChannelProperties();
    this._setChannelProperties(Object.assign(n, { channelCountMode: e }));
  }
  get channelInterpretation() {
    return this._getChannelProperties().channelInterpretation;
  }
  set channelInterpretation(e) {
    const n = this._getChannelProperties();
    this._setChannelProperties(Object.assign(n, { channelInterpretation: e }));
  }
  connect(e, n = 0, r = 0) {
    return Ts(this, e, n, r), this;
  }
  toDestination() {
    return this.connect(this.context.destination), this;
  }
  toMaster() {
    return (
      kg('toMaster() has been renamed toDestination()'), this.toDestination()
    );
  }
  disconnect(e, n = 0, r = 0) {
    return Rk(this, e, n, r), this;
  }
  chain(...e) {
    return bu(this, ...e), this;
  }
  fan(...e) {
    return e.forEach((n) => this.connect(n)), this;
  }
  dispose() {
    return (
      super.dispose(),
      K(this.input) &&
        (this.input instanceof G
          ? this.input.dispose()
          : zn(this.input) && this.input.disconnect()),
      K(this.output) &&
        (this.output instanceof G
          ? this.output.dispose()
          : zn(this.output) && this.output.disconnect()),
      (this._internalChannels = []),
      this
    );
  }
}
function bu(...t) {
  const e = t.shift();
  t.reduce((n, r) => (n instanceof G ? n.connect(r) : zn(n) && Ts(n, r), r), e);
}
function Ts(t, e, n = 0, r = 0) {
  for (
    H(K(t), 'Cannot connect from undefined node'),
      H(K(e), 'Cannot connect to undefined node'),
      (e instanceof G || zn(e)) &&
        H(e.numberOfInputs > 0, 'Cannot connect to node with no inputs'),
      H(t.numberOfOutputs > 0, 'Cannot connect from node with no outputs');
    e instanceof G || e instanceof ue;

  )
    K(e.input) && (e = e.input);
  for (; t instanceof G; ) K(t.output) && (t = t.output);
  vr(e) ? t.connect(e, n) : t.connect(e, n, r);
}
function Rk(t, e, n = 0, r = 0) {
  if (K(e)) for (; e instanceof G; ) e = e.input;
  for (; !zn(t); ) K(t.output) && (t = t.output);
  vr(e) ? t.disconnect(e, n) : zn(e) ? t.disconnect(e, n, r) : t.disconnect();
}
class Ye extends G {
  constructor() {
    super(P(Ye.getDefaults(), arguments, ['gain', 'units'])),
      (this.name = 'Gain'),
      (this._gainNode = this.context.createGain()),
      (this.input = this._gainNode),
      (this.output = this._gainNode);
    const e = P(Ye.getDefaults(), arguments, ['gain', 'units']);
    (this.gain = new ue({
      context: this.context,
      convert: e.convert,
      param: this._gainNode.gain,
      units: e.units,
      value: e.gain,
      minValue: e.minValue,
      maxValue: e.maxValue
    })),
      ve(this, 'gain');
  }
  static getDefaults() {
    return Object.assign(G.getDefaults(), {
      convert: !0,
      gain: 1,
      units: 'gain'
    });
  }
  dispose() {
    return (
      super.dispose(), this._gainNode.disconnect(), this.gain.dispose(), this
    );
  }
}
class cs extends G {
  constructor(e) {
    super(e),
      (this.onended = ne),
      (this._startTime = -1),
      (this._stopTime = -1),
      (this._timeout = -1),
      (this.output = new Ye({ context: this.context, gain: 0 })),
      (this._gainNode = this.output),
      (this.getStateAtTime = function (n) {
        const r = this.toSeconds(n);
        return this._startTime !== -1 &&
          r >= this._startTime &&
          (this._stopTime === -1 || r <= this._stopTime)
          ? 'started'
          : 'stopped';
      }),
      (this._fadeIn = e.fadeIn),
      (this._fadeOut = e.fadeOut),
      (this._curve = e.curve),
      (this.onended = e.onended);
  }
  static getDefaults() {
    return Object.assign(G.getDefaults(), {
      curve: 'linear',
      fadeIn: 0,
      fadeOut: 0,
      onended: ne
    });
  }
  _startGain(e, n = 1) {
    H(this._startTime === -1, 'Source cannot be started more than once');
    const r = this.toSeconds(this._fadeIn);
    return (
      (this._startTime = e + r),
      (this._startTime = Math.max(this._startTime, this.context.currentTime)),
      r > 0
        ? (this._gainNode.gain.setValueAtTime(0, e),
          this._curve === 'linear'
            ? this._gainNode.gain.linearRampToValueAtTime(n, e + r)
            : this._gainNode.gain.exponentialApproachValueAtTime(n, e, r))
        : this._gainNode.gain.setValueAtTime(n, e),
      this
    );
  }
  stop(e) {
    return this.log('stop', e), this._stopGain(this.toSeconds(e)), this;
  }
  _stopGain(e) {
    H(this._startTime !== -1, "'start' must be called before 'stop'"),
      this.cancelStop();
    const n = this.toSeconds(this._fadeOut);
    return (
      (this._stopTime = this.toSeconds(e) + n),
      (this._stopTime = Math.max(this._stopTime, this.context.currentTime)),
      n > 0
        ? this._curve === 'linear'
          ? this._gainNode.gain.linearRampTo(0, n, e)
          : this._gainNode.gain.targetRampTo(0, n, e)
        : (this._gainNode.gain.cancelAndHoldAtTime(e),
          this._gainNode.gain.setValueAtTime(0, e)),
      this.context.clearTimeout(this._timeout),
      (this._timeout = this.context.setTimeout(() => {
        const r = this._curve === 'exponential' ? n * 2 : 0;
        this._stopSource(this.now() + r), this._onended();
      }, this._stopTime - this.context.currentTime)),
      this
    );
  }
  _onended() {
    if (
      this.onended !== ne &&
      (this.onended(this), (this.onended = ne), !this.context.isOffline)
    ) {
      const e = () => this.dispose();
      typeof window.requestIdleCallback < 'u'
        ? window.requestIdleCallback(e)
        : setTimeout(e, 1e3);
    }
  }
  get state() {
    return this.getStateAtTime(this.now());
  }
  cancelStop() {
    return (
      this.log('cancelStop'),
      H(this._startTime !== -1, 'Source is not started'),
      this._gainNode.gain.cancelScheduledValues(
        this._startTime + this.sampleTime
      ),
      this.context.clearTimeout(this._timeout),
      (this._stopTime = -1),
      this
    );
  }
  dispose() {
    return super.dispose(), this._gainNode.disconnect(), this;
  }
}
class ha extends cs {
  constructor() {
    super(P(ha.getDefaults(), arguments, ['offset'])),
      (this.name = 'ToneConstantSource'),
      (this._source = this.context.createConstantSource());
    const e = P(ha.getDefaults(), arguments, ['offset']);
    Ts(this._source, this._gainNode),
      (this.offset = new ue({
        context: this.context,
        convert: e.convert,
        param: this._source.offset,
        units: e.units,
        value: e.offset,
        minValue: e.minValue,
        maxValue: e.maxValue
      }));
  }
  static getDefaults() {
    return Object.assign(cs.getDefaults(), {
      convert: !0,
      offset: 1,
      units: 'number'
    });
  }
  start(e) {
    const n = this.toSeconds(e);
    return (
      this.log('start', n), this._startGain(n), this._source.start(n), this
    );
  }
  _stopSource(e) {
    this._source.stop(e);
  }
  dispose() {
    return (
      super.dispose(),
      this.state === 'started' && this.stop(),
      this._source.disconnect(),
      this.offset.dispose(),
      this
    );
  }
}
class De extends G {
  constructor() {
    super(P(De.getDefaults(), arguments, ['value', 'units'])),
      (this.name = 'Signal'),
      (this.override = !0);
    const e = P(De.getDefaults(), arguments, ['value', 'units']);
    (this.output = this._constantSource =
      new ha({
        context: this.context,
        convert: e.convert,
        offset: e.value,
        units: e.units,
        minValue: e.minValue,
        maxValue: e.maxValue
      })),
      this._constantSource.start(0),
      (this.input = this._param = this._constantSource.offset);
  }
  static getDefaults() {
    return Object.assign(G.getDefaults(), {
      convert: !0,
      units: 'number',
      value: 0
    });
  }
  connect(e, n = 0, r = 0) {
    return ah(this, e, n, r), this;
  }
  dispose() {
    return (
      super.dispose(),
      this._param.dispose(),
      this._constantSource.dispose(),
      this
    );
  }
  setValueAtTime(e, n) {
    return this._param.setValueAtTime(e, n), this;
  }
  getValueAtTime(e) {
    return this._param.getValueAtTime(e);
  }
  setRampPoint(e) {
    return this._param.setRampPoint(e), this;
  }
  linearRampToValueAtTime(e, n) {
    return this._param.linearRampToValueAtTime(e, n), this;
  }
  exponentialRampToValueAtTime(e, n) {
    return this._param.exponentialRampToValueAtTime(e, n), this;
  }
  exponentialRampTo(e, n, r) {
    return this._param.exponentialRampTo(e, n, r), this;
  }
  linearRampTo(e, n, r) {
    return this._param.linearRampTo(e, n, r), this;
  }
  targetRampTo(e, n, r) {
    return this._param.targetRampTo(e, n, r), this;
  }
  exponentialApproachValueAtTime(e, n, r) {
    return this._param.exponentialApproachValueAtTime(e, n, r), this;
  }
  setTargetAtTime(e, n, r) {
    return this._param.setTargetAtTime(e, n, r), this;
  }
  setValueCurveAtTime(e, n, r, s) {
    return this._param.setValueCurveAtTime(e, n, r, s), this;
  }
  cancelScheduledValues(e) {
    return this._param.cancelScheduledValues(e), this;
  }
  cancelAndHoldAtTime(e) {
    return this._param.cancelAndHoldAtTime(e), this;
  }
  rampTo(e, n, r) {
    return this._param.rampTo(e, n, r), this;
  }
  get value() {
    return this._param.value;
  }
  set value(e) {
    this._param.value = e;
  }
  get convert() {
    return this._param.convert;
  }
  set convert(e) {
    this._param.convert = e;
  }
  get units() {
    return this._param.units;
  }
  get overridden() {
    return this._param.overridden;
  }
  set overridden(e) {
    this._param.overridden = e;
  }
  get maxValue() {
    return this._param.maxValue;
  }
  get minValue() {
    return this._param.minValue;
  }
  apply(e) {
    return this._param.apply(e), this;
  }
}
function ah(t, e, n, r) {
  (e instanceof ue || vr(e) || (e instanceof De && e.override)) &&
    (e.cancelScheduledValues(0),
    e.setValueAtTime(0, 0),
    e instanceof De && (e.overridden = !0)),
    Ts(t, e, n, r);
}
class da extends ue {
  constructor() {
    super(P(da.getDefaults(), arguments, ['value'])),
      (this.name = 'TickParam'),
      (this._events = new tn(1 / 0)),
      (this._multiplier = 1);
    const e = P(da.getDefaults(), arguments, ['value']);
    (this._multiplier = e.multiplier),
      this._events.cancel(0),
      this._events.add({
        ticks: 0,
        time: 0,
        type: 'setValueAtTime',
        value: this._fromType(e.value)
      }),
      this.setValueAtTime(e.value, 0);
  }
  static getDefaults() {
    return Object.assign(ue.getDefaults(), {
      multiplier: 1,
      units: 'hertz',
      value: 1
    });
  }
  setTargetAtTime(e, n, r) {
    (n = this.toSeconds(n)), this.setRampPoint(n);
    const s = this._fromType(e),
      i = this._events.get(n),
      o = Math.round(Math.max(1 / r, 1));
    for (let a = 0; a <= o; a++) {
      const l = r * a + n,
        u = this._exponentialApproach(i.time, i.value, s, r, l);
      this.linearRampToValueAtTime(this._toType(u), l);
    }
    return this;
  }
  setValueAtTime(e, n) {
    const r = this.toSeconds(n);
    super.setValueAtTime(e, n);
    const s = this._events.get(r),
      i = this._events.previousEvent(s),
      o = this._getTicksUntilEvent(i, r);
    return (s.ticks = Math.max(o, 0)), this;
  }
  linearRampToValueAtTime(e, n) {
    const r = this.toSeconds(n);
    super.linearRampToValueAtTime(e, n);
    const s = this._events.get(r),
      i = this._events.previousEvent(s),
      o = this._getTicksUntilEvent(i, r);
    return (s.ticks = Math.max(o, 0)), this;
  }
  exponentialRampToValueAtTime(e, n) {
    n = this.toSeconds(n);
    const r = this._fromType(e),
      s = this._events.get(n),
      i = Math.round(Math.max((n - s.time) * 10, 1)),
      o = (n - s.time) / i;
    for (let a = 0; a <= i; a++) {
      const l = o * a + s.time,
        u = this._exponentialInterpolate(s.time, s.value, n, r, l);
      this.linearRampToValueAtTime(this._toType(u), l);
    }
    return this;
  }
  _getTicksUntilEvent(e, n) {
    if (e === null) e = { ticks: 0, time: 0, type: 'setValueAtTime', value: 0 };
    else if (Nt(e.ticks)) {
      const o = this._events.previousEvent(e);
      e.ticks = this._getTicksUntilEvent(o, e.time);
    }
    const r = this._fromType(this.getValueAtTime(e.time));
    let s = this._fromType(this.getValueAtTime(n));
    const i = this._events.get(n);
    return (
      i &&
        i.time === n &&
        i.type === 'setValueAtTime' &&
        (s = this._fromType(this.getValueAtTime(n - this.sampleTime))),
      0.5 * (n - e.time) * (r + s) + e.ticks
    );
  }
  getTicksAtTime(e) {
    const n = this.toSeconds(e),
      r = this._events.get(n);
    return Math.max(this._getTicksUntilEvent(r, n), 0);
  }
  getDurationOfTicks(e, n) {
    const r = this.toSeconds(n),
      s = this.getTicksAtTime(n);
    return this.getTimeOfTick(s + e) - r;
  }
  getTimeOfTick(e) {
    const n = this._events.get(e, 'ticks'),
      r = this._events.getAfter(e, 'ticks');
    if (n && n.ticks === e) return n.time;
    if (n && r && r.type === 'linearRampToValueAtTime' && n.value !== r.value) {
      const s = this._fromType(this.getValueAtTime(n.time)),
        o =
          (this._fromType(this.getValueAtTime(r.time)) - s) / (r.time - n.time),
        a = Math.sqrt(Math.pow(s, 2) - 2 * o * (n.ticks - e)),
        l = (-s + a) / o,
        u = (-s - a) / o;
      return (l > 0 ? l : u) + n.time;
    } else
      return n
        ? n.value === 0
          ? 1 / 0
          : n.time + (e - n.ticks) / n.value
        : e / this._initialValue;
  }
  ticksToTime(e, n) {
    return this.getDurationOfTicks(e, n);
  }
  timeToTicks(e, n) {
    const r = this.toSeconds(n),
      s = this.toSeconds(e),
      i = this.getTicksAtTime(r);
    return this.getTicksAtTime(r + s) - i;
  }
  _fromType(e) {
    return this.units === 'bpm' && this.multiplier
      ? 1 / (60 / e / this.multiplier)
      : super._fromType(e);
  }
  _toType(e) {
    return this.units === 'bpm' && this.multiplier
      ? (e / this.multiplier) * 60
      : super._toType(e);
  }
  get multiplier() {
    return this._multiplier;
  }
  set multiplier(e) {
    const n = this.value;
    (this._multiplier = e),
      this.cancelScheduledValues(0),
      this.setValueAtTime(n, 0);
  }
}
class fa extends De {
  constructor() {
    super(P(fa.getDefaults(), arguments, ['value'])),
      (this.name = 'TickSignal');
    const e = P(fa.getDefaults(), arguments, ['value']);
    this.input = this._param = new da({
      context: this.context,
      convert: e.convert,
      multiplier: e.multiplier,
      param: this._constantSource.offset,
      units: e.units,
      value: e.value
    });
  }
  static getDefaults() {
    return Object.assign(De.getDefaults(), {
      multiplier: 1,
      units: 'hertz',
      value: 1
    });
  }
  ticksToTime(e, n) {
    return this._param.ticksToTime(e, n);
  }
  timeToTicks(e, n) {
    return this._param.timeToTicks(e, n);
  }
  getTimeOfTick(e) {
    return this._param.getTimeOfTick(e);
  }
  getDurationOfTicks(e, n) {
    return this._param.getDurationOfTicks(e, n);
  }
  getTicksAtTime(e) {
    return this._param.getTicksAtTime(e);
  }
  get multiplier() {
    return this._param.multiplier;
  }
  set multiplier(e) {
    this._param.multiplier = e;
  }
  dispose() {
    return super.dispose(), this._param.dispose(), this;
  }
}
class pa extends at {
  constructor() {
    super(P(pa.getDefaults(), arguments, ['frequency'])),
      (this.name = 'TickSource'),
      (this._state = new oh()),
      (this._tickOffset = new tn());
    const e = P(pa.getDefaults(), arguments, ['frequency']);
    (this.frequency = new fa({
      context: this.context,
      units: e.units,
      value: e.frequency
    })),
      ve(this, 'frequency'),
      this._state.setStateAtTime('stopped', 0),
      this.setTicksAtTime(0, 0);
  }
  static getDefaults() {
    return Object.assign({ frequency: 1, units: 'hertz' }, at.getDefaults());
  }
  get state() {
    return this.getStateAtTime(this.now());
  }
  start(e, n) {
    const r = this.toSeconds(e);
    return (
      this._state.getValueAtTime(r) !== 'started' &&
        (this._state.setStateAtTime('started', r),
        K(n) && this.setTicksAtTime(n, r)),
      this
    );
  }
  stop(e) {
    const n = this.toSeconds(e);
    if (this._state.getValueAtTime(n) === 'stopped') {
      const r = this._state.get(n);
      r &&
        r.time > 0 &&
        (this._tickOffset.cancel(r.time), this._state.cancel(r.time));
    }
    return (
      this._state.cancel(n),
      this._state.setStateAtTime('stopped', n),
      this.setTicksAtTime(0, n),
      this
    );
  }
  pause(e) {
    const n = this.toSeconds(e);
    return (
      this._state.getValueAtTime(n) === 'started' &&
        this._state.setStateAtTime('paused', n),
      this
    );
  }
  cancel(e) {
    return (
      (e = this.toSeconds(e)),
      this._state.cancel(e),
      this._tickOffset.cancel(e),
      this
    );
  }
  getTicksAtTime(e) {
    const n = this.toSeconds(e),
      r = this._state.getLastState('stopped', n),
      s = { state: 'paused', time: n };
    this._state.add(s);
    let i = r,
      o = 0;
    return (
      this._state.forEachBetween(r.time, n + this.sampleTime, (a) => {
        let l = i.time;
        const u = this._tickOffset.get(a.time);
        u && u.time >= i.time && ((o = u.ticks), (l = u.time)),
          i.state === 'started' &&
            a.state !== 'started' &&
            (o +=
              this.frequency.getTicksAtTime(a.time) -
              this.frequency.getTicksAtTime(l)),
          (i = a);
      }),
      this._state.remove(s),
      o
    );
  }
  get ticks() {
    return this.getTicksAtTime(this.now());
  }
  set ticks(e) {
    this.setTicksAtTime(e, this.now());
  }
  get seconds() {
    return this.getSecondsAtTime(this.now());
  }
  set seconds(e) {
    const n = this.now(),
      r = this.frequency.timeToTicks(e, n);
    this.setTicksAtTime(r, n);
  }
  getSecondsAtTime(e) {
    e = this.toSeconds(e);
    const n = this._state.getLastState('stopped', e),
      r = { state: 'paused', time: e };
    this._state.add(r);
    let s = n,
      i = 0;
    return (
      this._state.forEachBetween(n.time, e + this.sampleTime, (o) => {
        let a = s.time;
        const l = this._tickOffset.get(o.time);
        l && l.time >= s.time && ((i = l.seconds), (a = l.time)),
          s.state === 'started' && o.state !== 'started' && (i += o.time - a),
          (s = o);
      }),
      this._state.remove(r),
      i
    );
  }
  setTicksAtTime(e, n) {
    return (
      (n = this.toSeconds(n)),
      this._tickOffset.cancel(n),
      this._tickOffset.add({
        seconds: this.frequency.getDurationOfTicks(e, n),
        ticks: e,
        time: n
      }),
      this
    );
  }
  getStateAtTime(e) {
    return (e = this.toSeconds(e)), this._state.getValueAtTime(e);
  }
  getTimeOfTick(e, n = this.now()) {
    const r = this._tickOffset.get(n),
      s = this._state.get(n),
      i = Math.max(r.time, s.time),
      o = this.frequency.getTicksAtTime(i) + e - r.ticks;
    return this.frequency.getTimeOfTick(o);
  }
  forEachTickBetween(e, n, r) {
    let s = this._state.get(e);
    this._state.forEachBetween(e, n, (o) => {
      s &&
        s.state === 'started' &&
        o.state !== 'started' &&
        this.forEachTickBetween(
          Math.max(s.time, e),
          o.time - this.sampleTime,
          r
        ),
        (s = o);
    });
    let i = null;
    if (s && s.state === 'started') {
      const o = Math.max(s.time, e),
        a = this.frequency.getTicksAtTime(o),
        l = this.frequency.getTicksAtTime(s.time),
        u = a - l;
      let c = Math.ceil(u) - u;
      c = Pt(c, 1) ? 0 : c;
      let h = this.frequency.getTimeOfTick(a + c);
      for (; h < n; ) {
        try {
          r(h, Math.round(this.getTicksAtTime(h)));
        } catch (d) {
          i = d;
          break;
        }
        h += this.frequency.getDurationOfTicks(1, h);
      }
    }
    if (i) throw i;
    return this;
  }
  dispose() {
    return (
      super.dispose(),
      this._state.dispose(),
      this._tickOffset.dispose(),
      this.frequency.dispose(),
      this
    );
  }
}
class pi extends at {
  constructor() {
    super(P(pi.getDefaults(), arguments, ['callback', 'frequency'])),
      (this.name = 'Clock'),
      (this.callback = ne),
      (this._lastUpdate = 0),
      (this._state = new oh('stopped')),
      (this._boundLoop = this._loop.bind(this));
    const e = P(pi.getDefaults(), arguments, ['callback', 'frequency']);
    (this.callback = e.callback),
      (this._tickSource = new pa({
        context: this.context,
        frequency: e.frequency,
        units: e.units
      })),
      (this._lastUpdate = 0),
      (this.frequency = this._tickSource.frequency),
      ve(this, 'frequency'),
      this._state.setStateAtTime('stopped', 0),
      this.context.on('tick', this._boundLoop);
  }
  static getDefaults() {
    return Object.assign(at.getDefaults(), {
      callback: ne,
      frequency: 1,
      units: 'hertz'
    });
  }
  get state() {
    return this._state.getValueAtTime(this.now());
  }
  start(e, n) {
    Sg(this.context);
    const r = this.toSeconds(e);
    return (
      this.log('start', r),
      this._state.getValueAtTime(r) !== 'started' &&
        (this._state.setStateAtTime('started', r),
        this._tickSource.start(r, n),
        r < this._lastUpdate && this.emit('start', r, n)),
      this
    );
  }
  stop(e) {
    const n = this.toSeconds(e);
    return (
      this.log('stop', n),
      this._state.cancel(n),
      this._state.setStateAtTime('stopped', n),
      this._tickSource.stop(n),
      n < this._lastUpdate && this.emit('stop', n),
      this
    );
  }
  pause(e) {
    const n = this.toSeconds(e);
    return (
      this._state.getValueAtTime(n) === 'started' &&
        (this._state.setStateAtTime('paused', n),
        this._tickSource.pause(n),
        n < this._lastUpdate && this.emit('pause', n)),
      this
    );
  }
  get ticks() {
    return Math.ceil(this.getTicksAtTime(this.now()));
  }
  set ticks(e) {
    this._tickSource.ticks = e;
  }
  get seconds() {
    return this._tickSource.seconds;
  }
  set seconds(e) {
    this._tickSource.seconds = e;
  }
  getSecondsAtTime(e) {
    return this._tickSource.getSecondsAtTime(e);
  }
  setTicksAtTime(e, n) {
    return this._tickSource.setTicksAtTime(e, n), this;
  }
  getTimeOfTick(e, n = this.now()) {
    return this._tickSource.getTimeOfTick(e, n);
  }
  getTicksAtTime(e) {
    return this._tickSource.getTicksAtTime(e);
  }
  nextTickTime(e, n) {
    const r = this.toSeconds(n),
      s = this.getTicksAtTime(r);
    return this._tickSource.getTimeOfTick(s + e, r);
  }
  _loop() {
    const e = this._lastUpdate,
      n = this.now();
    (this._lastUpdate = n),
      this.log('loop', e, n),
      e !== n &&
        (this._state.forEachBetween(e, n, (r) => {
          switch (r.state) {
            case 'started':
              const s = this._tickSource.getTicksAtTime(r.time);
              this.emit('start', r.time, s);
              break;
            case 'stopped':
              r.time !== 0 && this.emit('stop', r.time);
              break;
            case 'paused':
              this.emit('pause', r.time);
              break;
          }
        }),
        this._tickSource.forEachTickBetween(e, n, (r, s) => {
          this.callback(r, s);
        }));
  }
  getStateAtTime(e) {
    const n = this.toSeconds(e);
    return this._state.getValueAtTime(n);
  }
  dispose() {
    return (
      super.dispose(),
      this.context.off('tick', this._boundLoop),
      this._tickSource.dispose(),
      this._state.dispose(),
      this
    );
  }
}
qi.mixin(pi);
class Qa extends wn {
  constructor() {
    super(),
      (this.name = 'ToneAudioBuffers'),
      (this._buffers = new Map()),
      (this._loadingCount = 0);
    const e = P(
      Qa.getDefaults(),
      arguments,
      ['urls', 'onload', 'baseUrl'],
      'urls'
    );
    (this.baseUrl = e.baseUrl),
      Object.keys(e.urls).forEach((n) => {
        this._loadingCount++;
        const r = e.urls[n];
        this.add(n, r, this._bufferLoaded.bind(this, e.onload), e.onerror);
      });
  }
  static getDefaults() {
    return { baseUrl: '', onerror: ne, onload: ne, urls: {} };
  }
  has(e) {
    return this._buffers.has(e.toString());
  }
  get(e) {
    return (
      H(this.has(e), `ToneAudioBuffers has no buffer named: ${e}`),
      this._buffers.get(e.toString())
    );
  }
  _bufferLoaded(e) {
    this._loadingCount--, this._loadingCount === 0 && e && e();
  }
  get loaded() {
    return Array.from(this._buffers).every(([e, n]) => n.loaded);
  }
  add(e, n, r = ne, s = ne) {
    return (
      Yt(n)
        ? this._buffers.set(e.toString(), new re(this.baseUrl + n, r, s))
        : this._buffers.set(e.toString(), new re(n, r, s)),
      this
    );
  }
  dispose() {
    return (
      super.dispose(),
      this._buffers.forEach((e) => e.dispose()),
      this._buffers.clear(),
      this
    );
  }
}
class on extends Gs {
  constructor() {
    super(...arguments), (this.name = 'Ticks'), (this.defaultUnits = 'i');
  }
  _now() {
    return this.context.transport.ticks;
  }
  _beatsToUnits(e) {
    return this._getPPQ() * e;
  }
  _secondsToUnits(e) {
    return Math.floor((e / (60 / this._getBpm())) * this._getPPQ());
  }
  _ticksToUnits(e) {
    return e;
  }
  toTicks() {
    return this.valueOf();
  }
  toSeconds() {
    return (this.valueOf() / this._getPPQ()) * (60 / this._getBpm());
  }
}
class Fk extends at {
  constructor() {
    super(...arguments),
      (this.name = 'Draw'),
      (this.expiration = 0.25),
      (this.anticipation = 0.008),
      (this._events = new tn()),
      (this._boundDrawLoop = this._drawLoop.bind(this)),
      (this._animationFrame = -1);
  }
  schedule(e, n) {
    return (
      this._events.add({ callback: e, time: this.toSeconds(n) }),
      this._events.length === 1 &&
        (this._animationFrame = requestAnimationFrame(this._boundDrawLoop)),
      this
    );
  }
  cancel(e) {
    return this._events.cancel(this.toSeconds(e)), this;
  }
  _drawLoop() {
    const e = this.context.currentTime;
    for (
      ;
      this._events.length && this._events.peek().time - this.anticipation <= e;

    ) {
      const n = this._events.shift();
      n && e - n.time <= this.expiration && n.callback();
    }
    this._events.length > 0 &&
      (this._animationFrame = requestAnimationFrame(this._boundDrawLoop));
  }
  dispose() {
    return (
      super.dispose(),
      this._events.dispose(),
      cancelAnimationFrame(this._animationFrame),
      this
    );
  }
}
Ha((t) => {
  t.draw = new Fk({ context: t });
});
Ga((t) => {
  t.draw.dispose();
});
class bk extends wn {
  constructor() {
    super(...arguments),
      (this.name = 'IntervalTimeline'),
      (this._root = null),
      (this._length = 0);
  }
  add(e) {
    H(K(e.time), 'Events must have a time property'),
      H(K(e.duration), 'Events must have a duration parameter'),
      (e.time = e.time.valueOf());
    let n = new Lk(e.time, e.time + e.duration, e);
    for (
      this._root === null ? (this._root = n) : this._root.insert(n),
        this._length++;
      n !== null;

    )
      n.updateHeight(), n.updateMax(), this._rebalance(n), (n = n.parent);
    return this;
  }
  remove(e) {
    if (this._root !== null) {
      const n = [];
      this._root.search(e.time, n);
      for (const r of n)
        if (r.event === e) {
          this._removeNode(r), this._length--;
          break;
        }
    }
    return this;
  }
  get length() {
    return this._length;
  }
  cancel(e) {
    return this.forEachFrom(e, (n) => this.remove(n)), this;
  }
  _setRoot(e) {
    (this._root = e), this._root !== null && (this._root.parent = null);
  }
  _replaceNodeInParent(e, n) {
    e.parent !== null
      ? (e.isLeftChild() ? (e.parent.left = n) : (e.parent.right = n),
        this._rebalance(e.parent))
      : this._setRoot(n);
  }
  _removeNode(e) {
    if (e.left === null && e.right === null) this._replaceNodeInParent(e, null);
    else if (e.right === null) this._replaceNodeInParent(e, e.left);
    else if (e.left === null) this._replaceNodeInParent(e, e.right);
    else {
      const n = e.getBalance();
      let r,
        s = null;
      if (n > 0)
        if (e.left.right === null) (r = e.left), (r.right = e.right), (s = r);
        else {
          for (r = e.left.right; r.right !== null; ) r = r.right;
          r.parent &&
            ((r.parent.right = r.left),
            (s = r.parent),
            (r.left = e.left),
            (r.right = e.right));
        }
      else if (e.right.left === null) (r = e.right), (r.left = e.left), (s = r);
      else {
        for (r = e.right.left; r.left !== null; ) r = r.left;
        r.parent &&
          ((r.parent.left = r.right),
          (s = r.parent),
          (r.left = e.left),
          (r.right = e.right));
      }
      e.parent !== null
        ? e.isLeftChild()
          ? (e.parent.left = r)
          : (e.parent.right = r)
        : this._setRoot(r),
        s && this._rebalance(s);
    }
    e.dispose();
  }
  _rotateLeft(e) {
    const n = e.parent,
      r = e.isLeftChild(),
      s = e.right;
    s && ((e.right = s.left), (s.left = e)),
      n !== null ? (r ? (n.left = s) : (n.right = s)) : this._setRoot(s);
  }
  _rotateRight(e) {
    const n = e.parent,
      r = e.isLeftChild(),
      s = e.left;
    s && ((e.left = s.right), (s.right = e)),
      n !== null ? (r ? (n.left = s) : (n.right = s)) : this._setRoot(s);
  }
  _rebalance(e) {
    const n = e.getBalance();
    n > 1 && e.left
      ? e.left.getBalance() < 0
        ? this._rotateLeft(e.left)
        : this._rotateRight(e)
      : n < -1 &&
        e.right &&
        (e.right.getBalance() > 0
          ? this._rotateRight(e.right)
          : this._rotateLeft(e));
  }
  get(e) {
    if (this._root !== null) {
      const n = [];
      if ((this._root.search(e, n), n.length > 0)) {
        let r = n[0];
        for (let s = 1; s < n.length; s++) n[s].low > r.low && (r = n[s]);
        return r.event;
      }
    }
    return null;
  }
  forEach(e) {
    if (this._root !== null) {
      const n = [];
      this._root.traverse((r) => n.push(r)),
        n.forEach((r) => {
          r.event && e(r.event);
        });
    }
    return this;
  }
  forEachAtTime(e, n) {
    if (this._root !== null) {
      const r = [];
      this._root.search(e, r),
        r.forEach((s) => {
          s.event && n(s.event);
        });
    }
    return this;
  }
  forEachFrom(e, n) {
    if (this._root !== null) {
      const r = [];
      this._root.searchAfter(e, r),
        r.forEach((s) => {
          s.event && n(s.event);
        });
    }
    return this;
  }
  dispose() {
    return (
      super.dispose(),
      this._root !== null && this._root.traverse((e) => e.dispose()),
      (this._root = null),
      this
    );
  }
}
class Lk {
  constructor(e, n, r) {
    (this._left = null),
      (this._right = null),
      (this.parent = null),
      (this.height = 0),
      (this.event = r),
      (this.low = e),
      (this.high = n),
      (this.max = this.high);
  }
  insert(e) {
    e.low <= this.low
      ? this.left === null
        ? (this.left = e)
        : this.left.insert(e)
      : this.right === null
        ? (this.right = e)
        : this.right.insert(e);
  }
  search(e, n) {
    e > this.max ||
      (this.left !== null && this.left.search(e, n),
      this.low <= e && this.high > e && n.push(this),
      !(this.low > e) && this.right !== null && this.right.search(e, n));
  }
  searchAfter(e, n) {
    this.low >= e &&
      (n.push(this), this.left !== null && this.left.searchAfter(e, n)),
      this.right !== null && this.right.searchAfter(e, n);
  }
  traverse(e) {
    e(this),
      this.left !== null && this.left.traverse(e),
      this.right !== null && this.right.traverse(e);
  }
  updateHeight() {
    this.left !== null && this.right !== null
      ? (this.height = Math.max(this.left.height, this.right.height) + 1)
      : this.right !== null
        ? (this.height = this.right.height + 1)
        : this.left !== null
          ? (this.height = this.left.height + 1)
          : (this.height = 0);
  }
  updateMax() {
    (this.max = this.high),
      this.left !== null && (this.max = Math.max(this.max, this.left.max)),
      this.right !== null && (this.max = Math.max(this.max, this.right.max));
  }
  getBalance() {
    let e = 0;
    return (
      this.left !== null && this.right !== null
        ? (e = this.left.height - this.right.height)
        : this.left !== null
          ? (e = this.left.height + 1)
          : this.right !== null && (e = -(this.right.height + 1)),
      e
    );
  }
  isLeftChild() {
    return this.parent !== null && this.parent.left === this;
  }
  get left() {
    return this._left;
  }
  set left(e) {
    (this._left = e),
      e !== null && (e.parent = this),
      this.updateHeight(),
      this.updateMax();
  }
  get right() {
    return this._right;
  }
  set right(e) {
    (this._right = e),
      e !== null && (e.parent = this),
      this.updateHeight(),
      this.updateMax();
  }
  dispose() {
    (this.parent = null),
      (this._left = null),
      (this._right = null),
      (this.event = null);
  }
}
class wr extends G {
  constructor() {
    super(P(wr.getDefaults(), arguments, ['volume'])), (this.name = 'Volume');
    const e = P(wr.getDefaults(), arguments, ['volume']);
    (this.input = this.output =
      new Ye({ context: this.context, gain: e.volume, units: 'decibels' })),
      (this.volume = this.output.gain),
      ve(this, 'volume'),
      (this._unmutedVolume = e.volume),
      (this.mute = e.mute);
  }
  static getDefaults() {
    return Object.assign(G.getDefaults(), { mute: !1, volume: 0 });
  }
  get mute() {
    return this.volume.value === -1 / 0;
  }
  set mute(e) {
    !this.mute && e
      ? ((this._unmutedVolume = this.volume.value),
        (this.volume.value = -1 / 0))
      : this.mute && !e && (this.volume.value = this._unmutedVolume);
  }
  dispose() {
    return super.dispose(), this.input.dispose(), this.volume.dispose(), this;
  }
}
class ma extends G {
  constructor() {
    super(P(ma.getDefaults(), arguments)),
      (this.name = 'Destination'),
      (this.input = new wr({ context: this.context })),
      (this.output = new Ye({ context: this.context })),
      (this.volume = this.input.volume);
    const e = P(ma.getDefaults(), arguments);
    bu(this.input, this.output, this.context.rawContext.destination),
      (this.mute = e.mute),
      (this._internalChannels = [
        this.input,
        this.context.rawContext.destination,
        this.output
      ]);
  }
  static getDefaults() {
    return Object.assign(G.getDefaults(), { mute: !1, volume: 0 });
  }
  get mute() {
    return this.input.mute;
  }
  set mute(e) {
    this.input.mute = e;
  }
  chain(...e) {
    return (
      this.input.disconnect(),
      e.unshift(this.input),
      e.push(this.output),
      bu(...e),
      this
    );
  }
  get maxChannelCount() {
    return this.context.rawContext.destination.maxChannelCount;
  }
  dispose() {
    return super.dispose(), this.volume.dispose(), this;
  }
}
Ha((t) => {
  t.destination = new ma({ context: t });
});
Ga((t) => {
  t.destination.dispose();
});
class Vk extends wn {
  constructor(e) {
    super(),
      (this.name = 'TimelineValue'),
      (this._timeline = new tn({ memory: 10 })),
      (this._initialValue = e);
  }
  set(e, n) {
    return this._timeline.add({ value: e, time: n }), this;
  }
  get(e) {
    const n = this._timeline.get(e);
    return n ? n.value : this._initialValue;
  }
}
class Hn {
  constructor(e, n) {
    this.id = Hn._eventId++;
    const r = Object.assign(Hn.getDefaults(), n);
    (this.transport = e),
      (this.callback = r.callback),
      (this._once = r.once),
      (this.time = r.time);
  }
  static getDefaults() {
    return { callback: ne, once: !1, time: 0 };
  }
  invoke(e) {
    this.callback &&
      (this.callback(e), this._once && this.transport.clear(this.id));
  }
  dispose() {
    return (this.callback = void 0), this;
  }
}
Hn._eventId = 0;
class lh extends Hn {
  constructor(e, n) {
    super(e, n),
      (this._currentId = -1),
      (this._nextId = -1),
      (this._nextTick = this.time),
      (this._boundRestart = this._restart.bind(this));
    const r = Object.assign(lh.getDefaults(), n);
    (this.duration = new on(e.context, r.duration).valueOf()),
      (this._interval = new on(e.context, r.interval).valueOf()),
      (this._nextTick = r.time),
      this.transport.on('start', this._boundRestart),
      this.transport.on('loopStart', this._boundRestart),
      (this.context = this.transport.context),
      this._restart();
  }
  static getDefaults() {
    return Object.assign({}, Hn.getDefaults(), {
      duration: 1 / 0,
      interval: 1,
      once: !1
    });
  }
  invoke(e) {
    this._createEvents(e), super.invoke(e);
  }
  _createEvents(e) {
    const n = this.transport.getTicksAtTime(e);
    n >= this.time &&
      n >= this._nextTick &&
      this._nextTick + this._interval < this.time + this.duration &&
      ((this._nextTick += this._interval),
      (this._currentId = this._nextId),
      (this._nextId = this.transport.scheduleOnce(
        this.invoke.bind(this),
        new on(this.context, this._nextTick).toSeconds()
      )));
  }
  _restart(e) {
    this.transport.clear(this._currentId),
      this.transport.clear(this._nextId),
      (this._nextTick = this.time);
    const n = this.transport.getTicksAtTime(e);
    n > this.time &&
      (this._nextTick =
        this.time +
        Math.ceil((n - this.time) / this._interval) * this._interval),
      (this._currentId = this.transport.scheduleOnce(
        this.invoke.bind(this),
        new on(this.context, this._nextTick).toSeconds()
      )),
      (this._nextTick += this._interval),
      (this._nextId = this.transport.scheduleOnce(
        this.invoke.bind(this),
        new on(this.context, this._nextTick).toSeconds()
      ));
  }
  dispose() {
    return (
      super.dispose(),
      this.transport.clear(this._currentId),
      this.transport.clear(this._nextId),
      this.transport.off('start', this._boundRestart),
      this.transport.off('loopStart', this._boundRestart),
      this
    );
  }
}
class mi extends at {
  constructor() {
    super(P(mi.getDefaults(), arguments)),
      (this.name = 'Transport'),
      (this._loop = new Vk(!1)),
      (this._loopStart = 0),
      (this._loopEnd = 0),
      (this._scheduledEvents = {}),
      (this._timeline = new tn()),
      (this._repeatedEvents = new bk()),
      (this._syncedSignals = []),
      (this._swingAmount = 0);
    const e = P(mi.getDefaults(), arguments);
    (this._ppq = e.ppq),
      (this._clock = new pi({
        callback: this._processTick.bind(this),
        context: this.context,
        frequency: 0,
        units: 'bpm'
      })),
      this._bindClockEvents(),
      (this.bpm = this._clock.frequency),
      (this._clock.frequency.multiplier = e.ppq),
      this.bpm.setValueAtTime(e.bpm, 0),
      ve(this, 'bpm'),
      (this._timeSignature = e.timeSignature),
      (this._swingTicks = e.ppq / 2);
  }
  static getDefaults() {
    return Object.assign(at.getDefaults(), {
      bpm: 120,
      loopEnd: '4m',
      loopStart: 0,
      ppq: 192,
      swing: 0,
      swingSubdivision: '8n',
      timeSignature: 4
    });
  }
  _processTick(e, n) {
    if (
      (this._loop.get(e) &&
        n >= this._loopEnd &&
        (this.emit('loopEnd', e),
        this._clock.setTicksAtTime(this._loopStart, e),
        (n = this._loopStart),
        this.emit('loopStart', e, this._clock.getSecondsAtTime(e)),
        this.emit('loop', e)),
      this._swingAmount > 0 &&
        n % this._ppq !== 0 &&
        n % (this._swingTicks * 2) !== 0)
    ) {
      const r = (n % (this._swingTicks * 2)) / (this._swingTicks * 2),
        s = Math.sin(r * Math.PI) * this._swingAmount;
      e += new on(this.context, (this._swingTicks * 2) / 3).toSeconds() * s;
    }
    this._timeline.forEachAtTime(n, (r) => r.invoke(e));
  }
  schedule(e, n) {
    const r = new Hn(this, {
      callback: e,
      time: new Gs(this.context, n).toTicks()
    });
    return this._addEvent(r, this._timeline);
  }
  scheduleRepeat(e, n, r, s = 1 / 0) {
    const i = new lh(this, {
      callback: e,
      duration: new bt(this.context, s).toTicks(),
      interval: new bt(this.context, n).toTicks(),
      time: new Gs(this.context, r).toTicks()
    });
    return this._addEvent(i, this._repeatedEvents);
  }
  scheduleOnce(e, n) {
    const r = new Hn(this, {
      callback: e,
      once: !0,
      time: new Gs(this.context, n).toTicks()
    });
    return this._addEvent(r, this._timeline);
  }
  clear(e) {
    if (this._scheduledEvents.hasOwnProperty(e)) {
      const n = this._scheduledEvents[e.toString()];
      n.timeline.remove(n.event),
        n.event.dispose(),
        delete this._scheduledEvents[e.toString()];
    }
    return this;
  }
  _addEvent(e, n) {
    return (
      (this._scheduledEvents[e.id.toString()] = { event: e, timeline: n }),
      n.add(e),
      e.id
    );
  }
  cancel(e = 0) {
    const n = this.toTicks(e);
    return (
      this._timeline.forEachFrom(n, (r) => this.clear(r.id)),
      this._repeatedEvents.forEachFrom(n, (r) => this.clear(r.id)),
      this
    );
  }
  _bindClockEvents() {
    this._clock.on('start', (e, n) => {
      (n = new on(this.context, n).toSeconds()), this.emit('start', e, n);
    }),
      this._clock.on('stop', (e) => {
        this.emit('stop', e);
      }),
      this._clock.on('pause', (e) => {
        this.emit('pause', e);
      });
  }
  get state() {
    return this._clock.getStateAtTime(this.now());
  }
  start(e, n) {
    let r;
    return K(n) && (r = this.toTicks(n)), this._clock.start(e, r), this;
  }
  stop(e) {
    return this._clock.stop(e), this;
  }
  pause(e) {
    return this._clock.pause(e), this;
  }
  toggle(e) {
    return (
      (e = this.toSeconds(e)),
      this._clock.getStateAtTime(e) !== 'started'
        ? this.start(e)
        : this.stop(e),
      this
    );
  }
  get timeSignature() {
    return this._timeSignature;
  }
  set timeSignature(e) {
    jt(e) && (e = (e[0] / e[1]) * 4), (this._timeSignature = e);
  }
  get loopStart() {
    return new bt(this.context, this._loopStart, 'i').toSeconds();
  }
  set loopStart(e) {
    this._loopStart = this.toTicks(e);
  }
  get loopEnd() {
    return new bt(this.context, this._loopEnd, 'i').toSeconds();
  }
  set loopEnd(e) {
    this._loopEnd = this.toTicks(e);
  }
  get loop() {
    return this._loop.get(this.now());
  }
  set loop(e) {
    this._loop.set(e, this.now());
  }
  setLoopPoints(e, n) {
    return (this.loopStart = e), (this.loopEnd = n), this;
  }
  get swing() {
    return this._swingAmount;
  }
  set swing(e) {
    this._swingAmount = e;
  }
  get swingSubdivision() {
    return new on(this.context, this._swingTicks).toNotation();
  }
  set swingSubdivision(e) {
    this._swingTicks = this.toTicks(e);
  }
  get position() {
    const e = this.now(),
      n = this._clock.getTicksAtTime(e);
    return new on(this.context, n).toBarsBeatsSixteenths();
  }
  set position(e) {
    const n = this.toTicks(e);
    this.ticks = n;
  }
  get seconds() {
    return this._clock.seconds;
  }
  set seconds(e) {
    const n = this.now(),
      r = this._clock.frequency.timeToTicks(e, n);
    this.ticks = r;
  }
  get progress() {
    if (this.loop) {
      const e = this.now();
      return (
        (this._clock.getTicksAtTime(e) - this._loopStart) /
        (this._loopEnd - this._loopStart)
      );
    } else return 0;
  }
  get ticks() {
    return this._clock.ticks;
  }
  set ticks(e) {
    if (this._clock.ticks !== e) {
      const n = this.now();
      if (this.state === 'started') {
        const r = this._clock.getTicksAtTime(n),
          s = this._clock.frequency.getDurationOfTicks(Math.ceil(r) - r, n),
          i = n + s;
        this.emit('stop', i),
          this._clock.setTicksAtTime(e, i),
          this.emit('start', i, this._clock.getSecondsAtTime(i));
      } else this._clock.setTicksAtTime(e, n);
    }
  }
  getTicksAtTime(e) {
    return Math.round(this._clock.getTicksAtTime(e));
  }
  getSecondsAtTime(e) {
    return this._clock.getSecondsAtTime(e);
  }
  get PPQ() {
    return this._clock.frequency.multiplier;
  }
  set PPQ(e) {
    this._clock.frequency.multiplier = e;
  }
  nextSubdivision(e) {
    if (((e = this.toTicks(e)), this.state !== 'started')) return 0;
    {
      const n = this.now(),
        r = this.getTicksAtTime(n),
        s = e - (r % e);
      return this._clock.nextTickTime(s, n);
    }
  }
  syncSignal(e, n) {
    if (!n) {
      const s = this.now();
      if (e.getValueAtTime(s) !== 0) {
        const o = 1 / (60 / this.bpm.getValueAtTime(s) / this.PPQ);
        n = e.getValueAtTime(s) / o;
      } else n = 0;
    }
    const r = new Ye(n);
    return (
      this.bpm.connect(r),
      r.connect(e._param),
      this._syncedSignals.push({ initial: e.value, ratio: r, signal: e }),
      (e.value = 0),
      this
    );
  }
  unsyncSignal(e) {
    for (let n = this._syncedSignals.length - 1; n >= 0; n--) {
      const r = this._syncedSignals[n];
      r.signal === e &&
        (r.ratio.dispose(),
        (r.signal.value = r.initial),
        this._syncedSignals.splice(n, 1));
    }
    return this;
  }
  dispose() {
    return (
      super.dispose(),
      this._clock.dispose(),
      Og(this, 'bpm'),
      this._timeline.dispose(),
      this._repeatedEvents.dispose(),
      this
    );
  }
}
qi.mixin(mi);
Ha((t) => {
  t.transport = new mi({ context: t });
});
Ga((t) => {
  t.transport.dispose();
});
class mt extends G {
  constructor(e) {
    super(e),
      (this.input = void 0),
      (this._state = new oh('stopped')),
      (this._synced = !1),
      (this._scheduled = []),
      (this._syncedStart = ne),
      (this._syncedStop = ne),
      (this._state.memory = 100),
      (this._state.increasing = !0),
      (this._volume = this.output =
        new wr({ context: this.context, mute: e.mute, volume: e.volume })),
      (this.volume = this._volume.volume),
      ve(this, 'volume'),
      (this.onstop = e.onstop);
  }
  static getDefaults() {
    return Object.assign(G.getDefaults(), { mute: !1, onstop: ne, volume: 0 });
  }
  get state() {
    return this._synced
      ? this.context.transport.state === 'started'
        ? this._state.getValueAtTime(this.context.transport.seconds)
        : 'stopped'
      : this._state.getValueAtTime(this.now());
  }
  get mute() {
    return this._volume.mute;
  }
  set mute(e) {
    this._volume.mute = e;
  }
  _clampToCurrentTime(e) {
    return this._synced ? e : Math.max(e, this.context.currentTime);
  }
  start(e, n, r) {
    let s =
      Nt(e) && this._synced
        ? this.context.transport.seconds
        : this.toSeconds(e);
    if (
      ((s = this._clampToCurrentTime(s)),
      !this._synced && this._state.getValueAtTime(s) === 'started')
    )
      H(
        ca(s, this._state.get(s).time),
        'Start time must be strictly greater than previous start time'
      ),
        this._state.cancel(s),
        this._state.setStateAtTime('started', s),
        this.log('restart', s),
        this.restart(s, n, r);
    else if (
      (this.log('start', s),
      this._state.setStateAtTime('started', s),
      this._synced)
    ) {
      const i = this._state.get(s);
      i &&
        ((i.offset = this.toSeconds(es(n, 0))),
        (i.duration = r ? this.toSeconds(r) : void 0));
      const o = this.context.transport.schedule((a) => {
        this._start(a, n, r);
      }, s);
      this._scheduled.push(o),
        this.context.transport.state === 'started' &&
          this.context.transport.getSecondsAtTime(this.immediate()) > s &&
          this._syncedStart(this.now(), this.context.transport.seconds);
    } else Sg(this.context), this._start(s, n, r);
    return this;
  }
  stop(e) {
    let n =
      Nt(e) && this._synced
        ? this.context.transport.seconds
        : this.toSeconds(e);
    if (
      ((n = this._clampToCurrentTime(n)),
      this._state.getValueAtTime(n) === 'started' ||
        K(this._state.getNextState('started', n)))
    ) {
      if ((this.log('stop', n), !this._synced)) this._stop(n);
      else {
        const r = this.context.transport.schedule(this._stop.bind(this), n);
        this._scheduled.push(r);
      }
      this._state.cancel(n), this._state.setStateAtTime('stopped', n);
    }
    return this;
  }
  restart(e, n, r) {
    return (
      (e = this.toSeconds(e)),
      this._state.getValueAtTime(e) === 'started' &&
        (this._state.cancel(e), this._restart(e, n, r)),
      this
    );
  }
  sync() {
    return (
      this._synced ||
        ((this._synced = !0),
        (this._syncedStart = (e, n) => {
          if (n > 0) {
            const r = this._state.get(n);
            if (r && r.state === 'started' && r.time !== n) {
              const s = n - this.toSeconds(r.time);
              let i;
              r.duration && (i = this.toSeconds(r.duration) - s),
                this._start(e, this.toSeconds(r.offset) + s, i);
            }
          }
        }),
        (this._syncedStop = (e) => {
          const n = this.context.transport.getSecondsAtTime(
            Math.max(e - this.sampleTime, 0)
          );
          this._state.getValueAtTime(n) === 'started' && this._stop(e);
        }),
        this.context.transport.on('start', this._syncedStart),
        this.context.transport.on('loopStart', this._syncedStart),
        this.context.transport.on('stop', this._syncedStop),
        this.context.transport.on('pause', this._syncedStop),
        this.context.transport.on('loopEnd', this._syncedStop)),
      this
    );
  }
  unsync() {
    return (
      this._synced &&
        (this.context.transport.off('stop', this._syncedStop),
        this.context.transport.off('pause', this._syncedStop),
        this.context.transport.off('loopEnd', this._syncedStop),
        this.context.transport.off('start', this._syncedStart),
        this.context.transport.off('loopStart', this._syncedStart)),
      (this._synced = !1),
      this._scheduled.forEach((e) => this.context.transport.clear(e)),
      (this._scheduled = []),
      this._state.cancel(0),
      this._stop(0),
      this
    );
  }
  dispose() {
    return (
      super.dispose(),
      (this.onstop = ne),
      this.unsync(),
      this._volume.dispose(),
      this._state.dispose(),
      this
    );
  }
}
class gi extends cs {
  constructor() {
    super(P(gi.getDefaults(), arguments, ['url', 'onload'])),
      (this.name = 'ToneBufferSource'),
      (this._source = this.context.createBufferSource()),
      (this._internalChannels = [this._source]),
      (this._sourceStarted = !1),
      (this._sourceStopped = !1);
    const e = P(gi.getDefaults(), arguments, ['url', 'onload']);
    Ts(this._source, this._gainNode),
      (this._source.onended = () => this._stopSource()),
      (this.playbackRate = new ue({
        context: this.context,
        param: this._source.playbackRate,
        units: 'positive',
        value: e.playbackRate
      })),
      (this.loop = e.loop),
      (this.loopStart = e.loopStart),
      (this.loopEnd = e.loopEnd),
      (this._buffer = new re(e.url, e.onload, e.onerror)),
      this._internalChannels.push(this._source);
  }
  static getDefaults() {
    return Object.assign(cs.getDefaults(), {
      url: new re(),
      loop: !1,
      loopEnd: 0,
      loopStart: 0,
      onload: ne,
      onerror: ne,
      playbackRate: 1
    });
  }
  get fadeIn() {
    return this._fadeIn;
  }
  set fadeIn(e) {
    this._fadeIn = e;
  }
  get fadeOut() {
    return this._fadeOut;
  }
  set fadeOut(e) {
    this._fadeOut = e;
  }
  get curve() {
    return this._curve;
  }
  set curve(e) {
    this._curve = e;
  }
  start(e, n, r, s = 1) {
    H(this.buffer.loaded, 'buffer is either not set or not loaded');
    const i = this.toSeconds(e);
    this._startGain(i, s),
      this.loop ? (n = es(n, this.loopStart)) : (n = es(n, 0));
    let o = Math.max(this.toSeconds(n), 0);
    if (this.loop) {
      const a = this.toSeconds(this.loopEnd) || this.buffer.duration,
        l = this.toSeconds(this.loopStart),
        u = a - l;
      Ru(o, a) && (o = ((o - l) % u) + l),
        Pt(o, this.buffer.duration) && (o = 0);
    }
    if (
      ((this._source.buffer = this.buffer.get()),
      (this._source.loopEnd =
        this.toSeconds(this.loopEnd) || this.buffer.duration),
      xg(o, this.buffer.duration) &&
        ((this._sourceStarted = !0), this._source.start(i, o)),
      K(r))
    ) {
      let a = this.toSeconds(r);
      (a = Math.max(a, 0)), this.stop(i + a);
    }
    return this;
  }
  _stopSource(e) {
    !this._sourceStopped &&
      this._sourceStarted &&
      ((this._sourceStopped = !0),
      this._source.stop(this.toSeconds(e)),
      this._onended());
  }
  get loopStart() {
    return this._source.loopStart;
  }
  set loopStart(e) {
    this._source.loopStart = this.toSeconds(e);
  }
  get loopEnd() {
    return this._source.loopEnd;
  }
  set loopEnd(e) {
    this._source.loopEnd = this.toSeconds(e);
  }
  get buffer() {
    return this._buffer;
  }
  set buffer(e) {
    this._buffer.set(e);
  }
  get loop() {
    return this._source.loop;
  }
  set loop(e) {
    (this._source.loop = e), this._sourceStarted && this.cancelStop();
  }
  dispose() {
    return (
      super.dispose(),
      (this._source.onended = null),
      this._source.disconnect(),
      this._buffer.dispose(),
      this.playbackRate.dispose(),
      this
    );
  }
}
function Or(t, e) {
  return Ee(this, void 0, void 0, function* () {
    const n = e / t.context.sampleRate,
      r = new sh(1, n, t.context.sampleRate);
    return (
      new t.constructor(
        Object.assign(t.get(), { frequency: 2 / n, detune: 0, context: r })
      )
        .toDestination()
        .start(0),
      (yield r.render()).getChannelData(0)
    );
  });
}
class ga extends cs {
  constructor() {
    super(P(ga.getDefaults(), arguments, ['frequency', 'type'])),
      (this.name = 'ToneOscillatorNode'),
      (this._oscillator = this.context.createOscillator()),
      (this._internalChannels = [this._oscillator]);
    const e = P(ga.getDefaults(), arguments, ['frequency', 'type']);
    Ts(this._oscillator, this._gainNode),
      (this.type = e.type),
      (this.frequency = new ue({
        context: this.context,
        param: this._oscillator.frequency,
        units: 'frequency',
        value: e.frequency
      })),
      (this.detune = new ue({
        context: this.context,
        param: this._oscillator.detune,
        units: 'cents',
        value: e.detune
      })),
      ve(this, ['frequency', 'detune']);
  }
  static getDefaults() {
    return Object.assign(cs.getDefaults(), {
      detune: 0,
      frequency: 440,
      type: 'sine'
    });
  }
  start(e) {
    const n = this.toSeconds(e);
    return (
      this.log('start', n), this._startGain(n), this._oscillator.start(n), this
    );
  }
  _stopSource(e) {
    this._oscillator.stop(e);
  }
  setPeriodicWave(e) {
    return this._oscillator.setPeriodicWave(e), this;
  }
  get type() {
    return this._oscillator.type;
  }
  set type(e) {
    this._oscillator.type = e;
  }
  dispose() {
    return (
      super.dispose(),
      this.state === 'started' && this.stop(),
      this._oscillator.disconnect(),
      this.frequency.dispose(),
      this.detune.dispose(),
      this
    );
  }
}
class Te extends mt {
  constructor() {
    super(P(Te.getDefaults(), arguments, ['frequency', 'type'])),
      (this.name = 'Oscillator'),
      (this._oscillator = null);
    const e = P(Te.getDefaults(), arguments, ['frequency', 'type']);
    (this.frequency = new De({
      context: this.context,
      units: 'frequency',
      value: e.frequency
    })),
      ve(this, 'frequency'),
      (this.detune = new De({
        context: this.context,
        units: 'cents',
        value: e.detune
      })),
      ve(this, 'detune'),
      (this._partials = e.partials),
      (this._partialCount = e.partialCount),
      (this._type = e.type),
      e.partialCount &&
        e.type !== 'custom' &&
        (this._type = this.baseType + e.partialCount.toString()),
      (this.phase = e.phase);
  }
  static getDefaults() {
    return Object.assign(mt.getDefaults(), {
      detune: 0,
      frequency: 440,
      partialCount: 0,
      partials: [],
      phase: 0,
      type: 'sine'
    });
  }
  _start(e) {
    const n = this.toSeconds(e),
      r = new ga({ context: this.context, onended: () => this.onstop(this) });
    (this._oscillator = r),
      this._wave
        ? this._oscillator.setPeriodicWave(this._wave)
        : (this._oscillator.type = this._type),
      this._oscillator.connect(this.output),
      this.frequency.connect(this._oscillator.frequency),
      this.detune.connect(this._oscillator.detune),
      this._oscillator.start(n);
  }
  _stop(e) {
    const n = this.toSeconds(e);
    this._oscillator && this._oscillator.stop(n);
  }
  _restart(e) {
    const n = this.toSeconds(e);
    return (
      this.log('restart', n),
      this._oscillator && this._oscillator.cancelStop(),
      this._state.cancel(n),
      this
    );
  }
  syncFrequency() {
    return this.context.transport.syncSignal(this.frequency), this;
  }
  unsyncFrequency() {
    return this.context.transport.unsyncSignal(this.frequency), this;
  }
  _getCachedPeriodicWave() {
    if (this._type === 'custom')
      return Te._periodicWaveCache.find(
        (n) => n.phase === this._phase && wk(n.partials, this._partials)
      );
    {
      const e = Te._periodicWaveCache.find(
        (n) => n.type === this._type && n.phase === this._phase
      );
      return (this._partialCount = e ? e.partialCount : this._partialCount), e;
    }
  }
  get type() {
    return this._type;
  }
  set type(e) {
    this._type = e;
    const n = ['sine', 'square', 'sawtooth', 'triangle'].indexOf(e) !== -1;
    if (this._phase === 0 && n)
      (this._wave = void 0),
        (this._partialCount = 0),
        this._oscillator !== null && (this._oscillator.type = e);
    else {
      const r = this._getCachedPeriodicWave();
      if (K(r)) {
        const { partials: s, wave: i } = r;
        (this._wave = i),
          (this._partials = s),
          this._oscillator !== null &&
            this._oscillator.setPeriodicWave(this._wave);
      } else {
        const [s, i] = this._getRealImaginary(e, this._phase),
          o = this.context.createPeriodicWave(s, i);
        (this._wave = o),
          this._oscillator !== null &&
            this._oscillator.setPeriodicWave(this._wave),
          Te._periodicWaveCache.push({
            imag: i,
            partialCount: this._partialCount,
            partials: this._partials,
            phase: this._phase,
            real: s,
            type: this._type,
            wave: this._wave
          }),
          Te._periodicWaveCache.length > 100 && Te._periodicWaveCache.shift();
      }
    }
  }
  get baseType() {
    return this._type.replace(this.partialCount.toString(), '');
  }
  set baseType(e) {
    this.partialCount && this._type !== 'custom' && e !== 'custom'
      ? (this.type = e + this.partialCount)
      : (this.type = e);
  }
  get partialCount() {
    return this._partialCount;
  }
  set partialCount(e) {
    $n(e, 0);
    let n = this._type;
    const r = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);
    if ((r && (n = r[1]), this._type !== 'custom'))
      e === 0 ? (this.type = n) : (this.type = n + e.toString());
    else {
      const s = new Float32Array(e);
      this._partials.forEach((i, o) => (s[o] = i)),
        (this._partials = Array.from(s)),
        (this.type = this._type);
    }
  }
  _getRealImaginary(e, n) {
    let s = 2048;
    const i = new Float32Array(s),
      o = new Float32Array(s);
    let a = 1;
    if (e === 'custom') {
      if (
        ((a = this._partials.length + 1),
        (this._partialCount = this._partials.length),
        (s = a),
        this._partials.length === 0)
      )
        return [i, o];
    } else {
      const l = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(e);
      l
        ? ((a = parseInt(l[2], 10) + 1),
          (this._partialCount = parseInt(l[2], 10)),
          (e = l[1]),
          (a = Math.max(a, 2)),
          (s = a))
        : (this._partialCount = 0),
        (this._partials = []);
    }
    for (let l = 1; l < s; ++l) {
      const u = 2 / (l * Math.PI);
      let c;
      switch (e) {
        case 'sine':
          (c = l <= a ? 1 : 0), (this._partials[l - 1] = c);
          break;
        case 'square':
          (c = l & 1 ? 2 * u : 0), (this._partials[l - 1] = c);
          break;
        case 'sawtooth':
          (c = u * (l & 1 ? 1 : -1)), (this._partials[l - 1] = c);
          break;
        case 'triangle':
          l & 1 ? (c = 2 * (u * u) * (((l - 1) >> 1) & 1 ? -1 : 1)) : (c = 0),
            (this._partials[l - 1] = c);
          break;
        case 'custom':
          c = this._partials[l - 1];
          break;
        default:
          throw new TypeError('Oscillator: invalid type: ' + e);
      }
      c !== 0
        ? ((i[l] = -c * Math.sin(n * l)), (o[l] = c * Math.cos(n * l)))
        : ((i[l] = 0), (o[l] = 0));
    }
    return [i, o];
  }
  _inverseFFT(e, n, r) {
    let s = 0;
    const i = e.length;
    for (let o = 0; o < i; o++)
      s += e[o] * Math.cos(o * r) + n[o] * Math.sin(o * r);
    return s;
  }
  getInitialValue() {
    const [e, n] = this._getRealImaginary(this._type, 0);
    let r = 0;
    const s = Math.PI * 2,
      i = 32;
    for (let o = 0; o < i; o++)
      r = Math.max(this._inverseFFT(e, n, (o / i) * s), r);
    return Tk(-this._inverseFFT(e, n, this._phase) / r, -1, 1);
  }
  get partials() {
    return this._partials.slice(0, this.partialCount);
  }
  set partials(e) {
    (this._partials = e),
      (this._partialCount = this._partials.length),
      e.length && (this.type = 'custom');
  }
  get phase() {
    return this._phase * (180 / Math.PI);
  }
  set phase(e) {
    (this._phase = (e * Math.PI) / 180), (this.type = this._type);
  }
  asArray(e = 1024) {
    return Ee(this, void 0, void 0, function* () {
      return Or(this, e);
    });
  }
  dispose() {
    return (
      super.dispose(),
      this._oscillator !== null && this._oscillator.dispose(),
      (this._wave = void 0),
      this.frequency.dispose(),
      this.detune.dispose(),
      this
    );
  }
}
Te._periodicWaveCache = [];
class Xa extends G {
  constructor() {
    super(Object.assign(P(Xa.getDefaults(), arguments, ['context'])));
  }
  connect(e, n = 0, r = 0) {
    return ah(this, e, n, r), this;
  }
}
class yi extends Xa {
  constructor() {
    super(Object.assign(P(yi.getDefaults(), arguments, ['mapping', 'length']))),
      (this.name = 'WaveShaper'),
      (this._shaper = this.context.createWaveShaper()),
      (this.input = this._shaper),
      (this.output = this._shaper);
    const e = P(yi.getDefaults(), arguments, ['mapping', 'length']);
    jt(e.mapping) || e.mapping instanceof Float32Array
      ? (this.curve = Float32Array.from(e.mapping))
      : dk(e.mapping) && this.setMap(e.mapping, e.length);
  }
  static getDefaults() {
    return Object.assign(De.getDefaults(), { length: 1024 });
  }
  setMap(e, n = 1024) {
    const r = new Float32Array(n);
    for (let s = 0, i = n; s < i; s++) {
      const o = (s / (i - 1)) * 2 - 1;
      r[s] = e(o, s);
    }
    return (this.curve = r), this;
  }
  get curve() {
    return this._shaper.curve;
  }
  set curve(e) {
    this._shaper.curve = e;
  }
  get oversample() {
    return this._shaper.oversample;
  }
  set oversample(e) {
    const n = ['none', '2x', '4x'].some((r) => r.includes(e));
    H(n, "oversampling must be either 'none', '2x', or '4x'"),
      (this._shaper.oversample = e);
  }
  dispose() {
    return super.dispose(), this._shaper.disconnect(), this;
  }
}
class jk extends Xa {
  constructor() {
    super(...arguments),
      (this.name = 'AudioToGain'),
      (this._norm = new yi({
        context: this.context,
        mapping: (e) => (e + 1) / 2
      })),
      (this.input = this._norm),
      (this.output = this._norm);
  }
  dispose() {
    return super.dispose(), this._norm.dispose(), this;
  }
}
class Sr extends De {
  constructor() {
    super(Object.assign(P(Sr.getDefaults(), arguments, ['value']))),
      (this.name = 'Multiply'),
      (this.override = !1);
    const e = P(Sr.getDefaults(), arguments, ['value']);
    (this._mult =
      this.input =
      this.output =
        new Ye({
          context: this.context,
          minValue: e.minValue,
          maxValue: e.maxValue
        })),
      (this.factor = this._param = this._mult.gain),
      this.factor.setValueAtTime(e.value, 0);
  }
  static getDefaults() {
    return Object.assign(De.getDefaults(), { value: 0 });
  }
  dispose() {
    return super.dispose(), this._mult.dispose(), this;
  }
}
class _i extends mt {
  constructor() {
    super(
      P(_i.getDefaults(), arguments, ['frequency', 'type', 'modulationType'])
    ),
      (this.name = 'AMOscillator'),
      (this._modulationScale = new jk({ context: this.context })),
      (this._modulationNode = new Ye({ context: this.context }));
    const e = P(_i.getDefaults(), arguments, [
      'frequency',
      'type',
      'modulationType'
    ]);
    (this._carrier = new Te({
      context: this.context,
      detune: e.detune,
      frequency: e.frequency,
      onstop: () => this.onstop(this),
      phase: e.phase,
      type: e.type
    })),
      (this.frequency = this._carrier.frequency),
      (this.detune = this._carrier.detune),
      (this._modulator = new Te({
        context: this.context,
        phase: e.phase,
        type: e.modulationType
      })),
      (this.harmonicity = new Sr({
        context: this.context,
        units: 'positive',
        value: e.harmonicity
      })),
      this.frequency.chain(this.harmonicity, this._modulator.frequency),
      this._modulator.chain(this._modulationScale, this._modulationNode.gain),
      this._carrier.chain(this._modulationNode, this.output),
      ve(this, ['frequency', 'detune', 'harmonicity']);
  }
  static getDefaults() {
    return Object.assign(Te.getDefaults(), {
      harmonicity: 1,
      modulationType: 'square'
    });
  }
  _start(e) {
    this._modulator.start(e), this._carrier.start(e);
  }
  _stop(e) {
    this._modulator.stop(e), this._carrier.stop(e);
  }
  _restart(e) {
    this._modulator.restart(e), this._carrier.restart(e);
  }
  get type() {
    return this._carrier.type;
  }
  set type(e) {
    this._carrier.type = e;
  }
  get baseType() {
    return this._carrier.baseType;
  }
  set baseType(e) {
    this._carrier.baseType = e;
  }
  get partialCount() {
    return this._carrier.partialCount;
  }
  set partialCount(e) {
    this._carrier.partialCount = e;
  }
  get modulationType() {
    return this._modulator.type;
  }
  set modulationType(e) {
    this._modulator.type = e;
  }
  get phase() {
    return this._carrier.phase;
  }
  set phase(e) {
    (this._carrier.phase = e), (this._modulator.phase = e);
  }
  get partials() {
    return this._carrier.partials;
  }
  set partials(e) {
    this._carrier.partials = e;
  }
  asArray(e = 1024) {
    return Ee(this, void 0, void 0, function* () {
      return Or(this, e);
    });
  }
  dispose() {
    return (
      super.dispose(),
      this.frequency.dispose(),
      this.detune.dispose(),
      this.harmonicity.dispose(),
      this._carrier.dispose(),
      this._modulator.dispose(),
      this._modulationNode.dispose(),
      this._modulationScale.dispose(),
      this
    );
  }
}
class vi extends mt {
  constructor() {
    super(
      P(vi.getDefaults(), arguments, ['frequency', 'type', 'modulationType'])
    ),
      (this.name = 'FMOscillator'),
      (this._modulationNode = new Ye({ context: this.context, gain: 0 }));
    const e = P(vi.getDefaults(), arguments, [
      'frequency',
      'type',
      'modulationType'
    ]);
    (this._carrier = new Te({
      context: this.context,
      detune: e.detune,
      frequency: 0,
      onstop: () => this.onstop(this),
      phase: e.phase,
      type: e.type
    })),
      (this.detune = this._carrier.detune),
      (this.frequency = new De({
        context: this.context,
        units: 'frequency',
        value: e.frequency
      })),
      (this._modulator = new Te({
        context: this.context,
        phase: e.phase,
        type: e.modulationType
      })),
      (this.harmonicity = new Sr({
        context: this.context,
        units: 'positive',
        value: e.harmonicity
      })),
      (this.modulationIndex = new Sr({
        context: this.context,
        units: 'positive',
        value: e.modulationIndex
      })),
      this.frequency.connect(this._carrier.frequency),
      this.frequency.chain(this.harmonicity, this._modulator.frequency),
      this.frequency.chain(this.modulationIndex, this._modulationNode),
      this._modulator.connect(this._modulationNode.gain),
      this._modulationNode.connect(this._carrier.frequency),
      this._carrier.connect(this.output),
      this.detune.connect(this._modulator.detune),
      ve(this, ['modulationIndex', 'frequency', 'detune', 'harmonicity']);
  }
  static getDefaults() {
    return Object.assign(Te.getDefaults(), {
      harmonicity: 1,
      modulationIndex: 2,
      modulationType: 'square'
    });
  }
  _start(e) {
    this._modulator.start(e), this._carrier.start(e);
  }
  _stop(e) {
    this._modulator.stop(e), this._carrier.stop(e);
  }
  _restart(e) {
    return this._modulator.restart(e), this._carrier.restart(e), this;
  }
  get type() {
    return this._carrier.type;
  }
  set type(e) {
    this._carrier.type = e;
  }
  get baseType() {
    return this._carrier.baseType;
  }
  set baseType(e) {
    this._carrier.baseType = e;
  }
  get partialCount() {
    return this._carrier.partialCount;
  }
  set partialCount(e) {
    this._carrier.partialCount = e;
  }
  get modulationType() {
    return this._modulator.type;
  }
  set modulationType(e) {
    this._modulator.type = e;
  }
  get phase() {
    return this._carrier.phase;
  }
  set phase(e) {
    (this._carrier.phase = e), (this._modulator.phase = e);
  }
  get partials() {
    return this._carrier.partials;
  }
  set partials(e) {
    this._carrier.partials = e;
  }
  asArray(e = 1024) {
    return Ee(this, void 0, void 0, function* () {
      return Or(this, e);
    });
  }
  dispose() {
    return (
      super.dispose(),
      this.frequency.dispose(),
      this.harmonicity.dispose(),
      this._carrier.dispose(),
      this._modulator.dispose(),
      this._modulationNode.dispose(),
      this.modulationIndex.dispose(),
      this
    );
  }
}
class hs extends mt {
  constructor() {
    super(P(hs.getDefaults(), arguments, ['frequency', 'width'])),
      (this.name = 'PulseOscillator'),
      (this._widthGate = new Ye({ context: this.context, gain: 0 })),
      (this._thresh = new yi({
        context: this.context,
        mapping: (n) => (n <= 0 ? -1 : 1)
      }));
    const e = P(hs.getDefaults(), arguments, ['frequency', 'width']);
    (this.width = new De({
      context: this.context,
      units: 'audioRange',
      value: e.width
    })),
      (this._triangle = new Te({
        context: this.context,
        detune: e.detune,
        frequency: e.frequency,
        onstop: () => this.onstop(this),
        phase: e.phase,
        type: 'triangle'
      })),
      (this.frequency = this._triangle.frequency),
      (this.detune = this._triangle.detune),
      this._triangle.chain(this._thresh, this.output),
      this.width.chain(this._widthGate, this._thresh),
      ve(this, ['width', 'frequency', 'detune']);
  }
  static getDefaults() {
    return Object.assign(mt.getDefaults(), {
      detune: 0,
      frequency: 440,
      phase: 0,
      type: 'pulse',
      width: 0.2
    });
  }
  _start(e) {
    (e = this.toSeconds(e)),
      this._triangle.start(e),
      this._widthGate.gain.setValueAtTime(1, e);
  }
  _stop(e) {
    (e = this.toSeconds(e)),
      this._triangle.stop(e),
      this._widthGate.gain.cancelScheduledValues(e),
      this._widthGate.gain.setValueAtTime(0, e);
  }
  _restart(e) {
    this._triangle.restart(e),
      this._widthGate.gain.cancelScheduledValues(e),
      this._widthGate.gain.setValueAtTime(1, e);
  }
  get phase() {
    return this._triangle.phase;
  }
  set phase(e) {
    this._triangle.phase = e;
  }
  get type() {
    return 'pulse';
  }
  get baseType() {
    return 'pulse';
  }
  get partials() {
    return [];
  }
  get partialCount() {
    return 0;
  }
  set carrierType(e) {
    this._triangle.type = e;
  }
  asArray(e = 1024) {
    return Ee(this, void 0, void 0, function* () {
      return Or(this, e);
    });
  }
  dispose() {
    return (
      super.dispose(),
      this._triangle.dispose(),
      this.width.dispose(),
      this._widthGate.dispose(),
      this._thresh.dispose(),
      this
    );
  }
}
class wi extends mt {
  constructor() {
    super(P(wi.getDefaults(), arguments, ['frequency', 'type', 'spread'])),
      (this.name = 'FatOscillator'),
      (this._oscillators = []);
    const e = P(wi.getDefaults(), arguments, ['frequency', 'type', 'spread']);
    (this.frequency = new De({
      context: this.context,
      units: 'frequency',
      value: e.frequency
    })),
      (this.detune = new De({
        context: this.context,
        units: 'cents',
        value: e.detune
      })),
      (this._spread = e.spread),
      (this._type = e.type),
      (this._phase = e.phase),
      (this._partials = e.partials),
      (this._partialCount = e.partialCount),
      (this.count = e.count),
      ve(this, ['frequency', 'detune']);
  }
  static getDefaults() {
    return Object.assign(Te.getDefaults(), {
      count: 3,
      spread: 20,
      type: 'sawtooth'
    });
  }
  _start(e) {
    (e = this.toSeconds(e)), this._forEach((n) => n.start(e));
  }
  _stop(e) {
    (e = this.toSeconds(e)), this._forEach((n) => n.stop(e));
  }
  _restart(e) {
    this._forEach((n) => n.restart(e));
  }
  _forEach(e) {
    for (let n = 0; n < this._oscillators.length; n++)
      e(this._oscillators[n], n);
  }
  get type() {
    return this._type;
  }
  set type(e) {
    (this._type = e), this._forEach((n) => (n.type = e));
  }
  get spread() {
    return this._spread;
  }
  set spread(e) {
    if (((this._spread = e), this._oscillators.length > 1)) {
      const n = -e / 2,
        r = e / (this._oscillators.length - 1);
      this._forEach((s, i) => (s.detune.value = n + r * i));
    }
  }
  get count() {
    return this._oscillators.length;
  }
  set count(e) {
    if (($n(e, 1), this._oscillators.length !== e)) {
      this._forEach((n) => n.dispose()), (this._oscillators = []);
      for (let n = 0; n < e; n++) {
        const r = new Te({
          context: this.context,
          volume: -6 - e * 1.1,
          type: this._type,
          phase: this._phase + (n / e) * 360,
          partialCount: this._partialCount,
          onstop: n === 0 ? () => this.onstop(this) : ne
        });
        this.type === 'custom' && (r.partials = this._partials),
          this.frequency.connect(r.frequency),
          this.detune.connect(r.detune),
          (r.detune.overridden = !1),
          r.connect(this.output),
          (this._oscillators[n] = r);
      }
      (this.spread = this._spread),
        this.state === 'started' && this._forEach((n) => n.start());
    }
  }
  get phase() {
    return this._phase;
  }
  set phase(e) {
    (this._phase = e),
      this._forEach((n, r) => (n.phase = this._phase + (r / this.count) * 360));
  }
  get baseType() {
    return this._oscillators[0].baseType;
  }
  set baseType(e) {
    this._forEach((n) => (n.baseType = e)),
      (this._type = this._oscillators[0].type);
  }
  get partials() {
    return this._oscillators[0].partials;
  }
  set partials(e) {
    (this._partials = e),
      (this._partialCount = this._partials.length),
      e.length &&
        ((this._type = 'custom'), this._forEach((n) => (n.partials = e)));
  }
  get partialCount() {
    return this._oscillators[0].partialCount;
  }
  set partialCount(e) {
    (this._partialCount = e),
      this._forEach((n) => (n.partialCount = e)),
      (this._type = this._oscillators[0].type);
  }
  asArray(e = 1024) {
    return Ee(this, void 0, void 0, function* () {
      return Or(this, e);
    });
  }
  dispose() {
    return (
      super.dispose(),
      this.frequency.dispose(),
      this.detune.dispose(),
      this._forEach((e) => e.dispose()),
      this
    );
  }
}
class Si extends mt {
  constructor() {
    super(P(Si.getDefaults(), arguments, ['frequency', 'modulationFrequency'])),
      (this.name = 'PWMOscillator'),
      (this.sourceType = 'pwm'),
      (this._scale = new Sr({ context: this.context, value: 2 }));
    const e = P(Si.getDefaults(), arguments, [
      'frequency',
      'modulationFrequency'
    ]);
    (this._pulse = new hs({
      context: this.context,
      frequency: e.modulationFrequency
    })),
      (this._pulse.carrierType = 'sine'),
      (this.modulationFrequency = this._pulse.frequency),
      (this._modulator = new Te({
        context: this.context,
        detune: e.detune,
        frequency: e.frequency,
        onstop: () => this.onstop(this),
        phase: e.phase
      })),
      (this.frequency = this._modulator.frequency),
      (this.detune = this._modulator.detune),
      this._modulator.chain(this._scale, this._pulse.width),
      this._pulse.connect(this.output),
      ve(this, ['modulationFrequency', 'frequency', 'detune']);
  }
  static getDefaults() {
    return Object.assign(mt.getDefaults(), {
      detune: 0,
      frequency: 440,
      modulationFrequency: 0.4,
      phase: 0,
      type: 'pwm'
    });
  }
  _start(e) {
    (e = this.toSeconds(e)), this._modulator.start(e), this._pulse.start(e);
  }
  _stop(e) {
    (e = this.toSeconds(e)), this._modulator.stop(e), this._pulse.stop(e);
  }
  _restart(e) {
    this._modulator.restart(e), this._pulse.restart(e);
  }
  get type() {
    return 'pwm';
  }
  get baseType() {
    return 'pwm';
  }
  get partials() {
    return [];
  }
  get partialCount() {
    return 0;
  }
  get phase() {
    return this._modulator.phase;
  }
  set phase(e) {
    this._modulator.phase = e;
  }
  asArray(e = 1024) {
    return Ee(this, void 0, void 0, function* () {
      return Or(this, e);
    });
  }
  dispose() {
    return (
      super.dispose(),
      this._pulse.dispose(),
      this._scale.dispose(),
      this._modulator.dispose(),
      this
    );
  }
}
const Gd = { am: _i, fat: wi, fm: vi, oscillator: Te, pulse: hs, pwm: Si };
class Ti extends mt {
  constructor() {
    super(P(Ti.getDefaults(), arguments, ['frequency', 'type'])),
      (this.name = 'OmniOscillator');
    const e = P(Ti.getDefaults(), arguments, ['frequency', 'type']);
    (this.frequency = new De({
      context: this.context,
      units: 'frequency',
      value: e.frequency
    })),
      (this.detune = new De({
        context: this.context,
        units: 'cents',
        value: e.detune
      })),
      ve(this, ['frequency', 'detune']),
      this.set(e);
  }
  static getDefaults() {
    return Object.assign(
      Te.getDefaults(),
      vi.getDefaults(),
      _i.getDefaults(),
      wi.getDefaults(),
      hs.getDefaults(),
      Si.getDefaults()
    );
  }
  _start(e) {
    this._oscillator.start(e);
  }
  _stop(e) {
    this._oscillator.stop(e);
  }
  _restart(e) {
    return this._oscillator.restart(e), this;
  }
  get type() {
    let e = '';
    return (
      ['am', 'fm', 'fat'].some((n) => this._sourceType === n) &&
        (e = this._sourceType),
      e + this._oscillator.type
    );
  }
  set type(e) {
    e.substr(0, 2) === 'fm'
      ? (this._createNewOscillator('fm'),
        (this._oscillator = this._oscillator),
        (this._oscillator.type = e.substr(2)))
      : e.substr(0, 2) === 'am'
        ? (this._createNewOscillator('am'),
          (this._oscillator = this._oscillator),
          (this._oscillator.type = e.substr(2)))
        : e.substr(0, 3) === 'fat'
          ? (this._createNewOscillator('fat'),
            (this._oscillator = this._oscillator),
            (this._oscillator.type = e.substr(3)))
          : e === 'pwm'
            ? (this._createNewOscillator('pwm'),
              (this._oscillator = this._oscillator))
            : e === 'pulse'
              ? this._createNewOscillator('pulse')
              : (this._createNewOscillator('oscillator'),
                (this._oscillator = this._oscillator),
                (this._oscillator.type = e));
  }
  get partials() {
    return this._oscillator.partials;
  }
  set partials(e) {
    !this._getOscType(this._oscillator, 'pulse') &&
      !this._getOscType(this._oscillator, 'pwm') &&
      (this._oscillator.partials = e);
  }
  get partialCount() {
    return this._oscillator.partialCount;
  }
  set partialCount(e) {
    !this._getOscType(this._oscillator, 'pulse') &&
      !this._getOscType(this._oscillator, 'pwm') &&
      (this._oscillator.partialCount = e);
  }
  set(e) {
    return (
      Reflect.has(e, 'type') && e.type && (this.type = e.type),
      super.set(e),
      this
    );
  }
  _createNewOscillator(e) {
    if (e !== this._sourceType) {
      this._sourceType = e;
      const n = Gd[e],
        r = this.now();
      if (this._oscillator) {
        const s = this._oscillator;
        s.stop(r), this.context.setTimeout(() => s.dispose(), this.blockTime);
      }
      (this._oscillator = new n({ context: this.context })),
        this.frequency.connect(this._oscillator.frequency),
        this.detune.connect(this._oscillator.detune),
        this._oscillator.connect(this.output),
        (this._oscillator.onstop = () => this.onstop(this)),
        this.state === 'started' && this._oscillator.start(r);
    }
  }
  get phase() {
    return this._oscillator.phase;
  }
  set phase(e) {
    this._oscillator.phase = e;
  }
  get sourceType() {
    return this._sourceType;
  }
  set sourceType(e) {
    let n = 'sine';
    this._oscillator.type !== 'pwm' &&
      this._oscillator.type !== 'pulse' &&
      (n = this._oscillator.type),
      e === 'fm'
        ? (this.type = 'fm' + n)
        : e === 'am'
          ? (this.type = 'am' + n)
          : e === 'fat'
            ? (this.type = 'fat' + n)
            : e === 'oscillator'
              ? (this.type = n)
              : e === 'pulse'
                ? (this.type = 'pulse')
                : e === 'pwm' && (this.type = 'pwm');
  }
  _getOscType(e, n) {
    return e instanceof Gd[n];
  }
  get baseType() {
    return this._oscillator.baseType;
  }
  set baseType(e) {
    !this._getOscType(this._oscillator, 'pulse') &&
      !this._getOscType(this._oscillator, 'pwm') &&
      e !== 'pulse' &&
      e !== 'pwm' &&
      (this._oscillator.baseType = e);
  }
  get width() {
    if (this._getOscType(this._oscillator, 'pulse'))
      return this._oscillator.width;
  }
  get count() {
    if (this._getOscType(this._oscillator, 'fat'))
      return this._oscillator.count;
  }
  set count(e) {
    this._getOscType(this._oscillator, 'fat') &&
      _r(e) &&
      (this._oscillator.count = e);
  }
  get spread() {
    if (this._getOscType(this._oscillator, 'fat'))
      return this._oscillator.spread;
  }
  set spread(e) {
    this._getOscType(this._oscillator, 'fat') &&
      _r(e) &&
      (this._oscillator.spread = e);
  }
  get modulationType() {
    if (
      this._getOscType(this._oscillator, 'fm') ||
      this._getOscType(this._oscillator, 'am')
    )
      return this._oscillator.modulationType;
  }
  set modulationType(e) {
    (this._getOscType(this._oscillator, 'fm') ||
      this._getOscType(this._oscillator, 'am')) &&
      Yt(e) &&
      (this._oscillator.modulationType = e);
  }
  get modulationIndex() {
    if (this._getOscType(this._oscillator, 'fm'))
      return this._oscillator.modulationIndex;
  }
  get harmonicity() {
    if (
      this._getOscType(this._oscillator, 'fm') ||
      this._getOscType(this._oscillator, 'am')
    )
      return this._oscillator.harmonicity;
  }
  get modulationFrequency() {
    if (this._getOscType(this._oscillator, 'pwm'))
      return this._oscillator.modulationFrequency;
  }
  asArray(e = 1024) {
    return Ee(this, void 0, void 0, function* () {
      return Or(this, e);
    });
  }
  dispose() {
    return (
      super.dispose(),
      this.detune.dispose(),
      this.frequency.dispose(),
      this._oscillator.dispose(),
      this
    );
  }
}
function Pg(t, e = 1 / 0) {
  const n = new WeakMap();
  return function (r, s) {
    Reflect.defineProperty(r, s, {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return n.get(this);
      },
      set: function (i) {
        $n(i, t, e), n.set(this, i);
      }
    });
  };
}
function Sn(t, e = 1 / 0) {
  const n = new WeakMap();
  return function (r, s) {
    Reflect.defineProperty(r, s, {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return n.get(this);
      },
      set: function (i) {
        $n(this.toSeconds(i), t, e), n.set(this, i);
      }
    });
  };
}
class ds extends mt {
  constructor() {
    super(P(ds.getDefaults(), arguments, ['url', 'onload'])),
      (this.name = 'Player'),
      (this._activeSources = new Set());
    const e = P(ds.getDefaults(), arguments, ['url', 'onload']);
    (this._buffer = new re({
      onload: this._onload.bind(this, e.onload),
      onerror: e.onerror,
      reverse: e.reverse,
      url: e.url
    })),
      (this.autostart = e.autostart),
      (this._loop = e.loop),
      (this._loopStart = e.loopStart),
      (this._loopEnd = e.loopEnd),
      (this._playbackRate = e.playbackRate),
      (this.fadeIn = e.fadeIn),
      (this.fadeOut = e.fadeOut);
  }
  static getDefaults() {
    return Object.assign(mt.getDefaults(), {
      autostart: !1,
      fadeIn: 0,
      fadeOut: 0,
      loop: !1,
      loopEnd: 0,
      loopStart: 0,
      onload: ne,
      onerror: ne,
      playbackRate: 1,
      reverse: !1
    });
  }
  load(e) {
    return Ee(this, void 0, void 0, function* () {
      return yield this._buffer.load(e), this._onload(), this;
    });
  }
  _onload(e = ne) {
    e(), this.autostart && this.start();
  }
  _onSourceEnd(e) {
    this.onstop(this),
      this._activeSources.delete(e),
      this._activeSources.size === 0 &&
        !this._synced &&
        this._state.getValueAtTime(this.now()) === 'started' &&
        (this._state.cancel(this.now()),
        this._state.setStateAtTime('stopped', this.now()));
  }
  start(e, n, r) {
    return super.start(e, n, r), this;
  }
  _start(e, n, r) {
    this._loop ? (n = es(n, this._loopStart)) : (n = es(n, 0));
    const s = this.toSeconds(n),
      i = r;
    r = es(r, Math.max(this._buffer.duration - s, 0));
    let o = this.toSeconds(r);
    (o = o / this._playbackRate), (e = this.toSeconds(e));
    const a = new gi({
      url: this._buffer,
      context: this.context,
      fadeIn: this.fadeIn,
      fadeOut: this.fadeOut,
      loop: this._loop,
      loopEnd: this._loopEnd,
      loopStart: this._loopStart,
      onended: this._onSourceEnd.bind(this),
      playbackRate: this._playbackRate
    }).connect(this.output);
    !this._loop &&
      !this._synced &&
      (this._state.cancel(e + o),
      this._state.setStateAtTime('stopped', e + o, { implicitEnd: !0 })),
      this._activeSources.add(a),
      this._loop && Nt(i)
        ? a.start(e, s)
        : a.start(e, s, o - this.toSeconds(this.fadeOut));
  }
  _stop(e) {
    const n = this.toSeconds(e);
    this._activeSources.forEach((r) => r.stop(n));
  }
  restart(e, n, r) {
    return super.restart(e, n, r), this;
  }
  _restart(e, n, r) {
    this._stop(e), this._start(e, n, r);
  }
  seek(e, n) {
    const r = this.toSeconds(n);
    if (this._state.getValueAtTime(r) === 'started') {
      const s = this.toSeconds(e);
      this._stop(r), this._start(r, s);
    }
    return this;
  }
  setLoopPoints(e, n) {
    return (this.loopStart = e), (this.loopEnd = n), this;
  }
  get loopStart() {
    return this._loopStart;
  }
  set loopStart(e) {
    (this._loopStart = e),
      this.buffer.loaded && $n(this.toSeconds(e), 0, this.buffer.duration),
      this._activeSources.forEach((n) => {
        n.loopStart = e;
      });
  }
  get loopEnd() {
    return this._loopEnd;
  }
  set loopEnd(e) {
    (this._loopEnd = e),
      this.buffer.loaded && $n(this.toSeconds(e), 0, this.buffer.duration),
      this._activeSources.forEach((n) => {
        n.loopEnd = e;
      });
  }
  get buffer() {
    return this._buffer;
  }
  set buffer(e) {
    this._buffer.set(e);
  }
  get loop() {
    return this._loop;
  }
  set loop(e) {
    if (
      this._loop !== e &&
      ((this._loop = e),
      this._activeSources.forEach((n) => {
        n.loop = e;
      }),
      e)
    ) {
      const n = this._state.getNextState('stopped', this.now());
      n && this._state.cancel(n.time);
    }
  }
  get playbackRate() {
    return this._playbackRate;
  }
  set playbackRate(e) {
    this._playbackRate = e;
    const n = this.now(),
      r = this._state.getNextState('stopped', n);
    r &&
      r.implicitEnd &&
      (this._state.cancel(r.time),
      this._activeSources.forEach((s) => s.cancelStop())),
      this._activeSources.forEach((s) => {
        s.playbackRate.setValueAtTime(e, n);
      });
  }
  get reverse() {
    return this._buffer.reverse;
  }
  set reverse(e) {
    this._buffer.reverse = e;
  }
  get loaded() {
    return this._buffer.loaded;
  }
  dispose() {
    return (
      super.dispose(),
      this._activeSources.forEach((e) => e.dispose()),
      this._activeSources.clear(),
      this._buffer.dispose(),
      this
    );
  }
}
qt([Sn(0)], ds.prototype, 'fadeIn', void 0);
qt([Sn(0)], ds.prototype, 'fadeOut', void 0);
class gn extends G {
  constructor() {
    super(
      P(gn.getDefaults(), arguments, ['attack', 'decay', 'sustain', 'release'])
    ),
      (this.name = 'Envelope'),
      (this._sig = new De({ context: this.context, value: 0 })),
      (this.output = this._sig),
      (this.input = void 0);
    const e = P(gn.getDefaults(), arguments, [
      'attack',
      'decay',
      'sustain',
      'release'
    ]);
    (this.attack = e.attack),
      (this.decay = e.decay),
      (this.sustain = e.sustain),
      (this.release = e.release),
      (this.attackCurve = e.attackCurve),
      (this.releaseCurve = e.releaseCurve),
      (this.decayCurve = e.decayCurve);
  }
  static getDefaults() {
    return Object.assign(G.getDefaults(), {
      attack: 0.01,
      attackCurve: 'linear',
      decay: 0.1,
      decayCurve: 'exponential',
      release: 1,
      releaseCurve: 'exponential',
      sustain: 0.5
    });
  }
  get value() {
    return this.getValueAtTime(this.now());
  }
  _getCurve(e, n) {
    if (Yt(e)) return e;
    {
      let r;
      for (r in fo) if (fo[r][n] === e) return r;
      return e;
    }
  }
  _setCurve(e, n, r) {
    if (Yt(r) && Reflect.has(fo, r)) {
      const s = fo[r];
      cr(s) ? e !== '_decayCurve' && (this[e] = s[n]) : (this[e] = s);
    } else if (jt(r) && e !== '_decayCurve') this[e] = r;
    else throw new Error('Envelope: invalid curve: ' + r);
  }
  get attackCurve() {
    return this._getCurve(this._attackCurve, 'In');
  }
  set attackCurve(e) {
    this._setCurve('_attackCurve', 'In', e);
  }
  get releaseCurve() {
    return this._getCurve(this._releaseCurve, 'Out');
  }
  set releaseCurve(e) {
    this._setCurve('_releaseCurve', 'Out', e);
  }
  get decayCurve() {
    return this._decayCurve;
  }
  set decayCurve(e) {
    H(
      ['linear', 'exponential'].some((n) => n === e),
      `Invalid envelope curve: ${e}`
    ),
      (this._decayCurve = e);
  }
  triggerAttack(e, n = 1) {
    this.log('triggerAttack', e, n), (e = this.toSeconds(e));
    let s = this.toSeconds(this.attack);
    const i = this.toSeconds(this.decay),
      o = this.getValueAtTime(e);
    if (o > 0) {
      const a = 1 / s;
      s = (1 - o) / a;
    }
    if (s < this.sampleTime)
      this._sig.cancelScheduledValues(e), this._sig.setValueAtTime(n, e);
    else if (this._attackCurve === 'linear') this._sig.linearRampTo(n, s, e);
    else if (this._attackCurve === 'exponential')
      this._sig.targetRampTo(n, s, e);
    else {
      this._sig.cancelAndHoldAtTime(e);
      let a = this._attackCurve;
      for (let l = 1; l < a.length; l++)
        if (a[l - 1] <= o && o <= a[l]) {
          (a = this._attackCurve.slice(l)), (a[0] = o);
          break;
        }
      this._sig.setValueCurveAtTime(a, e, s, n);
    }
    if (i && this.sustain < 1) {
      const a = n * this.sustain,
        l = e + s;
      this.log('decay', l),
        this._decayCurve === 'linear'
          ? this._sig.linearRampToValueAtTime(a, i + l)
          : this._sig.exponentialApproachValueAtTime(a, l, i);
    }
    return this;
  }
  triggerRelease(e) {
    this.log('triggerRelease', e), (e = this.toSeconds(e));
    const n = this.getValueAtTime(e);
    if (n > 0) {
      const r = this.toSeconds(this.release);
      r < this.sampleTime
        ? this._sig.setValueAtTime(0, e)
        : this._releaseCurve === 'linear'
          ? this._sig.linearRampTo(0, r, e)
          : this._releaseCurve === 'exponential'
            ? this._sig.targetRampTo(0, r, e)
            : (H(
                jt(this._releaseCurve),
                "releaseCurve must be either 'linear', 'exponential' or an array"
              ),
              this._sig.cancelAndHoldAtTime(e),
              this._sig.setValueCurveAtTime(this._releaseCurve, e, r, n));
    }
    return this;
  }
  getValueAtTime(e) {
    return this._sig.getValueAtTime(e);
  }
  triggerAttackRelease(e, n, r = 1) {
    return (
      (n = this.toSeconds(n)),
      this.triggerAttack(n, r),
      this.triggerRelease(n + this.toSeconds(e)),
      this
    );
  }
  cancel(e) {
    return this._sig.cancelScheduledValues(this.toSeconds(e)), this;
  }
  connect(e, n = 0, r = 0) {
    return ah(this, e, n, r), this;
  }
  asArray(e = 1024) {
    return Ee(this, void 0, void 0, function* () {
      const n = e / this.context.sampleRate,
        r = new sh(1, n, this.context.sampleRate),
        s = this.toSeconds(this.attack) + this.toSeconds(this.decay),
        i = s + this.toSeconds(this.release),
        o = i * 0.1,
        a = i + o,
        l = new this.constructor(
          Object.assign(this.get(), {
            attack: (n * this.toSeconds(this.attack)) / a,
            decay: (n * this.toSeconds(this.decay)) / a,
            release: (n * this.toSeconds(this.release)) / a,
            context: r
          })
        );
      return (
        l._sig.toDestination(),
        l.triggerAttackRelease((n * (s + o)) / a, 0),
        (yield r.render()).getChannelData(0)
      );
    });
  }
  dispose() {
    return super.dispose(), this._sig.dispose(), this;
  }
}
qt([Sn(0)], gn.prototype, 'attack', void 0);
qt([Sn(0)], gn.prototype, 'decay', void 0);
qt([Pg(0, 1)], gn.prototype, 'sustain', void 0);
qt([Sn(0)], gn.prototype, 'release', void 0);
const fo = (() => {
  let e, n;
  const r = [];
  for (e = 0; e < 128; e++) r[e] = Math.sin((e / 127) * (Math.PI / 2));
  const s = [],
    i = 6.4;
  for (e = 0; e < 127; e++) {
    n = e / 127;
    const d = Math.sin(n * (Math.PI * 2) * i - Math.PI / 2) + 1;
    s[e] = d / 10 + n * 0.83;
  }
  s[127] = 1;
  const o = [],
    a = 5;
  for (e = 0; e < 128; e++) o[e] = Math.ceil((e / 127) * a) / a;
  const l = [];
  for (e = 0; e < 128; e++)
    (n = e / 127), (l[e] = 0.5 * (1 - Math.cos(Math.PI * n)));
  const u = [];
  for (e = 0; e < 128; e++) {
    n = e / 127;
    const d = Math.pow(n, 3) * 4 + 0.2,
      m = Math.cos(d * Math.PI * 2 * n);
    u[e] = Math.abs(m * (1 - n));
  }
  function c(d) {
    const m = new Array(d.length);
    for (let p = 0; p < d.length; p++) m[p] = 1 - d[p];
    return m;
  }
  function h(d) {
    return d.slice(0).reverse();
  }
  return {
    bounce: { In: c(u), Out: u },
    cosine: { In: r, Out: h(r) },
    exponential: 'exponential',
    linear: 'linear',
    ripple: { In: s, Out: c(s) },
    sine: { In: l, Out: c(l) },
    step: { In: o, Out: c(o) }
  };
})();
class Tr extends G {
  constructor() {
    super(P(Tr.getDefaults(), arguments)),
      (this._scheduledEvents = []),
      (this._synced = !1),
      (this._original_triggerAttack = this.triggerAttack),
      (this._original_triggerRelease = this.triggerRelease);
    const e = P(Tr.getDefaults(), arguments);
    (this._volume = this.output =
      new wr({ context: this.context, volume: e.volume })),
      (this.volume = this._volume.volume),
      ve(this, 'volume');
  }
  static getDefaults() {
    return Object.assign(G.getDefaults(), { volume: 0 });
  }
  sync() {
    return (
      this._syncState() &&
        (this._syncMethod('triggerAttack', 1),
        this._syncMethod('triggerRelease', 0)),
      this
    );
  }
  _syncState() {
    let e = !1;
    return this._synced || ((this._synced = !0), (e = !0)), e;
  }
  _syncMethod(e, n) {
    const r = (this['_original_' + e] = this[e]);
    this[e] = (...s) => {
      const i = s[n],
        o = this.context.transport.schedule((a) => {
          (s[n] = a), r.apply(this, s);
        }, i);
      this._scheduledEvents.push(o);
    };
  }
  unsync() {
    return (
      this._scheduledEvents.forEach((e) => this.context.transport.clear(e)),
      (this._scheduledEvents = []),
      this._synced &&
        ((this._synced = !1),
        (this.triggerAttack = this._original_triggerAttack),
        (this.triggerRelease = this._original_triggerRelease)),
      this
    );
  }
  triggerAttackRelease(e, n, r, s) {
    const i = this.toSeconds(r),
      o = this.toSeconds(n);
    return this.triggerAttack(e, i, s), this.triggerRelease(i + o), this;
  }
  dispose() {
    return (
      super.dispose(),
      this._volume.dispose(),
      this.unsync(),
      (this._scheduledEvents = []),
      this
    );
  }
}
class kr extends Tr {
  constructor() {
    super(P(kr.getDefaults(), arguments));
    const e = P(kr.getDefaults(), arguments);
    (this.portamento = e.portamento), (this.onsilence = e.onsilence);
  }
  static getDefaults() {
    return Object.assign(Tr.getDefaults(), {
      detune: 0,
      onsilence: ne,
      portamento: 0
    });
  }
  triggerAttack(e, n, r = 1) {
    this.log('triggerAttack', e, n, r);
    const s = this.toSeconds(n);
    return this._triggerEnvelopeAttack(s, r), this.setNote(e, s), this;
  }
  triggerRelease(e) {
    this.log('triggerRelease', e);
    const n = this.toSeconds(e);
    return this._triggerEnvelopeRelease(n), this;
  }
  setNote(e, n) {
    const r = this.toSeconds(n),
      s = e instanceof Ct ? e.toFrequency() : e;
    if (this.portamento > 0 && this.getLevelAtTime(r) > 0.05) {
      const i = this.toSeconds(this.portamento);
      this.frequency.exponentialRampTo(s, i, r);
    } else this.frequency.setValueAtTime(s, r);
    return this;
  }
}
qt([Sn(0)], kr.prototype, 'portamento', void 0);
class uh extends gn {
  constructor() {
    super(
      P(uh.getDefaults(), arguments, ['attack', 'decay', 'sustain', 'release'])
    ),
      (this.name = 'AmplitudeEnvelope'),
      (this._gainNode = new Ye({ context: this.context, gain: 0 })),
      (this.output = this._gainNode),
      (this.input = this._gainNode),
      this._sig.connect(this._gainNode.gain),
      (this.output = this._gainNode),
      (this.input = this._gainNode);
  }
  dispose() {
    return super.dispose(), this._gainNode.dispose(), this;
  }
}
class ki extends kr {
  constructor() {
    super(P(ki.getDefaults(), arguments)), (this.name = 'Synth');
    const e = P(ki.getDefaults(), arguments);
    (this.oscillator = new Ti(
      Object.assign(
        {
          context: this.context,
          detune: e.detune,
          onstop: () => this.onsilence(this)
        },
        e.oscillator
      )
    )),
      (this.frequency = this.oscillator.frequency),
      (this.detune = this.oscillator.detune),
      (this.envelope = new uh(
        Object.assign({ context: this.context }, e.envelope)
      )),
      this.oscillator.chain(this.envelope, this.output),
      ve(this, ['oscillator', 'frequency', 'detune', 'envelope']);
  }
  static getDefaults() {
    return Object.assign(kr.getDefaults(), {
      envelope: Object.assign(
        Hd(gn.getDefaults(), Object.keys(G.getDefaults())),
        { attack: 0.005, decay: 0.1, release: 1, sustain: 0.3 }
      ),
      oscillator: Object.assign(
        Hd(Ti.getDefaults(), [
          ...Object.keys(mt.getDefaults()),
          'frequency',
          'detune'
        ]),
        { type: 'triangle' }
      )
    });
  }
  _triggerEnvelopeAttack(e, n) {
    if (
      (this.envelope.triggerAttack(e, n),
      this.oscillator.start(e),
      this.envelope.sustain === 0)
    ) {
      const r = this.toSeconds(this.envelope.attack),
        s = this.toSeconds(this.envelope.decay);
      this.oscillator.stop(e + r + s);
    }
  }
  _triggerEnvelopeRelease(e) {
    this.envelope.triggerRelease(e),
      this.oscillator.stop(e + this.toSeconds(this.envelope.release));
  }
  getLevelAtTime(e) {
    return (e = this.toSeconds(e)), this.envelope.getValueAtTime(e);
  }
  dispose() {
    return (
      super.dispose(), this.oscillator.dispose(), this.envelope.dispose(), this
    );
  }
}
class Ci extends ki {
  constructor() {
    super(P(Ci.getDefaults(), arguments)),
      (this.name = 'MembraneSynth'),
      (this.portamento = 0);
    const e = P(Ci.getDefaults(), arguments);
    (this.pitchDecay = e.pitchDecay),
      (this.octaves = e.octaves),
      ve(this, ['oscillator', 'envelope']);
  }
  static getDefaults() {
    return Jr(kr.getDefaults(), ki.getDefaults(), {
      envelope: {
        attack: 0.001,
        attackCurve: 'exponential',
        decay: 0.4,
        release: 1.4,
        sustain: 0.01
      },
      octaves: 10,
      oscillator: { type: 'sine' },
      pitchDecay: 0.05
    });
  }
  setNote(e, n) {
    const r = this.toSeconds(n),
      s = this.toFrequency(e instanceof Ct ? e.toFrequency() : e),
      i = s * this.octaves;
    return (
      this.oscillator.frequency.setValueAtTime(i, r),
      this.oscillator.frequency.exponentialRampToValueAtTime(
        s,
        r + this.toSeconds(this.pitchDecay)
      ),
      this
    );
  }
  dispose() {
    return super.dispose(), this;
  }
}
qt([Pg(0)], Ci.prototype, 'octaves', void 0);
qt([Sn(0)], Ci.prototype, 'pitchDecay', void 0);
const Rg = new Set();
function ch(t) {
  Rg.add(t);
}
function Fg(t, e) {
  const n = `registerProcessor("${t}", ${e})`;
  Rg.add(n);
}
const zk = `
	/**
	 * The base AudioWorkletProcessor for use in Tone.js. Works with the [[ToneAudioWorklet]]. 
	 */
	class ToneAudioWorkletProcessor extends AudioWorkletProcessor {

		constructor(options) {
			
			super(options);
			/**
			 * If the processor was disposed or not. Keep alive until it's disposed.
			 */
			this.disposed = false;
		   	/** 
			 * The number of samples in the processing block
			 */
			this.blockSize = 128;
			/**
			 * the sample rate
			 */
			this.sampleRate = sampleRate;

			this.port.onmessage = (event) => {
				// when it receives a dispose 
				if (event.data === "dispose") {
					this.disposed = true;
				}
			};
		}
	}
`;
ch(zk);
const Wk = `
	/**
	 * Abstract class for a single input/output processor. 
	 * has a 'generate' function which processes one sample at a time
	 */
	class SingleIOProcessor extends ToneAudioWorkletProcessor {

		constructor(options) {
			super(Object.assign(options, {
				numberOfInputs: 1,
				numberOfOutputs: 1
			}));
			/**
			 * Holds the name of the parameter and a single value of that
			 * parameter at the current sample
			 * @type { [name: string]: number }
			 */
			this.params = {}
		}

		/**
		 * Generate an output sample from the input sample and parameters
		 * @abstract
		 * @param input number
		 * @param channel number
		 * @param parameters { [name: string]: number }
		 * @returns number
		 */
		generate(){}

		/**
		 * Update the private params object with the 
		 * values of the parameters at the given index
		 * @param parameters { [name: string]: Float32Array },
		 * @param index number
		 */
		updateParams(parameters, index) {
			for (const paramName in parameters) {
				const param = parameters[paramName];
				if (param.length > 1) {
					this.params[paramName] = parameters[paramName][index];
				} else {
					this.params[paramName] = parameters[paramName][0];
				}
			}
		}

		/**
		 * Process a single frame of the audio
		 * @param inputs Float32Array[][]
		 * @param outputs Float32Array[][]
		 */
		process(inputs, outputs, parameters) {
			const input = inputs[0];
			const output = outputs[0];
			// get the parameter values
			const channelCount = Math.max(input && input.length || 0, output.length);
			for (let sample = 0; sample < this.blockSize; sample++) {
				this.updateParams(parameters, sample);
				for (let channel = 0; channel < channelCount; channel++) {
					const inputSample = input && input.length ? input[channel][sample] : 0;
					output[channel][sample] = this.generate(inputSample, channel, this.params);
				}
			}
			return !this.disposed;
		}
	};
`;
ch(Wk);
const Bk = `
	/**
	 * A multichannel buffer for use within an AudioWorkletProcessor as a delay line
	 */
	class DelayLine {
		
		constructor(size, channels) {
			this.buffer = [];
			this.writeHead = []
			this.size = size;

			// create the empty channels
			for (let i = 0; i < channels; i++) {
				this.buffer[i] = new Float32Array(this.size);
				this.writeHead[i] = 0;
			}
		}

		/**
		 * Push a value onto the end
		 * @param channel number
		 * @param value number
		 */
		push(channel, value) {
			this.writeHead[channel] += 1;
			if (this.writeHead[channel] > this.size) {
				this.writeHead[channel] = 0;
			}
			this.buffer[channel][this.writeHead[channel]] = value;
		}

		/**
		 * Get the recorded value of the channel given the delay
		 * @param channel number
		 * @param delay number delay samples
		 */
		get(channel, delay) {
			let readHead = this.writeHead[channel] - Math.floor(delay);
			if (readHead < 0) {
				readHead += this.size;
			}
			return this.buffer[channel][readHead];
		}
	}
`;
ch(Bk);
const Uk = 'feedback-comb-filter',
  qk = `
	class FeedbackCombFilterWorklet extends SingleIOProcessor {

		constructor(options) {
			super(options);
			this.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);
		}

		static get parameterDescriptors() {
			return [{
				name: "delayTime",
				defaultValue: 0.1,
				minValue: 0,
				maxValue: 1,
				automationRate: "k-rate"
			}, {
				name: "feedback",
				defaultValue: 0.5,
				minValue: 0,
				maxValue: 0.9999,
				automationRate: "k-rate"
			}];
		}

		generate(input, channel, parameters) {
			const delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);
			this.delayLine.push(channel, input + delayedSample * parameters.feedback);
			return delayedSample;
		}
	}
`;
Fg(Uk, qk);
class xi extends Tr {
  constructor() {
    super(
      P(xi.getDefaults(), arguments, ['urls', 'onload', 'baseUrl'], 'urls')
    ),
      (this.name = 'Sampler'),
      (this._activeSources = new Map());
    const e = P(
        xi.getDefaults(),
        arguments,
        ['urls', 'onload', 'baseUrl'],
        'urls'
      ),
      n = {};
    Object.keys(e.urls).forEach((r) => {
      const s = parseInt(r, 10);
      if (
        (H(
          ho(r) || (_r(s) && isFinite(s)),
          `url key is neither a note or midi pitch: ${r}`
        ),
        ho(r))
      ) {
        const i = new Ct(this.context, r).toMidi();
        n[i] = e.urls[r];
      } else _r(s) && isFinite(s) && (n[s] = e.urls[s]);
    }),
      (this._buffers = new Qa({
        urls: n,
        onload: e.onload,
        baseUrl: e.baseUrl,
        onerror: e.onerror
      })),
      (this.attack = e.attack),
      (this.release = e.release),
      (this.curve = e.curve),
      this._buffers.loaded && Promise.resolve().then(e.onload);
  }
  static getDefaults() {
    return Object.assign(Tr.getDefaults(), {
      attack: 0,
      baseUrl: '',
      curve: 'exponential',
      onload: ne,
      onerror: ne,
      release: 0.1,
      urls: {}
    });
  }
  _findClosest(e) {
    let r = 0;
    for (; r < 96; ) {
      if (this._buffers.has(e + r)) return -r;
      if (this._buffers.has(e - r)) return r;
      r++;
    }
    throw new Error(`No available buffers for note: ${e}`);
  }
  triggerAttack(e, n, r = 1) {
    return (
      this.log('triggerAttack', e, n, r),
      Array.isArray(e) || (e = [e]),
      e.forEach((s) => {
        const i = Dg(new Ct(this.context, s).toFrequency()),
          o = Math.round(i),
          a = i - o,
          l = this._findClosest(o),
          u = o - l,
          c = this._buffers.get(u),
          h = Ig(l + a),
          d = new gi({
            url: c,
            context: this.context,
            curve: this.curve,
            fadeIn: this.attack,
            fadeOut: this.release,
            playbackRate: h
          }).connect(this.output);
        d.start(n, 0, c.duration / h, r),
          jt(this._activeSources.get(o)) || this._activeSources.set(o, []),
          this._activeSources.get(o).push(d),
          (d.onended = () => {
            if (this._activeSources && this._activeSources.has(o)) {
              const m = this._activeSources.get(o),
                p = m.indexOf(d);
              p !== -1 && m.splice(p, 1);
            }
          });
      }),
      this
    );
  }
  triggerRelease(e, n) {
    return (
      this.log('triggerRelease', e, n),
      Array.isArray(e) || (e = [e]),
      e.forEach((r) => {
        const s = new Ct(this.context, r).toMidi();
        if (this._activeSources.has(s) && this._activeSources.get(s).length) {
          const i = this._activeSources.get(s);
          (n = this.toSeconds(n)),
            i.forEach((o) => {
              o.stop(n);
            }),
            this._activeSources.set(s, []);
        }
      }),
      this
    );
  }
  releaseAll(e) {
    const n = this.toSeconds(e);
    return (
      this._activeSources.forEach((r) => {
        for (; r.length; ) r.shift().stop(n);
      }),
      this
    );
  }
  sync() {
    return (
      this._syncState() &&
        (this._syncMethod('triggerAttack', 1),
        this._syncMethod('triggerRelease', 1)),
      this
    );
  }
  triggerAttackRelease(e, n, r, s = 1) {
    const i = this.toSeconds(r);
    return (
      this.triggerAttack(e, i, s),
      jt(n)
        ? (H(jt(e), 'notes must be an array when duration is array'),
          e.forEach((o, a) => {
            const l = n[Math.min(a, n.length - 1)];
            this.triggerRelease(o, i + this.toSeconds(l));
          }))
        : this.triggerRelease(e, i + this.toSeconds(n)),
      this
    );
  }
  add(e, n, r) {
    if (
      (H(ho(e) || isFinite(e), `note must be a pitch or midi: ${e}`), ho(e))
    ) {
      const s = new Ct(this.context, e).toMidi();
      this._buffers.add(s, n, r);
    } else this._buffers.add(e, n, r);
    return this;
  }
  get loaded() {
    return this._buffers.loaded;
  }
  dispose() {
    return (
      super.dispose(),
      this._buffers.dispose(),
      this._activeSources.forEach((e) => {
        e.forEach((n) => n.dispose());
      }),
      this._activeSources.clear(),
      this
    );
  }
}
qt([Sn(0)], xi.prototype, 'attack', void 0);
qt([Sn(0)], xi.prototype, 'release', void 0);
class ya extends G {
  constructor() {
    super(Object.assign(P(ya.getDefaults(), arguments, ['pan']))),
      (this.name = 'Panner'),
      (this._panner = this.context.createStereoPanner()),
      (this.input = this._panner),
      (this.output = this._panner);
    const e = P(ya.getDefaults(), arguments, ['pan']);
    (this.pan = new ue({
      context: this.context,
      param: this._panner.pan,
      value: e.pan,
      minValue: -1,
      maxValue: 1
    })),
      (this._panner.channelCount = e.channelCount),
      (this._panner.channelCountMode = 'explicit'),
      ve(this, 'pan');
  }
  static getDefaults() {
    return Object.assign(G.getDefaults(), { pan: 0, channelCount: 1 });
  }
  dispose() {
    return super.dispose(), this._panner.disconnect(), this.pan.dispose(), this;
  }
}
const $k = 'bit-crusher',
  Hk = `
	class BitCrusherWorklet extends SingleIOProcessor {

		static get parameterDescriptors() {
			return [{
				name: "bits",
				defaultValue: 12,
				minValue: 1,
				maxValue: 16,
				automationRate: 'k-rate'
			}];
		}

		generate(input, _channel, parameters) {
			const step = Math.pow(0.5, parameters.bits - 1);
			const val = step * Math.floor(input / step + 0.5);
			return val;
		}
	}
`;
Fg($k, Hk);
class Se extends G {
  constructor() {
    super(P(Se.getDefaults(), arguments, ['solo'])), (this.name = 'Solo');
    const e = P(Se.getDefaults(), arguments, ['solo']);
    (this.input = this.output = new Ye({ context: this.context })),
      Se._allSolos.has(this.context) ||
        Se._allSolos.set(this.context, new Set()),
      Se._allSolos.get(this.context).add(this),
      (this.solo = e.solo);
  }
  static getDefaults() {
    return Object.assign(G.getDefaults(), { solo: !1 });
  }
  get solo() {
    return this._isSoloed();
  }
  set solo(e) {
    e ? this._addSolo() : this._removeSolo(),
      Se._allSolos.get(this.context).forEach((n) => n._updateSolo());
  }
  get muted() {
    return this.input.gain.value === 0;
  }
  _addSolo() {
    Se._soloed.has(this.context) || Se._soloed.set(this.context, new Set()),
      Se._soloed.get(this.context).add(this);
  }
  _removeSolo() {
    Se._soloed.has(this.context) && Se._soloed.get(this.context).delete(this);
  }
  _isSoloed() {
    return (
      Se._soloed.has(this.context) && Se._soloed.get(this.context).has(this)
    );
  }
  _noSolos() {
    return (
      !Se._soloed.has(this.context) ||
      (Se._soloed.has(this.context) && Se._soloed.get(this.context).size === 0)
    );
  }
  _updateSolo() {
    this._isSoloed()
      ? (this.input.gain.value = 1)
      : this._noSolos()
        ? (this.input.gain.value = 1)
        : (this.input.gain.value = 0);
  }
  dispose() {
    return (
      super.dispose(),
      Se._allSolos.get(this.context).delete(this),
      this._removeSolo(),
      this
    );
  }
}
Se._allSolos = new Map();
Se._soloed = new Map();
class _a extends G {
  constructor() {
    super(P(_a.getDefaults(), arguments, ['pan', 'volume'])),
      (this.name = 'PanVol');
    const e = P(_a.getDefaults(), arguments, ['pan', 'volume']);
    (this._panner = this.input =
      new ya({
        context: this.context,
        pan: e.pan,
        channelCount: e.channelCount
      })),
      (this.pan = this._panner.pan),
      (this._volume = this.output =
        new wr({ context: this.context, volume: e.volume })),
      (this.volume = this._volume.volume),
      this._panner.connect(this._volume),
      (this.mute = e.mute),
      ve(this, ['pan', 'volume']);
  }
  static getDefaults() {
    return Object.assign(G.getDefaults(), {
      mute: !1,
      pan: 0,
      volume: 0,
      channelCount: 1
    });
  }
  get mute() {
    return this._volume.mute;
  }
  set mute(e) {
    this._volume.mute = e;
  }
  dispose() {
    return (
      super.dispose(),
      this._panner.dispose(),
      this.pan.dispose(),
      this._volume.dispose(),
      this.volume.dispose(),
      this
    );
  }
}
class sr extends G {
  constructor() {
    super(P(sr.getDefaults(), arguments, ['volume', 'pan'])),
      (this.name = 'Channel');
    const e = P(sr.getDefaults(), arguments, ['volume', 'pan']);
    (this._solo = this.input = new Se({ solo: e.solo, context: this.context })),
      (this._panVol = this.output =
        new _a({
          context: this.context,
          pan: e.pan,
          volume: e.volume,
          mute: e.mute,
          channelCount: e.channelCount
        })),
      (this.pan = this._panVol.pan),
      (this.volume = this._panVol.volume),
      this._solo.connect(this._panVol),
      ve(this, ['pan', 'volume']);
  }
  static getDefaults() {
    return Object.assign(G.getDefaults(), {
      pan: 0,
      volume: 0,
      mute: !1,
      solo: !1,
      channelCount: 1
    });
  }
  get solo() {
    return this._solo.solo;
  }
  set solo(e) {
    this._solo.solo = e;
  }
  get muted() {
    return this._solo.muted || this.mute;
  }
  get mute() {
    return this._panVol.mute;
  }
  set mute(e) {
    this._panVol.mute = e;
  }
  _getBus(e) {
    return (
      sr.buses.has(e) || sr.buses.set(e, new Ye({ context: this.context })),
      sr.buses.get(e)
    );
  }
  send(e, n = 0) {
    const r = this._getBus(e),
      s = new Ye({ context: this.context, units: 'decibels', gain: n });
    return this.connect(s), s.connect(r), s;
  }
  receive(e) {
    return this._getBus(e).connect(this), this;
  }
  dispose() {
    return (
      super.dispose(),
      this._panVol.dispose(),
      this.pan.dispose(),
      this.volume.dispose(),
      this._solo.dispose(),
      this
    );
  }
}
sr.buses = new Map();
class Gk extends G {
  constructor() {
    super(...arguments),
      (this.name = 'Listener'),
      (this.positionX = new ue({
        context: this.context,
        param: this.context.rawContext.listener.positionX
      })),
      (this.positionY = new ue({
        context: this.context,
        param: this.context.rawContext.listener.positionY
      })),
      (this.positionZ = new ue({
        context: this.context,
        param: this.context.rawContext.listener.positionZ
      })),
      (this.forwardX = new ue({
        context: this.context,
        param: this.context.rawContext.listener.forwardX
      })),
      (this.forwardY = new ue({
        context: this.context,
        param: this.context.rawContext.listener.forwardY
      })),
      (this.forwardZ = new ue({
        context: this.context,
        param: this.context.rawContext.listener.forwardZ
      })),
      (this.upX = new ue({
        context: this.context,
        param: this.context.rawContext.listener.upX
      })),
      (this.upY = new ue({
        context: this.context,
        param: this.context.rawContext.listener.upY
      })),
      (this.upZ = new ue({
        context: this.context,
        param: this.context.rawContext.listener.upZ
      }));
  }
  static getDefaults() {
    return Object.assign(G.getDefaults(), {
      positionX: 0,
      positionY: 0,
      positionZ: 0,
      forwardX: 0,
      forwardY: 0,
      forwardZ: -1,
      upX: 0,
      upY: 1,
      upZ: 0
    });
  }
  dispose() {
    return (
      super.dispose(),
      this.positionX.dispose(),
      this.positionY.dispose(),
      this.positionZ.dispose(),
      this.forwardX.dispose(),
      this.forwardY.dispose(),
      this.forwardZ.dispose(),
      this.upX.dispose(),
      this.upY.dispose(),
      this.upZ.dispose(),
      this
    );
  }
}
Ha((t) => {
  t.listener = new Gk({ context: t });
});
Ga((t) => {
  t.listener.dispose();
});
Ft().transport;
Ft().destination;
Ft().destination;
Ft().listener;
Ft().draw;
Ft();
const va = [];
function Kk(t) {
  const e = bg(t),
    n = va.indexOf(e);
  n !== -1 && va.splice(n, 1);
}
function Qk(t, e) {
  const n = bg(t),
    r = Xk(n);
  r && !va.includes(n) && (Yk(r, e), va.push(n));
}
function bg(t) {
  return t.key || t.target.value;
}
function Xk(t) {
  const e = Fi.get(t);
  return e ? `${e.noteName}${e.octave}` : null;
}
function Yk(t, e) {
  const n = new ds().toDestination();
  (n.buffer = e.get(t)), n.start();
}
function Zk() {
  const t = Em((r) => r.audio.samples),
    e = (r) => {
      Qk(r, t);
    },
    n = (r) => {
      Kk(r);
    };
  return (
    Wn.useEffect(
      () => (
        document.addEventListener('keydown', e),
        document.addEventListener('keyup', n),
        () => {
          document.removeEventListener('keydown', e),
            document.removeEventListener('keyup', n);
        }
      ),
      [t]
    ),
    [e, n]
  );
}
function Jk() {
  const t = Array.from(Fi.values()),
    [e, n] = Zk();
  return X.jsx('div', {
    className: 'piano-keys',
    children: t.map((r) =>
      X.jsx(eC, { onMouseDown: e, onMouseUp: n, ...r }, r.computerKey)
    )
  });
}
function eC({ color: t, computerKey: e, onMouseDown: n, onMouseUp: r }) {
  return X.jsx('button', {
    name: 'piano-key',
    className: `piano-key ${t}-key`,
    type: 'button',
    value: e,
    onMouseDown: n,
    onMouseUp: r,
    children: e
  });
}
const Kd = [
  { id: 'acoustic-grand', title: 'Acoustic Grand' },
  { id: 'electric-piano', title: 'Electric Piano' },
  { id: '8-bit', title: '8-Bit' }
];
function Le(t) {
  return `Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
}
var tC = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  Qd = tC,
  Ml = () => Math.random().toString(36).substring(7).split('').join('.'),
  nC = {
    INIT: `@@redux/INIT${Ml()}`,
    REPLACE: `@@redux/REPLACE${Ml()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ml()}`
  },
  wa = nC;
function hh(t) {
  if (typeof t != 'object' || t === null) return !1;
  let e = t;
  for (; Object.getPrototypeOf(e) !== null; ) e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e || Object.getPrototypeOf(t) === null;
}
function Lg(t, e, n) {
  if (typeof t != 'function') throw new Error(Le(2));
  if (
    (typeof e == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(Le(0));
  if (
    (typeof e == 'function' && typeof n > 'u' && ((n = e), (e = void 0)),
    typeof n < 'u')
  ) {
    if (typeof n != 'function') throw new Error(Le(1));
    return n(Lg)(t, e);
  }
  let r = t,
    s = e,
    i = new Map(),
    o = i,
    a = 0,
    l = !1;
  function u() {
    o === i &&
      ((o = new Map()),
      i.forEach((w, f) => {
        o.set(f, w);
      }));
  }
  function c() {
    if (l) throw new Error(Le(3));
    return s;
  }
  function h(w) {
    if (typeof w != 'function') throw new Error(Le(4));
    if (l) throw new Error(Le(5));
    let f = !0;
    u();
    const g = a++;
    return (
      o.set(g, w),
      function () {
        if (f) {
          if (l) throw new Error(Le(6));
          (f = !1), u(), o.delete(g), (i = null);
        }
      }
    );
  }
  function d(w) {
    if (!hh(w)) throw new Error(Le(7));
    if (typeof w.type > 'u') throw new Error(Le(8));
    if (typeof w.type != 'string') throw new Error(Le(17));
    if (l) throw new Error(Le(9));
    try {
      (l = !0), (s = r(s, w));
    } finally {
      l = !1;
    }
    return (
      (i = o).forEach((g) => {
        g();
      }),
      w
    );
  }
  function m(w) {
    if (typeof w != 'function') throw new Error(Le(10));
    (r = w), d({ type: wa.REPLACE });
  }
  function p() {
    const w = h;
    return {
      subscribe(f) {
        if (typeof f != 'object' || f === null) throw new Error(Le(11));
        function g() {
          const T = f;
          T.next && T.next(c());
        }
        return g(), { unsubscribe: w(g) };
      },
      [Qd]() {
        return this;
      }
    };
  }
  return (
    d({ type: wa.INIT }),
    { dispatch: d, subscribe: h, getState: c, replaceReducer: m, [Qd]: p }
  );
}
function rC(t) {
  Object.keys(t).forEach((e) => {
    const n = t[e];
    if (typeof n(void 0, { type: wa.INIT }) > 'u') throw new Error(Le(12));
    if (typeof n(void 0, { type: wa.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(Le(13));
  });
}
function sC(t) {
  const e = Object.keys(t),
    n = {};
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    typeof t[o] == 'function' && (n[o] = t[o]);
  }
  const r = Object.keys(n);
  let s;
  try {
    rC(n);
  } catch (i) {
    s = i;
  }
  return function (o = {}, a) {
    if (s) throw s;
    let l = !1;
    const u = {};
    for (let c = 0; c < r.length; c++) {
      const h = r[c],
        d = n[h],
        m = o[h],
        p = d(m, a);
      if (typeof p > 'u') throw (a && a.type, new Error(Le(14)));
      (u[h] = p), (l = l || p !== m);
    }
    return (l = l || r.length !== Object.keys(o).length), l ? u : o;
  };
}
function Sa(...t) {
  return t.length === 0
    ? (e) => e
    : t.length === 1
      ? t[0]
      : t.reduce(
          (e, n) =>
            (...r) =>
              e(n(...r))
        );
}
function iC(...t) {
  return (e) => (n, r) => {
    const s = e(n, r);
    let i = () => {
      throw new Error(Le(15));
    };
    const o = { getState: s.getState, dispatch: (l, ...u) => i(l, ...u) },
      a = t.map((l) => l(o));
    return (i = Sa(...a)(s.dispatch)), { ...s, dispatch: i };
  };
}
function oC(t) {
  return hh(t) && 'type' in t && typeof t.type == 'string';
}
var Vg = Symbol.for('immer-nothing'),
  Xd = Symbol.for('immer-draftable'),
  gt = Symbol.for('immer-state');
function Rt(t, ...e) {
  throw new Error(
    `[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var fs = Object.getPrototypeOf;
function Gn(t) {
  return !!t && !!t[gt];
}
function yn(t) {
  var e;
  return t
    ? jg(t) ||
        Array.isArray(t) ||
        !!t[Xd] ||
        !!((e = t.constructor) != null && e[Xd]) ||
        Za(t) ||
        Ja(t)
    : !1;
}
var aC = Object.prototype.constructor.toString();
function jg(t) {
  if (!t || typeof t != 'object') return !1;
  const e = fs(t);
  if (e === null) return !0;
  const n = Object.hasOwnProperty.call(e, 'constructor') && e.constructor;
  return n === Object
    ? !0
    : typeof n == 'function' && Function.toString.call(n) === aC;
}
function Ni(t, e) {
  Ya(t) === 0
    ? Object.entries(t).forEach(([n, r]) => {
        e(n, r, t);
      })
    : t.forEach((n, r) => e(r, n, t));
}
function Ya(t) {
  const e = t[gt];
  return e ? e.type_ : Array.isArray(t) ? 1 : Za(t) ? 2 : Ja(t) ? 3 : 0;
}
function Lu(t, e) {
  return Ya(t) === 2 ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e);
}
function zg(t, e, n) {
  const r = Ya(t);
  r === 2 ? t.set(e, n) : r === 3 ? t.add(n) : (t[e] = n);
}
function lC(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
function Za(t) {
  return t instanceof Map;
}
function Ja(t) {
  return t instanceof Set;
}
function rr(t) {
  return t.copy_ || t.base_;
}
function Vu(t, e) {
  if (Za(t)) return new Map(t);
  if (Ja(t)) return new Set(t);
  if (Array.isArray(t)) return Array.prototype.slice.call(t);
  if (!e && jg(t))
    return fs(t) ? { ...t } : Object.assign(Object.create(null), t);
  const n = Object.getOwnPropertyDescriptors(t);
  delete n[gt];
  let r = Reflect.ownKeys(n);
  for (let s = 0; s < r.length; s++) {
    const i = r[s],
      o = n[i];
    o.writable === !1 && ((o.writable = !0), (o.configurable = !0)),
      (o.get || o.set) &&
        (n[i] = {
          configurable: !0,
          writable: !0,
          enumerable: o.enumerable,
          value: t[i]
        });
  }
  return Object.create(fs(t), n);
}
function dh(t, e = !1) {
  return (
    el(t) ||
      Gn(t) ||
      !yn(t) ||
      (Ya(t) > 1 && (t.set = t.add = t.clear = t.delete = uC),
      Object.freeze(t),
      e && Ni(t, (n, r) => dh(r, !0))),
    t
  );
}
function uC() {
  Rt(2);
}
function el(t) {
  return Object.isFrozen(t);
}
var cC = {};
function Cr(t) {
  const e = cC[t];
  return e || Rt(0, t), e;
}
var Ei;
function Wg() {
  return Ei;
}
function hC(t, e) {
  return {
    drafts_: [],
    parent_: t,
    immer_: e,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Yd(t, e) {
  e &&
    (Cr('Patches'),
    (t.patches_ = []),
    (t.inversePatches_ = []),
    (t.patchListener_ = e));
}
function ju(t) {
  zu(t), t.drafts_.forEach(dC), (t.drafts_ = null);
}
function zu(t) {
  t === Ei && (Ei = t.parent_);
}
function Zd(t) {
  return (Ei = hC(Ei, t));
}
function dC(t) {
  const e = t[gt];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : (e.revoked_ = !0);
}
function Jd(t, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const n = e.drafts_[0];
  return (
    t !== void 0 && t !== n
      ? (n[gt].modified_ && (ju(e), Rt(4)),
        yn(t) && ((t = Ta(e, t)), e.parent_ || ka(e, t)),
        e.patches_ &&
          Cr('Patches').generateReplacementPatches_(
            n[gt].base_,
            t,
            e.patches_,
            e.inversePatches_
          ))
      : (t = Ta(e, n, [])),
    ju(e),
    e.patches_ && e.patchListener_(e.patches_, e.inversePatches_),
    t !== Vg ? t : void 0
  );
}
function Ta(t, e, n) {
  if (el(e)) return e;
  const r = e[gt];
  if (!r) return Ni(e, (s, i) => ef(t, r, e, s, i, n)), e;
  if (r.scope_ !== t) return e;
  if (!r.modified_) return ka(t, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const s = r.copy_;
    let i = s,
      o = !1;
    r.type_ === 3 && ((i = new Set(s)), s.clear(), (o = !0)),
      Ni(i, (a, l) => ef(t, r, s, a, l, n, o)),
      ka(t, s, !1),
      n &&
        t.patches_ &&
        Cr('Patches').generatePatches_(r, n, t.patches_, t.inversePatches_);
  }
  return r.copy_;
}
function ef(t, e, n, r, s, i, o) {
  if (Gn(s)) {
    const a =
        i && e && e.type_ !== 3 && !Lu(e.assigned_, r) ? i.concat(r) : void 0,
      l = Ta(t, s, a);
    if ((zg(n, r, l), Gn(l))) t.canAutoFreeze_ = !1;
    else return;
  } else o && n.add(s);
  if (yn(s) && !el(s)) {
    if (!t.immer_.autoFreeze_ && t.unfinalizedDrafts_ < 1) return;
    Ta(t, s), (!e || !e.scope_.parent_) && ka(t, s);
  }
}
function ka(t, e, n = !1) {
  !t.parent_ && t.immer_.autoFreeze_ && t.canAutoFreeze_ && dh(e, n);
}
function fC(t, e) {
  const n = Array.isArray(t),
    r = {
      type_: n ? 1 : 0,
      scope_: e ? e.scope_ : Wg(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: e,
      base_: t,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1
    };
  let s = r,
    i = fh;
  n && ((s = [r]), (i = Ai));
  const { revoke: o, proxy: a } = Proxy.revocable(s, i);
  return (r.draft_ = a), (r.revoke_ = o), a;
}
var fh = {
    get(t, e) {
      if (e === gt) return t;
      const n = rr(t);
      if (!Lu(n, e)) return pC(t, n, e);
      const r = n[e];
      return t.finalized_ || !yn(r)
        ? r
        : r === Il(t.base_, e)
          ? (Dl(t), (t.copy_[e] = Bu(r, t)))
          : r;
    },
    has(t, e) {
      return e in rr(t);
    },
    ownKeys(t) {
      return Reflect.ownKeys(rr(t));
    },
    set(t, e, n) {
      const r = Bg(rr(t), e);
      if (r != null && r.set) return r.set.call(t.draft_, n), !0;
      if (!t.modified_) {
        const s = Il(rr(t), e),
          i = s == null ? void 0 : s[gt];
        if (i && i.base_ === n)
          return (t.copy_[e] = n), (t.assigned_[e] = !1), !0;
        if (lC(n, s) && (n !== void 0 || Lu(t.base_, e))) return !0;
        Dl(t), Wu(t);
      }
      return (
        (t.copy_[e] === n && (n !== void 0 || e in t.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(t.copy_[e])) ||
          ((t.copy_[e] = n), (t.assigned_[e] = !0)),
        !0
      );
    },
    deleteProperty(t, e) {
      return (
        Il(t.base_, e) !== void 0 || e in t.base_
          ? ((t.assigned_[e] = !1), Dl(t), Wu(t))
          : delete t.assigned_[e],
        t.copy_ && delete t.copy_[e],
        !0
      );
    },
    getOwnPropertyDescriptor(t, e) {
      const n = rr(t),
        r = Reflect.getOwnPropertyDescriptor(n, e);
      return (
        r && {
          writable: !0,
          configurable: t.type_ !== 1 || e !== 'length',
          enumerable: r.enumerable,
          value: n[e]
        }
      );
    },
    defineProperty() {
      Rt(11);
    },
    getPrototypeOf(t) {
      return fs(t.base_);
    },
    setPrototypeOf() {
      Rt(12);
    }
  },
  Ai = {};
Ni(fh, (t, e) => {
  Ai[t] = function () {
    return (arguments[0] = arguments[0][0]), e.apply(this, arguments);
  };
});
Ai.deleteProperty = function (t, e) {
  return Ai.set.call(this, t, e, void 0);
};
Ai.set = function (t, e, n) {
  return fh.set.call(this, t[0], e, n, t[0]);
};
function Il(t, e) {
  const n = t[gt];
  return (n ? rr(n) : t)[e];
}
function pC(t, e, n) {
  var s;
  const r = Bg(e, n);
  return r
    ? 'value' in r
      ? r.value
      : (s = r.get) == null
        ? void 0
        : s.call(t.draft_)
    : void 0;
}
function Bg(t, e) {
  if (!(e in t)) return;
  let n = fs(t);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, e);
    if (r) return r;
    n = fs(n);
  }
}
function Wu(t) {
  t.modified_ || ((t.modified_ = !0), t.parent_ && Wu(t.parent_));
}
function Dl(t) {
  t.copy_ || (t.copy_ = Vu(t.base_, t.scope_.immer_.useStrictShallowCopy_));
}
var mC = class {
  constructor(t) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (e, n, r) => {
        if (typeof e == 'function' && typeof n != 'function') {
          const i = n;
          n = e;
          const o = this;
          return function (l = i, ...u) {
            return o.produce(l, (c) => n.call(this, c, ...u));
          };
        }
        typeof n != 'function' && Rt(6),
          r !== void 0 && typeof r != 'function' && Rt(7);
        let s;
        if (yn(e)) {
          const i = Zd(this),
            o = Bu(e, void 0);
          let a = !0;
          try {
            (s = n(o)), (a = !1);
          } finally {
            a ? ju(i) : zu(i);
          }
          return Yd(i, r), Jd(s, i);
        } else if (!e || typeof e != 'object') {
          if (
            ((s = n(e)),
            s === void 0 && (s = e),
            s === Vg && (s = void 0),
            this.autoFreeze_ && dh(s, !0),
            r)
          ) {
            const i = [],
              o = [];
            Cr('Patches').generateReplacementPatches_(e, s, i, o), r(i, o);
          }
          return s;
        } else Rt(1, e);
      }),
      (this.produceWithPatches = (e, n) => {
        if (typeof e == 'function')
          return (o, ...a) => this.produceWithPatches(o, (l) => e(l, ...a));
        let r, s;
        return [
          this.produce(e, n, (o, a) => {
            (r = o), (s = a);
          }),
          r,
          s
        ];
      }),
      typeof (t == null ? void 0 : t.autoFreeze) == 'boolean' &&
        this.setAutoFreeze(t.autoFreeze),
      typeof (t == null ? void 0 : t.useStrictShallowCopy) == 'boolean' &&
        this.setUseStrictShallowCopy(t.useStrictShallowCopy);
  }
  createDraft(t) {
    yn(t) || Rt(8), Gn(t) && (t = Ug(t));
    const e = Zd(this),
      n = Bu(t, void 0);
    return (n[gt].isManual_ = !0), zu(e), n;
  }
  finishDraft(t, e) {
    const n = t && t[gt];
    (!n || !n.isManual_) && Rt(9);
    const { scope_: r } = n;
    return Yd(r, e), Jd(void 0, r);
  }
  setAutoFreeze(t) {
    this.autoFreeze_ = t;
  }
  setUseStrictShallowCopy(t) {
    this.useStrictShallowCopy_ = t;
  }
  applyPatches(t, e) {
    let n;
    for (n = e.length - 1; n >= 0; n--) {
      const s = e[n];
      if (s.path.length === 0 && s.op === 'replace') {
        t = s.value;
        break;
      }
    }
    n > -1 && (e = e.slice(n + 1));
    const r = Cr('Patches').applyPatches_;
    return Gn(t) ? r(t, e) : this.produce(t, (s) => r(s, e));
  }
};
function Bu(t, e) {
  const n = Za(t)
    ? Cr('MapSet').proxyMap_(t, e)
    : Ja(t)
      ? Cr('MapSet').proxySet_(t, e)
      : fC(t, e);
  return (e ? e.scope_ : Wg()).drafts_.push(n), n;
}
function Ug(t) {
  return Gn(t) || Rt(10, t), qg(t);
}
function qg(t) {
  if (!yn(t) || el(t)) return t;
  const e = t[gt];
  let n;
  if (e) {
    if (!e.modified_) return e.base_;
    (e.finalized_ = !0), (n = Vu(t, e.scope_.immer_.useStrictShallowCopy_));
  } else n = Vu(t, !0);
  return (
    Ni(n, (r, s) => {
      zg(n, r, qg(s));
    }),
    e && (e.finalized_ = !1),
    n
  );
}
var yt = new mC(),
  $g = yt.produce;
yt.produceWithPatches.bind(yt);
yt.setAutoFreeze.bind(yt);
yt.setUseStrictShallowCopy.bind(yt);
yt.applyPatches.bind(yt);
yt.createDraft.bind(yt);
yt.finishDraft.bind(yt);
function gC(t, e = `expected a function, instead received ${typeof t}`) {
  if (typeof t != 'function') throw new TypeError(e);
}
function yC(t, e = `expected an object, instead received ${typeof t}`) {
  if (typeof t != 'object') throw new TypeError(e);
}
function _C(
  t,
  e = 'expected all items to be functions, instead received the following types: '
) {
  if (!t.every((n) => typeof n == 'function')) {
    const n = t
      .map((r) =>
        typeof r == 'function' ? `function ${r.name || 'unnamed'}()` : typeof r
      )
      .join(', ');
    throw new TypeError(`${e}[${n}]`);
  }
}
var tf = (t) => (Array.isArray(t) ? t : [t]);
function vC(t) {
  const e = Array.isArray(t[0]) ? t[0] : t;
  return (
    _C(
      e,
      'createSelector expects all input-selectors to be functions, but received the following types: '
    ),
    e
  );
}
function wC(t, e) {
  const n = [],
    { length: r } = t;
  for (let s = 0; s < r; s++) n.push(t[s].apply(null, e));
  return n;
}
var SC = class {
    constructor(t) {
      this.value = t;
    }
    deref() {
      return this.value;
    }
  },
  TC = typeof WeakRef < 'u' ? WeakRef : SC,
  kC = 0,
  nf = 1;
function po() {
  return { s: kC, v: void 0, o: null, p: null };
}
function ph(t, e = {}) {
  let n = po();
  const { resultEqualityCheck: r } = e;
  let s,
    i = 0;
  function o() {
    var h;
    let a = n;
    const { length: l } = arguments;
    for (let d = 0, m = l; d < m; d++) {
      const p = arguments[d];
      if (typeof p == 'function' || (typeof p == 'object' && p !== null)) {
        let _ = a.o;
        _ === null && (a.o = _ = new WeakMap());
        const w = _.get(p);
        w === void 0 ? ((a = po()), _.set(p, a)) : (a = w);
      } else {
        let _ = a.p;
        _ === null && (a.p = _ = new Map());
        const w = _.get(p);
        w === void 0 ? ((a = po()), _.set(p, a)) : (a = w);
      }
    }
    const u = a;
    let c;
    if (
      (a.s === nf ? (c = a.v) : ((c = t.apply(null, arguments)), i++),
      (u.s = nf),
      r)
    ) {
      const d =
        ((h = s == null ? void 0 : s.deref) == null ? void 0 : h.call(s)) ?? s;
      d != null && r(d, c) && ((c = d), i !== 0 && i--),
        (s =
          (typeof c == 'object' && c !== null) || typeof c == 'function'
            ? new TC(c)
            : c);
    }
    return (u.v = c), c;
  }
  return (
    (o.clearCache = () => {
      (n = po()), o.resetResultsCount();
    }),
    (o.resultsCount = () => i),
    (o.resetResultsCount = () => {
      i = 0;
    }),
    o
  );
}
function Hg(t, ...e) {
  const n = typeof t == 'function' ? { memoize: t, memoizeOptions: e } : t,
    r = (...s) => {
      let i = 0,
        o = 0,
        a,
        l = {},
        u = s.pop();
      typeof u == 'object' && ((l = u), (u = s.pop())),
        gC(
          u,
          `createSelector expects an output function after the inputs, but received: [${typeof u}]`
        );
      const c = { ...n, ...l },
        {
          memoize: h,
          memoizeOptions: d = [],
          argsMemoize: m = ph,
          argsMemoizeOptions: p = [],
          devModeChecks: _ = {}
        } = c,
        w = tf(d),
        f = tf(p),
        g = vC(s),
        y = h(
          function () {
            return i++, u.apply(null, arguments);
          },
          ...w
        ),
        T = m(
          function () {
            o++;
            const k = wC(g, arguments);
            return (a = y.apply(null, k)), a;
          },
          ...f
        );
      return Object.assign(T, {
        resultFunc: u,
        memoizedResultFunc: y,
        dependencies: g,
        dependencyRecomputations: () => o,
        resetDependencyRecomputations: () => {
          o = 0;
        },
        lastResult: () => a,
        recomputations: () => i,
        resetRecomputations: () => {
          i = 0;
        },
        memoize: h,
        argsMemoize: m
      });
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var CC = Hg(ph),
  xC = Object.assign(
    (t, e = CC) => {
      yC(
        t,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`
      );
      const n = Object.keys(t),
        r = n.map((i) => t[i]);
      return e(r, (...i) => i.reduce((o, a, l) => ((o[n[l]] = a), o), {}));
    },
    { withTypes: () => xC }
  );
function Gg(t) {
  return ({ dispatch: n, getState: r }) =>
    (s) =>
    (i) =>
      typeof i == 'function' ? i(n, r, t) : s(i);
}
var NC = Gg(),
  EC = Gg,
  AC = (...t) => {
    const e = Hg(...t),
      n = Object.assign(
        (...r) => {
          const s = e(...r),
            i = (o, ...a) => s(Gn(o) ? Ug(o) : o, ...a);
          return Object.assign(i, s), i;
        },
        { withTypes: () => n }
      );
    return n;
  };
AC(ph);
var OC =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? Sa
              : Sa.apply(null, arguments);
        },
  MC = (t) => t && typeof t.match == 'function';
function hn(t, e) {
  function n(...r) {
    if (e) {
      let s = e(...r);
      if (!s) throw new Error(lt(0));
      return {
        type: t,
        payload: s.payload,
        ...('meta' in s && { meta: s.meta }),
        ...('error' in s && { error: s.error })
      };
    }
    return { type: t, payload: r[0] };
  }
  return (
    (n.toString = () => `${t}`),
    (n.type = t),
    (n.match = (r) => oC(r) && r.type === t),
    n
  );
}
var Kg = class bs extends Array {
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, bs.prototype);
  }
  static get [Symbol.species]() {
    return bs;
  }
  concat(...e) {
    return super.concat.apply(this, e);
  }
  prepend(...e) {
    return e.length === 1 && Array.isArray(e[0])
      ? new bs(...e[0].concat(this))
      : new bs(...e.concat(this));
  }
};
function rf(t) {
  return yn(t) ? $g(t, () => {}) : t;
}
function sf(t, e, n) {
  if (t.has(e)) {
    let s = t.get(e);
    return n.update && ((s = n.update(s, e, t)), t.set(e, s)), s;
  }
  if (!n.insert) throw new Error(lt(10));
  const r = n.insert(e, t);
  return t.set(e, r), r;
}
function IC(t) {
  return typeof t == 'boolean';
}
var DC = () =>
    function (e) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: s = !0,
        actionCreatorCheck: i = !0
      } = e ?? {};
      let o = new Kg();
      return n && (IC(n) ? o.push(NC) : o.push(EC(n.extraArgument))), o;
    },
  PC = 'RTK_autoBatch',
  Qg = (t) => (e) => {
    setTimeout(e, t);
  },
  RC =
    typeof window < 'u' && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : Qg(10),
  FC =
    (t = { type: 'raf' }) =>
    (e) =>
    (...n) => {
      const r = e(...n);
      let s = !0,
        i = !1,
        o = !1;
      const a = new Set(),
        l =
          t.type === 'tick'
            ? queueMicrotask
            : t.type === 'raf'
              ? RC
              : t.type === 'callback'
                ? t.queueNotification
                : Qg(t.timeout),
        u = () => {
          (o = !1), i && ((i = !1), a.forEach((c) => c()));
        };
      return Object.assign({}, r, {
        subscribe(c) {
          const h = () => s && c(),
            d = r.subscribe(h);
          return (
            a.add(c),
            () => {
              d(), a.delete(c);
            }
          );
        },
        dispatch(c) {
          var h;
          try {
            return (
              (s = !((h = c == null ? void 0 : c.meta) != null && h[PC])),
              (i = !s),
              i && (o || ((o = !0), l(u))),
              r.dispatch(c)
            );
          } finally {
            s = !0;
          }
        }
      });
    },
  bC = (t) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let s = new Kg(t);
      return r && s.push(FC(typeof r == 'object' ? r : void 0)), s;
    },
  LC = !0;
function VC(t) {
  const e = DC(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: s = !0,
      preloadedState: i = void 0,
      enhancers: o = void 0
    } = t || {};
  let a;
  if (typeof n == 'function') a = n;
  else if (hh(n)) a = sC(n);
  else throw new Error(lt(1));
  let l;
  typeof r == 'function' ? (l = r(e)) : (l = e());
  let u = Sa;
  s && (u = OC({ trace: !LC, ...(typeof s == 'object' && s) }));
  const c = iC(...l),
    h = bC(c);
  let d = typeof o == 'function' ? o(h) : h();
  const m = u(...d);
  return Lg(a, i, m);
}
function Xg(t) {
  const e = {},
    n = [];
  let r;
  const s = {
    addCase(i, o) {
      const a = typeof i == 'string' ? i : i.type;
      if (!a) throw new Error(lt(28));
      if (a in e) throw new Error(lt(29));
      return (e[a] = o), s;
    },
    addMatcher(i, o) {
      return n.push({ matcher: i, reducer: o }), s;
    },
    addDefaultCase(i) {
      return (r = i), s;
    }
  };
  return t(s), [e, n, r];
}
function jC(t) {
  return typeof t == 'function';
}
function zC(t, e) {
  let [n, r, s] = Xg(e),
    i;
  if (jC(t)) i = () => rf(t());
  else {
    const a = rf(t);
    i = () => a;
  }
  function o(a = i(), l) {
    let u = [
      n[l.type],
      ...r.filter(({ matcher: c }) => c(l)).map(({ reducer: c }) => c)
    ];
    return (
      u.filter((c) => !!c).length === 0 && (u = [s]),
      u.reduce((c, h) => {
        if (h)
          if (Gn(c)) {
            const m = h(c, l);
            return m === void 0 ? c : m;
          } else {
            if (yn(c)) return $g(c, (d) => h(d, l));
            {
              const d = h(c, l);
              if (d === void 0) {
                if (c === null) return c;
                throw new Error(lt(9));
              }
              return d;
            }
          }
        return c;
      }, a)
    );
  }
  return (o.getInitialState = i), o;
}
var WC = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  Yg = (t = 21) => {
    let e = '',
      n = t;
    for (; n--; ) e += WC[(Math.random() * 64) | 0];
    return e;
  },
  BC = (t, e) => (MC(t) ? t.match(e) : t(e));
function UC(...t) {
  return (e) => t.some((n) => BC(n, e));
}
var qC = ['name', 'message', 'stack', 'code'],
  Pl = class {
    constructor(t, e) {
      nl(this, '_type');
      (this.payload = t), (this.meta = e);
    }
  },
  of = class {
    constructor(t, e) {
      nl(this, '_type');
      (this.payload = t), (this.meta = e);
    }
  },
  $C = (t) => {
    if (typeof t == 'object' && t !== null) {
      const e = {};
      for (const n of qC) typeof t[n] == 'string' && (e[n] = t[n]);
      return e;
    }
    return { message: String(t) };
  },
  HC = (() => {
    function t(e, n, r) {
      const s = hn(e + '/fulfilled', (l, u, c, h) => ({
          payload: l,
          meta: {
            ...(h || {}),
            arg: c,
            requestId: u,
            requestStatus: 'fulfilled'
          }
        })),
        i = hn(e + '/pending', (l, u, c) => ({
          payload: void 0,
          meta: { ...(c || {}), arg: u, requestId: l, requestStatus: 'pending' }
        })),
        o = hn(e + '/rejected', (l, u, c, h, d) => ({
          payload: h,
          error: ((r && r.serializeError) || $C)(l || 'Rejected'),
          meta: {
            ...(d || {}),
            arg: c,
            requestId: u,
            rejectedWithValue: !!h,
            requestStatus: 'rejected',
            aborted: (l == null ? void 0 : l.name) === 'AbortError',
            condition: (l == null ? void 0 : l.name) === 'ConditionError'
          }
        }));
      function a(l) {
        return (u, c, h) => {
          const d = r != null && r.idGenerator ? r.idGenerator(l) : Yg(),
            m = new AbortController();
          let p, _;
          function w(g) {
            (_ = g), m.abort();
          }
          const f = (async function () {
            var T, v;
            let g;
            try {
              let k =
                (T = r == null ? void 0 : r.condition) == null
                  ? void 0
                  : T.call(r, l, { getState: c, extra: h });
              if ((KC(k) && (k = await k), k === !1 || m.signal.aborted))
                throw {
                  name: 'ConditionError',
                  message: 'Aborted due to condition callback returning false.'
                };
              const C = new Promise((S, N) => {
                (p = () => {
                  N({ name: 'AbortError', message: _ || 'Aborted' });
                }),
                  m.signal.addEventListener('abort', p);
              });
              u(
                i(
                  d,
                  l,
                  (v = r == null ? void 0 : r.getPendingMeta) == null
                    ? void 0
                    : v.call(
                        r,
                        { requestId: d, arg: l },
                        { getState: c, extra: h }
                      )
                )
              ),
                (g = await Promise.race([
                  C,
                  Promise.resolve(
                    n(l, {
                      dispatch: u,
                      getState: c,
                      extra: h,
                      requestId: d,
                      signal: m.signal,
                      abort: w,
                      rejectWithValue: (S, N) => new Pl(S, N),
                      fulfillWithValue: (S, N) => new of(S, N)
                    })
                  ).then((S) => {
                    if (S instanceof Pl) throw S;
                    return S instanceof of
                      ? s(S.payload, d, l, S.meta)
                      : s(S, d, l);
                  })
                ]));
            } catch (k) {
              g =
                k instanceof Pl ? o(null, d, l, k.payload, k.meta) : o(k, d, l);
            } finally {
              p && m.signal.removeEventListener('abort', p);
            }
            return (
              (r &&
                !r.dispatchConditionRejection &&
                o.match(g) &&
                g.meta.condition) ||
                u(g),
              g
            );
          })();
          return Object.assign(f, {
            abort: w,
            requestId: d,
            arg: l,
            unwrap() {
              return f.then(GC);
            }
          });
        };
      }
      return Object.assign(a, {
        pending: i,
        rejected: o,
        fulfilled: s,
        settled: UC(o, s),
        typePrefix: e
      });
    }
    return (t.withTypes = () => t), t;
  })();
function GC(t) {
  if (t.meta && t.meta.rejectedWithValue) throw t.payload;
  if (t.error) throw t.error;
  return t.payload;
}
function KC(t) {
  return t !== null && typeof t == 'object' && typeof t.then == 'function';
}
var QC = Symbol.for('rtk-slice-createasyncthunk');
function XC(t, e) {
  return `${t}/${e}`;
}
function YC({ creators: t } = {}) {
  var n;
  const e = (n = t == null ? void 0 : t.asyncThunk) == null ? void 0 : n[QC];
  return function (s) {
    const { name: i, reducerPath: o = i } = s;
    if (!i) throw new Error(lt(11));
    typeof process < 'u';
    const a =
        (typeof s.reducers == 'function' ? s.reducers(ex()) : s.reducers) || {},
      l = Object.keys(a),
      u = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: []
      },
      c = {
        addCase(y, T) {
          const v = typeof y == 'string' ? y : y.type;
          if (!v) throw new Error(lt(12));
          if (v in u.sliceCaseReducersByType) throw new Error(lt(13));
          return (u.sliceCaseReducersByType[v] = T), c;
        },
        addMatcher(y, T) {
          return u.sliceMatchers.push({ matcher: y, reducer: T }), c;
        },
        exposeAction(y, T) {
          return (u.actionCreators[y] = T), c;
        },
        exposeCaseReducer(y, T) {
          return (u.sliceCaseReducersByName[y] = T), c;
        }
      };
    l.forEach((y) => {
      const T = a[y],
        v = {
          reducerName: y,
          type: XC(i, y),
          createNotation: typeof s.reducers == 'function'
        };
      nx(T) ? sx(v, T, c, e) : tx(v, T, c);
    });
    function h() {
      const [y = {}, T = [], v = void 0] =
          typeof s.extraReducers == 'function'
            ? Xg(s.extraReducers)
            : [s.extraReducers],
        k = { ...y, ...u.sliceCaseReducersByType };
      return zC(s.initialState, (C) => {
        for (let S in k) C.addCase(S, k[S]);
        for (let S of u.sliceMatchers) C.addMatcher(S.matcher, S.reducer);
        for (let S of T) C.addMatcher(S.matcher, S.reducer);
        v && C.addDefaultCase(v);
      });
    }
    const d = (y) => y,
      m = new Map();
    let p;
    function _(y, T) {
      return p || (p = h()), p(y, T);
    }
    function w() {
      return p || (p = h()), p.getInitialState();
    }
    function f(y, T = !1) {
      function v(C) {
        let S = C[y];
        return typeof S > 'u' && T && (S = w()), S;
      }
      function k(C = d) {
        const S = sf(m, T, { insert: () => new WeakMap() });
        return sf(S, C, {
          insert: () => {
            const N = {};
            for (const [x, E] of Object.entries(s.selectors ?? {}))
              N[x] = ZC(E, C, w, T);
            return N;
          }
        });
      }
      return {
        reducerPath: y,
        getSelectors: k,
        get selectors() {
          return k(v);
        },
        selectSlice: v
      };
    }
    const g = {
      name: i,
      reducer: _,
      actions: u.actionCreators,
      caseReducers: u.sliceCaseReducersByName,
      getInitialState: w,
      ...f(o),
      injectInto(y, { reducerPath: T, ...v } = {}) {
        const k = T ?? o;
        return (
          y.inject({ reducerPath: k, reducer: _ }, v), { ...g, ...f(k, !0) }
        );
      }
    };
    return g;
  };
}
function ZC(t, e, n, r) {
  function s(i, ...o) {
    let a = e(i);
    return typeof a > 'u' && r && (a = n()), t(a, ...o);
  }
  return (s.unwrapped = t), s;
}
var JC = YC();
function ex() {
  function t(e, n) {
    return { _reducerDefinitionType: 'asyncThunk', payloadCreator: e, ...n };
  }
  return (
    (t.withTypes = () => t),
    {
      reducer(e) {
        return Object.assign(
          {
            [e.name](...n) {
              return e(...n);
            }
          }[e.name],
          { _reducerDefinitionType: 'reducer' }
        );
      },
      preparedReducer(e, n) {
        return {
          _reducerDefinitionType: 'reducerWithPrepare',
          prepare: e,
          reducer: n
        };
      },
      asyncThunk: t
    }
  );
}
function tx({ type: t, reducerName: e, createNotation: n }, r, s) {
  let i, o;
  if ('reducer' in r) {
    if (n && !rx(r)) throw new Error(lt(17));
    (i = r.reducer), (o = r.prepare);
  } else i = r;
  s.addCase(t, i)
    .exposeCaseReducer(e, i)
    .exposeAction(e, o ? hn(t, o) : hn(t));
}
function nx(t) {
  return t._reducerDefinitionType === 'asyncThunk';
}
function rx(t) {
  return t._reducerDefinitionType === 'reducerWithPrepare';
}
function sx({ type: t, reducerName: e }, n, r, s) {
  if (!s) throw new Error(lt(18));
  const {
      payloadCreator: i,
      fulfilled: o,
      pending: a,
      rejected: l,
      settled: u,
      options: c
    } = n,
    h = s(t, i, c);
  r.exposeAction(e, h),
    o && r.addCase(h.fulfilled, o),
    a && r.addCase(h.pending, a),
    l && r.addCase(h.rejected, l),
    u && r.addMatcher(h.settled, u),
    r.exposeCaseReducer(e, {
      fulfilled: o || mo,
      pending: a || mo,
      rejected: l || mo,
      settled: u || mo
    });
}
function mo() {}
var ix = (t, e) => {
    if (typeof t != 'function') throw new Error(lt(32));
  },
  mh = 'listenerMiddleware',
  ox = (t) => {
    let { type: e, actionCreator: n, matcher: r, predicate: s, effect: i } = t;
    if (e) s = hn(e).match;
    else if (n) (e = n.type), (s = n.match);
    else if (r) s = r;
    else if (!s) throw new Error(lt(21));
    return ix(i), { predicate: s, type: e, effect: i };
  },
  ax = Object.assign(
    (t) => {
      const { type: e, predicate: n, effect: r } = ox(t);
      return {
        id: Yg(),
        effect: r,
        type: e,
        predicate: n,
        pending: new Set(),
        unsubscribe: () => {
          throw new Error(lt(22));
        }
      };
    },
    { withTypes: () => ax }
  ),
  lx = Object.assign(hn(`${mh}/add`), { withTypes: () => lx });
hn(`${mh}/removeAll`);
var ux = Object.assign(hn(`${mh}/remove`), { withTypes: () => ux });
function lt(t) {
  return `Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
}
async function cx(t) {
  const e = await hx(t);
  if (e.error) throw new Error(e.error);
  return (await dx(e))._buffers;
}
async function hx(t) {
  return (await fetch(`http://localhost:8080/audio?instrument=${t}`)).json();
}
function dx(t) {
  return new Promise((e, n) => {
    const r = new Qa(t, (s) => (s ? n(s) : e(r)));
  });
}
const Mo = HC('audio/loadAudioSamples', (t) => cx(t)),
  fx = { samples: {}, isLoading: !1, error: null },
  px = JC({
    name: 'audio',
    initialState: fx,
    reducers: {},
    extraReducers: (t) => {
      t.addCase(Mo.pending, (e) => {
        e.isLoading = !0;
      }),
        t.addCase(Mo.fulfilled, (e, n) => {
          (e.isLoading = !1), (e.samples = n.payload);
        }),
        t.addCase(Mo.rejected, (e, n) => {
          (e.isLoading = !1), (e.error = n.error.message);
        });
    }
  }),
  mx = px.reducer;
function gx(t) {
  const [e, n] = Wn.useState(t),
    r = e0(),
    s = (i) => {
      n(i), r(Mo(i));
    };
  return (
    Wn.useEffect(() => {
      s(t);
    }, []),
    [e, s]
  );
}
function yx() {
  const [t, e] = gx(Kd[0].id);
  return X.jsx('div', {
    className: 'instrument-btns',
    children: Kd.map((n) =>
      X.jsx(
        _x,
        {
          onClick: () => e(n.id),
          isActive: n.id === t,
          title: n.title,
          value: n.id
        },
        n.id
      )
    )
  });
}
function _x({ title: t, value: e, isActive: n, onClick: r }) {
  return X.jsx('button', {
    type: 'button',
    name: 'instrument',
    value: e,
    onClick: r,
    className: `instrument-btn ${n ? 'active' : ''}`,
    children: t
  });
}
function vx() {
  Sx() && Zg(1);
}
function wx() {
  Tx() && Zg(-1);
}
function Sx() {
  return Fi.get('.').octave < 7;
}
function Tx() {
  return Fi.get('q').octave > 1;
}
function Zg(t) {
  Fi.forEach((e) => {
    e.octave += t;
  });
}
const Uu = { UP: 'UP', DOWN: 'DOWN' };
function kx() {
  return X.jsxs('div', {
    className: 'octave-controls',
    children: [
      X.jsxs('div', {
        className: 'octave-controls__btns',
        children: [
          X.jsx(af, { onClick: vx, direction: Uu.UP }),
          X.jsx('div', { className: 'octave-controls__line' }),
          X.jsx(af, { onClick: wx, direction: Uu.DOWN })
        ]
      }),
      X.jsx('p', { className: 'octave-controls__title', children: 'Octave' })
    ]
  });
}
function af({ direction: t, onClick: e }) {
  const n = X.jsx(X.Fragment, { children: '↑' }),
    r = X.jsx(X.Fragment, { children: '↓' });
  return X.jsx('button', {
    type: 'button',
    name: 'octave-up',
    className: 'octave-controls__btn-arrow',
    onClick: e,
    children: t === Uu.UP ? n : r
  });
}
function Cx() {
  return X.jsx('section', {
    className: 'keyboard-container',
    children: X.jsxs('div', {
      className: 'keyboard',
      children: [
        X.jsxs('div', {
          className: 'keyboard__top-row',
          children: [
            X.jsx(yx, {}),
            X.jsx('img', {
              className: 'keyboard__logo',
              alt: 'Arturia logo',
              src: t0
            })
          ]
        }),
        X.jsxs('div', {
          className: 'keyboard__bottom-row',
          children: [X.jsx(kx, {}), X.jsx(Jk, {})]
        })
      ]
    })
  });
}
function xx() {
  return X.jsxs(X.Fragment, { children: [X.jsx(r0, {}), X.jsx(Cx, {})] });
}
const Nx = VC({
    reducer: { audio: mx },
    middleware: (t) => t({ serializableCheck: !1 })
  }),
  Ex = Tm(document.getElementById('root'));
Ex.render(X.jsx(Yv, { store: Nx, children: X.jsx(xx, {}) }));
