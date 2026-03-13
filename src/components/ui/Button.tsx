"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  onClick,
  type = "button",
  disabled,
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded-lg cursor-pointer select-none transition-all duration-200 whitespace-nowrap";

  const variants = {
    primary:
      "bg-[var(--obsidian-accent)] text-[var(--obsidian-black)] hover:bg-[var(--obsidian-accent-hover)] shadow-lg shadow-[rgba(200,169,110,0.15)] hover:shadow-[rgba(200,169,110,0.25)]",
    secondary:
      "bg-[var(--obsidian-muted)] text-[var(--obsidian-text)] hover:bg-[var(--obsidian-border)] border border-[var(--obsidian-border)]",
    ghost:
      "bg-transparent text-[var(--obsidian-text-muted)] hover:text-[var(--obsidian-text)] hover:bg-[var(--obsidian-card)]",
    outline:
      "bg-transparent text-[var(--obsidian-accent)] border border-[var(--obsidian-accent)] hover:bg-[var(--obsidian-accent-dim)]",
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4",
  };

  const disabledClass = disabled ? "opacity-50 pointer-events-none" : "";

  const classes = cn(base, variants[variant], sizes[size], disabledClass, className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
