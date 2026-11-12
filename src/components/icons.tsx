import type { SVGProps } from "react";

// Minimal 24px stroke icon set (Heroicons-style), inlined so the site has no icon dependency.
const paths = {
  compass: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3.5-12.5-2 5-5 2 2-5 5-2Z",
  spark:
    "M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
  agent:
    "M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm3 5h4v4h-4v-4Z",
  coach:
    "M17 20h5v-1a4 4 0 0 0-6.4-3.2M17 20H7m10 0v-1c0-.7-.1-1.3-.4-1.9M7 20H2v-1a4 4 0 0 1 6.4-3.2M7 20v-1c0-.7.1-1.3.4-1.9m0 0a5 5 0 0 1 9.2 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
  helm: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-12v6m0 6v6M3 12h6m6 0h6M5.6 5.6l4.3 4.3m4.2 4.2 4.3 4.3m0-12.8-4.3 4.3m-4.2 4.2-4.3 4.3",
  shield: "M12 3 4 6v6c0 4.4 3.4 8.3 8 9 4.6-.7 8-4.6 8-9V6l-8-3Zm-3 9 2 2 4-4",
  code: "m8 9-3 3 3 3m8-6 3 3-3 3M13.5 6l-3 12",
  cloud: "M7 18a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.6-1.6A4.5 4.5 0 0 1 17 18H7Z",
  phone:
    "M3 5a2 2 0 0 1 2-2h2.3a1 1 0 0 1 1 .7l1.1 3.4a1 1 0 0 1-.5 1.2l-1.6.8a11 11 0 0 0 5.6 5.6l.8-1.6a1 1 0 0 1 1.2-.5l3.4 1.1a1 1 0 0 1 .7 1V19a2 2 0 0 1-2 2h-1C9.7 21 3 14.3 3 6V5Z",
  mail: "M3 7.5 12 13l9-5.5M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z",
  arrow: "M5 12h14m-6-6 6 6-6 6",
  check: "m5 13 4 4L19 7",
  globe:
    "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0c2.5-2.4 3.8-5.4 3.8-9S14.5 5.4 12 3m0 18c-2.5-2.4-3.8-5.4-3.8-9S9.5 5.4 12 3M3.5 9h17m-17 6h17",
  external: "M14 4h6v6m0-6-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5",
  menu: "M4 7h16M4 12h16M4 17h16",
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d={paths[name]} />
    </svg>
  );
}
