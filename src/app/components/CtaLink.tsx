import Link from "next/link";
import type { ComponentProps } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = ComponentProps<typeof Link> & {
  variant?: "default" | "outline" | "ghost";
};

// Link com aparência de botão, no tamanho maior usado na landing.
export function CtaLink({ variant = "default", className, ...props }: Props) {
  return (
    <Link
      className={cn(
        buttonVariants({ variant }),
        "h-11 rounded-xl px-5 text-[0.95rem]",
        variant === "outline" && "border-line bg-surface-card text-ink",
        className,
      )}
      {...props}
    />
  );
}
