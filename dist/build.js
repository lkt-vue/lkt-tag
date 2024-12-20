import { defineComponent, useSlots, computed, resolveComponent, openBlock, createElementBlock, normalizeClass, toDisplayString, createCommentVNode, createElementVNode, createBlock, unref, renderSlot, Fragment, createTextVNode } from "vue";
import { __ } from "lkt-i18n";
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
      let text = String(props.text);
      if (text.startsWith("__:")) {
        text = __(text.substring(3));
      }
      return text;
    }), computedFeaturedText = computed(() => {
      let text = String(props.featuredText);
      if (text.startsWith("__:")) {
        text = __(text.substring(3));
      }
      return text;
    });
    const onClickIcon = () => {
      emit("click-icon");
    };
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
