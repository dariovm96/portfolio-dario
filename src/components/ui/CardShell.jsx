function CardShell({
  as: Tag = "article",
  tone = "base",
  ghostOutline = false,
  className = "",
  children,
  ...rest
}) {
  const toneClass = tone === "high" ? "bg-surface-container-high" : "surface-card";
  const ghostOutlineClass = ghostOutline
    ? "outline outline-1 outline-outline-variant/20"
    : "outline-none";

  return (
    <Tag
      className={`${toneClass} ${ghostOutlineClass} rounded-2xl p-5 shadow-ambient-primary ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default CardShell;
