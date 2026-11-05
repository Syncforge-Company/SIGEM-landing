import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type Props = { className?: string };

export function Logo({ className }: Props) {
  return (
    <Link
      href="/"
      className={cn(
        "focus-visible:ring-ring/50 inline-flex items-center rounded-lg outline-none focus-visible:ring-3",
        className,
      )}
    >
      <Image
        src="/logos/sigem-logo.svg"
        alt="SIGEM by SyncForge"
        width={1414}
        height={330}
        priority
        unoptimized
        className="h-8 w-auto"
      />
    </Link>
  );
}
