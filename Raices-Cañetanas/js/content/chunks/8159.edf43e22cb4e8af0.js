"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8159],
    {
        4668: function (e, t, n) {
            n.d(t, {
                u: function () {
                    return h;
                },
            });
            var r,
                s = n(5893),
                i = n(1664),
                a = n.n(i),
                o = n(9352),
                c = n(7294);
            function l() {
                return (
                    (l = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        }),
                    l.apply(this, arguments)
                );
            }
            var p = function (e) {
                return c.createElement(
                    "svg",
                    l(
                        {
                            fill: "currentColor",
                            stroke: "currentColor",
                            width: 80,
                            height: 80,
                            viewBox: "0 0 32 32",
                            xmlns: "http://www.w3.org/2000/svg",
                        },
                        e
                    ),
                    r ||
                    (r = c.createElement("path", {
                        d: "M16.708.027C18.453 0 20.188.016 21.921 0c.105 2.041.839 4.12 2.333 5.563 1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-.063-3.855-.463-5.6-1.291-.76-.344-1.468-.787-2.161-1.24-.009 3.896.016 7.787-.025 11.667-.104 1.864-.719 3.719-1.803 5.255-1.744 2.557-4.771 4.224-7.88 4.276-1.907.109-3.812-.411-5.437-1.369C4.307 29.027 2.412 26.12 2.136 23a22.3 22.3 0 0 1-.016-1.984c.24-2.537 1.495-4.964 3.443-6.615 2.208-1.923 5.301-2.839 8.197-2.297.027 1.975-.052 3.948-.052 5.923-1.323-.428-2.869-.308-4.025.495a4.618 4.618 0 0 0-1.819 2.333c-.276.676-.197 1.427-.181 2.145.317 2.188 2.421 4.027 4.667 3.828 1.489-.016 2.916-.88 3.692-2.145.251-.443.532-.896.547-1.417.131-2.385.079-4.76.095-7.145.011-5.375-.016-10.735.025-16.093z",
                    }))
                );
            },
                h = function () {
                    var e = [
                        {
                            name: "instagram",
                            href: "https://www.instagram.com/panatelierperu/",
                            icon: (0, s.jsx)(o.Adh, {}),
                        },
                        {
                            name: "facebook",
                            href: "https://es-la.facebook.com/PanAtelierPeru/",
                            icon: (0, s.jsx)(o.NqZ, {}),
                        },
                        {
                            name: "tiktok",
                            href: "https://www.tiktok.com/@panatelierperu",
                            icon: (0, s.jsx)(p, {}),
                        },
                    ];
                    return (0, s.jsxs)("section", {
                        className: "social-media",
                        children: [
                            (0, s.jsx)("h2", {
                                className: "social-media__title",
                                children: "S\xedguenos",
                            }),
                            (0, s.jsx)("section", {
                                className: "social-media__icons",
                                children: e.map(function (e, t) {
                                    return (0,
                                        s.jsx)(a(), { href: e.href, passHref: !0, children: (0, s.jsx)("a", { target: "_blank", rel: "noopener noreferrer", "aria-label": e.name, children: e.icon }) }, t);
                                }),
                            }),
                        ],
                    });
                };
        },
        8159: function (e, t, n) {
            n.r(t);
            var r = n(5893),
                s = n(1664),
                i = n.n(s),
                a = n(5675),
                o = n.n(a),
                c = n(8478),
                l = n(4668);
            function p() {
                return (0, r.jsx)(i(), {
                    href: "https://panatelier.com.pe/",
                    passHref: !0,
                    children: (0, r.jsx)("a", {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "panatelier",
                        children: (0, r.jsx)(o(), {
                            src: "/assets/logoPAnew.svg",
                            alt: "Pan Atelier",
                            as: "style",
                            priority: !0,
                            width: 153,
                            height: 120,
                        }),
                    }),
                });
            }
            t.default = function () {
                var e = c[0].Y,
                    t = c[1].Y,
                    n = c[2].Y;
                return (0, r.jsx)("section", {
                    className: "footerDesktop",
                    children: (0, r.jsxs)("section", {
                        className: "footerDesktop__content",
                        children: [
                            (0, r.jsx)("section", {
                                className: "footerDesktop__content__logo",
                                children: (0, r.jsx)(p, {}),
                            }),
                            (0, r.jsxs)("section", {
                                className: "footerDesktop__content__description",
                                children: [
                                    (0, r.jsxs)("section", {
                                        className: "footerDesktop__content__description__text",
                                        children: [
                                            (0, r.jsx)("h2", { children: c[0].T }),
                                            (0, r.jsx)("ul", {
                                                children: e.map(function (e, t) {
                                                    return (0,
                                                        r.jsx)("li", { children: (0, r.jsx)(i(), { href: e.path, passHref: !0, children: (0, r.jsx)("a", { className: "list", target: "_blank", rel: "noopener noreferrer", "aria-label": e.title, children: e.title }) }) }, t);
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)("section", {
                                        className: "footerDesktop__content__description__text",
                                        children: [
                                            (0, r.jsx)("h2", { children: c[1].T }),
                                            (0, r.jsx)("ul", {
                                                children: t.map(function (e, t) {
                                                    return (0,
                                                        r.jsx)("li", { children: (0, r.jsx)(i(), { href: e.path, passHref: !0, children: (0, r.jsx)("a", { className: "list", target: "_blank", rel: "noopener noreferrer", "aria-label": e.title, children: e.title }) }) }, t);
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)("section", {
                                        className: "footerDesktop__content__description__text",
                                        children: [
                                            (0, r.jsx)("h2", { children: c[2].T }),
                                            (0, r.jsx)("ul", {
                                                children: n.map(function (e, t) {
                                                    return (0,
                                                        r.jsxs)("li", { children: [(0, r.jsx)("h3", { children: e.subtitle }), (0, r.jsx)("p", { children: e.text })] }, t);
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)("section", {
                                className: "footerDesktop__content__network",
                                children: (0, r.jsx)(l.u, { color: "white" }),
                            }),
                        ],
                    }),
                });
            };
        },
        8478: function (e) {
            e.exports = JSON.parse(
                '[{"T":"Pan Atelier","Y":[{"title":"Sobre nosotros","path":"https://panatelier.com.pe/nosotros"},{"title":"Nuestros locales","path":"https://panatelier.com.pe/locales"},{"title":"Contacto","path":"https://panatelier.com.pe/nosotros/contacto"}]},{"T":"Atenci\xf3n al cliente","Y":[{"title":"Preguntas frecuentes","path":"https://panatelier.com.pe/preguntasfrecuentes"},{"title":"T\xe9rminos y condiciones","path":"https://panatelier.com.pe/terminosycondiciones"},{"title":"Pol\xedticas de delivery","path":"https://panatelier.com.pe/politicasdedelivery"},{"title":"Pol\xedticas de privacidad","path":"https://panatelier.com.pe/politicasdeprivacidad"},{"title":"Libro de reclamaciones","path":"https://panatelier.com.pe/librodereclamaciones"}]},{"T":"Cont\xe1ctanos","Y":[{"subtitle":"Atenci\xf3n:","text":"(01) 680 5591 - atencionalcliente2@adv.com.pe"},{"subtitle":"Miraflores","text":"C. Cantuarias 167, Miraflores 15074"},{"subtitle":"Pueblo Libre","text":"Av. Sim\xf3n Bolivar 985, Pueblo Libre 15084"}]}]'
            );
        },
    },
]);
