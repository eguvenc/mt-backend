import { a as _export_sfc } from "./modules/authentication/src/index.js";
import { d as createBlock, o as openBlock, b as withCtx, a as createVNode, j as VCol, A as VCard, C as VCardText, h as createBaseVNode, t as toDisplayString, z as VBtn, f as createTextVNode, V as VRow } from "./vendor.js";
const _sfc_main = {
  computed: {
    getRestAPILink() {
      let baseUrl = "https://pmm.oloma.dev/api";
      const regex = /\/api$/;
      baseUrl = baseUrl.replace(regex, "");
      return baseUrl + "/swagger/";
    }
  }
};
const _hoisted_1 = { class: "h1 mb-4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VRow, null, {
    default: withCtx(() => [
      createVNode(VCol, { cols: "6" }, {
        default: withCtx(() => [
          createVNode(VCard, {
            class: "mt-2 mb-5",
            variant: "flat",
            style: { "background-color": "#fff" }
          }, {
            default: withCtx(() => [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1, toDisplayString(_ctx.$t("i18n.swagger.restApi")), 1),
                  createVNode(VBtn, {
                    block: "",
                    color: "primary",
                    href: $options.getRestAPILink,
                    target: "_blank",
                    "prepend-icon": "mdi-open-in-new",
                    variant: "flat"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("i18n.swagger.openDocs")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])
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
  });
}
const Swagger = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Swagger as default
};
