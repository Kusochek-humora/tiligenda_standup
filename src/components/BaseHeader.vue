!
<script lang="ts" setup>
import BaseLogo from "./UI/BaseLogo.vue";
import LangSwitcher from "./UI/LangSwitcher.vue";
import BurgerBtn from "./UI/BurgerBtn.vue";

import { useI18n } from "vue-i18n";


const { t } = useI18n();



defineProps<{ active: boolean }>();
defineEmits<{ (e: 'toggle'): void }>();
</script>

<template>
  <header class="header">
    <nav class="header__container container">
      <BaseLogo class="header__logo"></BaseLogo>
      <LangSwitcher class="header__lang"></LangSwitcher>
      <ul class="header__list">
        <li class="header__list-item">
          <a class="header__list-link" href="#afisha">{{ t("header.link-1") }}</a>
        </li>

        <li class="header__list-item">
          <a class="header__list-link" href="#efiry">{{ t("header.link-2") }}</a>
        </li>

        <li class="header__list-item">
          <a class="header__list-link" href="#merch">{{ t("header.link-3") }}</a>
        </li>

        <li class="header__list-item">
          <a class="header__list-link" href="#contacts">{{ t("header.link-4") }}</a>
        </li>
      </ul>
      <!-- burger button -->
      <BurgerBtn :active="active" @click="$emit('toggle')" />


    </nav>



  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 30px 0;
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  background-color: #fff;

  &__container {
    display: flex;
    align-items: center;

  }

  &__logo {}

  &__lang {
    @include m(0 40px 0 auto);

    @media screen and (max-width:768px) {
      @include m(0 15px 0 auto)
    }
  }

  &__list {
    display: flex;
    gap: 40px;

    @media screen and (max-width:768px) {
      display: none;
    }
  }

  &__list-item {}

  &__list-link {
    text-transform: uppercase;
    color: $black;
    font-weight: 600;
    text-decoration: none;
    @include transition-base;
    display: inline-block;
    position: relative;

    &::after,
    &::before {

      content: "";
      position: absolute;
      bottom: -5px;
      width: 0;
      height: 2px;
      background-color: $red;
      display: block;
      @include transition-base;
    }


    &::after {
      right: 50%;
    }

    &::before {
      left: 50%;
    }

    &:hover {
      color: $red;

      &::after,
      &::before {
        width: 50%;
      }


    }
  }

  &__burger {
    display: none;

    @media screen and (max-width:768px) {
      display: flex;
    }
  }
}
</style>
