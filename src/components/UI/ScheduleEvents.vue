<script setup lang="ts">
import type { Event } from "@/types/event";
import { computed } from "vue";
import { formatDate } from "@/utils/formDate";
import { useI18n } from "vue-i18n";
const props = defineProps<{
  events: Event[];
  mode: "line" | "card";
}>();
const { t } = useI18n();
// Можно сразу использовать props.events, либо создать computed на будущее:
const filteredEvents = computed(() => props.events);

const formatEventDate = (date: string) => formatDate(date);
</script>

<template>
  <div class="events">
    <!-- Line mode -->
    <div
      v-if="mode === 'line'"
      class="events__line"
    >
      <div
        v-for="event in filteredEvents"
        :key="event.id"
        class="event__line"
      >
        <div class="event__cel">
          <p class="event__city">{{ event.city[0]?.title }}</p>
          <p class="event__address">{{ event.address }}</p>
        </div>
        <div class="event__cel">
          <p class="event__datetime">
            {{ formatEventDate(event.date) }} {{ event.time }}
          </p>
        </div>
        <div class="event__cel">
          <p class="event__type">{{ event.title }}</p>
        </div>
        <div class="event__cel">
          <a
            :href="event.url"
            target="_blank"
            class="event__ticket"
            >{{ t("schedule.link") }}</a
          >
        </div>
      </div>
    </div>

    <!-- Card mode -->
    <div
      v-else
      class="events__cards"
    >
      <a
        :href="event.url"
        v-for="event in filteredEvents"
        :key="event.id"
        class="event__card"
      >
        <img
          :src="event.image"
          :alt="event.title"
        />

        <div
          style="
            margin: 20px 0;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-direction: column;
            gap: 10px;
          "
        >
          <p
            class="event__city"
            style="
              color: #fff;
              font-weight: bold;
              font-size: 24px;
              display: flex;
              margin: 0;
            "
          >
            {{ event.city[0]?.title }}
          </p>
          <p
            class="event__city"
            style="color: #fff; font-size: 20px; display: flex; margin: 0"
          >
            {{ formatEventDate(event.date) }} {{ event.time }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.events__line {
  display: flex;
  flex-direction: column;
  gap: 20px;
  .event {
    &__line {
      background-color: rgba(255, 255, 255, 1);
      padding: 10px;
      border-radius: 10px;
      color: $black;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media screen and (max-width: 500px) {
        flex-direction: column;
        gap: 20px;
      }
    }

    &__cel {
      width: 25%;
      @media screen and (max-width: 500px) {
        width: 100%;
      }
    }
    &__city {
      line-height: 30px;
      margin-bottom: 5px;
      display: inline-block;
    }
    &__city,
    &__datetime {
      @include font_family(600);
      text-transform: uppercase;
    }
    &__type,
    &__datetime {
      text-align: center;
      @media screen and (max-width: 500px) {
        text-align: left;
      }
    }
    &__address,
    &__type {
      @include font_family(300);
    }

    &__ticket {
      margin-left: auto;
      @include font_family(300);
      font-size: 18px;
      text-transform: uppercase;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background-color: rgba(226, 20, 33, 1);
      max-width: 200px;
      width: auto;
      padding: 10px;
      color: $white;

      @media screen and (max-width: 500px) {
        margin: 0;
        max-width: 100%;
        height: auto;
        font-size: 14px;
        padding: 15px;
      }
    }
  }
}

.events__cards {
  display: grid;
  gap: 16px; // расстояние между фото
  grid-template-columns: repeat(4, 1fr); // по умолчанию 4 фото на десктоп
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  // Мобилка
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  .event__card {
    // aspect-ratio: 1080 / 1350; // сохраняем пропорции
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
}
</style>
