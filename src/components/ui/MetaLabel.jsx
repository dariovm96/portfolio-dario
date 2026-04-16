function MetaLabel({ as: Tag = "span", className = "", children }) {
  return (
    <Tag className={`font-label text-xs uppercase tracking-[0.05em] text-on-surface-variant ${className}`.trim()}>
      {children}
    </Tag>
  );
}

export default MetaLabel;
