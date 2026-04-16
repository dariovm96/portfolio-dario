const variantClasses = {
  primary:
    "bg-primary text-surface hover:bg-primary/90",
  secondary:
    "bg-surface-container-high text-on-surface hover:bg-surface-container-highest",
  ghost:
    "bg-transparent text-on-surface border border-outline-variant/30 hover:bg-surface-container-high/50",
};

function CTAButton({ href, label, variant = "primary", ariaLabel, className = "" }) {
  if (!href || !label) {
    return null;
  }

  return (
    <a
      href={href}
      aria-label={ariaLabel ?? label}
      className={`${variantClasses[variant] ?? variantClasses.primary} inline-flex items-center justify-center rounded-xl px-5 py-3 font-label text-xs uppercase tracking-[0.05em] transition-colors ${className}`.trim()}
    >
      {label}
    </a>
  );
}

export default CTAButton;
