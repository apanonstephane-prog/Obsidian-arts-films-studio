import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  noPadding?: boolean;
}

export function Section({ children, className, id, dark, noPadding }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        !noPadding && "py-20 md:py-28",
        dark && "bg-[var(--obsidian-dark)]",
        className
      )}
    >
      {children}
    </section>
  );
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export function Container({ children, className, narrow }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        narrow ? "max-w-4xl" : "max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
}

interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ tag, title, subtitle, centered, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
      {tag && (
        <div className={cn("mb-4", centered && "flex justify-center")}>
          <span className="tag">{tag}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--obsidian-white)] leading-tight mb-4">
        {title}
      </h2>
      {!centered && <div className="accent-line mb-6" />}
      {subtitle && (
        <p className="text-[var(--obsidian-text-muted)] text-lg md:text-xl leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
