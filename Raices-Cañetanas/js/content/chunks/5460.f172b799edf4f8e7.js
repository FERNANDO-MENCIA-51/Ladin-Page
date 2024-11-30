"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5460],
    {
        9172: function (e, t) {
            t.Z = function (e) {
                var t = "".concat("wss://panatelier-api.com/ws/").concat(e);
                return new WebSocket(t);
            };
        },
        5460: function (e, t, n) {
            n.r(t),
                n.d(t, {
                    default: function () {
                        return h;
                    },
                });
            var c = n(7568),
                o = n(655),
                r = n(5893),
                s = n(1163),
                a = n(7294),
                i = n(4371),
                u = n(9172),
                l = n(5675),
                d = n.n(l),
                p = function (e) {
                    var t = e.src,
                        n = e.product,
                        c = e.description,
                        o = e.promotionPrice,
                        s = e.price,
                        a = Number(s).toFixed(2),
                        i = Number(o).toFixed(2);
                    return (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)("section", {
                            className: "productCard__content",
                            children: [
                                (0, r.jsx)("section", {
                                    className: "productCard__content__image",
                                    children: (0, r.jsx)(d(), {
                                        src: t,
                                        alt: n,
                                        layout: "fill",
                                        objectFit: "cover",
                                        loading: "lazy",
                                        placeholder: "blur",
                                        blurDataURL: t,
                                        unoptimized: !0,
                                    }),
                                }),
                                (0, r.jsxs)("section", {
                                    className: "productCard__content__text",
                                    children: [
                                        (0, r.jsx)("h1", {
                                            className: "productCard__content__text__name",
                                            children: n,
                                        }),
                                        (0, r.jsx)("p", {
                                            className: "productCard__content__text__description",
                                            children: c,
                                        }),
                                        (0, r.jsxs)("section", {
                                            children: [
                                                s > o && s > 0 && 0 != o
                                                    ? (0, r.jsxs)("p", {
                                                        className:
                                                            "productCard__content__text__higherPrice",
                                                        children: ["S/", a],
                                                    })
                                                    : "",
                                                s > o && 0 != o
                                                    ? (0, r.jsxs)("p", {
                                                        className: "productCard__content__text__price",
                                                        children: ["S/", i],
                                                    })
                                                    : (0, r.jsxs)("p", {
                                                        className: "productCard__content__text__price",
                                                        children: ["S/", a],
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("section", {
                                    className: "productCard__content__hover hoverProductCard",
                                    children: (0, r.jsxs)("section", {
                                        children: [
                                            (0, r.jsxs)("p", {
                                                children: [
                                                    "Agregar a ",
                                                    (0, r.jsx)("br", {}),
                                                    "la canasta",
                                                ],
                                            }),
                                            (0, r.jsx)("span", { children: (0, r.jsx)(_, {}) }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    });
                };
            function _() {
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(d(), {
                        src: "/assets/icons/plus.svg",
                        alt: "+",
                        as: "style",
                        priority: !0,
                        width: 80,
                        height: 80,
                    }),
                });
            }
            function f(e) {
                var t = e.id,
                    n = e.searchText,
                    l = (function (e) {
                        var t = (0, a.useState)([]),
                            n = t[0],
                            r = t[1];
                        (0, a.useEffect)(
                            function () {
                                s("colecciones/".concat(e, "/productos/"));
                            },
                            [e]
                        );
                        var s = (function () {
                            var e = (0, c.Z)(function (e) {
                                var t;
                                return (0, o.__generator)(this, function (n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, i.default.get(e)];
                                        case 1:
                                            return (t = n.sent()), r(t.data), [2];
                                    }
                                });
                            });
                            return function (t) {
                                return e.apply(this, arguments);
                            };
                        })();
                        return (
                            (0, a.useEffect)(function () {
                                var t = (0, u.Z)("productos/");
                                return (
                                    (t.onopen = function () {
                                        console.log(
                                            "Conexi\xf3n establecida respecto a productos por colecciones"
                                        );
                                    }),
                                    (t.onmessage = (function () {
                                        var t = (0, c.Z)(function (t) {
                                            return (0, o.__generator)(this, function (n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return (
                                                            console.log("Mensaje recibido: ", t.data),
                                                            [
                                                                4,
                                                                JSON.parse(t.data).data.collections.map(
                                                                    (function () {
                                                                        var t = (0, c.Z)(function (t, n) {
                                                                            return (0,
                                                                                o.__generator)(this, function (n) {
                                                                                    switch (n.label) {
                                                                                        case 0:
                                                                                            return t !== e
                                                                                                ? [3, 2]
                                                                                                : [
                                                                                                    4,
                                                                                                    s(
                                                                                                        "colecciones/".concat(
                                                                                                            e,
                                                                                                            "/productos/"
                                                                                                        )
                                                                                                    ),
                                                                                                ];
                                                                                        case 1:
                                                                                            n.sent(), (n.label = 2);
                                                                                        case 2:
                                                                                            return [2, t];
                                                                                    }
                                                                                });
                                                                        });
                                                                        return function (e, n) {
                                                                            return t.apply(this, arguments);
                                                                        };
                                                                    })()
                                                                ),
                                                            ]
                                                        );
                                                    case 1:
                                                        return n.sent(), [2];
                                                }
                                            });
                                        });
                                        return function (e) {
                                            return t.apply(this, arguments);
                                        };
                                    })()),
                                    (t.onclose = function (e) {
                                        console.log("Conexi\xf3n cerrada", e);
                                    }),
                                    function () {
                                        t.close();
                                    }
                                );
                            }, []),
                            { products: n }
                        );
                    })(t).products,
                    d = n,
                    _ = l,
                    f = l,
                    h = (0, s.useRouter)();
                return (
                    (function (e) {
                        if (void 0 !== e) {
                            var t = f.filter(function (t) {
                                if (
                                    t.name.toString().toLowerCase().includes(e.toLowerCase()) ||
                                    t.slug.toString().toLowerCase().includes(e.toLowerCase()) ||
                                    t.description
                                        .toString()
                                        .toLowerCase()
                                        .includes(e.toLowerCase())
                                )
                                    return t;
                            });
                            _ = t.length > 0 ? t : l;
                        }
                    })(d),
                    (0, r.jsx)(r.Fragment, {
                        children:
                            null === _ || void 0 === _
                                ? void 0
                                : _.map(function (e, t) {
                                    return (0, r.jsx)(
                                        "section",
                                        {
                                            className: "productCard",
                                            onClick: function (t) {
                                                return (
                                                    (n = e.combo
                                                        ? "/?comboId=".concat(e.slug)
                                                        : "/?productoId=".concat(e.slug)),
                                                    (c = e.combo
                                                        ? "/combo/".concat(e.slug)
                                                        : "/producto/".concat(e.slug)),
                                                    void h.push(n, c, { scroll: !1 })
                                                );
                                                var n, c;
                                            },
                                            children: (0, r.jsx)(p, {
                                                product: e.name,
                                                src: e.image,
                                                description: e.description,
                                                promotionPrice: e.pricePromotion,
                                                price: e.price,
                                            }),
                                        },
                                        e.id
                                    );
                                }),
                    })
                );
            }
            var h = function (e) {
                var t = e.dataCollection,
                    n = e.searchText,
                    s = (0, a.useState)([]),
                    i = s[0],
                    l = s[1];
                return (
                    (0, a.useEffect)(
                        function () {
                            t.length > 0 &&
                                (l(t), localStorage.setItem("collections", JSON.stringify(t)));
                        },
                        [t]
                    ),
                    (0, a.useEffect)(function () {
                        var e = (0, u.Z)("colecciones/");
                        return (
                            (e.onopen = function () {
                                console.log("Conexi\xf3n establecida respecto a colecciones");
                            }),
                            (e.onmessage = (function () {
                                var e = (0, c.Z)(function (e) {
                                    var t, n, c;
                                    return (0, o.__generator)(this, function (o) {
                                        return (
                                            console.log("Mensaje recibido: ", e.data),
                                            (t = JSON.parse(e.data)),
                                            (n = t.data.id),
                                            null ===
                                            (c = JSON.parse(localStorage.getItem("collections"))) ||
                                            void 0 === c ||
                                            c.map(function (e, t) {
                                                return e.id === n && c.splice(t, 1), e;
                                            }),
                                            l(c),
                                            localStorage.setItem("collections", JSON.stringify(c)),
                                            [2]
                                        );
                                    });
                                });
                                return function (t) {
                                    return e.apply(this, arguments);
                                };
                            })()),
                            (e.onclose = function (e) {
                                console.log("Conexi\xf3n cerrada", e);
                            }),
                            function () {
                                e.close();
                            }
                        );
                    }, []),
                    (0, r.jsx)(r.Fragment, {
                        children:
                            null === i || void 0 === i
                                ? void 0
                                : i.map(function (e, t) {
                                    return (0,
                                        r.jsx)("section", { className: "category", id: e.slug, children: (0, r.jsxs)("div", { className: "category__content", id: "".concat(e.slug, "-content"), children: [(0, r.jsx)("h1", { className: "category__title ".concat(e.slug, "Div"), children: e.name }), (0, r.jsx)("section", { className: "category__products", children: (0, r.jsx)(f, { id: e.id, searchText: n }) })] }) }, e.id);
                                }),
                    })
                );
            };
        },
    },
]);
