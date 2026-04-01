<script lang="ts" setup>
import { ref } from "vue";
import BaseHeader from "./components/BaseHeader.vue";
import BurgerMenu from "./components/UI/BurgerMenu.vue";
import OverlayBlock from "./components/UI/OverlayBlock.vue";
import PromoBlock from "./components/PromoBlock.vue";
import ScheduleBlock from "./components/ScheduleBlock.vue";
import VideoBlock from "./components/VideoBlock.vue";
import ContactBlock from "./components/ContactBlock.vue";
import FooterBase from "./components/FooterBase.vue";
const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  console.log(isOpen.value);
};
const closeMenu = () => (isOpen.value = false);
</script>

<template>
  <BaseHeader
    :active="isOpen"
    @toggle="toggleMenu"
  />
  <PromoBlock />
  <ScheduleBlock />
  <VideoBlock />
  <ContactBlock />
  <FooterBase />
  <OverlayBlock
    :active="isOpen"
    @close="closeMenu"
  />

  <BurgerMenu
    :active="isOpen"
    @close="closeMenu"
  />
</template>
