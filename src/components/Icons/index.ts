import InstIcon from "./InstIcon.vue";
import InstSub from "./InstSub.vue";
import ThreadsIcon from "./ThreadsIcon.vue";
import ThreadsSub from "./ThreadsSub.vue";
import YoutubeIcon from "./YoutubeIcon.vue";
import YtSub from "./YtSub.vue";

export const icons = {
  threads: ThreadsIcon,
  youtube: YoutubeIcon,
  inst: InstIcon,
  threads_2: ThreadsSub,
  youtube_2: YtSub,
  inst_2:InstSub
} as const;

export type IconName = keyof typeof icons;
export type IconComponent = (typeof icons)[IconName];
export type IconProps = {
  name: IconName | (string & {});
  size?: string;
  color?: string;
};
