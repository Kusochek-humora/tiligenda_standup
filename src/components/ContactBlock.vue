<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import IconComponent from "./UI/IconComponent.vue";
const { t } = useI18n();
</script>

<template>
  <section
    class="contact"
    id="contacts"
  >
    <div class="contact__container container">
      <h2 class="contact__title title">
        {{ t("contacts.text") }}
      </h2>
      <ul class="contact__list">
        <div class="contact__list-item">
          <a
            href="https://wa.me/77760576431"
            class="contact__list-link"
          >
            <span>WHATSAPP</span>
            <IconComponent
              class="contact__list-icon"
              name="con_wpp"
            ></IconComponent>
          </a>
        </div>
        <div class="contact__list-item">
          <a
            href="https://t.me/+77760576431"
            class="contact__list-link"
            ><span> Telegram </span>
            <IconComponent
              class="contact__list-icon"
              name="con_telega"
            ></IconComponent>
          </a>
        </div>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact {
  padding: 60px 0;
  background-image: url(../assets/images/bg-contact.webp);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: clamp(400px, 50vw, 900px);
  filter: grayscale(1);
  position: relative;
  @media screen and (max-width: 768px) {
    background-position: 34% 0;
  }
}

.contact::before {
  content: "";
  position: absolute;
  inset: 0;
}
.contact__container {
  position: relative;
  z-index: 2;
}

.contact {
  display: flex;
  align-items: center;
  @media screen and (max-width: 500px) {
    // align-items: flex-start;
  }
  //   &__container {
  //     height: 100%;
  //     display: flex;
  //     align-items: flex-end;
  //     justify-content: center;
  //     flex-direction: column;
  //     gap: 40px 0;
  //   }
  &__title {
    color: $white;
    text-align: right;
    font-size: clamp(40px, 4vw, 70px);
    margin-bottom: 40px;
    @media screen and (max-width: 500px) {
      font-size: 28px;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__list-item {
    margin-left: auto;
  }
  &__list-icon {
    width: clamp(32px, 4vw, 60px);
    height: clamp(32px, 4vw, 60px);
    @media screen and (max-width: 500px) {
      width: 22px;
      height: 22px;
    }
  }
  &__list-link {
    display: flex;
    max-width: 465px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    span {
      color: #fff;
      @include font-family(700);
      text-transform: uppercase;
      font-size: clamp(32px, 4vw, 60px);
      line-height: 100%;

      @media screen and (max-width: 500px) {
        font-size: 22px;
      }
    }
  }
}
</style>
