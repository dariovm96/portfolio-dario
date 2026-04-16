const variantClasses = {
  primary:
    "bg-primary text-surface shadow-ambient-primary hover:bg-primary/90 hover:shadow-[0_0_28px_rgba(107,255,143,0.28)]",
  secondary:
    "bg-surface-container-high text-on-surface ring-1 ring-outline-variant/30 hover:bg-surface-container-highest",
  ghost:
    "bg-transparent text-on-surface card-ghost-edge hover:bg-surface-container-high/45",
};

function CTAButton({ href, label, variant = "primary", ariaLabel, className = "" }) {
  if (!href || !label) {
    return null;
  }

  return (
    <a
      href={href}
      aria-label={ariaLabel ?? label}
      data-cta-variant={variant}
      className={`${variantClasses[variant] ?? variantClasses.primary} inline-flex items-center justify-center rounded-xl px-5 py-3 font-label text-xs uppercase tracking-[0.05em] transition-colors ${className}`.trim()}
    >
      {label}
    </a>
  );
}

export default CTAButton;
