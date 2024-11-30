(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405],
    {
        5728: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/",
                function () {
                    return n(1878);
                },
            ]);
        },
        5129: function (e, t, n) {
            "use strict";
            n.d(t, {
                w: function () {
                    return o;
                },
            });
            var r = n(7568),
                u = n(655),
                i = n(7294),
                a = n(4371),
                o = function () {
                    (0, i.useEffect)(function () {
                        var t = localStorage.getItem("orderIdPA");
                        JSON.parse(localStorage.getItem("loginPA"));
                        t &&
                            e("ordenes/".concat(t, "/existe/")).catch(function (e) {
                                e.response.status >= 400 &&
                                    e.response.status < 500 &&
                                    (localStorage.removeItem("orderIdPA"),
                                        localStorage.removeItem("ModalityInfoPA"));
                            });
                    }, []);
                    var e = (function () {
                        var e = (0, r.Z)(function (e) {
                            return (0, u.__generator)(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, a.default.get(e, {})];
                                    case 1:
                                        return t.sent(), [2];
                                }
                            });
                        });
                        return function (t) {
                            return e.apply(this, arguments);
                        };
                    })();
                };
        },
        638: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = n(6856).Z;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = function (e, t) {
                    var n = a.default,
                        i = (null == t ? void 0 : t.suspense)
                            ? {}
                            : {
                                loading: function (e) {
                                    e.error, e.isLoading;
                                    return e.pastDelay, null;
                                },
                            };
                    r(e, Promise)
                        ? (i.loader = function () {
                            return e;
                        })
                        : "function" === typeof e
                            ? (i.loader = e)
                            : "object" === typeof e && (i = u({}, i, e));
                    !1;
                    (i = u({}, i, t)).suspense && (delete i.ssr, delete i.loading);
                    i.loadableGenerated &&
                        delete (i = u({}, i, i.loadableGenerated)).loadableGenerated;
                    if ("boolean" === typeof i.ssr && !i.suspense) {
                        if (!i.ssr) return delete i.ssr, o(n, i);
                        delete i.ssr;
                    }
                    return n(i);
                }),
                (t.noSSR = o);
            var u = n(6495).Z,
                i = n(2648).Z,
                a = (i(n(7294)), i(n(4302)));
            function o(e, t) {
                return delete t.webpack, delete t.modules, e(t);
            }
            ("function" === typeof t.default ||
                ("object" === typeof t.default && null !== t.default)) &&
                "undefined" === typeof t.default.__esModule &&
                (Object.defineProperty(t.default, "__esModule", { value: !0 }),
                    Object.assign(t.default, t),
                    (e.exports = t.default));
        },
        6319: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.LoadableContext = void 0);
            var r = (0, n(2648).Z)(n(7294)).default.createContext(null);
            t.LoadableContext = r;
        },
        4302: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = n(9658).Z,
                u = n(7222).Z;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
            var i = n(6495).Z,
                a = (0, n(2648).Z)(n(7294)),
                o = n(6319),
                s = n(7294).useSyncExternalStore,
                l = [],
                c = [],
                d = !1;
            function f(e) {
                var t = e(),
                    n = { loading: !0, loaded: null, error: null };
                return (
                    (n.promise = t
                        .then(function (e) {
                            return (n.loading = !1), (n.loaded = e), e;
                        })
                        .catch(function (e) {
                            throw ((n.loading = !1), (n.error = e), e);
                        })),
                    n
                );
            }
            var h = (function () {
                function e(t, n) {
                    r(this, e),
                        (this._loadFn = t),
                        (this._opts = n),
                        (this._callbacks = new Set()),
                        (this._delay = null),
                        (this._timeout = null),
                        this.retry();
                }
                return (
                    u(e, [
                        {
                            key: "promise",
                            value: function () {
                                return this._res.promise;
                            },
                        },
                        {
                            key: "retry",
                            value: function () {
                                var e = this;
                                this._clearTimeouts(),
                                    (this._res = this._loadFn(this._opts.loader)),
                                    (this._state = { pastDelay: !1, timedOut: !1 });
                                var t = this._res,
                                    n = this._opts;
                                t.loading &&
                                    ("number" === typeof n.delay &&
                                        (0 === n.delay
                                            ? (this._state.pastDelay = !0)
                                            : (this._delay = setTimeout(function () {
                                                e._update({ pastDelay: !0 });
                                            }, n.delay))),
                                        "number" === typeof n.timeout &&
                                        (this._timeout = setTimeout(function () {
                                            e._update({ timedOut: !0 });
                                        }, n.timeout))),
                                    this._res.promise
                                        .then(function () {
                                            e._update({}), e._clearTimeouts();
                                        })
                                        .catch(function (t) {
                                            e._update({}), e._clearTimeouts();
                                        }),
                                    this._update({});
                            },
                        },
                        {
                            key: "_update",
                            value: function (e) {
                                (this._state = i(
                                    {},
                                    this._state,
                                    {
                                        error: this._res.error,
                                        loaded: this._res.loaded,
                                        loading: this._res.loading,
                                    },
                                    e
                                )),
                                    this._callbacks.forEach(function (e) {
                                        return e();
                                    });
                            },
                        },
                        {
                            key: "_clearTimeouts",
                            value: function () {
                                clearTimeout(this._delay), clearTimeout(this._timeout);
                            },
                        },
                        {
                            key: "getCurrentValue",
                            value: function () {
                                return this._state;
                            },
                        },
                        {
                            key: "subscribe",
                            value: function (e) {
                                var t = this;
                                return (
                                    this._callbacks.add(e),
                                    function () {
                                        t._callbacks.delete(e);
                                    }
                                );
                            },
                        },
                    ]),
                    e
                );
            })();
            function p(e) {
                return (function (e, t) {
                    var n = function () {
                        if (!l) {
                            var t = new h(e, u);
                            l = {
                                getCurrentValue: t.getCurrentValue.bind(t),
                                subscribe: t.subscribe.bind(t),
                                retry: t.retry.bind(t),
                                promise: t.promise.bind(t),
                            };
                        }
                        return l.promise();
                    },
                        r = function () {
                            n();
                            var e = a.default.useContext(o.LoadableContext);
                            e &&
                                Array.isArray(u.modules) &&
                                u.modules.forEach(function (t) {
                                    e(t);
                                });
                        },
                        u = Object.assign(
                            {
                                loader: null,
                                loading: null,
                                delay: 200,
                                timeout: null,
                                webpack: null,
                                modules: null,
                                suspense: !1,
                            },
                            t
                        );
                    u.suspense && (u.lazy = a.default.lazy(u.loader));
                    var l = null;
                    if (!d) {
                        var f = u.webpack ? u.webpack() : u.modules;
                        f &&
                            c.push(function (e) {
                                var t = !0,
                                    r = !1,
                                    u = void 0;
                                try {
                                    for (
                                        var i, a = f[Symbol.iterator]();
                                        !(t = (i = a.next()).done);
                                        t = !0
                                    ) {
                                        var o = i.value;
                                        if (-1 !== e.indexOf(o)) return n();
                                    }
                                } catch (s) {
                                    (r = !0), (u = s);
                                } finally {
                                    try {
                                        t || null == a.return || a.return();
                                    } finally {
                                        if (r) throw u;
                                    }
                                }
                            });
                    }
                    var p = u.suspense
                        ? function (e, t) {
                            return (
                                r(), a.default.createElement(u.lazy, i({}, e, { ref: t }))
                            );
                        }
                        : function (e, t) {
                            r();
                            var n = s(l.subscribe, l.getCurrentValue, l.getCurrentValue);
                            return (
                                a.default.useImperativeHandle(
                                    t,
                                    function () {
                                        return { retry: l.retry };
                                    },
                                    []
                                ),
                                a.default.useMemo(
                                    function () {
                                        return n.loading || n.error
                                            ? a.default.createElement(u.loading, {
                                                isLoading: n.loading,
                                                pastDelay: n.pastDelay,
                                                timedOut: n.timedOut,
                                                error: n.error,
                                                retry: l.retry,
                                            })
                                            : n.loaded
                                                ? a.default.createElement(
                                                    (t = n.loaded) && t.__esModule ? t.default : t,
                                                    e
                                                )
                                                : null;
                                        var t;
                                    },
                                    [e, n]
                                )
                            );
                        };
                    return (
                        (p.preload = function () {
                            return n();
                        }),
                        (p.displayName = "LoadableComponent"),
                        a.default.forwardRef(p)
                    );
                })(f, e);
            }
            function v(e, t) {
                for (var n = []; e.length;) {
                    var r = e.pop();
                    n.push(r(t));
                }
                return Promise.all(n).then(function () {
                    if (e.length) return v(e, t);
                });
            }
            (p.preloadAll = function () {
                return new Promise(function (e, t) {
                    v(l).then(e, t);
                });
            }),
                (p.preloadReady = function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return new Promise(function (t) {
                        var n = function () {
                            return (d = !0), t();
                        };
                        v(c, e).then(n, n);
                    });
                }),
                (window.__NEXT_PRELOADREADY = p.preloadReady);
            var y = p;
            t.default = y;
        },
        1878: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n(7568),
                u = n(655),
                i = n(5893),
                a = n(1163),
                o = n(7294),
                s = n(7740),
                l = n(4371),
                c = n(2717),
                d = n(8392),
                f = n(5129),
                h = n(5152),
                p = n.n(h),
                v = n(4754),
                y = n(9473),
                m = p()(
                    function () {
                        return n.e(8865).then(n.bind(n, 6530));
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
                _ = p()(
                    function () {
                        return Promise.all([n.e(955), n.e(5445), n.e(7408)]).then(
                            n.bind(n, 9626)
                        );
                    },
                    {
                        loadableGenerated: {
                            webpack: function () {
                                return [9626];
                            },
                        },
                        loading: function () {
                            return "";
                        },
                    }
                ),
                b = p()(
                    function () {
                        return Promise.all([n.e(5675), n.e(598)]).then(n.bind(n, 598));
                    },
                    {
                        loadableGenerated: {
                            webpack: function () {
                                return [598];
                            },
                        },
                        loading: function () {
                            return "";
                        },
                    }
                ),
                C = p()(
                    function () {
                        return Promise.all([
                            n.e(9866),
                            n.e(2013),
                            n.e(955),
                            n.e(6556),
                            n.e(4617),
                            n.e(5675),
                            n.e(9288),
                            n.e(824),
                            n.e(3759),
                            n.e(4912),
                            n.e(3445),
                            n.e(9070),
                        ]).then(n.bind(n, 3445));
                    },
                    {
                        loadableGenerated: {
                            webpack: function () {
                                return [3445];
                            },
                        },
                        loading: function () {
                            return "";
                        },
                    }
                );
            t.default = function () {
                (0, f.w)();
                var e = (0, s.R)(c.w).coverageCoordinates,
                    t = (0, a.useRouter)(),
                    n = t.query.productoId,
                    h = t.query.comboId,
                    p = (0, y.I0)(),
                    g = (0, y.v9)(function (e) {
                        return e.listCollections;
                    }).listCollections,
                    k = (0, y.v9)(function (e) {
                        return e.listStores;
                    }).listStores,
                    Z = (0, y.v9)(function (e) {
                        return e.listCoverages;
                    }).listCoverages,
                    w = (0, y.v9)(function (e) {
                        return e.retrieveCoffee;
                    }).retrieveCoffee,
                    x = (0, y.v9)(function (e) {
                        return e.retrieveRequested;
                    }).retrieveRequested,
                    N = (0, y.v9)(function (e) {
                        return e.retrieveNewest;
                    }).retrieveNewest;
                return (
                    (0, o.useEffect)(function () {
                        d.u.setNameCoupon(""),
                            p((0, v.Cb)()),
                            p((0, v.JY)()),
                            p((0, v.Cq)()),
                            p((0, v.nE)()),
                            p((0, v.FK)()),
                            p((0, v.pv)());
                    }, []),
                    (0, o.useEffect)(function () {
                        d.u.setIsValidated(!1);
                    }, []),
                    (0, o.useEffect)(
                        function () {
                            if (0 === e.length) {
                                var t = [];
                                null === Z ||
                                    void 0 === Z ||
                                    Z.map(
                                        (function () {
                                            var e = (0, r.Z)(function (e) {
                                                return (0, u.__generator)(this, function (n) {
                                                    switch (n.label) {
                                                        case 0:
                                                            return [
                                                                4,
                                                                l.default
                                                                    .get(
                                                                        "coberturas/".concat(e.id, "/coordenadas/")
                                                                    )
                                                                    .then(function (e) {
                                                                        t.push(e.data),
                                                                            setTimeout(function () {
                                                                                c.w.setCoverageCoordinates(t);
                                                                            }, 800);
                                                                    }),
                                                            ];
                                                        case 1:
                                                            return n.sent(), [2];
                                                    }
                                                });
                                            });
                                            return function (t) {
                                                return e.apply(this, arguments);
                                            };
                                        })()
                                    );
                            }
                        },
                        [e, Z]
                    ),
                    (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(m, {
                            title: "Cafeter\xeda Artesanal",
                            description: "Cafeter\xeda artesanal e-commerce",
                            keywords:
                                "masa madre, panader\xeda artesanal, cafeter\xeda artesanal, e-commerce",
                            lineMob: !0,
                            dataStores: k,
                            children: (0, i.jsxs)("main", {
                                children: [
                                    (0, i.jsx)(b, { dataCover: w, dataNew: N, dataRequested: x }),
                                    (0, i.jsx)(_, { data: g }),
                                    !!n &&
                                    (0, i.jsx)(C, { idProduct: n, idCombo: void 0, stores: k }),
                                    !!h &&
                                    (0, i.jsx)(C, { idProduct: void 0, idCombo: h, stores: k }),
                                ],
                            }),
                        }),
                    })
                );
            };
        },
        8392: function (e, t, n) {
            "use strict";
            n.d(t, {
                u: function () {
                    return s;
                },
            });
            var r = n(1438),
                u = n(2951),
                i = n(4924),
                a = n(3932),
                o = (function () {
                    function e() {
                        (0, r.Z)(this, e),
                            (0, i.Z)(this, "billingName", "Boleta"),
                            (0, i.Z)(this, "typeIdCard", 0),
                            (0, i.Z)(this, "idCard", null),
                            (0, i.Z)(this, "RUC", null),
                            (0, i.Z)(this, "businessName", ""),
                            (0, i.Z)(this, "paymentId", 1),
                            (0, i.Z)(this, "tokenOpenPay", ""),
                            (0, i.Z)(this, "cardNumber", null),
                            (0, i.Z)(this, "cardExpirationMonth", null),
                            (0, i.Z)(this, "cardExpirationYear", null),
                            (0, i.Z)(this, "cardCVV", null),
                            (0, i.Z)(this, "cardName", ""),
                            (0, i.Z)(this, "TyC", !1),
                            (0, i.Z)(this, "newsletter", !1),
                            (0, i.Z)(this, "succesful", !1),
                            (0, i.Z)(this, "unsuccesful", !1),
                            (0, i.Z)(this, "unsuccesfulCard", !1),
                            (0, i.Z)(this, "isLoading", !1),
                            (0, i.Z)(this, "isValidated", !1),
                            (0, i.Z)(this, "existsComplement", null),
                            (0, i.Z)(this, "isCouponValid", null),
                            (0, i.Z)(this, "nameCoupon", "");
                    }
                    return (
                        (0, u.Z)(e, [
                            {
                                key: "setBillingName",
                                value: function (e) {
                                    this.billingName = e;
                                },
                            },
                            {
                                key: "setTypeIdCard",
                                value: function (e) {
                                    this.typeIdCard = e;
                                },
                            },
                            {
                                key: "setIdCard",
                                value: function (e) {
                                    this.idCard = e;
                                },
                            },
                            {
                                key: "setRUC",
                                value: function (e) {
                                    this.RUC = e;
                                },
                            },
                            {
                                key: "setBusinessName",
                                value: function (e) {
                                    this.businessName = e;
                                },
                            },
                            {
                                key: "setPaymentId",
                                value: function (e) {
                                    this.paymentId = e;
                                },
                            },
                            {
                                key: "setTokenOpenPay",
                                value: function (e) {
                                    this.tokenOpenPay = e;
                                },
                            },
                            {
                                key: "setCardNumber",
                                value: function (e) {
                                    this.cardNumber = e;
                                },
                            },
                            {
                                key: "setCardExpirationMonth",
                                value: function (e) {
                                    this.cardExpirationMonth = e;
                                },
                            },
                            {
                                key: "setCardExpirationYear",
                                value: function (e) {
                                    this.cardExpirationYear = e;
                                },
                            },
                            {
                                key: "setCardCVV",
                                value: function (e) {
                                    this.cardCVV = e;
                                },
                            },
                            {
                                key: "setCardName",
                                value: function (e) {
                                    this.cardName = e;
                                },
                            },
                            {
                                key: "setTyC",
                                value: function (e) {
                                    this.TyC = e;
                                },
                            },
                            {
                                key: "setNewsletter",
                                value: function (e) {
                                    this.newsletter = e;
                                },
                            },
                            {
                                key: "setSuccesful",
                                value: function (e) {
                                    this.succesful = e;
                                },
                            },
                            {
                                key: "setUnsuccesful",
                                value: function (e) {
                                    this.unsuccesful = e;
                                },
                            },
                            {
                                key: "setUnsuccesfulCard",
                                value: function (e) {
                                    this.unsuccesfulCard = e;
                                },
                            },
                            {
                                key: "setIsLoading",
                                value: function (e) {
                                    this.isLoading = e;
                                },
                            },
                            {
                                key: "setIsValidated",
                                value: function (e) {
                                    this.isValidated = e;
                                },
                            },
                            {
                                key: "setExistsComplement",
                                value: function (e) {
                                    this.existsComplement = e;
                                },
                            },
                            {
                                key: "setIsCouponValid",
                                value: function (e) {
                                    this.isCouponValid = e;
                                },
                            },
                            {
                                key: "setNameCoupon",
                                value: function (e) {
                                    this.nameCoupon = e;
                                },
                            },
                        ]),
                        e
                    );
                })(),
                s = (0, a.wW)(new o(), {});
        },
        4754: function (e, t, n) {
            "use strict";
            n.d(t, {
                Cb: function () {
                    return s;
                },
                Cq: function () {
                    return l;
                },
                JY: function () {
                    return c;
                },
                nE: function () {
                    return d;
                },
                pv: function () {
                    return h;
                },
                FK: function () {
                    return f;
                },
                wt: function () {
                    return r.wt;
                },
            });
            var r = n(9700),
                u = n(7568),
                i = n(655),
                a = n(4371),
                o = (function () {
                    var e = (0, u.Z)(function (e) {
                        var t, n;
                        return (0, i.__generator)(this, function (r) {
                            switch (r.label) {
                                case 0:
                                    return (
                                        r.trys.push([0, 2, , 3]),
                                        [
                                            4,
                                            a.default.get(e, {
                                                headers: { "Content-Type": "application/json" },
                                            }),
                                        ]
                                    );
                                case 1:
                                    return (t = r.sent()).status >= 200 && t.status < 300
                                        ? [2, t.data]
                                        : [3, 3];
                                case 2:
                                    return (n = r.sent()), console.log(n), [3, 3];
                                case 3:
                                    return [2];
                            }
                        });
                    });
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })(),
                s = function () {
                    return (function () {
                        var e = (0, u.Z)(function (e, t) {
                            return (0, i.__generator)(this, function (t) {
                                return (
                                    o("colecciones/").then(function (t) {
                                        e((0, r.NH)({ data: t }));
                                    }),
                                    [2]
                                );
                            });
                        });
                        return function (t, n) {
                            return e.apply(this, arguments);
                        };
                    })();
                },
                l = function () {
                    return (function () {
                        var e = (0, u.Z)(function (e, t) {
                            return (0, i.__generator)(this, function (t) {
                                return (
                                    o("coberturas/").then(function (t) {
                                        e((0, r.yc)({ data: t }));
                                    }),
                                    [2]
                                );
                            });
                        });
                        return function (t, n) {
                            return e.apply(this, arguments);
                        };
                    })();
                },
                c = function () {
                    return (function () {
                        var e = (0, u.Z)(function (e, t) {
                            return (0, i.__generator)(this, function (t) {
                                return (
                                    o("tiendas/").then(function (t) {
                                        e((0, r.Ab)({ data: t }));
                                    }),
                                    [2]
                                );
                            });
                        });
                        return function (t, n) {
                            return e.apply(this, arguments);
                        };
                    })();
                },
                d = function () {
                    return (function () {
                        var e = (0, u.Z)(function (e, t) {
                            return (0, i.__generator)(this, function (t) {
                                return (
                                    o("fondos/cafeteria/").then(function (t) {
                                        e((0, r.lS)({ data: t }));
                                    }),
                                    [2]
                                );
                            });
                        });
                        return function (t, n) {
                            return e.apply(this, arguments);
                        };
                    })();
                },
                f = function () {
                    return (function () {
                        var e = (0, u.Z)(function (e, t) {
                            return (0, i.__generator)(this, function (t) {
                                return (
                                    o("fondos/lo-mas-pedido/").then(function (t) {
                                        e((0, r.NZ)({ data: t }));
                                    }),
                                    [2]
                                );
                            });
                        });
                        return function (t, n) {
                            return e.apply(this, arguments);
                        };
                    })();
                },
                h = function () {
                    return (function () {
                        var e = (0, u.Z)(function (e, t) {
                            return (0, i.__generator)(this, function (t) {
                                return (
                                    o("fondos/lo-mas-nuevo/").then(function (t) {
                                        e((0, r.yh)({ data: t }));
                                    }),
                                    [2]
                                );
                            });
                        });
                        return function (t, n) {
                            return e.apply(this, arguments);
                        };
                    })();
                };
        },
        2717: function (e, t, n) {
            "use strict";
            n.d(t, {
                w: function () {
                    return s;
                },
            });
            var r = n(1438),
                u = n(2951),
                i = n(4924),
                a = n(3932),
                o = (function () {
                    function e() {
                        (0, r.Z)(this, e),
                            (0, i.Z)(this, "address", null),
                            (0, i.Z)(this, "store", null),
                            (0, i.Z)(this, "pickUpHour", null),
                            (0, i.Z)(this, "reference", null),
                            (0, i.Z)(this, "modality", null),
                            (0, i.Z)(this, "coverageCoordinates", []);
                    }
                    return (
                        (0, u.Z)(e, [
                            {
                                key: "setAddress",
                                value: function (e) {
                                    this.address = e;
                                },
                            },
                            {
                                key: "setStore",
                                value: function (e) {
                                    this.store = e;
                                },
                            },
                            {
                                key: "setPickUpHour",
                                value: function (e) {
                                    this.pickUpHour = e;
                                },
                            },
                            {
                                key: "setReference",
                                value: function (e) {
                                    this.reference = e;
                                },
                            },
                            {
                                key: "setModality",
                                value: function (e) {
                                    this.modality = e;
                                },
                            },
                            {
                                key: "setCoverageCoordinates",
                                value: function (e) {
                                    this.coverageCoordinates = e;
                                },
                            },
                        ]),
                        e
                    );
                })(),
                s = (0, a.wW)(new o(), {});
        },
        5152: function (e, t, n) {
            e.exports = n(638);
        },
        1163: function (e, t, n) {
            e.exports = n(387);
        },
    },
    function (e) {
        e.O(0, [2814, 9774, 2888, 179], function () {
            return (t = 5728), e((e.s = t));
            var t;
        });
        var t = e.O();
        _N_E = t;
    },
]);
