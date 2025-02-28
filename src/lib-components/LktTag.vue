<script setup lang="ts">
import {computed, useSlots} from "vue";
import {extractI18nValue} from "lkt-vue-kernel";

const slots = useSlots();
const emit = defineEmits(['click-icon']);

const props = withDefaults(defineProps<{
    class?: string
    text?: string
    featuredText?: string
    icon?: string
    iconAtEnd?: boolean
    featuredAtStart?: boolean
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
        return extractI18nValue(props.featuredText);
    }),
    computedFeaturedText = computed(() => {
        return extractI18nValue(props.featuredText);
    });

const onClickIcon = () => emit('click-icon');
</script>

<template>
    <div class="lkt-tag" :class="computedClassName">
        <div class="lkt-tag-featured" v-if="computedFeaturedText && featuredAtStart">
            {{ computedFeaturedText }}
        </div>

        <div class="lkt-tag-content">
            <lkt-icon
                v-if="icon"
                :icon="icon"
                :type="type === 'action-icon' ? 'button' : ''"
                @click="onClickIcon"
            />
            <template v-if="slots.default">
                <slot/>
            </template>
            <template v-else>
                {{ computedText }}
            </template>
        </div>
        <div class="lkt-tag-featured" v-if="computedFeaturedText && !featuredAtStart">
            {{ computedFeaturedText }}
        </div>
    </div>
</template>