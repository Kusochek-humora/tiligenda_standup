<script setup lang="ts">
import ScheduleFilter from "./UI/ScheduleFilter.vue";
// import ScheduleSelect from "./UI/ScheduleSelect.vue";
// import ScheduleCalendar from "./UI/ScheduleCalendar.vue";
import ScheduleToggler from "./UI/ScheduleToggler.vue";
import ScheduleEvents from "./UI/ScheduleEvents.vue";

import { events } from "../data/events";
// import { cities } from "../data/cities";
import type { City } from "@/types/city";
import type { Event } from "@/types/event";

import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const selectedCity = ref<City | null>(null);
const selectedDate = ref<Date | null>(null);
const mode = ref<"line" | "card">("card");

// Фильтр событий по городу и дате
const filteredEvents = computed(() => {
  return events.filter((event: Event) => {
    let cityMatch = true;
    let dateMatch = true;

    // проверка города
    if (selectedCity.value) {
      cityMatch = event.city.some((c) => c.id === selectedCity.value!.id);
    }

    // проверка даты
    if (selectedDate.value) {
      const eventDate = new Date(event.date);
      dateMatch =
        eventDate.getFullYear() === selectedDate.value.getFullYear() &&
        eventDate.getMonth() === selectedDate.value.getMonth() &&
        eventDate.getDate() === selectedDate.value.getDate();
    }

    return cityMatch && dateMatch;
  });
});
</script>
<template>
  <section
    class="schedule"
    id="schedule"
  >
    <div class="schedule__container container">
      <div class="schedule__content">
        <ScheduleFilter class="schedule__filter">
          <template #default>
            <h2 class="schedule__title title">
              {{ t("schedule.title") }}
            </h2>
          </template>
          <template #layoutToggler>
            <ScheduleToggler @update:mode="mode = $event" />
          </template>
          <!-- <template #selectCity> -->
          <!-- <ScheduleSelect
              v-model:modelValue="selectedCity"
              :options="cities"
      
            /> -->
          <!-- </template> -->
        </ScheduleFilter>
      </div>

      <div class="schedule__events">
        <ScheduleEvents
          :events="filteredEvents"
          :mode="mode"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.schedule {
  padding: 100px 0 150px;
  background-color: $black;
  // min-height: 1000px;

  // &__container {
  // }

  &__title {
    text-align: center;
    color: $white;
    // margin-bottom: 40px;
  }

  // &__content {
  // }

  &__filter {
    margin-bottom: 80px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
}
.toggler {
  margin-left: auto;
}

</style>
