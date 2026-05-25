const toneClasses = {
  base: "surface-base",
  section: "surface-section",
  elevated: "bg-surface-container-low",
};

function SectionShell({
  id,
  title,
  headingLevel = 2,
  labelledBy,
  tone = "section",
  className = "",
  containerClassName = "",
  style,
  children,
}) {
  const safeId = id || "section";
  const headingId = `${safeId}-heading`;
  const HeadingTag = `h${headingLevel}`;

  return (
    <section
      id={safeId}
      aria-labelledby={labelledBy || (title ? headingId : undefined)}
      className={`${toneClasses[tone] ?? toneClasses.section} px-6 py-20 ${className}`.trim()}
      style={style}
    >
      <div className={`mx-auto max-w-7xl ${containerClassName}`.trim()}>
        {title ? <HeadingTag id={headingId} className="text-3xl font-headline font-semibold md:text-4xl">{title}</HeadingTag> : null}
        {children}
      </div>
    </section>
  );
}

export default SectionShell;
