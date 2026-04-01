import { City } from "./city";
export interface Event {
  title:string;
  id: number;
  city: City[];
  address: string;
  date: string; // '2025-09-12' или '12.09.2025' — важно
  time: string;
  type_event?: string;
  url: string;
  notion?: string;
  image: string;
}
