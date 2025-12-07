<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const changeLang = (lang: "ru" | "kz") => {
    locale.value = lang;
    localStorage.setItem("lang", lang); // чтобы сохранялось при перезагрузке
};

// При загрузке страницы ставим язык из localStorage
const saved = localStorage.getItem("lang");
if (saved) {
    locale.value = saved;
}
</script>

<template>
    <div class="lang-switcher">
        <button type="button" :class="{ active: locale === 'ru' }" @click="changeLang('ru')">
            RU
        </button>

        <button type="button" :class="{ active: locale === 'kz' }" @click="changeLang('kz')">
            KZ
        </button>
    </div>
</template>

<style scoped lang="scss">
.lang-switcher {
    display: flex;
    gap: 8px;
    border-radius: 15px;
    padding: 10px;
    background-color: rgba(248, 248, 248, 1);

    button {
   
        background: transparent;
        cursor: pointer;
        border-radius: 8px;
        font-size: 14px;
        transition: 0.2s;
        color: rgba(116, 116, 116, 1);
        border: none;
        @include font_family(400);
        width: 32px;
        height: 32px;

        &.active {
            background: $red;
            color: white;

        }

        &:hover {
            opacity: 0.8;
        }
    }
}
</style>
