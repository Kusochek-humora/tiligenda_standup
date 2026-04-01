// utils/youtube.ts
import type { Link, LinkType } from "@/types/video";

export function createYouTubeLink(
  url: string,
  type: LinkType,
  title?: string,
  date?: string,
  lang?: string,
): Link {
  // Получаем ID видео
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  const videoId = match ? match[1] : "";

  // Генерируем poster
  const poster = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : undefined;

  return {
    url,
    type,
    title,
    date,
    poster,
    lang
  };
}
