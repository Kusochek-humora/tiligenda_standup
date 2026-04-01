import { i18n } from "@/i18n";
import { unref } from "vue";

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);

  // берём значение локали как ref
  const lang = unref(i18n.global.locale) as "ru" | "kz";

  const months: Record<"ru" | "kz", string[]> = {
    ru: ["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"],
    kz: ["қаң","ақп","нау","сәу","мам","мау","шіл","там","қыр","қаз","қара","жел"],
  };

  const monthArr = months[lang] ?? months.ru;

  const day = date.getDate();
  const month = monthArr[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
}