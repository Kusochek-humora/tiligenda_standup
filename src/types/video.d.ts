// types/link.ts
export type LinkType = "show" | "standup" | "arzan" | "interview" | "solo";

export interface Link {
  id?: number;
  title?: string;
  url: string;
  type: LinkType;
  date?: string;
  image?: string;
  poster?: string;
  embed?: string;
  lang?:string; // опционально, дата события
}