var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b;
import { defineComponent, mergeDefaults, useSlots, computed, resolveComponent, createElementBlock, openBlock, normalizeClass, createCommentVNode, createElementVNode, createBlock, renderSlot, unref, Fragment, createTextVNode, toDisplayString } from "vue";
import "lkt-string-tools";
import { __ } from "lkt-i18n";
var H = ((f) => (f.Button = "button", f.Submit = "submit", f.Reset = "reset", f.Anchor = "anchor", f.Content = "content", f.Switch = "switch", f.HiddenSwitch = "hidden-switch", f.Split = "split", f.SplitLazy = "split-lazy", f.SplitEver = "split-ever", f.Tooltip = "tooltip", f.TooltipLazy = "tooltip-lazy", f.TooltipEver = "tooltip-ever", f.FileUpload = "file-upload", f.ImageUpload = "image-upload", f))(H || {});
var z = ((l) => (l.Text = "text", l.Email = "email", l.Tel = "tel", l.Password = "password", l.Search = "search", l.Number = "number", l.Color = "color", l.Range = "range", l.Textarea = "textarea", l.Html = "html", l.Date = "date", l.File = "file", l.Image = "image", l.Select = "select", l.Check = "check", l.Switch = "switch", l.Calc = "calc", l.Card = "card", l.Elements = "elements", l))(z || {});
var Ot = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], a = (_a = class {
  constructor(t) {
  }
  feed(t = {}, o = this) {
    if (typeof t == "object") for (let [r, i] of Object.entries(t)) o.assignProp(r, i);
  }
  assignProp(t, o) {
    if (!(Ot.includes(t) || _a.lktExcludedProps.includes(t)) && true) {
      if (_a.lktDateProps.includes(t)) {
        this[t] = new Date(o);
        return;
      }
      this[t] = o;
    }
  }
}, __publicField(_a, "lktAllowUndefinedProps", []), __publicField(_a, "lktExcludedProps", []), __publicField(_a, "lktDateProps", []), __publicField(_a, "lktStrictItem", false), __publicField(_a, "lktDefaultValues", []), _a);
var W = ((i) => (i.Auto = "auto", i.Always = "always", i.Lazy = "lazy", i.Ever = "ever", i))(W || {});
var q = ((r) => (r.Transform = "transform", r.Height = "height", r.Display = "display", r))(q || {});
var $ = ((m) => (m.Href = "href", m.RouterLink = "router-link", m.RouterLinkBack = "router-link-back", m.Mail = "mail", m.Tel = "tel", m.Tab = "tab", m.Download = "download", m.Action = "action", m.Legacy = "", m))($ || {});
var G = ((i) => (i.None = "", i.Field = "field", i.Button = "button", i.Anchor = "anchor", i))(G || {});
var X = ((r) => (r.List = "list", r.Inline = "inline", r.Count = "count", r))(X || {});
var Q = ((s) => (s.MinStringLength = "min-str", s.MinNumber = "min-num", s.MaxStringLength = "max-str", s.MaxNumber = "max-num", s.Email = "email", s.Empty = "empty", s.EqualTo = "equal-to", s.MinNumbers = "min-numbers", s.MaxNumbers = "max-numbers", s.MinChars = "min-chars", s.MaxChars = "max-chars", s.MinUpperChars = "min-upper-chars", s.MaxUpperChars = "max-upper-chars", s.MinLowerChars = "min-lower-chars", s.MaxLowerChars = "max-lower-chars", s.MinSpecialChars = "min-special-chars", s.MaxSpecialChars = "max-special-chars", s))(Q || {});
var Y = ((r) => (r.Ok = "ok", r.Ko = "ko", r.Info = "info", r))(Y || {});
var J = ((o) => (o.NotDefined = "", o.Button = "button", o))(J || {});
var Z = ((o) => (o.Start = "start", o.End = "end", o))(Z || {});
var _ = ((r) => (r.Create = "create", r.Update = "update", r.Read = "read", r))(_ || {});
var tt = ((o) => (o.Inline = "inline", o.Modal = "modal", o))(tt || {});
var et = ((o) => (o.Top = "top", o.Bottom = "bottom", o))(et || {});
var ot = ((r) => (r.Changed = "changed", r.Always = "always", r.Never = "never", r))(ot || {});
var rt = ((r) => (r.Manual = "manual", r.Auto = "auto", r.Delay = "delay", r))(rt || {});
var at = ((o) => (o.Toast = "toast", o.Inline = "inline", o))(at || {});
var it = ((r) => (r.Anchor = "anchor", r.Button = "button", r.Entry = "entry", r))(it || {});
var nt = ((o) => (o.Modal = "modal", o.Confirm = "confirm", o))(nt || {});
var lt = ((g) => (g.Pages = "pages", g.PrevNext = "prev-next", g.PagesPrevNext = "pages-prev-next", g.PagesPrevNextFirstLast = "pages-prev-next-first-last", g.LoadMore = "load-more", g.Infinite = "infinite", g))(lt || {});
var st = ((r) => (r.None = "", r.Incremental = "incremental", r.Decremental = "decremental", r))(st || {});
var ft = ((n) => (n.NotDefined = "", n.Hidden = "hidden", n.Integer = "integer", n.Decimal = "decimal", n.Auto = "auto", n))(ft || {});
var dt = ((n) => (n.Table = "table", n.Item = "item", n.Ul = "ul", n.Ol = "ol", n.Carousel = "carousel", n))(dt || {});
var ut = ((i) => (i[i.Auto = 0] = "Auto", i[i.PreferItem = 1] = "PreferItem", i[i.PreferCustomItem = 2] = "PreferCustomItem", i[i.PreferColumns = 3] = "PreferColumns", i))(ut || {});
var mt = ((o) => (o.NotDefined = "", o.ActionIcon = "action-icon", o))(mt || {});
var N = (_b = class extends a {
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
}, __publicField(_b, "lktDefaultValues", ["class", "text", "featuredText", "icon", "iconAtEnd", "featuredAtStart", "type"]), _b);
var ct = ((o) => (o.Message = "message", o.Button = "button", o))(ct || {});
var pt = ((r) => (r.Left = "left", r.Center = "center", r.Right = "right", r))(pt || {});
var gt = ((o) => (o.Fixed = "fixed", o.Absolute = "absolute", o))(gt || {});
var Ct = ((i) => (i.Top = "top", i.Bottom = "bottom", i.Center = "center", i.ReferrerCenter = "referrer-center", i))(Ct || {});
var xt = ((n) => (n.Left = "left", n.Right = "right", n.Center = "center", n.LeftCorner = "left-corner", n.RightCorner = "right-corner", n))(xt || {});
var bt = ((i) => (i.None = "", i.Focus = "focus", i.Blur = "blur", i.Always = "always", i))(bt || {});
var ht = ((r) => (r.Auto = "auto", r.Local = "local", r.Remote = "remote", r))(ht || {});
var kt = ((n) => (n.Refresh = "refresh", n.Close = "close", n.ReOpen = "reOpen", n.Exec = "exec", n.Open = "open", n))(kt || {});
var Mt = ((o) => (o.Asc = "asc", o.Desc = "desc", o))(Mt || {});
var Vt = ((u) => (u.Create = "create", u.Update = "update", u.Edit = "edit", u.Drop = "drop", u.Sort = "sort", u.SwitchEditMode = "switch-edit-mode", u.InlineEdit = "inline-edit", u.InlineCreate = "inline-create", u.ModalCreate = "modal-create", u.InlineCreateEver = "inline-create-ever", u))(Vt || {});
var Bt = ((o) => (o.Lazy = "lazy", o.Ever = "ever", o))(Bt || {});
var At = (e) => {
  if (typeof e == "string" && e.startsWith("__:")) {
    let t = String(e);
    return t.startsWith("__:") ? __(t.substring(3)) : t;
  }
  return e;
};
var Dt = ((o) => (o.Quick = "quick", o.Full = "full", o))(Dt || {});
function Ko(e) {
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
  }, Ko(N)),
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
    }), computedText = computed(() => At(props.text)), computedFeaturedText = computed(() => At(props.featuredText));
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
            type: _ctx.type === unref(mt).ActionIcon ? unref(J).Button : unref(J).NotDefined,
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
