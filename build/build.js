import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot } from "vue";
const _hoisted_1 = { class: "lkt-tag-content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LktTag",
  props: {
    class: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const computedClassName = computed(() => {
      return props.class;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["lkt-tag", computedClassName.value])
      }, [
        createElementVNode("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "default")
        ])
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
