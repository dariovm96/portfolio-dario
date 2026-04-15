function Footer({ data }) {
  return (
    <footer id="footer" aria-label="Pie de página" className="surface-container-lowest px-6 py-8">
      <div className="mx-auto max-w-6xl">
        <p className="font-label text-xs uppercase text-outline">{data?.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
