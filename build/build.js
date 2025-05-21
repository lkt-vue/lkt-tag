import { defineComponent, mergeDefaults, useSlots, computed, resolveComponent, createElementBlock, openBlock, normalizeClass, createCommentVNode, unref, createBlock, renderSlot, Fragment, createTextVNode, toDisplayString } from "vue";
import { extractI18nValue, IconType, getDefaultValues, Tag } from "lkt-vue-kernel";
const _hoisted_1 = ["innerHTML"];
const _hoisted_2 = {
  key: 1,
  class: "lkt-tag-content"
};
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
  }, getDefaultValues(Tag)),
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
    }), computedText = computed(() => extractI18nValue(props.text)), computedFeaturedText = computed(() => extractI18nValue(props.featuredText));
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
        _ctx.icon || unref(slots).default || computedText.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
          _ctx.icon ? (openBlock(), createBlock(_component_lkt_icon, {
            key: 0,
            icon: _ctx.icon,
            type: unref(IconType).NotDefined,
            onClick: onClickIcon
          }, null, 8, ["icon", "type"])) : createCommentVNode("", true),
          unref(slots).default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            createTextVNode(toDisplayString(computedText.value), 1)
          ], 64))
        ])) : createCommentVNode("", true),
        computedFeaturedText.value && !_ctx.featuredAtStart ? (openBlock(), createElementBlock("div", {
          key: 2,
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
