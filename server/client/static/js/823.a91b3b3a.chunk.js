"use strict";
(self.webpackChunkreact_hotel_booking =
  self.webpackChunkreact_hotel_booking || []).push([
  [823],
  {
    1276: function (e, a, s) {
      s.d(a, {
        Z: function () {
          return v;
        },
      });
      var r = s(8489),
        n = s(3060),
        i = s(3517),
        t = (s(2791), s(5978)),
        l = s(3944),
        o = s(1523),
        c = s(9271),
        d = s(9725),
        m = s(3055),
        u = s(184),
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
              var a = (0, t.v9)((0, d.wW)(e.match.params.roomId));
              return (0, u.jsxs)("span", {
                children: [
                  "\u041d\u043e\u043c\u0435\u0440 \u2116",
                  null === a || void 0 === a ? void 0 : a.roomNumber,
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
              var a = (0, t.v9)((0, m.GA)(e.match.params.userId));
              return a
                ? (0, u.jsx)("span", {
                    children: ""
                      .concat(
                        null === a || void 0 === a ? void 0 : a.firstName,
                        " "
                      )
                      .concat(
                        null === a || void 0 === a ? void 0 : a.secondName
                      ),
                  })
                : (0, u.jsx)("span", {
                    children:
                      "\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d",
                  });
            },
          },
          {
            path: "/profile/:userId?/:route?",
            breadcrumb: function (e) {
              var a;
              switch (e.match.params.route) {
                case "booking":
                  a =
                    "\u041c\u043e\u0438 \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f";
                  break;
                case "dashboard":
                  a =
                    "\u041f\u0430\u043d\u0435\u043b\u044c \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430";
                  break;
                case "likes":
                  a =
                    "\u041f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c";
                  break;
                case "favorites":
                  a = "\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435";
                  break;
                case "edit":
                  a =
                    "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c";
                  break;
                default:
                  a = "";
              }
              return (0, u.jsx)("span", { children: a });
            },
          },
        ],
        x = function (e) {
          return (0, u.jsx)(
            n.Z,
            (0, r.Z)(
              (0, r.Z)({}, e),
              {},
              {
                className: "breadcrumbs-item",
                underline: "hover",
                component: o.rU,
              }
            )
          );
        },
        v = (0, l.Z)(h)(function (e) {
          var a = e.breadcrumbs;
          return (0, u.jsx)("div", {
            className: "breadcrumbs",
            children: (0, u.jsx)(c.AW, {
              children: function () {
                return (0, u.jsx)(i.Z, {
                  "aria-label": "breadcrumb",
                  children: a.map(function (e, s) {
                    var r = e.match,
                      n = e.breadcrumb;
                    return s === a.length - 1
                      ? (0, u.jsx)(
                          "span",
                          { className: "breadcrumbs-item--last", children: n },
                          r.url
                        )
                      : (0, u.jsx)(
                          "span",
                          {
                            children: (0, u.jsx)(
                              x,
                              { to: r.url, children: n },
                              r.url
                            ),
                          },
                          r.url
                        );
                  }),
                });
              },
            }),
          });
        });
    },
    4529: function (e, a, s) {
      s.d(a, {
        Z: function () {
          return h;
        },
      });
      var r = s(8489),
        n = s(3738),
        i = (s(2791), s(5717)),
        t = s(8996),
        l = s(1009),
        o = s(184),
        c = ["children"],
        d = {
          dots: !0,
          nextArrow: (0, o.jsx)(m, {}),
          prevArrow: (0, o.jsx)(u, {}),
          infinite: !0,
          slidesToShow: 1,
          slidesToScroll: 1,
        };
      function m(e) {
        var a = e.onClick;
        return (0, o.jsx)("button", {
          className: "slick-arrow slick-arrow--next",
          onClick: a,
          children: (0, o.jsx)(t.Z, {}),
        });
      }
      function u(e) {
        var a = e.onClick;
        return (0, o.jsx)("button", {
          className: "slick-arrow slick-arrow--before",
          onClick: a,
          children: (0, o.jsx)(l.Z, {}),
        });
      }
      var h = function (e) {
        var a = e.children,
          s = (0, n.Z)(e, c);
        return (0, o.jsx)(
          i.Z,
          (0, r.Z)((0, r.Z)((0, r.Z)({}, d), s), {}, { children: a })
        );
      };
    },
    1801: function (e, a, s) {
      s.d(a, {
        Z: function () {
          return S;
        },
      });
      var r = s(2791),
        n = s(3430),
        i = s(5130),
        t = s(1286),
        l = s(3400),
        o = s(5978),
        c = s(2238),
        d = s(9725),
        m = s(3055),
        u = s(6728),
        h = s(2479),
        x = s(5110),
        v = s(135),
        j = s(4791),
        _ = s(2016),
        f = s(8893),
        p = s(7412),
        g = s(7237),
        N = s(7488),
        b = s(184),
        Z = function (e) {
          var a = e.displayCount,
            s = e.status,
            r = e.onToggle,
            n = (0, o.v9)((0, m.M7)());
          return (0, b.jsx)(l.Z, {
            "aria-label": "like",
            onClick: r,
            className: s ? "like-button like-button--active" : "like-button",
            disableRipple: !0,
            disabled: !n,
            children: (0, b.jsxs)("div", {
              className: "like-button__wrapper",
              children: [
                (0, b.jsx)("span", {
                  className: "visually-hidden",
                  children:
                    "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u0430\u0439\u043a\u043e\u0432:",
                }),
                s ? (0, b.jsx)(g.Z, {}) : (0, b.jsx)(N.Z, {}),
                a,
              ],
            }),
          });
        },
        w = function (e) {
          var a = e.reviewId,
            s = (0, r.useState)(!1),
            i = (0, n.Z)(s, 2),
            t = i[0],
            l = i[1],
            c = (0, o.I0)(),
            d = (0, o.v9)((0, m.rc)()),
            u = (0, o.v9)((0, p.DG)(a)),
            h = u.some(function (e) {
              return e.userId === d;
            });
          (0, r.useEffect)(
            function () {
              d && l(h);
            },
            [u, d]
          );
          return (0, b.jsx)(Z, {
            displayCount: u.length,
            status: t,
            onToggle: function () {
              var e = { userId: d || "", reviewId: a };
              c(h ? (0, p.fz)(e) : (0, p.j)(e));
            },
          });
        },
        C = function (e) {
          var a = e.review,
            s = (0, o.I0)(),
            p = (0, r.useState)(null),
            g = (0, n.Z)(p, 2),
            N = g[0],
            Z = g[1],
            C = (0, r.useState)(!1),
            k = (0, n.Z)(C, 2),
            S = k[0],
            y = k[1],
            I = (0, o.v9)((0, d.wW)(a.roomId)),
            P = (0, o.v9)((0, m.GA)(a.userId || "")),
            D = (0, o.v9)((0, m.Ts)()),
            R = "admin" === (null === D || void 0 === D ? void 0 : D.role),
            T = a.userId === (null === D || void 0 === D ? void 0 : D._id),
            W = R || T;
          (0, r.useEffect)(
            function () {
              Z(a.content);
            },
            [a]
          );
          return P
            ? (0, b.jsx)("li", {
                className: "reviews-list__item",
                children: (0, b.jsxs)("div", {
                  className: "review",
                  children: [
                    (0, b.jsxs)("div", {
                      className: "review__avatar",
                      children: [
                        (0, b.jsx)("div", {
                          className: "avatar",
                          children: (0, b.jsx)(h.Z, {
                            alt: "\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",
                            src: P.avatarPhoto || "",
                            className: "avatar__img",
                          }),
                        }),
                        (0, b.jsx)(w, { reviewId: a._id || "" }),
                      ],
                    }),
                    (0, b.jsxs)("div", {
                      className: "review__content",
                      children: [
                        (0, b.jsxs)("div", {
                          className: "review__user-name",
                          children: [
                            "".concat(P.firstName, " ").concat(P.secondName),
                            T &&
                              (0, b.jsx)("div", {
                                className: "review__edit-btn",
                                children: (0, b.jsx)(f.Z, {
                                  title:
                                    "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",
                                  children: (0, b.jsx)(l.Z, {
                                    onClick: function () {
                                      return y(!0);
                                    },
                                    children: (0, b.jsx)(t.Z, {
                                      fontSize: "small",
                                    }),
                                  }),
                                }),
                              }),
                            W &&
                              (0, b.jsx)("div", {
                                className: "review__delete-btn",
                                children: (0, b.jsx)(f.Z, {
                                  title:
                                    "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043e\u0442\u0437\u044b\u0432",
                                  children: (0, b.jsx)(l.Z, {
                                    onClick: function () {
                                      s((0, c.fL)(a._id || ""));
                                      var e = {
                                        _id:
                                          (null === I || void 0 === I
                                            ? void 0
                                            : I._id) || "not found",
                                        price:
                                          (null === I || void 0 === I
                                            ? void 0
                                            : I.price) || 0,
                                        roomNumber:
                                          (null === I || void 0 === I
                                            ? void 0
                                            : I.roomNumber) || "not found",
                                        countReviews:
                                          Number(
                                            null === I || void 0 === I
                                              ? void 0
                                              : I.countReviews
                                          ) - 1,
                                        rate:
                                          Number(
                                            null === I || void 0 === I
                                              ? void 0
                                              : I.rate
                                          ) - a.rating,
                                      };
                                      s((0, d.jX)(e));
                                    },
                                    children: (0, b.jsx)(i.Z, {
                                      fontSize: "small",
                                    }),
                                  }),
                                }),
                              }),
                            (0, b.jsx)("div", {
                              className: "review__rating",
                              children: (0, b.jsx)(_.Z, {
                                value: a.rating,
                                readOnly: !0,
                              }),
                            }),
                          ],
                        }),
                        (0, b.jsx)("p", {
                          className: "review__date",
                          children:
                            a.created_at !== a.updated_at
                              ? "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d: ".concat(
                                  (0, u.ZP)(
                                    (null === a || void 0 === a
                                      ? void 0
                                      : a.updated_at) || ""
                                  )
                                )
                              : (0, u.ZP)(
                                  (null === a || void 0 === a
                                    ? void 0
                                    : a.created_at) || ""
                                ),
                        }),
                        S
                          ? (0, b.jsxs)(b.Fragment, {
                              children: [
                                (0, b.jsx)(v.N7, {
                                  value: N,
                                  onChange: function (e) {
                                    Z(e.target.value);
                                  },
                                  rows: 3,
                                }),
                                (0, b.jsx)(x.Z, {
                                  variant: "outlined",
                                  size: "small",
                                  style: { marginTop: "5px" },
                                  onClick: function () {
                                    y(!1);
                                    var e = {
                                      _id: a._id,
                                      rating: a.rating,
                                      roomId: a.roomId,
                                      content: a.content,
                                    };
                                    s((0, c.g8)(e));
                                  },
                                  children:
                                    "\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c",
                                }),
                              ],
                            })
                          : (0, b.jsx)("p", {
                              className: "review__message",
                              children: N,
                            }),
                      ],
                    }),
                  ],
                }),
              })
            : (0, b.jsx)(j.Z, {});
        },
        k = function (e) {
          var a = e.reviews;
          return (0, b.jsx)("ul", {
            className: "reviews-list",
            children: a.map(function (e) {
              return (0, b.jsx)(C, { review: e }, e._id);
            }),
          });
        },
        S = k;
    },
    8702: function (e, a, s) {
      s.d(a, {
        Z: function () {
          return g;
        },
      });
      var r = s(4379),
        n = s(9877),
        i = s(1563),
        t = (s(2791), s(5978)),
        l = s(1523),
        o = s(2238),
        c = s(3720),
        d = s(8489),
        m = s(3738),
        u = s(4777),
        h = s(184),
        x = ["children", "className"],
        v = function (e) {
          var a = e.children,
            s = e.className,
            r = (0, m.Z)(e, x);
          return (0, h.jsx)(
            u.Z,
            (0, d.Z)((0, d.Z)({ className: s }, r), {}, { children: a })
          );
        },
        j = s(1993),
        _ = s(4529),
        f = s(2016),
        p = {
          hasWifi: (0, h.jsx)(i.Z, {}),
          hasConditioner: (0, h.jsx)(r.Z, {}),
          hasWorkSpace: (0, h.jsx)(n.Z, {}),
        },
        g = function (e) {
          var a = e._id,
            s = e.roomNumber,
            r = e.price,
            n = e.type,
            i = e.images,
            d = e.comforts,
            m = (0, t.v9)((0, o.xT)(a)),
            u = m ? m.length : 0,
            x =
              u > 0
                ? m.reduce(function (e, a) {
                    return e + a.rating;
                  }, 0)
                : 0;
          return (0, h.jsxs)("div", {
            className: "room-card",
            children: [
              d &&
                (0, h.jsx)(v, {
                  className: "badge",
                  children: d.map(function (e) {
                    return (0, h.jsx)("div", { children: p[e] }, e);
                  }),
                }),
              (0, h.jsx)(_.Z, {
                className: "room-card__gallery",
                children:
                  i &&
                  i.map(function (e) {
                    return (0,
                    h.jsx)("div", { className: "room-card__gallery-item", children: (0, h.jsx)("img", { className: "room-card__gallery-item--img", src: e, alt: "roomsPhoto" }) }, e);
                  }),
              }),
              (0, h.jsxs)(l.rU, {
                to: "/rooms/".concat(a),
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
                            children: s,
                          }),
                          "\u041b\u044e\u043a\u0441" === n &&
                            (0, h.jsx)("span", {
                              className: "room-card__type",
                              children: n,
                            }),
                        ],
                      }),
                      (0, h.jsxs)("div", {
                        className: "room-card__rentPerDay",
                        children: [
                          (0, h.jsxs)("span", { children: [r, "\u20bd"] }),
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
                        children: (0, h.jsx)(f.Z, {
                          name: "read-only",
                          value: x,
                          totalCount: u,
                          readOnly: !0,
                        }),
                      }),
                      (0, h.jsx)("div", {
                        className: "room-card__reviews",
                        children: (0, h.jsx)("span", {
                          className: "room-card__reviews-count",
                          children: ""
                            .concat(u, " ")
                            .concat(
                              (0, c.Z)(u, [
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
    3445: function (e, a, s) {
      var r = s(8489),
        n = s(2791),
        i = s(8702),
        t = s(184),
        l = function (e) {
          var a = e.rooms;
          return (0, t.jsx)("ul", {
            className: "rooms__list",
            children: a.map(function (e) {
              return (0,
              t.jsx)("li", { className: "rooms__list-item", children: (0, t.jsx)(i.Z, (0, r.Z)({}, e)) }, e._id);
            }),
          });
        };
      a.Z = n.memo(l);
    },
    8823: function (e, a, s) {
      s.r(a),
        s.d(a, {
          default: function () {
            return ve;
          },
        });
      var r = s(2791),
        n = s(9271),
        i = s(1276),
        t = s(2258),
        l = s(6697),
        o = s(9015),
        c = s(3430),
        d = s(703),
        m = s(5978),
        u = s(9677),
        h = s(9725),
        x = s(3400),
        v = s(8893),
        j = s(151),
        _ = s(1939),
        f = s(184),
        p = function (e) {
          var a = e.status,
            s = e.onToggle;
          return (0, f.jsx)(v.Z, {
            title: a
              ? "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e"
              : "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",
            children: (0, f.jsx)(x.Z, {
              className: "room-page__favoriteBtn",
              size: "large",
              onClick: s,
              children: a ? (0, f.jsx)(j.Z, {}) : (0, f.jsx)(_.Z, {}),
            }),
          });
        },
        g = s(4529),
        N = s(4791),
        b = s(3391),
        Z = s(2238),
        w = s(3055),
        C = s(3720),
        k = s(1801),
        S = function () {
          var e = (0, n.UO)().roomId,
            a = (0, m.v9)((0, Z.xT)(e)),
            s = (0, m.v9)((0, w.rc)()),
            r = a.sort(function (e, a) {
              return String(a.created_at).localeCompare(String(e.created_at));
            }),
            i = r.length;
          return (0, f.jsxs)(f.Fragment, {
            children: [
              a.length > 0 &&
                (0, f.jsxs)("section", {
                  className: "reviews",
                  children: [
                    (0, f.jsxs)("div", {
                      className: "reviews-title",
                      children: [
                        (0, f.jsx)("h2", {
                          className: "room-info__card-title",
                          children:
                            "\u041e\u0442\u0437\u044b\u0432\u044b \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0435\u0439 \u043d\u043e\u043c\u0435\u0440\u0430",
                        }),
                        (0, f.jsx)("span", {
                          children: ""
                            .concat(i, " ")
                            .concat(
                              (0, C.Z)(i, [
                                "\u043e\u0442\u0437\u044b\u0432",
                                "\u043e\u0442\u0437\u044b\u0432\u0430",
                                "\u043e\u0442\u0437\u044b\u0432\u043e\u0432",
                              ])
                            ),
                        }),
                      ],
                    }),
                    i > 0 && (0, f.jsx)(k.Z, { reviews: r }),
                  ],
                }),
              s &&
                (0, f.jsxs)("section", {
                  className: "reviews-form",
                  children: [
                    (0, f.jsx)("h2", {
                      children:
                        "\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0437\u044b\u0432",
                    }),
                    (0, f.jsx)(b.xM, {}),
                  ],
                }),
            ],
          });
        },
        y = function () {
          return (0, f.jsxs)("div", {
            className: "room-info__card",
            children: [
              (0, f.jsx)("h3", {
                className: "room-info__card-title",
                children: "\u041e\u0442\u043c\u0435\u043d\u0430",
              }),
              (0, f.jsx)("p", {
                children:
                  "\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u043e\u0442\u043c\u0435\u043d\u0430 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 48 \u0447. \u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u0438 \u043e\u0442\u043c\u0435\u043d\u0435 \u043d\u0435 \u043f\u043e\u0437\u0434\u043d\u0435\u0435 \u0447\u0435\u043c \u0437\u0430 5 \u0434\u043d. \u0434\u043e \u043f\u0440\u0438\u0431\u044b\u0442\u0438\u044f \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043f\u043e\u043b\u043d\u044b\u0439 \u0432\u043e\u0437\u0432\u0440\u0430\u0442 \u0437\u0430 \u0432\u044b\u0447\u0435\u0442\u043e\u043c \u0441\u0431\u043e\u0440\u0430 \u0437\u0430 \u0443\u0441\u043b\u0443\u0433\u0438.",
              }),
            ],
          });
        },
        I = s(9298),
        P = s(1183),
        D = s(5799),
        R = s(2692),
        T = function () {
          return (0, f.jsxs)("div", {
            className: "room-info__card",
            children: [
              (0, f.jsx)("h3", {
                className: "room-info__card-title",
                children:
                  "\u0421\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e \u043d\u043e\u043c\u0435\u0440\u0435",
              }),
              (0, f.jsxs)("ul", {
                className: "features-list",
                children: [
                  (0, f.jsxs)("li", {
                    className: "features-list__item",
                    children: [
                      (0, f.jsxs)("div", {
                        className: "feature",
                        children: [
                          (0, f.jsx)(P.Z, { className: "feature__icon" }),
                          (0, f.jsxs)("div", {
                            className: "feature-content",
                            children: [
                              (0, f.jsx)("div", {
                                className: "feature__title",
                                children:
                                  "\u041a\u043e\u043c\u0444\u043e\u0440\u0442",
                              }),
                              (0, f.jsx)("div", {
                                className: "feature__subtitle",
                                children:
                                  "\u0428\u0443\u043c\u043e\u043f\u043e\u0433\u043b\u0430\u0449\u0430\u044e\u0449\u0438\u0435 \u0441\u0442\u0435\u043d\u044b",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, f.jsx)(R.Z, { className: "feature-separator" }),
                    ],
                  }),
                  (0, f.jsxs)("li", {
                    className: "features-list__item",
                    children: [
                      (0, f.jsxs)("div", {
                        className: "feature",
                        children: [
                          (0, f.jsx)(I.Z, { className: "feature__icon" }),
                          (0, f.jsxs)("div", {
                            className: "feature-content",
                            children: [
                              (0, f.jsx)("div", {
                                className: "feature__title",
                                children:
                                  "\u0423\u0434\u043e\u0431\u0441\u0442\u0432\u043e",
                              }),
                              (0, f.jsx)("div", {
                                className: "feature__subtitle",
                                children:
                                  "\u041e\u043a\u043d\u043e \u0432 \u043a\u0430\u0436\u0434\u043e\u0439 \u0438\u0437 \u0441\u043f\u0430\u043b\u0435\u043d",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, f.jsx)(R.Z, { className: "feature-separator" }),
                    ],
                  }),
                  (0, f.jsx)("li", {
                    className: "features-list__item",
                    children: (0, f.jsxs)("div", {
                      className: "feature",
                      children: [
                        (0, f.jsx)(D.Z, { className: "feature__icon" }),
                        (0, f.jsxs)("div", {
                          className: "feature-content",
                          children: [
                            (0, f.jsx)("div", {
                              className: "feature__title",
                              children: "\u0423\u044e\u0442",
                            }),
                            (0, f.jsx)("div", {
                              className: "feature__subtitle",
                              children:
                                "\u041d\u043e\u043c\u0435\u0440 \u043e\u0441\u043d\u0430\u0449\u0435\u043d \u043a\u0430\u043c\u0438\u043d\u043e\u043c",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        W = s(2016),
        F = function (e) {
          var a = e.countReviews,
            s = void 0 === a ? 0 : a,
            r = e.rate,
            n = +((void 0 === r ? 0 : r) / s).toFixed(2);
          return (0, f.jsxs)("div", {
            className: "room-info__card",
            children: [
              (0, f.jsx)("h3", {
                className: "room-info__card-title",
                children:
                  "\u0412\u043f\u0435\u0447\u0430\u0442\u043b\u0435\u043d\u0438\u044f \u043e\u0442 \u043d\u043e\u043c\u0435\u0440\u0430",
              }),
              s > 0
                ? (0, f.jsxs)(f.Fragment, {
                    children: [
                      (0, f.jsxs)("p", {
                        className: "room-info__card-rating__title",
                        children: [
                          "\u041e\u0431\u0449\u0430\u044f \u043e\u0446\u0435\u043d\u043a\u0430: ",
                          (0, f.jsxs)("span", {
                            children: [n, " \u0438\u0437 5"],
                          }),
                        ],
                      }),
                      (0, f.jsx)(W.Z, {
                        value: n,
                        name: "rating",
                        precision: 0.1,
                        readOnly: !0,
                        size: "large",
                      }),
                    ],
                  })
                : (0, f.jsx)(f.Fragment, {
                    children: (0, f.jsx)("h3", {
                      children:
                        "\u0415\u0449\u0435 \u043d\u0435\u0442 \u043e\u0442\u0437\u044b\u0432\u043e\u0432",
                    }),
                  }),
            ],
          });
        },
        z = function () {
          return (0, f.jsxs)("div", {
            className: "room-info__card",
            children: [
              (0, f.jsx)("h3", {
                className: "room-info__card-title",
                children: "\u041f\u0440\u0430\u0432\u0438\u043b\u0430",
              }),
              (0, f.jsxs)("ul", {
                className: "bullet-list",
                children: [
                  (0, f.jsx)("li", {
                    className: "bullet-list__item",
                    children:
                      "\u041d\u0435\u043b\u044c\u0437\u044f \u0441 \u043f\u0438\u0442\u043e\u043c\u0446\u0430\u043c\u0438",
                  }),
                  (0, f.jsx)("li", {
                    className: "bullet-list__item",
                    children:
                      "\u0411\u0435\u0437 \u0432\u0435\u0447\u0435\u0440\u0438\u043d\u043e\u043a \u0438 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0439",
                  }),
                  (0, f.jsx)("li", {
                    className: "bullet-list__item",
                    children:
                      "\u0412\u0440\u0435\u043c\u044f \u043f\u0440\u0438\u0431\u044b\u0442\u0438\u044f \u2014 \u043f\u043e\u0441\u043b\u0435 13:00, \u0430 \u0432\u044b\u0435\u0437\u0434 \u0434\u043e 12:00",
                  }),
                ],
              }),
            ],
          });
        },
        X = function (e) {
          var a = e.roomId,
            s = (0, m.v9)((0, h.wW)(a)),
            n =
              !!u.ZP.getFavoritesRoom() && u.ZP.getFavoritesRoom().includes(a),
            i = (0, r.useState)(n || !1),
            t = (0, c.Z)(i, 2),
            l = t[0],
            o = t[1];
          if (s) {
            var x = s.roomNumber,
              v = s.images,
              j = s.type,
              _ = s.price,
              Z = s.countReviews,
              w = s.rate;
            return (0, f.jsxs)("main", {
              children: [
                (0, f.jsx)("div", {
                  className: "room-page__gallery-wrapper",
                  children: (0, f.jsx)(g.Z, {
                    className: "room-page__gallery",
                    children:
                      v &&
                      v.map(function (e) {
                        return (0,
                        f.jsx)("img", { className: "room-page__gallery-item--img", src: e, alt: "roomsPhoto" }, e);
                      }),
                  }),
                }),
                (0, f.jsxs)("div", {
                  className: "room-info",
                  children: [
                    (0, f.jsxs)("div", {
                      className: "room-info__column",
                      children: [
                        (0, f.jsxs)("div", {
                          className: "room-info__group",
                          children: [
                            (0, f.jsx)(T, {}),
                            (0, f.jsx)(F, { countReviews: Z, rate: w }),
                          ],
                        }),
                        (0, f.jsx)(S, {}),
                        (0, f.jsxs)("div", {
                          className: "room-info__group",
                          children: [(0, f.jsx)(z, {}), (0, f.jsx)(y, {})],
                        }),
                      ],
                    }),
                    (0, f.jsx)("div", {
                      className: "room-info__form",
                      children: (0, f.jsxs)(d.Z, {
                        elevation: 3,
                        className: "form-card booking-form__card",
                        children: [
                          (0, f.jsx)("div", {
                            style: { display: "flex" },
                            children: (0, f.jsx)(p, {
                              status: l,
                              onToggle: function () {
                                return (function (e) {
                                  u.ZP.toggleFavoriteRoom(e),
                                    o(function (e) {
                                      return !e;
                                    });
                                })(a);
                              },
                            }),
                          }),
                          (0, f.jsxs)("div", {
                            className: "booking-form__header",
                            children: [
                              (0, f.jsxs)("div", {
                                className: "booking-form__numberRoom",
                                children: [
                                  (0, f.jsxs)("span", {
                                    className: "booking-form__numberRoom-text",
                                    children: ["\u2116 ", x],
                                  }),
                                  j &&
                                    (0, f.jsx)("span", {
                                      className:
                                        "booking-form__numberRoom-type",
                                      children: j,
                                    }),
                                ],
                              }),
                              (0, f.jsxs)("div", {
                                className: "booking-form__cost",
                                children: [
                                  (0, f.jsxs)("span", {
                                    children: [_, "\u20bd"],
                                  }),
                                  " \u0432 \u0441\u0443\u0442\u043a\u0438",
                                ],
                              }),
                            ],
                          }),
                          (0, f.jsx)(b.Fu, {}),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            });
          }
          return (0, f.jsx)(N.Z, {});
        },
        A = s(8489),
        O = s(3694);
      function B(e, a) {
        var s = (0, r.useState)(""),
          n = (0, c.Z)(s, 2),
          i = n[0],
          t = n[1],
          l = (0, r.useState)(e || []),
          o = (0, c.Z)(l, 2),
          d = o[0],
          m = o[1],
          u = (0, r.useState)(!1),
          h = (0, c.Z)(u, 2),
          x = h[0],
          v = h[1],
          j = (function (e, a) {
            var s = (0, r.useState)(e),
              n = (0, c.Z)(s, 2),
              i = n[0],
              t = n[1];
            return (
              (0, r.useEffect)(
                function () {
                  var s = setTimeout(function () {
                    t(e);
                  }, a || 500);
                  return function () {
                    clearTimeout(s);
                  };
                },
                [e, a]
              ),
              i
            );
          })(i, 500);
        return (
          (0, r.useEffect)(
            function () {
              if (j) {
                v(!0);
                var s = e.filter(function (e) {
                  return e[a.searchBy]
                    .toString()
                    .toLowerCase()
                    .includes(j.toLowerCase());
                });
                m(s), v(!1);
              } else m(e), v(!1);
            },
            [j, e]
          ),
          {
            filteredData: d,
            isSearching: x,
            searchTerm: i,
            setSearchTerm: t,
            handleChangeSearch: function (e) {
              t(e.target.value);
            },
          }
        );
      }
      var E = s(1718),
        M = s(2624),
        U = s(3738),
        L = s(6088),
        G = ["items", "pageSize", "currentPage", "onChange"],
        J = function (e) {
          var a = e.items,
            s = e.pageSize,
            r = e.currentPage,
            n = e.onChange,
            i = (0, U.Z)(e, G),
            t = a.length,
            l = Math.ceil(t / s);
          return 1 === l || 0 === t
            ? null
            : (0, f.jsx)("div", {
                className: "pagination",
                children: (0, f.jsx)(
                  L.Z,
                  (0, A.Z)(
                    {
                      count: l,
                      onChange: n,
                      page: r,
                      defaultPage: 0,
                      size: "large",
                      variant: "outlined",
                    },
                    i
                  )
                ),
              });
        },
        $ = s(135),
        V = function (e) {
          var a = e.value,
            s = e.onChange;
          return (0, f.jsx)($.UP, {
            name: "searchbar",
            label: "\u041f\u043e\u0438\u0441\u043a",
            placeholder:
              "\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u043d\u043e\u043c\u0435\u0440\u0443...",
            value: a,
            onChange: s,
            style: { flex: "1" },
          });
        },
        q = function (e) {
          var a = e.count,
            s = e.setCount,
            r = e.options;
          return (0, f.jsx)($.mg, {
            style: { minWidth: "140px" },
            name: "pageSize",
            autoWidth: !0,
            label:
              "\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u043f\u043e",
            value: String(a),
            onChange: function (e) {
              return s(e);
            },
            options: r,
          });
        },
        H = s(5110),
        K = s(818),
        Q = function (e) {
          var a = e.title,
            s = e.children;
          return (0, f.jsx)("div", {
            className: "filters__item",
            children: (0, f.jsxs)("fieldset", {
              className: "filters__group",
              children: [
                a &&
                  (0, f.jsx)("legend", {
                    className: "filters__group-title",
                    children: a,
                  }),
                s,
              ],
            }),
          });
        },
        Y = r.memo(Q),
        ee = function (e) {
          var a = e.handleChange,
            s = e.data,
            n = e.children,
            i = r.Children.map(n, function (e) {
              var n = e,
                i = typeof n,
                t = {};
              return (
                ("object" === i ||
                  ("function" === i &&
                    "submit" !== n.props.type &&
                    "button" !== n.props.type)) &&
                  (t = (0, A.Z)(
                    (0, A.Z)({}, n.props),
                    {},
                    { data: s, onChange: a, value: s[n.props.name] }
                  )),
                (0, f.jsx)(Y, {
                  title: n.props.title,
                  children: r.cloneElement(n, t),
                })
              );
            });
          return (0, f.jsx)("form", {
            className: "filters__form",
            children: i,
          });
        },
        ae = r.memo(ee),
        se = {
          arrivalDate: Date.now(),
          departureDate: Date.now() + 86e6,
          adults: 1,
          children: 0,
          babies: 0,
          price: [0, 15e3],
          canSmoke: !1,
          canPets: !1,
          canInvite: !1,
          hasWideCorridor: !1,
          hasDisabledAssistant: !1,
          hasWifi: !1,
          hasConditioner: !1,
          hasWorkSpace: !1,
        },
        re = function (e) {
          var a = e.onReset,
            s = (0, O.s_)(),
            n = s.searchFilters,
            i = s.handleChangeFilter,
            t = s.handleResetSearchFilters,
            l = (0, r.useCallback)(
              function (e) {
                e.preventDefault(), t(), a();
              },
              [t, a]
            ),
            o = (0, A.Z)((0, A.Z)({}, se), n);
          return (0, f.jsxs)("section", {
            className: "filters__wrapper",
            children: [
              (0, f.jsx)("h2", {
                className: "visually-hidden",
                children:
                  "\u041f\u043e\u0438\u0441\u043a \u043d\u043e\u043c\u0435\u0440\u043e\u0432 \u0432 \u043e\u0442\u0435\u043b\u0435 Nuzie",
              }),
              (0, f.jsxs)(ae, {
                data: o,
                handleChange: i,
                children: [
                  (0, f.jsx)($.wM, {
                    data: o,
                    onChange: i,
                    title:
                      "\u0414\u0430\u0442\u0430 \u043f\u0440\u0435\u0431\u044b\u0432\u0430\u043d\u0438\u044f \u0432 \u043e\u0442\u0435\u043b\u0435",
                  }),
                  (0, f.jsx)(K.Z, { data: o, onChange: i }),
                  (0, f.jsx)($.JM, {
                    label:
                      "\u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0446\u0435\u043d\u044b",
                    description:
                      "\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0437\u0430 \u0441\u0443\u0442\u043a\u0438 \u043f\u0440\u0435\u0431\u044b\u0432\u0430\u043d\u0438\u044f \u0432 \u043d\u043e\u043c\u0435\u0440\u0435",
                    name: "price",
                    onChange: i,
                    min: 0,
                    max: 15e3,
                  }),
                  (0, f.jsxs)($.$, {
                    title: "\u0423\u0434\u043e\u0431\u0441\u0442\u0432\u0430",
                    children: [
                      (0, f.jsx)($.XZ, { label: "Wi-Fi", name: "hasWifi" }),
                      (0, f.jsx)($.XZ, {
                        label:
                          "\u041a\u043e\u043d\u0434\u0438\u0446\u0438\u043e\u043d\u0435\u0440",
                        name: "hasConditioner",
                      }),
                      (0, f.jsx)($.XZ, {
                        label:
                          "\u0420\u0430\u0431\u043e\u0447\u0435\u0435 \u043c\u0435\u0441\u0442\u043e",
                        name: "hasWorkSpace",
                      }),
                    ],
                  }),
                  (0, f.jsxs)($.$, {
                    title:
                      "\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u044f",
                    children: [
                      (0, f.jsx)($.XZ, {
                        label:
                          "\u041c\u043e\u0436\u043d\u043e c \u043f\u0438\u0442\u043e\u043c\u0446\u0430\u043c\u0438",
                        name: "canPets",
                      }),
                      (0, f.jsx)($.XZ, {
                        label:
                          "\u041c\u043e\u0436\u043d\u043e \u043a\u0443\u0440\u0438\u0442\u044c",
                        name: "canSmoke",
                      }),
                      (0, f.jsx)($.XZ, {
                        label:
                          "\u041c\u043e\u0436\u043d\u043e \u043f\u0440\u0438\u0433\u043b\u0430\u0441\u0438\u0442\u044c \u0433\u043e\u0441\u0442\u0435\u0439 (\u0434\u043e 10 \u0447\u0435\u043b\u043e\u0432\u0435\u043a)",
                        name: "canInvite",
                      }),
                    ],
                  }),
                  (0, f.jsxs)($.$, {
                    title:
                      "\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c",
                    children: [
                      (0, f.jsx)($.XZ, {
                        label:
                          "\u0428\u0438\u0440\u043e\u043a\u0438\u0439 \u043a\u043e\u0440\u0438\u0434\u043e\u0440",
                        name: "hasWideCorridor",
                        labelDetails:
                          "\u0428\u0438\u0440\u0438\u043d\u0430 \u043a\u043e\u0440\u0438\u0434\u043e\u0440\u043e\u0432 \u0432 \u043d\u043e\u043c\u0435\u0440\u0435 \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 91\u0441\u043c",
                      }),
                      (0, f.jsx)($.XZ, {
                        label:
                          "\u041f\u043e\u043c\u043e\u0449\u043d\u0438\u043a \u0434\u043b\u044f \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043e\u0432",
                        name: "hasDisabledAssistant",
                        labelDetails:
                          "\u041d\u0430 1 \u044d\u0442\u0430\u0436\u0435 \u0432\u0430\u0441 \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u0442 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442 \u0438 \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442 \u0434\u043e \u043d\u043e\u043c\u0435\u0440\u0430",
                      }),
                    ],
                  }),
                  (0, f.jsx)(H.Z, {
                    type: "button",
                    onClick: l,
                    fullWidth: !0,
                    children:
                      "\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0424\u0438\u043b\u044c\u0442\u0440\u044b",
                  }),
                ],
              }),
            ],
          });
        },
        ne = r.memo(re),
        ie = s(3445).Z,
        te = s(7047),
        le = s(1993),
        oe = function () {
          return (0, f.jsxs)("div", {
            className: "room-card__skeleton",
            children: [
              (0, f.jsx)(te.Z, {
                variant: "rectangular",
                animation: "wave",
                height: 150,
              }),
              (0, f.jsx)(te.Z, {
                variant: "text",
                animation: "wave",
                height: 50,
              }),
              (0, f.jsx)(le.Z, {}),
              (0, f.jsx)(te.Z, {
                variant: "text",
                animation: "wave",
                height: 50,
              }),
            ],
          });
        },
        ce = function (e) {
          var a = e.pageSize,
            s = Array(a).fill("");
          return (0, f.jsx)("ul", {
            className: "rooms__list",
            children: s.map(function (e, a) {
              return (0,
              f.jsx)("li", { className: "rooms__list-item", children: (0, f.jsx)(oe, {}) }, a);
            }),
          });
        },
        de = [
          {
            name: "\u041f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e",
            value: { path: "roomNumber", order: "desc" },
          },
          {
            name: "\u041f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e",
            value: { path: "roomNumber", order: "asc" },
          },
          {
            name: "\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0435",
            value: { path: "countReviews", order: "desc" },
          },
          {
            name: "\u0412\u044b\u0441\u043e\u043a\u0438\u0439 \u0440\u0435\u0439\u0442\u0438\u043d\u0433",
            value: { path: "rate", order: "desc" },
          },
          {
            name: "\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0434\u0435\u0448\u0451\u0432\u044b\u0435",
            value: { path: "price", order: "asc" },
          },
          {
            name: "\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0434\u043e\u0440\u043e\u0433\u0438\u0435",
            value: { path: "price", order: "desc" },
          },
        ],
        me = function (e) {
          var a = e.sortBy,
            s = e.onSort;
          return (0, f.jsx)($.mg, {
            name: "roomSort",
            style: { minWidth: "200px" },
            label:
              "\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",
            value: JSON.stringify(a),
            onChange: s,
            options: de,
          });
        },
        ue = [
          { name: "6", value: 6 },
          { name: "12", value: 12 },
          { name: "18", value: 18 },
          { name: "24", value: 24 },
        ],
        he = function () {
          var e = (0, m.v9)((0, h._D)()),
            a = (0, M.T)(),
            s = (0, m.v9)((0, h.oC)()),
            n = (0, O.s_)(),
            i = n.searchFilters,
            t = n.handleResetSearchFilters,
            l = B(e, { searchBy: "roomNumber" }),
            o = l.filteredData,
            c = l.searchTerm,
            d = l.setSearchTerm,
            u = l.handleChangeSearch,
            x = (0, O.ZO)(o || [], { path: "roomNumber", order: "desc" }),
            v = x.sortedItems,
            j = x.sortBy,
            _ = x.setSortBy,
            p = (0, O.h0)(v || [], ue[1].value),
            g = p.itemsListCrop,
            N = p.currentPage,
            b = p.pageSize,
            Z = p.handleChangePage,
            w = p.handleChangePageSize,
            C = (0, r.useCallback)(
              function (e) {
                _(JSON.parse(e.target.value)), Z(e, 1);
              },
              [Z, _]
            ),
            k = (0, r.useCallback)(
              function () {
                t(),
                  d(""),
                  _({ path: "roomNumber", order: "desc" }),
                  w({ target: ue[1] });
              },
              [w, t]
            );
          return (
            (0, r.useEffect)(
              function () {
                var e = {
                  arrivalDate: Date.now(),
                  departureDate: Date.now() + 86e6,
                };
                (0, E.Vj)(i), a((0, h.nn)((0, A.Z)((0, A.Z)({}, e), i)));
              },
              [i]
            ),
            (0, f.jsxs)("main", {
              className: "rooms-page",
              children: [
                (0, f.jsx)("aside", {
                  className: "rooms-page__filters",
                  children: (0, f.jsx)(ne, { onReset: k }),
                }),
                (0, f.jsxs)("section", {
                  className: "rooms-page__rooms",
                  children: [
                    (0, f.jsxs)("div", {
                      className: "rooms-page__sorting",
                      children: [
                        (0, f.jsx)(V, { value: c, onChange: u }),
                        (0, f.jsx)(me, { sortBy: j, onSort: C }),
                        (0, f.jsx)(q, { count: b, setCount: w, options: ue }),
                      ],
                    }),
                    (0, f.jsx)("h2", {
                      className: "rooms__title",
                      children:
                        "\u041d\u043e\u043c\u0435\u0440\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u044b \u0434\u043b\u044f \u0432\u0430\u0441 \u043f\u043e\u0434\u043e\u0431\u0440\u0430\u043b\u0438",
                    }),
                    s
                      ? (0, f.jsx)(ce, { pageSize: b })
                      : (0, f.jsx)(ie, { rooms: g }),
                    0 === g.length &&
                      (0, f.jsx)("h2", {
                        children:
                          "\u041c\u044b \u043d\u0435 \u043d\u0430\u0448\u043b\u0438 \u0434\u043b\u044f \u0432\u0430\u0441 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u043d\u043e\u043c\u0435\u0440\u043e\u0432 \u043f\u043e \u0432\u0430\u0448\u0438\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c \ud83d\ude41",
                      }),
                    v.length > b &&
                      (0, f.jsxs)("div", {
                        className: "rooms-page__pagination",
                        children: [
                          (0, f.jsx)(J, {
                            items: v,
                            pageSize: b,
                            currentPage: N,
                            onChange: Z,
                          }),
                          (0, f.jsx)("p", {
                            className: "rooms-page__pagination-info",
                            children: ""
                              .concat((N - 1) * b || 1, " - \n              ")
                              .concat(
                                b * N > e.length ? e.length : b * N,
                                "\n              \u0438\u0437 "
                              )
                              .concat(
                                e.length,
                                " \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432 \u0430\u0440\u0435\u043d\u0434\u044b"
                              ),
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            })
          );
        },
        xe = he,
        ve = function () {
          var e = (0, n.UO)().roomId;
          return (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsx)(o.Z, {}),
              (0, f.jsxs)(t.Z, {
                children: [
                  (0, f.jsx)(i.Z, {}),
                  e ? (0, f.jsx)(X, { roomId: e }) : (0, f.jsx)(xe, {}),
                ],
              }),
              (0, f.jsx)(l.Z, {}),
            ],
          });
        };
    },
  },
]);
//# sourceMappingURL=823.a91b3b3a.chunk.js.map
