"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [598],
    {
        3043: function (e, s, t) {
            t.d(s, {
                U: function () {
                    return o;
                },
            });
            var c = t(5893),
                n = t(5675),
                a = t.n(n),
                o = function (e) {
                    var s = e.src,
                        t = e.alt,
                        n = e.className,
                        o = e.onLoad;
                    return (0, c.jsx)(c.Fragment, {
                        children:
                            !!s &&
                            (0, c.jsx)(a(), {
                                className: n,
                                src: s,
                                alt: t,
                                as: "style",
                                priority: !0,
                                layout: "fill",
                                onLoad: o,
                            }),
                    });
                };
        },
        598: function (e, s, t) {
            t.r(s),
                t.d(s, {
                    default: function () {
                        return u;
                    },
                });
            var c = t(5893),
                n = t(1163),
                a = (t(5675), t(3043)),
                o = t(9473),
                i = t(4754),
                l = function (e) {
                    var s = e.srcMobile,
                        t = e.srcDesktop,
                        n = (0, o.I0)();
                    return (0, c.jsxs)("section", {
                        className: "cover",
                        children: [
                            (0, c.jsx)("section", {
                                className: "cover__imageMobile",
                                children: (0, c.jsx)(a.U, {
                                    src: s,
                                    alt: "Pan Atelier",
                                    className: "cover__imageMobile__inside",
                                }),
                            }),
                            (0, c.jsx)("section", {
                                className: "cover__imageDesktop",
                                children: (0, c.jsx)(a.U, {
                                    src: t,
                                    alt: "Pan Atelier",
                                    onLoad: function () {
                                        setTimeout(function () {
                                            n((0, i.wt)(!1));
                                        }, 500);
                                    },
                                    className: " cover__imageDesktop__inside",
                                }),
                            }),
                        ],
                    });
                };
            var r = function (e) {
                var s = e.src,
                    t = e.text;
                return (0, c.jsxs)("section", {
                    className: "imagenButton",
                    children: [
                        (0, c.jsx)("section", {
                            className: "imagenButton__imageMobile",
                            children: (0, c.jsx)(a.U, {
                                src: s,
                                alt: t,
                                className: "imagenButton__imageMobile__inside",
                            }),
                        }),
                        (0, c.jsx)("section", {
                            className: "imagenButton__imageDesktop hoverDesktop",
                            children: (0, c.jsx)(a.U, {
                                src: s,
                                alt: t,
                                className: "imagenButton__imageDesktop__inside",
                            }),
                        }),
                        (0, c.jsx)("h1", {
                            className: "imagenButton__text hoverText",
                            children: t,
                        }),
                    ],
                });
            },
                u = function (e) {
                    var s = e.dataCover,
                        t = e.dataNew,
                        a = e.dataRequested,
                        o = (0, n.useRouter)(),
                        i = function (e, s, t) {
                            null !== e && o.push(s, t, { scroll: !1 });
                        };
                    return (0, c.jsxs)("section", {
                        className: "collage",
                        children: [
                            (0, c.jsx)("section", {
                                className: "collage__1",
                                children: (0, c.jsx)(l, {
                                    srcMobile: s.photo,
                                    srcDesktop: s.photo,
                                    text1: "Pan Atelier",
                                    text2: "en casa",
                                }),
                            }),
                            (0, c.jsx)("section", {
                                className: "collage__2",
                                onClick: function () {
                                    return i(
                                        a.slugItem,
                                        "/?productoId=".concat(a.slugItem),
                                        "/producto/".concat(a.slugItem)
                                    );
                                },
                                children: (0, c.jsx)(r, { src: a.photo, text: a.name }),
                            }),
                            (0, c.jsx)("section", {
                                className: "collage__3",
                                onClick: function () {
                                    return i(
                                        t.slugItem,
                                        "/?productoId=".concat(t.slugItem),
                                        "/producto/".concat(t.slugItem)
                                    );
                                },
                                children: (0, c.jsx)(r, { src: t.photo, text: t.name }),
                            }),
                        ],
                    });
                };
        },
    },
]);
