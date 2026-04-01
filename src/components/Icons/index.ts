import InstIcon from "./InstIcon.vue";
import InstSub from "./InstSub.vue";
import ThreadsIcon from "./ThreadsIcon.vue";
import ThreadsSub from "./ThreadsSub.vue";
import YoutubeIcon from "./YoutubeIcon.vue";
import YtSub from "./YtSub.vue";
import CalendarIcon from "./CalendarIcon.vue";
import LineIcon from "./LineIcon.vue";
import CardIcon from "./CardIcon.vue";
import ContactTg from "./ContactTg.vue";
import ContactWpp from "./ContactWpp.vue";
export const icons = {
  threads: ThreadsIcon,
  youtube: YoutubeIcon,
  inst: InstIcon,
  threads_2: ThreadsSub,
  youtube_2: YtSub,
  inst_2: InstSub,
  calendar: CalendarIcon,
  line_mode: LineIcon,
  card_mode: CardIcon,
  con_telega: ContactTg,
  con_wpp: ContactWpp,
} as const;

export type IconName = keyof typeof icons;
export type IconComponent = (typeof icons)[IconName];
export type IconProps = {
  name: IconName | (string & {});
  size?: string;
  color?: string;
};
