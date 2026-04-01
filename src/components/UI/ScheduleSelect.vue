<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { onClickOutside } from "@vueuse/core";
import type { City } from "@/types/city";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const allOption = computed<City>(() => ({
  id: 0,
  title: t("schedule.all-cities"),
}));
const computedOptions = computed<City[]>(() => [allOption.value, ...props.options]);

const props = defineProps<{
  options: City[];
  modelValue?: City | null;
  placeholder?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: City | null): void;
}>();

const selected = ref<City | null>(props.modelValue || null);

watch(selected, (val) => {
  emit("update:modelValue", val);
});

const isOpen = ref(false);
const toggleOpen = () => (isOpen.value = !isOpen.value);
const selectItem = (option: City) => {
  if (option.id === 0) {
    selected.value = null; // сброс фильтра
  } else {
    selected.value = option;
  }
  isOpen.value = false;
};

const displayValue = computed(
  () => selected.value?.title || props.placeholder || t("schedule.placeholder"),
);

// Закрытие при клике вне
const selectRef = ref<HTMLElement | null>(null);
onClickOutside(selectRef, () => (isOpen.value = false));
</script>

<template>
  <div
    class="custom-select"
    ref="selectRef"
  >
    <button
      type="button"
      class="custom-select__trigger"
      @click="toggleOpen"
    >
      {{ displayValue }}
      <span
        class="custom-select__arrow"
        :class="{ 'custom-select__arrow--open': isOpen }"
      >
        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.99996 9.12045C7.7132 9.12045 7.42649 9.01096 7.20787 8.79245L0.328226 1.91274C-0.109409 1.4751 -0.109409 0.765551 0.328226 0.328093C0.765684 -0.109364 1.47509 -0.109364 1.91276 0.328093L7.99996 6.41564L14.0872 0.328306C14.5248 -0.109152 15.2342 -0.109152 15.6716 0.328306C16.1094 0.765764 16.1094 1.47531 15.6716 1.91295L8.79205 8.79266C8.57332 9.01121 8.2866 9.12045 7.99996 9.12045Z"
            fill="white"
          />
        </svg>
      </span>
    </button>

    <ul
      v-if="isOpen"
      class="custom-select__list"
    >
      <li
        v-for="option in computedOptions"
        :key="option.id"
        class="custom-select__item"
        @click="selectItem(option)"
      >
        {{ option.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.custom-select {
  position: relative;
  max-width: 220px;
  width: 100%;
  font-family: "Oswald";
}

.custom-select__trigger {
  width: 100%;
  padding: 10px 14px;
  text-align: left;
  background: $black;
  border: 1px solid $white;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  color: $white;
  align-items: center;
  font-weight: 300;
  font-size: 18px;
  @include transition;
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
}

.custom-select__trigger:focus {
  outline: none;
  border-color: $red;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
}

.custom-select__arrow {
  transition: transform 0.2s ease;
}

.custom-select__arrow--open {
  transform: rotate(180deg);
}

.custom-select__list {
  position: absolute;
  z-index: 50;
  width: 100%;
  margin-top: 4px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-height: 240px;
  overflow-y: auto;
}

.custom-select__item {
  padding: 10px 14px;
  cursor: pointer;
}

.custom-select__item:hover {
  background: #eff6ff;
}
</style>
