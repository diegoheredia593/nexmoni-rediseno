"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type FlowButtonProps = {
  text?: string;
  href?: string;
  variant?: "default" | "dark" | "accent";
  block?: boolean;
  className?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
};

export function FlowButton({
  text = "Modern Button",
  href,
  variant = "default",
  block = false,
  className,
  target,
  rel,
  type = "button",
}: FlowButtonProps) {
  const content = (
    <>
      <ArrowRight className="absolute left-[-25%] z-[9] h-4 w-4 stroke-current transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:left-4" />
      <span className="relative z-[1] -translate-x-3 transition-all duration-[800ms] ease-out group-hover:translate-x-3">
        {text}
      </span>
      <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--flow-fill)] opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:h-[220px] group-hover:w-[220px] group-hover:opacity-100" />
      <ArrowRight className="absolute right-4 z-[9] h-4 w-4 stroke-current transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:right-[-25%]" />
    </>
  );
  const classes = cn(
    "flow-button group relative flex cursor-pointer items-center justify-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] border-[var(--flow-border)] bg-transparent px-8 py-3 text-sm font-semibold text-[var(--flow-fg)] transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:rounded-[12px] hover:border-transparent hover:text-[var(--flow-hover)] active:scale-[0.95]",
    variant === "dark" && "flow-button--dark",
    variant === "accent" && "flow-button--accent",
    block && "w-full",
    className,
  );

  if (href?.startsWith("/")) return <Link href={href} className={classes}>{content}</Link>;
  if (href) return <a href={href} className={classes} target={target} rel={rel}>{content}</a>;
  return <button type={type} className={classes}>{content}</button>;
}
