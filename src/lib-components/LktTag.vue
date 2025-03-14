<script setup lang="ts">
import {computed, useSlots} from "vue";
import {extractI18nValue, getDefaultValues, IconType, Tag, TagConfig, TagType} from "lkt-vue-kernel";

const slots = useSlots();
const emit = defineEmits([
    'click-icon'
]);

const props = withDefaults(defineProps<TagConfig>(), getDefaultValues(Tag));

const computedClassName = computed(() => {
        let r = [];
        if (props.class) r.push(props.class);
        if (props.featuredAtStart) r.push('featured-at-start');
        return r.join(' ');
    }),
    computedText = computed(() => extractI18nValue(props.text)),
    computedFeaturedText = computed(() => extractI18nValue(props.featuredText));

const onClickIcon = () => emit('click-icon');
</script>

<template>
    <div class="lkt-tag" :class="computedClassName">
        <div class="lkt-tag-featured" v-if="computedFeaturedText && featuredAtStart" v-html="computedFeaturedText"/>

        <div class="lkt-tag-content">
            <lkt-icon
                v-if="icon"
                :icon="icon"
                :type="type === TagType.ActionIcon ? IconType.Button : IconType.NotDefined"
                @click="onClickIcon"
            />
            <template v-if="slots.default">
                <slot/>
            </template>
            <template v-else>
                {{ computedText }}
            </template>
        </div>
        <div class="lkt-tag-featured" v-if="computedFeaturedText && !featuredAtStart" v-html="computedFeaturedText"/>
    </div>
</template>