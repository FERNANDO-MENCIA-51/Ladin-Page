(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4949],
    {
        1210: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.getDomainLocale = function (e, t, o, r) {
                    return !1;
                });
            ("function" === typeof t.default ||
                ("object" === typeof t.default && null !== t.default)) &&
                "undefined" === typeof t.default.__esModule &&
                (Object.defineProperty(t.default, "__esModule", { value: !0 }),
                    Object.assign(t.default, t),
                    (e.exports = t.default));
        },
        8418: function (e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = o(4941).Z;
            o(5753).default;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
            var n = o(2648).Z,
                a = o(7273).Z,
                l = n(o(7294)),
                u = o(6273),
                c = o(2725),
                f = o(3462),
                i = o(1018),
                s = o(7190),
                p = o(1210),
                d = o(8684),
                y = {};
            function v(e, t, o, r) {
                if (e && u.isLocalURL(t)) {
                    Promise.resolve(e.prefetch(t, o, r)).catch(function (e) {
                        0;
                    });
                    var n =
                        r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
                    y[t + "%" + o + (n ? "%" + n : "")] = !0;
                }
            }
            var h = l.default.forwardRef(function (e, t) {
                var o,
                    n = e.href,
                    h = e.as,
                    m = e.children,
                    C = e.prefetch,
                    b = e.passHref,
                    x = e.replace,
                    g = e.shallow,
                    O = e.scroll,
                    _ = e.locale,
                    L = e.onClick,
                    j = e.onMouseEnter,
                    E = e.onTouchStart,
                    w = e.legacyBehavior,
                    R = void 0 === w ? !0 !== Boolean(!1) : w,
                    M = a(e, [
                        "href",
                        "as",
                        "children",
                        "prefetch",
                        "passHref",
                        "replace",
                        "shallow",
                        "scroll",
                        "locale",
                        "onClick",
                        "onMouseEnter",
                        "onTouchStart",
                        "legacyBehavior",
                    ]);
                (o = m),
                    !R ||
                    ("string" !== typeof o && "number" !== typeof o) ||
                    (o = l.default.createElement("a", null, o));
                var P = !1 !== C,
                    k = l.default.useContext(f.RouterContext),
                    N = l.default.useContext(i.AppRouterContext);
                N && (k = N);
                var T,
                    S = l.default.useMemo(
                        function () {
                            var e = r(u.resolveHref(k, n, !0), 2),
                                t = e[0],
                                o = e[1];
                            return { href: t, as: h ? u.resolveHref(k, h) : o || t };
                        },
                        [k, n, h]
                    ),
                    U = S.href,
                    B = S.as,
                    z = l.default.useRef(U),
                    A = l.default.useRef(B);
                R && (T = l.default.Children.only(o));
                var D = R ? T && "object" === typeof T && T.ref : t,
                    H = r(s.useIntersection({ rootMargin: "200px" }), 3),
                    K = H[0],
                    Z = H[1],
                    G = H[2],
                    I = l.default.useCallback(
                        function (e) {
                            (A.current === B && z.current === U) ||
                                (G(), (A.current = B), (z.current = U)),
                                K(e),
                                D &&
                                ("function" === typeof D
                                    ? D(e)
                                    : "object" === typeof D && (D.current = e));
                        },
                        [B, D, U, G, K]
                    );
                l.default.useEffect(
                    function () {
                        var e = Z && P && u.isLocalURL(U),
                            t = "undefined" !== typeof _ ? _ : k && k.locale,
                            o = y[U + "%" + B + (t ? "%" + t : "")];
                        e && !o && v(k, U, B, { locale: t });
                    },
                    [B, U, Z, _, P, k]
                );
                var W = {
                    ref: I,
                    onClick: function (e) {
                        R || "function" !== typeof L || L(e),
                            R &&
                            T.props &&
                            "function" === typeof T.props.onClick &&
                            T.props.onClick(e),
                            e.defaultPrevented ||
                            (function (e, t, o, r, n, a, c, f, i, s) {
                                if (
                                    "A" !== e.currentTarget.nodeName.toUpperCase() ||
                                    (!(function (e) {
                                        var t = e.currentTarget.target;
                                        return (
                                            (t && "_self" !== t) ||
                                            e.metaKey ||
                                            e.ctrlKey ||
                                            e.shiftKey ||
                                            e.altKey ||
                                            (e.nativeEvent && 2 === e.nativeEvent.which)
                                        );
                                    })(e) &&
                                        u.isLocalURL(o))
                                ) {
                                    e.preventDefault();
                                    var p = function () {
                                        "beforePopState" in t
                                            ? t[n ? "replace" : "push"](o, r, {
                                                shallow: a,
                                                locale: f,
                                                scroll: c,
                                            })
                                            : t[n ? "replace" : "push"](o, {
                                                forceOptimisticNavigation: !s,
                                            });
                                    };
                                    i ? l.default.startTransition(p) : p();
                                }
                            })(e, k, U, B, x, g, O, _, Boolean(N), P);
                    },
                    onMouseEnter: function (e) {
                        R || "function" !== typeof j || j(e),
                            R &&
                            T.props &&
                            "function" === typeof T.props.onMouseEnter &&
                            T.props.onMouseEnter(e),
                            (!P && N) || (u.isLocalURL(U) && v(k, U, B, { priority: !0 }));
                    },
                    onTouchStart: function (e) {
                        R || "function" !== typeof E || E(e),
                            R &&
                            T.props &&
                            "function" === typeof T.props.onTouchStart &&
                            T.props.onTouchStart(e),
                            (!P && N) || (u.isLocalURL(U) && v(k, U, B, { priority: !0 }));
                    },
                };
                if (!R || b || ("a" === T.type && !("href" in T.props))) {
                    var q = "undefined" !== typeof _ ? _ : k && k.locale,
                        F =
                            k &&
                            k.isLocaleDomain &&
                            p.getDomainLocale(B, q, k.locales, k.domainLocales);
                    W.href = F || d.addBasePath(c.addLocale(B, q, k && k.defaultLocale));
                }
                return R
                    ? l.default.cloneElement(T, W)
                    : l.default.createElement("a", Object.assign({}, M, W), o);
            });
            (t.default = h),
                ("function" === typeof t.default ||
                    ("object" === typeof t.default && null !== t.default)) &&
                "undefined" === typeof t.default.__esModule &&
                (Object.defineProperty(t.default, "__esModule", { value: !0 }),
                    Object.assign(t.default, t),
                    (e.exports = t.default));
        },
        1018: function (e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.TemplateContext =
                    t.GlobalLayoutRouterContext =
                    t.LayoutRouterContext =
                    t.AppRouterContext =
                    void 0);
            var r = (0, o(2648).Z)(o(7294)),
                n = r.default.createContext(null);
            t.AppRouterContext = n;
            var a = r.default.createContext(null);
            t.LayoutRouterContext = a;
            var l = r.default.createContext(null);
            t.GlobalLayoutRouterContext = l;
            var u = r.default.createContext(null);
            t.TemplateContext = u;
        },
        1664: function (e, t, o) {
            e.exports = o(8418);
        },
        8357: function (e, t, o) {
            "use strict";
            o.d(t, {
                w_: function () {
                    return f;
                },
            });
            var r = o(7294),
                n = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0,
                },
                a = r.createContext && r.createContext(n),
                l = function () {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t, o = 1, r = arguments.length; o < r; o++)
                                    for (var n in (t = arguments[o]))
                                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                },
                u = function (e, t) {
                    var o = {};
                    for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) &&
                            t.indexOf(r) < 0 &&
                            (o[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var n = 0;
                        for (r = Object.getOwnPropertySymbols(e); n < r.length; n++)
                            t.indexOf(r[n]) < 0 &&
                                Object.prototype.propertyIsEnumerable.call(e, r[n]) &&
                                (o[r[n]] = e[r[n]]);
                    }
                    return o;
                };
            function c(e) {
                return (
                    e &&
                    e.map(function (e, t) {
                        return r.createElement(e.tag, l({ key: t }, e.attr), c(e.child));
                    })
                );
            }
            function f(e) {
                return function (t) {
                    return r.createElement(i, l({ attr: l({}, e.attr) }, t), c(e.child));
                };
            }
            function i(e) {
                var t = function (t) {
                    var o,
                        n = e.attr,
                        a = e.size,
                        c = e.title,
                        f = u(e, ["attr", "size", "title"]),
                        i = a || t.size || "1em";
                    return (
                        t.className && (o = t.className),
                        e.className && (o = (o ? o + " " : "") + e.className),
                        r.createElement(
                            "svg",
                            l(
                                {
                                    stroke: "currentColor",
                                    fill: "currentColor",
                                    strokeWidth: "0",
                                },
                                t.attr,
                                n,
                                f,
                                {
                                    className: o,
                                    style: l(l({ color: e.color || t.color }, t.style), e.style),
                                    height: i,
                                    width: i,
                                    xmlns: "http://www.w3.org/2000/svg",
                                }
                            ),
                            c && r.createElement("title", null, c),
                            e.children
                        )
                    );
                };
                return void 0 !== a
                    ? r.createElement(a.Consumer, null, function (e) {
                        return t(e);
                    })
                    : t(n);
            }
        },
    },
]);
