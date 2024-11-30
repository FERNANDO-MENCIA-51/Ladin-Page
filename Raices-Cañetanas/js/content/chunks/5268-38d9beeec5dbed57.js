"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5268, 598],
    {
        3043: function (e, t, n) {
            n.d(t, {
                U: function () {
                    return s;
                },
            });
            var r = n(5893),
                i = n(5675),
                u = n.n(i),
                s = function (e) {
                    var t = e.src,
                        n = e.alt,
                        i = e.className,
                        s = e.onLoad;
                    return (0, r.jsx)(r.Fragment, {
                        children:
                            !!t &&
                            (0, r.jsx)(u(), {
                                className: i,
                                src: t,
                                alt: n,
                                as: "style",
                                priority: !0,
                                layout: "fill",
                                onLoad: s,
                            }),
                    });
                };
        },
        598: function (e, t, n) {
            n.r(t),
                n.d(t, {
                    default: function () {
                        return l;
                    },
                });
            var r = n(5893),
                i = n(1163),
                u = (n(5675), n(3043)),
                s = n(9473),
                o = n(4754),
                a = function (e) {
                    var t = e.srcMobile,
                        n = e.srcDesktop,
                        i = (0, s.I0)();
                    return (0, r.jsxs)("section", {
                        className: "cover",
                        children: [
                            (0, r.jsx)("section", {
                                className: "cover__imageMobile",
                                children: (0, r.jsx)(u.U, {
                                    src: t,
                                    alt: "Pan Atelier",
                                    className: "cover__imageMobile__inside",
                                }),
                            }),
                            (0, r.jsx)("section", {
                                className: "cover__imageDesktop",
                                children: (0, r.jsx)(u.U, {
                                    src: n,
                                    alt: "Pan Atelier",
                                    onLoad: function () {
                                        setTimeout(function () {
                                            i((0, o.wt)(!1));
                                        }, 500);
                                    },
                                    className: " cover__imageDesktop__inside",
                                }),
                            }),
                        ],
                    });
                };
            var c = function (e) {
                var t = e.src,
                    n = e.text;
                return (0, r.jsxs)("section", {
                    className: "imagenButton",
                    children: [
                        (0, r.jsx)("section", {
                            className: "imagenButton__imageMobile",
                            children: (0, r.jsx)(u.U, {
                                src: t,
                                alt: n,
                                className: "imagenButton__imageMobile__inside",
                            }),
                        }),
                        (0, r.jsx)("section", {
                            className: "imagenButton__imageDesktop hoverDesktop",
                            children: (0, r.jsx)(u.U, {
                                src: t,
                                alt: n,
                                className: "imagenButton__imageDesktop__inside",
                            }),
                        }),
                        (0, r.jsx)("h1", {
                            className: "imagenButton__text hoverText",
                            children: n,
                        }),
                    ],
                });
            },
                l = function (e) {
                    var t = e.dataCover,
                        n = e.dataNew,
                        u = e.dataRequested,
                        s = (0, i.useRouter)(),
                        o = function (e, t, n) {
                            null !== e && s.push(t, n, { scroll: !1 });
                        };
                    return (0, r.jsxs)("section", {
                        className: "collage",
                        children: [
                            (0, r.jsx)("section", {
                                className: "collage__1",
                                children: (0, r.jsx)(a, {
                                    srcMobile: t.photo,
                                    srcDesktop: t.photo,
                                    text1: "Pan Atelier",
                                    text2: "en casa",
                                }),
                            }),
                            (0, r.jsx)("section", {
                                className: "collage__2",
                                onClick: function () {
                                    return o(
                                        u.slugItem,
                                        "/?productoId=".concat(u.slugItem),
                                        "/producto/".concat(u.slugItem)
                                    );
                                },
                                children: (0, r.jsx)(c, { src: u.photo, text: u.name }),
                            }),
                            (0, r.jsx)("section", {
                                className: "collage__3",
                                onClick: function () {
                                    return o(
                                        n.slugItem,
                                        "/?productoId=".concat(n.slugItem),
                                        "/producto/".concat(n.slugItem)
                                    );
                                },
                                children: (0, r.jsx)(c, { src: n.photo, text: n.name }),
                            }),
                        ],
                    });
                };
        },
        2464: function (e, t, n) {
            function r(e) {
                return String(e.charAt(0).toUpperCase() + e.slice(1));
            }
            n.d(t, {
                Z: function () {
                    return r;
                },
            });
        },
        5129: function (e, t, n) {
            n.d(t, {
                w: function () {
                    return o;
                },
            });
            var r = n(7568),
                i = n(655),
                u = n(7294),
                s = n(4371),
                o = function () {
                    (0, u.useEffect)(function () {
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
                            return (0, i.__generator)(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, s.default.get(e, {})];
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
        2505: function (e, t, n) {
            n.d(t, {
                M: function () {
                    return d;
                },
            });
            var r = n(7568),
                i = n(1438),
                u = n(2951),
                s = n(4924),
                o = n(655),
                a = n(3932),
                c = n(4371),
                l = (function () {
                    function e() {
                        (0, i.Z)(this, e),
                            (0, s.Z)(this, "isLoggedIn", !1),
                            (0, s.Z)(this, "dataUser", {
                                id: 0,
                                fullName: "",
                                names: "",
                                surnames: "",
                                email: "",
                                phone: 0,
                                documentNumber: 0,
                            }),
                            (0, s.Z)(this, "documentType", { id: 0, name: "" }),
                            (0, s.Z)(this, "myAddresses", []),
                            (0, s.Z)(this, "verificationEmailOrPhone", !1),
                            (0, s.Z)(this, "isLoginContinue", !1);
                    }
                    return (
                        (0, u.Z)(e, [
                            {
                                key: "setIsLoggedIn",
                                value: function (e) {
                                    var t = e;
                                    this.isLoggedIn = t;
                                },
                            },
                            {
                                key: "updateIsLoggedInByToken",
                                value: function (e) {
                                    if (e) {
                                        if (null == e.token && void 0 == e.token) return;
                                        e.token.length > 0 && d.setIsLoggedIn(!0);
                                    }
                                },
                            },
                            {
                                key: "setDataUser",
                                value: function (e) {
                                    var t = e;
                                    (this.dataUser = {
                                        id: Number(t.id),
                                        fullName: t.fullName,
                                        names: t.names,
                                        surnames: t.surnames,
                                        email: t.email,
                                        phone: Number(t.phone),
                                        documentNumber: Number(t.documentNumber),
                                    }),
                                        t.documentType &&
                                        (this.documentType = {
                                            id: Number(t.documentType.id),
                                            name: t.documentType.name,
                                        });
                                },
                            },
                            {
                                key: "updateDataUser",
                                value: function (e) {
                                    var t = this;
                                    return (0, r.Z)(function () {
                                        var n, r, i, u;
                                        return (0, o.__generator)(this, function (s) {
                                            switch (s.label) {
                                                case 0:
                                                    return (
                                                        (n = e),
                                                        (t.dataUser = {
                                                            id: Number(n.id),
                                                            fullName: n.fullName,
                                                            names: n.names,
                                                            surnames: n.surnames,
                                                            email: n.email,
                                                            phone: Number(n.phone),
                                                            documentNumber: "".concat(
                                                                n.documentNumber ? Number(n.documentNumber) : 0
                                                            ),
                                                        }),
                                                        e.documentType
                                                            ? [4, c.default.get("tiposdocumentos/")]
                                                            : [3, 2]
                                                    );
                                                case 1:
                                                    (i = s.sent()),
                                                        (u =
                                                            null === (r = i.data) || void 0 === r
                                                                ? void 0
                                                                : r.filter(function (t) {
                                                                    return e.documentType == t.id;
                                                                })),
                                                        (t.documentType = {
                                                            id: Number(u[0].id),
                                                            name: u[0].name,
                                                        }),
                                                        (s.label = 2);
                                                case 2:
                                                    return [2];
                                            }
                                        });
                                    })();
                                },
                            },
                            {
                                key: "setMyAddresses",
                                value: function (e) {
                                    this.myAddresses = e;
                                },
                            },
                            {
                                key: "setVerificationEmailOrPhone",
                                value: function (e) {
                                    this.verificationEmailOrPhone = e;
                                },
                            },
                            {
                                key: "setIsLoginContinue",
                                value: function (e) {
                                    this.isLoginContinue = e;
                                },
                            },
                            {
                                key: "updateAddressItemById",
                                value: function (e, t, n) {
                                    var i = this;
                                    return (0, r.Z)(function () {
                                        var r;
                                        return (0, o.__generator)(this, function (u) {
                                            switch (u.label) {
                                                case 0:
                                                    return (
                                                        ((r = i.myAddresses.find(function (t) {
                                                            return t.id == e;
                                                        })).address = n.address),
                                                        (r.reference = n.reference),
                                                        [
                                                            4,
                                                            c.default.put("direcciones/".concat(e, "/"), n, {
                                                                headers: {
                                                                    "Content-Type": "application/json",
                                                                    Authorization: "Token ".concat(t),
                                                                },
                                                            }),
                                                        ]
                                                    );
                                                case 1:
                                                    return u.sent(), [2];
                                            }
                                        });
                                    })();
                                },
                            },
                            {
                                key: "updateMainAddressItemById",
                                value: function (e, t, n) {
                                    var i = this;
                                    return (0, r.Z)(function () {
                                        var r, u;
                                        return (0, o.__generator)(this, function (s) {
                                            switch (s.label) {
                                                case 0:
                                                    (r = i.myAddresses.find(function (t) {
                                                        return t.id == e;
                                                    })),
                                                        (u = i.myAddresses.find(function (e) {
                                                            return e.id == n;
                                                        })),
                                                        (r.first = !0),
                                                        (u.first = !1),
                                                        (s.label = 1);
                                                case 1:
                                                    return (
                                                        s.trys.push([1, 3, , 4]),
                                                        [
                                                            4,
                                                            c.default.get(
                                                                "direcciones/".concat(
                                                                    e,
                                                                    "/cambiar_a_principal/"
                                                                ),
                                                                {
                                                                    headers: {
                                                                        Authorization: "Token ".concat(t),
                                                                    },
                                                                }
                                                            ),
                                                        ]
                                                    );
                                                case 2:
                                                    return s.sent(), [3, 4];
                                                case 3:
                                                    return s.sent(), [2];
                                                case 4:
                                                    return [2];
                                            }
                                        });
                                    })();
                                },
                            },
                            {
                                key: "removeAddressItemById",
                                value: function (e, t) {
                                    var n = this;
                                    return (0, r.Z)(function () {
                                        var r;
                                        return (0, o.__generator)(this, function (i) {
                                            switch (i.label) {
                                                case 0:
                                                    return (
                                                        (r = n.myAddresses.findIndex(function (t) {
                                                            return t.id == e;
                                                        })),
                                                        n.myAddresses.splice(r, 1),
                                                        [
                                                            4,
                                                            c.default.delete("direcciones/".concat(e, "/"), {
                                                                headers: {
                                                                    "Content-Type": "application/json",
                                                                    Authorization: "Token ".concat(t),
                                                                },
                                                            }),
                                                        ]
                                                    );
                                                case 1:
                                                    return i.sent(), [2];
                                            }
                                        });
                                    })();
                                },
                            },
                        ]),
                        e
                    );
                })(),
                d = (0, a.wW)(new l(), {});
        },
        8392: function (e, t, n) {
            n.d(t, {
                u: function () {
                    return a;
                },
            });
            var r = n(1438),
                i = n(2951),
                u = n(4924),
                s = n(3932),
                o = (function () {
                    function e() {
                        (0, r.Z)(this, e),
                            (0, u.Z)(this, "billingName", "Boleta"),
                            (0, u.Z)(this, "typeIdCard", 0),
                            (0, u.Z)(this, "idCard", null),
                            (0, u.Z)(this, "RUC", null),
                            (0, u.Z)(this, "businessName", ""),
                            (0, u.Z)(this, "paymentId", 1),
                            (0, u.Z)(this, "tokenOpenPay", ""),
                            (0, u.Z)(this, "cardNumber", null),
                            (0, u.Z)(this, "cardExpirationMonth", null),
                            (0, u.Z)(this, "cardExpirationYear", null),
                            (0, u.Z)(this, "cardCVV", null),
                            (0, u.Z)(this, "cardName", ""),
                            (0, u.Z)(this, "TyC", !1),
                            (0, u.Z)(this, "newsletter", !1),
                            (0, u.Z)(this, "succesful", !1),
                            (0, u.Z)(this, "unsuccesful", !1),
                            (0, u.Z)(this, "unsuccesfulCard", !1),
                            (0, u.Z)(this, "isLoading", !1),
                            (0, u.Z)(this, "isValidated", !1),
                            (0, u.Z)(this, "existsComplement", null),
                            (0, u.Z)(this, "isCouponValid", null),
                            (0, u.Z)(this, "nameCoupon", "");
                    }
                    return (
                        (0, i.Z)(e, [
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
                a = (0, s.wW)(new o(), {});
        },
        4754: function (e, t, n) {
            n.d(t, {
                Cb: function () {
                    return a;
                },
                Cq: function () {
                    return c;
                },
                JY: function () {
                    return l;
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
                i = n(7568),
                u = n(655),
                s = n(4371),
                o = (function () {
                    var e = (0, i.Z)(function (e) {
                        var t, n;
                        return (0, u.__generator)(this, function (r) {
                            switch (r.label) {
                                case 0:
                                    return (
                                        r.trys.push([0, 2, , 3]),
                                        [
                                            4,
                                            s.default.get(e, {
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
                a = function () {
                    return (function () {
                        var e = (0, i.Z)(function (e, t) {
                            return (0, u.__generator)(this, function (t) {
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
                c = function () {
                    return (function () {
                        var e = (0, i.Z)(function (e, t) {
                            return (0, u.__generator)(this, function (t) {
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
                l = function () {
                    return (function () {
                        var e = (0, i.Z)(function (e, t) {
                            return (0, u.__generator)(this, function (t) {
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
                        var e = (0, i.Z)(function (e, t) {
                            return (0, u.__generator)(this, function (t) {
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
                        var e = (0, i.Z)(function (e, t) {
                            return (0, u.__generator)(this, function (t) {
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
                        var e = (0, i.Z)(function (e, t) {
                            return (0, u.__generator)(this, function (t) {
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
            n.d(t, {
                w: function () {
                    return a;
                },
            });
            var r = n(1438),
                i = n(2951),
                u = n(4924),
                s = n(3932),
                o = (function () {
                    function e() {
                        (0, r.Z)(this, e),
                            (0, u.Z)(this, "address", null),
                            (0, u.Z)(this, "store", null),
                            (0, u.Z)(this, "pickUpHour", null),
                            (0, u.Z)(this, "reference", null),
                            (0, u.Z)(this, "modality", null),
                            (0, u.Z)(this, "coverageCoordinates", []);
                    }
                    return (
                        (0, i.Z)(e, [
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
                a = (0, s.wW)(new o(), {});
        },
        9983: function (e, t, n) {
            n.d(t, {
                i: function () {
                    return f;
                },
            });
            var r = n(7568),
                i = n(1438),
                u = n(2951),
                s = n(4924),
                o = n(9637),
                a = n(655),
                c = n(3932),
                l = n(4371),
                d = (function () {
                    function e() {
                        (0, i.Z)(this, e),
                            (0, s.Z)(this, "order", []),
                            (0, s.Z)(this, "suggested", []);
                    }
                    return (
                        (0, u.Z)(e, [
                            {
                                key: "setOrder",
                                value: function (e) {
                                    var t = (0, o.Z)(e).slice(1);
                                    this.order = t;
                                },
                            },
                            {
                                key: "fetchOrderById",
                                value: function (e) {
                                    var t =
                                        arguments.length > 1 && void 0 !== arguments[1]
                                            ? arguments[1]
                                            : "";
                                    return (0, r.Z)(function () {
                                        var n;
                                        return (0, a.__generator)(this, function (r) {
                                            switch (r.label) {
                                                case 0:
                                                    return e
                                                        ? [
                                                            4,
                                                            l.default.get(
                                                                "ordenes/"
                                                                    .concat(e, "/items/?code_coupon=")
                                                                    .concat(t)
                                                            ),
                                                        ]
                                                        : [2];
                                                case 1:
                                                    return (n = r.sent()), f.setOrder(n.data), [2];
                                            }
                                        });
                                    })();
                                },
                            },
                            {
                                key: "updateAddItemById",
                                value: function (e, t) {
                                    var n = this.order.find(function (t) {
                                        return t.id == e;
                                    }),
                                        r = n.quantity + 1;
                                    r <= 10 &&
                                        ((n.totalAmount = (n.totalAmount / n.quantity) * r),
                                            (n.quantity = r),
                                            !0 === t
                                                ? l.default.put("ordenesCombos/".concat(e, "/"), {
                                                    quantity: r,
                                                })
                                                : !1 === t &&
                                                l.default.put("ordenesProductos/".concat(e, "/"), {
                                                    quantity: r,
                                                }));
                                },
                            },
                            {
                                key: "updateReduceItemById",
                                value: function (e, t) {
                                    var n = this.order.find(function (t) {
                                        return t.id == e;
                                    }),
                                        r = n.quantity - 1;
                                    r >= 1 &&
                                        ((n.totalAmount = (n.totalAmount / n.quantity) * r),
                                            (n.quantity = r),
                                            !1 === t
                                                ? l.default.put("ordenesProductos/".concat(e, "/"), {
                                                    quantity: r,
                                                })
                                                : !0 === t &&
                                                l.default.put("ordenesCombos/".concat(e, "/"), {
                                                    quantity: r,
                                                }));
                                },
                            },
                            {
                                key: "removeItemById",
                                value: function (e, t) {
                                    var n = this.order.findIndex(function (t) {
                                        return t.id == e;
                                    });
                                    this.order.splice(n, 1),
                                        t
                                            ? l.default.delete("ordenesCombos/".concat(e, "/"))
                                            : t ||
                                            l.default.delete("ordenesProductos/".concat(e, "/"));
                                },
                            },
                            {
                                key: "setSuggested",
                                value: function (e) {
                                    this.suggested = e;
                                },
                            },
                        ]),
                        e
                    );
                })(),
                f = (0, c.wW)(new d(), {
                    totalAmount: function (e) {
                        return e.order.reduce(function (e, t) {
                            return e + t.totalAmount + t.discount;
                        }, 0);
                    },
                });
        },
    },
]);
