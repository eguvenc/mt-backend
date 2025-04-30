import { _ as __vitePreload, a as _export_sfc } from "../../authentication/src/index.js";
import { l as loadI18nMessages, i as i18n } from "../../authorization/src/index.js";
import { r as resolveComponent, d as createBlock, o as openBlock, b as withCtx, a as createVNode, V as VRow, j as VCol, m as VIcon, f as createTextVNode, h as createBaseVNode, t as toDisplayString, l as VListItem, aJ as normalizeProps, aK as guardReactiveProps, L as required, aM as minLength, M as useVuelidate, N as provide } from "../../../vendor.js";
import "../../i18n/src/index.js";
const module = {
  name: "Medicines",
  version: "1.0.0",
  install: async (app) => {
    i18n.messages = await loadI18nMessages("medicines", /* @__PURE__ */ Object.assign({ "./i18n/en/index.js": () => __vitePreload(() => Promise.resolve().then(() => index$5), true ? void 0 : void 0), "./i18n/tr/index.js": () => __vitePreload(() => Promise.resolve().then(() => index$3), true ? void 0 : void 0) }));
    const { default: resources } = await __vitePreload(async () => {
      const { default: resources2 } = await Promise.resolve().then(() => index$1);
      return { default: resources2 };
    }, true ? void 0 : void 0);
    const { default: navigation } = await __vitePreload(async () => {
      const { default: navigation2 } = await Promise.resolve().then(() => _nav$1);
      return { default: navigation2 };
    }, true ? void 0 : void 0);
    const resourceComponents = {
      "MedicinesCreate": () => __vitePreload(() => Promise.resolve().then(() => Create$1), true ? void 0 : void 0),
      "MedicinesEdit": () => __vitePreload(() => Promise.resolve().then(() => Edit$1), true ? void 0 : void 0),
      "MedicinesForm": () => __vitePreload(() => Promise.resolve().then(() => Form$1), true ? void 0 : void 0),
      "MedicinesList": () => __vitePreload(() => Promise.resolve().then(() => List$1), true ? void 0 : void 0)
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
const enums$1 = {
  frequency: [
    { id: "once", name: "Once a Day" },
    { id: "twice", name: "Twice a Day" },
    { id: "threeTimes", name: "Three Times a Day" }
  ],
  canBeUsedForInfants: [
    { id: null, name: "None of Them" },
    { id: 1, name: "Yes" },
    { id: 0, name: "No" }
  ]
};
const medicines$1 = {
  title: "Medicines",
  menu: {
    label: "Medicines"
  },
  fields: {
    q: "Search",
    name: "Name",
    frequency: "Frequency",
    canBeUsedForInfants: "Can be used for infants"
  },
  buttons: {}
};
const index$4 = {
  menu: {
    label: "Medicines"
  },
  enums: enums$1,
  medicines: medicines$1,
  messages: {}
};
const index$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$4
}, Symbol.toStringTag, { value: "Module" }));
const enums = {
  frequency: [
    { id: "once", name: "Günde bir kez" },
    { id: "twice", name: "Günde iki kez" },
    { id: "threeTimes", name: "Günde üç kez" }
  ]
};
const medicines = {
  title: "İlaçlar",
  menu: {
    label: "İlaçlar"
  },
  fields: {
    q: "Ara",
    name: "İlaç Adı",
    frequency: "Sıklık",
    canBeUsedForInfants: "Bebekler için kullanılabilir"
  },
  buttons: {}
};
const index$2 = {
  menu: {
    label: "İlaçlar"
  },
  enums,
  medicines,
  messages: {}
};
const index$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$2
}, Symbol.toStringTag, { value: "Module" }));
const index = [
  {
    name: "medicines",
    standalone: true,
    permissions: [
      { name: "user", actions: ["create", "list", "edit", "delete", "show"] },
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
    const userRole = await admin.can(["user"]);
    const adminRole = await admin.can(["admin"]);
    return userRole || adminRole ? [
      {
        icon: "mdi-pill-multiple",
        text: t("medicines.menu.label"),
        link: "/medicines?sortBy=name&sortDesc=false",
        order: 1
      }
    ] : [];
  }
};
const _nav$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _nav
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  props: ["title", "item"]
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_medicines_form = resolveComponent("medicines-form");
  const _component_va_create_layout = resolveComponent("va-create-layout");
  return openBlock(), createBlock(_component_va_create_layout, { title: $props.title }, {
    default: withCtx(() => [
      createVNode(_component_medicines_form, { item: $props.item }, null, 8, ["item"])
    ]),
    _: 1
  }, 8, ["title"]);
}
const Create = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const Create$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  props: ["id", "title", "item"]
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_medicines_form = resolveComponent("medicines-form");
  const _component_va_edit_layout = resolveComponent("va-edit-layout");
  return openBlock(), createBlock(_component_va_edit_layout, { title: $props.title }, {
    default: withCtx(() => [
      createVNode(_component_medicines_form, {
        id: $props.id,
        item: $props.item
      }, null, 8, ["id", "item"])
    ]),
    _: 1
  }, 8, ["title"]);
}
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const Edit$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  props: ["id", "item"],
  mixins: [],
  inheritAttrs: false,
  setup() {
    let vuelidate = useVuelidate();
    provide("v$", vuelidate);
    return { v$: vuelidate };
  },
  validations() {
    return {
      model: {
        name: {
          required,
          minLength: minLength(2)
        },
        frequency: {
          required
        }
      }
    };
  },
  data() {
    return {
      model: {
        id: null,
        name: null,
        frequency: null,
        canBeUsedForInfants: 0
      }
    };
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.v$["model"].name.$dirty) return errors;
      this.v$["model"].name.required.$invalid && errors.push(this.$t("i18n.v.text.required"));
      this.v$["model"].name.minLength.$invalid && errors.push(this.$t("i18n.v.string.minLength", { min: "2" }));
      return errors;
    },
    frequencyErrors() {
      const errors = [];
      if (!this.v$["model"].frequency.$dirty) return errors;
      this.v$["model"].frequency.required.$invalid && errors.push(this.$t("i18n.v.text.required"));
      return errors;
    }
  },
  methods: {}
};
const _hoisted_1$1 = { class: "ml-2" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_text_input = resolveComponent("va-text-input");
  const _component_va_select_input = resolveComponent("va-select-input");
  const _component_va_boolean_input = resolveComponent("va-boolean-input");
  const _component_va_save_button = resolveComponent("va-save-button");
  const _component_va_form = resolveComponent("va-form");
  return openBlock(), createBlock(_component_va_form, {
    id: $props.id,
    item: $props.item,
    modelValue: $data.model,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.model = $event),
    disableUnsavedFormDialog: ""
  }, {
    default: withCtx(() => [
      createVNode(VRow, { "no-gutters": "" }, {
        default: withCtx(() => [
          createVNode(VCol, {
            lg: "6",
            md: "6",
            sm: "12"
          }, {
            default: withCtx(() => [
              createVNode(_component_va_text_input, {
                source: "name",
                "error-messages": $options.nameErrors,
                variant: "outlined"
              }, {
                "prepend-inner": withCtx(() => [
                  createVNode(VIcon, {
                    color: "primary",
                    class: "mr-2"
                  }, {
                    default: withCtx(() => _cache[1] || (_cache[1] = [
                      createTextVNode("mdi-pill")
                    ])),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["error-messages"]),
              createVNode(_component_va_select_input, {
                source: "frequency",
                "error-messages": $options.frequencyErrors,
                clearable: ""
              }, {
                item: withCtx(({ props, item }) => [
                  createVNode(VListItem, normalizeProps(guardReactiveProps(props)), {
                    prepend: withCtx(() => [
                      createVNode(VIcon, {
                        color: "primary",
                        class: "mr-2"
                      }, {
                        default: withCtx(() => _cache[2] || (_cache[2] = [
                          createTextVNode("mdi-clock-outline")
                        ])),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1040)
                ]),
                selection: withCtx(({ item }) => [
                  createVNode(VIcon, {
                    color: "primary",
                    class: "mr-2"
                  }, {
                    default: withCtx(() => _cache[3] || (_cache[3] = [
                      createTextVNode("mdi-clock-outline")
                    ])),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_1$1, toDisplayString(item.raw.name), 1)
                ]),
                _: 1
              }, 8, ["error-messages"]),
              createVNode(_component_va_boolean_input, { source: "canBeUsedForInfants" })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_va_save_button)
    ]),
    _: 1
  }, 8, ["id", "item", "modelValue"]);
}
const Form = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const Form$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Form
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  props: ["resource", "title"],
  data() {
    return {
      filters: [
        { source: "frequency", type: "select" },
        { source: "canBeUsedForInfants", type: "select" }
      ],
      fields: [
        {
          source: "name",
          sortable: true
        },
        {
          source: "frequency",
          type: "select",
          sortable: true
        },
        {
          source: "canBeUsedForInfants",
          label: "For Infants",
          type: "boolean",
          sortable: true
        }
      ]
    };
  },
  methods: {}
};
const _hoisted_1 = { class: "d-flex align-center gap-2" };
const _hoisted_2 = { class: "d-flex align-center gap-2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_data_table_server = resolveComponent("va-data-table-server");
  const _component_va_list = resolveComponent("va-list");
  return openBlock(), createBlock(_component_va_list, {
    fields: $data.fields,
    filters: $data.filters,
    disableSettings: ""
  }, {
    default: withCtx(() => [
      createVNode(_component_va_data_table_server, { "disable-show": "" }, {
        [`field.name`]: withCtx(({ item }) => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(VIcon, {
              color: "primary",
              class: "mr-2"
            }, {
              default: withCtx(() => _cache[0] || (_cache[0] = [
                createTextVNode("mdi-pill")
              ])),
              _: 1
            }),
            createTextVNode(" " + toDisplayString(item.name), 1)
          ])
        ]),
        [`field.frequency`]: withCtx(({ item }) => [
          createBaseVNode("div", _hoisted_2, [
            createVNode(VIcon, {
              color: "primary",
              class: "mr-2"
            }, {
              default: withCtx(() => _cache[1] || (_cache[1] = [
                createTextVNode("mdi-clock-outline")
              ])),
              _: 1
            }),
            createTextVNode(" " + toDisplayString(item.frequency.name), 1)
          ])
        ]),
        _: 2
      }, 1024)
    ]),
    _: 1
  }, 8, ["fields", "filters"]);
}
const List = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const List$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: List
}, Symbol.toStringTag, { value: "Module" }));
export {
  module as default
};
