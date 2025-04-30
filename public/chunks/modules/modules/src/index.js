import { _ as __vitePreload, a as _export_sfc } from "../../authentication/src/index.js";
import { l as loadI18nMessages, i as i18n } from "../../authorization/src/index.js";
import { r as resolveComponent, c as createElementBlock, o as openBlock, a as createVNode, b as withCtx, L as required } from "../../../vendor.js";
import "../../i18n/src/index.js";
const module = {
  name: "Modules",
  version: "1.0.0",
  install: async (app) => {
    i18n.messages = await loadI18nMessages("modules", /* @__PURE__ */ Object.assign({ "./i18n/en/index.js": () => __vitePreload(() => Promise.resolve().then(() => index$5), true ? void 0 : void 0), "./i18n/tr/index.js": () => __vitePreload(() => Promise.resolve().then(() => index$3), true ? void 0 : void 0) }));
    const { default: resources } = await __vitePreload(async () => {
      const { default: resources2 } = await Promise.resolve().then(() => index$1);
      return { default: resources2 };
    }, true ? void 0 : void 0);
    const { default: navigation } = await __vitePreload(async () => {
      const { default: navigation2 } = await Promise.resolve().then(() => _nav$1);
      return { default: navigation2 };
    }, true ? void 0 : void 0);
    const resourceComponents = {
      "ModulesList": () => __vitePreload(() => Promise.resolve().then(() => List$1), true ? void 0 : void 0)
    };
    return {
      i18n,
      // stores,
      // routes,
      // plugins,
      navigation,
      resources,
      // components,
      resourceComponents
    };
  }
};
const index$4 = {
  menu: {
    label: "Modules"
  },
  modules: {
    title: "Modules",
    fields: {
      q: "Search",
      name: "Module",
      version: "Version",
      isActive: "Status"
    }
  }
};
const index$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$4
}, Symbol.toStringTag, { value: "Module" }));
const index$2 = {
  menu: {
    label: "Modüller"
  },
  modules: {
    title: "Modüller",
    fields: {
      q: "Ara",
      name: "Modül",
      version: "Versiyon",
      isActive: "Durum"
    }
  }
};
const index$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$2
}, Symbol.toStringTag, { value: "Module" }));
const index = [
  {
    name: "modules",
    standalone: true,
    // single resource
    permissions: [
      { name: "user", actions: [] },
      { name: "admin", actions: ["create", "list", "edit", "delete", "show"] }
    ],
    actions: ["create", "list", "edit", "delete", "show"]
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
        icon: "mdi-cog",
        text: t("modules.menu.label"),
        link: "/modules",
        order: 98
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
  inject: [],
  provide() {
    return {
      validations: {
        form: {
          name: {
            required
          },
          version: {
            required
          }
        }
      },
      errors: {
        nameErrors: (v$) => {
          const errors = [];
          if (!v$["form"].name.$dirty) return errors;
          v$["form"].name.required.$invalid && errors.push(this.$t("i18n.v.text.required"));
          return errors;
        },
        versionErrors: (v$) => {
          const errors = [];
          if (!v$["form"].version.$dirty) return errors;
          v$["form"].version.required.$invalid && errors.push(this.$t("i18n.v.text.required"));
          return errors;
        }
      }
    };
  },
  data() {
    return {
      app: null,
      selected: [],
      filters: [],
      fields: [
        {
          source: "name",
          sortable: true
        },
        {
          source: "version",
          sortable: true
        },
        {
          source: "isActive",
          type: "boolean",
          sortable: true
        }
      ]
    };
  },
  created() {
    this.app = this.$admin.getAppInstance();
  },
  methods: {
    async afterSave(event) {
      var _a, _b, _c, _d;
      if (event.response && ((_d = (_c = (_b = (_a = event.response) == null ? void 0 : _a.data) == null ? void 0 : _b.data) == null ? void 0 : _c.oldRecord) == null ? void 0 : _d.isActive) != event.form.isActive) {
        window.location.reload();
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_data_table_server = resolveComponent("va-data-table-server");
  const _component_va_list = resolveComponent("va-list");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_va_list, {
      "disable-create": "",
      "row-create": "",
      fields: $data.fields,
      filters: $data.filters,
      "items-per-page": 200
    }, {
      default: withCtx(() => [
        createVNode(_component_va_data_table_server, {
          "row-create": "",
          "row-clone": "",
          "row-edit": "",
          "disable-edit": "",
          "disable-show": "",
          "disable-clone": "",
          "disable-create-redirect": "",
          onSaved: $options.afterSave
        }, null, 8, ["onSaved"])
      ]),
      _: 1
    }, 8, ["fields", "filters"])
  ]);
}
const List = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const List$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: List
}, Symbol.toStringTag, { value: "Module" }));
export {
  module as default
};
