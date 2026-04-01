<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { VueDatePicker } from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import IconComponent from "./IconComponent.vue";
import { useI18n } from "vue-i18n";

const props = defineProps<{
  modelValue?: Date | null
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: Date | null): void
}>();

const { t } = useI18n();

const date = ref<Date | null>(props.modelValue ?? null);
const isOpen = ref(false);

const toggle = () => (isOpen.value = !isOpen.value);
const open = () => (isOpen.value = true);
const close = () => (isOpen.value = false);

// сброс даты
const resetDate = () => {
  date.value = null;
  emit('update:modelValue', null);
  close();
};

// формат для инпута
const formattedDate = computed(() => {
  if (!date.value) return t("schedule.allDates") || "Все даты";
  return date.value.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
});

// при выборе даты в календаре
const onSelect = (val: Date) => {
  date.value = val;
  emit('update:modelValue', val);
  close();
};

// синхронизация с родителем
watch(() => props.modelValue, val => {
  date.value = val ?? null;
});
</script>

<template>
  <div class="calendar">
    <div class="calendar__field">
      <button class="calendar__btn" type="button" @click.stop="toggle">
        <IconComponent name="calendar" class="icon" size="43" />
      </button>

      <input
        type="text"
        class="calendar__input"
        :value="formattedDate"
        readonly
        @click.stop="open"
      />
    </div>

    <div v-if="isOpen" class="calendar__popup">
      <VueDatePicker
        :model-value="date"
        @update:model-value="onSelect"
        inline
        auto-apply
        :enable-time-picker="false"
      />

      <button class="calendar__reset" @click="resetDate">
        {{ t("schedule.clear") }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.calendar {
  position: relative;
}

.calendar__field {
  display: flex;
  align-items: center;
  gap: 12px;
}

.calendar__btn {
  padding: 0;
  background: none;
  border: none;
}

.icon {
  width: 43px;
  height: 43px;
}

.calendar__input {
  height: 43px;
  padding: 0 14px;
  border-radius: 10px;
  border: 1px solid $white;
  background: $black;
  font-size: 18px;
  cursor: pointer;
  color: $white;
}

.calendar__input:focus {
  outline: none;
  border-color: #d7272d;
}

.calendar__popup {
  position: absolute;
  top: 70px;
  right: 0;
  z-index: 20;
  background: #fff;
  border-radius: 16px;
  padding: 10px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}
</style>
