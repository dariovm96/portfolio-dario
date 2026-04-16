import { useState } from "react";
import { sendContactEmail } from "../lib/contactEmail";
import SectionShell from "./ui/SectionShell";
import CardShell from "./ui/CardShell";
import MetaLabel from "./ui/MetaLabel";
import CTAButton from "./ui/CTAButton";

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

  const channels = Array.isArray(data?.channels) ? data.channels : [];
  const fields = Array.isArray(data?.form?.fields) ? data.form.fields : [];

  return (
    <SectionShell id="contact" title={data?.heading || "Contacto"} tone="base" containerClassName="max-w-4xl">
      <CardShell as="div" tone="high" className="mt-6 space-y-6" ghostOutline>
        <ul className="flex flex-wrap gap-3">
          {channels.map((channel) => (
            <li key={channel.type}>
              <CTAButton
                href={channel.href}
                label={channel.label}
                ariaLabel={`Canal ${channel.label}`}
                variant="ghost"
                className="px-4 py-2"
              />
            </li>
          ))}
        </ul>

        <form className="space-y-4" aria-label="Formulario de contacto" onSubmit={handleSubmit}>
          {fields.map((field) => (
            <label key={field.name} htmlFor={`contact-${field.name}`} className="block">
              <MetaLabel as="span" className="mb-1 block text-outline">
                {field.label}
              </MetaLabel>
              {field.type === "textarea" ? (
                <textarea
                  id={`contact-${field.name}`}
                  name={field.name}
                  aria-label={field.label}
                  className="w-full rounded-xl bg-surface-container-low p-3 text-on-surface"
                  rows={4}
                  required={field.required}
                  value={formValues[field.name] ?? ""}
                  onChange={handleFieldChange(field.name)}
                />
              ) : (
                <input
                  id={`contact-${field.name}`}
                  type={field.type}
                  name={field.name}
                  aria-label={field.label}
                  className="w-full rounded-xl bg-surface-container-low p-3 text-on-surface"
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
            aria-label={data?.form?.submitLabel}
            className="rounded-xl bg-primary px-4 py-2 font-label text-xs uppercase text-surface disabled:cursor-not-allowed disabled:opacity-70"
          >
            {data?.form?.submitLabel}
          </button>

          {submitStatus === "sending" ? <p role="status">Enviando mensaje...</p> : null}
          {submitStatus === "success" ? <p role="status">Mensaje enviado con éxito.</p> : null}
          {submitStatus === "error" ? <p role="alert">No se pudo enviar el mensaje. Inténtalo de nuevo.</p> : null}
        </form>
      </CardShell>
    </SectionShell>
  );
}

export default Contact;
