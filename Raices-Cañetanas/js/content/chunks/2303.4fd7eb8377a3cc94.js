"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2303],
    {
        2303: function (e, t, r) {
            r.r(t),
                r.d(t, {
                    default: function () {
                        return d;
                    },
                });
            var n = r(5893),
                c = r(1703),
                a = r(7294),
                o = r(1039),
                l = r(1664),
                i = r.n(l),
                u = function (e, t) {
                    var r = e.id,
                        c = e.text,
                        a = e.link,
                        o = e.onClick;
                    return (0, n.jsx)(i(), {
                        href: "#".concat(a),
                        passHref: !0,
                        scroll: !1,
                        children: (0, n.jsx)("a", {
                            ref: t,
                            className: "btn-category",
                            onClick: o,
                            id: r,
                            children: c,
                        }),
                    });
                },
                s = (0, a.forwardRef)(u),
                f = function (e) {
                    var t = e.data,
                        r = (0, a.useState)(0),
                        o = r[0],
                        l = r[1],
                        i = (0, a.useState)(null),
                        u = i[0],
                        f = i[1],
                        d = (0, a.useRef)([]);
                    (0, a.useEffect)(
                        function () {
                            var e = new IntersectionObserver(
                                function (e) {
                                    e.forEach(function (e) {
                                        var t = e.target.id.replace("-content", ""),
                                            r = document.querySelector(
                                                '.carouselNav a[href*="#'.concat(t, '"]')
                                            );
                                        if (e.isIntersecting) {
                                            var n = Array.prototype.indexOf.call(
                                                r.parentNode.children,
                                                r
                                            );
                                            u
                                                ? u === r.id &&
                                                (r.classList.add("selected-category"), f(null), l(n))
                                                : (r.classList.add("selected-category"), l(n));
                                        } else null === r || void 0 === r || r.classList.remove("selected-category");
                                    });
                                },
                                { rootMargin: "-120px 0px -80% 0px" }
                            );
                            return (
                                d.current.forEach(function (t) {
                                    try {
                                        var r = t.getAttribute("href").replace("/", ""),
                                            n = document.querySelector("".concat(r, "-content"));
                                        e.observe(n);
                                    } catch (c) { }
                                }),
                                function () {
                                    d.current.forEach(function (t) {
                                        try {
                                            var r = t.getAttribute("href").replace("/", ""),
                                                n = document.querySelector("".concat(r, "-content"));
                                            n && e.unobserve(n);
                                        } catch (c) { }
                                    });
                                }
                            );
                        },
                        [u]
                    );
                    var v = function (e) {
                        f(e.target.id);
                    };
                    return (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)("section", {
                            className: "carouselNav",
                            children: (0, n.jsx)(c.Z, {
                                value: o,
                                variant: "scrollable",
                                "aria-label": "scrollable auto tabs example",
                                allowScrollButtonsMobile: !0,
                                sx: { "&& .Mui-selected": { backgroundColor: "red" } },
                                children: t.map(function (e, t) {
                                    return (0, n.jsx)(
                                        s,
                                        {
                                            text: e.name,
                                            link: e.slug,
                                            ref: function (e) {
                                                return (d.current[t] = e);
                                            },
                                            onClick: v,
                                            id: e.id,
                                        },
                                        t
                                    );
                                }),
                            }),
                        }),
                    });
                },
                d = (0, a.memo)(f, o.w);
        },
        1039: function (e, t, r) {
            r.d(t, {
                w: function () {
                    return c;
                },
            });
            var n = r(2222);
            function c(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a =
                        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
                if (e && t && "object" === typeof e && "object" === typeof t) {
                    var o = function () {
                        var n = l[u];
                        if ((a && !a.includes(n)) || !a)
                            if (Array.isArray(e[n])) {
                                if (e[n].length !== t[n].length) return { v: !1 };
                                if (
                                    e[n].filter(function (e, o) {
                                        return !c(e, t[n][o], r, a);
                                    }).length > 0
                                )
                                    return { v: !1 };
                            } else if (!c(e[n], t[n], r, a)) return { v: !1 };
                    },
                        l = Object.keys(e),
                        i = Object.keys(t);
                    if (l.length !== i.length) return !1;
                    for (var u = 0; u < l.length; u++) {
                        var s = o();
                        if ("object" === (0, n.Z)(s)) return s.v;
                    }
                    return !0;
                }
                return (
                    !(!r || "function" !== typeof e || "function" !== typeof t) || e === t
                );
            }
        },
    },
]);
