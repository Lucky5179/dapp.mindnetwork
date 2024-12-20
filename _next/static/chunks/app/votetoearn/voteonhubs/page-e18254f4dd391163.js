(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [544],
  {
    81302: function (e, t, n) {
      "use strict";
      var l,
        i = n(4410);
      function a() {
        return (a = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var l in n)
                  ({}).hasOwnProperty.call(n, l) && (e[l] = n[l]);
              }
              return e;
            }).apply(null, arguments);
      }
      t.Z = function (e) {
        return i.createElement(
          "svg",
          a(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 7.5,
              height: 8.333,
              fill: "#CBD2D9",
            },
            e
          ),
          l ||
            (l = i.createElement("path", {
              d: "M1.667 1.667V.417c0-.23.186-.417.416-.417h5c.23 0 .417.187.417.417V6.25c0 .23-.187.417-.417.417h-1.25v1.25c0 .23-.187.416-.42.416H.42A.417.417 0 0 1 0 7.917l.001-5.834c0-.23.188-.416.42-.416zm.833 0h3.333v4.166h.834v-5H2.5zM1.667 3.75v.833h2.5V3.75zm0 1.667v.833h2.5v-.833z",
            }))
        );
      };
    },
    97394: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 56794));
    },
    56794: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return j;
          },
        });
      var l = n(57437),
        i = n(2265),
        a = n(27840),
        s = n(98267),
        r = n(80265),
        d = n(66648),
        o = n(81302),
        x = n(71768),
        c = n(58250),
        g = n(18156),
        u = n(87138),
        h = n(61574);
      function v(e) {
        let {
            data: t,
            linkOut: n,
            delegationYieldPartArrayLoading: i,
            voterYieldPartArrayArrayLoading: a,
          } = e,
          [s, r] = x.ZP.useMessage();
        return (0, l.jsxs)(l.Fragment, {
          children: [
            r,
            (0, l.jsxs)("div", {
              className:
                "p-[24px] rounded-[10px] bg-[var(--mind-bg-grey-color)]",
              children: [
                (0, l.jsxs)("div", {
                  className: "flex gap-[20px] items-center h-[70px]",
                  children: [
                    (0, l.jsx)(d.default, {
                      src: t.subnetlogo,
                      alt: "create subnet",
                      height: 70,
                      width: 70,
                      style: { borderRadius: "70px" },
                    }),
                    (0, l.jsxs)("div", {
                      children: [
                        (0, l.jsx)("div", {
                          className: "text-light text-[16px] font-[800]",
                          children: t.subnetName,
                        }),
                        (0, l.jsxs)("div", {
                          className: "text-light text-[14px]",
                          children: [
                            (0, g.Tg)(t.subnetContract),
                            (0, l.jsx)(o.Z, {
                              className:
                                "hover:fill-[var(--mind-brand)] cursor-pointer inline-block ml-[5px]",
                              onClick: () => (0, g.r$)(t.subnetContract, s),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className:
                    "h-[90px] text-[var(--mind-text-grey-color)] mt-[10px] text-[12px]",
                  children: [
                    t.subnetDescription,
                    (0, l.jsx)("a", {
                      href: t.noteUrl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "text-[var(--mind-brand-light)] text-[12px] hover:text-[var(--mind-brand)]",
                      children: "\xa0 learn more >",
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: "my-[10px]",
                  children: (0, l.jsx)("hr", {}),
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsxs)("div", {
                      className: "flex justify-between py-[2px] ".concat(
                        void 0 !== t.totalDelegation ? "" : "hidden"
                      ),
                      children: [
                        (0, l.jsx)("span", {
                          className: "text-light text-[14px]",
                          children: "Total Delegation: ",
                        }),
                        (0, l.jsx)("span", {
                          className: "text-light text-right text-[14px]",
                          children:
                            "loading..." === t.totalDelegation
                              ? t.totalDelegation
                              : (0, g.tC)(
                                  t.totalDelegation ? t.totalDelegation : "0"
                                ) + " vFHE",
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: "flex justify-between py-[2px]",
                      children: [
                        (0, l.jsx)("span", {
                          className: "text-light text-[14px]",
                          children: "Voting APY: ",
                        }),
                        (0, l.jsx)("span", {
                          className: "text-light text-right text-[14px]",
                          children: a
                            ? "loading..."
                            : ("loading..." !== t.totalVoters && t.totalVoters
                                ? (0, g.tC)(
                                    t.voterYield
                                      .div(new h.Z(t.totalVoters))
                                      .toString()
                                  )
                                : "0") + " vFHE",
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: "flex justify-between py-[2px]",
                      children: [
                        (0, l.jsx)("span", {
                          className: "text-light text-[14px]",
                          children: "Delegation APY: ",
                        }),
                        (0, l.jsx)("span", {
                          className: "text-light text-right text-[14px]",
                          children: i
                            ? "loading..."
                            : ("loading..." !== t.totalDelegation &&
                              "0" !== t.totalDelegation &&
                              t.totalDelegation
                                ? (0, g.tC)(
                                    t.delegationYield
                                      .div(new h.Z(t.totalDelegation))
                                      .toString()
                                  )
                                : "0") + " vFHE",
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: "flex justify-between py-[2px]",
                      children: [
                        (0, l.jsx)("span", {
                          className: "text-light text-[14px]",
                          children: "vFHE Emission: ",
                        }),
                        (0, l.jsx)("span", {
                          className: "text-light text-right text-[14px]",
                          children: t.vFHEEmission,
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: "flex justify-between py-[2px]",
                      children: [
                        (0, l.jsx)("span", {
                          className: "text-light text-[14px]",
                          children: "Total Voters: ",
                        }),
                        (0, l.jsx)("span", {
                          className: "text-light text-right text-[14px]",
                          children:
                            0 !== t.maxVoter
                              ? t.totalVoters + "/" + t.maxVoter
                              : t.totalVoters,
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: "py-[2px]",
                      children: [
                        (0, l.jsx)("div", {
                          className: "text-light text-[14px]",
                          children: "Voting Rewards:",
                        }),
                        (0, l.jsx)("div", {
                          className: "flex justify-center",
                          children: (0, l.jsx)("div", {
                            children: t.rewards.map((e, n) =>
                              (0, l.jsx)(
                                "div",
                                {
                                  className: "text-light text-[14px]",
                                  children: e.includes("Credit")
                                    ? (0, l.jsxs)("a", {
                                        href: "https://docs.mindnetwork.xyz/minddocs/others/faq",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className:
                                          "text-light text-[14px] underline hover:text-[var(--mind-brand)] hover:underline",
                                        children: ["\xb7 ", e],
                                      })
                                    : e.includes("Potential")
                                    ? (0, l.jsxs)("span", {
                                        className: "text-light text-[14px]",
                                        children: [
                                          "\xb7 ",
                                          e + "（" + t.subnetName + "）",
                                        ],
                                      })
                                    : (0, l.jsxs)("span", {
                                        className: "text-light text-[14px]",
                                        children: ["\xb7 ", e],
                                      }),
                                },
                                n
                              )
                            ),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)(c.ZP, {
                  className: "mind-default-btn w-full mt-[20px]",
                  disabled: 0 === t.registerVoter,
                  children: (0, l.jsx)(u.default, {
                    className: "w-full",
                    href: (n && t.subnetId != 1)
                      ? t.linkOut
                      : {
                          pathname: "/votetoearn/voteonhubs/".concat(
                            t.subnetId
                          ),
                        },
                    children: (0, l.jsx)("span", {
                      className: "text-[14px]",
                      children: "Vote →",
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function m(e) {
        let {
          subnetInfor: t,
          linkOut: n = !1,
          loading: i,
          delegationYieldPartArrayLoading: a,
          voterYieldPartArrayArrayLoading: d,
        } = e;
        return (0, l.jsx)("div", {
          children: i
            ? (0, l.jsx)("div", {
                className: "text-light text-center",
                children: "loading...",
              })
            : (null == t ? void 0 : t.length) === 0
            ? (0, l.jsx)("div", {
                className: "text-light text-center",
                children: "Coming soon...",
              })
            : (0, l.jsx)(s.Z, {
                className: "mt-[20px]",
                gutter: [16, { xs: 16, sm: 16, md: 24 }],
                children:
                  null == t
                    ? void 0
                    : t.map((e) =>
                        (0, l.jsx)(
                          r.Z,
                          {
                            xs: { span: 24 },
                            md: { span: 12 },
                            lg: { span: 8 },
                            children: (0, l.jsx)(v, {
                              data: e,
                              linkOut: n,
                              delegationYieldPartArrayLoading: a,
                              voterYieldPartArrayArrayLoading: d,
                            }),
                          },
                          e.subnetId
                        )
                      ),
              }),
        });
      }
      var p = n(97800),
        b = n(86362),
        f = n(85053);
      function j() {
        let { data: e, loading: t } = (0, p.aA)({
            cacheKey: "useSubnetList",
            staleTime: 3e5,
          }),
          { getSubnetDelegateList: n } = (0, b.Z)(),
          s = (0, b.Z)((e) => e.subnetDelegateList),
          r = (0, b.Z)((e) => e.subnetDelegateListLoading),
          { data: d, loading: o } = (0, p.i7)(!1),
          x = null == e ? void 0 : e.filter((e) => 1 === e.type),
          c = null == e ? void 0 : e.filter((e) => 2 === e.type),
          g = null == e ? void 0 : e.filter((e) => 3 === e.type),
          { data: u, loading: v } = (0, p.JZ)(e),
          { data: j } = (0, p.RH)(),
          { data: N, loading: y } = (0, p.j9)(e, j, u),
          { data: w, loading: D } = (0, p.FF)(e, j, u),
          L =
            null == x
              ? void 0
              : x.map((e) => {
                  let t =
                      null == u ? void 0 : u.find((t) => t.subnetId === e.id),
                    n = null == N ? void 0 : N.find((t) => t.subnetId === e.id),
                    l = null == d ? void 0 : d.find((t) => t.id === e.id),
                    i = null == w ? void 0 : w.find((t) => t.subnetId === e.id);
                  return {
                    subnetId: e.id,
                    subnetlogo: e.logo ? e.logo : "/images/logo.png",
                    subnetName: e.name ? e.name : "default",
                    subnetContract: e.contract_address
                      ? e.contract_address
                      : "",
                    subnetDescription: e.note ? e.note : "",
                    noteUrl: e.note_url,
                    totalDelegation: r ? "loading..." : e.totalDelegation,
                    totalVoters: o
                      ? "loading..."
                      : (null == l ? void 0 : l.voters) || 0,
                    delegationYield:
                      (null == n ? void 0 : n.delegationYieldPart) ||
                      new h.Z(0),
                    voterYield:
                      (null == i ? void 0 : i.voterYieldPart) || new h.Z(0),
                    vFHEEmission: v
                      ? "loading..."
                      : (null == t ? void 0 : t.rewardPerSubnet) || "0%",
                    rewards: [
                      "Consensus rewards (vFHE)",
                      "Credit rewards (ETH)",
                    ],
                    registerVoter: e.register_voter,
                    maxVoter: e.max_voter,
                  };
                }),
          V =
            null == c
              ? void 0
              : c.map((e) => {
                  let t =
                      null == u ? void 0 : u.find((t) => t.subnetId === e.id),
                    n = null == N ? void 0 : N.find((t) => t.subnetId === e.id),
                    l = null == d ? void 0 : d.find((t) => t.id === e.id),
                    i = null == w ? void 0 : w.find((t) => t.subnetId === e.id);
                  return {
                    subnetId: e.id,
                    subnetlogo: e.logo ? e.logo : "/images/logo.png",
                    subnetName: e.name ? e.name : "default",
                    subnetContract: e.contract_address
                      ? e.contract_address
                      : "",
                    subnetDescription: e.note ? e.note : "",
                    noteUrl: e.note_url,
                    totalDelegation: r ? "loading..." : e.totalDelegation,
                    totalVoters: o
                      ? "loading..."
                      : (null == l ? void 0 : l.voters) || 0,
                    delegationYield:
                      (null == n ? void 0 : n.delegationYieldPart) ||
                      new h.Z(0),
                    voterYield:
                      (null == i ? void 0 : i.voterYieldPart) || new h.Z(0),
                    vFHEEmission: v
                      ? "loading..."
                      : (null == t ? void 0 : t.rewardPerSubnet) || "0%",
                    rewards: [
                      "Consensus rewards (vFHE)",
                      "Credit rewards (ETH)",
                    ],
                    registerVoter: e.register_voter,
                    maxVoter: e.max_voter,
                  };
                }),
          P =
            null == g
              ? void 0
              : g.map((e) => {
                  let t = null == d ? void 0 : d.find((t) => t.id === e.id);
                  return {
                    subnetId: e.id,
                    subnetlogo: e.logo ? e.logo : "/images/logo.png",
                    subnetName: e.name ? e.name : "default",
                    subnetContract: e.contract_address
                      ? e.contract_address
                      : "",
                    subnetDescription: e.note ? e.note : "",
                    totalVoters: o
                      ? "loading..."
                      : (null == t ? void 0 : t.voters) || 0,
                    rewards: ["Consensus rewards (vFHE)"],
                    linkOut: e.link ? e.link : "https://",
                    registerVoter: e.register_voter,
                  };
                });
        (0, i.useEffect)(() => {
          n(e);
        }, [e]),
          (0, i.useMemo)(() => {
            if (e && s)
              for (let t in e) {
                let n = s.find((n) => n.subnetId === e[t].id);
                e[t].totalDelegation = (0, f.d)(
                  (null == n ? void 0 : n.amount) || BigInt(0)
                );
              }
          }, [e, s]);
        let E = [
          {
            key: "1",
            label: (0, l.jsx)("div", {
              className:
                "text-center sm:text-left text-[20px] text-light font-[800]",
              children: "Voting For Mind Hubs",
            }),
            children: (0, l.jsx)(m, {
              subnetInfor: L,
              loading: t,
              delegationYieldPartArrayLoading: y,
              voterYieldPartArrayArrayLoading: D,
            }),
          },

          {
            key: "3",
            label: (0, l.jsx)("div", {
              className:
                "text-center sm:text-left text-[20px] text-light font-[800]",
              children: "Manual Voting",
            }),
            children: (0, l.jsx)(m, {
              subnetInfor: P,
              linkOut: !0,
              loading: t,
              delegationYieldPartArrayLoading: y,
              voterYieldPartArrayArrayLoading: D,
            }),
          },
        ];
        return (0, l.jsxs)("div", {
          children: [
            (0, l.jsx)("div", {
              className: "text-light text-[24px] font-[800]",
              children: "Vote On Hubs",
            }),
            (0, l.jsx)("div", {
              className: "text-light",
              children: "Choose your hub, become a voter",
            }),
            (0, l.jsx)("div", {
              className: "mt-[30px]",
              children: (0, l.jsx)(a.Z, {
                items: E,
                defaultActiveKey: ["1", "2", "3"],
                bordered: !1,
                className: "mind-collapse mind-vote-collapse",
              }),
            }),
          ],
        });
      }
    },
    86362: function (e, t, n) {
      "use strict";
      var l = n(39099),
        i = n(97800);
      let a = (0, l.Ue)((e) => ({
        userDelegateList: void 0,
        subnetDelegateList: void 0,
        userDelegateListLoading: !1,
        subnetDelegateListLoading: !1,
        getUserDelegateList: async (t, n) => {
          let l;
          e({ userDelegateListLoading: !0 }),
            (l =
              n && Array.isArray(t)
                ? await Promise.all(
                    t.map(async (e) => {
                      let t = e.id,
                        l = await (0, i.eE)(n, t);
                      return { subnetId: t, amount: l };
                    })
                  )
                : void 0),
            e({ userDelegateListLoading: !1 }),
            e({ userDelegateList: l });
        },
        getSubnetDelegateList: async (t) => {
          let n;
          e({ subnetDelegateListLoading: !0 }),
            (n = Array.isArray(t)
              ? await Promise.all(
                  t.map(async (e) => {
                    let t = e.id,
                      n = await (0, i.Rr)(t);
                    return { subnetId: t, amount: n };
                  })
                )
              : void 0),
            e({ subnetDelegateListLoading: !1 }),
            e({ subnetDelegateList: n });
        },
      }));
      t.Z = a;
    },
  },
  function (e) {
    e.O(
      0,
      [
        9472, 733, 8250, 6207, 718, 8173, 1768, 6682, 7840, 6188, 9756, 2971,
        7023, 1744,
      ],
      function () {
        return e((e.s = 97394));
      }
    ),
      (_N_E = e.O());
  },
]);
