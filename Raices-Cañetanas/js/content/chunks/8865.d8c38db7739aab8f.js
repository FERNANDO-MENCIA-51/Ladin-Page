"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8865],
    {
        6530: function (n, e, r) {
            r.r(e),
                r.d(e, {
                    default: function () {
                        return p;
                    },
                });
            var s = r(5893),
                a = r(5152),
                i = r.n(a),
                t = r(1163),
                c = r(9473);
            function d(n) {
                var e = n.active;
                return (0, s.jsx)("section", {
                    className: e ? "loading" : "deactive",
                    children: (0, s.jsxs)("section", {
                        className: "loading__content",
                        children: [
                            (0, s.jsx)("span", { children: "c" }),
                            (0, s.jsx)("span", { children: "a" }),
                            (0, s.jsx)("span", { children: "f" }),
                            (0, s.jsx)("span", { children: "e" }),
                            (0, s.jsx)("span", { children: "t" }),
                            (0, s.jsx)("span", { children: "e" }),
                            (0, s.jsx)("span", { children: "r" }),
                            (0, s.jsx)("span", { children: "\xed" }),
                            (0, s.jsx)("span", { children: "a" }),
                            (0, s.jsx)("span", {
                                className: "loading__content__transparent",
                                children: ".",
                            }),
                            (0, s.jsx)("span", { children: "a" }),
                            (0, s.jsx)("span", { children: "r" }),
                            (0, s.jsx)("span", { children: "t" }),
                            (0, s.jsx)("span", { children: "e" }),
                            (0, s.jsx)("span", { children: "s" }),
                            (0, s.jsx)("span", { children: "a" }),
                            (0, s.jsx)("span", { children: "n" }),
                            (0, s.jsx)("span", { children: "a" }),
                            (0, s.jsx)("span", { children: "l" }),
                        ],
                    }),
                });
            }
            var l = i()(
                function () {
                    return r.e(8183).then(r.bind(r, 8183));
                },
                {
                    loadableGenerated: {
                        webpack: function () {
                            return [8183];
                        },
                    },
                    loading: function () {
                        return "";
                    },
                }
            ),
                o = i()(
                    function () {
                        return Promise.all([
                            r.e(955),
                            r.e(3874),
                            r.e(2814),
                            r.e(9827),
                        ]).then(r.bind(r, 2358));
                    },
                    {
                        loadableGenerated: {
                            webpack: function () {
                                return [2358];
                            },
                        },
                        loading: function () {
                            return "";
                        },
                    }
                ),
                u = i()(
                    function () {
                        return Promise.all([
                            r.e(5937),
                            r.e(5675),
                            r.e(4949),
                            r.e(8159),
                        ]).then(r.bind(r, 8159));
                    },
                    {
                        loadableGenerated: {
                            webpack: function () {
                                return [8159];
                            },
                        },
                        loading: function () {
                            return "";
                        },
                    }
                ),
                h = i()(
                    function () {
                        return Promise.all([
                            r.e(5937),
                            r.e(5675),
                            r.e(4949),
                            r.e(1749),
                        ]).then(r.bind(r, 1749));
                    },
                    {
                        loadableGenerated: {
                            webpack: function () {
                                return [1749];
                            },
                        },
                        loading: function () {
                            return "";
                        },
                    }
                ),
                j = i()(
                    function () {
                        return r.e(7578).then(r.bind(r, 7578));
                    },
                    {
                        loadableGenerated: {
                            webpack: function () {
                                return [7578];
                            },
                        },
                        loading: function () {
                            return "";
                        },
                    }
                ),
                p = function (n) {
                    var e = (0, c.v9)(function (n) {
                        return n.loading;
                    }).isLoading,
                        r = "/" === (0, t.useRouter)().pathname;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(d, { active: e && r }),
                            (0, s.jsxs)("div", {
                                className: "basicLayout",
                                style: { display: e && r ? "none" : "block" },
                                children: [
                                    (0, s.jsx)(l, {
                                        title: n.title,
                                        description: n.description,
                                        keywords: n.keywords,
                                    }),
                                    (0, s.jsx)("div", {
                                        className: "basicLayout__border",
                                        children: "\xa1Tus pedidos online sin costo de env\xedo!",
                                    }),
                                    (0, s.jsx)("header", {
                                        children: (0, s.jsx)(o, {
                                            lineMob: n.lineMob,
                                            dataStores: n.dataStores,
                                            noCart: n.noCart,
                                        }),
                                    }),
                                    (0, s.jsx)("section", { children: n.children }),
                                    (0, s.jsxs)("footer", {
                                        children: [
                                            (0, s.jsx)(h, {}),
                                            (0, s.jsx)(u, {}),
                                            (0, s.jsx)(j, {}),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                };
        },
    },
]);
