<script setup lang="ts">

// Props
import {computed} from "vue";

const props = withDefaults(defineProps<{
    class: string,

}>(), {
    class: '',
});

const computedClassName = computed(() => {
    return props.class;
});


</script>

<template>
<div class="lkt-tag" :class="computedClassName">
    <div class="lkt-tag-content">
        <slot/>
    </div>
</div>
</template>