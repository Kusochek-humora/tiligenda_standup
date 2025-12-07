<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import Typed from "typed.js";
import { useI18n } from "vue-i18n";
import IconComponent from "./UI/IconComponent.vue";

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
        strings: [t("promo.welcome"), `${t("promo.ageBread")} ${breadCount} ${t("promo.lastBread")}`],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        loop: true,
        showCursor: true
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
                <img src="../assets/images/tiko.webp" alt="Tiko">
            </div>
            <div class="promo__info">
                <div class="promo__info-block">
                    <h1 class="promo__title">
                        <span ref="typedEl"></span>
                    </h1>


                    <div class="promo__links">
                        <a href="#" class="promo__link">Афиша</a>
                        <a href="#" class="promo__link">Связаться со мной</a>
                    </div>
                </div>

                <div class="promo__socials">

                    <a href="#" target="_blank" class="promo__socials-link">
                        Instagram
                    </a>
                    <a href="#" target="_blank" class="promo__socials-link">
                        Threads
                    </a>
                    <a href="#" target="_blank" class="promo__socials-link">
                        Youtube
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
.promo {
    margin-top: 122px;
    padding: 50px 0;
    background-color: $black;

    &__container {
        display: flex;
        gap: 20px;
        align-items: center;

        @media screen and (max-width:1024px) {
            flex-direction: column;
        }
    }

    &__img {
        height: 430px;

        @media screen and (max-width:1024px) {
            height: auto;
            max-width: 442px;
height: 430px;
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

        @media screen and (max-width:500px) {
            max-width: 340px;
            height: 330px;
        }

    }

    &__sub {
        font-size: 32px;
        font-weight: 700;
        color: $white;
    }

    &__info {
        display: flex;
        flex-direction: column;
        justify-content: center;

        height: 430px;

        @media screen and (max-width:1024px) {
            height: auto;
            max-width: 100%;
            width: 100%;
            align-items: center;
        }

        &-block {
            width: 100%;
            margin-top: auto;
        }
    }

    &__title {
        font-size: 52px;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 110px;
        color: #fff;

        @media screen and (max-width:1024px) {
            display: block;
            font-size: 25px;

        }
    }

    &__links {
        display: flex;
        gap: 10px;

        @media screen and (max-width:1024px) {
            flex-direction: column;
            gap: 20px;

        }
    }

    &__socials {
        margin-top: auto;
        display: flex;
        gap: 10px;

        @media screen and (max-width:1024px) {
            margin-top: 20px;
        }

        &-link {
            font-size: 24px;
            color: $white;
            @include transition-base;
            display: inline-block;
            position: relative;
            padding-bottom: 3px;
            @include transition-base;

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
    color: $red;
    border-radius: 4px;
    text-decoration: none;
    border: 1px solid $red;

    transition: color .3s ease;
}

/* Нижний слой */
.promo__link::before {
    content: "";
    position: absolute;
    background: $red;
    inset: auto auto 0 0; // снизу
    width: 100%;
    height: 0;
    z-index: -1;
    transition: .3s ease;
}

/* Верхний слой */
.promo__link::after {
    content: "";
    position: absolute;
    background: $red;
    inset: 0 auto auto 0; // сверху
    width: 100%;
    height: 0;
    z-index: -1;
    transition: .3s ease;
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