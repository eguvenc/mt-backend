import { av as defineStore, r as resolveComponent, d as createBlock, o as openBlock, b as withCtx, s as createCommentVNode, h as createBaseVNode, a as createVNode, aI as VMenu, A as VCard, aD as VList, l as VListItem, aE as VListItemTitle, f as createTextVNode, t as toDisplayString, aP as VListItemSubtitle, aO as VDivider, C as VCardText, c as createElementBlock, F as Fragment, i as renderList, m as VIcon, z as VBtn, aH as mergeProps, aF as VAvatar, aG as VImg, aQ as VApp, aR as storeToRefs, aS as useDisplay, V as VRow, j as VCol, J as maxLength, aM as minLength, aT as email, L as required, M as useVuelidate, N as provide, aU as VChip, p as VTable, aV as VForm, aW as withModifiers, aX as sameAs, aN as VContainer, aY as normalizeStyle, aZ as VLayout, a_ as resolveDynamicComponent, a$ as VAlert, k as VSheet, E as VTextField, aL as useRoute, b0 as hcaptcha, B as VCardTitle } from "../../../vendor.js";
import { c as cookies, T as Translation, a as isEmpty, L as LanguageSwitcher } from "../../i18n/src/index.js";
import { a as _export_sfc, _ as __vitePreload } from "../../authentication/src/index.js";
import { l as loadI18nMessages, i as i18n, U as Utils } from "../../authorization/src/index.js";
const auth = defineStore(
  "auth",
  {
    state: () => {
      return {
        response: null,
        provider: null
      };
    },
    getters: {
      getEmail() {
        if (this.response && this.provider["getEmail"]) {
          return this.provider.getEmail(this.response);
        }
      },
      getFullname() {
        if (this.response && this.provider["getFullname"]) {
          return this.provider.getFullname(this.response);
        }
      },
      getAvatar() {
        if (this.response && this.provider["getAvatar"]) {
          return this.provider.getAvatar(this.response);
        }
      },
      getId() {
        if (this.response && this.provider["getId"]) {
          return this.provider.getId(this.response);
        }
      },
      getPermissions() {
        if (this.response && this.provider["getPermissions"]) {
          return this.provider.getPermissions(this.response) || [];
        }
        return [];
      }
    },
    actions: {
      /**
       * Initialize with given auth provider
       */
      init(provider) {
        this.provider = provider;
      },
      /**
       * Server login with given credentials
       * checkAuth action will set fresh user infos on store automatically
       */
      async login(credentials) {
        let response = await this.provider.login(credentials);
        if (response && response["data"] && response["data"]["data"]) {
          this.response = response["data"]["data"];
        }
        return Promise.resolve(response);
      },
      /**
       * Server logout
       */
      async logout() {
        let response = await this.provider.logout();
        return Promise.resolve(response);
      },
      /**
       * Check valid auth on target route server by retrieving user infos
       * Set fresh user infos on store
       * Called after each URL navigation
       */
      async checkAuth() {
        if (!cookies.get("token")) {
          this.response = null;
          return false;
        }
        try {
          let response = await this.provider.checkAuth();
          if (response) {
            this.response = response.data;
          }
          return response.data;
        } catch (e) {
          this.response = null;
        }
      },
      /**
       * Check API error status
       * Called after each API error (4xx, 5xx)
       * Do automatic logout if reject promise returned
       */
      async checkError(error) {
        try {
          await this.provider.checkError(error);
        } catch (e) {
          await this.logout();
        }
      }
    }
  }
);
const config = {
  //
  // va-app-bar layout default avatar
  // 
  avatar: {
    base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAAAAAB3tzPbAAACOUlEQVR4Ae3aCQrrIBRG4e5/Tz+CBAlIkIAECUjoSt48z/GZeAvnrMCvc6/38XzxAAAAYC4AAAAAAAAAAAAAAAAAAAAAAAAAAAAMCAAAAAAAAAAAAAAAAPsagz4V4rq/FmCLTj/k4vYqgCN5/TKfjlcAJKff5pJ5QPH6Y77YBiz6a4thQJ30D03VKmB3+qfcbhOwO+l+waP/+VsEBgDV6USumgNMOtVkDbDoZIstQNHpiimA1+m8JUBSQ8kO4HBqyB1mAElNJTMAr6a8FcCmxjYjgKjGohGAU2POBmBXc7sJwKrmVhOAqOaiCUBQc8EEQO0JwPMB4ADASwhAe3yR8VPiP3/M8XOaPzQd/lLyp56xSuvnUGK0yHC313idCw6umNov+bhm5aK7fdWAZQ/WbdoXnlg5Y+mvfe2SxVdWj20FAAAAAAAAAAAAwFQAAJSS0hwmfVMIc0qlmAfsOQWvP+RDyrtNQM1L0D8WllxNAWqOXifzMVcbgG3xaswv22jAFp3a6zFteYw8fQ9DM6Amr275VG8GlFmdm8uNgDzpgqZ8EyB7XZTPNwDKpAubysWAOuvi5nolYHW6PLdeBjiCbikc1wCK0025cgUg68Zyf0DUrcXegKibi30Bq25v7QnYNKCtH+BwGpA7ugFmDWnuBSgaVOkECBpU6AOoGlbtAlg1rLULIGhYoQvAaViuC0AD6wE4Xh1QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA194CuqC6onikxXwAAAAASUVORK5CYII="
  }
};
const logo$1 = "data:image/png;base64,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";
const _sfc_main$b = {
  name: "App",
  inject: [],
  setup() {
    const { lgAndUp } = useDisplay();
    return { lgAndUp };
  },
  data() {
    return {
      logo: logo$1,
      avatar: null,
      avatarExists: false,
      email: null,
      fullname: null,
      authenticatedUser: null
    };
  },
  async created() {
    const lang = Translation.guessDefaultLocale();
    if (lang && Translation.supportedLocales.includes(lang)) {
      await Translation.switchLanguage(lang);
    }
    this.authenticatedUser = await this.$store.getModule("auth").checkAuth();
    if (!this.authenticatedUser) {
      this.$router.push({ name: "users_login" });
    } else {
      this.email = this.$store.getModule("auth").getEmail;
      this.fullname = this.$store.getModule("auth").getFullname;
      this.$admin.http.post("/auth/session", { update: 1 });
    }
    let base64Image = this.$store.getModule("auth").getAvatar;
    if (base64Image == "undefined" || base64Image == "null" || isEmpty(base64Image)) {
      this.avatar = config.avatar.base64;
      this.avatarExists = false;
    } else {
      this.avatarExists = true;
      this.avatar = base64Image;
    }
  },
  computed: {
    getNavbarKey() {
      return this.$store.navbarKey + "_" + this.$store.getLocale;
    },
    getCurrentLocale() {
      const { locale } = storeToRefs(this.$store);
      return locale;
    },
    getAvatar() {
      return this.avatar;
    },
    getEmail() {
      return this.email;
    },
    getFullname() {
      return this.fullname;
    },
    getHeaderMenu() {
      return [];
    },
    getProfileMenu() {
      return [
        {
          icon: "mdi-account",
          text: this.$t("users.myAccount.menu.label"),
          link: "/users/myAccount"
        },
        {
          icon: "mdi-key",
          text: this.$t("users.changePassword.menu.label"),
          link: "/users/changePassword"
        },
        {
          icon: "mdi-logout",
          text: this.$t("users.logout.menu.label"),
          logout: true
        }
      ];
    },
    getFooterMenu() {
      return [
        // {
        //   href: link,
        //   text: this.$t("menu.terms"),
        // },
      ];
    }
  },
  methods: {
    async logout() {
      this.$store.getModule("api").setLoading(true);
      await this.$store.getModule("auth").logout();
      this.$router.push({ name: "users_login" });
    }
  }
};
const _hoisted_1$7 = { class: "text-center mt-12 mb-5 mr-6 text-primary" };
const _hoisted_2$5 = ["src"];
const _hoisted_3$3 = {
  key: 0,
  style: { "float": "left" }
};
const _hoisted_4$3 = {
  key: 1,
  style: { "float": "left" }
};
const _hoisted_5$3 = { class: "list-item-content" };
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_app_bar = resolveComponent("va-app-bar");
  const _component_va_footer = resolveComponent("va-footer");
  const _component_va_layout = resolveComponent("va-layout");
  return openBlock(), createBlock(VApp, null, {
    default: withCtx(() => [
      $data.authenticatedUser ? (openBlock(), createBlock(_component_va_layout, { key: 0 }, {
        appbar: withCtx(() => [
          (openBlock(), createBlock(_component_va_app_bar, {
            key: $options.getNavbarKey,
            color: "primary",
            density: "compact",
            elevation: "1",
            "header-menu": $options.getHeaderMenu,
            "sidebar-color": "white"
          }, {
            "navbar-logo": withCtx(() => [
              createBaseVNode("div", _hoisted_1$7, [
                createBaseVNode("img", {
                  src: $data.logo,
                  border: "0"
                }, null, 8, _hoisted_2$5)
              ])
            ]),
            profile: withCtx(() => [
              createVNode(VMenu, { "offset-y": "" }, {
                activator: withCtx(({ props }) => [
                  createVNode(VBtn, mergeProps({
                    icon: "",
                    small: ""
                  }, props, { class: "mr-1" }), {
                    default: withCtx(() => [
                      $data.avatarExists ? (openBlock(), createElementBlock("div", _hoisted_3$3, [
                        createVNode(VAvatar, { size: "24px" }, {
                          default: withCtx(() => [
                            createVNode(VImg, {
                              src: $options.getAvatar,
                              alt: "Avatar"
                            }, null, 8, ["src"])
                          ]),
                          _: 1
                        })
                      ])) : (openBlock(), createElementBlock("div", _hoisted_4$3, [
                        createVNode(VIcon, null, {
                          default: withCtx(() => _cache[0] || (_cache[0] = [
                            createTextVNode("mdi-account-circle")
                          ])),
                          _: 1
                        })
                      ]))
                    ]),
                    _: 2
                  }, 1040)
                ]),
                default: withCtx(() => [
                  createVNode(VCard, { "min-width": "300" }, {
                    default: withCtx(() => [
                      createVNode(VList, {
                        nav: "",
                        class: "mb-2"
                      }, {
                        default: withCtx(() => [
                          $options.getFullname ? (openBlock(), createBlock(VListItem, {
                            key: 0,
                            class: "mb-2 mt-2",
                            "prepend-avatar": $options.getAvatar
                          }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_5$3, [
                                createVNode(VListItemTitle, { class: "title" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($options.getFullname), 1)
                                  ]),
                                  _: 1
                                }),
                                $options.getEmail ? (openBlock(), createBlock(VListItemSubtitle, { key: 0 }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($options.getEmail), 1)
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ])
                            ]),
                            _: 1
                          }, 8, ["prepend-avatar"])) : createCommentVNode("", true),
                          createVNode(VDivider, { class: "mt-2" }),
                          createVNode(VCard, {
                            flat: "",
                            class: "mt-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardText, { style: { "padding": "0px" } }, {
                                default: withCtx(() => [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList($options.getProfileMenu, (item, index2) => {
                                    return openBlock(), createBlock(VListItem, {
                                      key: index2,
                                      link: "",
                                      to: item.link,
                                      onClick: ($event) => item.logout ? $options.logout() : null
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.icon), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.text), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["to", "onClick"]);
                                  }), 128))
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
              })
            ]),
            _: 1
          }, 8, ["header-menu"]))
        ]),
        footer: withCtx(() => [
          (openBlock(), createBlock(_component_va_footer, {
            key: $options.getCurrentLocale,
            menu: $options.getFooterMenu
          }, {
            left: withCtx(() => _cache[1] || (_cache[1] = [])),
            right: withCtx(() => _cache[2] || (_cache[2] = [
              createBaseVNode("span", { style: { "font-size": "13px" } }, "© 2024", -1)
            ])),
            _: 1
          }, 8, ["menu"]))
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ]),
    _: 1
  });
}
const Admin = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b]]);
const Admin$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Admin
}, Symbol.toStringTag, { value: "Module" }));
const module = {
  name: "Users",
  version: "1.0.0",
  install: async (app) => {
    const { default: routes2 } = await __vitePreload(async () => {
      const { default: routes3 } = await Promise.resolve().then(() => routes$1);
      return { default: routes3 };
    }, true ? void 0 : void 0);
    i18n.messages = await loadI18nMessages("users", /* @__PURE__ */ Object.assign({ "./i18n/en/index.js": () => __vitePreload(() => Promise.resolve().then(() => index$5), true ? void 0 : void 0), "./i18n/tr/index.js": () => __vitePreload(() => Promise.resolve().then(() => index$3), true ? void 0 : void 0) }));
    const { default: resources } = await __vitePreload(async () => {
      const { default: resources2 } = await Promise.resolve().then(() => index$1);
      return { default: resources2 };
    }, true ? void 0 : void 0);
    const { default: navigation } = await __vitePreload(async () => {
      const { default: navigation2 } = await Promise.resolve().then(() => _nav$1);
      return { default: navigation2 };
    }, true ? void 0 : void 0);
    const resourceComponents = {
      "UsersCreate": () => __vitePreload(() => Promise.resolve().then(() => Create$1), true ? void 0 : void 0),
      "UsersEdit": () => __vitePreload(() => Promise.resolve().then(() => Edit$1), true ? void 0 : void 0),
      "UsersForm": () => __vitePreload(() => Promise.resolve().then(() => Form$1), true ? void 0 : void 0),
      "UsersList": () => __vitePreload(() => Promise.resolve().then(() => List$1), true ? void 0 : void 0),
      "UsersShow": () => __vitePreload(() => Promise.resolve().then(() => Show$1), true ? void 0 : void 0)
    };
    return {
      i18n,
      // stores,
      routes: routes2,
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
const routes = {
  build: function(t) {
    return [
      {
        path: "",
        component: () => __vitePreload(() => Promise.resolve().then(() => Admin$1), true ? void 0 : void 0),
        // authenticated members
        meta: {
          title: () => t("users.home.title")
        },
        children: [
          {
            path: "/users/myAccount",
            name: "users_myAccount",
            // requires for translation support
            component: () => __vitePreload(() => Promise.resolve().then(() => MyAccount$1), true ? void 0 : void 0),
            // add .vue extension for lazy loading.
            meta: {
              title: () => t("users.myAccount.title")
              // requires for document title and breadcrumbs
            }
          },
          {
            path: "/users/changePassword",
            name: "users_changePassword",
            component: () => __vitePreload(() => Promise.resolve().then(() => ChangePassword$1), true ? void 0 : void 0),
            meta: {
              title: () => t("users.changePassword.title")
            }
          }
        ]
      },
      {
        path: "/",
        redirect: "/users/login/:locale?",
        component: () => __vitePreload(() => Promise.resolve().then(() => Member$1), true ? void 0 : void 0),
        // guest members
        children: [
          {
            path: "/users/login/:locale?",
            name: "users_login",
            component: () => __vitePreload(() => Promise.resolve().then(() => Login$1), true ? void 0 : void 0),
            meta: {
              title: () => t("users.login.title")
            }
          },
          {
            path: "/users/forgotPassword",
            name: "users_forgotPassword",
            component: () => __vitePreload(() => Promise.resolve().then(() => ForgotPassword$1), true ? void 0 : void 0),
            meta: {
              title: () => t("users.forgotPassword.title")
            }
          },
          {
            path: "/users/resetPassword",
            name: "users_resetPassword",
            component: () => __vitePreload(() => Promise.resolve().then(() => ResetPassword$1), true ? void 0 : void 0),
            meta: {
              title: () => t("users.resetPassword.title")
            }
          }
        ]
      }
    ];
  }
};
const routes$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: routes
}, Symbol.toStringTag, { value: "Module" }));
const users$1 = {
  title: "Users",
  fields: {
    q: "Search",
    email: "E-Mail",
    firstname: "Firstname",
    lastname: "Lastname",
    password: "Password",
    avatarImage: "Avatar Image",
    userRoles: "Roles",
    createdAtStart: "Creation Start",
    createdAtEnd: "Creation End",
    isActive: "Status",
    isEmailActivated: "E-Mail Activation",
    createdAt: "Created At"
  }
};
const login$1 = {
  title: "Login",
  fields: {
    username: "E-mail Address",
    password: "Password"
  },
  buttons: {
    signIn: { label: "Login" },
    forgotPassword: { label: "Forgot Password" }
  }
};
const index$4 = {
  title: "Users",
  menu: {
    label: "Users"
  },
  home: {
    title: "Home"
  },
  buttons: {
    editRoles: { label: "Edit Roles" }
  },
  users: users$1,
  login: login$1,
  messages: {
    passwordResetWrongCode: "Your password reset code is wrong",
    passwordResetEmail: "Password reset information has been sent to your e-mail"
  },
  logout: {
    title: "Logout",
    menu: {
      label: "Logout"
    }
  },
  forgotPassword: {
    title: "Forgot Password",
    fields: {
      username: "E-Mail Address",
      newPassword: "New Password",
      newPasswordConfirm: "New Password Confirm"
    },
    buttons: {
      resetMyPassword: "Reset Password",
      changeMyPassword: "Change Password",
      backToLogin: "Back to Login"
    }
  },
  resetPassword: {
    title: "Reset Password"
  },
  myAccount: {
    title: "My Account",
    menu: {
      label: "My Account"
    },
    fields: {
      avatar: {
        set: "Set Avatar",
        del: "Delete"
      }
    }
  },
  changePassword: {
    title: "My Password",
    menu: {
      label: "Change Password"
    },
    fields: {
      currentPassword: "Current Password",
      newPassword: "New Password",
      confirmPassword: "Confirm Password"
    }
  }
};
const index$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$4
}, Symbol.toStringTag, { value: "Module" }));
const users = {
  title: "Kullanıcılar",
  fields: {
    q: "Ara",
    email: "E-Posta",
    firstname: "Ad",
    lastname: "Soyad",
    password: "Şifre",
    avatarImage: "Avatar",
    userRoles: "Roller",
    createdAtStart: "Oluşturulma Baş.",
    createdAtEnd: "Oluşturulma Bit.",
    isActive: "Durum",
    isEmailActivated: "E-Mail Aktivasyon",
    createdAt: "Oluşturulma",
    themeColor: "Tema Rengi"
  }
};
const login = {
  title: "Oturum Aç",
  fields: {
    username: "E-Posta",
    password: "Şifre"
  },
  buttons: {
    signIn: { label: "Giriş" },
    forgotPassword: { label: "Forgot Password" }
  }
};
const index$2 = {
  title: "Kullanıcılar",
  menu: {
    label: "Kullanıcılar"
  },
  home: {
    title: "Anasayfa"
  },
  buttons: {
    editRoles: { label: "Rolleri Düzenle" }
  },
  users,
  login,
  messages: {
    passwordResetWrongCode: "Şifre sıfırlama kodunuz yanlış",
    passwordResetEmail: "Şifre sıfırlama bilgisi e-postanıza gönderildi"
  },
  logout: {
    title: "Çıkış",
    menu: {
      label: "Çıkış"
    }
  },
  forgotPassword: {
    title: "Şifremi Unuttum",
    fields: {
      username: "E-Posta",
      newPassword: "Yeni Şifre",
      newPasswordConfirm: "Yeni Şifre Tekrar"
    },
    buttons: {
      resetMyPassword: "Şifre Sıfırlama",
      changeMyPassword: "Şifremi Değiştir",
      backToLogin: "Girişe Dön"
    }
  },
  resetPassword: {
    title: "Şifre Sıfırlama"
  },
  myAccount: {
    title: "Hesabım",
    menu: {
      label: "Hesabım"
    },
    fields: {
      avatar: {
        set: "Resim Yükle",
        del: "Sil"
      }
    }
  },
  changePassword: {
    title: "Şifrem",
    menu: {
      label: "Şifre değiştir"
    },
    fields: {
      currentPassword: "Mevcut Şifre",
      newPassword: "Yeni Şifre",
      confirmPassword: "Şifreyi Onayla"
    }
  }
};
const index$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$2
}, Symbol.toStringTag, { value: "Module" }));
const index = [
  {
    name: "users",
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
        icon: "mdi-account-edit",
        text: t("users.menu.label"),
        link: "/users?sortBy=firstname&sortDesc=false",
        order: 1
      }
    ] : [];
  }
};
const _nav$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _nav
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {
  props: ["title", "item"]
};
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_users_form = resolveComponent("users-form");
  const _component_va_create_layout = resolveComponent("va-create-layout");
  return openBlock(), createBlock(_component_va_create_layout, { title: $props.title }, {
    default: withCtx(() => [
      createVNode(_component_users_form, { item: $props.item }, null, 8, ["item"])
    ]),
    _: 1
  }, 8, ["title"]);
}
const Create = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
const Create$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {
  props: ["id", "title", "item"]
};
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_users_form = resolveComponent("users-form");
  const _component_va_edit_layout = resolveComponent("va-edit-layout");
  return openBlock(), createBlock(_component_va_edit_layout, { title: $props.title }, {
    default: withCtx(() => [
      createVNode(_component_users_form, {
        id: $props.id,
        item: $props.item
      }, null, 8, ["id", "item"])
    ]),
    _: 1
  }, 8, ["title"]);
}
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
const Edit$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {
  props: ["id", "item"],
  mixins: [Utils],
  inheritAttrs: false,
  setup() {
    let vuelidate = useVuelidate();
    provide("v$", vuelidate);
    return { v$: vuelidate };
  },
  validations() {
    return {
      model: {
        firstname: {
          required,
          minLength: minLength(2)
        },
        lastname: {
          required,
          minLength: minLength(2),
          maxLength: maxLength(120)
        },
        email: {
          required,
          email
        },
        password: {
          minLength: minLength(8),
          maxLength: maxLength(16)
        }
      }
    };
  },
  data() {
    return {
      model: {
        id: null,
        firstname: null,
        lastname: null,
        email: null,
        password: null,
        isActive: 0,
        isEmailActivated: 0,
        avatar: {
          image: null
        }
      }
    };
  },
  created() {
    this.model.id = this.generateId(this);
    const action = this.$route.name.split("_").pop();
    if (action === "create") {
      if (this.item) {
        this.item.password = this.generatePassword(8);
      } else {
        this.model.password = this.generatePassword(8);
      }
    }
  },
  computed: {
    firstnameErrors() {
      const errors = [];
      if (!this.v$["model"].firstname.$dirty) return errors;
      this.v$["model"].firstname.required.$invalid && errors.push(this.$t("i18n.v.text.required"));
      this.v$["model"].firstname.minLength.$invalid && errors.push(this.$t("i18n.v.string.minLength", { min: "2" }));
      return errors;
    },
    lastnameErrors() {
      const errors = [];
      if (!this.v$["model"].lastname.$dirty) return errors;
      this.v$["model"].lastname.required.$invalid && errors.push(this.$t("i18n.v.text.required"));
      this.v$["model"].lastname.minLength.$invalid && errors.push(this.$t("i18n.v.string.minLength", { min: "2" }));
      this.v$["model"].lastname.maxLength.$invalid && errors.push(this.$t("i18n.v.string.maxLength", { max: "120" }));
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.v$["model"].email.$dirty) return errors;
      this.v$["model"].email.required.$invalid && errors.push(this.$t("i18n.v.email.required"));
      this.v$["model"].email.email.$invalid && errors.push(this.$t("i18n.v.email.invalid"));
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.v$["model"].password.$dirty) return errors;
      this.v$["model"].password.minLength.$invalid && errors.push(this.$t("i18n.v.string.minLength", { min: "8" }));
      this.v$["model"].password.maxLength.$invalid && errors.push(this.$t("i18n.v.string.maxLength", { max: "16" }));
      return errors;
    }
  }
};
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_avatar_input = resolveComponent("va-avatar-input");
  const _component_va_text_input = resolveComponent("va-text-input");
  const _component_va_boolean_input = resolveComponent("va-boolean-input");
  const _component_va_save_button = resolveComponent("va-save-button");
  const _component_va_form = resolveComponent("va-form");
  return openBlock(), createBlock(_component_va_form, {
    id: $props.id,
    item: $props.item,
    modelValue: $data.model,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.model = $event)
  }, {
    default: withCtx(() => [
      createVNode(VRow, { "no-gutters": "" }, {
        default: withCtx(() => [
          createVNode(VCol, {
            lg: "3",
            md: "3",
            sm: "8"
          }, {
            default: withCtx(() => [
              createVNode(_component_va_avatar_input, { source: "avatar.image" }),
              createVNode(_component_va_text_input, {
                source: "firstname",
                "error-messages": $options.firstnameErrors
              }, null, 8, ["error-messages"]),
              createVNode(_component_va_text_input, {
                source: "lastname",
                "error-messages": $options.lastnameErrors
              }, null, 8, ["error-messages"]),
              createVNode(_component_va_text_input, {
                source: "email",
                "error-messages": $options.emailErrors
              }, null, 8, ["error-messages"]),
              createVNode(_component_va_text_input, {
                source: "password",
                "error-messages": $options.passwordErrors
              }, null, 8, ["error-messages"]),
              createVNode(VBtn, {
                block: "",
                class: "mb-5",
                to: { name: "authorization_roles_list" }
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("users.buttons.editRoles.label")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_va_boolean_input, {
                source: "isActive",
                "hide-details": ""
              }),
              createVNode(_component_va_boolean_input, { source: "isEmailActivated" })
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
const Form = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
const Form$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Form
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {
  props: ["resource", "title"],
  data() {
    return {
      filters: [
        {
          source: "userRoles",
          type: "select",
          attributes: {
            reference: "authorization_roles",
            multiple: true
          }
        },
        { source: "createdAtStart", type: "date" },
        { source: "createdAtEnd", type: "date" },
        { source: "isActivce", type: "boolean" }
      ],
      fields: [
        {
          source: "firstname",
          sortable: true
        },
        {
          source: "lastname",
          sortable: true
        },
        {
          source: "email",
          sortable: true
        },
        {
          source: "userRoles",
          sortable: true
        },
        {
          source: "createdAt",
          type: "date",
          sortable: true
        },
        {
          source: "isActive",
          sortable: true
        }
      ]
    };
  }
};
const _hoisted_1$6 = { class: "d-flex flex-wrap ga-2" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_data_table_server = resolveComponent("va-data-table-server");
  const _component_va_list = resolveComponent("va-list");
  return openBlock(), createBlock(_component_va_list, {
    filters: $data.filters,
    fields: $data.fields,
    "hide-bulk-copy": "",
    "disable-global-search": false
  }, {
    default: withCtx(() => [
      createVNode(_component_va_data_table_server, {
        "disable-actions": false,
        "disable-show": false,
        "show-select": ""
      }, {
        [`field.userRoles`]: withCtx(({ item }) => [
          createBaseVNode("div", _hoisted_1$6, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(item.userRoles, (role, index2) => {
              return openBlock(), createBlock(VChip, {
                size: "small",
                key: index2,
                label: "",
                color: "primary"
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    icon: "mdi-label",
                    start: ""
                  }),
                  createTextVNode(" " + toDisplayString(role.name), 1)
                ]),
                _: 2
              }, 1024);
            }), 128))
          ])
        ]),
        _: 2
      }, 1024)
    ]),
    _: 1
  }, 8, ["filters", "fields"]);
}
const List = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
const List$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: List
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  props: ["title", "item"]
};
const _hoisted_1$5 = { class: "va-show" };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_field = resolveComponent("va-field");
  const _component_va_show = resolveComponent("va-show");
  const _component_va_show_layout = resolveComponent("va-show-layout");
  return openBlock(), createBlock(_component_va_show_layout, {
    title: $props.title,
    "show-list": false,
    "show-edit": false,
    "show-clone": false,
    "show-delete": false
  }, {
    default: withCtx(() => [
      createVNode(_component_va_show, { item: $props.item }, {
        default: withCtx(() => [
          createVNode(VRow, null, {
            default: withCtx(() => [
              createVNode(VCol, {
                lg: "4",
                md: "6",
                sm: "12"
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1$5, [
                    createVNode(VTable, { density: "compact" }, {
                      default: withCtx(() => [
                        createBaseVNode("tbody", null, [
                          createBaseVNode("tr", null, [
                            createBaseVNode("td", null, [
                              createBaseVNode("b", null, toDisplayString(_ctx.$t("users.users.fields.firstname")), 1)
                            ]),
                            createBaseVNode("td", null, [
                              createVNode(_component_va_field, { source: "firstname" })
                            ])
                          ]),
                          createBaseVNode("tr", null, [
                            createBaseVNode("td", null, [
                              createBaseVNode("b", null, toDisplayString(_ctx.$t("users.users.fields.lastname")), 1)
                            ]),
                            createBaseVNode("td", null, [
                              createVNode(_component_va_field, { source: "lastname" })
                            ])
                          ]),
                          createBaseVNode("tr", null, [
                            createBaseVNode("td", null, [
                              createBaseVNode("b", null, toDisplayString(_ctx.$t("users.users.fields.email")), 1)
                            ]),
                            createBaseVNode("td", null, [
                              createVNode(_component_va_field, { source: "email" })
                            ])
                          ]),
                          createBaseVNode("tr", null, [
                            createBaseVNode("td", null, [
                              createBaseVNode("b", null, toDisplayString(_ctx.$t("users.users.fields.isActive")), 1)
                            ]),
                            createBaseVNode("td", null, [
                              createVNode(_component_va_field, {
                                source: "isActive",
                                type: "boolean"
                              })
                            ])
                          ]),
                          createBaseVNode("tr", null, [
                            createBaseVNode("td", null, [
                              createBaseVNode("b", null, toDisplayString(_ctx.$t("users.users.fields.isEmailActivated")), 1)
                            ]),
                            createBaseVNode("td", null, [
                              createVNode(_component_va_field, {
                                source: "isEmailActivated",
                                type: "boolean"
                              })
                            ])
                          ]),
                          createBaseVNode("tr", null, [
                            createBaseVNode("td", null, [
                              createBaseVNode("b", null, toDisplayString(_ctx.$t("users.users.fields.createdAt")), 1)
                            ]),
                            createBaseVNode("td", null, [
                              createVNode(_component_va_field, {
                                source: "createdAt",
                                type: "date"
                              })
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
                    _cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
                    _cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)),
                    _cache[3] || (_cache[3] = createBaseVNode("br", null, null, -1)),
                    _cache[4] || (_cache[4] = createBaseVNode("br", null, null, -1)),
                    _cache[5] || (_cache[5] = createBaseVNode("br", null, null, -1))
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["item"])
    ]),
    _: 1
  }, 8, ["title"]);
}
const Show = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
const Show$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  inject: [],
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      accountUpdating: false,
      firstname: null,
      lastname: null,
      email: null,
      locale: null,
      avatar: {
        image: null
      }
    };
  },
  created() {
    this.initializeAccount();
  },
  validations() {
    return {
      firstname: {
        required,
        maxLength: maxLength(120)
      },
      lastname: {
        required,
        maxLength: maxLength(120)
      },
      email: {
        required,
        email
      }
    };
  },
  computed: {
    firstnameErrors() {
      const errors = [];
      const field = "firstname";
      if (!this.v$[field].$dirty) return errors;
      this.v$[field].required.$invalid && errors.push(this.$t("i18n.v.text.required"));
      this.v$[field].maxLength.$invalid && errors.push(this.$t("i18n.v.string.maxLength", { max: "120" }));
      return errors;
    },
    lastnameErrors() {
      const errors = [];
      const field = "lastname";
      if (!this.v$[field].$dirty) return errors;
      this.v$[field].required.$invalid && errors.push(this.$t("i18n.v.text.required"));
      this.v$[field].maxLength.$invalid && errors.push(this.$t("i18n.v.string.maxLength", { max: "120" }));
      return errors;
    },
    emailErrors() {
      const errors = [];
      const field = "email";
      if (!this.v$[field].$dirty) return errors;
      this.v$[field].required.$invalid && errors.push(this.$t("i18n.v.email.required"));
      this.v$[field].email.$invalid && errors.push(this.$t("v.email.invalid"));
      return errors;
    }
  },
  methods: {
    async initializeAccount() {
      let response = await this.$admin.http.get("/users/myAccount/findMe");
      if (response && response.status == 200) {
        let data = response.data.data;
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.email = data.email;
        this.avatar.image = data.avatar.image;
      }
    },
    async updateAccount() {
      this.v$.$touch();
      if (this.v$.$invalid) {
        return false;
      }
      this.accountUpdating = true;
      try {
        let data = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          avatar: {
            image: this.avatar.image
          }
        };
        let Self = this;
        let user = await this.$store.getModule("auth").checkAuth();
        if (user) {
          this.$admin.http({ method: "PUT", url: "/users/myAccount/update", data }).then(async function(response) {
            if (response && response.status == 200) {
              Self.$router.push({ name: "dashboard" });
              setTimeout(function() {
                Self.$admin.message("success", Self.$t("i18n.form.saved"));
              }, 1);
            }
          });
        }
      } catch (e) {
      } finally {
        this.accountUpdating = false;
      }
    }
  }
};
const _hoisted_1$4 = { class: "d-flex align-center mb-2" };
const _hoisted_2$4 = { class: "h1" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_avatar_input = resolveComponent("va-avatar-input");
  const _component_va_text_input = resolveComponent("va-text-input");
  return openBlock(), createBlock(VRow, null, {
    default: withCtx(() => [
      createVNode(VCol, { sm: "12" }, {
        default: withCtx(() => [
          createVNode(VForm, {
            onSubmit: withModifiers($options.updateAccount, ["prevent"])
          }, {
            default: withCtx(() => [
              createVNode(VCard, { flat: "" }, {
                default: withCtx(() => [
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_1$4, [
                        createBaseVNode("h1", _hoisted_2$4, toDisplayString(_ctx.$t("users.myAccount.title")), 1)
                      ]),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            lg: "3",
                            md: "3",
                            sm: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_va_avatar_input, {
                                modelValue: $data.avatar.image,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.avatar.image = $event),
                                "set-label": _ctx.$t("users.myAccount.fields.avatar.set"),
                                "del-label": _ctx.$t("users.myAccount.fields.avatar.del")
                              }, null, 8, ["modelValue", "set-label", "del-label"]),
                              createVNode(_component_va_text_input, {
                                source: "firstname",
                                resource: "account",
                                modelValue: $data.firstname,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.firstname = $event),
                                variant: "outlined",
                                "error-messages": $options.firstnameErrors
                              }, null, 8, ["modelValue", "error-messages"]),
                              createVNode(_component_va_text_input, {
                                source: "lastname",
                                resource: "account",
                                modelValue: $data.lastname,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.lastname = $event),
                                variant: "outlined",
                                "error-messages": $options.lastnameErrors
                              }, null, 8, ["modelValue", "error-messages"]),
                              createVNode(_component_va_text_input, {
                                source: "email",
                                resource: "account",
                                modelValue: $data.email,
                                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.email = $event),
                                type: "email",
                                variant: "outlined",
                                "error-messages": $options.emailErrors
                              }, null, 8, ["modelValue", "error-messages"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "primary",
                        loading: $data.accountUpdating,
                        type: "submit"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("i18n.actions.save")), 1)
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["onSubmit"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const MyAccount = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const MyAccount$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MyAccount
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  inject: [],
  setup() {
    let vuelidate = useVuelidate();
    provide("v$", vuelidate);
    return { v$: vuelidate };
  },
  data() {
    return {
      loading: false,
      model: {
        currentPassword: null,
        newPassword: null,
        confirmPassword: null
      }
    };
  },
  validations() {
    return {
      model: {
        currentPassword: {
          required,
          minLength: minLength(8),
          maxLength: maxLength(16)
        },
        newPassword: {
          required,
          minLength: minLength(8),
          maxLength: maxLength(16)
        },
        confirmPassword: {
          required,
          sameAs: sameAs(this.model.newPassword)
        }
      }
    };
  },
  computed: {
    currentPasswordErrors() {
      const errors = [];
      const field = "currentPassword";
      if (!this.v$["model"][field].$dirty) return errors;
      this.v$["model"][field].required.$invalid && errors.push(this.$t("i18n.v.text.required"));
      this.v$["model"][field].minLength.$invalid && errors.push(this.$t("v.string.minLength", { min: "8" }));
      this.v$["model"][field].maxLength.$invalid && errors.push(this.$t("v.string.maxLength", { max: "16" }));
      return errors;
    },
    newPasswordErrors() {
      const errors = [];
      const field = "newPassword";
      if (!this.v$["model"][field].$dirty) return errors;
      this.v$["model"][field].required.$invalid && errors.push(this.$t("i18n.v.text.required"));
      this.v$["model"][field].minLength.$invalid && errors.push(this.$t("v.string.minLength", { min: "8" }));
      this.v$["model"][field].maxLength.$invalid && errors.push(this.$t("v.string.maxLength", { max: "16" }));
      return errors;
    },
    confirmPasswordErrors() {
      const errors = [];
      const field = "confirmPassword";
      if (!this.v$["model"][field].$dirty) return errors;
      this.v$["model"][field].required.$invalid && errors.push(this.$t("i18n.v.text.required"));
      this.v$["model"][field].sameAs.$invalid && errors.push(this.$t("v.password.sameAs"));
      return errors;
    }
  },
  methods: {
    async changePassword() {
      this.v$.$touch();
      if (this.v$.$invalid) {
        return false;
      }
      if (await this.$store.getModule("auth").checkAuth()) {
        this.loading = true;
        try {
          let response = await this.$admin.http({ method: "PUT", url: "/account/updatePassword", data: this.model });
          if (response && response.status == 200) {
            response = await this.$admin.http({ method: "GET", url: "/auth/logout" });
            if (response.status == 200) {
              this.$store.getModule("auth").logout();
              this.$router.push({ name: "login" });
            }
          }
        } catch (e) {
          console.error(e);
        }
        this.loading = false;
      }
    }
  }
};
const _hoisted_1$3 = { class: "d-flex align-center mb-2" };
const _hoisted_2$3 = { class: "h1" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_password_input = resolveComponent("va-password-input");
  return openBlock(), createBlock(VForm, {
    onSubmit: withModifiers($options.changePassword, ["prevent"])
  }, {
    default: withCtx(() => [
      createVNode(VCard, { flat: "" }, {
        default: withCtx(() => [
          createVNode(VCardText, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$3, [
                createBaseVNode("h1", _hoisted_2$3, toDisplayString(_ctx.$t("users.changePassword.title")), 1)
              ]),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, { sm: "3" }, {
                    default: withCtx(() => [
                      createVNode(_component_va_password_input, {
                        source: "currentPassword",
                        label: _ctx.$t("users.changePassword.fields.currentPassword"),
                        modelValue: $data.model.currentPassword,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.model.currentPassword = $event),
                        "error-messages": $options.currentPasswordErrors
                      }, null, 8, ["label", "modelValue", "error-messages"]),
                      createVNode(_component_va_password_input, {
                        source: "password",
                        label: _ctx.$t("users.changePassword.fields.newPassword"),
                        modelValue: $data.model.newPassword,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.model.newPassword = $event),
                        "error-messages": $options.newPasswordErrors
                      }, null, 8, ["label", "modelValue", "error-messages"]),
                      createVNode(_component_va_password_input, {
                        source: "passwordConfirmation",
                        label: _ctx.$t("users.changePassword.fields.confirmPassword"),
                        modelValue: $data.model.confirmPassword,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.model.confirmPassword = $event),
                        "error-messages": $options.confirmPasswordErrors
                      }, null, 8, ["label", "modelValue", "error-messages"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VBtn, {
                color: "primary",
                loading: $data.loading,
                type: "submit"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("i18n.actions.save")), 1)
                ]),
                _: 1
              }, 8, ["loading"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["onSubmit"]);
}
const ChangePassword = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const ChangePassword$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ChangePassword
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  inject: [],
  data() {
    return {
      height: "100vh"
    };
  },
  async created() {
    const lang = Translation.guessDefaultLocale();
    if (lang && Translation.supportedLocales.includes(lang)) {
      await Translation.switchLanguage(lang);
    }
  },
  computed: {
    getHeight() {
      return this.height;
    },
    getThemeColor() {
      return this.$vuetify.theme.themes.light.colors.primary;
    }
  }
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createBlock(VApp, null, {
    default: withCtx(() => [
      createVNode(VContainer, {
        fluid: "",
        style: normalizeStyle({ height: $options.getHeight, backgroundColor: $options.getThemeColor })
      }, {
        default: withCtx(() => [
          createVNode(VLayout, { class: "align-center justify-center" }, {
            default: withCtx(() => [
              createVNode(_component_router_view, null, {
                default: withCtx(({ Component }) => [
                  (openBlock(), createBlock(resolveDynamicComponent(Component)))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["style"])
    ]),
    _: 1
  });
}
const Member = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const Member$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Member
}, Symbol.toStringTag, { value: "Module" }));
const logo = "data:image/png;base64,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";
const _sfc_main$2 = {
  components: { LanguageSwitcher },
  setup() {
    const { smAndDown } = useDisplay();
    let resetPassword = useRoute().query.resetPassword;
    return { v$: useVuelidate(), smAndDown, resetPassword };
  },
  validations() {
    return {
      username: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(16)
      }
    };
  },
  data() {
    return {
      logo,
      showPass: false,
      loading: false,
      username: "admin@example.com",
      password: "12345678"
    };
  },
  computed: {
    getReponsiveWidth() {
      if (this.smAndDown) {
        return 320;
      }
      return 360;
    },
    emailErrors() {
      const errors = [];
      if (!this.v$.username.$dirty) return errors;
      this.v$.username.required.$invalid && errors.push(this.$t("v.email.required"));
      this.v$.username.email.$invalid && errors.push(this.$t("v.email.invalid"));
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.v$.password.$dirty) return errors;
      this.v$.password.minLength.$invalid && errors.push(this.$t("v.string.minLength", { min: "8" }));
      this.v$.password.maxLength.$invalid && errors.push(this.$t("v.string.maxLength", { max: "16" }));
      this.v$.password.required.$invalid && errors.push(this.$t("v.password.required"));
      return errors;
    }
  },
  methods: {
    async validate() {
      this.v$.$touch();
      this.loading = false;
      if (this.v$.$invalid) {
        return;
      }
      this.loading = true;
      try {
        await this.$store.getModule("auth").login({ username: this.username, password: this.password });
        this.$router.push({ name: "dashboard" });
      } catch (e) {
        this.loading = false;
      }
    },
    clear() {
      this.v$.$reset();
      this.username = "";
      this.password = "";
    }
  }
};
const _hoisted_1$2 = { class: "text-center mt-5 mb-6" };
const _hoisted_2$2 = {
  style: { "letter-spacing": "1px", "font-size": "34px" },
  class: "text-primary"
};
const _hoisted_3$2 = ["src"];
const _hoisted_4$2 = { class: "text-left" };
const _hoisted_5$2 = { class: "text-right" };
const _hoisted_6$1 = { class: "text-center" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_messages = resolveComponent("va-messages");
  const _component_LanguageSwitcher = resolveComponent("LanguageSwitcher");
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_va_messages),
    createVNode(VRow, {
      "no-gutters": "",
      style: normalizeStyle($setup.smAndDown ? "margin-top: 40px" : "margin-top: 180px")
    }, {
      default: withCtx(() => [
        $setup.resetPassword ? (openBlock(), createBlock(VAlert, {
          key: 0,
          class: "mb-4",
          color: "primary",
          text: _ctx.$t("users.login.messages.passwordResetEmail")
        }, null, 8, ["text"])) : createCommentVNode("", true)
      ]),
      _: 1
    }, 8, ["style"]),
    createVNode(VRow, { "no-gutters": "" }, {
      default: withCtx(() => [
        createVNode(VCard, {
          border: "",
          flat: "",
          class: "noselect",
          "min-width": $options.getReponsiveWidth
        }, {
          default: withCtx(() => [
            createVNode(VSheet, { color: "white" }, {
              default: withCtx(() => [
                createVNode(VContainer, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1$2, [
                      createBaseVNode("div", _hoisted_2$2, [
                        createBaseVNode("img", {
                          src: $data.logo,
                          border: "0"
                        }, null, 8, _hoisted_3$2)
                      ])
                    ]),
                    createVNode(VForm, {
                      onSubmit: withModifiers($options.validate, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          density: "comfortable",
                          color: "primary",
                          "prepend-inner-icon": "mdi-account",
                          modelValue: $data.username,
                          "onUpdate:modelValue": [
                            _cache[0] || (_cache[0] = ($event) => $data.username = $event),
                            _cache[1] || (_cache[1] = ($event) => $setup.v$.username.$touch())
                          ],
                          name: "username",
                          label: _ctx.$t("users.login.fields.username"),
                          type: "text",
                          variant: "outlined",
                          class: "mx-1",
                          clearable: "",
                          autocomplete: "username",
                          "error-messages": $options.emailErrors
                        }, null, 8, ["modelValue", "label", "error-messages"]),
                        createVNode(VTextField, {
                          density: "comfortable",
                          color: "primary",
                          "prepend-inner-icon": "mdi-lock",
                          "append-inner-icon": $data.showPass ? "mdi-eye" : "mdi-eye-off",
                          type: $data.showPass ? "text" : "password",
                          modelValue: $data.password,
                          "onUpdate:modelValue": [
                            _cache[2] || (_cache[2] = ($event) => $data.password = $event),
                            _cache[4] || (_cache[4] = ($event) => $setup.v$.password.$touch())
                          ],
                          name: "password",
                          label: _ctx.$t("users.login.fields.password"),
                          variant: "outlined",
                          class: "mx-1",
                          autocomplete: "password",
                          "error-messages": $options.passwordErrors,
                          "onClick:appendInner": _cache[3] || (_cache[3] = ($event) => $data.showPass = !$data.showPass)
                        }, null, 8, ["append-inner-icon", "type", "modelValue", "label", "error-messages"]),
                        createVNode(VRow, { class: "mt-4" }, {
                          default: withCtx(() => [
                            createVNode(VCol, { lg: "6" }, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_4$2, [
                                  createVNode(_component_LanguageSwitcher)
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { lg: "6" }, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_5$2, [
                                  createVNode(VBtn, {
                                    loading: $data.loading,
                                    color: "primary",
                                    large: "",
                                    type: "submit",
                                    text: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.$t("users.login.buttons.signIn.label")), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["loading"])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onSubmit"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["min-width"])
      ]),
      _: 1
    }),
    createVNode(VRow, {
      "no-gutters": "",
      class: "mt-2",
      "min-width": $options.getReponsiveWidth
    }, {
      default: withCtx(() => [
        createVNode(VCol, null, {
          default: withCtx(() => [
            createVNode(VRow, { class: "pt-2" }, {
              default: withCtx(() => [
                createVNode(VCol, { sm: "12" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_6$1, [
                      createVNode(_component_router_link, {
                        to: { name: "users_forgotPassword" },
                        style: { "color": "white", "font-size": "13px" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("users.login.buttons.forgotPassword.label")), 1)
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
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["min-width"])
  ]);
}
const Login = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-9e8b2f92"]]);
const Login$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  inject: [],
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    VueHcaptcha: hcaptcha
  },
  data() {
    return {
      verified: false,
      expired: false,
      token: null,
      eKey: null,
      error: null,
      email: null,
      siteKey: "302c0d3c-b094-4658-8552-48fc79f46238",
      loading: false
    };
  },
  validations() {
    return {
      email: {
        required,
        email
      },
      verified: {
        isVerified: this.isVerified
      }
    };
  },
  computed: {
    hCaptchaErrors() {
      const errors = [];
      if (!this.v$.verified.$dirty) return errors;
      this.v$.verified.isVerified.$invalid && errors.push(this.$t("v.captcha.invalid"));
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.v$.email.$dirty) return errors;
      this.v$.email.email.$invalid && errors.push(this.$t("v.email.invalid"));
      this.v$.email.required.$invalid && errors.push(this.$t("v.email.required"));
      return errors;
    }
  },
  methods: {
    isVerified() {
      return this.verified ? true : false;
    },
    async validate() {
      this.v$.$touch();
      this.loading = false;
      if (this.v$.$invalid) {
        return;
      }
      let result = false;
      result = await this.http("post", "/auth/resetPassword", {
        email: this.email
      });
      if (result) {
        this.clear();
        this.$router.push({ name: "users_login", query: { resetPassword: true } });
      }
    },
    clear() {
      this.v$.$reset();
      this.email = "";
      this.loading = false;
    },
    async http(method, url, data) {
      try {
        this.loading = true;
        await this.admin.http({ method, url, data });
        return true;
      } catch (e) {
        this.loading = false;
        console.error(e.message);
      }
      return false;
    },
    onVerify(tokenStr, ekey) {
      this.verified = true;
      this.token = tokenStr;
      this.eKey = ekey;
    },
    onExpire() {
      this.verified = false;
      this.token = null;
      this.eKey = null;
      this.expired = true;
    },
    onChallengeExpire() {
      this.verified = false;
      this.token = null;
      this.eKey = null;
      this.expired = true;
    },
    onError(err) {
      this.verified = false;
      this.token = null;
      this.eKey = null;
      this.error = err;
      console.error(`Error: ${err}`);
    }
  }
};
const _hoisted_1$1 = { class: "xs-12 sm-10 md-8 lg-6" };
const _hoisted_2$1 = { key: 0 };
const _hoisted_3$1 = {
  key: 0,
  class: "v-messages__message error text-caption"
};
const _hoisted_4$1 = { class: "text-right" };
const _hoisted_5$1 = { class: "text-center" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_va_messages = resolveComponent("va-messages");
  const _component_vue_hcaptcha = resolveComponent("vue-hcaptcha");
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createVNode(_component_va_messages),
    createVNode(VRow, null, {
      default: withCtx(() => [
        createVNode(VCard, { style: { "margin-top": "200px" } }, {
          default: withCtx(() => [
            createVNode(VContainer, null, {
              default: withCtx(() => [
                createVNode(VForm, {
                  onSubmit: withModifiers($options.validate, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createVNode(VTextField, {
                      color: "primary",
                      class: "mx-1 mt-3",
                      "prepend-icon": "mdi-account",
                      modelValue: $data.email,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.email = $event),
                      name: "email",
                      label: _ctx.$t("users.forgotPassword.fields.username"),
                      type: "text",
                      variant: "outlined",
                      clearable: "",
                      autocomplete: false,
                      "error-messages": $options.emailErrors,
                      onInput: _cache[1] || (_cache[1] = ($event) => $setup.v$.email.$touch())
                    }, null, 8, ["modelValue", "label", "error-messages"]),
                    $data.siteKey ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
                      createVNode(_component_vue_hcaptcha, {
                        sitekey: $data.siteKey,
                        onVerify: $options.onVerify,
                        onExpired: $options.onExpire,
                        onChallengeExpired: $options.onChallengeExpire,
                        onError: $options.onError
                      }, null, 8, ["sitekey", "onVerify", "onExpired", "onChallengeExpired", "onError"]),
                      $options.hCaptchaErrors.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_3$1, toDisplayString($options.hCaptchaErrors[0]), 1)) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true),
                    createVNode(VRow, { class: "mt-1 mb-1" }, {
                      default: withCtx(() => [
                        createVNode(VCol, { sm: "12" }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_4$1, [
                              createVNode(VBtn, {
                                loading: $data.loading,
                                color: "primary",
                                large: "",
                                type: "submit",
                                text: "",
                                rounded: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("users.forgotPassword.buttons.resetMyPassword")), 1)
                                ]),
                                _: 1
                              }, 8, ["loading"])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["onSubmit"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(VRow, { class: "pt-2" }, {
      default: withCtx(() => [
        createVNode(VCol, { sm: "12" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_5$1, [
              createVNode(_component_router_link, {
                to: { name: "users_login" },
                style: { "color": "white", "font-size": "13px" }
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("users.forgotPassword.buttons.backToLogin")), 1)
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
  ]);
}
const ForgotPassword = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const ForgotPassword$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ForgotPassword
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  mixins: [Utils],
  inject: [],
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      showPass: false,
      resetCode: null,
      newPassword: null,
      newPasswordConfirm: null,
      loading: false,
      resetCodeIsValid: false
    };
  },
  async created() {
    this.resetCode = this.getQueryParam("resetCode");
    this.resetCodeIsValid = await this.http("get", "/auth/checkResetCode?resetCode=" + this.resetCode);
  },
  validations() {
    return {
      newPassword: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(16)
      },
      newPasswordConfirm: {
        required,
        sameAs: sameAs(this.newPassword)
      }
    };
  },
  computed: {
    newPasswordErrors() {
      const errors = [];
      if (!this.v$.newPassword.$dirty) return errors;
      this.v$.newPassword.required.$invalid && errors.push(this.$t("i18n.v.text.required"));
      this.v$.newPassword.minLength.$invalid && errors.push(this.$t("i18n.v.string.minLength", { min: "8" }));
      this.v$.newPassword.maxLength.$invalid && errors.push(this.$t("i18n.v.string.maxLength", { max: "16" }));
      return errors;
    },
    newPasswordConfirmErrors() {
      const errors = [];
      if (!this.v$.newPasswordConfirm.$dirty) return errors;
      this.v$.newPasswordConfirm.required.$invalid && errors.push(this.$t("i18n.v.text.required"));
      this.v$.newPasswordConfirm.sameAs.$invalid && errors.push(this.$t("i18n.v.password.sameAs"));
      return errors;
    }
  },
  methods: {
    async validate() {
      this.v$.$touch();
      this.loading = false;
      if (this.v$.$invalid) {
        return;
      }
      let result = false;
      result = await this.http("post", "/auth/changePassword", {
        resetCode: this.resetCode,
        newPassword: this.newPassword,
        newPasswordConfirm: this.newPasswordConfirm
      });
      if (result) {
        this.$store.getModule("messages").show({ type: "success", message: this.$t("users.messages.passwordResetEmail") });
        this.$router.push({ name: "login" });
      }
    },
    clear() {
      this.v$.$reset();
      this.username = "";
    },
    async http(method, url, data) {
      try {
        this.loading = true;
        let result = await this.$admin.http({ method, url, data });
        if (typeof result === "object" && result !== null && result["status"] && result.status == 200) {
          this.loading = false;
          return true;
        }
        return false;
      } catch (e) {
        this.loading = false;
        console.log(e.message);
      }
      return false;
    }
  }
};
const _hoisted_1 = { class: "xs-12 sm-10 md-8 lg-6" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { class: "text-right" };
const _hoisted_4 = { class: "text-center" };
const _hoisted_5 = { key: 1 };
const _hoisted_6 = { style: { "font-size": "16px" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    $data.resetCodeIsValid ? (openBlock(), createElementBlock("div", _hoisted_2, [
      createVNode(VRow, null, {
        default: withCtx(() => [
          createVNode(VCard, {
            width: "375",
            style: { "margin-top": "200px" }
          }, {
            default: withCtx(() => [
              createVNode(VCardTitle, { class: "mt-2" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("users.resetPassword.title")), 1)
                ]),
                _: 1
              }),
              createVNode(VContainer, null, {
                default: withCtx(() => [
                  createVNode(VForm, {
                    ref: "form",
                    onSubmit: withModifiers($options.validate, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        class: "mx-1 mt-2",
                        "prepend-icon": "mdi-lock",
                        "append-inner-icon": $data.showPass ? "mdi-eye" : "mdi-eye-off",
                        type: $data.showPass ? "text" : "password",
                        modelValue: $data.newPassword,
                        "onUpdate:modelValue": [
                          _cache[0] || (_cache[0] = ($event) => $data.newPassword = $event),
                          _cache[2] || (_cache[2] = ($event) => $setup.v$.newPassword.$touch())
                        ],
                        name: "newPassword",
                        label: _ctx.$t("users.forgotPassword.fields.newPassword"),
                        variant: "outlined",
                        autocomplete: false,
                        "error-messages": $options.newPasswordErrors,
                        "onClick:appendInner": _cache[1] || (_cache[1] = ($event) => $data.showPass = !$data.showPass)
                      }, null, 8, ["append-inner-icon", "type", "modelValue", "label", "error-messages"]),
                      createVNode(VTextField, {
                        class: "mx-1",
                        "prepend-icon": "mdi-lock",
                        "append-inner-icon": $data.showPass ? "mdi-eye" : "mdi-eye-off",
                        type: $data.showPass ? "text" : "password",
                        modelValue: $data.newPasswordConfirm,
                        "onUpdate:modelValue": [
                          _cache[3] || (_cache[3] = ($event) => $data.newPasswordConfirm = $event),
                          _cache[5] || (_cache[5] = ($event) => $setup.v$.newPasswordConfirm.$touch())
                        ],
                        name: "newPasswordConfirm",
                        label: _ctx.$t("users.forgotPassword.fields.newPasswordConfirm"),
                        variant: "outlined",
                        autocomplete: false,
                        "error-messages": $options.newPasswordConfirmErrors,
                        "onClick:appendInner": _cache[4] || (_cache[4] = ($event) => $data.showPass = !$data.showPass)
                      }, null, 8, ["append-inner-icon", "type", "modelValue", "label", "error-messages"]),
                      createVNode(VRow, { class: "mt-1 mb-1" }, {
                        default: withCtx(() => [
                          createVNode(VCol, { sm: "12" }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_3, [
                                createVNode(VBtn, {
                                  loading: $data.loading,
                                  color: "primary",
                                  large: "",
                                  type: "submit",
                                  text: "",
                                  rounded: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("users.forgotPassword.buttons.changeMyPassword")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["loading"])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onSubmit"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(VRow, { class: "pt-2" }, {
        default: withCtx(() => [
          createVNode(VCol, { sm: "12" }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_4, [
                createVNode(_component_router_link, {
                  to: { name: "users_login" },
                  style: { "color": "white", "font-size": "13px" }
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("users.forgotPassword.buttons.backToLogin")), 1)
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
    ])) : (openBlock(), createElementBlock("div", _hoisted_5, [
      createVNode(VRow, null, {
        default: withCtx(() => [
          createVNode(VContainer, { style: { "margin-top": "200px", "width": "600px" } }, {
            default: withCtx(() => [
              createVNode(VAlert, { density: "compact" }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_6, toDisplayString(_ctx.$t("users.messages.passwordResetWrongCode")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]))
  ]);
}
const ResetPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const ResetPassword$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ResetPassword
}, Symbol.toStringTag, { value: "Module" }));
export {
  Admin$1 as A,
  auth as a,
  index$6 as i
};
