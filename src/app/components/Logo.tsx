import { LayoutGrid } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type Props = { className?: string };

export function Logo({ className }: Props) {
  return (
    <Link
      href="/"
      className={cn(
        "text-ink focus-visible:ring-ring/50 inline-flex items-center gap-2.5 rounded-lg outline-none focus-visible:ring-3",
        className,
      )}
    >
      <span className="bg-brand text-on-deep flex size-8 items-center justify-center rounded-[10px]">
        <LayoutGrid aria-hidden className="size-[18px]" strokeWidth={2} />
      </span>
      <span className="text-lg font-bold tracking-[-0.02em]">SIGEM</span>
    </Link>
  );
}
