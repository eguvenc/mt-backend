import { r as resolveComponent, c as createElementBlock, o as openBlock, a as createVNode, b as withCtx, d as createBlock, V as VRow, e as VProgressCircular, f as createTextVNode, t as toDisplayString, g as VFooter, h as createBaseVNode, F as Fragment, i as renderList, j as VCol, k as VSheet, n as normalizeClass, l as VListItem, m as VIcon, p as VTable } from "../../../vendor.js";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    let allSettled2 = function(promises) {
      return Promise.all(
        promises.map(
          (p) => Promise.resolve(p).then(
            (value) => ({ status: "fulfilled", value }),
            (reason) => ({ status: "rejected", reason })
          )
        )
      );
    };
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = allSettled2(
      deps.map((dep) => {
        dep = assetsURL(dep);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
const module = {
  name: "Authentication",
  version: "1.0.0",
  install: async (app) => {
    const { default: routes$1 } = await __vitePreload(async () => {
      const { default: routes$12 } = await Promise.resolve().then(() => routes);
      return { default: routes$12 };
    }, true ? void 0 : void 0);
    const { default: resources } = await __vitePreload(async () => {
      const { default: resources2 } = await Promise.resolve().then(() => index$1);
      return { default: resources2 };
    }, true ? void 0 : void 0);
    const { default: navigation } = await __vitePreload(async () => {
      const { default: navigation2 } = await Promise.resolve().then(() => _nav$1);
      return { default: navigation2 };
    }, true ? void 0 : void 0);
    const resourceComponents = {
      "AuthenticationFailedLoginsList": () => __vitePreload(() => Promise.resolve().then(() => List$1), true ? void 0 : void 0)
    };
    return {
      // i18n,
      // stores,
      routes: routes$1,
      // plugins,
      navigation,
      resources,
      // components,
      resourceComponents
    };
  }
};
const index$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: module
}, Symbol.toStringTag, { value: "Module" }));
const routes = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const index = [
  {
    name: "failedLogins",
    permissions: [
      { name: "admin", actions: ["create", "list", "edit", "delete", "show"] }
    ],
    actions: ["create", "list", "edit", "delete", "show"]
  },
  {
    name: "failedLoginIps"
  },
  {
    name: "failedLoginUsernames"
  }
];
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index
}, Symbol.toStringTag, { value: "Module" }));
const _nav = {
  name: module.name,
  build: async function(t, admin) {
    const adminRole = await admin.can(["admin"]);
    return adminRole ? [
      {
        icon: "mdi-shield-key-outline",
        text: t("authentication.menu.label"),
        order: 98,
        children: [
          {
            icon: "mdi-account-alert",
            text: t("authentication.failedLogins.menu.label"),
            link: "/authentication/failedLogins?sortBy=attemptedAt&sortDesc=false"
          }
        ]
      }
    ] : [];
  }
};
const _nav$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _nav
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  props: ["resource", "title"],
  data() {
    return {
      filters: [
        {
          source: "username",
          type: "select",
          attributes: {
            reference: "authentication_failedLoginUsernames",
            multiple: true
          }
        },
        {
          source: "ip",
          type: "select",
          attributes: {
            reference: "authentication_failedLoginIps",
            multiple: true
          }
        },
        {
          source: "attemptedAtStart",
          type: "date"
        },
        {
          source: "attemptedAtEnd",
          type: "date"
        }
      ],
      fields: [
        {
          source: "username",
          type: "text",
          sortable: true,
          width: "10%"
        },
        {
          source: "attemptedAt",
          type: "date",
          sortable: true,
          width: "10%"
        },
        {
          source: "userAgent",
          sortable: true,
          width: "10%"
        },
        {
          source: "ip",
          sortable: true,
          width: "10%"
        }
      ]
    };
  },
  methods: {
    isOdd(number) {
      return (number & 1) === 1;
    }
  }
};
const _hoisted_1 = { class: "text-h6" };
const _hoisted_2 = {
  border: "0",
  style: { "border": "none" }
};
const _hoisted_3 = {
  style: { "border": "none" },
  width: "35px;",
  align: "left"
};
const _hoisted_4 = { style: { "border": "none" } };
const _hoisted_5 = { align: "right" };
const _hoisted_6 = { width: "20%" };
const _hoisted_7 = { align: "right" };
const _hoisted_8 = { align: "right" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_delete_button = resolveComponent("va-delete-button");
  const _component_va_data_iterator_server = resolveComponent("va-data-iterator-server");
  const _component_va_list = resolveComponent("va-list");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_va_list, {
      filters: $data.filters,
      fields: $data.fields,
      "disable-create": "",
      "disable-positioning": "",
      "disable-visibility": "",
      "items-per-page": 2
    }, {
      default: withCtx(() => [
        createVNode(_component_va_data_iterator_server, { pagination: {
          density: "default",
          activeColor: "primary",
          top: false,
          bottom: true,
          rounded: "pill"
        } }, {
          default: withCtx(({ items }) => [
            _ctx.$store.getModule("api").getLoading ? (openBlock(), createBlock(VRow, {
              key: 0,
              "no-gutters": "",
              class: "bordered pt-1 pb-1 justify-center"
            }, {
              default: withCtx(() => [
                createVNode(VProgressCircular, {
                  color: "primary",
                  indeterminate: ""
                })
              ]),
              _: 1
            })) : (openBlock(), createBlock(VRow, {
              key: 1,
              "no-gutters": ""
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(items, (item, i) => {
                  return openBlock(), createBlock(VCol, {
                    key: i,
                    lg: "6",
                    md: "6",
                    sm: "12",
                    class: "mb-3"
                  }, {
                    default: withCtx(() => [
                      createVNode(VSheet, {
                        border: "",
                        class: normalizeClass($options.isOdd(i) ? "" : "mr-lg-5 mr-md-5 mr-sm-0")
                      }, {
                        default: withCtx(() => [
                          createVNode(VListItem, {
                            title: item.raw.username,
                            subtitle: item.raw.id,
                            lines: "two",
                            density: "comfortable"
                          }, {
                            title: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, null, {
                                    default: withCtx(() => [
                                      createBaseVNode("strong", _hoisted_1, [
                                        createBaseVNode("table", _hoisted_2, [
                                          createBaseVNode("tbody", null, [
                                            createBaseVNode("tr", null, [
                                              createBaseVNode("td", _hoisted_3, [
                                                createVNode(VIcon, {
                                                  icon: "mdi-account-outline",
                                                  size: "small"
                                                })
                                              ]),
                                              createBaseVNode("td", _hoisted_4, toDisplayString(item.raw.username), 1)
                                            ])
                                          ])
                                        ])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCol, { align: "right" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_va_delete_button, {
                                        block: "",
                                        resource: $props.resource,
                                        item
                                      }, null, 8, ["resource", "item"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["title", "subtitle"]),
                          createVNode(VTable, {
                            style: { "padding-left": "10px", "border": "none" },
                            density: "compact",
                            class: "text-caption"
                          }, {
                            default: withCtx(() => [
                              createBaseVNode("tbody", null, [
                                createBaseVNode("tr", _hoisted_5, [
                                  createBaseVNode("th", _hoisted_6, toDisplayString(_ctx.$t("authentication.failedlogins.fields.attemptedAt")) + ":", 1),
                                  createBaseVNode("td", null, toDisplayString(item.raw.attemptedAt), 1)
                                ]),
                                createBaseVNode("tr", _hoisted_7, [
                                  createBaseVNode("th", null, toDisplayString(_ctx.$t("authentication.failedlogins.fields.ip")) + ":", 1),
                                  createBaseVNode("td", null, toDisplayString(item.raw.ip), 1)
                                ]),
                                createBaseVNode("tr", _hoisted_8, [
                                  createBaseVNode("th", null, toDisplayString(_ctx.$t("authentication.failedlogins.fields.userAgent")) + ":", 1),
                                  createBaseVNode("td", null, toDisplayString(item.raw.userAgent), 1)
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["class"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              _: 2
            }, 1024))
          ]),
          "bottom.pagination.header": withCtx(({ page, pageCount }) => [
            createVNode(VFooter, {
              class: "text-body-3 mt-6 mb-2",
              style: { "padding": "0" }
            }, {
              default: withCtx(() => [
                createBaseVNode("div", null, toDisplayString(_ctx.$t("i18n.dataiterator.displayingPage", { page, pageCount })), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          "no-data": withCtx(() => [
            _ctx.$store.getModule("api").getLoading ? (openBlock(), createBlock(VRow, {
              key: 0,
              "no-gutters": "",
              class: "bordered pt-1 pb-1 justify-center"
            }, {
              default: withCtx(() => [
                createVNode(VProgressCircular, {
                  color: "primary",
                  indeterminate: ""
                })
              ]),
              _: 1
            })) : (openBlock(), createBlock(VRow, {
              key: 1,
              "no-gutters": "",
              class: "bordered pt-2 pb-2 justify-center"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("i18n.datatable.nodata")), 1)
              ]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["filters", "fields"])
  ]);
}
const List = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const List$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: List
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vitePreload as _,
  _export_sfc as a,
  index$2 as i
};
