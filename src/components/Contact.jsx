function Contact({ data }) {
  return (
    <section id="contact" aria-label="Contacto" className="surface-base px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-headline font-semibold">{data?.heading}</h2>
        <ul className="mt-6 flex flex-wrap gap-4 font-label text-xs uppercase text-on-surface-variant">
          {data?.channels?.map((channel) => (
            <li key={channel.type}>
              <a href={channel.href}>{channel.label}</a>
            </li>
          ))}
        </ul>
        <form className="mt-8 space-y-4" aria-label="Formulario de contacto">
          {data?.form?.fields?.map((field) => (
            <label key={field.name} className="block">
              <span className="mb-1 block font-label text-xs uppercase text-outline">{field.label}</span>
              {field.type === "textarea" ? (
                <textarea className="w-full rounded-xl bg-surface-container-low p-3" rows={4} />
              ) : (
                <input type={field.type} className="w-full rounded-xl bg-surface-container-low p-3" />
              )}
            </label>
          ))}
          <button type="button" className="rounded-xl bg-primary px-4 py-2 font-label text-xs uppercase text-surface">
            {data?.form?.submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
