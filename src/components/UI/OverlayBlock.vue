<script setup lang="ts">
defineProps<{ active: boolean }>();
defineEmits(["close"]);
</script>

<template>
    <div class="overlay" :class="active ? 'active' : ''" @click="$emit('close')"></div>
</template>

<style scoped lang="scss">
.overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    pointer-events: none;
    z-index: 0;
    transition: 0.3s;

    &.active {
        opacity: 1;
        pointer-events: auto;
    }
}
</style>
