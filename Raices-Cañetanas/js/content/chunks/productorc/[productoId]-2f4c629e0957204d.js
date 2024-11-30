(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7593],
    {
        5192: function (e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/producto/[productoId]",
                function () {
                    return a(9119);
                },
            ]);
        },
        9119: function (e, t, a) {
            "use strict";
            a.r(t),
                a.d(t, {
                    __N_SSP: function () {
                        return v;
                    },
                });
            var n = a(7568),
                r = a(655),
                o = a(5893),
                u = a(7294),
                c = a(1163),
                d = a(4371),
                s = a(7740),
                i = a(2717),
                f = a(2464),
                l = a(3445),
                _ = a(598),
                p = a(5152),
                h = a.n(p)()(
                    function () {
                        return a.e(8865).then(a.bind(a, 6530));
                    },
                    {
                        loadableGenerated: {
                            webpack: function () {
                                return [6530];
                            },
                        },
                        loading: function () {
                            return "";
                        },
                    }
                ),
                v = !0;
            t.default = function (e) {
                var t = e.dataCoverImage,
                    a = e.dataNewCollage,
                    p = e.dataRequestedCollage,
                    v = e.dataStores,
                    w = e.dataCoverages,
                    g = (0, c.useRouter)(),
                    m = (0, s.R)(i.w).coverageCoordinates,
                    C = g.query.productoId,
                    b = g.asPath.replace("/producto/", ""),
                    N = (0, f.Z)(b);
                return (
                    (0, u.useEffect)(
                        function () {
                            if (0 === m.length) {
                                var e = [];
                                null === w ||
                                    void 0 === w ||
                                    w.map(
                                        (function () {
                                            var t = (0, n.Z)(function (t) {
                                                return (0, r.__generator)(this, function (a) {
                                                    switch (a.label) {
                                                        case 0:
                                                            return [
                                                                4,
                                                                d.default
                                                                    .get(
                                                                        "coberturas/".concat(t.id, "/coordenadas/")
                                                                    )
                                                                    .then(function (t) {
                                                                        e.push(t.data),
                                                                            setTimeout(function () {
                                                                                i.w.setCoverageCoordinates(e);
                                                                            }, 800);
                                                                    }),
                                                            ];
                                                        case 1:
                                                            return a.sent(), [2];
                                                    }
                                                });
                                            });
                                            return function (e) {
                                                return t.apply(this, arguments);
                                            };
                                        })()
                                    );
                            }
                        },
                        [m, w]
                    ),
                    (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsx)(h, {
                            title: "".concat(N),
                            description: "Cafeter\xeda artesanal e-commerce",
                            keywords:
                                "masa madre, panader\xeda artesanal, cafeter\xeda artesanal, e-commerce",
                            lineMob: !0,
                            dataStores: v,
                            children: (0, o.jsxs)("main", {
                                children: [
                                    (0, o.jsx)(_.default, {
                                        dataCover: t,
                                        dataNew: a,
                                        dataRequested: p,
                                    }),
                                    void 0 !== C &&
                                    (0, o.jsx)(l.default, {
                                        idProduct: C,
                                        stores: v,
                                        fromPage: !0,
                                    }),
                                ],
                            }),
                        }),
                    })
                );
            };
        },
    },
    function (e) {
        e.O(
            0,
            [
                9866, 2013, 955, 6556, 4617, 5675, 9288, 824, 3759, 2814, 4912, 9311,
                3445, 5268, 9774, 2888, 179,
            ],
            function () {
                return (t = 5192), e((e.s = t));
                var t;
            }
        );
        var t = e.O();
        _N_E = t;
    },
]);
