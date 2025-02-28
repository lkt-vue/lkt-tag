import { defineComponent, useSlots, computed, resolveComponent, createElementBlock, openBlock, normalizeClass, createCommentVNode, createElementVNode, toDisplayString, createBlock, renderSlot, unref, Fragment, createTextVNode } from "vue";
import "lkt-string-tools";
import { __ } from "lkt-i18n";
var P = ((f) => (f.Button = "button", f.Submit = "submit", f.Reset = "reset", f.Anchor = "anchor", f.Content = "content", f.Switch = "switch", f.HiddenSwitch = "hidden-switch", f.Split = "split", f.SplitLazy = "split-lazy", f.SplitEver = "split-ever", f.Tooltip = "tooltip", f.TooltipLazy = "tooltip-lazy", f.TooltipEver = "tooltip-ever", f))(P || {});
var v = ((i) => (i.Text = "text", i.Email = "email", i.Tel = "tel", i.Password = "password", i.Search = "search", i.Number = "number", i.Color = "color", i.Range = "range", i.Textarea = "textarea", i.Html = "html", i.Date = "date", i.File = "file", i.Image = "image", i.Select = "select", i.Check = "check", i.Switch = "switch", i.Calc = "calc", i.Card = "card", i.Elements = "elements", i))(v || {});
var F = ((a) => (a.Auto = "auto", a.Always = "always", a.Lazy = "lazy", a.Ever = "ever", a))(F || {});
var N = ((r) => (r.Transform = "transform", r.Height = "height", r.Display = "display", r))(N || {});
var A = ((m) => (m.Href = "href", m.RouterLink = "router-link", m.RouterLinkBack = "router-link-back", m.Mail = "mail", m.Tel = "tel", m.Tab = "tab", m.Download = "download", m.Action = "action", m.Legacy = "", m))(A || {});
var U = ((a) => (a.None = "", a.Field = "field", a.Button = "button", a.Anchor = "anchor", a))(U || {});
var j = ((r) => (r.List = "list", r.Inline = "inline", r.Count = "count", r))(j || {});
var K = ((a) => (a.None = "", a.Focus = "focus", a.Blur = "blur", a.Always = "always", a))(K || {});
var R = ((s) => (s.MinStringLength = "min-str", s.MinNumber = "min-num", s.MaxStringLength = "max-str", s.MaxNumber = "max-num", s.Email = "email", s.Empty = "empty", s.EqualTo = "equal-to", s.MinNumbers = "min-numbers", s.MaxNumbers = "max-numbers", s.MinChars = "min-chars", s.MaxChars = "max-chars", s.MinUpperChars = "min-upper-chars", s.MaxUpperChars = "max-upper-chars", s.MinLowerChars = "min-lower-chars", s.MaxLowerChars = "max-lower-chars", s.MinSpecialChars = "min-special-chars", s.MaxSpecialChars = "max-special-chars", s))(R || {});
var H = ((r) => (r.Ok = "ok", r.Ko = "ko", r.Info = "info", r))(H || {});
var z = ((r) => (r.Create = "create", r.Update = "update", r.Read = "read", r))(z || {});
var W = ((o) => (o.Inline = "inline", o.Modal = "modal", o))(W || {});
var q = ((o) => (o.Top = "top", o.Bottom = "bottom", o))(q || {});
var $ = ((r) => (r.Changed = "changed", r.Always = "always", r.Never = "never", r))($ || {});
var G = ((r) => (r.Manual = "manual", r.Auto = "auto", r.Delay = "delay", r))(G || {});
var X = ((o) => (o.Toast = "toast", o.Inline = "inline", o))(X || {});
var Y = ((p) => (p.Pages = "pages", p.PrevNext = "prev-next", p.PagesPrevNext = "pages-prev-next", p.PagesPrevNextFirstLast = "pages-prev-next-first-last", p.LoadMore = "load-more", p.Infinite = "infinite", p))(Y || {});
var J = ((a) => (a.Table = "table", a.Item = "item", a.Ul = "ul", a.Ol = "ol", a))(J || {});
var Q = ((a) => (a[a.Auto = 0] = "Auto", a[a.PreferItem = 1] = "PreferItem", a[a.PreferCustomItem = 2] = "PreferCustomItem", a[a.PreferColumns = 3] = "PreferColumns", a))(Q || {});
var Z = ((o) => (o.NotDefined = "", o.ActionIcon = "action-icon", o))(Z || {});
var _ = ((o) => (o.Message = "message", o.Button = "button", o))(_ || {});
var tt = ((r) => (r.Left = "left", r.Center = "center", r.Right = "right", r))(tt || {});
var et = ((o) => (o.Fixed = "fixed", o.Absolute = "absolute", o))(et || {});
var ot = ((a) => (a.Top = "top", a.Bottom = "bottom", a.Center = "center", a.ReferrerCenter = "referrer-center", a))(ot || {});
var rt = ((l) => (l.Left = "left", l.Right = "right", l.Center = "center", l.LeftCorner = "left-corner", l.RightCorner = "right-corner", l))(rt || {});
var at = ((l) => (l.Refresh = "refresh", l.Close = "close", l.ReOpen = "reOpen", l.Exec = "exec", l.Open = "open", l))(at || {});
var nt = ((o) => (o.Modal = "modal", o.Confirm = "confirm", o))(nt || {});
var it = ((r) => (r.None = "", r.Incremental = "incremental", r.Decremental = "decremental", r))(it || {});
var lt = ((l) => (l.NotDefined = "", l.Hidden = "hidden", l.Integer = "integer", l.Decimal = "decimal", l.Auto = "auto", l))(lt || {});
var st = ((o) => (o.Asc = "asc", o.Desc = "desc", o))(st || {});
var ft = ((u) => (u.Create = "create", u.Update = "update", u.Edit = "edit", u.Drop = "drop", u.Sort = "sort", u.SwitchEditMode = "switch-edit-mode", u.InlineEdit = "inline-edit", u.InlineCreate = "inline-create", u.ModalCreate = "modal-create", u.InlineCreateEver = "inline-create-ever", u))(ft || {});
var dt = ((o) => (o.Lazy = "lazy", o.Ever = "ever", o))(dt || {});
var St = (e) => {
  let t = String(e);
  return t.startsWith("__:") ? __(t.substring(3)) : t;
};
const _hoisted_1 = {
  key: 0,
  class: "lkt-tag-featured"
};
const _hoisted_2 = { class: "lkt-tag-content" };
const _hoisted_3 = {
  key: 1,
  class: "lkt-tag-featured"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LktTag",
  props: {
    class: { default: "" },
    text: { default: "" },
    featuredText: { default: "" },
    icon: { default: "" },
    iconAtEnd: { type: Boolean, default: false },
    featuredAtStart: { type: Boolean, default: false },
    type: { default: "" }
  },
  emits: ["click-icon"],
  setup(__props, { emit: __emit }) {
    const slots = useSlots();
    const emit = __emit;
    const props = __props;
    const computedClassName = computed(() => {
      let r = [];
      if (props.class) r.push(props.class);
      if (props.featuredAtStart) r.push("featured-at-start");
      return r.join(" ");
    }), computedText = computed(() => {
      return St(props.featuredText);
    }), computedFeaturedText = computed(() => {
      return St(props.featuredText);
    });
    const onClickIcon = () => emit("click-icon");
    return (_ctx, _cache) => {
      const _component_lkt_icon = resolveComponent("lkt-icon");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["lkt-tag", computedClassName.value])
      }, [
        computedFeaturedText.value && _ctx.featuredAtStart ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(computedFeaturedText.value), 1)) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_2, [
          _ctx.icon ? (openBlock(), createBlock(_component_lkt_icon, {
            key: 0,
            icon: _ctx.icon,
            type: _ctx.type === "action-icon" ? "button" : "",
            onClick: onClickIcon
          }, null, 8, ["icon", "type"])) : createCommentVNode("", true),
          unref(slots).default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            createTextVNode(toDisplayString(computedText.value), 1)
          ], 64))
        ]),
        computedFeaturedText.value && !_ctx.featuredAtStart ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(computedFeaturedText.value), 1)) : createCommentVNode("", true)
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
