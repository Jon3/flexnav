import type { PropsWithChildren } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  tight?: boolean;
}

export function Section({ id, className = "", tight = false, children }: PropsWithChildren<SectionProps>) {
  return (
    <section id={id} className={`${tight ? "py-10" : "py-16"} ${className}`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6">{children}</div>
    </section>
  );
}
