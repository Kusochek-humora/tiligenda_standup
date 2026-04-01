<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import Typed from "typed.js";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const typedEl = ref<HTMLElement | null>(null);
let typedInstance: Typed | null = null;
const birthYear = 2000;
const currentYear = new Date().getFullYear();
const breadCount = currentYear - birthYear;
function initTyped() {
  if (!typedEl.value) return;

  if (typedInstance) typedInstance.destroy(); // уничтожаем старый Typed.js

  typedInstance = new Typed(typedEl.value, {
    strings: [
      t("promo.welcome"),
      `${t("promo.ageBread")} ${breadCount} ${t("promo.lastBread")}`,
    ],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
    showCursor: true,
  });
}

onMounted(() => {
  initTyped();
});

// Следим за сменой языка
watch(locale, () => {
  initTyped();
});
</script>
<template>
  <section class="promo">
    <div class="promo__container container">
      <div class="promo__img">
        <img
          src="../assets/images/tiko.webp"
          alt="Tiko"
        />
      </div>
      <div class="promo__info">
        <div class="promo__info-block">
          <h1 class="promo__title">
            {{ t("promo.text") }}
          </h1>

          <div class="promo__links">
            <a
              href="#schedule"
              class="promo__link schedule"
            >
              {{ t("promo.title-btn") }}</a
            >
            <a
              href="#contacts"
              class="promo__link popup"
              >{{ t("promo.contacts") }}</a
            >
          </div>
        </div>

        <!-- <div class="promo__socials">
          <a
            href="https://www.instagram.com/tilegen.da"
            target="_blank"
            class="promo__socials-link"
          >
            Instagram
          </a>
          <a
            href="https://www.threads.com/@tilegen.da"
            target="_blank"
            class="promo__socials-link"
          >
            Threads
          </a>
          <a
            href="https://www.youtube.com/@TilegendaStandupa"
            target="_blank"
            class="promo__socials-link"
          >
            Youtube
          </a>
        </div> -->
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.promo {
  margin-top: 122px;
  padding: 50px 0;
  background-color: $white;
  // min-height: calc(100vh - 222px);
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 0 0 50px;
  }
  @media screen and (max-width: 500px) {
    margin-top: 64px;
  }
  &__container {
    display: flex;
    gap: 20px;
    align-items: center;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__img {
    height: 430px;

    @media screen and (max-width: 1024px) {
      position: relative;
      height: auto;
      height: 340px;
      max-width: 340px;
      width: 100%;
      position: relative;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    @media screen and (max-width: 768px) {
      height: auto;
      max-width: 442px;
      height: 430px;
      width: 100%;
      position: relative;
    }

    @media screen and (max-width: 500px) {
      max-width: 340px;
      height: 330px;
    }
  }

  &__sub {
    font-size: 32px;
    font-weight: 700;
    color: $black;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 430px;

    @media screen and (max-width: 1024px) {
      height: 340px;
    }

    @media screen and (max-width: 768px) {
      height: auto;
      max-width: 100%;
      width: 100%;
      align-items: center;
    }

    &-block {
      width: 100%;
      // margin-top: auto;
    }
  }

  &__title {
    font-size: 52px;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 110px;
    color: $black;

    @media screen and (max-width: 1024px) {
      font-size: 32px;
    }

    @media screen and (max-width: 768px) {
      display: block;
      font-size: 25px;
    }
    @media screen and (max-width: 500px) {
      line-height: 100%;
      text-align: center;
      margin-bottom: 20px;
    }
  }

  &__links {
    display: flex;
    gap: 10px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 20px;
    }
    @media screen and (max-width: 500px) {
      gap: 10px;
    }
  }

  &__socials {
    margin-top: auto;
    display: flex;
    gap: 10px;

    @media screen and (max-width: 768px) {
      margin-top: 20px;
    }

    &-link {
      font-size: 24px;
      color: $black;
      @include transition-base;
      display: inline-block;
      position: relative;
      padding-bottom: 3px;

      &:hover {
        color: $red;

        &::before {
          background-color: $red;
        }
      }

      &::before {
        content: "";
        position: absolute;
        bottom: -2px;
        width: 100%;
        height: 2px;
        background-color: #fff;
        @include transition-base;
      }
    }
  }

  // &__link {
  //     display: inline-flex;
  //     align-items: center;
  //     justify-content: center;
  //     padding: 15px;
  //     font-size: 18px;
  //     background-color: transparent;
  //     font-weight: 400;
  //     text-transform: uppercase;
  //     color: $red;
  //     border-radius: 5px;
  //     text-decoration: none;
  //     border: 1px solid $red;
  // }
}

.promo__link {
  position: relative;
  overflow: hidden;
  z-index: 0;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  font-size: 18px;
  background-color: transparent;
  font-weight: 400;
  text-transform: uppercase;
  color: $black;
  border-radius: 4px;
  text-decoration: none;
  border: 1px solid $black;

  transition: color 0.3s ease;

  &.schedule {
    background-color: $black;
    color: $white;

    &:hover {
      border-color: $red;
    }

    &::before,
    &::after {
      background-color: $red;
    }
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
    padding: 10px;
  }
}

/* Нижний слой */
.promo__link::before {
  content: "";
  position: absolute;
  background: $black;
  inset: auto auto 0 0; // снизу
  width: 100%;
  height: 0;
  z-index: -1;
  transition: 0.3s ease;
}

/* Верхний слой */
.promo__link::after {
  content: "";
  position: absolute;
  background: $black;
  inset: 0 auto auto 0; // сверху
  width: 100%;
  height: 0;
  z-index: -1;
  transition: 0.3s ease;
}

/* Ховер */
.promo__link:hover {
  color: #fff; // чтобы текст был читаем на красном
}

.promo__link:hover::before {
  height: 50%;
}

.promo__link:hover::after {
  height: 50%;
}
</style>
