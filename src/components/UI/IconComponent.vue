<script setup lang="ts">
import { computed } from "vue";
import { icons } from "../Icons";
import type { IconProps } from "../Icons";

const props = defineProps<IconProps>();

const CurrentIcon = computed(() => {
    return icons[props.name as keyof typeof icons] || null;
});

// const svgColor = computed(() => props.color || 'inherit')
</script>

<template>
    <component :is="CurrentIcon"  v-if="CurrentIcon" />
</template>
<style></style>
