function CardShell({
  as: Tag = "article",
  tone = "base",
  borderStyle = "ghost",
  ghostOutline = false,
  richness = "soft",
  className = "",
  children,
  ...rest
}) {
  const toneClass =
    tone === "high"
      ? "bg-surface-container-high tonal-layer-2"
      : "surface-card tonal-layer-1";
  const borderClass =
    borderStyle === "accent"
      ? "card-ghost-edge-accent"
      : borderStyle === "emphasis"
        ? "card-ghost-edge-strong"
        : "card-ghost-edge";
  const ghostOutlineClass = ghostOutline
    ? "outline outline-1 outline-outline-variant/20"
    : "outline-none";
  const richnessClass =
    richness === "nested"
      ? "shadow-[0_14px_34px_rgba(0,0,0,0.28)]"
      : "shadow-[0_10px_26px_rgba(0,0,0,0.2)]";

  return (
    <Tag
      className={`${toneClass} ${borderClass} ${ghostOutlineClass} ${richnessClass} rounded-2xl p-5 md:p-6 ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default CardShell;
