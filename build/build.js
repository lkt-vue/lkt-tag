import { defineComponent, useSlots, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot, Fragment, toDisplayString, createCommentVNode } from "vue";
import { __ } from "lkt-i18n";
const _hoisted_1 = {
  key: 0,
  class: "lkt-tag-content is-slot"
};
const _hoisted_2 = {
  key: 0,
  class: "lkt-tag-featured"
};
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = {
  key: 2,
  class: "lkt-tag-content"
};
const _hoisted_5 = {
  key: 3,
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
    featuredAtStart: { type: Boolean, default: false }
  },
  setup(__props) {
    const slots = useSlots();
    const props = __props;
    const computedClassName = computed(() => {
      let r = [];
      if (props.class) r.push(props.class);
      if (props.featuredAtStart) r.push("featured-at-start");
      return r.join(" ");
    }), computedText = computed(() => {
      let text = String(props.text);
      if (text.startsWith("__:")) {
        text = __(text.substring(3));
      }
      if (props.icon) {
        let icon = '<i class="' + props.icon + '"></i>';
        if (props.iconAtEnd) {
          text += icon;
        } else {
          text = icon + text;
        }
      }
      return text;
    }), computedFeaturedText = computed(() => {
      let text = String(props.featuredText);
      if (text.startsWith("__:")) {
        text = __(text.substring(3));
      }
      return text;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["lkt-tag", computedClassName.value])
      }, [
        unref(slots).default ? (openBlock(), createElementBlock("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "default")
        ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          computedFeaturedText.value && _ctx.featuredAtStart ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(computedFeaturedText.value), 1)) : createCommentVNode("", true),
          _ctx.icon ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: "lkt-tag-content",
            innerHTML: computedText.value
          }, null, 8, _hoisted_3)) : (openBlock(), createElementBlock("div", _hoisted_4, toDisplayString(computedText.value), 1)),
          computedFeaturedText.value && !_ctx.featuredAtStart ? (openBlock(), createElementBlock("div", _hoisted_5, toDisplayString(computedFeaturedText.value), 1)) : createCommentVNode("", true)
        ], 64))
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
