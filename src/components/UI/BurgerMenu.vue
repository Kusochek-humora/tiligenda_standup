<template>
  <div class="menu">
    <div
      class="burger-menu"
      :class="{ active }"
    >
      <ul class="burger-menu__list">
        <li @click="$emit('close')">
          <a href="#schedule">{{ t("header.link-1") }}</a>
        </li>
        <li @click="$emit('close')">
          <a href="#video">{{ t("header.link-2") }}</a>
        </li>
        <!-- <li @click="$emit('close')">
          <a href="#merch">{{ t("header.link-3") }}</a>
        </li> -->
        <li @click="$emit('close')">
          <a href="#contacts">{{ t("header.link-4") }}</a>
        </li>
      </ul>
      <SocialsList />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import SocialsList from "./SocialsList.vue";
defineProps<{ active: boolean }>();

const { t } = useI18n();
</script>

<style scoped lang="scss">
.burger-menu {
  position: fixed;
  top: 112px;
  right: -100%;
  width: 300px;
  background: $white;
  padding: 70px 20px 40px;
  z-index: 1000;
  transition: 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 500px) {
    top: 64px;
  }
  &.active {
    right: 0;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;

    a {
      color: $black;
      text-decoration: none;
      font-size: 20px;
      font-weight: 600;
      text-transform: uppercase;
      transition: 0.2s;

      &:hover {
        color: $red;
      }
    }
  }
}

.social {
  &__links {
    margin-top: 20px;
    display: flex;
    gap: 10px;
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
