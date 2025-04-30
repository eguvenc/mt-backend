import { _ as __vitePreload, a as _export_sfc } from "../../authentication/src/index.js";
import { l as loadI18nMessages, i as i18n } from "../../authorization/src/index.js";
import { r as resolveComponent, d as createBlock, o as openBlock, b as withCtx, a as createVNode, V as VRow, j as VCol, s as createCommentVNode, h as createBaseVNode, m as VIcon, f as createTextVNode, t as toDisplayString, l as VListItem, aJ as normalizeProps, aK as guardReactiveProps, E as VTextField, L as required, M as useVuelidate, aL as useRoute, N as provide } from "../../../vendor.js";
import "../../i18n/src/index.js";
const module = {
  name: "Intakes",
  version: "1.0.0",
  install: async (app) => {
    i18n.messages = await loadI18nMessages("intakes", /* @__PURE__ */ Object.assign({ "./i18n/en/index.js": () => __vitePreload(() => Promise.resolve().then(() => index$5), true ? void 0 : void 0), "./i18n/tr/index.js": () => __vitePreload(() => Promise.resolve().then(() => index$3), true ? void 0 : void 0) }));
    const { default: resources } = await __vitePreload(async () => {
      const { default: resources2 } = await Promise.resolve().then(() => index$1);
      return { default: resources2 };
    }, true ? void 0 : void 0);
    const { default: navigation } = await __vitePreload(async () => {
      const { default: navigation2 } = await Promise.resolve().then(() => _nav$1);
      return { default: navigation2 };
    }, true ? void 0 : void 0);
    const resourceComponents = {
      "IntakesCreate": () => __vitePreload(() => Promise.resolve().then(() => Create$1), true ? void 0 : void 0),
      "IntakesEdit": () => __vitePreload(() => Promise.resolve().then(() => Edit$1), true ? void 0 : void 0),
      "IntakesForm": () => __vitePreload(() => Promise.resolve().then(() => Form$1), true ? void 0 : void 0),
      "IntakesList": () => __vitePreload(() => Promise.resolve().then(() => List$5), true ? void 0 : void 0),
      "IntakesFemaleAdultsCreate": () => __vitePreload(() => Promise.resolve().then(() => Create$1), true ? void 0 : void 0),
      "IntakesFemaleAdultsEdit": () => __vitePreload(() => Promise.resolve().then(() => Edit$1), true ? void 0 : void 0),
      "IntakesFemaleAdultsList": () => __vitePreload(() => Promise.resolve().then(() => List$3), true ? void 0 : void 0),
      "IntakesMaleInfantsCreate": () => __vitePreload(() => Promise.resolve().then(() => Create$1), true ? void 0 : void 0),
      "IntakesMaleInfantsEdit": () => __vitePreload(() => Promise.resolve().then(() => Edit$1), true ? void 0 : void 0),
      "IntakesMaleInfantsList": () => __vitePreload(() => Promise.resolve().then(() => List$1), true ? void 0 : void 0)
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
  gender: [
    { id: "male", name: "Male" },
    { id: "female", name: "Female" }
  ],
  ageGroup: [
    { id: "infant", name: "Infant" },
    { id: "adult", name: "Adult" }
  ],
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
const intakes$1 = {
  title: "Intakes",
  menu: {
    label: "Intakes"
  },
  fields: {
    q: "Search",
    patientId: "Patient",
    medicineId: "Medicine",
    intakeTime: "Intake Time"
  },
  buttons: {}
};
const maleInfants$1 = {
  title: "Male Infants",
  menu: {
    label: "Male Infants"
  },
  fields: {
    q: "Search",
    gender: "Gender",
    ageGroup: "Age Group",
    patientId: "Patient",
    medicineId: "Medicine",
    intakeTime: "Intake Time"
  },
  buttons: {}
};
const femaleAdults$1 = {
  title: "Female Adults",
  menu: {
    label: "Female Adults"
  },
  fields: {
    q: "Search",
    gender: "Gender",
    ageGroup: "Age Group",
    patientId: "Patient",
    medicineId: "Medicine",
    intakeTime: "Intake Time"
  },
  buttons: {}
};
const index$4 = {
  menu: {
    label: "Intakes"
  },
  list: {
    menu: {
      label: "All List"
    }
  },
  enums: enums$1,
  intakes: intakes$1,
  maleInfants: maleInfants$1,
  femaleAdults: femaleAdults$1,
  messages: {}
};
const index$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$4
}, Symbol.toStringTag, { value: "Module" }));
const enums = {
  gender: [
    { id: "male", name: "Male" },
    { id: "female", name: "Female" }
  ],
  ageGroup: [
    { id: "infant", name: "Infant" },
    { id: "adult", name: "Adult" }
  ],
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
const intakes = {
  title: "Intakes",
  menu: {
    label: "Intakes"
  },
  fields: {
    q: "Search",
    patientId: "Patient",
    medicineId: "Medicine",
    intakeTime: "Intake Time"
  },
  buttons: {}
};
const maleInfants = {
  title: "Male Infants",
  menu: {
    label: "Male Infants"
  },
  fields: {
    q: "Search",
    gender: "Gender",
    ageGroup: "Age Group",
    patientId: "Patient",
    medicineId: "Medicine",
    intakeTime: "Intake Time"
  },
  buttons: {}
};
const femaleAdults = {
  title: "Female Adults",
  menu: {
    label: "Female Adults"
  },
  fields: {
    q: "Search",
    gender: "Gender",
    ageGroup: "Age Group",
    patientId: "Patient",
    medicineId: "Medicine",
    intakeTime: "Intake Time"
  },
  buttons: {}
};
const index$2 = {
  menu: {
    label: "Intakes"
  },
  enums,
  intakes,
  maleInfants,
  femaleAdults,
  messages: {}
};
const index$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$2
}, Symbol.toStringTag, { value: "Module" }));
const index = [
  {
    name: "intakes",
    standalone: true,
    permissions: [
      { name: "user", actions: ["create", "list", "edit", "delete", "show"] },
      { name: "admin", actions: ["create", "list", "edit", "delete", "show"] }
    ],
    actions: ["create", "list", "edit", "delete", "show"]
  },
  {
    name: "femaleAdults",
    permissions: [
      { name: "user", actions: ["create", "list", "edit", "delete", "show"] },
      { name: "admin", actions: ["create", "list", "edit", "delete", "show"] }
    ],
    actions: ["create", "list", "edit", "delete", "show"]
  },
  {
    name: "maleInfants",
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
        icon: "mdi-medical-cotton-swab",
        text: t("intakes.menu.label"),
        order: 1,
        children: [
          {
            icon: "mdi-list-box-outline",
            text: t("intakes.list.menu.label"),
            link: "/intakes?sortBy=name&sortDesc=false"
          },
          {
            icon: "mdi-face-woman-outline",
            text: t("intakes.femaleAdults.menu.label"),
            link: '/intakes/femaleAdults?filter={"intakeTime":["20:00"]}'
          },
          {
            icon: "mdi-face-man",
            text: t("intakes.maleInfants.menu.label"),
            link: '/intakes/maleInfants?filter={"intakeTime":["08:00"]}'
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
const _sfc_main$5 = {
  props: ["title", "item"]
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_intakes_form = resolveComponent("intakes-form");
  const _component_va_create_layout = resolveComponent("va-create-layout");
  return openBlock(), createBlock(_component_va_create_layout, { title: $props.title }, {
    default: withCtx(() => [
      createVNode(_component_intakes_form, { item: $props.item }, null, 8, ["item"])
    ]),
    _: 1
  }, 8, ["title"]);
}
const Create = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const Create$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  props: ["id", "title", "item"]
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_intakes_form = resolveComponent("intakes-form");
  const _component_va_edit_layout = resolveComponent("va-edit-layout");
  return openBlock(), createBlock(_component_va_edit_layout, { title: $props.title }, {
    default: withCtx(() => [
      createVNode(_component_intakes_form, {
        id: $props.id,
        item: $props.item
      }, null, 8, ["id", "item"])
    ]),
    _: 1
  }, 8, ["title"]);
}
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const Edit$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  props: ["id", "item"],
  mixins: [],
  inheritAttrs: false,
  setup() {
    let vuelidate = useVuelidate();
    const route = useRoute();
    provide("v$", vuelidate);
    return { v$: vuelidate, route };
  },
  validations() {
    return {
      model: {
        patientId: {
          required
        },
        medicineId: {
          required
        },
        intakeTime: {
          required
        }
      }
    };
  },
  async created() {
    var _a, _b, _c, _d;
    if (this.route["query"]["patientId"]) {
      this.patientId = this.route["query"]["patientId"];
    }
    if (this.item && ((_b = (_a = this.item) == null ? void 0 : _a.patientId) == null ? void 0 : _b.id) !== void 0) {
      this.patientId = this.route["query"]["patientId"];
    }
    if (this.patientId) {
      const response = await this.$admin.http.get("/patients/findOneById/" + this.route["query"]["patientId"]);
      if ((_d = (_c = response == null ? void 0 : response.data) == null ? void 0 : _c.data) == null ? void 0 : _d.patientId) {
        this.model.patientId = response.data.data.patientId;
      }
      this.showPatientDropdown = true;
    }
    if (this.route.name == "intakes_create" || this.route.name == "intakes_edit") {
      this.showPatientDropdown = true;
    }
    this.created = true;
  },
  data() {
    return {
      showPatientDropdown: false,
      model: {
        id: null,
        patientId: null,
        medicineId: null,
        intakeTime: null
      }
    };
  },
  mounted() {
    if (this.item) {
      this.model.intakeTime = this.item.intakeTime ?? null;
    }
  },
  computed: {
    patientIdErrors() {
      const errors = [];
      if (!this.v$["model"].patientId.$dirty) return errors;
      this.v$["model"].patientId.required.$invalid && errors.push(this.$t("i18n.v.text.required"));
      return errors;
    },
    medicineIdErrors() {
      const errors = [];
      if (!this.v$["model"].medicineId.$dirty) return errors;
      this.v$["model"].medicineId.required.$invalid && errors.push(this.$t("i18n.v.text.required"));
      return errors;
    },
    intakeTimeErrors() {
      const errors = [];
      if (!this.v$["model"].intakeTime.$dirty) return errors;
      this.v$["model"].intakeTime.required.$invalid && errors.push(this.$t("i18n.v.text.required"));
      return errors;
    }
  },
  methods: {}
};
const _hoisted_1$3 = { class: "ml-2" };
const _hoisted_2$3 = { class: "ml-2" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_select_input = resolveComponent("va-select-input");
  const _component_va_save_button = resolveComponent("va-save-button");
  const _component_va_form = resolveComponent("va-form");
  return openBlock(), createBlock(_component_va_form, {
    id: $props.id,
    item: $props.item,
    modelValue: $data.model,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.model = $event),
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
              $data.showPatientDropdown ? (openBlock(), createBlock(_component_va_select_input, {
                key: 0,
                source: "patientId",
                "error-messages": $options.patientIdErrors,
                reference: "patients",
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
                          createTextVNode("mdi-account-injury")
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
                      createTextVNode("mdi-account-injury")
                    ])),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_1$3, toDisplayString(item.raw.name), 1)
                ]),
                _: 1
              }, 8, ["error-messages"])) : createCommentVNode("", true),
              createVNode(_component_va_select_input, {
                source: "medicineId",
                "error-messages": $options.medicineIdErrors,
                reference: "medicines",
                clearable: ""
              }, {
                item: withCtx(({ props, item }) => [
                  createVNode(VListItem, normalizeProps(guardReactiveProps(props)), {
                    prepend: withCtx(() => [
                      createVNode(VIcon, {
                        color: "primary",
                        class: "mr-2"
                      }, {
                        default: withCtx(() => _cache[4] || (_cache[4] = [
                          createTextVNode("mdi-pill")
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
                    default: withCtx(() => _cache[5] || (_cache[5] = [
                      createTextVNode("mdi-pill")
                    ])),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_2$3, toDisplayString(item.raw.name), 1)
                ]),
                _: 1
              }, 8, ["error-messages"]),
              createVNode(VTextField, {
                variant: "outlined",
                density: "compact",
                color: "primary",
                label: "Intake Time",
                modelValue: $data.model.intakeTime,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.model.intakeTime = $event),
                type: "time",
                "error-messages": $options.intakeTimeErrors
              }, null, 8, ["modelValue", "error-messages"])
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
const Form = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const Form$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Form
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  props: ["resource", "title"],
  data() {
    return {
      filters: [
        { source: "patientId", type: "select", attributes: { reference: "patients", multiple: true } },
        { source: "medicineId", type: "select", attributes: { reference: "medicines", multiple: true } },
        { source: "gender", type: "select", attributes: { multiple: true } },
        { source: "ageGroup", type: "select", attributes: { multiple: true } },
        { source: "intakeTime", type: "select", attributes: { reference: "intakes", multiple: true } }
      ],
      fields: [
        {
          source: "patientId",
          type: "select",
          sortable: true
        },
        {
          source: "medicineId",
          type: "select",
          sortable: true
        },
        {
          source: "gender",
          type: "select",
          sortable: true
        },
        {
          source: "ageGroup",
          type: "select",
          sortable: true
        },
        {
          source: "intakeTime",
          type: "select",
          sortable: true
        }
      ]
    };
  },
  methods: {}
};
const _hoisted_1$2 = { class: "d-flex align-center gap-2" };
const _hoisted_2$2 = { class: "d-flex align-center gap-2" };
const _hoisted_3$2 = { class: "d-flex align-center gap-2" };
const _hoisted_4$2 = { class: "d-flex align-center gap-2" };
const _hoisted_5$2 = { class: "d-flex align-center gap-2" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_data_table_server = resolveComponent("va-data-table-server");
  const _component_va_list = resolveComponent("va-list");
  return openBlock(), createBlock(_component_va_list, {
    fields: $data.fields,
    filters: $data.filters,
    disableGlobalSearch: "",
    disableSettings: ""
  }, {
    default: withCtx(() => [
      createVNode(_component_va_data_table_server, {
        "disable-show": "",
        "disable-clone": ""
      }, {
        [`field.patientId`]: withCtx(({ item }) => [
          createBaseVNode("div", _hoisted_1$2, [
            createVNode(VIcon, {
              color: "primary",
              class: "mr-2"
            }, {
              default: withCtx(() => _cache[0] || (_cache[0] = [
                createTextVNode("mdi-account-injury")
              ])),
              _: 1
            }),
            createTextVNode(" " + toDisplayString(item.patientId.name), 1)
          ])
        ]),
        [`field.medicineId`]: withCtx(({ item }) => [
          createBaseVNode("div", _hoisted_2$2, [
            createVNode(VIcon, {
              color: "primary",
              class: "mr-2"
            }, {
              default: withCtx(() => _cache[1] || (_cache[1] = [
                createTextVNode("mdi-pill")
              ])),
              _: 1
            }),
            createTextVNode(" " + toDisplayString(item.medicineId.name), 1)
          ])
        ]),
        [`field.gender`]: withCtx(({ item }) => {
          var _a, _b;
          return [
            createBaseVNode("div", _hoisted_3$2, [
              createVNode(VIcon, {
                color: ((_a = item.gender) == null ? void 0 : _a.id) === "male" ? "blue" : "pink",
                class: "mr-2"
              }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createTextVNode(toDisplayString(((_a2 = item.gender) == null ? void 0 : _a2.id) === "male" ? "mdi-gender-male" : "mdi-gender-female"), 1)
                  ];
                }),
                _: 2
              }, 1032, ["color"]),
              createBaseVNode("span", null, toDisplayString((_b = item.gender) == null ? void 0 : _b.name), 1)
            ])
          ];
        }),
        [`field.ageGroup`]: withCtx(({ item }) => {
          var _a, _b;
          return [
            createBaseVNode("div", _hoisted_4$2, [
              createVNode(VIcon, {
                color: ((_a = item.ageGroup) == null ? void 0 : _a.id) === "infant" ? "warning" : "green",
                class: "mr-2"
              }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createTextVNode(toDisplayString(((_a2 = item.ageGroup) == null ? void 0 : _a2.id) === "infant" ? "mdi-baby-face-outline" : "mdi-human-male"), 1)
                  ];
                }),
                _: 2
              }, 1032, ["color"]),
              createBaseVNode("span", null, toDisplayString((_b = item.ageGroup) == null ? void 0 : _b.name), 1)
            ])
          ];
        }),
        [`field.intakeTime`]: withCtx(({ item }) => [
          createBaseVNode("div", _hoisted_5$2, [
            createVNode(VIcon, {
              color: "primary",
              class: "mr-2"
            }, {
              default: withCtx(() => _cache[2] || (_cache[2] = [
                createTextVNode("mdi-clock-outline")
              ])),
              _: 1
            }),
            createTextVNode(" " + toDisplayString(item.intakeTime.name), 1)
          ])
        ]),
        _: 2
      }, 1024)
    ]),
    _: 1
  }, 8, ["fields", "filters"]);
}
const List$4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const List$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: List$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  props: ["resource", "title"],
  data() {
    return {
      filters: [
        { source: "intakeTime", type: "select", attributes: { reference: "intakes", multiple: true } }
      ],
      fields: [
        {
          source: "patientId",
          type: "select",
          sortable: true
        },
        {
          source: "gender",
          type: "select",
          sortable: true
        },
        {
          source: "ageGroup",
          type: "select",
          sortable: true
        },
        {
          source: "intakeTime",
          type: "select",
          sortable: true
        },
        {
          source: "medicineId",
          type: "select",
          sortable: true
        }
      ]
    };
  },
  methods: {
    getRoute(id) {
      localStorage.setItem("path", this.$route.path);
      localStorage.setItem("listQuery", JSON.stringify(this.$route.query));
      return { name: "intakes_edit", params: { id } };
    }
  }
};
const _hoisted_1$1 = { class: "d-flex align-center gap-2" };
const _hoisted_2$1 = { class: "d-flex align-center gap-2" };
const _hoisted_3$1 = { class: "d-flex align-center gap-2" };
const _hoisted_4$1 = { class: "d-flex align-center gap-2" };
const _hoisted_5$1 = { class: "d-flex align-center gap-2" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_action_button = resolveComponent("va-action-button");
  const _component_va_data_table_server = resolveComponent("va-data-table-server");
  const _component_va_list = resolveComponent("va-list");
  return openBlock(), createBlock(_component_va_list, {
    fields: $data.fields,
    filters: $data.filters,
    disableGlobalSearch: "",
    disableCreate: ""
  }, {
    default: withCtx(() => [
      createVNode(_component_va_data_table_server, {
        "disable-show": "",
        "disable-create": "",
        "disable-edit": "",
        "disable-clone": "",
        "disable-delete": ""
      }, {
        [`field.patientId`]: withCtx(({ item }) => [
          createBaseVNode("div", _hoisted_1$1, [
            createVNode(VIcon, {
              color: "primary",
              class: "mr-2"
            }, {
              default: withCtx(() => _cache[0] || (_cache[0] = [
                createTextVNode("mdi-account-injury")
              ])),
              _: 1
            }),
            createTextVNode(" " + toDisplayString(item.patientId.name), 1)
          ])
        ]),
        [`field.gender`]: withCtx(({ item }) => {
          var _a, _b;
          return [
            createBaseVNode("div", _hoisted_2$1, [
              createVNode(VIcon, {
                color: ((_a = item.gender) == null ? void 0 : _a.id) === "male" ? "blue" : "pink",
                class: "mr-2"
              }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createTextVNode(toDisplayString(((_a2 = item.gender) == null ? void 0 : _a2.id) === "male" ? "mdi-gender-male" : "mdi-gender-female"), 1)
                  ];
                }),
                _: 2
              }, 1032, ["color"]),
              createBaseVNode("span", null, toDisplayString((_b = item.gender) == null ? void 0 : _b.name), 1)
            ])
          ];
        }),
        [`field.ageGroup`]: withCtx(({ item }) => {
          var _a, _b;
          return [
            createBaseVNode("div", _hoisted_3$1, [
              createVNode(VIcon, {
                color: ((_a = item.ageGroup) == null ? void 0 : _a.id) === "infant" ? "warning" : "green",
                class: "mr-2"
              }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createTextVNode(toDisplayString(((_a2 = item.ageGroup) == null ? void 0 : _a2.id) === "infant" ? "mdi-baby-face-outline" : "mdi-human-male"), 1)
                  ];
                }),
                _: 2
              }, 1032, ["color"]),
              createBaseVNode("span", null, toDisplayString((_b = item.ageGroup) == null ? void 0 : _b.name), 1)
            ])
          ];
        }),
        [`field.intakeTime`]: withCtx(({ item }) => [
          createBaseVNode("div", _hoisted_4$1, [
            createVNode(VIcon, {
              color: "primary",
              class: "mr-2"
            }, {
              default: withCtx(() => _cache[1] || (_cache[1] = [
                createTextVNode("mdi-clock-outline")
              ])),
              _: 1
            }),
            createTextVNode(" " + toDisplayString(item.intakeTime.name), 1)
          ])
        ]),
        [`field.medicineId`]: withCtx(({ item }) => [
          createBaseVNode("div", _hoisted_5$1, [
            createVNode(VIcon, {
              color: "primary",
              class: "mr-2"
            }, {
              default: withCtx(() => _cache[2] || (_cache[2] = [
                createTextVNode("mdi-pill")
              ])),
              _: 1
            }),
            createTextVNode(" " + toDisplayString(item.medicineId.name), 1)
          ])
        ]),
        "row.actions": withCtx(({ item }) => [
          createVNode(_component_va_action_button, {
            icon: "mdi-pencil",
            color: "primary",
            text: "",
            to: $options.getRoute(item.id)
          }, null, 8, ["to"])
        ]),
        _: 2
      }, 1024)
    ]),
    _: 1
  }, 8, ["fields", "filters"]);
}
const List$2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const List$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: List$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  props: ["resource", "title"],
  data() {
    return {
      filters: [
        { source: "intakeTime", type: "select", attributes: { reference: "intakes", multiple: true } }
      ],
      fields: [
        {
          source: "patientId",
          type: "select",
          sortable: true
        },
        {
          source: "gender",
          type: "select",
          sortable: true
        },
        {
          source: "ageGroup",
          type: "select",
          sortable: true
        },
        {
          source: "intakeTime",
          type: "select",
          sortable: true
        },
        {
          source: "medicineId",
          type: "select",
          sortable: true
        }
      ]
    };
  },
  methods: {
    getRoute(id) {
      localStorage.setItem("path", this.$route.path);
      localStorage.setItem("listQuery", JSON.stringify(this.$route.query));
      return { name: "intakes_edit", params: { id } };
    }
  }
};
const _hoisted_1 = { class: "d-flex align-center gap-2" };
const _hoisted_2 = { class: "d-flex align-center gap-2" };
const _hoisted_3 = { class: "d-flex align-center gap-2" };
const _hoisted_4 = { class: "d-flex align-center gap-2" };
const _hoisted_5 = { class: "d-flex align-center gap-2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_action_button = resolveComponent("va-action-button");
  const _component_va_data_table_server = resolveComponent("va-data-table-server");
  const _component_va_list = resolveComponent("va-list");
  return openBlock(), createBlock(_component_va_list, {
    fields: $data.fields,
    filters: $data.filters,
    disableGlobalSearch: "",
    disableCreate: ""
  }, {
    default: withCtx(() => [
      createVNode(_component_va_data_table_server, {
        "disable-show": "",
        "disable-create": "",
        "disable-clone": "",
        "disable-edit": "",
        "disable-delete": ""
      }, {
        [`field.patientId`]: withCtx(({ item }) => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(VIcon, {
              color: "primary",
              class: "mr-2"
            }, {
              default: withCtx(() => _cache[0] || (_cache[0] = [
                createTextVNode("mdi-account-injury")
              ])),
              _: 1
            }),
            createTextVNode(" " + toDisplayString(item.patientId.name), 1)
          ])
        ]),
        [`field.gender`]: withCtx(({ item }) => {
          var _a, _b;
          return [
            createBaseVNode("div", _hoisted_2, [
              createVNode(VIcon, {
                color: ((_a = item.gender) == null ? void 0 : _a.id) === "male" ? "blue" : "pink",
                class: "mr-2"
              }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createTextVNode(toDisplayString(((_a2 = item.gender) == null ? void 0 : _a2.id) === "male" ? "mdi-gender-male" : "mdi-gender-female"), 1)
                  ];
                }),
                _: 2
              }, 1032, ["color"]),
              createBaseVNode("span", null, toDisplayString((_b = item.gender) == null ? void 0 : _b.name), 1)
            ])
          ];
        }),
        [`field.ageGroup`]: withCtx(({ item }) => {
          var _a, _b;
          return [
            createBaseVNode("div", _hoisted_3, [
              createVNode(VIcon, {
                color: ((_a = item.ageGroup) == null ? void 0 : _a.id) === "infant" ? "warning" : "green",
                class: "mr-2"
              }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createTextVNode(toDisplayString(((_a2 = item.ageGroup) == null ? void 0 : _a2.id) === "infant" ? "mdi-baby-face-outline" : "mdi-human-male"), 1)
                  ];
                }),
                _: 2
              }, 1032, ["color"]),
              createBaseVNode("span", null, toDisplayString((_b = item.ageGroup) == null ? void 0 : _b.name), 1)
            ])
          ];
        }),
        [`field.intakeTime`]: withCtx(({ item }) => [
          createBaseVNode("div", _hoisted_4, [
            createVNode(VIcon, {
              color: "primary",
              class: "mr-2"
            }, {
              default: withCtx(() => _cache[1] || (_cache[1] = [
                createTextVNode("mdi-clock-outline")
              ])),
              _: 1
            }),
            createTextVNode(" " + toDisplayString(item.intakeTime.name), 1)
          ])
        ]),
        [`field.medicineId`]: withCtx(({ item }) => [
          createBaseVNode("div", _hoisted_5, [
            createVNode(VIcon, {
              color: "primary",
              class: "mr-2"
            }, {
              default: withCtx(() => _cache[2] || (_cache[2] = [
                createTextVNode("mdi-pill")
              ])),
              _: 1
            }),
            createTextVNode(" " + toDisplayString(item.medicineId.name), 1)
          ])
        ]),
        "row.actions": withCtx(({ item }) => [
          createVNode(_component_va_action_button, {
            icon: "mdi-pencil",
            color: "primary",
            text: "",
            to: $options.getRoute(item.id)
          }, null, 8, ["to"])
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
