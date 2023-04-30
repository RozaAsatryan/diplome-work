"use strict";
(self.webpackChunkreact_hotel_booking =
  self.webpackChunkreact_hotel_booking || []).push([
  [574],
  {
    1276: function (e, r, i) {
      i.d(r, {
        Z: function () {
          return v;
        },
      });
      var n = i(8489),
        s = i(3060),
        a = i(3517),
        l = (i(2791), i(5978)),
        o = i(3944),
        d = i(1523),
        t = i(9271),
        c = i(9725),
        u = i(3055),
        m = i(184),
        h = [
          {
            path: "/",
            breadcrumb: "\u0413\u043b\u0430\u0432\u043d\u0430\u044f",
          },
          {
            path: "/rooms",
            breadcrumb:
              "\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u043d\u043e\u043c\u0435\u0440\u0430",
          },
          {
            path: "/rooms/:roomId?",
            breadcrumb: function (e) {
              var r = (0, l.v9)((0, c.wW)(e.match.params.roomId));
              return (0, m.jsxs)("span", {
                children: [
                  "\u041d\u043e\u043c\u0435\u0440 \u2116",
                  null === r || void 0 === r ? void 0 : r.roomNumber,
                ],
              });
            },
          },
          {
            path: "/profile",
            breadcrumb: "\u041f\u0440\u043e\u0444\u0438\u043b\u044c",
          },
          {
            path: "/profile/:userId?",
            breadcrumb: function (e) {
              var r = (0, l.v9)((0, u.GA)(e.match.params.userId));
              return r
                ? (0, m.jsx)("span", {
                    children: ""
                      .concat(
                        null === r || void 0 === r ? void 0 : r.firstName,
                        " "
                      )
                      .concat(
                        null === r || void 0 === r ? void 0 : r.secondName
                      ),
                  })
                : (0, m.jsx)("span", {
                    children:
                      "\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d",
                  });
            },
          },
          {
            path: "/profile/:userId?/:route?",
            breadcrumb: function (e) {
              var r;
              switch (e.match.params.route) {
                case "booking":
                  r =
                    "\u041c\u043e\u0438 \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f";
                  break;
                case "dashboard":
                  r =
                    "\u041f\u0430\u043d\u0435\u043b\u044c \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430";
                  break;
                case "likes":
                  r =
                    "\u041f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c";
                  break;
                case "favorites":
                  r = "\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435";
                  break;
                case "edit":
                  r =
                    "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c";
                  break;
                default:
                  r = "";
              }
              return (0, m.jsx)("span", { children: r });
            },
          },
        ],
        x = function (e) {
          return (0, m.jsx)(
            s.Z,
            (0, n.Z)(
              (0, n.Z)({}, e),
              {},
              {
                className: "breadcrumbs-item",
                underline: "hover",
                component: d.rU,
              }
            )
          );
        },
        v = (0, o.Z)(h)(function (e) {
          var r = e.breadcrumbs;
          return (0, m.jsx)("div", {
            className: "breadcrumbs",
            children: (0, m.jsx)(t.AW, {
              children: function () {
                return (0, m.jsx)(a.Z, {
                  "aria-label": "breadcrumb",
                  children: r.map(function (e, i) {
                    var n = e.match,
                      s = e.breadcrumb;
                    return i === r.length - 1
                      ? (0, m.jsx)(
                          "span",
                          { className: "breadcrumbs-item--last", children: s },
                          n.url
                        )
                      : (0, m.jsx)(
                          "span",
                          {
                            children: (0, m.jsx)(
                              x,
                              { to: n.url, children: s },
                              n.url
                            ),
                          },
                          n.url
                        );
                  }),
                });
              },
            }),
          });
        });
    },
    4529: function (e, r, i) {
      i.d(r, {
        Z: function () {
          return h;
        },
      });
      var n = i(8489),
        s = i(3738),
        a = (i(2791), i(5717)),
        l = i(8996),
        o = i(1009),
        d = i(184),
        t = ["children"],
        c = {
          dots: !0,
          nextArrow: (0, d.jsx)(u, {}),
          prevArrow: (0, d.jsx)(m, {}),
          infinite: !0,
          slidesToShow: 1,
          slidesToScroll: 1,
        };
      function u(e) {
        var r = e.onClick;
        return (0, d.jsx)("button", {
          className: "slick-arrow slick-arrow--next",
          onClick: r,
          children: (0, d.jsx)(l.Z, {}),
        });
      }
      function m(e) {
        var r = e.onClick;
        return (0, d.jsx)("button", {
          className: "slick-arrow slick-arrow--before",
          onClick: r,
          children: (0, d.jsx)(o.Z, {}),
        });
      }
      var h = function (e) {
        var r = e.children,
          i = (0, s.Z)(e, t);
        return (0, d.jsx)(
          a.Z,
          (0, n.Z)((0, n.Z)((0, n.Z)({}, c), i), {}, { children: r })
        );
      };
    },
    1801: function (e, r, i) {
      i.d(r, {
        Z: function () {
          return I;
        },
      });
      var n = i(2791),
        s = i(3430),
        a = i(5130),
        l = i(1286),
        o = i(3400),
        d = i(5978),
        t = i(2238),
        c = i(9725),
        u = i(3055),
        m = i(6728),
        h = i(2479),
        x = i(5110),
        v = i(135),
        j = i(4791),
        b = i(2016),
        p = i(8893),
        f = i(7412),
        g = i(7237),
        _ = i(7488),
        Z = i(184),
        N = function (e) {
          var r = e.displayCount,
            i = e.status,
            n = e.onToggle,
            s = (0, d.v9)((0, u.M7)());
          return (0, Z.jsx)(o.Z, {
            "aria-label": "like",
            onClick: n,
            className: i ? "like-button like-button--active" : "like-button",
            disableRipple: !0,
            disabled: !s,
            children: (0, Z.jsxs)("div", {
              className: "like-button__wrapper",
              children: [
                (0, Z.jsx)("span", {
                  className: "visually-hidden",
                  children:
                    "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u0430\u0439\u043a\u043e\u0432:",
                }),
                i ? (0, Z.jsx)(g.Z, {}) : (0, Z.jsx)(_.Z, {}),
                r,
              ],
            }),
          });
        },
        w = function (e) {
          var r = e.reviewId,
            i = (0, n.useState)(!1),
            a = (0, s.Z)(i, 2),
            l = a[0],
            o = a[1],
            t = (0, d.I0)(),
            c = (0, d.v9)((0, u.rc)()),
            m = (0, d.v9)((0, f.DG)(r)),
            h = m.some(function (e) {
              return e.userId === c;
            });
          (0, n.useEffect)(
            function () {
              c && o(h);
            },
            [m, c]
          );
          return (0, Z.jsx)(N, {
            displayCount: m.length,
            status: l,
            onToggle: function () {
              var e = { userId: c || "", reviewId: r };
              t(h ? (0, f.fz)(e) : (0, f.j)(e));
            },
          });
        },
        k = function (e) {
          var r = e.review,
            i = (0, d.I0)(),
            f = (0, n.useState)(null),
            g = (0, s.Z)(f, 2),
            _ = g[0],
            N = g[1],
            k = (0, n.useState)(!1),
            y = (0, s.Z)(k, 2),
            I = y[0],
            C = y[1],
            P = (0, d.v9)((0, c.wW)(r.roomId)),
            D = (0, d.v9)((0, u.GA)(r.userId || "")),
            S = (0, d.v9)((0, u.Ts)()),
            z = "admin" === (null === S || void 0 === S ? void 0 : S.role),
            F = r.userId === (null === S || void 0 === S ? void 0 : S._id),
            O = z || F;
          (0, n.useEffect)(
            function () {
              N(r.content);
            },
            [r]
          );
          return D
            ? (0, Z.jsx)("li", {
                className: "reviews-list__item",
                children: (0, Z.jsxs)("div", {
                  className: "review",
                  children: [
                    (0, Z.jsxs)("div", {
                      className: "review__avatar",
                      children: [
                        (0, Z.jsx)("div", {
                          className: "avatar",
                          children: (0, Z.jsx)(h.Z, {
                            alt: "\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",
                            src: D.avatarPhoto || "",
                            className: "avatar__img",
                          }),
                        }),
                        (0, Z.jsx)(w, { reviewId: r._id || "" }),
                      ],
                    }),
                    (0, Z.jsxs)("div", {
                      className: "review__content",
                      children: [
                        (0, Z.jsxs)("div", {
                          className: "review__user-name",
                          children: [
                            "".concat(D.firstName, " ").concat(D.secondName),
                            F &&
                              (0, Z.jsx)("div", {
                                className: "review__edit-btn",
                                children: (0, Z.jsx)(p.Z, {
                                  title:
                                    "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",
                                  children: (0, Z.jsx)(o.Z, {
                                    onClick: function () {
                                      return C(!0);
                                    },
                                    children: (0, Z.jsx)(l.Z, {
                                      fontSize: "small",
                                    }),
                                  }),
                                }),
                              }),
                            O &&
                              (0, Z.jsx)("div", {
                                className: "review__delete-btn",
                                children: (0, Z.jsx)(p.Z, {
                                  title:
                                    "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043e\u0442\u0437\u044b\u0432",
                                  children: (0, Z.jsx)(o.Z, {
                                    onClick: function () {
                                      i((0, t.fL)(r._id || ""));
                                      var e = {
                                        _id:
                                          (null === P || void 0 === P
                                            ? void 0
                                            : P._id) || "not found",
                                        price:
                                          (null === P || void 0 === P
                                            ? void 0
                                            : P.price) || 0,
                                        roomNumber:
                                          (null === P || void 0 === P
                                            ? void 0
                                            : P.roomNumber) || "not found",
                                        countReviews:
                                          Number(
                                            null === P || void 0 === P
                                              ? void 0
                                              : P.countReviews
                                          ) - 1,
                                        rate:
                                          Number(
                                            null === P || void 0 === P
                                              ? void 0
                                              : P.rate
                                          ) - r.rating,
                                      };
                                      i((0, c.jX)(e));
                                    },
                                    children: (0, Z.jsx)(a.Z, {
                                      fontSize: "small",
                                    }),
                                  }),
                                }),
                              }),
                            (0, Z.jsx)("div", {
                              className: "review__rating",
                              children: (0, Z.jsx)(b.Z, {
                                value: r.rating,
                                readOnly: !0,
                              }),
                            }),
                          ],
                        }),
                        (0, Z.jsx)("p", {
                          className: "review__date",
                          children:
                            r.created_at !== r.updated_at
                              ? "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d: ".concat(
                                  (0, m.ZP)(
                                    (null === r || void 0 === r
                                      ? void 0
                                      : r.updated_at) || ""
                                  )
                                )
                              : (0, m.ZP)(
                                  (null === r || void 0 === r
                                    ? void 0
                                    : r.created_at) || ""
                                ),
                        }),
                        I
                          ? (0, Z.jsxs)(Z.Fragment, {
                              children: [
                                (0, Z.jsx)(v.N7, {
                                  value: _,
                                  onChange: function (e) {
                                    N(e.target.value);
                                  },
                                  rows: 3,
                                }),
                                (0, Z.jsx)(x.Z, {
                                  variant: "outlined",
                                  size: "small",
                                  style: { marginTop: "5px" },
                                  onClick: function () {
                                    C(!1);
                                    var e = {
                                      _id: r._id,
                                      rating: r.rating,
                                      roomId: r.roomId,
                                      content: r.content,
                                    };
                                    i((0, t.g8)(e));
                                  },
                                  children:
                                    "\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c",
                                }),
                              ],
                            })
                          : (0, Z.jsx)("p", {
                              className: "review__message",
                              children: _,
                            }),
                      ],
                    }),
                  ],
                }),
              })
            : (0, Z.jsx)(j.Z, {});
        },
        y = function (e) {
          var r = e.reviews;
          return (0, Z.jsx)("ul", {
            className: "reviews-list",
            children: r.map(function (e) {
              return (0, Z.jsx)(k, { review: e }, e._id);
            }),
          });
        },
        I = y;
    },
    8702: function (e, r, i) {
      i.d(r, {
        Z: function () {
          return g;
        },
      });
      var n = i(4379),
        s = i(9877),
        a = i(1563),
        l = (i(2791), i(5978)),
        o = i(1523),
        d = i(2238),
        t = i(3720),
        c = i(8489),
        u = i(3738),
        m = i(4777),
        h = i(184),
        x = ["children", "className"],
        v = function (e) {
          var r = e.children,
            i = e.className,
            n = (0, u.Z)(e, x);
          return (0, h.jsx)(
            m.Z,
            (0, c.Z)((0, c.Z)({ className: i }, n), {}, { children: r })
          );
        },
        j = i(1993),
        b = i(4529),
        p = i(2016),
        f = {
          hasWifi: (0, h.jsx)(a.Z, {}),
          hasConditioner: (0, h.jsx)(n.Z, {}),
          hasWorkSpace: (0, h.jsx)(s.Z, {}),
        },
        g = function (e) {
          var r = e._id,
            i = e.roomNumber,
            n = e.price,
            s = e.type,
            a = e.images,
            c = e.comforts,
            u = (0, l.v9)((0, d.xT)(r)),
            m = u ? u.length : 0,
            x =
              m > 0
                ? u.reduce(function (e, r) {
                    return e + r.rating;
                  }, 0)
                : 0;
          return (0, h.jsxs)("div", {
            className: "room-card",
            children: [
              c &&
                (0, h.jsx)(v, {
                  className: "badge",
                  children: c.map(function (e) {
                    return (0, h.jsx)("div", { children: f[e] }, e);
                  }),
                }),
              (0, h.jsx)(b.Z, {
                className: "room-card__gallery",
                children:
                  a &&
                  a.map(function (e) {
                    return (0,
                    h.jsx)("div", { className: "room-card__gallery-item", children: (0, h.jsx)("img", { className: "room-card__gallery-item--img", src: e, alt: "roomsPhoto" }) }, e);
                  }),
              }),
              (0, h.jsxs)(o.rU, {
                to: "/rooms/".concat(r),
                className: "room-card__description",
                children: [
                  (0, h.jsxs)("div", {
                    className: "room-card__description-row",
                    children: [
                      (0, h.jsxs)("h3", {
                        className: "room-card__title",
                        children: [
                          "\u2116 ",
                          (0, h.jsx)("span", {
                            className: "room-card__title--big",
                            children: i,
                          }),
                          "\u041b\u044e\u043a\u0441" === s &&
                            (0, h.jsx)("span", {
                              className: "room-card__type",
                              children: s,
                            }),
                        ],
                      }),
                      (0, h.jsxs)("div", {
                        className: "room-card__rentPerDay",
                        children: [
                          (0, h.jsxs)("span", { children: [n, "\u20bd"] }),
                          " \u0432 \u0441\u0443\u0442\u043a\u0438",
                        ],
                      }),
                    ],
                  }),
                  (0, h.jsx)(j.Z, {}),
                  (0, h.jsxs)("div", {
                    className: "room-card__description-row",
                    children: [
                      (0, h.jsx)("div", {
                        className: "room-card__rating",
                        children: (0, h.jsx)(p.Z, {
                          name: "read-only",
                          value: x,
                          totalCount: m,
                          readOnly: !0,
                        }),
                      }),
                      (0, h.jsx)("div", {
                        className: "room-card__reviews",
                        children: (0, h.jsx)("span", {
                          className: "room-card__reviews-count",
                          children: ""
                            .concat(m, " ")
                            .concat(
                              (0, t.Z)(m, [
                                "\u041e\u0442\u0437\u044b\u0432",
                                "\u041e\u0442\u0437\u044b\u0432\u0430",
                                "\u041e\u0442\u0437\u044b\u0432\u043e\u0432",
                              ])
                            ),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
    },
    3445: function (e, r, i) {
      var n = i(8489),
        s = i(2791),
        a = i(8702),
        l = i(184),
        o = function (e) {
          var r = e.rooms;
          return (0, l.jsx)("ul", {
            className: "rooms__list",
            children: r.map(function (e) {
              return (0,
              l.jsx)("li", { className: "rooms__list-item", children: (0, l.jsx)(a.Z, (0, n.Z)({}, e)) }, e._id);
            }),
          });
        };
      r.Z = s.memo(o);
    },
    4574: function (e, r, i) {
      i.r(r),
        i.d(r, {
          default: function () {
            return Fe;
          },
        });
      var n = i(2791),
        s = i(5978),
        a = i(9271),
        l = i(1276),
        o = i(2258),
        d = i(5694),
        t = i(4547),
        c = i(3055),
        u = i(9952),
        m = i(3437),
        h = i(91),
        x = i(7488),
        v = i(7122),
        j = i(1444),
        b = i(6933),
        p = i(4387),
        f = i(1523),
        g = i(184),
        _ = function () {
          var e = (0, s.v9)((0, c.Ts)());
          return (0, g.jsxs)(b.Z, {
            className: "sidebar",
            children: [
              (0, g.jsxs)(p.Z, {
                component: f.OL,
                className: "sidebar-menu__item",
                to: "/profile/".concat(
                  null === e || void 0 === e ? void 0 : e._id
                ),
                exact: !0,
                children: [
                  (0, g.jsx)(u.Z, {}),
                  "\u041c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c",
                ],
              }),
              "admin" === (null === e || void 0 === e ? void 0 : e.role) &&
                (0, g.jsxs)(p.Z, {
                  component: f.OL,
                  className: "sidebar-menu__item",
                  to: "/profile/".concat(
                    null === e || void 0 === e ? void 0 : e._id,
                    "/dashboard"
                  ),
                  exact: !0,
                  children: [
                    (0, g.jsx)(m.Z, {}),
                    "\u041f\u0430\u043d\u0435\u043b\u044c \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430",
                  ],
                }),
              (0, g.jsxs)(p.Z, {
                component: f.OL,
                className: "sidebar-menu__item",
                to: "/profile/".concat(
                  null === e || void 0 === e ? void 0 : e._id,
                  "/booking"
                ),
                exact: !0,
                children: [
                  (0, g.jsx)(j.Z, {}),
                  "\u041c\u043e\u0438 \u0411\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",
                ],
              }),
              (0, g.jsxs)(p.Z, {
                component: f.OL,
                className: "sidebar-menu__item",
                to: "/profile/".concat(
                  null === e || void 0 === e ? void 0 : e._id,
                  "/likes"
                ),
                exact: !0,
                children: [
                  (0, g.jsx)(x.Z, {}),
                  "\u041f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c",
                ],
              }),
              (0, g.jsxs)(p.Z, {
                component: f.OL,
                className: "sidebar-menu__item",
                to: "/profile/".concat(
                  null === e || void 0 === e ? void 0 : e._id,
                  "/favorites"
                ),
                exact: !0,
                children: [
                  (0, g.jsx)(h.Z, {}),
                  "\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",
                ],
              }),
              (0, g.jsxs)(p.Z, {
                className: "sidebar-menu__item",
                component: f.OL,
                to: "/profile/".concat(
                  null === e || void 0 === e ? void 0 : e._id,
                  "/edit"
                ),
                children: [
                  (0, g.jsx)(v.Z, {}),
                  "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",
                ],
              }),
            ],
          });
        },
        Z = i(703),
        N = i(3418),
        w = i(3694),
        k = i(9725),
        y = i(6890),
        I = i(5855),
        C = i(3994),
        P = i(720);
      var D = function (e) {
          var r = e.headCells,
            i = e.sortBy,
            n = e.onRequestSort;
          return (0, g.jsx)(y.Z, {
            children: (0, g.jsxs)(I.Z, {
              children: [
                r.map(function (e) {
                  return (0, g.jsxs)(
                    C.Z,
                    {
                      align:
                        null !== e && void 0 !== e && e.numeric
                          ? "right"
                          : "left",
                      padding:
                        null !== e && void 0 !== e && e.disablePadding
                          ? "none"
                          : "normal",
                      sortDirection: !(!i || i.path !== e.id) && i.order,
                      children: [
                        i &&
                          (0, g.jsxs)(P.Z, {
                            active: i.path === e.id,
                            direction: i.path === e.id ? i.order : "asc",
                            onClick:
                              ((r = e.id),
                              function (e) {
                                n && n(e, r);
                              }),
                            children: [
                              e.label,
                              i.path === e.id
                                ? (0, g.jsx)("span", {
                                    className: "visually-hidden",
                                    children:
                                      "desc" === i.order
                                        ? "sorted descending"
                                        : "sorted ascending",
                                  })
                                : null,
                            ],
                          }),
                        !i && e.label,
                      ],
                    },
                    String(e.id)
                  );
                  var r;
                }),
                (0, g.jsx)(C.Z, {}),
              ],
            }),
          });
        },
        S = D,
        z = i(3382),
        F = function (e) {
          var r = e.itemsCount,
            i = e.page,
            n = e.rowsPerPage,
            s = e.children,
            a =
              Number(i) > 0
                ? Math.max(0, (1 + Number(i)) * Number(n) - Number(r))
                : 0;
          return (0, g.jsxs)(z.Z, {
            children: [
              s,
              a > 0 &&
                (0, g.jsx)(I.Z, {
                  sx: { height: 68 * a },
                  children: (0, g.jsx)(C.Z, { colSpan: 6 }),
                }),
            ],
          });
        },
        O = i(4663),
        T = i(9281),
        R = i(9836),
        E = function (e) {
          var r = e.children,
            i = e.title;
          return (0, g.jsxs)(g.Fragment, {
            children: [
              i &&
                (0, g.jsx)(O.Z, {
                  children: (0, g.jsx)("h2", {
                    style: { flex: "1 1 100%" },
                    children: i,
                  }),
                }),
              (0, g.jsx)(T.Z, {
                children: (0, g.jsx)(R.Z, {
                  sx: { minWidth: 750 },
                  "aria-labelledby": "tableTitle",
                  size: "medium",
                  children: r,
                }),
              }),
            ],
          });
        },
        W = i(3430),
        q = i(1286),
        A = i(5172),
        B = i(5678),
        L = i(3400),
        U = i(6125),
        K = i(5016),
        Y = i(8489),
        G = i(3738),
        M = i(1918),
        J = ["label", "color"],
        X = function (e) {
          var r = e.label,
            i = e.color,
            n = (0, G.Z)(e, J);
          return (0, g.jsx)(
            M.Z,
            (0, Y.Z)({ label: r, color: i || "primary" }, n)
          );
        },
        H = i(8893),
        Q = i(9157),
        V = i(795),
        $ = i(3391),
        ee = function (e) {
          var r = e.open,
            i = e.onClose,
            n = e.roomId,
            a = (0, s.v9)((0, k.wW)(n));
          return (0, g.jsx)(V.Z, {
            title:
              "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",
            open: r,
            onClose: i,
            children: (0, g.jsxs)(Q.Z, {
              children: [
                (0, g.jsxs)("h2", {
                  children: [
                    "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u043e\u043c\u0435\u0440 ",
                    null === a || void 0 === a ? void 0 : a.roomNumber,
                  ],
                }),
                (0, g.jsx)($.ZN, { roomData: a, onCloseModal: i }),
              ],
            }),
          });
        },
        re = n.memo(ee),
        ie = i(6711),
        ne = i(6728),
        se = i(945),
        ae = i(818),
        le = function (e) {
          var r = e.row,
            i = (0, s.I0)();
          return (0, g.jsxs)(I.Z, {
            children: [
              (0, g.jsx)(C.Z, {
                component: "th",
                scope: "row",
                children: r._id,
              }),
              (0, g.jsx)(C.Z, {
                component: "th",
                scope: "row",
                children: (0, ne.uK)(r.arrivalDate),
              }),
              (0, g.jsx)(C.Z, { children: (0, ne.uK)(r.departureDate) }),
              (0, g.jsx)(C.Z, {
                children: (0, ae.E)(r.adults, r.children, r.babies),
              }),
              (0, g.jsxs)(C.Z, {
                align: "right",
                children: [r.totalPrice, "\u20bd"],
              }),
              (0, g.jsx)(C.Z, {
                children: (0, g.jsxs)("div", {
                  className: "booking-row__btns",
                  children: [
                    (0, g.jsx)(H.Z, {
                      title:
                        "\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",
                      disableInteractive: !0,
                      children: (0, g.jsx)(L.Z, {
                        "aria-label": "expand row",
                        size: "small",
                        color: "primary",
                        onClick: function () {
                          return (
                            (e = r.userId || "not found"),
                            void se.Z.push("/profile/".concat(e))
                          );
                          var e;
                        },
                        children: (0, g.jsx)(u.Z, {}),
                      }),
                    }),
                    (0, g.jsx)(H.Z, {
                      title:
                        "\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",
                      disableInteractive: !0,
                      children: (0, g.jsx)(L.Z, {
                        "aria-label": "expand row",
                        size: "small",
                        color: "error",
                        onClick: function () {
                          i((0, K.pv)(r._id)),
                            i(
                              (0, k.Im)({ roomId: r.roomId, _id: r._id || "" })
                            );
                        },
                        children: (0, g.jsx)(ie.Z, {}),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        oe = function (e) {
          var r = e.bookings,
            i = e.roomNumber;
          return (0, g.jsxs)(g.Fragment, {
            children: [
              (0, g.jsx)("h3", {
                style: { margin: 10 },
                children:
                  "\u0421\u043f\u0438\u0441\u043e\u043a \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440\u0430 \u2116".concat(
                    i
                  ),
              }),
              (0, g.jsxs)(E, {
                size: "small",
                "aria-label": "purchases",
                children: [
                  (0, g.jsx)(S, {
                    headCells: [
                      { id: "bookingId", label: "ID" },
                      {
                        id: "arrivalDate",
                        label:
                          "\u0414\u0430\u0442\u0430 \u0437\u0430\u0435\u0437\u0434\u0430",
                      },
                      {
                        id: "departureDate",
                        label:
                          "\u0414\u0430\u0442\u0430 \u0432\u044b\u0435\u0437\u0434\u0430",
                      },
                      {
                        id: "guests",
                        label:
                          "\u041a\u043e\u043b-\u0432\u043e \u0433\u043e\u0441\u0442\u0435\u0439",
                      },
                      {
                        id: "totalPrice",
                        label: "\u0426\u0435\u043d\u0430",
                        numeric: !0,
                      },
                    ],
                  }),
                  (0, g.jsx)(F, {
                    children: r.map(function (e) {
                      return (0, g.jsx)(le, { row: e }, e._id);
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        de = function (e) {
          var r = e.row,
            i = (0, n.useState)(!1),
            a = (0, W.Z)(i, 2),
            l = a[0],
            o = a[1],
            d = (0, n.useState)(!1),
            t = (0, W.Z)(d, 2),
            c = t[0],
            u = t[1],
            m = (0, s.v9)((0, K.ml)(r._id));
          return (
            (0, n.useEffect)(
              function () {
                0 === m.length && o(!1);
              },
              [m]
            ),
            (0, g.jsxs)(g.Fragment, {
              children: [
                (0, g.jsxs)(I.Z, {
                  sx: { "& > *": { borderBottom: "unset" } },
                  children: [
                    (0, g.jsx)(C.Z, {
                      component: "th",
                      scope: "row",
                      children: (0, g.jsx)(f.rU, {
                        to: "/rooms/".concat(r._id),
                        children: r.roomNumber,
                      }),
                    }),
                    (0, g.jsx)(C.Z, { children: r.type }),
                    (0, g.jsx)(C.Z, { align: "right", children: r.rate }),
                    (0, g.jsxs)(C.Z, {
                      align: "right",
                      children: [r.price, "\u20bd"],
                    }),
                    (0, g.jsx)(C.Z, {
                      align: "right",
                      children:
                        m.length > 0
                          ? (0, g.jsx)(g.Fragment, {
                              children: (0, g.jsx)(X, {
                                label:
                                  "\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d",
                                color: "error",
                                onMouseDown: function (e) {
                                  e.stopPropagation();
                                },
                                onDelete: function () {
                                  return o(!l);
                                },
                                deleteIcon: (0, g.jsx)(H.Z, {
                                  title:
                                    "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                                  disableInteractive: !0,
                                  children: (0, g.jsx)(L.Z, {
                                    "aria-label": "expand row",
                                    size: "small",
                                    children: l
                                      ? (0, g.jsx)(B.Z, {})
                                      : (0, g.jsx)(A.Z, {}),
                                  }),
                                }),
                              }),
                            })
                          : (0, g.jsx)(X, {
                              label:
                                "\u0421\u0432\u043e\u0431\u043e\u0434\u0435\u043d",
                              color: "success",
                            }),
                    }),
                    (0, g.jsx)(C.Z, {
                      align: "right",
                      children: (0, g.jsx)(H.Z, {
                        title:
                          "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u043e\u043c\u0435\u0440",
                        disableInteractive: !0,
                        children: (0, g.jsx)(L.Z, {
                          "aria-label": "expand row",
                          size: "small",
                          color: "primary",
                          onClick: function () {
                            return u(!0);
                          },
                          children: (0, g.jsx)(q.Z, {}),
                        }),
                      }),
                    }),
                  ],
                }),
                (0, g.jsx)(I.Z, {
                  children: (0, g.jsx)(C.Z, {
                    style: { padding: 0 },
                    colSpan: 6,
                    children: (0, g.jsx)(U.Z, {
                      in: l,
                      timeout: "auto",
                      unmountOnExit: !0,
                      children: (0, g.jsx)(oe, {
                        bookings: m,
                        roomNumber: r.roomNumber,
                      }),
                    }),
                  }),
                }),
                c &&
                  (0, g.jsx)(re, {
                    open: c,
                    onClose: function () {
                      return u(!1);
                    },
                    roomId: r._id,
                  }),
              ],
            })
          );
        },
        te = [
          {
            id: "roomNumber",
            numeric: !1,
            disablePadding: !1,
            label: "\u2116 \u041d\u043e\u043c\u0435\u0440\u0430",
          },
          {
            id: "type",
            numeric: !1,
            disablePadding: !1,
            label: "\u0422\u0438\u043f",
          },
          {
            id: "rate",
            numeric: !0,
            disablePadding: !1,
            label: "\u0420\u0435\u0439\u0442\u0438\u043d\u0433",
          },
          {
            id: "price",
            numeric: !0,
            disablePadding: !1,
            label:
              "\u0410\u0440\u0435\u043d\u0434\u0430 \u0432 \u0441\u0443\u0442\u043a\u0438",
          },
          {
            id: "bookings",
            numeric: !0,
            disablePadding: !1,
            label: "\u0421\u0442\u0430\u0442\u0443\u0441",
          },
        ],
        ce = function () {
          var e = (0, s.v9)((0, k.A4)()),
            r = (0, s.v9)((0, k.oC)()),
            i = (0, w.ZO)(e || [], { path: "bookings", order: "desc" }),
            n = i.sortedItems,
            a = i.sortBy,
            l = i.handleRequestSort,
            o = (0, w.h0)(n, 5),
            d = o.itemsListCrop,
            t = o.currentPage,
            c = o.pageSize,
            u = o.handleChangePage,
            m = o.handleChangePageSize;
          return (0, g.jsx)(g.Fragment, {
            children:
              !r &&
              (0, g.jsxs)(g.Fragment, {
                children: [
                  (0, g.jsxs)(E, {
                    title:
                      "\u0421\u043f\u0438\u0441\u043e\u043a \u043d\u043e\u043c\u0435\u0440\u043e\u0432",
                    children: [
                      (0, g.jsx)(S, {
                        headCells: te,
                        sortBy: a,
                        onRequestSort: l,
                      }),
                      (0, g.jsx)(F, {
                        itemsCount: n.length,
                        page: t - 1,
                        rowsPerPage: c,
                        children: d.map(function (e) {
                          return (0, g.jsx)(de, { row: e }, e._id);
                        }),
                      }),
                    ],
                  }),
                  (0, g.jsx)(N.Z, {
                    rowsPerPageOptions: [5, 10, 25],
                    component: "div",
                    count: e.length,
                    rowsPerPage: c,
                    page: t - 1,
                    onPageChange: function (e, r) {
                      return u(e, r + 1);
                    },
                    onRowsPerPageChange: m,
                    labelRowsPerPage:
                      "\u041d\u043e\u043c\u0435\u0440\u043e\u0432 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435",
                  }),
                ],
              }),
          });
        },
        ue = function () {
          return (0, g.jsx)("div", {
            style: { width: "100%" },
            children: (0, g.jsx)(Z.Z, {
              sx: { width: "100%", mb: 2 },
              children: (0, g.jsx)(ce, {}),
            }),
          });
        },
        me = i(5110),
        he = i(8702),
        xe = function (e) {
          var r = e._id,
            i = e.arrivalDate,
            n = e.departureDate,
            a = e.adults,
            l = e.children,
            o = e.babies,
            d = e.totalPrice,
            t = e.roomId,
            c = (0, s.I0)(),
            u = (0, s.v9)((0, k.wW)(t));
          return (0, g.jsx)(Z.Z, {
            className: "booking-card",
            children: (0, g.jsxs)("div", {
              className: "booking-card__wrapper",
              children: [
                (0, g.jsxs)("div", {
                  className: "booking-content",
                  children: [
                    (0, g.jsxs)("h2", {
                      children: [
                        "\u2116 ",
                        (0, g.jsx)("span", { children: r }),
                      ],
                    }),
                    (0, g.jsx)("h3", {
                      className: "booking-info__title",
                      children:
                        "\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438",
                    }),
                    (0, g.jsx)("table", {
                      className: "booking-info",
                      children: (0, g.jsxs)("tbody", {
                        className: "booking-info__body",
                        children: [
                          (0, g.jsxs)("tr", {
                            className: "booking-info__item",
                            children: [
                              (0, g.jsx)("td", {
                                children:
                                  "\u0414\u0430\u0442\u0430 \u043f\u0440\u0438\u0431\u044b\u0442\u0438\u044f:",
                              }),
                              (0, g.jsx)("td", {
                                children: (0, g.jsx)("span", {
                                  children: "".concat((0, ne.uK)(i)),
                                }),
                              }),
                            ],
                          }),
                          (0, g.jsxs)("tr", {
                            className: "booking-info__item",
                            children: [
                              (0, g.jsx)("td", {
                                children:
                                  "\u0414\u0430\u0442\u0430 \u0432\u044b\u0435\u0437\u0434\u0430:",
                              }),
                              (0, g.jsx)("td", {
                                children: (0, g.jsx)("span", {
                                  children: "".concat((0, ne.uK)(n)),
                                }),
                              }),
                            ],
                          }),
                          (0, g.jsxs)("tr", {
                            className: "booking-info__item",
                            children: [
                              (0, g.jsx)("td", {
                                children:
                                  "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0433\u043e\u0441\u0442\u0435\u0439:",
                              }),
                              (0, g.jsx)("td", {
                                children: (0, g.jsx)("span", {
                                  children: (0, ae.E)(a, l, o),
                                }),
                              }),
                            ],
                          }),
                          (0, g.jsxs)("tr", {
                            className: "booking-info__item",
                            children: [
                              (0, g.jsx)("td", {
                                children:
                                  "\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f:",
                              }),
                              (0, g.jsx)("td", {
                                children: (0, g.jsxs)("span", {
                                  children: ["".concat(d), "\u20bd"],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, g.jsxs)("div", {
                  className: "booking-card__btns",
                  children: [
                    (0, g.jsx)("div", {
                      style: { width: "100%" },
                      children: (0, g.jsx)(he.Z, {
                        _id:
                          (null === u || void 0 === u ? void 0 : u._id) ||
                          "id not found",
                        roomNumber:
                          (null === u || void 0 === u
                            ? void 0
                            : u.roomNumber) || "not found",
                        price:
                          (null === u || void 0 === u ? void 0 : u.price) || 0,
                        type: null === u || void 0 === u ? void 0 : u.type,
                        images: null === u || void 0 === u ? void 0 : u.images,
                        comforts:
                          null === u || void 0 === u ? void 0 : u.comforts,
                      }),
                    }),
                    (0, g.jsx)(f.rU, {
                      to: "/rooms/".concat(t),
                      children: (0, g.jsx)(me.Z, {
                        size: "small",
                        fullWidth: !0,
                        children:
                          "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043d\u043e\u043c\u0435\u0440\u0430",
                      }),
                    }),
                    (0, g.jsx)(me.Z, {
                      size: "small",
                      variant: "outlined",
                      color: "error",
                      onClick: function () {
                        c((0, K.pv)(r)),
                          c((0, k.Im)({ roomId: t, _id: r || "" }));
                      },
                      children:
                        "\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        ve = function () {
          var e = (0, s.v9)((0, c.rc)()),
            r = (0, s.v9)((0, K.C_)(e || "not found"));
          return (0, g.jsxs)("div", {
            style: { width: "100%" },
            children: [
              (0, g.jsx)("h1", {
                style: { marginBottom: "20px" },
                children:
                  "\u041c\u043e\u0438 \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",
              }),
              (0, g.jsxs)("div", {
                className: "booking-list",
                style: { width: "100%" },
                children: [
                  r.map(function (e) {
                    return (0, g.jsx)(xe, (0, Y.Z)({}, e), e._id);
                  }),
                  0 === r.length &&
                    (0, g.jsx)("h3", {
                      children:
                        "\u0421\u043f\u0438\u0441\u043e\u043a \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0439 \u043f\u0443\u0441\u0442",
                    }),
                ],
              }),
            ],
          });
        },
        je = i(8550),
        be = i(135),
        pe = {
          firstName: {
            isRequired: {
              message:
                '\u041f\u043e\u043b\u0435 "\u0418\u043c\u044f" \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f',
            },
          },
          secondName: {
            isRequired: {
              message:
                '\u041f\u043e\u043b\u0435 "\u0424\u0430\u043c\u0438\u043b\u0438\u044f" \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f',
            },
          },
          email: {
            isRequired: {
              message:
                "\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u0430 \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f",
            },
            isEmail: {
              message:
                '\u041f\u043e\u043b\u0435 "Email" \u0432\u0432\u0435\u0434\u0435\u043d\u043e \u043d\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e',
            },
          },
          password: {
            isRequired: {
              message:
                '\u041f\u043e\u043b\u0435 "\u041f\u0430\u0440\u043e\u043b\u044c" \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f',
            },
            isCapitalSymbol: {
              message:
                "\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0445\u043e\u0442\u044f \u0431\u044b 1 \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0431\u0443\u043a\u0432\u0443",
            },
            isContainDigit: {
              message:
                "\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0445\u043e\u0442\u044f \u0431\u044b 1 \u0446\u0438\u0444\u0440\u0443",
            },
            min: {
              value: 8,
              message:
                "\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",
            },
          },
        },
        fe = [
          { id: "male", title: "\u041c\u0443\u0436\u0447\u0438\u043d\u0430" },
          { id: "female", title: "\u0416\u0435\u043d\u0449\u0438\u043d\u0430" },
        ],
        ge = function () {
          var e = (0, s.v9)((0, c.Ts)()),
            r = {
              firstName:
                (null === e || void 0 === e ? void 0 : e.firstName) || "",
              secondName:
                (null === e || void 0 === e ? void 0 : e.secondName) || "",
              gender:
                (null === e || void 0 === e ? void 0 : e.gender) || "male",
              birthYear:
                (null === e || void 0 === e ? void 0 : e.birthYear) ||
                Date.now(),
              role: (null === e || void 0 === e ? void 0 : e.role) || "user",
            },
            i = (0, w.cI)(r, !0, pe),
            n = i.data,
            a = i.errors,
            l = i.handleInputChange,
            o = i.handleKeyDown,
            d = i.validate,
            t = (0, s.I0)();
          return (0, g.jsx)(g.Fragment, {
            children: (0, g.jsxs)(w.l0, {
              data: n,
              errors: a,
              handleChange: l,
              handleKeyDown: o,
              children: [
                (0, g.jsx)(be.UP, {
                  autoFocus: !0,
                  name: "firstName",
                  label: "\u0418\u043c\u044f",
                }),
                (0, g.jsx)(be.UP, {
                  name: "secondName",
                  label: "\u0424\u0430\u043c\u0438\u043b\u0438\u044f",
                }),
                (0, g.jsx)(be.Ee, { name: "gender", items: fe }),
                (0, g.jsx)(be.bJ, {
                  onChange: l,
                  value: n.birthYear,
                  openTo: "year",
                  mask: "__.__.____",
                  label:
                    "\u0414\u0430\u0442\u0430 \u0420\u043e\u0436\u0434\u0435\u043d\u0438\u044f",
                  name: "birthYear",
                  minDate: new Date("1950-01-01"),
                  renderInput: function (e) {
                    return (0, g.jsx)(
                      je.Z,
                      (0, Y.Z)(
                        (0, Y.Z)({}, e),
                        (null === a || void 0 === a ? void 0 : a.birthYear) && {
                          error: !0,
                          helperText:
                            null === a || void 0 === a ? void 0 : a.birthYear,
                        }
                      )
                    );
                  },
                }),
                (0, g.jsx)(me.Z, {
                  type: "submit",
                  onClick: function (e) {
                    e.preventDefault(), d(n) && t((0, c.Al)(n));
                  },
                  fullWidth: !0,
                  disabled: 0 !== Object.keys(a).length,
                  children: "\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c",
                }),
              ],
            }),
          });
        },
        _e = function () {
          return (0, g.jsx)("main", {
            className: "profile-edit",
            children: (0, g.jsxs)(Z.Z, {
              elevation: 3,
              className: "form-card profileEdit-form",
              children: [
                (0, g.jsx)("h2", {
                  children:
                    "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",
                }),
                (0, g.jsx)(ge, {}),
              ],
            }),
          });
        },
        Ze = i(9677),
        Ne = i(3445),
        we = function () {
          var e = JSON.parse(Ze.ZP.getFavoritesRoom() || "{}"),
            r = (0, s.v9)((0, k.q2)(e));
          return (0, g.jsxs)("div", {
            style: { width: "100%" },
            children: [
              (0, g.jsx)("h1", {
                style: { marginBottom: "20px" },
                children:
                  "\u041c\u043e\u0438 \u043b\u044e\u0431\u0438\u043c\u044b\u0435 \u043d\u043e\u043c\u0435\u0440\u0430",
              }),
              r.length > 0
                ? (0, g.jsx)(Ne.Z, { rooms: r })
                : (0, g.jsx)("h3", {
                    children:
                      "\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0443\u0441\u0442",
                  }),
            ],
          });
        },
        ke = i(7412),
        ye = i(2238),
        Ie = i(1801),
        Ce = function () {
          var e = (0, s.v9)((0, c.rc)()),
            r = (0, s.v9)((0, ke.bp)(e || "not found")).map(function (e) {
              return e.reviewId;
            }),
            i = (0, s.v9)((0, ye.X4)(r));
          return (0, g.jsxs)("div", {
            style: { display: "flex", flexDirection: "column" },
            children: [
              (0, g.jsx)("h1", {
                style: { marginBottom: "20px" },
                children:
                  "\u0412\u0430\u043c \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u0438\u0441\u044c \u043e\u0442\u0437\u044b\u0432\u044b:",
              }),
              i.length > 0
                ? (0, g.jsx)(Ie.Z, { reviews: i })
                : (0, g.jsx)("h3", {
                    children:
                      "\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0443\u0441\u0442",
                  }),
            ],
          });
        },
        Pe = i(3986),
        De = function (e) {
          var r = e.userId,
            i = (0, s.v9)((0, c.GA)(r)),
            n = (0, w.gf)(),
            a = n.error,
            l = n.initialize,
            o = n.progress,
            d = n.status,
            t =
              "admin" === (null === i || void 0 === i ? void 0 : i.role) &&
              Pe.F;
          return i
            ? (0, g.jsxs)("main", {
                className: "main-profile__page",
                children: [
                  (0, g.jsx)("h1", {
                    className: "visually-hidden",
                    children:
                      "\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043e\u0442\u0435\u043b\u044f Nuzie",
                  }),
                  (0, g.jsxs)("h2", {
                    children: [
                      "\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ",
                      ""
                        .concat(
                          null === i || void 0 === i ? void 0 : i.firstName,
                          " "
                        )
                        .concat(
                          null === i || void 0 === i ? void 0 : i.secondName
                        ),
                    ],
                  }),
                  (0, g.jsxs)("div", {
                    className: "user-card",
                    children: [
                      (0, g.jsx)("div", {
                        children: (0, g.jsx)("img", {
                          className: "user-card__avatarPhoto",
                          src:
                            null === i || void 0 === i ? void 0 : i.avatarPhoto,
                          alt: "avatarPhoto",
                        }),
                      }),
                      (0, g.jsxs)(Z.Z, {
                        className: "user-card__content",
                        children: [
                          (0, g.jsxs)("p", {
                            children: [
                              "\u0418\u043c\u044f: ",
                              null === i || void 0 === i ? void 0 : i.firstName,
                            ],
                          }),
                          (0, g.jsxs)("p", {
                            children: [
                              "\u0424\u0430\u043c\u0438\u043b\u0438\u044f: ",
                              null === i || void 0 === i
                                ? void 0
                                : i.secondName,
                            ],
                          }),
                          (0, g.jsxs)("p", {
                            children: [
                              "\u041f\u043e\u043b: ",
                              "male" ===
                              (null === i || void 0 === i ? void 0 : i.gender)
                                ? "\u041c\u0443\u0436\u0441\u043a\u043e\u0439"
                                : "\u0416\u0435\u043d\u0441\u043a\u0438\u0439",
                            ],
                          }),
                          (0, g.jsxs)("p", {
                            children: [
                              "\u0421\u0442\u0430\u0442\u0443\u0441: ",
                              "admin" ===
                              (null === i || void 0 === i ? void 0 : i.role)
                                ? "\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440"
                                : "\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c",
                            ],
                          }),
                          (0, g.jsxs)("p", {
                            children: [
                              "\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f: ",
                              (0, ne.uK)(
                                (null === i || void 0 === i
                                  ? void 0
                                  : i.birthYear) || Date.now()
                              ),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  t &&
                    (0, g.jsxs)(g.Fragment, {
                      children: [
                        (0, g.jsx)("h3", {
                          children:
                            "\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 FireBase",
                        }),
                        (0, g.jsxs)("ul", {
                          children: [
                            (0, g.jsxs)("li", { children: ["Status: ", d] }),
                            (0, g.jsxs)("li", {
                              children: ["Progress: ", o, "%"],
                            }),
                            a &&
                              (0, g.jsxs)("li", { children: ["error: ", a] }),
                          ],
                        }),
                        (0, g.jsx)("button", {
                          className: "btn btn-primary",
                          onClick: function () {
                            l();
                          },
                          children:
                            "\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c",
                        }),
                      ],
                    }),
                ],
              })
            : (0, g.jsxs)("main", {
                className: "main-profile__page",
                children: [
                  (0, g.jsx)("h1", {
                    className: "visually-hidden",
                    children:
                      "\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043e\u0442\u0435\u043b\u044f Nuzie",
                  }),
                  (0, g.jsx)("h2", {
                    children:
                      "\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430",
                  }),
                ],
              });
        },
        Se = function (e) {
          var r = e.userId,
            i = e.route,
            n = (0, s.v9)((0, c.Ts)()),
            l = {
              booking: (0, g.jsx)(ve, {}),
              likes: (0, g.jsx)(Ce, {}),
              favorites: (0, g.jsx)(we, {}),
              edit:
                (null === n || void 0 === n ? void 0 : n._id) === r
                  ? (0, g.jsx)(_e, {})
                  : (0, g.jsx)(a.l_, {
                      to: "/profile/".concat(
                        null === n || void 0 === n ? void 0 : n._id
                      ),
                    }),
              dashboard:
                "admin" === (null === n || void 0 === n ? void 0 : n.role)
                  ? (0, g.jsx)(ue, {})
                  : (0, g.jsx)(a.l_, {
                      to: "/profile/".concat(
                        null === n || void 0 === n ? void 0 : n._id
                      ),
                    }),
            },
            o = function () {
              return l[i] || (0, g.jsx)(De, { userId: r });
            };
          return (0, g.jsx)(g.Fragment, { children: (0, g.jsx)(o, {}) });
        },
        ze = function () {
          var e = (0, a.UO)(),
            r = e.userId,
            i = e.route,
            n = (0, s.v9)((0, c.Ts)());
          return (0, g.jsxs)("div", {
            className: "profile-page",
            children: [
              (null === n || void 0 === n ? void 0 : n._id) === r &&
                (0, g.jsx)("aside", {
                  className: "profile-sidebar",
                  children: (0, g.jsx)(_, {}),
                }),
              (0, g.jsx)(Se, { userId: r, route: i }),
            ],
          });
        },
        Fe = function () {
          var e = (0, a.UO)().userId,
            r = (0, s.v9)((0, c.rc)());
          return (0, g.jsxs)(g.Fragment, {
            children: [
              (0, g.jsx)(t.Z, {}),
              (0, g.jsxs)(o.Z, {
                children: [
                  (0, g.jsx)(l.Z, {}),
                  e
                    ? (0, g.jsx)(ze, {})
                    : (0, g.jsx)(a.l_, { to: "profile/".concat(r) }),
                ],
              }),
              (0, g.jsx)(d.Z, {}),
            ],
          });
        };
    },
  },
]);
//# sourceMappingURL=574.c4c75bf2.chunk.js.map
