import MetaLabel from "./ui/MetaLabel";

function Footer({ data }) {
  return (
    <footer id="footer" aria-label="Pie de página" className="surface-container-lowest px-6 py-8" role="contentinfo">
      <div className="mx-auto max-w-7xl">
        <MetaLabel as="p" className="text-outline">
          {data?.copyright}
        </MetaLabel>
      </div>
    </footer>
  );
}

export default Footer;
