import { _ as __vitePreload, a as _export_sfc } from "../../authentication/src/index.js";
import { l as loadI18nMessages, i as i18n, c as config } from "../../authorization/src/index.js";
import { r as resolveComponent, d as createBlock, o as openBlock, b as withCtx, a as createVNode, V as VRow, j as VCol, s as createCommentVNode, y as VDataTable, z as VBtn, m as VIcon, f as createTextVNode, h as createBaseVNode, t as toDisplayString, I as VDialog, A as VCard, B as VCardTitle, G as VCardActions, L as required, M as useVuelidate, N as provide, aN as VContainer, c as createElementBlock, F as Fragment, i as renderList, aO as VDivider, C as VCardText } from "../../../vendor.js";
import "../../i18n/src/index.js";
const module = {
  name: "Patients",
  version: "1.0.0",
  install: async (app) => {
    i18n.messages = await loadI18nMessages("patients", /* @__PURE__ */ Object.assign({ "./i18n/en/index.js": () => __vitePreload(() => Promise.resolve().then(() => index$5), true ? void 0 : void 0), "./i18n/tr/index.js": () => __vitePreload(() => Promise.resolve().then(() => index$3), true ? void 0 : void 0) }));
    const { default: resources } = await __vitePreload(async () => {
      const { default: resources2 } = await Promise.resolve().then(() => index$1);
      return { default: resources2 };
    }, true ? void 0 : void 0);
    const { default: navigation } = await __vitePreload(async () => {
      const { default: navigation2 } = await Promise.resolve().then(() => _nav$1);
      return { default: navigation2 };
    }, true ? void 0 : void 0);
    const resourceComponents = {
      "PatientsCreate": () => __vitePreload(() => Promise.resolve().then(() => Create$1), true ? void 0 : void 0),
      "PatientsEdit": () => __vitePreload(() => Promise.resolve().then(() => Edit$1), true ? void 0 : void 0),
      "PatientsForm": () => __vitePreload(() => Promise.resolve().then(() => Form$1), true ? void 0 : void 0),
      "PatientsList": () => __vitePreload(() => Promise.resolve().then(() => List$1), true ? void 0 : void 0)
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
  ]
};
const patients$1 = {
  title: "Patients",
  menu: {
    label: "Patients"
  },
  fields: {
    q: "Search",
    expand: "",
    name: "Name",
    userId: "User",
    gender: "Gender",
    ageGroup: "Age Group"
  },
  labels: {
    editIntake: "Edit Intake"
  },
  buttons: {
    expand: {
      label: "Intakes"
    }
  }
};
const index$4 = {
  menu: {
    label: "Patients"
  },
  enums: enums$1,
  patients: patients$1,
  messages: {}
};
const index$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$4
}, Symbol.toStringTag, { value: "Module" }));
const enums = {
  gender: [
    { id: "male", name: "Erkek" },
    { id: "female", name: "Kadın" }
  ],
  ageGroup: [
    { id: "infant", name: "Bebek" },
    { id: "adult", name: "Yetişkin" }
  ]
};
const patients = {
  title: "Patients",
  menu: {
    label: "Patients"
  },
  fields: {
    q: "Search",
    expand: "",
    name: "Name",
    userId: "User",
    gender: "Gender",
    ageGroup: "Age Group"
  },
  labels: {
    editIntake: "Edit Intake"
  },
  buttons: {
    expand: {
      label: "Intakes"
    }
  }
};
const index$2 = {
  menu: {
    label: "Patients"
  },
  enums,
  patients,
  messages: {}
};
const index$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$2
}, Symbol.toStringTag, { value: "Module" }));
const index = [
  {
    name: "patients",
    standalone: true,
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
        icon: "mdi-account-injury-outline",
        text: t("patients.menu.label"),
        link: "/patients?sortBy=name&sortDesc=false",
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
  const _component_patients_form = resolveComponent("patients-form");
  const _component_va_create_layout = resolveComponent("va-create-layout");
  return openBlock(), createBlock(_component_va_create_layout, { title: $props.title }, {
    default: withCtx(() => [
      createVNode(_component_patients_form, { item: $props.item }, null, 8, ["item"])
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
  const _component_patients_form = resolveComponent("patients-form");
  const _component_va_edit_layout = resolveComponent("va-edit-layout");
  return openBlock(), createBlock(_component_va_edit_layout, { title: $props.title }, {
    default: withCtx(() => [
      createVNode(_component_patients_form, {
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
        userId: {
          required
        },
        gender: {
          required
        },
        ageGroup: {
          required
        }
      }
    };
  },
  async created() {
    if (this.id) {
      await this.loadCurrentIntakes({ page: 1, itemsPerPage: this.itemsPerPage, search: { q: this.q } });
    }
  },
  data() {
    return {
      q: null,
      deleteDialog: false,
      selectedIntakeId: null,
      serverItems: [],
      totalItems: 0,
      loadingIntakes: false,
      itemsPerPage: 10,
      model: {
        id: null,
        userId: null,
        gender: null,
        ageGroup: null,
        intakes: []
      },
      intakeHeaders: [
        { title: "", key: "medicineId", sortable: false },
        { title: "", key: "intakeTime", sortable: false },
        { title: "", key: "action", sortable: false }
      ]
    };
  },
  computed: {
    getDensity() {
      return config.density;
    },
    nameErrors() {
      const errors = [];
      if (!this.v$["model"].name.$dirty) return errors;
      this.v$["model"].name.required.$invalid && errors.push(this.$t("i18n.v.text.required"));
      this.v$["model"].name.minLength.$invalid && errors.push(this.$t("i18n.v.string.minLength", { min: "2" }));
      return errors;
    },
    userIdErrors() {
      const errors = [];
      if (!this.v$["model"].userId.$dirty) return errors;
      this.v$["model"].userId.required.$invalid && errors.push(this.$t("i18n.v.text.required"));
      return errors;
    },
    genderErrors() {
      const errors = [];
      if (!this.v$["model"].gender.$dirty) return errors;
      this.v$["model"].gender.required.$invalid && errors.push(this.$t("i18n.v.text.required"));
      return errors;
    },
    ageGroupErrors() {
      const errors = [];
      if (!this.v$["model"].ageGroup.$dirty) return errors;
      this.v$["model"].ageGroup.required.$invalid && errors.push(this.$t("i18n.v.text.required"));
      return errors;
    }
  },
  methods: {
    openDeleteDialog(id) {
      this.selectedIntakeId = id;
      this.deleteDialog = true;
    },
    cancelDelete() {
      this.selectedIntakeId = null;
      this.deleteDialog = false;
    },
    confirmDeleteIntake() {
      if (this.selectedIntakeId) {
        this.deleteIntake(this.selectedIntakeId);
      }
      this.deleteDialog = false;
      this.selectedIntakeId = null;
    },
    addIntake() {
      this.$router.push(
        {
          name: "intakes_create",
          query: { patientId: this.id }
        }
      );
    },
    editIntake(id) {
      this.$router.push("/intakes/" + id + "/edit?patientId=" + this.id);
    },
    async deleteIntake(id) {
      await this.$admin.http.delete("/intakes/delete/" + id);
      await this.loadCurrentIntakes({ page: 1, itemsPerPage: this.itemsPerPage, search: { q: this.q } });
    },
    async loadCurrentIntakes({ page, itemsPerPage, sortBy }) {
      this.loadingIntakes = "primary";
      this.fetchCurrentIntakes({ page, itemsPerPage, sortBy, search: { q: null } }).then(({ items, total }) => {
        this.model.intakes = items;
        this.loadingIntakes = false;
      });
    },
    async fetchCurrentIntakes({ page, itemsPerPage, sortBy, search }) {
      var _a;
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const response = await this.$admin.http.get("/intakes/findAllById/" + this.id);
      const items = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.data;
      if (sortBy && sortBy.length) {
        const sortKey = sortBy[0].key;
        const sortOrder = sortBy[0].order;
        items.sort((a, b) => {
          const aValue = a[sortKey];
          const bValue = b[sortKey];
          return sortOrder === "desc" ? bValue - aValue : aValue - bValue;
        });
      }
      const paginated = items.slice(start, end === -1 ? void 0 : end);
      return { items: paginated, total: items.length };
    }
  }
};
const _hoisted_1$1 = { class: "d-flex align-center gap-2" };
const _hoisted_2$1 = { class: "d-flex align-center gap-2" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
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
              createVNode(_component_va_select_input, {
                source: "userId",
                reference: "users",
                "error-messages": $options.userIdErrors,
                clearable: ""
              }, null, 8, ["error-messages"]),
              createVNode(_component_va_select_input, {
                source: "gender",
                "error-messages": $options.genderErrors,
                clearable: ""
              }, null, 8, ["error-messages"]),
              createVNode(_component_va_select_input, {
                source: "ageGroup",
                "error-messages": $options.ageGroupErrors,
                clearable: ""
              }, null, 8, ["error-messages"]),
              _ctx.$route.name == "patients_edit" ? (openBlock(), createBlock(VRow, {
                key: 0,
                class: "mt-2"
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "12",
                    md: "12",
                    lg: "12"
                  }, {
                    default: withCtx(() => [
                      createVNode(VDataTable, {
                        density: $options.getDensity,
                        items: $data.model.intakes,
                        headers: $data.intakeHeaders
                      }, {
                        top: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, null, {
                                default: withCtx(() => _cache[2] || (_cache[2] = [
                                  createBaseVNode("h2", { class: "text-h6" }, "Intakes", -1)
                                ])),
                                _: 1
                              }),
                              createVNode(VCol, { class: "d-flex justify-end" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    color: "primary",
                                    onClick: $options.addIntake,
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
                                  }, 8, ["onClick"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        [`item.medicineId`]: withCtx(({ item }) => [
                          createBaseVNode("div", _hoisted_1$1, [
                            createVNode(VIcon, {
                              color: "primary",
                              class: "mr-2"
                            }, {
                              default: withCtx(() => _cache[4] || (_cache[4] = [
                                createTextVNode("mdi-pill")
                              ])),
                              _: 1
                            }),
                            createTextVNode(" " + toDisplayString(item.medicineId.name), 1)
                          ])
                        ]),
                        [`item.intakeTime`]: withCtx(({ item }) => [
                          createBaseVNode("div", _hoisted_2$1, [
                            createVNode(VIcon, {
                              color: "primary",
                              class: "mr-2"
                            }, {
                              default: withCtx(() => _cache[5] || (_cache[5] = [
                                createTextVNode("mdi-clock-outline")
                              ])),
                              _: 1
                            }),
                            createTextVNode(" " + toDisplayString(item.intakeTime.name), 1)
                          ])
                        ]),
                        "item.action": withCtx(({ item }) => [
                          createVNode(VBtn, {
                            icon: "",
                            variant: "text",
                            onClick: ($event) => $options.editIntake(item.id)
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { size: "xsmall" }, {
                                default: withCtx(() => _cache[6] || (_cache[6] = [
                                  createTextVNode("mdi-pencil")
                                ])),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          createVNode(VBtn, {
                            icon: "",
                            variant: "text",
                            onClick: ($event) => $options.openDeleteDialog(item.id)
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: "xsmall",
                                color: "red-accent-4"
                              }, {
                                default: withCtx(() => _cache[7] || (_cache[7] = [
                                  createTextVNode("mdi-delete")
                                ])),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                      }, 1032, ["density", "items", "headers"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(VDialog, {
                modelValue: $data.deleteDialog,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.deleteDialog = $event),
                "max-width": "600"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, { class: "text-h6" }, {
                        default: withCtx(() => _cache[8] || (_cache[8] = [
                          createTextVNode(" Are you sure this intake will be deleted permanently ? ")
                        ])),
                        _: 1
                      }),
                      createVNode(VCardActions, { class: "justify-end" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            text: "",
                            onClick: $options.cancelDelete
                          }, {
                            default: withCtx(() => _cache[9] || (_cache[9] = [
                              createTextVNode("Cancel")
                            ])),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "red-darken-2",
                            text: "",
                            onClick: $options.confirmDeleteIntake
                          }, {
                            default: withCtx(() => _cache[10] || (_cache[10] = [
                              createTextVNode("Delete")
                            ])),
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
      expandedRows: [],
      filters: [],
      fields: [
        {
          source: "expand",
          // genişletme butonu
          title: "this.$t('patients.patients.fields.expand')",
          // başlık gösterme
          width: "50px"
        },
        {
          source: "name",
          sortable: true
        },
        {
          source: "gender",
          sortable: true
        },
        {
          source: "ageGroup",
          sortable: true
        }
      ]
    };
  },
  methods: {
    editIntake(intake) {
      localStorage.setItem("path", this.$route.path);
      localStorage.setItem("listQuery", JSON.stringify(this.$route.query));
      this.$router.push("/intakes/" + intake.id + "/edit");
    },
    getImageUrl(logoPath) {
      if (!logoPath) {
        return;
      }
      const parts = logoPath.split("/").filter(Boolean);
      const dir = parts[1];
      const filename = parts[2];
      return `https://pmm.oloma.dev/api/files?dir=${dir}&filename=${filename}&thumb=50x25`;
    },
    // isRowExpanded(item) {
    //   return this.expandedRows.includes(item.id)
    // },
    toggleRowExpand(item) {
      const index2 = this.expandedRows.indexOf(item.id);
      if (index2 === -1) {
        this.expandedRows.push(item.id);
      } else {
        this.expandedRows.splice(index2, 1);
      }
    }
  }
};
const _hoisted_1 = { class: "d-flex align-center gap-2" };
const _hoisted_2 = { class: "d-flex align-center gap-2" };
const _hoisted_3 = { class: "d-flex align-center gap-2" };
const _hoisted_4 = ["colspan"];
const _hoisted_5 = { class: "d-flex align-center gap-3" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_data_table_server = resolveComponent("va-data-table-server");
  const _component_va_list = resolveComponent("va-list");
  return openBlock(), createBlock(_component_va_list, {
    fields: $data.fields,
    filters: $data.filters,
    disableSettings: ""
  }, {
    default: withCtx(() => [
      createVNode(_component_va_data_table_server, {
        "disable-show": "",
        "disable-clone": "",
        "show-expand": true,
        "expand-on-click": true
      }, {
        [`field.name`]: withCtx(({ item }) => [
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
            createTextVNode(" " + toDisplayString(item.name), 1)
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
        "expanded-row": withCtx(({ columns, item }) => [
          createBaseVNode("tr", null, [
            createBaseVNode("td", {
              colspan: columns.length
            }, [
              item.intakes ? (openBlock(), createBlock(VContainer, {
                key: 0,
                fluid: ""
              }, {
                default: withCtx(() => [
                  createVNode(VRow, { dense: "" }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(item.intakes, (intake, index2) => {
                        return openBlock(), createBlock(VCol, {
                          cols: "12",
                          key: index2
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, {
                              class: "mb-4",
                              "max-width": "400"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, { class: "d-flex justify-space-between align-center text-subtitle-2" }, {
                                  default: withCtx(() => [
                                    createBaseVNode("div", _hoisted_5, [
                                      createBaseVNode("span", null, [
                                        createBaseVNode("strong", null, toDisplayString(intake.medicine.name), 1)
                                      ])
                                    ]),
                                    createVNode(VBtn, {
                                      size: "x-small",
                                      color: "primary",
                                      onClick: ($event) => $options.editIntake(intake)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("patients.patients.labels.editIntake")), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VDivider),
                                createVNode(VCardText, { class: "text-body-2" }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, { dense: "" }, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "6" }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, null, {
                                              default: withCtx(() => _cache[1] || (_cache[1] = [
                                                createTextVNode("mdi-clock-outline")
                                              ])),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "6" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(intake.intakeTime), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VRow, { dense: "" }, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "6" }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, null, {
                                              default: withCtx(() => _cache[2] || (_cache[2] = [
                                                createTextVNode("mdi-baby-face-outline")
                                              ])),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "6" }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              color: intake.medicine.canBeUsedForInfants ? "green" : "red"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(intake.medicine.canBeUsedForInfants ? "mdi-check" : "mdi-close"), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)) : createCommentVNode("", true)
            ], 8, _hoisted_4)
          ])
        ]),
        [`field.expand`]: withCtx(({ item }) => [
          createVNode(VBtn, {
            "prepend-icon": "mdi-pill",
            "append-icon": "mdi-chevron-down",
            text: _ctx.$t("patients.patients.buttons.expand.label"),
            onClick: ($event) => $options.toggleRowExpand(item),
            class: "text-none",
            color: "medium-emphasis",
            size: "small",
            variant: "text",
            border: "",
            slim: ""
          }, null, 8, ["text", "onClick"])
        ]),
        "item.data-table-expand": withCtx(({ item }) => [
          createVNode(VBtn, {
            "prepend-icon": "mdi-pill",
            "append-icon": "mdi-chevron-down",
            text: _ctx.$t("patients.patients.buttons.expand.label"),
            onClick: ($event) => $options.toggleRowExpand(item),
            class: "text-none",
            color: "medium-emphasis",
            size: "small",
            variant: "text",
            border: "",
            slim: ""
          }, null, 8, ["text", "onClick"])
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
