import type { Event } from "@/types/event";

export const events: Event[] = [
  {
    id: 1,
    title: "Қазақша импровизациялық кеше",
    // type_event: "Стендап",
    date: "2026-04-02",
    time: "21:30",
    city: [{ id: 1, title: "Алматы" }],
    address: "ул. Кабанбай Батыра, 71",
    image: new URL("@/assets/images/f1.png", import.meta.url).href,
    url: "https://onvibe.me/kk/event/963",
  },
];
