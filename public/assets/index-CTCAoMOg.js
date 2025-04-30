const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["chunks/modules/users/src/index.js","chunks/vendor.js","assets/vendor.css","chunks/modules/i18n/src/index.js","chunks/modules/authentication/src/index.js","chunks/modules/authorization/src/index.js","assets/modules/i18n/src/index.css","assets/modules/users/src/index.css","chunks/Dashboard.js","chunks/Swagger.js","chunks/modules/intakes/src/index.js","chunks/modules/medicines/src/index.js","chunks/modules/modules/src/index.js","chunks/modules/patients/src/index.js"])))=>i.map(i=>d[i]);
import { r as resolveComponent, c as createElementBlock, o as openBlock, a as createVNode, F as Fragment, b1 as createRouter, b2 as createWebHistory, d as createBlock, b as withCtx, b3 as renderSlot, b4 as VMain, h as createBaseVNode, aN as VContainer, aQ as VApp, s as createCommentVNode, b5 as VToolbarTitle, V as VRow, i as renderList, j as VCol, a_ as resolveDynamicComponent, t as toDisplayString, H as VSpacer, z as VBtn, m as VIcon, f as createTextVNode, b6 as VAppBarNavIcon, aW as withModifiers, b7 as VAppBar, aD as VList, b8 as VListSubheader, aO as VDivider, b9 as VListGroup, l as VListItem, aE as VListItemTitle, aH as mergeProps, ba as VNavigationDrawer, aS as useDisplay, aY as normalizeStyle, g as VFooter, A as VCard, B as VCardTitle, C as VCardText, G as VCardActions, I as VDialog, aZ as VLayout, n as normalizeClass, bb as VSnackbar, aL as useRoute, aJ as normalizeProps, aK as guardReactiveProps, bc as VInput, av as defineStore, bd as reactive, be as Draggable, bf as createSlots, p as VTable, bg as VSwitch, bh as VToolbar, aV as VForm, bi as VTooltip, D as VDataTableServer, M as useVuelidate, bj as VPagination, bk as VDataIterator, L as required, aI as VMenu, aU as VChip, bl as VRating, aG as VImg, e as VProgressCircular, bm as VProgressLinear, bn as VChipGroup, bo as VTextarea, E as VTextField, bp as VLocaleProvider, bq as VDatePicker, br as VColorPicker, bs as VSelect, bt as VRadio, bu as VRadioGroup, bv as VFileInput, y as VDataTable, bw as VCheckbox, bx as F, by as Qt, bz as ce, bA as X, bB as fe, bC as withDirectives, aF as VAvatar, bD as vShow, bE as useCurrencyInput, al as h, bF as D, bG as VAutocomplete, bH as VCombobox, bI as defineAsyncComponent, au as axios, bJ as createPinia, bK as createApp } from "../chunks/vendor.js";
import { a as _export_sfc, _ as __vitePreload } from "../chunks/modules/authentication/src/index.js";
import { g as get, d as debounce, s as size, b as store$1, a as isEmpty, e as set, u as upperFirst, f as isObject, t as truncate, i as i18Config, r as remove, h as camelCase, c as cookies, l as lowerCase, j as trimEnd, k as i18n$1, v as vuetify } from "../chunks/modules/i18n/src/index.js";
import { c as config, U as Utils } from "../chunks/modules/authorization/src/index.js";
import { a as auth } from "../chunks/modules/users/src/index.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const _sfc_main$1c = {};
function _sfc_render$1c(_ctx, _cache) {
  const _component_router_view = resolveComponent("router-view");
  const _component_unsaved_form_dialog = resolveComponent("unsaved-form-dialog");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_router_view),
    createVNode(_component_unsaved_form_dialog)
  ], 64);
}
const App = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["render", _sfc_render$1c]]);
const routes$1 = [
  {
    path: "",
    component: () => __vitePreload(() => import("../chunks/modules/users/src/index.js").then((n) => n.A), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => __vitePreload(() => import("../chunks/Dashboard.js"), true ? __vite__mapDeps([8,4,1,2]) : void 0),
        meta: {
          title: "Dashboard"
        }
      }
    ]
  }
];
const router = createRouter({
  history: createWebHistory("/"),
  routes: routes$1
});
const _sfc_main$1b = {};
const _hoisted_1$s = { class: "d-flex flex-column fill-height" };
const _hoisted_2$i = { style: { "margin-bottom": "80px" } };
function _sfc_render$1b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_messages = resolveComponent("va-messages");
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createBlock(VApp, null, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "appbar"),
      createVNode(VMain, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$s, [
            createBaseVNode("header", null, [
              renderSlot(_ctx.$slots, "header")
            ]),
            createVNode(_component_va_messages),
            createVNode(VContainer, {
              fluid: "",
              class: "mb-10"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_2$i, [
                  createVNode(_component_router_view)
                ])
              ]),
              _: 1
            }),
            createBaseVNode("footer", null, [
              renderSlot(_ctx.$slots, "footer")
            ])
          ])
        ]),
        _: 3
      }),
      renderSlot(_ctx.$slots, "aside")
    ]),
    _: 3
  });
}
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$1b, [["render", _sfc_render$1b]]);
const _sfc_main$1a = {
  inject: [],
  setup() {
    const { lgAndUp } = useDisplay();
    return { lgAndUp };
  },
  props: {
    /**
     * Replace default admin app title set on OlabaseAdmin constructor.
     */
    title: String,
    /**
     * Elevation
     * 
     * https://vuetifyjs.com/en/styles/elevation/#dynamic-elevation
     */
    elevation: {
      type: [Number, String]
    },
    /**
     * Header links visible on left side.
     */
    headerMenu: {
      type: Array,
      default: () => []
    },
    /**
     * Disable create menu.
     */
    disableCreate: Boolean,
    /**
     * Disable reload state button.
     */
    disableReload: Boolean,
    /**
     * Density option: default, compact, comfortable
     */
    density: {
      type: String,
      default: "compact"
    },
    /**
     * List Item Density option: default, compact, comfortable
     */
    listItemDensity: {
      type: String,
      default: "default"
    },
    /**
     * Color for the VAppBar.
     */
    color: {
      type: String,
      default: "primary"
    },
    /**
     * Removes app var shadow.
     */
    flat: false,
    /**
     * Main color of VNavigationDrawer.
     */
    sidebarColor: {
      type: String,
      default: "white"
    },
    /**
     * Liste item color of VNavigationDrawer.
     */
    listItemColor: {
      type: String,
      default: "primary"
    }
  },
  watch: {
    drawer(val) {
      this.$store.setDrawer(val);
    }
  },
  data() {
    return {
      drawer: true,
      sidebarMenu: null
    };
  },
  async created() {
    this.sidebarMenu = await this.$store.buildNavs(this.$t, this.$admin);
  },
  computed: {
    getLoading() {
      return this.$store.getModule("api").getLoading;
    },
    isRouteList() {
      if (typeof this.$route.meta.resource == "undefined") {
        return false;
      }
      let strArray = this.$route.name.split("_");
      if (Array.isArray(strArray) && strArray.length > 0) {
        let lastItem = strArray[strArray.length - 1];
        if (lastItem.trim() == "list") {
          return true;
        }
      }
      return false;
    }
  },
  methods: {
    refresh() {
      if (typeof this.$route.meta.resource !== "undefined") {
        this.$store.getResource(this.$route.meta.resource).refresh();
      }
    }
  }
};
const _hoisted_1$r = { key: 0 };
const _hoisted_2$h = ["href"];
const _hoisted_3$9 = { key: 1 };
function _sfc_render$1a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createVNode(VAppBar, {
      "clipped-left": $setup.lgAndUp,
      "clipped-right": $setup.lgAndUp,
      app: "",
      elevation: $props.elevation,
      density: $props.density,
      color: $props.color,
      flat: $props.flat
    }, {
      prepend: withCtx(() => [
        createVNode(VAppBarNavIcon, {
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $data.drawer = !$data.drawer, ["stop"]))
        })
      ]),
      default: withCtx(() => [
        createVNode(VToolbarTitle, {
          class: "ml-0 mt-1 pl-1",
          style: { "width": "274px" }
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "logo", {}, void 0, true)
          ]),
          _: 3
        }),
        $props.headerMenu.length && $setup.lgAndUp ? (openBlock(), createBlock(VRow, { key: 0 }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList($props.headerMenu, (item, i) => {
              return openBlock(), createBlock(VCol, {
                key: i,
                class: "text-center mb-sm-0 mb-5",
                cols: "auto"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(item.href ? "a" : "router-link"), {
                    href: item.href,
                    to: item.link,
                    class: "px-3 white--text link",
                    target: item.href ? "_blank" : "_self",
                    textContent: toDisplayString(item.text)
                  }, null, 8, ["href", "to", "target", "textContent"]))
                ]),
                _: 2
              }, 1024);
            }), 128))
          ]),
          _: 1
        })) : createCommentVNode("", true),
        createVNode(VSpacer),
        createBaseVNode("div", null, [
          renderSlot(_ctx.$slots, "header-buttons", {}, void 0, true),
          !$props.disableReload && $options.isRouteList ? (openBlock(), createBlock(VBtn, {
            key: 0,
            icon: "",
            small: "",
            class: "ml-1",
            loading: $options.getLoading,
            onClick: $options.refresh
          }, {
            default: withCtx(() => [
              createVNode(VIcon, null, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("mdi-refresh")
                ])),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["loading", "onClick"])) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "profile", {}, void 0, true)
        ])
      ]),
      _: 3
    }, 8, ["clipped-left", "clipped-right", "elevation", "density", "color", "flat"]),
    createVNode(VNavigationDrawer, {
      color: $props.sidebarColor,
      modelValue: $data.drawer,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.drawer = $event)
    }, {
      prepend: withCtx(() => [
        renderSlot(_ctx.$slots, "navbar-logo", {}, void 0, true)
      ]),
      default: withCtx(() => [
        Array.isArray($data.sidebarMenu) ? (openBlock(), createBlock(VList, { key: 0 }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList($data.sidebarMenu.filter((l) => l), (item, index2) => {
              return openBlock(), createElementBlock(Fragment, null, [
                item.heading ? (openBlock(), createBlock(VListSubheader, {
                  key: "header_" + index2
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.heading), 1)
                  ]),
                  _: 2
                }, 1024)) : item.divider ? (openBlock(), createBlock(VDivider, {
                  key: "divider_" + index2
                })) : item.children && item.children.length ? (openBlock(), createBlock(VListGroup, {
                  key: "vlist_" + index2,
                  value: item.expanded,
                  "prepend-icon": item.icon,
                  "append-icon": "mdi-chevron-up"
                }, {
                  activator: withCtx(({ props }) => [
                    createVNode(VListItem, mergeProps({
                      density: $props.listItemDensity,
                      color: $props.listItemColor,
                      ref_for: true
                    }, props, {
                      title: item.text
                    }), null, 16, ["density", "color", "title"])
                  ]),
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(item.children, (child, i) => {
                      return openBlock(), createBlock(VListItem, {
                        density: $props.listItemDensity,
                        color: $props.listItemColor,
                        key: "vlist-item_" + i,
                        link: "",
                        to: child.link
                      }, {
                        prepend: withCtx(() => [
                          createVNode(VIcon, {
                            size: "small",
                            icon: child.icon
                          }, null, 8, ["icon"])
                        ]),
                        default: withCtx(() => [
                          createVNode(VListItemTitle, null, {
                            default: withCtx(() => [
                              child.href ? (openBlock(), createElementBlock("div", _hoisted_1$r, [
                                createBaseVNode("a", {
                                  href: child.href,
                                  target: "_blank",
                                  style: { "text-decoration": "none" }
                                }, toDisplayString(child.text), 9, _hoisted_2$h)
                              ])) : (openBlock(), createElementBlock("div", _hoisted_3$9, toDisplayString(child.text), 1))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["density", "color", "to"]);
                    }), 128))
                  ]),
                  _: 2
                }, 1032, ["value", "prepend-icon"])) : item.text ? (openBlock(), createBlock(VListItem, {
                  density: $props.listItemDensity,
                  color: $props.listItemColor,
                  key: index2,
                  link: "",
                  to: item.link
                }, {
                  prepend: withCtx(() => [
                    createVNode(VIcon, {
                      icon: item.icon
                    }, null, 8, ["icon"])
                  ]),
                  default: withCtx(() => [
                    createVNode(VListItemTitle, {
                      textContent: toDisplayString(item.text)
                    }, null, 8, ["textContent"])
                  ]),
                  _: 2
                }, 1032, ["density", "color", "to"])) : createCommentVNode("", true)
              ], 64);
            }), 256))
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["color", "modelValue"])
  ]);
}
const AppBar = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["render", _sfc_render$1a], ["__scopeId", "data-v-1c51e6c4"]]);
const _sfc_main$19 = {
  props: {
    /**
     * Menu links
     */
    menu: {
      type: Array,
      default: () => []
    }
  },
  inject: [],
  data() {
    return {
      leftPadding: "padding-left: 0px"
    };
  },
  computed: {
    getLeftPadding() {
      if (this.$store.getDrawer) {
        this.leftPadding = "padding-left: 256px";
      } else {
        this.leftPadding = "padding-left: 0px";
      }
      return this.leftPadding;
    }
  },
  created() {
    if (this.$store.getDrawer) {
      this.leftPadding = "padding-left: 256px";
    } else {
      this.leftPadding = "padding-left: 0px";
    }
  }
};
const _hoisted_1$q = ["href", "to", "target", "textContent"];
const _hoisted_2$g = { class: "font-weight-light pt-sm-0 text-center" };
function _sfc_render$19(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VFooter, null, {
    default: withCtx(() => [
      createVNode(VRow, {
        style: normalizeStyle($options.getLeftPadding),
        align: "center",
        "no-gutters": ""
      }, {
        default: withCtx(() => [
          createVNode(VCol, null, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "left")
            ]),
            _: 3
          }),
          (openBlock(true), createElementBlock(Fragment, null, renderList($props.menu, (item, i) => {
            return openBlock(), createBlock(VCol, {
              key: i,
              class: "text-center mb-sm-0",
              cols: "auto"
            }, {
              default: withCtx(() => [
                createBaseVNode("a", {
                  href: item.href,
                  to: item.link,
                  class: "px-3 grey--text text--darken-3",
                  target: item.href ? "_blank" : "_self",
                  textContent: toDisplayString(item.text)
                }, null, 8, _hoisted_1$q)
              ]),
              _: 2
            }, 1024);
          }), 128)),
          createVNode(VSpacer, { class: "hidden-xs-and-down" }),
          createVNode(VCol, {
            cols: "12",
            sm: "auto"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2$g, [
                renderSlot(_ctx.$slots, "right")
              ])
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["style"])
    ]),
    _: 3
  });
}
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["render", _sfc_render$19]]);
const _sfc_main$18 = {
  setup() {
    const { lgAndUp } = useDisplay();
    return { lgAndUp };
  },
  props: {
    /**
     * Positions: 'top' | 'end' | 'bottom' | 'start' | 'left' | 'right'
     */
    location: {
      type: String,
      default: "left"
    },
    /**
     * Width of the aside
     */
    width: {
      type: Number,
      default: 400
    }
  },
  data() {
    return {
      opened: false
    };
  },
  methods: {
    handleClose() {
      this.opened = false;
    },
    handleUpdate(newContent) {
      if (newContent instanceof Object && newContent.hasOwnProperty("hasContent") && newContent.hasContent) {
        this.opened = true;
      } else {
        this.opened = false;
      }
    }
  }
};
const _hoisted_1$p = { class: "pa-4" };
const _hoisted_2$f = { class: "d-flex align-center" };
const _hoisted_3$8 = { class: "h1" };
const _hoisted_4$7 = { class: "content" };
function _sfc_render$18(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_portal_target = resolveComponent("portal-target");
  return openBlock(), createBlock(VNavigationDrawer, {
    "disable-resize-watcher": "",
    location: $props.location,
    width: $props.width,
    modelValue: $data.opened,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.opened = $event)
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1$p, [
        createBaseVNode("div", _hoisted_2$f, [
          createBaseVNode("h3", _hoisted_3$8, [
            createVNode(_component_portal_target, { name: "aside-title" })
          ]),
          createVNode(VBtn, {
            class: "close",
            icon: "",
            onClick: $options.handleClose
          }, {
            default: withCtx(() => [
              createVNode(VIcon, null, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("mdi-close")
                ])),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        createBaseVNode("div", _hoisted_4$7, [
          createVNode(_component_portal_target, {
            name: "aside-content",
            onChange: $options.handleUpdate
          }, null, 8, ["onChange"])
        ])
      ])
    ]),
    _: 1
  }, 8, ["location", "width", "modelValue"]);
}
const Aside = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["render", _sfc_render$18], ["__scopeId", "data-v-565cbf8f"]]);
const _sfc_main$17 = {
  data() {
    return {
      title: null,
      message: null
    };
  },
  computed: {
    dialog: {
      get() {
        const confirmObject = this.$store.getModule("messages").confirmObject;
        if (confirmObject) {
          this.title = confirmObject.title;
          this.message = confirmObject.message;
          return true;
        }
        return false;
      },
      set(bool) {
        this.cancel();
        return bool;
      }
    }
  },
  methods: {
    agree() {
      this.$store.getModule("messages").agree();
    },
    cancel() {
      this.$store.getModule("messages").cancel();
    }
  }
};
function _sfc_render$17(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VDialog, {
    modelValue: $options.dialog,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.dialog = $event),
    "max-width": "500"
  }, {
    default: withCtx(() => [
      createVNode(VCard, null, {
        default: withCtx(() => [
          createVNode(VCardTitle, { class: "display-0" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString($data.title), 1)
            ]),
            _: 1
          }),
          createVNode(VCardText, null, {
            default: withCtx(() => [
              createTextVNode(toDisplayString($data.message), 1)
            ]),
            _: 1
          }),
          createVNode(VCardActions, null, {
            default: withCtx(() => [
              createVNode(VSpacer),
              createVNode(VBtn, {
                color: "red darken-1",
                text: "",
                onClick: $options.agree
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("i18n.confirm.yes")), 1)
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(VBtn, {
                color: "green darken-1",
                text: "",
                onClick: $options.cancel
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("i18n.confirm.no")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
const Confirm = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["render", _sfc_render$17]]);
const _sfc_main$16 = {
  inject: [],
  components: {
    Confirm
  },
  computed: {
    snackbar() {
      return this.$store.getModule("messages").getSnackbar;
    }
  }
};
const _hoisted_1$o = { style: { "min-width": "350px", "border": "none" } };
const _hoisted_2$e = {
  width: "15%",
  style: { "border": "none", "padding-left": "5px" }
};
const _hoisted_3$7 = { style: { "border": "none" } };
const _hoisted_4$6 = {
  key: 0,
  class: "mb-1"
};
const _hoisted_5$5 = ["innerHTML"];
const _hoisted_6$5 = {
  width: "10%",
  style: { "border": "none" },
  align: "right"
};
function _sfc_render$16(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_confirm = resolveComponent("confirm");
  return openBlock(), createElementBlock("div", null, [
    createVNode(VSnackbar, {
      modelValue: $options.snackbar.visible,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $options.snackbar.visible = $event),
      class: normalizeClass($options.snackbar.class),
      location: $options.snackbar.location,
      color: $options.snackbar.color,
      timeout: $options.snackbar.timeout,
      variant: $options.snackbar.variant,
      rounded: $options.snackbar.rounded,
      transition: false,
      "multi-line": true,
      vertical: "",
      style: { "padding": "0" }
    }, {
      default: withCtx(() => [
        createVNode(VLayout, { class: "align-center" }, {
          default: withCtx(() => [
            createBaseVNode("table", _hoisted_1$o, [
              createBaseVNode("tbody", null, [
                createBaseVNode("tr", null, [
                  createBaseVNode("td", _hoisted_2$e, [
                    createVNode(VIcon, {
                      class: "pr-3",
                      size: "x-large"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString($options.snackbar.icon), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("td", _hoisted_3$7, [
                    $options.snackbar.title ? (openBlock(), createElementBlock("div", _hoisted_4$6, [
                      createBaseVNode("strong", null, toDisplayString(_ctx.$t($options.snackbar.title)), 1)
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", {
                      innerHTML: $options.snackbar.text
                    }, null, 8, _hoisted_5$5)
                  ]),
                  createBaseVNode("td", _hoisted_6$5, [
                    createVNode(VBtn, {
                      variant: "text",
                      style: { "padding": "0" },
                      "min-width": "35",
                      onClick: _cache[0] || (_cache[0] = ($event) => $options.snackbar.visible = false)
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { size: "x-large" }, {
                          default: withCtx(() => _cache[2] || (_cache[2] = [
                            createTextVNode("mdi-close")
                          ])),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue", "class", "location", "color", "timeout", "variant", "rounded"]),
    createVNode(_component_confirm)
  ]);
}
const Messages = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["render", _sfc_render$16]]);
const Resource = {
  inject: [],
  props: {
    /**
     * Name of the resource to use.
     * Required for good label localization and context action activators.
     * Default behavior is to fetch it from router context.
     */
    resource: {
      type: String,
      default() {
        return useRoute().meta.resource;
      }
    }
  },
  computed: {
    translatable() {
      return useRoute().meta.translatable;
    },
    currentModule() {
      return useRoute().meta.module;
    },
    currentResource() {
      return this.$admin.getResource(this.resource);
    }
  },
  methods: {
    async hasAction(action) {
      let result = await this.currentResource.canAction(action);
      return result;
    },
    hasRoute(route) {
      return !this.currentResource.routes || this.currentResource.routes.includes(route);
    }
  }
};
const Page = {
  mixins: [Resource],
  props: {
    /**
     * Optional H1 title of the page shown on the left of top header
     */
    title: String
  },
  computed: {
    item() {
      return this.$store.getResource(this.resource).item;
    }
  }
};
const _sfc_main$15 = {
  mixins: [Page],
  props: {
    border: Boolean,
    disableCard: Boolean,
    disableTitle: Boolean
  }
};
const _hoisted_1$n = { key: 0 };
const _hoisted_2$d = { class: "d-flex align-center mb-2" };
const _hoisted_3$6 = {
  key: 0,
  class: "h1"
};
const _hoisted_4$5 = { key: 1 };
const _hoisted_5$4 = { class: "d-flex align-center mb-2" };
const _hoisted_6$4 = {
  key: 0,
  class: "h1 mb-1"
};
function _sfc_render$15(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.disableCard ? (openBlock(), createElementBlock("div", _hoisted_1$n, [
    createBaseVNode("div", _hoisted_2$d, [
      !$props.disableTitle ? (openBlock(), createElementBlock("h1", _hoisted_3$6, toDisplayString(_ctx.title), 1)) : createCommentVNode("", true),
      createVNode(VSpacer),
      renderSlot(_ctx.$slots, "actions")
    ]),
    renderSlot(_ctx.$slots, "default")
  ])) : (openBlock(), createElementBlock("div", _hoisted_4$5, [
    createVNode(VCard, {
      variant: "flat",
      border: $props.border
    }, {
      default: withCtx(() => [
        createVNode(VCardText, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_5$4, [
              !$props.disableTitle ? (openBlock(), createElementBlock("h1", _hoisted_6$4, toDisplayString(_ctx.title), 1)) : createCommentVNode("", true),
              createVNode(VSpacer),
              renderSlot(_ctx.$slots, "actions")
            ]),
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["border"])
  ]));
}
const ActionPage = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["render", _sfc_render$15]]);
const layouts = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionPage,
  AppBar,
  Aside,
  Footer,
  Layout,
  Messages
}, Symbol.toStringTag, { value: "Module" }));
const Source = {
  mixins: [Resource],
  props: {
    /**
     * Property of resource for fetching the value to show.
     * Support dot notation for nested object.
     */
    source: String
  }
};
const Field$1 = {
  mixins: [Source],
  inject: {
    showState: { default: void 0 }
  },
  props: {
    /**
     * Override default item injected by `VaShow`.
     */
    item: null
  },
  computed: {
    record() {
      return this.item || (this.showState ? this.showState.item : null);
    },
    value() {
      return typeof this.record === "string" || !this.source ? this.record : get(this.record, this.source);
    }
  }
};
const _sfc_main$14 = {
  mixins: [Field$1],
  inject: [],
  props: {
    /**
     * Override default label behavior.
     * Default is to get the localized VueI18n label from both resource and property source.
     */
    label: String,
    /**
     * Override default source key as translated label.
     */
    labelKey: String,
    /**
     * Type of field to use. Not used if you use default slot for advanced custom needs.
     */
    type: {
      type: String,
      default: "text"
    }
  },
  computed: {
    getLabel() {
      return this.label || this.$admin.getSourceLabel(this.resource, this.labelKey || this.source);
    }
  }
};
const _hoisted_1$m = ["label"];
function _sfc_render$14(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.record ? (openBlock(), createElementBlock("div", {
    key: 0,
    label: $options.getLabel,
    class: "va-input"
  }, [
    renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps({ item: _ctx.record, value: _ctx.value })), () => [
      (openBlock(), createBlock(resolveDynamicComponent(`va-${$props.type}-field`), mergeProps({
        source: _ctx.source,
        resource: _ctx.resource,
        item: _ctx.record
      }, _ctx.$attrs), null, 16, ["source", "resource", "item"]))
    ])
  ], 8, _hoisted_1$m)) : createCommentVNode("", true);
}
const Field = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["render", _sfc_render$14]]);
const InputWrapper = {
  props: {
    /**
     * Specific case of parent resource for array input.
     */
    parentSource: String,
    /**
     * Prepends an icon to the component. Must be a valid MDI.
     */
    prependIcon: String,
    /**
     * Appends an icon to the component. Must be a valid MDI.
     */
    appendIcon: String,
    /**
     * Prepends an icon to the component. Must be a valid MDI.
     */
    prependInnerIcon: String,
    /**
     * Appends an icon to the component. Must be a valid MDI.
     */
    appendInnerIcon: String,
    /**
     * Hint text.
     */
    hint: String,
    /**
     * Hides hint and validation errors. When set to auto messages will be rendered only if there's a message (hint, error message, counter value etc) to display.
     */
    hideDetails: [Boolean, String],
    /**
     * Reduces the input height.
     */
    density: {
      type: String,
      default: () => config.density
    },
    /**
     * Add default required client side rule.
     */
    required: Boolean,
    /**
     * Override default label behavior.
     * Default is to get the localized VueI18n label from both resource and property source.
     */
    label: String,
    /**
     * Override default source key as translated label.
     */
    labelKey: String,
    /**
     * Placeholder if input support it.
     */
    placeholder: String,
    /**
     * Mark this input as clearable.
     */
    clearable: Boolean,
    /**
     * Specific index of field in case of inside array of inputs, aka VaArrayInput.
     * Use it with `parentSource` prop in order to update the value at a good place in the form model.
     */
    index: Number,
    /**
     * List of custom error validation messages to show as hint
     */
    errorMessages: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    getLabel() {
      if (this.label) {
        return this.label;
      }
      if (!this.labelKey && !this.source) {
        return "";
      }
      let source = this.labelKey || this.source;
      if (this.parentSource) {
        source = `${this.parentSource}.${this.source}`;
      }
      return this.$admin.getSourceLabel(this.resource, source);
    }
  }
};
const _sfc_main$13 = {
  mixins: [Source, InputWrapper],
  props: {
    /**
     * Puts the input in an error state and passes through custom error messages.
     */
    errorMessages: Array
  }
};
function _sfc_render$13(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VInput, {
    label: _ctx.getLabel,
    hint: _ctx.hint,
    "error-messages": $props.errorMessages,
    "prepend-icon": _ctx.prependIcon,
    "append-icon": _ctx.appendIcon,
    appendInnerIcon: _ctx.appendInnerIcon,
    prependInnerIcon: _ctx.prependInnerIcon,
    "hide-details": _ctx.hideDetails,
    density: _ctx.density
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["label", "hint", "error-messages", "prepend-icon", "append-icon", "appendInnerIcon", "prependInnerIcon", "hide-details", "density"]);
}
const Input$1 = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["render", _sfc_render$13]]);
class EventBus {
  constructor() {
    this.events = {};
  }
  // Subscribe to the event
  on(event2, listener) {
    if (!this.events[event2]) {
      this.events[event2] = [];
    }
    this.events[event2].push(listener);
  }
  // Subscribe to the event only once
  once(event2, listener) {
    const onceListener = (...args) => {
      listener(...args);
      this.off(event2, onceListener);
    };
    this.on(event2, onceListener);
  }
  // Unsubscribe from event
  off(event2, listener) {
    if (!this.events[event2]) return;
    this.events[event2] = this.events[event2].filter((fn) => fn !== listener);
  }
  // Trigger the event
  emit(event2, ...args) {
    if (!this.events[event2]) return;
    this.events[event2].forEach((listener) => listener(...args));
  }
}
const eventBus = new EventBus();
const Search = {
  props: {
    /**
     * Internal active filter.
     * Sent to your data provider inside `filter` params.
     */
    filter: {
      type: Object,
      default: () => {
      }
    },
    /**
     * List of fields to select for API side. Support dot notation for nested fields.
     * Sent to your data provider inside `fields` params.
     */
    fields: {
      type: Array,
      default: () => []
    },
    /**
     * List of sorted fields, can be multiple.
     * Sent to your data provider inside `sort` params.
     */
    sortBy: {
      type: Array,
      default: () => []
    },
    /**
     * List of sort state for each sorted fields, only `boolean`, `true` if sorted as `DESC`.
     * Sent to your data provider inside `sort` params.
     */
    sortDesc: {
      type: Array,
      default: () => []
    },
    /**
     * Related resources to include within current resource for API side. Allow eager-loading on demand.
     * Sent to your data provider inside `include` params.
     */
    include: {
      type: [Array, Object],
      default: () => []
    },
    /**
     * Maximum number of items to show in the list for each page.
     * Sent to your data provider inside `pagination.perPage` params.
     */
    itemsPerPage: {
      type: Number,
      default() {
        return config.list.itemsPerPage;
      }
    },
    /**
     * Disable items per page on query, forced on server side.
     * Note at `itemsPerPage` is still necessary for proper client-side pager calculation.
     */
    disableItemsPerPage: {
      type: Boolean,
      default() {
        return null;
      }
    }
  }
};
const _sfc_main$12 = {
  mixins: [Source],
  props: {
    value: {
      default: null
    },
    type: {
      type: String,
      required: true,
      validator: (v) => [
        "text",
        "number",
        "boolean",
        "date",
        "rating",
        "select",
        "auto-complete",
        "autoComplete"
      ].includes(v)
    },
    /**
     * Override default label behavior.
     */
    label: String,
    /**
     * 
     */
    returnObject: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      input: null
    };
  },
  watch: {
    value: {
      handler(val) {
        this.input = val;
      },
      immediate: true
    },
    input() {
      this.debounceInput();
    }
  },
  methods: {
    debounceInput: debounce(function() {
      this.$emit("input", this.input);
    }, 200)
  }
};
function _sfc_render$12(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent(`va-${$props.type}-input`), mergeProps({
    resource: _ctx.resource,
    source: _ctx.source,
    label: $props.label
  }, _ctx.$attrs, {
    "hide-details": "",
    filled: false,
    "small-chips": "",
    variant: "outlined",
    modelValue: $data.input,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.input = $event),
    color: "primary",
    "return-object": $props.returnObject
  }), null, 16, ["resource", "source", "label", "modelValue", "return-object"]);
}
const InputFilter = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["render", _sfc_render$12]]);
const _sfc_main$11 = {
  inject: {
    listState: {
      default: { items: [] }
    }
  },
  setup() {
    const { lgAndUp, mdAndUp } = useDisplay();
    return { lgAndUp, mdAndUp };
  },
  components: {
    InputFilter
  },
  props: {
    filters: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      filterIds: {}
    };
  },
  mounted() {
    const { filter } = this.$route.query;
    if (filter) {
      this.filterIds = this.parseFilterQuery(filter);
    }
  },
  methods: {
    // @change="setFilter($event, field.filterId, source)"
    // :filter="getFilters(field.filters)"
    setFilter(value, filterId) {
      if (filterId) {
        this.filterIds[filterId] = value;
      }
      return;
    },
    getFilters(filters) {
      let filterObject = {};
      if (filters) {
        if (size(this.filterIds) > 0) {
          for (var key in this.filterIds) {
            if (filters.includes(key)) {
              filterObject[key] = Array.isArray(this.filterIds[key]) ? this.filterIds[key].join() : this.filterIds[key];
            }
          }
        }
      }
      return filterObject;
    },
    clearAll() {
      for (var key in this.filterIds) {
        this.filterIds[key] = this.modelValue[key];
      }
    },
    update(item, value) {
      this.setFilter(value, item.key ? item.key : item.source);
      let input = {
        ...this.modelValue,
        [item.source]: value
      };
      localStorage.setItem("listQuery", JSON.stringify(this.$route.query));
      this.$emit("update:modelValue", input);
    },
    parseFilterQuery(filters) {
      try {
        var data = JSON.parse(filters);
        if (data && typeof data === "object") {
          return data;
        }
      } catch (e) {
      }
      return false;
    }
  }
};
const _hoisted_1$l = { id: "va-list-filters" };
const _hoisted_2$c = { class: "align-center" };
const _hoisted_3$5 = { class: "align-center" };
function _sfc_render$11(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_input_filter = resolveComponent("input-filter");
  return openBlock(), createElementBlock("form", null, [
    createBaseVNode("div", _hoisted_1$l, [
      $setup.lgAndUp || $setup.mdAndUp ? (openBlock(), createBlock(VRow, {
        key: 0,
        class: "pt-4 pl-3 pb-8 pr-3"
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($props.filters, (item, index2) => {
            return openBlock(), createElementBlock(Fragment, {
              key: "filter_" + index2
            }, [
              item.enabled ? (openBlock(), createBlock(VCol, {
                key: 0,
                cols: item.col,
                class: "pb-0 pt-4",
                style: { "min-width": "110px" }
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_2$c, [
                    createBaseVNode("div", null, [
                      renderSlot(_ctx.$slots, item.source, mergeProps({
                        source: item.source,
                        label: item.label,
                        ref_for: true
                      }, item.attributes, {
                        value: $props.modelValue[item.source]
                      }), () => [
                        (openBlock(), createBlock(_component_input_filter, mergeProps({
                          type: item.type,
                          key: $props.modelValue[item.key] ? $props.modelValue[item.key] : item.source,
                          source: item.source,
                          label: item.label,
                          ref_for: true
                        }, item.attributes, {
                          filter: $options.getFilters(item.filters),
                          value: $props.modelValue[item.source],
                          clearable: "",
                          "onClick:clear": $options.clearAll,
                          "onUpdate:modelValue": (val) => $options.update(item, val),
                          "return-object": item.returnObject
                        }), null, 16, ["type", "source", "label", "filter", "value", "onClick:clear", "onUpdate:modelValue", "return-object"]))
                      ])
                    ])
                  ])
                ]),
                _: 2
              }, 1032, ["cols"])) : createCommentVNode("", true)
            ], 64);
          }), 128))
        ]),
        _: 3
      })) : (openBlock(), createBlock(VRow, {
        key: 1,
        class: "pt-8 pl-3 pb-8 pr-3"
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($props.filters, (item, index2) => {
            return openBlock(), createBlock(VCol, {
              class: "pb-1 pt-1",
              cols: "12",
              key: "filter_" + index2
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_3$5, [
                  createBaseVNode("div", null, [
                    renderSlot(_ctx.$slots, item.source, mergeProps({
                      source: item.source,
                      label: item.label,
                      ref_for: true
                    }, item.attributes, {
                      value: $props.modelValue[item.source]
                    }), () => [
                      (openBlock(), createBlock(_component_input_filter, mergeProps({
                        type: item.type,
                        key: $props.modelValue[item.key] ? $props.modelValue[item.key] : item.source,
                        source: item.source,
                        label: item.label,
                        ref_for: true
                      }, item.attributes, {
                        filter: $options.getFilters(item.filters),
                        value: $props.modelValue[item.source],
                        modelValue: $props.modelValue[item.source],
                        "onUpdate:modelValue": [($event) => $props.modelValue[item.source] = $event, (val) => $options.update(item, val)],
                        clearable: "",
                        "onClick:clear": $options.clearAll
                      }), null, 16, ["type", "source", "label", "filter", "value", "modelValue", "onUpdate:modelValue", "onClick:clear"]))
                    ])
                  ])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        _: 3
      }))
    ])
  ]);
}
const FormFilter = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["render", _sfc_render$11]]);
const GET_LIST = "getList";
const GET_LIST_ALL = "getListAll";
const GET_MANY = "getMany";
const GET_ONE = "getOne";
const CREATE = "create";
const UPDATE = "update";
const UPDATE_ROW = "updateRow";
const UPDATE_MANY = "updateMany";
const DELETE = "delete";
const DELETE_MANY = "deleteMany";
const COPY = "copy";
const COPY_MANY = "copyMany";
const GET_TREE = "getTree";
const GET_NODES = "getNodes";
const MOVE_NODE = "moveNode";
const methods = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  COPY,
  COPY_MANY,
  CREATE,
  DELETE,
  DELETE_MANY,
  GET_LIST,
  GET_LIST_ALL,
  GET_MANY,
  GET_NODES,
  GET_ONE,
  GET_TREE,
  MOVE_NODE,
  UPDATE,
  UPDATE_MANY,
  UPDATE_ROW
}, Symbol.toStringTag, { value: "Module" }));
const resource = defineStore("resource", {
  state: () => {
    return {
      i18n: null,
      provider: null,
      resource: null,
      sort: null,
      item: null,
      row: null,
      formItem: null,
      dialogItem: null
    };
  },
  getters: {
    getItem() {
      return this.item;
    },
    getFormItem() {
      return this.formItem;
    },
    getRow() {
      return this.row;
    },
    getSort() {
      return this.sort;
    },
    getDialogItem() {
      return this.dialogItem;
    }
  },
  actions: {
    init(params) {
      this.i18n = params.i18n;
      this.provider = params.provider;
      this.resource = params.resource;
    },
    setSort(item) {
      this.sort = item;
    },
    setItem(item) {
      this.item = item;
    },
    setFormItem(item) {
      this.formItem = item;
    },
    removeItem() {
      this.item = null;
    },
    setRow(row) {
      this.row = row;
    },
    removeRow() {
      this.row = null;
    },
    setDialogItem(item) {
      this.dialogItem = item;
    },
    setResource(name) {
      const parts = name.includes("_") ? name.split("_") : [null, name];
      const moduleName = parts[0];
      const resourceName = parts[1];
      this.resource = { module: moduleName, name: resourceName };
    },
    removeDialogItem() {
      this.dialogItem = null;
    },
    async getList(params) {
      const store2 = store$1();
      const api2 = store2.getModule("api");
      const auth2 = store2.getModule("auth");
      const messages2 = store2.getModule("messages");
      try {
        if (!this.provider) {
          throw new Error("No data provider defined");
        }
        if (!this.provider["getList"]) {
          throw new Error(`Data provider action getList not implemented`);
        }
        api2.setLoading(true, { root: true });
        let response = await this.provider.getList(this.resource.module, this.resource.name, {
          locale: this.locale,
          ...params
        });
        if (response && response["data"] && response["data"]["data"]) {
          this.item = response.data.data;
        }
        api2.setLoading(false, { root: true });
        return Promise.resolve(response);
      } catch (e) {
        api2.setLoading(false, { root: true });
        auth2.checkError(e, { root: true });
        messages2.show({ type: "error", message: e.message }, { root: true });
        return Promise.reject(e);
      }
    },
    async getOne(params) {
      const store2 = store$1();
      try {
        if (!this.provider) {
          throw new Error("No data provider defined");
        }
        if (!this.provider["getOne"]) {
          throw new Error(`Data provider action getOne not implemented`);
        }
        let response = await this.provider.getOne(this.resource.module, this.resource.name, {
          locale: this.locale,
          ...params
        });
        return Promise.resolve(response);
      } catch (e) {
        store2.getModule("messages").show({ type: "error", message: e.message }, { root: true });
        store2.getModule("auth").checkError(e, { root: true });
        return Promise.reject(e);
      }
    },
    async getListAll(params) {
      const store2 = store$1();
      try {
        if (!this.provider) {
          throw new Error("No data provider defined");
        }
        if (!this.provider["getListAll"]) {
          throw new Error(`Data provider action getListAll not implemented`);
        }
        let response = await this.provider.getListAll(this.resource.module, this.resource.name, {
          locale: this.locale,
          ...params
        });
        return Promise.resolve(response);
      } catch (e) {
        store2.getModule("messages").show({ type: "error", message: e.message }, { root: true });
        store2.getModule("auth").checkError(e, { root: true });
        return Promise.reject(e);
      }
    },
    async getMany(params) {
      const store2 = store$1();
      try {
        if (!this.provider) {
          throw new Error("No data provider defined");
        }
        if (!this.provider["getMany"]) {
          throw new Error(`Data provider action getMany not implemented`);
        }
        let response = await this.provider.getMany(this.resource.module, this.resource.name, {
          locale: this.locale,
          ...params
        });
        return Promise.resolve(response);
      } catch (e) {
        store2.getModule("messages").show({ type: "error", message: e.message }, {
          root: true
        });
        store2.getModule("auth").checkError(e, { root: true });
        return Promise.reject(e);
      }
    },
    async create(params) {
      const store2 = store$1();
      try {
        if (!this.provider) {
          throw new Error("No data provider defined");
        }
        if (!this.provider["create"]) {
          throw new Error(`Data provider action create not implemented`);
        }
        let response = await this.provider.create(this.resource.module, this.resource.name, {
          locale: this.locale,
          ...params
        });
        return Promise.resolve(response);
      } catch (e) {
        store2.getModule("messages").show({ type: "error", message: e.message }, { root: true });
        store2.getModule("auth").checkError(e, { root: true });
        return Promise.reject(e);
      }
    },
    async update(params) {
      const store2 = store$1();
      try {
        if (!this.provider) {
          throw new Error("No data provider defined");
        }
        if (!this.provider["update"]) {
          throw new Error(`Data provider action update not implemented`);
        }
        let response = await this.provider.update(this.resource.module, this.resource.name, {
          locale: this.locale,
          ...params
        });
        return Promise.resolve(response);
      } catch (e) {
        store2.getModule("messages").show({ type: "error", message: e.message }, { root: true });
        store2.getModule("auth").checkError(e, { root: true });
        return Promise.reject(e);
      }
    },
    async updateRow(params) {
      const store2 = store$1();
      try {
        if (!this.provider) {
          throw new Error("No data provider defined");
        }
        if (!this.provider["updateRow"]) {
          throw new Error(`Data provider action updateRow not implemented`);
        }
        let response = await this.provider.updateRow(this.resource.module, this.resource.name, {
          locale: this.locale,
          ...params
        });
        return Promise.resolve(response);
      } catch (e) {
        store2.getModule("messages").show({ type: "error", message: e.message }, { root: true });
        store2.getModule("auth").checkError(e, { root: true });
        return Promise.reject(e);
      }
    },
    async updateMany(params) {
      const store2 = store$1();
      try {
        if (!this.provider) {
          throw new Error("No data provider defined");
        }
        if (!this.provider["updateMany"]) {
          throw new Error(`Data provider action updateMany not implemented`);
        }
        let response = await this.provider.updateMany(this.resource.module, this.resource.name, {
          locale: this.locale,
          ...params
        });
        return Promise.resolve(response);
      } catch (e) {
        store2.getModule("messages").show({ type: "error", message: e.message }, { root: true });
        store2.getModule("auth").checkError(e, { root: true });
        return Promise.reject(e);
      }
    },
    async delete(params) {
      const store2 = store$1();
      try {
        if (!this.provider) {
          throw new Error("No data provider defined");
        }
        if (!this.provider["delete"]) {
          throw new Error(`Data provider action delete not implemented`);
        }
        let response = await this.provider.delete(this.resource.module, this.resource.name, {
          locale: this.locale,
          ...params
        });
        this.item = null;
        return Promise.resolve(response);
      } catch (e) {
        store2.getModule("messages").show({ type: "error", message: e.message }, { root: true });
        store2.getModule("auth").checkError(e, { root: true });
        return Promise.reject(e);
      }
    },
    async deleteMany(params) {
      const store2 = store$1();
      try {
        if (!this.provider) {
          throw new Error("No data provider defined");
        }
        if (!this.provider["deleteMany"]) {
          throw new Error(`Data provider action deleteMany not implemented`);
        }
        let response = await this.provider.deleteMany(this.resource.module, this.resource.name, {
          locale: this.locale,
          ...params
        });
        this.item = null;
        return Promise.resolve(response);
      } catch (e) {
        store2.getModule("messages").show({ type: "error", message: e.message }, { root: true });
        store2.getModule("auth").checkError(e, { root: true });
        return Promise.reject(e);
      }
    },
    async copy(params) {
      const store2 = store$1();
      try {
        if (!this.provider) {
          throw new Error("No data provider defined");
        }
        if (!this.provider["copy"]) {
          throw new Error(`Data provider action copy not implemented`);
        }
        let response = await this.provider.copy(this.resource.module, this.resource.name, {
          locale: this.locale,
          ...params
        });
        return Promise.resolve(response);
      } catch (e) {
        store2.getModule("messages").show({ type: "error", message: e.message }, { root: true });
        store2.getModule("auth").checkError(e, { root: true });
        return Promise.reject(e);
      }
    },
    async copyMany(params) {
      const store2 = store$1();
      try {
        if (!this.provider) {
          throw new Error("No data provider defined");
        }
        if (!this.provider["copyMany"]) {
          throw new Error(`Data provider action copyMany not implemented`);
        }
        let response = await this.provider.copyMany(this.resource.module, this.resource.name, {
          locale: this.locale,
          ...params
        });
        return Promise.resolve(response);
      } catch (e) {
        store2.getModule("messages").show({ type: "error", message: e.message }, { root: true });
        store2.getModule("auth").checkError(e, { root: true });
        return Promise.reject(e);
      }
    },
    async refresh() {
      const store2 = store$1();
      store2.getModule("api").setRefresh(true);
    },
    showSuccess({ action, params }) {
      const store2 = store$1();
      let messages2 = {
        create: () => i18n.global.t("i18n.messages.created", {
          resource: getName(1)
        }),
        update: () => i18n.global.t("i18n.messages.updated", {
          resource: this.resource.getName(1),
          id: params.id
        }),
        updateRow: () => i18n.global.t("i18n.messages.updated", {
          resource: this.resource.getName(1),
          id: params.id
        }),
        updateMany: () => i18n.global.t("i18n.messages.updatedMany", {
          resource: this.resource.getName(params.ids.length).toLowerCase(),
          count: params.ids.length
        }),
        delete: () => i18n.global.t("i18n.messages.deleted", {
          resource: this.resource.getName(1),
          id: params.id
        }),
        deleteMany: () => i18n.global.t("i18n.messages.deletedMany", {
          resource: this.resource.getName(params.ids.length).toLowerCase(),
          count: params.ids.length
        }),
        copy: () => i18n.global.t("i18n.messages.copied", {
          resource: this.resource.getName(1),
          id: params.id
        }),
        copyMany: () => i18n.global.t("i18n.messages.copiedMany", {
          resource: this.resource.getName(params.ids.length).toLowerCase(),
          count: params.ids.length
        }),
        moveNode: () => i18n.global.t("i18n.messages.moved", {
          resource: this.resource.getName(1),
          id: params.id
        })
      };
      if (messages2[action]) {
        store2.getModule("messages").show({ type: "success", message: messages2[action]() }, {
          root: true
        });
      }
    },
    showError(message) {
      store.getModule("messages").show({ type: "error", message }, {
        root: true
      });
    }
  }
});
const useListStore = defineStore("list", {
  state: () => ({
    options: reactive({
      page: 1,
      itemsPerPage: 10,
      sortBy: [],
      sortDesc: [],
      groupBy: [],
      groupDesc: [],
      multiSort: false,
      mustSort: false,
      filter: {}
    })
  }),
  actions: {
    updateOptions(newOptions) {
      Object.assign(this.options, newOptions);
    }
  }
});
const _sfc_main$10 = {
  mixins: [Resource, Search],
  emits: ["listState", "update:options", "update:filter", "action"],
  setup() {
    const { lgAndUp, mdAndUp } = useDisplay();
    return { useResource: resource(), useListStore: useListStore(), lgAndUp, mdAndUp };
  },
  components: {
    FormFilter,
    Draggable
  },
  provide() {
    return {
      listState: this.listState
    };
  },
  props: {
    /**
     * Layout class
     */
    class: {
      type: String,
      default() {
        return "mb-0";
      }
    },
    border: {
      type: Boolean,
      default: false
    },
    /**
     * Grid title
     */
    title: {
      type: String,
      default() {
        return null;
      }
    },
    /**
     * Exposed filters, editable through advanced filter form, update URL query string if not disabled.
     * Sent to your data provider inside `filter` params.
     * Use specific `alwaysOn` property for each filter you want to be visible and not removable.
     * Valid properties are `source`, `type`, `label`, `alwaysOn`, `attributes`.
     */
    filters: {
      type: Array,
      default: () => []
    },
    /**
     * List of columns for each property of resource data.
     * Each column can be a simple string or a full object with advanced field properties.
     * Valid properties are `source`, `type`, `label`, `sortable`, `align`, `link`, `attributes`.
     */
    fields: {
      type: Array,
      default: () => []
    },
    /**
     * Hide head tag title
     */
    hideTitle: Boolean,
    /**
     * Hide all header toolbar, so neither filters nor any create or export actions.
     */
    hideHeader: {
      type: Boolean,
      default: null
    },
    /**
     * Hide bulk delete button
     */
    hideBulkDelete: Boolean,
    /**
     * Hide bulk copy button
     */
    hideBulkCopy: Boolean,
    /**
     * Disable ajax fetch
     */
    disableFetch: {
      type: Boolean,
      default: null
    },
    /**
     * Disable filters globally
     */
    disableFilters: {
      type: Boolean,
      default: null
    },
    /**
     * Disable settings button
     */
    disableSettings: {
      type: Boolean,
      default: null
    },
    /**
     * Editable create 
     */
    rowCreate: {
      type: Boolean,
      default: false
    },
    /**
     * Force disabling of create button, shown by default if create resource action available.
     */
    disableCreate: Boolean,
    /**
     * Disable create redirection. Will force create button to show.
     */
    disableCreateRedirect: Boolean,
    /**
     * Disable real time update of URL query string on any browsing action as pagination, sorting, filtering, etc.
     */
    disableQueryString: Boolean,
    /**
     * Add a default query strings for every list operation
     */
    defaultQueryString: {
      type: Object,
      default: null
    },
    /**
     * Disable actions column.
     */
    disableActions: Boolean,
    /**
     * Disable the global search.
     */
    disableGlobalSearch: {
      type: Boolean,
      default() {
        return null;
      }
    },
    disableItemsPerPage: {
      type: Boolean,
      default() {
        return null;
      }
    },
    /**
     * Key parameter of the global search query.
     */
    globalSearchQuery: {
      type: String,
      default: "q"
    },
    /**
     * Disable settings panel positioning row
     */
    disablePositioning: Boolean,
    /**
     * Disable settings panel visibility row
     */
    disableVisibility: Boolean,
    /**
     * Force enabling of create save dialog button
     */
    enableSaveDialog: Boolean,
    /**
     * Sets number of items per page
     */
    itemsPerPage: {
      type: Number,
      default() {
        return null;
      }
    }
  },
  data() {
    return {
      api: null,
      loaded: false,
      headers: [],
      toggleSettings: false,
      currentFilter: {},
      visibilities: {},
      filterabilities: {},
      selectItems: [],
      selectedHeaders: null,
      settingsKey: 0,
      sortData: {},
      listState: {
        resource: this.resource,
        loading: false,
        items: [],
        total: 0,
        selected: [],
        // options: {},
        reload: () => {
          this.fetchData();
          this.updateQuery();
        }
      }
    };
  },
  async created() {
    this.api = this.$store.getModule("api");
    this.headers = this.getHeadersMap();
    this.selectItems = this.headers.filter((f) => f.key !== "data-table-group");
    this.fillSettings();
    this.$store.getModule("api").setFields(this.getFields().filter((f) => f.source !== "data-table-group"));
  },
  async mounted() {
    await this.initFiltersFromQuery();
    this.loaded = true;
    if (!this.disableFetch) {
      this.fetchData();
    }
  },
  computed: {
    getTitle() {
      const parts = this.resource.includes("_") ? this.resource.split("_") : [null, this.resource];
      const module = parts[0];
      const resourceName = parts[1];
      let key = module ? `${module}.${resourceName}.title` : `${resourceName}.${resourceName}.title`;
      return this.title ? this.title : this.$t(key);
    },
    getHideHeaderValue() {
      if (this.hideHeader == null) {
        return config.list.hideHeader;
      }
      return this.hideHeader;
    },
    getDisableSettingsValue() {
      if (this.disableSettings == null) {
        return config.list.disableSettings;
      }
      return this.disableSettings;
    },
    getCurrentFilter() {
      let currentFilter = Object.keys(this.currentFilter).reduce((o, key) => {
        let value = this.currentFilter[key];
        return {
          ...o,
          ...(!isEmpty(value) || typeof value === "number" || typeof value === "boolean") && {
            [key]: value
          }
        };
      }, {});
      return currentFilter;
    },
    getFilters() {
      let filters = [];
      if (!this.getDisableGlobalSearchValue()) {
        filters = [
          {
            source: this.globalSearchQuery,
            enabled: this.getDisableGlobalSearchValue() ? false : true,
            label: this.$t("i18n.datatable.search"),
            attributes: { appendInnerIcon: "mdi-magnify" }
          }
        ];
      }
      let selectedFilters = {};
      for (let i = 0; i < this.selectedHeaders.length; i++) {
        selectedFilters[this.selectedHeaders[i].key] = this.selectedHeaders[i].filterable;
        if (this.selectedHeaders[i].type == "date" && this.selectedHeaders[i].filterable) {
          selectedFilters[this.selectedHeaders[i].key + "Start"] = true;
          selectedFilters[this.selectedHeaders[i].key + "End"] = true;
        }
      }
      let mappedFilters = [...filters, ...this.filters].map((f) => {
        return typeof f === "string" ? {
          source: f
        } : f;
      }).map((f) => {
        return {
          ...f,
          type: f.type || "text",
          enabled: f.source in selectedFilters ? selectedFilters[f.source] : f.enabled || false,
          key: f.key ? f.key : "",
          col: f.col || 2,
          label: f.label || this.$admin.getSourceLabel(this.resource, f.labelKey || f.source)
        };
      });
      return mappedFilters;
    }
  },
  watch: {
    filter: {
      handler(newVal) {
        this.currentFilter = newVal || {};
      },
      immediate: true,
      deep: true
    },
    "api.refresh"(newVal) {
      if (newVal) {
        this.fetchData();
      }
    },
    "useListStore.options": {
      handler(val) {
        this.$emit("update:options", val);
      },
      deep: true
    },
    "currentFilter": {
      handler(val) {
        this.fetchData();
        this.updateQuery();
        this.$emit("update:filter", val);
      },
      deep: true
    },
    selectedHeaders(newVal) {
      this.$store.getModule("api").setHeaders(newVal);
    }
  },
  methods: {
    updateVisibility(key, val) {
      let Self = this;
      this.headers.forEach(function(item, headerIndex) {
        if (Self.selectedHeaders.length == 0 && val == true && item.key == key) {
          item.visible = true;
          Self.selectedHeaders[0] = item;
        } else if (Self.selectedHeaders.length > 0) {
          Self.selectedHeaders.forEach(function(selectedItem, index2) {
            if (val == true && item.key == key) {
              item.visible = true;
              if (!Self.selectedHeaders.includes(item)) {
                Self.selectedHeaders.push(item);
              }
            }
            if (selectedItem.key == key && val == false) {
              Self.selectedHeaders.splice(index2, 1);
            }
          });
        }
      });
    },
    updateFilterability(key, val) {
      let Self = this;
      if (Self.selectedHeaders.length > 0) {
        Self.selectedHeaders.forEach(function(selectedItem, index2) {
          if (selectedItem.key == key) {
            selectedItem.filterable = val;
            Self.selectedHeaders[index2] = selectedItem;
          }
        });
      }
    },
    getHeadersMap() {
      let fields = this.getFields().map((field) => {
        let obj = {
          title: field.label,
          key: field.source == "data-table-group" ? "data-table-group" : field.source,
          type: field.type,
          width: typeof field.width == "undefined" ? "auto" : field.width,
          visible: typeof field.visible == "undefined" ? true : field.visible,
          filterable: typeof field.filterable == "undefined" ? true : field.filterable,
          sortable: field.sortable,
          align: field.align || this.getDefaultAlign(field)
        };
        if (typeof field.groupable !== "undefined") {
          obj["groupable"] = field.groupable;
        }
        return obj;
      });
      if (!this.disableActions) {
        fields.push({
          title: this.$t("i18n.datatable.actions"),
          key: "actions",
          visible: true,
          sortable: false
        });
      }
      return fields;
    },
    getFields() {
      return this.fields.map((f) => {
        return typeof f === "string" ? { source: f } : f;
      }).map((f) => {
        return {
          ...f,
          type: f.type,
          label: f.label || this.$admin.getSourceLabel(
            this.listState.resource,
            f.labelKey || f.source
          )
        };
      });
    },
    getDefaultAlign(field) {
      if (["number"].includes(field.type)) {
        return "right";
      }
      return "left";
    },
    getSelectedHeaders() {
      let fields = this.getHeadersMap();
      let columns = {};
      let validatedFields = [];
      fields.forEach(function(val) {
        columns[val.key] = val;
      });
      let userColumns = localStorage.getItem("col_" + this.resource);
      if (userColumns) {
        let colArray = JSON.parse(userColumns);
        if (Array.isArray(colArray) && colArray.length > 0) {
          colArray.forEach(function(val) {
            if (val.key in columns) {
              if (val.visible) {
                validatedFields.push(val);
              }
            }
          });
        } else {
          validatedFields = fields;
        }
      } else {
        validatedFields = fields;
      }
      return validatedFields;
    },
    getItemsPerPageValue() {
      if (this.itemsPerPage == null) {
        return config.list.itemsPerPage;
      }
      return this.itemsPerPage;
    },
    getDisableItemsPerPageValue() {
      if (this.disableItemsPerPage == null) {
        return config.list.disableItemsPerPage;
      }
      return this.disableItemsPerPage;
    },
    getDisableGlobalSearchValue() {
      if (this.disableGlobalSearch == null) {
        return config.list.disableGlobalSearch;
      }
      return this.disableGlobalSearch;
    },
    fillSettings() {
      let Self = this;
      this.selectedHeaders = this.getSelectedHeaders();
      this.$store.getModule("api").setHeaders(this.selectedHeaders);
      this.headers.forEach(function(item) {
        for (let i = 0; i < Self.selectedHeaders.length; i++) {
          if (Self.selectedHeaders[i].key == item.key) {
            Self.visibilities[item.key] = Self.selectedHeaders[i].visible;
            Self.filterabilities[item.key] = Self.selectedHeaders[i].filterable;
          }
        }
      });
    },
    saveSettings() {
      localStorage.setItem("col_" + this.resource, JSON.stringify(this.selectedHeaders));
      this.$store.getModule("messages").show({ type: "info", message: this.$t("i18n.messages.datatableSettingsSaved") });
    },
    restoreSettings() {
      localStorage.removeItem("col_" + this.resource);
      this.selectedHeaders = this.getSelectedHeaders();
      this.$store.getModule("api").setHeaders(this.selectedHeaders);
      this.fillSettings();
      ++this.settingsKey;
      this.$store.getModule("messages").show({ type: "info", message: this.$t("i18n.messages.datatableSettingsReset") });
    },
    async initFiltersFromQuery() {
      let options = {
        page: 1,
        itemsPerPage: this.getItemsPerPageValue(),
        sortBy: this.sortBy
      };
      if (this.disableQueryString) {
        this.listState.options = options;
        return;
      }
      const { perPage, page, sortBy, sortDesc, filter } = this.$route.query;
      if (page) {
        options.page = parseInt(page, 10);
      }
      if (perPage) {
        options.itemsPerPage = parseInt(perPage, 10);
      }
      let newSortBy = [];
      let sortByParts = [];
      let sortDescParts = [];
      if (sortBy) {
        sortByParts = sortBy.split(",");
        sortDescParts = sortDesc.split(",").map((bool) => bool === "true");
        sortByParts.forEach(function(val, index2) {
          newSortBy.push({ key: val, order: sortDescParts[index2] == true ? "desc" : "asc" });
        });
        options.sortBy = newSortBy;
      }
      this.useListStore.updateOptions(options);
      if (filter) {
        this.currentFilter = JSON.parse(filter);
      }
    },
    updateQuery() {
      if (this.disableQueryString || isEmpty(this.useListStore.options)) {
        return;
      }
      let { itemsPerPage, page, sortBy } = this.useListStore.options;
      let query = {
        page,
        ...!this.getDisableItemsPerPageValue() && { perPage: itemsPerPage }
      };
      let newSortBy = [];
      let newSortDesc = [];
      sortBy.forEach(function(arr) {
        newSortBy.push(arr.key);
        newSortDesc.push(arr.order == "asc" ? false : true);
      });
      if (!isEmpty(newSortBy)) {
        query.sortBy = newSortBy.join(",");
      }
      if (!isEmpty(newSortDesc)) {
        query.sortDesc = newSortDesc.join(",");
      }
      if (!isEmpty(this.getCurrentFilter)) {
        query.filter = JSON.stringify(this.getCurrentFilter);
      }
      this.$router.push({ query }).catch(() => {
      });
    },
    async fetchData() {
      if (!this.loaded || isEmpty(this.useListStore.options)) {
        return;
      }
      this.listState.loading = "primary";
      let newSortBy = [];
      let newSortDesc = [];
      const { sortBy, page, itemsPerPage } = this.useListStore.options;
      let Self = this;
      sortBy.forEach(function(arr) {
        newSortBy.push(arr.key);
        newSortDesc.push(arr.order == "asc" ? false : true);
        Self.sortData[arr.key] = arr.order;
      });
      let params = {
        fields: this.getFieldsQuery(this.resource, this.fields),
        include: isEmpty(this.include) ? this.currentResource.include : this.include,
        sort: (newSortBy || []).map((by, index2) => {
          return { by, desc: newSortDesc[index2] };
        }),
        defaultQueryString: this.defaultQueryString,
        filter: this.getCurrentFilter
      };
      if (!this.disablePagination) {
        params.pagination = {
          page,
          ...!this.getDisableItemsPerPageValue() && { perPage: itemsPerPage }
        };
      }
      this.useResource.setResource(this.resource);
      let response = null;
      try {
        response = await this.useResource.getList(params);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        console.error("Url not found:", error.config.baseURL + "/" + error.config.url);
        this.listState.loading = false;
        return;
      }
      if (response && response["data"]) {
        let data = response.data.data;
        let total = response.data.totalItems;
        let newState = {
          items: data,
          total,
          selected: []
          // options: this.listState.options,
        };
        for (let key in newState) {
          this.listState[key] = newState[key];
        }
        this.listState.loading = false;
        this.$emit("listState", this.listState);
      }
    },
    getFieldsQuery(resource2, sources, fields = {}) {
      sources.forEach((s) => {
        let lastIndex = s.source.lastIndexOf(".");
        if (lastIndex === -1) {
          let f2 = fields[resource2] || [];
          fields[resource2] = [...f2, s.source];
          return;
        }
        let relation = s.source.substr(0, lastIndex);
        let f = fields[relation] || [];
        fields[relation] = [...f, s.source.substr(lastIndex + 1)];
      });
      return fields;
    },
    toggleSettingsPanel() {
      this.toggleSettings = this.toggleSettings ? false : true;
    },
    onAction(action) {
      if (action == "rowSaveDialog") {
        eventBus.emit("last-dialog", true);
      }
      eventBus.emit("action", action);
      this.$emit("action", {
        action,
        title: this.currentResource.getTitle("create")
      });
    }
  }
  // end methods
};
const _hoisted_1$k = { class: "h1" };
const _hoisted_2$b = { class: "d-flex justify-end" };
const _hoisted_3$4 = {
  key: 0,
  class: "ml-2"
};
const _hoisted_4$4 = { key: 0 };
const _hoisted_5$3 = {
  key: 1,
  id: "toggleSettings",
  class: "mb-3"
};
const _hoisted_6$3 = { class: "align-center" };
const _hoisted_7$3 = { style: { "color": "#a5a5a5" } };
const _hoisted_8$3 = { key: 0 };
const _hoisted_9$3 = { width: "20%" };
const _hoisted_10$1 = { key: 1 };
const _hoisted_11$1 = ["colspan"];
const _hoisted_12 = { class: "table-draggable" };
const _hoisted_13 = {
  style: { "cursor": "pointer", "padding": "4px" },
  scope: "col"
};
const _hoisted_14 = { class: "circle" };
const _hoisted_15 = ["colspan"];
const _hoisted_16 = {
  key: 0,
  class: "ml-2 pb-0 mb-0"
};
const _hoisted_17 = {
  key: 0,
  class: "ml-2 pb-0 mb-0"
};
const _hoisted_18 = {
  key: 0,
  class: "ml-2 pb-0 mb-0"
};
function _sfc_render$10(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_create_button = resolveComponent("va-create-button");
  const _component_va_row_create_button = resolveComponent("va-row-create-button");
  const _component_va_create_dialog_button = resolveComponent("va-create-dialog-button");
  const _component_form_filter = resolveComponent("form-filter");
  const _component_draggable = resolveComponent("draggable");
  const _component_va_bulk_delete_button = resolveComponent("va-bulk-delete-button");
  const _component_va_bulk_copy_button = resolveComponent("va-bulk-copy-button");
  return openBlock(), createBlock(VCard, {
    variant: "flat",
    border: $props.border,
    loading: $data.listState.loading
  }, {
    default: withCtx(() => [
      createVNode(VCardText, null, {
        default: withCtx(() => [
          createVNode(VRow, {
            class: normalizeClass($props.class)
          }, {
            default: withCtx(() => [
              !$props.hideTitle ? (openBlock(), createBlock(VCol, {
                key: 0,
                sm: "4"
              }, {
                default: withCtx(() => [
                  createBaseVNode("h1", _hoisted_1$k, toDisplayString($options.getTitle), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(VCol, {
                sm: "8",
                class: "text-right"
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_2$b, [
                    !$props.disableFilters && !$options.getDisableSettingsValue ? (openBlock(), createBlock(VBtn, {
                      key: 0,
                      variant: "text",
                      icon: !$setup.lgAndUp,
                      onClick: $options.toggleSettingsPanel,
                      color: "primary",
                      exact: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { size: "small" }, {
                          default: withCtx(() => _cache[7] || (_cache[7] = [
                            createTextVNode("mdi-cog")
                          ])),
                          _: 1
                        }),
                        $setup.lgAndUp ? (openBlock(), createElementBlock("span", _hoisted_3$4, toDisplayString(_ctx.$t("i18n.datatable.settings")), 1)) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["icon", "onClick"])) : createCommentVNode("", true),
                    !$props.disableCreate ? (openBlock(), createBlock(_component_va_create_button, {
                      key: 1,
                      "disable-redirect": $props.disableCreateRedirect,
                      resource: _ctx.resource,
                      onClick: _cache[0] || (_cache[0] = ($event) => $options.onAction("create"))
                    }, null, 8, ["disable-redirect", "resource"])) : createCommentVNode("", true),
                    $props.rowCreate ? (openBlock(), createBlock(_component_va_row_create_button, {
                      key: 2,
                      "disable-redirect": true,
                      resource: _ctx.resource,
                      onClick: _cache[1] || (_cache[1] = ($event) => $options.onAction("rowCreate"))
                    }, null, 8, ["resource"])) : createCommentVNode("", true),
                    $props.enableSaveDialog ? (openBlock(), createBlock(_component_va_create_dialog_button, {
                      key: 3,
                      "disable-redirect": true,
                      resource: _ctx.resource,
                      onClick: _cache[2] || (_cache[2] = ($event) => $options.onAction("rowSaveDialog"))
                    }, null, 8, ["resource"])) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "actions")
                  ])
                ]),
                _: 3
              })
            ]),
            _: 3
          }, 8, ["class"]),
          !$props.disableFilters && $options.getFilters.length != 0 ? (openBlock(), createElementBlock("div", _hoisted_4$4, [
            !$options.getHideHeaderValue ? (openBlock(), createBlock(_component_form_filter, {
              key: 0,
              filters: $options.getFilters,
              modelValue: $data.currentFilter,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.currentFilter = $event),
              class: "mb-3"
            }, createSlots({ _: 2 }, [
              renderList($options.getFilters, (filter) => {
                return {
                  name: filter.source,
                  fn: withCtx((props) => [
                    renderSlot(_ctx.$slots, `filter.${filter.source}`, normalizeProps(guardReactiveProps(props)))
                  ])
                };
              })
            ]), 1032, ["filters", "modelValue"])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          !$props.disableFilters && $data.toggleSettings ? (openBlock(), createElementBlock("div", _hoisted_5$3, [
            createVNode(VRow, { class: "pt-3 pl-0 pb-3 pr-0" }, {
              default: withCtx(() => [
                createVNode(VCol, {
                  class: "pb-0 pt-0",
                  cols: "12"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_6$3, [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VTable, {
                                class: "table-settings",
                                density: "compact"
                              }, {
                                default: withCtx(() => [
                                  createBaseVNode("thead", null, [
                                    createBaseVNode("tr", null, [
                                      _cache[8] || (_cache[8] = createBaseVNode("th", { style: { "border": "none" } }, null, -1)),
                                      (openBlock(true), createElementBlock(Fragment, null, renderList($data.selectItems, (item) => {
                                        return openBlock(), createElementBlock("th", _hoisted_7$3, toDisplayString(item.title), 1);
                                      }), 256))
                                    ])
                                  ]),
                                  createBaseVNode("tbody", null, [
                                    !$props.disableVisibility ? (openBlock(), createElementBlock("tr", _hoisted_8$3, [
                                      createBaseVNode("td", _hoisted_9$3, toDisplayString(_ctx.$t("i18n.datatable.visible")), 1),
                                      (openBlock(true), createElementBlock(Fragment, null, renderList($data.selectItems, (item) => {
                                        return openBlock(), createElementBlock("td", null, [
                                          (openBlock(), createBlock(VSwitch, {
                                            density: "compact",
                                            key: $data.settingsKey,
                                            modelValue: $data.visibilities[item.key],
                                            "onUpdate:modelValue": ($event) => $data.visibilities[item.key] = $event,
                                            onChange: ($event) => $options.updateVisibility(item.key, $data.visibilities[item.key]),
                                            color: "primary",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"]))
                                        ]);
                                      }), 256))
                                    ])) : createCommentVNode("", true),
                                    createBaseVNode("tr", null, [
                                      createBaseVNode("td", null, toDisplayString(_ctx.$t("i18n.datatable.filterable")), 1),
                                      (openBlock(true), createElementBlock(Fragment, null, renderList($data.selectItems, (item) => {
                                        return openBlock(), createElementBlock("td", null, [
                                          item.key !== "actions" ? (openBlock(), createBlock(VSwitch, {
                                            density: "compact",
                                            key: $data.settingsKey,
                                            modelValue: $data.filterabilities[item.key],
                                            "onUpdate:modelValue": ($event) => $data.filterabilities[item.key] = $event,
                                            onChange: ($event) => $options.updateFilterability(item.key, $data.filterabilities[item.key]),
                                            color: "primary",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])) : createCommentVNode("", true)
                                        ]);
                                      }), 256))
                                    ]),
                                    !$props.disablePositioning ? (openBlock(), createElementBlock("tr", _hoisted_10$1, [
                                      createBaseVNode("td", null, toDisplayString(_ctx.$t("i18n.datatable.positioning")), 1),
                                      createBaseVNode("td", {
                                        colspan: $data.selectItems.length,
                                        style: { "border-bottom": "none" }
                                      }, [
                                        createBaseVNode("div", _hoisted_12, [
                                          $data.selectItems.length > 0 ? (openBlock(), createBlock(VTable, {
                                            key: 0,
                                            density: "compact",
                                            class: "mt-6 mb-6",
                                            width: "%100"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_draggable, {
                                                modelValue: $data.selectedHeaders,
                                                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.selectedHeaders = $event),
                                                tag: "tr",
                                                "item-key": (key) => key
                                              }, {
                                                item: withCtx((item) => [
                                                  createBaseVNode("th", _hoisted_13, [
                                                    createTextVNode(toDisplayString(item.element.title) + " ", 1),
                                                    createBaseVNode("span", _hoisted_14, toDisplayString(item.index + 1), 1)
                                                  ])
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "item-key"])
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true)
                                        ])
                                      ], 8, _hoisted_11$1)
                                    ])) : createCommentVNode("", true),
                                    createBaseVNode("tr", null, [
                                      _cache[12] || (_cache[12] = createBaseVNode("td", null, null, -1)),
                                      createBaseVNode("td", {
                                        colspan: $data.selectItems.length,
                                        class: "pt-2 pb-2"
                                      }, [
                                        createVNode(VBtn, {
                                          class: "mt-1 mb-1",
                                          color: "primary",
                                          variant: "tonal",
                                          type: "button",
                                          icon: !$setup.lgAndUp,
                                          onClick: $options.saveSettings
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { size: "small" }, {
                                              default: withCtx(() => _cache[9] || (_cache[9] = [
                                                createTextVNode("mdi-content-save")
                                              ])),
                                              _: 1
                                            }),
                                            $setup.lgAndUp ? (openBlock(), createElementBlock("span", _hoisted_16, toDisplayString(_ctx.$t("i18n.datatable.saveSettings")), 1)) : createCommentVNode("", true)
                                          ]),
                                          _: 1
                                        }, 8, ["icon", "onClick"]),
                                        createVNode(VBtn, {
                                          class: "ml-2 mt-1 mb-1",
                                          color: "secondary",
                                          variant: "flat",
                                          type: "button",
                                          icon: !$setup.lgAndUp,
                                          onClick: $options.restoreSettings
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { size: "small" }, {
                                              default: withCtx(() => _cache[10] || (_cache[10] = [
                                                createTextVNode("mdi-restore")
                                              ])),
                                              _: 1
                                            }),
                                            $setup.lgAndUp ? (openBlock(), createElementBlock("span", _hoisted_17, toDisplayString(_ctx.$t("i18n.datatable.restoreDefaults")), 1)) : createCommentVNode("", true)
                                          ]),
                                          _: 1
                                        }, 8, ["icon", "onClick"]),
                                        createVNode(VBtn, {
                                          class: "ml-2 mt-1 mb-1",
                                          color: "secondary",
                                          variant: "flat",
                                          type: "button",
                                          icon: !$setup.lgAndUp,
                                          onClick: $options.toggleSettingsPanel
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { size: "small" }, {
                                              default: withCtx(() => _cache[11] || (_cache[11] = [
                                                createTextVNode("mdi-close")
                                              ])),
                                              _: 1
                                            }),
                                            $setup.lgAndUp ? (openBlock(), createElementBlock("span", _hoisted_18, toDisplayString(_ctx.$t("i18n.datatable.closeSettings")), 1)) : createCommentVNode("", true)
                                          ]),
                                          _: 1
                                        }, 8, ["icon", "onClick"])
                                      ], 8, _hoisted_15)
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : createCommentVNode("", true),
          $data.listState.selected.length ? (openBlock(), createBlock(VToolbar, {
            key: 2,
            height: "45",
            color: "blue lighten-5"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t("i18n.datatable.selectedItems", $data.listState.selected.length)) + " ", 1),
              createVNode(VSpacer),
              createBaseVNode("div", null, [
                !$props.hideBulkDelete ? (openBlock(), createBlock(_component_va_bulk_delete_button, {
                  key: 0,
                  value: $data.listState.selected,
                  onRefresh: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("refresh", 1))
                }, null, 8, ["value"])) : createCommentVNode("", true),
                !$props.hideBulkCopy ? (openBlock(), createBlock(_component_va_bulk_copy_button, {
                  key: 1,
                  value: $data.listState.selected,
                  onRefresh: _cache[6] || (_cache[6] = ($event) => _ctx.$emit("refresh", 1))
                }, null, 8, ["value"])) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "bulk.actions", normalizeProps(guardReactiveProps({ selected: $data.listState.selected })))
              ])
            ]),
            _: 3
          })) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      })
    ]),
    _: 3
  }, 8, ["border", "loading"]);
}
const List = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["render", _sfc_render$10]]);
const _sfc_main$$ = {
  provide() {
    return {
      showState: this.showState
    };
  },
  props: {
    /**
     * Explicit item resource object where all properties must be injected into VA fields.
     */
    item: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      showState: {
        item: this.item
      }
    };
  },
  watch: {
    item(val) {
      this.showState.item = val;
    }
  }
};
function _sfc_render$$(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const Show = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["render", _sfc_render$$]]);
const _sfc_main$_ = {
  mixins: [Resource],
  inject: {
    v$: {
      default: null
    }
  },
  provide() {
    return {
      formState: this.formState
    };
  },
  props: {
    /**
     * Current form model being edited. Represent the final data that will be send through your API.
     * @model
     */
    modelValue: {
      type: Object,
      default: () => {
      }
    },
    /**
     * Id of resource to be edit. If null, then create a new one.
     */
    id: [String, Number],
    /**
     * Explicit item resource object where all properties must be injected into form model.
     */
    item: {
      type: Object,
      default: () => {
      }
    },
    /**
     * Default route resource action to redirect after saving.
     * @values list, create, show, edit
     */
    redirect: {
      type: String,
      validator: (v) => ["list", "create", "show", "edit"].includes(v),
      default: "list"
    },
    /**
     * Disable default submit behavior
     */
    disableSubmit: Boolean,
    /**
     * Disable default redirect behavior
     */
    disableRedirect: Boolean,
    /**
     * Disable default save behavior
     */
    disableSaveMessage: Boolean,
    /**
     * Disable unsaved form dialog
     */
    disableUnsavedFormDialog: Boolean
  },
  validations: {},
  data() {
    return {
      fields: {},
      originalValue: this.modelValue,
      formItem: this.$store.getResource(this.resource).getFormItem ? JSON.parse(this.$store.getResource(this.resource).getFormItem) : null,
      formState: {
        edit: !!this.id,
        item: this.item,
        model: {},
        saving: false,
        errors: {},
        update: ({ source, value, lazy }) => {
          if (source == "") {
            return;
          }
          if (!this.disableUnsavedFormDialog && typeof this.formState.model[source] !== "undefined" && this.id && this.item) {
            let item = this.formItem;
            let oldValue = null;
            if (item && typeof item[source] !== "undefined") {
              oldValue = item[source];
            }
            if ((oldValue == null || oldValue == "") && Array.isArray(value) && value.length == 0) {
              value = null;
              oldValue = null;
            }
            if ((value == null || value == "") && (oldValue == null || oldValue == "")) {
              value = null;
              oldValue = null;
            }
            if (oldValue && (Array.isArray(oldValue) || typeof oldValue === "object")) {
              if (JSON.stringify(oldValue) != JSON.stringify(value)) {
                this.$store.getModule("api").setFormStatus(true);
              }
            } else {
              if (oldValue != value) {
                this.$store.getModule("api").setFormStatus(true);
              }
            }
          }
          if (lazy) {
            if (typeof this.fields[source] !== "undefined") {
              return;
            } else {
              this.fields[source] = 0;
            }
          }
          if (value && this.v$ && source != "id" && typeof this.v$["model"] !== "undefined" && typeof this.v$["model"][source] !== "undefined") {
            this.v$["model"][source].$touch();
          }
          let model = { ...this.formState.model };
          set(model, source, value);
          this.formState.model = model;
          if (Object.prototype.hasOwnProperty.call(model, "model")) {
            delete model.model;
          }
          if (Object.prototype.hasOwnProperty.call(model, "editedItem")) {
            delete model.editedItem;
          }
          this.$emit("update:modelValue", model);
        },
        submit: async (redirect) => {
          this.save(redirect);
        }
      }
    };
  },
  watch: {
    item(val) {
      if (!val) {
        this.formState.model = this.originalValue;
      }
      this.formState.item = val;
    },
    modelValue: {
      handler(val) {
        if (val) {
          this.formState.model = val;
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    async onSubmit() {
      if (this.disableSubmit) {
        return;
      }
      if (this.disableRedirect) {
        await this.save();
        return;
      }
      await this.save(this.redirect);
    },
    async save(redirect) {
      const Self = this;
      if (this.v$ && this.v$["model"]) {
        let invalid = false;
        const fields = Object.keys(Self.v$["model"]);
        fields.forEach(function(val) {
          if (val.charAt(0) != "$") {
            Self.v$["model"][val].$touch();
            if (Self.v$["model"][val].$invalid) {
              invalid = true;
            }
          }
        });
        if (invalid) {
          return;
        }
      }
      this.formState.saving = true;
      var model = this.formState.model;
      Object.entries(model).forEach(function(val) {
        if (Array.isArray(val)) {
          let k = val[0];
          let v = val[1];
          if (Array.isArray(v)) {
            if (typeof val[1][0] !== "object") {
              v.forEach(function(id, key) {
                if (typeof id !== "object") {
                  model[k][key] = { id };
                }
              });
            }
          }
        }
      });
      this.formState.model = model;
      this.$emit("model", model);
      try {
        let response = this.id ? await this.$store.getResource(this.resource).update({
          id: this.id,
          data: this.formState.model
        }) : await this.$store.getResource(this.resource).create({
          data: this.formState.model
        });
        if (response.status == 200) {
          const data = response.data.data;
          this.$emit("saved", data);
          this.$store.getModule("api").setFormSaved(true);
          this.formState.errors = null;
          if (!this.disableSaveMessage) {
            let Self2 = this;
            setTimeout(function() {
              Self2.$store.getModule("messages").show({ type: "success", message: Self2.$t("i18n.form.saved") });
            }, 100);
          }
          switch (redirect) {
            case "list":
              let listQuery = null;
              if (localStorage.getItem("listQuery")) {
                listQuery = JSON.parse(localStorage.getItem("listQuery"));
              }
              const queryParams = { ...listQuery };
              if (!queryParams.filter) {
                delete queryParams.filter;
              }
              if (localStorage.getItem("path")) {
                this.$router.push({ path: localStorage.getItem("path"), query: queryParams });
                localStorage.removeItem("path");
              } else {
                this.$router.push({ name: `${this.resource}_list`, query: queryParams });
              }
              break;
            case "create":
              this.formState.item = null;
              this.formState.model = this.originalValue;
              this.$router.push({ name: `${this.resource}_create` });
              break;
            case "show":
              this.$router.push({
                name: `${this.resource}_show`,
                params: { id: data.id }
              });
              break;
            case "edit":
              this.$router.push({
                name: `${this.resource}_edit`,
                params: { id: data.id }
              });
              break;
          }
        }
      } catch (e) {
        if (e.errors) {
          this.formState.errors = e.errors;
        }
        this.$emit("error", e.errors);
      } finally {
        this.formState.saving = false;
      }
    }
  }
};
function _sfc_render$_(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VForm, {
    onSubmit: withModifiers($options.onSubmit, ["prevent"])
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["onSubmit"]);
}
const Form = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["render", _sfc_render$_]]);
const _sfc_main$Z = {
  mixins: [Page]
};
const _hoisted_1$j = { slot: "actions" };
function _sfc_render$Z(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_list_button = resolveComponent("va-list-button");
  const _component_va_action_page = resolveComponent("va-action-page");
  return openBlock(), createBlock(_component_va_action_page, { title: _ctx.title }, {
    default: withCtx(() => [
      createBaseVNode("template", _hoisted_1$j, [
        createVNode(_component_va_list_button, { resource: _ctx.resource }, null, 8, ["resource"]),
        renderSlot(_ctx.$slots, "actions")
      ]),
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["title"]);
}
const CreateLayout = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["render", _sfc_render$Z]]);
const _sfc_main$Y = {
  mixins: [Page],
  props: {
    disableCard: {
      type: Boolean,
      default: false
    },
    showList: {
      type: Boolean,
      default: true
    },
    showClone: {
      type: Boolean,
      default: true
    },
    showEdit: {
      type: Boolean,
      default: true
    },
    showDelete: {
      type: Boolean,
      default: true
    }
  }
};
const _hoisted_1$i = { slot: "actions" };
function _sfc_render$Y(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_list_button = resolveComponent("va-list-button");
  const _component_va_edit_button = resolveComponent("va-edit-button");
  const _component_va_clone_button = resolveComponent("va-clone-button");
  const _component_va_delete_button = resolveComponent("va-delete-button");
  const _component_va_action_page = resolveComponent("va-action-page");
  return openBlock(), createBlock(_component_va_action_page, {
    title: _ctx.title,
    "disable-card": $props.disableCard
  }, {
    default: withCtx(() => [
      createBaseVNode("template", _hoisted_1$i, [
        $props.showList ? (openBlock(), createBlock(_component_va_list_button, {
          key: 0,
          resource: _ctx.resource,
          item: _ctx.item
        }, null, 8, ["resource", "item"])) : createCommentVNode("", true),
        $props.showEdit ? (openBlock(), createBlock(_component_va_edit_button, {
          key: 1,
          resource: _ctx.resource,
          item: _ctx.item
        }, null, 8, ["resource", "item"])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "actions"),
        $props.showClone ? (openBlock(), createBlock(_component_va_clone_button, {
          key: 2,
          resource: _ctx.resource,
          item: _ctx.item
        }, null, 8, ["resource", "item"])) : createCommentVNode("", true),
        $props.showDelete ? (openBlock(), createBlock(_component_va_delete_button, {
          key: 3,
          resource: _ctx.resource,
          item: _ctx.item,
          redirect: ""
        }, null, 8, ["resource", "item"])) : createCommentVNode("", true)
      ]),
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["title", "disable-card"]);
}
const ShowLayout = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["render", _sfc_render$Y]]);
const _sfc_main$X = {
  mixins: [Page]
};
const _hoisted_1$h = { slot: "actions" };
function _sfc_render$X(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_list_button = resolveComponent("va-list-button");
  const _component_va_show_button = resolveComponent("va-show-button");
  const _component_va_clone_button = resolveComponent("va-clone-button");
  const _component_va_delete_button = resolveComponent("va-delete-button");
  const _component_va_action_page = resolveComponent("va-action-page");
  return openBlock(), createBlock(_component_va_action_page, { title: _ctx.title }, {
    default: withCtx(() => [
      createBaseVNode("template", _hoisted_1$h, [
        createVNode(_component_va_list_button, {
          resource: _ctx.resource,
          item: _ctx.item
        }, null, 8, ["resource", "item"]),
        createVNode(_component_va_show_button, {
          resource: _ctx.resource,
          item: _ctx.item
        }, null, 8, ["resource", "item"]),
        renderSlot(_ctx.$slots, "actions"),
        createVNode(_component_va_clone_button, {
          resource: _ctx.resource,
          item: _ctx.item
        }, null, 8, ["resource", "item"]),
        createVNode(_component_va_delete_button, {
          resource: _ctx.resource,
          item: _ctx.item,
          redirect: ""
        }, null, 8, ["resource", "item"])
      ]),
      _ctx.item ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("", true)
    ]),
    _: 3
  }, 8, ["title"]);
}
const EditLayout = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["render", _sfc_render$X]]);
const _sfc_main$W = {
  props: {
    /**
     * Title of aside.
     */
    title: String
  }
};
const _hoisted_1$g = {
  key: 0,
  class: "d-none"
};
function _sfc_render$W(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_portal = resolveComponent("portal");
  return $props.title ? (openBlock(), createElementBlock("div", _hoisted_1$g, [
    createVNode(_component_portal, { to: "aside-title" }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($props.title), 1)
      ]),
      _: 1
    }),
    createVNode(_component_portal, { to: "aside-content" }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(_ctx.$props)))
      ]),
      _: 3
    })
  ])) : createCommentVNode("", true);
}
const AsideLayout = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["render", _sfc_render$W]]);
const _sfc_main$V = {
  mixins: [Resource, Search, Utils],
  inject: {
    listState: {
      default: {}
    },
    validations: {
      default: {}
    },
    errors: {
      default: {}
    }
  },
  emits: ["save", "saved", "deleted"],
  provide() {
    return {
      admin: this.$admin
    };
  },
  setup() {
    const { lgAndUp, mdAndUp } = useDisplay();
    return { v$: useVuelidate(), useListStore: useListStore(), lgAndUp, mdAndUp };
  },
  validations() {
    return this.validations;
  },
  props: {
    class: {
      type: String,
      default() {
        return "va-data-table";
      }
    },
    /**
     * Choose density
     */
    density: {
      type: String,
      default: "compact"
    },
    /**
     * Use the width prop to set the width of the table.
     */
    width: [String, Number],
    /**
     * Use the heigth prop to set the heigth of the table.
     */
    height: [String, Number],
    /**
     * Make each row clickable. Use predefined function as edit or show
     */
    rowClick: {
      type: [String, Boolean],
      default: null,
      validator: (v) => ["show", "edit"].includes(v)
    },
    /**
     * Allow new item row.
     */
    rowCreate: Boolean,
    /**
     * Allow click-edit row.
     */
    rowEdit: Boolean,
    /**
     * Allow editable row.
     */
    rowSaveDialog: Boolean,
    /**
     * Dialog width
     */
    rowSaveDialogWidth: {
      type: [Number, String],
      default: () => {
        return 1024;
      }
    },
    /**
     * Dialog height
     */
    rowSaveDialogHeight: {
      type: [Number, String],
      default: () => {
        return 600;
      }
    },
    /**
     * Allow clonable row.
     */
    rowClone: Boolean,
    /**
     * Allow showable row
     */
    rowShow: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
    /**
     * Enable row expand mode.
     * Use it for quick detail view.
     */
    showExpand: Boolean,
    /**
     * Expanded items
     */
    expanded: {
      type: Array,
      default: []
    },
    /**
     * Only one row can expanded at once
     */
    expandOnClick: {
      type: Boolean,
      default: true
    },
    /**
     * Group by array
     */
    groupBy: {
      type: Array
    },
    /**
     * Control visibility
     */
    visible: {
      type: Boolean,
      default: true
    },
    /**
     * Disable select feature.
     */
    disableSelect: Boolean,
    /**
     * Select strategy 'single' | 'page' | 'all'
     */
    selectStrategy: {
      type: String,
      default: "page"
    },
    /**
     * Disable sorting.
     */
    disableSort: Boolean,
    /**
     * Disable show action row.
     */
    disableShow: Boolean,
    /**
     * Disable show action row.
     */
    disableEdit: Boolean,
    /**
     * Disable clone action row.
     */
    disableClone: Boolean,
    /**
     * Disable delete action row.
     */
    disableDelete: Boolean,
    /**
     * Disable create redirection. Will force clone button to show.
     */
    disableCreateRedirect: Boolean,
    /**
     * Disable show redirection. Will force show button to show.
     */
    disableShowRedirect: Boolean,
    /**
     * Disable edit redirection. Will force edit button to show.
     */
    disableEditRedirect: Boolean,
    /**
     * Enable delete redirection.
     */
    enableDeleteRedirect: Boolean,
    /**
     * Disable select feature.
     */
    disableGenerateUid: Boolean,
    /**
     * Enable multi sort feature, enabled by default.
     */
    multiSort: {
      type: Boolean,
      default: true
    },
    /**
     * Additional form object data to merge with row-create form.
     */
    createData: {
      type: Object,
      default: () => {
      }
    },
    /**
     * Additional form object data to merge with row-edit form.
     */
    updateData: {
      type: Object,
      default: () => {
      }
    },
    /**
     * List of available selections of items per page.
     */
    itemsPerPageOptions: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      item: null,
      dialog: false,
      selected: [],
      saving: false,
      editRowId: null,
      rowIndex: null,
      form: null,
      exceptionErrors: {}
    };
  },
  async mounted() {
    let Self = this;
    eventBus.on("last-dialog", function(dialog, action = null) {
      Self.dialog = dialog;
      if (action == "create") {
        Self.item = null;
      }
    });
    eventBus.on("action", function(action) {
      if (action == "rowCreate") {
        Self.createRowForm(null, "new", 0);
      }
    });
  },
  computed: {
    getPageTitle() {
      return useRoute().meta.title;
    },
    getHeaders: {
      get() {
        return this.$store.getModule("api").getHeaders;
      }
    },
    getFields: {
      get() {
        return this.$store.getModule("api").getFields;
      }
    },
    getItems() {
      if (this.form && !this.editRowId && this.rowIndex != null) {
        let index2 = this.rowIndex;
        if (this.rowIndex > 1) {
          ++index2;
        }
        this.listState.items.splice(index2, 0, { index: index2, _new: true, id: null });
        return this.listState.items;
      }
      if (this.listState["items"] && this.listState.items.length > 0) {
        return this.listState.items.map((items, index2) => ({
          ...items,
          index: index2
        }));
      }
      return this.listState.items;
    },
    getRowSaveComponentName() {
      return this.resource + "RowSave";
    },
    getItemsPerPageOptionsValue() {
      if (Array.isArray(this.itemsPerPageOptions) && this.itemsPerPageOptions.length == 0) {
        return config.list.itemsPerPageOptions;
      }
      return this.itemsPerPageOptions;
    }
  },
  watch: {
    multiSort: {
      handler(val) {
        this.useListStore.updateOptions({ multiSort: val });
      },
      immediate: true
    },
    "selected"(val) {
      this.$emit("selected", val);
    }
  },
  methods: {
    getDefaultAlign(field) {
      if (["number"].includes(field.type)) {
        return "right";
      }
      return "left";
    },
    onRowClick(event2, item) {
      if (typeof item.item._new !== "undefined") {
        return;
      }
      if (!this.rowEdit) {
        return;
      }
      if (item && typeof item.item !== "undefined") {
        this.createForm(item.item);
      }
      return;
    },
    async onAction(action, item = null, disableRowEdit = null) {
      if (action === "edit" && this.rowEdit && disableRowEdit == null) {
        this.createForm(item);
        return;
      }
      if (action === "create" && this.rowCreate) {
        this.createForm(item, "new");
        return;
      }
      if (action == "rowSaveDialog") {
        this.item = item;
        this.dialog = true;
        return;
      }
      if (!this[`disable${upperFirst(action)}Redirect`]) {
        return;
      }
      let hasItem = action !== "create";
      let title = this.$admin.getResource(this.listState.resource).getTitle(action, hasItem ? item : null);
      let id = hasItem ? item.id : null;
      const resource$1 = resource();
      resource$1.setResource(this.listState.resource);
      let { data } = await resource$1.getOne({ id: item.id });
      resource$1.setItem(data);
      this.$emit("item-action", { action, title, id, item: data });
    },
    createForm(item = null, action = null) {
      if (action == "new") {
        this.editRowId = null;
      } else {
        this.editRowId = item ? item.id : null;
      }
      this.form = this.getFields.map((f) => f.source).reduce((o, source) => {
        return {
          ...o,
          [source]: item ? item[source] : null
        };
      }, {});
      this.exceptionErrors = {};
    },
    createRowForm(item = null, action = null, index2 = null) {
      if (this.rowIndex != null) {
        return;
      }
      if (action == "new") {
        this.editRowId = null;
        this.rowIndex = index2;
      } else {
        this.editRowId = item ? item.id : null;
      }
      this.form = this.getFields.map((f) => f.source).reduce((o, source) => {
        return {
          ...o,
          [source]: item ? item[source] : null
        };
      }, {});
      this.exceptionErrors = {};
    },
    cancelRowForm() {
      this.v$.$reset();
      if (this.rowIndex == null) {
        this.editRowId = null;
        this.form = null;
        this.exceptionErrors = {};
      } else {
        this.listState.reload();
        this.rowIndex = null;
      }
    },
    getErrorMessages(source) {
      let errorFunc = source + "Errors";
      if (typeof this.errors[errorFunc] !== "undefined") {
        return this.errors[errorFunc](this.v$);
      }
    },
    updatePage(newPage) {
      this.useListStore.options.page = newPage;
      this.listState.reload();
    },
    updateOptions(event2) {
      this.useListStore.updateOptions(event2);
      this.listState.reload();
    },
    updateItemsPerPage(page) {
      this.useListStore.options.itemsPerPage = page;
      this.listState.reload();
    },
    updateDialogModel(val) {
      this.$emit("update:modelValue", val);
    },
    generateSelectItem(val) {
      if (Array.isArray(val)) {
        return val[0];
      }
      return val;
    },
    async save() {
      this.v$.$touch();
      if (this.v$.$invalid) {
        return false;
      }
      this.saving = true;
      const emitData = {
        response: null,
        form: { ...this.form, ...{ id: this.editRowId } }
      };
      this.$emit("save", emitData);
      const resource$1 = resource();
      resource$1.setResource(this.listState.resource);
      try {
        if (this.editRowId) {
          emitData.response = await resource$1.update({
            id: this.editRowId,
            data: { ...this.form, ...this.updateData }
          });
        } else {
          let newCreateData = {};
          newCreateData.id = this.generateUid();
          Object.assign(newCreateData, this.createData);
          emitData.response = await resource$1.create({
            data: { ...this.form, ...newCreateData }
          });
        }
        this.v$.$reset();
        this.saving = false;
        this.cancelRowForm();
        this.editRowId = null;
        this.exceptionErrors = {};
        this.listState.reload();
      } catch (e) {
        if (e.errors) {
          this.exceptionErrors = e.errors;
        }
      } finally {
        this.saving = false;
        this.$emit("saved", emitData);
      }
    },
    getFieldFilters(field) {
      let filters = field.filters;
      if (filters) {
        let filterObject = {};
        if (size(filters) > 0) {
          for (var k in filters) {
            if (this.form[filters[k]] && this.form[filters[k]]["id"]) {
              filterObject[filters[k]] = this.form[filters[k]].id;
            } else {
              filterObject[filters[k]] = this.form[filters[k]];
            }
          }
        }
        return filterObject;
      }
      return {};
    },
    getKey(field) {
      let key = "null";
      if (field["source"]) {
        key = field.source;
      }
      if (field && field["key"]) {
        if (Array.isArray(field.key)) {
          let ids = [];
          let keys = field.key;
          for (let i = 0; i < keys.length; i++) {
            if (this.form[keys[i]] && this.form[keys[i]]["id"]) {
              ids.push(this.form[keys[i]].id);
            } else {
              ids.push(this.form[keys[i]]);
            }
          }
          key = ids.join() + "-" + String(index);
        } else if (this.form[field.key]) {
          if (this.form[field.key]["id"]) {
            key = this.form[field.key].id;
          } else {
            key = this.form[field.key];
          }
        }
      }
      return key;
    },
    getOptions(field) {
      if (field && Object.prototype.hasOwnProperty.call(field, "options")) {
        return field.options;
      }
      return;
    }
  }
};
const _hoisted_1$f = ["colspan"];
const _hoisted_2$a = { key: 0 };
const _hoisted_3$3 = { key: 1 };
const _hoisted_4$3 = { key: 0 };
const _hoisted_5$2 = { key: 1 };
const _hoisted_6$2 = { key: 2 };
const _hoisted_7$2 = { class: "item-actions" };
const _hoisted_8$2 = { style: { "font-size": "12px", "color": "#7a7a7a", "padding-top": "20px", "padding-bottom": "20px" } };
const _hoisted_9$2 = { class: "h2" };
function _sfc_render$V(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_va_row_show_button = resolveComponent("va-row-show-button");
  const _component_va_show_button = resolveComponent("va-show-button");
  const _component_va_row_create_button = resolveComponent("va-row-create-button");
  const _component_va_row_save_dialog_button = resolveComponent("va-row-save-dialog-button");
  const _component_va_row_clone_button = resolveComponent("va-row-clone-button");
  const _component_va_clone_button = resolveComponent("va-clone-button");
  const _component_va_edit_button = resolveComponent("va-edit-button");
  const _component_va_delete_button = resolveComponent("va-delete-button");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($props.class)
  }, [
    createBaseVNode("form", {
      onSubmit: _cache[7] || (_cache[7] = withModifiers((...args) => $options.save && $options.save(...args), ["prevent"]))
    }, [
      $props.visible ? (openBlock(), createBlock(VDataTableServer, {
        key: 0,
        density: $props.density,
        width: $props.width,
        height: $props.height,
        "items-per-page-text": _ctx.$t("i18n.datatable.itemsPerPageText"),
        headers: $options.getHeaders,
        items: $options.getItems,
        modelValue: $options.listState.selected,
        "items-length": $options.listState.total ? $options.listState.total : 0,
        "show-select": !$props.disableSelect,
        "select-strategy": $props.selectStrategy,
        "disable-sort": $props.disableSort,
        loading: $options.listState.loading,
        "loading-text": _ctx.$t("i18n.datatable.loadingText"),
        "multi-sort": $props.multiSort,
        expanded: $props.expanded,
        "expand-on-click": $props.expandOnClick,
        "show-expand": $props.showExpand,
        "items-per-page": $setup.useListStore.options.itemsPerPage,
        "group-by": $props.groupBy,
        "items-per-page-options": $options.getItemsPerPageOptionsValue,
        options: $setup.useListStore.options,
        page: $setup.useListStore.options.page,
        "sort-by": $setup.useListStore.options.sortBy,
        "onClick:row": $options.onRowClick,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = (v) => $options.listState.selected = v),
        "onUpdate:options": $options.updateOptions,
        "onUpdate:page": $options.updatePage,
        "onUpdate:itemsPerPage": _cache[4] || (_cache[4] = ($event) => $options.updateItemsPerPage($event))
      }, createSlots({
        [`group.header`]: withCtx(({ isOpen, toggle, groupBy, group, isMobile }) => [
          createBaseVNode("td", {
            class: "text-start",
            colspan: isMobile ? void 0 : _ctx.headers.length
          }, [
            createVNode(VBtn, {
              class: "ma-0",
              icon: "",
              small: "",
              onClick: toggle
            }, {
              default: withCtx(() => [
                createVNode(VIcon, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(isOpen ? "$minus" : "$plus"), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["onClick"]),
            createTextVNode(" " + toDisplayString(_ctx.headers.find((header) => header.value === groupBy[0]).text) + ": " + toDisplayString(group), 1)
          ], 8, _hoisted_1$f)
        ]),
        [`item.actions`]: withCtx(({ item }) => [
          createBaseVNode("div", _hoisted_7$2, [
            renderSlot(_ctx.$slots, "cell.actions", normalizeProps(guardReactiveProps({ item })), () => [
              item._new || item.id === $data.editRowId ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createVNode(VTooltip, { bottom: "" }, {
                  activator: withCtx(({ props }) => [
                    createVNode(VBtn, mergeProps({
                      variant: "text",
                      color: "primary",
                      icon: ""
                    }, props, {
                      loading: $data.saving,
                      type: "submit",
                      onClick: _cache[2] || (_cache[2] = withModifiers(() => {
                      }, ["stop"]))
                    }), {
                      default: withCtx(() => [
                        createVNode(VIcon, { style: { "font-size": "1.5rem !important" } }, {
                          default: withCtx(() => _cache[8] || (_cache[8] = [
                            createTextVNode("mdi-floppy")
                          ])),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1040, ["loading"])
                  ]),
                  default: withCtx(() => [
                    createBaseVNode("span", null, toDisplayString(_ctx.$t("i18n.actions.save")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VTooltip, { bottom: "" }, {
                  activator: withCtx(({ props }) => [
                    createVNode(VBtn, mergeProps({
                      variant: "text",
                      color: "red",
                      icon: ""
                    }, props, {
                      onClick: withModifiers($options.cancelRowForm, ["stop"])
                    }), {
                      default: withCtx(() => [
                        createVNode(VIcon, { style: { "font-size": "1.5rem !important" } }, {
                          default: withCtx(() => _cache[9] || (_cache[9] = [
                            createTextVNode("mdi-close")
                          ])),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1040, ["onClick"])
                  ]),
                  default: withCtx(() => [
                    createBaseVNode("span", null, toDisplayString(_ctx.$t("i18n.actions.cancel")), 1)
                  ]),
                  _: 1
                })
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                renderSlot(_ctx.$slots, "row.actions", normalizeProps(guardReactiveProps({ item }))),
                $props.rowShow ? (openBlock(), createBlock(_component_va_row_show_button, {
                  key: 0,
                  resource: $options.listState.resource,
                  item,
                  icon: "",
                  onClick: (item2) => $options.onAction("show", item2)
                }, null, 8, ["resource", "item", "onClick"])) : createCommentVNode("", true),
                !$props.disableShow ? (openBlock(), createBlock(_component_va_show_button, {
                  key: 1,
                  "disable-redirect": $props.disableShowRedirect,
                  resource: $options.listState.resource,
                  item,
                  icon: "",
                  onClick: (item2) => $options.onAction("show", item2)
                }, null, 8, ["disable-redirect", "resource", "item", "onClick"])) : createCommentVNode("", true),
                $props.rowCreate ? (openBlock(), createBlock(_component_va_row_create_button, {
                  key: 2,
                  "disable-redirect": true,
                  resource: $options.listState.resource,
                  item,
                  icon: "",
                  onClick: (item2) => $options.createRowForm(null, "new", item2.index)
                }, null, 8, ["resource", "item", "onClick"])) : createCommentVNode("", true),
                $props.rowSaveDialog ? (openBlock(), createBlock(_component_va_row_save_dialog_button, {
                  key: 3,
                  "disable-redirect": true,
                  resource: $options.listState.resource,
                  item,
                  icon: "",
                  onClick: (item2) => $options.onAction("rowSaveDialog", item2)
                }, null, 8, ["resource", "item", "onClick"])) : createCommentVNode("", true),
                $props.rowClone ? (openBlock(), createBlock(_component_va_row_clone_button, {
                  key: 4,
                  "disable-redirect": $props.disableCreateRedirect,
                  resource: $options.listState.resource,
                  item,
                  icon: "",
                  onClick: (item2) => $options.createRowForm(item2, "new", item2.index)
                }, null, 8, ["disable-redirect", "resource", "item", "onClick"])) : createCommentVNode("", true),
                !$props.disableClone ? (openBlock(), createBlock(_component_va_clone_button, {
                  key: 5,
                  "disable-redirect": $props.disableCreateRedirect,
                  resource: $options.listState.resource,
                  item,
                  icon: "",
                  onClick: (item2) => $options.onAction("create", item2)
                }, null, 8, ["disable-redirect", "resource", "item", "onClick"])) : createCommentVNode("", true),
                !$props.disableEdit ? (openBlock(), createBlock(_component_va_edit_button, {
                  key: 6,
                  "disable-redirect": $props.disableEditRedirect,
                  resource: $options.listState.resource,
                  item,
                  icon: "",
                  onClick: (item2) => $options.onAction("edit", item2, false)
                }, null, 8, ["disable-redirect", "resource", "item", "onClick"])) : createCommentVNode("", true),
                !$props.disableDelete ? (openBlock(), createBlock(_component_va_delete_button, {
                  key: 7,
                  redirect: $props.enableDeleteRedirect,
                  resource: $options.listState.resource,
                  item,
                  icon: "",
                  onDeleted: ($event) => _ctx.$emit("deleted", item)
                }, null, 8, ["redirect", "resource", "item", "onDeleted"])) : createCommentVNode("", true)
              ], 64))
            ])
          ])
        ]),
        "no-data": withCtx(() => [
          createBaseVNode("div", _hoisted_8$2, toDisplayString(_ctx.$t("i18n.datatable.noDataAvailable")), 1)
        ]),
        _: 2
      }, [
        renderList(_ctx.$slots, (_, scopedSlotName) => {
          return {
            name: scopedSlotName,
            fn: withCtx((slotData) => [
              scopedSlotName ? renderSlot(_ctx.$slots, scopedSlotName, normalizeProps(mergeProps({ key: 0 }, slotData))) : createCommentVNode("", true)
            ])
          };
        }),
        renderList($options.getFields, (field) => {
          return {
            name: `item.${field.source}`,
            fn: withCtx(({ item, value }) => [
              item._new || item.id === $data.editRowId ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                field.type == "select" ? (openBlock(), createElementBlock("div", _hoisted_2$a, [
                  (openBlock(), createBlock(resolveDynamicComponent(`va-select-input`), mergeProps({
                    key: $options.getKey(field),
                    source: field.source,
                    resource: $options.listState.resource,
                    item,
                    modelValue: $data.form[field.source],
                    "onUpdate:modelValue": ($event) => $data.form[field.source] = $event,
                    filter: $options.getFieldFilters(field)
                  }, field.attributes, {
                    label: field.label,
                    variant: "outlined",
                    "error-messages": $options.getErrorMessages(field.source),
                    clearable: "",
                    class: "mt-6",
                    onClick: _cache[0] || (_cache[0] = withModifiers(() => {
                    }, ["stop"]))
                  }), null, 16, ["source", "resource", "item", "modelValue", "onUpdate:modelValue", "filter", "label", "error-messages"]))
                ])) : (openBlock(), createElementBlock("div", _hoisted_3$3, [
                  (openBlock(), createBlock(resolveDynamicComponent(`va-${field.input || field.type || "text"}-input`), mergeProps({
                    key: $options.getKey(field),
                    source: field.source,
                    resource: $options.listState.resource,
                    item,
                    filter: $options.getFieldFilters(field),
                    modelValue: $data.form[field.source],
                    "onUpdate:modelValue": ($event) => $data.form[field.source] = $event,
                    variant: "outlined",
                    label: field.type == "boolean" ? " " : field.label,
                    options: $options.getOptions(field)
                  }, field.attributes, {
                    "error-messages": $options.getErrorMessages(field.source),
                    class: field.type == "boolean" ? "" : "mt-6",
                    onClick: _cache[1] || (_cache[1] = withModifiers(() => {
                    }, ["stop"]))
                  }), null, 16, ["source", "resource", "item", "filter", "modelValue", "onUpdate:modelValue", "label", "options", "error-messages", "class"]))
                ]))
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                field.link ? (openBlock(), createElementBlock("div", _hoisted_4$3, [
                  (openBlock(), createBlock(_component_router_link, {
                    key: field.source,
                    to: {
                      name: `${$options.listState.resource}_${field.link}`,
                      params: { id: item.id }
                    }
                  }, {
                    default: withCtx(() => [
                      field.type ? (openBlock(), createBlock(resolveDynamicComponent(`va-${field.type}-field`), mergeProps({
                        key: field.source,
                        source: field.source,
                        resource: $options.listState.resource,
                        variant: "outlined",
                        item,
                        options: $options.getOptions(field)
                      }, field.attributes), {
                        default: withCtx((props) => [
                          renderSlot(_ctx.$slots, `field.${field.source}`, mergeProps({
                            item: props.item || item
                          }, props))
                        ]),
                        _: 2
                      }, 1040, ["source", "resource", "item", "options"])) : renderSlot(_ctx.$slots, `field.${field.source}`, normalizeProps(mergeProps({ key: 1 }, { item, value })), () => [
                        createTextVNode(toDisplayString(value), 1)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["to"]))
                ])) : field.type ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
                  (openBlock(), createBlock(resolveDynamicComponent(`va-${field.type}-field`), mergeProps({
                    key: field.source,
                    source: field.sourceLabel ? field.sourceLabel : field.source,
                    resource: $options.listState.resource,
                    item,
                    variant: "outlined",
                    options: $options.getOptions(field)
                  }, field.attributes), {
                    default: withCtx((props) => [
                      renderSlot(_ctx.$slots, `field.${field.source}`, mergeProps({
                        item: props.item || item
                      }, props))
                    ]),
                    _: 2
                  }, 1040, ["source", "resource", "item", "options"]))
                ])) : (openBlock(), createElementBlock("div", _hoisted_6$2, [
                  renderSlot(_ctx.$slots, `field.${field.source}`, normalizeProps(guardReactiveProps({ item, value })), () => [
                    createTextVNode(toDisplayString(item[field.source]), 1)
                  ])
                ]))
              ], 64))
            ])
          };
        })
      ]), 1032, ["density", "width", "height", "items-per-page-text", "headers", "items", "modelValue", "items-length", "show-select", "select-strategy", "disable-sort", "loading", "loading-text", "multi-sort", "expanded", "expand-on-click", "show-expand", "items-per-page", "group-by", "items-per-page-options", "options", "page", "sort-by", "onClick:row", "onUpdate:options", "onUpdate:page"])) : createCommentVNode("", true),
      createBaseVNode("template", null, [
        createVNode(VRow, { justify: "center" }, {
          default: withCtx(() => [
            createVNode(VDialog, {
              modelValue: $data.dialog,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.dialog = $event),
              persistent: "",
              width: $props.rowSaveDialogWidth,
              height: $props.rowSaveDialogHeight
            }, {
              default: withCtx(() => [
                createVNode(VCard, null, {
                  default: withCtx(() => [
                    createVNode(VCardTitle, { class: "mt-2 ml-1" }, {
                      default: withCtx(() => [
                        createBaseVNode("span", _hoisted_9$2, toDisplayString($options.getPageTitle), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent($options.getRowSaveComponentName), { item: $data.item }, null, 8, ["item"]))
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          color: "primary",
                          variant: "text",
                          onClick: _cache[5] || (_cache[5] = ($event) => $data.dialog = false)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("i18n.actions.close")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue", "width", "height"])
          ]),
          _: 1
        })
      ])
    ], 32)
  ], 2);
}
const DataTableServer = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["render", _sfc_render$V]]);
const _sfc_main$U = {
  mixins: [Resource],
  inject: {
    listState: {
      default: {}
    }
  },
  provide() {
    return {
      admin: this.admin
    };
  },
  props: {
    class: {
      type: String,
      default() {
        return "va-data-iterator";
      }
    },
    /**
     * Pagination settings
     */
    pagination: {
      type: Object,
      default: {
        density: "default",
        activeColor: "primary",
        head: false,
        // Enable v-pagination for header
        foot: true,
        // Enable v-pagination for footer
        rounded: "pill"
        // Set pagination rounded style: 0, sm, lg, xl, pill, circle, shaped
      }
    },
    /**
     * Enable row expand mode.
     * Use it for quick detail view.
     */
    showExpand: Boolean,
    /**
     * Only one row can expanded at once
     */
    expandOnClick: {
      type: Boolean,
      default: true
    },
    /**
     * Group by array
     */
    groupBy: {
      type: Array
    },
    /**
     * Shows the column with checkboxes for selecting items in the list.
     */
    showSelect: Boolean,
    /**
     * Property on supplied items that contains the boolean value 
     * indicating if the item is selectable.
     */
    itemSelectable: String,
    /**
     * Select strategy 'single' | 'page' | 'all'
     */
    selectStrategy: {
      type: String,
      default: "page"
    },
    /**
     * Changes the selection behavior to return the object directly 
     * rather than the value specified with item-value.
     */
    returnObject: Boolean,
    /**
     * If true then one can not disable sorting, 
     * it will always switch between ascending and descending.
     */
    mustSort: Boolean,
    /**
     * Enable multi sort feature, enabled by default.
     */
    multiSort: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      selected: []
    };
  },
  watch: {
    multiSort: {
      handler(val) {
        this.listState.options.multiSort = val;
      },
      immediate: true
    },
    "selected"(val) {
      this.$emit("selected", val);
    }
  },
  computed: {
    getTotalPages() {
      let total = Math.ceil(this.listState.total / this.listState.options.itemsPerPage);
      return total;
    },
    getItems() {
      if (this.listState["items"] && this.listState.items.length > 0) {
        return this.listState.items.map((items, index2) => ({
          ...items,
          index: index2
        }));
      }
      return this.listState.items;
    }
  },
  methods: {
    updatePage(page) {
      this.listState.options.page = page;
      this.listState.reload();
    },
    updateItemsPerPage(page) {
      this.listState.options.itemsPerPage = page;
      this.listState.reload();
    }
  }
};
const _hoisted_1$e = {
  key: 0,
  class: "mb-5 text-center"
};
const _hoisted_2$9 = {
  key: 0,
  class: "mt-5 mb-5 text-center"
};
function _sfc_render$U(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($props.class)
  }, [
    createBaseVNode("form", null, [
      createVNode(VDataIterator, {
        items: $options.getItems,
        modelValue: $options.listState.selected,
        "items-length": $options.listState.total ? $options.listState.total : 0,
        "items-per-page": $options.listState.options.itemsPerPage,
        "item-selectable": $props.itemSelectable,
        page: $options.listState.options.page,
        "multi-sort": $props.multiSort,
        "must-sort": $props.mustSort,
        "expand-on-click": $props.expandOnClick,
        "show-expand": $props.showExpand,
        "select-strategy": $props.selectStrategy,
        "show-select": $props.showSelect,
        options: $options.listState.options,
        "sort-by": $options.listState.options.sortBy,
        "group-by": $props.groupBy,
        "return-object": $props.returnObject,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = (v) => $options.listState.selected = v),
        "onUpdate:itemsPerPage": _cache[3] || (_cache[3] = ($event) => $options.updateItemsPerPage($event))
      }, createSlots({
        header: withCtx(() => [
          $props.pagination.top ? (openBlock(), createElementBlock("div", _hoisted_1$e, [
            renderSlot(_ctx.$slots, "top.pagination.header", normalizeProps(guardReactiveProps({ page: $options.listState.options.page, pageCount: $options.getTotalPages }))),
            $options.getTotalPages > 0 ? (openBlock(), createBlock(VPagination, {
              key: 0,
              density: $props.pagination.density,
              rounded: $props.pagination.rounded,
              "active-color": $props.pagination.activeColor,
              modelValue: $options.listState.options.page,
              "onUpdate:modelValue": [
                _cache[0] || (_cache[0] = ($event) => $options.listState.options.page = $event),
                $options.updatePage
              ],
              length: $options.getTotalPages
            }, null, 8, ["density", "rounded", "active-color", "modelValue", "length", "onUpdate:modelValue"])) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "top.pagination.footer", normalizeProps(guardReactiveProps({ page: $options.listState.options.page, pageCount: $options.getTotalPages })))
          ])) : createCommentVNode("", true)
        ]),
        footer: withCtx(() => [
          $props.pagination.bottom ? (openBlock(), createElementBlock("div", _hoisted_2$9, [
            renderSlot(_ctx.$slots, "bottom.pagination.header", normalizeProps(guardReactiveProps({ page: $options.listState.options.page, pageCount: $options.getTotalPages }))),
            $options.getTotalPages > 0 ? (openBlock(), createBlock(VPagination, {
              key: 0,
              density: $props.pagination.density,
              rounded: $props.pagination.rounded,
              "active-color": $props.pagination.activeColor,
              modelValue: $options.listState.options.page,
              "onUpdate:modelValue": [
                _cache[1] || (_cache[1] = ($event) => $options.listState.options.page = $event),
                $options.updatePage
              ],
              length: $options.getTotalPages
            }, null, 8, ["density", "rounded", "active-color", "modelValue", "length", "onUpdate:modelValue"])) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "bottom.pagination.footer", normalizeProps(guardReactiveProps({ page: $options.listState.options.page, pageCount: $options.getTotalPages })))
          ])) : createCommentVNode("", true)
        ]),
        _: 2
      }, [
        renderList(_ctx.$slots, (_, scopedSlotName) => {
          return {
            name: scopedSlotName,
            fn: withCtx((slotData) => [
              scopedSlotName ? renderSlot(_ctx.$slots, scopedSlotName, normalizeProps(mergeProps({ key: 0 }, slotData))) : createCommentVNode("", true)
            ])
          };
        })
      ]), 1032, ["items", "modelValue", "items-length", "items-per-page", "item-selectable", "page", "multi-sort", "must-sort", "expand-on-click", "show-expand", "select-strategy", "show-select", "options", "sort-by", "group-by", "return-object"])
    ])
  ], 2);
}
const DataIteratorServer = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["render", _sfc_render$U]]);
const _sfc_main$T = {
  mixins: [Utils],
  inject: ["listState"],
  props: {
    class: {
      type: String,
      default() {
        return "va-category-tree";
      }
    },
    /**
     * Use different styles: 
     * 
     * | 'outlined' | 'plain' | 'underlined' | 'filled' | 'solo' | 'solo-inverted' | 'solo-filled'
     */
    variant: {
      type: String,
      default: "outlined"
    },
    itemValue: {
      type: [String, Array, Function],
      default: "id"
    },
    itemText: {
      type: [String, Array, Function],
      default: "name"
    },
    density: {
      type: String,
      default: "compact"
    },
    openAll: {
      type: Boolean,
      default() {
        return false;
      }
    },
    url: {
      type: String,
      default: "/categories/findAllByPaging"
    }
  },
  setup() {
    return { tv$: useVuelidate() };
  },
  validations() {
    return {
      categoryTreeForm: {
        name: {
          required
        },
        parentId: {
          required
        }
      }
    };
  },
  async created() {
    var _a;
    this.listState.loading = true;
    let response = await this.$admin.http.get(this.url);
    if (response && ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.data)) {
      this.items = response.data.data;
    }
    this.searchFilter = function(value, search, item) {
      return value.toLowerCase().indexOf(search.toLowerCase()) > -1;
    };
    this.listState.loading = false;
  },
  data() {
    return {
      move: false,
      search: null,
      searchFilter: null,
      items: [],
      // ------ editable row items ------//
      categoryTreeForm: {},
      editRowId: null,
      editedItem: null,
      fields: [
        {
          source: "name",
          type: "text",
          label: this.$t("i18n.categories.name")
        },
        {
          source: "move",
          type: "boolean",
          label: this.$t("i18n.categories.move")
        },
        {
          source: "parentId",
          type: "select",
          attributes: {
            reference: "categories"
          },
          label: this.$t("i18n.categories.parentId")
        }
      ]
    };
  },
  computed: {
    getFields() {
      let fields = this.fields.map((f) => {
        return typeof f === "string" ? {
          source: f
        } : f;
      }).map((f) => {
        return {
          ...f,
          type: f.type,
          label: f.label || this.$admin.getSourceLabel(
            this.listState.resource,
            f.labelKey || f.source
          )
        };
      });
      fields["id"] = null;
      return fields;
    },
    getNameErrorMessages() {
      const errors = [];
      if (!this.tv$["categoryTreeForm"]["name"].$dirty) return errors;
      this.tv$["categoryTreeForm"]["name"].required.$invalid && errors.push(this.$t("v.text.required"));
      return errors;
    },
    getParentIdErrorMessages() {
      const errors = [];
      if (!this.tv$["categoryTreeForm"]["parentId"].$dirty) return errors;
      this.tv$["categoryTreeForm"]["parentId"].required.$invalid && errors.push(this.$t("v.text.required"));
      return errors;
    }
  },
  methods: {
    editItem(item) {
      this.editedItem = item;
      this.$emit("edit", item);
      this.createRowForm(item);
      event.stopPropagation();
    },
    createRowForm(item = null) {
      const Self = this;
      this.categoryTreeForm = this.fields.map((f) => f).reduce(function(o, f) {
        return {
          ...o,
          [f.source]: Self.getValue(f, item)
          // default value
        };
      }, {});
      this.editRowId = item ? item["id"] : null;
    },
    getValue(f, item) {
      if (f && Object.prototype.hasOwnProperty.call(f, "value")) {
        return f.value;
      }
      if (item[f.source]) {
        return item[f.source];
      }
      return null;
    },
    saveItem(event2) {
      event2.stopPropagation();
      this.tv$["categoryTreeForm"].$touch();
      if (this.tv$.$invalid) {
        return false;
      }
      this.editedItem.name = this.categoryTreeForm.name;
      this.editedItem.move = 0;
      if (this.categoryTreeForm["parentId"]) {
        this.editedItem.parentId = this.categoryTreeForm["parentId"];
      }
      if (this.categoryTreeForm["move"]) {
        this.editedItem.move = this.categoryTreeForm["move"];
      }
      this.$emit("save", this.editedItem);
      this.close();
    },
    deleteItem(item) {
      this.$emit("delete", item);
      this.close();
    },
    cancel(event2) {
      event2.stopPropagation();
      this.close();
    },
    close() {
      this.$nextTick(async () => {
        this.tv$.$reset();
      });
      this.categoryTreeForm = null;
      this.editedItem = null;
      this.editRowId = null;
      this.dialogDelete = false;
    }
  }
};
const _hoisted_1$d = {
  key: 0,
  class: "mt-2 mb-2"
};
const _hoisted_2$8 = { key: 1 };
function _sfc_render$T(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_text_input = resolveComponent("va-text-input");
  const _component_va_boolean_input = resolveComponent("va-boolean-input");
  const _component_va_select_input = resolveComponent("va-select-input");
  const _component_va_edit_button = resolveComponent("va-edit-button");
  const _component_va_delete_button = resolveComponent("va-delete-button");
  const _component_v_treeview = resolveComponent("v-treeview");
  return openBlock(), createBlock(VRow, {
    "no-gutters": "",
    class: normalizeClass($props.class)
  }, {
    default: withCtx(() => [
      createVNode(VCol, null, {
        default: withCtx(() => [
          createVNode(VRow, { "no-gutters": "" }, {
            default: withCtx(() => [
              createVNode(VCol, {
                cols: "12",
                lg: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_va_text_input, {
                    source: "search",
                    modelValue: $data.search,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.search = $event),
                    variant: "outlined",
                    "clear-icon": "mdi-close-circle-outline",
                    label: _ctx.$t("i18n.actions.q"),
                    clearable: "",
                    "hide-details": "",
                    "solo-inverted": ""
                  }, null, 8, ["modelValue", "label"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(VRow, { "no-gutters": "" }, {
            default: withCtx(() => [
              createVNode(VCol, {
                cols: "12",
                lg: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_treeview, {
                    variant: $props.variant,
                    search: $data.search,
                    "custom-filter": $data.searchFilter,
                    "selected-color": "primary",
                    density: $props.density,
                    "open-all": $props.openAll,
                    items: $data.items,
                    "item-value": $props.itemValue,
                    "item-title": $props.itemText
                  }, createSlots({
                    title: withCtx(({ item }) => [
                      item.id === $data.editRowId ? (openBlock(), createElementBlock("div", _hoisted_1$d, [
                        createVNode(_component_va_text_input, {
                          source: "name",
                          resource: $options.listState.resource,
                          item,
                          modelValue: $data.categoryTreeForm["name"],
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.categoryTreeForm["name"] = $event),
                          label: _ctx.$t("i18n.categories.name"),
                          "error-messages": $options.getNameErrorMessages,
                          "hide-details": ""
                        }, null, 8, ["resource", "item", "modelValue", "label", "error-messages"]),
                        createVNode(_component_va_boolean_input, {
                          class: "mb-1",
                          modelValue: $data.categoryTreeForm["move"],
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.categoryTreeForm["move"] = $event),
                          color: "primary",
                          label: _ctx.$t("i18n.categories.move"),
                          onClick: _cache[3] || (_cache[3] = withModifiers(() => {
                          }, ["stop"])),
                          "hide-details": ""
                        }, null, 8, ["modelValue", "label"]),
                        $data.categoryTreeForm["move"] ? (openBlock(), createBlock(_component_va_select_input, {
                          key: 0,
                          class: "mb-3",
                          source: "parentId",
                          resource: $options.listState.resource,
                          item,
                          modelValue: $data.categoryTreeForm["parentId"],
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.categoryTreeForm["parentId"] = $event),
                          reference: "categories",
                          label: _ctx.$t("i18n.categories.parentId"),
                          "return-object": false,
                          "error-messages": $options.getParentIdErrorMessages,
                          "hide-details": ""
                        }, null, 8, ["resource", "item", "modelValue", "label", "error-messages"])) : createCommentVNode("", true),
                        createBaseVNode("div", null, [
                          createVNode(VBtn, {
                            flat: "",
                            class: "mr-2",
                            onClick: _cache[5] || (_cache[5] = ($event) => $options.saveItem($event))
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("i18n.actions.save")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "secondary",
                            onClick: _cache[6] || (_cache[6] = ($event) => $options.cancel($event))
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("i18n.actions.cancel")), 1)
                            ]),
                            _: 1
                          })
                        ])
                      ])) : (openBlock(), createElementBlock("div", _hoisted_2$8, [
                        createBaseVNode("span", null, toDisplayString(item.name), 1),
                        _cache[7] || (_cache[7] = createBaseVNode("span", null, "  ", -1)),
                        createBaseVNode("span", null, [
                          createVNode(_component_va_edit_button, {
                            "disable-redirect": "",
                            class: "mr-2",
                            resource: $options.listState.resource,
                            item,
                            icon: "",
                            onClick: ($event) => $options.editItem(item)
                          }, null, 8, ["resource", "item", "onClick"]),
                          createVNode(_component_va_delete_button, {
                            resource: $options.listState.resource,
                            icon: "",
                            item,
                            "disable-delete": "",
                            onDelete: ($event) => $options.deleteItem(item)
                          }, null, 8, ["resource", "item", "onDelete"])
                        ])
                      ]))
                    ]),
                    _: 2
                  }, [
                    renderList(_ctx.$slots, (_, scopedSlotName) => {
                      return {
                        name: scopedSlotName,
                        fn: withCtx((slotData) => [
                          scopedSlotName ? renderSlot(_ctx.$slots, scopedSlotName, normalizeProps(mergeProps({ key: 0 }, slotData))) : createCommentVNode("", true)
                        ])
                      };
                    })
                  ]), 1032, ["variant", "search", "custom-filter", "density", "open-all", "items", "item-value", "item-title"])
                ]),
                _: 3
              })
            ]),
            _: 3
          })
        ]),
        _: 3
      })
    ]),
    _: 3
  }, 8, ["class"]);
}
const CategoryTree = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["render", _sfc_render$T]]);
const Button = {
  mixins: [Resource],
  props: {
    /**
     * Item attached to the button.
     */
    item: null,
    /**
     * If true, show button with icon only, label will be shown as tooltip.
     */
    icon: Boolean,
    /**
     * Customizable background or text color, dependably of text prop value.
     */
    color: String
  },
  methods: {
    onClick() {
      this.$emit("click", this.item);
    }
  }
};
const _sfc_main$S = {
  mixins: [Resource, Button],
  data() {
    return {
      visible: false
    };
  },
  async created() {
    this.visible = await this.hasAction("list");
  }
};
function _sfc_render$S(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_action_button = resolveComponent("va-action-button");
  return $data.visible ? (openBlock(), createBlock(_component_va_action_button, {
    key: 0,
    "hide-label": _ctx.icon,
    item: _ctx.item,
    label: _ctx.$t("i18n.actions.list"),
    icon: "mdi-view-list",
    color: _ctx.color || "success",
    text: "",
    exact: "",
    to: { name: `${_ctx.resource}_list` }
  }, null, 8, ["hide-label", "item", "label", "color", "to"])) : createCommentVNode("", true);
}
const ListButton = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["render", _sfc_render$S]]);
const RedirectButton = {
  mixins: [Button],
  props: {
    /**
     * Disable default redirect behavior for compatible buttons
     * Force button to be shown, prevent hiding it according to default behavior if no action exist.
     */
    disableRedirect: Boolean
  },
  methods: {
    async canShow(action) {
      let visible = await this.hasAction(action);
      return (this.disableRedirect || this.hasRoute(action)) && visible;
    },
    getRoute(action, params) {
      if (!this.disableRedirect && this.hasRoute(action)) {
        if (action == "edit") {
          localStorage.removeItem("path");
          localStorage.setItem("listQuery", JSON.stringify(this.$route.query));
        }
        return {
          name: `${this.resource}_${action}`,
          ...params
        };
      }
      return null;
    }
  }
};
const _sfc_main$R = {
  mixins: [Resource, RedirectButton],
  data() {
    return {
      visible: false
    };
  },
  async created() {
    this.visible = await this.canShow("create");
  }
};
function _sfc_render$R(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_action_button = resolveComponent("va-action-button");
  return $data.visible ? (openBlock(), createBlock(_component_va_action_button, {
    key: 0,
    "hide-label": _ctx.icon,
    item: _ctx.item,
    label: _ctx.$t("i18n.actions.create"),
    icon: "mdi-plus",
    "icon-size": "default",
    color: _ctx.color || "success",
    text: "",
    to: _ctx.getRoute("create"),
    onClick: _ctx.onClick
  }, null, 8, ["hide-label", "item", "label", "color", "to", "onClick"])) : createCommentVNode("", true);
}
const CreateButton = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["render", _sfc_render$R]]);
const _sfc_main$Q = {
  mixins: [RedirectButton],
  data() {
    return {
      visible: false
    };
  },
  async created() {
    this.visible = await this.canShow("show");
  }
};
function _sfc_render$Q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_action_button = resolveComponent("va-action-button");
  return _ctx.item && $data.visible ? (openBlock(), createBlock(_component_va_action_button, {
    key: 0,
    "hide-label": _ctx.icon,
    item: _ctx.item,
    label: _ctx.$t("i18n.actions.show"),
    icon: "mdi-eye",
    color: _ctx.color,
    variant: "text",
    exact: "",
    to: _ctx.getRoute("show", { params: { id: _ctx.item.id } }),
    onClick: _ctx.onClick
  }, null, 8, ["hide-label", "item", "label", "color", "to", "onClick"])) : createCommentVNode("", true);
}
const ShowButton = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["render", _sfc_render$Q]]);
const _sfc_main$P = {
  mixins: [RedirectButton],
  data() {
    return {
      visible: false
    };
  },
  async created() {
    this.visible = await this.canShow("edit");
  }
};
function _sfc_render$P(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_action_button = resolveComponent("va-action-button");
  return _ctx.item && $data.visible ? (openBlock(), createBlock(_component_va_action_button, {
    key: 0,
    "hide-label": _ctx.icon,
    item: _ctx.item,
    label: _ctx.$t("i18n.actions.edit"),
    icon: "mdi-pencil",
    "icon-size": "x-small",
    color: _ctx.color,
    variant: "text",
    exact: "",
    to: _ctx.getRoute("edit", { params: { id: _ctx.item.id } }),
    onClick: _ctx.onClick
  }, null, 8, ["hide-label", "item", "label", "color", "to", "onClick"])) : createCommentVNode("", true);
}
const EditButton = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["render", _sfc_render$P]]);
const _sfc_main$O = {
  mixins: [RedirectButton],
  data() {
    return {
      visible: false
    };
  },
  async created() {
    this.visible = await this.canShow("edit");
  }
};
function _sfc_render$O(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_action_button = resolveComponent("va-action-button");
  return _ctx.item && $data.visible ? (openBlock(), createBlock(_component_va_action_button, {
    key: 0,
    "hide-label": _ctx.icon,
    item: _ctx.item,
    label: _ctx.$t("i18n.actions.edit"),
    icon: "mdi-table-edit",
    color: _ctx.color,
    text: "",
    exact: "",
    onClick: _ctx.onClick
  }, null, 8, ["hide-label", "item", "label", "color", "onClick"])) : createCommentVNode("", true);
}
const RowSaveDialogButton = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["render", _sfc_render$O]]);
const _sfc_main$N = {
  mixins: [Resource, RedirectButton],
  data() {
    return {
      visible: false
    };
  },
  async created() {
    this.visible = await this.canShow("create");
  }
};
function _sfc_render$N(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_action_button = resolveComponent("va-action-button");
  return $data.visible ? (openBlock(), createBlock(_component_va_action_button, {
    key: 0,
    "hide-label": _ctx.icon,
    item: _ctx.item,
    label: _ctx.$t("i18n.actions.addRow"),
    icon: "mdi-plus",
    color: _ctx.color,
    text: "",
    to: _ctx.getRoute("create"),
    onClick: _ctx.onClick
  }, null, 8, ["hide-label", "item", "label", "color", "to", "onClick"])) : createCommentVNode("", true);
}
const RowCreateButton = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$N]]);
const _sfc_main$M = {
  mixins: [RedirectButton],
  data() {
    return {
      visible: false
    };
  },
  async created() {
    this.visible = await this.canShow("create");
  },
  methods: {
    openDialog() {
      eventBus.emit("last-dialog", true, "create");
    }
  }
};
function _sfc_render$M(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_action_button = resolveComponent("va-action-button");
  return $data.visible ? (openBlock(), createBlock(_component_va_action_button, {
    key: 0,
    "hide-label": _ctx.icon,
    label: _ctx.$t("i18n.actions.addNew"),
    icon: "mdi-dock-window",
    color: _ctx.color || "success",
    text: "",
    exact: "",
    onClick: $options.openDialog
  }, null, 8, ["hide-label", "label", "color", "onClick"])) : createCommentVNode("", true);
}
const CreateDialogButton = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$M]]);
const _sfc_main$L = {
  mixins: [RedirectButton],
  data() {
    return {
      visible: false
    };
  },
  async created() {
    this.visible = await this.canShow("create");
  }
};
function _sfc_render$L(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_action_button = resolveComponent("va-action-button");
  return _ctx.item && $data.visible ? (openBlock(), createBlock(_component_va_action_button, {
    key: 0,
    "hide-label": _ctx.icon,
    item: _ctx.item,
    label: _ctx.$t("i18n.actions.clone"),
    icon: "mdi-content-duplicate",
    color: _ctx.color,
    text: "",
    exact: "",
    to: _ctx.getRoute("create", { query: { source: _ctx.item.id } }),
    onClick: _ctx.onClick
  }, null, 8, ["hide-label", "item", "label", "color", "to", "onClick"])) : createCommentVNode("", true);
}
const RowCloneButton = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["render", _sfc_render$L]]);
const _sfc_main$K = {
  mixins: [Resource, RedirectButton],
  data() {
    return {
      visible: false,
      menu: false
    };
  },
  computed: {
    getShowComponentName() {
      return this.resource + "RowShow";
    }
  },
  async created() {
    this.visible = await this.canShow("show");
  },
  methods: {}
};
function _sfc_render$K(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_action_button = resolveComponent("va-action-button");
  return openBlock(), createBlock(VMenu, {
    modelValue: $data.menu,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.menu = $event),
    "close-on-content-click": false,
    location: "end"
  }, {
    activator: withCtx(({ props }) => [
      _ctx.item && $data.visible ? (openBlock(), createBlock(_component_va_action_button, {
        key: 0,
        "hide-label": true,
        item: _ctx.item,
        label: _ctx.$t("i18n.actions.show"),
        icon: "mdi-eye",
        color: _ctx.color,
        variant: "text",
        exact: "",
        externalProps: props,
        onClick: _cache[0] || (_cache[0] = ($event) => $data.menu = !$data.menu)
      }, null, 8, ["item", "label", "color", "externalProps"])) : createCommentVNode("", true)
    ]),
    default: withCtx(() => [
      createVNode(VCard, {
        "min-width": "300",
        "max-width": "1200"
      }, {
        default: withCtx(() => [
          createVNode(VList, null, {
            default: withCtx(() => [
              createVNode(VListItem, { id: "testing-code" }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent($options.getShowComponentName), { item: _ctx.item }, null, 8, ["item"]))
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(VCardActions, null, {
            default: withCtx(() => [
              createVNode(VSpacer),
              createVNode(VBtn, {
                variant: "text",
                onClick: _cache[1] || (_cache[1] = ($event) => $data.menu = false)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("i18n.actions.close")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
const RowShowButton = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$K]]);
const _sfc_main$J = {
  mixins: [Button],
  inject: [],
  props: {
    /**
     * Redirect to resource list after successful deletion.
     * Default redirect active if current page is resource being deleted.
     */
    redirect: Boolean,
    /**
     * Router queries
     */
    query: Object,
    /**
     * Disable delete
     */
    disableDelete: Boolean
  },
  data() {
    return {
      visible: false,
      user: {
        id: null
      }
    };
  },
  async created() {
    let user = await this.$store.getModule("auth").checkAuth();
    this.user.id = user.id;
    this.visible = await this.hasAction("delete");
  },
  computed: {
    isItMine() {
      if (this.item && typeof this.item.id != "undefined" && this.item.id && this.item.id == this.user.id) {
        return true;
      }
      return false;
    }
  },
  methods: {
    async onDelete() {
      if (!this.item) {
        this.$emit("delete");
        return;
      }
      if (this.disableDelete && await this.$admin.confirm(
        this.$t("i18n.confirm.deleteTitle", {
          resource: this.currentResource.singularName,
          id: this.item.id
        }),
        this.$t("i18n.confirm.deleteMessage", {
          resource: this.currentResource.singularName,
          id: this.item.id
        })
      )) {
        this.$emit("delete");
        return;
      }
      if (await this.$admin.confirm(
        this.$t("i18n.confirm.deleteTitle", {
          resource: this.currentResource.singularName,
          id: this.item.id
        }),
        this.$t("i18n.confirm.deleteMessage", {
          resource: this.currentResource.singularName,
          id: this.item.id
        })
      )) {
        const Self = this;
        const resource$1 = resource();
        resource$1.setResource(this.resource);
        await resource$1.delete({
          id: this.item.id,
          query: this.query
        }).then(function() {
          if (Self.redirect) {
            Self.$router.push({ name: `${Self.resource}_list` });
            return;
          }
          if (Self.item) {
            Self.$emit("refresh", true);
            setTimeout(function() {
              resource$1.refresh();
            }, 200);
          }
          Self.$emit("deleted");
        });
      }
    }
  }
};
function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_action_button = resolveComponent("va-action-button");
  return $data.visible && !$options.isItMine ? (openBlock(), createBlock(_component_va_action_button, {
    key: 0,
    "hide-label": _ctx.icon,
    label: _ctx.$t("i18n.actions.delete"),
    icon: "mdi-delete-forever",
    "icon-size": "x-small",
    color: _ctx.color || "red",
    text: "",
    onClick: $options.onDelete
  }, null, 8, ["hide-label", "label", "color", "onClick"])) : createCommentVNode("", true);
}
const DeleteButton = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$J]]);
const _sfc_main$I = {
  mixins: [Button],
  inject: [],
  props: {
    /**
     * Redirect to resource list after successful deletion.
     * Default redirect active if current page is resource being deleted.
     */
    redirect: Boolean
  },
  data() {
    return {
      visible: false
    };
  },
  async created() {
    this.visible = await this.hasAction("create");
  },
  methods: {
    async onCopy() {
      if (!this.item) {
        this.$emit("copy");
        return;
      }
      if (await this.admin.confirm(
        this.$t("i18n.confirm.copy_title", {
          resource: this.currentResource.singularName.toLowerCase(),
          id: this.item.id
        }),
        this.$t("i18n.confirm.copy_message", {
          resource: this.currentResource.singularName.toLowerCase(),
          id: this.item.id
        })
      )) {
        const Self = this;
        const resource$1 = resource();
        resource$1.setResource(this.resource);
        await resource$1.copy({
          id: this.item.id
        }).then(function() {
          if (Self.redirect) {
            Self.$router.push({ name: `${Self.resource}_list` });
            return;
          }
          setTimeout(function() {
            resource$1.refresh();
          }, 200);
        });
        this.$emit("copied");
      }
    }
  }
};
function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_action_button = resolveComponent("va-action-button");
  return $data.visible ? (openBlock(), createBlock(_component_va_action_button, {
    key: 0,
    "hide-label": _ctx.icon,
    label: _ctx.$t("i18n.actions.copy"),
    icon: "mdi-content-copy",
    "icon-size": "x-small",
    color: _ctx.color || "green",
    text: "",
    onClick: $options.onCopy
  }, null, 8, ["hide-label", "label", "color", "onClick"])) : createCommentVNode("", true);
}
const CopyButton = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$I]]);
const _sfc_main$H = {
  mixins: [Button],
  inject: {
    formState: { default: void 0 }
  },
  props: {
    /**
     * Remove background button.
     */
    text: Boolean,
    /**
     * Override default label.
     */
    label: String,
    /**
     * Default route resource action to redirect after saving.
     * Disable the default submit behavior if set.
     * For specific redirect on submit, prefer `redirect` prop on `VaForm`
     * @values list, create, show, edit
     */
    redirect: {
      type: String,
      validator: (v) => ["list", "create", "show", "edit"].includes(v)
    }
  },
  computed: {
    defaultLabel() {
      if (this.redirect) {
        return this.$t(
          `i18n.actions.saveAnd${this.redirect === "create" ? "Add" : this.redirect}`
        );
      }
      return this.$t("i18n.actions.save");
    }
  },
  methods: {
    async onClick() {
      if (!this.redirect) {
        return;
      }
      await this.formState.submit(this.redirect);
    }
  }
};
function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_action_button = resolveComponent("va-action-button");
  return openBlock(), createBlock(_component_va_action_button, {
    "hide-label": _ctx.icon,
    label: $props.label || $options.defaultLabel,
    item: _ctx.item,
    icon: "mdi-content-save",
    color: _ctx.color,
    type: $props.redirect ? "button" : "submit",
    loading: $options.formState && $options.formState.saving,
    variant: null,
    onClick: $options.onClick
  }, null, 8, ["hide-label", "label", "item", "color", "type", "loading", "onClick"]);
}
const SaveButton = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["render", _sfc_render$H]]);
const _sfc_main$G = {
  mixins: [RedirectButton],
  data() {
    return {
      visible: false
    };
  },
  async created() {
    this.visible = await this.canShow("create");
  }
};
function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_action_button = resolveComponent("va-action-button");
  return _ctx.item && $data.visible ? (openBlock(), createBlock(_component_va_action_button, {
    key: 0,
    "hide-label": _ctx.icon,
    item: _ctx.item,
    label: _ctx.$t("i18n.actions.clone"),
    icon: "mdi-content-duplicate",
    "icon-size": "x-small",
    color: _ctx.color,
    text: "",
    exact: "",
    to: _ctx.getRoute("create", { query: { source: _ctx.item.id } }),
    onClick: _ctx.onClick
  }, null, 8, ["hide-label", "item", "label", "color", "to", "onClick"])) : createCommentVNode("", true);
}
const CloneButton = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$G]]);
const ActionButton$1 = {
  props: {
    /**
     * Icon button, must be a valid MDI.
     */
    icon: String,
    /**
     * Label of button, shown as label next icon or as tooltip.
     */
    label: {
      type: String,
      required: false
    },
    /**
     * Hide label next of icon. Will appear as tooltip.
     */
    hideLabel: {
      type: Boolean,
      default: false
    },
    /**
     * Color of button.
     */
    color: {
      type: String,
      default: "primary"
    },
    /**
     * Show as text without background.
     */
    text: Boolean
  },
  methods: {
    onClick(e) {
      if (e.stopPropagation) e.stopPropagation();
      this.$emit("click", this.item);
    }
  }
};
const _sfc_main$F = {
  setup() {
    const { lgAndUp } = useDisplay();
    return { lgAndUp };
  },
  mixins: [ActionButton$1],
  props: {
    /**
     * Explicit item resource object where all properties must be injected into form model.
     */
    item: {
      type: Object,
      default: () => {
      }
    },
    /**
     * Extra props
     */
    externalProps: {
      type: Object,
      default: () => {
      }
    },
    /**
     * Set the button's variant.
     */
    variant: {
      type: String,
      default: "text"
    },
    /**
     * Set icon size
     */
    iconSize: {
      type: String,
      default: "default"
    },
    /**
     * Set the button's type attribute.
     */
    type: {
      type: String,
      default: "button"
    },
    /**
     * Vue route to redirect on click.
     */
    to: [String, Object],
    /**
     * Turn button to anchor and use href.
     */
    href: [String, Object],
    /**
     * Anchor target if href used.
     */
    target: String,
    /**
     * Active a spinner if enabled.
     */
    loading: Boolean
  }
};
const _hoisted_1$c = {
  key: 0,
  class: "ml-2"
};
const _hoisted_2$7 = {
  key: 0,
  class: "ml-2"
};
function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", null, [
    $props.variant ? (openBlock(), createBlock(VBtn, mergeProps({
      key: 0,
      variant: $props.variant,
      icon: _ctx.hideLabel || !$setup.lgAndUp,
      href: $props.href,
      target: $props.target,
      to: $props.to,
      onClick: _ctx.onClick,
      color: _ctx.color
    }, $props.externalProps, {
      exact: "",
      type: $props.type,
      loading: $props.loading
    }), {
      default: withCtx(() => [
        createVNode(VIcon, { size: $props.iconSize }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.icon), 1)
          ]),
          _: 1
        }, 8, ["size"]),
        !_ctx.hideLabel && $setup.lgAndUp ? (openBlock(), createElementBlock("span", _hoisted_1$c, toDisplayString(_ctx.label), 1)) : createCommentVNode("", true)
      ]),
      _: 1
    }, 16, ["variant", "icon", "href", "target", "to", "onClick", "color", "type", "loading"])) : (openBlock(), createBlock(VBtn, mergeProps({
      key: 1,
      icon: _ctx.hideLabel || !$setup.lgAndUp,
      href: $props.href,
      target: $props.target,
      to: $props.to,
      onClick: _ctx.onClick,
      color: _ctx.color
    }, $props.externalProps, {
      exact: "",
      type: $props.type,
      loading: $props.loading
    }), {
      default: withCtx(() => [
        createVNode(VIcon, { size: $props.iconSize }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.icon), 1)
          ]),
          _: 1
        }, 8, ["size"]),
        !_ctx.hideLabel && $setup.lgAndUp ? (openBlock(), createElementBlock("span", _hoisted_2$7, toDisplayString(_ctx.label), 1)) : createCommentVNode("", true)
      ]),
      _: 1
    }, 16, ["icon", "href", "target", "to", "onClick", "color", "type", "loading"]))
  ]);
}
const ActionButton = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$F]]);
const _sfc_main$E = {
  mixins: [ActionButton$1],
  inject: {
    listState: { default: void 0 }
  },
  props: {
    /**
     * Selected resources items.
     */
    value: Array,
    /**
     * Data object to send on `updateMany` data provider method.
     * Contains the resource properties to update.
     */
    action: {
      type: Object,
      required: true
    }
  },
  methods: {
    async onBulkUpdate() {
      let value = this.value || this.listState.selected;
      const Self = this;
      const resource$1 = resource();
      resource$1.setResource(this.listState.resource);
      await resource$1.updateMany({
        ids: value.map(({ id }) => id),
        data: Self.action
      }).then(function() {
        Self.$emit("input", []);
        Self.listState.selected = [];
        Self.$emit("refresh", true);
        setTimeout(function() {
          resource$1.refresh();
        }, 200);
      });
    }
  }
};
function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_action_button = resolveComponent("va-action-button");
  return openBlock(), createBlock(_component_va_action_button, {
    "hide-label": _ctx.hideLabel,
    label: _ctx.label,
    icon: _ctx.icon,
    text: _ctx.text,
    color: _ctx.color || "primary",
    onClick: $options.onBulkUpdate
  }, null, 8, ["hide-label", "label", "icon", "text", "color", "onClick"]);
}
const BulkActionButton = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$E]]);
const _sfc_main$D = {
  inject: {
    admin: { default: void 0 },
    listState: { default: void 0 }
  },
  props: {
    /**
     * Selected resources items.
     */
    value: Array
  },
  computed: {
    currentResource() {
      return this.$admin.getResource(this.listState.resource);
    }
  },
  methods: {
    async onBulkDelete() {
      let value = this.value;
      let confirm = await this.$admin.confirm(
        this.$t("i18n.confirm.deleteManyTitle", {
          resource: this.currentResource.getName(value.length).toLowerCase(),
          count: value.length
        }),
        this.$t("i18n.confirm.deleteManyMessage", {
          resource: this.currentResource.getName(value.length).toLowerCase(),
          count: value.length
        })
      );
      if (confirm) {
        const Self = this;
        const resource$1 = resource();
        resource$1.setResource(this.listState.resource);
        await resource$1.deleteMany({
          ids: value
          // value.map(({ id }) => id)
        }).then(function() {
          Self.$emit("input", []);
          Self.listState.selected = [];
          Self.$emit("refresh", true);
          setTimeout(function() {
            resource$1.refresh();
          }, 200);
        });
      }
    }
  }
};
function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_delete_button = resolveComponent("va-delete-button");
  return openBlock(), createBlock(_component_va_delete_button, {
    resource: $options.listState.resource,
    onDelete: $options.onBulkDelete
  }, null, 8, ["resource", "onDelete"]);
}
const BulkDeleteButton = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$D]]);
const _sfc_main$C = {
  inject: {
    admin: { default: void 0 },
    listState: { default: void 0 }
  },
  props: {
    /**
     * Selected resources items.
     */
    value: Array
  },
  computed: {
    currentResource() {
      return this.$admin.getResource(this.listState.resource);
    }
  },
  methods: {
    async onBulkCopy() {
      let value = this.value;
      let confirm = await this.$admin.confirm(
        this.$t("i18n.confirm.copyManyTitle", {
          resource: this.currentResource.getName(value.length).toLowerCase(),
          count: value.length
        }),
        this.$t("i18n.confirm.copyManyMessage", {
          resource: this.currentResource.getName(value.length).toLowerCase(),
          count: value.length
        })
      );
      if (confirm) {
        const Self = this;
        const resource$1 = resource();
        resource$1.setResource(this.listState.resource);
        await resource$1.copyMany({
          ids: value
          // value.map(({ id }) => id)
        }).then(function() {
          Self.$emit("input", []);
          Self.listState.selected = [];
          Self.$emit("refresh", true);
          setTimeout(function() {
            resource$1.refresh();
          }, 200);
        });
      }
    }
  }
};
function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_copy_button = resolveComponent("va-copy-button");
  return openBlock(), createBlock(_component_va_copy_button, {
    resource: $options.listState.resource,
    onCopy: $options.onBulkCopy
  }, null, 8, ["resource", "onCopy"]);
}
const BulkCopyButton = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$C]]);
const Choices = {
  created() {
    let results = [];
    if (this.resource.includes("_")) {
      const parts = this.resource.includes("_") ? this.resource.split("_") : [null, this.resource];
      const module = parts[0];
      const resourceName = parts[1];
      const enumKey = module ? `${module}.enums.${this.source}` : `${resourceName}.enums.${this.source}`;
      results = this.$admin.i18n.global.tm(enumKey);
    } else {
      const enumKey = `${this.resource}.enums.${this.source}`;
      results = this.$admin.i18n.global.tm(enumKey);
    }
    if (!results) {
      return;
    }
    if (Array.isArray(results) && results.length > 0) {
      let Self = this;
      results.forEach(function(val, index2) {
        Self.choices[index2] = val;
      });
    }
  },
  props: {
    /**
     * Attribute for showing text.
     */
    itemText: {
      type: [String, Array, Function],
      default: "name"
    },
    /**
     * Attribute where taking the value from.
     */
    itemValue: {
      type: [String, Array, Function],
      default: "id"
    },
    /**
     * List of choices for select.
     * Takes localized enums from your VueI18n resources locales by default.
     */
    choices: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
const Chip = {
  props: {
    /**
     * Color of chip, can be a function for dynamic color according to a certain value.
     */
    color: [String, Function],
    /**
     * Small chip.
     */
    small: Boolean,
    /**
     * Router link associated to chip if needed.
     */
    to: [String, Object]
  },
  methods: {
    getColor(value) {
      return typeof this.color === "function" ? this.color(value) : this.color;
    }
  }
};
const _sfc_main$B = {
  mixins: [Field$1, Choices, Chip],
  props: {
    /**
     * Show text inside material chip.
     */
    chip: {
      type: Boolean,
      default() {
        return true;
      }
    }
  },
  computed: {
    getSelectedValue() {
      if (!this.value || !Object.hasOwn(this.value, this.itemText)) {
        return "";
      }
      return this.value[this.itemText];
    },
    selected() {
      return this.choices.find((c) => c[this.itemValue] === this.value);
    }
  }
};
const _hoisted_1$b = { key: 1 };
function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    $props.chip ? (openBlock(), createBlock(VChip, {
      key: 0,
      color: _ctx.getColor(_ctx.value),
      small: _ctx.small,
      to: _ctx.to
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default", { value: $options.selected }, () => [
          createBaseVNode("span", null, toDisplayString($options.selected ? $options.selected[_ctx.itemText] : $options.getSelectedValue), 1)
        ])
      ]),
      _: 3
    }, 8, ["color", "small", "to"])) : (openBlock(), createElementBlock("span", _hoisted_1$b, [
      renderSlot(_ctx.$slots, "default", { value: $options.selected }, () => [
        createBaseVNode("span", null, toDisplayString($options.selected ? $options.selected[_ctx.itemText] : $options.getSelectedValue), 1)
      ])
    ]))
  ]);
}
const AutoCompleteField = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$B]]);
const _sfc_main$A = {
  mixins: [Field$1],
  inject: ["i18n"],
  props: {
    /**
     * Truncate text
     */
    truncate: Number,
    /**
     * Override default label behavior.
     * Default is to get the localized VueI18n label from both resource and property source.
     */
    label: String
  },
  computed: {
    getLabel() {
      if (this.label) {
        return this.label;
      }
      let source = this.resource + "." + this.source;
      if (this.parentSource) {
        source = `${this.parentSource}.${this.source}`;
      }
      return this.i18n.global.t(source);
    },
    getText() {
      let value = this.value;
      if (isObject(value)) {
        value = this.value["name"];
      }
      return this.truncate ? truncate(value, {
        length: this.truncate
      }) : value;
    }
  }
};
function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", null, toDisplayString($options.getText), 1);
}
const TextField = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$A]]);
const _sfc_main$z = {
  mixins: [Field$1],
  props: {
    // /**
    //  * Name of number format to use. Must be predefined on your VueI18n plugin.
    //  */
    // format: {
    //   type: String,
    //   default() {
    //     return null;
    //   },
    // },
  },
  methods: {
    // numberFormatted(val) {
    //   return val;
    //   if (val) {
    //     return this.$n(val, this.format);
    //   }
    // },
  }
};
function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", null, toDisplayString(_ctx.value), 1);
}
const NumberField = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$z]]);
const Rating = {
  props: {
    /**
     * The applied color when the component is in an active state
     */
    activeColor: String,
    /**
     * Allows for the component to be cleared by clicking on the current value
     */
    clearable: Boolean,
    /**
     * Plain color for active ratings
     */
    color: {
      type: String,
      default: "primary"
    },
    /**
     * Adjusts the vertical height used by the component
     */
    density: String,
    /**
     * Removes the ability to click or target the component
     */
    disabled: Boolean,
    /**
     * The icon displayed when empty
     */
    emptyIcon: [String, Function],
    /**
     * The icon displayed when full
     */
    fullIcon: [String, Function],
    /**
     * Allows the selection of half increments
     */
    halfIncrements: {
      type: Boolean,
      default: false
    },
    /**
     * Provides visual feedback when hovering over icons
     */
    hover: {
      type: Boolean
    },
    /**
     * Position of item labels. Accepts 'top' and 'bottom'
     */
    itemAriaLabel: {
      type: String
    },
    /**
     * Array of labels to display next to each item
     */
    itemLabels: Array,
    /**
     * Amount of ratings to show.
     */
    length: {
      type: [Number, String],
      default: 5
    },
    /**
     * Sets the component’s name attribute.
     */
    name: {
      type: String
    },
    /**
     * Removes all hover effects and pointer events.
     */
    readonly: Boolean,
    /**
     * Sets the height and width of the component. Default unit is px.
     * Can also use the following predefined sizes: x-small, small, default, large, and x-large.
     */
    size: {
      type: String
    }
  }
};
const _sfc_main$y = {
  mixins: [Field$1, Rating]
};
function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VRating, {
    value: _ctx.value,
    length: _ctx.length,
    "half-increments": _ctx.halfIncrements,
    readonly: "",
    density: "compact",
    color: _ctx.color,
    "background-color": _ctx.backgroundColor
  }, null, 8, ["value", "length", "half-increments", "color", "background-color"]);
}
const RatingField = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$y]]);
const _sfc_main$x = {
  mixins: [Field$1],
  inject: ["i18n"],
  props: {
    /**
     * The date format to use. For example: (dd-mm-YYYY).
     */
    format: {
      type: String,
      default() {
        return null;
      }
    }
  },
  methods: {
    getSelectedFormat() {
      if (this.format) {
        return this.format;
      }
      return i18Config[this.i18n.global.locale.value].dateFormat;
    },
    dateFormatted(val) {
      if (val) {
        return this.formatDateForDisplay(val);
      }
    },
    formatDateForDisplay(val) {
      const dateFormat = this.getSelectedFormat();
      const seperatorArray = dateFormat.match(/(\.)|(-)|(\/)|(\\)/);
      let s = "-";
      if (Array.isArray(seperatorArray)) {
        s = seperatorArray[0];
      }
      const date = new Date(val);
      let month = 1 + date.getMonth();
      if (month < 10) {
        month = `0${month}`;
      }
      let day = date.getDate();
      if (day < 10) {
        day = `0${day}`;
      }
      let year = date.getFullYear();
      switch (dateFormat) {
        case "d" + s + "m" + s + "Y":
          return `${day}${s}${month}${s}${year}`;
        case "m" + s + "d" + s + "Y":
          return `${month}${s}${day}${s}${year}`;
        case "Y" + s + "m" + s + "d":
          return `${year}${s}${month}${s}${day}`;
        case "Y" + s + "d" + s + "m":
          return `${year}${s}${day}${s}${month}`;
        default:
          return `${day}${s}${month}${s}${year}`;
      }
    }
  }
};
function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", null, toDisplayString($options.dateFormatted(_ctx.value)), 1);
}
const DateField = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$x]]);
const _sfc_main$w = {
  mixins: [Field$1],
  props: {
    /**
     * True text for tooltip.
     */
    labelTrue: {
      type: String,
      default: "i18n.confirm.yes"
    },
    /**
     * False text for tooltip.
     */
    labelFalse: {
      type: String,
      default: "i18n.confirm.no"
    },
    /**
     * Icon for true value. Must be a valid MDI.
     */
    iconTrue: {
      type: String,
      default: "mdi-check"
    },
    /**
     * Icon for false value. Must be a valid MDI.
     */
    iconFalse: {
      type: String,
      default: "mdi-close"
    }
  }
};
function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VTooltip, { bottom: "" }, {
    activator: withCtx(({ props }) => [
      _ctx.value ? (openBlock(), createBlock(VIcon, mergeProps({ key: 0 }, props, { color: "green" }), {
        default: withCtx(() => [
          createTextVNode(toDisplayString($props.iconTrue), 1)
        ]),
        _: 2
      }, 1040)) : (openBlock(), createBlock(VIcon, mergeProps({ key: 1 }, props, { color: "red" }), {
        default: withCtx(() => [
          createTextVNode(toDisplayString($props.iconFalse), 1)
        ]),
        _: 2
      }, 1040))
    ]),
    default: withCtx(() => [
      createBaseVNode("span", null, toDisplayString(_ctx.value ? _ctx.$t($props.labelTrue) : _ctx.$t($props.labelFalse)), 1)
    ]),
    _: 1
  });
}
const BooleanField = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$w]]);
const _sfc_main$v = {
  mixins: [Field$1],
  props: {
    width: {
      type: String,
      default() {
        return "20px";
      }
    },
    height: {
      type: String,
      default() {
        return "20px";
      }
    }
  },
  computed: {
    getSwatchStyle(color) {
      return {
        marginRight: "10px",
        backgroundColor: this.value,
        height: this.height,
        width: this.width,
        border: "1px solid #dddddd",
        borderRadius: "50%",
        transition: "border-radius 200ms ease-in-out"
      };
    }
  }
};
function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    style: normalizeStyle($options.getSwatchStyle)
  }, null, 4);
}
const ColorPickerField = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$v]]);
const _sfc_main$u = {
  mixins: [Field$1]
};
const _hoisted_1$a = ["innerHTML"];
function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "va-rich-text-field",
    innerHTML: _ctx.value
  }, null, 8, _hoisted_1$a);
}
const RichTextField = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$u]]);
const _sfc_main$t = {
  mixins: [Field$1, Chip]
};
function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VChip, {
    color: _ctx.getColor(_ctx.value),
    small: _ctx.small,
    to: _ctx.to
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createTextVNode(toDisplayString(_ctx.value), 1)
      ])
    ]),
    _: 3
  }, 8, ["color", "small", "to"]);
}
const ChipField = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$t]]);
const _sfc_main$s = {
  mixins: [Field$1],
  props: {
    options: {
      type: Object,
      default() {
        return { currency: "USD", precision: 2 };
      }
    }
  },
  computed: {
    getText() {
      if (this.value == null || isNaN(this.value)) {
        return;
      }
      let supportedCurrencies = ["USD", "EUR", "TRY"];
      if (typeof this.options.currency == "undefined" || !supportedCurrencies.includes(this.options.currency)) {
        return new Intl.NumberFormat("en-EN", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(this.value);
      }
      let formattedValue = this.value;
      let country = null;
      let precision = 2;
      switch (this.options.currency) {
        case "USD":
          country = this.options.country ? this.options.country : "en-EN";
          precision = this.options.precision ? this.options.precision : 2;
          formattedValue = new Intl.NumberFormat(country, { style: "currency", currency: "USD", minimumFractionDigits: precision }).format(this.value);
          break;
        case "EUR":
          country = this.options.country ? this.options.country : "de-DE";
          precision = this.options.precision ? this.options.precision : 2;
          formattedValue = new Intl.NumberFormat(country, { style: "currency", currency: "EUR", minimumFractionDigits: precision }).format(this.value);
          break;
        case "TRY":
          country = this.options.country ? this.options.country : "tr-TR";
          precision = this.options.precision ? this.options.precision : 2;
          formattedValue = new Intl.NumberFormat(country, { style: "currency", currency: "TRY", minimumFractionDigits: precision }).format(this.value);
          break;
        default:
          country = this.options.country ? this.options.country : "en-EN";
          precision = this.options.precision ? this.options.precision : 2;
          formattedValue = new Intl.NumberFormat(country, { style: "currency", currency: "USD", minimumFractionDigits: precision }).format(this.value);
          break;
      }
      return formattedValue;
    }
  }
};
function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", null, toDisplayString($options.getText), 1);
}
const CurrencyField = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$s]]);
const _sfc_main$r = {
  mixins: [Field$1, Choices, Chip],
  props: {
    /**
     * Show text inside material chip.
     */
    chip: {
      type: Boolean,
      default() {
        return true;
      }
    },
    multiple: Boolean
  },
  computed: {
    selected() {
      return this.choices.find((c) => c[this.itemValue] === this.value);
    }
  },
  methods: {
    getVal(val) {
      if (isObject(val) && typeof val.name !== "undefined") {
        return this.multiple && Array.isArray(val) ? val.map((item) => item.name).join(", ") : val.name;
      }
      return val;
    }
  }
};
const _hoisted_1$9 = { key: 0 };
const _hoisted_2$6 = { key: 1 };
function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    $props.chip & $props.multiple ? (openBlock(), createElementBlock("span", _hoisted_1$9, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.getVal(_ctx.value), (item) => {
        return openBlock(), createBlock(VChip, {
          color: _ctx.getColor(_ctx.value),
          small: _ctx.small,
          to: _ctx.to
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", { value: $options.selected }, () => [
              createBaseVNode("span", null, toDisplayString(item.name), 1)
            ])
          ]),
          _: 2
        }, 1032, ["color", "small", "to"]);
      }), 256))
    ])) : (openBlock(), createElementBlock("span", _hoisted_2$6, [
      renderSlot(_ctx.$slots, "default", { value: $options.selected }, () => [
        createBaseVNode("span", null, toDisplayString($options.selected ? $options.selected[_ctx.itemText] : $options.getVal(_ctx.value)), 1)
      ])
    ]))
  ]);
}
const SelectField = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$r]]);
const _sfc_main$q = {
  mixins: [Field$1]
};
const _hoisted_1$8 = ["href"];
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("a", {
    href: `mailto:${_ctx.value}`
  }, toDisplayString(_ctx.value), 9, _hoisted_1$8);
}
const EmailField = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$q]]);
const _sfc_main$p = {
  mixins: [Field$1],
  props: {
    /**
     * Target value for anchor, default to external.
     */
    target: {
      type: String,
      default: "_blank"
    }
  }
};
const _hoisted_1$7 = ["href", "target"];
function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("a", {
    href: `${_ctx.value}`,
    target: $props.target
  }, toDisplayString(_ctx.value), 9, _hoisted_1$7);
}
const UrlField = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$p]]);
const Files = {
  inject: {
    formState: { default: void 0 }
  },
  mixins: [Field$1],
  props: {
    /**
     * Source property of file object, link through original file.
     */
    src: {
      type: String,
      default: "url"
    },
    /**
     * Title attribute of file object, used for title and alt attributes.
     */
    title: {
      type: String,
      default: "name"
    },
    /**
     * Filename property of file object, shown as anchor text for files.
     */
    fileName: {
      type: String,
      default: "name"
    },
    /**
     * Target value for anchor, default to external.
     */
    target: {
      type: String,
      default: "_blank"
    },
    /**
     * Mainly use for VaFileInput, allow files or image to be removed.
     */
    clearable: Boolean,
    /**
     * Name of property sent to API which contains ids of file to delete.
     */
    model: {
      type: String,
      default() {
        return "";
      }
    },
    /**
     * Attribute where taking the id value for identify files to delete.
     */
    itemValue: {
      type: String,
      default: "id"
    }
  },
  data() {
    return {
      deleted: []
    };
  },
  computed: {
    isMultiple() {
      return this.value instanceof Array;
    },
    isObject() {
      return this.value instanceof Object;
    },
    activeFiles() {
      if (!this.value) {
        return [];
      }
      let value = this.isMultiple ? this.value : [this.value];
      return value.filter((f) => -1 === this.deleted.indexOf(f[this.itemValue]));
    }
  },
  methods: {
    getFileProp(file, prop) {
      return get(file, prop);
    },
    clear(id) {
      this.deleted = [...this.deleted || [], id];
      if (this.formState) {
        this.formState.update({
          source: this.model || this.source,
          value: this.isMultiple ? this.deleted : this.deleted[0]
        });
      }
    }
  }
};
const _sfc_main$o = {
  mixins: [Files],
  props: {
    /**
     * Enable list show
     */
    list: {
      type: Boolean,
      default() {
        return false;
      }
    },
    /**
     * Set tablename
     */
    tableName: String,
    /**
     * Read file or download action
     */
    actionType: {
      type: String,
      default() {
        return "download";
      }
    }
  },
  methods: {
    clickToOpen(e, index2) {
      if (this.actionType == "download") {
        this.downloadFileWithIndex(index2);
      } else {
        this.readFileWithIndex(index2);
      }
      e.stopPropagation();
    },
    readFileWithIndex(index2) {
      let url = this.$admin.apiUrl + this.$admin.readFileUrl + String(this.value[index2].id) + "?tableName=" + this.tableName;
      this.testFile(url, this.value[index2].id);
    },
    downloadFileWithIndex(index2) {
      let url = this.$admin.apiUrl + this.$admin.downloadUrl + String(this.value[index2].id) + "?tableName=" + this.tableName;
      this.testFile(url, this.value[index2].id);
    },
    async testFile(url, fileId) {
      let response = null;
      try {
        response = await this.$admin.http.get(url);
        if (response.status == 200 && typeof fileId != "undefined") {
          location.href = url;
        }
      } catch (e) {
        console.log(e);
        this.$store.getModule("messages").show({ type: "warning", message: this.$t("error.fileNotFound") });
      }
    }
  }
};
const _hoisted_1$6 = { key: 0 };
const _hoisted_2$5 = {
  key: 0,
  class: "mb-2"
};
const _hoisted_3$2 = { key: 1 };
const _hoisted_4$2 = {
  key: 0,
  class: "mb-2"
};
function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.list ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
    _ctx.activeFiles.length ? (openBlock(), createElementBlock("ul", _hoisted_2$5, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.activeFiles, (file, i) => {
        return openBlock(), createElementBlock("li", { key: i }, [
          createBaseVNode("span", null, [
            _ctx.clearable ? (openBlock(), createBlock(VBtn, {
              key: 0,
              icon: "",
              onClick: ($event) => _ctx.clear(file[_ctx.itemValue])
            }, {
              default: withCtx(() => [
                createVNode(VIcon, null, {
                  default: withCtx(() => _cache[0] || (_cache[0] = [
                    createTextVNode("mdi-close")
                  ])),
                  _: 1
                })
              ]),
              _: 2
            }, 1032, ["onClick"])) : createCommentVNode("", true),
            createVNode(VChip, {
              color: "gray",
              "x-small": "",
              onClick: ($event) => $options.clickToOpen($event, i)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.getFileProp(file, _ctx.fileName)), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ])
        ]);
      }), 128))
    ])) : createCommentVNode("", true)
  ])) : (openBlock(), createElementBlock("div", _hoisted_3$2, [
    _ctx.activeFiles.length ? (openBlock(), createElementBlock("div", _hoisted_4$2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.activeFiles, (file, i) => {
        return openBlock(), createElementBlock("span", { key: i }, [
          _ctx.clearable ? (openBlock(), createBlock(VBtn, {
            key: 0,
            icon: "",
            onClick: ($event) => _ctx.clear(file[_ctx.itemValue])
          }, {
            default: withCtx(() => [
              createVNode(VIcon, null, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("mdi-close")
                ])),
                _: 1
              })
            ]),
            _: 2
          }, 1032, ["onClick"])) : createCommentVNode("", true),
          createVNode(VChip, {
            color: "gray",
            "x-small": "",
            onClick: ($event) => $options.clickToOpen($event, i)
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.getFileProp(file, _ctx.fileName)), 1)
            ]),
            _: 2
          }, 1032, ["onClick"])
        ]);
      }), 128))
    ])) : createCommentVNode("", true)
  ]));
}
const FileField = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$o], ["__scopeId", "data-v-30430ee2"]]);
const _sfc_main$n = {
  mixins: [Files],
  props: {
    /**
     * Set tablename
     */
    tableName: String,
    /**
     * Resizes the background image to cover the entire container.
     */
    cover: Boolean,
    /**
     * Max height of image.
     */
    height: String,
    /**
     * Max column width for image gallery.
     */
    lg: [String, Number],
    /**
     * Read file or download action
     */
    actionType: {
      type: String,
      default() {
        return "download";
      }
    }
  },
  methods: {
    getBase64Image(file) {
      return file.data;
    },
    clickToOpen(e, index2) {
      if (this.actionType == "download") {
        this.downloadFileWithIndex(index2);
      } else {
        this.readFileWithIndex(index2);
      }
      e.stopPropagation();
    },
    readFileWithIndex(index2) {
      let url = this.$admin.apiUrl + this.$admin.readFileUrl + String(this.value[index2].id) + "?tableName=" + this.tableName;
      this.testFile(url, this.value[index2].id);
    },
    downloadFileWithIndex(index2) {
      let url = this.$admin.apiUrl + this.$admin.downloadUrl + String(this.value[index2].id) + "?tableName=" + this.tableName;
      this.testFile(url, this.value[index2].id);
    },
    async testFile(url, fileId) {
      let response = null;
      try {
        response = await this.$admin.http.get(url);
        if (response.status == 200 && typeof fileId != "undefined") {
          location.href = url;
        }
      } catch (e) {
        console.log(e);
        this.$store.getModule("messages").show({ type: "warning", message: this.$t("error.fileNotFound") });
      }
    }
  }
};
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.activeFiles.length ? (openBlock(), createBlock(VRow, {
    key: 0,
    class: "mb-2"
  }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.activeFiles, (file, i) => {
        return openBlock(), createBlock(VCol, {
          key: i,
          class: "d-flex child-flex",
          lg: $props.lg,
          cols: "4"
        }, {
          default: withCtx(() => [
            createVNode(VImg, {
              src: $options.getBase64Image(file),
              "aspect-ratio": "1",
              cover: "",
              class: "bg-grey-lighten-2",
              style: { "cursor": "pointer" },
              onClick: ($event) => $options.clickToOpen($event, i)
            }, {
              placeholder: withCtx(() => [
                createVNode(VRow, {
                  class: "fill-height ma-0",
                  align: "center",
                  justify: "center"
                }, {
                  default: withCtx(() => [
                    createVNode(VProgressCircular, {
                      indeterminate: "",
                      color: "grey-lighten-5"
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 2
            }, 1032, ["src", "onClick"])
          ]),
          _: 2
        }, 1032, ["lg"]);
      }), 128))
    ]),
    _: 1
  })) : createCommentVNode("", true);
}
const ImageField = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$n], ["__scopeId", "data-v-e7acbc0d"]]);
const Reference = {
  mixins: [Chip],
  props: {
    /**
     * Name of resource to link into.
     */
    reference: {
      type: String,
      required: true
    },
    /**
     * Default CRUD page to link.
     * @values show, edit
     */
    action: {
      type: String,
      validator: (v) => ["show", "edit"].includes(v),
      default: "show"
    },
    /**
     * Property used for stringify inner targeted resource.
     * Use a function for further stringify customization.
     * If nothing set, use the global label property resource by default.
     */
    itemText: [String, Array, Function],
    /**
     * Attribute where taking the id value for link building.
     */
    itemValue: {
      type: String,
      default: "id"
    }
  }
};
const _sfc_main$m = {
  mixins: [Field$1, Reference],
  props: {
    /**
     * Show link as a chip.
     */
    chip: Boolean,
    /**
     * Allow resource auto fetching from source.
     */
    fetch: Boolean
  },
  data: () => {
    return {
      loading: false,
      referenceItem: null
    };
  },
  computed: {
    getId() {
      return this.referenceItem ? this.referenceItem[this.itemValue] : this.value;
    },
    link() {
      let resource2 = this.$admin.getResource(this.reference);
      if (resource2.routes.includes(this.action)) {
        return {
          name: `${this.reference}_${this.action}`,
          params: {
            id: this.getId
          }
        };
      }
      return null;
    },
    getItemText() {
      if (!this.referenceItem) {
        return this.value;
      }
      let resource2 = this.$admin.getResource(this.reference);
      let text = this.itemText || resource2.label;
      if (typeof text === "function") {
        return text(this.referenceItem);
      }
      return this.referenceItem[text] || this.referenceItem;
    }
  },
  watch: {
    value: {
      async handler(newVal) {
        if (newVal === Object(newVal)) {
          this.referenceItem = newVal;
          return;
        }
        if (this.fetch) {
          this.loading = true;
          let { data } = await this.$store.getResource(this.reference).getOne({ id: newVal });
          this.referenceItem = data;
          this.loading = false;
        }
      },
      immediate: true
    }
  }
};
const _hoisted_1$5 = { key: 0 };
const _hoisted_2$4 = { key: 3 };
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return _ctx.value ? (openBlock(), createElementBlock("span", _hoisted_1$5, [
    _ctx.loading ? (openBlock(), createBlock(VProgressLinear, {
      key: 0,
      indeterminate: ""
    })) : $props.chip ? (openBlock(), createBlock(VChip, {
      key: 1,
      color: _ctx.getColor(_ctx.value),
      small: _ctx.small,
      to: $options.link
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default", {
          value: _ctx.value,
          item: _ctx.referenceItem
        }, () => [
          createTextVNode(toDisplayString($options.getItemText), 1)
        ])
      ]),
      _: 3
    }, 8, ["color", "small", "to"])) : $options.link ? (openBlock(), createBlock(_component_router_link, {
      key: 2,
      to: $options.link
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default", {
          value: _ctx.value,
          item: _ctx.referenceItem
        }, () => [
          createTextVNode(toDisplayString($options.getItemText), 1)
        ])
      ]),
      _: 3
    }, 8, ["to"])) : (openBlock(), createElementBlock("span", _hoisted_2$4, [
      renderSlot(_ctx.$slots, "default", {
        value: _ctx.value,
        item: _ctx.referenceItem
      }, () => [
        createTextVNode(toDisplayString($options.getItemText), 1)
      ])
    ]))
  ])) : createCommentVNode("", true);
}
const ReferenceField = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$m]]);
const _sfc_main$l = {
  mixins: [Field$1, Reference],
  props: {
    /**
     * Show list of chips as column.
     */
    column: Boolean
  }
};
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_reference_field = resolveComponent("va-reference-field");
  return openBlock(), createBlock(VChipGroup, { column: $props.column }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.value, (item, i) => {
        return openBlock(), createBlock(_component_va_reference_field, {
          reference: _ctx.reference,
          key: i,
          item,
          color: _ctx.color,
          chip: "",
          small: _ctx.small,
          action: _ctx.action,
          itemText: _ctx.itemText,
          itemValue: _ctx.itemValue
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", { value: item })
          ]),
          _: 2
        }, 1032, ["reference", "item", "color", "small", "action", "itemText", "itemValue"]);
      }), 128))
    ]),
    _: 3
  }, 8, ["column"]);
}
const ReferenceArrayField = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$l]]);
const _sfc_main$k = {
  mixins: [Field$1, Chip],
  props: {
    /**
     * Property used for stringify inner item if object.
     * Use a function for further stringify customization.
     */
    itemText: {
      type: [String, Array, Function],
      default: "name"
    },
    /**
     * Show list of chips as column.
     */
    column: Boolean
  },
  methods: {
    getItemText(item) {
      if (typeof this.itemText === "function") {
        return this.item(item);
      }
      return item[this.itemText] || item;
    }
  }
};
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VChipGroup, { column: $props.column }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.value, (item, i) => {
        return openBlock(), createBlock(VChip, {
          key: i,
          color: _ctx.getColor(_ctx.value),
          small: _ctx.small
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", { value: item }, () => [
              createBaseVNode("span", null, toDisplayString($options.getItemText(item)), 1)
            ])
          ]),
          _: 2
        }, 1032, ["color", "small"]);
      }), 128))
    ]),
    _: 3
  }, 8, ["column"]);
}
const ArrayField = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$k]]);
const Input = {
  mixins: [Source, InputWrapper],
  inject: {
    formState: { default: void 0 }
  },
  props: {
    /**
     * Text to be edited.
     * @model
     */
    modelValue: {
      default: null
    },
    /**
     * By default, the source will be the final name that will be sent to the API for create/update.
     * This prop allows you to override this default behavior.
     */
    model: String,
    /**
     * Whether to understand is lazy model (Ersin)
     */
    lazy: {
      type: Boolean,
      default: false
    },
    /**
     * Whether to disable form state
     */
    disableFormState: Boolean
  },
  emits: ["update:modelValue", "change"],
  data() {
    return {
      acceptValue: true,
      input: null,
      internalErrorMessages: []
    };
  },
  watch: {
    modelValue: {
      handler(val) {
        this.input = val;
      },
      immediate: true
    },
    formState: {
      handler(val) {
        if (val && this.acceptValue) {
          this.update(
            this.getItem(get(val.item || val.model, this.uniqueSourceId))
          );
        }
      },
      immediate: true
    },
    "formState.item"(val) {
      if (this.acceptValue) {
        this.update(
          this.getItem(get(val || this.formState.model, this.uniqueSourceId))
        );
      }
    },
    "formState.errors"(val) {
      if (val) {
        this.internalErrorMessages = val[this.uniqueFormId] || [];
      }
    }
  },
  computed: {
    uniqueSourceId() {
      return [this.parentSource, this.index, this.source].filter((s) => s !== void 0).join(".");
    },
    uniqueFormId() {
      return [this.parentSource, this.index, this.model || this.source].filter((s) => s !== void 0).join(".");
    },
    commonProps() {
      let label = "";
      if (typeof this.source == "undefined") {
        label = "";
      } else if (typeof this.source != "undefined" && typeof this.resource != "undefined") {
        label = this.$admin.getSourceLabel(this.resource, this.source);
      }
      if (this.label) {
        label = this.label;
      }
      return {
        color: "primary",
        label,
        modelValue: this.getModelValue(this.input),
        prependIcon: this.prependIcon,
        prependInnerIcon: this.prependInnerIcon,
        appendIcon: this.appendIcon,
        appendInnerIcon: this.appendInnerIcon,
        hint: this.hint,
        errorMessages: [...this.errorMessages, ...this.internalErrorMessages],
        hideDetails: this.hideDetails,
        density: this.density,
        placeholder: this.placeholder,
        clearable: this.clearable
      };
    }
  },
  methods: {
    getItem(value) {
      return value === void 0 ? this.modelValue : value;
    },
    getModelValue(input) {
      if (input === "true" || input === true || input === 1) {
        return 1;
      }
      if (input === "false" || input === false || input === 0) {
        return 0;
      }
      if (Object.prototype.toString.call(this.input) === "[object String]" && isEmpty(this.input)) {
        return null;
      }
      return this.input;
    },
    change(event2) {
      this.$emit("change", event2.target.value);
    },
    update(value, returnFalse) {
      if (this.formState && !this.disableFormState) {
        this.formState.update({
          source: this.uniqueFormId,
          lazy: this.lazy,
          value
        });
      }
      if (returnFalse) {
        return;
      }
      this.input = value;
      this.$emit("update:modelValue", value);
    }
  }
};
const _sfc_main$j = {
  mixins: [Input],
  props: {
    /**
     * Type of text input. All HTML type allowed.
     */
    type: {
      type: [String, Number],
      default: "text"
    },
    /**
     * Transform text input into textarea.
     */
    multiline: Boolean,
    /**
     * Use different styles: 
     * 
     * | 'outlined' | 'plain' | 'underlined' | 'filled' | 'solo' | 'solo-inverted' | 'solo-filled'
     */
    variant: {
      type: String,
      default: "outlined"
    }
  }
};
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.multiline ? (openBlock(), createBlock(VTextarea, mergeProps({
    key: 0,
    density: _ctx.density
  }, _ctx.commonProps, {
    color: "primary",
    "auto-grow": "",
    variant: $props.variant,
    onChange: _ctx.change,
    "onUpdate:modelValue": _ctx.update
  }), createSlots({ _: 2 }, [
    renderList(_ctx.$slots, (_, scopedSlotName) => {
      return {
        name: scopedSlotName,
        fn: withCtx((slotData) => [
          scopedSlotName ? renderSlot(_ctx.$slots, scopedSlotName, normalizeProps(mergeProps({ key: 0 }, slotData))) : createCommentVNode("", true)
        ])
      };
    })
  ]), 1040, ["density", "variant", "onChange", "onUpdate:modelValue"])) : (openBlock(), createBlock(VTextField, mergeProps({
    key: 1,
    density: _ctx.density
  }, _ctx.commonProps, {
    type: $props.type,
    color: "primary",
    variant: $props.variant,
    onChange: _ctx.change,
    "onUpdate:modelValue": _ctx.update
  }), createSlots({ _: 2 }, [
    renderList(_ctx.$slots, (_, scopedSlotName) => {
      return {
        name: scopedSlotName,
        fn: withCtx((slotData) => [
          scopedSlotName ? renderSlot(_ctx.$slots, scopedSlotName, normalizeProps(mergeProps({ key: 0 }, slotData))) : createCommentVNode("", true)
        ])
      };
    })
  ]), 1040, ["density", "type", "variant", "onChange", "onUpdate:modelValue"]));
}
const TextInput = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j]]);
const _sfc_main$i = {
  mixins: [Input],
  props: {
    /**
     * Use different styles: 
     * 
     * | 'outlined' | 'plain' | 'underlined' | 'filled' | 'solo' | 'solo-inverted' | 'solo-filled'
     */
    variant: {
      type: String,
      default: "outlined"
    }
  },
  data() {
    return {
      show: false,
      acceptValue: false
    };
  }
};
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VTextField, mergeProps({
    density: _ctx.density,
    autocomplete: false
  }, _ctx.commonProps, {
    variant: $props.variant,
    type: $data.show ? "text" : "password",
    "append-inner-icon": $data.show ? "mdi-eye" : "mdi-eye-off",
    "onClick:appendInner": _cache[0] || (_cache[0] = ($event) => $data.show = !$data.show),
    onChange: _ctx.change,
    "onUpdate:modelValue": _ctx.update
  }), createSlots({ _: 2 }, [
    renderList(_ctx.$slots, (_, scopedSlotName) => {
      return {
        name: scopedSlotName,
        fn: withCtx((slotData) => [
          renderSlot(_ctx.$slots, scopedSlotName, normalizeProps(guardReactiveProps(slotData)))
        ])
      };
    })
  ]), 1040, ["density", "variant", "type", "append-inner-icon", "onChange", "onUpdate:modelValue"]);
}
const PasswordInput = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i]]);
const _sfc_main$h = {
  mixins: [Input],
  props: {
    /**
     * Number to be edited.
     * @model
     */
    value: {
      type: [Number, String],
      default: null
    },
    /**
     * Use different styles: 
     * 
     * | 'outlined' | 'plain' | 'underlined' | 'filled' | 'solo' | 'solo-inverted' | 'solo-filled'
     */
    variant: {
      type: String,
      default: "outlined"
    },
    /**
     * The interval step.
     */
    step: {
      type: [Number, String],
      default: 1
    },
    /**
     * The minimum accepted value.
     */
    min: [Number, String],
    /**
     * The maximum accepted value.
     */
    max: [Number, String]
    /**
     * Name of number format to use. Must be predefined on your VueI18n plugin.
     */
    // format: {
    //   type: String,
    //   default() {
    //     return null;
    //   },
    // },
  },
  methods: {
    // numberFormatted() {
    //   if (this.input) {
    //     return this.$n(this.input, this.format);
    //   }
    // },
  }
};
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VTextField, mergeProps({ density: _ctx.density }, _ctx.commonProps, {
    variant: $props.variant,
    type: "number",
    step: $props.step,
    min: $props.min,
    max: $props.max,
    onChange: _ctx.change,
    "onUpdate:modelValue": _ctx.update
  }), createSlots({ _: 2 }, [
    renderList(_ctx.$slots, (_, scopedSlotName) => {
      return {
        name: scopedSlotName,
        fn: withCtx((slotData) => [
          renderSlot(_ctx.$slots, scopedSlotName, normalizeProps(guardReactiveProps(slotData)))
        ])
      };
    })
  ]), 1040, ["density", "variant", "step", "min", "max", "onChange", "onUpdate:modelValue"]);
}
const NumberInput = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h]]);
const _sfc_main$g = {
  mixins: [Input, Rating],
  props: {
    /**
     * Number to be edited.
     * @model
     */
    value: {
      type: Number,
      default: null
    },
    /**
     * Type of text input. All HTML type allowed.
     */
    type: {
      type: String,
      default: "number"
    }
  }
};
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_input = resolveComponent("va-input");
  return openBlock(), createBlock(_component_va_input, normalizeProps(guardReactiveProps(_ctx.$props)), {
    default: withCtx(() => [
      createVNode(VRating, mergeProps({ density: _ctx.density }, _ctx.commonProps, {
        activeColor: _ctx.activeColor,
        clearable: _ctx.clearable,
        color: _ctx.color,
        disabled: _ctx.disabled,
        "empty-icon": _ctx.emptyIcon,
        "full-icon": _ctx.fullIcon,
        "half-increments": _ctx.halfIncrements,
        hover: _ctx.hover,
        "item-aria-label": _ctx.itemAriaLabel,
        "item-labels": _ctx.itemLabels,
        length: _ctx.length,
        name: _ctx.name,
        readonly: _ctx.readonly,
        size: _ctx.size,
        onChange: _ctx.change,
        "onUpdate:modelValue": _ctx.update
      }), createSlots({ _: 2 }, [
        renderList(_ctx.$slots, (_, scopedSlotName) => {
          return {
            name: scopedSlotName,
            fn: withCtx((slotData) => [
              renderSlot(_ctx.$slots, scopedSlotName, normalizeProps(guardReactiveProps(slotData)))
            ])
          };
        })
      ]), 1040, ["density", "activeColor", "clearable", "color", "disabled", "empty-icon", "full-icon", "half-increments", "hover", "item-aria-label", "item-labels", "length", "name", "readonly", "size", "onChange", "onUpdate:modelValue"])
    ]),
    _: 3
  }, 16);
}
const RatingInput = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g]]);
const _sfc_main$f = {
  mixins: [Input],
  inject: ["i18n"],
  props: {
    /**
     * Sets a text under date tile
     */
    header: {
      type: String,
      default() {
        return "";
      }
    },
    /**
     * Sets main color of date picker
     */
    color: {
      type: String,
      default() {
        return "primary";
      }
    },
    /**
     * Sets elevation
     */
    elevation: {
      type: [String, Number],
      default() {
        return 3;
      }
    },
    /**
     * Restricts which dates can be selected.
     * @type Function|Array
     */
    allowedDates: {
      type: [Function, Array],
      default() {
        return null;
      }
    },
    /**
     * Exact height
     */
    height: [String, Number],
    /**
     * Exact width
     */
    width: {
      type: [String, Number],
      default() {
        return null;
      }
    },
    /**
     * Max allowed date/month (ISO 8601 format)
     */
    max: [String, Number, Date],
    /**
     * Sets the maximum height for the component
     */
    maxHeight: [String, Number],
    /**
     * Sets the maximum width for the component
     */
    maxWidth: [String, Number],
    /**
     * Minimum allowed date/month (ISO 8601 format)
     */
    min: [String, Number, Date],
    /**
     * Sets the minumum height for the component
     */
    minHeight: [String, Number],
    /**
     * Sets the minumum width for the component
     */
    minWidth: [String, Number],
    /**
     * Allow the selection of multiple dates.
     */
    multiple: Boolean,
    /**
     * Sets the position for the component
     */
    position: String,
    /**
     * Designates the border-radius applied to the component
     */
    rounded: [String, Number, Boolean],
    /**
     * Toggles visibility of days from previous and next months
     */
    showAdjacentMonths: Boolean,
    /**
     * Toggles visibility of the week numbers in the body of the calendar
     */
    showWeek: Boolean,
    /**
     * Hide header
     */
    hideHeader: {
      type: Boolean,
      default() {
        return true;
      }
    },
    /**
     * Hide actions
     */
    hideActions: Boolean,
    /**
     * Hide weekdays
     */
    hideWeekdays: Boolean,
    /**
     * Input placeholder
     */
    inputPlaceholder: String,
    /**
     * Use different styles: 
     * 
     * | 'outlined' | 'plain' | 'underlined' | 'filled' | 'solo' | 'solo-inverted' | 'solo-filled'
     */
    variant: {
      type: String,
      default: "outlined"
    },
    /**
     * Month / year
     */
    viewMode: String,
    /**
     * disabled
     */
    disabled: Boolean,
    /**
     * landscape
     */
    landscape: Boolean,
    /**
     * The date format to use. For example: (dd-mm-YYYY).
     */
    format: {
      type: String,
      default() {
        return null;
      }
    },
    /**
     * Date on ISO format to be edited.
     * @model
     */
    value: {
      type: String,
      default() {
        return "";
      }
    }
  },
  data() {
    return {
      menu: false,
      hideDetailsAction: false
    };
  },
  watch: {
    menu: {
      handler(val) {
        if (val) {
          var inputs = document.getElementsByClassName("va-date-input");
          for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].closest("td")) {
              inputs[i].closest("td").style.verticalAlign = "top";
            }
          }
        } else {
          var inputs = document.getElementsByClassName("va-date-input");
          for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].closest("td")) {
              inputs[i].closest("td").style.verticalAlign = "inherit";
            }
          }
        }
        this.hideDetailsAction = val;
      }
    }
  },
  computed: {
    getHideDetailsValue() {
      if (this.hideDetailsAction) {
        return true;
      }
      return this.hideDetails;
    },
    getLocale() {
      return this.i18n.global.locale.value;
    },
    getDate() {
      let date = this.input ? new Date(this.input) : /* @__PURE__ */ new Date();
      return date;
    },
    dateFormatted() {
      if (this.input) {
        return [this.formatDateForDisplay(this.input)];
      }
      return;
    }
  },
  methods: {
    cleanInput() {
      this.input = null;
      this.update(null);
    },
    onKeyUp(event2) {
      if (!event2.target.value) {
        this.cleanInput();
      }
    },
    getSelectedFormat() {
      if (this.format) {
        return this.format;
      }
      return i18Config[this.i18n.global.locale.value].dateFormat;
    },
    /**
     * date format
     * 
     * https://stackoverflow.com/questions/75592703/v-date-picker-date-format-to-dd-mm-yyyy-vuetify
     */
    formatDateForDisplay(val) {
      const dateFormat = this.getSelectedFormat();
      const seperatorArray = dateFormat.match(/(\.)|(-)|(\/)|(\\)/);
      let s = "-";
      if (Array.isArray(seperatorArray)) {
        s = seperatorArray[0];
      }
      const date = new Date(val);
      let month = 1 + date.getMonth();
      if (month < 10) {
        month = `0${month}`;
      }
      let day = date.getDate();
      if (day < 10) {
        day = `0${day}`;
      }
      let year = date.getFullYear();
      switch (dateFormat) {
        case "d" + s + "m" + s + "Y":
          return `${day}${s}${month}${s}${year}`;
        case "m" + s + "d" + s + "Y":
          return `${month}${s}${day}${s}${year}`;
        case "Y" + s + "m" + s + "d":
          return `${year}${s}${month}${s}${day}`;
        case "Y" + s + "d" + s + "m":
          return `${year}${s}${day}${s}${month}`;
        default:
          return `${day}${s}${month}${s}${year}`;
      }
    },
    formatDateForDatabase(val) {
      const date = new Date(val);
      let month = 1 + date.getMonth();
      if (month < 10) {
        month = `0${month}`;
      }
      let day = date.getDate();
      if (day < 10) {
        day = `0${day}`;
      }
      return `${date.getFullYear()}-${month}-${day}`;
    },
    updateDate(val) {
      this.menu = false;
      this.update(this.formatDateForDatabase(val));
    }
  }
};
const _hoisted_1$4 = { class: "va-date-input mb-5" };
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    createVNode(VMenu, {
      modelValue: $data.menu,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.menu = $event),
      "close-on-content-click": false,
      transition: "scale-transition",
      "offset-y": ""
    }, createSlots({
      activator: withCtx(({ props }) => [
        createVNode(VTextField, mergeProps({ density: _ctx.density }, { ...props, ..._ctx.commonProps }, {
          modelValue: $options.dateFormatted,
          variant: $props.variant,
          readonly: true,
          "hide-details": true,
          "append-inner-icon": "mdi-calendar",
          "onClick:clear": $options.cleanInput,
          onChange: _ctx.change,
          onKeyup: $options.onKeyUp
        }), null, 16, ["density", "modelValue", "variant", "onClick:clear", "onChange", "onKeyup"])
      ]),
      default: withCtx(() => [
        createVNode(VLocaleProvider, { locale: $options.getLocale }, {
          default: withCtx(() => [
            createVNode(VDatePicker, {
              elevation: $props.elevation,
              header: $props.header,
              "hide-header": $props.hideHeader,
              color: $props.color,
              "allowed-dates": $props.allowedDates,
              height: $props.height,
              width: $props.width,
              max: $props.max,
              maxHeight: $props.maxHeight,
              maxWidth: $props.maxWidth,
              min: $props.min,
              minHeight: $props.minHeight,
              minWidth: $props.minWidth,
              multiple: $props.multiple,
              position: $props.position,
              rounded: $props.rounded,
              showAdjacentMonths: $props.showAdjacentMonths,
              showWeek: $props.showWeek,
              title: _ctx.$t("i18n.datepicker.title"),
              "hide-actions": $props.hideActions,
              "hide-weekdays": $props.hideWeekdays,
              "input-placeholder": $props.inputPlaceholder,
              variant: $props.variant,
              viewMode: $props.viewMode,
              disabled: $props.disabled,
              landscape: $props.landscape,
              modelValue: $options.getDate,
              "onUpdate:modelValue": $options.updateDate,
              onChange: _ctx.change,
              "cancel-text": _ctx.$t("i18n.datepicker.cancel"),
              "ok-text": _ctx.$t("i18n.datepicker.select")
            }, null, 8, ["elevation", "header", "hide-header", "color", "allowed-dates", "height", "width", "max", "maxHeight", "maxWidth", "min", "minHeight", "minWidth", "multiple", "position", "rounded", "showAdjacentMonths", "showWeek", "title", "hide-actions", "hide-weekdays", "input-placeholder", "variant", "viewMode", "disabled", "landscape", "modelValue", "onUpdate:modelValue", "onChange", "cancel-text", "ok-text"])
          ]),
          _: 1
        }, 8, ["locale"])
      ]),
      _: 2
    }, [
      renderList(_ctx.$slots, (_, scopedSlotName) => {
        return {
          name: scopedSlotName,
          fn: withCtx((slotData) => [
            renderSlot(_ctx.$slots, scopedSlotName, normalizeProps(guardReactiveProps(slotData)))
          ])
        };
      })
    ]), 1032, ["modelValue"])
  ]);
}
const DateInput = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f]]);
const _sfc_main$e = {
  mixins: [Input],
  props: {
    /**
     * Integer to be edited.
     * @model
     */
    value: {
      type: [String, Number, Boolean]
    },
    /**
     * false value
     */
    falseValue: {
      type: [String, Number, Boolean],
      default: "0"
    },
    /**
     * true value
     */
    trueValue: {
      type: [String, Number, Boolean],
      default: "1"
    }
  }
};
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VSwitch, mergeProps({
    "false-value": 0,
    "true-value": 1
  }, _ctx.commonProps, {
    onChange: _ctx.change,
    "onUpdate:modelValue": _ctx.update
  }), createSlots({ _: 2 }, [
    renderList(_ctx.$slots, (_, scopedSlotName) => {
      return {
        name: scopedSlotName,
        fn: withCtx((slotData) => [
          renderSlot(_ctx.$slots, scopedSlotName, normalizeProps(guardReactiveProps(slotData)))
        ])
      };
    })
  ]), 1040, ["onChange", "onUpdate:modelValue"]);
}
const BooleanInput = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e]]);
const _sfc_main$d = {
  mixins: [Input],
  props: {
    /**
     * Text to be edited.
     */
    value: {
      type: String,
      default: "#FFFFFF"
    },
    /**
     * Applies border styles to component
     */
    border: [String, Number, Boolean],
    /**
     * Designates the border-radius applied to the component
     */
    rounded: [String, Number, Boolean],
    // 
    // this prop already defined no need to declare again
    // 
    // color: String,
    /**
     * Changes the size of the selection dot on the canvas.
     */
    dotSize: String,
    /**
     * Hides canvas
     */
    hideCanvas: Boolean,
    /**
     * Height of canvas
     */
    canvasHeight: [String, Number],
    /**
     * The current selected input type. Syncable with v-model:mode.
     * 'rgb' | 'rgba' | 'hsl' | 'hsla' | 'hex' | 'hexa'
     */
    mode: String,
    /**
     * Sets available input types.
     */
    modes: Array,
    /**
     * Hides inputs
     */
    hideInputs: Boolean,
    /**
     * Hides sliders
     */
    hideSliders: Boolean,
    /**
     * Displays color swatches
     */
    showSwatches: Boolean,
    /**
     * Sets the available color swatches to select from. 2D array of rows and columns, accepts any color format the picker does
     */
    swatches: Array,
    /**
     * Sets the maximum height of the swatches section
     */
    swatchesMaxHeight: [String, Number],
    /**
     * Sets the position for the component
     * 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky
     */
    position: String,
    /**
     * Sets the width of the color picker
     */
    width: String,
    /**
     * Use different styles: 
     * 
     * | 'outlined' | 'plain' | 'underlined' | 'filled' | 'solo' | 'solo-inverted' | 'solo-filled'
     */
    variant: {
      type: String,
      default: "outlined"
    }
  },
  data() {
    return {
      menu: false,
      color: null,
      type: "text"
    };
  },
  mounted() {
    if (!this.input) {
      this.input = "#FFFFFF";
    }
  },
  methods: {
    close() {
      this.menu = false;
    },
    changeState(value) {
      this.change(value);
      this.update(value);
    },
    updateColor(val) {
      this.update(val);
    }
  },
  computed: {
    swatchStyle() {
      return {
        backgroundColor: this.input,
        cursor: "pointer",
        height: "25px",
        width: "25px",
        border: "1px solid #dddddd",
        borderRadius: "50%",
        transition: "border-radius 200ms ease-in-out"
      };
    }
  }
};
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VTextField, mergeProps({
    variant: $props.variant,
    readonly: "",
    density: _ctx.density
  }, _ctx.commonProps, { onChange: $options.changeState }), createSlots({
    "append-inner": withCtx(() => [
      createVNode(VMenu, {
        modelValue: $data.menu,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.menu = $event),
        top: "",
        "nudge-bottom": "105",
        "nudge-left": "16",
        "close-on-content-click": false
      }, {
        activator: withCtx(({ props }) => [
          createBaseVNode("div", mergeProps({ style: $options.swatchStyle }, props), null, 16)
        ]),
        default: withCtx(() => [
          createVNode(VCard, null, {
            default: withCtx(() => [
              createVNode(VCardText, { class: "pa-0" }, {
                default: withCtx(() => [
                  createVNode(VColorPicker, {
                    border: $props.border,
                    color: $data.color,
                    "dot-size": $props.dotSize,
                    "hide-canvas": $props.hideCanvas,
                    "canvas-height": $props.canvasHeight,
                    mode: $props.mode,
                    modes: $props.modes,
                    "hide-inputs": $props.hideInputs,
                    "hide-sliders": $props.hideSliders,
                    rounded: $props.rounded,
                    "show-swatches": $props.showSwatches,
                    swatches: $props.swatches,
                    "swatches-max-height": $props.swatchesMaxHeight,
                    position: $props.position,
                    width: $props.width,
                    variant: $props.variant,
                    value: _ctx.input,
                    "onUpdate:modelValue": $options.updateColor
                  }, null, 8, ["border", "color", "dot-size", "hide-canvas", "canvas-height", "mode", "modes", "hide-inputs", "hide-sliders", "rounded", "show-swatches", "swatches", "swatches-max-height", "position", "width", "variant", "value", "onUpdate:modelValue"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(VBtn, { onClick: $options.close }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t("i18n.actions.close")), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]),
    _: 2
  }, [
    renderList(_ctx.$slots, (_, scopedSlotName) => {
      return {
        name: scopedSlotName,
        fn: withCtx((slotData) => [
          renderSlot(_ctx.$slots, scopedSlotName, normalizeProps(guardReactiveProps(slotData)))
        ])
      };
    })
  ]), 1040, ["variant", "density", "onChange"]);
}
const ColorPickerInput = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d]]);
const Multiple = {
  props: {
    /**
     * Value to be edited. Array by default if multiple.
     * @model
     */
    modelValue: {
      type: [String, Array],
      default() {
        return null;
      }
    },
    /**
     * Allow input to accept multiple value as array.
     */
    multiple: Boolean,
    /**
     * Use full filled background color style.
     */
    variant: {
      type: String,
      default() {
        return "filled";
      }
    },
    /**
     * Use chips for each item. Enabled if `multiple` by default.
     */
    chips: {
      type: Boolean,
      default() {
        return false;
      }
    },
    /**
     * Use small chips.
     */
    smallChips: Boolean
  }
};
const ReferenceInput = {
  inject: [],
  mixins: [Choices, Search],
  props: {
    /**
     * Value to be selected, array if multiple.
     * @model
     */
    modelValue: {
      type: [String, Number, Array, Object],
      default: ""
    },
    /**
     * Name of resource to search into.
     */
    reference: String
  },
  data() {
    return {
      loading: false,
      items: null
    };
  },
  computed: {
    getItemText() {
      if (this.itemText !== "text") {
        return this.itemText;
      }
      if (this.reference) {
        let resource2 = this.$admin.getResource(this.reference);
        return resource2.label || "label";
      }
      return this.itemText;
    },
    getItemValue() {
      if (this.itemValue !== "value") {
        return this.itemValue;
      }
      if (this.reference) {
        return "id";
      }
      return this.itemValue;
    },
    getFields() {
      if (!isEmpty(this.fields)) {
        return this.fields;
      }
      let resource2 = this.$admin.getResource(this.reference);
      return resource2 && typeof resource2.autocompleteFields !== "undefined" || (typeof this.getItemText === "string" ? [this.getItemValue, this.getItemText] : []);
    }
  },
  methods: {
    // getItem(value) {
    //   if (!value) {
    //     return value;
    //   }
    //   let input = this.multiple
    //     ? value.map((v) => v[this.getItemValue] || v)
    //     : value[this.getItemValue] || value;
    //   return input;
    // },
    async fetchChoices(search = null) {
      if (!this.reference) {
        return;
      }
      if (this.loading) {
        return;
      }
      this.loading = true;
      try {
        let { data } = await this.$store.getResource(this.reference).getListAll({
          fields: {
            [this.reference]: this.getFields
          },
          include: this.include,
          // pagination: {
          //   page: 1,
          //   perPage: this.itemsPerPage,
          // },
          sort: this.sortBy.map((by, index2) => {
            return { by, desc: this.sortDesc[index2] };
          }),
          filter: {
            ...this.filter,
            ...this.searchQuery && search && { [this.searchQuery]: search }
          }
        });
        this.loading = false;
        return data.data;
      } catch (error) {
        console.error("Error fetching data:", error.message);
        console.error("Url not found:", error.config.baseURL + "/" + error.config.url);
      }
    },
    async fetchCurrentChoices(ids) {
      if (!this.reference) {
        console.error("Please provide a reference table in attributes.");
        return;
      }
      ids = ids.map(function(val) {
        return { id: val };
      });
      this.loading = true;
      try {
        let { data } = await this.$store.getResource(this.reference).getMany({
          fields: {
            [this.reference]: this.getFields
          },
          include: this.include,
          filter: {
            ...this.filter,
            ...ids
          }
        });
        this.loading = false;
        return data.data;
      } catch (error) {
        console.error("Error fetching data:", error.message);
        console.error("Url not found:", error.config.baseURL + "/" + error.config.url);
      }
    }
  }
};
const _sfc_main$c = {
  mixins: [Input, Multiple, ReferenceInput],
  props: {
    /**
     * Use different styles: 
     * 
     * | 'outlined' | 'plain' | 'underlined' | 'filled' | 'solo' | 'solo-inverted' | 'solo-filled'
     */
    variant: {
      type: String,
      default: "outlined"
    },
    /**
     * Whether to return object
     */
    returnObject: {
      type: Boolean,
      default: true
    }
  },
  async created() {
    this.items = await this.fetchChoices();
  }
};
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VSelect, mergeProps(_ctx.commonProps, {
    density: _ctx.density,
    variant: $props.variant,
    multiple: _ctx.multiple,
    chips: _ctx.chips,
    "small-chips": _ctx.smallChips,
    "item-title": _ctx.getItemText,
    "item-value": _ctx.getItemValue,
    items: _ctx.items || _ctx.choices,
    "onUpdate:modelValue": _ctx.update,
    "return-object": $props.returnObject
  }), createSlots({
    "no-data": withCtx(() => [
      createBaseVNode("div", null, [
        createVNode(VTable, { density: "compact" }, {
          default: withCtx(() => [
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, toDisplayString(_ctx.$t("i18n.datatable.nodata")), 1)
              ])
            ])
          ]),
          _: 1
        })
      ])
    ]),
    _: 2
  }, [
    renderList(_ctx.$slots, (_, scopedSlotName) => {
      return {
        name: scopedSlotName,
        fn: withCtx((slotData) => [
          renderSlot(_ctx.$slots, scopedSlotName, normalizeProps(guardReactiveProps(slotData)))
        ])
      };
    })
  ]), 1040, ["density", "variant", "multiple", "chips", "small-chips", "item-title", "item-value", "items", "onUpdate:modelValue", "return-object"]);
}
const SelectInput = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c]]);
const _sfc_main$b = {
  mixins: [Input, ReferenceInput],
  props: {
    /**
     * Show radios as a row.
     */
    inline: Boolean
  },
  async created() {
    this.items = await this.fetchChoices();
  }
};
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VRadioGroup, mergeProps({
    density: _ctx.density,
    inline: $props.inline
  }, _ctx.commonProps, { "onUpdate:modelValue": _ctx.update }), createSlots({
    default: withCtx(() => [
      _ctx.clearable ? (openBlock(), createBlock(VRadio, {
        key: 0,
        value: "none",
        class: "mr-2",
        label: _ctx.$t("i18n.forms.none")
      }, null, 8, ["label"])) : createCommentVNode("", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items || _ctx.choices, (c, i) => {
        return openBlock(), createBlock(VRadio, {
          class: "mr-2",
          key: i,
          label: c[_ctx.getItemText],
          value: c[_ctx.getItemValue]
        }, null, 8, ["label", "value"]);
      }), 128))
    ]),
    _: 2
  }, [
    renderList(_ctx.$slots, (_, scopedSlotName) => {
      return {
        name: scopedSlotName,
        fn: withCtx((slotData) => [
          renderSlot(_ctx.$slots, scopedSlotName, normalizeProps(guardReactiveProps(slotData)))
        ])
      };
    })
  ]), 1040, ["density", "inline", "onUpdate:modelValue"]);
}
const RadioGroupInput = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b]]);
const _sfc_main$a = {
  mixins: [Input, Multiple, ReferenceInput],
  props: {
    /**
     * Minimum characters to tap before search query launch.
     */
    minChars: {
      type: Number,
      default: 3
    },
    /**
     * Name of request query for searching into your API.
     */
    searchQuery: {
      type: String,
      default: "q"
    },
    /**
     * Enable taggable mode. Transform autocomplete into combobox.
     */
    taggable: Boolean,
    /**
     * Use different styles: 
     * 
     * | 'outlined' | 'plain' | 'underlined' | 'filled' | 'solo' | 'solo-inverted' | 'solo-filled'
     */
    variant: {
      type: String,
      default: "outlined"
    }
  },
  data() {
    return {
      search: null
    };
  },
  methods: {
    async loadCurrentChoices(value) {
      if (this.reference && value) {
        this.items = await this.fetchCurrentChoices(
          this.multiple ? value : [value]
        );
      }
    },
    async asyncSearch(e) {
      this.search = e.target.value;
    }
  },
  watch: {
    input: {
      handler(newVal) {
        this.loadCurrentChoices(newVal);
      },
      immediate: true
    },
    async search(val, old) {
      if (old === null) {
        return;
      }
      if (!val || val.length < this.minChars) {
        return;
      }
      this.items = [
        // ...(this.items || []), // don't repeat same values
        ...await this.fetchChoices(val) || []
      ];
    }
  }
};
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.taggable ? "v-combobox" : "v-autocomplete"), mergeProps({ density: _ctx.density }, _ctx.commonProps, {
    variant: $props.variant,
    multiple: _ctx.multiple,
    chips: _ctx.chips,
    "closable-chips": "",
    loading: _ctx.loading,
    "item-title": _ctx.getItemText,
    "item-value": _ctx.getItemValue,
    items: _ctx.items || _ctx.choices,
    onKeyup: _cache[0] || (_cache[0] = ($event) => $options.asyncSearch($event)),
    "onUpdate:modelValue": _ctx.update,
    clearable: _ctx.clearable,
    "return-object": ""
  }), createSlots({ _: 2 }, [
    renderList(_ctx.$slots, (_, scopedSlotName) => {
      return {
        name: scopedSlotName,
        fn: withCtx((slotData) => [
          renderSlot(_ctx.$slots, scopedSlotName, normalizeProps(guardReactiveProps(slotData)))
        ])
      };
    })
  ]), 1040, ["density", "variant", "multiple", "chips", "loading", "item-title", "item-value", "items", "onUpdate:modelValue", "clearable"]);
}
const AutoCompleteInput = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
const _sfc_main$9 = {
  mixins: [Input, Multiple, Utils],
  props: {
    /**
     * Attribute where taking the id value for identify files to delete.
     */
    itemValue: {
      type: String,
      default: "id"
    },
    /**
     * Add HTML5 `accept` attribute for simple client-side validation.
     */
    accept: String,
    /**
     * base64 upload option
     */
    base64: {
      type: Boolean,
      default: true
    },
    /**
     * Set tablename
     */
    tableName: String,
    /**
     * Use different styles: 
     * 
     * | 'outlined' | 'plain' | 'underlined' | 'filled' | 'solo' | 'solo-inverted' | 'solo-filled'
     */
    variant: {
      type: String,
      default: "outlined"
    },
    /**
     * Download is enabled
     */
    download: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      clear: false,
      image: null,
      files: [],
      acceptValue: false
    };
  },
  computed: {
    getCommonProps() {
      delete this.commonProps.appendIcon;
      delete this.commonProps.prependIcon;
      delete this.commonProps.appendInnerIcon;
      delete this.commonProps.prependInnerIcon;
      return { ...this.commonProps, multiple: true };
    },
    fileFormatted() {
      return this.input;
    }
  },
  created() {
    let item = this.getItem();
    if (this.source && item && typeof item[this.source] !== "undefined") {
      this.input = item[this.source];
      this.update(this.input);
    }
  },
  methods: {
    updateFile(val) {
      if (typeof val == "undefined" || Array.isArray(val) && val.length == 0) {
        this.files = [];
        this.update(val);
        this.clear = true;
        return;
      }
      this.clear = false;
      if (this.base64) {
        this.createBase64Files(val);
      } else {
        this.update(val);
      }
    },
    createBase64Files(value) {
      for (var i = 0; i <= value.length; i++) {
        this.createFile(i, value[i]);
      }
    },
    createFile(index2, fileObject) {
      const reader = new FileReader();
      reader.onload = (event2) => {
        this.files[index2] = { id: null, size: null, name: null, data: null, type: null };
        if (typeof fileObject["id"] == "undefined") {
          this.files[index2]["id"] = this.generateUid();
        }
        this.files[index2]["size"] = fileObject.size;
        this.files[index2]["name"] = fileObject.name;
        this.files[index2]["type"] = fileObject.type;
        this.files[index2]["data"] = event2.target.result;
        this.image = event2.target.result;
        this.update(this.files);
      };
      if (typeof event.target.files[index2] != "undefined") {
        reader.readAsDataURL(fileObject);
      }
    },
    // remove(index) {
    //   this.files.splice(index, 1)
    //   this.update(this.files)
    // },
    getItem() {
      if (this.formState && Object.prototype.hasOwnProperty.call(this.formState, "item")) {
        return this.formState.item;
      }
      return null;
    },
    clickMeIndex(e, index2) {
      e.stopPropagation();
      if (this.download) {
        this.downloadFileWithIndex(index2);
      }
    },
    downloadFileWithIndex(index2) {
      let url = this.$admin.apiUrl + this.$admin.downloadUrl + String(this.value[index2].id) + "?tableName=" + this.tableName;
      this.testFile(url, this.value[index2].id);
    },
    async testFile(url, fileId) {
      let response = null;
      try {
        response = await this.$admin.http.get(url);
        if (response.status == 200 && typeof fileId != "undefined") {
          location.href = url;
        }
      } catch (e) {
        console.log(e);
        this.$store.commit("messages/show", { type: "warning", message: this.$t("error.fileNotFound") });
      }
    }
  }
};
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createVNode(VFileInput, mergeProps({
      density: _ctx.density,
      "prepend-icon": "",
      "prepend-inner-icon": "mdi-attachment"
    }, $options.getCommonProps, {
      variant: $props.variant,
      chips: _ctx.chips,
      multiple: "",
      clearable: "",
      "show-size": "",
      "small-chips": _ctx.smallChips,
      accept: $props.accept,
      modelValue: $options.fileFormatted,
      "onUpdate:modelValue": $options.updateFile
    }), createSlots({
      selection: withCtx(({ fileNames }) => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(fileNames, (fileName, index2) => {
          return openBlock(), createBlock(VChip, {
            key: fileName,
            size: "x-small",
            onClick: withModifiers(($event) => $options.clickMeIndex($event, index2), ["stop"])
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(fileName), 1)
            ]),
            _: 2
          }, 1032, ["onClick"]);
        }), 128))
      ]),
      _: 2
    }, [
      renderList(_ctx.$slots, (_, scopedSlotName) => {
        return {
          name: scopedSlotName,
          fn: withCtx((slotData) => [
            renderSlot(_ctx.$slots, scopedSlotName, normalizeProps(guardReactiveProps(slotData)))
          ])
        };
      })
    ]), 1040, ["density", "variant", "chips", "small-chips", "accept", "modelValue", "onUpdate:modelValue"])
  ]);
}
const FileInput = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
const _sfc_main$8 = {
  mixins: [Input, Resource, Utils],
  emits: ["validate", "save", "delete", "edit"],
  inject: {
    v$: {
      default: null
    }
  },
  props: {
    class: {
      type: String,
      default() {
        return "va-array-table-input mb-5";
      }
    },
    title: {
      type: String
    },
    headers: {
      type: Array,
      default: []
    },
    fields: {
      type: Array,
      default: []
    },
    primaryKey: {
      type: String
    },
    createId: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialogDelete: false,
      form: null,
      editedIndex: -1,
      editRowId: null,
      editItems: []
    };
  },
  computed: {
    getErrorMessages() {
      if (Array.isArray(this.errorMessages) && this.errorMessages.length > 0) {
        return this.errorMessages;
      }
      return null;
    },
    getItems() {
      if (this.form && !this.editRowId) {
        let items = [{ _new: true }, ...this.editItems];
        return items;
      }
      return this.editItems;
    },
    getFields() {
      let fields = this.fields.map((f) => {
        return typeof f === "string" ? {
          source: f
        } : f;
      }).map((f) => {
        return {
          ...f,
          type: f.type,
          label: f.label || this.$admin.getSourceLabel(
            this.resource,
            f.labelKey || f.source
          )
        };
      });
      if (this.primaryKey) {
        fields[this.primaryKey] = null;
      }
      return fields;
    }
  },
  created() {
    this.editItems = Array.isArray(this.input) ? this.input : [];
  },
  watch: {
    dialogDelete(val) {
      val || this.close();
    },
    editItems: {
      handler(newValue) {
        this.update(newValue);
      },
      deep: true
    }
  },
  methods: {
    getOptions(field) {
      if (field && Object.prototype.hasOwnProperty.call(field, "options")) {
        return field.options;
      }
      return;
    },
    getTitleLabel(column) {
      if (column.title) {
        return column.title;
      } else if (column.key) {
        return this.$admin.getSourceLabel(this.resource, column.key);
      }
      return;
    },
    getSelectLabel(item, source) {
      if (item && item[source] && typeof item[source]["name"]) {
        return item[source].name;
      }
      return null;
    },
    editItem(item) {
      this.$emit("edit", item);
      this.createRowForm("edit", item);
      this.editedIndex = this.editItems.indexOf(item);
    },
    createRowForm(action = "new", item = null) {
      const Self = this;
      this.$emit("validate", false);
      this.form = this.fields.map((f) => f).reduce(function(o, f) {
        return {
          ...o,
          [f.source]: Self.getValue(action, f, item)
          // default value
        };
      }, {});
      if (action == "new") {
        this.editRowId = null;
        this.form[this.primaryKey] = this.createId ? this.generateUid() : null;
      } else {
        this.editRowId = item ? item[this.primaryKey] : null;
      }
      this.$store.getResource(this.resource).setRow(this.form);
    },
    getValue(action, f, item) {
      if (f && Object.prototype.hasOwnProperty.call(f, "value")) {
        return f.value;
      }
      if (f["type"] && f["type"] == "custom") {
        let values = {};
        if (action == "new" && f["items"]) {
          for (let key in f["items"]) {
            values[f["items"][key]["id"]] = null;
          }
          return values;
        } else if (action == "edit" && f["items"]) {
          if (!item[f.source]) {
            item[f.source] = {};
            for (let key in f["items"]) {
              item[f.source][f["items"][key]["id"]] = null;
            }
          } else {
            return item[f.source];
          }
          return item[f.source];
        }
      } else if (item) {
        return item[f.source];
      }
      return null;
    },
    saveItem() {
      const Self = this;
      let invalid = false;
      this.$emit("validate", this.form);
      if (this.v$["$externalInvalid"] && this.v$.$externalInvalid) {
        invalid = true;
      }
      this.getFields.forEach(function(val) {
        if (!Self.v$[Self.source + "Form"]) {
          return;
        }
        if (Self.v$[Self.source + "Form"][val.source]) {
          Self.v$[Self.source + "Form"][val.source].$touch();
          if (Self.v$[Self.source + "Form"][val.source].$invalid) {
            invalid = true;
          }
        }
      });
      if (invalid) {
        return;
      }
      if (this.editedIndex > -1) {
        Object.assign(this.editItems[this.editedIndex], this.form);
      } else {
        this.editItems.push(this.form);
      }
      this.$emit("save", this.form);
      this.$emit("validate", false);
      this.update(this.input);
      this.close();
    },
    deleteItem(item) {
      this.editedIndex = this.editItems.indexOf(item);
      this.dialogDelete = true;
    },
    deleteConfirm() {
      this.$emit("delete", this.editItems[this.editedIndex]);
      this.editItems.splice(this.editedIndex, 1);
      this.update(this.input);
      this.close();
    },
    cancel() {
      this.close();
    },
    close() {
      this.$nextTick(async () => {
        this.editedIndex = -1;
        this.v$.$reset();
      });
      this.form = null;
      this.editRowId = null;
      this.$store.getResource(this.resource).setRow(null);
      this.dialogDelete = false;
    }
  }
};
const _hoisted_1$3 = { class: "h4 mb-2" };
const _hoisted_2$3 = {
  key: 0,
  class: "mt-5"
};
const _hoisted_3$1 = { key: 1 };
const _hoisted_4$1 = { key: 2 };
const _hoisted_5$1 = { key: 3 };
const _hoisted_6$1 = { style: { "font-size": "12px", "color": "#7a7a7a", "padding-top": "20px", "padding-bottom": "20px" } };
const _hoisted_7$1 = { class: "v-input__details" };
const _hoisted_8$1 = {
  class: "v-messages",
  style: { "color": "rgb(var(--v-theme-error))" },
  role: "alert"
};
const _hoisted_9$1 = { class: "v-messages__message" };
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($props.class)
  }, [
    createVNode(VDataTable, {
      headers: $props.headers,
      items: $options.getItems,
      density: _ctx.density
    }, createSlots({
      top: withCtx(() => [
        createVNode(VRow, { "no-gutters": "" }, {
          default: withCtx(() => [
            createVNode(VCol, {
              lg: "6",
              align: "left"
            }, {
              default: withCtx(() => [
                createBaseVNode("h4", _hoisted_1$3, toDisplayString($props.title), 1)
              ]),
              _: 1
            }),
            createVNode(VCol, {
              lg: "6",
              align: "right"
            }, {
              default: withCtx(() => [
                createVNode(VBtn, {
                  variant: "plain",
                  onClick: _cache[0] || (_cache[0] = ($event) => $options.createRowForm()),
                  color: "green-darken-1",
                  icon: ""
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, null, {
                      default: withCtx(() => _cache[3] || (_cache[3] = [
                        createTextVNode("mdi-plus")
                      ])),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      headers: withCtx(({ columns }) => [
        createBaseVNode("tr", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(columns, (column) => {
            return openBlock(), createElementBlock("th", {
              key: column.key
            }, toDisplayString($options.getTitleLabel(column)), 1);
          }), 128))
        ])
      ]),
      [`item.actions`]: withCtx(({ item }) => [
        item._new || item[$props.primaryKey] === $data.editRowId ? (openBlock(), createBlock(VIcon, {
          key: 0,
          size: "large",
          class: "mr-2",
          color: "green-darken-1",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.saveItem()),
          style: { "font-size": "1.2rem !important" }
        }, {
          default: withCtx(() => _cache[4] || (_cache[4] = [
            createTextVNode(" mdi-content-save ")
          ])),
          _: 1
        })) : createCommentVNode("", true),
        item._new || item[$props.primaryKey] === $data.editRowId ? (openBlock(), createBlock(VIcon, {
          key: 1,
          size: "large",
          color: "red-darken-1",
          onClick: $options.cancel,
          style: { "font-size": "1.2rem !important" }
        }, {
          default: withCtx(() => _cache[5] || (_cache[5] = [
            createTextVNode(" mdi-close ")
          ])),
          _: 1
        }, 8, ["onClick"])) : createCommentVNode("", true),
        !item._new && item[$props.primaryKey] != $data.editRowId ? (openBlock(), createBlock(VIcon, {
          key: 2,
          size: "small",
          color: "blue-darken-1",
          onClick: ($event) => $options.editItem(item),
          style: { "font-size": "1.2rem !important" }
        }, {
          default: withCtx(() => _cache[6] || (_cache[6] = [
            createTextVNode(" mdi-pencil ")
          ])),
          _: 2
        }, 1032, ["onClick"])) : createCommentVNode("", true),
        !item._new && item[$props.primaryKey] != $data.editRowId ? (openBlock(), createBlock(VIcon, {
          key: 3,
          size: "small",
          color: "red-darken-1",
          onClick: ($event) => $options.deleteItem(item),
          style: { "font-size": "1.2rem !important" }
        }, {
          default: withCtx(() => _cache[7] || (_cache[7] = [
            createTextVNode(" mdi-delete ")
          ])),
          _: 2
        }, 1032, ["onClick"])) : createCommentVNode("", true)
      ]),
      bottom: withCtx(() => []),
      "no-data": withCtx(() => [
        createBaseVNode("div", _hoisted_6$1, toDisplayString(_ctx.$t("i18n.datatable.noDataAvailable")), 1)
      ]),
      _: 2
    }, [
      renderList(_ctx.$slots, (_, scopedSlotName) => {
        return {
          name: scopedSlotName,
          fn: withCtx((slotData) => [
            renderSlot(_ctx.$slots, scopedSlotName, normalizeProps(guardReactiveProps(slotData)))
          ])
        };
      }),
      renderList($options.getFields, (field) => {
        return {
          name: `item.${field.source}`,
          fn: withCtx(({ item }) => [
            item._new || item[$props.primaryKey] === $data.editRowId ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
              renderSlot(_ctx.$slots, `input.${field.source}`, normalizeProps(guardReactiveProps({ field, item, editRowId: $data.editRowId })))
            ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              renderSlot(_ctx.$slots, "show", normalizeProps(guardReactiveProps({ field, item, editRowId: $data.editRowId }))),
              field.type == "select" ? (openBlock(), createElementBlock("span", {
                key: field.source
              }, toDisplayString($options.getSelectLabel(item, field.source)), 1)) : field.type == "custom" ? (openBlock(), createElementBlock("span", _hoisted_3$1, [
                renderSlot(_ctx.$slots, `field.${field.source}`, normalizeProps(guardReactiveProps({ item })))
              ])) : field.type ? (openBlock(), createElementBlock("span", _hoisted_4$1, [
                (openBlock(), createBlock(resolveDynamicComponent(`va-${field.type}-field`), mergeProps({
                  source: field.sourceLabel ? field.sourceLabel : field.source,
                  resource: _ctx.resource,
                  item,
                  variant: "outlined",
                  options: $options.getOptions(field)
                }, field.attributes), {
                  default: withCtx((props) => [
                    renderSlot(_ctx.$slots, `field.${field.source}`, mergeProps({
                      item: props.item || item
                    }, props))
                  ]),
                  _: 2
                }, 1040, ["source", "resource", "item", "options"]))
              ])) : (openBlock(), createElementBlock("span", _hoisted_5$1, [
                renderSlot(_ctx.$slots, `field.${field.source}`, normalizeProps(guardReactiveProps({ item, value: _ctx.value })), () => [
                  createTextVNode(toDisplayString(item[field.source]), 1)
                ])
              ]))
            ], 64))
          ])
        };
      })
    ]), 1032, ["headers", "items", "density"]),
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.getErrorMessages, (error) => {
      return openBlock(), createElementBlock("div", _hoisted_7$1, [
        createBaseVNode("div", _hoisted_8$1, [
          createBaseVNode("div", _hoisted_9$1, toDisplayString(error), 1)
        ])
      ]);
    }), 256)),
    createVNode(VDialog, {
      modelValue: $data.dialogDelete,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.dialogDelete = $event),
      "max-width": "500"
    }, {
      default: withCtx(() => [
        createVNode(VCard, null, {
          default: withCtx(() => [
            createVNode(VCardTitle, { class: "text-h5" }),
            createVNode(VCardText, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("dialog.deleteConfirm")), 1)
              ]),
              _: 1
            }),
            createVNode(VCardActions, null, {
              default: withCtx(() => [
                createVNode(VSpacer),
                createVNode(VBtn, {
                  color: "green darken-1",
                  text: "",
                  onClick: $options.cancel
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("dialog.closeDeleteButton")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(VBtn, {
                  color: "green darken-1",
                  text: "",
                  onClick: $options.deleteConfirm
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("dialog.confirmDeleteButton")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"])
  ], 2);
}
const ArrayTableInput = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
const _sfc_main$7 = {
  inject: [],
  mixins: [Input, Utils],
  props: {
    color: {
      type: String,
      default() {
        return "primary";
      }
    },
    variant: {
      type: String,
      default: "outlined"
    },
    class: {
      type: String,
      default() {
        return "va-checklist-input";
      }
    },
    disableSearch: {
      type: Boolean,
      default: false
    },
    disableFooter: {
      type: Boolean,
      default: false
    },
    primaryKey: {
      type: String
    },
    itemsPerPage: {
      type: [String, Number],
      default: () => 30
    },
    headers: {
      type: Array,
      default: () => []
    },
    fields: {
      type: Array,
      default: () => []
    },
    initUrl: {
      type: String
    },
    groupBy: {
      type: String
    },
    groupByArray: {
      type: Array,
      default: () => [
        {
          key: "module",
          order: "asc"
        }
      ]
    }
  },
  data() {
    return {
      selectAll: false,
      items: [],
      search: "",
      selected: [],
      groupedItems: [],
      parentChecked: []
    };
  },
  created() {
    this.selected = this.input;
    this.initializeItems();
  },
  emits: ["selected"],
  watch: {
    selectAll(val) {
      if (val) {
        this.toggleAllParentCheckboxes(true);
      } else {
        this.toggleAllParentCheckboxes(false);
      }
    },
    selected: {
      handler(newValue) {
        this.update(newValue);
      },
      deep: true
    }
  },
  computed: {
    getFields() {
      return this.fields.map((f) => {
        return typeof f === "string" ? {
          source: f
        } : f;
      }).map((f) => {
        return {
          ...f,
          // type: f.type,
          label: f.label || this.$admin.getSourceLabel(
            this.resource,
            f.labelKey || f.key || f.source
          )
        };
      });
    }
  },
  methods: {
    toggleAllSelection() {
      this.selected = this.selectAll ? [] : this.items.slice();
    },
    getTitleLabel(column) {
      if (column.title) {
        return column.title;
      } else if (column.key) {
        return this.$admin.getSourceLabel(this.resource, column.key);
      }
      return;
    },
    filterText(value, search, item) {
      if (item && item[this.groupBy] && item[this.groupBy].toLowerCase().indexOf(search.toLowerCase()) !== -1) {
        return true;
      }
      return (
        // search in other fields
        value != null && search != null && typeof value === "string" && value.toString().toLocaleLowerCase().indexOf(search) !== -1
      );
    },
    isSelected(item) {
      const id = item[this.primaryKey];
      if (!Array.isArray(this.selected) || this.selected.length === 0) {
        return false;
      }
      return this.selected.some((selectedItem) => selectedItem[this.primaryKey] === id);
    },
    async initializeItems() {
      let response = await this.$admin.http.get(this.initUrl);
      if (response) {
        this.items = response.data.data;
        this.groupedItems = this.arrayGroupBy(this.items, this.groupBy);
        this.initializeParentCheckboxes();
        if (this.selected && this.items.length == this.selected.length) {
          this.selectAll = true;
        }
      }
    },
    initializeParentCheckboxes() {
      let selectedGroupItems = [];
      if (this.selected && this.groupBy) {
        selectedGroupItems = this.arrayGroupBy(
          this.selected,
          this.groupBy
        );
      }
      let Self = this;
      Object.keys(this.groupedItems).forEach(function(groupBy) {
        let childrenCount = Self.groupedItems[groupBy].length;
        if (typeof selectedGroupItems[groupBy] != "undefined" && selectedGroupItems[groupBy].length == childrenCount) {
          Self.parentChecked[groupBy] = true;
        }
      });
    },
    toggleAllParentCheckboxes(check) {
      let Self = this;
      Object.keys(this.groupedItems).forEach(function(groupBy) {
        Self.parentChecked[groupBy] = check;
      });
    },
    toggle(item, isSelected, group) {
      let Self = this;
      if (isSelected) {
        this.selected.forEach(function(val, index2) {
          if (val[Self.primaryKey] == item[Self.primaryKey]) {
            Self.selected = remove(Self.selected, (i) => i == index2);
          }
        });
      } else {
        this.selected.push(item);
      }
      let selectedChildrenCount = this.groupedItems[group].length;
      let selectedGroupCount = 0;
      this.selected.forEach(function(val) {
        if (val[Self.groupBy] == group) {
          if (isSelected) {
            --selectedGroupCount;
          } else {
            ++selectedGroupCount;
          }
        }
      });
      if (selectedGroupCount == selectedChildrenCount) {
        this.parentChecked[group] = true;
      } else {
        this.parentChecked[group] = false;
      }
      Self.$emit("selected", Self.selected);
    },
    toggleChildren(groupBy) {
      let Self = this;
      if (Array.isArray(this.selected) && this.parentChecked[groupBy]) {
        let selectedIds = [];
        this.selected.forEach(function(val) {
          selectedIds.push(val[Self.primaryKey]);
        });
        if (typeof this.groupedItems[groupBy] != "undefined") {
          this.groupedItems[groupBy].forEach(function(gVal) {
            if (!selectedIds.includes(gVal[Self.primaryKey])) {
              Self.selected.push(gVal);
            }
          });
        }
      } else {
        if (Array.isArray(this.selected) && typeof this.groupedItems[groupBy] != "undefined") {
          this.groupedItems[groupBy].forEach(function(gVal) {
            Self.selected = Self.selected.filter(
              function(item) {
                return item[Self.primaryKey] != gVal[Self.primaryKey];
              }
            );
          });
        }
      }
      this.$emit("selected", this.selected);
    }
  }
  // end methods
};
const _hoisted_1$2 = { class: "text-center py-4" };
const _hoisted_2$2 = { key: 0 };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = {
  key: 1,
  class: "ml-3"
};
const _hoisted_5 = ["colspan"];
const _hoisted_6 = { style: { "display": "flex", "justify": "center" } };
const _hoisted_7 = { class: "float-left" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = { align: "right" };
const _hoisted_10 = { class: "mt-1" };
const _hoisted_11 = {
  key: 1,
  style: { "width": "25px" }
};
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($props.class)
  }, [
    createVNode(VDataTable, {
      color: $props.color,
      density: _ctx.density,
      "show-select": true,
      modelValue: $data.selected,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.selected = $event),
      "item-key": $props.primaryKey,
      headers: $props.headers,
      items: $data.items,
      "group-by": $props.groupByArray,
      "items-per-page": Number($props.itemsPerPage),
      search: $data.search,
      "custom-filter": $options.filterText
    }, createSlots({
      "no-data": withCtx(() => [
        createBaseVNode("div", _hoisted_1$2, toDisplayString(_ctx.$t("i18n.datatable.noDataAvailable")), 1)
      ]),
      headers: withCtx(({ columns, isSorted, getSortIcon, toggleSort }) => [
        createBaseVNode("tr", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(columns, (column) => {
            return openBlock(), createElementBlock(Fragment, {
              key: column.key
            }, [
              column.key != "data-table-group" ? (openBlock(), createElementBlock("th", _hoisted_2$2, [
                column.key == "data-table-select" ? (openBlock(), createElementBlock("div", _hoisted_3, [
                  createVNode(VCheckbox, {
                    modelValue: $data.selectAll,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.selectAll = $event),
                    onClick: withModifiers($options.toggleAllSelection, ["stop"])
                  }, null, 8, ["modelValue", "onClick"])
                ])) : (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString($options.getTitleLabel(column)), 1))
              ])) : createCommentVNode("", true)
            ], 64);
          }), 128))
        ])
      ]),
      "group-header": withCtx(({ item, columns, toggleGroup, isGroupOpen }) => [
        createBaseVNode("tr", null, [
          createBaseVNode("td", {
            class: "text-start",
            colspan: columns.length
          }, [
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createVNode(VBtn, {
                  class: "mb-0 pb-0",
                  size: "xsmall",
                  variant: "text",
                  onClick: ($event) => toggleGroup(item)
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, { size: "large" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(isGroupOpen(item) ? "$minus" : "$plus"), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(VCheckbox, {
                      modelValue: $data.parentChecked[item.value],
                      "onUpdate:modelValue": ($event) => $data.parentChecked[item.value] = $event,
                      class: "ml-2 mr-3 mt-0",
                      onChange: ($event) => $options.toggleChildren(item.value, isGroupOpen(item)),
                      "hide-details": "true"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                createTextVNode(" " + toDisplayString(item.value), 1)
              ])
            ])
          ], 8, _hoisted_5)
        ])
      ]),
      item: withCtx(({ item }) => [
        createBaseVNode("tr", {
          style: { "cursor": "pointer" },
          class: normalizeClass($options.isSelected(item) ? "v-data-table__selected" : ""),
          onClick: ($event) => $options.toggle(item, $options.isSelected(item), item[$props.groupBy])
        }, [
          createBaseVNode("td", _hoisted_9, [
            createBaseVNode("div", _hoisted_10, [
              $options.isSelected(item) ? (openBlock(), createBlock(VIcon, {
                key: 0,
                size: "16",
                color: "green"
              }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("mdi-check")
                ])),
                _: 1
              })) : createCommentVNode("", true),
              !$options.isSelected(item) ? (openBlock(), createElementBlock("div", _hoisted_11, " ")) : createCommentVNode("", true)
            ])
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.getFields, (field) => {
            return openBlock(), createElementBlock("td", {
              key: field.source
            }, toDisplayString(item[field.source]), 1);
          }), 128))
        ], 10, _hoisted_8)
      ]),
      _: 2
    }, [
      renderList(_ctx.$slots, (_, scopedSlotName) => {
        return {
          name: scopedSlotName,
          fn: withCtx((slotData) => [
            scopedSlotName ? renderSlot(_ctx.$slots, scopedSlotName, normalizeProps(mergeProps({ key: 0 }, slotData))) : createCommentVNode("", true)
          ])
        };
      }),
      !$props.disableSearch ? {
        name: "top",
        fn: withCtx(() => [
          createVNode(VRow, { "no-gutters": "" }, {
            default: withCtx(() => [
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VTextField, {
                    density: _ctx.density,
                    modelValue: $data.search,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.search = $event),
                    "append-inner-icon": "mdi-magnify",
                    color: $props.color,
                    variant: $props.variant,
                    clearable: "",
                    label: _ctx.$t("i18n.actions.q")
                  }, null, 8, ["density", "modelValue", "color", "variant", "label"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        key: "0"
      } : void 0,
      $props.disableFooter ? {
        name: "bottom",
        fn: withCtx(() => []),
        key: "1"
      } : void 0
    ]), 1032, ["color", "density", "modelValue", "item-key", "headers", "items", "group-by", "items-per-page", "search", "custom-filter"])
  ], 2);
}
const CheckListInput = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
const _sfc_main$6 = {
  mixins: [Input],
  props: {
    /**
     * Currency options
     */
    options: Object,
    /**
     * Use different styles: 
     * 
     * | 'outlined' | 'plain' | 'underlined' | 'filled' | 'solo' | 'solo-inverted' | 'solo-filled'
     */
    variant: {
      type: String,
      default: "outlined"
    }
  }
};
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_vue_currency_component = resolveComponent("va-vue-currency-component");
  return openBlock(), createBlock(_component_va_vue_currency_component, mergeProps({ density: _ctx.density }, _ctx.commonProps, {
    options: $props.options,
    variant: $props.variant,
    "onUpdate:modelValue": _ctx.update
  }), null, 16, ["density", "options", "variant", "onUpdate:modelValue"]);
}
const CurrencyInput = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
const _sfc_main$5 = {
  components: {
    StencilPreview: ce,
    DraggableArea: Qt,
    DraggableElement: F
  },
  props: {
    image: {
      type: Object
    },
    coordinates: {
      type: Object
    },
    transitions: {
      type: Object
    },
    stencilCoordinates: {
      type: Object
    }
  },
  computed: {
    style() {
      const { height, width, left, top } = this.stencilCoordinates;
      const style = {
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate(${left}px, ${top}px)`
      };
      if (this.transitions && this.transitions.enabled) {
        style.transition = `${this.transitions.time}ms ${this.transitions.timingFunction}`;
      }
      return style;
    }
  },
  methods: {
    onMove(moveEvent) {
      this.$emit("move", moveEvent);
    },
    onMoveEnd() {
      this.$emit("move-end");
    },
    onResize(dragEvent) {
      const shift = dragEvent.shift();
      const widthResize = shift.left;
      const heightResize = -shift.top;
      this.$emit(
        "resize",
        new X(
          {
            left: widthResize,
            right: widthResize,
            top: heightResize,
            bottom: heightResize
          },
          {
            compensate: true
          }
        )
      );
    },
    onResizeEnd() {
      this.$emit("resize-end");
    },
    aspectRatios() {
      return {
        minimum: 1,
        maximum: 1
      };
    }
  }
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_draggable_element = resolveComponent("draggable-element");
  const _component_stencil_preview = resolveComponent("stencil-preview");
  const _component_draggable_area = resolveComponent("draggable-area");
  return openBlock(), createElementBlock("div", {
    class: "circle-stencil",
    style: normalizeStyle($options.style)
  }, [
    createVNode(_component_draggable_element, {
      class: "circle-stencil__handler",
      onDrag: $options.onResize,
      onDragEnd: $options.onResizeEnd
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", {
          class: "circle-stencil__icon",
          xmlns: "http://www.w3.org/2000/svg",
          width: "26.7",
          height: "26.3",
          onMousedown: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["prevent"]))
        }, _cache[1] || (_cache[1] = [
          createBaseVNode("path", {
            fill: "#FFF",
            d: "M15.1 4.7L18.3 6l-3.2 3.3 2.3 2.3 3.3-3.3 1.3 3.3L26.7 0zM9.3 14.7L6 18l-1.3-3.3L0 26.3l11.6-4.7-3.3-1.3 3.3-3.3z"
          }, null, -1)
        ]), 32))
      ]),
      _: 1
    }, 8, ["onDrag", "onDragEnd"]),
    createVNode(_component_draggable_area, {
      onMove: $options.onMove,
      onMoveEnd: $options.onMoveEnd
    }, {
      default: withCtx(() => [
        createVNode(_component_stencil_preview, {
          class: "circle-stencil__preview",
          image: $props.image,
          coordinates: $props.coordinates,
          width: $props.stencilCoordinates.width,
          height: $props.stencilCoordinates.height,
          transitions: $props.transitions
        }, null, 8, ["image", "coordinates", "width", "height", "transitions"])
      ]),
      _: 1
    }, 8, ["onMove", "onMoveEnd"])
  ], 4);
}
const Stencil = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const AvatarDefaultSvg = "/assets/avatar_default.svg";
const _sfc_main$4 = {
  mixins: [Input],
  components: {
    Cropper: fe,
    Stencil
  },
  // emits: ['update:modelValue'],
  props: {
    /**
     * Set background color
     */
    backgroundColor: {
      type: String,
      default: "#ededed"
    },
    /**
     * Set default image
     */
    defaultSrc: {
      type: String,
      default: AvatarDefaultSvg
    },
    /**
     * Value to be edited
     */
    modelValue: {
      type: String,
      default() {
        return "";
      }
    },
    /**
     * Avatar set button label
     */
    setLabel: {
      type: String,
      default: "Set Avatar"
    },
    /**
     * Avatar del button label
     */
    delLabel: {
      type: String,
      default: "Delete"
    }
  },
  data() {
    return {
      uploadedImage: null,
      dialog: false
    };
  },
  methods: {
    cropImage() {
      const result = this.$refs.cropper.getResult();
      this.input = result.canvas.toDataURL("image/jpeg");
      this.update(this.input);
      this.dialog = false;
    },
    uploadImage(event2) {
      var input = event2.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.uploadedImage = e.target.result;
          this.dialog = true;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    deleteAvatar() {
      this.input = null;
      this.update(null);
      this.dialog = false;
      this.uploadedImage = null;
    },
    reset() {
      this.dialog = false;
      this.$refs.file.value = "";
      this.uploadedImage = null;
    }
  }
};
const _hoisted_1$1 = { class: "mb-3" };
const _hoisted_2$1 = { class: "justify-center mt-2" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Cropper = resolveComponent("Cropper");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createVNode(VCard, {
      flat: "",
      class: "mx-auto mb-4 text-xs-center",
      "max-width": "100",
      rounded: "0"
    }, {
      default: withCtx(() => [
        createVNode(VAvatar, {
          color: $props.backgroundColor,
          size: "100",
          rounded: "5"
        }, createSlots({
          default: withCtx(() => [
            _ctx.input ? (openBlock(), createBlock(VImg, {
              key: 0,
              cover: "",
              src: _ctx.input
            }, null, 8, ["src"])) : (openBlock(), createBlock(VImg, {
              key: 1,
              cover: "",
              src: $props.defaultSrc
            }, null, 8, ["src"]))
          ]),
          _: 2
        }, [
          renderList(_ctx.$slots, (_, scopedSlotName) => {
            return {
              name: scopedSlotName,
              fn: withCtx((slotData) => [
                scopedSlotName ? renderSlot(_ctx.$slots, scopedSlotName, normalizeProps(mergeProps({ key: 0 }, slotData))) : createCommentVNode("", true)
              ])
            };
          })
        ]), 1032, ["color"]),
        createBaseVNode("div", _hoisted_2$1, [
          !_ctx.input ? (openBlock(), createBlock(VBtn, {
            key: 0,
            block: "",
            size: "x-small",
            color: "secondary",
            class: "mt-1 mb-4",
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$refs.file.click())
          }, {
            default: withCtx(() => [
              createBaseVNode("input", {
                hidden: "",
                type: "file",
                ref: "file",
                onChange: _cache[0] || (_cache[0] = ($event) => $options.uploadImage($event)),
                accept: "image/*"
              }, null, 544),
              createTextVNode(" " + toDisplayString($props.setLabel), 1)
            ]),
            _: 1
          })) : (openBlock(), createBlock(VBtn, {
            key: 1,
            block: "",
            size: "x-small",
            class: "mt-1 mb-4",
            color: "secondary",
            onClick: $options.deleteAvatar
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString($props.delLabel), 1)
            ]),
            _: 1
          }, 8, ["onClick"]))
        ])
      ]),
      _: 3
    }),
    withDirectives(createVNode(VTextField, mergeProps(_ctx.commonProps, {
      type: "text",
      color: "primary",
      onChange: _ctx.change,
      "onUpdate:modelValue": _ctx.update
    }), null, 16, ["onChange", "onUpdate:modelValue"]), [
      [vShow, false]
    ]),
    createVNode(VRow, null, {
      default: withCtx(() => [
        createVNode(VDialog, {
          modelValue: $data.dialog,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.dialog = $event),
          persistent: "",
          width: "auto",
          height: "auto"
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardText, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", null, [
                      createVNode(_component_Cropper, {
                        ref: "cropper",
                        class: "",
                        src: $data.uploadedImage,
                        "stencil-component": _ctx.$options.components.Stencil
                      }, null, 8, ["src", "stencil-component"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(VDivider),
                createVNode(VCardActions, null, {
                  default: withCtx(() => [
                    createVNode(VRow, { "no-gutters": "" }, {
                      default: withCtx(() => [
                        createVNode(VCol, { class: "text-left" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              color: "primary",
                              onClick: $options.reset
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("i18n.actions.close")), 1)
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { class: "text-right" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              color: "primary",
                              onClick: $options.cropImage
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("i18n.actions.crop")), 1)
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      _: 1
    })
  ]);
}
const AvatarInput = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = {
  mixins: [Input, ReferenceInput],
  props: {
    /**
     * Use different styles: 
     * 
     * | 'outlined' | 'plain' | 'underlined' | 'filled' | 'solo' | 'solo-inverted' | 'solo-filled'
     */
    variant: {
      type: String,
      default: "outlined"
    },
    lines: {
      type: String,
      default: "one"
    },
    openAll: {
      type: Boolean,
      default: false
    },
    opened: {
      type: Array,
      default: []
    },
    color: {
      type: String,
      default: "primary"
    },
    selectionType: {
      type: String,
      default: "leaf"
    },
    selectable: {
      type: Boolean,
      default: true
    },
    returnObject: {
      type: Boolean,
      default: false
    }
  },
  async created() {
    this.items = await this.fetchChoices();
  }
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_treeview = resolveComponent("v-treeview");
  return openBlock(), createBlock(_component_v_treeview, mergeProps({ "selected-color": $props.color }, _ctx.commonProps, {
    lines: $props.lines,
    "open-all": $props.openAll,
    opened: $props.opened,
    density: _ctx.density,
    variant: $props.variant,
    "item-title": _ctx.getItemText,
    "item-value": _ctx.getItemValue,
    "select-strategy": $props.selectionType,
    selectable: $props.selectable,
    items: _ctx.items || _ctx.choices,
    "onUpdate:modelValue": _ctx.update,
    "return-object": $props.returnObject
  }), createSlots({
    "no-data": withCtx(() => [
      createBaseVNode("div", null, [
        createVNode(VTable, { density: "compact" }, {
          default: withCtx(() => [
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, toDisplayString(_ctx.$t("i18n.datatable.nodata")), 1)
              ])
            ])
          ]),
          _: 1
        })
      ])
    ]),
    _: 2
  }, [
    renderList(_ctx.$slots, (_, scopedSlotName) => {
      return {
        name: scopedSlotName,
        fn: withCtx((slotData) => [
          renderSlot(_ctx.$slots, scopedSlotName, normalizeProps(guardReactiveProps(slotData)))
        ])
      };
    })
  ]), 1040, ["selected-color", "lines", "open-all", "opened", "density", "variant", "item-title", "item-value", "select-strategy", "selectable", "items", "onUpdate:modelValue", "return-object"]);
}
const TreeViewInput = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = {
  props: {
    /**
     * Text to be edited.
     * @model
     */
    modelValue: {
      default: ""
    },
    /**
     * Density
     */
    density: String,
    /**
     * Use different styles: 
     * 
     * | 'outlined' | 'plain' | 'underlined' | 'filled' | 'solo' | 'solo-inverted' | 'solo-filled'
     */
    variant: {
      type: String,
      default: "outlined"
    },
    /**
     * Currency options
     */
    options: Object
  },
  setup(props) {
    const {
      inputRef,
      formattedValue
    } = useCurrencyInput(props.options);
    return { inputRef, formattedValue };
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VTextField, {
    density: $props.density,
    variant: $props.variant,
    modelValue: $setup.formattedValue,
    ref: "inputRef"
  }, null, 8, ["density", "variant", "modelValue"]);
}
const VueCurrencyComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const ui = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionButton,
  ArrayField,
  ArrayTableInput,
  AsideLayout,
  AutoCompleteField,
  AutoCompleteInput,
  AvatarInput,
  BooleanField,
  BooleanInput,
  BulkActionButton,
  BulkCopyButton,
  BulkDeleteButton,
  CategoryTree,
  CheckListInput,
  ChipField,
  CloneButton,
  ColorPickerField,
  ColorPickerInput,
  CopyButton,
  CreateButton,
  CreateDialogButton,
  CreateLayout,
  CurrencyField,
  CurrencyInput,
  DataIteratorServer,
  DataTableServer,
  DateField,
  DateInput,
  DeleteButton,
  EditButton,
  EditLayout,
  EmailField,
  Field,
  FileField,
  FileInput,
  Form,
  ImageField,
  Input: Input$1,
  List,
  ListButton,
  NumberField,
  NumberInput,
  PasswordInput,
  RadioGroupInput,
  RatingField,
  RatingInput,
  ReferenceArrayField,
  ReferenceField,
  RichTextField,
  RowCloneButton,
  RowCreateButton,
  RowSaveDialogButton,
  RowShowButton,
  SaveButton,
  SelectField,
  SelectInput,
  Show,
  ShowButton,
  ShowLayout,
  TextField,
  TextInput,
  TreeViewInput,
  UrlField,
  VueCurrencyComponent
}, Symbol.toStringTag, { value: "Module" }));
const messages = defineStore("messages", {
  state: () => {
    return {
      apiErrors: false,
      confirmObject: null,
      resolve: null,
      reject: null,
      editDialog: false,
      editResolve: null,
      editReject: null,
      snackbar: {
        class: null,
        color: null,
        icon: null,
        location: "top",
        variant: null,
        rounded: 0,
        text: null,
        timeout: 7500,
        title: null,
        visible: false
      }
    };
  },
  getters: {
    getSnackbar(state) {
      return state.snackbar;
    },
    getConfirmObject(state) {
      return state.confirmObject;
    },
    getHideApiErrors(state) {
      return state.apiErrors;
    }
  },
  actions: {
    hideApiErrors(status) {
      this.apiErrors = status;
    },
    showConfirm(state, { title, message }) {
      this.confirmObject = { title, message };
    },
    hideConfirm(state) {
      this.confirmObject = null;
    },
    setResolve(state, resolve) {
      this.resolve = resolve;
    },
    setReject(state, reject) {
      this.reject = reject;
    },
    cleanError() {
      this.error = null;
    },
    cleanSnackbar() {
      this.snackbar = {
        class: null,
        color: null,
        icon: null,
        location: "top",
        variant: null,
        rounded: 0,
        text: null,
        timeout: 7500,
        title: null,
        visible: false
      };
    },
    show({ type, message }) {
      if (!type || !config.snackbar[type]) {
        return;
      }
      this.snackbar = {
        class: config.snackbar[type].class,
        color: config.snackbar[type].color,
        icon: config.snackbar[type].icon,
        location: config.snackbar[type].location,
        variant: config.snackbar[type].variant,
        rounded: config.snackbar[type].rounded,
        timeout: config.snackbar[type].timeout,
        title: config.snackbar[type].title,
        text: message,
        visible: config.snackbar[type].visible
      };
    },
    confirm({ title, message }) {
      this.confirmObject = { title, message };
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    agree() {
      this.resolve(true);
      this.confirmObject = null;
    },
    cancel() {
      this.resolve(false);
      this.confirmObject = null;
    },
    openUnsavedEditDialog() {
      this.editDialog = true;
      return new Promise((resolve, reject) => {
        this.editResolve = resolve;
        this.editReject = reject;
      });
    },
    closeUnsavedEditDialog() {
      this.editDialog = false;
    },
    agreeUnsavedEditDialog() {
      this.editResolve(true);
      this.editDialog = false;
    },
    cancelUnsavedEditDialog() {
      this.editResolve(false);
      this.editDialog = false;
    }
  }
});
const guest = defineStore(
  "guest",
  {
    state: () => {
      return {};
    },
    getters: {
      getId() {
        return null;
      },
      getFullname() {
        return null;
      },
      getEmail() {
        return null;
      },
      getAvatar() {
        return null;
      },
      getPermissions() {
        return [];
      }
    },
    actions: {
      checkAuth() {
        return Promise.resolve(true);
      },
      checkError() {
      }
    }
  }
);
let storeActions = {};
Object.values(methods).forEach((action) => {
  storeActions[action] = ({ resource: resource2, params }) => {
    const store2 = store$1();
    const method = action.charAt(0).toUpperCase() + action.slice(1);
    return store2.getModule(resource2)[method](params, { root: true });
  };
});
const api = defineStore("api", {
  state: () => {
    return {
      fields: null,
      headers: null,
      saved: false,
      status: false,
      loading: false,
      refresh: false,
      rowForm: null,
      filterValues: null
    };
  },
  getters: {
    getHeaders() {
      return this.headers;
    },
    getFields() {
      return this.fields;
    },
    getLoading() {
      return this.loading;
    },
    getFilterValues() {
      return this.filterValues;
    },
    getFormSaved() {
      return this.saved;
    },
    getFormStatus() {
      return this.status;
    },
    getRowForm() {
      return this.rowForm;
    }
  },
  actions: {
    ...storeActions,
    setHeaders(headers) {
      this.headers = headers;
    },
    setFields(fields) {
      this.fields = fields;
    },
    setFilterValues(values) {
      this.filterValues = values;
    },
    setFormSaved(saved) {
      this.saved = saved;
    },
    setFormStatus(changed) {
      this.status = changed;
    },
    setRowForm(item) {
      this.rowForm = item;
    },
    setLoading(loading) {
      this.loading = loading;
      if (!loading) {
        this.refresh = false;
      }
    },
    setRefresh(refresh) {
      this.refresh = refresh;
    }
  }
});
const routeResource = ({ app: app2, admin: admin2, store: store2, i18n: i18n2, resource: resource2, title }) => {
  let { name, module, standalone, include, routes: routes2, translatable, getTitle, pluralName } = resource2;
  const parts = name.includes("_") ? name.split("_") : [null, name];
  const resourceName = parts[1];
  const camelCaseModuleName = standalone ? camelCase(name) : camelCase(module.toLowerCase());
  const resourcePath = standalone ? `${camelCase(resourceName)}` : `${camelCaseModuleName}/${camelCase(resourceName)}`;
  const setTitle = (to, action, item = null) => {
    to.meta.title = getTitle(action, item);
    return title;
  };
  const buildRoute = (action, path) => {
    const routeName = standalone ? `${camelCase(resourceName)}_${action}` : `${camelCaseModuleName}_${camelCase(resourceName)}_${action}`;
    return {
      path,
      name: routeName,
      props: true,
      component: {
        props: ["id"],
        render() {
          let componentName = standalone ? `${upperFirst(camelCase(resourceName))}${upperFirst(action)}` : `${upperFirst(camelCaseModuleName)}${upperFirst(camelCase(resourceName))}${upperFirst(action)}`;
          let props = {
            id: this.id,
            title: this.$route.meta.title,
            module: camelCaseModuleName,
            resource: name,
            item: store2.getResource(name).item,
            roles: store2.getModule("auth").getPermissions
          };
          if (app2.component(componentName)) {
            return h(resolveComponent(componentName), props);
          } else {
            return h(resolveComponent("PageNotFound"));
          }
        },
        async beforeRouteEnter(to, from, next) {
          let id = to.params.id || to.query.source;
          let componentName = standalone ? `${upperFirst(camelCase(resourceName))}${upperFirst(action)}` : `${upperFirst(camelCaseModuleName)}${upperFirst(camelCase(resourceName))}${upperFirst(action)}`;
          if (!app2.component(componentName)) {
            to.meta.title = "Page Not Found";
            document.title = "Page Not Found";
            return next();
          }
          if (id) {
            try {
              let { data } = await store2.getResource(name).getOne({
                id,
                include
              });
              store2.getResource(name).setItem(data);
              store2.getResource(name).setFormItem(JSON.stringify(data));
              if (to.params.id) {
                setTitle(to, action, data);
                return next();
              }
            } catch ({ status, message }) {
              console.log("Error: " + message);
              to.meta.title = "Error";
              document.title = "Error";
              return next();
            }
          }
          setTitle(to, action);
          next();
        },
        async beforeRouteLeave(to, from, next) {
          let strArray = this.$route.name.split("_");
          if (Array.isArray(strArray) && strArray.length > 0) {
            let lastItem = strArray[strArray.length - 1];
            if (lastItem.trim() == "edit") {
              let formSaved = store2.getModule("api").getFormSaved;
              if (formSaved) {
                store2.getModule("api").setFormSaved(false);
                store2.getModule("api").setFormStatus(false);
                return next();
              }
              let formStateChanged = store2.getModule("api").getFormStatus;
              if (formStateChanged && !config.form.disableUnsavedFormDialog) {
                const confirmResult = await store2.getModule("messages").openUnsavedEditDialog();
                if (confirmResult) {
                  store2.getResource(name).removeItem();
                  store2.getModule("api").setFormStatus(false);
                  return next();
                } else {
                  return next(false);
                }
              } else {
                store2.getResource(name).removeItem();
                return next();
              }
            }
          }
          store2.getResource(name).removeItem();
          return next();
        }
      },
      meta: {
        authenticated: true,
        module,
        standalone,
        resource: name,
        translatable
      }
    };
  };
  return {
    path: `/${resourcePath}`,
    component: {
      render() {
        return h(resolveComponent("router-view"));
      }
    },
    meta: {
      title: pluralName
    },
    children: [
      { name: "list", path: "" },
      { name: "create", path: "create" },
      { name: "show", path: ":id" },
      { name: "edit", path: ":id/edit" }
    ].filter(({ name: name2 }) => routes2.includes(name2)).map(({ name: name2, path }) => buildRoute(name2, path))
  };
};
/*!
 * Oloma Dev.
 * 
 * [olobase] <https://github.com/olomadev/olobase>
 *
 * Copyright (c) 2022-2025, Oloma Software.
 */
class Olobase {
  setOptions({
    app: app2,
    router: router2,
    resources,
    store: store2,
    i18n: i18n2,
    downloadUrl,
    readFileUrl,
    routes: routes2,
    locales,
    authProvider,
    dataProvider,
    config: config2,
    canAction,
    http
  }) {
    this.app = app2;
    this.router = router2;
    this.store = store2;
    this.i18n = i18n2;
    this.apiUrl = "https://pmm.oloma.dev/api";
    this.downloadUrl = downloadUrl;
    this.readFileUrl = readFileUrl;
    this.routes = routes2;
    this.locales = locales;
    this.authProvider = authProvider;
    this.dataProvider = dataProvider;
    this.config = config2 || {};
    this.canAction = canAction;
    this.http = http;
    this.saved = false;
    if (resources) {
      this.setResources(resources);
    }
  }
  setResources(resources) {
    this.resources = resources.map((r) => {
      return typeof r === "string" ? {
        name: r
      } : r;
    }).map((r) => {
      let routes2 = ["list", "show", "create", "edit"].filter((name) => {
        return !r.routes || r.routes.includes(name);
      });
      let actions = ["list", "show", "create", "edit", "delete"].filter(
        (name) => {
          if ((r.actions || []).length) {
            return r.actions.includes(name);
          }
          if ((r.except || []).length) {
            return !r.except.includes(name);
          }
          return true;
        }
      );
      let nameKey = `resources.${r.name}.name`;
      let getName2 = (count) => this.i18n.global.te(nameKey) ? this.i18n.global.tc(nameKey, count) : upperFirst(lowerCase(r.name));
      let moduleName = r.module || null;
      let resourcePath = r["standalone"] ? `${r.name}` : `${moduleName}/${r.name}`;
      return {
        ...r,
        module: moduleName,
        resourcePath,
        icon: r.icon || "mdi-view-grid",
        routes: routes2,
        actions,
        getName: getName2,
        singularName: getName2(1),
        pluralName: getName2(10),
        getTitle: (action, item = null) => {
          const module = r.module ? r.module.toLowerCase() : null;
          const resourceName = r.name;
          let key = module ? `${module}.${resourceName}.title` : `${resourceName}.${resourceName}.title`;
          if (item) {
            return this.i18n.global.te(key) ? this.i18n.global.t(key, item.raw) : this.i18n.global.t(`i18n.pages.${action}`);
          }
          return this.i18n.global.te(key) ? this.i18n.global.t(key) : this.i18n.global.t(`i18n.pages.${action}`, {
            resource: getName2(action === "list" ? 10 : 1).toLowerCase()
          });
        },
        canAction: async (action) => {
          if (!actions.includes(action)) {
            return false;
          }
          let canAction = this.canAction;
          if (canAction) {
            let result2 = canAction({
              resource: r,
              action,
              can: await this.can
            });
            if (typeof result2 === "boolean") {
              return result2;
            }
          }
          if (!r.permissions) {
            return true;
          }
          let permissions = (r.permissions || []).filter((p) => {
            return typeof p === "string" || p.actions.includes(action);
          }).map((p) => {
            return typeof p === "string" ? p : p.name;
          });
          let result = permissions.length && await this.can(permissions);
          return result;
        }
      };
    });
  }
  //  end setResource
  /**
   * Init to admin properties
   */
  init() {
    this.store.setModule("messages", messages);
    this.store.setModule("api", api);
    if (this.authProvider) {
      this.store.setModule("auth", auth).init(this.authProvider);
    } else {
      this.store.setModule("auth", guest);
    }
    if (this.dataProvider) {
      this.store.setModule("resource", resource).init({
        i18n: this.i18n,
        provider: this.dataProvider
      });
    }
    this.routes.children = this.resources.map(
      (resource2) => routeResource({
        app: this.app,
        admin: this,
        store: this.store,
        i18: this.i18n,
        resource: resource2,
        title: null
      })
    ).concat(
      (this.routes.children || []).map((r) => {
        r.meta = { ...r.meta || {}, authenticated: true };
        return r;
      })
    );
    this.router.addRoute(this.routes);
    this.router.beforeEach(async (to, from, next) => {
      this.store.getModule("messages").cleanError();
      this.store.getModule("messages").cleanSnackbar();
      document.title = this.getPageTitle(to);
      next();
    });
  }
  // end init function
  getPageTitle(to) {
    let parts = [];
    if (to.meta.resource) {
      parts = to.meta.resource.includes("_") ? to.meta.resource.split("_") : [null, to.meta.resource];
      return this.getPageTitleValue(parts);
    }
    if (to.meta.title) {
      return typeof to.meta.title === "function" ? to.meta.title() : to.meta.title;
    }
    if (to.name) {
      parts = to.name.includes("_") ? to.name.split("_") : [null, to.name];
      return this.getPageTitleValue(parts);
    }
    return "undefined";
  }
  getPageTitleValue(parts) {
    if (Array.isArray(parts) && parts.length > 0) {
      const module = parts[0];
      const resourceName = parts[1];
      const key = module ? `${module}.${resourceName}.title` : `${resourceName}.${resourceName}.title`;
      return this.i18n.global.t(key);
    }
    return "undefined";
  }
  getAppInstance() {
    return this.app;
  }
  /**
  * Permissions helper & directive
  */
  async can(permissions) {
    if (!this.authProvider || isEmpty(permissions)) {
      return false;
    }
    let result = false;
    let user = await new Promise(function(resolve) {
      let res = cookies.get("user");
      if (res) {
        res = JSON.parse(res);
        return resolve(res);
      }
      return resolve(null);
    }).catch(function(e) {
      console.error(e);
    });
    if (user && Array.isArray(permissions)) {
      user.permissions.forEach(function(roleKey) {
        if (permissions.includes(roleKey)) {
          result = true;
        }
      });
    }
    return result;
  }
  /**
  * Get full resource object meta from name
  */
  getResource(name) {
    return this.resources.find((r) => r.name === name);
  }
  /**
  * Get label source, humanize it if not found
  */
  getSourceLabel(resource2, source) {
    const parts = resource2.includes("_") ? resource2.split("_") : [null, resource2];
    const module = parts[0];
    const resourceName = parts[1];
    if (resourceName && source) {
      let key = module ? `${module}.${resourceName}.fields.${source}` : `${resourceName}.${resourceName}.fields.${source}`;
      let translatedValue = this.i18n.global.te(key) ? this.i18n.global.t(key) : upperFirst(lowerCase(source.replace(".", " ")));
      return translatedValue;
    }
    return null;
  }
  /**
  * Global confirm dialog function
  */
  confirm(title, message) {
    return this.store.getModule("messages").confirm({ title, message });
  }
  /**
   * Show global snackbar message
   */
  message(type, message) {
    this.store.getModule("messages").show({ type: type.toLowerCase(), message });
  }
  /**
   * Refresh the current page
   */
  refresh(resource2) {
    return this.store.getResource(resource2).refresh();
  }
  /**
   * Disable/enable "api errors" before/after http request(s)
   */
  hideApiErrors(status) {
    this.store.getModule("messages").hideApiErrors(status);
  }
}
/*!
 * Oloma Dev.
 * 
 * [olobase-admin] <https://github.com/olomadev/olobase-admin>
 *
 * Copyright (c) 2022-2025, Oloma Software.
 *
 * https://oloma.dev/end-user-license-agreement
 */
Olobase.install = (app2) => {
  [layouts, ui].forEach((c) => {
    Object.keys(c).forEach((name) => {
      const componentName = `Va${name}`;
      app2.component(componentName, c[name]);
    });
  });
};
const routes = {
  path: "",
  component: () => __vitePreload(() => import("../chunks/modules/users/src/index.js").then((n) => n.A), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0),
  meta: {
    title: () => "Home"
    // i18n.global.t("routes.home"),
  },
  children: [
    {
      path: "/swagger",
      name: "swagger",
      component: () => __vitePreload(() => import("../chunks/Swagger.js"), true ? __vite__mapDeps([9,4,1,2]) : void 0),
      meta: {
        title: () => "API"
        // i18n.global.t("menu.api"),
      }
    }
  ]
};
const replace = String.prototype.replace;
const percentTwenties = /%20/g;
const Format = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
};
const formatters = {
  RFC1738: (value) => replace.call(value, percentTwenties, "+"),
  RFC3986: (value) => String(value)
};
const defaultFormat$1 = Format.RFC3986;
const formats = {
  default: defaultFormat$1,
  formatters,
  RFC1738: Format.RFC1738
};
const has = Object.prototype.hasOwnProperty;
const isArray$1 = Array.isArray;
const hexTable = (() => {
  const array = [];
  for (let i = 0; i < 256; ++i) {
    array.push(`%${(i < 16 ? "0" : "") + i.toString(16).toUpperCase()}`);
  }
  return array;
})();
const compactQueue = (queue) => {
  while (queue.length > 1) {
    const item = queue.pop();
    const obj = item.obj[item.prop];
    if (isArray$1(obj)) {
      const compacted = [];
      for (let j = 0; j < obj.length; ++j) {
        if (typeof obj[j] !== "undefined") {
          compacted.push(obj[j]);
        }
      }
      item.obj[item.prop] = compacted;
    }
  }
};
const arrayToObject = (source, options) => {
  const obj = options && options.plainObjects ? { __proto__: null } : {};
  for (let i = 0; i < source.length; ++i) {
    if (typeof source[i] !== "undefined") {
      obj[i] = source[i];
    }
  }
  return obj;
};
const merge = (target, source, options) => {
  if (!source) {
    return target;
  }
  if (typeof source !== "object" && typeof source !== "function") {
    if (isArray$1(target)) {
      target.push(source);
    } else if (target && typeof target === "object") {
      if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
        target[source] = true;
      }
    } else {
      return [target, source];
    }
    return target;
  }
  if (!target || typeof target !== "object") {
    return [target].concat(source);
  }
  let mergeTarget = target;
  if (isArray$1(target) && !isArray$1(source)) {
    mergeTarget = arrayToObject(target, options);
  }
  if (isArray$1(target) && isArray$1(source)) {
    source.forEach((item, i) => {
      if (has.call(target, i)) {
        const targetItem = target[i];
        if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
          target[i] = merge(targetItem, item, options);
        } else {
          target.push(item);
        }
      } else {
        target[i] = item;
      }
    });
    return target;
  }
  return Object.keys(source).reduce((acc, key) => {
    const value = source[key];
    if (has.call(acc, key)) {
      acc[key] = merge(acc[key], value, options);
    } else {
      acc[key] = value;
    }
    return acc;
  }, mergeTarget);
};
const assign = (target, source) => {
  return Object.keys(source).reduce((acc, key) => {
    acc[key] = source[key];
    return acc;
  }, target);
};
const decode = (str, defaultDecoder, charset) => {
  const strWithoutPlus = str.replace(/\+/g, " ");
  if (charset === "iso-8859-1") {
    return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
  }
  try {
    return decodeURIComponent(strWithoutPlus);
  } catch (e) {
    return strWithoutPlus;
  }
};
const limit = 1024;
const encode = (str, defaultEncoder, charset, kind, format) => {
  if (str.length === 0) {
    return str;
  }
  let string = str;
  if (typeof str === "symbol") {
    string = Symbol.prototype.toString.call(str);
  } else if (typeof str !== "string") {
    string = String(str);
  }
  if (charset === "iso-8859-1") {
    return escape(string).replace(/%u[0-9a-f]{4}/gi, ($0) => {
      return `%26%23${parseInt($0.slice(2), 16)}%3B`;
    });
  }
  let out = "";
  for (let j = 0; j < string.length; j += limit) {
    const segment = string.length >= limit ? string.slice(j, j + limit) : string;
    const arr = [];
    for (let i = 0; i < segment.length; ++i) {
      let c = segment.charCodeAt(i);
      if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
        arr.push(segment.charAt(i));
        continue;
      }
      if (c < 128) {
        arr.push(hexTable[c]);
        continue;
      }
      if (c < 2048) {
        arr.push(hexTable[192 | c >> 6] + hexTable[128 | c & 63]);
        continue;
      }
      if (c < 55296 || c >= 57344) {
        arr.push(hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63]);
        continue;
      }
      i += 1;
      c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i) & 1023);
      arr.push(hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63]);
    }
    out += arr.join("");
  }
  return out;
};
const compact = (value) => {
  const queue = [{ obj: { o: value }, prop: "o" }];
  const refs = [];
  for (let i = 0; i < queue.length; ++i) {
    const item = queue[i];
    const obj = item.obj[item.prop];
    const keys = Object.keys(obj);
    for (let j = 0; j < keys.length; ++j) {
      const key = keys[j];
      const val = obj[key];
      if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
        queue.push({ obj, prop: key });
        refs.push(val);
      }
    }
  }
  compactQueue(queue);
  return value;
};
const isRegExp = (obj) => {
  return Object.prototype.toString.call(obj) === "[object RegExp]";
};
const isBuffer = (obj) => {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
const combine = (a, b) => {
  return [...a, ...b];
};
const maybeMap = (val, fn) => {
  if (isArray$1(val)) {
    return val.map(fn);
  }
  return fn(val);
};
const utils = {
  arrayToObject,
  assign,
  combine,
  compact,
  decode,
  encode,
  isBuffer,
  isRegExp,
  maybeMap,
  merge
};
const arrayPrefixGenerators = {
  brackets: (prefix) => `${prefix}[]`,
  comma: "comma",
  indices: (prefix, key) => `${prefix}[${key}]`,
  repeat: (prefix) => prefix
};
const isArray = Array.isArray;
const push = Array.prototype.push;
const pushToArray = (arr, valueOrArray) => {
  push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};
const toISO = Date.prototype.toISOString;
const defaultFormat = formats["default"];
const defaults = {
  addQueryPrefix: false,
  allowDots: false,
  allowEmptyArrays: false,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: false,
  commaRoundTrip: false,
  delimiter: "&",
  encode: true,
  encodeDotInKeys: false,
  encoder: utils.encode,
  encodeValuesOnly: false,
  filter: void 0,
  format: defaultFormat,
  formatter: formats.formatters[defaultFormat],
  indices: false,
  serializeDate: (date) => toISO.call(date),
  skipNulls: false,
  strictNullHandling: false
};
const isNonNullishPrimitive = (v) => {
  return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
};
const sentinel = {};
class SideChannel {
  constructor() {
    this.store = /* @__PURE__ */ new Map();
  }
  // Set a value in the side channel
  set(key, value) {
    this.store.set(key, value);
  }
  // Get a value from the side channel
  get(key) {
    return this.store.get(key);
  }
}
class QueryString {
  static stringify(object, opts) {
    const options = QueryString.normalizeStringifyOptions(opts);
    const objKeys = Object.keys(object);
    const keys = [];
    const generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
    const commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
    const sideChannel = new SideChannel();
    objKeys.forEach((key) => {
      const value = object[key];
      if (options.skipNulls && value === null) return;
      pushToArray(keys, QueryString._stringify(
        value,
        key,
        generateArrayPrefix,
        commaRoundTrip,
        options.allowEmptyArrays,
        options.strictNullHandling,
        options.skipNulls,
        options.encodeDotInKeys,
        options.encode ? options.encoder : null,
        options.filter,
        options.sort,
        options.allowDots,
        options.serializeDate,
        options.format,
        options.formatter,
        options.encodeValuesOnly,
        options.charset,
        sideChannel
      ));
    });
    let prefix = options.addQueryPrefix === true ? "?" : "";
    const joined = keys.join(options.delimiter);
    if (options.charsetSentinel) {
      prefix += options.charset === "iso-8859-1" ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&";
    }
    return joined.length > 0 ? prefix + joined : "";
  }
  static normalizeStringifyOptions(opts) {
    if (!opts) return defaults;
    if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    }
    if (typeof opts.encoder !== "undefined" && opts.encoder !== null && typeof opts.encoder !== "function") {
      throw new TypeError("Encoder must be a function");
    }
    if (opts.charset && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
      throw new TypeError('Charset must be either "utf-8" or "iso-8859-1"');
    }
    const format = formats["default"];
    const formatter = formats.formatters[format];
    return {
      addQueryPrefix: opts.addQueryPrefix === true ? opts.addQueryPrefix : defaults.addQueryPrefix,
      allowDots: opts.allowDots || defaults.allowDots,
      allowEmptyArrays: opts.allowEmptyArrays !== void 0 ? opts.allowEmptyArrays : defaults.allowEmptyArrays,
      arrayFormat: opts.arrayFormat || defaults.arrayFormat,
      charset: opts.charset || defaults.charset,
      charsetSentinel: opts.charsetSentinel === true ? opts.charsetSentinel : defaults.charsetSentinel,
      commaRoundTrip: opts.commaRoundTrip || defaults.commaRoundTrip,
      delimiter: opts.delimiter || defaults.delimiter,
      encode: opts.encode !== void 0 ? opts.encode : defaults.encode,
      encodeDotInKeys: opts.encodeDotInKeys || defaults.encodeDotInKeys,
      encoder: opts.encoder || defaults.encoder,
      encodeValuesOnly: opts.encodeValuesOnly || defaults.encodeValuesOnly,
      filter: opts.filter || defaults.filter,
      format: opts.format || defaults.format,
      formatter,
      serializeDate: opts.serializeDate || defaults.serializeDate,
      skipNulls: opts.skipNulls || defaults.skipNulls,
      sort: opts.sort || defaults.sort,
      strictNullHandling: opts.strictNullHandling || defaults.strictNullHandling
    };
  }
  static _stringify(value, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
    let obj = value;
    let tmpSc = sideChannel;
    let step = 0;
    let findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
      const pos = tmpSc.get(value);
      step += 1;
      if (pos !== void 0) {
        if (pos === step) {
          throw new RangeError("Cyclic object value");
        } else {
          findFlag = true;
        }
      }
      if (typeof tmpSc.get(sentinel) === "undefined") {
        step = 0;
      }
    }
    if (typeof filter === "function") {
      obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
      obj = serializeDate(obj);
    }
    if (obj === null) {
      if (strictNullHandling) {
        return encoder ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
      }
      obj = "";
    }
    if (isNonNullishPrimitive(obj)) {
      const keyValue = encodeValuesOnly ? prefix : encoder ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
      return [`${formatter(keyValue)}=${formatter(encoder ? encoder(obj, defaults.encoder, charset, "value", format) : String(obj))}`];
    }
    const values = [];
    if (typeof obj === "undefined") return values;
    let objKeys;
    if (generateArrayPrefix === "comma" && isArray(obj)) {
      obj = utils.maybeMap(obj, (value2) => value2 instanceof Date ? serializeDate(value2) : value2);
      objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
    } else {
      const keys = Object.keys(obj);
      objKeys = sort ? keys.sort(sort) : keys;
    }
    const encodedPrefix = encodeDotInKeys ? String(prefix).replace(/\./g, "%2E") : String(prefix);
    const adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? `${encodedPrefix}[]` : encodedPrefix;
    if (allowEmptyArrays && isArray(obj) && obj.length === 0) {
      return `${adjustedPrefix}[]`;
    }
    objKeys.forEach((key) => {
      const value2 = key && key.value !== void 0 ? key.value : obj[key];
      if (skipNulls && value2 === null) return;
      const encodedKey = allowDots && encodeDotInKeys ? String(key).replace(/\./g, "%2E") : String(key);
      const keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : `${adjustedPrefix}[${encodedKey}]`;
      sideChannel.set(value2, step);
      const valueSideChannel = new SideChannel();
      valueSideChannel.set(sentinel, sideChannel);
      pushToArray(values, QueryString._stringify(
        value2,
        keyPrefix,
        generateArrayPrefix,
        commaRoundTrip,
        allowEmptyArrays,
        strictNullHandling,
        skipNulls,
        encodeDotInKeys,
        generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder,
        filter,
        sort,
        allowDots,
        serializeDate,
        format,
        formatter,
        encodeValuesOnly,
        charset,
        valueSideChannel
      ));
    });
    return values;
  }
}
const createHeadersFromOptions = (options) => {
  const requestHeaders = (typeof options.headers === "function" ? options.headers() : options.headers) || new Headers({
    Accept: "application/json"
  });
  if (!requestHeaders.has("Content-Type") && !(options && (!options.method || options.method === "GET")) && !(options && options.body && options.body instanceof FormData)) {
    requestHeaders.set("Content-Type", "application/json");
  }
  if (options.user && options.user.authenticated && options.user.token) {
    requestHeaders.set("Authorization", options.user.token);
  }
  return requestHeaders;
};
class FetchJson {
  constructor(url, options = {}) {
    this.url = trimEnd(url, "/");
    this.options = options;
  }
  get(path, options = {}) {
    return this.call(path, options);
  }
  post(path, data, options = {}) {
    return this.call(path, {
      ...options,
      method: "POST",
      body: JSON.stringify(data)
    });
  }
  put(path, data, options = {}) {
    return this.call(path, {
      ...options,
      method: "PUT",
      body: JSON.stringify(data)
    });
  }
  patch(path, data, options = {}) {
    return this.call(path, {
      ...options,
      method: "PATCH",
      body: JSON.stringify(data)
    });
  }
  delete(path, options = {}) {
    return this.call(path, { ...options, method: "DELETE" });
  }
  async call(path, options = {}) {
    const requestHeaders = createHeadersFromOptions({
      ...options,
      ...this.options
    });
    let response = await fetch(`${this.url}/${path}`, {
      ...options,
      ...this.options,
      headers: requestHeaders
    });
    let json = await response.json();
    let { status, statusText, headers } = response;
    if (status < 200 || status >= 300) {
      return Promise.reject({
        status,
        message: json && json.message || statusText,
        data: json
      });
    }
    return Promise.resolve({
      status,
      headers: [...headers.keys()].reduce((o, key) => {
        return {
          ...o,
          [key]: headers.get(key)
        };
      }, {}),
      data: json
    });
  }
}
const jsonServerDataProvider = (httpClient) => {
  if (typeof httpClient === "string") {
    httpClient = new FetchJson(httpClient);
  }
  const withInclude = (params) => {
    let query = {};
    if (params.include) {
      let { embed, expand } = params.include;
      query = {
        _embed: embed,
        _expand: expand
      };
    }
    return query;
  };
  return {
    [GET_LIST]: async (module, resource2, params) => {
      const { pagination, sort, filter } = params;
      var newFilter = {};
      if (isObject(filter)) {
        for (const [key, value] of Object.entries(filter)) {
          if (Array.isArray(value)) {
            newFilter[key + "[]"] = value;
          } else {
            newFilter[key] = value;
          }
        }
      }
      let query = {
        ...withInclude(params),
        ...newFilter
      };
      if (params.defaultQueryString) {
        query = {
          ...query,
          ...params.defaultQueryString
        };
      }
      if (pagination) {
        let { page, perPage } = pagination;
        query = {
          ...query,
          _perPage: perPage,
          _page: page
          // _start: (page - 1) * perPage,
          // _end: page * perPage,
        };
      }
      if (sort && sort.length) {
        query = {
          ...query,
          "_sort[]": sort.map((item) => item.by),
          "_order[]": sort.map((item) => item.desc ? "desc" : "asc")
        };
      }
      let url = module ? `${module}/${resource2}/findAllByPaging?${QueryString.stringify(query, { arrayFormat: "repeat" })}` : `${resource2}/findAllByPaging?${QueryString.stringify(query, { arrayFormat: "repeat" })}`;
      let response = await httpClient.get(url);
      if (response && response["data"]) {
        let { data, headers } = response;
        return {
          data,
          total: parseInt(headers["x-total-count"], 10)
        };
      }
      return {
        data: null,
        total: 0
      };
    },
    [GET_LIST_ALL]: async (module, resource2, params) => {
      const { filter } = params;
      if (typeof params.ids != "undefined") {
        for (const val of params.ids) {
          filter["id[]"] = val.id;
        }
      }
      let query = {
        ...withInclude(params),
        ...filter
      };
      let url = module ? `${module}/${resource2}/findAll?${QueryString.stringify(query, { arrayFormat: "repeat" })}` : `${resource2}/findAll?${QueryString.stringify(query, { arrayFormat: "repeat" })}`;
      let response = await httpClient.get(url);
      if (response && response["data"]) {
        let { data, headers } = response;
        return {
          data,
          total: parseInt(headers["x-total-count"], 10)
        };
      }
      return {
        data: null,
        total: 0
      };
    },
    [GET_MANY]: async (module, resource2, params) => {
      const { filter } = params;
      var newFilter = {};
      for (const [key, value] of Object.entries(filter)) {
        if (isObject(value)) {
          for (const property in value) {
            newFilter[property + "[]"] = value[property];
          }
        }
        if (Array.isArray(value)) {
          newFilter[key + "[]"] = value;
        }
      }
      let query = {
        ...withInclude(params),
        ...newFilter
      };
      let url = module ? `${module}/${resource2}/findAll?${QueryString.stringify(query, { arrayFormat: "repeat" })}` : `${resource2}/findAll?${QueryString.stringify(query, { arrayFormat: "repeat" })}`;
      return httpClient.get(url);
    },
    [GET_ONE]: async (module, resource2, params) => {
      let url = module ? `${module}/${resource2}/findOneById/${params.id}?${QueryString.stringify(withInclude(params))}` : `${resource2}/findOneById/${params.id}?${QueryString.stringify(withInclude(params))}`;
      let response = await httpClient.get(url);
      if (response && response["data"]) {
        let { data } = response;
        return data;
      }
    },
    [CREATE]: (module, resource2, params) => {
      let url = module ? `${module}/${resource2}/create` : `${resource2}/create`;
      return httpClient.post(url, params.data);
    },
    [UPDATE]: (module, resource2, params) => {
      let url = module ? `${module}/${resource2}/update/${params.id}` : `${resource2}/update/${params.id}`;
      return httpClient.put(url, params.data);
    },
    [UPDATE_ROW]: (module, resource2, params) => {
      let url = module ? `${module}/${resource2}/updateRow/${params.id}` : `${resource2}/updateRow/${params.id}`;
      return httpClient.put(url, params.data);
    },
    [UPDATE_MANY]: (module, resource2, params) => {
      const updatePromises = params.ids.map((id) => {
        let url = module ? `${module}/${resource2}/update/${id}` : `${resource2}/update/${id}`;
        return httpClient.put(url, params.data);
      });
      return Promise.all(updatePromises).then(() => {
        return Promise.resolve();
      });
    },
    [DELETE]: (module, resource2, params) => {
      if (params["query"] && typeof params["query"] === "object") {
        const queryString = Object.entries(params["query"]).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join("&");
        let url = module ? `${module}/${resource2}/delete/${params.id}?` : `${resource2}/delete/${params.id}?`;
        httpClient.delete(url + queryString);
      } else {
        let url = module ? `${module}/${resource2}/delete/${params.id}` : `${resource2}/delete/${params.id}`;
        httpClient.delete(url);
      }
    },
    [DELETE_MANY]: (module, resource2, params) => {
      const deletePromises = params.ids.map((id) => {
        let url = module ? `${module}/${resource2}/delete/${id}` : `${resource2}/delete/${id}`;
        return httpClient.delete(url);
      });
      return Promise.all(deletePromises).then(() => {
        return Promise.resolve();
      });
    },
    [COPY]: (module, resource2, params) => {
      let url = module ? `${module}/${resource2}/copy/${params.id}` : `${resource2}/copy/${params.id}`;
      return httpClient.post(url, params.data);
    },
    [COPY_MANY]: (module, resource2, params) => {
      const copyPromises = params.ids.map((id) => {
        let url = module ? `${module}/${resource2}/copy/${id}` : `${resource2}/copy/${id}`;
        return httpClient.post(url, params.data);
      });
      return Promise.all(copyPromises).then(() => {
        return Promise.resolve();
      });
    }
  };
};
class FetchHydra extends FetchJson {
  async call(path, options = {}) {
    try {
      let { status, data } = await super.call(path, options);
      let getResourceWithId = (resource2) => {
        let data2 = {
          ...resource2
        };
        if (resource2["@id"]) {
          let id = resource2["@id"];
          data2.id = id.substring(id.lastIndexOf("/") + 1);
        }
        Object.keys(resource2).forEach((p) => {
          let value = resource2[p];
          data2[p] = Array.isArray(value) ? value.map((v) => getResourceWithId(v)) : typeof value === "object" && value["@id"] ? getResourceWithId(value) : value;
        });
        return data2;
      };
      if (data["hydra:member"]) {
        return Promise.resolve({
          status,
          data: data["hydra:member"].map((r) => getResourceWithId(r)),
          total: data["hydra:totalItems"]
        });
      }
      return Promise.resolve({
        status,
        data: getResourceWithId(data)
      });
    } catch ({ status, message, data }) {
      return Promise.reject({
        message,
        status,
        ...{
          message: data["hydra:title"],
          errors: data.violations ? data.violations.reduce(
            (o, error) => ({
              ...o,
              [error.propertyPath]: [
                ...o[error.propertyPath] || [],
                error.message
              ]
            }),
            {}
          ) : {}
        }
      });
    }
  }
}
const jwtAuthProvider = (httpClient, params = {}) => {
  if (typeof httpClient === "string") {
    httpClient = new FetchHydra(httpClient);
  }
  params = {
    routes: {
      login: "auth/token",
      logout: "auth/logout",
      refresh: "auth/refresh",
      user: "auth/me"
    },
    getToken: (r) => r.token,
    getCredentials: ({ username, password }) => {
      return {
        username,
        password
      };
    },
    getId: (r) => r.user.id,
    getFullname: (r) => r.user.fullname,
    getEmail: (r) => r.user.email,
    getAvatar: () => localStorage.getItem("avatar"),
    getPermissions: (r) => r.user.permissions,
    ...params
  };
  let {
    routes: routes2,
    getCredentials,
    getId,
    getFullname,
    getEmail,
    getAvatar,
    getPermissions,
    getToken
  } = params;
  return {
    async login({ username, password }) {
      const response = await httpClient.post(
        routes2.login,
        getCredentials({ username, password })
      );
      cookies.remove("token");
      cookies.remove("user");
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
      cookies.set("user", JSON.stringify(response.data.data.user));
      cookies.set("token", getToken(response.data.data));
      localStorage.setItem("avatar", response.data.data.avatar);
      return Promise.resolve(response);
    },
    async logout() {
      let response = null;
      if (routes2.logout) {
        try {
          response = await httpClient.get(routes2.logout);
        } catch (err) {
          console.error(err);
        }
      }
      cookies.remove("user");
      cookies.remove("token");
      return Promise.resolve(response);
    },
    async checkAuth() {
      const token = cookies.get("token");
      if (typeof token == "undefined" || token == "undefined" || token == "") {
        return Promise.reject();
      }
      let user = JSON.parse(cookies.get("user"));
      if (user) {
        return Promise.resolve({
          data: {
            avatar: localStorage.getItem("avatar"),
            token,
            user,
            cookieKey: {
              user: cookies.getCookieKey("user"),
              token: cookies.getCookieKey("token")
            }
          }
        });
      } else {
        return Promise.reject();
      }
    },
    checkError({ status }) {
      if (status === 401 || status === 403) {
        cookies.remove("user");
        cookies.remove("token");
        return Promise.reject();
      }
      return Promise.resolve();
    },
    getId(response) {
      return getId(response);
    },
    getFullname(response) {
      return getFullname(response);
    },
    getEmail(response) {
      return getEmail(response);
    },
    getAvatar() {
      return getAvatar();
    },
    getPermissions(response) {
      return getPermissions(response);
    }
  };
};
const __vite_import_meta_env__ = { "BASE_URL": "/", "DEV": false, "MODE": "prod", "PROD": true, "SSR": false, "VITE_CJS_IGNORE_WARNING": "true" };
let admin = new Olobase(__vite_import_meta_env__);
const admin$1 = {
  async install(app2, { i18n: i18n2, store: store2, http }) {
    const resources = app2.config.globalProperties.$resources;
    admin.setOptions({
      app: app2,
      router,
      resources,
      store: store2,
      i18n: i18n2,
      downloadUrl: "/files/findOneById/",
      readFileUrl: "/files/readOneById/",
      routes,
      locales: {},
      dataProvider: jsonServerDataProvider(http),
      authProvider: jwtAuthProvider(http),
      http,
      canAction: null,
      // canAction: ({ resource, action, can }) => {
      //   if (can(["admin"])) {
      //     return true;
      //   }
      //   // any other custom actions on given resource and action...
      // },
      config
    });
    Olobase.install(app2);
    admin.init();
    app2.config.globalProperties.$admin = admin;
  }
};
const _sfc_main$1 = {
  computed: {
    dialog: {
      get() {
        return this.$store.getModule("messages").editDialog;
      },
      set(bool) {
        this.cancel();
        return bool;
      }
    }
  },
  methods: {
    agree() {
      this.$store.getModule("messages").agreeUnsavedEditDialog();
    },
    cancel() {
      this.$store.getModule("messages").cancelUnsavedEditDialog();
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VRow, { justify: "center" }, {
    default: withCtx(() => [
      createVNode(VDialog, {
        modelValue: $options.dialog,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.dialog = $event),
        "max-width": "290"
      }, {
        default: withCtx(() => [
          createVNode(VCard, null, {
            default: withCtx(() => [
              createVNode(VCardTitle, { class: "text-h5" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("i18n.confirm.confirmTitle")), 1)
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("i18n.messages.formLostChanges")), 1)
                ]),
                _: 1
              }),
              createVNode(VCardActions, null, {
                default: withCtx(() => [
                  createVNode(VSpacer),
                  createVNode(VBtn, {
                    color: "green darken-1",
                    text: "",
                    onClick: $options.agree
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("i18n.confirm.yes")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(VBtn, {
                    color: "green darken-1",
                    text: "",
                    onClick: $options.cancel
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("i18n.confirm.no")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]),
    _: 1
  });
}
const UnsavedFormDialog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  props: ["error"]
};
const _hoisted_1 = { class: "d-flex align-center justify-center fill-height" };
const _hoisted_2 = { class: "h3 text-center" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(VRow, null, {
      default: withCtx(() => [
        createVNode(VCol, { cols: "12" }, {
          default: withCtx(() => [
            createVNode(VCard, { flat: "" }, {
              default: withCtx(() => [
                createVNode(VContainer, { fluid: "" }, {
                  default: withCtx(() => [
                    _cache[0] || (_cache[0] = createBaseVNode("div", { class: "h1 text-center" }, " 404 ", -1)),
                    createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.$t("i18n.error.notFound")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const PageNotFound = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const loader = {
  install: async (app2) => {
    app2.use(D);
    app2.component("PageNotFound", PageNotFound);
    app2.component("UnsavedFormDialog", UnsavedFormDialog);
    app2.component("VAutocomplete", VAutocomplete);
    app2.component("VCombobox", VCombobox);
  }
};
let isRefreshing = false;
let failedQueue = [];
let logoutCodes = [
  // do not change these values because it is related to your back end api
  "authenticationRequired",
  "ipValidationFailed",
  "userAgentValidationFailed"
];
const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};
const useHttp = function(axios2, store2) {
  let axiosInstance = axios2;
  axiosInstance.interceptors.response.use(
    (response) => {
      const statusOk = response && response["status"] && response.status === 200 ? true : false;
      const configUrlSegments = response.config.url.split("/");
      if (statusOk && configUrlSegments.includes("create") || statusOk && configUrlSegments.includes("update")) {
        eventBus.emit("last-dialog", false);
      }
      if (statusOk && cookies.get("token") && response.config.url == "/auth/session") {
        let config2 = response.config;
        config2._retry = false;
        const delayRetryRequest = new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, "5" * 60 * 1e3);
        });
        return delayRetryRequest.then(() => axiosInstance(config2));
      }
      return response;
    },
    async function(error) {
      const originalRequest = error.config;
      if (error.response) {
        if (error.response.status === 401 && error.response.data.data.error == "Logout") {
          store2.getModule("auth").logout();
          router.push({ name: "users_login" });
          return;
        }
        if (error.response.status === 401 && typeof error.response.data.data.code !== "undefined" && logoutCodes.includes(error.response.data.data.code)) {
          router.push({ name: "users_login" });
          return;
        }
        if (error.response.status === 401 && error.response.data.data.error == "Token Expired" && !originalRequest._retry) {
          try {
            if (isRefreshing) {
              return new Promise(function(resolve, reject) {
                failedQueue.push({ resolve, reject });
              }).then((token) => {
                originalRequest.headers["Authorization"] = "Bearer " + token;
                return axiosInstance(originalRequest);
              }).catch((err) => {
                return Promise.reject(err);
              });
            }
            isRefreshing = true;
            originalRequest._retry = true;
            let localToken = cookies.get("token");
            return new Promise(function(resolve, reject) {
              axios2.post("auth/refresh", { token: localToken }).then((res) => {
                if (res && res["data"] && res["data"]["data"] && res["data"]["data"]["token"]) {
                  let newToken = res["data"]["data"]["token"];
                  cookies.set("token", newToken);
                  axios2.defaults.headers.common["Authorization"] = "Bearer " + newToken;
                  originalRequest.headers["Authorization"] = "Bearer " + newToken;
                  processQueue(null, newToken);
                  resolve(axiosInstance(originalRequest));
                }
              }).catch((err) => {
                processQueue(err, null);
                reject(err);
              }).finally(() => {
                isRefreshing = false;
              });
            });
          } catch (_error) {
            if (_error.response && _error.response["status"] && _error.response.status == 401) {
              store2.getModule("auth").logout();
              return;
            }
            if (_error.response && _error.response.data) {
              return Promise.reject(_error.response.data);
            }
            return Promise.reject(_error);
          }
        }
        if (error.response["data"] && error.response["data"]["data"] && typeof error.response.data.data.error !== "undefined" && typeof error.response.data.data.error === "string" && store2.getModule("messages").getHideApiErrors == false) {
          store2.getModule("messages").show({ type: "error", message: error.response.data.data.error });
          return;
        }
        if (error.response["status"] && error.response.status == 400 && store2.getModule("messages").getHideApiErrors == false) {
          if (error.response["data"] && error.response["data"]["error"]) {
            store2.getModule("messages").show({ type: "error", message: error.response["data"]["error"] });
            return;
          }
          if (error.response["data"] && error.response["data"]["data"] && typeof error.response.data.data.info !== "undefined") {
            store2.getModule("messages").show({ type: "info", message: error.response.data.data.info });
            return;
          }
          parseApiErrors(error, store2);
          return error.response;
        }
        return Promise.reject(error);
      }
    }
    // end error
  );
};
function parseApiErrors(error, store2) {
  if (error.response["data"] && error.response["data"]["data"] && error.response["data"]["data"]["error"]) {
    let errorHtml = "";
    let hasError = false;
    let errorObject = error.response.data.data.error;
    if (errorObject instanceof Object) {
      errorHtml = '<ul class="snackbar-errors">';
      Object.keys(errorObject).forEach(function(k) {
        if (Array.isArray(errorObject[k])) {
          hasError = true;
          errorObject[k].forEach(function(subObject) {
            if (typeof subObject === "string") {
              errorHtml += `<li>${subObject}</li>`;
            } else if (typeof subObject === "object") {
              Object.values(subObject).forEach(function(subErrors) {
                if (Array.isArray(subErrors)) {
                  subErrors.forEach(function(strError) {
                    errorHtml += `<li>${strError}</li>`;
                  });
                }
              });
            }
          });
        } else {
          hasError = true;
          errorHtml += `<li>${errorObject[k]}</li>`;
        }
      });
      errorHtml += "</ul>";
    } else if (typeof errorObject === "string") {
      errorHtml = errorObject;
      if (errorObject == "Token Expired") {
        store2.getModule("auth").logout();
      } else {
        hasError = true;
      }
    }
    if (hasError) {
      store2.getModule("messages").show({ type: "error", message: errorHtml });
    }
    return error;
  }
}
async function loadFonts() {
  const webFontLoader = await __vitePreload(() => import(
    /* webpackChunkName: "webfontloader" */
    "../chunks/vendor.js"
  ).then((n) => n.w), true ? __vite__mapDeps([1,2]) : void 0);
  webFontLoader.load({
    google: {
      families: ["Hanken Grotesk:400,500,700&display=swap"]
    }
  });
}
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
class ModuleLoader {
  constructor(modules) {
    this.modules = modules;
    this.moduleCache = {};
    this.routes = [];
    this.stores = [];
    this.resources = [];
    this.navigations = [];
    this.resourceComponents = {};
    this.components = {};
  }
  /**
   * Installs the module loader plugin.
   */
  async install(app2) {
    this.app = app2;
    this.pinia = app2.config.globalProperties.$pinia;
    const defaultStore = app2.config.globalProperties.$store;
    const moduleInstances = await Promise.all(this.modules.map((m) => this.loadModule(m)));
    for (const [index2, moduleInstance] of moduleInstances.entries()) {
      const module = this.modules[index2];
      if (moduleInstance.default.install) {
        const { i18n: i18n2, routes: routes2, stores, components, navigation, resources, resourceComponents } = await moduleInstance.default.install(app2);
        if (i18n2 == null ? void 0 : i18n2.messages) {
          for (const lang in i18n2.messages) {
            i18n$1.global.mergeLocaleMessage(lang, i18n2.messages[lang]);
          }
        }
        if (navigation && typeof navigation.build === "function") {
          defaultStore.navigations.push(navigation);
        }
        if (routes2 && typeof routes2.build === "function") {
          this.routes.push(...routes2.build(i18n$1.global.t));
        }
        if (stores && Array.isArray(stores)) {
          this.stores.push(...stores);
        }
        if (components && typeof components === "object") {
          Object.assign(this.components, components);
        }
        if (resources && Array.isArray(resources)) {
          const resourcesWithModule = resources.map((resource2) => ({
            ...resource2,
            module: module.name,
            name: resource2.standalone ? resource2.name.toLowerCase() : `${module.name.toLowerCase()}_${resource2.name}`
          }));
          this.resources.push(...resourcesWithModule);
        }
        if (resourceComponents) {
          Object.assign(this.resourceComponents, resourceComponents);
        }
      }
    }
    this.routes.forEach((route) => router.addRoute(route));
    return this.getResources();
  }
  getI18nInstance() {
    return this.i18nInstance;
  }
  /**
   * Dynamic module loading function.
   */
  async loadModule(module) {
    try {
      const moduleName = module.uiName;
      if (this.moduleCache[moduleName]) {
        return this.moduleCache[moduleName];
      }
      let moduleInstance = null;
      moduleInstance = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../modules/authentication/src/index.js": () => __vitePreload(() => import("../chunks/modules/authentication/src/index.js").then((n) => n.i), true ? __vite__mapDeps([4,1,2]) : void 0), "../modules/authorization/src/index.js": () => __vitePreload(() => import("../chunks/modules/authorization/src/index.js").then((n) => n.a), true ? __vite__mapDeps([5,4,1,2,3,6]) : void 0), "../modules/i18n/src/index.js": () => __vitePreload(() => import("../chunks/modules/i18n/src/index.js").then((n) => n.m), true ? __vite__mapDeps([3,1,2,4,5,6]) : void 0), "../modules/intakes/src/index.js": () => __vitePreload(() => import("../chunks/modules/intakes/src/index.js"), true ? __vite__mapDeps([10,4,1,2,5,3,6]) : void 0), "../modules/medicines/src/index.js": () => __vitePreload(() => import("../chunks/modules/medicines/src/index.js"), true ? __vite__mapDeps([11,4,1,2,5,3,6]) : void 0), "../modules/modules/src/index.js": () => __vitePreload(() => import("../chunks/modules/modules/src/index.js"), true ? __vite__mapDeps([12,4,1,2,5,3,6]) : void 0), "../modules/patients/src/index.js": () => __vitePreload(() => import("../chunks/modules/patients/src/index.js"), true ? __vite__mapDeps([13,4,1,2,5,3,6]) : void 0), "../modules/users/src/index.js": () => __vitePreload(() => import("../chunks/modules/users/src/index.js").then((n) => n.i), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0) }), `../modules/${moduleName}/src/index.js`, 5);
      if (moduleInstance.version && this.isVersionOlder(moduleInstance.version, module.version)) {
        console.log(`New version available: ${moduleName} - ${module.version}`);
      }
      this.moduleCache[moduleName] = moduleInstance;
      return moduleInstance;
    } catch (error) {
      console.error(`Failed to load module: ${module.name}`, error);
      return null;
    }
  }
  /**
   * Returns to all resources for olobase admin plugin
   */
  getResources() {
    return [...this.resources];
  }
  /**
   * Dynamically registers components in the Vue application.
   */
  registerComponents() {
    for (const [key, componentConfig] of Object.entries(this.components)) {
      const componentName = upperFirst(camelCase(key));
      this.app.component(
        componentName,
        defineAsyncComponent(() => componentConfig())
      );
    }
  }
  /**
   * Dynamically registers resource components in the Vue application.
   */
  registerResourceComponents() {
    for (const [key, componentConfig] of Object.entries(this.resourceComponents)) {
      const componentName = upperFirst(camelCase(key));
      this.app.component(
        componentName,
        defineAsyncComponent(() => componentConfig())
      );
    }
  }
  /**
   * Registers Pinia stores for each module.
   */
  async registerStores() {
    for (const storeFn of this.stores) {
      try {
        const store2 = await storeFn();
        this.pinia.use(store2.default);
      } catch (error) {
        console.error(`Store loading failed:`, error);
      }
    }
  }
  /**
   * Check module version is older
   */
  isVersionOlder(current, target) {
    const currentParts = current.split(".").map(Number);
    const targetParts = target.split(".").map(Number);
    for (let i = 0; i < 3; i++) {
      if ((currentParts[i] || 0) < (targetParts[i] || 0)) return true;
      if ((currentParts[i] || 0) > (targetParts[i] || 0)) return false;
    }
    return false;
  }
}
async function loadModules(app2) {
  const axios2 = app2.config.globalProperties.$axios;
  const response = await axios2.get("/modules/findAll");
  if (!response || response.status !== 200) {
    console.error("Modules could not be loaded. Error:", response ? response.status : "No response");
    return;
  }
  return response.data.data;
}
axios.defaults.headers.common["X-Client-Locale"] = i18n$1.global.locale.value;
async function registerPlugins(app2) {
  await loadFonts();
  const pinia = createPinia();
  app2.use(pinia);
  const store2 = store$1();
  app2.config.globalProperties.$axios = axios;
  app2.config.globalProperties.$store = store2;
  app2.config.globalProperties.$pinia = pinia;
  app2.config.globalProperties.$vuetify = vuetify;
  const modules = await loadModules(app2);
  const moduleLoader = new ModuleLoader(modules);
  const resources = await moduleLoader.install(app2);
  app2.use(i18n$1);
  app2.use(vuetify);
  app2.provide("i18n", i18n$1);
  app2.config.globalProperties.$resources = resources;
  useHttp(axios, store2);
  await loader.install(app2);
  await moduleLoader.registerStores();
  moduleLoader.registerComponents();
  moduleLoader.registerResourceComponents();
  await admin$1.install(app2, { i18n: i18n$1, store: store2, http: axios });
  app2.use(router);
}
const app = createApp(App);
async function init() {
  await registerPlugins(app);
  app.mount("#app");
}
init();
