<script setup lang="ts">

// Props
import {computed, useSlots} from "vue";
import {__} from "lkt-i18n";

const slots = useSlots();
const emit = defineEmits(['click-icon']);

const props = withDefaults(defineProps<{
    class?: string,
    text?: string,
    featuredText?: string,
    icon?: string,
    iconAtEnd?: boolean,
    featuredAtStart?: boolean,
    type?: string

}>(), {
    class: '',
    text: '',
    featuredText: '',
    icon: '',
    iconAtEnd: false,
    featuredAtStart: false,
    type: '',
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

        return text;
    }),
    computedFeaturedText = computed(() => {

        let text = String(props.featuredText);
        if (text.startsWith('__:')) {
            text = __(text.substring(3));
        }

        return text;
    });

const onClickIcon = () => {
    emit('click-icon')
};
</script>

<template>
    <div class="lkt-tag" :class="computedClassName">
        <div class="lkt-tag-featured" v-if="computedFeaturedText && featuredAtStart">
            {{computedFeaturedText}}
        </div>
        <lkt-icon
            v-if="icon"
            :icon="icon"
            :type="type === 'action-icon' ? 'button' : ''"
            @click="onClickIcon"
        />
        <template v-if="slots.default">
            <div class="lkt-tag-content is-slot">
                <slot/>
            </div>
        </template>
        <template v-else>
            <div class="lkt-tag-content">
                {{computedText}}
            </div>
        </template>
        <div class="lkt-tag-featured" v-if="computedFeaturedText && !featuredAtStart">
            {{computedFeaturedText}}
        </div>
    </div>
</template>