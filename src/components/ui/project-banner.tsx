"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type BannerVariant = "default" | "success" | "warning" | "error";

const VARIANTS: Record<BannerVariant, string> = {
  default: "bg-zinc-100 text-zinc-900 border-zinc-200",
  success: "bg-emerald-100 text-emerald-900 border-emerald-200",
  warning: "bg-amber-100 text-amber-900 border-amber-200",
  error: "bg-rose-100 text-rose-900 border-rose-200",
};

export interface ProjectBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
  icon?: React.ReactNode;
  callToAction?: { label: string; href: string };
  variant?: BannerVariant;
}

export function ProjectBanner({
  label,
  icon,
  callToAction,
  variant = "default",
  className,
  ...props
}: ProjectBannerProps) {
  const external = callToAction?.href?.startsWith("http");
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-3 rounded-full border px-4 py-2 text-sm shadow-sm",
        VARIANTS[variant],
        className,
      )}
      {...props}
    >
      <span className="flex items-center gap-2">
        {icon}
        <span>{label}</span>
      </span>
      {callToAction && (
        <a
          href={callToAction.href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="shrink-0 font-medium underline underline-offset-2 transition-opacity hover:opacity-70"
        >
          {callToAction.label}
        </a>
      )}
    </div>
  );
}
