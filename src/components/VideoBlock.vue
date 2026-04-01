<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";

const prevEl = ref<HTMLElement | null>(null);
const nextEl = ref<HTMLElement | null>(null);
import { videoLinks } from "@/data/video";

const filters = [
  // { key: "all", label: "все", value: "all" },
  { key: "solo", label: "Сольный концерт", value: "solo" },
  { key: "standup", label: "Стендап", value: "standup" },
  // { key: "interview", label: "Интервью", value: "interview" },
  { key: "show", label: "Шоу", value: "show" },

  // { key: "arzan", label: "Арзан", value: "arzan" },
];
const filter = ref<string>("solo");
const lang = ref<string>("ru");
function setLang(l: string) {
  if (lang.value === l) return;
  lang.value = l;
}

const displayedLinks = computed(() => {
  return videoLinks.filter((l) => {
    const matchType = filter.value === "all" ? true : l.type === filter.value;

    const matchLang = lang.value === "all" ? true : l.lang === lang.value;

    return matchType && matchLang;
  });
});
// const displayedLinks = ref(videoLinks);

const isLoading = ref(false);
// const displayedLinks = ref(videoLinks.filter((l) => l.type === filter.value));

function setFilter(f: string) {
  if (filter.value === f) return; // не переключаем если уже активен
  filter.value = f;
}

// слежение за изменением фильтра
watch([filter, lang], () => {
  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false;
  }, 500);
});
</script>

<template>
  <section
    class="video"
    id="video"
  >
    <div class="container">
      <!-- фильтры -->
      <div class="video__filters">
        <h2 class="video__title title">Видео</h2>
        <div class="video__tabs">
          <button
            :class="{ active: lang === 'kz' }"
            @click="setLang('kz')"
          >
            kz
          </button>

          <button
            :class="{ active: lang === 'ru' }"
            @click="setLang('ru')"
          >
            ru
          </button>
        </div>
        <div class="video__tabs">
          <button
            v-for="f in filters"
            :key="f.value"
            :class="{ active: filter === f.value }"
            @click="setFilter(f.value)"
          >
            {{ f.label }}
          </button>
        </div>
      </div>

      <!-- спиннер и Swiper -->
      <div class="video__wrapper">
        <div
          v-if="isLoading"
          class="spinner-wrapper"
        >
          <div class="spinner"></div>
        </div>

        <Swiper
          v-else
          :modules="[Navigation]"
          :navigation="{
            prevEl: prevEl,
            nextEl: nextEl,
          }"
          :loop="true"
          :auto-height="true"
          :allowTouchMove="true"
          :slides-per-view="3"
          :space-between="20"
          :breakpoints="{
            0: { slidesPerView: 'auto' },
            500: { slidesPerView: 'auto' },
            768: { slidesPerView: 'auto' },
          }"
        >
          <SwiperSlide
            v-for="link in displayedLinks"
            :key="link.url"
            class="video__slide"
          >
            <iframe
              :src="link.embed"
              frameborder="0"
              allow="
                accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
              "
              allowfullscreen
              class="video__iframe"
            ></iframe>

            <!-- <a
              :href="link.url"
              target="_blank"
              class="video__link"
            >
              <img
                :src="link.poster"
                alt="video poster"
              />
            </a> -->
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="video__nav">
        <!-- кастомные стрелки -->
        <button
          ref="prevEl"
          class="video__prev"
        >
          <svg
            width="68"
            height="68"
            viewBox="0 0 68 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="68"
              height="68"
              rx="34"
              fill="black"
            />
            <path
              d="M31.57 27.9299L25.5 33.9999L31.57 40.0699"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M42.5 34H25.67"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          ref="nextEl"
          class="video__next"
        >
          <svg
            width="68"
            height="68"
            viewBox="0 0 68 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="68"
              height="68"
              rx="34"
              fill="black"
            />
            <path
              d="M36.4301 27.9299L42.5001 33.9999L36.4301 40.0699"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25.5 34H42.33"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.swiper-wrapper {
  height: auto !important; /* сброс принудительной высоты */
}

.video {
  background: linear-gradient(113.57deg, #e21421 4.06%, #7c0b12 97.27%);
  padding: 60px 0;
  scroll-margin: 60px 0;
}
.video__nav {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.video__nav button {
  cursor: pointer;
  position: relative;
  width: 54px;
  height: 54px;
  @media screen and (max-width: 500px) {
    width: 36px;
    height: 36px;
  }
  @include transition;
  svg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}
.video__nav button.swiper-button-disabled {
  fill-opacity: 0.5;

  cursor: not-allowed;
}
.video__nav button.swiper-button-disabled svg {
  pointer-events: none;
}
.video__title {
  color: $white;
}
.video__filters {
  display: flex;
  // justify-content: space-between;
  align-items: center;
  gap: 10px;
  background-color: rgba(0, 0, 0, 1);
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 20px 10px;
  }
}
.video__tabs {
  display: flex;
  flex-wrap: wrap;

  gap: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 10px;
  border-radius: 15px;
  &:first-of-type {
    margin-left: auto;
    @media screen and (max-width: 768px) {
      margin-left: 0;
    }
  }
  &:last-of-type {
    display: flex;
    gap: 15px;
  }
  @media screen and (max-width: 500px) {
    padding: 6px;
    border-radius: 9px;
  }
  button {
    padding: 10px;
    border: 1px solid $black;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    cursor: pointer;
    @include transition;
    color: rgba(116, 116, 116, 1);
    @include font_family(500);
    font-size: 24px;
    text-transform: uppercase;
    border: 0;

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
    @media screen and (max-width: 500px) {
      font-size: 12px;
      padding: 7px;
      min-width: 90px;
      // width: 100%;
    }

    &.active {
      background: $red;
      color: $white;
    }
  }
}

.video__wrapper {
  position: relative;
  height: 186px; // фиксированная высота, чтобы не прыгала страница

  margin-bottom: 20px;
}
.video__iframe {
  width: 100%;
  height: 100%;
  border: 0;
}
.video__slide {
  height: 170px;
  flex: 0 0 280px;
}
.video-slide {
  //   max-width: 320px;
  //   width: 100%;
  height: 170px;
  flex: 1 0 320px;
}
.video__link {
  display: block;
  border-radius: 6px;
  overflow: hidden; // обрезает все лишнее
  max-width: 320px;
  width: 100%;
  height: 180px;
  position: relative;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
    object-fit: cover;
    object-position: center;
  }
}

/* CSS спиннер */
.spinner-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: $black;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
