import { a as _export_sfc } from "./modules/authentication/src/index.js";
import { d as createBlock, o as openBlock, b as withCtx, a as createVNode, C as VCardText, f as createTextVNode, t as toDisplayString, A as VCard } from "./vendor.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createBlock(VCard, { variant: "flat" }, {
    default: withCtx(() => [
      createVNode(VCardText, null, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.$t("i18n.messages.welcome")), 1)
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Dashboard as default
};
