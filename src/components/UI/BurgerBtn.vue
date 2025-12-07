<script setup lang="ts">
defineProps<{ active: boolean }>();
</script>

<template>
    <button type="button" class="burger-btn" :class="active ? 'active' : ''">
        <span></span>
        <span></span>
        <span></span>
    </button>
</template>


<style scoped lang="scss">
.burger-btn {
    width: 46px;
    height: 46px;
    display: none;
    flex-direction: column;
    justify-content: center;
    padding: 14px 11px;
    cursor: pointer;
    border: 0;
    border-radius: 10px;
    background-color: $black;

    @media screen and (max-width:768px) {
        display: flex;
        gap: 5px;
    }

    @media screen and (max-width:500px) {
        width: 38px;
        height: 38px;
        padding: 10px 7px;

    }

    span {
        height: 3px;
        background: $white;
        border-radius: 2px;
        transition: 0.3s;
        pointer-events: none;
    }

    &.active span:nth-child(1) {
        transform: translateY(7.5px) rotate(45deg);
    }

    &.active span:nth-child(2) {
        opacity: 0;
    }

    &.active span:nth-child(3) {
        transform: translateY(-7.5px) rotate(-45deg);
    }
}
</style>
