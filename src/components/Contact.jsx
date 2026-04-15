import { useState } from "react";
import { sendContactEmail } from "../lib/contactEmail";

function Contact({ data }) {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleFieldChange = (fieldName) => (event) => {
    setFormValues((prev) => ({
      ...prev,
      [fieldName]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submitStatus === "sending") {
      return;
    }

    const payload = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      message: formValues.message.trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      return;
    }

    setSubmitStatus("sending");

    try {
      await sendContactEmail(payload);
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    }
  };

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
        <form className="mt-8 space-y-4" aria-label="Formulario de contacto" onSubmit={handleSubmit}>
          {data?.form?.fields?.map((field) => (
            <label key={field.name} className="block">
              <span className="mb-1 block font-label text-xs uppercase text-outline">{field.label}</span>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  className="w-full rounded-xl bg-surface-container-low p-3"
                  rows={4}
                  required={field.required}
                  value={formValues[field.name] ?? ""}
                  onChange={handleFieldChange(field.name)}
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  className="w-full rounded-xl bg-surface-container-low p-3"
                  required={field.required}
                  value={formValues[field.name] ?? ""}
                  onChange={handleFieldChange(field.name)}
                />
              )}
            </label>
          ))}
          <button
            type="submit"
            disabled={submitStatus === "sending"}
            className="rounded-xl bg-primary px-4 py-2 font-label text-xs uppercase text-surface disabled:cursor-not-allowed disabled:opacity-70"
          >
            {data?.form?.submitLabel}
          </button>
          {submitStatus === "sending" ? <p role="status">Enviando mensaje...</p> : null}
          {submitStatus === "success" ? <p role="status">Mensaje enviado con éxito.</p> : null}
          {submitStatus === "error" ? <p role="alert">No se pudo enviar el mensaje. Inténtalo de nuevo.</p> : null}
        </form>
      </div>
    </section>
  );
}

export default Contact;
