<script lang="ts" setup>
const props = defineProps({});


</script>

<template>
    <div class="filter">
        <slot ></slot>
        <!-- <slot name="selectCity"></slot>
        <slot name="selectDate"></slot> -->
        <slot name="layoutToggler"></slot>
    </div>
</template>

<style scoped lang="scss"></style>