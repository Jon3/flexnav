import type { BenefitIcon } from "@/types";

const paths: Record<BenefitIcon, string> = {
  heart:
    "M12 21s-6.716-4.35-9.428-8.164C.94 10.36 1.24 6.84 4.03 5.02c2.2-1.44 4.86-.86 6.47.99L12 7.6l1.5-1.59c1.61-1.85 4.27-2.43 6.47-.99 2.79 1.82 3.09 5.34 1.46 7.816C18.716 16.65 12 21 12 21z",
  shield: "M12 3l7 3v5c0 4.5-3 8.25-7 10-4-1.75-7-5.5-7-10V6l7-3z",
  store: "M4 9l1-5h14l1 5M4 9v10h16V9M4 9h16M9 21v-6h6v6",
  people:
    "M9 11a3 3 0 100-6 3 3 0 000 6zM17 11a3 3 0 100-6 3 3 0 000 6zM2 21c0-3.31 3.13-6 7-6s7 2.69 7 6M13 15.5c.87-.32 1.87-.5 3-.5 3.87 0 7 2.69 7 6",
  coin: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v10M9 9.5c0-1.1 1.34-2 3-2s3 .9 3 2-1.34 2-3 2-3 .9-3 2 1.34 2 3 2 3-.9 3-2",
  clock: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3.5 2",
};

export function Icon({ name, className }: { name: BenefitIcon; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
