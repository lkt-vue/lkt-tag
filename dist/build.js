var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b;
import { defineComponent, mergeDefaults, useSlots, computed, resolveComponent, createElementBlock, openBlock, normalizeClass, createCommentVNode, createElementVNode, createBlock, renderSlot, unref, Fragment, createTextVNode, toDisplayString } from "vue";
import "lkt-string-tools";
import { __ } from "lkt-i18n";
var v = ((f) => (f.Button = "button", f.Submit = "submit", f.Reset = "reset", f.Anchor = "anchor", f.Content = "content", f.Switch = "switch", f.HiddenSwitch = "hidden-switch", f.Split = "split", f.SplitLazy = "split-lazy", f.SplitEver = "split-ever", f.Tooltip = "tooltip", f.TooltipLazy = "tooltip-lazy", f.TooltipEver = "tooltip-ever", f))(v || {});
var P = ((i) => (i.Text = "text", i.Email = "email", i.Tel = "tel", i.Password = "password", i.Search = "search", i.Number = "number", i.Color = "color", i.Range = "range", i.Textarea = "textarea", i.Html = "html", i.Date = "date", i.File = "file", i.Image = "image", i.Select = "select", i.Check = "check", i.Switch = "switch", i.Calc = "calc", i.Card = "card", i.Elements = "elements", i))(P || {});
var ht = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], a = (_a = class {
  constructor(t) {
  }
  feed(t = {}, o = this) {
    if (typeof t == "object") for (let [r, n] of Object.entries(t)) o.assignProp(r, n);
  }
  assignProp(t, o) {
    if (!(ht.includes(t) || _a.lktExcludedProps.includes(t)) && true) {
      if (_a.lktDateProps.includes(t)) {
        this[t] = new Date(o);
        return;
      }
      this[t] = o;
    }
  }
}, __publicField(_a, "lktAllowUndefinedProps", []), __publicField(_a, "lktExcludedProps", []), __publicField(_a, "lktDateProps", []), __publicField(_a, "lktStrictItem", false), __publicField(_a, "lktDefaultValues", []), _a);
var F = ((n) => (n.Auto = "auto", n.Always = "always", n.Lazy = "lazy", n.Ever = "ever", n))(F || {});
var N = ((r) => (r.Transform = "transform", r.Height = "height", r.Display = "display", r))(N || {});
var A = ((m) => (m.Href = "href", m.RouterLink = "router-link", m.RouterLinkBack = "router-link-back", m.Mail = "mail", m.Tel = "tel", m.Tab = "tab", m.Download = "download", m.Action = "action", m.Legacy = "", m))(A || {});
var U = ((n) => (n.None = "", n.Field = "field", n.Button = "button", n.Anchor = "anchor", n))(U || {});
var j = ((r) => (r.List = "list", r.Inline = "inline", r.Count = "count", r))(j || {});
var K = ((n) => (n.None = "", n.Focus = "focus", n.Blur = "blur", n.Always = "always", n))(K || {});
var R = ((s) => (s.MinStringLength = "min-str", s.MinNumber = "min-num", s.MaxStringLength = "max-str", s.MaxNumber = "max-num", s.Email = "email", s.Empty = "empty", s.EqualTo = "equal-to", s.MinNumbers = "min-numbers", s.MaxNumbers = "max-numbers", s.MinChars = "min-chars", s.MaxChars = "max-chars", s.MinUpperChars = "min-upper-chars", s.MaxUpperChars = "max-upper-chars", s.MinLowerChars = "min-lower-chars", s.MaxLowerChars = "max-lower-chars", s.MinSpecialChars = "min-special-chars", s.MaxSpecialChars = "max-special-chars", s))(R || {});
var H = ((r) => (r.Ok = "ok", r.Ko = "ko", r.Info = "info", r))(H || {});
var z = ((o) => (o.NotDefined = "", o.Button = "button", o))(z || {});
var W = ((r) => (r.Create = "create", r.Update = "update", r.Read = "read", r))(W || {});
var q = ((o) => (o.Inline = "inline", o.Modal = "modal", o))(q || {});
var $ = ((o) => (o.Top = "top", o.Bottom = "bottom", o))($ || {});
var G = ((r) => (r.Changed = "changed", r.Always = "always", r.Never = "never", r))(G || {});
var X = ((r) => (r.Manual = "manual", r.Auto = "auto", r.Delay = "delay", r))(X || {});
var Y = ((o) => (o.Toast = "toast", o.Inline = "inline", o))(Y || {});
var J = ((p) => (p.Pages = "pages", p.PrevNext = "prev-next", p.PagesPrevNext = "pages-prev-next", p.PagesPrevNextFirstLast = "pages-prev-next-first-last", p.LoadMore = "load-more", p.Infinite = "infinite", p))(J || {});
var Q = ((n) => (n.Table = "table", n.Item = "item", n.Ul = "ul", n.Ol = "ol", n))(Q || {});
var Z = ((n) => (n[n.Auto = 0] = "Auto", n[n.PreferItem = 1] = "PreferItem", n[n.PreferCustomItem = 2] = "PreferCustomItem", n[n.PreferColumns = 3] = "PreferColumns", n))(Z || {});
var _ = ((o) => (o.NotDefined = "", o.ActionIcon = "action-icon", o))(_ || {});
var E = (_b = class extends a {
  constructor(t = {}) {
    super();
    __publicField(this, "class", "");
    __publicField(this, "text", "");
    __publicField(this, "featuredText", "");
    __publicField(this, "icon", "");
    __publicField(this, "iconAtEnd", false);
    __publicField(this, "featuredAtStart", false);
    __publicField(this, "type", "");
    this.feed(t);
  }
}, __publicField(_b, "lktAllowUndefinedProps", ["onClick"]), __publicField(_b, "lktDefaultValues", ["class", "text", "featuredText", "icon", "iconAtEnd", "featuredAtStart", "type"]), _b);
var tt = ((o) => (o.Message = "message", o.Button = "button", o))(tt || {});
var et = ((r) => (r.Left = "left", r.Center = "center", r.Right = "right", r))(et || {});
var ot = ((o) => (o.Fixed = "fixed", o.Absolute = "absolute", o))(ot || {});
var rt = ((n) => (n.Top = "top", n.Bottom = "bottom", n.Center = "center", n.ReferrerCenter = "referrer-center", n))(rt || {});
var nt = ((l) => (l.Left = "left", l.Right = "right", l.Center = "center", l.LeftCorner = "left-corner", l.RightCorner = "right-corner", l))(nt || {});
var at = ((l) => (l.Refresh = "refresh", l.Close = "close", l.ReOpen = "reOpen", l.Exec = "exec", l.Open = "open", l))(at || {});
var it = ((o) => (o.Modal = "modal", o.Confirm = "confirm", o))(it || {});
var lt = ((r) => (r.None = "", r.Incremental = "incremental", r.Decremental = "decremental", r))(lt || {});
var st = ((l) => (l.NotDefined = "", l.Hidden = "hidden", l.Integer = "integer", l.Decimal = "decimal", l.Auto = "auto", l))(st || {});
var ft = ((o) => (o.Asc = "asc", o.Desc = "desc", o))(ft || {});
var ut = ((d) => (d.Create = "create", d.Update = "update", d.Edit = "edit", d.Drop = "drop", d.Sort = "sort", d.SwitchEditMode = "switch-edit-mode", d.InlineEdit = "inline-edit", d.InlineCreate = "inline-create", d.ModalCreate = "modal-create", d.InlineCreateEver = "inline-create-ever", d))(ut || {});
var dt = ((o) => (o.Lazy = "lazy", o.Ever = "ever", o))(dt || {});
var Dt = (e) => {
  let t = String(e);
  return t.startsWith("__:") ? __(t.substring(3)) : t;
};
function no(e) {
  let t = new e(), o = {};
  if (!Array.isArray(e.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let r of e.lktDefaultValues) r in t && (o[r] = t[r]);
  return o;
}
const _hoisted_1 = ["innerHTML"];
const _hoisted_2 = { class: "lkt-tag-content" };
const _hoisted_3 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LktTag",
  props: /* @__PURE__ */ mergeDefaults({
    class: {},
    text: {},
    featuredText: {},
    icon: {},
    iconAtEnd: { type: Boolean },
    featuredAtStart: { type: Boolean },
    type: {}
  }, no(E)),
  emits: [
    "click-icon"
  ],
  setup(__props, { emit: __emit }) {
    const slots = useSlots();
    const emit = __emit;
    const props = __props;
    const computedClassName = computed(() => {
      let r = [];
      if (props.class) r.push(props.class);
      if (props.featuredAtStart) r.push("featured-at-start");
      return r.join(" ");
    }), computedText = computed(() => Dt(props.text)), computedFeaturedText = computed(() => Dt(props.featuredText));
    const onClickIcon = () => emit("click-icon");
    return (_ctx, _cache) => {
      const _component_lkt_icon = resolveComponent("lkt-icon");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["lkt-tag", computedClassName.value])
      }, [
        computedFeaturedText.value && _ctx.featuredAtStart ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "lkt-tag-featured",
          innerHTML: computedFeaturedText.value
        }, null, 8, _hoisted_1)) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_2, [
          _ctx.icon ? (openBlock(), createBlock(_component_lkt_icon, {
            key: 0,
            icon: _ctx.icon,
            type: _ctx.type === unref(_).ActionIcon ? unref(z).Button : unref(z).NotDefined,
            onClick: onClickIcon
          }, null, 8, ["icon", "type"])) : createCommentVNode("", true),
          unref(slots).default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            createTextVNode(toDisplayString(computedText.value), 1)
          ], 64))
        ]),
        computedFeaturedText.value && !_ctx.featuredAtStart ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "lkt-tag-featured",
          innerHTML: computedFeaturedText.value
        }, null, 8, _hoisted_3)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const LktTag = {
  install: (app) => {
    if (app.component("lkt-tag") === void 0) app.component("lkt-tag", _sfc_main);
  }
};
export {
  LktTag as default
};
