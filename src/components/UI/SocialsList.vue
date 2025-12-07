<script lang="ts" setup>
import IconComponent from "./IconComponent.vue";

</script>

<template>

    <ul class="social__links">
        <li @click="$emit('close')" class="social__links-item">
            <a target="_blank" href="https://www.instagram.com/tilegen.da" class="social__link-link">
                <IconComponent class="social__links-svg" name="inst"></IconComponent>
            </a>
        </li>
        <li @click="$emit('close')" class="social__links-item">
            <a target="_blank" href="https://www.youtube.com/@TilegendaStandupa" class="social__link-link">
                <IconComponent class="social__links-svg" name="youtube"></IconComponent>
            </a>
        </li>
        <li @click="$emit('close')" class="social__links-item">
            <a target="_blank" href="https://www.threads.com/@tilegen.da" class="social__link-link">
                <IconComponent class="social__links-svg" name="threads"></IconComponent>
            </a>
        </li>
    </ul>
</template>

<style scoped lang="scss">
.social {


    &__links {
      
        display: flex;
        gap: 10px;
     margin-top: 20px;
    }

    // &__links-item {}

    // &__link-link {}

    &__links-svg {
        pointer-events: none;
        width: 32px;
        height: 32px;
    }
}
</style>