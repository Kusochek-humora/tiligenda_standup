<script setup lang="ts">
import { ref } from "vue";
import IconComponent from "./IconComponent.vue";

const emit = defineEmits<{ (e: "update:mode", mode: "line" | "card"): void }>();
const active = ref<"line" | "card">("line");

const setMode = (mode: "line" | "card") => {
  active.value = mode;
  emit("update:mode", mode);
};
</script>

<template>
  <div class="toggler">
    <button
      class="toggler__btn"
      :class="{ active: active === 'line' }"
      type="button"
      @click="setMode('line')"
    >
      <IconComponent
        :class="{ active: active === 'line' }"
        class="toggler__icon"
        name="line_mode"
      />
    </button>
    <button
      class="toggler__btn"
      :class="{ active: active === 'card' }"
      type="button"
      @click="setMode('card')"
    >
      <IconComponent
        :class="{ active: active === 'card' }"
        class="toggler__icon"
        name="card_mode"
      />
    </button>
  </div>
</template>

<style scoped lang="scss">
.toggler {
  display: flex;
  gap: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 10px;
  @media screen and (max-width: 500px) {
    border-radius: 10px;
    padding: 6px;
  }
  &__btn {
    width: 35px;
    height: 35px;
    position: relative;
    cursor: pointer;
    border-radius: 10px;
    transition: 0.3s all;
    @media screen and (max-width: 500px) {
      border-radius: 6px;
      width: 24px;
      height: 24px;
    }
    ::v-deep(svg path) {
      transition: 0.3s all;
      fill: rgba(116, 116, 116, 1); // обычный цвет
    }
    ::v-deep(svg rect) {
      fill: transparent; // обычный цвет
    }
    &.active {
      background-color: $red;
      ::v-deep(svg path) {
        fill: $white; // обычный цвет
      }
    }
  }

  &__icon {
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: 0.3s all;
  }
}
</style>
