import { _ as __vitePreload, a as _export_sfc } from "../../authentication/src/index.js";
import { r as resolveComponent, d as createBlock, o as openBlock, b as withCtx, a as createVNode, c as createElementBlock, V as VRow, j as VCol, q as VTabs, s as createCommentVNode, u as VTab, f as createTextVNode, t as toDisplayString, v as VWindow, x as VWindowItem, y as VDataTable, z as VBtn, m as VIcon, A as VCard, B as VCardTitle, C as VCardText, D as VDataTableServer, E as VTextField, G as VCardActions, H as VSpacer, I as VDialog, F as Fragment, J as maxLength, K as numeric, L as required, M as useVuelidate, N as provide } from "../../../vendor.js";
import { i as i18Config } from "../../i18n/src/index.js";
const config = {
  density: "compact",
  form: {
    disableGenerateUid: false,
    disableUnsavedFormDialog: false
  },
  list: {
    hideHeader: false,
    itemsPerPage: 10,
    itemsPerPageOptions: [10, 20, 50, 100, 200, -1],
    disableSettings: false,
    disableGlobalSearch: false,
    disableItemsPerPage: false
  },
  //
  // va-messages layout global settings
  // 
  snackbar: {
    error: {
      class: "mt-10 slide-in",
      color: "error",
      icon: "mdi-close-circle",
      location: "top",
      variant: "elevated",
      rounded: true,
      timeout: 7500,
      title: false,
      // "i18n.messages.error",
      visible: true
    },
    info: {
      class: "mt-10 slide-in",
      color: "blue",
      icon: "mdi-information",
      location: "top",
      variant: "elevated",
      rounded: true,
      timeout: 7500,
      title: false,
      // "i18n.messages.info",
      visible: true
    },
    success: {
      class: "mt-10 slide-in",
      color: "success",
      icon: "mdi-checkbox-marked-circle",
      location: "top",
      variant: "elevated",
      rounded: true,
      timeout: 7500,
      title: false,
      // "i18n.messages.success",
      visible: true
    },
    warning: {
      class: "mt-10 slide-in",
      color: "warning",
      icon: "mdi-alert-circle",
      location: "top",
      variant: "elevated",
      rounded: true,
      timeout: 7500,
      title: false,
      // "i18n.messages.warning",
      visible: true
    }
  }
};
const Utils = {
  methods: {
    generateInt(maxInt = null) {
      const min = 999;
      const max = maxInt ? maxInt : 9223372036854776e3;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    generateUid(uppercase = false) {
      if (config.form.disableGenerateUid) {
        return this.generateInt();
      }
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == "x" ? r : r & 3 | 8;
        let uuid = v.toString(16);
        return uppercase ? uuid.toUpperCase() : uuid;
      });
    },
    generateId(object) {
      if (config.form.disableGenerateUid) {
        return object.$route.name.slice(-6) == "create" ? this.generateInt() : object.id;
      }
      return object.$route.name.slice(-6) == "create" ? this.generateUid() : object.id;
    },
    generateKey(keyValue, index2 = 0) {
      if (Array.isArray(keyValue)) {
        let ids = [];
        for (let i = 0; i < keyValue.length; i++) {
          ids.push(keyValue[i].id);
        }
        return ids.join() + "-" + String(index2);
      }
      return keyValue + "-" + String(index2);
    },
    validateForm(object, form) {
      const fields = Object.keys(object.v$[form]);
      let invalid = false;
      fields.forEach(function(val) {
        if (val.charAt(0) != "$") {
          object.v$[form][val].$touch();
          if (object.v$[form][val].$invalid) {
            invalid = true;
          }
        }
      });
      return invalid;
    },
    dateAddMonth(date, numberOfMonth) {
      var currentDate = new Date(date);
      var newDate = currentDate.setMonth(currentDate.getMonth() + numberOfMonth);
      return new Date(newDate).toJSON().slice(0, 10);
    },
    dayDiff(firstDate, secondDate = null) {
      let date1 = new Date(firstDate);
      let date2 = /* @__PURE__ */ new Date();
      if (secondDate) {
        date2 = new Date(secondDate);
      }
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
      return diffDays;
    },
    monthDiff(firstDate, secondDate) {
      firstDate = new Date(firstDate);
      secondDate = new Date(secondDate);
      var totalMonth = Math.max(
        (secondDate.getFullYear() - secondDate.getFullYear()) * 12 + secondDate.getMonth() - firstDate.getMonth(),
        0
      );
      totalMonth = totalMonth + 1;
      return totalMonth;
    },
    arrayRange(start, stop, step = 1) {
      return Array.from({ length: (stop - start) / step + 1 }, (value, index2) => start + index2 * step);
    },
    arrayGroupBy(xs, key) {
      return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    },
    generatePassword(size) {
      let characters = "a-z,0-9,$";
      let charactersArray = characters.split(",");
      let CharacterSet = "";
      let password = "";
      if (charactersArray.indexOf("a-z") >= 0) {
        CharacterSet += "abcdefghijklmnpqrstuvwxyz";
      }
      if (charactersArray.indexOf("0-9") >= 0) {
        CharacterSet += "123456789";
      }
      if (charactersArray.indexOf("$") >= 0) {
        CharacterSet += "#@_-?";
      }
      for (let i = 0; i < size; i++) {
        password += CharacterSet.charAt(
          Math.floor(Math.random() * CharacterSet.length)
        );
      }
      return password;
    },
    getQueryParam(name, url = window.location.href) {
      name = name.replace(/[[]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return "";
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    },
    formatDateForDisplay(val, locale) {
      if (!val) {
        return;
      }
      const dateFormat = i18Config[locale].dateFormat;
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
let messages = {};
async function loadI18nMessages(name, modules) {
  for (const path in modules) {
    const lang = path.match(/\/([a-z]{2})\/index\.js$/)[1];
    if (!messages[lang]) {
      messages[lang] = {};
    }
    messages[lang][name.toLowerCase()] = (await modules[path]()).default;
  }
  const result = messages;
  messages = {};
  return result;
}
const i18n = { messages: {} };
const module = {
  name: "Authorization",
  version: "1.0.0",
  install: async (app) => {
    i18n.messages = await loadI18nMessages("authorization", /* @__PURE__ */ Object.assign({ "./i18n/en/index.js": () => __vitePreload(() => Promise.resolve().then(() => index$5), true ? void 0 : void 0), "./i18n/tr/index.js": () => __vitePreload(() => Promise.resolve().then(() => index$3), true ? void 0 : void 0) }));
    const { default: resources } = await __vitePreload(async () => {
      const { default: resources2 } = await Promise.resolve().then(() => index$1);
      return { default: resources2 };
    }, true ? void 0 : void 0);
    const { default: navigation } = await __vitePreload(async () => {
      const { default: navigation2 } = await Promise.resolve().then(() => _nav$1);
      return { default: navigation2 };
    }, true ? void 0 : void 0);
    const resourceComponents = {
      "AuthorizationRolesCreate": () => __vitePreload(() => Promise.resolve().then(() => Create$1), true ? void 0 : void 0),
      "AuthorizationRolesEdit": () => __vitePreload(() => Promise.resolve().then(() => Edit$1), true ? void 0 : void 0),
      "AuthorizationRolesForm": () => __vitePreload(() => Promise.resolve().then(() => Form$1), true ? void 0 : void 0),
      "AuthorizationRolesList": () => __vitePreload(() => Promise.resolve().then(() => List$3), true ? void 0 : void 0),
      "AuthorizationPermissionsList": () => __vitePreload(() => Promise.resolve().then(() => List$1), true ? void 0 : void 0)
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
const index$6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: module
}, Symbol.toStringTag, { value: "Module" }));
const roles$1 = {
  title: "Roles",
  menu: {
    label: "Roles"
  },
  tabs: {
    permissions: {
      label: "Permissions"
    },
    users: {
      label: "Users",
      dialog: {
        title: "Select User"
      }
    }
  },
  fields: {
    q: "Search",
    resource: "Resource",
    roleKey: "Rol Key",
    roleName: "Rol Name",
    roleLevel: "Rol Level",
    permissions: "Permissions",
    module: "Module",
    name: "Permission",
    route: "Route",
    action: "Action",
    method: "Method"
  },
  messages: {
    userAlreadyAssigned: "This user is already assigned to the current role"
  }
};
const permissions$1 = {
  title: "Permissions",
  menu: {
    label: "Permissions"
  },
  fields: {
    q: "Search",
    module: "Module",
    name: "Permission",
    resource: "Resource",
    action: "Action",
    route: "Route",
    method: "Method",
    actions: "Actions"
  }
};
const enums$1 = {
  action: [
    { id: "create", name: "Create" },
    { id: "delete", name: "Delete" },
    { id: "edit", name: "Edit" },
    { id: "list", name: "List" },
    { id: "show", name: "Show" }
  ],
  method: [
    { id: "POST", name: "POST" },
    { id: "GET", name: "GET" },
    { id: "PUT", name: "PUT" },
    { id: "DELETE", name: "DELETE" },
    { id: "PATCH", name: "PATCH" }
  ]
};
const index$4 = {
  menu: {
    label: "Authorization"
  },
  roles: roles$1,
  permissions: permissions$1,
  enums: enums$1
};
const index$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$4
}, Symbol.toStringTag, { value: "Module" }));
const roles = {
  title: "Roller",
  menu: {
    label: "Roller"
  },
  tabs: {
    permissions: {
      label: "Yetkiler"
    },
    users: {
      label: "Kullanıcılar",
      dialog: {
        title: "Kullanıcı Seç"
      }
    }
  },
  fields: {
    q: "Ara",
    resource: "Kaynak",
    roleKey: "Rol Anahtarı",
    roleName: "Rol Adı",
    roleLevel: "Rol Seviyesi",
    permissions: "Yetkiler",
    module: "Modül",
    name: "Yetki",
    route: "Rota",
    action: "Aksiyon",
    method: "Metot"
  },
  messages: {
    userAlreadyAssigned: "Bu kullanıcı geçerli rol için zaten atanmış"
  }
};
const permissions = {
  title: "Yetkiler",
  menu: {
    label: "Yetkiler"
  },
  fields: {
    q: "Ara",
    module: "Modül",
    name: "Yetki",
    resource: "Kaynak",
    action: "Aksiyon",
    route: "Rota",
    method: "Metot",
    actions: "İşlemler"
  }
};
const enums = {
  action: [
    { id: "create", name: "Create" },
    { id: "delete", name: "Delete" },
    { id: "edit", name: "Edit" },
    { id: "list", name: "List" },
    { id: "show", name: "Show" }
  ],
  method: [
    { id: "POST", name: "POST" },
    { id: "GET", name: "GET" },
    { id: "PUT", name: "PUT" },
    { id: "DELETE", name: "DELETE" },
    { id: "PATCH", name: "PATCH" }
  ]
};
const index$2 = {
  menu: {
    label: "Yetkilendirme"
  },
  roles,
  permissions,
  enums
};
const index$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$2
}, Symbol.toStringTag, { value: "Module" }));
const index = [
  {
    name: "roles",
    permissions: [
      { name: "admin", actions: ["create", "list", "edit", "delete", "show"] }
    ],
    actions: ["create", "list", "edit", "delete", "show"]
  },
  {
    name: "userRoles",
    permissions: [
      { name: "admin", actions: ["create", "list", "edit", "delete", "show"] }
    ],
    actions: ["create", "list", "edit", "delete", "show"]
  },
  {
    name: "permissions",
    permissions: [
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
        icon: "mdi-account-key-outline",
        text: t("authorization.menu.label"),
        order: 2,
        children: [
          {
            icon: "mdi-account-group-outline",
            text: t("authorization.roles.menu.label"),
            link: "/authorization/roles"
          },
          {
            icon: "mdi-key-star",
            text: t("authorization.permissions.menu.label"),
            link: "/authorization/permissions"
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
const _sfc_main$4 = {
  props: ["title", "item"]
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_authorization_roles_form = resolveComponent("authorization-roles-form");
  const _component_va_create_layout = resolveComponent("va-create-layout");
  return openBlock(), createBlock(_component_va_create_layout, { title: $props.title }, {
    default: withCtx(() => [
      createVNode(_component_authorization_roles_form, { item: $props.item }, null, 8, ["item"])
    ]),
    _: 1
  }, 8, ["title"]);
}
const Create = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const Create$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  props: ["id", "title", "item"]
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_authorization_roles_form = resolveComponent("authorization-roles-form");
  const _component_va_edit_layout = resolveComponent("va-edit-layout");
  return openBlock(), createBlock(_component_va_edit_layout, { title: $props.title }, {
    default: withCtx(() => [
      createVNode(_component_authorization_roles_form, {
        id: $props.id,
        item: $props.item
      }, null, 8, ["id", "item"])
    ]),
    _: 1
  }, 8, ["title"]);
}
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const Edit$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  props: ["id", "item"],
  mixins: [Utils],
  setup() {
    let vuelidate = useVuelidate();
    provide("v$", vuelidate);
    return { v$: vuelidate };
  },
  data() {
    return {
      q: null,
      tab: null,
      action: "edit",
      serverItems: [],
      totalItems: 0,
      loadingUsers: false,
      loadingRoleUsers: false,
      search: null,
      showAddUserDialog: false,
      itemsPerPage: 10,
      model: {
        id: null,
        key: null,
        name: null,
        level: null,
        rolePermissions: null,
        roleUsers: []
      },
      fields: [
        { source: "module" },
        { source: "name" },
        { source: "action" },
        { source: "route" },
        { source: "method" }
      ],
      usersHeaders: [
        { value: "firstname" },
        { value: "lastname" },
        { value: "email" },
        { value: "action", sortable: false }
      ]
    };
  },
  validations() {
    return {
      model: {
        key: {
          required,
          maxLength: maxLength(60)
        },
        name: {
          required,
          maxLength: maxLength(100)
        },
        level: {
          required,
          numeric,
          maxLength: maxLength(2)
        }
      }
    };
  },
  computed: {
    getDensity() {
      return config.density;
    },
    headers() {
      return [
        {
          key: "module",
          sortable: false
        },
        {
          key: "name",
          sortable: false
        },
        {
          key: "action",
          sortable: false
        },
        {
          key: "route",
          sortable: false
        },
        {
          key: "method",
          sortable: false
        }
      ];
    },
    keyErrors() {
      const errors = [];
      const field = "key";
      if (!this.v$["model"][field].$dirty) return errors;
      this.v$["model"][field].required.$invalid && errors.push(this.$t("i18n.v.text.required"));
      this.v$["model"][field].maxLength.$invalid && errors.push(this.$t("i18n.v.string.maxLength", { max: "60" }));
      return errors;
    },
    nameErrors() {
      const errors = [];
      const field = "name";
      if (!this.v$["model"][field].$dirty) return errors;
      this.v$["model"][field].required.$invalid && errors.push(this.$t("i18n.v.text.required"));
      this.v$["model"][field].maxLength.$invalid && errors.push(this.$t("i18n.v.string.maxLength", { max: "100" }));
      return errors;
    },
    levelErrors() {
      const errors = [];
      const field = "level";
      if (!this.v$["model"][field].$dirty) return errors;
      this.v$["model"][field].required.$invalid && errors.push(this.$t("i18n.v.text.required"));
      this.v$["model"][field].numeric.$invalid && errors.push(this.$t("i18n.v.number.numeric"));
      this.v$["model"][field].maxLength.$invalid && errors.push(this.$t("i18n.v.string.maxLength", { max: "2" }));
      return errors;
    }
  },
  created() {
    this.model.id = this.generateId(this);
    this.action = this.$route.name.split("_").pop();
    if (this.item) {
      this.model.roleUsers = this.item.roleUsers;
    }
  },
  watch: {
    tab(val) {
      (async () => {
        if (val == 2) {
          await this.loadRoleUsers({ page: 1, itemsPerPage: this.itemsPerPage, search: { q: this.q } });
        }
      })();
    },
    q(val) {
      this.q = val;
    }
  },
  methods: {
    async loadUsers({ page, itemsPerPage, sortBy }) {
      this.loadingUsers = "primary";
      this.fetchAllUsers({ page, itemsPerPage, sortBy, search: { q: this.q } }).then(({ items, total }) => {
        this.serverItems = items;
        this.totalItems = total;
        this.loadingUsers = false;
      });
    },
    async loadRoleUsers({ page, itemsPerPage, sortBy }) {
      this.loadingRoleUsers = "primary";
      this.fetchRoleUsers({ page, itemsPerPage, sortBy, search: { q: this.q } }).then(({ items, total }) => {
        this.model.roleUsers = items;
        this.loadingRoleUsers = false;
      });
    },
    async fetchRoleUsers({ page, itemsPerPage, sortBy, search }) {
      var _a;
      let response = null;
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      if (!search.q) {
        response = await this.$admin.http.get("/authorization/userRoles/findAllByPaging/" + this.model.id);
      } else {
        response = await this.$admin.http.get("/authorization/userRoles/findAllByPaging/" + this.model.id + "?q=" + search.q);
      }
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
    },
    async fetchAllUsers({ page, itemsPerPage, sortBy, search }) {
      var _a;
      let response = null;
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      if (!search.q) {
        response = await this.$admin.http.get("/users/findAllByPaging");
      } else {
        response = await this.$admin.http.get("/users/findAllByPaging?q=" + search.q);
      }
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
    },
    async addUser(user) {
      const alreadyExists = this.model.roleUsers.some((roleUser) => roleUser.id === user.id);
      if (alreadyExists) {
        this.$admin.message("info", this.$t("authorization.roles.messages.userAlreadyAssigned"));
        return;
      }
      const data = { userId: user.id, roleId: this.model.id };
      await this.$admin.http({ method: "PUT", url: "/authorization/userRoles/assign", data });
      this.loadRoleUsers({ page: 1, itemsPerPage: this.itemsPerPage, search: { q: this.q } });
    },
    async removeUser(userId) {
      const data = { userId, roleId: this.model.id };
      await this.$admin.http({ method: "PUT", url: "/authorization/userRoles/unassign", data });
      this.loadRoleUsers({ page: 1, itemsPerPage: this.itemsPerPage, search: { q: this.q } });
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_text_input = resolveComponent("va-text-input");
  const _component_va_check_list_input = resolveComponent("va-check-list-input");
  const _component_va_save_button = resolveComponent("va-save-button");
  const _component_va_form = resolveComponent("va-form");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_va_form, {
      id: $props.id,
      item: $props.item,
      modelValue: $data.model,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.model = $event)
    }, {
      default: withCtx(() => [
        createVNode(VRow, { "no-gutters": "" }, {
          default: withCtx(() => [
            createVNode(VCol, { sm: "3" }, {
              default: withCtx(() => [
                createVNode(_component_va_text_input, {
                  source: "key",
                  "error-messages": $options.keyErrors,
                  variant: "outlined"
                }, null, 8, ["error-messages"]),
                createVNode(_component_va_text_input, {
                  source: "name",
                  "error-messages": $options.nameErrors,
                  variant: "outlined"
                }, null, 8, ["error-messages"]),
                createVNode(_component_va_text_input, {
                  source: "level",
                  "error-messages": $options.levelErrors,
                  variant: "outlined"
                }, null, 8, ["error-messages"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(VTabs, {
          modelValue: $data.tab,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.tab = $event),
          variant: "outlined",
          "bg-color": "transparent",
          color: "primary",
          "align-tabs": "left"
        }, {
          default: withCtx(() => [
            createVNode(VTab, { value: "1" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("authorization.roles.tabs.permissions.label")), 1)
              ]),
              _: 1
            }),
            $data.action == "edit" ? (openBlock(), createBlock(VTab, {
              key: 0,
              value: "2"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("authorization.roles.tabs.users.label")), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(VWindow, {
          modelValue: $data.tab,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.tab = $event)
        }, {
          default: withCtx(() => [
            createVNode(VWindowItem, {
              eager: "",
              value: "1"
            }, {
              default: withCtx(() => [
                createVNode(VRow, { class: "mt-2" }, {
                  default: withCtx(() => [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "12",
                      md: "12",
                      lg: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_va_check_list_input, {
                          variant: "outlined",
                          source: "rolePermissions",
                          "group-by": "module",
                          "init-url": "/authorization/permissions/findAll",
                          headers: $options.headers,
                          fields: $data.fields,
                          "primary-key": "id",
                          "items-per-page": "25",
                          "group-header": _ctx.$t("authorization.roles.fields.module")
                        }, null, 8, ["headers", "fields", "group-header"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            $data.action == "edit" ? (openBlock(), createBlock(VWindowItem, {
              key: 0,
              eager: "",
              value: "2"
            }, {
              default: withCtx(() => [
                createVNode(VRow, { class: "mt-2" }, {
                  default: withCtx(() => [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "12",
                      md: "12",
                      lg: "6"
                    }, {
                      default: withCtx(() => [
                        $data.tab == 2 ? (openBlock(), createBlock(VDataTable, {
                          key: 0,
                          density: $options.getDensity,
                          items: $data.model.roleUsers,
                          headers: $data.usersHeaders
                        }, {
                          top: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, { class: "d-flex justify-end" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      color: "primary",
                                      onClick: _cache[1] || (_cache[1] = ($event) => $data.showAddUserDialog = true),
                                      icon: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, null, {
                                          default: withCtx(() => _cache[8] || (_cache[8] = [
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
                          "item.action": withCtx(({ item }) => [
                            createVNode(VBtn, {
                              icon: "",
                              variant: "text",
                              onClick: ($event) => $options.removeUser(item.id)
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { size: "xsmall" }, {
                                  default: withCtx(() => _cache[9] || (_cache[9] = [
                                    createTextVNode("mdi-delete")
                                  ])),
                                  _: 1
                                })
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 1
                        }, 8, ["density", "items", "headers"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(_component_va_save_button)
      ]),
      _: 1
    }, 8, ["id", "item", "modelValue"]),
    createVNode(VDialog, {
      modelValue: $data.showAddUserDialog,
      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.showAddUserDialog = $event),
      "max-width": "600px"
    }, {
      default: withCtx(() => [
        createVNode(VCard, null, {
          default: withCtx(() => [
            createVNode(VCardTitle, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("authorization.roles.tabs.users.dialog.title")), 1)
              ]),
              _: 1
            }),
            createVNode(VCardText, null, {
              default: withCtx(() => [
                createVNode(VDataTableServer, {
                  density: $options.getDensity,
                  "items-per-page": $data.itemsPerPage,
                  "onUpdate:itemsPerPage": _cache[5] || (_cache[5] = ($event) => $data.itemsPerPage = $event),
                  headers: $data.usersHeaders,
                  items: $data.serverItems,
                  "items-length": $data.totalItems,
                  loading: _ctx.loading,
                  search: $data.q,
                  "item-value": "name",
                  "onUpdate:options": $options.loadUsers
                }, {
                  "item.action": withCtx(({ item }) => [
                    createVNode(VBtn, {
                      icon: "",
                      variant: "text",
                      color: "primary",
                      onClick: ($event) => $options.addUser(item)
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, null, {
                          default: withCtx(() => _cache[10] || (_cache[10] = [
                            createTextVNode("mdi-plus")
                          ])),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  top: withCtx(() => [
                    createVNode(VTextField, {
                      density: "compact",
                      variant: "outlined",
                      "append-inner-icon": "mdi-magnify",
                      modelValue: $data.q,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.q = $event),
                      class: "mt-2",
                      color: "primary",
                      label: _ctx.$t("i18n.actions.q"),
                      "hide-details": "",
                      clearable: ""
                    }, null, 8, ["modelValue", "label"])
                  ]),
                  _: 1
                }, 8, ["density", "items-per-page", "headers", "items", "items-length", "loading", "search", "onUpdate:options"])
              ]),
              _: 1
            }),
            createVNode(VCardActions, null, {
              default: withCtx(() => [
                createVNode(VSpacer),
                createVNode(VBtn, {
                  color: "grey",
                  onClick: _cache[6] || (_cache[6] = ($event) => $data.showAddUserDialog = false)
                }, {
                  default: withCtx(() => _cache[11] || (_cache[11] = [
                    createTextVNode("Kapat")
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
    }, 8, ["modelValue"])
  ], 64);
}
const Form = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const Form$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Form
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  props: ["resource", "title"],
  data() {
    return {
      filters: [],
      fields: [
        {
          source: "name",
          sortable: true
        },
        {
          source: "key",
          sortable: true
        },
        {
          source: "level",
          sortable: true
        }
      ]
    };
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_data_table_server = resolveComponent("va-data-table-server");
  const _component_va_list = resolveComponent("va-list");
  return openBlock(), createBlock(_component_va_list, {
    fields: $data.fields,
    filters: $data.filters
  }, {
    default: withCtx(() => [
      createVNode(_component_va_data_table_server, {
        "disable-show": "",
        "disable-actions": false
      })
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
  inject: [],
  provide() {
    return {
      validations: {
        form: {
          module: {
            required
          },
          name: {
            required
          },
          route: {
            required
          },
          action: {
            required
          },
          method: {
            required
          }
        }
      },
      errors: {
        moduleErrors: (v$) => {
          const errors = [];
          if (!v$["form"].module.$dirty) return errors;
          v$["form"].module.required.$invalid && errors.push(this.$t("i18n.v.text.required"));
          return errors;
        },
        nameErrors: (v$) => {
          const errors = [];
          if (!v$["form"].name.$dirty) return errors;
          v$["form"].name.required.$invalid && errors.push(this.$t("i18n.v.text.required"));
          return errors;
        },
        actionErrors: (v$) => {
          const errors = [];
          if (!v$["form"].action.$dirty) return errors;
          v$["form"].action.required.$invalid && errors.push(this.$t("i18n.v.text.required"));
          return errors;
        },
        routeErrors: (v$) => {
          const errors = [];
          if (!v$["form"].route.$dirty) return errors;
          v$["form"].route.required.$invalid && errors.push(this.$t("i18n.v.text.required"));
          return errors;
        },
        methodErrors: (v$) => {
          const errors = [];
          if (!v$["form"].method.$dirty) return errors;
          v$["form"].method.required.$invalid && errors.push(this.$t("i18n.v.text.required"));
          return errors;
        }
      }
    };
  },
  data() {
    return {
      groupBy: [{ key: "module" }],
      selected: [],
      filters: [],
      fields: [
        {
          source: "data-table-group",
          label: this.$t("i18n.datatable.group"),
          sortable: false
        },
        {
          source: "module",
          sortable: true
        },
        {
          source: "name",
          sortable: true
        },
        {
          source: "action",
          type: "select",
          sortable: true
        },
        {
          source: "route",
          sortable: true
        },
        {
          source: "method",
          type: "select",
          sortable: true
        }
      ]
    };
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
          "group-by": $data.groupBy,
          "row-create": "",
          "row-clone": "",
          "row-edit": "",
          "disable-edit": "",
          "disable-show": "",
          "disable-clone": "",
          "disable-create-redirect": ""
        }, null, 8, ["group-by"])
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
  Utils as U,
  index$6 as a,
  config as c,
  i18n as i,
  loadI18nMessages as l
};
