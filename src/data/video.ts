import type { Link } from "@/types/video";

const rawLinks: Omit<Link, "poster">[] = [
  {
    url: "https://youtu.be/vVOaQQrZAE8",
    type: "solo",
    title: "Сольный концерт",
    lang: "ru",
  },
  {
    url: "https://youtu.be/lh3cMBXghhw",
    type: "show",
    title: "Шоу",
    lang: "kz",
  },
  {
    url: "https://youtu.be/Qm5xQRCyQxc",
    type: "show",
    title: "Шоу",
    lang: "kz",
  },
  {
    url: "https://youtu.be/_UXUq7Z8v8w",
    type: "show",
    title: "Шоу",
    lang: "kz",
  },
  {
    url: "https://youtu.be/maM5h8rXnCs",
    type: "show",
    title: "Шоу",
    lang: "kz",
  },
  {
    url: "https://youtu.be/iDe8b9H5HPs",
    type: "show",
    title: "Шоу",
    lang: "kz",
  },
  {
    url: "https://youtu.be/JJa6xWfSZrE",
    type: "standup",
    title: "Стендап",
    lang: "kz",
  },
  {
    url: "https://youtu.be/xI6I3nF1jCs",
    type: "standup",
    title: "Стендап",
    lang: "ru",
  },
  {
    url: "https://youtu.be/5sO7LA4HAqo",
    type: "standup",
    title: "Стендап",
    lang: "ru",
  },
  {
    url: "https://youtu.be/jxYHlUDS-is",
    type: "standup",
    title: "Стендап",
    lang: "ru",
  },

  {
    url: "  https://youtu.be/SVcw4K0OgTg",
    type: "standup",
    title: "Стендап",
    lang: "kz",
  },

  {
    url: "https://youtu.be/jmX6jhWSvJg",
    type: "show",
    title: "Шоу",
    lang: "kz",
  },
  {
    url: "https://youtu.be/8xPl8XqQb5w",
    type: "show",
    title: "Шоу",
    lang: "kz",
  },
  {
    url: "https://youtu.be/UHw-xkWjI5I",
    type: "show",
    title: "Шоу",
    lang: "ru",
  },
  {
    url: "https://youtu.be/fMDGidTzP68",
    type: "show",
    title: "Шоу",
    lang: "kz",
  },
  {
    url: "https://youtu.be/n11oy11Yqd8",
    type: "interview",
    title: "подкасты",
    lang: "kz",
  },
  {
    url: "https://youtu.be/O_acPar1tgM",
    type: "interview",
    title: "подкасты",
    lang: "kz",
  },
  {
    url: "https://youtu.be/Rqm_-tmWlaA",
    type: "interview",
    title: "подкасты",
    lang: "ru",
  },
  {
    url: "https://youtu.be/vCdBSZsg8EQ",
    type: "interview",
    title: "подкасты",
    lang: "kz",
  },
  {
    url: "https://youtu.be/iYQ_xNHcLxY",
    type: "show",
    title: "Шоу",
    lang: "ru",
  },
];

function getYouTubeId(url: string): string | undefined {
  // Поддерживаем короткие и обычные ссылки
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/,
  );
  return match?.[1]; // undefined если нет совпадения
}

// Преобразуем rawLinks в полноценные ссылки с embed и poster
export const videoLinks: Link[] = rawLinks.map((link) => {
  const id = getYouTubeId(link.url);
  return {
    ...link,
    url: id ? `https://www.youtube.com/watch?v=${id}` : link.url,
    embed: id ? `https://www.youtube.com/embed/${id}` : undefined,
    poster: id
      ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
      : undefined,
  };
});
