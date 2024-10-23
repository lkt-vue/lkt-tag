<script setup lang="ts">

// Props
import {computed, useSlots} from "vue";
import {__} from "lkt-i18n";

const slots = useSlots();

const props = withDefaults(defineProps<{
    class: string,
    text: string,
    featuredText: string,
    icon: string,
    iconAtEnd: boolean,
    featuredAtStart: boolean,

}>(), {
    class: '',
    text: '',
    featuredText: '',
    icon: '',
    iconAtEnd: false,
    featuredAtStart: false,
});

const computedClassName = computed(() => {
        let r = [];
        if (props.class) r.push(props.class);
        if (props.featuredAtStart) r.push('featured-at-start');
        return r.join(' ');
    }),
    computedText = computed(() => {

        let text = String(props.text);
        if (text.startsWith('__:')) {
            text = __(text.substring(3));
        }

        if (props.icon) {
            let icon = '<i class="' + props.icon + '"></i>'
            if (props.iconAtEnd) {
                text += icon;
            } else {
                text = icon + text;
            }
        }

        return text;
    }),
    computedFeaturedText = computed(() => {

        let text = String(props.featuredText);
        if (text.startsWith('__:')) {
            text = __(text.substring(3));
        }

        return text;
    });
</script>

<template>
    <div class="lkt-tag" :class="computedClassName">
        <template v-if="slots.default">
            <div class="lkt-tag-content is-slot">
                <slot/>
            </div>
        </template>
        <template v-else>
            <div class="lkt-tag-featured" v-if="computedFeaturedText && featuredAtStart">
                {{computedFeaturedText}}
            </div>

            <div class="lkt-tag-content" v-if="icon" v-html="computedText"/>
            <div class="lkt-tag-content" v-else>
                {{computedText}}
            </div>
            <div class="lkt-tag-featured" v-if="computedFeaturedText && !featuredAtStart">
                {{computedFeaturedText}}
            </div>
        </template>
    </div>
</template>