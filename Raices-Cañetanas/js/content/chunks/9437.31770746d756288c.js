"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9437],
    {
        9437: function (e, n, c) {
            c.r(n),
                c.d(n, {
                    default: function () {
                        return r;
                    },
                });
            var o = c(5893),
                l = c(7294),
                t = c(4819);
            function r(e) {
                var n = e.children,
                    c = e.open,
                    r = e.onClose,
                    u = e.isComplement,
                    s = (0, l.useRef)(null);
                (0, l.useEffect)(
                    function () {
                        u || (null !== s.current && s.current.focus());
                    },
                    [u]
                );
                return c
                    ? ((0, t.Z)({ element: document.body, disabled: !0 }),
                        (0, o.jsx)(o.Fragment, {
                            children: (0, o.jsxs)("section", {
                                ref: u ? null : s,
                                className: "product-modal",
                                onKeyDown: function (e) {
                                    "Escape" == e.code && r(e);
                                },
                                children: [
                                    (0, o.jsx)("section", {
                                        className: "product-modal__screen-cover blur",
                                        onClick: r,
                                    }),
                                    (0, o.jsx)("section", {
                                        className: "product-modal__container",
                                        children: n,
                                    }),
                                ],
                            }),
                        }))
                    : ((0, t.Z)({ element: document.body, disabled: !1 }), null);
            }
        },
        4819: function (e, n, c) {
            c.d(n, {
                Z: function () {
                    return l;
                },
            });
            var o = c(7294);
            function l(e) {
                var n = e.element,
                    c = e.disabled;
                (0, o.useEffect)(
                    function () {
                        if (n)
                            return (
                                (n.style.overflowY = c ? "hidden" : "scroll"),
                                function () {
                                    n.style.overflowY = "scroll";
                                }
                            );
                    },
                    [c]
                );
            }
        },
    },
]);
