import { useState } from "react";
import { motion } from "framer-motion";
import { getSectionReveal } from "../motion/variants";
import { useMotionPrefs } from "../motion/useMotionPrefs";
import { sendContactEmail } from "../lib/contactEmail";
import SectionShell from "./ui/SectionShell";
import CardShell from "./ui/CardShell";
import MetaLabel from "./ui/MetaLabel";
import CTAButton from "./ui/CTAButton";

const CHANNEL_ICON_PATHS = {
  email: "M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v8.5A2.75 2.75 0 0 1 18.25 17H5.75A2.75 2.75 0 0 1 3 14.25v-8.5Zm2.02-.48 6.88 5.08a1.75 1.75 0 0 0 2.08 0l6.97-5.13a1 1 0 0 0-.6-.22H5.75c-.26 0-.51.1-.73.27Zm14.98 1.97-5.85 4.31a3.25 3.25 0 0 1-3.86 0L4 6.85v7.4C4 15.22 4.78 16 5.75 16h12.5c.97 0 1.75-.78 1.75-1.75V7.24Z",
  linkedin:
    "M6.75 8.5A1.25 1.25 0 1 0 6.75 6a1.25 1.25 0 0 0 0 2.5ZM5.5 9.5h2.5V18h-2.5V9.5Zm4.5 0h2.39v1.16h.03c.33-.63 1.14-1.3 2.35-1.3 2.52 0 2.98 1.66 2.98 3.82V18h-2.5v-4.2c0-1-.02-2.29-1.39-2.29-1.4 0-1.61 1.09-1.61 2.22V18H10V9.5Z",
  github:
    "M12 2.75A9.25 9.25 0 0 0 9.08 20.8c.46.08.63-.2.63-.45 0-.22-.01-.96-.01-1.73-2.31.43-2.91-.57-3.1-1.1-.11-.28-.58-1.1-.99-1.32-.34-.18-.82-.62-.01-.63.76-.01 1.3.7 1.48.99.87 1.47 2.26 1.06 2.81.81.09-.63.34-1.06.62-1.3-2.05-.23-4.2-1.03-4.2-4.56 0-1.01.36-1.85.95-2.5-.1-.23-.42-1.18.09-2.46 0 0 .78-.25 2.55.95a8.67 8.67 0 0 1 4.64 0c1.77-1.2 2.55-.95 2.55-.95.51 1.28.19 2.23.09 2.46.59.65.95 1.49.95 2.5 0 3.54-2.16 4.33-4.22 4.56.33.29.62.84.62 1.7 0 1.23-.01 2.22-.01 2.53 0 .25.17.54.64.45A9.25 9.25 0 0 0 12 2.75Z",
};

function ChannelIcon({ type }) {
  const iconPath = CHANNEL_ICON_PATHS[type];

  if (!iconPath) {
    return null;
  }

  return (
    <span aria-hidden="true" className="inline-flex h-4 w-4 items-center justify-center text-secondary/80">
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" focusable="false">
        <path d={iconPath} />
      </svg>
    </span>
  );
}

function Contact({ data }) {
  const { reduce } = useMotionPrefs();
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
  const reveal = getSectionReveal(reduce);

  return (
    <SectionShell id="contact" title={data?.heading || "Contacto"} tone="base" containerClassName="max-w-4xl">
      <motion.div {...reveal}>
        <CardShell
        as="div"
        tone="high"
        borderStyle="accent"
        className="mt-6 space-y-6"
        data-testid="contact-card-shell"
        ghostOutline
      >
        <ul className="flex flex-wrap gap-3">
          {channels.map((channel) => (
            <li key={channel.type}>
              <CTAButton
                href={channel.href}
                label={
                  <>
                    <ChannelIcon type={channel.type} />
                    <span>{channel.label}</span>
                  </>
                }
                ariaLabel={`Canal ${channel.label}`}
                variant="ghost"
                className="gap-2 px-4 py-2"
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
                  className="form-field-resting w-full rounded-xl p-3 text-on-surface"
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
                  className="form-field-resting w-full rounded-xl p-3 text-on-surface"
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
            className={`inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 font-label text-xs uppercase tracking-[0.05em] text-surface shadow-ambient-primary transition-colors hover:bg-primary/90 hover:shadow-[0_0_28px_rgba(107,255,143,0.28)] disabled:cursor-not-allowed disabled:opacity-70 w-full sm:w-auto mx-auto sm:mx-0 block sm:inline-flex ${
              reduce ? "motion-reduce-safe" : ""
            }`.trim()}
          >
            {data?.form?.submitLabel}
          </button>

          {submitStatus === "sending" ? (
            <motion.p
              role="status"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduce ? 0.01 : 0.14 }}
            >
              Enviando mensaje...
            </motion.p>
          ) : null}
          {submitStatus === "success" ? (
            <motion.p
              role="status"
              className="text-primary"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduce ? 0.01 : 0.14 }}
            >
              Mensaje enviado con éxito.
            </motion.p>
          ) : null}
          {submitStatus === "error" ? (
            <motion.p
              role="alert"
              className="text-secondary"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduce ? 0.01 : 0.14 }}
            >
              No se pudo enviar el mensaje. Inténtalo de nuevo.
            </motion.p>
          ) : null}
        </form>

        <p data-testid="contact-location-label" className="text-center text-sm text-on-surface-variant">
          📍 {data?.location || "Valparaíso, Chile"}
        </p>
        </CardShell>
      </motion.div>
    </SectionShell>
  );
}

export default Contact;
